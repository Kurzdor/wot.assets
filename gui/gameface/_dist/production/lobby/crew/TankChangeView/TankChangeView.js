(() => {
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => m });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7727),
                    o = u(6179),
                    s = u.n(o),
                    i = u(6880),
                    l = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: c,
                    mixClass: m,
                    soundHover: d,
                    soundClick: _,
                    onMouseEnter: E,
                    onMouseMove: g,
                    onMouseDown: A,
                    onMouseUp: p,
                    onMouseLeave: F,
                    onClick: C,
                }) => {
                    const D = (0, o.useRef)(null),
                        h = (0, o.useState)(u),
                        v = h[0],
                        b = h[1],
                        B = (0, o.useState)(!1),
                        f = B[0],
                        w = B[1],
                        y = (0, o.useState)(!1),
                        k = y[0],
                        S = y[1],
                        L = (0, o.useCallback)(() => {
                            c || (D.current && (D.current.focus(), b(!0)));
                        }, [c]),
                        T = (0, o.useCallback)(
                            (e) => {
                                v && null !== D.current && !D.current.contains(e.target) && b(!1);
                            },
                            [v],
                        ),
                        x = (0, o.useCallback)(
                            (e) => {
                                c || (C && C(e));
                            },
                            [c, C],
                        ),
                        I = (0, o.useCallback)(
                            (e) => {
                                c || (null !== d && (0, r.G)(d), E && E(e), S(!0));
                            },
                            [c, d, E],
                        ),
                        M = (0, o.useCallback)(
                            (e) => {
                                g && g(e);
                            },
                            [g],
                        ),
                        N = (0, o.useCallback)(
                            (e) => {
                                c || (p && p(e), w(!1));
                            },
                            [c, p],
                        ),
                        O = (0, o.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, r.G)(_), A && A(e), u && L(), w(!0));
                            },
                            [c, _, A, L, u],
                        ),
                        P = (0, o.useCallback)(
                            (e) => {
                                c || (F && F(e), w(!1));
                            },
                            [c, F],
                        ),
                        H = a()(
                            i.Z.base,
                            i.Z[`base__${n}`],
                            {
                                [i.Z.base__disabled]: c,
                                [i.Z[`base__${t}`]]: t,
                                [i.Z.base__focus]: v,
                                [i.Z.base__highlightActive]: f,
                                [i.Z.base__firstHover]: k,
                            },
                            m,
                        ),
                        W = a()(i.Z.state, i.Z.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, o.useEffect)(() => {
                            b(u);
                        }, [u]),
                        s().createElement(
                            'div',
                            {
                                ref: D,
                                className: H,
                                onMouseEnter: I,
                                onMouseMove: M,
                                onMouseUp: N,
                                onMouseDown: O,
                                onMouseLeave: P,
                                onClick: x,
                            },
                            n !== l.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: i.Z.back }),
                                    s().createElement('span', { className: i.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: W },
                                s().createElement('span', { className: i.Z.stateDisabled }),
                                s().createElement('span', { className: i.Z.stateHighlightHover }),
                                s().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const m = (0, o.memo)(c);
            },
            2106: (e, t, u) => {
                'use strict';
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(a || (a = {}));
            },
            9987: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    o = u.n(r),
                    s = u(8055);
                const i = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
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
                        m = e.maximumNumber,
                        d = e.className,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, i);
                    const E = n ? null : u,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const A = E && !g && E > m,
                        p = a()(
                            s.Z.base,
                            s.Z[`base__${t}`],
                            r && s.Z.base__animated,
                            c && s.Z.base__hidden,
                            !E && s.Z.base__pattern,
                            n && s.Z.base__empty,
                            d,
                        );
                    return o().createElement(
                        'div',
                        l({ className: p }, _),
                        o().createElement('div', { className: s.Z.bg }),
                        o().createElement('div', { className: s.Z.pattern }),
                        o().createElement(
                            'div',
                            { className: a()(s.Z.value, g && s.Z.value__text) },
                            A ? m : E,
                            A && o().createElement('span', { className: s.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            280: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => l });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    o = u.n(r),
                    s = u(3649),
                    i = u(5287);
                const l = ({ binding: e, text: t = '', classMix: u, alignment: r = s.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : a().createElement(
                              n.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  a().createElement(
                                      'div',
                                      { className: o()(i.Z.base, u), key: `${t}-${l}` },
                                      (0, s.Uw)(t, r, e).map((e, t) =>
                                          a().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => m });
                var n = u(3138),
                    a = u(6179),
                    r = u(1043),
                    o = u(5262);
                const s = n.O.client.getSize('rem'),
                    i = s.width,
                    l = s.height,
                    c = Object.assign({ width: i, height: l }, (0, o.T)(i, l, r.j)),
                    m = (0, a.createContext)(c);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => c });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6536),
                    o = u(3495),
                    s = u(1043),
                    i = u(5262),
                    l = u(3138);
                const c = (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(o.Y),
                        u = (0, n.useState)(t),
                        c = u[0],
                        m = u[1],
                        d = (0, n.useCallback)((e, t) => {
                            const u = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(t);
                            m(Object.assign({ width: u, height: n }, (0, i.T)(u, n, s.j)));
                        }, []);
                    (0, r.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', d), [d]);
                    const _ = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return a().createElement(o.Y.Provider, { value: _ }, e);
                });
            },
            6010: (e, t, u) => {
                'use strict';
                var n = u(6179),
                    a = u(7382),
                    r = u(3495);
                const o = ['children'];
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
                        })(e, o);
                    const s = (0, n.useContext)(r.Y),
                        i = s.extraLarge,
                        l = s.large,
                        c = s.medium,
                        m = s.small,
                        d = s.extraSmall,
                        _ = s.extraLargeWidth,
                        E = s.largeWidth,
                        g = s.mediumWidth,
                        A = s.smallWidth,
                        p = s.extraSmallWidth,
                        F = s.extraLargeHeight,
                        C = s.largeHeight,
                        D = s.mediumHeight,
                        h = s.smallHeight,
                        v = s.extraSmallHeight,
                        b = { extraLarge: F, large: C, medium: D, small: h, extraSmall: v };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && i) return t;
                        if (u.large && l) return t;
                        if (u.medium && c) return t;
                        if (u.small && m) return t;
                        if (u.extraSmall && d) return t;
                    } else {
                        if (u.extraLargeWidth && _) return (0, a.H)(t, u, b);
                        if (u.largeWidth && E) return (0, a.H)(t, u, b);
                        if (u.mediumWidth && g) return (0, a.H)(t, u, b);
                        if (u.smallWidth && A) return (0, a.H)(t, u, b);
                        if (u.extraSmallWidth && p) return (0, a.H)(t, u, b);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && F) return t;
                            if (u.largeHeight && C) return t;
                            if (u.mediumHeight && D) return t;
                            if (u.smallHeight && h) return t;
                            if (u.extraSmallHeight && v) return t;
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
                u.d(t, { YN: () => a.Y, ZN: () => n.Z });
                u(6010);
                var n = u(1039),
                    a = u(3495);
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
                'use strict';
                u.d(t, { IC: () => n });
                var n,
                    a = u(6483),
                    r = u.n(a),
                    o = u(6373),
                    s = u(1856),
                    i = u(3138),
                    l = u(2039),
                    c = u(5099),
                    m = u(7727),
                    d = u(4179),
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
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: u, customStyles: n = {} }, a) => {
                        const p = (0, _.useRef)(null),
                            F = (0, _.useRef)(null),
                            C = (0, _.useRef)(null),
                            D = (0, _.useState)(window.decorator && window.decorator.directionType),
                            h = D[0],
                            v = D[1],
                            b = (0, _.useCallback)(() => {
                                m.$.playClick(), i.O.view.sendEvent.close();
                            }, []),
                            B = (0, _.useCallback)(() => {
                                m.$.playHighlight();
                            }, []),
                            f = r()(g.Z.arrow, g.Z[`arrow${A[h]}`]);
                        (0, l.b)(
                            () => (
                                i.O.client.events.mouse.enableOutside(),
                                i.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (u ? u() : i.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const w = (0, _.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === p.current || t === C.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const n = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = i.O.client.getMouseGlobalPosition(),
                                            t = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                            u =
                                                e.x < n.boundX ||
                                                e.x > n.boundX + n.boundWidth ||
                                                e.y > n.boundY + n.boundHeight ||
                                                e.y < n.boundY;
                                        if (t && !u) return;
                                    }
                                    u ? u() : i.O.view.sendEvent.close('popover');
                                },
                                [p, C, u],
                            ),
                            y = (0, _.useCallback)(
                                () => (
                                    i.O.view.freezeTextureBeforeResize(),
                                    (0, s.v)(() => {
                                        if (F.current) {
                                            const e = F.current.scrollWidth,
                                                t = F.current.scrollHeight;
                                            i.O.view.resize(e, t), v(window.decorator.directionType);
                                        }
                                    })
                                ),
                                [],
                            );
                        return (
                            (0, _.useImperativeHandle)(a, () => ({ updateSize: y })),
                            (0, l.b)(() => {
                                i.O.view.setInputPaddingsRem(58);
                            }),
                            (0, _.useEffect)(() => {
                                document.addEventListener('mousedown', w, { capture: !0 });
                                const e = (0, c.B)((0, d.Eu)());
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
                                        { className: g.Z.content, ref: p },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            E().createElement(
                                                o.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                E().createElement('div', {
                                                    className: g.Z.closeBtn,
                                                    onClick: b,
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
            3616: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => l });
                var n = u(1037),
                    a = u(4179),
                    r = u(6179),
                    o = u.n(r);
                const s = [
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
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.contentId,
                        u = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? n.IC.Top : l,
                        m = e.targetId,
                        d = e.args,
                        _ = e.onClick,
                        E = e.children,
                        g = e.isEnabled,
                        A = void 0 === g || g,
                        p = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, s);
                    const F = (0, r.useRef)(null),
                        C = (0, r.useCallback)(() => {
                            if ((0, a.wU)()) return (0, a.SW)();
                            F.current && (0, a.P3)(t, c, F.current, u, m, d);
                        }, [t, c, d, u, m]);
                    return o().createElement(
                        'div',
                        i(
                            {
                                ref: F,
                                onClick:
                                    ((D = E.props.onClick),
                                    (e) => {
                                        A && (C(), _ && _(e), D && D(e));
                                    }),
                            },
                            p,
                        ),
                        E,
                    );
                    var D;
                };
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => i });
                var n = u(6179),
                    a = u.n(n),
                    r = u(2056);
                const o = ['children'];
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
                const i = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, o);
                    return a().createElement(
                        r.u,
                        s(
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
            3415: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => l });
                var n = u(6179),
                    a = u.n(n),
                    r = u(7078),
                    o = u(6373),
                    s = u(2056);
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
                const l = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(o.i, t, n);
                    const l = t.contentId,
                        c = t.args,
                        m = null == c ? void 0 : c.contentId;
                    return l || m
                        ? a().createElement(s.u, i({}, t, { contentId: l || m }), n)
                        : a().createElement(r.t, t, n);
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => l });
                var n = u(2056),
                    a = u(6179),
                    r = u.n(a);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            u = e.body,
                            l = e.header,
                            c = e.note,
                            m = e.alert,
                            d = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, o);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, d, { body: u, header: l, note: c, alert: m });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [m, u, l, c, d]);
                        return r().createElement(
                            n.u,
                            s(
                                {
                                    contentId:
                                        ((g = null == d ? void 0 : d.hasHtmlContent),
                                        g ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
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
                    a = u(4179),
                    r = u(6179);
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
                function s(e) {
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
                const i = (e, t, u = {}, n = 0) => {
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
                            m = e.onMouseDown,
                            d = e.onClick,
                            _ = e.ignoreShowDelay,
                            E = void 0 !== _ && _,
                            g = e.ignoreMouseClick,
                            A = void 0 !== g && g,
                            p = e.decoratorId,
                            F = void 0 === p ? 0 : p,
                            C = e.isEnabled,
                            D = void 0 === C || C,
                            h = e.targetId,
                            v = void 0 === h ? 0 : h,
                            b = e.onShow,
                            B = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, o);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => v || (0, n.F)().resId, [v]),
                            k = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(u, F, { isMouseEvent: !0, on: !0, arguments: s(a) }, y),
                                    b && b(),
                                    (w.current.isVisible = !0));
                            }, [u, F, a, y, b]),
                            S = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(u, F, { on: !1 }, y),
                                        w.current.isVisible && B && B(),
                                        (w.current.isVisible = !1);
                                }
                            }, [u, F, y, B]),
                            L = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', L, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', L, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === D && S();
                            }, [D, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return D
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(k, E ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === A && S(), null == d || d(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === A && S(), null == m || m(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      f,
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
            3532: (e) => {
                e.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };
            },
            9887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
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
                u.d(t, { U: () => s });
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
                const o = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: u = o, context: r = 'model' } = {}) {
                    const s = new Map();
                    function i(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = s.get(t);
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
                            const o = 'string' == typeof a ? `${r}.${a}` : r,
                                i = n.O.view.addModelObserver(o, t, !0);
                            return s.set(i, u), e && u(l(a)), i;
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
                            for (var e, u = a(s.keys()); !(e = u()).done; ) {
                                i(e.value, t);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q: () => i });
                var n = u(4598),
                    a = u(9174),
                    r = u(6179),
                    o = u.n(r),
                    s = u(8246);
                const i = () => (e, t) => {
                    const u = (0, r.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: m }) {
                            const d = (0, r.useRef)([]),
                                _ = (u, r, o) => {
                                    var i;
                                    const l = s.U(r),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == o ? void 0 : o.getter) ? i : () => {},
                                                  }),
                                        m = (e) =>
                                            'mocks' === u ? (null == o ? void 0 : o.getter(e)) : c.readByPath(e),
                                        _ = (e) => d.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: m,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const r = null != t ? t : m(e),
                                                        o = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const r = null != t ? t : m(e),
                                                        o = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = m(t);
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
                                                            o = Object.entries(r),
                                                            s = o.reduce(
                                                                (e, [t, u]) => ((e[u] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        o.forEach(([t, u]) => {
                                                                            s[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
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
                                E = (0, r.useRef)(!1),
                                g = (0, r.useState)(i),
                                A = g[0],
                                p = g[1],
                                F = (0, r.useState)(() => _(i, l, m)),
                                C = F[0],
                                D = F[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? D(_(A, l, m)) : (E.current = !0);
                                }, [m, A, l]),
                                (0, r.useEffect)(() => {
                                    p(i);
                                }, [i]),
                                (0, r.useEffect)(
                                    () => () => {
                                        C.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [C],
                                ),
                                o().createElement(u.Provider, { value: C }, c)
                            );
                        },
                        () => (0, r.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
                'use strict';
                u.r(t), u.d(t, { mouse: () => s, onResize: () => r });
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const s = (function () {
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
                                        s = o[t]((e) => u([e, 'outside']));
                                    function i(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, i),
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
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => o,
                    });
                var n = u(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
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
                u.d(t, { O: () => a });
                var n = u(5959);
                const a = { view: u(7641), client: n };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => B,
                        getScale: () => A,
                        getSize: () => d,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => v,
                        isFocused: () => D,
                        pxToRem: () => p,
                        remToPx: () => F,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => y,
                    });
                var n = u(3722),
                    a = u(6112),
                    r = u(6538),
                    o = u(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
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
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function D() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
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
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    o = 32,
                    s = 64,
                    i = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
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
                                      Object.assign({ __Type: u, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? a : o);
                        },
                        minimize() {
                            i(s);
                        },
                        move(e) {
                            i(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                'use strict';
                u.d(t, { jv: () => a, yR: () => n });
                function n(e) {
                    return e;
                }
                function a() {
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
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(6179);
                const a = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            5415: (e, t, u) => {
                'use strict';
                u.d(t, { Aq: () => i, GS: () => l, cJ: () => o, fd: () => s });
                var n = u(6179),
                    a = u(7739),
                    r = u(1043);
                let o, s, i;
                !(function (e) {
                    (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                    })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge');
                    })(i || (i = {}));
                const l = () => {
                    const e = (0, n.useContext)(a.YN),
                        t = e.width,
                        u = e.height,
                        r = ((e) => {
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
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            2039: (e, t, u) => {
                'use strict';
                u.d(t, { b: () => a });
                var n = u(6179);
                const a = (e) => {
                    (0, n.useEffect)(e, []);
                };
            },
            4489: (e, t, u) => {
                'use strict';
                u.d(t, { f: () => r });
                var n = u(5139),
                    a = u(6179);
                function r(e, t, u) {
                    const r = (0, a.useMemo)(() => (0, n.Z)(u, e), t);
                    return (0, a.useEffect)(() => r.cancel, [r]), r;
                }
            },
            5521: (e, t, u) => {
                'use strict';
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD');
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
                'use strict';
                function n(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                u.d(t, { U2: () => n, UI: () => r, sE: () => o });
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
                function o(e, t) {
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
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { HG: () => o });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const r = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) =>
                        r
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) (t += n[u]), (e -= a[u]);
                                  return t;
                              })(e);
            },
            7727: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e);
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
                'use strict';
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
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                u.d(t, { BN: () => r, Uw: () => _, e: () => o, uF: () => a, v2: () => n }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(n || (n = {}));
                const s = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    i = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    l = (e, t, u = n.left) => e.split(t).reduce(u === n.left ? s : i, []),
                    c = (() => {
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
                    m = ['zh_cn', 'zh_sg', 'zh_tw'],
                    d = (e, t = n.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return m.includes(u)
                            ? c(e)
                            : ((e, t = n.left) => {
                                  let u = [];
                                  const a =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = e.replace(/&nbsp;/g, ' ');
                                  return l(r, /( )/, t).forEach((e) => (u = u.concat(l(e, a, n.left)))), u;
                              })(e, t);
                    },
                    _ = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : d(e, t)));
            },
            5139: (e, t, u) => {
                'use strict';
                function n(e, t, u, n) {
                    let a,
                        r = !1,
                        o = 0;
                    function s() {
                        a && clearTimeout(a);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - o;
                        function m() {
                            (o = Date.now()), u.apply(l, i);
                        }
                        r ||
                            (n && !a && m(),
                            s(),
                            void 0 === n && c > e
                                ? m()
                                : !0 !== t &&
                                  (a = setTimeout(
                                      n
                                          ? function () {
                                                a = void 0;
                                            }
                                          : m,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                        (i.cancel = function () {
                            s(), (r = !0);
                        }),
                        i
                    );
                }
                u.d(t, { Z: () => n });
            },
            1358: (e, t, u) => {
                'use strict';
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
            4179: (e, t, u) => {
                'use strict';
                u.d(t, { B0: () => i, c9: () => D, wU: () => B, ry: () => F, Eu: () => C, SW: () => v, P3: () => b });
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
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
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
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(5521),
                    E = u(3138);
                const g = ['args'];
                function A(e, t, u, n, a, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(n, a);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        function o(e) {
                                            A(r, n, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(r, n, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    D = (e, t) => {
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
                                })(t, g);
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
                    h = () => D(i.CLOSE),
                    v = () => D(i.POP_OVER, { on: !1 }),
                    b = (e, t, u, n, a = R.invalid('resId'), r) => {
                        const o = E.O.view.getViewGlobalPosition(),
                            s = u.getBoundingClientRect(),
                            l = s.x,
                            c = s.y,
                            m = s.width,
                            d = s.height,
                            _ = {
                                x: E.O.view.pxToRem(l) + o.x,
                                y: E.O.view.pxToRem(c) + o.y,
                                width: E.O.view.pxToRem(m),
                                height: E.O.view.pxToRem(d),
                            };
                        D(i.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: a,
                            direction: t,
                            bbox: p(_),
                            on: !0,
                            args: r,
                        });
                    },
                    B = () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                    f = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var w = u(7572);
                const y = a.instance,
                    k = {
                        DataTracker: r.Z,
                        ViewModel: w.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: m,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => D(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: v,
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            D(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: b,
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, h);
                        },
                        handleViewEvent: D,
                        onBindingsReady: F,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: B,
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
                        ClickOutsideManager: y,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = k;
            },
            3458: (e, t, u) => {
                'use strict';
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
                let o;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(o || (o = {}));
            },
            4828: (e, t, u) => {
                'use strict';
                u.d(t, { AB: () => d, D9: () => n, eX: () => r, sC: () => o, tL: () => a, x3: () => l });
                const n = 'crew',
                    a = 2e3;
                let r, o, s, i, l, c, m;
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
                    })(o || (o = {})),
                    (function (e) {
                        e.DocumentChange = 'document_change_dialog';
                    })(s || (s = {})),
                    (function (e) {
                        (e.PremiumTooltip = 'personal_file_view_premium_tooltip'),
                            (e.MstlTooltip = 'personal_file_view_mstl_tooltip');
                    })(i || (i = {})),
                    (function (e) {
                        (e.ChangeButtonTooltip = 'crew_widget_change_button_tooltip'),
                            (e.MstlTooltip = 'crew_widget_mstl_tooltip'),
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
                        e.CardContextMenu = 'barracks_view_card_context_menu';
                    })(m || (m = {}));
                const d = {
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
                u.d(t, { Jp: () => m, Sr: () => _ });
                var n = u(6179),
                    a = u(3458);
                const r = ['action', 'timeLimit'];
                const o = 'metrics',
                    s = () => Date.now(),
                    i = ({ partnerID: e, item: t, parentScreen: u, itemState: n, info: a }) => ({
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
                            o = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, s());
                                },
                                [a],
                            ),
                            i = (0, n.useCallback)(() => {
                                a.current.clear(), r.current.clear();
                            }, [a, r]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === r.current.get(e) &&
                                        r.current.set(e, s());
                                },
                                [a, r],
                            ),
                            m = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const u = r.current.get(e);
                                    if (void 0 === u) return;
                                    r.current.delete(e);
                                    const n = s() - u;
                                    a.current.set(e, t + n);
                                },
                                [a, r],
                            ),
                            d = (0, n.useCallback)(
                                (e, t = 0, n, o) => {
                                    const i = a.current.get(e);
                                    if (void 0 === i) return;
                                    void 0 !== r.current.get(e) && m(e), a.current.delete(e);
                                    const l = (s() - i) / 1e3;
                                    l <= t ||
                                        ((o = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(o, l)),
                                        u(e, n, o));
                                },
                                [a, r, u, m],
                            );
                        return [(e) => o(e), (e, t, u, n) => d(e, t, u, n), () => i(), (e) => c(e), (e) => m(e)];
                    },
                    m = (e) => {
                        const t = l(e, o),
                            u = (0, n.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, i(e));
                                },
                                [t],
                            );
                        return (e) => u(e);
                    },
                    d = (e) => {
                        const t = c(e, o),
                            u = t[0],
                            a = t[1],
                            r = t[2],
                            s = t[3],
                            l = t[4],
                            m = (0, n.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        u = e.timeLimit,
                                        n = e.logLevel;
                                    a(t, u, n, i(e));
                                },
                                [a],
                            );
                        return [(e) => u(e), (e) => m(e), () => r(), (e) => s(e), (e) => l(e)];
                    },
                    _ = (e, t) => {
                        const u = d(e),
                            o = u[0],
                            s = u[1],
                            i = t.action,
                            l = t.timeLimit,
                            c = (function (e, t) {
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
                                onShow: () => o(i || a.Z0),
                                onHide: () => s(Object.assign({ action: i || a.Z0, timeLimit: l || a.sx }, c)),
                            }),
                            [i, l, c, o, s],
                        );
                    };
            },
            12: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => Ue,
                        Bar: () => We,
                        DefaultScroll: () => je,
                        Direction: () => Be,
                        defaultSettings: () => fe,
                        useHorizontalScrollApi: () => ye,
                    });
                var a = {};
                u.r(a), u.d(a, { Area: () => st, Bar: () => at, Default: () => ot, useVerticalScrollApi: () => ze });
                var r = u(7739),
                    o = u(6179),
                    s = u.n(o),
                    i = u(6483),
                    l = u.n(i),
                    c = u(926),
                    m = u.n(c),
                    d = u(5415);
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
                        [d.fd.ExtraSmall]: '',
                        [d.fd.Small]: m().SMALL_WIDTH,
                        [d.fd.Medium]: `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH}`,
                        [d.fd.Large]: `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH} ${m().LARGE_WIDTH}`,
                        [d.fd.ExtraLarge]:
                            `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH} ${m().LARGE_WIDTH} ${m().EXTRA_LARGE_WIDTH}`,
                    },
                    A = {
                        [d.Aq.ExtraSmall]: '',
                        [d.Aq.Small]: m().SMALL_HEIGHT,
                        [d.Aq.Medium]: `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT}`,
                        [d.Aq.Large]: `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT} ${m().LARGE_HEIGHT}`,
                        [d.Aq.ExtraLarge]:
                            `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT} ${m().LARGE_HEIGHT} ${m().EXTRA_LARGE_HEIGHT}`,
                    },
                    p = {
                        [d.cJ.ExtraSmall]: '',
                        [d.cJ.Small]: m().SMALL,
                        [d.cJ.Medium]: `${m().SMALL} ${m().MEDIUM}`,
                        [d.cJ.Large]: `${m().SMALL} ${m().MEDIUM} ${m().LARGE}`,
                        [d.cJ.ExtraLarge]: `${m().SMALL} ${m().MEDIUM} ${m().LARGE} ${m().EXTRA_LARGE}`,
                    },
                    F = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, _);
                        const a = (0, d.GS)(),
                            r = a.mediaWidth,
                            o = a.mediaHeight,
                            i = a.mediaSize;
                        return s().createElement('div', E({ className: l()(u, g[r], A[o], p[i]) }, n), t);
                    },
                    C = ['children'];
                const D = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, C);
                    return s().createElement(r.ZN, null, s().createElement(F, u, t));
                };
                var h = u(493),
                    v = u.n(h),
                    b = u(1037),
                    B = u(3138),
                    f = u(5521);
                u(4179);
                const w = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function y(e = f.n.NONE, t = w, u = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== f.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (B.O.view.isEventHandled()) return;
                                B.O.view.setEventHandled(), t(n), u && n.stopPropagation();
                            }
                        }
                    }, [t, e, u]);
                }
                const k = {
                    base: 'FlagIcon_base_25',
                    base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                    base__c_240x118: 'FlagIcon_base__c_240x118_92',
                };
                let S;
                !(function (e) {
                    (e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118');
                })(S || (S = {}));
                const L = (e, t) => {
                        switch (t) {
                            case S.c1080x454:
                                return R.images.gui.maps.icons.crew.flags.$dyn(e);
                            case S.c240x118:
                                return R.images.gui.maps.icons.tankmen.card.nations.$dyn(e);
                        }
                    },
                    T = s().memo(function ({ nation: e, size: t, className: u }) {
                        return s().createElement('div', {
                            className: l()(k.base, k[`base__${t}`], u),
                            style: { backgroundImage: `url('${L(e, t)}')` },
                        });
                    }),
                    x = {
                        base: 'ListHeader_base_ad',
                        title: 'ListHeader_title_a8',
                        base__memberChange: 'ListHeader_base__memberChange_c2',
                        base__tankChange: 'ListHeader_base__tankChange_fb',
                        base__personalData: 'ListHeader_base__personalData_aa',
                    };
                let I;
                !(function (e) {
                    (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(I || (I = {}));
                const M = ({ title: e, theme: t = I.Barracks, className: u, children: n }) =>
                    s().createElement(
                        'div',
                        { className: l()(x.base, x[`base__${t}`], u) },
                        s().createElement('div', { className: x.title }, e),
                        n,
                    );
                var N = u(7727);
                const O = {
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
                    P = [
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
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                class W extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, N.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, N.G)(this.props.soundClick);
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
                            a = e.side,
                            r = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            c = e.onMouseLeave,
                            m = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, P)),
                            E = l()(O.base, O[`base__${r}`], O[`base__${a}`], null == o ? void 0 : o.base),
                            g = l()(O.icon, O[`icon__${r}`], O[`icon__${a}`], null == o ? void 0 : o.icon),
                            A = l()(O.glow, null == o ? void 0 : o.glow),
                            p = l()(O.caption, O[`caption__${r}`], null == o ? void 0 : o.caption),
                            F = l()(O.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            H(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                _,
                            ),
                            'info' !== r && s().createElement('div', { className: O.shine }),
                            s().createElement('div', { className: g }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: p }, t),
                            n && s().createElement('div', { className: F }, n),
                        );
                    }
                }
                W.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const G = ({ onClick: e }) =>
                        s().createElement(W, {
                            onClick: e,
                            caption: R.strings.crew.common.navigation.aboutCrew(),
                            type: 'info',
                        }),
                    j = 'common_close_0e',
                    U = ({ onClick: e, label: t = R.strings.menu.viewHeader.closeBtn.label() }) =>
                        s().createElement(W, {
                            onClick: e,
                            classNames: { base: j },
                            caption: t,
                            type: 'close',
                            side: 'right',
                        }),
                    z = 'TopButtons_base_ef',
                    $ = 'TopButtons_leftButtons_9e',
                    V = 'TopButtons_rightButtons_33',
                    X = s().memo(function ({
                        backButtonLabel: e,
                        closeButtonLabel: t = R.strings.menu.viewHeader.closeBtn.label(),
                        onBackClick: u,
                        onAboutClick: n,
                        onCloseClick: a,
                        className: r,
                        classNames: o,
                    }) {
                        return s().createElement(
                            'div',
                            { className: l()(z, r) },
                            s().createElement(
                                'div',
                                { className: l()($, null == o ? void 0 : o.leftButtons) },
                                e && u && s().createElement(W, { onClick: u, caption: e, type: 'back' }),
                            ),
                            s().createElement(
                                'div',
                                { className: l()(V, null == o ? void 0 : o.rightButtons) },
                                n && s().createElement(G, { onClick: n }),
                                a && s().createElement(U, { onClick: a, label: t }),
                            ),
                        );
                    });
                var Z = u(5499),
                    q = u(5801);
                const K = (0, u(3215).q)()(
                        ({ observableModel: e }) =>
                            Object.assign(
                                { vehicleList: e.array('vehicleList') },
                                e.primitives(['nation', 'backButtonLabel', 'isButtonBarVisible']),
                            ),
                        ({ externalModel: e }) => ({
                            back: e.createCallbackNoArgs('onBack'),
                            hangar: e.createCallbackNoArgs('onHangar'),
                            close: e.createCallbackNoArgs('onClose'),
                            closeWithEsc: e.createCallback(() => ({ isFromEscape: !0 }), 'onClose'),
                            selectVehicle: e.createCallback((e) => ({ vehicleID: e }), 'onVehicleSelected'),
                            resetFilters: e.createCallbackNoArgs('onResetFilters'),
                        }),
                    ),
                    Y = K[0],
                    Q = K[1];
                var J = u(2106),
                    ee = u(3403),
                    te = u(3457),
                    ue = u(6373),
                    ne = u(8018);
                const ae = 'WarningText_base_13',
                    re = 'WarningText_icon_5d',
                    oe = 'WarningText_label_c6',
                    se = s().memo(function ({ label: e }) {
                        return s().createElement(
                            'div',
                            { className: ae },
                            s().createElement('div', { className: re }),
                            s().createElement('div', { className: oe }, e),
                        );
                    }),
                    ie = 'ListEmptyState_base_ae',
                    le = 'ListEmptyState_content_1e',
                    ce = 'ListEmptyState_shadow_ae',
                    me = 'ListEmptyState_buttonWrapper_78',
                    de = 'ListEmptyState_button_f1',
                    _e = s().memo(function ({
                        warningText: e,
                        buttonType: t = te.L$.secondary,
                        tooltipArgs: u = ne.Xd,
                        className: n,
                        onClick: a,
                        children: r,
                    }) {
                        return s().createElement(
                            'div',
                            { className: l()(ie, n) },
                            s().createElement(
                                'div',
                                { className: le },
                                s().createElement('div', { className: ce }),
                                s().createElement(se, { label: e }),
                                r &&
                                    s().createElement(
                                        'div',
                                        { className: me },
                                        s().createElement(
                                            ue.i,
                                            u,
                                            s().createElement(
                                                te.u5,
                                                { size: te.qE.small, type: t, onClick: a, mixClass: de },
                                                r,
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    });
                var Ee = u(1856);
                const ge = (e, t, u) => (u < e ? e : u > t ? t : u),
                    Ae = [];
                function pe(e) {
                    const t = (0, o.useRef)(e);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, o.useCallback)((...e) => (0, t.current)(...e), Ae)
                    );
                }
                function Fe(e, t, u = []) {
                    const n = (0, o.useRef)(0),
                        a = (0, o.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, o.useEffect)(() => a, [a]);
                    const r = (null != u ? u : []).concat([t]);
                    return [
                        (0, o.useCallback)((u) => {
                            (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, r),
                        a,
                    ];
                }
                function Ce(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return De(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return De(e, t);
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
                function De(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const he = () => {
                    const e = (0, o.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        u = (e, u) => {
                            t(e).set(u, u);
                        },
                        n = (e, u) => {
                            t(e).delete(u);
                        },
                        a = (e, ...u) => {
                            for (var n, a = Ce(t(e).values()); !(n = a()).done; ) {
                                (0, n.value)(...u);
                            }
                        };
                    return (0, o.useMemo)(() => ({ on: u, off: n, trigger: a }), []);
                };
                var ve = u(4489),
                    be = u(7030);
                let Be;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Be || (Be = {}));
                const fe = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    we = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: r = !1,
                    }) => {
                        const s = (e, u) => {
                            const n = t(e),
                                a = n[0],
                                r = n[1];
                            return ge(a, r, u);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? fe : l,
                                m = (0, o.useRef)(null),
                                d = (0, o.useRef)(null),
                                _ = he(),
                                E = (0, ve.f)(
                                    () => {
                                        B.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, be.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (u(t, e), _.trigger('change', e), r && E());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                A = g[0],
                                p = g[1],
                                F = (0, o.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const a = A.scrollPosition.get(),
                                            r = (null != (n = A.scrollPosition.goal) ? n : 0) - a;
                                        return s(e, t * u + r + a);
                                    },
                                    [A.scrollPosition],
                                ),
                                C = (0, o.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            p.start({
                                                scrollPosition: s(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: s(n, A.scrollPosition.get()) },
                                            });
                                    },
                                    [p, c.animationConfig, A.scrollPosition],
                                ),
                                D = (0, o.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            u = d.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return a(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            r = F(t, e, n);
                                        C(r);
                                    },
                                    [C, F, c.step],
                                ),
                                h = (0, o.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && D(n(e)),
                                            m.current && _.trigger('mouseWheel', e, A.scrollPosition, t(m.current));
                                    },
                                    [A.scrollPosition, D, _],
                                ),
                                v = ((e, t = []) => {
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
                                        (0, Ee.v)(() => {
                                            const e = m.current;
                                            e &&
                                                (C(s(e, A.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [C, A.scrollPosition.goal],
                                ),
                                b = pe(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = s(e, A.scrollPosition.goal);
                                    t !== A.scrollPosition.goal && C(t, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            );
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? a(d.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: h,
                                    applyScroll: C,
                                    applyStepTo: D,
                                    contentRef: m,
                                    wrapperRef: d,
                                    scrollPosition: p,
                                    animationScroll: A,
                                    recalculateContent: b,
                                    events: { on: _.on, off: _.off },
                                }),
                                [A.scrollPosition, C, D, _.off, _.on, b, h, p, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    ye = we({
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
                        getDirection: (e) => (e.deltaY > 1 ? Be.Next : Be.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    ke = 'HorizontalBar_base_49',
                    Se = 'HorizontalBar_base__nonActive_82',
                    Le = 'HorizontalBar_leftButton_5f',
                    Te = 'HorizontalBar_rightButton_03',
                    xe = 'HorizontalBar_track_0d',
                    Ie = 'HorizontalBar_thumb_fd',
                    Me = 'HorizontalBar_rail_32',
                    Ne = 'disable',
                    Re = { pending: !1, offset: 0 },
                    Oe = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Pe = () => {},
                    He = (e, t) => Math.max(20, e.offsetWidth * t),
                    We = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Oe, onDrag: n = Pe }) => {
                        const a = (0, o.useRef)(null),
                            r = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            m = (0, o.useRef)(null),
                            d = e.stepTimeout || 100,
                            _ = (0, o.useState)(Re),
                            E = _[0],
                            g = _[1],
                            A = (0, o.useCallback)(
                                (e) => {
                                    g(e),
                                        m.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                },
                                [n],
                            ),
                            p = () => {
                                const t = c.current,
                                    u = m.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    l = ge(0, 1, o / (a - n)),
                                    d = (t.offsetWidth - He(t, s)) * l;
                                (u.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (r.current && i.current && c.current && m.current) {
                                            if (0 === e)
                                                return r.current.classList.add(Ne), void i.current.classList.remove(Ne);
                                            if (
                                                ((t = c.current),
                                                (u = m.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return r.current.classList.remove(Ne), void i.current.classList.add(Ne);
                                            var t, u;
                                            r.current.classList.remove(Ne), i.current.classList.remove(Ne);
                                        }
                                    })(d);
                            },
                            F = pe(() => {
                                (() => {
                                    const t = m.current,
                                        u = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && u)) return;
                                    const o = Math.min(1, n / r);
                                    (t.style.width = `${He(u, o)}px`),
                                        (t.style.display = 'flex'),
                                        a.current &&
                                            (1 === o ? a.current.classList.add(Se) : a.current.classList.remove(Se));
                                })(),
                                    p();
                            });
                        (0, o.useEffect)(() => (0, Ee.v)(F)),
                            (0, o.useEffect)(
                                () =>
                                    (0, Ee.v)(() => {
                                        const t = () => {
                                            p();
                                        };
                                        let u = Pe;
                                        const n = () => {
                                            u(), (u = (0, Ee.v)(F));
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
                                const t = (t) => {
                                        var u;
                                        const a = e.contentRef.current;
                                        if (!a) return;
                                        const r = c.current,
                                            o = m.current;
                                        if (!a || !r || !o) return;
                                        const s = t.screenX - E.offset - r.getBoundingClientRect().x,
                                            i = (s / r.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: i });
                                    },
                                    u = () => {
                                        window.removeEventListener('mousemove', t), A(Re);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u);
                                    }
                                );
                            }, [e, E.offset, E.pending, n, A]);
                        const C = Fe((t) => e.applyStepTo(t), d, [e]),
                            D = C[0],
                            h = C[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Ne) || (0, N.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: l()(ke, t.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: l()(Le, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ne) || 0 !== e.button || ((0, N.G)('play'), D(Be.Next));
                                },
                                onMouseUp: h,
                                ref: r,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: l()(xe, t.track),
                                    onMouseDown: (t) => {
                                        const n = m.current;
                                        if (n && 0 === t.button)
                                            if (((0, N.G)('play'), t.target === n))
                                                A({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = m.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? Be.Prev : Be.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: m, className: l()(Ie, t.thumb) }),
                                s().createElement('div', { className: l()(Me, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: l()(Te, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ne) || 0 !== e.button || ((0, N.G)('play'), D(Be.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Ge = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    je = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: r,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: m,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(Ge.base, e.base) });
                            }, [n]),
                            _ = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: l()(Ge.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: l()(Ge.defaultScrollArea, a) },
                                s().createElement(Ue, { className: i, api: _, classNames: r }, e),
                            ),
                            s().createElement(We, { getStepByRailClick: c, api: t, onDrag: m, classNames: d }),
                        );
                    },
                    Ue = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, o.useEffect)(() => (0, Ee.v)(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: l()(Ge.base, t) },
                            s().createElement(
                                'div',
                                {
                                    className: l()(Ge.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: l()(Ge.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (Ue.Bar = We),
                    (Ue.Default = je),
                    (Ue.SeniorityAwards = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, o.useEffect)(() => (0, Ee.v)(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: l()(Ge.base, t) },
                            s().createElement(
                                'div',
                                { className: l()(Ge.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: l()(Ge.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    ));
                const ze = we({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Be.Next : Be.Prev),
                    }),
                    $e = 'VerticalBar_base_f3',
                    Ve = 'VerticalBar_base__nonActive_42',
                    Xe = 'VerticalBar_topButton_d7',
                    Ze = 'VerticalBar_bottomButton_06',
                    qe = 'VerticalBar_track_df',
                    Ke = 'VerticalBar_thumb_32',
                    Ye = 'VerticalBar_rail_43',
                    Qe = 'disable',
                    Je = () => {},
                    et = { pending: !1, offset: 0 },
                    tt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ut = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    nt = (e, t) => Math.max(20, e.offsetHeight * t),
                    at = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = tt, onDrag: n = Je }) => {
                        const a = (0, o.useRef)(null),
                            r = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            m = (0, o.useRef)(null),
                            d = e.stepTimeout || 100,
                            _ = (0, o.useState)(et),
                            E = _[0],
                            g = _[1],
                            A = (0, o.useCallback)(
                                (e) => {
                                    g(e),
                                        m.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                },
                                [n],
                            ),
                            p = pe(() => {
                                const t = m.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && u)) return;
                                const o = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${nt(u, o)}px`),
                                    t.classList.add(Ke),
                                    a.current &&
                                        (1 === o ? a.current.classList.add(Ve) : a.current.classList.remove(Ve)),
                                    o
                                );
                            }),
                            F = pe(() => {
                                const t = c.current,
                                    u = m.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    l = ge(0, 1, o / (a - n)),
                                    d = (t.offsetHeight - nt(t, s)) * l;
                                (u.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (r.current && i.current && c.current && m.current) {
                                            if (0 === e)
                                                return r.current.classList.add(Qe), void i.current.classList.remove(Qe);
                                            if (
                                                ((t = c.current),
                                                (u = m.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return r.current.classList.remove(Qe), void i.current.classList.add(Qe);
                                            var t, u;
                                            r.current.classList.remove(Qe), i.current.classList.remove(Qe);
                                        }
                                    })(d);
                            }),
                            C = pe(() => {
                                ut(e, () => {
                                    p(), F();
                                });
                            });
                        (0, o.useEffect)(() => (0, Ee.v)(C)),
                            (0, o.useEffect)(() => {
                                const t = () => {
                                    ut(e, () => {
                                        F();
                                    });
                                };
                                let u = Je;
                                const n = () => {
                                    u(), (u = (0, Ee.v)(C));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => {
                                if (!E.pending) return;
                                const t = (t) => {
                                        ut(e, (u) => {
                                            const a = c.current,
                                                r = m.current,
                                                o = e.getContainerSize();
                                            if (!a || !r || !o) return;
                                            const s = t.screenY - E.offset - a.getBoundingClientRect().y,
                                                i = (s / a.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: s, contentOffset: i });
                                        });
                                    },
                                    u = () => {
                                        window.removeEventListener('mousemove', t), A(et);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u);
                                    }
                                );
                            }, [e, E.offset, E.pending, n, A]);
                        const D = Fe((t) => e.applyStepTo(t), d, [e]),
                            h = D[0],
                            v = D[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const b = (e) => {
                            e.target.classList.contains(Qe) || (0, N.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: l()($e, t.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: l()(Xe, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Qe) || 0 !== e.button || ((0, N.G)('play'), h(Be.Next));
                                },
                                ref: r,
                                onMouseEnter: b,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: l()(qe, t.track),
                                    onMouseDown: (t) => {
                                        const n = m.current;
                                        if (n && 0 === t.button)
                                            if (((0, N.G)('play'), t.target === n))
                                                A({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    m.current &&
                                                        ut(e, (n) => {
                                                            if (!n) return;
                                                            const a = u(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? Be.Prev : Be.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: b,
                                },
                                s().createElement('div', { ref: m, className: t.thumb }),
                                s().createElement('div', { className: l()(Ye, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: l()(Ze, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Qe) || 0 !== e.button || ((0, N.G)('play'), h(Be.Prev));
                                },
                                onMouseUp: v,
                                ref: i,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    rt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ot = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: r,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: m,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(rt.base, e.base) });
                            }, [n]),
                            _ = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: l()(rt.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: l()(rt.area, a) },
                                s().createElement(st, { className: r, classNames: i, api: _ }, e),
                            ),
                            s().createElement(at, { getStepByRailClick: c, api: t, onDrag: m, classNames: d }),
                        );
                    },
                    st = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, o.useEffect)(() => (0, Ee.v)(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: l()(rt.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: l()(rt.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                st.Default = ot;
                const it = { Vertical: a, Horizontal: n };
                var lt = u(4385);
                const ct = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: u,
                        paddingBottom: n,
                        amount: a,
                        itemsAmountPerRow: r,
                        visibleRowsAmount: o,
                    }) => {
                        const s = Math.ceil(a / r) * t,
                            i = o * t,
                            l = e * t;
                        return { paddingTop: `${l + u}rem`, paddingBottom: `${Math.max(s - l - i, 0) + n}rem` };
                    },
                    mt = (e) => {
                        const t = e.className,
                            u = e.children,
                            n = e.itemsAmountPerRow,
                            a = e.visibleRowsAmount,
                            r = e.startRowIndex,
                            o = e.amount,
                            i = r * n,
                            l = Math.min(a * n, o - i);
                        return s().createElement(
                            'div',
                            { className: t, style: ct(e) },
                            (0, lt.K)(l, (e) => u(i + e)),
                        );
                    },
                    dt = 'VirtualGrid_base_52',
                    _t = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: u,
                        children: n,
                        api: a,
                        classNames: r,
                        preloadedRows: i = 1,
                        paddingTop: c = 0,
                        paddingBottom: m = 0,
                    }) => {
                        const d = a.scrollApi,
                            _ = (0, o.useRef)(0),
                            E = (0, o.useState)(0),
                            g = E[0],
                            A = E[1],
                            p = (0, o.useState)(null),
                            F = p[0],
                            C = p[1],
                            D = (0, o.useState)(null),
                            h = D[0],
                            v = D[1];
                        return (
                            (0, o.useEffect)(() => {
                                const t = (t) => {
                                    if (!F) return;
                                    const n = Math.floor((B.O.view.pxToRem(t.value.scrollPosition) - c) / u),
                                        r = Math.ceil(e / F),
                                        o = Math.max(0, Math.min(n - i, r));
                                    A(o), a.startRowIndexChanged(o);
                                };
                                return d.events.on('change', t), () => d.events.off('change', t);
                            }, [a, d, u, c, F, e, i]),
                            (0, o.useEffect)(() => {
                                const e = () => {
                                        if (d.contentRef.current) {
                                            const e = getComputedStyle(d.contentRef.current),
                                                n = d.contentRef.current.getBoundingClientRect(),
                                                r =
                                                    B.O.view.pxToRem(n.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                o = Math.floor(r / t),
                                                s = Math.ceil(B.O.view.pxToRem(n.height) / u) + 2 * i;
                                            (_.current = o), C(o), v(s), a.layoutCalculated(o, s);
                                        }
                                    },
                                    n = () => {
                                        const t = _.current;
                                        e(), a.scrollToIndex(g * t);
                                    };
                                return (
                                    d.events.on('recalculateContent', e),
                                    d.events.on('resizeHandled', n),
                                    () => {
                                        d.events.off('recalculateContent', e), d.events.off('resizeHandled', n);
                                    }
                                );
                            }, [a, d, u, t, i, g]),
                            (0, o.useEffect)(() => {
                                const e = (e, t = !0) => {
                                    F && d.applyScroll(Math.floor((e + 1) / F) * u + c, { immediate: t });
                                };
                                return a.events.on('scrollToIndex', e), () => a.events.off('scrollToIndex', e);
                            }, [a, u, F, c, d]),
                            s().createElement(
                                it.Vertical.Default,
                                {
                                    api: d,
                                    className: null == r ? void 0 : r.scroll,
                                    areaClassName: null == r ? void 0 : r.areaClassName,
                                    scrollClassName: null == r ? void 0 : r.scrollClassName,
                                    scrollClassNames: {
                                        content: null == r ? void 0 : r.content,
                                        wrapper: null == r ? void 0 : r.wrapper,
                                    },
                                },
                                null !== F &&
                                    null !== h &&
                                    s().createElement(
                                        mt,
                                        {
                                            className: l()(dt, null == r ? void 0 : r.inner),
                                            paddingBottom: m,
                                            paddingTop: c,
                                            amount: e,
                                            itemsAmountPerRow: F,
                                            visibleRowsAmount: h,
                                            startRowIndex: g,
                                            cellHeight: u,
                                        },
                                        n,
                                    ),
                            )
                        );
                    },
                    Et = 'VirtualGridWithFade_scrollAreaFade_94',
                    gt = ['api', 'children', 'classNames'];
                function At() {
                    return (
                        (At =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        At.apply(this, arguments)
                    );
                }
                const pt = (e) => {
                    let t = e.api,
                        u = e.children,
                        n = e.classNames,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, gt);
                    const r = (0, o.useState)(!0),
                        i = r[0],
                        c = r[1],
                        m = t.scrollApi;
                    return (
                        (0, o.useEffect)(() => {
                            const e = () => {
                                const e = m.getBounds()[1];
                                c(Math.abs(e - m.animationScroll.scrollPosition.goal) > 0.1);
                            };
                            return (
                                m.events.on('change', e),
                                m.events.on('recalculateContent', e),
                                () => {
                                    m.events.off('change', e), m.events.off('recalculateContent', e);
                                }
                            );
                        }, [m]),
                        s().createElement(
                            _t,
                            At(
                                {
                                    api: t,
                                    classNames: Object.assign({}, n, {
                                        scrollClassName: l()(null == n ? void 0 : n.scrollClassName, i && Et),
                                    }),
                                },
                                a,
                            ),
                            u,
                        )
                    );
                };
                var Ft = u(9480),
                    Ct = u(7078),
                    Dt = u(9690),
                    ht = u(3649);
                const vt = {
                    base: 'TankName_base_f1',
                    base__sizeMedium: 'TankName_base__sizeMedium_3a',
                    base__sizBig: 'TankName_base__sizBig_a9',
                    base__typeWhite: 'TankName_base__typeWhite_32',
                    base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                    base__typeColored: 'TankName_base__typeColored_bc',
                    level: 'TankName_level_bb',
                    type: 'TankName_type_3c',
                    type__elite: 'TankName_type__elite_cc',
                    base__sizeBig: 'TankName_base__sizeBig_2b',
                    name: 'TankName_name_56',
                    base__tagPremiumIGR: 'TankName_base__tagPremiumIGR_26',
                    premiumIGR: 'TankName_premiumIGR_25',
                };
                let bt, Bt;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(bt || (bt = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(Bt || (Bt = {}));
                const ft = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: u,
                        vehicleType: n,
                        vehicleLvl: a,
                        tags: r,
                        isPremiumIGR: o,
                        size: i = bt.extraSmall,
                        type: c = Bt.colored,
                        className: m,
                        classNames: d,
                        isShortName: _ = !1,
                    }) => {
                        const E = `${(0, ht.BN)(n)}${e ? '_elite' : ''}`,
                            g = R.images.gui.maps.icons.vehicleTypes.big.$dyn(E);
                        return s().createElement(
                            'div',
                            {
                                className: l()(
                                    vt.base,
                                    vt[`base__size${(0, ht.e)(i)}`],
                                    vt[`base__type${(0, ht.e)(c)}`],
                                    r && Ft.UI(r, (e) => vt[`base__tag${(0, ht.e)(e)}`]),
                                    m,
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: l()(vt.level, null == d ? void 0 : d.level) },
                                (0, Dt.HG)(a),
                            ),
                            s().createElement('div', {
                                className: l()(vt.type, e && vt.type__elite, null == d ? void 0 : d.typeIcon),
                                style: { backgroundImage: `url(${g})` },
                            }),
                            o && s().createElement('div', { className: vt.premiumIGR }),
                            s().createElement(
                                'div',
                                { className: l()(vt.name, null == d ? void 0 : d.name) },
                                _ ? u : t,
                            ),
                        );
                    },
                    wt = 'ListCardAlert_base_52',
                    yt = 'ListCardAlert_glow_1c',
                    kt = 'ListCardAlert_icon_d2',
                    St = ({ className: e, tooltipArgs: t }) =>
                        s().createElement(
                            'div',
                            { className: l()(wt, e) },
                            s().createElement('div', { className: yt }),
                            s().createElement(ue.i, t, s().createElement('div', { className: kt })),
                        ),
                    Lt = 'VehicleIcon_base_80',
                    Tt = 'VehicleIcon_icon_cc',
                    xt = 'VehicleIcon_noImageLabel_dc',
                    It = s().memo(function ({ techName: e, className: t }) {
                        const u = R.images.gui.maps.shop.vehicles.c_180x135.$dyn(e);
                        return s().createElement(
                            'div',
                            { className: l()(Lt, t) },
                            s().createElement('div', {
                                className: Tt,
                                style: {
                                    backgroundImage: `url(${null != u ? u : R.images.gui.maps.shop.vehicles.c_180x135.empty_tank()})`,
                                },
                            }),
                            !u &&
                                s().createElement('div', { className: xt }, R.strings.crew.common.imageNotAvailable()),
                        );
                    }),
                    Mt = 'Content_base_23',
                    Nt = 'Content_base__default_f7',
                    Rt = 'Content_base__selected_0c',
                    Ot = 'Content_base__unclickable_b6',
                    Pt = 'Content_vehicleIcon_bd',
                    Ht = 'Content_tooltipLayer_e4',
                    Wt = 'Content_selectedBackground_53',
                    Gt = 'Content_isInInventory_7d',
                    jt = 'Content_premiumIcon_43',
                    Ut = 'Content_vehicle_dd',
                    zt = 'Content_vehicleType_a4',
                    $t = 'Content_premiumVehicleName_d3',
                    Vt = ({
                        isSelected: e,
                        isPremium: t,
                        isElite: u,
                        techName: n,
                        isInInventory: a,
                        isTrainingAvailable: r,
                        name: o,
                        type: i,
                        nation: c,
                        tier: m,
                        tags: d,
                        vehicleCD: _,
                        onClick: E,
                        className: g,
                    }) =>
                        s().createElement(
                            'div',
                            {
                                className: l()(Mt, e ? Rt : Nt, !r && Ot, g),
                                onMouseEnter: () => {
                                    r && N.$.playHighlight();
                                },
                                onClick: () => {
                                    r && E && (E(), N.$.playClick());
                                },
                            },
                            e && s().createElement('div', { className: Wt }),
                            s().createElement(It, { techName: n, className: Pt }),
                            a && s().createElement('div', { className: Gt }),
                            s().createElement(ft, {
                                isElite: u,
                                vehicleName: o,
                                vehicleShortName: o,
                                vehicleType: i,
                                vehicleNation: c,
                                vehicleLvl: m,
                                tags: d,
                                className: Ut,
                                classNames: { typeIcon: zt, name: t ? $t : void 0 },
                                type: Bt.whiteSpanish,
                            }),
                            s().createElement(
                                Ct.t,
                                { args: { tooltipId: 'inventoryVehicle', vehicleCD: _ } },
                                s().createElement('div', { className: Ht }),
                            ),
                            t &&
                                s().createElement(St, {
                                    tooltipArgs: {
                                        header: R.strings.crew.tankChange.tooltip.premium.header(),
                                        body: R.strings.crew.tankChange.tooltip.premium.body(),
                                    },
                                    className: jt,
                                }),
                        );
                function Xt() {
                    return (
                        (Xt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Xt.apply(this, arguments)
                    );
                }
                const Zt = (0, ee.Pi)(({ index: e, className: t }) => {
                        const u = Q(),
                            n = u.model,
                            a = u.controls,
                            r = Ft.U2(n.vehicleList.get(), e);
                        if (!r) throw Error(`Index ${e} is out of vehicle list range`);
                        return s().createElement(
                            Vt,
                            Xt({}, r, { className: t, onClick: () => a.selectVehicle(r.vehicleCD) }),
                        );
                    }),
                    qt = 'VehicleList_base_20',
                    Kt = 'VehicleList_grid_f5',
                    Yt = 'VehicleList_gridWrapper_a7',
                    Qt = 'VehicleList_emptyState_33',
                    Jt = 'VehicleList_item_c8',
                    eu = (0, ee.Pi)(() => {
                        const e = (() => {
                                const e = it.Vertical.useVerticalScrollApi(),
                                    t = he(),
                                    u = (0, o.useCallback)((e, u = !0) => t.trigger('scrollToIndex', e, u), [t]),
                                    n = (0, o.useCallback)((e, u) => t.trigger('layoutCalculated', e, u), [t]),
                                    a = (0, o.useCallback)((e) => t.trigger('startRowIndexChanged', e), [t]);
                                return (0, o.useMemo)(
                                    () => ({
                                        scrollToIndex: u,
                                        layoutCalculated: n,
                                        startRowIndexChanged: a,
                                        scrollApi: e,
                                        events: { off: t.off, on: t.on },
                                    }),
                                    [u, n, a, e, t.off, t.on],
                                );
                            })(),
                            t = Q(),
                            u = t.model,
                            n = t.controls,
                            a = u.vehicleList.get().length;
                        return s().createElement(
                            'div',
                            { id: 'vehicles_list', className: qt },
                            s().createElement(
                                'div',
                                { className: Yt },
                                a > 0
                                    ? s().createElement(
                                          pt,
                                          {
                                              amount: a,
                                              cellWidth: 318,
                                              cellHeight: 208,
                                              paddingTop: 11,
                                              paddingBottom: 11,
                                              classNames: { content: Kt },
                                              api: e,
                                          },
                                          (e) => s().createElement(Zt, { key: e, index: e, className: Jt }),
                                      )
                                    : s().createElement(
                                          _e,
                                          {
                                              warningText: R.strings.crew.tankmanList.emptyState.noFilteredItems(),
                                              buttonType: J.L.primary,
                                              onClick: n.resetFilters,
                                              className: Qt,
                                          },
                                          R.strings.crew.tankmanList.emptyState.button.resetFilers(),
                                      ),
                            ),
                        );
                    }),
                    tu = 'TankChangeApp_base_2b',
                    uu = 'TankChangeApp_widget_22',
                    nu = 'TankChangeApp_flagIcon_6c',
                    au = 'TankChangeApp_topButtons_98',
                    ru = 'TankChangeApp_content_4f',
                    ou = s().memo(function () {
                        const e = Q(),
                            t = e.model,
                            u = e.controls,
                            n = (0, d.GS)().mediaHeight;
                        var a;
                        return (
                            (a = u.closeWithEsc),
                            y(f.n.ESCAPE, a),
                            s().createElement(
                                'div',
                                { className: tu },
                                s().createElement(T, { className: nu, nation: t.nation.get(), size: S.c1080x454 }),
                                s().createElement(
                                    'div',
                                    { className: ru },
                                    s().createElement(M, {
                                        title: R.strings.crew.tankChange.title(),
                                        theme: I.TankChange,
                                    }),
                                    s().createElement(q.p, {
                                        popoverDirection: n < d.Aq.Medium ? b.IC.Left : b.IC.Bottom,
                                    }),
                                    s().createElement(eu, null),
                                ),
                                s().createElement('div', { className: uu }, s().createElement(Z.O, null)),
                                s().createElement(X, {
                                    onBackClick: u.back,
                                    backButtonLabel: t.backButtonLabel.get(),
                                    onCloseClick: u.hangar,
                                    closeButtonLabel: R.strings.crew.common.navigation.toGarage(),
                                    className: t.isButtonBarVisible.get() && au,
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    v().render(
                        s().createElement(Y, null, s().createElement(D, null, s().createElement(ou, null))),
                        document.getElementById('root'),
                    );
                });
            },
            9367: (e, t, u) => {
                'use strict';
                u.d(t, { Q: () => m });
                var n = u(6483),
                    a = u.n(n),
                    r = u(9987),
                    o = u(6179),
                    s = u.n(o);
                const i = 'AlertCounter_base_f3',
                    l = 'AlertCounter_counter_da',
                    c = 'AlertCounter_label_18',
                    m = ({ value: e, className: t }) =>
                        s().createElement(
                            'div',
                            { className: a()(i, t) },
                            s().createElement(r.A, { value: e, className: l }),
                            !e && s().createElement('div', { className: c }, R.strings.crew.common.exclamationMark()),
                        );
            },
            9197: (e, t, u) => {
                'use strict';
                u.d(t, { C: () => p });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    o = u.n(r);
                const s = 'NumberRange_base_5e',
                    i = 'NumberRange_base__animation_79',
                    l = 'NumberRange_from_70',
                    c = 'NumberRange_from__red_f8',
                    m = 'NumberRange_separator_c0',
                    d = o().memo(function ({ from: e, to: t, className: u }) {
                        return o().createElement(
                            'div',
                            { className: a()(s, 0 === e && i, u) },
                            o().createElement('div', { className: a()(l, 0 === e && t > 0 && c) }, e),
                            e !== t &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: m }, '/'),
                                    o().createElement('div', null, t),
                                ),
                        );
                    }),
                    _ = 'NumberRangeWithLabel_base_2b',
                    E = 'NumberRangeWithLabel_title_94',
                    g = 'NumberRangeWithLabel_counter_00',
                    A = 'NumberRangeWithLabel_counterGlow_1f',
                    p = ({ title: e, isGlowVisible: t = !1, className: u, classNames: n, from: s, to: i }) => {
                        const l = (0, r.useMemo)(
                            () => ({
                                left: s !== i ? 7 * String(s).length + 4 : Math.round((7 * String(s).length) / 2),
                            }),
                            [s, i],
                        );
                        return o().createElement(
                            'div',
                            { className: a()(_, u) },
                            o().createElement('div', { className: E }, e),
                            o().createElement(
                                'div',
                                { className: g },
                                o().createElement(d, { from: s, to: i }),
                                t &&
                                    o().createElement('div', {
                                        style: l,
                                        className: a()(A, null == n ? void 0 : n.counterGlow),
                                    }),
                            ),
                        );
                    };
            },
            7077: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => c, U: () => l });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3649),
                    o = u(6179),
                    s = u.n(o),
                    i = u(3938);
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
                                const a = u.$dyn((0, r.BN)(e));
                                if (!a) throw Error;
                                return { backgroundImage: `url(${a})` };
                            } catch (t) {
                                console.error('Cant find resource in TankmanIcon: ', e);
                            }
                        }, [e, t, n]),
                        m = t === l.c204x256;
                    return s().createElement(
                        'div',
                        { style: c, className: a()(i.Z.base, i.Z[`base__${t}`], u) },
                        m && s().createElement('div', { className: i.Z.innerShadow }),
                    );
                };
            },
            8485: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => l, d: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(8271),
                    o = u(6179),
                    s = u.n(o),
                    i = u(9426);
                let l;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(l || (l = {}));
                const c = s().memo(function ({ icon: e, type: t, size: u }) {
                    const n = (0, o.useMemo)(() => {
                            let e;
                            return (
                                (e =
                                    t === r.W.Possible || t === r.W.New
                                        ? R.images.gui.maps.icons.tankmen.skills.medium.new_skill()
                                        : R.images.gui.maps.icons.crew.$dyn(`${t}SkillFrame_${u}`)),
                                { backgroundImage: `url(${e})` }
                            );
                        }, [t, u]),
                        c = (0, o.useMemo)(() => {
                            if (!e) return null;
                            return {
                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.skills.$dyn(u === l.Big ? 'c_22x22' : 'small').$dyn(e)})`,
                            };
                        }, [e, u]);
                    return s().createElement(
                        'div',
                        { className: a()(i.Z.base, i.Z[`base__${u}`]) },
                        s().createElement('div', { className: i.Z.bg, style: n }),
                        c && s().createElement('div', { className: a()(i.Z.icon, i.Z[`icon__${t}`]), style: c }),
                    );
                });
            },
            9631: (e, t, u) => {
                'use strict';
                u.d(t, { C: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3457),
                    o = u(2106),
                    s = u(9987),
                    i = u(6179),
                    l = u.n(i),
                    c = u(4723);
                const m = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const _ = l().memo(function (e) {
                    let t = e.isActive,
                        u = e.counter,
                        n = e.className,
                        i = e.children,
                        _ = e.type,
                        E = void 0 === _ ? o.L.secondary : _,
                        g = e.size,
                        A = void 0 === g ? o.q.small : g,
                        p = e.hasIndicator,
                        F = void 0 === p || p,
                        C = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, m);
                    return l().createElement(
                        'div',
                        { className: a()(c.Z.base, n, t && c.Z.base__active) },
                        l().createElement(r.u5, d({ type: E, size: A, mixClass: c.Z.button }, C), i),
                        l().createElement('div', { className: c.Z.overlay }),
                        F && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(u) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(s.A, { value: u, size: 'small' }),
                            ),
                    );
                });
            },
            7160: (e, t, u) => {
                'use strict';
                u.d(t, { BH: () => r, Fs: () => o, ei: () => n, qb: () => a });
                const n = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    a = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    r = (e) => {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    o = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, t, u) => {
                'use strict';
                u.d(t, { Gc: () => o, Xd: () => a, gO: () => r, wP: () => n });
                u(3649);
                R.strings.common.percentValue();
                let n;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(n || (n = {}));
                const a = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let r;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(r || (r = {}));
                const o = (e, t = !1, u = null) => {
                    const n = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (u ? n.$dyn(`${u}Case`) : n).$dyn(e);
                };
            },
            5499: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => Cn });
                var n = u(6179),
                    a = u.n(n),
                    r = u(3403),
                    o = u(3215),
                    s = u(4598),
                    i = u(9480),
                    l = u(3946),
                    c = u(4828);
                const m = [
                        R.views.lobby.crew.TankmanContainerView('resId'),
                        R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                        R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                        R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    ],
                    d = (0, o.q)()(
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
                                        'isAcceleratedTraining',
                                    ]),
                                    {
                                        slots: e.array('slots', []),
                                        buttonsBar: e.object('buttonsBar'),
                                        crewOperations: e.object('buttonsBar.crewOperations'),
                                        crewBooks: e.object('buttonsBar.crewBooks'),
                                        wotPlus: e.object('buttonsBar.wotPlus'),
                                    },
                                ),
                                u = (0, l.Om)(
                                    () =>
                                        i.UI(t.slots.get(), (e) =>
                                            Object.assign({}, e, {
                                                roles: i.UI(e.roles, s.yR),
                                                tankman: Object.assign({}, e.tankman, {
                                                    roles: i.UI(e.tankman.roles, s.yR),
                                                    skills: i.UI(e.tankman.skills, (e) => Object.assign({}, e)),
                                                }),
                                            }),
                                        ),
                                    { equals: s.jv },
                                ),
                                n = (0, l.Om)(() => Boolean(i.sE(u(), (e) => -1 === e.tankman.tankmanID))),
                                a = (0, l.Om)(() => 1 === t.slots.get().length),
                                r = (0, l.Om)((e) => t.selectedSlotIdx.get() === e),
                                o = (0, l.Om)(() => -1 !== t.selectedSlotIdx.get()),
                                d = (0, l.Om)((e) => {
                                    var t;
                                    return null == (t = i.U2(u(), e)) ? void 0 : t.tankman;
                                }),
                                _ = (0, l.Om)((e) => {
                                    var t;
                                    const n = null == (t = i.U2(u(), e)) ? void 0 : t.tankman;
                                    return n ? n.skills.length + n.newSkillsAmount + n.possibleSkillsAmount : 0;
                                }),
                                E = (0, l.Om)(() => {
                                    return (
                                        (e = t.currentLayoutID.get()),
                                        (u = t.previousLayoutID.get()),
                                        {
                                            isCurrentLayoutHangar: e === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isCurrentLayoutTankmanContainer: m.includes(e),
                                            isCurrentLayoutQuickTraining:
                                                e === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isCurrentLayoutMemberChange:
                                                e === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutHangar: u === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isPreviousLayoutTankmanContainer: m.includes(u),
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
                                p = (0, l.Om)(() => {
                                    return (e = t.currentLayoutID.get()), c.AB[e] || c.sC.Hangar;
                                    var e;
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: u,
                                    isSlotSelected: r,
                                    isAnySlotSelected: o,
                                    getSlotTankman: d,
                                    getAllSkillsAmount: _,
                                    isAnyEmptySlots: n,
                                    isTankmanMode: a,
                                    isChangeCrewButtonVisible: g,
                                    isButtonBarVisible: A,
                                    getLayoutInfo: E,
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
                            onWotPlusClick: e.createCallbackNoArgs('buttonsBar.onWotPlusClick'),
                            onDogClick: e.createCallbackNoArgs('onDogClick'),
                            onDogMoreInfoClick: e.createCallbackNoArgs('onDogMoreInfoClick'),
                        }),
                    ),
                    _ = d[0],
                    E = d[1];
                var g = u(6483),
                    A = u.n(g),
                    p = u(2056);
                let F;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(F || (F = {}));
                const C = 'ButtonsBar_base_9c',
                    D = 'ButtonsBar_button_d1',
                    h = 'ButtonsBar_button__crewOperaions_70',
                    v = 'ButtonsBar_button__crewBooks_b4',
                    b = 'ButtonsBar_button__toggle_64',
                    B = 'ButtonsBar_acceleratedTraining_94',
                    f = 'ButtonsBar_acceleratedTraining__icon_9b',
                    w = 'ButtonsBar_acceleratedTraining__label_ad';
                var y = u(3457),
                    k = u(9987),
                    S = u(6373),
                    L = u(3649);
                const T = 'CrewBookButton_base_da',
                    x = 'CrewBookButton_button_ee',
                    I = 'CrewBookButton_icon_11',
                    M = 'CrewBookButton_discount_6b',
                    N = 'CrewBookButton_counter_5d',
                    O = (0, r.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const u = E(),
                            n = u.model,
                            r = u.controls,
                            o = n.crewBooks.get(),
                            s = r.onCrewBooksClick;
                        return a().createElement(
                            S.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, L.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: o.totalAmount,
                                }),
                            },
                            a().createElement(
                                'div',
                                { id: 'crew_book_button', className: A()(T, e) },
                                a().createElement(
                                    y.u5,
                                    { type: y.L$.primary, mixClass: x, disabled: o.isDisabled || t, onClick: s },
                                    a().createElement('div', { className: I }),
                                ),
                                o.newAmount > 0 &&
                                    a().createElement(
                                        'div',
                                        { className: N },
                                        a().createElement(k.A, { value: o.newAmount }),
                                    ),
                                o.hasDiscount && a().createElement('div', { className: M }),
                            ),
                        );
                    });
                var P = u(3616);
                const H = ['children'];
                function W() {
                    return (
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                }
                const G = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, H);
                    return a().createElement(
                        P.Z,
                        W(
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
                var j = u(4489);
                let U;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(U || (U = {}));
                var z = u(1943);
                const $ = 'CrewOperationsButton_base_e3',
                    V = 'CrewOperationsButton_button_8e',
                    X = 'CrewOperationsButton_icon_0c',
                    Z = 'CrewOperationsButton_autoReturnIcon_f0',
                    q = (0, r.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const u = E().model,
                            n = ((e) => {
                                const t = (0, z.Jp)(c.D9);
                                return (u) => t({ action: c.eX.Click, parentScreen: e, item: u });
                            })(u.computes.getUiLoggingParentScreen()),
                            r = u.crewOperations.get();
                        return a().createElement(
                            'div',
                            { id: 'crew_operations_button', className: A()($, e) },
                            a().createElement(
                                G,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !t,
                                    onClick: () => n(c.x3.CrewOperationsButton),
                                },
                                a().createElement(
                                    S.i,
                                    {
                                        header: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.header(),
                                        body: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.body(),
                                    },
                                    a().createElement(
                                        'div',
                                        null,
                                        a().createElement(
                                            y.u5,
                                            { type: y.L$.primary, mixClass: V, disabled: t },
                                            a().createElement('div', { className: X }),
                                        ),
                                        r.isAutoReturnOn && a().createElement('div', { className: Z }),
                                    ),
                                ),
                            ),
                        );
                    });
                var K = u(9631);
                const Y = 'CrewToggleButton_base_03',
                    Q = 'CrewToggleButton_button_89',
                    J = 'CrewToggleButton_iconContainer_f9',
                    ee = 'CrewToggleButton_icon_a7';
                let te;
                !(function (e) {
                    e.WotPlus = 'wotPlus';
                })(te || (te = {}));
                const ue = (0, n.memo)(({ type: e, state: t, isDisabled: u, onClick: r, classMix: o }) => {
                        const s = (0, n.useMemo)(() => {
                            const u = t === F.Disabled ? F.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${u})`,
                            };
                        }, [e, t]);
                        return a().createElement(
                            'div',
                            { className: A()(Y, o) },
                            a().createElement(
                                K.C,
                                {
                                    type: y.L$.primary,
                                    isActive: t === F.On,
                                    disabled: u || t === F.Disabled,
                                    className: Q,
                                    onClick: r,
                                },
                                a().createElement(
                                    'div',
                                    { className: J },
                                    a().createElement('div', { className: ee, style: s }),
                                ),
                            ),
                        );
                    }),
                    ne = R.strings.crew.acceleratedTraining,
                    ae = (0, r.Pi)(({ isWidgetDisabled: e }) => {
                        const t = E(),
                            u = t.model,
                            n = t.controls,
                            r = u.isAcceleratedTraining.get(),
                            o = u.wotPlus.get(),
                            s = n.onWotPlusClick;
                        return a().createElement(
                            'div',
                            { className: C },
                            a().createElement(q, { classMix: A()(D, h), isWidgetDisabled: e }),
                            a().createElement(O, { classMix: A()(D, v), isWidgetDisabled: e }),
                            o.state !== F.Hidden &&
                                a().createElement(
                                    p.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    a().createElement(
                                        'div',
                                        null,
                                        a().createElement(ue, {
                                            type: te.WotPlus,
                                            state: o.state,
                                            isDisabled: e || o.isDisabled,
                                            onClick: s,
                                            classMix: A()(D, b),
                                        }),
                                    ),
                                ),
                            r &&
                                a().createElement(
                                    S.i,
                                    { header: ne.tooltip.header(), body: ne.tooltip.body() },
                                    a().createElement(
                                        'div',
                                        { className: B },
                                        a().createElement('div', { className: f }),
                                        a().createElement('div', { className: w }, ne.label()),
                                    ),
                                ),
                        );
                    }),
                    re = 'CrewWidgetApp_base_cc',
                    oe = 'CrewWidgetApp_buttonsBar_e5',
                    se = 'CrewWidgetApp_slotsList_ee';
                var ie = u(7727),
                    le = u(7030),
                    ce = u(8018),
                    me = u(7160);
                const de = 'BaseSlot_base_97',
                    _e = 'BaseSlot_base__hovered_61',
                    Ee = 'BaseSlot_base__inactive_7e',
                    ge = 'BaseSlot_hoverGlow_de',
                    Ae = 'BaseSlot_hoverGlow__visible_f4',
                    pe = 'BaseSlot_selectedGlow_25',
                    Fe = 'BaseSlot_selectedGlow__visible_2f',
                    Ce = 'BaseSlot_hover_e9',
                    De = 'BaseSlot_hover__visible_1f',
                    he = 'BaseSlot_disabled_67',
                    ve = ({
                        onClick: e,
                        children: t,
                        isSelected: u = !1,
                        isDisabled: r,
                        isEnabledForMouse: o,
                        isEmpty: s = !1,
                        layoutInfo: i,
                    }) => {
                        const l = (0, n.useState)(!1),
                            c = l[0],
                            m = l[1],
                            d = c && (!u || (!s && i.isCurrentLayoutMemberChange)),
                            _ = d && !s && !i.isCurrentLayoutHangar;
                        return a().createElement(
                            'div',
                            {
                                className: A()(de, (c || u) && !i.isCurrentLayoutHangar && _e, (u || !o) && Ee),
                                onClick: e,
                                onMouseEnter: () => {
                                    o && !u && (ie.$.playHighlight(), m(!0));
                                },
                                onMouseLeave: () => {
                                    m(!1);
                                },
                            },
                            !i.isCurrentLayoutMemberChange && a().createElement('div', { className: A()(pe, u && Fe) }),
                            a().createElement('div', { className: A()(ge, _ && Ae) }),
                            a().createElement('div', { className: A()(Ce, d && De) }),
                            r && a().createElement('div', { className: he }),
                            t,
                        );
                    },
                    be = ({
                        startState: e,
                        endState: t,
                        layoutInfo: u,
                        isPaused: r,
                        children: o,
                        className: s,
                        isTankmanMode: i,
                    }) => {
                        const l = (0, le.useSpring)(
                                () => ({ from: e, to: t, config: { duration: 300, easing: me.qb }, pause: r }),
                                [r],
                            )[0],
                            c = (0, n.useMemo)(
                                () =>
                                    u.isCurrentLayoutHangar || u.isCurrentLayoutQuickTraining || i
                                        ? e
                                        : (!u.isPreviousLayoutHangar && !u.isPreviousLayoutBarrack) || r
                                          ? t
                                          : l,
                                [u, r, l, e, t, i],
                            );
                        return a().createElement(le.animated.div, { className: s, style: c }, o);
                    },
                    Be = 'DogSlot_base_8f',
                    fe = 'DogSlot_icon_ba',
                    we = 'DogSlot_container_63',
                    ye = 'DogSlot_roleAndName_c9',
                    ke = 'DogSlot_role_5c',
                    Se = 'DogSlot_name_9c',
                    Le = 'DogSlot_btnDetails_b7',
                    Te = { transform: 'translateX(0rem)' },
                    xe = (0, r.Pi)(({ isDisabled: e, layoutInfo: t }) => {
                        const u = E(),
                            r = u.model,
                            o = u.controls,
                            s = r.nation.get(),
                            i = o.onDogMoreInfoClick,
                            l = (0, n.useCallback)(() => {
                                !e && (0, ie.G)(ce.gO.RUDY);
                            }, [e]),
                            c = (0, n.useCallback)(
                                (t) => {
                                    t.stopPropagation(), !e && i();
                                },
                                [i, e],
                            ),
                            m = (0, le.useSpring)(
                                () => ({
                                    from: Te,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: me.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
                            )[0],
                            d = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(s);
                        return a().createElement(
                            S.i,
                            { header: d.header(), body: d.body() },
                            a().createElement(
                                'div',
                                null,
                                a().createElement(
                                    ve,
                                    { onClick: l, isDisabled: e, isEnabledForMouse: !1, layoutInfo: t },
                                    a().createElement(
                                        be,
                                        {
                                            startState: Te,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            isPaused: !1,
                                            className: Be,
                                            isTankmanMode: !1,
                                        },
                                        a().createElement(le.animated.div, { className: fe, style: m }),
                                        a().createElement(
                                            'div',
                                            { className: we },
                                            a().createElement(
                                                'div',
                                                { className: ye },
                                                a().createElement('div', { className: ke }),
                                                a().createElement(
                                                    'div',
                                                    { className: Se },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(s).name(),
                                                ),
                                            ),
                                            a().createElement(
                                                'div',
                                                { className: Le },
                                                a().createElement(
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
                var Ie = u(4179);
                const Me = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: a = 0,
                        args: r,
                        isEnabled: o = !0,
                        onMouseDown: s,
                    }) => {
                        const i = (0, n.useCallback)(() => {
                                (0, Ie.c9)(Ie.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    ie.$.playYes();
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
                                    s && s(e), ((e) => e.button === U.RIGHT)(e) && i();
                                },
                                [s, i],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === o && l();
                            }, [o, l]),
                            o ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Ne = ['children'];
                function Re() {
                    return (
                        (Re =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Re.apply(this, arguments)
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
                            })(e, Ne);
                        return a().createElement(
                            Me,
                            Re({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Pe = 'ChangeCrewButton_base_0f',
                    He = 'ChangeCrewButton_base__inactive_77',
                    We = 'ChangeCrewButton_normalState_07',
                    Ge = 'ChangeCrewButton_normalState__hide_db',
                    je = 'ChangeCrewButton_hoverState_68',
                    Ue = 'ChangeCrewButton_hoverState__show_89',
                    ze = (0, r.Pi)(({ isSelected: e, isLocked: t, mainRole: u, isFemale: r }) => {
                        const o = E().model,
                            s = (0, n.useState)(!1),
                            i = s[0],
                            l = s[1],
                            m = (0, z.Sr)(c.D9, {
                                item: c.x3.ChangeButtonTooltip,
                                action: c.eX.Viewed,
                                parentScreen: o.computes.getUiLoggingParentScreen(),
                            }),
                            d = (0, n.useMemo)(
                                () =>
                                    t
                                        ? [
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.header(),
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.body(),
                                          ]
                                        : [
                                              '',
                                              (0, L.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, ce.Gc)(u, r, ce.wP.Objective),
                                              }),
                                          ],
                                [t, r, u],
                            ),
                            _ = d[0],
                            g = d[1];
                        return a().createElement(
                            S.i,
                            {
                                header: _,
                                body: g,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            a().createElement(
                                'div',
                                {
                                    className: A()(Pe, (t || e) && He),
                                    onMouseEnter: () => {
                                        m.onShow(), t || e || (ie.$.playHighlight(), l(!0));
                                    },
                                    onMouseLeave: () => {
                                        m.onHide(), l(!1);
                                    },
                                },
                                a().createElement('div', { className: A()(We, i && Ge) }),
                                a().createElement('div', { className: A()(je, (e || i) && Ue) }),
                            ),
                        );
                    }),
                    $e = 'CrewSlot_base_ac',
                    Ve = 'CrewSlot_changeCrew_02',
                    Xe = 'CrewSlot_content_5b',
                    Ze = 'CrewSlot_content__withChangeCrewButton_4e',
                    qe = 'CrewSlot_warningHighlight_ff',
                    Ke = 'CrewSlot_selectHighlight_50',
                    Ye = 'CrewSlot_selectHighlightInTankmanMode_37';
                var Qe = u(7077);
                const Je = 'AcceleratedTrainingIcon_base_4f',
                    et = 'AcceleratedTrainingIcon_icon_45',
                    tt = (0, n.memo)(({ classMix: e }) =>
                        a().createElement(
                            S.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            },
                            a().createElement(
                                'div',
                                { className: A()(Je, e) },
                                a().createElement('div', { className: et }),
                            ),
                        ),
                    ),
                    ut = 'SpecializationAndName_base_ef',
                    nt = 'SpecializationAndName_roleWrapper_87',
                    at = 'SpecializationAndName_role_55',
                    rt = 'SpecializationAndName_role__withGap_35',
                    ot = 'SpecializationAndName_percent_e6',
                    st = 'SpecializationAndName_percent__untrained_1b',
                    it = 'SpecializationAndName_acceleratedTrainingIcon_35',
                    lt = 'SpecializationAndName_name_aa';
                function ct() {
                    return (
                        (ct =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ct.apply(this, arguments)
                    );
                }
                const mt = (0, r.Pi)(
                        ({
                            roles: e,
                            specializationLevel: t = 0,
                            tankmanID: u,
                            isUntrained: n,
                            name: r,
                            isAcceleratedTrainingAvailable: o,
                        }) => {
                            const s = E().model,
                                l = (0, z.Sr)(c.D9, {
                                    item: c.x3.MstlTooltip,
                                    action: c.eX.Viewed,
                                    parentScreen: s.computes.getUiLoggingParentScreen(),
                                });
                            return a().createElement(
                                'div',
                                { className: ut },
                                a().createElement(
                                    p.u,
                                    ct(
                                        {
                                            targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                            contentId: R.views.lobby.crew.tooltips.TrainingLevelTooltip('resId'),
                                            args: { tankmanID: u },
                                            isEnabled: Boolean(u),
                                            ignoreShowDelay: !0,
                                            ignoreMouseClick: !0,
                                        },
                                        l,
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: nt },
                                        i.UI(e, (e, t) =>
                                            a().createElement('div', {
                                                key: `role__${e}`,
                                                className: A()(at, t > 0 && rt),
                                                style: {
                                                    backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                                },
                                            }),
                                        ),
                                        t > 0 &&
                                            a().createElement(
                                                'div',
                                                { className: A()(ot, n && st) },
                                                (0, L.uF)(R.strings.common.percentValue(), { value: t }),
                                            ),
                                    ),
                                ),
                                o && a().createElement(tt, { classMix: it }),
                                a().createElement('div', { className: lt }, r),
                            );
                        },
                    ),
                    dt = 'EmptySlotContent_base_77',
                    _t = 'EmptySlotContent_tankmanIcon_07',
                    Et = 'EmptySlotContent_icon_a8',
                    gt = 'EmptySlotContent_specialization_1f',
                    At = 'EmptySlotContent_specialization__disabled_3d',
                    pt = 'EmptySlotContent_vehicle_55',
                    Ft = { transform: 'translateX(0rem)', opacity: 1 },
                    Ct = { transform: 'translateX(-70rem)', opacity: 0 },
                    Dt = (0, n.memo)(
                        ({
                            roles: e,
                            layoutInfo: t,
                            vehicleName: u,
                            vehicleType: r,
                            isDisabled: o,
                            isSelected: s,
                            blinkStyle: l,
                            qtTankmanIconStyle: c,
                        }) => {
                            const m = (0, le.useSpring)(
                                    () => ({
                                        from: Ft,
                                        to: Ct,
                                        config: { duration: 200, easing: me.ei },
                                        immediate: !0,
                                        pause: s,
                                    }),
                                    [s],
                                ),
                                d = m[0],
                                _ = m[1],
                                E = (0, n.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || _.start({ reset: !0, reverse: !0 });
                                }, [_, t]),
                                g = i.U2(e, 0) || '',
                                p = R.strings.crew_widget.vehicleWithName.$dyn((0, L.BN)(r)),
                                F = (0, L.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(g),
                                });
                            return a().createElement(
                                'div',
                                { className: dt, onMouseEnter: E, onMouseLeave: E },
                                a().createElement(
                                    'div',
                                    { className: _t },
                                    a().createElement(
                                        le.animated.div,
                                        { style: c },
                                        a().createElement(Qe.G, {
                                            name: 'empty',
                                            size: Qe.U.c100x60Barracks,
                                            classMix: Et,
                                        }),
                                        a().createElement(
                                            le.animated.div,
                                            { style: o ? void 0 : l },
                                            a().createElement(Qe.G, {
                                                name: 'emptyRed',
                                                size: Qe.U.c100x60Barracks,
                                                classMix: Et,
                                            }),
                                        ),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: A()(gt, o && At) },
                                    a().createElement(mt, { tankmanID: 0, roles: e, name: F, isUntrained: !0 }),
                                ),
                                a().createElement(
                                    le.animated.div,
                                    { className: pt, style: s ? void 0 : d },
                                    (0, L.uF)(p, { name: u }),
                                ),
                            );
                        },
                    );
                var ht = u(7078),
                    vt = u(2603),
                    bt = u(5415);
                const Bt = (e) => e.skills.length + e.newSkillsAmount + e.possibleSkillsAmount;
                var ft = u(8271),
                    wt = u(4385),
                    yt = u(9887),
                    kt = u.n(yt);
                const St = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Lt = (e) => e.includes('_') && ((e) => St.includes(e))(e.split('_').at(-1)),
                    Tt = [bt.cJ.ExtraLarge, bt.cJ.Large, bt.cJ.Medium, bt.cJ.Small, bt.cJ.ExtraSmall],
                    xt = (e, t) =>
                        Object.keys(e).reduce((u, n) => {
                            if (n in u) return u;
                            if (Lt(n)) {
                                const a = n.split('_').slice(0, -1).join('_');
                                if (a in u) return u;
                                const r = Tt.indexOf(t),
                                    o = (-1 !== r ? St.slice(r) : [])
                                        .map((e) => a + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    s = o ? e[o] : void 0;
                                return (u[a] = void 0 !== s ? s : e[a]), u;
                            }
                            const a = e[n];
                            return (
                                void 0 === a ||
                                    ((e, t) => St.some((u) => void 0 !== t[`${e}_${u}`]))(n, e) ||
                                    (u[n] = a),
                                u
                            );
                        }, {}),
                    It = (e, t = xt) => {
                        const u = (
                            (e, t = xt) =>
                            (u) => {
                                const r = (0, bt.GS)().mediaSize,
                                    o = (0, n.useMemo)(() => t(u, r), [u, r]);
                                return a().createElement(e, o);
                            }
                        )(e, t);
                        return a().memo((t) =>
                            Object.keys(t).some((e) => Lt(e) && void 0 !== t[e])
                                ? a().createElement(u, t)
                                : a().createElement(e, t),
                        );
                    },
                    Mt = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    Nt = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function Rt() {
                    return (
                        (Rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Rt.apply(this, arguments)
                    );
                }
                Object.keys(kt());
                const Ot = {
                        XL: { mt: Mt.mt__XL, mr: Mt.mr__XL, mb: Mt.mb__XL, ml: Mt.ml__XL },
                        LG: { mt: Mt.mt__LG, mr: Mt.mr__LG, mb: Mt.mb__LG, ml: Mt.ml__LG },
                        MDp: { mt: Mt.mt__MDp, mr: Mt.mr__MDp, mb: Mt.mb__MDp, ml: Mt.ml__MDp },
                        MD: { mt: Mt.mt__MD, mr: Mt.mr__MD, mb: Mt.mb__MD, ml: Mt.ml__MD },
                        SMp: { mt: Mt.mt__SMp, mr: Mt.mr__SMp, mb: Mt.mb__SMp, ml: Mt.ml__SMp },
                        SM: { mt: Mt.mt__SM, mr: Mt.mr__SM, mb: Mt.mb__SM, ml: Mt.ml__SM },
                        XS: { mt: Mt.mt__XS, mr: Mt.mr__XS, mb: Mt.mb__XS, ml: Mt.ml__XS },
                    },
                    Pt = (Object.keys(Ot), ['mt', 'mr', 'mb', 'ml']),
                    Ht = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Wt = It((e) => {
                        let t = e.className,
                            u = e.width,
                            r = e.height,
                            o = e.m,
                            s = e.mt,
                            i = void 0 === s ? o : s,
                            l = e.mr,
                            c = void 0 === l ? o : l,
                            m = e.mb,
                            d = void 0 === m ? o : m,
                            _ = e.ml,
                            E = void 0 === _ ? o : _,
                            g = e.column,
                            p = e.row,
                            F = e.flexDirection,
                            C = void 0 === F ? (g ? 'column' : p && 'row') || void 0 : F,
                            D = e.flexStart,
                            h = e.center,
                            v = e.flexEnd,
                            b = e.spaceBetween,
                            B = e.spaceAround,
                            f = e.justifyContent,
                            w =
                                void 0 === f
                                    ? (D ? 'flex-start' : h && 'center') ||
                                      (v && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (B && 'space-around') ||
                                      void 0
                                    : f,
                            y = e.alignItems,
                            k = void 0 === y ? (D ? 'flex-start' : h && 'center') || (v && 'flex-end') || void 0 : y,
                            S = e.alignSelf,
                            L = e.wrap,
                            T = e.flexWrap,
                            x = void 0 === T ? (L ? 'wrap' : void 0) : T,
                            I = e.grow,
                            M = e.shrink,
                            N = e.flex,
                            R = void 0 === N ? (I || M ? `${I ? 1 : 0} ${M ? 1 : 0} auto` : void 0) : N,
                            O = e.style,
                            P = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Nt);
                        const W = (0, n.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: d, ml: E },
                                    t = ((e) =>
                                        Pt.reduce((t, u) => {
                                            const n = e[u];
                                            return n && 'number' != typeof n ? t.concat(Ot[!0 === n ? 'MD' : n][u]) : t;
                                        }, []))(e),
                                    n = ((e) =>
                                        Pt.reduce((t, u) => {
                                            const n = e[u];
                                            return 'number' == typeof n && (t[Ht[u]] = n + 'rem'), t;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, n, {
                                        width: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: R,
                                        alignSelf: S,
                                        display: C || k ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: x,
                                        justifyContent: w,
                                        alignItems: k,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, r, i, c, d, E, O, R, S, C, x, w, k]),
                            G = W.computedStyle,
                            j = W.computedClassNames;
                        return a().createElement('div', Rt({ className: A()(Mt.base, ...j, t), style: G }, H), P);
                    });
                var Gt = u(280),
                    jt = u(3532),
                    Ut = u.n(jt);
                const zt = {
                        'paragraph-P10': 'Text_paragraph-P10_2c',
                        'paragraph-P12': 'Text_paragraph-P12_22',
                        'paragraph-P14': 'Text_paragraph-P14_a7',
                        'paragraph-P16': 'Text_paragraph-P16_90',
                        'paragraph-P18': 'Text_paragraph-P18_50',
                        'paragraph-P24': 'Text_paragraph-P24_33',
                        'heading-H14': 'Text_heading-H14_8b',
                        'heading-H15': 'Text_heading-H15_9e',
                        'heading-H18': 'Text_heading-H18_b7',
                        'heading-H20R': 'Text_heading-H20R_f6',
                        'heading-H22': 'Text_heading-H22_27',
                        'heading-H24R': 'Text_heading-H24R_be',
                        'heading-H24': 'Text_heading-H24_0c',
                        'heading-H28': 'Text_heading-H28_78',
                        'heading-H36': 'Text_heading-H36_32',
                        'heading-H56': 'Text_heading-H56_c3',
                        'heading-H73': 'Text_heading-H73_8f',
                        'heading-H144': 'Text_heading-H144_a9',
                        BLACK_REAL: 'Text_BLACK_REAL_30',
                        WHITE_REAL: 'Text_WHITE_REAL_bc',
                        WHITE: 'Text_WHITE_62',
                        WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                        WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                        PAR: 'Text_PAR_15',
                        PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                        PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                        INFO_RED: 'Text_INFO_RED_30',
                        RED: 'Text_RED_66',
                        RED_DARK: 'Text_RED_DARK_d8',
                        YELLOW: 'Text_YELLOW_ed',
                        ORANGE: 'Text_ORANGE_be',
                        CREAM: 'Text_CREAM_57',
                        BROWN: 'Text_BROWN_18',
                        GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                        GREEN: 'Text_GREEN_e3',
                        GREEN_DARK: 'Text_GREEN_DARK_f1',
                        BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                        BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                        CRED: 'Text_CRED_f7',
                        GOLD: 'Text_GOLD_28',
                        BOND: 'Text_BOND_be',
                        PROM: 'Text_PROM_65',
                    },
                    $t = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Vt() {
                    return (
                        (Vt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Vt.apply(this, arguments)
                    );
                }
                Object.keys(kt());
                const Xt = Object.keys(Ut()),
                    Zt = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    qt = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Kt = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Yt = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Qt =
                        (Object.keys(Yt),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': Zt,
                            'heading-H36': Zt,
                            'heading-H28': qt,
                            'heading-H24': qt,
                            'heading-H24R': qt,
                            'heading-H22': qt,
                            'heading-H20R': qt,
                            'heading-H18': qt,
                            'heading-H15': Kt,
                            'heading-H14': Kt,
                            'paragraph-P24': qt,
                            'paragraph-P18': qt,
                            'paragraph-P16': qt,
                            'paragraph-P14': Kt,
                            'paragraph-P12': Kt,
                            'paragraph-P10': Kt,
                        }),
                    Jt =
                        (Object.keys(Qt),
                        (e) =>
                            e
                                ? ((e) => Xt.includes(e))(e)
                                    ? { colorClassName: zt[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    eu = It((e) => {
                        let t = e.text,
                            u = e.variant,
                            r = e.className,
                            o = e.color,
                            s = e.m,
                            i = e.mt,
                            l = void 0 === i ? s : i,
                            c = e.mr,
                            m = void 0 === c ? s : c,
                            d = e.mb,
                            _ = void 0 === d ? s : d,
                            E = e.ml,
                            g = void 0 === E ? s : E,
                            p = e.style,
                            F = e.format,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, $t);
                        const D = (0, n.useMemo)(() => {
                                const e = Jt(o),
                                    t = e.colorClassName,
                                    u = e.colorStyle,
                                    n = void 0 === u ? {} : u;
                                return { computedStyle: Object.assign({}, p, n), colorClassName: t };
                            }, [p, o]),
                            h = D.computedStyle,
                            v = D.colorClassName;
                        return a().createElement(
                            Wt,
                            Vt(
                                {
                                    className: A()(zt.base, u && zt[u], v, r),
                                    style: h,
                                    mt: !0 === l ? Qt[u || 'paragraph-P16'].mt : l,
                                    mr: !0 === m ? Qt[u || 'paragraph-P16'].mr : m,
                                    mb: !0 === _ ? Qt[u || 'paragraph-P16'].mb : _,
                                    ml: !0 === g ? Qt[u || 'paragraph-P16'].ml : g,
                                },
                                C,
                            ),
                            void 0 !== F ? a().createElement(Gt.z, Vt({}, F, { text: t })) : t,
                        );
                    }),
                    tu = {
                        base: 'RoleLevelIcon_base_e1',
                        realLevel: 'RoleLevelIcon_realLevel_96',
                        base__small: 'RoleLevelIcon_base__small_ce',
                        icon: 'RoleLevelIcon_icon_fa',
                    },
                    uu = (0, n.memo)(({ percentValue: e, skillSize: t, hasSkills: u }) => {
                        const n = u ? R.strings.crew_widget.plusValue() : R.strings.crew_widget.plusSpecValue();
                        return a().createElement(
                            S.i,
                            {
                                header: R.strings.crew_widget.tooltip.roleLevelIcon.header(),
                                body: R.strings.crew_widget.tooltip.roleLevelIcon.body(),
                            },
                            a().createElement(
                                'div',
                                { className: A()(tu.base, tu[`base__${t}`]) },
                                a().createElement('div', { className: tu.icon }),
                                a().createElement(
                                    'div',
                                    { className: tu.realLevel },
                                    a().createElement(eu, {
                                        text: n,
                                        format: { binding: { value: a().createElement(eu, { text: e }) } },
                                    }),
                                ),
                            ),
                        );
                    }),
                    nu = {
                        base: 'LastSkillInfo_base_38',
                        realLevel: 'LastSkillInfo_realLevel_78',
                        base__small: 'LastSkillInfo_base__small_c5',
                        possibleLevel: 'LastSkillInfo_possibleLevel_02',
                        acceleratedTrainingIcon: 'LastSkillInfo_acceleratedTrainingIcon_bf',
                        base__big: 'LastSkillInfo_base__big_10',
                    },
                    au = 0.01,
                    ru = (0, n.memo)(
                        ({
                            lastSkillLevel: e,
                            lastPossibleSkillLevel: t,
                            showAcceleratedTrainingIcon: u,
                            skillSize: r,
                            blinkStyle: o,
                        }) => {
                            const s = (0, n.useRef)(e),
                                i = (0, le.useSpring)(() => ({ from: { scale: 1 } })),
                                l = i[0],
                                c = i[1];
                            (0, n.useEffect)(() => {
                                t < 0 &&
                                    s.current !== e &&
                                    (c.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: me.Fs },
                                    }),
                                    (s.current = e));
                            }, [e, t, c]);
                            const m = (0, n.useMemo)(
                                    () =>
                                        0 === t
                                            ? [R.strings.common.percentValue(), t]
                                            : t < au
                                              ? [R.strings.crew_widget.plusMinValue(), au]
                                              : [R.strings.crew_widget.plusValue(), t],
                                    [t],
                                ),
                                d = m[0],
                                _ = m[1];
                            return a().createElement(
                                'div',
                                { className: A()(nu.base, nu[`base__${r}`]) },
                                e >= 0 &&
                                    e < 100 &&
                                    a().createElement(
                                        le.animated.div,
                                        { style: l },
                                        a().createElement(
                                            'div',
                                            { className: nu.realLevel },
                                            (0, L.uF)(R.strings.common.percentValue(), {
                                                value: e > 0 && e < au ? au : e,
                                            }),
                                        ),
                                    ),
                                t >= 0 &&
                                    t < 100 &&
                                    a().createElement(
                                        le.animated.div,
                                        { className: nu.possibleLevel, style: o },
                                        (0, L.uF)(d, { value: _ }),
                                    ),
                                u && a().createElement(tt, { classMix: nu.acceleratedTrainingIcon }),
                            );
                        },
                    );
                var ou = u(8485);
                const su = 33,
                    iu = 0,
                    lu = !0,
                    cu = 'play';
                const mu = [
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
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const _u = (0, n.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            r = e.getImageSource,
                            o = e.frameCount,
                            s = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? su : i,
                            c = e.initialFrameIndex,
                            m = void 0 === c ? iu : c,
                            d = e.lastFrameIndex,
                            _ = void 0 === d ? o - 1 : d,
                            E = e.loop,
                            g = void 0 === E ? lu : E,
                            A = e.state,
                            p = void 0 === A ? cu : A,
                            F = e.onAnimationDone,
                            C = e.onAnimationComplete,
                            D = e.poster,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, mu);
                        const v = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = v.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y);
                                    };
                                switch (p) {
                                    case 'play':
                                        return (function () {
                                            const e = Au(m, _, r),
                                                t = Eu(m, _),
                                                n = window.setInterval(() => {
                                                    const a = t(),
                                                        r = e.get(a);
                                                    r
                                                        ? (null == s || s(a, r),
                                                          u(r),
                                                          a === _ &&
                                                              (null == C || C(),
                                                              g || (null == F || F(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === m && D ? { path: D, x: 0, y: 0 } : r(m),
                                                t = new Image();
                                            t.src = e.path;
                                            const n = () => u(gu(e, t));
                                            return (
                                                t.addEventListener('load', n), () => t.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, m, _, g, s, C, F, D, p]),
                            a().createElement('canvas', du({}, h, { width: t, height: u, ref: v }))
                        );
                    }),
                    Eu = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return (u += 1), u > t && (u = e), n;
                        };
                    },
                    gu = (e, t) => Object.assign({}, e, { img: t }),
                    Au = (e, t, u) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= t; r++) {
                            const e = u(r),
                                t = a[e.path];
                            if (t) n.set(r, gu(e, t));
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
                                    n.set(r, gu(e, t));
                            }
                        }
                        return n;
                    };
                function pu(e) {
                    return (t) => `${e}${t}`;
                }
                const Fu = [
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
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                let Du;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(Du || (Du = {}));
                const hu = (e, t, u) => {
                        const n = new Image();
                        (n.src = u(t)), e.push(n);
                    },
                    vu =
                        ((0, n.memo)((e) => {
                            let t = e.width,
                                u = e.height,
                                r = e.getSrcByFrame,
                                o = e.frameCount,
                                s = e.onAnimate,
                                i = void 0 === s ? () => {} : s,
                                l = e.frameTime,
                                c = void 0 === l ? 33 : l,
                                m = e.initialFrameIndex,
                                d = void 0 === m ? 0 : m,
                                _ = e.loop,
                                E = void 0 === _ || _,
                                g = e.state,
                                A = void 0 === g ? Du.Play : g,
                                p = e.onAnimationComplete,
                                F = void 0 === p ? () => {} : p,
                                C = e.revers,
                                D = void 0 !== C && C,
                                h = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, Fu);
                            const v = (0, n.useRef)(null);
                            return (
                                (0, n.useEffect)(() => {
                                    const e = v.current;
                                    if (!e) return;
                                    const n = o - 1,
                                        a = e.getContext('2d'),
                                        s = (n) => {
                                            a.clearRect(0, 0, e.width, e.height), a.drawImage(n, 0, 0, t, u);
                                        };
                                    if ('stop' === A) {
                                        const e = r(0),
                                            t = new Image();
                                        t.src = e;
                                        const u = () => s(t);
                                        return t.addEventListener('load', u), () => t.removeEventListener('load', u);
                                    }
                                    const l = ((e, t, u) => {
                                            const n = [];
                                            if (u) for (let u = e; u >= 0; u--) hu(n, u, t);
                                            else for (let u = 0; u < e; u++) hu(n, u, t);
                                            return n;
                                        })(o, r, D),
                                        m = ((e, t = 0) => {
                                            let u = t;
                                            return () => {
                                                const t = u;
                                                return (u += 1), u > e && (u = 0), t;
                                            };
                                        })(n, d),
                                        _ = setInterval(() => {
                                            const e = m(),
                                                t = l[e];
                                            s(l[e]), i(e, t), e === n && (F(), E || clearInterval(_));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [o, c, r, u, d, E, i, F, A, t, D]),
                                a().createElement('canvas', Cu({}, h, { width: t, height: u, ref: v }))
                            );
                        }),
                        'AnimatedNewSkill_base_6b'),
                    bu = 'AnimatedNewSkill_base__big_31';
                function Bu(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return fu(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return fu(e, t);
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
                function fu(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                class wu {
                    constructor() {
                        (this._intervalID = void 0),
                            (this._observers = void 0),
                            (this._intervalID = null),
                            (this._observers = new Map());
                    }
                    static get instance() {
                        return wu._instance || (wu._instance = new wu()), wu._instance;
                    }
                    subscribe(e) {
                        this._observers.set(e, e),
                            1 === this._observers.size &&
                                (this._intervalID = window.setInterval(() => {
                                    for (var e, t = Bu(this._observers.values()); !(e = t()).done; ) {
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
                wu._instance = void 0;
                const yu = {
                        width: 24,
                        height: 24,
                        frameCount: 42,
                        chunk: { count: 1, columns: 42, rows: 1 },
                        getChunkPath: pu('R.images.gui.maps.icons.sequence.new_skill.skill_'),
                    },
                    ku = {
                        width: 14,
                        height: 14,
                        frameCount: 35,
                        chunk: { count: 1, columns: 35, rows: 1 },
                        getChunkPath: pu('R.images.gui.maps.icons.sequence.new_skill.skill_small_'),
                    },
                    Su = ({ size: e }) => {
                        const t = e === ou.O.Small ? ku : yu,
                            u = (function (e) {
                                const t = e.chunk,
                                    u = t.rows * t.columns;
                                return (n) => {
                                    const a = n % u,
                                        r = (a % t.columns) * e.width,
                                        o = Math.trunc(a / t.columns) * e.height;
                                    return { path: e.getChunkPath(Math.trunc(n / u)), x: r, y: o };
                                };
                            })(t),
                            r = (0, n.useState)(Du.Stop),
                            o = r[0],
                            s = r[1],
                            i = (0, n.useCallback)(() => {
                                s(Du.Play);
                            }, [s]),
                            l = (0, n.useCallback)(() => {
                                s(Du.Stop);
                            }, [s]);
                        return (
                            (0, n.useEffect)(() => (wu.instance.subscribe(i), () => wu.instance.unsubscribe(i)), [i]),
                            a().createElement(_u, {
                                width: t.width,
                                height: t.height,
                                frameCount: t.frameCount,
                                getImageSource: u,
                                loop: !1,
                                state: o,
                                onAnimationDone: l,
                                className: A()(vu, e === ou.O.Big && bu),
                            })
                        );
                    },
                    Lu = { base: 'Skill_base_ba', base__big: 'Skill_base__big_eb' };
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                let xu;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(xu || (xu = {}));
                const Iu = (0, n.memo)(
                        ({
                            name: e,
                            icon: t,
                            type: u,
                            size: r,
                            marginValue: o,
                            clipWidth: s,
                            tankmanID: i,
                            blinkStyle: l,
                            showNewSkillAnimation: c,
                            isTooltipEnabled: m = !0,
                        }) => {
                            const d = (0, n.useRef)(''),
                                _ = (0, le.useSpring)(() => ({ from: { scale: 1 } })),
                                E = _[0],
                                g = _[1];
                            (0, n.useEffect)(() => {
                                u === ft.W.New &&
                                    d.current === ft.W.Possible &&
                                    g.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: me.Fs },
                                    }),
                                    (d.current = u);
                            }, [u, g]);
                            const F = (0, n.useCallback)(() => {
                                switch (u) {
                                    case ft.W.Learned:
                                    case ft.W.Learning:
                                    case ft.W.Irrelevant:
                                        return {
                                            contentId:
                                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                    'resId',
                                                ),
                                            args: { tooltipId: vt.HZ, tankmanID: i, skillName: e },
                                        };
                                    case ft.W.New:
                                    case ft.W.Possible:
                                        return {
                                            contentId: R.views.lobby.crew.tooltips.PerkAvailableTooltip('resId'),
                                            args: { tankmanID: i },
                                        };
                                }
                            }, [u, e, i]);
                            return a().createElement(
                                p.u,
                                Tu({}, F(), {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: m,
                                    ignoreShowDelay: !0,
                                }),
                                a().createElement(
                                    le.animated.div,
                                    { style: E },
                                    a().createElement(
                                        le.animated.div,
                                        { style: u === ft.W.Possible ? l : void 0 },
                                        a().createElement(
                                            'div',
                                            {
                                                className: A()(Lu.base, Lu[`base__${r}`]),
                                                style: { marginLeft: `${o}rem`, clipPath: `inset(0 ${s}rem 0 0)` },
                                            },
                                            !c || (u !== ft.W.Possible && u !== ft.W.New)
                                                ? a().createElement(ou.d, { icon: t, size: r, type: u })
                                                : a().createElement(Su, { size: r }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Mu = 'SkillsList_base_11',
                    Nu = 'SkillsList_row_03',
                    Ru = 'SkillsList_possibleLevel_97',
                    Ou = 'SkillsList_possibleLevel__before_6f',
                    Pu = ({
                        tankman: e,
                        showAcceleratedTrainingIcon: t = !1,
                        rowWidth: u = 220,
                        maxBigSkillsInRow: r = 16,
                        blinkStyle: o,
                        isSkillTooltipEnabled: s = !0,
                        showNewSkillAnimation: l = !1,
                    }) => {
                        const c = e.skills,
                            m = c.length,
                            d = Bt(e),
                            _ = ((e, t, u) => {
                                let n = e > t ? 10 : e;
                                const a = 0 === e ? e : Math.ceil(e / n),
                                    r = a > 1 ? 16 : 24;
                                let o = 2,
                                    s = r;
                                for (; (u - (r + o)) / (s + o) < Math.floor((e - 1) / a); ) o > 0 ? o-- : s--;
                                return (
                                    (n = Math.min(n, 1 + Math.floor((u - r) / (s + o)))),
                                    s !== r && (o = s - r),
                                    [a, n, o, r, s]
                                );
                            })(d, r, u),
                            E = _[0],
                            g = _[1],
                            p = _[2],
                            F = _[3],
                            C = _[4],
                            D = E > 1 ? xu.Small : xu.Big,
                            h = (0, n.useMemo)(
                                () =>
                                    a().createElement(
                                        le.animated.div,
                                        { className: A()(Ru, 0 === m && Ou), style: o },
                                        a().createElement(uu, {
                                            percentValue: e.lastPossibleRoleLevel,
                                            skillSize: D,
                                            hasSkills: e.possibleSkillsAmount > 0 || m > 0,
                                        }),
                                    ),
                                [o, D, m, e.lastPossibleRoleLevel, e.possibleSkillsAmount],
                            );
                        return a().createElement(
                            'div',
                            { className: Mu },
                            (0, wt.K)(E, (u) => {
                                const n = Math.min(g, d - u * g),
                                    r = u === E - 1;
                                return a().createElement(
                                    'div',
                                    { className: Nu, key: `row_${u}` },
                                    e.lastPossibleRoleLevel > 0 && 0 === m && h,
                                    (0, wt.K)(n, (t) => {
                                        const r = g * u + t;
                                        let d = '',
                                            _ = '',
                                            E = ft.W.Learned;
                                        if (r < m) {
                                            const e = i.U2(c, r);
                                            e && ((d = e.name), (_ = e.icon), (E = e.type));
                                        } else E = r < m + e.newSkillsAmount ? ft.W.New : ft.W.Possible;
                                        return a().createElement(Iu, {
                                            name: d,
                                            icon: _,
                                            type: E,
                                            size: D,
                                            marginValue: 0 === t ? 0 : p,
                                            key: r + '_' + d,
                                            clipWidth: t === n - 1 ? 0 : F - C,
                                            tankmanID: e.tankmanID,
                                            blinkStyle: o,
                                            isTooltipEnabled: s,
                                            showNewSkillAnimation: l,
                                        });
                                    }),
                                    r &&
                                        a().createElement(
                                            a().Fragment,
                                            null,
                                            a().createElement(ru, {
                                                lastSkillLevel: e.possibleSkillsAmount > 0 ? -1 : e.lastSkillLevel,
                                                lastPossibleSkillLevel: e.lastPossibleSkillLevel,
                                                showAcceleratedTrainingIcon: t,
                                                lastPossibleRoleLevel: e.lastPossibleRoleLevel,
                                                skillSize: D,
                                                blinkStyle: o,
                                                hasSkills: e.possibleSkillsAmount > 0 || m > 0,
                                            }),
                                            e.lastPossibleRoleLevel > 0 && m > 0 && h,
                                        ),
                                );
                            }),
                            !E &&
                                a().createElement(
                                    'div',
                                    { className: Nu },
                                    e.lastPossibleRoleLevel > 0 && 0 === m && h,
                                    a().createElement(ru, {
                                        lastSkillLevel: e.possibleSkillsAmount > 0 ? -1 : e.lastSkillLevel,
                                        lastPossibleSkillLevel: e.lastPossibleSkillLevel,
                                        showAcceleratedTrainingIcon: t,
                                        lastPossibleRoleLevel: e.lastPossibleRoleLevel,
                                        skillSize: D,
                                        blinkStyle: o,
                                        hasSkills: e.possibleSkillsAmount > 0 || m > 0,
                                    }),
                                    e.lastPossibleRoleLevel > 0 && m > 0 && h,
                                ),
                        );
                    },
                    Hu = 'TankmanInfo_base_69',
                    Wu = 'TankmanInfo_base__disabled_36',
                    Gu = 'TankmanInfo_tankmanTooltipHoverArea_9b',
                    ju = 'TankmanInfo_specialization_77',
                    Uu = 'TankmanInfo_specialization__withManySkills_9a',
                    zu = 'TankmanInfo_skillsContainer_17',
                    $u = 'TankmanInfo_skillsContainer__withManySkills_00',
                    Vu = (0, r.Pi)(({ tankman: e, layoutInfo: t, isUntrained: u, blinkStyle: r, isDisabled: o }) => {
                        const s = E().model,
                            i = t.isCurrentLayoutQuickTraining || s.computes.isChangeCrewButtonVisible(),
                            l = (0, bt.GS)().mediaSize,
                            c = (0, n.useMemo)(() => (i ? (l >= bt.cJ.Small ? 190 : 146) : 220), [i, l]),
                            m = ((e, t) => Bt(e) > t)(e, 10),
                            d = !t.isCurrentLayoutQuickTraining && -1 !== e.tankmanID && e.isLessMastered,
                            _ = e.baseSpecializationLevel >= 100;
                        return a().createElement(
                            'div',
                            { className: A()(Hu, o && Wu) },
                            a().createElement(
                                ht.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: vt.v$, tankmanID: e.tankmanID },
                                },
                                a().createElement('div', { className: Gu }),
                            ),
                            a().createElement(
                                'div',
                                { className: A()(ju, m && Uu) },
                                a().createElement(mt, {
                                    roles: e.roles,
                                    tankmanID: e.tankmanID,
                                    specializationLevel: e.specializationLevel,
                                    isUntrained: u,
                                    name: e.fullName,
                                    isAcceleratedTrainingAvailable: d && !_,
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: A()(zu, m && $u) },
                                a().createElement(Pu, {
                                    tankman: e,
                                    showAcceleratedTrainingIcon: d && _,
                                    rowWidth: c,
                                    maxBigSkillsInRow: 10,
                                    blinkStyle: r,
                                    showNewSkillAnimation: t.isCurrentLayoutHangar,
                                }),
                            ),
                        );
                    }),
                    Xu = 'QuickTrainingTankmanSlotContent_base_8d',
                    Zu = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    qu = 'QuickTrainingTankmanSlotContent_highlight_72',
                    Ku = 'QuickTrainingTankmanSlotContent_icon_7c',
                    Yu = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    Qu = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    Ju = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    en = { opacity: 0 },
                    tn = [{ opacity: 1 }, { opacity: 0 }],
                    un = (0, n.memo)(
                        ({
                            tankman: e,
                            isUntrained: t,
                            blinkStyle: u,
                            qtTankmanIconStyle: r,
                            layoutInfo: o,
                            isDisabled: s,
                        }) => {
                            const i = (0, n.useRef)(e.lastSkillLevelFull),
                                l = (0, n.useRef)(e.skills.length),
                                c = (0, le.useSpring)(() => ({ from: Yu })),
                                m = c[0],
                                d = c[1],
                                _ = (0, le.useSpring)(() => ({ from: en })),
                                E = _[0],
                                g = _[1],
                                A = (0, n.useRef)(!1);
                            return (
                                (0, n.useEffect)(() => {
                                    e.hasPossibleProgress
                                        ? A.current ||
                                          (d.start({
                                              from: Yu,
                                              to: Qu,
                                              reverse: false,
                                              config: { duration: 300, easing: me.BH },
                                          }),
                                          (A.current = !0))
                                        : A.current
                                          ? (i.current !== e.lastSkillLevelFull || l.current !== e.skills.length
                                                ? (d.start({
                                                      from: Qu,
                                                      to: Ju,
                                                      delay: 200,
                                                      config: { duration: 500, easing: me.BH },
                                                  }),
                                                  (i.current = e.lastSkillLevelFull),
                                                  (l.current = e.skills.length),
                                                  g.start({
                                                      from: en,
                                                      to: tn,
                                                      delay: 200,
                                                      config: { duration: 500, easing: me.BH },
                                                  }))
                                                : d.start({ reset: !0, reverse: !0 }),
                                            (A.current = !1))
                                          : ((i.current = e.lastSkillLevelFull), (l.current = e.skills.length));
                                }, [d, g, e.lastSkillLevelFull, e.hasPossibleProgress, e.skills.length]),
                                a().createElement(
                                    'div',
                                    { className: Xu },
                                    a().createElement(le.animated.div, { className: qu, style: E }),
                                    a().createElement(
                                        le.animated.div,
                                        { style: r },
                                        a().createElement(Qe.G, {
                                            name: e.icon,
                                            size: Qe.U.c100x60Barracks,
                                            classMix: Ku,
                                            isSkin: e.isInSkin,
                                        }),
                                    ),
                                    a().createElement(le.animated.div, { className: Zu, style: m }),
                                    a().createElement(Vu, {
                                        tankman: e,
                                        layoutInfo: o,
                                        isUntrained: t,
                                        blinkStyle: u,
                                        isDisabled: s,
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
                                            (null == (n = i.U2(e, r)) ? void 0 : n.name) !==
                                            (null == (a = i.U2(t, r)) ? void 0 : a.name)
                                        )
                                            return !1;
                                    }
                                    return !0;
                                })(u.skills, n.skills) &&
                                u.lastSkillLevelFull === n.lastSkillLevelFull &&
                                u.possibleSkillsAmount === n.possibleSkillsAmount &&
                                u.lastPossibleSkillLevel === n.lastPossibleSkillLevel &&
                                u.specializationLevel === n.specializationLevel &&
                                u.lastPossibleRoleLevel === n.lastPossibleRoleLevel
                            );
                        },
                    ),
                    nn = 'TankmanSlotContent_base_00',
                    an = 'TankmanSlotContent_icon_ef',
                    rn = (0, n.memo)(({ tankman: e, layoutInfo: t, isUntrained: u, isDisabled: n }) =>
                        a().createElement(
                            'div',
                            { className: nn },
                            a().createElement(Qe.G, {
                                name: e.icon,
                                size: Qe.U.c100x60Barracks,
                                classMix: an,
                                isSkin: e.isInSkin,
                            }),
                            a().createElement(Vu, { tankman: e, layoutInfo: t, isUntrained: u, isDisabled: n }),
                        ),
                    ),
                    on = (0, n.memo)(
                        ({
                            roles: e,
                            tankman: t,
                            layoutInfo: u,
                            vehicleName: n,
                            vehicleType: r,
                            isUntrained: o,
                            isDisabled: s,
                            isSelected: i,
                            blinkSlotStyle: l,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: m,
                        }) =>
                            -1 === t.tankmanID
                                ? a().createElement(Dt, {
                                      roles: e,
                                      layoutInfo: u,
                                      vehicleName: n,
                                      vehicleType: r,
                                      isDisabled: s,
                                      isSelected: i,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: m,
                                  })
                                : u.isCurrentLayoutQuickTraining
                                  ? a().createElement(un, {
                                        tankman: t,
                                        isUntrained: o,
                                        blinkStyle: l,
                                        qtTankmanIconStyle: m,
                                        layoutInfo: u,
                                        isDisabled: s,
                                    })
                                  : a().createElement(rn, { tankman: t, layoutInfo: u, isUntrained: o, isDisabled: s }),
                    ),
                    sn = { transform: 'translateX(0rem)' },
                    ln = { transform: 'translateX(41rem)' },
                    cn = { opacity: 0 },
                    mn = { opacity: 1 },
                    dn = (0, r.Pi)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: u,
                            layoutInfo: r,
                            isSelected: o,
                            isAnySlotSelected: s,
                            isDisabled: l,
                            blinkSlotStyle: m,
                            blinkTankmanStyle: d,
                            qtTankmanIconStyle: _,
                        }) => {
                            const g = E(),
                                p = g.model,
                                F = g.controls,
                                C = ((e, t) => {
                                    const u = (0, z.Jp)(c.D9),
                                        n = (0, j.f)(
                                            () => u({ action: c.eX.Click, parentScreen: e, item: t }),
                                            [e, t],
                                            c.tL,
                                        );
                                    return (e) => {
                                        e.button === U.RIGHT && n();
                                    };
                                })(p.computes.getUiLoggingParentScreen(), c.x3.SlotContextMenu),
                                D = F.onSlotClick,
                                h = F.onChangeCrewClick,
                                v = p.computes.isChangeCrewButtonVisible(),
                                b = p.computes.isTankmanMode(),
                                B = p.isCrewLocked.get(),
                                f = p.vehicleName.get(),
                                w = p.vehicleType.get(),
                                y = !l && u.isInteractive && (!r.isCurrentLayoutQuickTraining || s),
                                k = (0, n.useCallback)(() => {
                                    y && !b && ((0, ie.G)(R.sounds.yes1()), D(e, u.tankmanID));
                                }, [e, u, D, b, y]),
                                S = (0, n.useCallback)(
                                    (t) => {
                                        t.stopPropagation(), B || ((0, ie.G)(R.sounds.yes1()), h(e, u.tankmanID));
                                    },
                                    [e, u, h, B],
                                ),
                                L = (0, n.useMemo)(() => ({ tankmanID: u.tankmanID, slotIdx: e }), [u, e]);
                            return a().createElement(
                                Oe,
                                {
                                    args: L,
                                    isEnabled: !l,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    onMouseDown: C,
                                },
                                a().createElement(
                                    'div',
                                    null,
                                    a().createElement(
                                        ve,
                                        {
                                            onClick: k,
                                            isSelected: o,
                                            isDisabled: l,
                                            isEmpty: -1 === u.tankmanID,
                                            layoutInfo: r,
                                            isEnabledForMouse: y,
                                        },
                                        a().createElement(
                                            'div',
                                            { className: $e },
                                            u.hasWarning && a().createElement('div', { className: qe }),
                                            o && a().createElement('div', { className: b ? Ye : Ke }),
                                            a().createElement(
                                                be,
                                                {
                                                    startState: sn,
                                                    endState: ln,
                                                    layoutInfo: r,
                                                    isPaused: !v,
                                                    className: A()(Xe, v && Ze),
                                                    isTankmanMode: b,
                                                },
                                                a().createElement(on, {
                                                    roles: t,
                                                    tankman: u,
                                                    layoutInfo: r,
                                                    isUntrained: u.isUntrained,
                                                    isDisabled: l,
                                                    vehicleName: f,
                                                    vehicleType: w,
                                                    blinkSlotStyle: m,
                                                    blinkTankmanStyle: d,
                                                    qtTankmanIconStyle: _,
                                                    isSelected: o,
                                                }),
                                            ),
                                            v &&
                                                a().createElement(
                                                    'div',
                                                    { onClick: S },
                                                    a().createElement(
                                                        be,
                                                        {
                                                            startState: cn,
                                                            endState: mn,
                                                            layoutInfo: r,
                                                            isPaused: !v,
                                                            className: Ve,
                                                            isTankmanMode: b,
                                                        },
                                                        a().createElement(ze, {
                                                            isSelected: r.isCurrentLayoutMemberChange && o,
                                                            isLocked: B,
                                                            mainRole: i.U2(t, 0) || '',
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
                    _n = 'SlotsList_base_5f';
                function En() {
                    return (
                        (En =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        En.apply(this, arguments)
                    );
                }
                const gn = { transform: 'translateX(0rem)' },
                    An = { transform: 'translateX(15rem)' },
                    pn = (0, r.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: u }) => {
                        const r = E().model,
                            o = r.computes.isAnyEmptySlots(),
                            s = (0, le.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: me.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            i = s[0],
                            l = s[1];
                        (0, n.useEffect)(() => {
                            o ? l.resume() : l.pause();
                        }, [l, o]);
                        const c = (0, le.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0.3 }, { opacity: 1 }],
                                    config: { duration: 400, easing: me.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            m = c[0],
                            d = c[1];
                        (0, n.useEffect)(() => {
                            e.isCurrentLayoutQuickTraining ? d.resume() : d.pause();
                        }, [d, e.isCurrentLayoutQuickTraining]);
                        const _ = (0, le.useSpring)(() => ({
                                from: gn,
                                to: An,
                                delay: 200,
                                config: { duration: 300, easing: me.ei },
                                pause: !e.isCurrentLayoutQuickTraining,
                            }))[0],
                            g = (0, n.useCallback)(
                                (u) => t || (e.isCurrentLayoutQuickTraining && -1 === u),
                                [t, e.isCurrentLayoutQuickTraining],
                            );
                        return a().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: A()(_n, u) },
                            r.computes.getSlots().map((t, u) =>
                                a().createElement(
                                    dn,
                                    En({}, t, {
                                        layoutInfo: e,
                                        key: `slot_${u}_${t.tankman.tankmanID}`,
                                        isSelected:
                                            !e.isCurrentLayoutHangar &&
                                            (r.computes.isSlotSelected(t.slotIdx) || r.computes.isTankmanMode()),
                                        isAnySlotSelected: r.computes.isAnySlotSelected(),
                                        isDisabled: g(t.tankman.tankmanID),
                                        blinkSlotStyle: m,
                                        blinkTankmanStyle: i,
                                        qtTankmanIconStyle: _,
                                    }),
                                ),
                            ),
                        );
                    }),
                    Fn = (0, r.Pi)(() => {
                        const e = E().model,
                            t = e.isDisabled.get(),
                            u = e.hasDog.get(),
                            n = e.computes.getLayoutInfo();
                        return a().createElement(
                            'div',
                            { className: re },
                            e.computes.isButtonBarVisible() &&
                                a().createElement(
                                    'div',
                                    { className: oe },
                                    a().createElement(ae, { isWidgetDisabled: t }),
                                ),
                            a().createElement(pn, { layoutInfo: n, isWidgetDisabled: t, className: se }),
                            u && a().createElement(xe, { layoutInfo: n, isDisabled: t }),
                        );
                    }),
                    Cn = (0, n.memo)(() =>
                        a().createElement(
                            _,
                            { options: { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') } },
                            a().createElement(Fn, null),
                        ),
                    );
            },
            5801: (e, t, u) => {
                'use strict';
                u.d(t, { p: () => Le });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    o = u.n(r),
                    s = u(2106),
                    i = u(6373);
                let l;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(l || (l = {}));
                var c = u(3403),
                    m = u(3415),
                    d = u(9480),
                    _ = u(9631);
                const E = 'FilterTitle_base_a7',
                    g = 'FilterTitle_label_05',
                    A = 'FilterTitle_discount_42',
                    p = 'FilterTitle_discountIcon_30',
                    F = ({ label: e, hasDiscount: t, className: u }) =>
                        a().createElement(
                            'div',
                            { className: o()(E, u) },
                            a().createElement('div', { className: g }, e),
                            t && a().createElement('div', { className: A }, a().createElement('div', { className: p })),
                        );
                let C;
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
                })(C || (C = {}));
                var D = u(3649);
                const h = 'ToggleIcon_base_59',
                    v = 'ToggleIcon_base__small_3e',
                    b = 'ToggleIcon_icon_e7',
                    B = a().memo(function ({ icon: e, isSmall: t = !1, classNames: u }) {
                        return a().createElement(
                            'div',
                            { className: o()(h, t && v) },
                            a().createElement('div', {
                                className: o()(b, null == u ? void 0 : u.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var f = u(9690);
                const w = 'VehicleTier_base_9c',
                    y = 'VehicleTier_base__small_fc',
                    k = ({ level: e, isSmall: t = !1 }) =>
                        a().createElement('div', { className: o()(w, t && y) }, (0, f.HG)(e)),
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
                    L = ({ id: e, icon: t, type: u, isSmall: n = !0, isSelected: r = !1 }) =>
                        u === C.VehicleTier
                            ? a().createElement(k, { isSmall: n, level: Number(e) })
                            : a().createElement(B, {
                                  icon: t,
                                  isSmall: n,
                                  classNames: {
                                      icon: o()(S[`icon__${u}`], S[`icon__${u}${(0, D.e)(e)}`], r && S.icon__selected),
                                  },
                              }),
                    T = {
                        base: 'FilterToggleGroup_base_69',
                        title: 'FilterToggleGroup_title_65',
                        content: 'FilterToggleGroup_content_80',
                        toggle: 'FilterToggleGroup_toggle_d4',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_11',
                    };
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                let I;
                !(function (e) {
                    (e.Default = 'default'), (e.InPopup = 'inPopup');
                })(I || (I = {}));
                const M = ({ header: e, body: t, contentId: u, targetId: n }) =>
                        u
                            ? { contentId: u, targetId: n }
                            : t || e
                              ? { header: null != e ? e : void 0, body: null != t ? t : void 0 }
                              : void 0,
                    N = ({
                        id: e,
                        type: t,
                        label: u,
                        hasDiscount: n,
                        filters: r,
                        onClick: s,
                        className: i,
                        toggleProps: l,
                        theme: c = I.Default,
                    }) => {
                        const E = c === I.InPopup;
                        return a().createElement(
                            'div',
                            { className: o()(T.base, T[`base__${c}`], i) },
                            E && a().createElement(F, { className: T.title, label: u, hasDiscount: n }),
                            a().createElement(
                                'div',
                                { className: T.content },
                                d.UI(r, ({ id: u, isSelected: n, tooltip: r, icon: i, counter: c }) =>
                                    a().createElement(
                                        m.l,
                                        { key: u, tooltipArgs: M(r), className: T.toggle },
                                        a().createElement(
                                            _.C,
                                            x({}, l, {
                                                className: o()(T.toggle, null == l ? void 0 : l.className),
                                                isActive: n,
                                                onClick: () => (null == s ? void 0 : s(e, u)),
                                                counter: c,
                                            }),
                                            a().createElement(L, {
                                                id: u,
                                                icon: i,
                                                type: t,
                                                isSmall: E,
                                                isSelected: n,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    };
                var O = u(9197);
                const P = (0, u(3215).q)()(
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
                var G = u(3457),
                    j = u(3616),
                    U = u(1037),
                    z = u(9367);
                const $ = 'PopupButton_base_7c',
                    V = 'PopupButton_popupButtonLabel_ed',
                    X = 'PopupButton_buttonIconWrapper_d7',
                    Z = 'PopupButton_buttonIcon_e0',
                    q = 'PopupButton_buttonIcon__isHighlighted_84',
                    K = 'PopupButton_discountAlert_c8',
                    Y = ({ isHighlighted: e, hasDiscountAlert: t, popoverDirection: u = U.IC.Bottom }) =>
                        a().createElement(
                            'div',
                            { className: $ },
                            a().createElement('div', { className: V }, R.strings.crew.filter.popup.button.title()),
                            a().createElement(
                                j.Z,
                                {
                                    contentId: R.views.lobby.crew.popovers.FilterPopoverView('resId'),
                                    targetId: R.views.lobby.crew.widgets.FilterPanelWidget('resId'),
                                    direction: u,
                                },
                                a().createElement(
                                    'div',
                                    { id: 'popup_btn', className: X },
                                    a().createElement(
                                        _.C,
                                        { type: G.L$.ghost, size: G.qE.small, isActive: e, hasIndicator: !1 },
                                        a().createElement('div', { className: o()(Z, e && q) }),
                                    ),
                                    t && a().createElement(z.Q, { className: K }),
                                ),
                            ),
                        );
                var Q = u(8018);
                const J = 'ResetButton_base_58',
                    ee = 'ResetButton_button_a5',
                    te = 'ResetButton_icon_4a',
                    ue = ({ onClick: e }) =>
                        a().createElement(
                            'div',
                            { className: J },
                            a().createElement(
                                i.i,
                                Q.Xd,
                                a().createElement(
                                    G.u5,
                                    { mixClass: ee, onClick: e, type: G.L$.ghost, size: G.qE.small },
                                    a().createElement('div', { className: te }),
                                ),
                            ),
                        ),
                    ne = 'default',
                    ae = 'search',
                    re = 'email',
                    oe = 'password',
                    se = 'normal',
                    ie = 'disabled',
                    le = 'alert',
                    ce = 'error',
                    me = 'medium',
                    de = {
                        [ne]: '',
                        [re]: R.strings.common.input.placeholder.email(),
                        [ae]: R.strings.common.input.placeholder.search(),
                        [oe]: R.strings.common.input.placeholder.password(),
                    },
                    _e = { [ne]: 'text', [re]: 'text', [ae]: 'text', [oe]: 'password' },
                    Ee = { [ne]: '', [re]: 'Invalid email', [ae]: '', [oe]: '' },
                    ge = R.images.gui.maps.icons.components.input;
                function Ae(e, t) {
                    return (
                        t !== re ||
                        (function (e) {
                            const t = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(t);
                        })(e)
                    );
                }
                var pe = u(7727);
                const Fe = {
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
                    Ce = a().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: u = ne,
                            size: r = me,
                            variant: s = se,
                            placeholder: i = '',
                            highlighted: l,
                            withClear: c,
                            selectOnFocus: m = !0,
                            maxLength: d,
                            iconSource: _,
                            classMix: E,
                            onMouseEnter: g,
                            onMouseLeave: A,
                            onMouseDown: p,
                            onMouseUp: F,
                            onClick: C,
                            onChange: D,
                            onClear: h,
                            onFocus: v,
                            onBlur: b,
                        }) => {
                            const B = (0, n.useState)(!1),
                                f = B[0],
                                w = B[1],
                                y = (0, n.useRef)(null),
                                k = (0, n.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                S = s !== ie,
                                L = (0, n.useCallback)(
                                    (e) => {
                                        S && (w(!0), v && v(e));
                                    },
                                    [S, v],
                                ),
                                T = (0, n.useCallback)(
                                    (e) => {
                                        S && !k.current.mouseOver && (w(!1), b && b(e));
                                    },
                                    [S, b],
                                );
                            (0, n.useEffect)(() => {
                                S && f && m && y.current && y.current.select();
                            }, [m, f, S]);
                            const x = (0, n.useCallback)(
                                    (e) => {
                                        S && D && D(e.target.value);
                                    },
                                    [S, D],
                                ),
                                I = (0, n.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseOver = !0), g && g(e));
                                    },
                                    [S, g],
                                ),
                                M = (0, n.useCallback)(
                                    (e) => {
                                        S &&
                                            y.current &&
                                            (k.current.mouseDown && y.current.focus(),
                                            (k.current.mouseOver = !1),
                                            A && A(e));
                                    },
                                    [S, A],
                                ),
                                N = (0, n.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseDown = !0), p && p(e));
                                    },
                                    [S, p],
                                ),
                                R = (0, n.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseDown = !1), F && F(e));
                                    },
                                    [S, F],
                                ),
                                O = (0, n.useCallback)(
                                    (e) => {
                                        if (S && y.current) {
                                            (!f || (f && e.target !== y.current)) && y.current.focus(), C && C(e);
                                        }
                                    },
                                    [f, S, C],
                                ),
                                P = i || de[u],
                                H = Boolean(_),
                                W = o()(
                                    Fe.base,
                                    Fe[`base__${r}`],
                                    l && Fe[`base__${s}`],
                                    f && Fe.base__focused,
                                    H && Fe.base__withIcon,
                                    E,
                                ),
                                G = (0, n.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                j = o()(Fe.input, Fe[`input__${u}`]),
                                U = o()(Fe.icon, Fe[`icon__${u}`]),
                                z = o()(Fe.placeholder, Fe[`placeholder__${u}`]);
                            return a().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: I,
                                    onMouseDown: N,
                                    onMouseUp: R,
                                    onMouseLeave: M,
                                    onClick: O,
                                },
                                !S && a().createElement('div', { className: Fe.disabled }),
                                G && a().createElement('div', { style: G, className: U }),
                                a().createElement('input', {
                                    ref: y,
                                    className: j,
                                    type: _e[u],
                                    value: t,
                                    onChange: x,
                                    disabled: !S,
                                    onFocus: L,
                                    onBlur: T,
                                    maxLength: d,
                                }),
                                P && !t && !f && a().createElement('div', { className: z }, P),
                                c &&
                                    a().createElement('div', {
                                        className: Fe.clear,
                                        onClick: (e) => {
                                            pe.$.playClick(), h && h(e);
                                        },
                                        onMouseEnter: pe.$.playHighlight,
                                    }),
                            );
                        },
                    ),
                    De = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    he = ({ variant: e, show: t = !0, helperText: u, helperIcon: r, classMix: s }) => {
                        const i = (0, n.useMemo)(() => {
                                const t =
                                    r ||
                                    (function (e) {
                                        return e === le ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [r, e]),
                            l = o()(De.base, t && De.base__shown),
                            c = o()(De.message, De[`message__${e}`], s);
                        return a().createElement(
                            'div',
                            { className: l },
                            i && a().createElement('div', { className: De.icon, style: i }),
                            a().createElement('div', { className: c }, u),
                        );
                    },
                    ve = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    be = [
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
                function Be() {
                    return (
                        (Be =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Be.apply(this, arguments)
                    );
                }
                const fe = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    we = (e) => {
                        let t = e.componentId,
                            u = e.type,
                            r = void 0 === u ? ne : u,
                            s = e.variant,
                            i = void 0 === s ? se : s,
                            l = e.size,
                            c = void 0 === l ? me : l,
                            d = e.value,
                            _ = e.tooltipArgs,
                            E = e.helperText,
                            g = void 0 === E ? '' : E,
                            A = e.isValidated,
                            p = void 0 === A || A,
                            F = e.showHelper,
                            C = void 0 === F || F,
                            D = e.error,
                            h = e.options,
                            v = e.onFocus,
                            b = e.onMouseEnter,
                            B = e.onMouseLeave,
                            f = e.onMouseUp,
                            w = e.onMouseDown,
                            y = e.onChange,
                            k = e.classMix,
                            S = e.controlClassMix,
                            L = e.helperClassMix,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, be);
                        const x = (0, n.useState)(d),
                            I = x[0],
                            M = x[1],
                            N = (0, n.useState)(p),
                            R = N[0],
                            O = N[1],
                            P = (0, n.useMemo)(() => Object.assign({}, fe, h), [h]),
                            H = (0, n.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: d, type: r }),
                            W = (0, n.useCallback)((e) => {
                                e !== H.current.value &&
                                    ((H.current.value = e), (H.current.isChangeHandled = !1), M(e));
                            }, []),
                            G = (0, n.useCallback)(
                                (e) => {
                                    let t = !0;
                                    P.performChangeValidation &&
                                        (t = P.changesValidator ? P.changesValidator(e) : Ae(e, H.current.type)),
                                        y && y(e, t);
                                },
                                [y, P],
                            ),
                            j = (0, n.useCallback)(() => {
                                H.current.debounceTimeout &&
                                    (window.clearTimeout(H.current.debounceTimeout), (H.current.debounceTimeout = 0));
                            }, []),
                            U = (0, n.useCallback)(() => W(''), [W]);
                        (0, n.useEffect)(() => () => j(), [j]);
                        const z = (0, n.useCallback)(
                            (e) => {
                                j(),
                                    P.debounceTime
                                        ? (H.current.debounceTimeout = window.setTimeout(() => {
                                              G(e);
                                          }, P.debounceTime))
                                        : G(e);
                            },
                            [G, j, P.debounceTime],
                        );
                        (0, n.useEffect)(() => {
                            H.current.isChangeHandled ||
                                H.current.value !== I ||
                                (z(H.current.value), (H.current.isChangeHandled = !0));
                        }, [I, z]),
                            (0, n.useEffect)(() => {
                                H.current.isChangeHandled && d !== H.current.value && ((H.current.value = d), M(d)),
                                    (H.current.type = r);
                            }, [d, r]),
                            (0, n.useEffect)(() => {
                                O(p);
                            }, [p, i]);
                        const $ = (0, n.useCallback)((e) => b && b(e), [b]),
                            V = (0, n.useCallback)(
                                (e) => {
                                    P.disableHighlightOnFocus && R && O(!1), v && v(e);
                                },
                                [R, v, P.disableHighlightOnFocus],
                            ),
                            X = (0, n.useCallback)((e) => f && f(e), [f]),
                            Z = (0, n.useCallback)((e) => w && w(e), [w]),
                            q = (0, n.useCallback)((e) => B && B(e), [B]),
                            K = (0, n.useMemo)(
                                () =>
                                    P.withTypeIcon
                                        ? (function (e, t) {
                                              return e === ae ? ge.$dyn(`search_${t}`) : '';
                                          })(r, c)
                                        : '',
                                [r, c, P.withTypeIcon],
                            ),
                            Y = g || Ee[r],
                            Q = Boolean(I),
                            J = D ? ce : i,
                            ee = Boolean(D) || R,
                            te = (0, n.useMemo)(
                                () => ('boolean' == typeof P.withClear ? Q && P.withClear : Q && r === ae),
                                [r, Q, P],
                            ),
                            ue = o()(ve.base, ve[`base__${c}`], ve[`base__${i}`], k);
                        return a().createElement(
                            'div',
                            { id: t, className: ue, onMouseEnter: $, onMouseDown: Z, onMouseUp: X, onMouseLeave: q },
                            a().createElement(
                                m.l,
                                { tooltipArgs: _ },
                                a().createElement(
                                    Ce,
                                    Be(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: K,
                                            size: c,
                                            type: r,
                                            variant: J,
                                            value: I,
                                            withClear: te,
                                            highlighted: ee,
                                            selectOnFocus: P.selectOnFocus,
                                            maxLength: P.maxLength,
                                            classMix: S,
                                            onFocus: V,
                                            onChange: W,
                                            onClear: U,
                                        },
                                        T,
                                    ),
                                ),
                            ),
                            Y &&
                                a().createElement(
                                    'div',
                                    { className: ve.helper },
                                    a().createElement(he, {
                                        variant: J,
                                        show: C && (P.isPermanentHelper || ee),
                                        helperText: D || Y,
                                        helperIcon: P.helperIconSource,
                                        classMix: L,
                                    }),
                                ),
                        );
                    },
                    ye = ({ value: e, placeholder: t, tooltipHeader: u, onChange: n, className: r, tooltipBody: o }) =>
                        a().createElement(
                            i.i,
                            { header: null != u ? u : void 0, body: o, isEnabled: Boolean(u || o) },
                            a().createElement(we, {
                                type: ae,
                                placeholder: null != t ? t : void 0,
                                value: e,
                                classMix: r,
                                onChange: n,
                            }),
                        ),
                    ke = {
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
                            u = t.model,
                            n = t.controls,
                            r = u.amountInfo.get(),
                            c = r.from,
                            m = r.to,
                            d = u.panelType.get(),
                            _ = u.filter.get(),
                            E = u.hasAppliedFilters.get(),
                            g = E || (0 === c && 0 === m),
                            A = u.popoverTooltipHeader.get(),
                            p = u.popoverTooltipBody.get();
                        return a().createElement(
                            'div',
                            { className: o()(ke.base, ke[`base__${d}`]) },
                            a().createElement(
                                'div',
                                { className: ke.titleWrapper },
                                a().createElement(O.C, {
                                    title: u.title.get(),
                                    isGlowVisible: g,
                                    from: c,
                                    to: m,
                                    className: ke.title,
                                    classNames: { counterGlow: ke.counterGlow },
                                }),
                                E && a().createElement(ue, { onClick: n.resetFilter }),
                            ),
                            a().createElement(
                                'div',
                                { className: ke.filters },
                                u.isSearchEnabled.get() &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(ye, {
                                            value: u.searchString.get(),
                                            onChange: n.search,
                                            className: ke.search,
                                            placeholder: u.searchPlaceholder.get(),
                                            tooltipHeader: u.searchTooltipHeader.get(),
                                            tooltipBody: u.searchTooltipBody.get(),
                                        }),
                                        d === l.Barracks && a().createElement('div', { className: ke.separator }),
                                    ),
                                _.label && a().createElement('div', { className: ke.filterLabel }, _.label),
                                a().createElement(N, {
                                    id: _.id,
                                    label: _.label,
                                    type: _.type,
                                    hasDiscount: _.hasDiscount,
                                    filters: u.filters.get(),
                                    toggleProps: { type: s.L.ghost },
                                    onClick: n.updateFilter,
                                }),
                                u.isPopoverEnabled.get() &&
                                    a().createElement(
                                        i.i,
                                        {
                                            header: null != A ? A : void 0,
                                            body: null != p ? p : void 0,
                                            isEnabled: Boolean(A || p),
                                        },
                                        a().createElement(
                                            'div',
                                            { className: ke.popupButtonWrapper },
                                            a().createElement(Y, {
                                                isHighlighted: u.isPopoverHighlighted.get(),
                                                hasDiscountAlert: u.hasDiscountAlert.get(),
                                                popoverDirection: e,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Le = ({ popoverDirection: e }) =>
                        a().createElement(
                            H,
                            { options: { rootId: R.views.lobby.crew.widgets.FilterPanelWidget('resId') } },
                            a().createElement(Se, { popoverDirection: e }),
                        );
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
                u.d(t, { HZ: () => n, v$: () => a });
                const n = 'crewPerkGf',
                    a = 'tankman';
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
            5287: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
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
                    innerShadow: 'TankmanIcon_innerShadow_c6',
                };
            },
            9426: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'TankmanSkill_base_84',
                    base__big: 'TankmanSkill_base__big_a0',
                    bg: 'TankmanSkill_bg_f9',
                    icon: 'TankmanSkill_icon_1b',
                    icon__irrelevant: 'TankmanSkill_icon__irrelevant_50',
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
                var a = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, n] = deferred[i], r = !0, o = 0; o < t.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, u, n];
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
        (__webpack_require__.j = 587),
        (() => {
            var e = { 587: 0, 3: 0, 595: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, o, s] = u,
                        i = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(u); i < r.length; i++)
                        (a = r[i]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(12));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
