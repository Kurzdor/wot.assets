(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                u.d(t, { L$: () => l.L, u5: () => d });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7727),
                    i = u(6179),
                    o = u.n(i),
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
                    onMouseUp: F,
                    onMouseLeave: b,
                    onClick: C,
                }) => {
                    const h = (0, i.useRef)(null),
                        v = (0, i.useState)(u),
                        w = v[0],
                        D = v[1],
                        B = (0, i.useState)(!1),
                        f = B[0],
                        p = B[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                w && null !== h.current && !h.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [w]),
                        (0, i.useEffect)(() => {
                            D(u);
                        }, [u]),
                        o().createElement(
                            'div',
                            {
                                ref: h,
                                className: a()(
                                    s.Z.base,
                                    s.Z[`base__${n}`],
                                    c && s.Z.base__disabled,
                                    t && s.Z[`base__${t}`],
                                    w && s.Z.base__focus,
                                    f && s.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== m && (0, r.G)(m), E && E(e));
                                },
                                onMouseMove: function (e) {
                                    g && g(e);
                                },
                                onMouseUp: function (e) {
                                    c || (F && F(e), p(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== _ && (0, r.G)(_),
                                        A && A(e),
                                        u && (c || (h.current && (h.current.focus(), D(!0)))),
                                        p(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (b && b(e), p(!1));
                                },
                                onClick: function (e) {
                                    c || (C && C(e));
                                },
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
                                { className: a()(s.Z.state, s.Z.state__default) },
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
                const d = c;
            },
            2106: (e, t, u) => {
                let n, a;
                u.d(t, { L: () => n, q: () => a }),
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
            9987: (e, t, u) => {
                u.d(t, { A: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    i = u.n(r),
                    o = u(8055);
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
                        r = e.fadeInAnimation,
                        c = e.hide,
                        d = e.maximumNumber,
                        m = e.className,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, s);
                    const E = n ? null : u,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const A = E && !g && E > d,
                        F = a()(
                            o.Z.base,
                            o.Z[`base__${t}`],
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
            3495: (e, t, u) => {
                u.d(t, { Y: () => d });
                var n = u(3138),
                    a = u(6179),
                    r = u(1043),
                    i = u(5262);
                const o = n.O.client.getSize('rem'),
                    s = o.width,
                    l = o.height,
                    c = Object.assign({ width: s, height: l }, (0, i.T)(s, l, r.j)),
                    d = (0, a.createContext)(c);
            },
            1039: (e, t, u) => {
                u(3138), u(6536), u(6179), u(3495), u(1043), u(5262);
            },
            6010: (e, t, u) => {
                var n = u(6179),
                    a = u(7382),
                    r = u(3495);
                const i = ['children'];
                const o = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
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
                        w = o.extraSmallHeight,
                        D = { extraLarge: b, large: C, medium: h, small: v, extraSmall: w };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && s) return t;
                        if (u.large && l) return t;
                        if (u.medium && c) return t;
                        if (u.small && d) return t;
                        if (u.extraSmall && m) return t;
                    } else {
                        if (u.extraLargeWidth && _) return (0, a.H)(t, u, D);
                        if (u.largeWidth && E) return (0, a.H)(t, u, D);
                        if (u.mediumWidth && g) return (0, a.H)(t, u, D);
                        if (u.smallWidth && A) return (0, a.H)(t, u, D);
                        if (u.extraSmallWidth && F) return (0, a.H)(t, u, D);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && b) return t;
                            if (u.largeHeight && C) return t;
                            if (u.mediumHeight && h) return t;
                            if (u.smallHeight && v) return t;
                            if (u.extraSmallHeight && w) return t;
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
            7382: (e, t, u) => {
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
                u.d(t, { YN: () => n.Y });
                u(6010), u(1039);
                var n = u(3495);
            },
            1043: (e, t, u) => {
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
                var n;
                function a(e, t, u) {
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
                        a = (function (e, t) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: a === u.extraLarge.weight,
                        largeHeight: a === u.large.weight,
                        mediumHeight: a === u.medium.weight,
                        smallHeight: a === u.small.weight,
                        extraSmallHeight: a === u.extraSmall.weight,
                    };
                }
                u.d(t, { T: () => a }),
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
                u.d(t, { IC: () => n });
                var n,
                    a = u(6483),
                    r = u.n(a),
                    i = u(6373),
                    o = u(3138),
                    s = u(2039),
                    l = u(5099),
                    c = u(7727),
                    d = u(9916),
                    m = u(6179),
                    _ = u.n(m),
                    E = u(4769),
                    g = u(8475);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(n || (n = {}));
                const A = ['__left', '__right', '__top', '__bottom'];
                (0, m.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: u, customStyles: n = {} }, a) => {
                        const F = (0, m.useRef)(null),
                            b = (0, m.useRef)(null),
                            C = (0, m.useRef)(null),
                            h = (0, m.useState)(window.decorator && window.decorator.directionType),
                            v = h[0],
                            w = h[1],
                            D = (0, m.useCallback)(() => {
                                c.$.playClick(), o.O.view.sendEvent.close();
                            }, []),
                            B = (0, m.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            f = r()(E.Z.arrow, E.Z[`arrow${A[v]}`]);
                        (0, s.b)(
                            () => (
                                o.O.client.events.mouse.enableOutside(),
                                o.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (u ? u() : o.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const p = (0, m.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === F.current || t === C.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const n = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = o.O.client.getMouseGlobalPosition(),
                                            t = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                            u =
                                                e.x < n.boundX ||
                                                e.x > n.boundX + n.boundWidth ||
                                                e.y > n.boundY + n.boundHeight ||
                                                e.y < n.boundY;
                                        if (t && !u) return;
                                    }
                                    u ? u() : o.O.view.sendEvent.close('popover');
                                },
                                [F, C, u],
                            ),
                            y = (0, g.w)(),
                            k = (0, m.useCallback)(() => {
                                const e = b.current;
                                if (e)
                                    return (
                                        o.O.view.freezeTextureBeforeResize(),
                                        y.run(() => {
                                            const t = e.scrollWidth,
                                                u = e.scrollHeight;
                                            o.O.view.resize(t, u), w(window.decorator.directionType);
                                        })
                                    );
                            }, [y]);
                        return (
                            (0, m.useImperativeHandle)(a, () => ({ updateSize: k })),
                            (0, s.b)(() => {
                                o.O.view.setInputPaddingsRem(58);
                            }),
                            (0, m.useEffect)(() => {
                                document.addEventListener('mousedown', p, { capture: !0 });
                                const e = (0, l.B)((0, d.Eu)());
                                return (
                                    !t && e.promise.then(() => k()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', p);
                                    }
                                );
                            }, [k, p, t]),
                            _().createElement(
                                'div',
                                { className: E.Z.base, ref: b },
                                _().createElement(
                                    'div',
                                    { className: E.Z.decorator },
                                    _().createElement(
                                        'div',
                                        { className: E.Z.content, ref: F },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            _().createElement(
                                                i.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                _().createElement('div', {
                                                    className: E.Z.closeBtn,
                                                    onClick: D,
                                                    onMouseEnter: B,
                                                    ref: C,
                                                }),
                                            ),
                                    ),
                                    _().createElement('div', { className: f, style: n.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, u) => {
                u.d(t, { Z: () => l });
                var n = u(1037),
                    a = u(9916),
                    r = u(6179),
                    i = u.n(r);
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
                        F = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, o);
                    const b = (0, r.useRef)(null),
                        C = (0, r.useCallback)(() => {
                            if ((0, a.wU)()) return (0, a.SW)();
                            b.current && (0, a.P3)(t, c, b.current, u, d, m);
                        }, [t, c, m, u, d]);
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
            7078: (e, t, u) => {
                u.d(t, { t: () => s });
                var n = u(6179),
                    a = u.n(n),
                    r = u(2056);
                const i = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const s = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
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
                            u,
                        ),
                        t,
                    );
                };
            },
            6373: (e, t, u) => {
                u.d(t, { i: () => l });
                var n = u(2056),
                    a = u(6179),
                    r = u.n(a);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
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
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, i);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, m, { body: u, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, u, l, c, m]);
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
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, u) => {
                u.d(t, { u: () => l });
                var n = u(7902),
                    a = u(9916),
                    r = u(6179);
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
                                    type: a.B0.TOOLTIP,
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
                            w = void 0 === v ? 0 : v,
                            D = e.onShow,
                            B = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, i);
                        const p = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => w || (0, n.F)().resId, [w]),
                            k = (0, r.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (s(u, b, { isMouseEvent: !0, on: !0, arguments: o(a) }, y),
                                    D && D(),
                                    (p.current.isVisible = !0));
                            }, [u, b, a, y, D]),
                            S = (0, r.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        s(u, b, { on: !1 }, y),
                                        p.current.isVisible && B && B(),
                                        (p.current.isVisible = !1);
                                }
                            }, [u, b, y, B]),
                            I = (0, r.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(p.current.prevTarget) && S();
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
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(k, E ? 100 : 400)),
                                                      l && l(e),
                                                      x && x(e));
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
                                      f,
                                  ),
                              )
                            : t;
                        var x;
                    };
            },
            8246: (e, t, u) => {
                u.d(t, { U: () => o });
                var n = u(3138);
                function a(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return r(e, t);
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
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: u = i, context: r = 'model' } = {}) {
                    const o = new Map();
                    function s(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = o.get(t);
                                void 0 !== u && u(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = u(t),
                            a = r.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, a);
                    };
                    return {
                        subscribe: (u, a) => {
                            const i = 'string' == typeof a ? `${r}.${a}` : r,
                                s = n.O.view.addModelObserver(i, t, !0);
                            return o.set(s, u), e && u(l(a)), s;
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
                            for (var e, u = a(o.keys()); !(e = u()).done; ) {
                                s(e.value, t);
                            }
                        },
                        unsubscribe: s,
                    };
                }
            },
            3215: (e, t, u) => {
                u.d(t, { q: () => s });
                var n = u(4598),
                    a = u(9174),
                    r = u(6179),
                    i = u.n(r),
                    o = u(8246);
                const s = () => (e, t) => {
                    const u = (0, r.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, r.useRef)([]),
                                _ = (u, r, i) => {
                                    var s;
                                    const l = o.U(r),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == i ? void 0 : i.getter) ? s : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === u ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        i = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        i = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = d(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = a.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            i = Object.entries(r),
                                                            o = i.reduce(
                                                                (e, [t, u]) => ((e[u] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        i.forEach(([t, u]) => {
                                                                            o[u].set(e[t]);
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
                                        g = { mode: u, model: E, externalModel: c, cleanup: _ };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && i ? i.controls(g) : t(g),
                                        externalModel: c,
                                        mode: u,
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
                                i().createElement(u.Provider, { value: C }, c)
                            );
                        },
                        () => (0, r.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
                u.r(t),
                    u.d(t, { mouse: () => c, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i });
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${t}`,
                                        i = l[t]((e) => u([e, 'outside']));
                                    function o(e) {
                                        u([e, 'inside']);
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
                            })(u)),
                            t
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
            5959: (e, t, u) => {
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = u(527),
                    a = u(2493);
                function r(e = 'px') {
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
            1176: (e, t, u) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2493: (e, t, u) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => a, G: () => n });
            },
            2472: (e, t, u) => {
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
                u.d(t, { O: () => r });
                var n = u(5959),
                    a = u(514);
                const r = { view: u(7641), client: n, sound: a.ZP };
            },
            514: (e, t, u) => {
                u.d(t, { ZP: () => i });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                u.d(t, { U: () => a });
                var n = u(2472);
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
            7641: (e, t, u) => {
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => p,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => B,
                        getScale: () => A,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => w,
                        isFocused: () => h,
                        pxToRem: () => F,
                        remToPx: () => b,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var n = u(3722),
                    a = u(6112),
                    r = u(6538),
                    i = u(8566);
                function o(e) {
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
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
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
                function C(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function w() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    p = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                u.d(t, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    o = 64,
                    s = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
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
            4598: (e, t, u) => {
                function n() {}
                u.d(t, { ZT: () => n, jv: () => r, yR: () => a });
                function a(e) {
                    return e;
                }
                function r() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, u) => {
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
            6536: (e, t, u) => {
                u(6179);
            },
            5415: (e, t, u) => {
                u.d(t, { GS: () => l, cJ: () => i });
                var n = u(6179),
                    a = u(7739),
                    r = u(1043);
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
                        t = e.width,
                        u = e.height,
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
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            2039: (e, t, u) => {
                u.d(t, { b: () => a, k: () => r });
                var n = u(6179);
                const a = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    r = (e) => {
                        (0, n.useEffect)(() => e, []);
                    };
            },
            8475: (e, t, u) => {
                u.d(t, { w: () => r });
                var n = u(6179),
                    a = u(2039);
                function r() {
                    const e = (0, n.useRef)(0);
                    return (
                        (0, a.k)(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useMemo)(
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
            4489: (e, t, u) => {
                u.d(t, { f: () => r });
                var n = u(5139),
                    a = u(6179);
                function r(e, t, u) {
                    const r = (0, a.useMemo)(() => (0, n.Z)(u, e), t);
                    return (0, a.useEffect)(() => r.cancel, [r]), r;
                }
            },
            5521: (e, t, u) => {
                let n, a;
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
                    })(a || (a = {}));
            },
            9480: (e, t, u) => {
                function n(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                u.d(t, { U2: () => n, UI: () => r, sE: () => i });
                function a(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function r(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function i(e, t) {
                    for (let u = 0; u < e.length; u++) {
                        const n = a(e[u]);
                        if (t(n, u, e)) return n;
                    }
                }
            },
            5099: (e, t, u) => {
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
                u.d(t, { K: () => n });
                const n = (e, t) => {
                    const u = [];
                    for (let n = 0; n < e; n++) u.push(t(n));
                    return u;
                };
            },
            7727: (e, t, u) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                u.d(t, { $: () => a, G: () => n });
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
            3649: (e, t, u) => {
                u.d(t, { BN: () => r, dL: () => i, uF: () => a });
                u(1281);
                let n;
                function a(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
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
                        (t = R.strings.common.percentValue()),
                        (u = { value: e }),
                        t.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]))
                    );
                    var t, u;
                };
            },
            5139: (e, t, u) => {
                function n(e, t, u, n) {
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
                            (i = Date.now()), u.apply(l, s);
                        }
                        r ||
                            (n && !a && d(),
                            o(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== t &&
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
                        'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                        (s.cancel = function () {
                            o(), (r = !0);
                        }),
                        s
                    );
                }
                u.d(t, { Z: () => n });
            },
            1358: (e, t, u) => {
                u.d(t, { Z: () => r });
                var n = u(3138);
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
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, u, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
            9916: (e, t, u) => {
                u.d(t, {
                    B3: () => s,
                    Z5: () => i.Z5,
                    B0: () => o,
                    c9: () => C,
                    wU: () => D,
                    ry: () => F,
                    Eu: () => b,
                    SW: () => v,
                    P3: () => w,
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
                const a = n;
                var r = u(1358);
                var i = u(8613);
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
                var m = u(5521),
                    _ = u(3138);
                const E = ['args'];
                function g(e, t, u, n, a, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(s) : Promise.resolve(s).then(n, a);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(t, u);
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
                    C = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    h = () => C(o.CLOSE),
                    v = () => C(o.POP_OVER, { on: !1 }),
                    w = (e, t, u, n, a = R.invalid('resId'), r) => {
                        const i = _.O.view.getViewGlobalPosition(),
                            s = u.getBoundingClientRect(),
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
                            direction: t,
                            bbox: A(E),
                            on: !0,
                            args: r,
                        });
                    },
                    D = () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                    B = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var f = u(7572);
                const p = a.instance,
                    y = {
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
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: w,
                        addEscapeListener: (e) => {
                            const t = (t) => B(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
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
                        isPopOverShown: D,
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < a.length; t++) u[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, t, u) => {
                u.d(t, { Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
            },
            3458: (e, t, u) => {
                let n;
                u.d(t, { Z0: () => a, in: () => n, sx: () => r }),
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
            4828: (e, t, u) => {
                u.d(t, { AB: () => _, D9: () => n, eX: () => r, sC: () => i, tL: () => a, x3: () => l });
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
            1943: (e, t, u) => {
                u.d(t, { Jp: () => d, Sr: () => m });
                var n = u(6179),
                    a = u(3458);
                const r = ['action', 'timeLimit'];
                const i = 'metrics',
                    o = () => Date.now(),
                    s = ({ partnerID: e, item: t, parentScreen: u, itemState: n, info: a }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: u || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    l = (e, t) => {
                        const u = (0, n.useCallback)(
                            (u, n = a.in.Info, r) => {
                                r || (r = {}),
                                    Object.keys(r).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: u,
                                            logLevel: n,
                                            params: JSON.stringify(r),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, n) => u(e, t, n);
                    },
                    c = (e, t) => {
                        const u = l(e, t),
                            a = (0, n.useRef)(new Map()),
                            r = (0, n.useRef)(new Map()),
                            i = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, o());
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
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const u = r.current.get(e);
                                    if (void 0 === u) return;
                                    r.current.delete(e);
                                    const n = o() - u;
                                    a.current.set(e, t + n);
                                },
                                [a, r],
                            ),
                            m = (0, n.useCallback)(
                                (e, t = 0, n, i) => {
                                    const s = a.current.get(e);
                                    if (void 0 === s) return;
                                    void 0 !== r.current.get(e) && d(e), a.current.delete(e);
                                    const l = (o() - s) / 1e3;
                                    l <= t ||
                                        ((i = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(i, l)),
                                        u(e, n, i));
                                },
                                [a, r, u, d],
                            );
                        return [(e) => i(e), (e, t, u, n) => m(e, t, u, n), () => s(), (e) => c(e), (e) => d(e)];
                    },
                    d = (e) => {
                        const t = l(e, i),
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
                                const t = c(e, i),
                                    u = t[0],
                                    a = t[1],
                                    r = t[2],
                                    o = t[3],
                                    l = t[4],
                                    d = (0, n.useCallback)(
                                        (e) => {
                                            const t = e.action,
                                                u = e.timeLimit,
                                                n = e.logLevel;
                                            a(t, u, n, s(e));
                                        },
                                        [a],
                                    );
                                return [(e) => u(e), (e) => d(e), () => r(), (e) => o(e), (e) => l(e)];
                            })(e),
                            o = u[0],
                            l = u[1],
                            d = t.action,
                            m = t.timeLimit,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(t, r);
                        return (0, n.useMemo)(
                            () => ({
                                onShow: () => o(d || a.Z0),
                                onHide: () => l(Object.assign({ action: d || a.Z0, timeLimit: m || a.sx }, _)),
                            }),
                            [d, m, _, o, l],
                        );
                    };
            },
            8773: (e, t, u) => {
                var n = u(6179),
                    a = u.n(n),
                    r = u(493),
                    i = u.n(r),
                    o = u(3138),
                    s = u(3403);
                const l = (e) => {
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
                    },
                    c = (e, t, u, a = []) => {
                        const r = ((e, t = []) => {
                            const u = (0, n.useRef)(),
                                a = (0, n.useCallback)((...t) => {
                                    u.current && u.current(), (u.current = e(...t));
                                }, t);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        u.current && u.current();
                                    },
                                    [a],
                                ),
                                a
                            );
                        })(
                            () =>
                                l(() =>
                                    l(() => {
                                        if (e.current) {
                                            const u = e.current.getBoundingClientRect(),
                                                n = {
                                                    width: o.O.view.pxToRem(u.width),
                                                    height: o.O.view.pxToRem(u.height),
                                                    offsetX: o.O.view.pxToRem(u.left),
                                                    offsetY: o.O.view.pxToRem(u.top),
                                                };
                                            window.tutorialApi.updateComponents(), t(n);
                                        }
                                    }),
                                ),
                            [t, e],
                        );
                        return (
                            (0, n.useEffect)(() => {
                                r();
                            }, [r, ...a]),
                            (0, n.useEffect)(() => {
                                if (u)
                                    return (
                                        engine.on('clientResized', r),
                                        () => {
                                            engine.off('clientResized', r);
                                        }
                                    );
                            }, [u, r]),
                            r
                        );
                    };
                var d = u(7321),
                    m = u(3215),
                    _ = u(4598);
                const E = (0, m.q)()(({ observableModel: e }) => {
                        const t = Object.assign({}, e.primitives(['syncInitiator']));
                        return Object.assign({}, t);
                    }, _.ZT),
                    g = E[0],
                    A = E[1],
                    F = 'HangarCrewWidgetApp_base_d6',
                    b = (e) => {
                        e && o.O.view.resize(o.O.view.remToPx(372), o.O.view.remToPx(e.height));
                    },
                    C = (0, s.Pi)(() => {
                        const e = A().model.syncInitiator.get(),
                            t = (0, n.useRef)(null);
                        return (
                            c(t, b, !0, [e]),
                            a().createElement('div', { className: F, ref: t }, a().createElement(d.O, null))
                        );
                    });
                engine.whenReady.then(() => {
                    i().render(a().createElement(g, null, a().createElement(C, null)), document.getElementById('root'));
                });
            },
            5563: (e, t, u) => {
                u.d(t, { A: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7078),
                    i = u(2603),
                    o = u(771),
                    s = u(3649),
                    l = u(9916),
                    c = u(6179),
                    d = u.n(c),
                    m = u(130);
                const _ = (0, c.memo)(({ efficiencyValue: e, tankmanID: t = o.y$, className: u }) => {
                    const n = e === o.sU,
                        c = n ? { tooltipId: i.M4 } : { tooltipId: i.Br, tankmanID: t };
                    return d().createElement(
                        r.t,
                        { targetId: R.views.lobby.crew.widgets.CrewWidget('resId'), args: c, isEnabled: t !== o.y$ },
                        d().createElement(
                            'div',
                            { className: a()(m.Z.base, u) },
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
            2768: (e, t, u) => {
                u.d(t, { F: () => s, y: () => l });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    i = u.n(r),
                    o = u(4458);
                let s;
                !(function (e) {
                    (e.c14x14 = 'small'),
                        (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c180x135 = 'dialogs');
                })(s || (s = {}));
                const l = i().memo(function ({ iconName: e, size: t = s.c24x24, className: u }) {
                    var n;
                    const r = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e);
                    return i().createElement('div', {
                        style: null !== r ? { backgroundImage: `url(${r})` } : void 0,
                        className: a()(o.Z.base, o.Z[`base__${t}`], u),
                    });
                });
            },
            7077: (e, t, u) => {
                u.d(t, { G: () => c, U: () => l });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3649),
                    i = u(6179),
                    o = u.n(i),
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
                    const c = (0, i.useMemo)(() => {
                        try {
                            let u = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                            n && (u = u.$dyn('crewSkins'));
                            const a = u.$dyn((0, r.BN)(e));
                            if (!a) throw Error;
                            return { backgroundImage: `url(${a})` };
                        } catch (t) {
                            console.error('Cant find resource in TankmanIcon: ', e);
                        }
                    }, [e, t, n]);
                    return o().createElement('div', { style: c, className: a()(s.Z.base, s.Z[`base__${t}`], u) });
                };
            },
            8485: (e, t, u) => {
                u.d(t, { O: () => d, d: () => g });
                var n = u(6483),
                    a = u.n(n),
                    r = u(8271),
                    i = u(771),
                    o = u(6179),
                    s = u.n(o),
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
                        e === r.W.Possible || e === r.W.New
                            ? _.LightYellow
                            : e === r.W.Irrelevant
                              ? _.Grey
                              : t === i.sU
                                ? e === r.W.Learning
                                    ? _.Yellow
                                    : _.Grey
                                : t < i.yb
                                  ? u
                                      ? _.Grey
                                      : _.Red
                                  : e === r.W.Learning
                                    ? _.Yellow
                                    : _.Grey,
                    g = s().memo(function ({
                        icon: e,
                        type: t,
                        size: u,
                        efficiency: n = i.yb,
                        hasInstruction: o = !1,
                    }) {
                        const d = (!o && n === i.sU) || t === r.W.Irrelevant;
                        return s().createElement(
                            'div',
                            { className: a()(c.Z.base, c.Z[`base__${u}`]) },
                            s().createElement('div', {
                                className: a()(c.Z.background, c.Z[`background__${E(t, n, o)}`]),
                            }),
                            e &&
                                s().createElement(
                                    'div',
                                    { className: c.Z.container },
                                    s().createElement(l.y, {
                                        iconName: e,
                                        size: m[u],
                                        className: a()(d && c.Z.disabledIcon),
                                    }),
                                    d && s().createElement('div', { className: c.Z.disabled }),
                                ),
                        );
                    });
            },
            9631: (e, t, u) => {
                u.d(t, { C: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3457),
                    i = u(2106),
                    o = u(9987),
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
                        E = void 0 === _ ? i.L.secondary : _,
                        g = e.size,
                        A = void 0 === g ? i.q.small : g,
                        F = e.hasIndicator,
                        b = void 0 === F || F,
                        C = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, d);
                    return l().createElement(
                        'div',
                        { className: a()(c.Z.base, n, t && c.Z.base__active) },
                        l().createElement(r.u5, m({ type: E, size: A, mixClass: c.Z.button }, C), s),
                        l().createElement('div', { className: c.Z.overlay }),
                        b && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(u) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(o.A, { value: u, size: 'small' }),
                            ),
                    );
                });
            },
            7160: (e, t, u) => {
                u.d(t, { BH: () => r, Fs: () => i, ei: () => n, qb: () => a });
                const n = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    a = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    r = (e) => {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    i = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, t, u) => {
                u.d(t, { Gc: () => i, H$: () => o, Y4: () => s, gO: () => r, wP: () => a });
                var n = u(771);
                u(3649);
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
                const i = (e, t = !1, u = null) => {
                    const n = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (u ? n.$dyn(`${u}Case`) : n).$dyn(e);
                };
                let o;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(o || (o = {}));
                const s = (e) => (e === n.sU ? o.Untrained : e < n.yb ? o.Low : o.Normal);
            },
            7321: (e, t, u) => {
                u.d(t, { O: () => Wu });
                var n = u(6179),
                    a = u.n(n),
                    r = u(3403),
                    i = u(3215),
                    o = u(4598),
                    s = u(9480),
                    l = u(3946),
                    c = u(4828);
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
                                u = (0, l.Om)(
                                    () =>
                                        s.UI(t.slots.get(), (e) =>
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
                                n = (0, l.Om)(() => Boolean(s.sE(u(), (e) => -1 === e.tankman.tankmanID))),
                                a = (0, l.Om)(() => 1 === t.slots.get().length),
                                r = (0, l.Om)((e) => t.selectedSlotIdx.get() === e),
                                i = (0, l.Om)(() => -1 !== t.selectedSlotIdx.get()),
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
                                    return !a() && !t && !u;
                                }),
                                A = (0, l.Om)(() => !a() && t.buttonsBar.get().isVisible),
                                F = (0, l.Om)(() => {
                                    return (e = t.currentLayoutID.get()), c.AB[e] || c.sC.Hangar;
                                    var e;
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: u,
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
                    F = u(6373),
                    b = u(2056);
                let C;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(C || (C = {}));
                const h = 'ButtonsBar_base_9c',
                    v = 'ButtonsBar_button_d1',
                    w = 'ButtonsBar_button__crewOperaions_70',
                    D = 'ButtonsBar_button__crewBooks_b4',
                    B = 'ButtonsBar_button__toggle_64';
                var f = u(3457),
                    p = u(9987),
                    y = u(3649);
                const k = 'CrewBookButton_base_da',
                    S = 'CrewBookButton_button_ee',
                    I = 'CrewBookButton_icon_11',
                    x = 'CrewBookButton_discount_6b',
                    T = 'CrewBookButton_counter_5d',
                    L = (0, r.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const u = E(),
                            n = u.model,
                            r = u.controls,
                            i = n.crewBooks.get(),
                            o = r.onCrewBooksClick,
                            s = i.isDisabled || t;
                        return a().createElement(
                            F.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, y.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: i.totalAmount,
                                }),
                            },
                            a().createElement(
                                'div',
                                { id: 'crew_book_button', className: A()(k, e) },
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
                var O = u(3616);
                const P = ['children'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const N = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
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
                            u,
                        ),
                        t,
                    );
                };
                var H = u(4489);
                let W;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(W || (W = {}));
                var j = u(1943);
                const V = 'CrewOperationsButton_base_e3',
                    U = 'CrewOperationsButton_button_8e',
                    Z = 'CrewOperationsButton_icon_0c',
                    G = 'CrewOperationsButton_autoReturnIcon_f0',
                    z = (0, r.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const u = E().model,
                            n = ((e) => {
                                const t = (0, j.Jp)(c.D9);
                                return (u) => t({ action: c.eX.Click, parentScreen: e, item: u });
                            })(u.computes.getUiLoggingParentScreen()),
                            r = u.crewOperations.get();
                        return a().createElement(
                            'div',
                            { id: 'crew_operations_button', className: A()(V, e) },
                            a().createElement(
                                N,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !t,
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
                                            { type: f.L$.primary, mixClass: U, disabled: t },
                                            a().createElement('div', { className: Z }),
                                        ),
                                        r.isAutoReturnOn && a().createElement('div', { className: G }),
                                    ),
                                ),
                            ),
                        );
                    });
                var $ = u(9631);
                const q = 'CrewToggleButton_base_03',
                    Y = 'CrewToggleButton_button_89',
                    K = 'CrewToggleButton_iconContainer_f9',
                    Q = 'CrewToggleButton_icon_a7';
                let X;
                !(function (e) {
                    (e.AcceleratedTraining = 'acceleratedTraining'), (e.WotPlus = 'wotPlus');
                })(X || (X = {}));
                const J = (0, n.memo)(({ type: e, state: t, isDisabled: u, onClick: r, classMix: i }) => {
                        const o = (0, n.useMemo)(() => {
                            const u = t === C.Disabled ? C.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${u})`,
                            };
                        }, [e, t]);
                        return a().createElement(
                            'div',
                            { className: A()(q, i) },
                            a().createElement(
                                $.C,
                                {
                                    type: f.L$.primary,
                                    isActive: t === C.On,
                                    disabled: u || t === C.Disabled,
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
                    te = (0, r.Pi)(({ isWidgetDisabled: e }) => {
                        const t = E(),
                            u = t.model,
                            n = t.controls,
                            r = u.acceleratedTraining.get(),
                            i = u.wotPlus.get(),
                            o = n.onAcceleratedTrainingClick,
                            s = n.onWotPlusClick,
                            l = ee[r.state];
                        return a().createElement(
                            'div',
                            { className: h },
                            a().createElement(z, { classMix: A()(v, w), isWidgetDisabled: e }),
                            a().createElement(L, { classMix: A()(v, D), isWidgetDisabled: e }),
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
                    ue = 'CrewWidgetApp_base_cc',
                    ne = 'CrewWidgetApp_buttonsBar_e5',
                    ae = 'CrewWidgetApp_slotsList_ee';
                var re = u(7727),
                    ie = u(7030),
                    oe = u(8018),
                    se = u(7160);
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
                        children: t,
                        isSelected: u = !1,
                        isDisabled: r,
                        isEnabledForMouse: i,
                        isEmpty: o = !1,
                        layoutInfo: s,
                    }) => {
                        const l = (0, n.useState)(!1),
                            c = l[0],
                            d = l[1],
                            m = c && (!u || (!o && s.isCurrentLayoutMemberChange)),
                            _ = m && !o && !s.isCurrentLayoutHangar;
                        return a().createElement(
                            'div',
                            {
                                className: A()(le, (c || u) && !s.isCurrentLayoutHangar && ce, (u || !i) && de),
                                onClick: e,
                                onMouseEnter: () => {
                                    i && !u && (re.$.playHighlight(), d(!0));
                                },
                                onMouseLeave: () => {
                                    d(!1);
                                },
                            },
                            !s.isCurrentLayoutMemberChange && a().createElement('div', { className: A()(Ee, u && ge) }),
                            a().createElement('div', { className: A()(me, _ && _e) }),
                            a().createElement('div', { className: A()(Ae, m && Fe) }),
                            r && a().createElement('div', { className: be }),
                            t,
                        );
                    },
                    he = ({
                        startState: e,
                        endState: t,
                        layoutInfo: u,
                        isPaused: r,
                        children: i,
                        className: o,
                        isTankmanMode: s,
                    }) => {
                        const l = (0, ie.useSpring)(
                                () => ({ from: e, to: t, config: { duration: 300, easing: se.qb }, pause: r }),
                                [r],
                            )[0],
                            c = (0, n.useMemo)(
                                () =>
                                    u.isCurrentLayoutHangar || u.isCurrentLayoutQuickTraining || s
                                        ? e
                                        : (!u.isPreviousLayoutHangar && !u.isPreviousLayoutBarrack) || r
                                          ? t
                                          : l,
                                [u, r, l, e, t, s],
                            );
                        return a().createElement(ie.animated.div, { className: o, style: c }, i);
                    },
                    ve = 'DogSlot_base_8f',
                    we = 'DogSlot_icon_ba',
                    De = 'DogSlot_container_63',
                    Be = 'DogSlot_roleAndName_c9',
                    fe = 'DogSlot_role_5c',
                    pe = 'DogSlot_name_9c',
                    ye = 'DogSlot_btnDetails_b7',
                    ke = { transform: 'translateX(0rem)' },
                    Se = (0, r.Pi)(({ isDisabled: e, layoutInfo: t }) => {
                        const u = E(),
                            r = u.model,
                            i = u.controls,
                            o = r.nation.get(),
                            s = i.onDogMoreInfoClick,
                            l = (0, n.useCallback)(() => {
                                !e && (0, re.G)(oe.gO.RUDY);
                            }, [e]),
                            c = (0, n.useCallback)(
                                (t) => {
                                    t.stopPropagation(), !e && s();
                                },
                                [s, e],
                            ),
                            d = (0, ie.useSpring)(
                                () => ({
                                    from: ke,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: se.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
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
                                    { onClick: l, isDisabled: e, isEnabledForMouse: !1, layoutInfo: t },
                                    a().createElement(
                                        he,
                                        {
                                            startState: ke,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            isPaused: !1,
                                            className: ve,
                                            isTankmanMode: !1,
                                        },
                                        a().createElement(ie.animated.div, { className: we, style: d }),
                                        a().createElement(
                                            'div',
                                            { className: De },
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
                                                { className: ye },
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
                var Ie = u(9916);
                const xe = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: a = 0,
                        args: r,
                        isEnabled: i = !0,
                        onMouseDown: o,
                    }) => {
                        const s = (0, n.useCallback)(() => {
                                (0, Ie.c9)(Ie.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    re.$.playYes();
                            }, [r, t, u, a]),
                            l = (0, n.useCallback)(() => {
                                (0, Ie.c9)(Ie.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, a]),
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
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Le.apply(this, arguments)
                    );
                }
                const Oe = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Te);
                        return a().createElement(
                            xe,
                            Le({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Re = 'ChangeCrewButton_base_0f',
                    Pe = 'ChangeCrewButton_base__inactive_77',
                    Me = 'ChangeCrewButton_normalState_07',
                    Ne = 'ChangeCrewButton_normalState__hide_db',
                    He = 'ChangeCrewButton_hoverState_68',
                    We = 'ChangeCrewButton_hoverState__show_89',
                    je = (0, r.Pi)(({ isSelected: e, isLocked: t, mainRole: u, isFemale: r }) => {
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
                                    t
                                        ? [
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.header(),
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.body(),
                                          ]
                                        : [
                                              '',
                                              (0, y.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, oe.Gc)(u, r, oe.wP.Objective),
                                              }),
                                          ],
                                [t, r, u],
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
                                    className: A()(Re, (t || e) && Pe),
                                    onMouseEnter: () => {
                                        d.onShow(), t || e || (re.$.playHighlight(), l(!0));
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
                var Ye = u(7077),
                    Ke = u(7078),
                    Qe = u(2603),
                    Xe = u(771);
                const Je = 'SpecializationAndName_base_ef',
                    et = 'SpecializationAndName_roleWrapper_87',
                    tt = 'SpecializationAndName_role_55',
                    ut = 'SpecializationAndName_role__withGap_35',
                    nt = 'SpecializationAndName_name_aa',
                    at = ({ roles: e, tankmanID: t = Xe.y$, slotIdx: u, name: n }) =>
                        a().createElement(
                            'div',
                            { className: Je },
                            a().createElement(
                                Ke.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Qe.rs, slotIdx: u, tankmanID: t },
                                },
                                a().createElement(
                                    'div',
                                    { className: et },
                                    s.UI(e, (e, t) =>
                                        a().createElement('div', {
                                            key: `role__${e}`,
                                            className: A()(tt, t > 0 && ut),
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            a().createElement('div', { className: nt }, n),
                        ),
                    rt = 'EmptySlotContent_base_77',
                    it = 'EmptySlotContent_tankmanIcon_07',
                    ot = 'EmptySlotContent_icon_a8',
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
                            vehicleType: r,
                            isDisabled: i,
                            isSelected: o,
                            slotIdx: l,
                            blinkStyle: c,
                            qtTankmanIconStyle: d,
                        }) => {
                            const m = (0, ie.useSpring)(
                                    () => ({
                                        from: dt,
                                        to: mt,
                                        config: { duration: 200, easing: se.ei },
                                        immediate: !0,
                                        pause: o,
                                    }),
                                    [o],
                                ),
                                _ = m[0],
                                E = m[1],
                                g = (0, n.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || E.start({ reset: !0, reverse: !0 });
                                }, [E, t]),
                                F = s.U2(e, 0) || '',
                                b = R.strings.crew_widget.vehicleWithName.$dyn((0, y.BN)(r)),
                                C = (0, y.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(F),
                                });
                            return a().createElement(
                                'div',
                                { className: rt, onMouseEnter: g, onMouseLeave: g },
                                a().createElement(
                                    'div',
                                    { className: it },
                                    a().createElement(
                                        ie.animated.div,
                                        { style: d },
                                        a().createElement(Ye.G, {
                                            name: 'empty',
                                            size: Ye.U.c100x60Barracks,
                                            classMix: ot,
                                        }),
                                        a().createElement(
                                            ie.animated.div,
                                            { style: i ? void 0 : c },
                                            a().createElement(Ye.G, {
                                                name: 'emptyRed',
                                                size: Ye.U.c100x60Barracks,
                                                classMix: ot,
                                            }),
                                        ),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: A()(st, i && lt) },
                                    a().createElement(at, { slotIdx: l, roles: e, name: C }),
                                ),
                                a().createElement(
                                    ie.animated.div,
                                    { className: ct, style: o ? void 0 : _ },
                                    (0, y.uF)(b, { name: u }),
                                ),
                            );
                        },
                    );
                var Et = u(5415),
                    gt = u(8271);
                const At = (e) => e.skills.length + e.newSkillsAmount + e.possibleSkillsAmount,
                    Ft = (e, t, u) => {
                        const n = ((e, t, u) => {
                                if (e <= t) return [1, e, 24];
                                const n = Math.floor((u - 2) / 18);
                                return [2, e <= 2 * n ? n : Math.ceil(e / 2), 16];
                            })(e, t, u),
                            a = n[0],
                            r = n[1],
                            i = n[2];
                        let o = 2,
                            s = i;
                        for (; r * s + o + (r - 1) > u; ) o > 0 ? (o -= 1) : (s -= 1);
                        return s !== i && (o = s - i), [a, r, o, i, s];
                    };
                var bt = u(4385),
                    Ct = u(5563);
                const ht = 'AcceleratedTrainingIcon_base_4f',
                    vt = 'AcceleratedTrainingIcon_icon_45',
                    wt = (0, n.memo)(({ classMix: e }) =>
                        a().createElement(
                            F.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            },
                            a().createElement(
                                'div',
                                { className: A()(ht, e) },
                                a().createElement('div', { className: vt }),
                            ),
                        ),
                    ),
                    Dt = {
                        base: 'LastSkillInfo_base_38',
                        levelsContainer: 'LastSkillInfo_levelsContainer_4f',
                        realLevel: 'LastSkillInfo_realLevel_78',
                        base__small: 'LastSkillInfo_base__small_c5',
                        possibleLevel: 'LastSkillInfo_possibleLevel_02',
                        acceleratedTrainingIcon: 'LastSkillInfo_acceleratedTrainingIcon_bf',
                        base__big: 'LastSkillInfo_base__big_10',
                    },
                    Bt = 0.01,
                    ft = (0, n.memo)(
                        ({
                            lastSkillLevel: e,
                            lastPossibleSkillLevel: t,
                            isLevelVisible: u,
                            isAcceleratedTrainingVisible: r,
                            skillSize: i,
                            blinkStyle: o,
                        }) => {
                            const s = (0, n.useRef)(e),
                                l = (0, ie.useSpring)(() => ({ from: { scale: 1 } })),
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
                                            : t < Bt
                                              ? [R.strings.crew_widget.plusMinValue(), Bt]
                                              : [R.strings.crew_widget.plusValue(), t],
                                    [t],
                                ),
                                _ = m[0],
                                E = m[1];
                            return a().createElement(
                                'div',
                                { className: A()(Dt.base, Dt[`base__${i}`]) },
                                u &&
                                    a().createElement(
                                        'div',
                                        { className: Dt.levelsContainer },
                                        e >= 0 &&
                                            e < 100 &&
                                            a().createElement(
                                                ie.animated.div,
                                                { style: c },
                                                a().createElement(
                                                    'div',
                                                    { className: Dt.realLevel },
                                                    (0, y.uF)(R.strings.common.percentValue(), {
                                                        value: e > 0 && e < Bt ? Bt : e,
                                                    }),
                                                ),
                                            ),
                                        t >= 0 &&
                                            t < 100 &&
                                            a().createElement(
                                                ie.animated.div,
                                                { className: Dt.possibleLevel, style: o },
                                                (0, y.uF)(_, { value: E }),
                                            ),
                                    ),
                                r && a().createElement(wt, { classMix: Dt.acceleratedTrainingIcon }),
                            );
                        },
                    );
                var pt = u(8485);
                const yt = 33,
                    kt = 0,
                    St = !0,
                    It = 'play';
                const xt = [
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
                const Lt = (0, n.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            r = e.getImageSource,
                            i = e.frameCount,
                            o = e.onAnimate,
                            s = e.frameTime,
                            l = void 0 === s ? yt : s,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? kt : c,
                            m = e.lastFrameIndex,
                            _ = void 0 === m ? i - 1 : m,
                            E = e.loop,
                            g = void 0 === E ? St : E,
                            A = e.state,
                            F = void 0 === A ? It : A,
                            b = e.onAnimationDone,
                            C = e.onAnimationComplete,
                            h = e.poster,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, xt);
                        const w = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = w.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y);
                                    };
                                switch (F) {
                                    case 'play':
                                        return (function () {
                                            const e = Pt(d, _, r),
                                                t = Ot(d, _),
                                                n = window.setInterval(() => {
                                                    const a = t(),
                                                        r = e.get(a);
                                                    r
                                                        ? (null == o || o(a, r),
                                                          u(r),
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
                                                t = new Image();
                                            t.src = e.path;
                                            const n = () => u(Rt(e, t));
                                            return (
                                                t.addEventListener('load', n), () => t.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, d, _, g, o, C, b, h, F]),
                            a().createElement('canvas', Tt({}, v, { width: t, height: u, ref: w }))
                        );
                    }),
                    Ot = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return (u += 1), u > t && (u = e), n;
                        };
                    },
                    Rt = (e, t) => Object.assign({}, e, { img: t }),
                    Pt = (e, t, u) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= t; r++) {
                            const e = u(r),
                                t = a[e.path];
                            if (t) n.set(r, Rt(e, t));
                            else {
                                const t = new Image();
                                (a[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, Rt(e, t));
                            }
                        }
                        return n;
                    };
                function Mt(e) {
                    return (t) => `${e}${t}`;
                }
                const Nt = [
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
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
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
                const jt = (e, t, u) => {
                        const n = new Image();
                        (n.src = u(t)), e.push(n);
                    },
                    Vt =
                        ((0, n.memo)((e) => {
                            let t = e.width,
                                u = e.height,
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
                                A = void 0 === g ? Wt.Play : g,
                                F = e.onAnimationComplete,
                                b = void 0 === F ? () => {} : F,
                                C = e.revers,
                                h = void 0 !== C && C,
                                v = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, Nt);
                            const w = (0, n.useRef)(null);
                            return (
                                (0, n.useEffect)(() => {
                                    const e = w.current;
                                    if (!e) return;
                                    const n = i - 1,
                                        a = e.getContext('2d'),
                                        o = (n) => {
                                            a.clearRect(0, 0, e.width, e.height), a.drawImage(n, 0, 0, t, u);
                                        };
                                    if ('stop' === A) {
                                        const e = r(0),
                                            t = new Image();
                                        t.src = e;
                                        const u = () => o(t);
                                        return t.addEventListener('load', u), () => t.removeEventListener('load', u);
                                    }
                                    const l = ((e, t, u) => {
                                            const n = [];
                                            if (u) for (let u = e; u >= 0; u--) jt(n, u, t);
                                            else for (let u = 0; u < e; u++) jt(n, u, t);
                                            return n;
                                        })(i, r, h),
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
                                            o(l[e]), s(e, t), e === n && (b(), E || clearInterval(_));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [i, c, r, u, m, E, s, b, A, t, h]),
                                a().createElement('canvas', Ht({}, v, { width: t, height: u, ref: w }))
                            );
                        }),
                        'AnimatedNewSkill_base_6b'),
                    Ut = 'AnimatedNewSkill_base__big_31';
                function Zt(e, t) {
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
                class zt {
                    constructor() {
                        (this._intervalID = void 0),
                            (this._observers = void 0),
                            (this._intervalID = null),
                            (this._observers = new Map());
                    }
                    static get instance() {
                        return zt._instance || (zt._instance = new zt()), zt._instance;
                    }
                    subscribe(e) {
                        this._observers.set(e, e),
                            1 === this._observers.size &&
                                (this._intervalID = window.setInterval(() => {
                                    for (var e, t = Zt(this._observers.values()); !(e = t()).done; ) {
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
                zt._instance = void 0;
                const $t = {
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
                        const t = e === pt.O.Small ? qt : $t,
                            u = (function (e) {
                                const t = e.chunk,
                                    u = t.rows * t.columns;
                                return (n) => {
                                    const a = n % u,
                                        r = (a % t.columns) * e.width,
                                        i = Math.trunc(a / t.columns) * e.height;
                                    return { path: e.getChunkPath(Math.trunc(n / u)), x: r, y: i };
                                };
                            })(t),
                            r = (0, n.useState)(Wt.Stop),
                            i = r[0],
                            o = r[1],
                            s = (0, n.useCallback)(() => {
                                o(Wt.Play);
                            }, [o]),
                            l = (0, n.useCallback)(() => {
                                o(Wt.Stop);
                            }, [o]);
                        return (
                            (0, n.useEffect)(() => (zt.instance.subscribe(s), () => zt.instance.unsubscribe(s)), [s]),
                            a().createElement(Lt, {
                                width: t.width,
                                height: t.height,
                                frameCount: t.frameCount,
                                getImageSource: u,
                                loop: !1,
                                state: i,
                                onAnimationDone: l,
                                className: A()(Vt, e === pt.O.Big && Ut),
                            })
                        );
                    },
                    Kt = { base: 'Skill_base_ba', base__big: 'Skill_base__big_eb' };
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                let Xt;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(Xt || (Xt = {}));
                const Jt = (0, n.memo)(
                        ({
                            name: e,
                            icon: t,
                            type: u,
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
                                u === gt.W.New &&
                                    E.current === gt.W.Possible &&
                                    C.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: se.Fs },
                                    }),
                                    (E.current = u);
                            }, [u, C]);
                            const h = (0, n.useCallback)(() => {
                                switch (u) {
                                    case gt.W.Learned:
                                    case gt.W.Learning:
                                    case gt.W.Irrelevant:
                                        return {
                                            contentId:
                                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                    'resId',
                                                ),
                                            args: { tooltipId: Qe.HZ, tankmanID: s, skillName: e },
                                        };
                                    case gt.W.New:
                                    case gt.W.Possible:
                                        return {
                                            contentId: R.views.lobby.crew.tooltips.PerkAvailableTooltip('resId'),
                                            args: { tankmanID: s },
                                        };
                                }
                            }, [u, e, s]);
                            return a().createElement(
                                b.u,
                                Qt({}, h(), {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: m,
                                    ignoreShowDelay: !0,
                                }),
                                a().createElement(
                                    ie.animated.div,
                                    { style: F },
                                    a().createElement(
                                        ie.animated.div,
                                        { style: u === gt.W.Possible ? c : void 0 },
                                        a().createElement(
                                            'div',
                                            {
                                                className: A()(Kt.base, Kt[`base__${r}`]),
                                                style: { marginLeft: `${i}rem`, clipPath: `inset(0 ${o}rem 0 0)` },
                                            },
                                            !d || (u !== gt.W.Possible && u !== gt.W.New)
                                                ? a().createElement(pt.d, {
                                                      icon: t,
                                                      size: r,
                                                      type: u,
                                                      efficiency: l,
                                                      hasInstruction: _,
                                                  })
                                                : a().createElement(Yt, { size: r }),
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
                function au() {
                    return (
                        (au =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        au.apply(this, arguments)
                    );
                }
                const ru = ({
                        tankman: e,
                        isAcceleratedTrainingVisible: t = !1,
                        rowWidth: u = 220,
                        maxBigSkillsInRow: n = 16,
                        blinkStyle: r,
                        isSkillTooltipEnabled: i = !0,
                        showNewSkillAnimation: o = !1,
                    }) => {
                        const l = At(e),
                            c = Ft(l, n, u),
                            d = c[0],
                            m = c[1],
                            _ = c[2],
                            E = c[3],
                            g = c[4],
                            A = d > 1 ? Xt.Small : Xt.Big,
                            F = (0, oe.Y4)(e.skillsEfficiency) !== oe.H$.Normal,
                            b = -1 !== e.possibleSkillsEfficiency,
                            C = b ? e.possibleSkillsEfficiency : e.skillsEfficiency,
                            h = (0, oe.Y4)(C) !== oe.H$.Low;
                        return a().createElement(
                            'div',
                            { className: eu },
                            F &&
                                a().createElement(
                                    ie.animated.div,
                                    { style: b ? r : void 0 },
                                    a().createElement(Ct.A, {
                                        efficiencyValue: C,
                                        tankmanID: e.tankmanID,
                                        className: tu,
                                    }),
                                ),
                            a().createElement(
                                'div',
                                { className: uu },
                                (0, bt.K)(d, (u) => {
                                    const n = Math.min(m, l - u * m),
                                        c = u === d - 1;
                                    return a().createElement(
                                        'div',
                                        { className: nu, key: `row_${u}` },
                                        (0, bt.K)(n, (t) => {
                                            const l = m * u + t;
                                            return a().createElement(
                                                Jt,
                                                au(
                                                    {},
                                                    ((e, t) => {
                                                        const u = t.skills.length;
                                                        let n = '',
                                                            a = '',
                                                            r = gt.W.Learned,
                                                            i = !1;
                                                        if (e < u) {
                                                            const u = s.U2(t.skills, e);
                                                            u &&
                                                                ((n = u.name),
                                                                (a = u.icon),
                                                                (r = u.type),
                                                                (i = u.hasInstruction));
                                                        } else
                                                            (r = e < u + t.newSkillsAmount ? gt.W.New : gt.W.Possible),
                                                                (a = Xe.jw);
                                                        return { name: n, icon: a, type: r, hasInstruction: i };
                                                    })(l, e),
                                                    {
                                                        size: A,
                                                        marginValue: 0 === t ? 0 : _,
                                                        key: `skill_${l}`,
                                                        clipWidth: t === n - 1 ? 0 : E - g,
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
                                            a().createElement(ft, {
                                                lastSkillLevel: e.possibleSkillsAmount > 0 ? -1 : e.lastSkillLevel,
                                                lastPossibleSkillLevel: e.lastPossibleSkillLevel,
                                                isLevelVisible: h,
                                                isAcceleratedTrainingVisible: t,
                                                skillSize: A,
                                                blinkStyle: r,
                                            }),
                                    );
                                }),
                            ),
                        );
                    },
                    iu = 'TankmanInfo_base_69',
                    ou = 'TankmanInfo_base__disabled_36',
                    su = 'TankmanInfo_tankmanTooltipHoverArea_9b',
                    lu = 'TankmanInfo_specialization_77',
                    cu = 'TankmanInfo_specialization__withManySkills_9a',
                    du = 'TankmanInfo_skillsContainer_17',
                    mu = 'TankmanInfo_skillsContainer__withManySkills_00',
                    _u = (0, r.Pi)(({ slotIdx: e, tankman: t, layoutInfo: u, blinkStyle: n, isDisabled: r }) => {
                        const i = E().model,
                            o = (0, Et.GS)().mediaSize,
                            s = ((e, t, u, n) => {
                                const a = t.skillsEfficiency < Xe.yb,
                                    r = e.isCurrentLayoutQuickTraining || u;
                                let i,
                                    o = 220;
                                return (
                                    (r || u) && (o = n ? 146 : 190),
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
                                    [o, i, At(t) > i]
                                );
                            })(u, t, i.computes.isChangeCrewButtonVisible(), o < Et.cJ.Small),
                            l = s[0],
                            c = s[1],
                            d = s[2],
                            m =
                                !u.isCurrentLayoutQuickTraining &&
                                -1 !== t.tankmanID &&
                                t.isLessMastered &&
                                t.skillsEfficiency < 100;
                        return a().createElement(
                            'div',
                            { className: A()(iu, r && ou) },
                            a().createElement(
                                Ke.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Qe.v$, tankmanID: t.tankmanID },
                                },
                                a().createElement('div', { className: su }),
                            ),
                            a().createElement(
                                'div',
                                { className: A()(lu, d && cu) },
                                a().createElement(at, {
                                    tankmanID: t.tankmanID,
                                    slotIdx: e,
                                    roles: t.roles,
                                    name: t.fullName,
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: A()(du, d && mu) },
                                a().createElement(ru, {
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
                    Fu = 'QuickTrainingTankmanSlotContent_icon_7c',
                    bu = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    Cu = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    hu = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    vu = { opacity: 0 },
                    wu = [{ opacity: 1 }, { opacity: 0 }],
                    Du = (0, n.memo)(
                        ({
                            slotIdx: e,
                            tankman: t,
                            blinkStyle: u,
                            qtTankmanIconStyle: r,
                            layoutInfo: i,
                            isDisabled: o,
                        }) => {
                            const s = (0, n.useRef)(t.lastSkillLevelFull),
                                l = (0, n.useRef)(t.skills.length),
                                c = (0, ie.useSpring)(() => ({ from: bu })),
                                d = c[0],
                                m = c[1],
                                _ = (0, ie.useSpring)(() => ({ from: vu })),
                                E = _[0],
                                g = _[1],
                                A = (0, n.useRef)(!1);
                            return (
                                (0, n.useEffect)(() => {
                                    t.hasPossibleProgress
                                        ? A.current ||
                                          (m.start({
                                              from: bu,
                                              to: Cu,
                                              reverse: false,
                                              config: { duration: 300, easing: se.BH },
                                          }),
                                          (A.current = !0))
                                        : A.current
                                          ? (t.skills.length > l.current || t.lastSkillLevelFull > s.current
                                                ? (m.start({
                                                      from: Cu,
                                                      to: hu,
                                                      delay: 200,
                                                      config: { duration: 500, easing: se.BH },
                                                  }),
                                                  (s.current = t.lastSkillLevelFull),
                                                  (l.current = t.skills.length),
                                                  g.start({
                                                      from: vu,
                                                      to: wu,
                                                      delay: 200,
                                                      config: { duration: 500, easing: se.BH },
                                                  }))
                                                : m.start({ reset: !0, reverse: !0 }),
                                            (A.current = !1))
                                          : ((s.current = t.lastSkillLevelFull), (l.current = t.skills.length));
                                }, [m, g, t.lastSkillLevelFull, t.hasPossibleProgress, t.skills.length]),
                                a().createElement(
                                    'div',
                                    { className: Eu },
                                    a().createElement(ie.animated.div, { className: Au, style: E }),
                                    a().createElement(
                                        ie.animated.div,
                                        { style: r },
                                        a().createElement(Ye.G, {
                                            name: t.icon,
                                            size: Ye.U.c100x60Barracks,
                                            classMix: Fu,
                                            isSkin: t.isInSkin,
                                        }),
                                    ),
                                    a().createElement(ie.animated.div, { className: gu, style: d }),
                                    a().createElement(_u, {
                                        slotIdx: e,
                                        tankman: t,
                                        layoutInfo: i,
                                        blinkStyle: u,
                                        isDisabled: o,
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
                                    for (let r = 0; r < u; r++) {
                                        var n, a;
                                        if (
                                            (null == (n = s.U2(e, r)) ? void 0 : n.name) !==
                                            (null == (a = s.U2(t, r)) ? void 0 : a.name)
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
                    Bu = 'TankmanSlotContent_base_00',
                    fu = 'TankmanSlotContent_icon_ef',
                    pu = (0, n.memo)(({ slotIdx: e, tankman: t, layoutInfo: u, isDisabled: n }) =>
                        a().createElement(
                            'div',
                            { className: Bu },
                            a().createElement(Ye.G, {
                                name: t.icon,
                                size: Ye.U.c100x60Barracks,
                                classMix: fu,
                                isSkin: t.isInSkin,
                            }),
                            a().createElement(_u, { slotIdx: e, tankman: t, layoutInfo: u, isDisabled: n }),
                        ),
                    ),
                    yu = (0, n.memo)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: u,
                            layoutInfo: n,
                            vehicleName: r,
                            vehicleType: i,
                            isDisabled: o,
                            isSelected: s,
                            blinkSlotStyle: l,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: d,
                        }) =>
                            -1 === u.tankmanID
                                ? a().createElement(_t, {
                                      roles: t,
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
                                  ? a().createElement(Du, {
                                        slotIdx: e,
                                        tankman: u,
                                        blinkStyle: l,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: n,
                                        isDisabled: o,
                                    })
                                  : a().createElement(pu, { slotIdx: e, tankman: u, layoutInfo: n, isDisabled: o }),
                    ),
                    ku = { transform: 'translateX(0rem)' },
                    Su = { transform: 'translateX(41rem)' },
                    Iu = { opacity: 0 },
                    xu = { opacity: 1 },
                    Tu = (0, r.Pi)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: u,
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
                                C = ((e, t) => {
                                    const u = (0, j.Jp)(c.D9),
                                        n = (0, H.f)(
                                            () => u({ action: c.eX.Click, parentScreen: e, item: t }),
                                            [e, t],
                                            c.tL,
                                        );
                                    return (e) => {
                                        e.button === W.RIGHT && n();
                                    };
                                })(F.computes.getUiLoggingParentScreen(), c.x3.SlotContextMenu),
                                h = b.onSlotClick,
                                v = b.onChangeCrewClick,
                                w = F.computes.isChangeCrewButtonVisible(),
                                D = F.computes.isTankmanMode(),
                                B = F.isCrewLocked.get(),
                                f = F.vehicleName.get(),
                                p = F.vehicleType.get(),
                                y = !l && u.isInteractive && (!r.isCurrentLayoutQuickTraining || o),
                                k = (0, n.useCallback)(() => {
                                    y && !D && ((0, re.G)(R.sounds.yes1()), h(e, u.tankmanID));
                                }, [e, u, h, D, y]),
                                S = (0, n.useCallback)(
                                    (t) => {
                                        t.stopPropagation(), B || ((0, re.G)(R.sounds.yes1()), v(e, u.tankmanID));
                                    },
                                    [e, u, v, B],
                                ),
                                I = (0, n.useMemo)(() => ({ tankmanID: u.tankmanID, slotIdx: e }), [u, e]);
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
                                            onClick: k,
                                            isSelected: i,
                                            isDisabled: l,
                                            isEmpty: -1 === u.tankmanID,
                                            layoutInfo: r,
                                            isEnabledForMouse: y,
                                        },
                                        a().createElement(
                                            'div',
                                            { className: Ve },
                                            u.hasWarning && a().createElement('div', { className: ze }),
                                            i && a().createElement('div', { className: D ? qe : $e }),
                                            a().createElement(
                                                he,
                                                {
                                                    startState: ku,
                                                    endState: Su,
                                                    layoutInfo: r,
                                                    isPaused: !w,
                                                    className: A()(Ze, w && Ge),
                                                    isTankmanMode: D,
                                                },
                                                a().createElement(yu, {
                                                    slotIdx: e,
                                                    roles: t,
                                                    tankman: u,
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
                                            w &&
                                                a().createElement(
                                                    'div',
                                                    { onClick: S },
                                                    a().createElement(
                                                        he,
                                                        {
                                                            startState: Iu,
                                                            endState: xu,
                                                            layoutInfo: r,
                                                            isPaused: !w,
                                                            className: Ue,
                                                            isTankmanMode: D,
                                                        },
                                                        a().createElement(je, {
                                                            isSelected: r.isCurrentLayoutMemberChange && i,
                                                            isLocked: B,
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
                    Lu = 'SlotsList_base_5f';
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                const Ru = { transform: 'translateX(0rem)' },
                    Pu = { transform: 'translateX(15rem)' },
                    Mu = (0, r.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: u }) => {
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
                                from: Ru,
                                to: Pu,
                                delay: 200,
                                config: { duration: 300, easing: se.ei },
                                pause: !e.isCurrentLayoutQuickTraining,
                            }))[0],
                            g = (0, n.useCallback)(
                                (u) => t || (e.isCurrentLayoutQuickTraining && -1 === u),
                                [t, e.isCurrentLayoutQuickTraining],
                            );
                        return a().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: A()(Lu, u) },
                            r.computes
                                .getSlots()
                                .map((t, u) =>
                                    a().createElement(
                                        Tu,
                                        Ou({}, t, {
                                            layoutInfo: e,
                                            key: `slot_${u}_${t.tankman.tankmanID}`,
                                            isSelected:
                                                !e.isCurrentLayoutHangar &&
                                                (r.computes.isSlotSelected(t.slotIdx) || r.computes.isTankmanMode()),
                                            isAnySlotSelected: r.computes.isAnySlotSelected(),
                                            isDisabled: g(t.tankman.tankmanID),
                                            blinkSlotStyle: d,
                                            blinkTankmanStyle: s,
                                            qtTankmanIconStyle: _,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Nu = (0, r.Pi)(() => {
                        const e = E().model,
                            t = e.isDisabled.get(),
                            u = e.hasDog.get(),
                            n = e.computes.getLayoutInfo();
                        return a().createElement(
                            'div',
                            { className: ue },
                            e.computes.isButtonBarVisible() &&
                                a().createElement(
                                    'div',
                                    { className: ne },
                                    a().createElement(te, { isWidgetDisabled: t }),
                                ),
                            a().createElement(Mu, { layoutInfo: n, isWidgetDisabled: t, className: ae }),
                            u && a().createElement(Se, { layoutInfo: n, isDisabled: t }),
                        );
                    }),
                    Hu = { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') },
                    Wu = (0, n.memo)(() => a().createElement(_, { options: Hu }, a().createElement(Nu, null)));
            },
            8271: (e, t, u) => {
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
                u.d(t, { Br: () => r, HZ: () => n, M4: () => i, rs: () => o, v$: () => a });
                const n = 'crewPerkGf',
                    a = 'tankman',
                    r = 'skillsEfficiency',
                    i = 'crewSkillUntrained',
                    o = 'vehicleCrewMemberInHangar';
            },
            771: (e, t, u) => {
                u.d(t, { jw: () => r, sU: () => n, y$: () => i, yb: () => a });
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
            6880: (e, t, u) => {
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
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
            },
            8055: (e, t, u) => {
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
                u.d(t, { Z: () => n });
                const n = {
                    base: 'EfficiencyIndicator_base_34',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
            },
            4458: (e, t, u) => {
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
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, u, n] = deferred[s], r = !0, i = 0; i < t.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = u();
                        void 0 !== o && (e = o);
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
        (__webpack_require__.j = 399),
        (() => {
            var e = { 399: 0, 3: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, i, o] = u,
                        s = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(u); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(8773));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
