(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var a = n(6483),
                    r = n.n(a),
                    u = n(7727),
                    s = n(6179),
                    o = n.n(s),
                    i = n(6880),
                    l = n(2106);
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
                    onMouseUp: b,
                    onMouseLeave: h,
                    onClick: f,
                }) => {
                    const v = (0, s.useRef)(null),
                        C = (0, s.useState)(n),
                        A = C[0],
                        w = C[1],
                        F = (0, s.useState)(!1),
                        k = F[0],
                        B = F[1],
                        D = (0, s.useState)(!1),
                        y = D[0],
                        S = D[1],
                        I = (0, s.useCallback)(() => {
                            c || (v.current && (v.current.focus(), w(!0)));
                        }, [c]),
                        T = (0, s.useCallback)(
                            (e) => {
                                A && null !== v.current && !v.current.contains(e.target) && w(!1);
                            },
                            [A],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                c || (f && f(e));
                            },
                            [c, f],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                c || (null !== m && (0, u.G)(m), g && g(e), S(!0));
                            },
                            [c, m, g],
                        ),
                        x = (0, s.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                c || (b && b(e), B(!1));
                            },
                            [c, b],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, u.G)(_), p && p(e), n && I(), B(!0));
                            },
                            [c, _, p, I, n],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                c || (h && h(e), B(!1));
                            },
                            [c, h],
                        ),
                        H = r()(
                            i.Z.base,
                            i.Z[`base__${a}`],
                            {
                                [i.Z.base__disabled]: c,
                                [i.Z[`base__${t}`]]: t,
                                [i.Z.base__focus]: A,
                                [i.Z.base__highlightActive]: k,
                                [i.Z.base__firstHover]: y,
                            },
                            d,
                        ),
                        W = r()(i.Z.state, i.Z.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, s.useEffect)(() => {
                            w(n);
                        }, [n]),
                        o().createElement(
                            'div',
                            {
                                ref: v,
                                className: H,
                                onMouseEnter: L,
                                onMouseMove: x,
                                onMouseUp: M,
                                onMouseDown: O,
                                onMouseLeave: P,
                                onClick: N,
                            },
                            a !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: i.Z.back }),
                                    o().createElement('span', { className: i.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: W },
                                o().createElement('span', { className: i.Z.stateDisabled }),
                                o().createElement('span', { className: i.Z.stateHighlightHover }),
                                o().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = (0, s.memo)(c);
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(r || (r = {}));
            },
            9987: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => c });
                var a = n(6483),
                    r = n.n(a),
                    u = n(6179),
                    s = n.n(u),
                    o = n(8055);
                const i = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
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
                        })(e, i);
                    const g = a ? null : n,
                        E = 'string' == typeof g;
                    if ((g && !E && g < 0) || 0 === g) return null;
                    const p = g && !E && g > d,
                        b = r()(
                            o.Z.base,
                            o.Z[`base__${t}`],
                            u && o.Z.base__animated,
                            c && o.Z.base__hidden,
                            !g && o.Z.base__pattern,
                            a && o.Z.base__empty,
                            m,
                        );
                    return s().createElement(
                        'div',
                        l({ className: b }, _),
                        s().createElement('div', { className: o.Z.bg }),
                        s().createElement('div', { className: o.Z.pattern }),
                        s().createElement(
                            'div',
                            { className: r()(o.Z.value, E && o.Z.value__text) },
                            p ? d : g,
                            p && s().createElement('span', { className: o.Z.plus }, '+'),
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
                const o = a.O.client.getSize('rem'),
                    i = o.width,
                    l = o.height,
                    c = Object.assign({ width: i, height: l }, (0, s.T)(i, l, u.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(3138),
                    r = n(6536),
                    u = n(6179),
                    s = n.n(u),
                    o = n(3495),
                    i = n(1043),
                    l = n(5262);
                const c = ({ children: e }) => {
                    const t = (0, u.useContext)(o.Y),
                        n = (0, u.useState)(t),
                        c = n[0],
                        d = n[1],
                        m = (0, u.useCallback)((e, t) => {
                            const n = a.O.view.pxToRem(e),
                                r = a.O.view.pxToRem(t);
                            d(Object.assign({ width: n, height: r }, (0, l.T)(n, r, i.j)));
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
                    return s().createElement(o.Y.Provider, { value: g }, e);
                };
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(6179),
                    r = n(7382),
                    u = n(3495);
                const s = ['children'];
                const o = (e) => {
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
                    const o = (0, a.useContext)(u.Y),
                        i = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        d = o.small,
                        m = o.extraSmall,
                        _ = o.extraLargeWidth,
                        g = o.largeWidth,
                        E = o.mediumWidth,
                        p = o.smallWidth,
                        b = o.extraSmallWidth,
                        h = o.extraLargeHeight,
                        f = o.largeHeight,
                        v = o.mediumHeight,
                        C = o.smallHeight,
                        A = o.extraSmallHeight,
                        w = { extraLarge: h, large: f, medium: v, small: C, extraSmall: A };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && i) return t;
                        if (n.large && l) return t;
                        if (n.medium && c) return t;
                        if (n.small && d) return t;
                        if (n.extraSmall && m) return t;
                    } else {
                        if (n.extraLargeWidth && _) return (0, r.H)(t, n, w);
                        if (n.largeWidth && g) return (0, r.H)(t, n, w);
                        if (n.mediumWidth && E) return (0, r.H)(t, n, w);
                        if (n.smallWidth && p) return (0, r.H)(t, n, w);
                        if (n.extraSmallWidth && b) return (0, r.H)(t, n, w);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && h) return t;
                            if (n.largeHeight && f) return t;
                            if (n.mediumHeight && v) return t;
                            if (n.smallHeight && C) return t;
                            if (n.extraSmallHeight && A) return t;
                        }
                    }
                    return null;
                };
                o.defaultProps = {
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
                (0, a.memo)(o);
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
                    o = n(1856),
                    i = n(3138),
                    l = n(2039),
                    c = n(5099),
                    d = n(7727),
                    m = n(9916),
                    _ = n(6179),
                    g = n.n(_),
                    E = n(4769);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(a || (a = {}));
                const p = ['__left', '__right', '__top', '__bottom'];
                (0, _.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: a = {} }, r) => {
                        const b = (0, _.useRef)(null),
                            h = (0, _.useRef)(null),
                            f = (0, _.useRef)(null),
                            v = (0, _.useState)(window.decorator && window.decorator.directionType),
                            C = v[0],
                            A = v[1],
                            w = (0, _.useCallback)(() => {
                                d.$.playClick(), i.O.view.sendEvent.close();
                            }, []),
                            F = (0, _.useCallback)(() => {
                                d.$.playHighlight();
                            }, []),
                            k = u()(E.Z.arrow, E.Z[`arrow${p[C]}`]);
                        (0, l.b)(
                            () => (
                                i.O.client.events.mouse.enableOutside(),
                                i.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (n ? n() : i.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const B = (0, _.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === b.current || t === f.current) return;
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
                                [b, f, n],
                            ),
                            D = (0, _.useCallback)(
                                () => (
                                    i.O.view.freezeTextureBeforeResize(),
                                    (0, o.v)(() => {
                                        if (h.current) {
                                            const e = h.current.scrollWidth,
                                                t = h.current.scrollHeight;
                                            i.O.view.resize(e, t), A(window.decorator.directionType);
                                        }
                                    })
                                ),
                                [],
                            );
                        return (
                            (0, _.useImperativeHandle)(r, () => ({ updateSize: D })),
                            (0, l.b)(() => {
                                i.O.view.setInputPaddingsRem(58);
                            }),
                            (0, _.useEffect)(() => {
                                document.addEventListener('mousedown', B, { capture: !0 });
                                const e = (0, c.B)((0, m.Eu)());
                                return (
                                    !t && e.promise.then(() => D()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', B);
                                    }
                                );
                            }, [D, B, t]),
                            g().createElement(
                                'div',
                                { className: E.Z.base, ref: h },
                                g().createElement(
                                    'div',
                                    { className: E.Z.decorator },
                                    g().createElement(
                                        'div',
                                        { className: E.Z.content, ref: b },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            g().createElement(
                                                s.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                g().createElement('div', {
                                                    className: E.Z.closeBtn,
                                                    onClick: w,
                                                    onMouseEnter: F,
                                                    ref: f,
                                                }),
                                            ),
                                    ),
                                    g().createElement('div', { className: k, style: a.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => l });
                var a = n(1037),
                    r = n(9916),
                    u = n(6179),
                    s = n.n(u);
                const o = [
                    'contentId',
                    'decoratorId',
                    'direction',
                    'targetId',
                    'args',
                    'onClick',
                    'children',
                    'isEnabled',
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
                const l = (e) => {
                    let t = e.contentId,
                        n = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? a.IC.Top : l,
                        d = e.targetId,
                        m = e.args,
                        _ = e.onClick,
                        g = e.children,
                        E = e.isEnabled,
                        p = void 0 === E || E,
                        b = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, o);
                    const h = (0, u.useRef)(null),
                        f = (0, u.useCallback)(() => {
                            if ((0, r.wU)()) return (0, r.SW)();
                            h.current && (0, r.P3)(t, c, h.current, n, d, m);
                        }, [t, c, m, n, d]);
                    return s().createElement(
                        'div',
                        i(
                            {
                                ref: h,
                                onClick:
                                    ((v = g.props.onClick),
                                    (e) => {
                                        p && (f(), _ && _(e), v && v(e));
                                    }),
                            },
                            b,
                        ),
                        g,
                    );
                    var v;
                };
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => i });
                var a = n(6179),
                    r = n.n(a),
                    u = n(2056);
                const s = ['children'];
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
                    return r().createElement(
                        u.u,
                        o(
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
                n.d(t, { l: () => l });
                var a = n(6179),
                    r = n.n(a),
                    u = n(7078),
                    s = n(6373),
                    o = n(2056);
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
                const l = ({ children: e, tooltipArgs: t, className: n }) => {
                    if (!t) return e;
                    const a = r().createElement('div', { className: n }, e);
                    if (t.header || t.body) return r().createElement(s.i, t, a);
                    const l = t.contentId;
                    return l ? r().createElement(o.u, i({}, t, { contentId: l }), a) : r().createElement(u.t, t, a);
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => l });
                var a = n(2056),
                    r = n(6179),
                    u = n.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            n = e.body,
                            l = e.header,
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
                            const e = Object.assign({}, m, { body: n, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, n, l, c, m]);
                        return u().createElement(
                            a.u,
                            o(
                                {
                                    contentId:
                                        ((E = null == m ? void 0 : m.hasHtmlContent),
                                        E ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
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
                n.d(t, { u: () => l });
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
                function o(e) {
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
                const i = (e, t, n = {}, a = 0) => {
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
                    l = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onClick,
                            _ = e.ignoreShowDelay,
                            g = void 0 !== _ && _,
                            E = e.ignoreMouseClick,
                            p = void 0 !== E && E,
                            b = e.decoratorId,
                            h = void 0 === b ? 0 : b,
                            f = e.isEnabled,
                            v = void 0 === f || f,
                            C = e.targetId,
                            A = void 0 === C ? 0 : C,
                            w = e.onShow,
                            F = e.onHide,
                            k = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, s);
                        const B = (0, u.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, u.useMemo)(() => A || (0, a.F)().resId, [A]),
                            y = (0, u.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (i(n, h, { isMouseEvent: !0, on: !0, arguments: o(r) }, D),
                                    w && w(),
                                    (B.current.isVisible = !0));
                            }, [n, h, r, D, w]),
                            S = (0, u.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        i(n, h, { on: !1 }, D),
                                        B.current.isVisible && F && F(),
                                        (B.current.isVisible = !1);
                                }
                            }, [n, h, D, F]),
                            I = (0, u.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, u.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', I, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', I, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, u.useEffect)(() => {
                                !1 === v && S();
                            }, [v, S]),
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return v
                            ? (0, u.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(y, g ? 100 : 400)),
                                                      l && l(e),
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
                                      k,
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
            1856: (e, t, n) => {
                'use strict';
                n.d(t, { v: () => a });
                const a = (e) => {
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
            8246: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => o });
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
                function o({ initializer: e = !0, rootId: t = 0, getRoot: n = s, context: u = 'model' } = {}) {
                    const o = new Map();
                    function i(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = o.get(t);
                                void 0 !== n && n(e);
                            });
                        });
                    });
                    const l = (e) => {
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
                                i = a.O.view.addModelObserver(s, t, !0);
                            return o.set(i, n), e && n(l(r)), i;
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const n = l(t);
                            return (...t) => {
                                n(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, n = r(o.keys()); !(e = n()).done; ) {
                                i(e.value, t);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, n) => {
                'use strict';
                n.d(t, { q: () => i });
                var a = n(4598),
                    r = n(9174),
                    u = n(6179),
                    s = n.n(u),
                    o = n(8246);
                const i = () => (e, t) => {
                    const n = (0, u.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, u.useRef)([]),
                                _ = (n, u, s) => {
                                    var i;
                                    const l = o.U(u),
                                        c =
                                            'real' === n
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
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
                                                            o = s.reduce(
                                                                (e, [t, n]) => ((e[n] = r.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        s.forEach(([t, n]) => {
                                                                            o[n].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            o
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
                                E = (0, u.useState)(i),
                                p = E[0],
                                b = E[1],
                                h = (0, u.useState)(() => _(i, l, d)),
                                f = h[0],
                                v = h[1];
                            return (
                                (0, u.useEffect)(() => {
                                    g.current ? v(_(p, l, d)) : (g.current = !0);
                                }, [d, p, l]),
                                (0, u.useEffect)(() => {
                                    b(i);
                                }, [i]),
                                (0, u.useEffect)(
                                    () => () => {
                                        f.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [f],
                                ),
                                s().createElement(n.Provider, { value: f }, c)
                            );
                        },
                        () => (0, u.useContext)(n),
                    ];
                };
            },
            527: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, { mouse: () => c, off: () => i, on: () => o, onResize: () => u, onScaleUpdated: () => s });
                var a = n(2472),
                    r = n(1176);
                const u = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
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
                                        s = l[t]((e) => n([e, 'outside']));
                                    function o(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(u, o),
                                        a(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(u, o),
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
                        getMouseGlobalPosition: () => u,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    });
                var a = n(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
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
                n.d(t, { O: () => r });
                var a = n(5959);
                const r = { view: n(7641), client: a };
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
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => k,
                        events: () => u.U,
                        extraSize: () => B,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => F,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => A,
                        isFocused: () => v,
                        pxToRem: () => b,
                        remToPx: () => h,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => D,
                    });
                var a = n(3722),
                    r = n(6112),
                    u = n(6538),
                    s = n(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, n, a = 1) {
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
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function A() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function F() {
                    return viewEnv.getShowingStatus();
                }
                const k = Object.keys(r.W).reduce(
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
                    D = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : u.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => l });
                const a = ['args'];
                const r = 2,
                    u = 16,
                    s = 32,
                    o = 64,
                    i = (e, t) => {
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
                    l = {
                        close(e) {
                            i('popover' === e ? r : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(u, { isMouseEvent: !0, on: e });
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
            6536: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(6179);
                const r = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            5415: (e, t, n) => {
                'use strict';
                n.d(t, { Aq: () => i, GS: () => l, cJ: () => s, fd: () => o });
                var a = n(6179),
                    r = n(7739),
                    u = n(1043);
                let s, o, i;
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
                    })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = u.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = u.j.small.height)] = 'Small'),
                            (e[(e.Medium = u.j.medium.height)] = 'Medium'),
                            (e[(e.Large = u.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = u.j.extraLarge.height)] = 'ExtraLarge');
                    })(i || (i = {}));
                const l = () => {
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
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return o.ExtraLarge;
                                case e.largeWidth:
                                    return o.Large;
                                case e.mediumWidth:
                                    return o.Medium;
                                case e.smallWidth:
                                    return o.Small;
                                case e.extraSmallWidth:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return i.ExtraLarge;
                                case e.largeHeight:
                                    return i.Large;
                                case e.mediumHeight:
                                    return i.Medium;
                                case e.smallHeight:
                                    return i.Small;
                                case e.extraSmallHeight:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: u, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: n };
                };
            },
            2039: (e, t, n) => {
                'use strict';
                n.d(t, { b: () => r });
                var a = n(6179);
                const r = (e) => {
                    (0, a.useEffect)(e, []);
                };
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
                n.d(t, { U2: () => a, UI: () => u, sE: () => s });
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
                function s(e, t) {
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
                    engine.call('PlaySound', e);
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
                n.d(t, { BN: () => s, Eg: () => l, WU: () => r, dL: () => c, e: () => o, uF: () => u, z4: () => i });
                n(1281);
                let a;
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function u(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function s(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                const i = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    c =
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
                        (e) => r(R.strings.common.percentValue(), { value: e }));
            },
            5139: (e, t, n) => {
                'use strict';
                function a(e, t, n, a) {
                    let r,
                        u = !1,
                        s = 0;
                    function o() {
                        r && clearTimeout(r);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - s;
                        function d() {
                            (s = Date.now()), n.apply(l, i);
                        }
                        u ||
                            (a && !r && d(),
                            o(),
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
                        (i.cancel = function () {
                            o(), (u = !0);
                        }),
                        i
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
                    B3: () => i,
                    Z5: () => s.Z5,
                    B0: () => o,
                    c9: () => f,
                    wU: () => w,
                    ry: () => b,
                    Eu: () => h,
                    SW: () => C,
                    P3: () => A,
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
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    _ = n(3138);
                const g = ['args'];
                function E(e, t, n, a, r, u, s) {
                    try {
                        var o = e[u](s),
                            i = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                            E(u, a, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            E(u, a, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = () =>
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
                    v = () => f(o.CLOSE),
                    C = () => f(o.POP_OVER, { on: !1 }),
                    A = (e, t, n, a, r = R.invalid('resId'), u) => {
                        const s = _.O.view.getViewGlobalPosition(),
                            i = n.getBoundingClientRect(),
                            l = i.x,
                            c = i.y,
                            d = i.width,
                            m = i.height,
                            g = {
                                x: _.O.view.pxToRem(l) + s.x,
                                y: _.O.view.pxToRem(c) + s.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(m),
                            };
                        f(o.POP_OVER, {
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
                    w = () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                    F = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var k = n(7572);
                const B = r.instance,
                    D = {
                        DataTracker: u.Z,
                        ViewModel: k.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => f(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: C,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            f(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: A,
                        addEscapeListener: (e) => {
                            const t = (t) => F(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            F(e, v);
                        },
                        handleViewEvent: f,
                        onBindingsReady: b,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: w,
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
                        ClickOutsideManager: B,
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
            3458: (e, t, n) => {
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
                n.d(t, { AB: () => _, D9: () => a, eX: () => u, sC: () => s, tL: () => r, x3: () => l });
                const a = 'crew',
                    r = 2e3;
                let u, s, o, i, l, c, d, m;
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
                    })(o || (o = {})),
                    (function (e) {
                        e.PremiumTooltip = 'personal_file_view_premium_tooltip';
                    })(i || (i = {})),
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
                    r = n(3458);
                const u = ['action', 'timeLimit'];
                const s = 'metrics',
                    o = () => Date.now(),
                    i = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: r || null,
                    }),
                    l = (e, t) => {
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
                        const n = l(e, t),
                            r = (0, a.useRef)(new Map()),
                            u = (0, a.useRef)(new Map()),
                            s = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    (void 0 !== t && t > 0) || r.current.set(e, o());
                                },
                                [r],
                            ),
                            i = (0, a.useCallback)(() => {
                                r.current.clear(), u.current.clear();
                            }, [r, u]),
                            c = (0, a.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== r.current.get(e) &&
                                        void 0 === u.current.get(e) &&
                                        u.current.set(e, o());
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
                                    const a = o() - n;
                                    r.current.set(e, t + a);
                                },
                                [r, u],
                            ),
                            m = (0, a.useCallback)(
                                (e, t = 0, a, s) => {
                                    const i = r.current.get(e);
                                    if (void 0 === i) return;
                                    void 0 !== u.current.get(e) && d(e), r.current.delete(e);
                                    const l = (o() - i) / 1e3;
                                    l <= t ||
                                        ((s = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(s, l)),
                                        n(e, a, s));
                                },
                                [r, u, n, d],
                            );
                        return [(e) => s(e), (e, t, n, a) => m(e, t, n, a), () => i(), (e) => c(e), (e) => d(e)];
                    },
                    d = (e) => {
                        const t = l(e, s),
                            n = (0, a.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, i(e));
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
                                    o = t[3],
                                    l = t[4],
                                    d = (0, a.useCallback)(
                                        (e) => {
                                            const t = e.action,
                                                n = e.timeLimit,
                                                a = e.logLevel;
                                            r(t, n, a, i(e));
                                        },
                                        [r],
                                    );
                                return [(e) => n(e), (e) => d(e), () => u(), (e) => o(e), (e) => l(e)];
                            })(e),
                            o = n[0],
                            l = n[1],
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
                                onShow: () => o(d || r.Z0),
                                onHide: () => l(Object.assign({ action: d || r.Z0, timeLimit: m || r.sx }, _)),
                            }),
                            [d, m, _, o, l],
                        );
                    };
            },
            4929: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => pe,
                        Bar: () => _e,
                        DefaultScroll: () => Ee,
                        Direction: () => X,
                        defaultSettings: () => Q,
                        useHorizontalScrollApi: () => ee,
                    });
                var r = {};
                n.r(r), n.d(r, { Area: () => xe, Bar: () => Te, Default: () => Le, useVerticalScrollApi: () => be });
                var u = n(7739),
                    s = n(6179),
                    o = n.n(s),
                    i = n(6483),
                    l = n.n(i),
                    c = n(926),
                    d = n.n(c),
                    m = n(5415);
                const _ = ['children', 'className'];
                function g() {
                    return (
                        (g =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        g.apply(this, arguments)
                    );
                }
                const E = {
                        [m.fd.ExtraSmall]: '',
                        [m.fd.Small]: d().SMALL_WIDTH,
                        [m.fd.Medium]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH}`,
                        [m.fd.Large]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH}`,
                        [m.fd.ExtraLarge]:
                            `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH} ${d().EXTRA_LARGE_WIDTH}`,
                    },
                    p = {
                        [m.Aq.ExtraSmall]: '',
                        [m.Aq.Small]: d().SMALL_HEIGHT,
                        [m.Aq.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [m.Aq.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [m.Aq.ExtraLarge]:
                            `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
                    },
                    b = {
                        [m.cJ.ExtraSmall]: '',
                        [m.cJ.Small]: d().SMALL,
                        [m.cJ.Medium]: `${d().SMALL} ${d().MEDIUM}`,
                        [m.cJ.Large]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE}`,
                        [m.cJ.ExtraLarge]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE} ${d().EXTRA_LARGE}`,
                    },
                    h = (e) => {
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
                            })(e, _);
                        const r = (0, m.GS)(),
                            u = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return o().createElement('div', g({ className: l()(n, E[u], p[s], b[i]) }, a), t);
                    },
                    f = ['children'];
                const v = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, f);
                    return o().createElement(u.ZN, null, o().createElement(h, n, t));
                };
                var C = n(493),
                    A = n.n(C),
                    w = n(1037),
                    F = n(3138),
                    k = n(5521),
                    B = n(9916);
                const D = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function y(e = k.n.NONE, t = D, n = !1, a = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== k.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && F.O.view.isEventHandled()) return;
                                F.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                var S = n(3649),
                    I = n(3403),
                    T = n(3215);
                let N, L, x, M;
                !(function (e) {
                    (e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded');
                })(N || (N = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed');
                    })(L || (L = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed');
                    })(x || (x = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded');
                    })(M || (M = {}));
                N.Initialization, L.Initialization;
                const O = (0, T.q)()(
                        ({ observableModel: e }) => {
                            const t = { groups: e.array('groups', []) };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({
                            onGroupClick: e.createCallback((e) => ({ groupName: e }), 'onGroupClick'),
                        }),
                    ),
                    P = O[0],
                    H = O[1];
                var W = n(1856);
                const j = (e, t, n) => (n < e ? e : n > t ? t : n),
                    G = [];
                function $(e) {
                    const t = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, t.current)(...e), G)
                    );
                }
                function z(e, t, n = []) {
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
                var V = n(7727);
                function U(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Z(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Z(e, t);
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
                function Z(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const q = () => {
                    const e = (0, s.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        n = (e, n) => {
                            t(e).set(n, n);
                        },
                        a = (e, n) => {
                            t(e).delete(n);
                        },
                        r = (e, ...n) => {
                            for (var a, r = U(t(e).values()); !(a = r()).done; ) {
                                (0, a.value)(...n);
                            }
                        };
                    return (0, s.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                };
                var Y = n(4489),
                    K = n(7030);
                let X;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(X || (X = {}));
                const Q = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    J = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: u = !1,
                    }) => {
                        const o = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                u = a[1];
                            return u <= r ? 0 : j(r, u, n);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? Q : l,
                                d = (0, s.useRef)(null),
                                m = (0, s.useRef)(null),
                                _ = q(),
                                g = (0, Y.f)(
                                    () => {
                                        F.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                E = (0, K.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), _.trigger('change', e), u && g());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                p = E[0],
                                b = E[1],
                                h = (0, s.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = p.scrollPosition.get(),
                                            u = (null != (a = p.scrollPosition.goal) ? a : 0) - r;
                                        return o(e, t * n + u + r);
                                    },
                                    [p.scrollPosition],
                                ),
                                f = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            b.start({
                                                scrollPosition: o(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(a, p.scrollPosition.get()) },
                                            });
                                    },
                                    [b, c.animationConfig, p.scrollPosition],
                                ),
                                v = (0, s.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            n = m.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, c.step),
                                            u = h(t, e, a);
                                        f(u);
                                    },
                                    [f, h, c.step],
                                ),
                                C = (0, s.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && v(a(e)),
                                            d.current && _.trigger('mouseWheel', e, p.scrollPosition, t(d.current));
                                    },
                                    [p.scrollPosition, v, _],
                                ),
                                A = ((e, t = []) => {
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
                                        (0, W.v)(() => {
                                            const e = d.current;
                                            e &&
                                                (f(o(e, p.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [f, p.scrollPosition.goal],
                                ),
                                w = $(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, p.scrollPosition.goal);
                                    t !== p.scrollPosition.goal && f(t, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', A),
                                    () => {
                                        window.removeEventListener('resize', A);
                                    }
                                ),
                                [A],
                            );
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: C,
                                    applyScroll: f,
                                    applyStepTo: v,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: b,
                                    animationScroll: p,
                                    recalculateContent: w,
                                    events: { on: _.on, off: _.off },
                                }),
                                [p.scrollPosition, f, v, _.off, _.on, w, C, b, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    ee = J({
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
                        getDirection: (e) => (e.deltaY > 1 ? X.Next : X.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    te = 'HorizontalBar_base_49',
                    ne = 'HorizontalBar_base__nonActive_82',
                    ae = 'HorizontalBar_leftButton_5f',
                    re = 'HorizontalBar_rightButton_03',
                    ue = 'HorizontalBar_track_0d',
                    se = 'HorizontalBar_thumb_fd',
                    oe = 'HorizontalBar_rail_32',
                    ie = 'disable',
                    le = { pending: !1, offset: 0 },
                    ce = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    de = () => {},
                    me = (e, t) => Math.max(20, e.offsetWidth * t),
                    _e = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = ce, onDrag: a = de }) => {
                        const r = (0, s.useRef)(null),
                            u = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, s.useState)(le),
                            g = _[0],
                            E = _[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    E(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            b = () => {
                                const t = c.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    l = j(0, 1, s / (r - a)),
                                    m = (t.offsetWidth - me(t, o)) * l;
                                (n.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (u.current && i.current && c.current && d.current) {
                                            if (0 === e)
                                                return u.current.classList.add(ie), void i.current.classList.remove(ie);
                                            if (
                                                ((t = c.current),
                                                (n = d.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return u.current.classList.remove(ie), void i.current.classList.add(ie);
                                            var t, n;
                                            u.current.classList.remove(ie), i.current.classList.remove(ie);
                                        }
                                    })(m);
                            },
                            h = $(() => {
                                (() => {
                                    const t = d.current,
                                        n = c.current,
                                        a = e.getWrapperSize(),
                                        u = e.getContainerSize();
                                    if (!(u && t && a && n)) return;
                                    const s = Math.min(1, a / u);
                                    (t.style.width = `${me(n, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(ne) : r.current.classList.remove(ne));
                                })(),
                                    b();
                            });
                        (0, s.useEffect)(() => (0, W.v)(h)),
                            (0, s.useEffect)(
                                () =>
                                    (0, W.v)(() => {
                                        const t = () => {
                                            b();
                                        };
                                        let n = de;
                                        const a = () => {
                                            n(), (n = (0, W.v)(h));
                                        };
                                        return (
                                            e.events.on('recalculateContent', h),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', h),
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
                                const t = F.O.client.events.mouse.move(([t, n]) => {
                                        var r;
                                        const u = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!u || !s) return;
                                        const o = c.current,
                                            i = d.current;
                                        if (!o || !i) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const l = t.clientX - g.offset - o.getBoundingClientRect().x,
                                            m = (l / o.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(u, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: m });
                                    }),
                                    n = F.O.client.events.mouse.up(() => {
                                        t(), p(le);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, g.offset, g.pending, a, p]);
                        const f = z((t) => e.applyStepTo(t), m, [e]),
                            v = f[0],
                            C = f[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const A = (e) => {
                            e.target.classList.contains(ie) || (0, V.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(te, t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(ae, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ie) || 0 !== e.button || ((0, V.G)('play'), v(X.Next));
                                },
                                onMouseUp: C,
                                ref: u,
                                onMouseEnter: A,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(ue, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, V.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = d.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const u = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + u * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? X.Prev : X.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: A,
                                },
                                o().createElement('div', { ref: d, className: l()(se, t.thumb) }),
                                o().createElement('div', { className: l()(oe, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(re, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ie) || 0 !== e.button || ((0, V.G)('play'), v(X.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: A,
                            }),
                        );
                    }),
                    ge = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ee = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: u,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const m = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: l()(ge.base, e.base) });
                            }, [a]),
                            _ = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(ge.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(ge.defaultScrollArea, r) },
                                o().createElement(pe, { className: i, api: _, classNames: u }, e),
                            ),
                            o().createElement(_e, { getStepByRailClick: c, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    pe = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, s.useEffect)(() => (0, W.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(ge.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: l()(ge.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: l()(ge.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (pe.Bar = _e), (pe.Default = Ee);
                const be = J({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? X.Next : X.Prev),
                    }),
                    he = 'VerticalBar_base_f3',
                    fe = 'VerticalBar_base__nonActive_42',
                    ve = 'VerticalBar_topButton_d7',
                    Ce = 'VerticalBar_bottomButton_06',
                    Ae = 'VerticalBar_track_df',
                    we = 'VerticalBar_thumb_32',
                    Fe = 'VerticalBar_rail_43',
                    ke = 'disable',
                    Be = () => {},
                    De = { pending: !1, offset: 0 },
                    ye = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Se = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Ie = (e, t) => Math.max(20, e.offsetHeight * t),
                    Te = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = ye, onDrag: a = Be }) => {
                        const r = (0, s.useRef)(null),
                            u = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, s.useState)(De),
                            g = _[0],
                            E = _[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    E(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            b = $(() => {
                                const t = d.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const s = Math.min(1, a / u);
                                return (
                                    (t.style.height = `${Ie(n, s)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(fe) : r.current.classList.remove(fe)),
                                    s
                                );
                            }),
                            h = $(() => {
                                const t = c.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    l = j(0, 1, s / (r - a)),
                                    m = (t.offsetHeight - Ie(t, o)) * l;
                                (n.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (u.current && i.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return u.current.classList.add(ke), void i.current.classList.remove(ke);
                                            if (
                                                ((t = c.current),
                                                (n = d.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return u.current.classList.remove(ke), void i.current.classList.add(ke);
                                            var t, n;
                                            u.current.classList.remove(ke), i.current.classList.remove(ke);
                                        }
                                    })(m);
                            }),
                            f = $(() => {
                                Se(e, () => {
                                    b(), h();
                                });
                            });
                        (0, s.useEffect)(() => (0, W.v)(f)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    Se(e, () => {
                                        h();
                                    });
                                };
                                let n = Be;
                                const a = () => {
                                    n(), (n = (0, W.v)(f));
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
                                const t = F.O.client.events.mouse.up(() => {
                                        p(De);
                                    }),
                                    n = F.O.client.events.mouse.move(([t]) => {
                                        Se(e, (n) => {
                                            const r = c.current,
                                                u = d.current,
                                                s = e.getContainerSize();
                                            if (!r || !u || !s) return;
                                            const o = t.screenY - g.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: u, thumbOffset: o, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, g.offset, g.pending, a, p]);
                        const v = z((t) => e.applyStepTo(t), m, [e]),
                            C = v[0],
                            A = v[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const w = (e) => {
                            e.target.classList.contains(ke) || (0, V.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(he, t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(ve, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ke) || 0 !== e.button || ((0, V.G)('play'), C(X.Next));
                                },
                                ref: u,
                                onMouseEnter: w,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(Ae, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, V.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        Se(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                u = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(u);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? X.Prev : X.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: w,
                                },
                                o().createElement('div', { ref: d, className: l()(we, t.thumb) }),
                                o().createElement('div', { className: l()(Fe, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(Ce, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ke) || 0 !== e.button || ((0, V.G)('play'), C(X.Prev));
                                },
                                onMouseUp: A,
                                ref: i,
                                onMouseEnter: w,
                            }),
                        );
                    }),
                    Ne = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Le = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: u,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const m = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: l()(Ne.base, e.base) });
                            }, [a]),
                            _ = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(Ne.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(Ne.area, r) },
                                o().createElement(xe, { className: u, classNames: i, api: _ }, e),
                            ),
                            o().createElement(Te, { getStepByRailClick: c, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    xe = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, s.useEffect)(() => (0, W.v)(a.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(Ne.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(Ne.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                xe.Default = Le;
                const Re = { Vertical: r, Horizontal: a };
                var Me = n(9480),
                    Oe = n(7078),
                    Pe = n(3415),
                    He = n(8045);
                const We = 'ExtendedText_base_71',
                    je = 'ExtendedText_base__zeroPadding_25',
                    Ge = 'ExtendedText_base__isTruncationAvailable_5b',
                    $e = 'ExtendedText_truncated_97',
                    ze = 'ExtendedText_truncated__hide_31',
                    Ve = 'ExtendedText_unTruncated_b8';
                let Ue, Ze, qe;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Ue || (Ue = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Ze || (Ze = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(qe || (qe = {}));
                const Ye = { [qe.NBSP]: Ue.NoBreakSymbol, [qe.ZWNBSP]: Ue.NoBreakSymbol, [qe.NEW_LINE]: Ue.LineBreak },
                    Ke = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Xe = {
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
                    Qe = 'renderers_noBreakWrapper_10',
                    Je = 'renderers_lineBreak_b5',
                    et = 'renderers_newLine_bd',
                    tt = 'renderers_word_f3',
                    nt = (e) => ({ color: `#${e}` }),
                    at = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? Xe[a]
                                ? o().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: l()(tt, Xe[a]) },
                                      e,
                                  )
                                : o().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: tt, style: nt(a) },
                                      e,
                                  )
                            : o().createElement('span', { key: n, 'data-block-type': t.blockType, className: tt }, e);
                    },
                    rt = {
                        [Ue.Word]: at,
                        [Ue.NoBreakSymbol]: at,
                        [Ue.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            o().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => o().createElement(o().Fragment, { key: n }, e)),
                            ),
                        [Ue.LineBreak]: ({ key: e }) =>
                            o().createElement('span', { key: e, 'data-block-type': Ue.LineBreak, className: Je }),
                        [Ue.NewLine]: ({ elementList: e, key: t }) =>
                            o().createElement('span', { key: t, 'data-block-type': Ue.NewLine, className: et }, e),
                        [Ue.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': Ue.NoBreakWrapper, className: Qe },
                                e,
                            ),
                    },
                    ut = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((r, u) => {
                                const s = `${n}_${u}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        n = ut(e, rt[t], s);
                                    a.push(...n);
                                } else a.push(t({ elementList: [r], textBlock: e, key: s }));
                            }),
                            a
                        );
                    },
                    st = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            a = e.blockType,
                                            r = rt[a],
                                            u = ut(e, r, t);
                                        return (
                                            a === Ue.NoBreakWrapper
                                                ? n.push(r({ elementList: u, textBlock: e, key: `${t}` }))
                                                : n.push(...u),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    },
                    ot = (e, t, n, a) => {
                        let r = t.exec(e),
                            u = 0;
                        for (; r; ) u !== r.index && n(e.slice(u, r.index)), a(r), (u = t.lastIndex), (r = t.exec(e));
                        u !== e.length && n(e.slice(u));
                    },
                    it = Ke
                        ? (e) => {
                              const t = [];
                              return (
                                  ot(
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
                                                      ot(
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
                              let n = t.exec(e);
                              if (!n) return [e];
                              const a = [];
                              let r = 0;
                              for (; n; ) a.push(e.slice(r, t.lastIndex)), (r = t.lastIndex), (n = t.exec(e));
                              return r !== e.length && a.push(e.slice(r)), a;
                          },
                    lt = (e, t = '') => {
                        const n = [];
                        return (
                            ot(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Ue.Word, colorTag: t, childList: it(e) });
                                },
                                (e) => {
                                    const a = e[0],
                                        r = Ye[a.charAt(0)];
                                    r === Ue.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Ue.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: Ue.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(a),
                                          )
                                        : n.push({ blockType: r, colorTag: t, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    ct = (e, t, n = '') => {
                        const a = [];
                        return (
                            ot(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...lt(e, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        u = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof u || 'number' == typeof u
                                        ? a.push(...lt(String(u), n))
                                        : a.push({ blockType: Ue.Binding, colorTag: n, childList: [u] });
                                },
                            ),
                            a
                        );
                    },
                    dt = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Ue.NoBreakWrapper) e.childList.push(a), n.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && n.push(e),
                                n.push({ blockType: Ue.NoBreakWrapper, colorTag: '', childList: [t, a] });
                        }
                        return t.childList.length > 0 && n.push(t), n;
                    },
                    mt = (e, t = {}) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Ue.NoBreakSymbol
                                        ? ((n = !0), t.push(...dt(t.pop(), e)))
                                        : (n ? t.push(...dt(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const n = [];
                                return (
                                    ot(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            n.push(...ct(e, t));
                                        },
                                        (e) => {
                                            n.push(...ct(e[2], t, e[1]));
                                        },
                                    ),
                                    n
                                );
                            })((0, S.Eg)((0, S.z4)(e)), t),
                        );
                        return st(n);
                    },
                    _t = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    gt = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Et = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = gt(e, t),
                            r = e.textContent.length,
                            u = e.offsetWidth / r,
                            s = Math.ceil(a / u);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / u);
                            return a >= n ? [!0, n + s] : [!1, a];
                        }
                        const o = Math.max(n + s, 0);
                        return r < o ? [!1, 0] : [!0, o];
                    },
                    pt = (e, t, n, a, r, u) => {
                        let s = -1,
                            i = null;
                        for (let l = n; l >= 0; l--) {
                            const n = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Ue.LineBreak || c === Ue.NewLine || c === Ue.Binding) continue;
                            const d = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = Et(n, a, r),
                                    c = e[0],
                                    m = e[1];
                                if (!c) {
                                    m > 0 && (r -= m);
                                    continue;
                                }
                                const _ = d.slice(0, d.length - m) + u,
                                    g = t[l];
                                (i = o().cloneElement(g, g.props, _)), (s = l);
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[l],
                                    m = c.props.children,
                                    _ = pt(e, m, e.length - 1, a, r, u),
                                    g = _[0],
                                    E = _[1];
                                if (!(g < 0)) {
                                    const e = m.slice(0, g);
                                    (i = o().cloneElement(c, c.props, e, E)), (s = l);
                                    break;
                                }
                                r -= d.length;
                            }
                        }
                        return [s, i];
                    },
                    bt = (e, t, n, a = '...') => {
                        const r = [...t],
                            u = e.current;
                        if (!u) return [r, !1];
                        const s = n.height,
                            o = n.width,
                            i = u.lastElementChild;
                        if (!_t(i, s) && gt(i, o) <= 0) return [r, !1];
                        const l = u.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const r = n + Math.ceil(0.5 * (a - n));
                                    _t(e[r], t) ? (a = r - 1) : (n = r + 1);
                                }
                                return n - 1;
                            })(l, s);
                        if (c < 0) return [r, !1];
                        const d = pt(l, r, c, o, a.length, a),
                            m = d[0],
                            _ = d[1];
                        return _ && (r.splice(m, 1, _), r.splice(m + 1)), [r, !0];
                    },
                    ht = o().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: u = !1,
                            targetId: i,
                            justifyContent: c = Ze.FlexStart,
                            alignContent: d = Ze.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const _ = (0, s.useRef)(null),
                                g = (0, s.useRef)({ height: 0, width: 0 }),
                                E = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                p = E[0],
                                b = E[1],
                                h = (0, s.useMemo)(() => mt(e, a), [a, e]),
                                f = (0, s.useMemo)(() => {
                                    if (
                                        r &&
                                        p.isTruncated &&
                                        (!a || !Object.values(a).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: { text: e, stringifyKwargs: a ? JSON.stringify(a) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: i,
                                        };
                                }, [a, r, i, e, p.isTruncated]),
                                v = (0, s.useCallback)(
                                    (e) => {
                                        (g.current.width = e.contentRect.width),
                                            (g.current.height = e.contentRect.height);
                                        const t = bt(_, h, g.current, m),
                                            a = t[0],
                                            r = t[1];
                                        b({ elementList: a, isTruncated: r, isTruncateFinished: !0 }), n && n(r);
                                    },
                                    [n, m, h],
                                ),
                                C = (0, s.useMemo)(() => ({ justifyContent: c, alignContent: d }), [d, c]);
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
                                        const t = new He.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, n, e]);
                                })(_, v, u),
                                o().createElement(
                                    'div',
                                    { className: l()(We, t, je, u && Ge), style: C },
                                    o().createElement('div', { className: Ve, ref: _ }, h),
                                    o().createElement(
                                        Pe.l,
                                        { tooltipArgs: f },
                                        o().createElement(
                                            'div',
                                            { className: l()($e, !p.isTruncateFinished && u && ze), style: C },
                                            p.isTruncateFinished && u ? p.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                let ft;
                !(function (e) {
                    (e[(e.none = 0)] = 'none'),
                        (e[(e.increase = 1)] = 'increase'),
                        (e[(e.decrease = 2)] = 'decrease'),
                        (e[(e.mixed = 3)] = 'mixed');
                })(ft || (ft = {}));
                const vt = {
                        base: 'BuffIcon_base_c8',
                        base__increase: 'BuffIcon_base__increase_60',
                        base__decrease: 'BuffIcon_base__decrease_31',
                        base__mixed: 'BuffIcon_base__mixed_23',
                    },
                    Ct = o().memo(function ({ buffIconType: e, className: t }) {
                        return e === ft.none
                            ? null
                            : o().createElement('div', { className: l()(vt.base, vt[`base__${ft[e]}`], t) });
                    }),
                    At = 'Delta_base_3e',
                    wt = 'Delta_base__positive_82',
                    Ft = 'Delta_base__negative_86',
                    kt = o().memo(function ({ isPositive: e, width: t, isUseAnim: n }) {
                        const a = (0, K.useSpring)({
                                from: { left: 0, width: 0 },
                                left: e ? 0 : t,
                                width: e ? 0 : Math.abs(t),
                                config: { duration: xt },
                                delay: e ? 0 : xt,
                                immediate: !n,
                            }),
                            r = (0, K.useSpring)({
                                from: { left: 2, width: 0 },
                                left: 2,
                                width: e ? t : 0,
                                config: { duration: xt },
                                delay: e || 0 === t ? xt : 0,
                                immediate: !n,
                            });
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(K.animated.div, { className: l()(At, Ft), style: a }),
                            o().createElement(K.animated.div, { className: l()(At, wt), style: r }),
                        );
                    }),
                    Bt = 'Indicator_base_b9',
                    Dt = 'Indicator_progress_ce',
                    yt = 'Indicator_progressMarker_b4',
                    St = 'Indicator_indicator_bc',
                    It = 'Indicator_indicator__start_80',
                    Tt = 'Indicator_indicator__end_3b',
                    Nt = 'Indicator_marker_f7',
                    Lt = 'Indicator_valueLine_1d',
                    xt = 300,
                    Rt = o().memo(function ({
                        minValue: e,
                        maxValue: t,
                        value: n,
                        markerValue: a,
                        delta: r,
                        isUseAnim: u,
                    }) {
                        const s = a === e ? 2 : (a / t) * 254,
                            i = (n / t) * 254,
                            c = (r / t) * 254,
                            d = r > 0,
                            m = { config: { duration: xt }, immediate: !u },
                            _ = (0, K.useSpring)(Object.assign({ from: { left: 2 }, to: { left: s }, delay: xt }, m)),
                            g = (0, K.useSpring)(Object.assign({ from: { width: e }, to: { width: i }, delay: xt }, m));
                        return o().createElement(
                            'div',
                            { className: Bt },
                            o().createElement(
                                'div',
                                { className: Dt },
                                o().createElement('div', { className: l()(St, It) }),
                                o().createElement(K.animated.div, { className: Lt, style: g }),
                                o().createElement(
                                    'div',
                                    { className: yt },
                                    o().createElement(
                                        K.animated.div,
                                        { className: Nt, style: _ },
                                        o().createElement(kt, { isPositive: d, width: c, isUseAnim: u }),
                                    ),
                                ),
                                o().createElement('div', { className: l()(St, Tt) }),
                            ),
                        );
                    });
                let Mt;
                !(function (e) {
                    (e.None = 'none'), (e.Increase = 'increase'), (e.Decrease = 'decrease');
                })(Mt || (Mt = {}));
                const Ot = {
                        base: 'Param_base_51',
                        value: 'Param_value_51',
                        icon: 'Param_icon_37',
                        name: 'Param_name_82',
                        highlight: 'Param_highlight_81',
                        highlight__increase: 'Param_highlight__increase_35',
                        highlight__decrease: 'Param_highlight__decrease_ec',
                    },
                    Pt = o().memo(function ({
                        id: e,
                        value: t,
                        tooltipID: n,
                        isEnabled: a,
                        highlightType: r,
                        localizedName: u,
                    }) {
                        return o().createElement(
                            Oe.t,
                            {
                                args: { tooltipId: n, paramId: e },
                                targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                isEnabled: a,
                            },
                            o().createElement(
                                'div',
                                { className: Ot.base },
                                o().createElement(ht, { justifyContent: Ze.FlexEnd, classMix: Ot.value, text: t }),
                                o().createElement('div', {
                                    className: Ot.icon,
                                    style: { backgroundImage: `url('R.images.gui.maps.icons.vehParams.small.${e}')` },
                                }),
                                o().createElement(
                                    'div',
                                    { className: Ot.name },
                                    u || R.strings.menu.tank_params.$dyn(e),
                                ),
                                r !== Mt.None &&
                                    o().createElement('div', { className: l()(Ot.highlight, Ot[`highlight__${r}`]) }),
                            ),
                        );
                    }),
                    Ht = 'Group_base_66',
                    Wt = 'Group_group_07',
                    jt = 'Group_hoverBg_97',
                    Gt = 'Group_hoverBg__scrollable_2a',
                    $t = 'Group_groupHeader_f5',
                    zt = 'Group_name_21',
                    Vt = 'Group_arrow_96',
                    Ut = 'Group_arrow__opened_47',
                    Zt = 'Group_params_88',
                    qt = 'Group_params__opened_9a',
                    Yt = 'Group_separator_b5',
                    Kt = 'Group_right_13',
                    Xt = 'Group_buff_fa',
                    Qt = 'Group_value_00',
                    Jt = 'Group_value__additional_81';
                function en() {
                    return (
                        (en =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        en.apply(this, arguments)
                    );
                }
                const tn = (0, I.Pi)(
                        ({
                            id: e,
                            isOpen: t,
                            params: n,
                            extraParams: a,
                            tooltipID: r,
                            indicator: u,
                            value: s,
                            additionalValue: i,
                            buffIconType: c,
                            isEnabled: d,
                            isScrollable: m,
                        }) => {
                            const _ = H().controls,
                                g = a && a.length > 0;
                            return o().createElement(
                                'div',
                                { className: Ht },
                                o().createElement(
                                    Oe.t,
                                    {
                                        args: { tooltipId: r, paramId: e },
                                        targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                        isEnabled: d,
                                    },
                                    o().createElement(
                                        'div',
                                        {
                                            className: Wt,
                                            onClick: () => _.onGroupClick(e),
                                            onMouseEnter: V.$.playHighlight,
                                        },
                                        o().createElement('div', { className: l()(jt, m && Gt) }),
                                        o().createElement(
                                            'div',
                                            { className: $t },
                                            o().createElement('div', { className: l()(Vt, t && Ut) }),
                                            o().createElement(
                                                'div',
                                                { className: zt },
                                                R.strings.menu.tank_params.$dyn(e),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: Kt },
                                                o().createElement(Ct, { buffIconType: c, className: Xt }),
                                                i && o().createElement(ht, { classMix: l()(Qt, Jt), text: i }),
                                                o().createElement(ht, { classMix: Qt, text: s }),
                                            ),
                                        ),
                                        o().createElement(Rt, u),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: l()(Zt, t && qt) },
                                    Me.UI(n, (e) => o().createElement(Pt, en({ key: e.id }, e))),
                                    g && o().createElement('div', { className: Yt }),
                                    Me.UI(a, (e) => o().createElement(Pt, en({ key: e.id }, e))),
                                ),
                            );
                        },
                    ),
                    nn = {
                        base: 'VehicleParams_base_3b',
                        base__bg: 'VehicleParams_base__bg_c4',
                        scroll: 'VehicleParams_scroll_59',
                        content: 'VehicleParams_content_09',
                        barBase: 'VehicleParams_barBase_6f',
                    };
                function an() {
                    return (
                        (an =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        an.apply(this, arguments)
                    );
                }
                const rn = {
                        settings: {
                            step: { type: 'fixed', value: 48, clampedArrowStepTimeout: 0 },
                            animationConfig: { tension: 0, friction: 0 },
                        },
                    },
                    un = (0, I.Pi)(({ showBackground: e = !0, className: t }) => {
                        const n = H().model,
                            a = (0, s.useState)(!1),
                            r = a[0],
                            u = a[1],
                            i = n.groups.get(),
                            c = be(rn);
                        return (
                            (0, s.useEffect)(() => {
                                const e = () => {
                                    const e = c.getContainerSize(),
                                        t = c.getWrapperSize();
                                    e && t && u(e > t);
                                };
                                return (
                                    c.events.on('recalculateContent', e),
                                    () => {
                                        c.events.off('recalculateContent', e);
                                    }
                                );
                            }, [c]),
                            o().createElement(
                                'div',
                                { className: l()(nn.base, e && nn.base__bg, t) },
                                o().createElement(
                                    Re.Vertical.Area.Default,
                                    {
                                        api: c,
                                        barClassNames: { base: nn.barBase },
                                        scrollClassName: nn.scroll,
                                        scrollClassNames: { content: nn.content },
                                    },
                                    o().createElement(
                                        'div',
                                        { className: nn.groups },
                                        Me.UI(i, (e) =>
                                            o().createElement(tn, an({ key: e.id }, e, { isScrollable: r })),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    sn = (0, s.memo)(function (e) {
                        const t = (0, s.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return o().createElement(P, { options: t }, o().createElement(un, e));
                    }),
                    on = {
                        base: 'FlagIcon_base_25',
                        base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                        base__c_240x118: 'FlagIcon_base__c_240x118_92',
                    };
                let ln;
                !(function (e) {
                    (e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118');
                })(ln || (ln = {}));
                const cn = (e, t) => {
                        switch (t) {
                            case ln.c1080x454:
                                return R.images.gui.maps.icons.crew.flags.$dyn(e);
                            case ln.c240x118:
                                return R.images.gui.maps.icons.tankmen.card.nations.$dyn(e);
                        }
                    },
                    dn = o().memo(function ({ nation: e, size: t, className: n }) {
                        return o().createElement('div', {
                            className: l()(on.base, on[`base__${t}`], n),
                            style: { backgroundImage: `url('${cn(e, t)}')` },
                        });
                    }),
                    mn = {
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
                    _n = [
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
                class En extends o().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, V.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, V.G)(this.props.soundClick);
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
                            i = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
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
                                })(e, _n)),
                            g = l()(mn.base, mn[`base__${u}`], mn[`base__${r}`], null == s ? void 0 : s.base),
                            E = l()(mn.icon, mn[`icon__${u}`], mn[`icon__${r}`], null == s ? void 0 : s.icon),
                            p = l()(mn.glow, null == s ? void 0 : s.glow),
                            b = l()(mn.caption, mn[`caption__${u}`], null == s ? void 0 : s.caption),
                            h = l()(mn.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            gn(
                                {
                                    className: g,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                _,
                            ),
                            'info' !== u && o().createElement('div', { className: mn.shine }),
                            o().createElement('div', { className: E }, o().createElement('div', { className: p })),
                            o().createElement('div', { className: b }, t),
                            a && o().createElement('div', { className: h }, a),
                        );
                    }
                }
                En.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const pn = ({ onClick: e }) =>
                        o().createElement(En, {
                            onClick: e,
                            caption: R.strings.crew.common.navigation.aboutCrew(),
                            type: 'info',
                        }),
                    bn = 'common_close_0e',
                    hn = ({ onClick: e, label: t = R.strings.menu.viewHeader.closeBtn.label() }) =>
                        o().createElement(En, {
                            onClick: e,
                            classNames: { base: bn },
                            caption: t,
                            type: 'close',
                            side: 'right',
                        }),
                    fn = 'TopButtons_base_ef',
                    vn = 'TopButtons_leftButtons_9e',
                    Cn = 'TopButtons_rightButtons_33',
                    An = o().memo(function ({
                        backButtonLabel: e,
                        closeButtonLabel: t = R.strings.menu.viewHeader.closeBtn.label(),
                        onBackClick: n,
                        onAboutClick: a,
                        onCloseClick: r,
                        className: u,
                        classNames: s,
                    }) {
                        return o().createElement(
                            'div',
                            { className: l()(fn, u) },
                            e &&
                                n &&
                                o().createElement(
                                    'div',
                                    { className: l()(vn, null == s ? void 0 : s.leftButtons) },
                                    o().createElement(En, { onClick: n, caption: e, type: 'back' }),
                                ),
                            o().createElement(
                                'div',
                                { className: l()(Cn, null == s ? void 0 : s.rightButtons) },
                                a && o().createElement(pn, { onClick: a }),
                                r && o().createElement(hn, { onClick: r, label: t }),
                            ),
                        );
                    });
                var wn = n(9690);
                const Fn = (e, t) => e.split(',').includes(t),
                    kn = {
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
                let Bn, Dn;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(Bn || (Bn = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(Dn || (Dn = {}));
                const yn = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: r,
                        tags: u = '',
                        size: s = Bn.extraSmall,
                        type: i = Dn.colored,
                        className: c,
                        classNames: d,
                        isShortName: m = !1,
                    }) => {
                        const _ = `${(0, S.BN)(a)}${e ? '_elite' : ''}`,
                            g = R.images.gui.maps.icons.vehicleTypes.big.$dyn(_);
                        return o().createElement(
                            'div',
                            {
                                className: l()(
                                    kn.base,
                                    kn[`base__size${(0, S.e)(s)}`],
                                    kn[`base__type${(0, S.e)(i)}`],
                                    c,
                                ),
                            },
                            o().createElement(
                                'div',
                                { className: l()(kn.level, null == d ? void 0 : d.level) },
                                (0, wn.HG)(r),
                            ),
                            o().createElement('div', {
                                className: l()(
                                    kn.type,
                                    e && kn[`type__elite${(0, S.e)(s)}`],
                                    kn[`type__${s}`],
                                    null == d ? void 0 : d.typeIcon,
                                ),
                                style: { backgroundImage: `url(${g})` },
                            }),
                            Fn(u, 'premiumIGR') && o().createElement('div', { className: kn.premiumIGR }),
                            o().createElement(
                                'div',
                                { className: l()(kn.name, null == d ? void 0 : d.name) },
                                m ? n : t,
                            ),
                        );
                    },
                    Sn = 'VehicleParamsDecorator_base_32',
                    In = 'VehicleParamsDecorator_vehicleInfo_02',
                    Tn = 'VehicleParamsDecorator_tankName_ac',
                    Nn = 'VehicleParamsDecorator_tankLvl_26',
                    Ln = 'VehicleParamsDecorator_type_e7',
                    xn = 'VehicleParamsDecorator_tip_6c',
                    Rn = ['children', 'isPerkTipShown'];
                function Mn() {
                    return (
                        (Mn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Mn.apply(this, arguments)
                    );
                }
                const On = (e) => {
                    let t = e.children,
                        n = e.isPerkTipShown,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, Rn);
                    return o().createElement(
                        'div',
                        { className: Sn },
                        o().createElement(
                            yn,
                            Mn({ className: In, classNames: { name: Tn, level: Nn, typeIcon: Ln } }, a, {
                                isShortName: !0,
                            }),
                        ),
                        t,
                        n &&
                            o().createElement(
                                'div',
                                { className: xn },
                                R.strings.crew.vehicleParamsDecorator.perkTip(),
                            ),
                    );
                };
                var Pn = n(7321),
                    Hn = n(5801),
                    Wn = n(3946);
                const jn = (e) => ({ tankmanID: e }),
                    Gn = (e) => ({ recruitID: e }),
                    $n = (0, T.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    { tankmanList: e.array('tankmanList'), vehicleInfo: e.object('vehicleInfo') },
                                    e.primitives([
                                        'requiredRole',
                                        'vehicle',
                                        'nation',
                                        'hasCrew',
                                        'hasFilters',
                                        'backButtonLabel',
                                        'isButtonBarVisible',
                                        'roleChangeDiscountPercent',
                                        'itemsOffset',
                                        'itemsAmount',
                                        'isRecruitDisabled',
                                    ]),
                                ),
                                n = (0, Wn.Om)((e) => {
                                    const n = e - t.itemsOffset.get(),
                                        a = t.tankmanList.get();
                                    if (n >= 0 && n < a.length) return Me.U2(a, n);
                                }),
                                a = (0, Wn.Om)(() => (t.hasCrew.get() ? t.backButtonLabel.get() : R.invalid()));
                            return Object.assign({}, t, { computes: { backButtonLabel: a, getItem: n } });
                        },
                        ({ externalModel: e }) => ({
                            closeWithEsc: e.createCallback(() => ({ isFromEscape: !0 }), 'onClose'),
                            back: e.createCallbackNoArgs('onBack'),
                            hangar: e.createCallbackNoArgs('onHangar'),
                            selectTankman: e.createCallback(jn, 'onTankmanSelected'),
                            selectRecruit: e.createCallback((e) => ({ recruitID: e }), 'onRecruitSelected'),
                            restoreTankman: e.createCallback(jn, 'onTankmanRestore'),
                            recruitNewTankman: e.createCallbackNoArgs('onRecruitNewTankman'),
                            resetFilters: e.createCallbackNoArgs('onResetFilters'),
                            playRecruitVoiceover: e.createCallback(Gn, 'onPlayRecruitVoiceover'),
                            loadCards: e.createCallback((e, t) => ({ limit: e, offset: t }), 'onLoadCards'),
                        }),
                    ),
                    zn = $n[0],
                    Vn = $n[1];
                var Un = n(3457),
                    Zn = n(6373);
                const qn = {
                    base: 'ListHeader_base_ad',
                    title: 'ListHeader_title_a8',
                    base__memberChange: 'ListHeader_base__memberChange_c2',
                    base__tankChange: 'ListHeader_base__tankChange_fb',
                    base__personalData: 'ListHeader_base__personalData_aa',
                };
                let Yn;
                !(function (e) {
                    (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(Yn || (Yn = {}));
                const Kn = ({ title: e, theme: t = Yn.Barracks, className: n, children: a }) =>
                        o().createElement(
                            'div',
                            { className: l()(qn.base, qn[`base__${t}`], n) },
                            o().createElement('div', { className: qn.title }, e),
                            a,
                        ),
                    Xn = 'Header_base_4c',
                    Qn = 'Header_button_fa',
                    Jn = (0, I.Pi)(() => {
                        const e = Vn(),
                            t = e.model,
                            n = e.controls,
                            a = t.requiredRole.get(),
                            r = t.isRecruitDisabled.get();
                        return o().createElement(
                            Kn,
                            {
                                theme: Yn.MemberChange,
                                title: (0, S.uF)(R.strings.crew.memberChange.title(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.upperCase.$dyn(a),
                                    vehicle: t.vehicle.get(),
                                }),
                            },
                            o().createElement(
                                'div',
                                { className: Xn },
                                o().createElement(
                                    Zn.i,
                                    {
                                        body: r
                                            ? R.strings.crew.tankmanList.tooltip.can_not_recruit.body()
                                            : R.strings.crew.tankmanList.tooltip.recruit.body(),
                                    },
                                    o().createElement(
                                        'div',
                                        null,
                                        o().createElement(
                                            Un.u5,
                                            {
                                                onClick: n.recruitNewTankman,
                                                type: Un.L$.secondary,
                                                size: Un.qE.small,
                                                mixClass: Qn,
                                                disabled: r,
                                            },
                                            (0, S.uF)(R.strings.crew.memberChange.action.recruit(), {
                                                role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(a),
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                var ea = n(2106),
                    ta = n(8018);
                const na = 'WarningText_base_13',
                    aa = 'WarningText_icon_5d',
                    ra = 'WarningText_label_c6',
                    ua = o().memo(function ({ label: e }) {
                        return o().createElement(
                            'div',
                            { className: na },
                            o().createElement('div', { className: aa }),
                            o().createElement('div', { className: ra }, e),
                        );
                    }),
                    sa = 'ListEmptyState_base_ae',
                    oa = 'ListEmptyState_content_1e',
                    ia = 'ListEmptyState_shadow_ae',
                    la = 'ListEmptyState_buttonWrapper_78',
                    ca = 'ListEmptyState_button_f1',
                    da = o().memo(function ({
                        warningText: e,
                        buttonType: t = Un.L$.secondary,
                        tooltipArgs: n = ta.Xd,
                        isBtnDisabled: a = !1,
                        className: r,
                        onClick: u,
                        children: s,
                    }) {
                        return o().createElement(
                            'div',
                            { className: l()(sa, r) },
                            o().createElement(
                                'div',
                                { className: oa },
                                o().createElement('div', { className: ia }),
                                o().createElement(ua, { label: e }),
                                s &&
                                    o().createElement(
                                        'div',
                                        { className: la },
                                        o().createElement(
                                            Zn.i,
                                            n,
                                            o().createElement(
                                                'div',
                                                null,
                                                o().createElement(
                                                    Un.u5,
                                                    {
                                                        size: Un.qE.small,
                                                        type: t,
                                                        disabled: a,
                                                        onClick: u,
                                                        mixClass: ca,
                                                    },
                                                    s,
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    });
                var ma = n(2603);
                let _a, ga, Ea, pa, ba;
                !(function (e) {
                    (e.Any = 'any'),
                        (e.Commander = 'commander'),
                        (e.Radioman = 'radioman'),
                        (e.Driver = 'driver'),
                        (e.Gunner = 'gunner'),
                        (e.Loader = 'loader');
                })(_a || (_a = {})),
                    (function (e) {
                        (e.InBarracks = 'in_barracks'), (e.InTank = 'in_tank'), (e.Dismissed = 'dismissed');
                    })(ga || (ga = {})),
                    (function (e) {
                        (e.Tankman = 'tankman'), (e.Recruit = 'recruit'), (e.Dismissed = 'dismissed');
                    })(Ea || (Ea = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled');
                    })(pa || (pa = {})),
                    (function (e) {
                        (e.IsLockCrew = 'isLockCrew'), (e.TankmanHasRole = 'tankmanHasRole');
                    })(ba || (ba = {}));
                var ha = n(5139);
                function fa(e, t, n) {
                    const a = (0, s.useMemo)(
                        () =>
                            (function (e, t, n) {
                                return void 0 === n ? (0, ha.Z)(e, t, !1) : (0, ha.Z)(e, n, !1 !== t);
                            })(n, e),
                        t,
                    );
                    return (0, s.useEffect)(() => a.cancel, [a]), a;
                }
                var va = n(7077);
                const Ca = 'Content_base_48',
                    Aa = 'Content_name_7b',
                    wa = 'Content_specializationInfo_ac',
                    Fa = 'Content_recruitLabel_17';
                function ka() {
                    return (
                        (ka =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ka.apply(this, arguments)
                    );
                }
                const Ba = ({ fullUserName: e, isRecruit: t, tankmanVehicleInfo: n, className: a }) =>
                    o().createElement(
                        'div',
                        { className: l()(Ca, a) },
                        o().createElement('div', { className: Aa }, e),
                        o().createElement(
                            'div',
                            { className: wa },
                            t
                                ? o().createElement('div', { className: Fa }, R.strings.crew.tankman.recruit())
                                : o().createElement(yn, ka({}, n, { type: Dn.whiteSpanish, isShortName: !0 })),
                        ),
                    );
                var Da = n(8613);
                const ya = 60,
                    Sa = 3600,
                    Ia = 86400;
                Date.now(), Da.Ew.getRegionalDateTime, Da.Ew.getFormattedDateTime;
                const Ta = (0, s.memo)(({ duration: e }) => {
                        const t =
                            e >= 0
                                ? (n = (function (e = 0) {
                                      let t = e;
                                      const n = Math.trunc(t / Ia);
                                      t -= n * Ia;
                                      const a = Math.trunc(t / Sa);
                                      t -= a * Sa;
                                      const r = Math.trunc(t / ya);
                                      return (t -= r * ya), { days: n, hours: a, minutes: r, seconds: t };
                                  })(e)).days > 0
                                    ? (0, S.WU)(R.strings.common.duration.days(), { days: n.days })
                                    : n.hours > 0
                                      ? (0, S.WU)(R.strings.common.duration.hours(), { hours: n.hours })
                                      : n.minutes > 0
                                        ? (0, S.WU)(R.strings.common.duration.minutes(), { minutes: n.minutes })
                                        : (0, S.WU)(R.strings.common.duration.seconds(), { seconds: n.seconds })
                                : R.strings.common.duration.unlimited();
                        var n;
                        return o().createElement('span', null, t);
                    }),
                    Na = () => {},
                    La = (e = 0, t, n = 0, a = Na) => {
                        const r = (0, s.useState)(e),
                            u = r[0],
                            o = r[1];
                        return (
                            (0, s.useEffect)(() => {
                                if (e > 0) {
                                    o(e);
                                    const r = Date.now(),
                                        u = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - r) / 1e3);
                                                null !== n && t <= n ? (o(n), a && a(), clearInterval(u)) : o(t);
                                            },
                                            1e3 * (t || (e > 120 ? ya : 1)),
                                        );
                                    return () => {
                                        clearInterval(u);
                                    };
                                }
                            }, [e, t, n, a]),
                            u
                        );
                    };
                n(6536);
                B.Sw.instance;
                let xa;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(xa || (xa = {}));
                B.Sw.instance;
                const Ra = La,
                    Ma = 'DismissedCountdown_base_12',
                    Oa = 'DismissedCountdown_icon_e6',
                    Pa = 'DismissedCountdown_label_92',
                    Ha = o().memo(function ({ duration: e, className: t }) {
                        const n = Ra(e, 1);
                        return o().createElement(
                            'div',
                            { className: l()(Ma, t) },
                            o().createElement('div', { className: Oa }),
                            o().createElement('div', { className: Pa }, o().createElement(Ta, { duration: n })),
                        );
                    }),
                    Wa = 'Location_base_4d',
                    ja = 'Location_duration_5d',
                    Ga = 'Location_icon_eb',
                    $a = o().memo(function ({ location: e, className: t, timeToDismiss: n }) {
                        return o().createElement(
                            'div',
                            { className: l()(Wa, t) },
                            e === ga.Dismissed && o().createElement(Ha, { className: ja, duration: n }),
                            e !== ga.InBarracks &&
                                o().createElement('div', {
                                    className: Ga,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.tankmen.card.location.${e})`,
                                    },
                                }),
                        );
                    });
                let za, Va;
                !(function (e) {
                    (e.Default = 'default'), (e.Selected = 'selected'), (e.InBattle = 'in_battle');
                })(za || (za = {})),
                    (function (e) {
                        (e.White = 'white'), (e.Red = 'red');
                    })(Va || (Va = {}));
                const Ua = 'Role_base_68',
                    Za = o().memo(function ({ role: e, className: t, roleIconColor: n = Va.White }) {
                        return o().createElement('div', {
                            className: l()(Ua, t),
                            style: { backgroundImage: `url(R.images.gui.maps.icons.tankmen.roles.opaque.${n}.${e})` },
                        });
                    });
                var qa = n(771),
                    Ya = n(4385),
                    Ka = n(5563),
                    Xa = n(8485);
                const Qa = 'Skill_base_a9',
                    Ja = 'Skill_skillLevel_85',
                    er = ({ icon: e, type: t, isLevelVisible: n, skillLevel: a, efficiency: r, className: u }) =>
                        o().createElement(
                            'div',
                            { className: l()(Qa, u) },
                            o().createElement(Xa.d, { icon: e, size: Xa.O.Big, type: t, efficiency: r }),
                            n && o().createElement('div', { className: Ja }, (0, S.dL)(a)),
                        ),
                    tr = {
                        base: 'Skills_base_d8',
                        skillsEfficiencyWrapper: 'Skills_skillsEfficiencyWrapper_13',
                        skillsEfficiencyWrapper__singleRow: 'Skills_skillsEfficiencyWrapper__singleRow_c9',
                        skillsEfficiency: 'Skills_skillsEfficiency_10',
                        skillsList: 'Skills_skillsList_85',
                        skillsRow: 'Skills_skillsRow_e6',
                        skill: 'Skills_skill_8e',
                        skill__last: 'Skills_skill__last_8c',
                        skill__collapsed: 'Skills_skill__collapsed_b9',
                        skill__extraCollapsed: 'Skills_skill__extraCollapsed_8a',
                    };
                let nr;
                !(function (e) {
                    (e.Default = 'default'), (e.Collapsed = 'collapsed'), (e.ExtraCollapsed = 'extraCollapsed');
                })(nr || (nr = {}));
                const ar = ({ lastSkillLevel: e, efficiencyValue: t, skills: n, className: a }) => {
                        const r = (0, ta.Y4)(t),
                            u = r !== ta.H$.Normal,
                            s = e < 100 && e !== qa.Lv,
                            i = ((e, t, n) => {
                                const a = e ? 8 : 9;
                                let r = nr.Default,
                                    u = 2,
                                    s = t;
                                return (
                                    t <= a
                                        ? (u = 1)
                                        : t > a && t <= 2 * a
                                          ? (s = a)
                                          : ((s = 14), (r = e && n && t >= 27 ? nr.ExtraCollapsed : nr.Collapsed)),
                                    [u, s, r]
                                );
                            })(u, n.length, s),
                            c = i[0],
                            d = i[1],
                            m = i[2];
                        return o().createElement(
                            'div',
                            { className: l()(tr.base, a) },
                            u &&
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            tr.skillsEfficiencyWrapper,
                                            1 === c && tr.skillsEfficiencyWrapper__singleRow,
                                        ),
                                    },
                                    o().createElement(Ka.A, { efficiencyValue: t, className: tr.skillsEfficiency }),
                                ),
                            o().createElement(
                                'div',
                                { className: tr.skillsList },
                                (0, Ya.K)(c, (a) =>
                                    o().createElement(
                                        'div',
                                        { key: a, className: tr.skillsRow },
                                        (0, Ya.K)(Math.min(d, n.length - a * d), (u) => {
                                            const i = u + a * d,
                                                c = i + 1 === n.length,
                                                _ = i + 1 === d * (a + 1) || c,
                                                g = Me.U2(n, i);
                                            return o().createElement(er, {
                                                key: i,
                                                type: g.type,
                                                icon: g.icon,
                                                isLevelVisible: c && s && r !== ta.H$.Low,
                                                className: l()(tr.skill, tr[`skill__${m}`], _ && tr.skill__last),
                                                skillLevel: e,
                                                efficiency: t,
                                            });
                                        }),
                                    ),
                                ),
                            ),
                        );
                    },
                    rr = 'ThemeHelper_base_39',
                    ur = 'ThemeHelper_disabledContent_20',
                    sr = 'ThemeHelper_disabledIcon_95',
                    or = 'ThemeHelper_disabledTitle_57',
                    ir = o().memo(function ({ isDisabled: e, className: t, disableReason: n, disableIcon: a }) {
                        return o().createElement(
                            'div',
                            { className: l()(rr, t) },
                            e &&
                                o().createElement(
                                    'div',
                                    { className: ur },
                                    a &&
                                        o().createElement('div', {
                                            className: sr,
                                            style: { backgroundImage: `url(${a})` },
                                        }),
                                    o().createElement('div', { className: or }, n),
                                ),
                        );
                    }),
                    lr = {
                        base: 'TankmanCard_base_dd',
                        base__hovered: 'TankmanCard_base__hovered_96',
                        base__selected: 'TankmanCard_base__selected_24',
                        base__disabled: 'TankmanCard_base__disabled_1f',
                        themeHelper: 'TankmanCard_themeHelper_78',
                        locationIcon: 'TankmanCard_locationIcon_26',
                        crewRole: 'TankmanCard_crewRole_2e',
                        iconWrapper: 'TankmanCard_iconWrapper_a3',
                        base__isCollapsedOnHover: 'TankmanCard_base__isCollapsedOnHover_5e',
                        flag: 'TankmanCard_flag_78',
                        icon: 'TankmanCard_icon_a5',
                        separatorWrapper: 'TankmanCard_separatorWrapper_fe',
                        separator: 'TankmanCard_separator_73',
                        separator__top: 'TankmanCard_separator__top_72',
                        content: 'TankmanCard_content_0c',
                        skills: 'TankmanCard_skills_ef',
                        helperLayer: 'TankmanCard_helperLayer_09',
                        helperLayer__error: 'TankmanCard_helperLayer__error_2a',
                    },
                    cr = ({
                        tankman: e,
                        isCollapsedOnHover: t = !1,
                        isTooltipEnabled: n = !0,
                        className: a,
                        onClick: r,
                        onMouseDown: u,
                        children: i,
                    }) => {
                        var c, d;
                        const m = e.tankmanKind === Ea.Recruit,
                            _ = e.cardState === pa.Selected,
                            g = e.cardState === pa.Disabled,
                            E = ((e, t, n = 150) => {
                                const a = (0, s.useState)(e),
                                    r = a[0],
                                    u = a[1],
                                    o = fa((e) => u(e), t, n);
                                return {
                                    isHovered: r,
                                    handleMouseEnter: (0, s.useCallback)(() => o(!0), [o]),
                                    handleMouseLeave: (0, s.useCallback)(() => o(!1), [o]),
                                };
                            })(!1, []),
                            p = E.isHovered,
                            b = E.handleMouseEnter,
                            h = E.handleMouseLeave,
                            f = (0, s.useMemo)(() => {
                                if (e.recruitGlowImage && m) return { backgroundImage: `url(${e.recruitGlowImage})` };
                            }, [e.recruitGlowImage, m]);
                        return (
                            (0, s.useEffect)(() => {
                                !p || _ || g || (V.$.playHighlight(), t && (0, V.G)(ta.gO.SHOP_INFO));
                            }, [p, _, g, t]),
                            o().createElement(
                                'div',
                                {
                                    className: l()(
                                        lr.base,
                                        a,
                                        p && lr.base__hovered,
                                        t && !g && lr.base__isCollapsedOnHover,
                                        lr[`base__${e.cardState}`],
                                    ),
                                    onMouseEnter: () => {
                                        b();
                                    },
                                    onMouseLeave: h,
                                    onMouseDown: u,
                                },
                                o().createElement(ir, {
                                    isDisabled: g,
                                    disableReason: null != (c = e.disableReason) ? c : void 0,
                                    disableIcon: null != (d = e.disableIcon) ? d : void 0,
                                    className: lr.themeHelper,
                                }),
                                e.role !== _a.Any &&
                                    o().createElement(Za, {
                                        role: e.role,
                                        roleIconColor: e.hasRolePenalty ? Va.Red : Va.White,
                                        className: lr.crewRole,
                                    }),
                                o().createElement($a, {
                                    className: lr.locationIcon,
                                    location: e.location,
                                    timeToDismiss: e.timeToDismiss,
                                }),
                                o().createElement(
                                    'div',
                                    { className: lr.iconWrapper, style: f },
                                    e.nation &&
                                        o().createElement('div', {
                                            className: lr.flag,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.tankmen.card.nations.${e.nation})`,
                                            },
                                        }),
                                    o().createElement(va.G, {
                                        name: e.iconName,
                                        size: va.U.c158x118,
                                        classMix: lr.icon,
                                        isSkin: e.isInSkin,
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: lr.separatorWrapper },
                                    o().createElement('div', { className: l()(lr.separator, lr.separator__top) }),
                                    o().createElement('div', { className: lr.separator }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: lr.content },
                                    o().createElement(Ba, {
                                        fullUserName: e.fullUserName,
                                        isRecruit: m,
                                        tankmanVehicleInfo: e.tankmanVehicleInfo,
                                    }),
                                    o().createElement(ar, {
                                        skills: e.skills,
                                        lastSkillLevel: e.lastSkillLevel,
                                        efficiencyValue: e.skillsEfficiency,
                                        className: lr.skills,
                                    }),
                                ),
                                o().createElement(
                                    Oe.t,
                                    {
                                        args: { tooltipId: m ? ma.XG : ma.v$, targetId: m ? e.recruitID : e.tankmanID },
                                        isEnabled: n,
                                        ignoreShowDelay: !1,
                                    },
                                    o().createElement('div', {
                                        className: l()(
                                            lr.helperLayer,
                                            (0, ta.Y4)(e.skillsEfficiency) === ta.H$.Untrained &&
                                                !_ &&
                                                lr.helperLayer__error,
                                        ),
                                        onClick: () => {
                                            g || _ || !r || (r(), V.$.playClick());
                                        },
                                    }),
                                ),
                                !g && (null == i ? void 0 : i(p)),
                            )
                        );
                    },
                    dr = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: n,
                        paddingBottom: a,
                        amount: r,
                        itemsAmountPerRow: u,
                        visibleRowsAmount: s,
                    }) => {
                        const o = Math.ceil(r / u) * t,
                            i = s * t,
                            l = e * t;
                        return { paddingTop: `${l + n}rem`, paddingBottom: `${Math.max(o - l - i, 0) + a}rem` };
                    },
                    mr = (e) => {
                        const t = e.className,
                            n = e.children,
                            a = e.itemsAmountPerRow,
                            r = e.visibleRowsAmount,
                            u = e.startRowIndex,
                            s = e.amount,
                            i = u * a,
                            l = Math.min(r * a, s - i);
                        return o().createElement(
                            'div',
                            { className: t, style: dr(e) },
                            (0, Ya.K)(l, (e) => n(i + e)),
                        );
                    },
                    _r = 'VirtualGrid_base_52',
                    gr = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: n,
                        children: a,
                        api: r,
                        classNames: u,
                        preloadedRows: i = 1,
                        paddingTop: c = 0,
                        paddingBottom: d = 0,
                    }) => {
                        const m = r.scrollApi,
                            _ = (0, s.useRef)(0),
                            g = (0, s.useState)(0),
                            E = g[0],
                            p = g[1],
                            b = (0, s.useState)(null),
                            h = b[0],
                            f = b[1],
                            v = (0, s.useState)(null),
                            C = v[0],
                            A = v[1];
                        return (
                            (0, s.useEffect)(() => {
                                const t = (t) => {
                                    if (!h) return;
                                    const a = Math.floor((F.O.view.pxToRem(t.value.scrollPosition) - c) / n),
                                        u = Math.ceil(e / h),
                                        s = Math.max(0, Math.min(a - i, u));
                                    p(s), r.startRowIndexChanged(s);
                                };
                                return m.events.on('change', t), () => m.events.off('change', t);
                            }, [r, m, n, c, h, e, i]),
                            (0, s.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                a = m.contentRef.current.getBoundingClientRect(),
                                                u =
                                                    F.O.view.pxToRem(a.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                s = Math.floor(u / t),
                                                o = Math.ceil(F.O.view.pxToRem(a.height) / n) + 2 * i;
                                            (_.current = s), f(s), A(o), r.layoutCalculated(s, o);
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
                            }, [r, m, n, t, i, E]),
                            (0, s.useEffect)(() => {
                                const e = (e, t = !0) => {
                                    h && m.applyScroll(Math.floor((e + 1) / h) * n + c, { immediate: t });
                                };
                                return r.events.on('scrollToIndex', e), () => r.events.off('scrollToIndex', e);
                            }, [r, n, h, c, m]),
                            o().createElement(
                                Re.Vertical.Default,
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
                                null !== h &&
                                    null !== C &&
                                    o().createElement(
                                        mr,
                                        {
                                            className: l()(_r, null == u ? void 0 : u.inner),
                                            paddingBottom: d,
                                            paddingTop: c,
                                            amount: e,
                                            itemsAmountPerRow: h,
                                            visibleRowsAmount: C,
                                            startRowIndex: E,
                                            cellHeight: n,
                                        },
                                        a,
                                    ),
                            )
                        );
                    },
                    Er = 'VirtualGridWithFade_scrollAreaFade_94',
                    pr = ['api', 'children', 'classNames'];
                function br() {
                    return (
                        (br =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        br.apply(this, arguments)
                    );
                }
                const hr = (e) => {
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
                            })(e, pr);
                        const u = (0, s.useState)(!0),
                            i = u[0],
                            c = u[1],
                            d = t.scrollApi;
                        return (
                            (0, s.useEffect)(() => {
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
                            o().createElement(
                                gr,
                                br(
                                    {
                                        api: t,
                                        classNames: Object.assign({}, a, {
                                            scrollClassName: l()(null == a ? void 0 : a.scrollClassName, i && Er),
                                        }),
                                    },
                                    r,
                                ),
                                n,
                            )
                        );
                    },
                    fr = 'TankmanVirtualList_grid_41',
                    vr = ({
                        amount: e,
                        paddingTop: t = 11,
                        paddingBottom: n = 11,
                        api: a,
                        classNames: r,
                        children: u,
                    }) =>
                        o().createElement(
                            hr,
                            {
                                amount: e,
                                classNames: Object.assign({}, r, { content: l()(fr, null == r ? void 0 : r.content) }),
                                cellWidth: 318,
                                cellHeight: 265,
                                paddingTop: t,
                                paddingBottom: n,
                                api: a,
                            },
                            u,
                        ),
                    Cr = 'Actions_base_07',
                    Ar = ({ className: e, children: t }) => o().createElement('div', { className: l()(Cr, e) }, t),
                    wr = { base: 'VoiceOverButton_base_a3', soundIcon: 'VoiceOverButton_soundIcon_8a' },
                    Fr = ({ onClick: e }) =>
                        o().createElement(
                            Zn.i,
                            {
                                header: R.strings.crew.tankman.action.voiceover.tooltip.title(),
                                body: R.strings.crew.tankman.action.voiceover.tooltip.body(),
                            },
                            o().createElement(
                                Un.u5,
                                {
                                    size: Un.qE.small,
                                    mixClass: l()(wr.base, wr.base__visible),
                                    type: Un.L$.secondary,
                                    onClick: e,
                                },
                                o().createElement('div', { className: wr.soundIcon }),
                            ),
                        ),
                    kr = ({ className: e }) => o().createElement('div', { className: l()(lr.base, e) }),
                    Br = (0, I.Pi)(({ index: e, className: t, onLazyLoad: n }) => {
                        const a = Vn(),
                            r = a.model,
                            u = a.controls,
                            i = r.computes.getItem(e);
                        if (
                            ((0, s.useEffect)(() => {
                                i || n();
                            }, [n, i]),
                            !i)
                        )
                            return o().createElement(kr, { className: t });
                        return o().createElement(
                            cr,
                            {
                                tankman: i,
                                className: t,
                                onClick: () => {
                                    i.tankmanKind === Ea.Recruit
                                        ? u.selectRecruit(i.recruitID)
                                        : i.location === ga.Dismissed
                                          ? u.restoreTankman(i.tankmanID)
                                          : u.selectTankman(i.tankmanID);
                                },
                            },
                            () =>
                                i.hasVoiceover && i.tankmanKind === Ea.Recruit
                                    ? o().createElement(
                                          Ar,
                                          null,
                                          o().createElement(Fr, { onClick: () => u.playRecruitVoiceover(i.recruitID) }),
                                      )
                                    : null,
                        );
                    }),
                    Dr = 'MemberChangeTankmanList_base_66',
                    yr = 'MemberChangeTankmanList_gridWrapper_99',
                    Sr = 'MemberChangeTankmanList_gridWrapper__qHDWidth_14',
                    Ir = 'MemberChangeTankmanList_emptyState_4a',
                    Tr = 'MemberChangeTankmanList_item_35',
                    Nr = 'MemberChangeTankmanList_item__withoutTopMargin_c6',
                    Lr = R.strings.crew.tankmanList.emptyState,
                    xr = (e, t) => {
                        const n = e ? ta.Xd : { body: R.strings.crew.tankmanList.tooltip.recruit.body() };
                        return t ? { body: R.strings.crew.tankmanList.tooltip.can_not_recruit.body() } : n;
                    },
                    Rr = (0, I.Pi)(function ({ isQHD: e, hasTopPadding: t = !0 }) {
                        const n = Vn(),
                            a = n.model,
                            r = n.controls,
                            u = (() => {
                                const e = Re.Vertical.useVerticalScrollApi(),
                                    t = q(),
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
                            i = a.hasFilters.get(),
                            c = a.itemsAmount.get(),
                            d = a.isRecruitDisabled.get(),
                            m = ((e, t) => {
                                const n = (0, s.useRef)([0, 0]),
                                    a = (0, s.useRef)(0),
                                    r = (0, s.useRef)([0, !0]);
                                return (
                                    (0, s.useEffect)(() => {
                                        const e = (e, t) => {
                                                n.current = [e, t];
                                            },
                                            u = (e) => {
                                                a.current = e;
                                            },
                                            s = (e) => {
                                                const t = r.current[0];
                                                r.current = [e.value.scrollPosition, t < e.value.scrollPosition];
                                            };
                                        return (
                                            t.scrollApi.events.on('change', s),
                                            t.events.on('layoutCalculated', e),
                                            t.events.on('startRowIndexChanged', u),
                                            () => {
                                                t.scrollApi.events.off('change', s),
                                                    t.events.off('layoutCalculated', e),
                                                    t.events.off('startRowIndexChanged', u);
                                            }
                                        );
                                    }, [t]),
                                    fa(
                                        () => {
                                            const t = n.current,
                                                u = t[0],
                                                s = t[1],
                                                o = a.current * u,
                                                i = u * s;
                                            e(2 * i, r.current[1] ? o : Math.max(o - 1 * i, 0));
                                        },
                                        [],
                                        10,
                                    )
                                );
                            })(r.loadCards, u);
                        return o().createElement(
                            'div',
                            { className: Dr },
                            c > 0
                                ? o().createElement(
                                      'div',
                                      { className: l()(yr, e && Sr) },
                                      o().createElement(
                                          vr,
                                          { amount: c, paddingTop: t ? 11 : 0, paddingBottom: t ? 11 : 2, api: u },
                                          (e) =>
                                              o().createElement(Br, {
                                                  className: l()(Tr, !t && Nr),
                                                  key: e,
                                                  index: e,
                                                  onLazyLoad: m,
                                              }),
                                      ),
                                  )
                                : o().createElement(
                                      da,
                                      {
                                          warningText: i ? Lr.noFilteredItems() : Lr.noItems(),
                                          buttonType: ea.L.primary,
                                          tooltipArgs: xr(i, d),
                                          isBtnDisabled: d,
                                          onClick: i ? r.resetFilters : r.recruitNewTankman,
                                          className: Ir,
                                      },
                                      i
                                          ? Lr.button.resetFilers()
                                          : (0, S.uF)(R.strings.crew.memberChange.action.recruit(), {
                                                role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(
                                                    a.requiredRole.get(),
                                                ),
                                            }),
                                  ),
                        );
                    }),
                    Mr = 'MemberChangeApp_base_05',
                    Or = 'MemberChangeApp_flagIcon_02',
                    Pr = 'MemberChangeApp_widget_30',
                    Hr = 'MemberChangeApp_ttc_4a',
                    Wr = 'MemberChangeApp_topButtons_88',
                    jr = 'MemberChangeApp_base__qHDWidth_f9',
                    Gr = 'MemberChangeApp_discount_83',
                    $r = 'MemberChangeApp_content_dc',
                    zr = (0, I.Pi)(() => {
                        const e = Vn(),
                            t = e.model,
                            n = e.controls,
                            a = t.roleChangeDiscountPercent.get(),
                            r = a > 0,
                            u = (0, m.GS)(),
                            s = u.mediaWidth,
                            i = u.mediaHeight,
                            c = (0, m.GS)().remScreenWidth >= 2560;
                        var d;
                        return (
                            (d = n.closeWithEsc),
                            y(k.n.ESCAPE, d),
                            o().createElement(
                                'div',
                                { className: l()(Mr, c && jr) },
                                o().createElement(dn, { className: Or, nation: t.nation.get(), size: ln.c1080x454 }),
                                o().createElement(
                                    'div',
                                    { className: $r },
                                    o().createElement(Jn, null),
                                    o().createElement(Hn.p, {
                                        popoverDirection: i < m.Aq.Medium ? w.IC.Left : w.IC.Bottom,
                                    }),
                                    r &&
                                        o().createElement(
                                            'div',
                                            { className: Gr },
                                            (0, S.uF)(R.strings.crew.memberChange.discount(), { discountAmount: a }),
                                        ),
                                    o().createElement(Rr, { isQHD: c, hasTopPadding: !r }),
                                ),
                                o().createElement('div', { className: Pr }, o().createElement(Pn.O, null)),
                                s >= m.fd.Large &&
                                    o().createElement(
                                        'div',
                                        { className: Hr },
                                        o().createElement(
                                            On,
                                            t.vehicleInfo.get(),
                                            o().createElement(sn, {
                                                showBackground: !1,
                                                resId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                            }),
                                        ),
                                    ),
                                o().createElement(An, {
                                    backButtonLabel: t.computes.backButtonLabel(),
                                    onBackClick: n.back,
                                    closeButtonLabel: R.strings.crew.common.navigation.toGarage(),
                                    onCloseClick: n.hangar,
                                    className: t.isButtonBarVisible.get() && Wr,
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    A().render(
                        o().createElement(zn, null, o().createElement(v, null, o().createElement(zr, null))),
                        document.getElementById('root'),
                    );
                });
            },
            9367: (e, t, n) => {
                'use strict';
                n.d(t, { Q: () => d });
                var a = n(6483),
                    r = n.n(a),
                    u = n(9987),
                    s = n(6179),
                    o = n.n(s);
                const i = 'AlertCounter_base_f3',
                    l = 'AlertCounter_counter_da',
                    c = 'AlertCounter_label_18',
                    d = ({ value: e, className: t }) =>
                        o().createElement(
                            'div',
                            { className: r()(i, t) },
                            o().createElement(u.A, { value: e, className: l }),
                            !e && o().createElement('div', { className: c }, R.strings.crew.common.exclamationMark()),
                        );
            },
            5563: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    u = n(7078),
                    s = n(2603),
                    o = n(771),
                    i = n(3649),
                    l = n(9916),
                    c = n(6179),
                    d = n.n(c),
                    m = n(130);
                const _ = (0, c.memo)(({ efficiencyValue: e, tankmanID: t = o.y$, className: n }) => {
                    const a = e === o.sU,
                        c = a ? { tooltipId: s.M4 } : { tooltipId: s.Br, tankmanID: t };
                    return d().createElement(
                        u.t,
                        { targetId: R.views.lobby.crew.widgets.CrewWidget('resId'), args: c, isEnabled: t !== o.y$ },
                        d().createElement(
                            'div',
                            { className: r()(m.Z.base, n) },
                            a
                                ? d().createElement('div', { className: m.Z.icon })
                                : d().createElement(
                                      'div',
                                      { className: r()(m.Z.percent, e === o.yb && m.Z.percent__full) },
                                      (0, i.dL)(l.Z5.getNumberFormat(100 * e, l.B3.INTEGRAL)),
                                  ),
                        ),
                    );
                });
            },
            9197: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => b });
                var a = n(6483),
                    r = n.n(a),
                    u = n(6179),
                    s = n.n(u);
                const o = 'NumberRange_base_5e',
                    i = 'NumberRange_base__animation_79',
                    l = 'NumberRange_from_70',
                    c = 'NumberRange_from__red_f8',
                    d = 'NumberRange_separator_c0',
                    m = s().memo(function ({ from: e, to: t, className: n }) {
                        return s().createElement(
                            'div',
                            { className: r()(o, 0 === e && i, n) },
                            s().createElement('div', { className: r()(l, 0 === e && t > 0 && c) }, e),
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
                    b = ({ title: e, isGlowVisible: t = !1, className: n, classNames: a, from: o, to: i }) => {
                        const l = (0, u.useMemo)(
                            () => ({
                                left: o !== i ? 7 * String(o).length + 4 : Math.round((7 * String(o).length) / 2),
                            }),
                            [o, i],
                        );
                        return s().createElement(
                            'div',
                            { className: r()(_, n) },
                            s().createElement('div', { className: g }, e),
                            s().createElement(
                                'div',
                                { className: E },
                                s().createElement(m, { from: o, to: i }),
                                t &&
                                    s().createElement('div', {
                                        style: l,
                                        className: r()(p, null == a ? void 0 : a.counterGlow),
                                    }),
                            ),
                        );
                    };
            },
            2768: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => i, y: () => l });
                var a = n(6483),
                    r = n.n(a),
                    u = n(6179),
                    s = n.n(u),
                    o = n(4458);
                let i;
                !(function (e) {
                    (e.c14x14 = 'small'),
                        (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c180x135 = 'dialogs');
                })(i || (i = {}));
                const l = s().memo(function ({ iconName: e, size: t = i.c24x24, className: n }) {
                    var a;
                    return s().createElement('div', {
                        style: {
                            backgroundImage: `url(${null == (a = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : a.$dyn(e)})`,
                        },
                        className: r()(o.Z.base, o.Z[`base__${t}`], n),
                    });
                });
            },
            7077: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => c, U: () => l });
                var a = n(6483),
                    r = n.n(a),
                    u = n(3649),
                    s = n(6179),
                    o = n.n(s),
                    i = n(3938);
                let l;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(l || (l = {}));
                const c = ({ name: e, size: t = l.c100x60, classMix: n, isSkin: a = !1 }) => {
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
                    return o().createElement('div', { style: c, className: r()(i.Z.base, i.Z[`base__${t}`], n) });
                };
            },
            8485: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => d, d: () => E });
                var a = n(6483),
                    r = n.n(a),
                    u = n(8271),
                    s = n(771),
                    o = n(6179),
                    i = n.n(o),
                    l = n(2768),
                    c = n(9426);
                let d;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(d || (d = {}));
                const m = { [d.Big]: l.F.c22x22, [d.Small]: l.F.c14x14 };
                var _;
                !(function (e) {
                    (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                })(_ || (_ = {}));
                const g = (e, t, n) =>
                        e === u.W.Possible || e === u.W.New
                            ? _.LightYellow
                            : e === u.W.Irrelevant
                              ? _.Grey
                              : t === s.sU
                                ? e === u.W.Learning
                                    ? _.Yellow
                                    : _.Grey
                                : t < s.yb
                                  ? n
                                      ? _.Grey
                                      : _.Red
                                  : e === u.W.Learning
                                    ? _.Yellow
                                    : _.Grey,
                    E = i().memo(function ({
                        icon: e,
                        type: t,
                        size: n,
                        efficiency: a = s.yb,
                        hasInstruction: o = !1,
                    }) {
                        const d = (!o && a === s.sU) || t === u.W.Irrelevant;
                        return i().createElement(
                            'div',
                            { className: r()(c.Z.base, c.Z[`base__${n}`]) },
                            i().createElement('div', {
                                className: r()(c.Z.background, c.Z[`background__${g(t, a, o)}`]),
                            }),
                            e &&
                                i().createElement(
                                    'div',
                                    { className: c.Z.container },
                                    i().createElement(l.y, {
                                        iconName: e,
                                        size: m[n],
                                        className: r()(d && c.Z.disabledIcon),
                                    }),
                                    d && i().createElement('div', { className: c.Z.disabled }),
                                ),
                        );
                    });
            },
            9631: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    u = n(3457),
                    s = n(2106),
                    o = n(9987),
                    i = n(6179),
                    l = n.n(i),
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
                const _ = l().memo(function (e) {
                    let t = e.isActive,
                        n = e.counter,
                        a = e.className,
                        i = e.children,
                        _ = e.type,
                        g = void 0 === _ ? s.L.secondary : _,
                        E = e.size,
                        p = void 0 === E ? s.q.small : E,
                        b = e.hasIndicator,
                        h = void 0 === b || b,
                        f = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, d);
                    return l().createElement(
                        'div',
                        { className: r()(c.Z.base, a, t && c.Z.base__active) },
                        l().createElement(u.u5, m({ type: g, size: p, mixClass: c.Z.button }, f), i),
                        l().createElement('div', { className: c.Z.overlay }),
                        h && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(n) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(o.A, { value: n, size: 'small' }),
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
                n.d(t, { Gc: () => o, H$: () => i, Xd: () => u, Y4: () => l, gO: () => s, wP: () => r });
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
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(s || (s = {}));
                const o = (e, t = !1, n = null) => {
                    const a = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (n ? a.$dyn(`${n}Case`) : a).$dyn(e);
                };
                let i;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(i || (i = {}));
                const l = (e) => (e === a.sU ? i.Untrained : e < a.yb ? i.Low : i.Normal);
            },
            7321: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => jn });
                var a = n(6179),
                    r = n.n(a),
                    u = n(3403),
                    s = n(3215),
                    o = n(4598),
                    i = n(9480),
                    l = n(3946),
                    c = n(4828);
                const d = [
                        R.views.lobby.crew.TankmanContainerView('resId'),
                        R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                        R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                        R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    ],
                    m = (0, s.q)()(
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
                                n = (0, l.Om)(
                                    () =>
                                        i.UI(t.slots.get(), (e) =>
                                            Object.assign({}, e, {
                                                roles: i.UI(e.roles, o.yR),
                                                tankman: Object.assign({}, e.tankman, {
                                                    roles: i.UI(e.tankman.roles, o.yR),
                                                    skills: i.UI(e.tankman.skills, (e) => Object.assign({}, e)),
                                                }),
                                            }),
                                        ),
                                    { equals: o.jv },
                                ),
                                a = (0, l.Om)(() => Boolean(i.sE(n(), (e) => -1 === e.tankman.tankmanID))),
                                r = (0, l.Om)(() => 1 === t.slots.get().length),
                                u = (0, l.Om)((e) => t.selectedSlotIdx.get() === e),
                                s = (0, l.Om)(() => -1 !== t.selectedSlotIdx.get()),
                                m = (0, l.Om)((e) => {
                                    var t;
                                    return null == (t = i.U2(n(), e)) ? void 0 : t.tankman;
                                }),
                                _ = (0, l.Om)((e) => {
                                    var t;
                                    const a = null == (t = i.U2(n(), e)) ? void 0 : t.tankman;
                                    return a ? a.skills.length + a.newSkillsAmount + a.possibleSkillsAmount : 0;
                                }),
                                g = (0, l.Om)(() => {
                                    return (
                                        (e = t.currentLayoutID.get()),
                                        (n = t.previousLayoutID.get()),
                                        {
                                            isCurrentLayoutHangar: e === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isCurrentLayoutTankmanContainer: d.includes(e),
                                            isCurrentLayoutQuickTraining:
                                                e === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isCurrentLayoutMemberChange:
                                                e === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutHangar: n === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isPreviousLayoutTankmanContainer: d.includes(n),
                                            isPreviousLayoutQuickTraining:
                                                n === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isPreviousLayoutMemberChange:
                                                n === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutBarrack: n === R.views.lobby.crew.BarracksView('resId'),
                                        }
                                    );
                                    var e, n;
                                }),
                                E = (0, l.Om)(() => {
                                    const e = g(),
                                        t = e.isCurrentLayoutHangar,
                                        n = e.isCurrentLayoutQuickTraining;
                                    return !r() && !t && !n;
                                }),
                                p = (0, l.Om)(() => !r() && t.buttonsBar.get().isVisible),
                                b = (0, l.Om)(() => {
                                    return (e = t.currentLayoutID.get()), c.AB[e] || c.sC.Hangar;
                                    var e;
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: n,
                                    isSlotSelected: u,
                                    isAnySlotSelected: s,
                                    getSlotTankman: m,
                                    getAllSkillsAmount: _,
                                    isAnyEmptySlots: a,
                                    isTankmanMode: r,
                                    isChangeCrewButtonVisible: E,
                                    isButtonBarVisible: p,
                                    getLayoutInfo: g,
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
                    _ = m[0],
                    g = m[1];
                var E = n(6483),
                    p = n.n(E),
                    b = n(6373),
                    h = n(2056);
                let f;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(f || (f = {}));
                const v = 'ButtonsBar_base_9c',
                    C = 'ButtonsBar_button_d1',
                    A = 'ButtonsBar_button__crewOperaions_70',
                    w = 'ButtonsBar_button__crewBooks_b4',
                    F = 'ButtonsBar_button__toggle_64';
                var k = n(3457),
                    B = n(9987),
                    D = n(3649);
                const y = 'CrewBookButton_base_da',
                    S = 'CrewBookButton_button_ee',
                    I = 'CrewBookButton_icon_11',
                    T = 'CrewBookButton_discount_6b',
                    N = 'CrewBookButton_counter_5d',
                    L = (0, u.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = g(),
                            a = n.model,
                            u = n.controls,
                            s = a.crewBooks.get(),
                            o = u.onCrewBooksClick,
                            i = s.isDisabled || t;
                        return r().createElement(
                            b.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, D.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: s.totalAmount,
                                }),
                            },
                            r().createElement(
                                'div',
                                { id: 'crew_book_button', className: p()(y, e) },
                                r().createElement(
                                    k.u5,
                                    { type: k.L$.primary, mixClass: S, disabled: i, onClick: o },
                                    r().createElement('div', { className: I }),
                                ),
                                !i &&
                                    '0' !== s.newAmount &&
                                    r().createElement(
                                        'div',
                                        { className: N },
                                        r().createElement(B.A, { value: s.newAmount }),
                                    ),
                                !i && s.hasDiscount && r().createElement('div', { className: T }),
                            ),
                        );
                    });
                var x = n(3616);
                const M = ['children'];
                function O() {
                    return (
                        (O =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        O.apply(this, arguments)
                    );
                }
                const P = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, M);
                    return r().createElement(
                        x.Z,
                        O(
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
                var H = n(4489);
                let W;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(W || (W = {}));
                var j = n(1943);
                const G = 'CrewOperationsButton_base_e3',
                    $ = 'CrewOperationsButton_button_8e',
                    z = 'CrewOperationsButton_icon_0c',
                    V = 'CrewOperationsButton_autoReturnIcon_f0',
                    U = (0, u.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = g().model,
                            a = ((e) => {
                                const t = (0, j.Jp)(c.D9);
                                return (n) => t({ action: c.eX.Click, parentScreen: e, item: n });
                            })(n.computes.getUiLoggingParentScreen()),
                            u = n.crewOperations.get();
                        return r().createElement(
                            'div',
                            { id: 'crew_operations_button', className: p()(G, e) },
                            r().createElement(
                                P,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !t,
                                    onClick: () => a(c.x3.CrewOperationsButton),
                                },
                                r().createElement(
                                    b.i,
                                    {
                                        header: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.header(),
                                        body: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(
                                            k.u5,
                                            { type: k.L$.primary, mixClass: $, disabled: t },
                                            r().createElement('div', { className: z }),
                                        ),
                                        u.isAutoReturnOn && r().createElement('div', { className: V }),
                                    ),
                                ),
                            ),
                        );
                    });
                var Z = n(9631);
                const q = 'CrewToggleButton_base_03',
                    Y = 'CrewToggleButton_button_89',
                    K = 'CrewToggleButton_iconContainer_f9',
                    X = 'CrewToggleButton_icon_a7';
                let Q;
                !(function (e) {
                    (e.AcceleratedTraining = 'acceleratedTraining'), (e.WotPlus = 'wotPlus');
                })(Q || (Q = {}));
                const J = (0, a.memo)(({ type: e, state: t, isDisabled: n, onClick: u, classMix: s }) => {
                        const o = (0, a.useMemo)(() => {
                            const n = t === f.Disabled ? f.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${n})`,
                            };
                        }, [e, t]);
                        return r().createElement(
                            'div',
                            { className: p()(q, s) },
                            r().createElement(
                                Z.C,
                                {
                                    type: k.L$.primary,
                                    isActive: t === f.On,
                                    disabled: n || t === f.Disabled,
                                    className: Y,
                                    onClick: u,
                                },
                                r().createElement(
                                    'div',
                                    { className: K },
                                    r().createElement('div', { className: X, style: o }),
                                ),
                            ),
                        );
                    }),
                    ee = {
                        [f.On]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on,
                        [f.Off]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_off,
                        [f.Disabled]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                        [f.Hidden]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                    },
                    te = (0, u.Pi)(({ isWidgetDisabled: e }) => {
                        const t = g(),
                            n = t.model,
                            a = t.controls,
                            u = n.acceleratedTraining.get(),
                            s = n.wotPlus.get(),
                            o = a.onAcceleratedTrainingClick,
                            i = a.onWotPlusClick,
                            l = ee[u.state];
                        return r().createElement(
                            'div',
                            { className: v },
                            r().createElement(U, { classMix: p()(C, A), isWidgetDisabled: e }),
                            r().createElement(L, { classMix: p()(C, w), isWidgetDisabled: e }),
                            u.state !== f.Hidden &&
                                r().createElement(
                                    b.i,
                                    { header: l.header(), body: l.body() },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(J, {
                                            type: Q.AcceleratedTraining,
                                            state: u.state,
                                            isDisabled: e || u.isDisabled,
                                            onClick: o,
                                            classMix: p()(C, F),
                                        }),
                                    ),
                                ),
                            s.state !== f.Hidden &&
                                r().createElement(
                                    h.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(J, {
                                            type: Q.WotPlus,
                                            state: s.state,
                                            isDisabled: e || s.isDisabled,
                                            onClick: i,
                                            classMix: p()(C, F),
                                        }),
                                    ),
                                ),
                        );
                    }),
                    ne = 'CrewWidgetApp_base_cc',
                    ae = 'CrewWidgetApp_buttonsBar_e5',
                    re = 'CrewWidgetApp_slotsList_ee';
                var ue = n(7727),
                    se = n(7030),
                    oe = n(8018),
                    ie = n(7160);
                const le = 'BaseSlot_base_97',
                    ce = 'BaseSlot_base__hovered_61',
                    de = 'BaseSlot_base__inactive_7e',
                    me = 'BaseSlot_hoverGlow_de',
                    _e = 'BaseSlot_hoverGlow__visible_f4',
                    ge = 'BaseSlot_selectedGlow_25',
                    Ee = 'BaseSlot_selectedGlow__visible_2f',
                    pe = 'BaseSlot_hover_e9',
                    be = 'BaseSlot_hover__visible_1f',
                    he = 'BaseSlot_disabled_67',
                    fe = ({
                        onClick: e,
                        children: t,
                        isSelected: n = !1,
                        isDisabled: u,
                        isEnabledForMouse: s,
                        isEmpty: o = !1,
                        layoutInfo: i,
                    }) => {
                        const l = (0, a.useState)(!1),
                            c = l[0],
                            d = l[1],
                            m = c && (!n || (!o && i.isCurrentLayoutMemberChange)),
                            _ = m && !o && !i.isCurrentLayoutHangar;
                        return r().createElement(
                            'div',
                            {
                                className: p()(le, (c || n) && !i.isCurrentLayoutHangar && ce, (n || !s) && de),
                                onClick: e,
                                onMouseEnter: () => {
                                    s && !n && (ue.$.playHighlight(), d(!0));
                                },
                                onMouseLeave: () => {
                                    d(!1);
                                },
                            },
                            !i.isCurrentLayoutMemberChange && r().createElement('div', { className: p()(ge, n && Ee) }),
                            r().createElement('div', { className: p()(me, _ && _e) }),
                            r().createElement('div', { className: p()(pe, m && be) }),
                            u && r().createElement('div', { className: he }),
                            t,
                        );
                    },
                    ve = ({
                        startState: e,
                        endState: t,
                        layoutInfo: n,
                        isPaused: u,
                        children: s,
                        className: o,
                        isTankmanMode: i,
                    }) => {
                        const l = (0, se.useSpring)(
                                () => ({ from: e, to: t, config: { duration: 300, easing: ie.qb }, pause: u }),
                                [u],
                            )[0],
                            c = (0, a.useMemo)(
                                () =>
                                    n.isCurrentLayoutHangar || n.isCurrentLayoutQuickTraining || i
                                        ? e
                                        : (!n.isPreviousLayoutHangar && !n.isPreviousLayoutBarrack) || u
                                          ? t
                                          : l,
                                [n, u, l, e, t, i],
                            );
                        return r().createElement(se.animated.div, { className: o, style: c }, s);
                    },
                    Ce = 'DogSlot_base_8f',
                    Ae = 'DogSlot_icon_ba',
                    we = 'DogSlot_container_63',
                    Fe = 'DogSlot_roleAndName_c9',
                    ke = 'DogSlot_role_5c',
                    Be = 'DogSlot_name_9c',
                    De = 'DogSlot_btnDetails_b7',
                    ye = { transform: 'translateX(0rem)' },
                    Se = (0, u.Pi)(({ isDisabled: e, layoutInfo: t }) => {
                        const n = g(),
                            u = n.model,
                            s = n.controls,
                            o = u.nation.get(),
                            i = s.onDogMoreInfoClick,
                            l = (0, a.useCallback)(() => {
                                !e && (0, ue.G)(oe.gO.RUDY);
                            }, [e]),
                            c = (0, a.useCallback)(
                                (t) => {
                                    t.stopPropagation(), !e && i();
                                },
                                [i, e],
                            ),
                            d = (0, se.useSpring)(
                                () => ({
                                    from: ye,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: ie.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
                            )[0],
                            m = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(o);
                        return r().createElement(
                            b.i,
                            { header: m.header(), body: m.body() },
                            r().createElement(
                                'div',
                                null,
                                r().createElement(
                                    fe,
                                    { onClick: l, isDisabled: e, isEnabledForMouse: !1, layoutInfo: t },
                                    r().createElement(
                                        ve,
                                        {
                                            startState: ye,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            isPaused: !1,
                                            className: Ce,
                                            isTankmanMode: !1,
                                        },
                                        r().createElement(se.animated.div, { className: Ae, style: d }),
                                        r().createElement(
                                            'div',
                                            { className: we },
                                            r().createElement(
                                                'div',
                                                { className: Fe },
                                                r().createElement('div', { className: ke }),
                                                r().createElement(
                                                    'div',
                                                    { className: Be },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(o).name(),
                                                ),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: De },
                                                r().createElement(
                                                    k.u5,
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
                var Ie = n(9916);
                const Te = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: r = 0,
                        args: u,
                        isEnabled: s = !0,
                        onMouseDown: o,
                    }) => {
                        const i = (0, a.useCallback)(() => {
                                (0, Ie.c9)(Ie.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: r,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: u,
                                }),
                                    ue.$.playYes();
                            }, [u, t, n, r]),
                            l = (0, a.useCallback)(() => {
                                (0, Ie.c9)(Ie.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: r,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, r]),
                            c = (0, a.useCallback)(
                                (e) => {
                                    o && o(e), ((e) => e.button === W.RIGHT)(e) && i();
                                },
                                [o, i],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, a.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Ne = ['children'];
                function Le() {
                    return (
                        (Le =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Le.apply(this, arguments)
                    );
                }
                const xe = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Ne);
                        return r().createElement(
                            Te,
                            Le({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Re = 'ChangeCrewButton_base_0f',
                    Me = 'ChangeCrewButton_base__inactive_77',
                    Oe = 'ChangeCrewButton_normalState_07',
                    Pe = 'ChangeCrewButton_normalState__hide_db',
                    He = 'ChangeCrewButton_hoverState_68',
                    We = 'ChangeCrewButton_hoverState__show_89',
                    je = (0, u.Pi)(({ isSelected: e, isLocked: t, mainRole: n, isFemale: u }) => {
                        const s = g().model,
                            o = (0, a.useState)(!1),
                            i = o[0],
                            l = o[1],
                            d = (0, j.Sr)(c.D9, {
                                item: c.x3.ChangeButtonTooltip,
                                action: c.eX.Viewed,
                                parentScreen: s.computes.getUiLoggingParentScreen(),
                            }),
                            m = (0, a.useMemo)(
                                () =>
                                    t
                                        ? [
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.header(),
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.body(),
                                          ]
                                        : [
                                              '',
                                              (0, D.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, oe.Gc)(n, u, oe.wP.Objective),
                                              }),
                                          ],
                                [t, u, n],
                            ),
                            _ = m[0],
                            E = m[1];
                        return r().createElement(
                            b.i,
                            {
                                header: _,
                                body: E,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            r().createElement(
                                'div',
                                {
                                    className: p()(Re, (t || e) && Me),
                                    onMouseEnter: () => {
                                        d.onShow(), t || e || (ue.$.playHighlight(), l(!0));
                                    },
                                    onMouseLeave: () => {
                                        d.onHide(), l(!1);
                                    },
                                },
                                r().createElement('div', { className: p()(Oe, i && Pe) }),
                                r().createElement('div', { className: p()(He, (e || i) && We) }),
                            ),
                        );
                    }),
                    Ge = 'CrewSlot_base_ac',
                    $e = 'CrewSlot_changeCrew_02',
                    ze = 'CrewSlot_content_5b',
                    Ve = 'CrewSlot_content__withChangeCrewButton_4e',
                    Ue = 'CrewSlot_warningHighlight_ff',
                    Ze = 'CrewSlot_selectHighlight_50',
                    qe = 'CrewSlot_selectHighlightInTankmanMode_37';
                var Ye = n(7077),
                    Ke = n(7078),
                    Xe = n(2603),
                    Qe = n(771);
                const Je = 'SpecializationAndName_base_ef',
                    et = 'SpecializationAndName_roleWrapper_87',
                    tt = 'SpecializationAndName_role_55',
                    nt = 'SpecializationAndName_role__withGap_35',
                    at = 'SpecializationAndName_name_aa',
                    rt = ({ roles: e, tankmanID: t = Qe.y$, slotIdx: n, name: a }) =>
                        r().createElement(
                            'div',
                            { className: Je },
                            r().createElement(
                                Ke.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Xe.rs, slotIdx: n, tankmanID: t },
                                },
                                r().createElement(
                                    'div',
                                    { className: et },
                                    i.UI(e, (e, t) =>
                                        r().createElement('div', {
                                            key: `role__${e}`,
                                            className: p()(tt, t > 0 && nt),
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            r().createElement('div', { className: at }, a),
                        ),
                    ut = 'EmptySlotContent_base_77',
                    st = 'EmptySlotContent_tankmanIcon_07',
                    ot = 'EmptySlotContent_icon_a8',
                    it = 'EmptySlotContent_specialization_1f',
                    lt = 'EmptySlotContent_specialization__disabled_3d',
                    ct = 'EmptySlotContent_vehicle_55',
                    dt = { transform: 'translateX(0rem)', opacity: 1 },
                    mt = { transform: 'translateX(-70rem)', opacity: 0 },
                    _t = (0, a.memo)(
                        ({
                            roles: e,
                            layoutInfo: t,
                            vehicleName: n,
                            vehicleType: u,
                            isDisabled: s,
                            isSelected: o,
                            slotIdx: l,
                            blinkStyle: c,
                            qtTankmanIconStyle: d,
                        }) => {
                            const m = (0, se.useSpring)(
                                    () => ({
                                        from: dt,
                                        to: mt,
                                        config: { duration: 200, easing: ie.ei },
                                        immediate: !0,
                                        pause: o,
                                    }),
                                    [o],
                                ),
                                _ = m[0],
                                g = m[1],
                                E = (0, a.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || g.start({ reset: !0, reverse: !0 });
                                }, [g, t]),
                                b = i.U2(e, 0) || '',
                                h = R.strings.crew_widget.vehicleWithName.$dyn((0, D.BN)(u)),
                                f = (0, D.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(b),
                                });
                            return r().createElement(
                                'div',
                                { className: ut, onMouseEnter: E, onMouseLeave: E },
                                r().createElement(
                                    'div',
                                    { className: st },
                                    r().createElement(
                                        se.animated.div,
                                        { style: d },
                                        r().createElement(Ye.G, {
                                            name: 'empty',
                                            size: Ye.U.c100x60Barracks,
                                            classMix: ot,
                                        }),
                                        r().createElement(
                                            se.animated.div,
                                            { style: s ? void 0 : c },
                                            r().createElement(Ye.G, {
                                                name: 'emptyRed',
                                                size: Ye.U.c100x60Barracks,
                                                classMix: ot,
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: p()(it, s && lt) },
                                    r().createElement(rt, { slotIdx: l, roles: e, name: f }),
                                ),
                                r().createElement(
                                    se.animated.div,
                                    { className: ct, style: o ? void 0 : _ },
                                    (0, D.uF)(h, { name: n }),
                                ),
                            );
                        },
                    );
                var gt = n(5415),
                    Et = n(8271);
                const pt = (e) => e.skills.length + e.newSkillsAmount + e.possibleSkillsAmount,
                    bt = (e, t, n) => {
                        const a = ((e, t, n) => {
                                if (e <= t) return [1, e, 24];
                                const a = Math.floor((n - 2) / 18);
                                return [2, e <= 2 * a ? a : Math.ceil(e / 2), 16];
                            })(e, t, n),
                            r = a[0],
                            u = a[1],
                            s = a[2];
                        let o = 2,
                            i = s;
                        for (; u * i + o + (u - 1) > n; ) o > 0 ? (o -= 1) : (i -= 1);
                        return i !== s && (o = i - s), [r, u, o, s, i];
                    };
                var ht = n(4385),
                    ft = n(5563);
                const vt = 'AcceleratedTrainingIcon_base_4f',
                    Ct = 'AcceleratedTrainingIcon_icon_45',
                    At = (0, a.memo)(({ classMix: e }) =>
                        r().createElement(
                            b.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            },
                            r().createElement(
                                'div',
                                { className: p()(vt, e) },
                                r().createElement('div', { className: Ct }),
                            ),
                        ),
                    ),
                    wt = {
                        base: 'LastSkillInfo_base_38',
                        levelsContainer: 'LastSkillInfo_levelsContainer_4f',
                        realLevel: 'LastSkillInfo_realLevel_78',
                        base__small: 'LastSkillInfo_base__small_c5',
                        possibleLevel: 'LastSkillInfo_possibleLevel_02',
                        acceleratedTrainingIcon: 'LastSkillInfo_acceleratedTrainingIcon_bf',
                        base__big: 'LastSkillInfo_base__big_10',
                    },
                    Ft = 0.01,
                    kt = (0, a.memo)(
                        ({
                            lastSkillLevel: e,
                            lastPossibleSkillLevel: t,
                            isLevelVisible: n,
                            isAcceleratedTrainingVisible: u,
                            skillSize: s,
                            blinkStyle: o,
                        }) => {
                            const i = (0, a.useRef)(e),
                                l = (0, se.useSpring)(() => ({ from: { scale: 1 } })),
                                c = l[0],
                                d = l[1];
                            (0, a.useEffect)(() => {
                                t < 0 &&
                                    i.current !== e &&
                                    (d.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: ie.Fs },
                                    }),
                                    (i.current = e));
                            }, [e, t, d]);
                            const m = (0, a.useMemo)(
                                    () =>
                                        0 === t
                                            ? [R.strings.common.percentValue(), t]
                                            : t < Ft
                                              ? [R.strings.crew_widget.plusMinValue(), Ft]
                                              : [R.strings.crew_widget.plusValue(), t],
                                    [t],
                                ),
                                _ = m[0],
                                g = m[1];
                            return r().createElement(
                                'div',
                                { className: p()(wt.base, wt[`base__${s}`]) },
                                n &&
                                    r().createElement(
                                        'div',
                                        { className: wt.levelsContainer },
                                        e >= 0 &&
                                            e < 100 &&
                                            r().createElement(
                                                se.animated.div,
                                                { style: c },
                                                r().createElement(
                                                    'div',
                                                    { className: wt.realLevel },
                                                    (0, D.uF)(R.strings.common.percentValue(), {
                                                        value: e > 0 && e < Ft ? Ft : e,
                                                    }),
                                                ),
                                            ),
                                        t >= 0 &&
                                            t < 100 &&
                                            r().createElement(
                                                se.animated.div,
                                                { className: wt.possibleLevel, style: o },
                                                (0, D.uF)(_, { value: g }),
                                            ),
                                    ),
                                u && r().createElement(At, { classMix: wt.acceleratedTrainingIcon }),
                            );
                        },
                    );
                var Bt = n(8485);
                const Dt = 33,
                    yt = 0,
                    St = !0,
                    It = 'play';
                const Tt = [
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
                function Nt() {
                    return (
                        (Nt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Nt.apply(this, arguments)
                    );
                }
                const Lt = (0, a.memo)(function (e) {
                        let t = e.width,
                            n = e.height,
                            u = e.getImageSource,
                            s = e.frameCount,
                            o = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? Dt : i,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? yt : c,
                            m = e.lastFrameIndex,
                            _ = void 0 === m ? s - 1 : m,
                            g = e.loop,
                            E = void 0 === g ? St : g,
                            p = e.state,
                            b = void 0 === p ? It : p,
                            h = e.onAnimationDone,
                            f = e.onAnimationComplete,
                            v = e.poster,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Tt);
                        const A = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = A.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    n = (n) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(n.img, -n.x, -n.y);
                                    };
                                switch (b) {
                                    case 'play':
                                        return (function () {
                                            const e = Mt(d, _, u),
                                                t = xt(d, _),
                                                a = window.setInterval(() => {
                                                    const r = t(),
                                                        u = e.get(r);
                                                    u
                                                        ? (null == o || o(r, u),
                                                          n(u),
                                                          r === _ &&
                                                              (null == f || f(),
                                                              E || (null == h || h(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && v ? { path: v, x: 0, y: 0 } : u(d),
                                                t = new Image();
                                            t.src = e.path;
                                            const a = () => n(Rt(e, t));
                                            return (
                                                t.addEventListener('load', a), () => t.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, u, d, _, E, o, f, h, v, b]),
                            r().createElement('canvas', Nt({}, C, { width: t, height: n, ref: A }))
                        );
                    }),
                    xt = (e, t) => {
                        let n = e;
                        return () => {
                            const a = n;
                            return (n += 1), n > t && (n = e), a;
                        };
                    },
                    Rt = (e, t) => Object.assign({}, e, { img: t }),
                    Mt = (e, t, n) => {
                        const a = new Map(),
                            r = {};
                        for (let u = e; u <= t; u++) {
                            const e = n(u),
                                t = r[e.path];
                            if (t) a.set(u, Rt(e, t));
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
                                    a.set(u, Rt(e, t));
                            }
                        }
                        return a;
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
                let Wt;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(Wt || (Wt = {}));
                const jt = (e, t, n) => {
                        const a = new Image();
                        (a.src = n(t)), e.push(a);
                    },
                    Gt =
                        ((0, a.memo)((e) => {
                            let t = e.width,
                                n = e.height,
                                u = e.getSrcByFrame,
                                s = e.frameCount,
                                o = e.onAnimate,
                                i = void 0 === o ? () => {} : o,
                                l = e.frameTime,
                                c = void 0 === l ? 33 : l,
                                d = e.initialFrameIndex,
                                m = void 0 === d ? 0 : d,
                                _ = e.loop,
                                g = void 0 === _ || _,
                                E = e.state,
                                p = void 0 === E ? Wt.Play : E,
                                b = e.onAnimationComplete,
                                h = void 0 === b ? () => {} : b,
                                f = e.revers,
                                v = void 0 !== f && f,
                                C = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(e, Pt);
                            const A = (0, a.useRef)(null);
                            return (
                                (0, a.useEffect)(() => {
                                    const e = A.current;
                                    if (!e) return;
                                    const a = s - 1,
                                        r = e.getContext('2d'),
                                        o = (a) => {
                                            r.clearRect(0, 0, e.width, e.height), r.drawImage(a, 0, 0, t, n);
                                        };
                                    if ('stop' === p) {
                                        const e = u(0),
                                            t = new Image();
                                        t.src = e;
                                        const n = () => o(t);
                                        return t.addEventListener('load', n), () => t.removeEventListener('load', n);
                                    }
                                    const l = ((e, t, n) => {
                                            const a = [];
                                            if (n) for (let n = e; n >= 0; n--) jt(a, n, t);
                                            else for (let n = 0; n < e; n++) jt(a, n, t);
                                            return a;
                                        })(s, u, v),
                                        d = ((e, t = 0) => {
                                            let n = t;
                                            return () => {
                                                const t = n;
                                                return (n += 1), n > e && (n = 0), t;
                                            };
                                        })(a, m),
                                        _ = setInterval(() => {
                                            const e = d(),
                                                t = l[e];
                                            o(l[e]), i(e, t), e === a && (h(), g || clearInterval(_));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [s, c, u, n, m, g, i, h, p, t, v]),
                                r().createElement('canvas', Ht({}, C, { width: t, height: n, ref: A }))
                            );
                        }),
                        'AnimatedNewSkill_base_6b'),
                    $t = 'AnimatedNewSkill_base__big_31';
                function zt(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Vt(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Vt(e, t);
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
                function Vt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                class Ut {
                    constructor() {
                        (this._intervalID = void 0),
                            (this._observers = void 0),
                            (this._intervalID = null),
                            (this._observers = new Map());
                    }
                    static get instance() {
                        return Ut._instance || (Ut._instance = new Ut()), Ut._instance;
                    }
                    subscribe(e) {
                        this._observers.set(e, e),
                            1 === this._observers.size &&
                                (this._intervalID = window.setInterval(() => {
                                    for (var e, t = zt(this._observers.values()); !(e = t()).done; ) {
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
                Ut._instance = void 0;
                const Zt = {
                        width: 24,
                        height: 24,
                        frameCount: 42,
                        chunk: { count: 1, columns: 42, rows: 1 },
                        getChunkPath: Ot('R.images.gui.maps.icons.sequence.new_skill.skill_'),
                    },
                    qt = {
                        width: 16,
                        height: 16,
                        frameCount: 32,
                        chunk: { count: 1, columns: 32, rows: 1 },
                        getChunkPath: Ot('R.images.gui.maps.icons.sequence.new_skill.skill_small_'),
                    },
                    Yt = ({ size: e }) => {
                        const t = e === Bt.O.Small ? qt : Zt,
                            n = (function (e) {
                                const t = e.chunk,
                                    n = t.rows * t.columns;
                                return (a) => {
                                    const r = a % n,
                                        u = (r % t.columns) * e.width,
                                        s = Math.trunc(r / t.columns) * e.height;
                                    return { path: e.getChunkPath(Math.trunc(a / n)), x: u, y: s };
                                };
                            })(t),
                            u = (0, a.useState)(Wt.Stop),
                            s = u[0],
                            o = u[1],
                            i = (0, a.useCallback)(() => {
                                o(Wt.Play);
                            }, [o]),
                            l = (0, a.useCallback)(() => {
                                o(Wt.Stop);
                            }, [o]);
                        return (
                            (0, a.useEffect)(() => (Ut.instance.subscribe(i), () => Ut.instance.unsubscribe(i)), [i]),
                            r().createElement(Lt, {
                                width: t.width,
                                height: t.height,
                                frameCount: t.frameCount,
                                getImageSource: n,
                                loop: !1,
                                state: s,
                                onAnimationDone: l,
                                className: p()(Gt, e === Bt.O.Big && $t),
                            })
                        );
                    },
                    Kt = { base: 'Skill_base_ba', base__big: 'Skill_base__big_eb' };
                function Xt() {
                    return (
                        (Xt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Xt.apply(this, arguments)
                    );
                }
                let Qt;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(Qt || (Qt = {}));
                const Jt = (0, a.memo)(
                        ({
                            name: e,
                            icon: t,
                            type: n,
                            size: u,
                            marginValue: s,
                            clipWidth: o,
                            tankmanId: i,
                            skillsEfficiency: l,
                            blinkStyle: c,
                            showNewSkillAnimation: d,
                            isTooltipEnabled: m = !0,
                            hasInstruction: _,
                        }) => {
                            const g = (0, a.useRef)(''),
                                E = (0, se.useSpring)(() => ({ from: { scale: 1 } })),
                                b = E[0],
                                f = E[1];
                            (0, a.useEffect)(() => {
                                n === Et.W.New &&
                                    g.current === Et.W.Possible &&
                                    f.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: ie.Fs },
                                    }),
                                    (g.current = n);
                            }, [n, f]);
                            const v = (0, a.useCallback)(() => {
                                switch (n) {
                                    case Et.W.Learned:
                                    case Et.W.Learning:
                                    case Et.W.Irrelevant:
                                        return {
                                            contentId:
                                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                    'resId',
                                                ),
                                            args: { tooltipId: Xe.HZ, tankmanID: i, skillName: e },
                                        };
                                    case Et.W.New:
                                    case Et.W.Possible:
                                        return {
                                            contentId: R.views.lobby.crew.tooltips.PerkAvailableTooltip('resId'),
                                            args: { tankmanID: i },
                                        };
                                }
                            }, [n, e, i]);
                            return r().createElement(
                                h.u,
                                Xt({}, v(), {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: m,
                                    ignoreShowDelay: !0,
                                }),
                                r().createElement(
                                    se.animated.div,
                                    { style: b },
                                    r().createElement(
                                        se.animated.div,
                                        { style: n === Et.W.Possible ? c : void 0 },
                                        r().createElement(
                                            'div',
                                            {
                                                className: p()(Kt.base, Kt[`base__${u}`]),
                                                style: { marginLeft: `${s}rem`, clipPath: `inset(0 ${o}rem 0 0)` },
                                            },
                                            !d || (n !== Et.W.Possible && n !== Et.W.New)
                                                ? r().createElement(Bt.d, {
                                                      icon: t,
                                                      size: u,
                                                      type: n,
                                                      efficiency: l,
                                                      hasInstruction: _,
                                                  })
                                                : r().createElement(Yt, { size: u }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    en = 'SkillsList_base_11',
                    tn = 'SkillsList_efficiency_72',
                    nn = 'SkillsList_container_c7',
                    an = 'SkillsList_row_03';
                function rn() {
                    return (
                        (rn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        rn.apply(this, arguments)
                    );
                }
                const un = ({
                        tankman: e,
                        isAcceleratedTrainingVisible: t = !1,
                        rowWidth: n = 220,
                        maxBigSkillsInRow: a = 16,
                        blinkStyle: u,
                        isSkillTooltipEnabled: s = !0,
                        showNewSkillAnimation: o = !1,
                    }) => {
                        const l = pt(e),
                            c = bt(l, a, n),
                            d = c[0],
                            m = c[1],
                            _ = c[2],
                            g = c[3],
                            E = c[4],
                            p = d > 1 ? Qt.Small : Qt.Big,
                            b = (0, oe.Y4)(e.skillsEfficiency) !== oe.H$.Normal,
                            h = -1 !== e.possibleSkillsEfficiency,
                            f = h ? e.possibleSkillsEfficiency : e.skillsEfficiency,
                            v = (0, oe.Y4)(f) !== oe.H$.Low;
                        return r().createElement(
                            'div',
                            { className: en },
                            b &&
                                r().createElement(
                                    se.animated.div,
                                    { style: h ? u : void 0 },
                                    r().createElement(ft.A, {
                                        efficiencyValue: f,
                                        tankmanID: e.tankmanID,
                                        className: tn,
                                    }),
                                ),
                            r().createElement(
                                'div',
                                { className: nn },
                                (0, ht.K)(d, (n) => {
                                    const a = Math.min(m, l - n * m),
                                        c = n === d - 1;
                                    return r().createElement(
                                        'div',
                                        { className: an, key: `row_${n}` },
                                        (0, ht.K)(a, (t) => {
                                            const l = m * n + t;
                                            return r().createElement(
                                                Jt,
                                                rn(
                                                    {},
                                                    ((e, t) => {
                                                        const n = t.skills.length;
                                                        let a = '',
                                                            r = '',
                                                            u = Et.W.Learned,
                                                            s = !1;
                                                        if (e < n) {
                                                            const n = i.U2(t.skills, e);
                                                            n &&
                                                                ((a = n.name),
                                                                (r = n.icon),
                                                                (u = n.type),
                                                                (s = n.hasInstruction));
                                                        } else
                                                            (u = e < n + t.newSkillsAmount ? Et.W.New : Et.W.Possible),
                                                                (r = Qe.jw);
                                                        return { name: a, icon: r, type: u, hasInstruction: s };
                                                    })(l, e),
                                                    {
                                                        size: p,
                                                        marginValue: 0 === t ? 0 : _,
                                                        key: `skill_${l}`,
                                                        clipWidth: t === a - 1 ? 0 : g - E,
                                                        tankmanId: e.tankmanID,
                                                        blinkStyle: u,
                                                        isTooltipEnabled: s,
                                                        showNewSkillAnimation: o,
                                                        skillsEfficiency: f,
                                                    },
                                                ),
                                            );
                                        }),
                                        c &&
                                            r().createElement(kt, {
                                                lastSkillLevel: e.possibleSkillsAmount > 0 ? -1 : e.lastSkillLevel,
                                                lastPossibleSkillLevel: e.lastPossibleSkillLevel,
                                                isLevelVisible: v,
                                                isAcceleratedTrainingVisible: t,
                                                skillSize: p,
                                                blinkStyle: u,
                                            }),
                                    );
                                }),
                            ),
                        );
                    },
                    sn = 'TankmanInfo_base_69',
                    on = 'TankmanInfo_base__disabled_36',
                    ln = 'TankmanInfo_tankmanTooltipHoverArea_9b',
                    cn = 'TankmanInfo_specialization_77',
                    dn = 'TankmanInfo_specialization__withManySkills_9a',
                    mn = 'TankmanInfo_skillsContainer_17',
                    _n = 'TankmanInfo_skillsContainer__withManySkills_00',
                    gn = (0, u.Pi)(({ slotIdx: e, tankman: t, layoutInfo: n, blinkStyle: a, isDisabled: u }) => {
                        const s = g().model,
                            o = (0, gt.GS)().mediaSize,
                            i = ((e, t, n, a) => {
                                const r = t.skillsEfficiency < Qe.yb,
                                    u = e.isCurrentLayoutQuickTraining || n;
                                let s,
                                    o = 220;
                                return (
                                    (u || n) && (o = a ? 146 : 190),
                                    r && (o -= 36),
                                    (s = r
                                        ? e.isCurrentLayoutHangar
                                            ? 12
                                            : e.isCurrentLayoutQuickTraining
                                              ? 10
                                              : 11
                                        : e.isCurrentLayoutQuickTraining || u
                                          ? 12
                                          : 16),
                                    [o, s, pt(t) > s]
                                );
                            })(n, t, s.computes.isChangeCrewButtonVisible(), o < gt.cJ.Small),
                            l = i[0],
                            c = i[1],
                            d = i[2],
                            m =
                                !n.isCurrentLayoutQuickTraining &&
                                -1 !== t.tankmanID &&
                                t.isLessMastered &&
                                t.skillsEfficiency < 100;
                        return r().createElement(
                            'div',
                            { className: p()(sn, u && on) },
                            r().createElement(
                                Ke.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Xe.v$, tankmanID: t.tankmanID },
                                },
                                r().createElement('div', { className: ln }),
                            ),
                            r().createElement(
                                'div',
                                { className: p()(cn, d && dn) },
                                r().createElement(rt, {
                                    tankmanID: t.tankmanID,
                                    slotIdx: e,
                                    roles: t.roles,
                                    name: t.fullName,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: p()(mn, d && _n) },
                                r().createElement(un, {
                                    tankman: t,
                                    isAcceleratedTrainingVisible: m,
                                    rowWidth: l,
                                    maxBigSkillsInRow: c,
                                    blinkStyle: a,
                                    showNewSkillAnimation: n.isCurrentLayoutHangar,
                                }),
                            ),
                        );
                    }),
                    En = 'QuickTrainingTankmanSlotContent_base_8d',
                    pn = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    bn = 'QuickTrainingTankmanSlotContent_highlight_72',
                    hn = 'QuickTrainingTankmanSlotContent_icon_7c',
                    fn = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    vn = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    Cn = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    An = { opacity: 0 },
                    wn = [{ opacity: 1 }, { opacity: 0 }],
                    Fn = (0, a.memo)(
                        ({
                            slotIdx: e,
                            tankman: t,
                            blinkStyle: n,
                            qtTankmanIconStyle: u,
                            layoutInfo: s,
                            isDisabled: o,
                        }) => {
                            const i = (0, a.useRef)(t.lastSkillLevelFull),
                                l = (0, a.useRef)(t.skills.length),
                                c = (0, se.useSpring)(() => ({ from: fn })),
                                d = c[0],
                                m = c[1],
                                _ = (0, se.useSpring)(() => ({ from: An })),
                                g = _[0],
                                E = _[1],
                                p = (0, a.useRef)(!1);
                            return (
                                (0, a.useEffect)(() => {
                                    t.hasPossibleProgress
                                        ? p.current ||
                                          (m.start({
                                              from: fn,
                                              to: vn,
                                              reverse: false,
                                              config: { duration: 300, easing: ie.BH },
                                          }),
                                          (p.current = !0))
                                        : p.current
                                          ? (t.skills.length > l.current || t.lastSkillLevelFull > i.current
                                                ? (m.start({
                                                      from: vn,
                                                      to: Cn,
                                                      delay: 200,
                                                      config: { duration: 500, easing: ie.BH },
                                                  }),
                                                  (i.current = t.lastSkillLevelFull),
                                                  (l.current = t.skills.length),
                                                  E.start({
                                                      from: An,
                                                      to: wn,
                                                      delay: 200,
                                                      config: { duration: 500, easing: ie.BH },
                                                  }))
                                                : m.start({ reset: !0, reverse: !0 }),
                                            (p.current = !1))
                                          : ((i.current = t.lastSkillLevelFull), (l.current = t.skills.length));
                                }, [m, E, t.lastSkillLevelFull, t.hasPossibleProgress, t.skills.length]),
                                r().createElement(
                                    'div',
                                    { className: En },
                                    r().createElement(se.animated.div, { className: bn, style: g }),
                                    r().createElement(
                                        se.animated.div,
                                        { style: u },
                                        r().createElement(Ye.G, {
                                            name: t.icon,
                                            size: Ye.U.c100x60Barracks,
                                            classMix: hn,
                                            isSkin: t.isInSkin,
                                        }),
                                    ),
                                    r().createElement(se.animated.div, { className: pn, style: d }),
                                    r().createElement(gn, {
                                        slotIdx: e,
                                        tankman: t,
                                        layoutInfo: s,
                                        blinkStyle: n,
                                        isDisabled: o,
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
                                            (null == (a = i.U2(e, u)) ? void 0 : a.name) !==
                                            (null == (r = i.U2(t, u)) ? void 0 : r.name)
                                        )
                                            return !1;
                                    }
                                    return !0;
                                })(n.skills, a.skills) &&
                                n.lastSkillLevelFull === a.lastSkillLevelFull &&
                                n.possibleSkillsAmount === a.possibleSkillsAmount &&
                                n.lastPossibleSkillLevel === a.lastPossibleSkillLevel &&
                                n.skillsEfficiency === a.skillsEfficiency &&
                                n.possibleSkillsEfficiency === a.possibleSkillsEfficiency
                            );
                        },
                    ),
                    kn = 'TankmanSlotContent_base_00',
                    Bn = 'TankmanSlotContent_icon_ef',
                    Dn = (0, a.memo)(({ slotIdx: e, tankman: t, layoutInfo: n, isDisabled: a }) =>
                        r().createElement(
                            'div',
                            { className: kn },
                            r().createElement(Ye.G, {
                                name: t.icon,
                                size: Ye.U.c100x60Barracks,
                                classMix: Bn,
                                isSkin: t.isInSkin,
                            }),
                            r().createElement(gn, { slotIdx: e, tankman: t, layoutInfo: n, isDisabled: a }),
                        ),
                    ),
                    yn = (0, a.memo)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: n,
                            layoutInfo: a,
                            vehicleName: u,
                            vehicleType: s,
                            isDisabled: o,
                            isSelected: i,
                            blinkSlotStyle: l,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: d,
                        }) =>
                            -1 === n.tankmanID
                                ? r().createElement(_t, {
                                      roles: t,
                                      layoutInfo: a,
                                      vehicleName: u,
                                      vehicleType: s,
                                      isDisabled: o,
                                      isSelected: i,
                                      slotIdx: e,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: d,
                                  })
                                : a.isCurrentLayoutQuickTraining
                                  ? r().createElement(Fn, {
                                        slotIdx: e,
                                        tankman: n,
                                        blinkStyle: l,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: a,
                                        isDisabled: o,
                                    })
                                  : r().createElement(Dn, { slotIdx: e, tankman: n, layoutInfo: a, isDisabled: o }),
                    ),
                    Sn = { transform: 'translateX(0rem)' },
                    In = { transform: 'translateX(41rem)' },
                    Tn = { opacity: 0 },
                    Nn = { opacity: 1 },
                    Ln = (0, u.Pi)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: n,
                            layoutInfo: u,
                            isSelected: s,
                            isAnySlotSelected: o,
                            isDisabled: l,
                            blinkSlotStyle: d,
                            blinkTankmanStyle: m,
                            qtTankmanIconStyle: _,
                        }) => {
                            const E = g(),
                                b = E.model,
                                h = E.controls,
                                f = ((e, t) => {
                                    const n = (0, j.Jp)(c.D9),
                                        a = (0, H.f)(
                                            () => n({ action: c.eX.Click, parentScreen: e, item: t }),
                                            [e, t],
                                            c.tL,
                                        );
                                    return (e) => {
                                        e.button === W.RIGHT && a();
                                    };
                                })(b.computes.getUiLoggingParentScreen(), c.x3.SlotContextMenu),
                                v = h.onSlotClick,
                                C = h.onChangeCrewClick,
                                A = b.computes.isChangeCrewButtonVisible(),
                                w = b.computes.isTankmanMode(),
                                F = b.isCrewLocked.get(),
                                k = b.vehicleName.get(),
                                B = b.vehicleType.get(),
                                D = !l && n.isInteractive && (!u.isCurrentLayoutQuickTraining || o),
                                y = (0, a.useCallback)(() => {
                                    D && !w && ((0, ue.G)(R.sounds.yes1()), v(e, n.tankmanID));
                                }, [e, n, v, w, D]),
                                S = (0, a.useCallback)(
                                    (t) => {
                                        t.stopPropagation(), F || ((0, ue.G)(R.sounds.yes1()), C(e, n.tankmanID));
                                    },
                                    [e, n, C, F],
                                ),
                                I = (0, a.useMemo)(() => ({ tankmanID: n.tankmanID, slotIdx: e }), [n, e]);
                            return r().createElement(
                                xe,
                                {
                                    args: I,
                                    isEnabled: !l,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    onMouseDown: f,
                                },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement(
                                        fe,
                                        {
                                            onClick: y,
                                            isSelected: s,
                                            isDisabled: l,
                                            isEmpty: -1 === n.tankmanID,
                                            layoutInfo: u,
                                            isEnabledForMouse: D,
                                        },
                                        r().createElement(
                                            'div',
                                            { className: Ge },
                                            n.hasWarning && r().createElement('div', { className: Ue }),
                                            s && r().createElement('div', { className: w ? qe : Ze }),
                                            r().createElement(
                                                ve,
                                                {
                                                    startState: Sn,
                                                    endState: In,
                                                    layoutInfo: u,
                                                    isPaused: !A,
                                                    className: p()(ze, A && Ve),
                                                    isTankmanMode: w,
                                                },
                                                r().createElement(yn, {
                                                    slotIdx: e,
                                                    roles: t,
                                                    tankman: n,
                                                    layoutInfo: u,
                                                    isDisabled: l,
                                                    vehicleName: k,
                                                    vehicleType: B,
                                                    blinkSlotStyle: d,
                                                    blinkTankmanStyle: m,
                                                    qtTankmanIconStyle: _,
                                                    isSelected: s,
                                                }),
                                            ),
                                            A &&
                                                r().createElement(
                                                    'div',
                                                    { onClick: S },
                                                    r().createElement(
                                                        ve,
                                                        {
                                                            startState: Tn,
                                                            endState: Nn,
                                                            layoutInfo: u,
                                                            isPaused: !A,
                                                            className: $e,
                                                            isTankmanMode: w,
                                                        },
                                                        r().createElement(je, {
                                                            isSelected: u.isCurrentLayoutMemberChange && s,
                                                            isLocked: F,
                                                            mainRole: i.U2(t, 0) || '',
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
                    xn = 'SlotsList_base_5f';
                function Rn() {
                    return (
                        (Rn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Rn.apply(this, arguments)
                    );
                }
                const Mn = { transform: 'translateX(0rem)' },
                    On = { transform: 'translateX(15rem)' },
                    Pn = (0, u.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: n }) => {
                        const u = g().model,
                            s = u.computes.isAnyEmptySlots(),
                            o = (0, se.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: ie.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            i = o[0],
                            l = o[1];
                        (0, a.useEffect)(() => {
                            s ? l.resume() : l.pause();
                        }, [l, s]);
                        const c = (0, se.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0.3 }, { opacity: 1 }],
                                    config: { duration: 400, easing: ie.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            d = c[0],
                            m = c[1];
                        (0, a.useEffect)(() => {
                            e.isCurrentLayoutQuickTraining ? m.resume() : m.pause();
                        }, [m, e.isCurrentLayoutQuickTraining]);
                        const _ = (0, se.useSpring)(() => ({
                                from: Mn,
                                to: On,
                                delay: 200,
                                config: { duration: 300, easing: ie.ei },
                                pause: !e.isCurrentLayoutQuickTraining,
                            }))[0],
                            E = (0, a.useCallback)(
                                (n) => t || (e.isCurrentLayoutQuickTraining && -1 === n),
                                [t, e.isCurrentLayoutQuickTraining],
                            );
                        return r().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: p()(xn, n) },
                            u.computes
                                .getSlots()
                                .map((t, n) =>
                                    r().createElement(
                                        Ln,
                                        Rn({}, t, {
                                            layoutInfo: e,
                                            key: `slot_${n}_${t.tankman.tankmanID}`,
                                            isSelected:
                                                !e.isCurrentLayoutHangar &&
                                                (u.computes.isSlotSelected(t.slotIdx) || u.computes.isTankmanMode()),
                                            isAnySlotSelected: u.computes.isAnySlotSelected(),
                                            isDisabled: E(t.tankman.tankmanID),
                                            blinkSlotStyle: d,
                                            blinkTankmanStyle: i,
                                            qtTankmanIconStyle: _,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Hn = (0, u.Pi)(() => {
                        const e = g().model,
                            t = e.isDisabled.get(),
                            n = e.hasDog.get(),
                            a = e.computes.getLayoutInfo();
                        return r().createElement(
                            'div',
                            { className: ne },
                            e.computes.isButtonBarVisible() &&
                                r().createElement(
                                    'div',
                                    { className: ae },
                                    r().createElement(te, { isWidgetDisabled: t }),
                                ),
                            r().createElement(Pn, { layoutInfo: a, isWidgetDisabled: t, className: re }),
                            n && r().createElement(Se, { layoutInfo: a, isDisabled: t }),
                        );
                    }),
                    Wn = { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') },
                    jn = (0, a.memo)(() => r().createElement(_, { options: Wn }, r().createElement(Hn, null)));
            },
            5801: (e, t, n) => {
                'use strict';
                n.d(t, { p: () => Te });
                var a = n(6179),
                    r = n.n(a),
                    u = n(6483),
                    s = n.n(u),
                    o = n(2106),
                    i = n(6373);
                let l;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(l || (l = {}));
                var c = n(3403),
                    d = n(3415),
                    m = n(9480),
                    _ = n(9631);
                const g = 'FilterTitle_base_a7',
                    E = 'FilterTitle_label_05',
                    p = 'FilterTitle_discount_42',
                    b = 'FilterTitle_discountIcon_30',
                    h = ({ label: e, hasDiscount: t, className: n }) =>
                        r().createElement(
                            'div',
                            { className: s()(g, n) },
                            r().createElement('div', { className: E }, e),
                            t && r().createElement('div', { className: p }, r().createElement('div', { className: b })),
                        );
                let f;
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
                })(f || (f = {}));
                var v = n(3649);
                const C = 'ToggleIcon_base_59',
                    A = 'ToggleIcon_base__small_3e',
                    w = 'ToggleIcon_icon_e7',
                    F = r().memo(function ({ icon: e, isSmall: t = !1, classNames: n }) {
                        return r().createElement(
                            'div',
                            { className: s()(C, t && A) },
                            r().createElement('div', {
                                className: s()(w, null == n ? void 0 : n.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var k = n(9690);
                const B = 'VehicleTier_base_9c',
                    D = 'VehicleTier_base__small_fc',
                    y = ({ level: e, isSmall: t = !1 }) =>
                        r().createElement('div', { className: s()(B, t && D) }, (0, k.HG)(e)),
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
                        n === f.VehicleTier
                            ? r().createElement(y, { isSmall: a, level: Number(e) })
                            : r().createElement(F, {
                                  icon: t,
                                  isSmall: a,
                                  classNames: {
                                      icon: s()(S[`icon__${n}`], S[`icon__${n}${(0, v.e)(e)}`], u && S.icon__selected),
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
                    M = ({
                        id: e,
                        type: t,
                        label: n,
                        hasDiscount: a,
                        filters: u,
                        onClick: o,
                        className: i,
                        toggleProps: l,
                        theme: c = L.Default,
                    }) => {
                        const g = c === L.InPopup;
                        return r().createElement(
                            'div',
                            { className: s()(T.base, T[`base__${c}`], i) },
                            g && r().createElement(h, { className: T.title, label: n, hasDiscount: a }),
                            r().createElement(
                                'div',
                                { className: T.content },
                                m.UI(u, ({ id: n, isSelected: a, tooltip: u, icon: i, counter: c }) =>
                                    r().createElement(
                                        d.l,
                                        { key: n, tooltipArgs: x(u), className: T.toggle },
                                        r().createElement(
                                            _.C,
                                            N({}, l, {
                                                className: s()(T.toggle, null == l ? void 0 : l.className),
                                                isActive: a,
                                                onClick: () => (null == o ? void 0 : o(e, n)),
                                                counter: c,
                                            }),
                                            r().createElement(I, {
                                                id: n,
                                                icon: i,
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
                var O = n(9197);
                const P = (0, n(3215).q)()(
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
                    H = P[0],
                    W = P[1];
                var j = n(3457),
                    G = n(3616),
                    $ = n(1037),
                    z = n(9367);
                const V = 'PopupButton_base_7c',
                    U = 'PopupButton_popupButtonLabel_ed',
                    Z = 'PopupButton_buttonIconWrapper_d7',
                    q = 'PopupButton_buttonIcon_e0',
                    Y = 'PopupButton_buttonIcon__isHighlighted_84',
                    K = 'PopupButton_discountAlert_c8',
                    X = ({ isHighlighted: e, hasDiscountAlert: t, popoverDirection: n = $.IC.Bottom }) =>
                        r().createElement(
                            'div',
                            { className: V },
                            r().createElement('div', { className: U }, R.strings.crew.filter.popup.button.title()),
                            r().createElement(
                                G.Z,
                                {
                                    contentId: R.views.lobby.crew.popovers.FilterPopoverView('resId'),
                                    targetId: R.views.lobby.crew.widgets.FilterPanelWidget('resId'),
                                    direction: n,
                                },
                                r().createElement(
                                    'div',
                                    { id: 'popup_btn', className: Z },
                                    r().createElement(
                                        _.C,
                                        { type: j.L$.ghost, size: j.qE.small, isActive: e, hasIndicator: !1 },
                                        r().createElement('div', { className: s()(q, e && Y) }),
                                    ),
                                    t && r().createElement(z.Q, { className: K }),
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
                                i.i,
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
                    oe = 'normal',
                    ie = 'disabled',
                    le = 'alert',
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
                var be = n(7727);
                const he = {
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
                    fe = r().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: n = ae,
                            size: u = de,
                            variant: o = oe,
                            placeholder: i = '',
                            highlighted: l,
                            withClear: c,
                            selectOnFocus: d = !0,
                            maxLength: m,
                            iconSource: _,
                            classMix: g,
                            onMouseEnter: E,
                            onMouseLeave: p,
                            onMouseDown: b,
                            onMouseUp: h,
                            onClick: f,
                            onChange: v,
                            onClear: C,
                            onFocus: A,
                            onBlur: w,
                        }) => {
                            const F = (0, a.useState)(!1),
                                k = F[0],
                                B = F[1],
                                D = (0, a.useRef)(null),
                                y = (0, a.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                S = o !== ie,
                                I = (0, a.useCallback)(
                                    (e) => {
                                        S && (B(!0), A && A(e));
                                    },
                                    [S, A],
                                ),
                                T = (0, a.useCallback)(
                                    (e) => {
                                        S && !y.current.mouseOver && (B(!1), w && w(e));
                                    },
                                    [S, w],
                                );
                            (0, a.useEffect)(() => {
                                S && k && d && D.current && D.current.select();
                            }, [d, k, S]);
                            const N = (0, a.useCallback)(
                                    (e) => {
                                        S && v && v(e.target.value);
                                    },
                                    [S, v],
                                ),
                                L = (0, a.useCallback)(
                                    (e) => {
                                        S && ((y.current.mouseOver = !0), E && E(e));
                                    },
                                    [S, E],
                                ),
                                x = (0, a.useCallback)(
                                    (e) => {
                                        S &&
                                            D.current &&
                                            (y.current.mouseDown && D.current.focus(),
                                            (y.current.mouseOver = !1),
                                            p && p(e));
                                    },
                                    [S, p],
                                ),
                                R = (0, a.useCallback)(
                                    (e) => {
                                        S && ((y.current.mouseDown = !0), b && b(e));
                                    },
                                    [S, b],
                                ),
                                M = (0, a.useCallback)(
                                    (e) => {
                                        S && ((y.current.mouseDown = !1), h && h(e));
                                    },
                                    [S, h],
                                ),
                                O = (0, a.useCallback)(
                                    (e) => {
                                        if (S && D.current) {
                                            (!k || (k && e.target !== D.current)) && D.current.focus(), f && f(e);
                                        }
                                    },
                                    [k, S, f],
                                ),
                                P = i || me[n],
                                H = Boolean(_),
                                W = s()(
                                    he.base,
                                    he[`base__${u}`],
                                    l && he[`base__${o}`],
                                    k && he.base__focused,
                                    H && he.base__withIcon,
                                    g,
                                ),
                                j = (0, a.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                G = s()(he.input, he[`input__${n}`]),
                                $ = s()(he.icon, he[`icon__${n}`]),
                                z = s()(he.placeholder, he[`placeholder__${n}`]);
                            return r().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: L,
                                    onMouseDown: R,
                                    onMouseUp: M,
                                    onMouseLeave: x,
                                    onClick: O,
                                },
                                !S && r().createElement('div', { className: he.disabled }),
                                j && r().createElement('div', { style: j, className: $ }),
                                r().createElement('input', {
                                    ref: D,
                                    className: G,
                                    type: _e[n],
                                    value: t,
                                    onChange: N,
                                    disabled: !S,
                                    onFocus: I,
                                    onBlur: T,
                                    maxLength: m,
                                }),
                                P && !t && !k && r().createElement('div', { className: z }, P),
                                c &&
                                    r().createElement('div', {
                                        className: he.clear,
                                        onClick: (e) => {
                                            be.$.playClick(), C && C(e);
                                        },
                                        onMouseEnter: be.$.playHighlight,
                                    }),
                            );
                        },
                    ),
                    ve = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    Ce = ({ variant: e, show: t = !0, helperText: n, helperIcon: u, classMix: o }) => {
                        const i = (0, a.useMemo)(() => {
                                const t =
                                    u ||
                                    (function (e) {
                                        return e === le ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [u, e]),
                            l = s()(ve.base, t && ve.base__shown),
                            c = s()(ve.message, ve[`message__${e}`], o);
                        return r().createElement(
                            'div',
                            { className: l },
                            i && r().createElement('div', { className: ve.icon, style: i }),
                            r().createElement('div', { className: c }, n),
                        );
                    },
                    Ae = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    we = [
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
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const ke = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    Be = (e) => {
                        let t = e.componentId,
                            n = e.type,
                            u = void 0 === n ? ae : n,
                            o = e.variant,
                            i = void 0 === o ? oe : o,
                            l = e.size,
                            c = void 0 === l ? de : l,
                            m = e.value,
                            _ = e.tooltipArgs,
                            g = e.helperText,
                            E = void 0 === g ? '' : g,
                            p = e.isValidated,
                            b = void 0 === p || p,
                            h = e.showHelper,
                            f = void 0 === h || h,
                            v = e.error,
                            C = e.options,
                            A = e.onFocus,
                            w = e.onMouseEnter,
                            F = e.onMouseLeave,
                            k = e.onMouseUp,
                            B = e.onMouseDown,
                            D = e.onChange,
                            y = e.classMix,
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
                            })(e, we);
                        const N = (0, a.useState)(m),
                            L = N[0],
                            x = N[1],
                            R = (0, a.useState)(b),
                            M = R[0],
                            O = R[1],
                            P = (0, a.useMemo)(() => Object.assign({}, ke, C), [C]),
                            H = (0, a.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: m, type: u }),
                            W = (0, a.useCallback)((e) => {
                                e !== H.current.value &&
                                    ((H.current.value = e), (H.current.isChangeHandled = !1), x(e));
                            }, []),
                            j = (0, a.useCallback)(
                                (e) => {
                                    let t = !0;
                                    P.performChangeValidation &&
                                        (t = P.changesValidator ? P.changesValidator(e) : pe(e, H.current.type)),
                                        D && D(e, t);
                                },
                                [D, P],
                            ),
                            G = (0, a.useCallback)(() => {
                                H.current.debounceTimeout &&
                                    (window.clearTimeout(H.current.debounceTimeout), (H.current.debounceTimeout = 0));
                            }, []),
                            $ = (0, a.useCallback)(() => W(''), [W]);
                        (0, a.useEffect)(() => () => G(), [G]);
                        const z = (0, a.useCallback)(
                            (e) => {
                                G(),
                                    P.debounceTime
                                        ? (H.current.debounceTimeout = window.setTimeout(() => {
                                              j(e);
                                          }, P.debounceTime))
                                        : j(e);
                            },
                            [j, G, P.debounceTime],
                        );
                        (0, a.useEffect)(() => {
                            H.current.isChangeHandled ||
                                H.current.value !== L ||
                                (z(H.current.value), (H.current.isChangeHandled = !0));
                        }, [L, z]),
                            (0, a.useEffect)(() => {
                                H.current.isChangeHandled && m !== H.current.value && ((H.current.value = m), x(m)),
                                    (H.current.type = u);
                            }, [m, u]),
                            (0, a.useEffect)(() => {
                                O(b);
                            }, [b, i]);
                        const V = (0, a.useCallback)((e) => w && w(e), [w]),
                            U = (0, a.useCallback)(
                                (e) => {
                                    P.disableHighlightOnFocus && M && O(!1), A && A(e);
                                },
                                [M, A, P.disableHighlightOnFocus],
                            ),
                            Z = (0, a.useCallback)((e) => k && k(e), [k]),
                            q = (0, a.useCallback)((e) => B && B(e), [B]),
                            Y = (0, a.useCallback)((e) => F && F(e), [F]),
                            K = (0, a.useMemo)(
                                () =>
                                    P.withTypeIcon
                                        ? (function (e, t) {
                                              return e === re ? Ee.$dyn(`search_${t}`) : '';
                                          })(u, c)
                                        : '',
                                [u, c, P.withTypeIcon],
                            ),
                            X = E || ge[u],
                            Q = Boolean(L),
                            J = v ? ce : i,
                            ee = Boolean(v) || M,
                            te = (0, a.useMemo)(
                                () => ('boolean' == typeof P.withClear ? Q && P.withClear : Q && u === re),
                                [u, Q, P],
                            ),
                            ne = s()(Ae.base, Ae[`base__${c}`], Ae[`base__${i}`], y);
                        return r().createElement(
                            'div',
                            { id: t, className: ne, onMouseEnter: V, onMouseDown: q, onMouseUp: Z, onMouseLeave: Y },
                            r().createElement(
                                d.l,
                                { tooltipArgs: _ },
                                r().createElement(
                                    fe,
                                    Fe(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: K,
                                            size: c,
                                            type: u,
                                            variant: J,
                                            value: L,
                                            withClear: te,
                                            highlighted: ee,
                                            selectOnFocus: P.selectOnFocus,
                                            maxLength: P.maxLength,
                                            classMix: S,
                                            onFocus: U,
                                            onChange: W,
                                            onClear: $,
                                        },
                                        T,
                                    ),
                                ),
                            ),
                            X &&
                                r().createElement(
                                    'div',
                                    { className: Ae.helper },
                                    r().createElement(Ce, {
                                        variant: J,
                                        show: f && (P.isPermanentHelper || ee),
                                        helperText: v || X,
                                        helperIcon: P.helperIconSource,
                                        classMix: I,
                                    }),
                                ),
                        );
                    },
                    De = ({ value: e, placeholder: t, tooltipHeader: n, onChange: a, className: u, tooltipBody: s }) =>
                        r().createElement(
                            i.i,
                            { header: null != n ? n : void 0, body: s, isEnabled: Boolean(n || s) },
                            r().createElement(Be, {
                                type: re,
                                placeholder: null != t ? t : void 0,
                                value: e,
                                classMix: u,
                                onChange: a,
                            }),
                        ),
                    ye = {
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
                            b = n.popoverTooltipBody.get();
                        return r().createElement(
                            'div',
                            { className: s()(ye.base, ye[`base__${m}`]) },
                            r().createElement(
                                'div',
                                { className: ye.titleWrapper },
                                r().createElement(O.C, {
                                    title: n.title.get(),
                                    isGlowVisible: E,
                                    from: c,
                                    to: d,
                                    className: ye.title,
                                    classNames: { counterGlow: ye.counterGlow },
                                }),
                                g && r().createElement(ne, { onClick: a.resetFilter }),
                            ),
                            r().createElement(
                                'div',
                                { className: ye.filters },
                                n.isSearchEnabled.get() &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(De, {
                                            value: n.searchString.get(),
                                            onChange: a.search,
                                            className: ye.search,
                                            placeholder: n.searchPlaceholder.get(),
                                            tooltipHeader: n.searchTooltipHeader.get(),
                                            tooltipBody: n.searchTooltipBody.get(),
                                        }),
                                        m === l.Barracks && r().createElement('div', { className: ye.separator }),
                                    ),
                                _.label && r().createElement('div', { className: ye.filterLabel }, _.label),
                                r().createElement(M, {
                                    id: _.id,
                                    label: _.label,
                                    type: _.type,
                                    hasDiscount: _.hasDiscount,
                                    filters: n.filters.get(),
                                    toggleProps: { type: o.L.ghost },
                                    onClick: a.updateFilter,
                                }),
                                n.isPopoverEnabled.get() &&
                                    r().createElement(
                                        i.i,
                                        {
                                            header: null != p ? p : void 0,
                                            body: null != b ? b : void 0,
                                            isEnabled: Boolean(p || b),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: ye.popupButtonWrapper },
                                            r().createElement(X, {
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
                        return r().createElement(H, { options: Ie }, r().createElement(Se, { popoverDirection: e }));
                    });
            },
            8271: (e, t, n) => {
                'use strict';
                let a;
                n.d(t, { W: () => a }),
                    (function (e) {
                        (e.New = 'new'),
                            (e.Learned = 'learned'),
                            (e.Learning = 'learning'),
                            (e.Irrelevant = 'irrelevant'),
                            (e.Possible = 'possible');
                    })(a || (a = {}));
            },
            2603: (e, t, n) => {
                'use strict';
                n.d(t, { Br: () => s, HZ: () => a, M4: () => o, XG: () => u, rs: () => i, v$: () => r });
                const a = 'crewPerkGf',
                    r = 'tankman',
                    u = 'tankmanNotRecruited',
                    s = 'skillsEfficiency',
                    o = 'crewSkillUntrained',
                    i = 'vehicleCrewMemberInHangar';
            },
            771: (e, t, n) => {
                'use strict';
                n.d(t, { Lv: () => a, jw: () => s, sU: () => r, y$: () => o, yb: () => u });
                const a = -1,
                    r = -1,
                    u = 1,
                    s = 'new_skill',
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
            130: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'EfficiencyIndicator_base_34',
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
                    base__small: 'SkillIcon_base__small_d0',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
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
            9426: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, n, a] = deferred[i], u = !0, s = 0; s < t.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((u = !1), a < r && (r = a));
                    if (u) {
                        deferred.splice(i--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, n, a];
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
        (__webpack_require__.j = 906),
        (() => {
            var e = { 906: 0, 3: 0, 595: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        r,
                        [u, s, o] = n,
                        i = 0;
                    if (u.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(n); i < u.length; i++)
                        (r = u[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(4929));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
