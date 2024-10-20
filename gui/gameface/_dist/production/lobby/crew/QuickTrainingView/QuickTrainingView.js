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
                    onMouseLeave: p,
                    onClick: F,
                }) => {
                    const D = (0, o.useRef)(null),
                        b = (0, o.useState)(u),
                        B = b[0],
                        v = b[1],
                        h = (0, o.useState)(!1),
                        f = h[0],
                        w = h[1],
                        y = (0, o.useState)(!1),
                        k = y[0],
                        S = y[1],
                        L = (0, o.useCallback)(() => {
                            c || (D.current && (D.current.focus(), v(!0)));
                        }, [c]),
                        x = (0, o.useCallback)(
                            (e) => {
                                B && null !== D.current && !D.current.contains(e.target) && v(!1);
                            },
                            [B],
                        ),
                        T = (0, o.useCallback)(
                            (e) => {
                                c || (F && F(e));
                            },
                            [c, F],
                        ),
                        M = (0, o.useCallback)(
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
                        I = (0, o.useCallback)(
                            (e) => {
                                c || (C && C(e), w(!1));
                            },
                            [c, C],
                        ),
                        O = (0, o.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, a.G)(_), A && A(e), u && L(), w(!0));
                            },
                            [c, _, A, L, u],
                        ),
                        P = (0, o.useCallback)(
                            (e) => {
                                c || (p && p(e), w(!1));
                            },
                            [c, p],
                        ),
                        H = r()(
                            s.Z.base,
                            s.Z[`base__${n}`],
                            {
                                [s.Z.base__disabled]: c,
                                [s.Z[`base__${t}`]]: t,
                                [s.Z.base__focus]: B,
                                [s.Z.base__highlightActive]: f,
                                [s.Z.base__firstHover]: k,
                            },
                            d,
                        ),
                        W = r()(s.Z.state, s.Z.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, o.useEffect)(() => {
                            v(u);
                        }, [u]),
                        i().createElement(
                            'div',
                            {
                                ref: D,
                                className: H,
                                onMouseEnter: M,
                                onMouseMove: N,
                                onMouseUp: I,
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
                                { className: W },
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
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
            280: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => l });
                var n = u(6179),
                    r = u.n(n),
                    a = u(6483),
                    o = u.n(a),
                    i = u(3649),
                    s = u(5287);
                const l = ({ binding: e, text: t = '', classMix: u, alignment: a = i.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : r().createElement(
                              n.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  r().createElement(
                                      'div',
                                      { className: o()(s.Z.base, u), key: `${t}-${l}` },
                                      (0, i.Uw)(t, a, e).map((e, t) =>
                                          r().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
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
                var n = u(6179),
                    r = u.n(n),
                    a = u(6536),
                    o = u(3495),
                    i = u(1043),
                    s = u(5262),
                    l = u(3138);
                const c = (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(o.Y),
                        u = (0, n.useState)(t),
                        c = u[0],
                        d = u[1],
                        m = (0, n.useCallback)((e, t) => {
                            const u = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(t);
                            d(Object.assign({ width: u, height: n }, (0, s.T)(u, n, i.j)));
                        }, []);
                    (0, a.Z)(() => {
                        engine.on('clientResized', m);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', m), [m]);
                    const _ = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return r().createElement(o.Y.Provider, { value: _ }, e);
                });
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
                        p = i.extraLargeHeight,
                        F = i.largeHeight,
                        D = i.mediumHeight,
                        b = i.smallHeight,
                        B = i.extraSmallHeight,
                        v = { extraLarge: p, large: F, medium: D, small: b, extraSmall: B };
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
                            if (u.extraLargeHeight && p) return t;
                            if (u.largeHeight && F) return t;
                            if (u.mediumHeight && D) return t;
                            if (u.smallHeight && b) return t;
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
                    m = u(4179),
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
                            p = (0, _.useRef)(null),
                            F = (0, _.useRef)(null),
                            D = (0, _.useState)(window.decorator && window.decorator.directionType),
                            b = D[0],
                            B = D[1],
                            v = (0, _.useCallback)(() => {
                                d.$.playClick(), s.O.view.sendEvent.close();
                            }, []),
                            h = (0, _.useCallback)(() => {
                                d.$.playHighlight();
                            }, []),
                            f = a()(g.Z.arrow, g.Z[`arrow${A[b]}`]);
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
                                        if (t === C.current || t === F.current) return;
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
                                [C, F, u],
                            ),
                            y = (0, _.useCallback)(
                                () => (
                                    s.O.view.freezeTextureBeforeResize(),
                                    (0, i.v)(() => {
                                        if (p.current) {
                                            const e = p.current.scrollWidth,
                                                t = p.current.scrollHeight;
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
                                { className: g.Z.base, ref: p },
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
                                                    onMouseEnter: h,
                                                    ref: F,
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
                    r = u(4179),
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
                    const p = (0, a.useRef)(null),
                        F = (0, a.useCallback)(() => {
                            if ((0, r.wU)()) return (0, r.SW)();
                            p.current && (0, r.P3)(t, c, p.current, u, d, m);
                        }, [t, c, m, u, d]);
                    return o().createElement(
                        'div',
                        s(
                            {
                                ref: p,
                                onClick:
                                    ((D = E.props.onClick),
                                    (e) => {
                                        A && (F(), _ && _(e), D && D(e));
                                    }),
                            },
                            C,
                        ),
                        E,
                    );
                    var D;
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
                    r = u(4179),
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
                            p = void 0 === C ? 0 : C,
                            F = e.isEnabled,
                            D = void 0 === F || F,
                            b = e.targetId,
                            B = void 0 === b ? 0 : b,
                            v = e.onShow,
                            h = e.onHide,
                            f = (function (e, t) {
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
                                    (s(u, p, { isMouseEvent: !0, on: !0, arguments: i(r) }, y),
                                    v && v(),
                                    (w.current.isVisible = !0));
                            }, [u, p, r, y, v]),
                            S = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        s(u, p, { on: !1 }, y),
                                        w.current.isVisible && h && h(),
                                        (w.current.isVisible = !1);
                                }
                            }, [u, p, y, h]),
                            L = (0, a.useCallback)((e) => {
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
                                document.addEventListener('wheel', L, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', L, { capture: !0 }),
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
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(k, E ? 100 : 400)),
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
                                p = (0, a.useState)(() => _(s, l, d)),
                                F = p[0],
                                D = p[1];
                            return (
                                (0, a.useEffect)(() => {
                                    E.current ? D(_(A, l, d)) : (E.current = !0);
                                }, [d, A, l]),
                                (0, a.useEffect)(() => {
                                    C(s);
                                }, [s]),
                                (0, a.useEffect)(
                                    () => () => {
                                        F.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [F],
                                ),
                                o().createElement(u.Provider, { value: F }, c)
                            );
                        },
                        () => (0, a.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
                'use strict';
                u.r(t), u.d(t, { mouse: () => i, onResize: () => a });
                var n = u(2472),
                    r = u(1176);
                const a = (0, n.E)('clientResized'),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const i = (function () {
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
                                        i = o[t]((e) => u([e, 'outside']));
                                    function s(e) {
                                        u([e, 'inside']);
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
                        displayStatusIs: () => f,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => h,
                        getScale: () => A,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => B,
                        isFocused: () => D,
                        pxToRem: () => C,
                        remToPx: () => p,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => b,
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
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
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
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function D() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function h() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(r.W).reduce(
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
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(6179);
                const r = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
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
            2039: (e, t, u) => {
                'use strict';
                u.d(t, { b: () => r });
                var n = u(6179);
                const r = (e) => {
                    (0, n.useEffect)(e, []);
                };
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
                let n;
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function a(e) {
                    return e.replace(/-/g, '_');
                }
                u.d(t, { BN: () => a, Eg: () => i, Uw: () => E, uF: () => r, v2: () => n, z4: () => o }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(n || (n = {}));
                const o = (e) => e.replace(/&nbsp;/g, ' '),
                    i = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    s = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    l = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    c = (e, t, u = n.left) => e.split(t).reduce(u === n.left ? s : l, []),
                    d = (() => {
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
                    _ = (e, t = n.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return m.includes(u)
                            ? d(e)
                            : ((e, t = n.left) => {
                                  let u = [];
                                  const r =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = o(e);
                                  return c(a, /( )/, t).forEach((e) => (u = u.concat(c(e, r, n.left)))), u;
                              })(e, t);
                    },
                    E = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : _(e, t)));
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
                u.d(t, {
                    B3: () => l,
                    Z5: () => o,
                    B0: () => s,
                    c9: () => D,
                    wU: () => h,
                    ry: () => p,
                    Eu: () => F,
                    SW: () => B,
                    P3: () => v,
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
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(5521),
                    E = u(3138);
                const g = ['args'];
                function A(e, t, u, n, r, a, o) {
                    try {
                        var i = e[a](o),
                            s = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(s) : Promise.resolve(s).then(n, r);
                }
                const C = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        u = arguments;
                                    return new Promise(function (n, r) {
                                        var a = e.apply(t, u);
                                        function o(e) {
                                            A(a, n, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(a, n, r, o, i, 'throw', e);
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
                    D = (e, t) => {
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
                                })(t, g);
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
                    b = () => D(s.CLOSE),
                    B = () => D(s.POP_OVER, { on: !1 }),
                    v = (e, t, u, n, r = R.invalid('resId'), a) => {
                        const o = E.O.view.getViewGlobalPosition(),
                            i = u.getBoundingClientRect(),
                            l = i.x,
                            c = i.y,
                            d = i.width,
                            m = i.height,
                            _ = {
                                x: E.O.view.pxToRem(l) + o.x,
                                y: E.O.view.pxToRem(c) + o.y,
                                width: E.O.view.pxToRem(d),
                                height: E.O.view.pxToRem(m),
                            };
                        D(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: C(_),
                            on: !0,
                            args: a,
                        });
                    },
                    h = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    f = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var w = u(7572);
                const y = r.instance,
                    k = {
                        DataTracker: a.Z,
                        ViewModel: w.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (e) => D(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: B,
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            D(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: v,
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, b);
                        },
                        handleViewEvent: D,
                        onBindingsReady: p,
                        onLayoutReady: F,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: h,
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
                        ClickOutsideManager: y,
                        SystemLocale: o,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = k;
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
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(o || (o = {}));
            },
            4828: (e, t, u) => {
                'use strict';
                u.d(t, { AB: () => m, D9: () => n, eX: () => a, sC: () => o, tL: () => r, x3: () => l });
                const n = 'crew',
                    r = 2e3;
                let a, o, i, s, l, c, d;
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
                        e.DocumentChange = 'document_change_dialog';
                    })(i || (i = {})),
                    (function (e) {
                        (e.PremiumTooltip = 'personal_file_view_premium_tooltip'),
                            (e.MstlTooltip = 'personal_file_view_mstl_tooltip');
                    })(s || (s = {})),
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
                    })(d || (d = {}));
                const m = {
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
                u.d(t, { Jp: () => d, Sr: () => _ });
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
                    m = (e) => {
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
                    },
                    _ = (e, t) => {
                        const u = m(e),
                            o = u[0],
                            i = u[1],
                            s = t.action,
                            l = t.timeLimit,
                            c = (function (e, t) {
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
                                onShow: () => o(s || r.Z0),
                                onHide: () => i(Object.assign({ action: s || r.Z0, timeLimit: l || r.sx }, c)),
                            }),
                            [s, l, c, o, i],
                        );
                    };
            },
            7003: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => Qe,
                        Bar: () => Ze,
                        DefaultScroll: () => Ye,
                        Direction: () => Me,
                        defaultSettings: () => Ne,
                        useHorizontalScrollApi: () => Ie,
                    });
                var r = {};
                u.r(r), u.d(r, { Area: () => At, Bar: () => _t, Default: () => gt, useVerticalScrollApi: () => Je });
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
                    p = (e) => {
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
                    F = ['children'];
                const D = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, F);
                    return i().createElement(a.ZN, null, i().createElement(p, u, t));
                };
                var b = u(493),
                    B = u.n(b),
                    v = u(1856),
                    h = u(3403),
                    f = u(7030),
                    w = u(7160);
                let y;
                !(function (e) {
                    (e.Info = 'info'), (e.Error = 'error');
                })(y || (y = {}));
                var k = u(7078),
                    S = u(6373),
                    L = u(2056);
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
                const T = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = i().createElement('div', { className: u }, e);
                    if (t.header || t.body) return i().createElement(S.i, t, n);
                    const r = t.contentId,
                        a = t.args,
                        o = null == a ? void 0 : a.contentId;
                    return r || o
                        ? i().createElement(L.u, x({}, t, { contentId: r || o }), n)
                        : i().createElement(k.t, t, n);
                };
                var M = u(8045);
                const N = 'ExtendedText_base_71',
                    I = 'ExtendedText_base__zeroPadding_25',
                    O = 'ExtendedText_base__isTruncationAvailable_5b',
                    P = 'ExtendedText_truncated_97',
                    H = 'ExtendedText_truncated__hide_31',
                    W = 'ExtendedText_unTruncated_b8';
                var G = u(3649);
                let j, U, z;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(j || (j = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(U || (U = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(z || (z = {}));
                const X = { [z.NBSP]: j.NoBreakSymbol, [z.ZWNBSP]: j.NoBreakSymbol, [z.NEW_LINE]: j.LineBreak },
                    $ = {
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
                    V = 'renderers_noBreakWrapper_10',
                    q = 'renderers_lineBreak_b5',
                    Z = 'renderers_newLine_bd',
                    K = (e) => ({ color: `#${e}` }),
                    Y = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? $[n]
                                ? i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: $[n] },
                                      e,
                                  )
                                : i().createElement('span', { key: u, 'data-block-type': t.blockType, style: K(n) }, e)
                            : i().createElement('span', { key: u, 'data-block-type': t.blockType }, e);
                    },
                    Q = {
                        [j.Word]: Y,
                        [j.NoBreakSymbol]: Y,
                        [j.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: u }, e)),
                            ),
                        [j.LineBreak]: ({ key: e }) =>
                            i().createElement('span', { key: e, 'data-block-type': j.LineBreak, className: q }),
                        [j.NewLine]: ({ elementList: e, key: t }) =>
                            i().createElement('span', { key: t, 'data-block-type': j.NewLine, className: Z }, e),
                        [j.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            i().createElement('span', { key: t, 'data-block-type': j.NoBreakWrapper, className: V }, e),
                    },
                    J = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((r, a) => {
                                const o = `${u}_${a}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        u = J(e, Q[t], o);
                                    n.push(...u);
                                } else n.push(t({ elementList: [r], textBlock: e, key: o }));
                            }),
                            n
                        );
                    },
                    ee = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            n = e.blockType,
                                            r = Q[n],
                                            a = J(e, r, t);
                                        return (
                                            n === j.NoBreakWrapper
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
                    te = (e, t, u, n) => {
                        let r = t.exec(e),
                            a = 0;
                        for (; r; ) a !== r.index && u(e.slice(a, r.index)), n(r), (a = t.lastIndex), (r = t.exec(e));
                        a !== e.length && u(e.slice(a));
                    },
                    ue = (e) => {
                        const t = /[\s\u002d]/g;
                        let u = t.exec(e);
                        if (!u) return [e];
                        const n = [];
                        let r = 0;
                        for (; u; ) n.push(e.slice(r, t.lastIndex)), (r = t.lastIndex), (u = t.exec(e));
                        return r !== e.length && n.push(e.slice(r)), n;
                    },
                    ne = (e, t = '') => {
                        const u = [];
                        return (
                            te(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    u.push({ blockType: j.Word, colorTag: t, childList: ue(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = X[n.charAt(0)];
                                    r === j.LineBreak
                                        ? u.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: j.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: j.NewLine,
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
                    re = (e, t, u = '') => {
                        const n = [];
                        return (
                            te(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...ne(e, u));
                                },
                                (e) => {
                                    const r = e[1],
                                        a = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof a || 'number' == typeof a
                                        ? n.push(...ne(String(a), u))
                                        : n.push({ blockType: j.Binding, colorTag: u, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    ae = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === j.NoBreakWrapper) e.childList.push(n), u.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && u.push(e),
                                u.push({ blockType: j.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && u.push(t), u;
                    },
                    oe = (e, t = {}) => {
                        if (!e) return [];
                        const u = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === j.NoBreakSymbol
                                        ? ((u = !0), t.push(...ae(t.pop(), e)))
                                        : (u ? t.push(...ae(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const u = [];
                                return (
                                    te(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            u.push(...re(e, t));
                                        },
                                        (e) => {
                                            u.push(...re(e[2], t, e[1]));
                                        },
                                    ),
                                    u
                                );
                            })((0, G.Eg)((0, G.z4)(e)), t),
                        );
                        return ee(u);
                    },
                    ie = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    se = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    le = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = se(e, t),
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
                    ce = (e, t, u, n, r, a) => {
                        let o = -1,
                            s = null;
                        for (let l = u; l >= 0; l--) {
                            const u = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === j.LineBreak || c === j.NewLine || c === j.Binding) continue;
                            const d = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = le(u, n, r),
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
                                    _ = ce(e, m, e.length - 1, n, r, a),
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
                    de = (e, t, u, n = '...') => {
                        const r = [...t],
                            a = e.current;
                        if (!a) return [r, !1];
                        const o = u.height,
                            i = u.width,
                            s = a.lastElementChild;
                        if (!ie(s, o) && se(s, i) <= 0) return [r, !1];
                        const l = a.children,
                            c = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const r = u + Math.ceil(0.5 * (n - u));
                                    ie(e[r], t) ? (n = r - 1) : (u = r + 1);
                                }
                                return u - 1;
                            })(l, o);
                        if (c < 0) return [r, !1];
                        const d = ce(l, r, c, i, n.length, n),
                            m = d[0],
                            _ = d[1];
                        return _ && (r.splice(m, 1, _), r.splice(m + 1)), [r, !0];
                    },
                    me = i().memo(
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
                                p = (0, o.useMemo)(() => oe(e, n), [n, e]),
                                F = (0, o.useMemo)(() => {
                                    if (r && A.isTruncated)
                                        return {
                                            args: { text: e, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: s,
                                        };
                                }, [n, r, s, e, A.isTruncated]),
                                D = (0, o.useCallback)(
                                    (e) => {
                                        (E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height);
                                        const t = de(_, p, E.current, m),
                                            n = t[0],
                                            r = t[1];
                                        C({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), u && u(r);
                                    },
                                    [u, m, p],
                                ),
                                b = (0, o.useMemo)(() => ({ justifyContent: c, alignContent: d }), [d, c]);
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
                                        const t = new M.Z((e) => n(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [n, u, e]);
                                })(_, D, a),
                                i().createElement(
                                    'div',
                                    { className: l()(N, t, I, a && O), style: b },
                                    i().createElement('div', { className: W, ref: _ }, p),
                                    i().createElement(
                                        T,
                                        { tooltipArgs: F },
                                        i().createElement(
                                            'div',
                                            { className: l()(P, !A.isTruncateFinished && a && H), style: b },
                                            A.isTruncateFinished && a ? A.elementList : p,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    _e = {
                        base: 'Tip_base_be',
                        base__info: 'Tip_base__info_8e',
                        base__error: 'Tip_base__error_6a',
                        closeBtn: 'Tip_closeBtn_1a',
                        newLine: 'Tip_newLine_07',
                    },
                    Ee = (0, o.forwardRef)(({ id: e, text: t, type: u = y.Info, onClose: n }, r) =>
                        i().createElement(
                            'div',
                            { ref: r },
                            i().createElement(
                                'div',
                                { className: l()(_e.base, _e[`base__${u}`]) },
                                i().createElement(me, {
                                    text: t,
                                    binding: { newLine: i().createElement('div', { className: _e.newLine }) },
                                }),
                                u === y.Info &&
                                    i().createElement('div', { className: _e.closeBtn, onClick: () => n(e) }),
                            ),
                        ),
                    ),
                    ge = (0, o.memo)(Ee);
                var Ae = u(5499),
                    Ce = u(3215),
                    pe = u(4598),
                    Fe = u(9480),
                    De = u(3946);
                const be = (0, Ce.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign({}, e.primitives(['nationName', 'vehicleName', 'tankmanName']), {
                                    tips: e.array('tips'),
                                    booksList: e.array('booksList'),
                                    freeXpData: e.object('freeXpData'),
                                    learningData: e.object('learningData'),
                                }),
                                u = (0, De.Om)(() => t.learningData.get().personalXpAmount > 0),
                                n = (0, De.Om)(() =>
                                    Fe.G(t.booksList.get(), (e) => e.selectedCount > 0 && 'personalBook' !== e.type),
                                ),
                                r = (0, De.Om)((e) => Fe.U2(t.booksList.get(), e), { equals: pe.jv }),
                                a = (0, De.Om)(() => Fe.UI(t.tips.get(), (e) => Object.assign({}, e)), {
                                    equals: pe.jv,
                                });
                            return Object.assign({}, t, {
                                computes: { hasFreeXpSelected: u, hasSelectedBooks: n, getBook: r, getTips: a },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onClose: e.createCallbackNoArgs('onClose'),
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
                    Be = be[0],
                    ve = be[1],
                    he = (e, t, u) => (u < e ? e : u > t ? t : u),
                    fe = [];
                function we(e) {
                    const t = (0, o.useRef)(e);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, o.useCallback)((...e) => (0, t.current)(...e), fe)
                    );
                }
                function ye(e, t, u = []) {
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
                var ke = u(7727),
                    Se = u(3138);
                function Le(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return xe(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return xe(e, t);
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
                function xe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                var Te = u(4489);
                let Me;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Me || (Me = {}));
                const Ne = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Re = ({
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
                            return he(r, a, u);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? Ne : l,
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
                                            for (var n, r = Le(t(e).values()); !(n = r()).done; ) (0, n.value)(...u);
                                        };
                                    return (0, o.useMemo)(() => ({ on: u, off: n, trigger: r }), []);
                                })(),
                                E = (0, Te.f)(
                                    () => {
                                        Se.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, f.useSpring)(() => ({
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
                                p = (0, o.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = A.scrollPosition.get(),
                                            a = (null != (n = A.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, t * u + a + r);
                                    },
                                    [A.scrollPosition],
                                ),
                                F = (0, o.useCallback)(
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
                                D = (0, o.useCallback)(
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
                                            a = p(t, e, n);
                                        F(a);
                                    },
                                    [F, p, c.step],
                                ),
                                b = (0, o.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && D(n(e)),
                                            d.current && _.trigger('mouseWheel', e, A.scrollPosition, t(d.current));
                                    },
                                    [A.scrollPosition, D, _],
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
                                                (F(i(e, A.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [F, A.scrollPosition.goal],
                                ),
                                h = we(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = i(e, A.scrollPosition.goal);
                                    t !== A.scrollPosition.goal && F(t, { immediate: !0 }),
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
                                    handleMouseWheel: b,
                                    applyScroll: F,
                                    applyStepTo: D,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: C,
                                    animationScroll: A,
                                    recalculateContent: h,
                                    events: { on: _.on, off: _.off },
                                }),
                                [A.scrollPosition, F, D, _.off, _.on, h, b, C, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Ie = Re({
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
                        getDirection: (e) => (e.deltaY > 1 ? Me.Next : Me.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Oe = 'HorizontalBar_base_49',
                    Pe = 'HorizontalBar_base__nonActive_82',
                    He = 'HorizontalBar_leftButton_5f',
                    We = 'HorizontalBar_rightButton_03',
                    Ge = 'HorizontalBar_track_0d',
                    je = 'HorizontalBar_thumb_fd',
                    Ue = 'HorizontalBar_rail_32',
                    ze = 'disable',
                    Xe = { pending: !1, offset: 0 },
                    $e = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ve = () => {},
                    qe = (e, t) => Math.max(20, e.offsetWidth * t),
                    Ze = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = $e, onDrag: n = Ve }) => {
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
                                    l = he(0, 1, o / (r - n)),
                                    m = (t.offsetWidth - qe(t, i)) * l;
                                (u.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (a.current && s.current && c.current && d.current) {
                                            if (0 === e)
                                                return a.current.classList.add(ze), void s.current.classList.remove(ze);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return a.current.classList.remove(ze), void s.current.classList.add(ze);
                                            var t, u;
                                            a.current.classList.remove(ze), s.current.classList.remove(ze);
                                        }
                                    })(m);
                            },
                            p = we(() => {
                                (() => {
                                    const t = d.current,
                                        u = c.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && t && n && u)) return;
                                    const o = Math.min(1, n / a);
                                    (t.style.width = `${qe(u, o)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === o ? r.current.classList.add(Pe) : r.current.classList.remove(Pe));
                                })(),
                                    C();
                            });
                        (0, o.useEffect)(() => (0, v.v)(p)),
                            (0, o.useEffect)(
                                () =>
                                    (0, v.v)(() => {
                                        const t = () => {
                                            C();
                                        };
                                        let u = Ve;
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
                                    }),
                                [e],
                            ),
                            (0, o.useEffect)(() => {
                                if (!E.pending) return;
                                const t = (t) => {
                                        var u;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const a = c.current,
                                            o = d.current;
                                        if (!r || !a || !o) return;
                                        const i = t.screenX - E.offset - a.getBoundingClientRect().x,
                                            s = (i / a.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, s),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: i, contentOffset: s });
                                    },
                                    u = () => {
                                        window.removeEventListener('mousemove', t), A(Xe);
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
                        const F = ye((t) => e.applyStepTo(t), m, [e]),
                            D = F[0],
                            b = F[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const B = (e) => {
                            e.target.classList.contains(ze) || (0, ke.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()(Oe, t.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()(He, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ze) ||
                                        0 !== e.button ||
                                        ((0, ke.G)('play'), D(Me.Next));
                                },
                                onMouseUp: b,
                                ref: a,
                                onMouseEnter: B,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()(Ge, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if (((0, ke.G)('play'), t.target === n))
                                                A({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = d.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? Me.Prev : Me.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: B,
                                },
                                i().createElement('div', { ref: d, className: l()(je, t.thumb) }),
                                i().createElement('div', { className: l()(Ue, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()(We, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ze) ||
                                        0 !== e.button ||
                                        ((0, ke.G)('play'), D(Me.Prev));
                                },
                                onMouseUp: b,
                                ref: s,
                                onMouseEnter: B,
                            }),
                        );
                    }),
                    Ke = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ye = ({
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
                                return Object.assign({}, e, { base: l()(Ke.base, e.base) });
                            }, [n]),
                            _ = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: l()(Ke.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Ke.defaultScrollArea, r) },
                                i().createElement(Qe, { className: s, api: _, classNames: a }, e),
                            ),
                            i().createElement(Ze, { getStepByRailClick: c, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    Qe = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, o.useEffect)(() => (0, v.v)(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(Ke.base, t) },
                            i().createElement(
                                'div',
                                {
                                    className: l()(Ke.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: l()(Ke.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (Qe.Bar = Ze),
                    (Qe.Default = Ye),
                    (Qe.SeniorityAwards = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, o.useEffect)(() => (0, v.v)(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(Ke.base, t) },
                            i().createElement(
                                'div',
                                { className: l()(Ke.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                                i().createElement(
                                    'div',
                                    { className: l()(Ke.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    ));
                const Je = Re({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Me.Next : Me.Prev),
                    }),
                    et = 'VerticalBar_base_f3',
                    tt = 'VerticalBar_base__nonActive_42',
                    ut = 'VerticalBar_topButton_d7',
                    nt = 'VerticalBar_bottomButton_06',
                    rt = 'VerticalBar_track_df',
                    at = 'VerticalBar_thumb_32',
                    ot = 'VerticalBar_rail_43',
                    it = 'disable',
                    st = () => {},
                    lt = { pending: !1, offset: 0 },
                    ct = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    dt = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    mt = (e, t) => Math.max(20, e.offsetHeight * t),
                    _t = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = ct, onDrag: n = st }) => {
                        const r = (0, o.useRef)(null),
                            a = (0, o.useRef)(null),
                            s = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            d = (0, o.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, o.useState)(lt),
                            E = _[0],
                            g = _[1],
                            A = (0, o.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            C = we(() => {
                                const t = d.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && t && u)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (t.style.height = `${mt(u, o)}px`),
                                    t.classList.add(at),
                                    r.current &&
                                        (1 === o ? r.current.classList.add(tt) : r.current.classList.remove(tt)),
                                    o
                                );
                            }),
                            p = we(() => {
                                const t = c.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    l = he(0, 1, o / (r - n)),
                                    m = (t.offsetHeight - mt(t, i)) * l;
                                (u.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (a.current && s.current && c.current && d.current) {
                                            if (0 === e)
                                                return a.current.classList.add(it), void s.current.classList.remove(it);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return a.current.classList.remove(it), void s.current.classList.add(it);
                                            var t, u;
                                            a.current.classList.remove(it), s.current.classList.remove(it);
                                        }
                                    })(m);
                            }),
                            F = we(() => {
                                dt(e, () => {
                                    C(), p();
                                });
                            });
                        (0, o.useEffect)(() => (0, v.v)(F)),
                            (0, o.useEffect)(() => {
                                const t = () => {
                                    dt(e, () => {
                                        p();
                                    });
                                };
                                let u = st;
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
                            }, [e]),
                            (0, o.useEffect)(() => {
                                if (!E.pending) return;
                                const t = (t) => {
                                        dt(e, (u) => {
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
                                    },
                                    u = () => {
                                        window.removeEventListener('mousemove', t), A(lt);
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
                        const D = ye((t) => e.applyStepTo(t), m, [e]),
                            b = D[0],
                            B = D[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const h = (e) => {
                            e.target.classList.contains(it) || (0, ke.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()(et, t.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()(ut, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(it) ||
                                        0 !== e.button ||
                                        ((0, ke.G)('play'), b(Me.Next));
                                },
                                ref: a,
                                onMouseEnter: h,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()(rt, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if (((0, ke.G)('play'), t.target === n))
                                                A({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        dt(e, (n) => {
                                                            if (!n) return;
                                                            const r = u(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(a);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? Me.Prev : Me.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                i().createElement('div', { ref: d, className: t.thumb }),
                                i().createElement('div', { className: l()(ot, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()(nt, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(it) ||
                                        0 !== e.button ||
                                        ((0, ke.G)('play'), b(Me.Prev));
                                },
                                onMouseUp: B,
                                ref: s,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Et = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    gt = ({
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
                                return Object.assign({}, e, { base: l()(Et.base, e.base) });
                            }, [n]),
                            _ = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: l()(Et.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Et.area, r) },
                                i().createElement(At, { className: a, classNames: s, api: _ }, e),
                            ),
                            i().createElement(_t, { getStepByRailClick: c, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    At = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, o.useEffect)(() => (0, v.v)(n.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(Et.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Et.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                At.Default = gt;
                const Ct = { Vertical: r, Horizontal: n };
                var pt = u(5521),
                    Ft = u(4179);
                const Dt = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function bt(e = pt.n.NONE, t = Dt, u = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== pt.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (Se.O.view.isEventHandled()) return;
                                Se.O.view.setEventHandled(), t(n), u && n.stopPropagation();
                            }
                        }
                    }, [t, e, u]);
                }
                const Bt = {
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
                    vt = [
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
                function ht() {
                    return (
                        (ht =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ht.apply(this, arguments)
                    );
                }
                class ft extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, ke.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, ke.G)(this.props.soundClick);
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
                                })(e, vt)),
                            E = l()(Bt.base, Bt[`base__${a}`], Bt[`base__${r}`], null == o ? void 0 : o.base),
                            g = l()(Bt.icon, Bt[`icon__${a}`], Bt[`icon__${r}`], null == o ? void 0 : o.icon),
                            A = l()(Bt.glow, null == o ? void 0 : o.glow),
                            C = l()(Bt.caption, Bt[`caption__${a}`], null == o ? void 0 : o.caption),
                            p = l()(Bt.goto, null == o ? void 0 : o.goto);
                        return i().createElement(
                            'div',
                            ht(
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
                            'info' !== a && i().createElement('div', { className: Bt.shine }),
                            i().createElement('div', { className: g }, i().createElement('div', { className: A })),
                            i().createElement('div', { className: C }, t),
                            n && i().createElement('div', { className: p }, n),
                        );
                    }
                }
                ft.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const wt = ({ onClick: e }) =>
                        i().createElement(ft, {
                            onClick: e,
                            caption: R.strings.crew.common.navigation.aboutCrew(),
                            type: 'info',
                        }),
                    yt = 'common_close_0e',
                    kt = ({ onClick: e, label: t = R.strings.menu.viewHeader.closeBtn.label() }) =>
                        i().createElement(ft, {
                            onClick: e,
                            classNames: { base: yt },
                            caption: t,
                            type: 'close',
                            side: 'right',
                        }),
                    St = 'TopButtons_base_ef',
                    Lt = 'TopButtons_leftButtons_9e',
                    xt = 'TopButtons_rightButtons_33',
                    Tt = i().memo(function ({
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
                            { className: l()(St, a) },
                            i().createElement(
                                'div',
                                { className: l()(Lt, null == o ? void 0 : o.leftButtons) },
                                e && u && i().createElement(ft, { onClick: u, caption: e, type: 'back' }),
                            ),
                            i().createElement(
                                'div',
                                { className: l()(xt, null == o ? void 0 : o.rightButtons) },
                                n && i().createElement(wt, { onClick: n }),
                                r && i().createElement(kt, { onClick: r, label: t }),
                            ),
                        );
                    });
                let Mt, Nt, Rt;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(Mt || (Mt = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(Nt || (Nt = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(Rt || (Rt = {}));
                const It = ({ format: e, value: t }) => {
                        const u = ((e, t = 'integral') => {
                            let u;
                            u = 'gold' === t ? Ft.B3.GOLD : Ft.B3.INTEGRAL;
                            return void 0 === e ? '' : Ft.Z5.getNumberFormat(e, u);
                        })(t, e);
                        return u ? i().createElement('span', null, u) : null;
                    },
                    Ot = {
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
                    },
                    Pt = ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: u,
                        type: n,
                        isEnough: r,
                        value: a,
                        discountValue: o,
                        showPlus: s,
                        stockBackgroundName: c = Rt.Red,
                    }) => {
                        const d = l()(Ot.value, Ot[`value__${n}`], !r && Ot.value__notEnough),
                            m = l()(Ot.icon, Ot[`icon__${n}-${u}`]),
                            _ = l()(Ot.stock, o && Ot.stock__indent, t && Ot.stock__interactive),
                            E = s && a > 0 && '+',
                            g = l()(Ot.base, Ot[`base__${u}`]);
                        return i().createElement(
                            'span',
                            { className: g },
                            i().createElement(
                                'span',
                                { className: d },
                                E,
                                i().createElement(It, { value: a, format: n === Nt.gold ? 'gold' : 'integral' }),
                            ),
                            i().createElement('span', { className: m }),
                            e &&
                                i().createElement(
                                    'span',
                                    { className: _ },
                                    i().createElement('span', {
                                        className: Ot.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${c})` },
                                    }),
                                    Boolean(o) && o,
                                ),
                        );
                    };
                Pt.defaultProps = { isEnough: !0 };
                const Ht = i().memo(Pt);
                var Wt = u(8018);
                const Gt = {
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
                    jt = (function () {
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
                let Ut;
                !(function (e) {
                    (e.None = 'none'), (e.Disabled = 'disabled'), (e.Selected = 'selected');
                })(Ut || (Ut = {}));
                let zt = !1;
                const Xt = (0, o.memo)(function ({
                        icon: e,
                        title: t,
                        description: u,
                        additionalDescription: n,
                        headerContent: r,
                        bottomContent: a,
                        cardState: o = Ut.None,
                        hasError: s = !1,
                        hoverSound: c = '',
                        withFullWidthOption: d = !1,
                        onCardMouseEnter: m,
                        onCardSelect: _,
                    }) {
                        const E = ve().controls,
                            g = o === Ut.Disabled,
                            A = o === Ut.Selected;
                        return i().createElement(
                            'div',
                            {
                                className: l()(g ? Gt.base__disabled : Gt.base, Gt[`base__${o}`]),
                                onMouseEnter: () => {
                                    g ||
                                        A ||
                                        (c ? (0, ke.G)(c) : ke.$.playHighlight(),
                                        (0, ke.G)(Wt.gO.SHOP_INFO),
                                        jt(() => {
                                            (zt = !0), m();
                                        }, 300));
                                },
                                onMouseLeave: () => {
                                    g ||
                                        A ||
                                        jt(() => {
                                            zt && (E.onCardMouseLeave(), (zt = !1));
                                        }, 100);
                                },
                                onClick: () => {
                                    g || (jt.cancel(), ke.$.playClick(), !A && (zt = !0), _());
                                },
                            },
                            i().createElement(
                                'div',
                                { className: l()(Gt.activeLayer, A && Gt.activeLayer__visible) },
                                i().createElement(
                                    'div',
                                    {
                                        className: l()(Gt.bottomOption, d && Gt.bottomOption__fullWidth),
                                        onClick: (e) => e.stopPropagation(),
                                    },
                                    a,
                                ),
                            ),
                            r,
                            i().createElement(
                                'div',
                                { className: Gt.iconContainer },
                                i().createElement('div', {
                                    className: Gt.icon,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.crewBooks.books.s180x135.$dyn(e)})`,
                                    },
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: Gt.description },
                                i().createElement('div', { className: Gt.title }, t),
                                u,
                                i().createElement('div', { className: Gt.additionalDescription }, n),
                            ),
                            (A || s) &&
                                i().createElement(
                                    'div',
                                    { className: Gt.bottomContainer },
                                    i().createElement('div', { className: Gt.bottomGlow }),
                                    s && i().createElement('div', { className: Gt.errorIcon }),
                                ),
                        );
                    }),
                    $t = 'BookCard_vehicleName_e6',
                    Vt = 'CardBottomContent_base_eb',
                    qt = 'CardBottomContent_optionCounterBtn_48',
                    Zt = 'CardBottomContent_optionCounterValue_41',
                    Kt = 'CardBottomContent_optionCounterBtn__plus_47',
                    Yt = 'CardBottomContent_optionCounterBtn__plusDisabled_ad',
                    Qt = 'CardBottomContent_optionCounterBtn__minus_0f',
                    Jt = ({ canAddBook: e, selectedCount: t, handleBookSubtract: u, handleBookAdded: n }) =>
                        i().createElement(
                            'div',
                            { className: Vt },
                            i().createElement('div', { className: l()(qt, Qt), onClick: u }),
                            i().createElement('div', { className: Zt }, t),
                            i().createElement('div', { className: l()(qt, e ? Kt : Yt), onClick: n }),
                        );
                var eu = u(3457);
                const tu = 'CardHeaderContent_buySection_4a',
                    uu = 'CardHeaderContent_btnBuyHover_8b',
                    nu = 'CardHeaderContent_btnBuyHover__hover_4f',
                    ru = 'CardHeaderContent_btnBuy_bb',
                    au = 'CardHeaderContent_booksCounter_6c',
                    ou = 'CardHeaderContent_booksCounterIcon_1b',
                    iu = 'CardHeaderContent_booksCounterValue_49',
                    su = ({ withBuyBtn: e, amount: t, handleBuyClick: u }) => {
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
                                    { className: tu },
                                    i().createElement('div', { className: l()(uu, a && nu) }),
                                    i().createElement(
                                        S.i,
                                        { body: R.strings.crew_books.tooltip.buyManual() },
                                        i().createElement(
                                            eu.u5,
                                            {
                                                size: n === m.cJ.Large ? eu.qE.small : eu.qE.extraSmall,
                                                mixClass: ru,
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
                                { className: au },
                                i().createElement('div', { className: ou }),
                                i().createElement('div', { className: iu }, t),
                            ),
                        );
                    },
                    lu = R.strings.crew_books.tooltip,
                    cu = (0, h.Pi)(({ bookIndex: e }) => {
                        var t;
                        const u = ve(),
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
                            p = 0 === E,
                            F = g < E,
                            D = ((e, t, u) => (e || t ? Ut.Disabled : u > 0 ? Ut.Selected : Ut.None))(p, C, g),
                            b = D === Ut.Selected;
                        return i().createElement(
                            S.i,
                            { isEnabled: p, body: A ? lu.outOfStockCanBuy() : lu.outOfStock() },
                            i().createElement(
                                'div',
                                null,
                                i().createElement(Xt, {
                                    icon: l,
                                    hasError: C,
                                    cardState: D,
                                    title: i().createElement(me, { text: c, binding: { nation: a } }),
                                    description: i().createElement(me, {
                                        text: d,
                                        binding: {
                                            xp: i().createElement(Ht, { type: Nt.xp, size: Mt.small, value: _ }),
                                        },
                                    }),
                                    additionalDescription: i().createElement(me, {
                                        text: m,
                                        binding: {
                                            nation: a,
                                            vehicleName: i().createElement(
                                                'div',
                                                { className: $t },
                                                n.vehicleName.get(),
                                            ),
                                        },
                                    }),
                                    headerContent: i().createElement(su, {
                                        withBuyBtn: A,
                                        amount: E,
                                        handleBuyClick: (e) => {
                                            e.stopPropagation(), r.onBuyBook(s);
                                        },
                                    }),
                                    bottomContent: i().createElement(Jt, {
                                        canAddBook: F,
                                        selectedCount: g,
                                        handleBookAdded: () => {
                                            F && (ke.$.playClick(), r.onBookSelected(s, g + 1));
                                        },
                                        handleBookSubtract: () => {
                                            ke.$.playClick(), r.onBookSelected(s, g - 1);
                                        },
                                    }),
                                    onCardMouseEnter: () => r.onBookMouseEnter(s),
                                    onCardSelect: () => {
                                        const e = b ? 0 : 1;
                                        r.onBookSelected(s, e);
                                    },
                                }),
                            ),
                        );
                    });
                u(3368);
                const du = ['value', 'className', 'autoFocus', 'onKeyDown'];
                function mu() {
                    return (
                        (mu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        mu.apply(this, arguments)
                    );
                }
                let _u = !0;
                const Eu = (0, o.memo)(function (e) {
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
                            })(e, du);
                        return i().createElement(
                            'input',
                            mu(
                                {
                                    type: 'text',
                                    ref: (e) => {
                                        e &&
                                            ((t = e),
                                            r && e.focus(),
                                            _u && e.setSelectionRange(e.value.length, e.value.length));
                                    },
                                    className: n,
                                    value: u,
                                    onKeyDown: (e) => {
                                        const u = e.currentTarget,
                                            n = u.value.length,
                                            o = u.selectionStart || 0;
                                        (_u = o === n && e.which !== pt.n.DELETE),
                                            (e.which !== pt.n.DELETE && e.which !== pt.n.BACKSPACE) ||
                                                1 !== n ||
                                                setTimeout(() => {
                                                    u.setSelectionRange(n, n);
                                                }),
                                            e.which === pt.n.ESCAPE && t && r && t.blur(),
                                            null == a || a(e);
                                    },
                                },
                                o,
                            ),
                        );
                    }),
                    gu = 'ExperienceStepper_base_ba',
                    Au = 'ExperienceStepper_base__focused_f9',
                    Cu = 'ExperienceStepper_currency_62',
                    pu = 'ExperienceStepper_inputWrapper_4b',
                    Fu = 'ExperienceStepper_input_3b',
                    Du = 'ExperienceStepper_currencyIcon_e8',
                    bu = 'ExperienceStepper_controls_15',
                    Bu = 'ExperienceStepper_btn_00',
                    vu = 'ExperienceStepper_btn__scaled_53',
                    hu = 'ExperienceStepper_btnIncrement_fe',
                    fu = 'ExperienceStepper_btnIncrement__disabled_b8',
                    wu = 'ExperienceStepper_btnDecrement_fb',
                    yu = 'ExperienceStepper_btnDecrement__disabled_3e',
                    ku = 'perk',
                    Su = 'percent',
                    Lu = 'play',
                    xu = /\d+/,
                    Tu = () => (0, ke.G)('highlight'),
                    Mu = ({ value: e, maxValue: t, isActive: u }) => {
                        const n = ve().controls,
                            r = e < t,
                            a = e > 1,
                            s = (() => {
                                const e = (0, o.useState)(Se.O.view.getScale()),
                                    t = e[0],
                                    u = e[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        const e = () => {
                                            u(Se.O.view.getScale());
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
                            })(),
                            c = (0, m.GS)(),
                            d = c.mediaSize,
                            _ = c.mediaWidth,
                            E = (d < m.cJ.Large && 2 === s) || _ >= m.fd.Large,
                            g = l()(Bu, hu, !r && fu, E && vu),
                            A = l()(Bu, wu, !a && yu, E && vu),
                            C = (0, o.useRef)(null);
                        return i().createElement(
                            L.u,
                            { contentId: R.views.lobby.crew.tooltips.ExperienceStepperTooltip('resId') },
                            i().createElement(
                                'div',
                                { ref: C, className: gu },
                                i().createElement(
                                    'div',
                                    { className: Cu },
                                    i().createElement(
                                        'div',
                                        { className: pu },
                                        i().createElement(Eu, {
                                            value: e,
                                            autoFocus: u,
                                            className: Fu,
                                            onBlur: () => {
                                                var e;
                                                return null == (e = C.current) ? void 0 : e.classList.remove(Au);
                                            },
                                            onFocus: () => {
                                                var e;
                                                return u && (null == (e = C.current) ? void 0 : e.classList.add(Au));
                                            },
                                            onKeyDown: (e) => {
                                                let t,
                                                    u = 0;
                                                (t =
                                                    e.ctrlKey || e.which === pt.n.PAGE_UP || e.which === pt.n.PAGE_DOWN
                                                        ? ku
                                                        : Su),
                                                    (e.which !== pt.n.ARROW_UP && e.which !== pt.n.PAGE_UP) || !r
                                                        ? (e.which !== pt.n.ARROW_DOWN && e.which !== pt.n.PAGE_DOWN) ||
                                                          !a ||
                                                          (u = -1)
                                                        : (u = 1),
                                                    t && 0 !== u && n.onFreeXpUpdated(t, u);
                                            },
                                            onChange: (e) => {
                                                var u;
                                                let r = Number(
                                                    null == (u = xu.exec(e.currentTarget.value)) ? void 0 : u[0],
                                                );
                                                !Number.isInteger(r) && n.onFreeXpManualInput(1),
                                                    r > t ? (r = t) : r < 1 && (r = 1),
                                                    n.onFreeXpManualInput(r);
                                            },
                                            onWheel: (e) => {
                                                e.deltaY > 0 ? n.onFreeXpUpdated(Su, 1) : n.onFreeXpUpdated(Su, -1);
                                            },
                                        }),
                                    ),
                                    i().createElement('div', { className: Du }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: bu },
                                    i().createElement('div', {
                                        className: g,
                                        onMouseEnter: Tu,
                                        onClick: (e) =>
                                            r &&
                                            (({ ctrlKey: e }) => {
                                                (0, ke.G)(Lu), n.onFreeXpUpdated(e ? ku : Su, 1);
                                            })(e),
                                    }),
                                    i().createElement('div', {
                                        className: A,
                                        onMouseEnter: Tu,
                                        onClick: (e) =>
                                            a &&
                                            (({ ctrlKey: e }) => {
                                                (0, ke.G)(Lu), n.onFreeXpUpdated(e ? ku : Su, -1);
                                            })(e),
                                    }),
                                ),
                            ),
                        );
                    },
                    Nu = 'FreeXpCard_discount_48',
                    Ru = 'FreeXpCard_discountValue_ca',
                    Iu = 'FreeXpCard_bottomStepper_4a',
                    Ou = (0, h.Pi)(() => {
                        const e = ve(),
                            t = e.model,
                            u = e.controls,
                            n = t.freeXpData.get(),
                            r = n.playerXp,
                            a = n.discountSize,
                            o = n.currentXpValue,
                            s = n.exchangeRate,
                            l = a > 1,
                            c = ((e, t, u) => (e || t < 1 ? Ut.Disabled : u > 0 ? Ut.Selected : Ut.None))(
                                n.isEligibleToApplyFreeXp,
                                r,
                                o,
                            ),
                            d = c === Ut.Selected;
                        return i().createElement(Xt, {
                            withFullWidthOption: !0,
                            icon: 'freeXp',
                            cardState: c,
                            title: R.strings.crew_books.card.freeExp.title(),
                            description: R.strings.crew_books.card.freeExp.mainText(),
                            additionalDescription: i().createElement(
                                L.u,
                                {
                                    contentId: R.views.lobby.crew.tooltips.QuickTrainingDiscountTooltip('resId'),
                                    isEnabled: l,
                                },
                                i().createElement(
                                    'div',
                                    null,
                                    i().createElement(me, {
                                        text: R.strings.crew_books.card.freeExp.additionalText(),
                                        binding: {
                                            freeXp: i().createElement(Ht, {
                                                type: Nt.freeXP,
                                                size: Mt.small,
                                                value: 1,
                                            }),
                                            xp: i().createElement(Ht, {
                                                type: Nt.xp,
                                                size: Mt.small,
                                                value: s,
                                                isDiscount: l,
                                            }),
                                        },
                                    }),
                                ),
                            ),
                            headerContent: l
                                ? i().createElement(
                                      'div',
                                      { className: Nu },
                                      i().createElement(me, {
                                          text: R.strings.crew_books.card.freeExp.discountValue(),
                                          binding: { discount: a },
                                          classMix: Ru,
                                      }),
                                  )
                                : null,
                            bottomContent: i().createElement(
                                'div',
                                { className: Iu },
                                i().createElement(Mu, { value: o, maxValue: r, isActive: d }),
                            ),
                            onCardSelect: () => u.onFreeXpSelected(!d),
                            onCardMouseEnter: u.onFreeXpMouseEnter,
                            hoverSound: Wt.gO.CREW_FREEXP_HIGHLIGHT,
                        });
                    });
                var Pu = u(280);
                const Hu = 'SectionFooter_base_82',
                    Wu = 'SectionFooter_base__visible_e5',
                    Gu = 'SectionFooter_labelContainer_68',
                    ju = 'SectionFooter_confirmLabel_53',
                    Uu = 'SectionFooter_confirmLabelMemberName_23',
                    zu = 'SectionFooter_confirmBtn_5d',
                    Xu = (0, h.Pi)(() => {
                        const e = (0, m.GS)().mediaSize,
                            t = ve(),
                            u = t.model,
                            n = t.controls,
                            r = u.learningData.get(),
                            a = u.computes.hasFreeXpSelected(),
                            o = u.computes.hasSelectedBooks(),
                            s = e < m.cJ.Medium ? Mt.small : Mt.big;
                        return i().createElement(
                            'div',
                            { className: l()(Hu, (o || a) && Wu) },
                            i().createElement(
                                'div',
                                { className: Gu },
                                o &&
                                    i().createElement(Pu.z, {
                                        classMix: ju,
                                        text:
                                            e >= m.cJ.Small && a
                                                ? R.strings.crew_books.confirm.crewLabelSeparated()
                                                : R.strings.crew_books.confirm.crewLabel(),
                                        binding: {
                                            xpValue: i().createElement(Ht, {
                                                type: Nt.xp,
                                                size: s,
                                                value: r.crewXpAmount,
                                                isEnough: !0,
                                            }),
                                        },
                                    }),
                                a &&
                                    i().createElement(Pu.z, {
                                        classMix: ju,
                                        text: o
                                            ? R.strings.crew_books.confirm.personalExtraLabel()
                                            : R.strings.crew_books.confirm.personalLabel(),
                                        binding: {
                                            memberName: i().createElement(
                                                'div',
                                                { className: Uu },
                                                u.tankmanName.get(),
                                            ),
                                            xpValue: i().createElement(Ht, {
                                                type: Nt.xp,
                                                size: s,
                                                value: r.personalXpAmount,
                                                isEnough: !0,
                                            }),
                                        },
                                    }),
                            ),
                            i().createElement(
                                eu.u5,
                                { size: eu.qE.medium, mixClass: zu, onClick: n.onLearn },
                                R.strings.crew_books.buttons.learn(),
                            ),
                            i().createElement(
                                eu.u5,
                                { type: eu.L$.secondary, size: eu.qE.medium, mixClass: zu, onClick: n.onCancel },
                                R.strings.crew_books.buttons.cancel(),
                            ),
                        );
                    }),
                    $u = 'CrewBooksSection_base_33',
                    Vu = 'CrewBooksSection_base__centered_be',
                    qu = 'CrewBooksSection_mainContentWrapper_2a',
                    Zu = 'CrewBooksSection_mainContent_91',
                    Ku = 'CrewBooksSection_title_fe',
                    Yu = 'CrewBooksSection_divider_f1',
                    Qu = 'CrewBooksSection_divider__bottom_d6',
                    Ju = 'CrewBooksSection_cards_7f',
                    en = 'CrewBooksSection_cardsScrollContent_8f',
                    tn = 'CrewBooksSection_cardsScrollBar_c4',
                    un = (0, h.Pi)(() => {
                        const e = (0, m.GS)(),
                            t = e.mediaSize,
                            u = e.remScreenWidth,
                            n = e.remScreenHeight,
                            r = Je(),
                            a = ve(),
                            o = a.model,
                            s = a.controls,
                            c = t === m.cJ.ExtraLarge || (u > m.fd.Large && n < m.Aq.Large);
                        var d;
                        return (
                            (d = () => {
                                o.computes.hasFreeXpSelected() || o.computes.hasSelectedBooks()
                                    ? s.cancelWithEsc()
                                    : s.closeWithEsc();
                            }),
                            bt(pt.n.ESCAPE, d),
                            i().createElement(
                                'div',
                                { className: l()($u, c && Vu) },
                                i().createElement(Tt, { onAboutClick: s.onAbout, onCloseClick: s.onClose }),
                                i().createElement(
                                    'div',
                                    { className: qu },
                                    i().createElement(
                                        'div',
                                        { className: Zu },
                                        i().createElement('div', { className: Ku }, R.strings.crew_books.page.title()),
                                        i().createElement('div', { className: Yu }),
                                        i().createElement(
                                            Ct.Vertical.Area.Default,
                                            { barClassNames: { base: tn }, scrollClassNames: { content: en }, api: r },
                                            i().createElement(
                                                'div',
                                                { className: Ju },
                                                i().createElement(Ou, null),
                                                o.booksList
                                                    .get()
                                                    .map((e, t) => i().createElement(cu, { key: t, bookIndex: t })),
                                            ),
                                        ),
                                        i().createElement('div', { className: l()(Yu, Qu) }),
                                        i().createElement(Xu, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    nn = 'QuickTrainingViewApp_base_b9',
                    rn = 'QuickTrainingViewApp_flagWrapper_b7',
                    an = 'QuickTrainingViewApp_flag_54',
                    on = 'QuickTrainingViewApp_leftPanelSection_7e',
                    sn = 'QuickTrainingViewApp_pageTips_41';
                function ln(e, t, u, n, r, a, o) {
                    try {
                        var i = e[a](o),
                            s = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(s) : Promise.resolve(s).then(n, r);
                }
                const cn = (0, h.Pi)(() => {
                    const e = new WeakMap(),
                        t = (0, f.useSpringRef)(),
                        u = ve(),
                        n = u.model,
                        r = u.controls,
                        a = n.computes.getTips(),
                        s = (0, f.useTransition)(a, {
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
                                                        ln(a, n, r, o, i, 'next', e);
                                                    }
                                                    function i(e) {
                                                        ln(a, n, r, o, i, 'throw', e);
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
                            { className: nn },
                            i().createElement(
                                'div',
                                { className: rn },
                                i().createElement('div', {
                                    className: an,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.crew.flags.${n.nationName.get()})`,
                                    },
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: on },
                                i().createElement(Ae.O, null),
                                i().createElement(
                                    'div',
                                    { className: sn },
                                    s((t, u) =>
                                        i().createElement(
                                            f.animated.div,
                                            { style: t },
                                            i().createElement(ge, {
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
                            i().createElement(un, null),
                        )
                    );
                });
                engine.whenReady.then(() => {
                    B().render(
                        i().createElement(Be, null, i().createElement(D, null, i().createElement(cn, null))),
                        document.getElementById('root'),
                    );
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
                        }, [e, t, n]),
                        d = t === l.c204x256;
                    return i().createElement(
                        'div',
                        { style: c, className: r()(s.Z.base, s.Z[`base__${t}`], u) },
                        d && i().createElement('div', { className: s.Z.innerShadow }),
                    );
                };
            },
            8485: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => l, d: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(8271),
                    o = u(6179),
                    i = u.n(o),
                    s = u(9426);
                let l;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(l || (l = {}));
                const c = i().memo(function ({ icon: e, type: t, size: u }) {
                    const n = (0, o.useMemo)(() => {
                            let e;
                            return (
                                (e =
                                    t === a.W.Possible || t === a.W.New
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
                    return i().createElement(
                        'div',
                        { className: r()(s.Z.base, s.Z[`base__${u}`]) },
                        i().createElement('div', { className: s.Z.bg, style: n }),
                        c && i().createElement('div', { className: r()(s.Z.icon, s.Z[`icon__${t}`]), style: c }),
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
                        p = void 0 === C || C,
                        F = (function (e, t) {
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
                        l().createElement(a.u5, m({ type: E, size: A, mixClass: c.Z.button }, F), s),
                        l().createElement('div', { className: c.Z.overlay }),
                        p && l().createElement('div', { className: c.Z.indicator }),
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
            8018: (e, t, u) => {
                'use strict';
                u.d(t, { Gc: () => a, gO: () => r, wP: () => n });
                u(3649);
                R.strings.common.percentValue();
                let n;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(n || (n = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let r;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(r || (r = {}));
                const a = (e, t = !1, u = null) => {
                    const n = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (u ? n.$dyn(`${u}Case`) : n).$dyn(e);
                };
            },
            5499: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => Fn });
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
                            onWotPlusClick: e.createCallbackNoArgs('buttonsBar.onWotPlusClick'),
                            onDogClick: e.createCallbackNoArgs('onDogClick'),
                            onDogMoreInfoClick: e.createCallbackNoArgs('onDogMoreInfoClick'),
                        }),
                    ),
                    _ = m[0],
                    E = m[1];
                var g = u(6483),
                    A = u.n(g),
                    C = u(2056);
                let p;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(p || (p = {}));
                const F = 'ButtonsBar_base_9c',
                    D = 'ButtonsBar_button_d1',
                    b = 'ButtonsBar_button__crewOperaions_70',
                    B = 'ButtonsBar_button__crewBooks_b4',
                    v = 'ButtonsBar_button__toggle_64',
                    h = 'ButtonsBar_acceleratedTraining_94',
                    f = 'ButtonsBar_acceleratedTraining__icon_9b',
                    w = 'ButtonsBar_acceleratedTraining__label_ad';
                var y = u(3457),
                    k = u(9987),
                    S = u(6373),
                    L = u(3649);
                const x = 'CrewBookButton_base_da',
                    T = 'CrewBookButton_button_ee',
                    M = 'CrewBookButton_icon_11',
                    N = 'CrewBookButton_discount_6b',
                    I = 'CrewBookButton_counter_5d',
                    O = (0, a.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const u = E(),
                            n = u.model,
                            a = u.controls,
                            o = n.crewBooks.get(),
                            i = a.onCrewBooksClick;
                        return r().createElement(
                            S.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, L.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: o.totalAmount,
                                }),
                            },
                            r().createElement(
                                'div',
                                { id: 'crew_book_button', className: A()(x, e) },
                                r().createElement(
                                    y.u5,
                                    { type: y.L$.primary, mixClass: T, disabled: o.isDisabled || t, onClick: i },
                                    r().createElement('div', { className: M }),
                                ),
                                o.newAmount > 0 &&
                                    r().createElement(
                                        'div',
                                        { className: I },
                                        r().createElement(k.A, { value: o.newAmount }),
                                    ),
                                o.hasDiscount && r().createElement('div', { className: N }),
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
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, H);
                    return r().createElement(
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
                const X = 'CrewOperationsButton_base_e3',
                    $ = 'CrewOperationsButton_button_8e',
                    V = 'CrewOperationsButton_icon_0c',
                    q = 'CrewOperationsButton_autoReturnIcon_f0',
                    Z = (0, a.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const u = E().model,
                            n = ((e) => {
                                const t = (0, z.Jp)(c.D9);
                                return (u) => t({ action: c.eX.Click, parentScreen: e, item: u });
                            })(u.computes.getUiLoggingParentScreen()),
                            a = u.crewOperations.get();
                        return r().createElement(
                            'div',
                            { id: 'crew_operations_button', className: A()(X, e) },
                            r().createElement(
                                G,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !t,
                                    onClick: () => n(c.x3.CrewOperationsButton),
                                },
                                r().createElement(
                                    S.i,
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
                                            r().createElement('div', { className: V }),
                                        ),
                                        a.isAutoReturnOn && r().createElement('div', { className: q }),
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
                const ue = (0, n.memo)(({ type: e, state: t, isDisabled: u, onClick: a, classMix: o }) => {
                        const i = (0, n.useMemo)(() => {
                            const u = t === p.Disabled ? p.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${u})`,
                            };
                        }, [e, t]);
                        return r().createElement(
                            'div',
                            { className: A()(Y, o) },
                            r().createElement(
                                K.C,
                                {
                                    type: y.L$.primary,
                                    isActive: t === p.On,
                                    disabled: u || t === p.Disabled,
                                    className: Q,
                                    onClick: a,
                                },
                                r().createElement(
                                    'div',
                                    { className: J },
                                    r().createElement('div', { className: ee, style: i }),
                                ),
                            ),
                        );
                    }),
                    ne = R.strings.crew.acceleratedTraining,
                    re = (0, a.Pi)(({ isWidgetDisabled: e }) => {
                        const t = E(),
                            u = t.model,
                            n = t.controls,
                            a = u.isAcceleratedTraining.get(),
                            o = u.wotPlus.get(),
                            i = n.onWotPlusClick;
                        return r().createElement(
                            'div',
                            { className: F },
                            r().createElement(Z, { classMix: A()(D, b), isWidgetDisabled: e }),
                            r().createElement(O, { classMix: A()(D, B), isWidgetDisabled: e }),
                            o.state !== p.Hidden &&
                                r().createElement(
                                    C.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(ue, {
                                            type: te.WotPlus,
                                            state: o.state,
                                            isDisabled: e || o.isDisabled,
                                            onClick: i,
                                            classMix: A()(D, v),
                                        }),
                                    ),
                                ),
                            a &&
                                r().createElement(
                                    S.i,
                                    { header: ne.tooltip.header(), body: ne.tooltip.body() },
                                    r().createElement(
                                        'div',
                                        { className: h },
                                        r().createElement('div', { className: f }),
                                        r().createElement('div', { className: w }, ne.label()),
                                    ),
                                ),
                        );
                    }),
                    ae = 'CrewWidgetApp_base_cc',
                    oe = 'CrewWidgetApp_buttonsBar_e5',
                    ie = 'CrewWidgetApp_slotsList_ee';
                var se = u(7727),
                    le = u(7030),
                    ce = u(8018),
                    de = u(7160);
                const me = 'BaseSlot_base_97',
                    _e = 'BaseSlot_base__hovered_61',
                    Ee = 'BaseSlot_base__inactive_7e',
                    ge = 'BaseSlot_hoverGlow_de',
                    Ae = 'BaseSlot_hoverGlow__visible_f4',
                    Ce = 'BaseSlot_selectedGlow_25',
                    pe = 'BaseSlot_selectedGlow__visible_2f',
                    Fe = 'BaseSlot_hover_e9',
                    De = 'BaseSlot_hover__visible_1f',
                    be = 'BaseSlot_disabled_67',
                    Be = ({
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
                                className: A()(me, (c || u) && !s.isCurrentLayoutHangar && _e, (u || !o) && Ee),
                                onClick: e,
                                onMouseEnter: () => {
                                    o && !u && (se.$.playHighlight(), d(!0));
                                },
                                onMouseLeave: () => {
                                    d(!1);
                                },
                            },
                            !s.isCurrentLayoutMemberChange && r().createElement('div', { className: A()(Ce, u && pe) }),
                            r().createElement('div', { className: A()(ge, _ && Ae) }),
                            r().createElement('div', { className: A()(Fe, m && De) }),
                            a && r().createElement('div', { className: be }),
                            t,
                        );
                    },
                    ve = ({
                        startState: e,
                        endState: t,
                        layoutInfo: u,
                        isPaused: a,
                        children: o,
                        className: i,
                        isTankmanMode: s,
                    }) => {
                        const l = (0, le.useSpring)(
                                () => ({ from: e, to: t, config: { duration: 300, easing: de.qb }, pause: a }),
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
                        return r().createElement(le.animated.div, { className: i, style: c }, o);
                    },
                    he = 'DogSlot_base_8f',
                    fe = 'DogSlot_icon_ba',
                    we = 'DogSlot_container_63',
                    ye = 'DogSlot_roleAndName_c9',
                    ke = 'DogSlot_role_5c',
                    Se = 'DogSlot_name_9c',
                    Le = 'DogSlot_btnDetails_b7',
                    xe = { transform: 'translateX(0rem)' },
                    Te = (0, a.Pi)(({ isDisabled: e, layoutInfo: t }) => {
                        const u = E(),
                            a = u.model,
                            o = u.controls,
                            i = a.nation.get(),
                            s = o.onDogMoreInfoClick,
                            l = (0, n.useCallback)(() => {
                                !e && (0, se.G)(ce.gO.RUDY);
                            }, [e]),
                            c = (0, n.useCallback)(
                                (t) => {
                                    t.stopPropagation(), !e && s();
                                },
                                [s, e],
                            ),
                            d = (0, le.useSpring)(
                                () => ({
                                    from: xe,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: de.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
                            )[0],
                            m = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(i);
                        return r().createElement(
                            S.i,
                            { header: m.header(), body: m.body() },
                            r().createElement(
                                'div',
                                null,
                                r().createElement(
                                    Be,
                                    { onClick: l, isDisabled: e, isEnabledForMouse: !1, layoutInfo: t },
                                    r().createElement(
                                        ve,
                                        {
                                            startState: xe,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            isPaused: !1,
                                            className: he,
                                            isTankmanMode: !1,
                                        },
                                        r().createElement(le.animated.div, { className: fe, style: d }),
                                        r().createElement(
                                            'div',
                                            { className: we },
                                            r().createElement(
                                                'div',
                                                { className: ye },
                                                r().createElement('div', { className: ke }),
                                                r().createElement(
                                                    'div',
                                                    { className: Se },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(i).name(),
                                                ),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: Le },
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
                var Me = u(4179);
                const Ne = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: r = 0,
                        args: a,
                        isEnabled: o = !0,
                        onMouseDown: i,
                    }) => {
                        const s = (0, n.useCallback)(() => {
                                (0, Me.c9)(Me.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: r,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: a,
                                }),
                                    se.$.playYes();
                            }, [a, t, u, r]),
                            l = (0, n.useCallback)(() => {
                                (0, Me.c9)(Me.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: r,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, r]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === U.RIGHT)(e) && s();
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
                    Re = ['children'];
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
                const Oe = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Re);
                        return r().createElement(
                            Ne,
                            Ie({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Pe = 'ChangeCrewButton_base_0f',
                    He = 'ChangeCrewButton_base__inactive_77',
                    We = 'ChangeCrewButton_normalState_07',
                    Ge = 'ChangeCrewButton_normalState__hide_db',
                    je = 'ChangeCrewButton_hoverState_68',
                    Ue = 'ChangeCrewButton_hoverState__show_89',
                    ze = (0, a.Pi)(({ isSelected: e, isLocked: t, mainRole: u, isFemale: a }) => {
                        const o = E().model,
                            i = (0, n.useState)(!1),
                            s = i[0],
                            l = i[1],
                            d = (0, z.Sr)(c.D9, {
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
                                              (0, L.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, ce.Gc)(u, a, ce.wP.Objective),
                                              }),
                                          ],
                                [t, a, u],
                            ),
                            _ = m[0],
                            g = m[1];
                        return r().createElement(
                            S.i,
                            {
                                header: _,
                                body: g,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            r().createElement(
                                'div',
                                {
                                    className: A()(Pe, (t || e) && He),
                                    onMouseEnter: () => {
                                        d.onShow(), t || e || (se.$.playHighlight(), l(!0));
                                    },
                                    onMouseLeave: () => {
                                        d.onHide(), l(!1);
                                    },
                                },
                                r().createElement('div', { className: A()(We, s && Ge) }),
                                r().createElement('div', { className: A()(je, (e || s) && Ue) }),
                            ),
                        );
                    }),
                    Xe = 'CrewSlot_base_ac',
                    $e = 'CrewSlot_changeCrew_02',
                    Ve = 'CrewSlot_content_5b',
                    qe = 'CrewSlot_content__withChangeCrewButton_4e',
                    Ze = 'CrewSlot_warningHighlight_ff',
                    Ke = 'CrewSlot_selectHighlight_50',
                    Ye = 'CrewSlot_selectHighlightInTankmanMode_37';
                var Qe = u(7077);
                const Je = 'AcceleratedTrainingIcon_base_4f',
                    et = 'AcceleratedTrainingIcon_icon_45',
                    tt = (0, n.memo)(({ classMix: e }) =>
                        r().createElement(
                            S.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            },
                            r().createElement(
                                'div',
                                { className: A()(Je, e) },
                                r().createElement('div', { className: et }),
                            ),
                        ),
                    ),
                    ut = 'SpecializationAndName_base_ef',
                    nt = 'SpecializationAndName_roleWrapper_87',
                    rt = 'SpecializationAndName_role_55',
                    at = 'SpecializationAndName_role__withGap_35',
                    ot = 'SpecializationAndName_percent_e6',
                    it = 'SpecializationAndName_percent__untrained_1b',
                    st = 'SpecializationAndName_acceleratedTrainingIcon_35',
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
                const dt = (0, a.Pi)(
                        ({
                            roles: e,
                            specializationLevel: t = 0,
                            tankmanID: u,
                            isUntrained: n,
                            name: a,
                            isAcceleratedTrainingAvailable: o,
                        }) => {
                            const i = E().model,
                                l = (0, z.Sr)(c.D9, {
                                    item: c.x3.MstlTooltip,
                                    action: c.eX.Viewed,
                                    parentScreen: i.computes.getUiLoggingParentScreen(),
                                });
                            return r().createElement(
                                'div',
                                { className: ut },
                                r().createElement(
                                    C.u,
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
                                    r().createElement(
                                        'div',
                                        { className: nt },
                                        s.UI(e, (e, t) =>
                                            r().createElement('div', {
                                                key: `role__${e}`,
                                                className: A()(rt, t > 0 && at),
                                                style: {
                                                    backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                                },
                                            }),
                                        ),
                                        t > 0 &&
                                            r().createElement(
                                                'div',
                                                { className: A()(ot, n && it) },
                                                (0, L.uF)(R.strings.common.percentValue(), { value: t }),
                                            ),
                                    ),
                                ),
                                o && r().createElement(tt, { classMix: st }),
                                r().createElement('div', { className: lt }, a),
                            );
                        },
                    ),
                    mt = 'EmptySlotContent_base_77',
                    _t = 'EmptySlotContent_tankmanIcon_07',
                    Et = 'EmptySlotContent_icon_a8',
                    gt = 'EmptySlotContent_specialization_1f',
                    At = 'EmptySlotContent_specialization__disabled_3d',
                    Ct = 'EmptySlotContent_vehicle_55',
                    pt = { transform: 'translateX(0rem)', opacity: 1 },
                    Ft = { transform: 'translateX(-70rem)', opacity: 0 },
                    Dt = (0, n.memo)(
                        ({
                            roles: e,
                            layoutInfo: t,
                            vehicleName: u,
                            vehicleType: a,
                            isDisabled: o,
                            isSelected: i,
                            blinkStyle: l,
                            qtTankmanIconStyle: c,
                        }) => {
                            const d = (0, le.useSpring)(
                                    () => ({
                                        from: pt,
                                        to: Ft,
                                        config: { duration: 200, easing: de.ei },
                                        immediate: !0,
                                        pause: i,
                                    }),
                                    [i],
                                ),
                                m = d[0],
                                _ = d[1],
                                E = (0, n.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || _.start({ reset: !0, reverse: !0 });
                                }, [_, t]),
                                g = s.U2(e, 0) || '',
                                C = R.strings.crew_widget.vehicleWithName.$dyn((0, L.BN)(a)),
                                p = (0, L.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(g),
                                });
                            return r().createElement(
                                'div',
                                { className: mt, onMouseEnter: E, onMouseLeave: E },
                                r().createElement(
                                    'div',
                                    { className: _t },
                                    r().createElement(
                                        le.animated.div,
                                        { style: c },
                                        r().createElement(Qe.G, {
                                            name: 'empty',
                                            size: Qe.U.c100x60Barracks,
                                            classMix: Et,
                                        }),
                                        r().createElement(
                                            le.animated.div,
                                            { style: o ? void 0 : l },
                                            r().createElement(Qe.G, {
                                                name: 'emptyRed',
                                                size: Qe.U.c100x60Barracks,
                                                classMix: Et,
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: A()(gt, o && At) },
                                    r().createElement(dt, { tankmanID: 0, roles: e, name: p, isUntrained: !0 }),
                                ),
                                r().createElement(
                                    le.animated.div,
                                    { className: Ct, style: i ? void 0 : m },
                                    (0, L.uF)(C, { name: u }),
                                ),
                            );
                        },
                    );
                var bt = u(7078),
                    Bt = u(2603),
                    vt = u(5415);
                const ht = (e) => e.skills.length + e.newSkillsAmount + e.possibleSkillsAmount;
                var ft = u(8271),
                    wt = u(4385),
                    yt = u(9887),
                    kt = u.n(yt);
                const St = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Lt = (e) => e.includes('_') && ((e) => St.includes(e))(e.split('_').at(-1)),
                    xt = [vt.cJ.ExtraLarge, vt.cJ.Large, vt.cJ.Medium, vt.cJ.Small, vt.cJ.ExtraSmall],
                    Tt = (e, t) =>
                        Object.keys(e).reduce((u, n) => {
                            if (n in u) return u;
                            if (Lt(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in u) return u;
                                const a = xt.indexOf(t),
                                    o = (-1 !== a ? St.slice(a) : [])
                                        .map((e) => r + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    i = o ? e[o] : void 0;
                                return (u[r] = void 0 !== i ? i : e[r]), u;
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, t) => St.some((u) => void 0 !== t[`${e}_${u}`]))(n, e) ||
                                    (u[n] = r),
                                u
                            );
                        }, {}),
                    Mt = (e, t = Tt) => {
                        const u = (
                            (e, t = Tt) =>
                            (u) => {
                                const a = (0, vt.GS)().mediaSize,
                                    o = (0, n.useMemo)(() => t(u, a), [u, a]);
                                return r().createElement(e, o);
                            }
                        )(e, t);
                        return r().memo((t) =>
                            Object.keys(t).some((e) => Lt(e) && void 0 !== t[e])
                                ? r().createElement(u, t)
                                : r().createElement(e, t),
                        );
                    },
                    Nt = {
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
                    Rt = [
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
                function It() {
                    return (
                        (It =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        It.apply(this, arguments)
                    );
                }
                Object.keys(kt());
                const Ot = {
                        XL: { mt: Nt.mt__XL, mr: Nt.mr__XL, mb: Nt.mb__XL, ml: Nt.ml__XL },
                        LG: { mt: Nt.mt__LG, mr: Nt.mr__LG, mb: Nt.mb__LG, ml: Nt.ml__LG },
                        MDp: { mt: Nt.mt__MDp, mr: Nt.mr__MDp, mb: Nt.mb__MDp, ml: Nt.ml__MDp },
                        MD: { mt: Nt.mt__MD, mr: Nt.mr__MD, mb: Nt.mb__MD, ml: Nt.ml__MD },
                        SMp: { mt: Nt.mt__SMp, mr: Nt.mr__SMp, mb: Nt.mb__SMp, ml: Nt.ml__SMp },
                        SM: { mt: Nt.mt__SM, mr: Nt.mr__SM, mb: Nt.mb__SM, ml: Nt.ml__SM },
                        XS: { mt: Nt.mt__XS, mr: Nt.mr__XS, mb: Nt.mb__XS, ml: Nt.ml__XS },
                    },
                    Pt = (Object.keys(Ot), ['mt', 'mr', 'mb', 'ml']),
                    Ht = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Wt = Mt((e) => {
                        let t = e.className,
                            u = e.width,
                            a = e.height,
                            o = e.m,
                            i = e.mt,
                            s = void 0 === i ? o : i,
                            l = e.mr,
                            c = void 0 === l ? o : l,
                            d = e.mb,
                            m = void 0 === d ? o : d,
                            _ = e.ml,
                            E = void 0 === _ ? o : _,
                            g = e.column,
                            C = e.row,
                            p = e.flexDirection,
                            F = void 0 === p ? (g ? 'column' : C && 'row') || void 0 : p,
                            D = e.flexStart,
                            b = e.center,
                            B = e.flexEnd,
                            v = e.spaceBetween,
                            h = e.spaceAround,
                            f = e.justifyContent,
                            w =
                                void 0 === f
                                    ? (D ? 'flex-start' : b && 'center') ||
                                      (B && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (h && 'space-around') ||
                                      void 0
                                    : f,
                            y = e.alignItems,
                            k = void 0 === y ? (D ? 'flex-start' : b && 'center') || (B && 'flex-end') || void 0 : y,
                            S = e.alignSelf,
                            L = e.wrap,
                            x = e.flexWrap,
                            T = void 0 === x ? (L ? 'wrap' : void 0) : x,
                            M = e.grow,
                            N = e.shrink,
                            R = e.flex,
                            I = void 0 === R ? (M || N ? `${M ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : R,
                            O = e.style,
                            P = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Rt);
                        const W = (0, n.useMemo)(() => {
                                const e = { mt: s, mr: c, mb: m, ml: E },
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
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: I,
                                        alignSelf: S,
                                        display: F || k ? 'flex' : void 0,
                                        flexDirection: F,
                                        flexWrap: T,
                                        justifyContent: w,
                                        alignItems: k,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, a, s, c, m, E, O, I, S, F, T, w, k]),
                            G = W.computedStyle,
                            j = W.computedClassNames;
                        return r().createElement('div', It({ className: A()(Nt.base, ...j, t), style: G }, H), P);
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
                    Xt = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function $t() {
                    return (
                        ($t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        $t.apply(this, arguments)
                    );
                }
                Object.keys(kt());
                const Vt = Object.keys(Ut()),
                    qt = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Zt = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
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
                            'heading-H56': qt,
                            'heading-H36': qt,
                            'heading-H28': Zt,
                            'heading-H24': Zt,
                            'heading-H24R': Zt,
                            'heading-H22': Zt,
                            'heading-H20R': Zt,
                            'heading-H18': Zt,
                            'heading-H15': Kt,
                            'heading-H14': Kt,
                            'paragraph-P24': Zt,
                            'paragraph-P18': Zt,
                            'paragraph-P16': Zt,
                            'paragraph-P14': Kt,
                            'paragraph-P12': Kt,
                            'paragraph-P10': Kt,
                        }),
                    Jt =
                        (Object.keys(Qt),
                        (e) =>
                            e
                                ? ((e) => Vt.includes(e))(e)
                                    ? { colorClassName: zt[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    eu = Mt((e) => {
                        let t = e.text,
                            u = e.variant,
                            a = e.className,
                            o = e.color,
                            i = e.m,
                            s = e.mt,
                            l = void 0 === s ? i : s,
                            c = e.mr,
                            d = void 0 === c ? i : c,
                            m = e.mb,
                            _ = void 0 === m ? i : m,
                            E = e.ml,
                            g = void 0 === E ? i : E,
                            C = e.style,
                            p = e.format,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Xt);
                        const D = (0, n.useMemo)(() => {
                                const e = Jt(o),
                                    t = e.colorClassName,
                                    u = e.colorStyle,
                                    n = void 0 === u ? {} : u;
                                return { computedStyle: Object.assign({}, C, n), colorClassName: t };
                            }, [C, o]),
                            b = D.computedStyle,
                            B = D.colorClassName;
                        return r().createElement(
                            Wt,
                            $t(
                                {
                                    className: A()(zt.base, u && zt[u], B, a),
                                    style: b,
                                    mt: !0 === l ? Qt[u || 'paragraph-P16'].mt : l,
                                    mr: !0 === d ? Qt[u || 'paragraph-P16'].mr : d,
                                    mb: !0 === _ ? Qt[u || 'paragraph-P16'].mb : _,
                                    ml: !0 === g ? Qt[u || 'paragraph-P16'].ml : g,
                                },
                                F,
                            ),
                            void 0 !== p ? r().createElement(Gt.z, $t({}, p, { text: t })) : t,
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
                        return r().createElement(
                            S.i,
                            {
                                header: R.strings.crew_widget.tooltip.roleLevelIcon.header(),
                                body: R.strings.crew_widget.tooltip.roleLevelIcon.body(),
                            },
                            r().createElement(
                                'div',
                                { className: A()(tu.base, tu[`base__${t}`]) },
                                r().createElement('div', { className: tu.icon }),
                                r().createElement(
                                    'div',
                                    { className: tu.realLevel },
                                    r().createElement(eu, {
                                        text: n,
                                        format: { binding: { value: r().createElement(eu, { text: e }) } },
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
                    ru = 0.01,
                    au = (0, n.memo)(
                        ({
                            lastSkillLevel: e,
                            lastPossibleSkillLevel: t,
                            showAcceleratedTrainingIcon: u,
                            skillSize: a,
                            blinkStyle: o,
                        }) => {
                            const i = (0, n.useRef)(e),
                                s = (0, le.useSpring)(() => ({ from: { scale: 1 } })),
                                l = s[0],
                                c = s[1];
                            (0, n.useEffect)(() => {
                                t < 0 &&
                                    i.current !== e &&
                                    (c.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: de.Fs },
                                    }),
                                    (i.current = e));
                            }, [e, t, c]);
                            const d = (0, n.useMemo)(
                                    () =>
                                        0 === t
                                            ? [R.strings.common.percentValue(), t]
                                            : t < ru
                                              ? [R.strings.crew_widget.plusMinValue(), ru]
                                              : [R.strings.crew_widget.plusValue(), t],
                                    [t],
                                ),
                                m = d[0],
                                _ = d[1];
                            return r().createElement(
                                'div',
                                { className: A()(nu.base, nu[`base__${a}`]) },
                                e >= 0 &&
                                    e < 100 &&
                                    r().createElement(
                                        le.animated.div,
                                        { style: l },
                                        r().createElement(
                                            'div',
                                            { className: nu.realLevel },
                                            (0, L.uF)(R.strings.common.percentValue(), {
                                                value: e > 0 && e < ru ? ru : e,
                                            }),
                                        ),
                                    ),
                                t >= 0 &&
                                    t < 100 &&
                                    r().createElement(
                                        le.animated.div,
                                        { className: nu.possibleLevel, style: o },
                                        (0, L.uF)(m, { value: _ }),
                                    ),
                                u && r().createElement(tt, { classMix: nu.acceleratedTrainingIcon }),
                            );
                        },
                    );
                var ou = u(8485);
                const iu = 33,
                    su = 0,
                    lu = !0,
                    cu = 'play';
                const du = [
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
                function mu() {
                    return (
                        (mu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        mu.apply(this, arguments)
                    );
                }
                const _u = (0, n.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            a = e.getImageSource,
                            o = e.frameCount,
                            i = e.onAnimate,
                            s = e.frameTime,
                            l = void 0 === s ? iu : s,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? su : c,
                            m = e.lastFrameIndex,
                            _ = void 0 === m ? o - 1 : m,
                            E = e.loop,
                            g = void 0 === E ? lu : E,
                            A = e.state,
                            C = void 0 === A ? cu : A,
                            p = e.onAnimationDone,
                            F = e.onAnimationComplete,
                            D = e.poster,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, du);
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
                                            const e = Au(d, _, a),
                                                t = Eu(d, _),
                                                n = window.setInterval(() => {
                                                    const r = t(),
                                                        a = e.get(r);
                                                    a
                                                        ? (null == i || i(r, a),
                                                          u(a),
                                                          r === _ &&
                                                              (null == F || F(),
                                                              g || (null == p || p(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && D ? { path: D, x: 0, y: 0 } : a(d),
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
                            }, [l, a, d, _, g, i, F, p, D, C]),
                            r().createElement('canvas', mu({}, b, { width: t, height: u, ref: B }))
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
                            r = {};
                        for (let a = e; a <= t; a++) {
                            const e = u(a),
                                t = r[e.path];
                            if (t) n.set(a, gu(e, t));
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
                                    n.set(a, gu(e, t));
                            }
                        }
                        return n;
                    };
                function Cu(e) {
                    return (t) => `${e}${t}`;
                }
                const pu = [
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
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                let Du;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(Du || (Du = {}));
                const bu = (e, t, u) => {
                        const n = new Image();
                        (n.src = u(t)), e.push(n);
                    },
                    Bu =
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
                                A = void 0 === g ? Du.Play : g,
                                C = e.onAnimationComplete,
                                p = void 0 === C ? () => {} : C,
                                F = e.revers,
                                D = void 0 !== F && F,
                                b = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(e, pu);
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
                                            if (u) for (let u = e; u >= 0; u--) bu(n, u, t);
                                            else for (let u = 0; u < e; u++) bu(n, u, t);
                                            return n;
                                        })(o, a, D),
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
                                            i(l[e]), s(e, t), e === n && (p(), E || clearInterval(_));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [o, c, a, u, m, E, s, p, A, t, D]),
                                r().createElement('canvas', Fu({}, b, { width: t, height: u, ref: B }))
                            );
                        }),
                        'AnimatedNewSkill_base_6b'),
                    vu = 'AnimatedNewSkill_base__big_31';
                function hu(e, t) {
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
                                    for (var e, t = hu(this._observers.values()); !(e = t()).done; ) {
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
                        getChunkPath: Cu('R.images.gui.maps.icons.sequence.new_skill.skill_'),
                    },
                    ku = {
                        width: 14,
                        height: 14,
                        frameCount: 35,
                        chunk: { count: 1, columns: 35, rows: 1 },
                        getChunkPath: Cu('R.images.gui.maps.icons.sequence.new_skill.skill_small_'),
                    },
                    Su = ({ size: e }) => {
                        const t = e === ou.O.Small ? ku : yu,
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
                            a = (0, n.useState)(Du.Stop),
                            o = a[0],
                            i = a[1],
                            s = (0, n.useCallback)(() => {
                                i(Du.Play);
                            }, [i]),
                            l = (0, n.useCallback)(() => {
                                i(Du.Stop);
                            }, [i]);
                        return (
                            (0, n.useEffect)(() => (wu.instance.subscribe(s), () => wu.instance.unsubscribe(s)), [s]),
                            r().createElement(_u, {
                                width: t.width,
                                height: t.height,
                                frameCount: t.frameCount,
                                getImageSource: u,
                                loop: !1,
                                state: o,
                                onAnimationDone: l,
                                className: A()(Bu, e === ou.O.Big && vu),
                            })
                        );
                    },
                    Lu = { base: 'Skill_base_ba', base__big: 'Skill_base__big_eb' };
                function xu() {
                    return (
                        (xu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        xu.apply(this, arguments)
                    );
                }
                let Tu;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(Tu || (Tu = {}));
                const Mu = (0, n.memo)(
                        ({
                            name: e,
                            icon: t,
                            type: u,
                            size: a,
                            marginValue: o,
                            clipWidth: i,
                            tankmanID: s,
                            blinkStyle: l,
                            showNewSkillAnimation: c,
                            isTooltipEnabled: d = !0,
                        }) => {
                            const m = (0, n.useRef)(''),
                                _ = (0, le.useSpring)(() => ({ from: { scale: 1 } })),
                                E = _[0],
                                g = _[1];
                            (0, n.useEffect)(() => {
                                u === ft.W.New &&
                                    m.current === ft.W.Possible &&
                                    g.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: de.Fs },
                                    }),
                                    (m.current = u);
                            }, [u, g]);
                            const p = (0, n.useCallback)(() => {
                                switch (u) {
                                    case ft.W.Learned:
                                    case ft.W.Learning:
                                    case ft.W.Irrelevant:
                                        return {
                                            contentId:
                                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                    'resId',
                                                ),
                                            args: { tooltipId: Bt.HZ, tankmanID: s, skillName: e },
                                        };
                                    case ft.W.New:
                                    case ft.W.Possible:
                                        return {
                                            contentId: R.views.lobby.crew.tooltips.PerkAvailableTooltip('resId'),
                                            args: { tankmanID: s },
                                        };
                                }
                            }, [u, e, s]);
                            return r().createElement(
                                C.u,
                                xu({}, p(), {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: d,
                                    ignoreShowDelay: !0,
                                }),
                                r().createElement(
                                    le.animated.div,
                                    { style: E },
                                    r().createElement(
                                        le.animated.div,
                                        { style: u === ft.W.Possible ? l : void 0 },
                                        r().createElement(
                                            'div',
                                            {
                                                className: A()(Lu.base, Lu[`base__${a}`]),
                                                style: { marginLeft: `${o}rem`, clipPath: `inset(0 ${i}rem 0 0)` },
                                            },
                                            !c || (u !== ft.W.Possible && u !== ft.W.New)
                                                ? r().createElement(ou.d, { icon: t, size: a, type: u })
                                                : r().createElement(Su, { size: a }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Nu = 'SkillsList_base_11',
                    Ru = 'SkillsList_row_03',
                    Iu = 'SkillsList_possibleLevel_97',
                    Ou = 'SkillsList_possibleLevel__before_6f',
                    Pu = ({
                        tankman: e,
                        showAcceleratedTrainingIcon: t = !1,
                        rowWidth: u = 220,
                        maxBigSkillsInRow: a = 16,
                        blinkStyle: o,
                        isSkillTooltipEnabled: i = !0,
                        showNewSkillAnimation: l = !1,
                    }) => {
                        const c = e.skills,
                            d = c.length,
                            m = ht(e),
                            _ = ((e, t, u) => {
                                let n = e > t ? 10 : e;
                                const r = 0 === e ? e : Math.ceil(e / n),
                                    a = r > 1 ? 16 : 24;
                                let o = 2,
                                    i = a;
                                for (; (u - (a + o)) / (i + o) < Math.floor((e - 1) / r); ) o > 0 ? o-- : i--;
                                return (
                                    (n = Math.min(n, 1 + Math.floor((u - a) / (i + o)))),
                                    i !== a && (o = i - a),
                                    [r, n, o, a, i]
                                );
                            })(m, a, u),
                            E = _[0],
                            g = _[1],
                            C = _[2],
                            p = _[3],
                            F = _[4],
                            D = E > 1 ? Tu.Small : Tu.Big,
                            b = (0, n.useMemo)(
                                () =>
                                    r().createElement(
                                        le.animated.div,
                                        { className: A()(Iu, 0 === d && Ou), style: o },
                                        r().createElement(uu, {
                                            percentValue: e.lastPossibleRoleLevel,
                                            skillSize: D,
                                            hasSkills: e.possibleSkillsAmount > 0 || d > 0,
                                        }),
                                    ),
                                [o, D, d, e.lastPossibleRoleLevel, e.possibleSkillsAmount],
                            );
                        return r().createElement(
                            'div',
                            { className: Nu },
                            (0, wt.K)(E, (u) => {
                                const n = Math.min(g, m - u * g),
                                    a = u === E - 1;
                                return r().createElement(
                                    'div',
                                    { className: Ru, key: `row_${u}` },
                                    e.lastPossibleRoleLevel > 0 && 0 === d && b,
                                    (0, wt.K)(n, (t) => {
                                        const a = g * u + t;
                                        let m = '',
                                            _ = '',
                                            E = ft.W.Learned;
                                        if (a < d) {
                                            const e = s.U2(c, a);
                                            e && ((m = e.name), (_ = e.icon), (E = e.type));
                                        } else E = a < d + e.newSkillsAmount ? ft.W.New : ft.W.Possible;
                                        return r().createElement(Mu, {
                                            name: m,
                                            icon: _,
                                            type: E,
                                            size: D,
                                            marginValue: 0 === t ? 0 : C,
                                            key: a + '_' + m,
                                            clipWidth: t === n - 1 ? 0 : p - F,
                                            tankmanID: e.tankmanID,
                                            blinkStyle: o,
                                            isTooltipEnabled: i,
                                            showNewSkillAnimation: l,
                                        });
                                    }),
                                    a &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement(au, {
                                                lastSkillLevel: e.possibleSkillsAmount > 0 ? -1 : e.lastSkillLevel,
                                                lastPossibleSkillLevel: e.lastPossibleSkillLevel,
                                                showAcceleratedTrainingIcon: t,
                                                lastPossibleRoleLevel: e.lastPossibleRoleLevel,
                                                skillSize: D,
                                                blinkStyle: o,
                                                hasSkills: e.possibleSkillsAmount > 0 || d > 0,
                                            }),
                                            e.lastPossibleRoleLevel > 0 && d > 0 && b,
                                        ),
                                );
                            }),
                            !E &&
                                r().createElement(
                                    'div',
                                    { className: Ru },
                                    e.lastPossibleRoleLevel > 0 && 0 === d && b,
                                    r().createElement(au, {
                                        lastSkillLevel: e.possibleSkillsAmount > 0 ? -1 : e.lastSkillLevel,
                                        lastPossibleSkillLevel: e.lastPossibleSkillLevel,
                                        showAcceleratedTrainingIcon: t,
                                        lastPossibleRoleLevel: e.lastPossibleRoleLevel,
                                        skillSize: D,
                                        blinkStyle: o,
                                        hasSkills: e.possibleSkillsAmount > 0 || d > 0,
                                    }),
                                    e.lastPossibleRoleLevel > 0 && d > 0 && b,
                                ),
                        );
                    },
                    Hu = 'TankmanInfo_base_69',
                    Wu = 'TankmanInfo_base__disabled_36',
                    Gu = 'TankmanInfo_tankmanTooltipHoverArea_9b',
                    ju = 'TankmanInfo_specialization_77',
                    Uu = 'TankmanInfo_specialization__withManySkills_9a',
                    zu = 'TankmanInfo_skillsContainer_17',
                    Xu = 'TankmanInfo_skillsContainer__withManySkills_00',
                    $u = (0, a.Pi)(({ tankman: e, layoutInfo: t, isUntrained: u, blinkStyle: a, isDisabled: o }) => {
                        const i = E().model,
                            s = t.isCurrentLayoutQuickTraining || i.computes.isChangeCrewButtonVisible(),
                            l = (0, vt.GS)().mediaSize,
                            c = (0, n.useMemo)(() => (s ? (l >= vt.cJ.Small ? 190 : 146) : 220), [s, l]),
                            d = ((e, t) => ht(e) > t)(e, 10),
                            m = !t.isCurrentLayoutQuickTraining && -1 !== e.tankmanID && e.isLessMastered,
                            _ = e.baseSpecializationLevel >= 100;
                        return r().createElement(
                            'div',
                            { className: A()(Hu, o && Wu) },
                            r().createElement(
                                bt.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Bt.v$, tankmanID: e.tankmanID },
                                },
                                r().createElement('div', { className: Gu }),
                            ),
                            r().createElement(
                                'div',
                                { className: A()(ju, d && Uu) },
                                r().createElement(dt, {
                                    roles: e.roles,
                                    tankmanID: e.tankmanID,
                                    specializationLevel: e.specializationLevel,
                                    isUntrained: u,
                                    name: e.fullName,
                                    isAcceleratedTrainingAvailable: m && !_,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: A()(zu, d && Xu) },
                                r().createElement(Pu, {
                                    tankman: e,
                                    showAcceleratedTrainingIcon: m && _,
                                    rowWidth: c,
                                    maxBigSkillsInRow: 10,
                                    blinkStyle: a,
                                    showNewSkillAnimation: t.isCurrentLayoutHangar,
                                }),
                            ),
                        );
                    }),
                    Vu = 'QuickTrainingTankmanSlotContent_base_8d',
                    qu = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    Zu = 'QuickTrainingTankmanSlotContent_highlight_72',
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
                            qtTankmanIconStyle: a,
                            layoutInfo: o,
                            isDisabled: i,
                        }) => {
                            const s = (0, n.useRef)(e.lastSkillLevelFull),
                                l = (0, n.useRef)(e.skills.length),
                                c = (0, le.useSpring)(() => ({ from: Yu })),
                                d = c[0],
                                m = c[1],
                                _ = (0, le.useSpring)(() => ({ from: en })),
                                E = _[0],
                                g = _[1],
                                A = (0, n.useRef)(!1);
                            return (
                                (0, n.useEffect)(() => {
                                    e.hasPossibleProgress
                                        ? A.current ||
                                          (m.start({
                                              from: Yu,
                                              to: Qu,
                                              reverse: false,
                                              config: { duration: 300, easing: de.BH },
                                          }),
                                          (A.current = !0))
                                        : A.current
                                          ? (s.current !== e.lastSkillLevelFull || l.current !== e.skills.length
                                                ? (m.start({
                                                      from: Qu,
                                                      to: Ju,
                                                      delay: 200,
                                                      config: { duration: 500, easing: de.BH },
                                                  }),
                                                  (s.current = e.lastSkillLevelFull),
                                                  (l.current = e.skills.length),
                                                  g.start({
                                                      from: en,
                                                      to: tn,
                                                      delay: 200,
                                                      config: { duration: 500, easing: de.BH },
                                                  }))
                                                : m.start({ reset: !0, reverse: !0 }),
                                            (A.current = !1))
                                          : ((s.current = e.lastSkillLevelFull), (l.current = e.skills.length));
                                }, [m, g, e.lastSkillLevelFull, e.hasPossibleProgress, e.skills.length]),
                                r().createElement(
                                    'div',
                                    { className: Vu },
                                    r().createElement(le.animated.div, { className: Zu, style: E }),
                                    r().createElement(
                                        le.animated.div,
                                        { style: a },
                                        r().createElement(Qe.G, {
                                            name: e.icon,
                                            size: Qe.U.c100x60Barracks,
                                            classMix: Ku,
                                            isSkin: e.isInSkin,
                                        }),
                                    ),
                                    r().createElement(le.animated.div, { className: qu, style: d }),
                                    r().createElement($u, {
                                        tankman: e,
                                        layoutInfo: o,
                                        isUntrained: t,
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
                                u.specializationLevel === n.specializationLevel &&
                                u.lastPossibleRoleLevel === n.lastPossibleRoleLevel
                            );
                        },
                    ),
                    nn = 'TankmanSlotContent_base_00',
                    rn = 'TankmanSlotContent_icon_ef',
                    an = (0, n.memo)(({ tankman: e, layoutInfo: t, isUntrained: u, isDisabled: n }) =>
                        r().createElement(
                            'div',
                            { className: nn },
                            r().createElement(Qe.G, {
                                name: e.icon,
                                size: Qe.U.c100x60Barracks,
                                classMix: rn,
                                isSkin: e.isInSkin,
                            }),
                            r().createElement($u, { tankman: e, layoutInfo: t, isUntrained: u, isDisabled: n }),
                        ),
                    ),
                    on = (0, n.memo)(
                        ({
                            roles: e,
                            tankman: t,
                            layoutInfo: u,
                            vehicleName: n,
                            vehicleType: a,
                            isUntrained: o,
                            isDisabled: i,
                            isSelected: s,
                            blinkSlotStyle: l,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: d,
                        }) =>
                            -1 === t.tankmanID
                                ? r().createElement(Dt, {
                                      roles: e,
                                      layoutInfo: u,
                                      vehicleName: n,
                                      vehicleType: a,
                                      isDisabled: i,
                                      isSelected: s,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: d,
                                  })
                                : u.isCurrentLayoutQuickTraining
                                  ? r().createElement(un, {
                                        tankman: t,
                                        isUntrained: o,
                                        blinkStyle: l,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: u,
                                        isDisabled: i,
                                    })
                                  : r().createElement(an, { tankman: t, layoutInfo: u, isUntrained: o, isDisabled: i }),
                    ),
                    sn = { transform: 'translateX(0rem)' },
                    ln = { transform: 'translateX(41rem)' },
                    cn = { opacity: 0 },
                    dn = { opacity: 1 },
                    mn = (0, a.Pi)(
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
                                p = g.controls,
                                F = ((e, t) => {
                                    const u = (0, z.Jp)(c.D9),
                                        n = (0, j.f)(
                                            () => u({ action: c.eX.Click, parentScreen: e, item: t }),
                                            [e, t],
                                            c.tL,
                                        );
                                    return (e) => {
                                        e.button === U.RIGHT && n();
                                    };
                                })(C.computes.getUiLoggingParentScreen(), c.x3.SlotContextMenu),
                                D = p.onSlotClick,
                                b = p.onChangeCrewClick,
                                B = C.computes.isChangeCrewButtonVisible(),
                                v = C.computes.isTankmanMode(),
                                h = C.isCrewLocked.get(),
                                f = C.vehicleName.get(),
                                w = C.vehicleType.get(),
                                y = !l && u.isInteractive && (!a.isCurrentLayoutQuickTraining || i),
                                k = (0, n.useCallback)(() => {
                                    y && !v && ((0, se.G)(R.sounds.yes1()), D(e, u.tankmanID));
                                }, [e, u, D, v, y]),
                                S = (0, n.useCallback)(
                                    (t) => {
                                        t.stopPropagation(), h || ((0, se.G)(R.sounds.yes1()), b(e, u.tankmanID));
                                    },
                                    [e, u, b, h],
                                ),
                                L = (0, n.useMemo)(() => ({ tankmanID: u.tankmanID, slotIdx: e }), [u, e]);
                            return r().createElement(
                                Oe,
                                {
                                    args: L,
                                    isEnabled: !l,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    onMouseDown: F,
                                },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement(
                                        Be,
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
                                            { className: Xe },
                                            u.hasWarning && r().createElement('div', { className: Ze }),
                                            o && r().createElement('div', { className: v ? Ye : Ke }),
                                            r().createElement(
                                                ve,
                                                {
                                                    startState: sn,
                                                    endState: ln,
                                                    layoutInfo: a,
                                                    isPaused: !B,
                                                    className: A()(Ve, B && qe),
                                                    isTankmanMode: v,
                                                },
                                                r().createElement(on, {
                                                    roles: t,
                                                    tankman: u,
                                                    layoutInfo: a,
                                                    isUntrained: u.isUntrained,
                                                    isDisabled: l,
                                                    vehicleName: f,
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
                                                        ve,
                                                        {
                                                            startState: cn,
                                                            endState: dn,
                                                            layoutInfo: a,
                                                            isPaused: !B,
                                                            className: $e,
                                                            isTankmanMode: v,
                                                        },
                                                        r().createElement(ze, {
                                                            isSelected: a.isCurrentLayoutMemberChange && o,
                                                            isLocked: h,
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
                    Cn = (0, a.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: u }) => {
                        const a = E().model,
                            o = a.computes.isAnyEmptySlots(),
                            i = (0, le.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: de.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            s = i[0],
                            l = i[1];
                        (0, n.useEffect)(() => {
                            o ? l.resume() : l.pause();
                        }, [l, o]);
                        const c = (0, le.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0.3 }, { opacity: 1 }],
                                    config: { duration: 400, easing: de.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            d = c[0],
                            m = c[1];
                        (0, n.useEffect)(() => {
                            e.isCurrentLayoutQuickTraining ? m.resume() : m.pause();
                        }, [m, e.isCurrentLayoutQuickTraining]);
                        const _ = (0, le.useSpring)(() => ({
                                from: gn,
                                to: An,
                                delay: 200,
                                config: { duration: 300, easing: de.ei },
                                pause: !e.isCurrentLayoutQuickTraining,
                            }))[0],
                            g = (0, n.useCallback)(
                                (u) => t || (e.isCurrentLayoutQuickTraining && -1 === u),
                                [t, e.isCurrentLayoutQuickTraining],
                            );
                        return r().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: A()(_n, u) },
                            a.computes
                                .getSlots()
                                .map((t, u) =>
                                    r().createElement(
                                        mn,
                                        En({}, t, {
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
                    pn = (0, a.Pi)(() => {
                        const e = E().model,
                            t = e.isDisabled.get(),
                            u = e.hasDog.get(),
                            n = e.computes.getLayoutInfo();
                        return r().createElement(
                            'div',
                            { className: ae },
                            e.computes.isButtonBarVisible() &&
                                r().createElement(
                                    'div',
                                    { className: oe },
                                    r().createElement(re, { isWidgetDisabled: t }),
                                ),
                            r().createElement(Cn, { layoutInfo: n, isWidgetDisabled: t, className: ie }),
                            u && r().createElement(Te, { layoutInfo: n, isDisabled: t }),
                        );
                    }),
                    Fn = (0, n.memo)(() =>
                        r().createElement(
                            _,
                            { options: { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') } },
                            r().createElement(pn, null),
                        ),
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
                u.d(t, { HZ: () => n, v$: () => r });
                const n = 'crewPerkGf',
                    r = 'tankman';
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
            var e = { 37: 0, 3: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(7003));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
