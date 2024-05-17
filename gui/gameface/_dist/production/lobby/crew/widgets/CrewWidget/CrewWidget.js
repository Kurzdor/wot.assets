(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                t.d(u, { L$: () => l.L, u5: () => d });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7727),
                    i = t(6179),
                    o = t.n(i),
                    s = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: c,
                    mixClass: d,
                    soundHover: m,
                    soundClick: _,
                    onMouseEnter: E,
                    onMouseMove: g,
                    onMouseDown: A,
                    onMouseUp: F,
                    onMouseLeave: b,
                    onClick: C,
                }) => {
                    const h = (0, i.useRef)(null),
                        v = (0, i.useState)(t),
                        D = v[0],
                        w = v[1],
                        B = (0, i.useState)(!1),
                        f = B[0],
                        p = B[1],
                        k = (0, i.useState)(!1),
                        y = k[0],
                        S = k[1],
                        I = (0, i.useCallback)(() => {
                            c || (h.current && (h.current.focus(), w(!0)));
                        }, [c]),
                        x = (0, i.useCallback)(
                            (e) => {
                                D && null !== h.current && !h.current.contains(e.target) && w(!1);
                            },
                            [D],
                        ),
                        T = (0, i.useCallback)(
                            (e) => {
                                c || (C && C(e));
                            },
                            [c, C],
                        ),
                        L = (0, i.useCallback)(
                            (e) => {
                                c || (null !== m && (0, r.G)(m), E && E(e), S(!0));
                            },
                            [c, m, E],
                        ),
                        O = (0, i.useCallback)(
                            (e) => {
                                g && g(e);
                            },
                            [g],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                c || (F && F(e), p(!1));
                            },
                            [c, F],
                        ),
                        M = (0, i.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, r.G)(_), A && A(e), t && I(), p(!0));
                            },
                            [c, _, A, I, t],
                        ),
                        N = (0, i.useCallback)(
                            (e) => {
                                c || (b && b(e), p(!1));
                            },
                            [c, b],
                        ),
                        H = a()(
                            s.Z.base,
                            s.Z[`base__${n}`],
                            {
                                [s.Z.base__disabled]: c,
                                [s.Z[`base__${u}`]]: u,
                                [s.Z.base__focus]: D,
                                [s.Z.base__highlightActive]: f,
                                [s.Z.base__firstHover]: y,
                            },
                            d,
                        ),
                        W = a()(s.Z.state, s.Z.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, i.useEffect)(() => {
                            w(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: h,
                                className: H,
                                onMouseEnter: L,
                                onMouseMove: O,
                                onMouseUp: P,
                                onMouseDown: M,
                                onMouseLeave: N,
                                onClick: T,
                            },
                            n !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: s.Z.back }),
                                    o().createElement('span', { className: s.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: W },
                                o().createElement('span', { className: s.Z.stateDisabled }),
                                o().createElement('span', { className: s.Z.stateHighlightHover }),
                                o().createElement('span', { className: s.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: s.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = (0, i.memo)(c);
            },
            2106: (e, u, t) => {
                let n, a;
                t.d(u, { L: () => n, q: () => a }),
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
                    })(a || (a = {}));
            },
            9987: (e, u, t) => {
                t.d(u, { A: () => c });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6179),
                    i = t.n(r),
                    o = t(8055);
                const s = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        r = e.fadeInAnimation,
                        c = e.hide,
                        d = e.maximumNumber,
                        m = e.className,
                        _ = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, s);
                    const E = n ? null : t,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const A = E && !g && E > d,
                        F = a()(
                            o.Z.base,
                            o.Z[`base__${u}`],
                            r && o.Z.base__animated,
                            c && o.Z.base__hidden,
                            !E && o.Z.base__pattern,
                            n && o.Z.base__empty,
                            m,
                        );
                    return i().createElement(
                        'div',
                        l({ className: F }, _),
                        i().createElement('div', { className: o.Z.bg }),
                        i().createElement('div', { className: o.Z.pattern }),
                        i().createElement(
                            'div',
                            { className: a()(o.Z.value, g && o.Z.value__text) },
                            A ? d : E,
                            A && i().createElement('span', { className: o.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            3495: (e, u, t) => {
                t.d(u, { Y: () => d });
                var n = t(3138),
                    a = t(6179),
                    r = t(1043),
                    i = t(5262);
                const o = n.O.client.getSize('rem'),
                    s = o.width,
                    l = o.height,
                    c = Object.assign({ width: s, height: l }, (0, i.T)(s, l, r.j)),
                    d = (0, a.createContext)(c);
            },
            1039: (e, u, t) => {
                t(3138), t(6536), t(6179), t(3495), t(1043), t(5262);
            },
            6010: (e, u, t) => {
                var n = t(6179),
                    a = t(7382),
                    r = t(3495);
                const i = ['children'];
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, i);
                    const o = (0, n.useContext)(r.Y),
                        s = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        d = o.small,
                        m = o.extraSmall,
                        _ = o.extraLargeWidth,
                        E = o.largeWidth,
                        g = o.mediumWidth,
                        A = o.smallWidth,
                        F = o.extraSmallWidth,
                        b = o.extraLargeHeight,
                        C = o.largeHeight,
                        h = o.mediumHeight,
                        v = o.smallHeight,
                        D = o.extraSmallHeight,
                        w = { extraLarge: b, large: C, medium: h, small: v, extraSmall: D };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && d) return u;
                        if (t.extraSmall && m) return u;
                    } else {
                        if (t.extraLargeWidth && _) return (0, a.H)(u, t, w);
                        if (t.largeWidth && E) return (0, a.H)(u, t, w);
                        if (t.mediumWidth && g) return (0, a.H)(u, t, w);
                        if (t.smallWidth && A) return (0, a.H)(u, t, w);
                        if (t.extraSmallWidth && F) return (0, a.H)(u, t, w);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && b) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && h) return u;
                            if (t.smallHeight && v) return u;
                            if (t.extraSmallHeight && D) return u;
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
                (0, n.memo)(o);
            },
            7382: (e, u, t) => {
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
                t.d(u, { YN: () => n.Y });
                t(6010), t(1039);
                var n = t(3495);
            },
            1043: (e, u, t) => {
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
                var n;
                function a(e, u, t) {
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
                        a = (function (e, u) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
                    };
                }
                t.d(u, { T: () => a }),
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
            1037: (e, u, t) => {
                t.d(u, { IC: () => n });
                var n,
                    a = t(6483),
                    r = t.n(a),
                    i = t(6373),
                    o = t(1856),
                    s = t(3138),
                    l = t(2039),
                    c = t(5099),
                    d = t(7727),
                    m = t(9916),
                    _ = t(6179),
                    E = t.n(_),
                    g = t(4769);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(n || (n = {}));
                const A = ['__left', '__right', '__top', '__bottom'];
                (0, _.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: n = {} }, a) => {
                        const F = (0, _.useRef)(null),
                            b = (0, _.useRef)(null),
                            C = (0, _.useRef)(null),
                            h = (0, _.useState)(window.decorator && window.decorator.directionType),
                            v = h[0],
                            D = h[1],
                            w = (0, _.useCallback)(() => {
                                d.$.playClick(), s.O.view.sendEvent.close();
                            }, []),
                            B = (0, _.useCallback)(() => {
                                d.$.playHighlight();
                            }, []),
                            f = r()(g.Z.arrow, g.Z[`arrow${A[v]}`]);
                        (0, l.b)(
                            () => (
                                s.O.client.events.mouse.enableOutside(),
                                s.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (t ? t() : s.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const p = (0, _.useCallback)(
                                (e) => {
                                    let u = e.target;
                                    do {
                                        if (u === F.current || u === C.current) return;
                                        u = u.parentNode;
                                    } while (u);
                                    const n = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = s.O.client.getMouseGlobalPosition(),
                                            u = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                            t =
                                                e.x < n.boundX ||
                                                e.x > n.boundX + n.boundWidth ||
                                                e.y > n.boundY + n.boundHeight ||
                                                e.y < n.boundY;
                                        if (u && !t) return;
                                    }
                                    t ? t() : s.O.view.sendEvent.close('popover');
                                },
                                [F, C, t],
                            ),
                            k = (0, _.useCallback)(
                                () => (
                                    s.O.view.freezeTextureBeforeResize(),
                                    (0, o.v)(() => {
                                        if (b.current) {
                                            const e = b.current.scrollWidth,
                                                u = b.current.scrollHeight;
                                            s.O.view.resize(e, u), D(window.decorator.directionType);
                                        }
                                    })
                                ),
                                [],
                            );
                        return (
                            (0, _.useImperativeHandle)(a, () => ({ updateSize: k })),
                            (0, l.b)(() => {
                                s.O.view.setInputPaddingsRem(58);
                            }),
                            (0, _.useEffect)(() => {
                                document.addEventListener('mousedown', p, { capture: !0 });
                                const e = (0, c.B)((0, m.Eu)());
                                return (
                                    !u && e.promise.then(() => k()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', p);
                                    }
                                );
                            }, [k, p, u]),
                            E().createElement(
                                'div',
                                { className: g.Z.base, ref: b },
                                E().createElement(
                                    'div',
                                    { className: g.Z.decorator },
                                    E().createElement(
                                        'div',
                                        { className: g.Z.content, ref: F },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            E().createElement(
                                                i.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                E().createElement('div', {
                                                    className: g.Z.closeBtn,
                                                    onClick: w,
                                                    onMouseEnter: B,
                                                    ref: C,
                                                }),
                                            ),
                                    ),
                                    E().createElement('div', { className: f, style: n.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, u, t) => {
                t.d(u, { Z: () => l });
                var n = t(1037),
                    a = t(9916),
                    r = t(6179),
                    i = t.n(r);
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
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let u = e.contentId,
                        t = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? n.IC.Top : l,
                        d = e.targetId,
                        m = e.args,
                        _ = e.onClick,
                        E = e.children,
                        g = e.isEnabled,
                        A = void 0 === g || g,
                        F = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, o);
                    const b = (0, r.useRef)(null),
                        C = (0, r.useCallback)(() => {
                            if ((0, a.wU)()) return (0, a.SW)();
                            b.current && (0, a.P3)(u, c, b.current, t, d, m);
                        }, [u, c, m, t, d]);
                    return i().createElement(
                        'div',
                        s(
                            {
                                ref: b,
                                onMouseDown:
                                    ((h = E.props.onClick),
                                    (e) => {
                                        A && (C(), _ && _(e), h && h(e));
                                    }),
                            },
                            F,
                        ),
                        E,
                    );
                    var h;
                };
            },
            7078: (e, u, t) => {
                t.d(u, { t: () => s });
                var n = t(6179),
                    a = t.n(n),
                    r = t(2056);
                const i = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const s = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, i);
                    return a().createElement(
                        r.u,
                        o(
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
            6373: (e, u, t) => {
                t.d(u, { i: () => l });
                var n = t(2056),
                    a = t(6179),
                    r = t.n(a);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, i);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, m, { body: t, header: l, note: c, alert: d });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [d, t, l, c, m]);
                        return r().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((g = null == m ? void 0 : m.hasHtmlContent),
                                        g ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                _,
                            ),
                            u,
                        );
                        var g;
                    };
            },
            2056: (e, u, t) => {
                t.d(u, { u: () => l });
                var n = t(7902),
                    a = t(9916),
                    r = t(6179);
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
                                    type: a.B0.TOOLTIP,
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
                            a = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onClick,
                            _ = e.ignoreShowDelay,
                            E = void 0 !== _ && _,
                            g = e.ignoreMouseClick,
                            A = void 0 !== g && g,
                            F = e.decoratorId,
                            b = void 0 === F ? 0 : F,
                            C = e.isEnabled,
                            h = void 0 === C || C,
                            v = e.targetId,
                            D = void 0 === v ? 0 : v,
                            w = e.onShow,
                            B = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, i);
                        const p = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, r.useMemo)(() => D || (0, n.F)().resId, [D]),
                            y = (0, r.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (s(t, b, { isMouseEvent: !0, on: !0, arguments: o(a) }, k),
                                    w && w(),
                                    (p.current.isVisible = !0));
                            }, [t, b, a, k, w]),
                            S = (0, r.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        s(t, b, { on: !1 }, k),
                                        p.current.isVisible && B && B(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, b, k, B]),
                            I = (0, r.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', I, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', I, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === h && S();
                            }, [h, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return h
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(y, E ? 100 : 400)),
                                                      l && l(e),
                                                      x && x(e));
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
                                      f,
                                  ),
                              )
                            : u;
                        var x;
                    };
            },
            1856: (e, u, t) => {
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
            8246: (e, u, t) => {
                t.d(u, { U: () => o });
                var n = t(3138);
                function a(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return r(e, u);
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
                function r(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: u = 0, getRoot: t = i, context: r = 'model' } = {}) {
                    const o = new Map();
                    function s(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = o.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = t(u),
                            a = r.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, a);
                    };
                    return {
                        subscribe: (t, a) => {
                            const i = 'string' == typeof a ? `${r}.${a}` : r,
                                s = n.O.view.addModelObserver(i, u, !0);
                            return o.set(s, t), e && t(l(a)), s;
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
                            for (var e, t = a(o.keys()); !(e = t()).done; ) {
                                s(e.value, u);
                            }
                        },
                        unsubscribe: s,
                    };
                }
            },
            3215: (e, u, t) => {
                t.d(u, { q: () => s });
                var n = t(4598),
                    a = t(9174),
                    r = t(6179),
                    i = t.n(r),
                    o = t(8246);
                const s = () => (e, u) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, r.useRef)([]),
                                _ = (t, r, i) => {
                                    var s;
                                    const l = o.U(r),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == i ? void 0 : i.getter) ? s : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        E = e({
                                            mode: t,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const r = null != u ? u : d(e),
                                                        i = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const r = null != u ? u : d(e),
                                                        i = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = d(u);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, u) => ((e[u] = a.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((u) => {
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
                                                            i = Object.entries(r),
                                                            o = i.reduce(
                                                                (e, [u, t]) => ((e[t] = a.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        i.forEach(([u, t]) => {
                                                                            o[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: _,
                                        }),
                                        g = { mode: t, model: E, externalModel: c, cleanup: _ };
                                    return {
                                        model: E,
                                        controls: 'mocks' === t && i ? i.controls(g) : u(g),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                g = (0, r.useState)(s),
                                A = g[0],
                                F = g[1],
                                b = (0, r.useState)(() => _(s, l, d)),
                                C = b[0],
                                h = b[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? h(_(A, l, d)) : (E.current = !0);
                                }, [d, A, l]),
                                (0, r.useEffect)(() => {
                                    F(s);
                                }, [s]),
                                (0, r.useEffect)(
                                    () => () => {
                                        C.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [C],
                                ),
                                i().createElement(t.Provider, { value: C }, c)
                            );
                        },
                        () => (0, r.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${u}`,
                                        i = l[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => i,
                    });
                var n = t(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2472: (e, u, t) => {
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
                t.d(u, { O: () => a });
                var n = t(5959);
                const a = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                t.d(u, { U: () => a });
                var n = t(2472);
                const a = {
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
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => p,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => B,
                        getScale: () => A,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => D,
                        isFocused: () => h,
                        pxToRem: () => F,
                        remToPx: () => b,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => k,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
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
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function E(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: b(u.x), y: b(u.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    p = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    o = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                        var a;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? a : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                t.d(u, { jv: () => a, yR: () => n });
                function n(e) {
                    return e;
                }
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
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
            6536: (e, u, t) => {
                t(6179);
            },
            5415: (e, u, t) => {
                t.d(u, { GS: () => l, cJ: () => i });
                var n = t(6179),
                    a = t(7739),
                    r = t(1043);
                let i, o, s;
                !(function (e) {
                    (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                    })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge');
                    })(s || (s = {}));
                const l = () => {
                    const e = (0, n.useContext)(a.YN),
                        u = e.width,
                        t = e.height,
                        r = ((e) => {
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
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            2039: (e, u, t) => {
                t.d(u, { b: () => a });
                var n = t(6179);
                const a = (e) => {
                    (0, n.useEffect)(e, []);
                };
            },
            4489: (e, u, t) => {
                t.d(u, { f: () => r });
                var n = t(5139),
                    a = t(6179);
                function r(e, u, t) {
                    const r = (0, a.useMemo)(() => (0, n.Z)(t, e), u);
                    return (0, a.useEffect)(() => r.cancel, [r]), r;
                }
            },
            5521: (e, u, t) => {
                let n, a;
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
                    })(a || (a = {}));
            },
            9480: (e, u, t) => {
                function n(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                t.d(u, { U2: () => n, UI: () => r, sE: () => i });
                function a(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function r(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function i(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        const n = a(e[t]);
                        if (u(n, t, e)) return n;
                    }
                }
            },
            5099: (e, u, t) => {
                t.d(u, { B: () => n });
                const n = (e) => {
                    let u = !1;
                    return {
                        promise: new Promise((t, n) => {
                            e.then((e) => !u && t(e)).catch((e) => !u && n(e));
                        }),
                        cancel() {
                            u = !0;
                        },
                    };
                };
            },
            4385: (e, u, t) => {
                t.d(u, { K: () => n });
                const n = (e, u) => {
                    const t = [];
                    for (let n = 0; n < e; n++) t.push(u(n));
                    return t;
                };
            },
            7727: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e);
                }
                t.d(u, { $: () => a, G: () => n });
                const a = {
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
                t.d(u, { BN: () => r, dL: () => i, uF: () => a });
                t(1281);
                let n;
                function a(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(n || (n = {}));
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
                        (u = R.strings.common.percentValue()),
                        (t = { value: e }),
                        u.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]))
                    );
                    var u, t;
                };
            },
            5139: (e, u, t) => {
                function n(e, u, t, n) {
                    let a,
                        r = !1,
                        i = 0;
                    function o() {
                        a && clearTimeout(a);
                    }
                    function s(...s) {
                        const l = this,
                            c = Date.now() - i;
                        function d() {
                            (i = Date.now()), t.apply(l, s);
                        }
                        r ||
                            (n && !a && d(),
                            o(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== u &&
                                  (a = setTimeout(
                                      n
                                          ? function () {
                                                a = void 0;
                                            }
                                          : d,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                        (s.cancel = function () {
                            o(), (r = !0);
                        }),
                        s
                    );
                }
                t.d(u, { Z: () => n });
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => r });
                var n = t(3138);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                a.__instance = void 0;
                const r = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
                t.d(u, {
                    B3: () => s,
                    Z5: () => i.Z5,
                    B0: () => o,
                    c9: () => C,
                    wU: () => w,
                    ry: () => F,
                    Eu: () => b,
                    SW: () => v,
                    P3: () => D,
                });
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
                const a = n;
                var r = t(1358);
                var i = t(8613);
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
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    _ = t(3138);
                const E = ['args'];
                function g(e, u, t, n, a, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, a);
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            g(r, n, a, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(r, n, a, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
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
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    h = () => C(o.CLOSE),
                    v = () => C(o.POP_OVER, { on: !1 }),
                    D = (e, u, t, n, a = R.invalid('resId'), r) => {
                        const i = _.O.view.getViewGlobalPosition(),
                            s = t.getBoundingClientRect(),
                            l = s.x,
                            c = s.y,
                            d = s.width,
                            m = s.height,
                            E = {
                                x: _.O.view.pxToRem(l) + i.x,
                                y: _.O.view.pxToRem(c) + i.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(m),
                            };
                        C(o.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: a,
                            direction: u,
                            bbox: A(E),
                            on: !0,
                            args: r,
                        });
                    },
                    w = () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                    B = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var f = t(7572);
                const p = a.instance,
                    k = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => C(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: v,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: D,
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, h);
                        },
                        handleViewEvent: C,
                        onBindingsReady: F,
                        onLayoutReady: b,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: w,
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = k;
            },
            8613: (e, u, t) => {
                t.d(u, { Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            3458: (e, u, t) => {
                let n;
                t.d(u, { Z0: () => a, in: () => n, sx: () => r }),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(n || (n = {}));
                const a = 'tooltip_watched',
                    r = 2;
                let i;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(i || (i = {}));
            },
            4828: (e, u, t) => {
                t.d(u, { AB: () => _, D9: () => n, eX: () => r, sC: () => i, tL: () => a, x3: () => l });
                const n = 'crew',
                    a = 2e3;
                let r, i, o, s, l, c, d, m;
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
                    })(i || (i = {})),
                    (function (e) {
                        (e.DocumentChange = 'document_change_dialog'), (e.RetrainSingle = 'retrain_single_dialog');
                    })(o || (o = {})),
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
            1943: (e, u, t) => {
                t.d(u, { Jp: () => d, Sr: () => m });
                var n = t(6179),
                    a = t(3458);
                const r = ['action', 'timeLimit'];
                const i = 'metrics',
                    o = () => Date.now(),
                    s = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: a }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    l = (e, u) => {
                        const t = (0, n.useCallback)(
                            (t, n = a.in.Info, r) => {
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
                    c = (e, u) => {
                        const t = l(e, u),
                            a = (0, n.useRef)(new Map()),
                            r = (0, n.useRef)(new Map()),
                            i = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    (void 0 !== u && u > 0) || a.current.set(e, o());
                                },
                                [a],
                            ),
                            s = (0, n.useCallback)(() => {
                                a.current.clear(), r.current.clear();
                            }, [a, r]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === r.current.get(e) &&
                                        r.current.set(e, o());
                                },
                                [a, r],
                            ),
                            d = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    if (void 0 === u) return;
                                    const t = r.current.get(e);
                                    if (void 0 === t) return;
                                    r.current.delete(e);
                                    const n = o() - t;
                                    a.current.set(e, u + n);
                                },
                                [a, r],
                            ),
                            m = (0, n.useCallback)(
                                (e, u = 0, n, i) => {
                                    const s = a.current.get(e);
                                    if (void 0 === s) return;
                                    void 0 !== r.current.get(e) && d(e), a.current.delete(e);
                                    const l = (o() - s) / 1e3;
                                    l <= u ||
                                        ((i = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(i, l)),
                                        t(e, n, i));
                                },
                                [a, r, t, d],
                            );
                        return [(e) => i(e), (e, u, t, n) => m(e, u, t, n), () => s(), (e) => c(e), (e) => d(e)];
                    },
                    d = (e) => {
                        const u = l(e, i),
                            t = (0, n.useCallback)(
                                (e) => {
                                    u(e.action, e.logLevel, s(e));
                                },
                                [u],
                            );
                        return (e) => t(e);
                    },
                    m = (e, u) => {
                        const t = ((e) => {
                                const u = c(e, i),
                                    t = u[0],
                                    a = u[1],
                                    r = u[2],
                                    o = u[3],
                                    l = u[4],
                                    d = (0, n.useCallback)(
                                        (e) => {
                                            const u = e.action,
                                                t = e.timeLimit,
                                                n = e.logLevel;
                                            a(u, t, n, s(e));
                                        },
                                        [a],
                                    );
                                return [(e) => t(e), (e) => d(e), () => r(), (e) => o(e), (e) => l(e)];
                            })(e),
                            o = t[0],
                            l = t[1],
                            d = u.action,
                            m = u.timeLimit,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(u, r);
                        return (0, n.useMemo)(
                            () => ({
                                onShow: () => o(d || a.Z0),
                                onHide: () => l(Object.assign({ action: d || a.Z0, timeLimit: m || a.sx }, _)),
                            }),
                            [d, m, _, o, l],
                        );
                    };
            },
            5563: (e, u, t) => {
                t.d(u, { A: () => _ });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7078),
                    i = t(2603),
                    o = t(771),
                    s = t(3649),
                    l = t(9916),
                    c = t(6179),
                    d = t.n(c),
                    m = t(130);
                const _ = (0, c.memo)(({ efficiencyValue: e, tankmanID: u = o.y$, className: t }) => {
                    const n = e === o.sU,
                        c = n ? { tooltipId: i.M4 } : { tooltipId: i.Br, tankmanID: u };
                    return d().createElement(
                        r.t,
                        { targetId: R.views.lobby.crew.widgets.CrewWidget('resId'), args: c, isEnabled: u !== o.y$ },
                        d().createElement(
                            'div',
                            { className: a()(m.Z.base, t) },
                            n
                                ? d().createElement('div', { className: m.Z.icon })
                                : d().createElement(
                                      'div',
                                      { className: a()(m.Z.percent, e === o.yb && m.Z.percent__full) },
                                      (0, s.dL)(l.Z5.getNumberFormat(100 * e, l.B3.INTEGRAL)),
                                  ),
                        ),
                    );
                });
            },
            2768: (e, u, t) => {
                t.d(u, { F: () => s, y: () => l });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6179),
                    i = t.n(r),
                    o = t(4458);
                let s;
                !(function (e) {
                    (e.c14x14 = 'small'),
                        (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c180x135 = 'dialogs');
                })(s || (s = {}));
                const l = i().memo(function ({ iconName: e, size: u = s.c24x24, className: t }) {
                    var n;
                    return i().createElement('div', {
                        style: {
                            backgroundImage: `url(${null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(u)) ? void 0 : n.$dyn(e)})`,
                        },
                        className: a()(o.Z.base, o.Z[`base__${u}`], t),
                    });
                });
            },
            7077: (e, u, t) => {
                t.d(u, { G: () => c, U: () => l });
                var n = t(6483),
                    a = t.n(n),
                    r = t(3649),
                    i = t(6179),
                    o = t.n(i),
                    s = t(3938);
                let l;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(l || (l = {}));
                const c = ({ name: e, size: u = l.c100x60, classMix: t, isSkin: n = !1 }) => {
                    const c = (0, i.useMemo)(() => {
                        try {
                            let t = R.images.gui.maps.icons.tankmen.icons.$dyn(u);
                            n && (t = t.$dyn('crewSkins'));
                            const a = t.$dyn((0, r.BN)(e));
                            if (!a) throw Error;
                            return { backgroundImage: `url(${a})` };
                        } catch (u) {
                            console.error('Cant find resource in TankmanIcon: ', e);
                        }
                    }, [e, u, n]);
                    return o().createElement('div', { style: c, className: a()(s.Z.base, s.Z[`base__${u}`], t) });
                };
            },
            8485: (e, u, t) => {
                t.d(u, { O: () => d, d: () => g });
                var n = t(6483),
                    a = t.n(n),
                    r = t(8271),
                    i = t(771),
                    o = t(6179),
                    s = t.n(o),
                    l = t(2768),
                    c = t(9426);
                let d;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(d || (d = {}));
                const m = { [d.Big]: l.F.c22x22, [d.Small]: l.F.c14x14 };
                var _;
                !(function (e) {
                    (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                })(_ || (_ = {}));
                const E = (e, u, t) =>
                        e === r.W.Possible || e === r.W.New
                            ? _.LightYellow
                            : e === r.W.Irrelevant
                              ? _.Grey
                              : u === i.sU
                                ? e === r.W.Learning
                                    ? _.Yellow
                                    : _.Grey
                                : u < i.yb
                                  ? t
                                      ? _.Grey
                                      : _.Red
                                  : e === r.W.Learning
                                    ? _.Yellow
                                    : _.Grey,
                    g = s().memo(function ({
                        icon: e,
                        type: u,
                        size: t,
                        efficiency: n = i.yb,
                        hasInstruction: o = !1,
                    }) {
                        const d = (!o && n === i.sU) || u === r.W.Irrelevant;
                        return s().createElement(
                            'div',
                            { className: a()(c.Z.base, c.Z[`base__${t}`]) },
                            s().createElement('div', {
                                className: a()(c.Z.background, c.Z[`background__${E(u, n, o)}`]),
                            }),
                            e &&
                                s().createElement(
                                    'div',
                                    { className: c.Z.container },
                                    s().createElement(l.y, {
                                        iconName: e,
                                        size: m[t],
                                        className: a()(d && c.Z.disabledIcon),
                                    }),
                                    d && s().createElement('div', { className: c.Z.disabled }),
                                ),
                        );
                    });
            },
            9631: (e, u, t) => {
                t.d(u, { C: () => _ });
                var n = t(6483),
                    a = t.n(n),
                    r = t(3457),
                    i = t(2106),
                    o = t(9987),
                    s = t(6179),
                    l = t.n(s),
                    c = t(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const _ = l().memo(function (e) {
                    let u = e.isActive,
                        t = e.counter,
                        n = e.className,
                        s = e.children,
                        _ = e.type,
                        E = void 0 === _ ? i.L.secondary : _,
                        g = e.size,
                        A = void 0 === g ? i.q.small : g,
                        F = e.hasIndicator,
                        b = void 0 === F || F,
                        C = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, d);
                    return l().createElement(
                        'div',
                        { className: a()(c.Z.base, n, u && c.Z.base__active) },
                        l().createElement(r.u5, m({ type: E, size: A, mixClass: c.Z.button }, C), s),
                        l().createElement('div', { className: c.Z.overlay }),
                        b && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(t) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(o.A, { value: t, size: 'small' }),
                            ),
                    );
                });
            },
            7160: (e, u, t) => {
                t.d(u, { BH: () => r, Fs: () => i, ei: () => n, qb: () => a });
                const n = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    a = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    r = (e) => {
                        const u = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + u * Math.pow(e - 1, 2);
                    },
                    i = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, u, t) => {
                t.d(u, { Gc: () => i, H$: () => o, Y4: () => s, gO: () => r, wP: () => a });
                var n = t(771);
                t(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let a;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(a || (a = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let r;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(r || (r = {}));
                const i = (e, u = !1, t = null) => {
                    const n = u ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (t ? n.$dyn(`${t}Case`) : n).$dyn(e);
                };
                let o;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(o || (o = {}));
                const s = (e) => (e === n.sU ? o.Untrained : e < n.yb ? o.Low : o.Normal);
            },
            7321: (e, u, t) => {
                var n = t(6179),
                    a = t.n(n),
                    r = t(3403),
                    i = t(3215),
                    o = t(4598),
                    s = t(9480),
                    l = t(3946),
                    c = t(4828);
                const d = [
                        R.views.lobby.crew.TankmanContainerView('resId'),
                        R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                        R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                        R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    ],
                    m = (0, i.q)()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
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
                                t = (0, l.Om)(
                                    () =>
                                        s.UI(u.slots.get(), (e) =>
                                            Object.assign({}, e, {
                                                roles: s.UI(e.roles, o.yR),
                                                tankman: Object.assign({}, e.tankman, {
                                                    roles: s.UI(e.tankman.roles, o.yR),
                                                    skills: s.UI(e.tankman.skills, (e) => Object.assign({}, e)),
                                                }),
                                            }),
                                        ),
                                    { equals: o.jv },
                                ),
                                n = (0, l.Om)(() => Boolean(s.sE(t(), (e) => -1 === e.tankman.tankmanID))),
                                a = (0, l.Om)(() => 1 === u.slots.get().length),
                                r = (0, l.Om)((e) => u.selectedSlotIdx.get() === e),
                                i = (0, l.Om)(() => -1 !== u.selectedSlotIdx.get()),
                                m = (0, l.Om)((e) => {
                                    var u;
                                    return null == (u = s.U2(t(), e)) ? void 0 : u.tankman;
                                }),
                                _ = (0, l.Om)((e) => {
                                    var u;
                                    const n = null == (u = s.U2(t(), e)) ? void 0 : u.tankman;
                                    return n ? n.skills.length + n.newSkillsAmount + n.possibleSkillsAmount : 0;
                                }),
                                E = (0, l.Om)(() => {
                                    return (
                                        (e = u.currentLayoutID.get()),
                                        (t = u.previousLayoutID.get()),
                                        {
                                            isCurrentLayoutHangar: e === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isCurrentLayoutTankmanContainer: d.includes(e),
                                            isCurrentLayoutQuickTraining:
                                                e === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isCurrentLayoutMemberChange:
                                                e === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutHangar: t === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isPreviousLayoutTankmanContainer: d.includes(t),
                                            isPreviousLayoutQuickTraining:
                                                t === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isPreviousLayoutMemberChange:
                                                t === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutBarrack: t === R.views.lobby.crew.BarracksView('resId'),
                                        }
                                    );
                                    var e, t;
                                }),
                                g = (0, l.Om)(() => {
                                    const e = E(),
                                        u = e.isCurrentLayoutHangar,
                                        t = e.isCurrentLayoutQuickTraining;
                                    return !a() && !u && !t;
                                }),
                                A = (0, l.Om)(() => !a() && u.buttonsBar.get().isVisible),
                                F = (0, l.Om)(() => {
                                    return (e = u.currentLayoutID.get()), c.AB[e] || c.sC.Hangar;
                                    var e;
                                });
                            return Object.assign({}, u, {
                                computes: {
                                    getSlots: t,
                                    isSlotSelected: r,
                                    isAnySlotSelected: i,
                                    getSlotTankman: m,
                                    getAllSkillsAmount: _,
                                    isAnyEmptySlots: n,
                                    isTankmanMode: a,
                                    isChangeCrewButtonVisible: g,
                                    isButtonBarVisible: A,
                                    getLayoutInfo: E,
                                    getUiLoggingParentScreen: F,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onSlotClick: e.createCallback((e, u) => ({ slotIdx: e, tankmanID: u }), 'onSlotClick'),
                            onChangeCrewClick: e.createCallback(
                                (e, u) => ({ slotIdx: e, tankmanID: u }),
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
                var g = t(6483),
                    A = t.n(g),
                    F = t(6373),
                    b = t(2056);
                let C;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(C || (C = {}));
                const h = 'ButtonsBar_base_9c',
                    v = 'ButtonsBar_button_d1',
                    D = 'ButtonsBar_button__crewOperaions_70',
                    w = 'ButtonsBar_button__crewBooks_b4',
                    B = 'ButtonsBar_button__toggle_64';
                var f = t(3457),
                    p = t(9987),
                    k = t(3649);
                const y = 'CrewBookButton_base_da',
                    S = 'CrewBookButton_button_ee',
                    I = 'CrewBookButton_icon_11',
                    x = 'CrewBookButton_discount_6b',
                    T = 'CrewBookButton_counter_5d',
                    L = (0, r.Pi)(({ classMix: e, isWidgetDisabled: u }) => {
                        const t = E(),
                            n = t.model,
                            r = t.controls,
                            i = n.crewBooks.get(),
                            o = r.onCrewBooksClick,
                            s = i.isDisabled || u;
                        return a().createElement(
                            F.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, k.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: i.totalAmount,
                                }),
                            },
                            a().createElement(
                                'div',
                                { id: 'crew_book_button', className: A()(y, e) },
                                a().createElement(
                                    f.u5,
                                    { type: f.L$.primary, mixClass: S, disabled: s, onClick: o },
                                    a().createElement('div', { className: I }),
                                ),
                                !s &&
                                    '0' !== i.newAmount &&
                                    a().createElement(
                                        'div',
                                        { className: T },
                                        a().createElement(p.A, { value: i.newAmount }),
                                    ),
                                !s && i.hasDiscount && a().createElement('div', { className: x }),
                            ),
                        );
                    });
                var O = t(3616);
                const P = ['children'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const N = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, P);
                    return a().createElement(
                        O.Z,
                        M(
                            {
                                decoratorId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                contentId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent('resId'),
                            },
                            t,
                        ),
                        u,
                    );
                };
                var H = t(4489);
                let W;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(W || (W = {}));
                var j = t(1943);
                const V = 'CrewOperationsButton_base_e3',
                    U = 'CrewOperationsButton_button_8e',
                    Z = 'CrewOperationsButton_icon_0c',
                    G = 'CrewOperationsButton_autoReturnIcon_f0',
                    z = (0, r.Pi)(({ classMix: e, isWidgetDisabled: u }) => {
                        const t = E().model,
                            n = ((e) => {
                                const u = (0, j.Jp)(c.D9);
                                return (t) => u({ action: c.eX.Click, parentScreen: e, item: t });
                            })(t.computes.getUiLoggingParentScreen()),
                            r = t.crewOperations.get();
                        return a().createElement(
                            'div',
                            { id: 'crew_operations_button', className: A()(V, e) },
                            a().createElement(
                                N,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !u,
                                    onClick: () => n(c.x3.CrewOperationsButton),
                                },
                                a().createElement(
                                    F.i,
                                    {
                                        header: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.header(),
                                        body: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.body(),
                                    },
                                    a().createElement(
                                        'div',
                                        null,
                                        a().createElement(
                                            f.u5,
                                            { type: f.L$.primary, mixClass: U, disabled: u },
                                            a().createElement('div', { className: Z }),
                                        ),
                                        r.isAutoReturnOn && a().createElement('div', { className: G }),
                                    ),
                                ),
                            ),
                        );
                    });
                var $ = t(9631);
                const q = 'CrewToggleButton_base_03',
                    Y = 'CrewToggleButton_button_89',
                    K = 'CrewToggleButton_iconContainer_f9',
                    Q = 'CrewToggleButton_icon_a7';
                let X;
                !(function (e) {
                    (e.AcceleratedTraining = 'acceleratedTraining'), (e.WotPlus = 'wotPlus');
                })(X || (X = {}));
                const J = (0, n.memo)(({ type: e, state: u, isDisabled: t, onClick: r, classMix: i }) => {
                        const o = (0, n.useMemo)(() => {
                            const t = u === C.Disabled ? C.Off : u;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${t})`,
                            };
                        }, [e, u]);
                        return a().createElement(
                            'div',
                            { className: A()(q, i) },
                            a().createElement(
                                $.C,
                                {
                                    type: f.L$.primary,
                                    isActive: u === C.On,
                                    disabled: t || u === C.Disabled,
                                    className: Y,
                                    onClick: r,
                                },
                                a().createElement(
                                    'div',
                                    { className: K },
                                    a().createElement('div', { className: Q, style: o }),
                                ),
                            ),
                        );
                    }),
                    ee = {
                        [C.On]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on,
                        [C.Off]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_off,
                        [C.Disabled]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                        [C.Hidden]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                    },
                    ue = (0, r.Pi)(({ isWidgetDisabled: e }) => {
                        const u = E(),
                            t = u.model,
                            n = u.controls,
                            r = t.acceleratedTraining.get(),
                            i = t.wotPlus.get(),
                            o = n.onAcceleratedTrainingClick,
                            s = n.onWotPlusClick,
                            l = ee[r.state];
                        return a().createElement(
                            'div',
                            { className: h },
                            a().createElement(z, { classMix: A()(v, D), isWidgetDisabled: e }),
                            a().createElement(L, { classMix: A()(v, w), isWidgetDisabled: e }),
                            r.state !== C.Hidden &&
                                a().createElement(
                                    F.i,
                                    { header: l.header(), body: l.body() },
                                    a().createElement(
                                        'div',
                                        null,
                                        a().createElement(J, {
                                            type: X.AcceleratedTraining,
                                            state: r.state,
                                            isDisabled: e || r.isDisabled,
                                            onClick: o,
                                            classMix: A()(v, B),
                                        }),
                                    ),
                                ),
                            i.state !== C.Hidden &&
                                a().createElement(
                                    b.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    a().createElement(
                                        'div',
                                        null,
                                        a().createElement(J, {
                                            type: X.WotPlus,
                                            state: i.state,
                                            isDisabled: e || i.isDisabled,
                                            onClick: s,
                                            classMix: A()(v, B),
                                        }),
                                    ),
                                ),
                        );
                    }),
                    te = 'CrewWidgetApp_base_cc',
                    ne = 'CrewWidgetApp_buttonsBar_e5',
                    ae = 'CrewWidgetApp_slotsList_ee';
                var re = t(7727),
                    ie = t(7030),
                    oe = t(8018),
                    se = t(7160);
                const le = 'BaseSlot_base_97',
                    ce = 'BaseSlot_base__hovered_61',
                    de = 'BaseSlot_base__inactive_7e',
                    me = 'BaseSlot_hoverGlow_de',
                    _e = 'BaseSlot_hoverGlow__visible_f4',
                    Ee = 'BaseSlot_selectedGlow_25',
                    ge = 'BaseSlot_selectedGlow__visible_2f',
                    Ae = 'BaseSlot_hover_e9',
                    Fe = 'BaseSlot_hover__visible_1f',
                    be = 'BaseSlot_disabled_67',
                    Ce = ({
                        onClick: e,
                        children: u,
                        isSelected: t = !1,
                        isDisabled: r,
                        isEnabledForMouse: i,
                        isEmpty: o = !1,
                        layoutInfo: s,
                    }) => {
                        const l = (0, n.useState)(!1),
                            c = l[0],
                            d = l[1],
                            m = c && (!t || (!o && s.isCurrentLayoutMemberChange)),
                            _ = m && !o && !s.isCurrentLayoutHangar;
                        return a().createElement(
                            'div',
                            {
                                className: A()(le, (c || t) && !s.isCurrentLayoutHangar && ce, (t || !i) && de),
                                onClick: e,
                                onMouseEnter: () => {
                                    i && !t && (re.$.playHighlight(), d(!0));
                                },
                                onMouseLeave: () => {
                                    d(!1);
                                },
                            },
                            !s.isCurrentLayoutMemberChange && a().createElement('div', { className: A()(Ee, t && ge) }),
                            a().createElement('div', { className: A()(me, _ && _e) }),
                            a().createElement('div', { className: A()(Ae, m && Fe) }),
                            r && a().createElement('div', { className: be }),
                            u,
                        );
                    },
                    he = ({
                        startState: e,
                        endState: u,
                        layoutInfo: t,
                        isPaused: r,
                        children: i,
                        className: o,
                        isTankmanMode: s,
                    }) => {
                        const l = (0, ie.useSpring)(
                                () => ({ from: e, to: u, config: { duration: 300, easing: se.qb }, pause: r }),
                                [r],
                            )[0],
                            c = (0, n.useMemo)(
                                () =>
                                    t.isCurrentLayoutHangar || t.isCurrentLayoutQuickTraining || s
                                        ? e
                                        : (!t.isPreviousLayoutHangar && !t.isPreviousLayoutBarrack) || r
                                          ? u
                                          : l,
                                [t, r, l, e, u, s],
                            );
                        return a().createElement(ie.animated.div, { className: o, style: c }, i);
                    },
                    ve = 'DogSlot_base_8f',
                    De = 'DogSlot_icon_ba',
                    we = 'DogSlot_container_63',
                    Be = 'DogSlot_roleAndName_c9',
                    fe = 'DogSlot_role_5c',
                    pe = 'DogSlot_name_9c',
                    ke = 'DogSlot_btnDetails_b7',
                    ye = { transform: 'translateX(0rem)' },
                    Se = (0, r.Pi)(({ isDisabled: e, layoutInfo: u }) => {
                        const t = E(),
                            r = t.model,
                            i = t.controls,
                            o = r.nation.get(),
                            s = i.onDogMoreInfoClick,
                            l = (0, n.useCallback)(() => {
                                !e && (0, re.G)(oe.gO.RUDY);
                            }, [e]),
                            c = (0, n.useCallback)(
                                (u) => {
                                    u.stopPropagation(), !e && s();
                                },
                                [s, e],
                            ),
                            d = (0, ie.useSpring)(
                                () => ({
                                    from: ye,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: se.qb },
                                    pause: !u.isCurrentLayoutQuickTraining,
                                }),
                                [u],
                            )[0],
                            m = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(o);
                        return a().createElement(
                            F.i,
                            { header: m.header(), body: m.body() },
                            a().createElement(
                                'div',
                                null,
                                a().createElement(
                                    Ce,
                                    { onClick: l, isDisabled: e, isEnabledForMouse: !1, layoutInfo: u },
                                    a().createElement(
                                        he,
                                        {
                                            startState: ye,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: u,
                                            isPaused: !1,
                                            className: ve,
                                            isTankmanMode: !1,
                                        },
                                        a().createElement(ie.animated.div, { className: De, style: d }),
                                        a().createElement(
                                            'div',
                                            { className: we },
                                            a().createElement(
                                                'div',
                                                { className: Be },
                                                a().createElement('div', { className: fe }),
                                                a().createElement(
                                                    'div',
                                                    { className: pe },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(o).name(),
                                                ),
                                            ),
                                            a().createElement(
                                                'div',
                                                { className: ke },
                                                a().createElement(
                                                    f.u5,
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
                var Ie = t(9916);
                const xe = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: r,
                        isEnabled: i = !0,
                        onMouseDown: o,
                    }) => {
                        const s = (0, n.useCallback)(() => {
                                (0, Ie.c9)(Ie.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    re.$.playYes();
                            }, [r, u, t, a]),
                            l = (0, n.useCallback)(() => {
                                (0, Ie.c9)(Ie.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    o && o(e), ((e) => e.button === W.RIGHT)(e) && s();
                                },
                                [o, s],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === i && l();
                            }, [i, l]),
                            i ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Te = ['children'];
                function Le() {
                    return (
                        (Le =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Le.apply(this, arguments)
                    );
                }
                const Oe = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Te);
                        return a().createElement(
                            xe,
                            Le({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                            u,
                        );
                    },
                    Re = 'ChangeCrewButton_base_0f',
                    Pe = 'ChangeCrewButton_base__inactive_77',
                    Me = 'ChangeCrewButton_normalState_07',
                    Ne = 'ChangeCrewButton_normalState__hide_db',
                    He = 'ChangeCrewButton_hoverState_68',
                    We = 'ChangeCrewButton_hoverState__show_89',
                    je = (0, r.Pi)(({ isSelected: e, isLocked: u, mainRole: t, isFemale: r }) => {
                        const i = E().model,
                            o = (0, n.useState)(!1),
                            s = o[0],
                            l = o[1],
                            d = (0, j.Sr)(c.D9, {
                                item: c.x3.ChangeButtonTooltip,
                                action: c.eX.Viewed,
                                parentScreen: i.computes.getUiLoggingParentScreen(),
                            }),
                            m = (0, n.useMemo)(
                                () =>
                                    u
                                        ? [
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.header(),
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.body(),
                                          ]
                                        : [
                                              '',
                                              (0, k.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, oe.Gc)(t, r, oe.wP.Objective),
                                              }),
                                          ],
                                [u, r, t],
                            ),
                            _ = m[0],
                            g = m[1];
                        return a().createElement(
                            F.i,
                            {
                                header: _,
                                body: g,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            a().createElement(
                                'div',
                                {
                                    className: A()(Re, (u || e) && Pe),
                                    onMouseEnter: () => {
                                        d.onShow(), u || e || (re.$.playHighlight(), l(!0));
                                    },
                                    onMouseLeave: () => {
                                        d.onHide(), l(!1);
                                    },
                                },
                                a().createElement('div', { className: A()(Me, s && Ne) }),
                                a().createElement('div', { className: A()(He, (e || s) && We) }),
                            ),
                        );
                    }),
                    Ve = 'CrewSlot_base_ac',
                    Ue = 'CrewSlot_changeCrew_02',
                    Ze = 'CrewSlot_content_5b',
                    Ge = 'CrewSlot_content__withChangeCrewButton_4e',
                    ze = 'CrewSlot_warningHighlight_ff',
                    $e = 'CrewSlot_selectHighlight_50',
                    qe = 'CrewSlot_selectHighlightInTankmanMode_37';
                var Ye = t(7077),
                    Ke = t(7078),
                    Qe = t(2603),
                    Xe = t(771);
                const Je = 'SpecializationAndName_base_ef',
                    eu = 'SpecializationAndName_roleWrapper_87',
                    uu = 'SpecializationAndName_role_55',
                    tu = 'SpecializationAndName_role__withGap_35',
                    nu = 'SpecializationAndName_name_aa',
                    au = ({ roles: e, tankmanID: u = Xe.y$, slotIdx: t, name: n }) =>
                        a().createElement(
                            'div',
                            { className: Je },
                            a().createElement(
                                Ke.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Qe.rs, slotIdx: t, tankmanID: u },
                                },
                                a().createElement(
                                    'div',
                                    { className: eu },
                                    s.UI(e, (e, u) =>
                                        a().createElement('div', {
                                            key: `role__${e}`,
                                            className: A()(uu, u > 0 && tu),
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            a().createElement('div', { className: nu }, n),
                        ),
                    ru = 'EmptySlotContent_base_77',
                    iu = 'EmptySlotContent_tankmanIcon_07',
                    ou = 'EmptySlotContent_icon_a8',
                    su = 'EmptySlotContent_specialization_1f',
                    lu = 'EmptySlotContent_specialization__disabled_3d',
                    cu = 'EmptySlotContent_vehicle_55',
                    du = { transform: 'translateX(0rem)', opacity: 1 },
                    mu = { transform: 'translateX(-70rem)', opacity: 0 },
                    _u = (0, n.memo)(
                        ({
                            roles: e,
                            layoutInfo: u,
                            vehicleName: t,
                            vehicleType: r,
                            isDisabled: i,
                            isSelected: o,
                            slotIdx: l,
                            blinkStyle: c,
                            qtTankmanIconStyle: d,
                        }) => {
                            const m = (0, ie.useSpring)(
                                    () => ({
                                        from: du,
                                        to: mu,
                                        config: { duration: 200, easing: se.ei },
                                        immediate: !0,
                                        pause: o,
                                    }),
                                    [o],
                                ),
                                _ = m[0],
                                E = m[1],
                                g = (0, n.useCallback)(() => {
                                    u.isCurrentLayoutQuickTraining || E.start({ reset: !0, reverse: !0 });
                                }, [E, u]),
                                F = s.U2(e, 0) || '',
                                b = R.strings.crew_widget.vehicleWithName.$dyn((0, k.BN)(r)),
                                C = (0, k.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(F),
                                });
                            return a().createElement(
                                'div',
                                { className: ru, onMouseEnter: g, onMouseLeave: g },
                                a().createElement(
                                    'div',
                                    { className: iu },
                                    a().createElement(
                                        ie.animated.div,
                                        { style: d },
                                        a().createElement(Ye.G, {
                                            name: 'empty',
                                            size: Ye.U.c100x60Barracks,
                                            classMix: ou,
                                        }),
                                        a().createElement(
                                            ie.animated.div,
                                            { style: i ? void 0 : c },
                                            a().createElement(Ye.G, {
                                                name: 'emptyRed',
                                                size: Ye.U.c100x60Barracks,
                                                classMix: ou,
                                            }),
                                        ),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: A()(su, i && lu) },
                                    a().createElement(au, { slotIdx: l, roles: e, name: C }),
                                ),
                                a().createElement(
                                    ie.animated.div,
                                    { className: cu, style: o ? void 0 : _ },
                                    (0, k.uF)(b, { name: t }),
                                ),
                            );
                        },
                    );
                var Eu = t(5415),
                    gu = t(8271);
                const Au = (e) => e.skills.length + e.newSkillsAmount + e.possibleSkillsAmount,
                    Fu = (e, u, t) => {
                        const n = ((e, u, t) => {
                                if (e <= u) return [1, e, 24];
                                const n = Math.floor((t - 2) / 18);
                                return [2, e <= 2 * n ? n : Math.ceil(e / 2), 16];
                            })(e, u, t),
                            a = n[0],
                            r = n[1],
                            i = n[2];
                        let o = 2,
                            s = i;
                        for (; r * s + o + (r - 1) > t; ) o > 0 ? (o -= 1) : (s -= 1);
                        return s !== i && (o = s - i), [a, r, o, i, s];
                    };
                var bu = t(4385),
                    Cu = t(5563);
                const hu = 'AcceleratedTrainingIcon_base_4f',
                    vu = 'AcceleratedTrainingIcon_icon_45',
                    Du = (0, n.memo)(({ classMix: e }) =>
                        a().createElement(
                            F.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            },
                            a().createElement(
                                'div',
                                { className: A()(hu, e) },
                                a().createElement('div', { className: vu }),
                            ),
                        ),
                    ),
                    wu = {
                        base: 'LastSkillInfo_base_38',
                        levelsContainer: 'LastSkillInfo_levelsContainer_4f',
                        realLevel: 'LastSkillInfo_realLevel_78',
                        base__small: 'LastSkillInfo_base__small_c5',
                        possibleLevel: 'LastSkillInfo_possibleLevel_02',
                        acceleratedTrainingIcon: 'LastSkillInfo_acceleratedTrainingIcon_bf',
                        base__big: 'LastSkillInfo_base__big_10',
                    },
                    Bu = 0.01,
                    fu = (0, n.memo)(
                        ({
                            lastSkillLevel: e,
                            lastPossibleSkillLevel: u,
                            isLevelVisible: t,
                            isAcceleratedTrainingVisible: r,
                            skillSize: i,
                            blinkStyle: o,
                        }) => {
                            const s = (0, n.useRef)(e),
                                l = (0, ie.useSpring)(() => ({ from: { scale: 1 } })),
                                c = l[0],
                                d = l[1];
                            (0, n.useEffect)(() => {
                                u < 0 &&
                                    s.current !== e &&
                                    (d.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: se.Fs },
                                    }),
                                    (s.current = e));
                            }, [e, u, d]);
                            const m = (0, n.useMemo)(
                                    () =>
                                        0 === u
                                            ? [R.strings.common.percentValue(), u]
                                            : u < Bu
                                              ? [R.strings.crew_widget.plusMinValue(), Bu]
                                              : [R.strings.crew_widget.plusValue(), u],
                                    [u],
                                ),
                                _ = m[0],
                                E = m[1];
                            return a().createElement(
                                'div',
                                { className: A()(wu.base, wu[`base__${i}`]) },
                                t &&
                                    a().createElement(
                                        'div',
                                        { className: wu.levelsContainer },
                                        e >= 0 &&
                                            e < 100 &&
                                            a().createElement(
                                                ie.animated.div,
                                                { style: c },
                                                a().createElement(
                                                    'div',
                                                    { className: wu.realLevel },
                                                    (0, k.uF)(R.strings.common.percentValue(), {
                                                        value: e > 0 && e < Bu ? Bu : e,
                                                    }),
                                                ),
                                            ),
                                        u >= 0 &&
                                            u < 100 &&
                                            a().createElement(
                                                ie.animated.div,
                                                { className: wu.possibleLevel, style: o },
                                                (0, k.uF)(_, { value: E }),
                                            ),
                                    ),
                                r && a().createElement(Du, { classMix: wu.acceleratedTrainingIcon }),
                            );
                        },
                    );
                var pu = t(8485);
                const ku = 33,
                    yu = 0,
                    Su = !0,
                    Iu = 'play';
                const xu = [
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
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                const Lu = (0, n.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            r = e.getImageSource,
                            i = e.frameCount,
                            o = e.onAnimate,
                            s = e.frameTime,
                            l = void 0 === s ? ku : s,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? yu : c,
                            m = e.lastFrameIndex,
                            _ = void 0 === m ? i - 1 : m,
                            E = e.loop,
                            g = void 0 === E ? Su : E,
                            A = e.state,
                            F = void 0 === A ? Iu : A,
                            b = e.onAnimationDone,
                            C = e.onAnimationComplete,
                            h = e.poster,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, xu);
                        const D = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = D.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (F) {
                                    case 'play':
                                        return (function () {
                                            const e = Pu(d, _, r),
                                                u = Ou(d, _),
                                                n = window.setInterval(() => {
                                                    const a = u(),
                                                        r = e.get(a);
                                                    r
                                                        ? (null == o || o(a, r),
                                                          t(r),
                                                          a === _ &&
                                                              (null == C || C(),
                                                              g || (null == b || b(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && h ? { path: h, x: 0, y: 0 } : r(d),
                                                u = new Image();
                                            u.src = e.path;
                                            const n = () => t(Ru(e, u));
                                            return (
                                                u.addEventListener('load', n), () => u.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, d, _, g, o, C, b, h, F]),
                            a().createElement('canvas', Tu({}, v, { width: u, height: t, ref: D }))
                        );
                    }),
                    Ou = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return (t += 1), t > u && (t = e), n;
                        };
                    },
                    Ru = (e, u) => Object.assign({}, e, { img: u }),
                    Pu = (e, u, t) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= u; r++) {
                            const e = t(r),
                                u = a[e.path];
                            if (u) n.set(r, Ru(e, u));
                            else {
                                const u = new Image();
                                (a[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, Ru(e, u));
                            }
                        }
                        return n;
                    };
                function Mu(e) {
                    return (u) => `${e}${u}`;
                }
                const Nu = [
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
                function Hu() {
                    return (
                        (Hu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Hu.apply(this, arguments)
                    );
                }
                let Wu;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(Wu || (Wu = {}));
                const ju = (e, u, t) => {
                        const n = new Image();
                        (n.src = t(u)), e.push(n);
                    },
                    Vu =
                        ((0, n.memo)((e) => {
                            let u = e.width,
                                t = e.height,
                                r = e.getSrcByFrame,
                                i = e.frameCount,
                                o = e.onAnimate,
                                s = void 0 === o ? () => {} : o,
                                l = e.frameTime,
                                c = void 0 === l ? 33 : l,
                                d = e.initialFrameIndex,
                                m = void 0 === d ? 0 : d,
                                _ = e.loop,
                                E = void 0 === _ || _,
                                g = e.state,
                                A = void 0 === g ? Wu.Play : g,
                                F = e.onAnimationComplete,
                                b = void 0 === F ? () => {} : F,
                                C = e.revers,
                                h = void 0 !== C && C,
                                v = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(e, Nu);
                            const D = (0, n.useRef)(null);
                            return (
                                (0, n.useEffect)(() => {
                                    const e = D.current;
                                    if (!e) return;
                                    const n = i - 1,
                                        a = e.getContext('2d'),
                                        o = (n) => {
                                            a.clearRect(0, 0, e.width, e.height), a.drawImage(n, 0, 0, u, t);
                                        };
                                    if ('stop' === A) {
                                        const e = r(0),
                                            u = new Image();
                                        u.src = e;
                                        const t = () => o(u);
                                        return u.addEventListener('load', t), () => u.removeEventListener('load', t);
                                    }
                                    const l = ((e, u, t) => {
                                            const n = [];
                                            if (t) for (let t = e; t >= 0; t--) ju(n, t, u);
                                            else for (let t = 0; t < e; t++) ju(n, t, u);
                                            return n;
                                        })(i, r, h),
                                        d = ((e, u = 0) => {
                                            let t = u;
                                            return () => {
                                                const u = t;
                                                return (t += 1), t > e && (t = 0), u;
                                            };
                                        })(n, m),
                                        _ = setInterval(() => {
                                            const e = d(),
                                                u = l[e];
                                            o(l[e]), s(e, u), e === n && (b(), E || clearInterval(_));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [i, c, r, t, m, E, s, b, A, u, h]),
                                a().createElement('canvas', Hu({}, v, { width: u, height: t, ref: D }))
                            );
                        }),
                        'AnimatedNewSkill_base_6b'),
                    Uu = 'AnimatedNewSkill_base__big_31';
                function Zu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Gu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Gu(e, u);
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
                function Gu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                class zu {
                    constructor() {
                        (this._intervalID = void 0),
                            (this._observers = void 0),
                            (this._intervalID = null),
                            (this._observers = new Map());
                    }
                    static get instance() {
                        return zu._instance || (zu._instance = new zu()), zu._instance;
                    }
                    subscribe(e) {
                        this._observers.set(e, e),
                            1 === this._observers.size &&
                                (this._intervalID = window.setInterval(() => {
                                    for (var e, u = Zu(this._observers.values()); !(e = u()).done; ) {
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
                zu._instance = void 0;
                const $u = {
                        width: 24,
                        height: 24,
                        frameCount: 42,
                        chunk: { count: 1, columns: 42, rows: 1 },
                        getChunkPath: Mu('R.images.gui.maps.icons.sequence.new_skill.skill_'),
                    },
                    qu = {
                        width: 16,
                        height: 16,
                        frameCount: 32,
                        chunk: { count: 1, columns: 32, rows: 1 },
                        getChunkPath: Mu('R.images.gui.maps.icons.sequence.new_skill.skill_small_'),
                    },
                    Yu = ({ size: e }) => {
                        const u = e === pu.O.Small ? qu : $u,
                            t = (function (e) {
                                const u = e.chunk,
                                    t = u.rows * u.columns;
                                return (n) => {
                                    const a = n % t,
                                        r = (a % u.columns) * e.width,
                                        i = Math.trunc(a / u.columns) * e.height;
                                    return { path: e.getChunkPath(Math.trunc(n / t)), x: r, y: i };
                                };
                            })(u),
                            r = (0, n.useState)(Wu.Stop),
                            i = r[0],
                            o = r[1],
                            s = (0, n.useCallback)(() => {
                                o(Wu.Play);
                            }, [o]),
                            l = (0, n.useCallback)(() => {
                                o(Wu.Stop);
                            }, [o]);
                        return (
                            (0, n.useEffect)(() => (zu.instance.subscribe(s), () => zu.instance.unsubscribe(s)), [s]),
                            a().createElement(Lu, {
                                width: u.width,
                                height: u.height,
                                frameCount: u.frameCount,
                                getImageSource: t,
                                loop: !1,
                                state: i,
                                onAnimationDone: l,
                                className: A()(Vu, e === pu.O.Big && Uu),
                            })
                        );
                    },
                    Ku = { base: 'Skill_base_ba', base__big: 'Skill_base__big_eb' };
                function Qu() {
                    return (
                        (Qu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Qu.apply(this, arguments)
                    );
                }
                let Xu;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(Xu || (Xu = {}));
                const Ju = (0, n.memo)(
                        ({
                            name: e,
                            icon: u,
                            type: t,
                            size: r,
                            marginValue: i,
                            clipWidth: o,
                            tankmanId: s,
                            skillsEfficiency: l,
                            blinkStyle: c,
                            showNewSkillAnimation: d,
                            isTooltipEnabled: m = !0,
                            hasInstruction: _,
                        }) => {
                            const E = (0, n.useRef)(''),
                                g = (0, ie.useSpring)(() => ({ from: { scale: 1 } })),
                                F = g[0],
                                C = g[1];
                            (0, n.useEffect)(() => {
                                t === gu.W.New &&
                                    E.current === gu.W.Possible &&
                                    C.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: se.Fs },
                                    }),
                                    (E.current = t);
                            }, [t, C]);
                            const h = (0, n.useCallback)(() => {
                                switch (t) {
                                    case gu.W.Learned:
                                    case gu.W.Learning:
                                    case gu.W.Irrelevant:
                                        return {
                                            contentId:
                                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                    'resId',
                                                ),
                                            args: { tooltipId: Qe.HZ, tankmanID: s, skillName: e },
                                        };
                                    case gu.W.New:
                                    case gu.W.Possible:
                                        return {
                                            contentId: R.views.lobby.crew.tooltips.PerkAvailableTooltip('resId'),
                                            args: { tankmanID: s },
                                        };
                                }
                            }, [t, e, s]);
                            return a().createElement(
                                b.u,
                                Qu({}, h(), {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: m,
                                    ignoreShowDelay: !0,
                                }),
                                a().createElement(
                                    ie.animated.div,
                                    { style: F },
                                    a().createElement(
                                        ie.animated.div,
                                        { style: t === gu.W.Possible ? c : void 0 },
                                        a().createElement(
                                            'div',
                                            {
                                                className: A()(Ku.base, Ku[`base__${r}`]),
                                                style: { marginLeft: `${i}rem`, clipPath: `inset(0 ${o}rem 0 0)` },
                                            },
                                            !d || (t !== gu.W.Possible && t !== gu.W.New)
                                                ? a().createElement(pu.d, {
                                                      icon: u,
                                                      size: r,
                                                      type: t,
                                                      efficiency: l,
                                                      hasInstruction: _,
                                                  })
                                                : a().createElement(Yu, { size: r }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    et = 'SkillsList_base_11',
                    ut = 'SkillsList_efficiency_72',
                    tt = 'SkillsList_container_c7',
                    nt = 'SkillsList_row_03';
                function at() {
                    return (
                        (at =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        at.apply(this, arguments)
                    );
                }
                const rt = ({
                        tankman: e,
                        isAcceleratedTrainingVisible: u = !1,
                        rowWidth: t = 220,
                        maxBigSkillsInRow: n = 16,
                        blinkStyle: r,
                        isSkillTooltipEnabled: i = !0,
                        showNewSkillAnimation: o = !1,
                    }) => {
                        const l = Au(e),
                            c = Fu(l, n, t),
                            d = c[0],
                            m = c[1],
                            _ = c[2],
                            E = c[3],
                            g = c[4],
                            A = d > 1 ? Xu.Small : Xu.Big,
                            F = (0, oe.Y4)(e.skillsEfficiency) !== oe.H$.Normal,
                            b = -1 !== e.possibleSkillsEfficiency,
                            C = b ? e.possibleSkillsEfficiency : e.skillsEfficiency,
                            h = (0, oe.Y4)(C) !== oe.H$.Low;
                        return a().createElement(
                            'div',
                            { className: et },
                            F &&
                                a().createElement(
                                    ie.animated.div,
                                    { style: b ? r : void 0 },
                                    a().createElement(Cu.A, {
                                        efficiencyValue: C,
                                        tankmanID: e.tankmanID,
                                        className: ut,
                                    }),
                                ),
                            a().createElement(
                                'div',
                                { className: tt },
                                (0, bu.K)(d, (t) => {
                                    const n = Math.min(m, l - t * m),
                                        c = t === d - 1;
                                    return a().createElement(
                                        'div',
                                        { className: nt, key: `row_${t}` },
                                        (0, bu.K)(n, (u) => {
                                            const l = m * t + u;
                                            return a().createElement(
                                                Ju,
                                                at(
                                                    {},
                                                    ((e, u) => {
                                                        const t = u.skills.length;
                                                        let n = '',
                                                            a = '',
                                                            r = gu.W.Learned,
                                                            i = !1;
                                                        if (e < t) {
                                                            const t = s.U2(u.skills, e);
                                                            t &&
                                                                ((n = t.name),
                                                                (a = t.icon),
                                                                (r = t.type),
                                                                (i = t.hasInstruction));
                                                        } else
                                                            (r = e < t + u.newSkillsAmount ? gu.W.New : gu.W.Possible),
                                                                (a = Xe.jw);
                                                        return { name: n, icon: a, type: r, hasInstruction: i };
                                                    })(l, e),
                                                    {
                                                        size: A,
                                                        marginValue: 0 === u ? 0 : _,
                                                        key: `skill_${l}`,
                                                        clipWidth: u === n - 1 ? 0 : E - g,
                                                        tankmanId: e.tankmanID,
                                                        blinkStyle: r,
                                                        isTooltipEnabled: i,
                                                        showNewSkillAnimation: o,
                                                        skillsEfficiency: C,
                                                    },
                                                ),
                                            );
                                        }),
                                        c &&
                                            a().createElement(fu, {
                                                lastSkillLevel: e.possibleSkillsAmount > 0 ? -1 : e.lastSkillLevel,
                                                lastPossibleSkillLevel: e.lastPossibleSkillLevel,
                                                isLevelVisible: h,
                                                isAcceleratedTrainingVisible: u,
                                                skillSize: A,
                                                blinkStyle: r,
                                            }),
                                    );
                                }),
                            ),
                        );
                    },
                    it = 'TankmanInfo_base_69',
                    ot = 'TankmanInfo_base__disabled_36',
                    st = 'TankmanInfo_tankmanTooltipHoverArea_9b',
                    lt = 'TankmanInfo_specialization_77',
                    ct = 'TankmanInfo_specialization__withManySkills_9a',
                    dt = 'TankmanInfo_skillsContainer_17',
                    mt = 'TankmanInfo_skillsContainer__withManySkills_00',
                    _t = (0, r.Pi)(({ slotIdx: e, tankman: u, layoutInfo: t, blinkStyle: n, isDisabled: r }) => {
                        const i = E().model,
                            o = (0, Eu.GS)().mediaSize,
                            s = ((e, u, t, n) => {
                                const a = u.skillsEfficiency < Xe.yb,
                                    r = e.isCurrentLayoutQuickTraining || t;
                                let i,
                                    o = 220;
                                return (
                                    (r || t) && (o = n ? 146 : 190),
                                    a && (o -= 36),
                                    (i = a
                                        ? e.isCurrentLayoutHangar
                                            ? 12
                                            : e.isCurrentLayoutQuickTraining
                                              ? 10
                                              : 11
                                        : e.isCurrentLayoutQuickTraining || r
                                          ? 12
                                          : 16),
                                    [o, i, Au(u) > i]
                                );
                            })(t, u, i.computes.isChangeCrewButtonVisible(), o < Eu.cJ.Small),
                            l = s[0],
                            c = s[1],
                            d = s[2],
                            m =
                                !t.isCurrentLayoutQuickTraining &&
                                -1 !== u.tankmanID &&
                                u.isLessMastered &&
                                u.skillsEfficiency < 100;
                        return a().createElement(
                            'div',
                            { className: A()(it, r && ot) },
                            a().createElement(
                                Ke.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Qe.v$, tankmanID: u.tankmanID },
                                },
                                a().createElement('div', { className: st }),
                            ),
                            a().createElement(
                                'div',
                                { className: A()(lt, d && ct) },
                                a().createElement(au, {
                                    tankmanID: u.tankmanID,
                                    slotIdx: e,
                                    roles: u.roles,
                                    name: u.fullName,
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: A()(dt, d && mt) },
                                a().createElement(rt, {
                                    tankman: u,
                                    isAcceleratedTrainingVisible: m,
                                    rowWidth: l,
                                    maxBigSkillsInRow: c,
                                    blinkStyle: n,
                                    showNewSkillAnimation: t.isCurrentLayoutHangar,
                                }),
                            ),
                        );
                    }),
                    Et = 'QuickTrainingTankmanSlotContent_base_8d',
                    gt = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    At = 'QuickTrainingTankmanSlotContent_highlight_72',
                    Ft = 'QuickTrainingTankmanSlotContent_icon_7c',
                    bt = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    Ct = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    ht = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    vt = { opacity: 0 },
                    Dt = [{ opacity: 1 }, { opacity: 0 }],
                    wt = (0, n.memo)(
                        ({
                            slotIdx: e,
                            tankman: u,
                            blinkStyle: t,
                            qtTankmanIconStyle: r,
                            layoutInfo: i,
                            isDisabled: o,
                        }) => {
                            const s = (0, n.useRef)(u.lastSkillLevelFull),
                                l = (0, n.useRef)(u.skills.length),
                                c = (0, ie.useSpring)(() => ({ from: bt })),
                                d = c[0],
                                m = c[1],
                                _ = (0, ie.useSpring)(() => ({ from: vt })),
                                E = _[0],
                                g = _[1],
                                A = (0, n.useRef)(!1);
                            return (
                                (0, n.useEffect)(() => {
                                    u.hasPossibleProgress
                                        ? A.current ||
                                          (m.start({
                                              from: bt,
                                              to: Ct,
                                              reverse: false,
                                              config: { duration: 300, easing: se.BH },
                                          }),
                                          (A.current = !0))
                                        : A.current
                                          ? (u.skills.length > l.current || u.lastSkillLevelFull > s.current
                                                ? (m.start({
                                                      from: Ct,
                                                      to: ht,
                                                      delay: 200,
                                                      config: { duration: 500, easing: se.BH },
                                                  }),
                                                  (s.current = u.lastSkillLevelFull),
                                                  (l.current = u.skills.length),
                                                  g.start({
                                                      from: vt,
                                                      to: Dt,
                                                      delay: 200,
                                                      config: { duration: 500, easing: se.BH },
                                                  }))
                                                : m.start({ reset: !0, reverse: !0 }),
                                            (A.current = !1))
                                          : ((s.current = u.lastSkillLevelFull), (l.current = u.skills.length));
                                }, [m, g, u.lastSkillLevelFull, u.hasPossibleProgress, u.skills.length]),
                                a().createElement(
                                    'div',
                                    { className: Et },
                                    a().createElement(ie.animated.div, { className: At, style: E }),
                                    a().createElement(
                                        ie.animated.div,
                                        { style: r },
                                        a().createElement(Ye.G, {
                                            name: u.icon,
                                            size: Ye.U.c100x60Barracks,
                                            classMix: Ft,
                                            isSkin: u.isInSkin,
                                        }),
                                    ),
                                    a().createElement(ie.animated.div, { className: gt, style: d }),
                                    a().createElement(_t, {
                                        slotIdx: e,
                                        tankman: u,
                                        layoutInfo: i,
                                        blinkStyle: t,
                                        isDisabled: o,
                                    }),
                                )
                            );
                        },
                        (e, u) => {
                            const t = e.tankman,
                                n = u.tankman;
                            return (
                                t.hasPossibleProgress === n.hasPossibleProgress &&
                                ((e, u) => {
                                    if (e.length !== u.length) return !1;
                                    const t = e.length;
                                    for (let r = 0; r < t; r++) {
                                        var n, a;
                                        if (
                                            (null == (n = s.U2(e, r)) ? void 0 : n.name) !==
                                            (null == (a = s.U2(u, r)) ? void 0 : a.name)
                                        )
                                            return !1;
                                    }
                                    return !0;
                                })(t.skills, n.skills) &&
                                t.lastSkillLevelFull === n.lastSkillLevelFull &&
                                t.possibleSkillsAmount === n.possibleSkillsAmount &&
                                t.lastPossibleSkillLevel === n.lastPossibleSkillLevel &&
                                t.skillsEfficiency === n.skillsEfficiency &&
                                t.possibleSkillsEfficiency === n.possibleSkillsEfficiency
                            );
                        },
                    ),
                    Bt = 'TankmanSlotContent_base_00',
                    ft = 'TankmanSlotContent_icon_ef',
                    pt = (0, n.memo)(({ slotIdx: e, tankman: u, layoutInfo: t, isDisabled: n }) =>
                        a().createElement(
                            'div',
                            { className: Bt },
                            a().createElement(Ye.G, {
                                name: u.icon,
                                size: Ye.U.c100x60Barracks,
                                classMix: ft,
                                isSkin: u.isInSkin,
                            }),
                            a().createElement(_t, { slotIdx: e, tankman: u, layoutInfo: t, isDisabled: n }),
                        ),
                    ),
                    kt = (0, n.memo)(
                        ({
                            slotIdx: e,
                            roles: u,
                            tankman: t,
                            layoutInfo: n,
                            vehicleName: r,
                            vehicleType: i,
                            isDisabled: o,
                            isSelected: s,
                            blinkSlotStyle: l,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: d,
                        }) =>
                            -1 === t.tankmanID
                                ? a().createElement(_u, {
                                      roles: u,
                                      layoutInfo: n,
                                      vehicleName: r,
                                      vehicleType: i,
                                      isDisabled: o,
                                      isSelected: s,
                                      slotIdx: e,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: d,
                                  })
                                : n.isCurrentLayoutQuickTraining
                                  ? a().createElement(wt, {
                                        slotIdx: e,
                                        tankman: t,
                                        blinkStyle: l,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: n,
                                        isDisabled: o,
                                    })
                                  : a().createElement(pt, { slotIdx: e, tankman: t, layoutInfo: n, isDisabled: o }),
                    ),
                    yt = { transform: 'translateX(0rem)' },
                    St = { transform: 'translateX(41rem)' },
                    It = { opacity: 0 },
                    xt = { opacity: 1 },
                    Tt = (0, r.Pi)(
                        ({
                            slotIdx: e,
                            roles: u,
                            tankman: t,
                            layoutInfo: r,
                            isSelected: i,
                            isAnySlotSelected: o,
                            isDisabled: l,
                            blinkSlotStyle: d,
                            blinkTankmanStyle: m,
                            qtTankmanIconStyle: _,
                        }) => {
                            const g = E(),
                                F = g.model,
                                b = g.controls,
                                C = ((e, u) => {
                                    const t = (0, j.Jp)(c.D9),
                                        n = (0, H.f)(
                                            () => t({ action: c.eX.Click, parentScreen: e, item: u }),
                                            [e, u],
                                            c.tL,
                                        );
                                    return (e) => {
                                        e.button === W.RIGHT && n();
                                    };
                                })(F.computes.getUiLoggingParentScreen(), c.x3.SlotContextMenu),
                                h = b.onSlotClick,
                                v = b.onChangeCrewClick,
                                D = F.computes.isChangeCrewButtonVisible(),
                                w = F.computes.isTankmanMode(),
                                B = F.isCrewLocked.get(),
                                f = F.vehicleName.get(),
                                p = F.vehicleType.get(),
                                k = !l && t.isInteractive && (!r.isCurrentLayoutQuickTraining || o),
                                y = (0, n.useCallback)(() => {
                                    k && !w && ((0, re.G)(R.sounds.yes1()), h(e, t.tankmanID));
                                }, [e, t, h, w, k]),
                                S = (0, n.useCallback)(
                                    (u) => {
                                        u.stopPropagation(), B || ((0, re.G)(R.sounds.yes1()), v(e, t.tankmanID));
                                    },
                                    [e, t, v, B],
                                ),
                                I = (0, n.useMemo)(() => ({ tankmanID: t.tankmanID, slotIdx: e }), [t, e]);
                            return a().createElement(
                                Oe,
                                {
                                    args: I,
                                    isEnabled: !l,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    onMouseDown: C,
                                },
                                a().createElement(
                                    'div',
                                    null,
                                    a().createElement(
                                        Ce,
                                        {
                                            onClick: y,
                                            isSelected: i,
                                            isDisabled: l,
                                            isEmpty: -1 === t.tankmanID,
                                            layoutInfo: r,
                                            isEnabledForMouse: k,
                                        },
                                        a().createElement(
                                            'div',
                                            { className: Ve },
                                            t.hasWarning && a().createElement('div', { className: ze }),
                                            i && a().createElement('div', { className: w ? qe : $e }),
                                            a().createElement(
                                                he,
                                                {
                                                    startState: yt,
                                                    endState: St,
                                                    layoutInfo: r,
                                                    isPaused: !D,
                                                    className: A()(Ze, D && Ge),
                                                    isTankmanMode: w,
                                                },
                                                a().createElement(kt, {
                                                    slotIdx: e,
                                                    roles: u,
                                                    tankman: t,
                                                    layoutInfo: r,
                                                    isDisabled: l,
                                                    vehicleName: f,
                                                    vehicleType: p,
                                                    blinkSlotStyle: d,
                                                    blinkTankmanStyle: m,
                                                    qtTankmanIconStyle: _,
                                                    isSelected: i,
                                                }),
                                            ),
                                            D &&
                                                a().createElement(
                                                    'div',
                                                    { onClick: S },
                                                    a().createElement(
                                                        he,
                                                        {
                                                            startState: It,
                                                            endState: xt,
                                                            layoutInfo: r,
                                                            isPaused: !D,
                                                            className: Ue,
                                                            isTankmanMode: w,
                                                        },
                                                        a().createElement(je, {
                                                            isSelected: r.isCurrentLayoutMemberChange && i,
                                                            isLocked: B,
                                                            mainRole: s.U2(u, 0) || '',
                                                            isFemale: -1 !== t.tankmanID && t.isFemale,
                                                        }),
                                                    ),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Lt = 'SlotsList_base_5f';
                function Ot() {
                    return (
                        (Ot =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ot.apply(this, arguments)
                    );
                }
                const Rt = { transform: 'translateX(0rem)' },
                    Pt = { transform: 'translateX(15rem)' },
                    Mt = (0, r.Pi)(({ layoutInfo: e, isWidgetDisabled: u, className: t }) => {
                        const r = E().model,
                            i = r.computes.isAnyEmptySlots(),
                            o = (0, ie.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: se.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            s = o[0],
                            l = o[1];
                        (0, n.useEffect)(() => {
                            i ? l.resume() : l.pause();
                        }, [l, i]);
                        const c = (0, ie.useSpring)(
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
                        const _ = (0, ie.useSpring)(() => ({
                                from: Rt,
                                to: Pt,
                                delay: 200,
                                config: { duration: 300, easing: se.ei },
                                pause: !e.isCurrentLayoutQuickTraining,
                            }))[0],
                            g = (0, n.useCallback)(
                                (t) => u || (e.isCurrentLayoutQuickTraining && -1 === t),
                                [u, e.isCurrentLayoutQuickTraining],
                            );
                        return a().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: A()(Lt, t) },
                            r.computes
                                .getSlots()
                                .map((u, t) =>
                                    a().createElement(
                                        Tt,
                                        Ot({}, u, {
                                            layoutInfo: e,
                                            key: `slot_${t}_${u.tankman.tankmanID}`,
                                            isSelected:
                                                !e.isCurrentLayoutHangar &&
                                                (r.computes.isSlotSelected(u.slotIdx) || r.computes.isTankmanMode()),
                                            isAnySlotSelected: r.computes.isAnySlotSelected(),
                                            isDisabled: g(u.tankman.tankmanID),
                                            blinkSlotStyle: d,
                                            blinkTankmanStyle: s,
                                            qtTankmanIconStyle: _,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Nt = (0, r.Pi)(() => {
                        const e = E().model,
                            u = e.isDisabled.get(),
                            t = e.hasDog.get(),
                            n = e.computes.getLayoutInfo();
                        return a().createElement(
                            'div',
                            { className: te },
                            e.computes.isButtonBarVisible() &&
                                a().createElement(
                                    'div',
                                    { className: ne },
                                    a().createElement(ue, { isWidgetDisabled: u }),
                                ),
                            a().createElement(Mt, { layoutInfo: n, isWidgetDisabled: u, className: ae }),
                            t && a().createElement(Se, { layoutInfo: n, isDisabled: u }),
                        );
                    }),
                    Ht = { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') };
                (0, n.memo)(() => a().createElement(_, { options: Ht }, a().createElement(Nt, null)));
            },
            8271: (e, u, t) => {
                let n;
                t.d(u, { W: () => n }),
                    (function (e) {
                        (e.New = 'new'),
                            (e.Learned = 'learned'),
                            (e.Learning = 'learning'),
                            (e.Irrelevant = 'irrelevant'),
                            (e.Possible = 'possible');
                    })(n || (n = {}));
            },
            2603: (e, u, t) => {
                t.d(u, { Br: () => r, HZ: () => n, M4: () => i, rs: () => o, v$: () => a });
                const n = 'crewPerkGf',
                    a = 'tankman',
                    r = 'skillsEfficiency',
                    i = 'crewSkillUntrained',
                    o = 'vehicleCrewMemberInHangar';
            },
            771: (e, u, t) => {
                t.d(u, { jw: () => r, sU: () => n, y$: () => i, yb: () => a });
                const n = -1,
                    a = 1,
                    r = 'new_skill',
                    i = -1;
                let o;
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
                })(o || (o = {}));
            },
            6880: (e, u, t) => {
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
                    base__firstHover: 'CButton_base__firstHover_d5',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
            },
            8055: (e, u, t) => {
                t.d(u, { Z: () => n });
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
            4769: (e, u, t) => {
                t.d(u, { Z: () => n });
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
            130: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'EfficiencyIndicator_base_34',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
            },
            4458: (e, u, t) => {
                t.d(u, { Z: () => n });
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
            3938: (e, u, t) => {
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
            9426: (e, u, t) => {
                t.d(u, { Z: () => n });
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
            4723: (e, u, t) => {
                t.d(u, { Z: () => n });
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], r = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
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
        (__webpack_require__.j = 3),
        (() => {
            var e = { 3: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(7321));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
