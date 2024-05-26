(() => {
    var __webpack_modules__ = {
            3457: (e, t, a) => {
                'use strict';
                a.d(t, { L$: () => l.L, qE: () => l.q, u5: () => m });
                var n = a(6483),
                    u = a.n(n),
                    r = a(7727),
                    s = a(6179),
                    i = a.n(s),
                    o = a(6880),
                    l = a(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: n,
                    disabled: c,
                    mixClass: m,
                    soundHover: d,
                    soundClick: _,
                    onMouseEnter: E,
                    onMouseMove: g,
                    onMouseDown: p,
                    onMouseUp: b,
                    onMouseLeave: v,
                    onClick: h,
                }) => {
                    const A = (0, s.useRef)(null),
                        C = (0, s.useState)(a),
                        f = C[0],
                        D = C[1],
                        F = (0, s.useState)(!1),
                        B = F[0],
                        k = F[1],
                        w = (0, s.useState)(!1),
                        y = w[0],
                        S = w[1],
                        N = (0, s.useCallback)(() => {
                            c || (A.current && (A.current.focus(), D(!0)));
                        }, [c]),
                        I = (0, s.useCallback)(
                            (e) => {
                                f && null !== A.current && !A.current.contains(e.target) && D(!1);
                            },
                            [f],
                        ),
                        T = (0, s.useCallback)(
                            (e) => {
                                c || (h && h(e));
                            },
                            [c, h],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                c || (null !== d && (0, r.G)(d), E && E(e), S(!0));
                            },
                            [c, d, E],
                        ),
                        x = (0, s.useCallback)(
                            (e) => {
                                g && g(e);
                            },
                            [g],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                c || (b && b(e), k(!1));
                            },
                            [c, b],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, r.G)(_), p && p(e), a && N(), k(!0));
                            },
                            [c, _, p, N, a],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                c || (v && v(e), k(!1));
                            },
                            [c, v],
                        ),
                        H = u()(
                            o.Z.base,
                            o.Z[`base__${n}`],
                            {
                                [o.Z.base__disabled]: c,
                                [o.Z[`base__${t}`]]: t,
                                [o.Z.base__focus]: f,
                                [o.Z.base__highlightActive]: B,
                                [o.Z.base__firstHover]: y,
                            },
                            m,
                        ),
                        W = u()(o.Z.state, o.Z.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', I),
                                () => {
                                    document.removeEventListener('mousedown', I);
                                }
                            ),
                            [I],
                        ),
                        (0, s.useEffect)(() => {
                            D(a);
                        }, [a]),
                        i().createElement(
                            'div',
                            {
                                ref: A,
                                className: H,
                                onMouseEnter: L,
                                onMouseMove: x,
                                onMouseUp: M,
                                onMouseDown: P,
                                onMouseLeave: O,
                                onClick: T,
                            },
                            n !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: o.Z.back }),
                                    i().createElement('span', { className: o.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: W },
                                i().createElement('span', { className: o.Z.stateDisabled }),
                                i().createElement('span', { className: o.Z.stateHighlightHover }),
                                i().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const m = (0, s.memo)(c);
            },
            2106: (e, t, a) => {
                'use strict';
                let n, u;
                a.d(t, { L: () => n, q: () => u }),
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
                    })(u || (u = {}));
            },
            9987: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => c });
                var n = a(6483),
                    u = a.n(n),
                    r = a(6179),
                    s = a.n(r),
                    i = a(8055);
                const o = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
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
                const c = (e) => {
                    let t = e.size,
                        a = e.value,
                        n = e.isEmpty,
                        r = e.fadeInAnimation,
                        c = e.hide,
                        m = e.maximumNumber,
                        d = e.className,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, o);
                    const E = n ? null : a,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const p = E && !g && E > m,
                        b = u()(
                            i.Z.base,
                            i.Z[`base__${t}`],
                            r && i.Z.base__animated,
                            c && i.Z.base__hidden,
                            !E && i.Z.base__pattern,
                            n && i.Z.base__empty,
                            d,
                        );
                    return s().createElement(
                        'div',
                        l({ className: b }, _),
                        s().createElement('div', { className: i.Z.bg }),
                        s().createElement('div', { className: i.Z.pattern }),
                        s().createElement(
                            'div',
                            { className: u()(i.Z.value, g && i.Z.value__text) },
                            p ? m : E,
                            p && s().createElement('span', { className: i.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            280: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => l });
                var n = a(6179),
                    u = a.n(n),
                    r = a(6483),
                    s = a.n(r),
                    i = a(3649),
                    o = a(5287);
                const l = ({ binding: e, text: t = '', classMix: a, alignment: r = i.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : u().createElement(
                              n.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  u().createElement(
                                      'div',
                                      { className: s()(o.Z.base, a), key: `${t}-${l}` },
                                      (0, i.Uw)(t, r, e).map((e, t) =>
                                          u().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, t, a) => {
                'use strict';
                a.d(t, { Y: () => m });
                var n = a(3138),
                    u = a(6179),
                    r = a(1043),
                    s = a(5262);
                const i = n.O.client.getSize('rem'),
                    o = i.width,
                    l = i.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, r.j)),
                    m = (0, u.createContext)(c);
            },
            1039: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => c });
                var n = a(6179),
                    u = a.n(n),
                    r = a(6536),
                    s = a(3495),
                    i = a(1043),
                    o = a(5262),
                    l = a(3138);
                const c = (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(s.Y),
                        a = (0, n.useState)(t),
                        c = a[0],
                        m = a[1],
                        d = (0, n.useCallback)((e, t) => {
                            const a = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(t);
                            m(Object.assign({ width: a, height: n }, (0, o.T)(a, n, i.j)));
                        }, []);
                    (0, r.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', d), [d]);
                    const _ = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return u().createElement(s.Y.Provider, { value: _ }, e);
                });
            },
            6010: (e, t, a) => {
                'use strict';
                var n = a(6179),
                    u = a(7382),
                    r = a(3495);
                const s = ['children'];
                const i = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, s);
                    const i = (0, n.useContext)(r.Y),
                        o = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        m = i.small,
                        d = i.extraSmall,
                        _ = i.extraLargeWidth,
                        E = i.largeWidth,
                        g = i.mediumWidth,
                        p = i.smallWidth,
                        b = i.extraSmallWidth,
                        v = i.extraLargeHeight,
                        h = i.largeHeight,
                        A = i.mediumHeight,
                        C = i.smallHeight,
                        f = i.extraSmallHeight,
                        D = { extraLarge: v, large: h, medium: A, small: C, extraSmall: f };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && o) return t;
                        if (a.large && l) return t;
                        if (a.medium && c) return t;
                        if (a.small && m) return t;
                        if (a.extraSmall && d) return t;
                    } else {
                        if (a.extraLargeWidth && _) return (0, u.H)(t, a, D);
                        if (a.largeWidth && E) return (0, u.H)(t, a, D);
                        if (a.mediumWidth && g) return (0, u.H)(t, a, D);
                        if (a.smallWidth && p) return (0, u.H)(t, a, D);
                        if (a.extraSmallWidth && b) return (0, u.H)(t, a, D);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && v) return t;
                            if (a.largeHeight && h) return t;
                            if (a.mediumHeight && A) return t;
                            if (a.smallHeight && C) return t;
                            if (a.extraSmallHeight && f) return t;
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
                a.d(t, { YN: () => u.Y, ZN: () => n.Z });
                a(6010);
                var n = a(1039),
                    u = a(3495);
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
                function u(e, t, a) {
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
                        u = (function (e, t) {
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
                        r = Math.min(n, u);
                    return {
                        extraLarge: r === a.extraLarge.weight,
                        large: r === a.large.weight,
                        medium: r === a.medium.weight,
                        small: r === a.small.weight,
                        extraSmall: r === a.extraSmall.weight,
                        extraLargeWidth: n === a.extraLarge.weight,
                        largeWidth: n === a.large.weight,
                        mediumWidth: n === a.medium.weight,
                        smallWidth: n === a.small.weight,
                        extraSmallWidth: n === a.extraSmall.weight,
                        extraLargeHeight: u === a.extraLarge.weight,
                        largeHeight: u === a.large.weight,
                        mediumHeight: u === a.medium.weight,
                        smallHeight: u === a.small.weight,
                        extraSmallHeight: u === a.extraSmall.weight,
                    };
                }
                a.d(t, { T: () => u }),
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
                    u = a(6483),
                    r = a.n(u),
                    s = a(6373),
                    i = a(1856),
                    o = a(3138),
                    l = a(2039),
                    c = a(5099),
                    m = a(7727),
                    d = a(4179),
                    _ = a(6179),
                    E = a.n(_),
                    g = a(4769);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(n || (n = {}));
                const p = ['__left', '__right', '__top', '__bottom'];
                (0, _.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: a, customStyles: n = {} }, u) => {
                        const b = (0, _.useRef)(null),
                            v = (0, _.useRef)(null),
                            h = (0, _.useRef)(null),
                            A = (0, _.useState)(window.decorator && window.decorator.directionType),
                            C = A[0],
                            f = A[1],
                            D = (0, _.useCallback)(() => {
                                m.$.playClick(), o.O.view.sendEvent.close();
                            }, []),
                            F = (0, _.useCallback)(() => {
                                m.$.playHighlight();
                            }, []),
                            B = r()(g.Z.arrow, g.Z[`arrow${p[C]}`]);
                        (0, l.b)(
                            () => (
                                o.O.client.events.mouse.enableOutside(),
                                o.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (a ? a() : o.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const k = (0, _.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === b.current || t === h.current) return;
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
                                [b, h, a],
                            ),
                            w = (0, _.useCallback)(
                                () => (
                                    o.O.view.freezeTextureBeforeResize(),
                                    (0, i.v)(() => {
                                        if (v.current) {
                                            const e = v.current.scrollWidth,
                                                t = v.current.scrollHeight;
                                            o.O.view.resize(e, t), f(window.decorator.directionType);
                                        }
                                    })
                                ),
                                [],
                            );
                        return (
                            (0, _.useImperativeHandle)(u, () => ({ updateSize: w })),
                            (0, l.b)(() => {
                                o.O.view.setInputPaddingsRem(58);
                            }),
                            (0, _.useEffect)(() => {
                                document.addEventListener('mousedown', k, { capture: !0 });
                                const e = (0, c.B)((0, d.Eu)());
                                return (
                                    !t && e.promise.then(() => w()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', k);
                                    }
                                );
                            }, [w, k, t]),
                            E().createElement(
                                'div',
                                { className: g.Z.base, ref: v },
                                E().createElement(
                                    'div',
                                    { className: g.Z.decorator },
                                    E().createElement(
                                        'div',
                                        { className: g.Z.content, ref: b },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            E().createElement(
                                                s.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                E().createElement('div', {
                                                    className: g.Z.closeBtn,
                                                    onClick: D,
                                                    onMouseEnter: F,
                                                    ref: h,
                                                }),
                                            ),
                                    ),
                                    E().createElement('div', { className: B, style: n.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => l });
                var n = a(1037),
                    u = a(4179),
                    r = a(6179),
                    s = a.n(r);
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
                const l = (e) => {
                    let t = e.contentId,
                        a = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? n.IC.Top : l,
                        m = e.targetId,
                        d = e.args,
                        _ = e.onClick,
                        E = e.children,
                        g = e.isEnabled,
                        p = void 0 === g || g,
                        b = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, i);
                    const v = (0, r.useRef)(null),
                        h = (0, r.useCallback)(() => {
                            if ((0, u.wU)()) return (0, u.SW)();
                            v.current && (0, u.P3)(t, c, v.current, a, m, d);
                        }, [t, c, d, a, m]);
                    return s().createElement(
                        'div',
                        o(
                            {
                                ref: v,
                                onClick:
                                    ((A = E.props.onClick),
                                    (e) => {
                                        p && (h(), _ && _(e), A && A(e));
                                    }),
                            },
                            b,
                        ),
                        E,
                    );
                    var A;
                };
            },
            2773: (e, t, a) => {
                'use strict';
                a.d(t, { $Q: () => h });
                var n = a(6483),
                    u = a.n(n),
                    r = a(7515),
                    s = a(1856),
                    i = a(3815),
                    o = a(560),
                    l = a(7727),
                    c = a(6179),
                    m = a.n(c),
                    d = a(6358),
                    _ = a(372);
                const E = 'disable',
                    g = { pending: !1, offset: 0 },
                    p = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    b = () => {},
                    v = (e, t) => Math.max(20, e.offsetWidth * t),
                    h = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = p, onDrag: n = b }) => {
                        const h = (0, c.useRef)(null),
                            A = (0, c.useRef)(null),
                            C = (0, c.useRef)(null),
                            f = (0, c.useRef)(null),
                            D = (0, c.useRef)(null),
                            F = e.stepTimeout || 100,
                            B = (0, c.useState)(g),
                            k = B[0],
                            w = B[1],
                            y = (0, c.useCallback)(
                                (e) => {
                                    w(e),
                                        D.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: D.current });
                                },
                                [n],
                            ),
                            S = () => {
                                const t = f.current,
                                    a = D.current,
                                    n = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(n && t && a && u)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / u),
                                    o = (0, r.u)(0, 1, s / (u - n)),
                                    l = (t.offsetWidth - v(t, i)) * o;
                                (a.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (A.current && C.current && f.current && D.current) {
                                            if (0 === e)
                                                return A.current.classList.add(E), void C.current.classList.remove(E);
                                            if (
                                                ((t = f.current),
                                                (a = D.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return A.current.classList.remove(E), void C.current.classList.add(E);
                                            var t, a;
                                            A.current.classList.remove(E), C.current.classList.remove(E);
                                        }
                                    })(l);
                            },
                            N = (0, i.z)(() => {
                                (() => {
                                    const t = D.current,
                                        a = f.current,
                                        n = e.getWrapperSize(),
                                        u = e.getContainerSize();
                                    if (!(u && t && n && a)) return;
                                    const r = Math.min(1, n / u);
                                    (t.style.width = `${v(a, r)}px`),
                                        (t.style.display = 'flex'),
                                        h.current &&
                                            (1 === r
                                                ? h.current.classList.add(_.Z.base__nonActive)
                                                : h.current.classList.remove(_.Z.base__nonActive));
                                })(),
                                    S();
                            });
                        (0, c.useEffect)(() => (0, s.v)(N)),
                            (0, c.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        const t = () => {
                                            S();
                                        };
                                        let a = b;
                                        const n = () => {
                                            a(), (a = (0, s.v)(N));
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
                            (0, c.useEffect)(() => {
                                if (!k.pending) return;
                                const t = (t) => {
                                        var a;
                                        const u = e.contentRef.current;
                                        if (!u) return;
                                        const r = f.current,
                                            s = D.current;
                                        if (!u || !r || !s) return;
                                        const i = t.screenX - k.offset - r.getBoundingClientRect().x,
                                            o = (i / r.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(u, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: o });
                                    },
                                    a = () => {
                                        window.removeEventListener('mousemove', t), y(g);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a);
                                    }
                                );
                            }, [e, k.offset, k.pending, n, y]);
                        const I = (0, o.B)((t) => e.applyStepTo(t), F, [e]),
                            T = I[0],
                            L = I[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', L, !0),
                                () => document.removeEventListener('mouseup', L, !0)
                            ),
                            [L],
                        );
                        const x = (e) => {
                            e.target.classList.contains(E) || (0, l.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: u()(_.Z.base, t.base), ref: h, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: u()(_.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), T(d.Nm.Next));
                                },
                                onMouseUp: L,
                                ref: A,
                                onMouseEnter: x,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: u()(_.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = D.current;
                                        if (n && 0 === t.button)
                                            if (((0, l.G)('play'), t.target === n))
                                                y({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = D.current,
                                                        u = e.contentRef.current;
                                                    if (!n || !u) return;
                                                    const r = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? d.Nm.Prev : d.Nm.Next);
                                            }
                                    },
                                    ref: f,
                                    onMouseEnter: x,
                                },
                                m().createElement('div', { ref: D, className: u()(_.Z.thumb, t.thumb) }),
                                m().createElement('div', { className: u()(_.Z.rail, t.rail) }),
                            ),
                            m().createElement('div', {
                                className: u()(_.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), T(d.Nm.Prev));
                                },
                                onMouseUp: L,
                                ref: C,
                                onMouseEnter: x,
                            }),
                        );
                    });
            },
            2840: (e, t, a) => {
                'use strict';
                a.d(t, { K: () => c });
                var n = a(6483),
                    u = a.n(n),
                    r = a(6179),
                    s = a.n(r),
                    i = a(2773),
                    o = a(7950),
                    l = a(4682);
                const c = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: n,
                    areaClassName: c,
                    classNames: m,
                    scrollClassName: d,
                    getStepByRailClick: _,
                    onDrag: E,
                }) => {
                    const g = (0, r.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: u()(l.Z.base, e.base) });
                        }, [n]),
                        p = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return s().createElement(
                        'div',
                        { className: u()(l.Z.defaultScroll, a), onWheel: t.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: u()(l.Z.defaultScrollArea, c) },
                            s().createElement(o.Area, { className: d, api: p, classNames: m }, e),
                        ),
                        s().createElement(i.$Q, { getStepByRailClick: _, api: t, onDrag: E, classNames: g }),
                    );
                };
            },
            7950: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        Area: () => _,
                        Bar: () => o.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    });
                var n = a(6483),
                    u = a.n(n),
                    r = a(1856),
                    s = a(6179),
                    i = a.n(s),
                    o = a(2773),
                    l = a(2840),
                    c = a(4682),
                    m = a(8579),
                    d = a(6358);
                const _ = ({ api: e, className: t, classNames: a, children: n }) => (
                    (0, s.useEffect)(() => (0, r.v)(e.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: u()(c.Z.base, t) },
                        i().createElement(
                            'div',
                            {
                                className: u()(c.Z.wrapper, null == a ? void 0 : a.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            i().createElement(
                                'div',
                                { className: u()(c.Z.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                (_.Bar = o.$Q), (_.Default = l.K), (_.SeniorityAwards = m.Tm);
            },
            8579: (e, t, a) => {
                'use strict';
                a.d(t, { Tm: () => l });
                var n = a(6483),
                    u = a.n(n),
                    r = a(1856),
                    s = a(6179),
                    i = a.n(s),
                    o = (a(2773), a(2840), a(4682));
                a(6358);
                const l = ({ api: e, className: t, classNames: a, children: n }) => (
                    (0, s.useEffect)(() => (0, r.v)(e.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: u()(o.Z.base, t) },
                        i().createElement(
                            'div',
                            { className: u()(o.Z.wrapper, null == a ? void 0 : a.wrapper), ref: e.wrapperRef },
                            i().createElement(
                                'div',
                                { className: u()(o.Z.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
            },
            6358: (e, t, a) => {
                'use strict';
                a.d(t, { Nm: () => n.Nm, T5: () => u, he: () => n.he });
                var n = a(7308);
                const u = (0, n.EO)({
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
                a.d(t, { $Q: () => A });
                var n = a(6483),
                    u = a.n(n),
                    r = a(7515),
                    s = a(1856),
                    i = a(3815),
                    o = a(560),
                    l = a(7727),
                    c = a(6179),
                    m = a.n(c),
                    d = a(7701),
                    _ = a(9168);
                const E = 'disable',
                    g = () => {},
                    p = { pending: !1, offset: 0 },
                    b = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    v = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    h = (e, t) => Math.max(20, e.offsetHeight * t),
                    A = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = b, onDrag: n = g }) => {
                        const A = (0, c.useRef)(null),
                            C = (0, c.useRef)(null),
                            f = (0, c.useRef)(null),
                            D = (0, c.useRef)(null),
                            F = (0, c.useRef)(null),
                            B = e.stepTimeout || 100,
                            k = (0, c.useState)(p),
                            w = k[0],
                            y = k[1],
                            S = (0, c.useCallback)(
                                (e) => {
                                    y(e),
                                        F.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: F.current });
                                },
                                [n],
                            ),
                            N = (0, i.z)(() => {
                                const t = F.current,
                                    a = D.current,
                                    n = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = Math.min(1, n / u);
                                return (
                                    (t.style.height = `${h(a, r)}px`),
                                    t.classList.add(_.Z.thumb),
                                    A.current &&
                                        (1 === r
                                            ? A.current.classList.add(_.Z.base__nonActive)
                                            : A.current.classList.remove(_.Z.base__nonActive)),
                                    r
                                );
                            }),
                            I = (0, i.z)(() => {
                                const t = D.current,
                                    a = F.current,
                                    n = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(n && t && a && u)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / u),
                                    o = (0, r.u)(0, 1, s / (u - n)),
                                    l = (t.offsetHeight - h(t, i)) * o;
                                (a.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (C.current && f.current && D.current && F.current) {
                                            if (0 === e)
                                                return C.current.classList.add(E), void f.current.classList.remove(E);
                                            if (
                                                ((t = D.current),
                                                (a = F.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return C.current.classList.remove(E), void f.current.classList.add(E);
                                            var t, a;
                                            C.current.classList.remove(E), f.current.classList.remove(E);
                                        }
                                    })(l);
                            }),
                            T = (0, i.z)(() => {
                                v(e, () => {
                                    N(), I();
                                });
                            });
                        (0, c.useEffect)(() => (0, s.v)(T)),
                            (0, c.useEffect)(() => {
                                const t = () => {
                                    v(e, () => {
                                        I();
                                    });
                                };
                                let a = g;
                                const n = () => {
                                    a(), (a = (0, s.v)(T));
                                };
                                return (
                                    e.events.on('recalculateContent', T),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        a(),
                                            e.events.off('recalculateContent', T),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, c.useEffect)(() => {
                                if (!w.pending) return;
                                const t = (t) => {
                                        v(e, (a) => {
                                            const u = D.current,
                                                r = F.current,
                                                s = e.getContainerSize();
                                            if (!u || !r || !s) return;
                                            const i = t.screenY - w.offset - u.getBoundingClientRect().y,
                                                o = (i / u.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o });
                                        });
                                    },
                                    a = () => {
                                        window.removeEventListener('mousemove', t), S(p);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a);
                                    }
                                );
                            }, [e, w.offset, w.pending, n, S]);
                        const L = (0, o.B)((t) => e.applyStepTo(t), B, [e]),
                            x = L[0],
                            R = L[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', R, !0),
                                () => document.removeEventListener('mouseup', R, !0)
                            ),
                            [R],
                        );
                        const M = (e) => {
                            e.target.classList.contains(E) || (0, l.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: u()(_.Z.base, t.base), ref: A, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: u()(_.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), x(d.Nm.Next));
                                },
                                ref: C,
                                onMouseEnter: M,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: u()(_.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = F.current;
                                        if (n && 0 === t.button)
                                            if (((0, l.G)('play'), t.target === n))
                                                S({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    F.current &&
                                                        v(e, (n) => {
                                                            if (!n) return;
                                                            const u = a(e),
                                                                r = e.clampPosition(n, n.scrollTop + u * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? d.Nm.Prev : d.Nm.Next);
                                            }
                                    },
                                    ref: D,
                                    onMouseEnter: M,
                                },
                                m().createElement('div', { ref: F, className: t.thumb }),
                                m().createElement('div', { className: u()(_.Z.rail, t.rail) }),
                            ),
                            m().createElement('div', {
                                className: u()(_.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), x(d.Nm.Prev));
                                },
                                onMouseUp: R,
                                ref: f,
                                onMouseEnter: M,
                            }),
                        );
                    });
            },
            1158: (e, t, a) => {
                'use strict';
                a.d(t, { K: () => c });
                var n = a(6483),
                    u = a.n(n),
                    r = a(6179),
                    s = a.n(r),
                    i = a(6225),
                    o = a(9605),
                    l = a(5636);
                const c = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: n,
                    areaClassName: c,
                    scrollClassName: m,
                    scrollClassNames: d,
                    getStepByRailClick: _,
                    onDrag: E,
                }) => {
                    const g = (0, r.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: u()(l.Z.base, e.base) });
                        }, [n]),
                        p = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return s().createElement(
                        'div',
                        { className: u()(l.Z.defaultScroll, a), onWheel: t.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: u()(l.Z.area, c) },
                            s().createElement(o.Area, { className: m, classNames: d, api: p }, e),
                        ),
                        s().createElement(i.$Q, { getStepByRailClick: _, api: t, onDrag: E, classNames: g }),
                    );
                };
            },
            9605: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, { Area: () => d, Bar: () => o.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 });
                var n = a(6483),
                    u = a.n(n),
                    r = a(1856),
                    s = a(6179),
                    i = a.n(s),
                    o = a(6225),
                    l = a(1158),
                    c = a(7701),
                    m = a(5636);
                const d = ({ className: e, classNames: t, children: a, api: n }) => (
                    (0, s.useEffect)(() => (0, r.v)(n.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: u()(m.Z.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: u()(m.Z.content, null == t ? void 0 : t.content), ref: n.contentRef },
                            a,
                        ),
                    )
                );
                d.Default = l.K;
            },
            7701: (e, t, a) => {
                'use strict';
                a.d(t, { Nm: () => n.Nm, c4: () => u });
                var n = a(7308);
                const u = (0, n.EO)({
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
                a.d(t, { EO: () => E, Nm: () => d, he: () => _ });
                var n = a(7515),
                    u = a(1856),
                    r = a(3138),
                    s = a(4532),
                    i = a(9653),
                    o = a(3815),
                    l = a(4489),
                    c = a(6179),
                    m = a(7030);
                let d;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(d || (d = {}));
                const _ = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    E = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: d,
                        getWrapperSize: E,
                        triggerMouseMoveOnUpdate: g = !1,
                    }) => {
                        const p = (e, a) => {
                            const u = t(e),
                                r = u[0],
                                s = u[1];
                            return (0, n.u)(r, s, a);
                        };
                        return (n = {}) => {
                            const b = n.settings,
                                v = void 0 === b ? _ : b,
                                h = (0, c.useRef)(null),
                                A = (0, c.useRef)(null),
                                C = (0, i.q)(),
                                f = (0, l.f)(
                                    () => {
                                        r.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, m.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = h.current;
                                        t && (a(t, e), C.trigger('change', e), g && f());
                                    },
                                    onRest: (e) => C.trigger('rest', e),
                                    onStart: (e) => C.trigger('start', e),
                                    onPause: (e) => C.trigger('pause', e),
                                })),
                                F = D[0],
                                B = D[1],
                                k = (0, c.useCallback)(
                                    (e, t, a) => {
                                        var n;
                                        const u = F.scrollPosition.get(),
                                            r = (null != (n = F.scrollPosition.goal) ? n : 0) - u;
                                        return p(e, t * a + r + u);
                                    },
                                    [F.scrollPosition],
                                ),
                                w = (0, c.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const n = h.current;
                                        n &&
                                            B.start({
                                                scrollPosition: p(n, e),
                                                immediate: t,
                                                reset: a,
                                                config: v.animationConfig,
                                                from: { scrollPosition: p(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [B, v.animationConfig, F.scrollPosition],
                                ),
                                y = (0, c.useCallback)(
                                    (e) => {
                                        const t = h.current,
                                            a = A.current;
                                        if (!t || !a) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return E(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, v.step),
                                            u = k(t, e, n);
                                        w(u);
                                    },
                                    [w, k, v.step],
                                ),
                                S = (0, c.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && y(d(e)),
                                            h.current && C.trigger('mouseWheel', e, F.scrollPosition, t(h.current));
                                    },
                                    [F.scrollPosition, y, C],
                                ),
                                N = (0, s.M)(
                                    () =>
                                        (0, u.v)(() => {
                                            const e = h.current;
                                            e &&
                                                (w(p(e, F.scrollPosition.goal), { immediate: !0 }),
                                                C.trigger('resizeHandled'));
                                        }),
                                    [w, F.scrollPosition.goal],
                                ),
                                I = (0, o.z)(() => {
                                    const e = h.current;
                                    if (!e) return;
                                    const t = p(e, F.scrollPosition.goal);
                                    t !== F.scrollPosition.goal && w(t, { immediate: !0 }),
                                        C.trigger('recalculateContent');
                                });
                            (0, c.useEffect)(
                                () => (
                                    window.addEventListener('resize', N),
                                    () => {
                                        window.removeEventListener('resize', N);
                                    }
                                ),
                                [N],
                            );
                            return (0, c.useMemo)(
                                () => ({
                                    getWrapperSize: () => (A.current ? E(A.current) : void 0),
                                    getContainerSize: () => (h.current ? e(h.current) : void 0),
                                    getBounds: () =>
                                        h.current
                                            ? t(h.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: v.step.clampedArrowStepTimeout,
                                    clampPosition: p,
                                    handleMouseWheel: S,
                                    applyScroll: w,
                                    applyStepTo: y,
                                    contentRef: h,
                                    wrapperRef: A,
                                    scrollPosition: B,
                                    animationScroll: F,
                                    recalculateContent: I,
                                    events: { on: C.on, off: C.off },
                                }),
                                [F.scrollPosition, w, y, C.off, C.on, I, S, B, v.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, t, a) => {
                'use strict';
                a.d(t, { X: () => u });
                var n = a(7950);
                const u = { Vertical: a(9605), Horizontal: n };
            },
            7078: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => o });
                var n = a(6179),
                    u = a.n(n),
                    r = a(2056);
                const s = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, s);
                    return u().createElement(
                        r.u,
                        i(
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
                a.d(t, { l: () => l });
                var n = a(6179),
                    u = a.n(n),
                    r = a(7078),
                    s = a(6373),
                    i = a(2056);
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
                const l = ({ children: e, tooltipArgs: t, className: a }) => {
                    if (!t) return e;
                    const n = u().createElement('div', { className: a }, e);
                    if (t.header || t.body) return u().createElement(s.i, t, n);
                    const l = t.contentId,
                        c = t.args,
                        m = null == c ? void 0 : c.contentId;
                    return l || m
                        ? u().createElement(i.u, o({}, t, { contentId: l || m }), n)
                        : u().createElement(r.t, t, n);
                };
            },
            6373: (e, t, a) => {
                'use strict';
                a.d(t, { i: () => l });
                var n = a(2056),
                    u = a(6179),
                    r = a.n(u);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            a = e.body,
                            l = e.header,
                            c = e.note,
                            m = e.alert,
                            d = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, s);
                        const E = (0, u.useMemo)(() => {
                            const e = Object.assign({}, d, { body: a, header: l, note: c, alert: m });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [m, a, l, c, d]);
                        return r().createElement(
                            n.u,
                            i(
                                {
                                    contentId:
                                        ((g = null == d ? void 0 : d.hasHtmlContent),
                                        g ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
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
            2056: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => l });
                var n = a(7902),
                    u = a(4179),
                    r = a(6179);
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
                                    type: u.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                a,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            u = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            m = e.onMouseDown,
                            d = e.onClick,
                            _ = e.ignoreShowDelay,
                            E = void 0 !== _ && _,
                            g = e.ignoreMouseClick,
                            p = void 0 !== g && g,
                            b = e.decoratorId,
                            v = void 0 === b ? 0 : b,
                            h = e.isEnabled,
                            A = void 0 === h || h,
                            C = e.targetId,
                            f = void 0 === C ? 0 : C,
                            D = e.onShow,
                            F = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, s);
                        const k = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, r.useMemo)(() => f || (0, n.F)().resId, [f]),
                            y = (0, r.useCallback)(() => {
                                (k.current.isVisible && k.current.timeoutId) ||
                                    (o(a, v, { isMouseEvent: !0, on: !0, arguments: i(u) }, w),
                                    D && D(),
                                    (k.current.isVisible = !0));
                            }, [a, v, u, w, D]),
                            S = (0, r.useCallback)(() => {
                                if (k.current.isVisible || k.current.timeoutId) {
                                    const e = k.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (k.current.timeoutId = 0)),
                                        o(a, v, { on: !1 }, w),
                                        k.current.isVisible && F && F(),
                                        (k.current.isVisible = !1);
                                }
                            }, [a, v, w, F]),
                            N = (0, r.useCallback)((e) => {
                                k.current.isVisible &&
                                    ((k.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (k.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(k.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = k.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', N, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', N, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === A && S();
                            }, [A, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return A
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((I = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((k.current.timeoutId = window.setTimeout(y, E ? 100 : 400)),
                                                      l && l(e),
                                                      I && I(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === p && S(), null == d || d(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === p && S(), null == m || m(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var I;
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
                a.d(t, { U: () => i });
                var n = a(3138);
                function u(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return r(e, t);
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
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: t = 0, getRoot: a = s, context: r = 'model' } = {}) {
                    const i = new Map();
                    function o(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, a) => {
                            a.forEach((t) => {
                                const a = i.get(t);
                                void 0 !== a && a(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = a(t),
                            u = r.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? u
                            : e.split('.').reduce((e, t) => {
                                  const a = e[t];
                                  return 'function' == typeof a ? a.bind(e) : a;
                              }, u);
                    };
                    return {
                        subscribe: (a, u) => {
                            const s = 'string' == typeof u ? `${r}.${u}` : r,
                                o = n.O.view.addModelObserver(s, t, !0);
                            return i.set(o, a), e && a(l(u)), o;
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const a = l(t);
                            return (...t) => {
                                a(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, a = u(i.keys()); !(e = a()).done; ) {
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
                    u = a(9174),
                    r = a(6179),
                    s = a.n(r),
                    i = a(8246);
                const o = () => (e, t) => {
                    const a = (0, r.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: m }) {
                            const d = (0, r.useRef)([]),
                                _ = (a, r, s) => {
                                    var o;
                                    const l = i.U(r),
                                        c =
                                            'real' === a
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        m = (e) =>
                                            'mocks' === a ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        _ = (e) => d.current.push(e),
                                        E = e({
                                            mode: a,
                                            readByPath: m,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const r = null != t ? t : m(e),
                                                        s = u.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, u.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const r = null != t ? t : m(e),
                                                        s = u.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, u.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = m(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = u.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, u.aD)((t) => {
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
                                                            s = Object.entries(r),
                                                            i = s.reduce(
                                                                (e, [t, a]) => ((e[a] = u.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, u.aD)((e) => {
                                                                        s.forEach(([t, a]) => {
                                                                            i[a].set(e[t]);
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
                                        g = { mode: a, model: E, externalModel: c, cleanup: _ };
                                    return {
                                        model: E,
                                        controls: 'mocks' === a && s ? s.controls(g) : t(g),
                                        externalModel: c,
                                        mode: a,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                g = (0, r.useState)(o),
                                p = g[0],
                                b = g[1],
                                v = (0, r.useState)(() => _(o, l, m)),
                                h = v[0],
                                A = v[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? A(_(p, l, m)) : (E.current = !0);
                                }, [m, p, l]),
                                (0, r.useEffect)(() => {
                                    b(o);
                                }, [o]),
                                (0, r.useEffect)(
                                    () => () => {
                                        h.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [h],
                                ),
                                s().createElement(a.Provider, { value: h }, c)
                            );
                        },
                        () => (0, r.useContext)(a),
                    ];
                };
            },
            527: (e, t, a) => {
                'use strict';
                a.r(t), a.d(t, { mouse: () => i, onResize: () => r });
                var n = a(2472),
                    u = a(1176);
                const r = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const i = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, u.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, u.R)(!0);
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
                            : (0, u.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let u = !0;
                                    const r = `mouse${t}`,
                                        i = s[t]((e) => a([e, 'outside']));
                                    function o(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            u &&
                                                (i(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (u = !1));
                                        }
                                    );
                                };
                            })(a)),
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
                            e.enabled && (0, u.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, u.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => u,
                        graphicsQuality: () => s,
                    });
                var n = a(527);
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
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
                a.d(t, { O: () => u });
                var n = a(5959);
                const u = { view: a(7641), client: n };
            },
            3722: (e, t, a) => {
                'use strict';
                function n(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function u(e, t, a) {
                    return `url(${n(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => u, getTextureUrl: () => n });
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => u });
                var n = a(2472);
                const u = {
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
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => u.W,
                        displayStatusIs: () => B,
                        events: () => r.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => F,
                        getScale: () => p,
                        getSize: () => d,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => f,
                        isFocused: () => A,
                        pxToRem: () => b,
                        remToPx: () => v,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => w,
                    });
                var n = a(3722),
                    u = a(6112),
                    r = a(6538),
                    s = a(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, a, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, n);
                }
                function c(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function A() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function F() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(u.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === u.W[t]), e),
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
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const n = ['args'];
                const u = 2,
                    r = 16,
                    s = 32,
                    i = 64,
                    o = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        u = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                    return u;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((u = r),
                                              Object.entries(u).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var u;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? u : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, a) => {
                'use strict';
                function n() {}
                a.d(t, { ZT: () => n, jv: () => r, yR: () => u });
                function u(e) {
                    return e;
                }
                function r() {
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
                a.d(t, { Z: () => u });
                var n = a(6179);
                const u = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            4532: (e, t, a) => {
                'use strict';
                a.d(t, { M: () => u });
                var n = a(6179);
                const u = (e, t = []) => {
                    const a = (0, n.useRef)(),
                        u = (0, n.useCallback)((...t) => {
                            a.current && a.current(), (a.current = e(...t));
                        }, t);
                    return (
                        (0, n.useEffect)(
                            () => () => {
                                a.current && a.current();
                            },
                            [u],
                        ),
                        u
                    );
                };
            },
            9653: (e, t, a) => {
                'use strict';
                a.d(t, { q: () => s });
                var n = a(6179);
                function u(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return r(e, t);
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
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const s = () => {
                    const e = (0, n.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        a = (e, a) => {
                            t(e).set(a, a);
                        },
                        r = (e, a) => {
                            t(e).delete(a);
                        },
                        s = (e, ...a) => {
                            for (var n, r = u(t(e).values()); !(n = r()).done; ) {
                                (0, n.value)(...a);
                            }
                        };
                    return (0, n.useMemo)(() => ({ on: a, off: r, trigger: s }), []);
                };
            },
            3815: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => r });
                var n = a(6179);
                const u = [];
                function r(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), u)
                    );
                }
            },
            5415: (e, t, a) => {
                'use strict';
                a.d(t, { Aq: () => o, GS: () => l, cJ: () => s, fd: () => i });
                var n = a(6179),
                    u = a(7739),
                    r = a(1043);
                let s, i, o;
                !(function (e) {
                    (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                    })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge');
                    })(o || (o = {}));
                const l = () => {
                    const e = (0, n.useContext)(u.YN),
                        t = e.width,
                        a = e.height,
                        r = ((e) => {
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
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: a };
                };
            },
            2039: (e, t, a) => {
                'use strict';
                a.d(t, { b: () => u });
                var n = a(6179);
                const u = (e) => {
                    (0, n.useEffect)(e, []);
                };
            },
            560: (e, t, a) => {
                'use strict';
                a.d(t, { B: () => u });
                var n = a(6179);
                function u(e, t, a = []) {
                    const u = (0, n.useRef)(0),
                        r = (0, n.useCallback)(() => window.clearInterval(u.current), a || []);
                    (0, n.useEffect)(() => r, [r]);
                    const s = (null != a ? a : []).concat([t]);
                    return [
                        (0, n.useCallback)((a) => {
                            (u.current = window.setInterval(() => e(a, !0), t)), e(a, !1);
                        }, s),
                        r,
                    ];
                }
            },
            4419: (e, t, a) => {
                'use strict';
                a.d(t, { y: () => r });
                var n = a(8045),
                    u = a(6179);
                const r = (e, t, a = !0) => {
                    const r = (0, u.useCallback)(
                        (e) => {
                            const a = e[0];
                            t && t(a);
                        },
                        [t],
                    );
                    (0, u.useEffect)(() => {
                        if (!e.current || !a) return;
                        const t = new n.Z((e) => r(e));
                        return (
                            t.observe(e.current),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [r, a, e]);
                };
            },
            4489: (e, t, a) => {
                'use strict';
                a.d(t, { f: () => r });
                var n = a(5139),
                    u = a(6179);
                function r(e, t, a) {
                    const r = (0, u.useMemo)(() => (0, n.Z)(a, e), t);
                    return (0, u.useEffect)(() => r.cancel, [r]), r;
                }
            },
            5521: (e, t, a) => {
                'use strict';
                let n, u;
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
                    })(u || (u = {}));
            },
            9480: (e, t, a) => {
                'use strict';
                function n(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                a.d(t, { U2: () => n, UI: () => s, sE: () => o, tP: () => i, v_: () => l });
                const u = n;
                function r(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function s(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, n) => t(null == e ? void 0 : e.value, a, n));
                }
                function i(e, t = 0, a = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let n = Math.max(t, 0);
                            const u = Math.min(
                                a,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (n > u) return { done: !0, value: null };
                                    const t = e[n++];
                                    return t ? { value: r(t), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function o(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        const n = r(e[a]);
                        if (t(n, a, e)) return n;
                    }
                }
                function l(e, t = ',') {
                    let a = '';
                    for (let n = 0; n < e.length; n++) {
                        n > 0 && (a += t);
                        const r = u(e, n);
                        a += null == r ? '' : String(r);
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
                a.d(t, { h: () => u });
                var n = a(9174);
                function u(e) {
                    const t = {};
                    for (const a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            const u = e[a];
                            t[a] = (0, n.aD)(u);
                        }
                    return t;
                }
            },
            9690: (e, t, a) => {
                'use strict';
                a.d(t, { HG: () => s });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    u = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const r = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    s = (e) =>
                        r
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let a = u.length - 1; a >= 0; a--) for (; e >= u[a]; ) (t += n[a]), (e -= u[a]);
                                  return t;
                              })(e);
            },
            7727: (e, t, a) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e);
                }
                a.d(t, { $: () => u, G: () => n });
                const u = {
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
                let n;
                function u(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                function s(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                a.d(t, { BN: () => r, Eg: () => o, Uw: () => g, e: () => s, uF: () => u, v2: () => n, z4: () => i }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(n || (n = {}));
                const i = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    l = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    c = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    m = (e, t, a = n.left) => e.split(t).reduce(a === n.left ? l : c, []),
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
                    _ = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (e, t = n.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return _.includes(a)
                            ? d(e)
                            : ((e, t = n.left) => {
                                  let a = [];
                                  const u =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = i(e);
                                  return m(r, /( )/, t).forEach((e) => (a = a.concat(m(e, u, n.left)))), a;
                              })(e, t);
                    },
                    g = (e, t, a) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : E(e, t)));
            },
            5139: (e, t, a) => {
                'use strict';
                function n(e, t, a, n) {
                    let u,
                        r = !1,
                        s = 0;
                    function i() {
                        u && clearTimeout(u);
                    }
                    function o(...o) {
                        const l = this,
                            c = Date.now() - s;
                        function m() {
                            (s = Date.now()), a.apply(l, o);
                        }
                        r ||
                            (n && !u && m(),
                            i(),
                            void 0 === n && c > e
                                ? m()
                                : !0 !== t &&
                                  (u = setTimeout(
                                      n
                                          ? function () {
                                                u = void 0;
                                            }
                                          : m,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((n = a), (a = t), (t = void 0)),
                        (o.cancel = function () {
                            i(), (r = !0);
                        }),
                        o
                    );
                }
                a.d(t, { Z: () => n });
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                var n = a(3138);
                class u {
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
                        return window.__dataTracker || (window.__dataTracker = new u()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, a = 0, u = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, a, u);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(r) : (this._views[a] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                u.__instance = void 0;
                const r = u;
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
            4179: (e, t, a) => {
                'use strict';
                a.d(t, { B0: () => o, c9: () => A, wU: () => F, ry: () => v, Eu: () => h, SW: () => f, P3: () => D });
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
                const u = n;
                var r = a(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    };
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = a(5521),
                    E = a(3138);
                const g = ['args'];
                function p(e, t, a, n, u, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(n, u);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    v = (function () {
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
                                    return new Promise(function (n, u) {
                                        var r = e.apply(t, a);
                                        function s(e) {
                                            p(r, n, u, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            p(r, n, u, s, i, 'throw', e);
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
                    A = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        u = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                    return u;
                                })(t, g);
                            void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, r, {
                                          arguments:
                                              ((n = u),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    C = () => A(o.CLOSE),
                    f = () => A(o.POP_OVER, { on: !1 }),
                    D = (e, t, a, n, u = R.invalid('resId'), r) => {
                        const s = E.O.view.getViewGlobalPosition(),
                            i = a.getBoundingClientRect(),
                            l = i.x,
                            c = i.y,
                            m = i.width,
                            d = i.height,
                            _ = {
                                x: E.O.view.pxToRem(l) + s.x,
                                y: E.O.view.pxToRem(c) + s.y,
                                width: E.O.view.pxToRem(m),
                                height: E.O.view.pxToRem(d),
                            };
                        A(o.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: u,
                            direction: t,
                            bbox: b(_),
                            on: !0,
                            args: r,
                        });
                    },
                    F = () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                    B = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var k = a(7572);
                const w = u.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: k.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: m,
                        DateFormatType: d,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => A(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: f,
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            A(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: D,
                        addEscapeListener: (e) => {
                            const t = (t) => B(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, C);
                        },
                        handleViewEvent: A,
                        onBindingsReady: v,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: F,
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const u = Object.prototype.toString.call(t[n]);
                                    if (u.startsWith('[object CoherentArrayProxy]')) {
                                        const u = t[n];
                                        a[n] = [];
                                        for (let t = 0; t < u.length; t++) a[n].push({ value: e(u[t].value) });
                                    } else
                                        u.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[n] = e(t[n]))
                                            : (a[n] = t[n]);
                                }
                            return a;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = y;
            },
            3618: (e, t, a) => {
                'use strict';
                a.d(t, { w: () => _ });
                var n = a(6483),
                    u = a.n(n),
                    r = a(3415),
                    s = a(4419),
                    i = a(6179),
                    o = a.n(i),
                    l = a(6143),
                    c = a(3310),
                    m = a(131),
                    d = a(9053);
                const _ = o().memo(
                    ({
                        text: e,
                        classMix: t,
                        onSizeChanged: a,
                        binding: n,
                        isTooltipEnable: _ = !1,
                        isTruncationAvailable: E = !1,
                        targetId: g,
                        justifyContent: p = d.v2.FlexStart,
                        alignContent: b = d.v2.FlexStart,
                        truncateIdentify: v = d.YA,
                    }) => {
                        const h = (0, i.useRef)(null),
                            A = (0, i.useRef)({ height: 0, width: 0 }),
                            C = (0, i.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            f = C[0],
                            D = C[1],
                            F = (0, i.useMemo)(() => (0, c.s)(e, n), [n, e]),
                            B = (0, i.useMemo)(() => {
                                if (_ && f.isTruncated)
                                    return {
                                        args: { text: e, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: g,
                                    };
                            }, [n, _, g, e, f.isTruncated]),
                            k = (0, i.useCallback)(
                                (e) => {
                                    (A.current.width = e.contentRect.width), (A.current.height = e.contentRect.height);
                                    const t = (0, m.T)(h, F, A.current, v),
                                        n = t[0],
                                        u = t[1];
                                    D({ elementList: n, isTruncated: u, isTruncateFinished: !0 }), a && a(u);
                                },
                                [a, v, F],
                            ),
                            w = (0, i.useMemo)(() => ({ justifyContent: p, alignContent: b }), [b, p]);
                        return (
                            (0, s.y)(h, k, E),
                            o().createElement(
                                'div',
                                {
                                    className: u()(
                                        l.Z.base,
                                        t,
                                        l.Z.base__zeroPadding,
                                        E && l.Z.base__isTruncationAvailable,
                                    ),
                                    style: w,
                                },
                                o().createElement('div', { className: l.Z.unTruncated, ref: h }, F),
                                o().createElement(
                                    r.l,
                                    { tooltipArgs: B },
                                    o().createElement(
                                        'div',
                                        {
                                            className: u()(
                                                l.Z.truncated,
                                                !f.isTruncateFinished && E && l.Z.truncated__hide,
                                            ),
                                            style: w,
                                        },
                                        f.isTruncateFinished && E ? f.elementList : F,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, t, a) => {
                'use strict';
                a.d(t, { s: () => m });
                var n = a(3649),
                    u = a(6799),
                    r = a(6960),
                    s = a(9053);
                const i = (e) => {
                        const t = /[\s\u002d]/g;
                        let a = t.exec(e);
                        if (!a) return [e];
                        const n = [];
                        let u = 0;
                        for (; a; ) n.push(e.slice(u, t.lastIndex)), (u = t.lastIndex), (a = t.exec(e));
                        return u !== e.length && n.push(e.slice(u)), n;
                    },
                    o = (e, t = '') => {
                        const a = [];
                        return (
                            (0, r.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: s.kH.Word, colorTag: t, childList: i(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        u = s.aF[n.charAt(0)];
                                    u === s.kH.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: s.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let a = 0; a < e.length - 1; a++)
                                                      t.push({
                                                          blockType: s.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : a.push({ blockType: u, colorTag: t, childList: [n] });
                                },
                            ),
                            a
                        );
                    },
                    l = (e, t, a = '') => {
                        const n = [];
                        return (
                            (0, r.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...o(e, a));
                                },
                                (e) => {
                                    const u = e[1],
                                        r = void 0 === t[u] ? e[0] : t[u];
                                    'string' == typeof r || 'number' == typeof r
                                        ? n.push(...o(String(r), a))
                                        : n.push({ blockType: s.kH.Binding, colorTag: a, childList: [r] });
                                },
                            ),
                            n
                        );
                    },
                    c = (e, t) => {
                        if (!e) return [t];
                        const a = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === s.kH.NoBreakWrapper) e.childList.push(n), a.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && a.push(e),
                                a.push({ blockType: s.kH.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && a.push(t), a;
                    },
                    m = (e, t = {}) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const t = [];
                            let a = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === s.kH.NoBreakSymbol
                                        ? ((a = !0), t.push(...c(t.pop(), e)))
                                        : (a ? t.push(...c(t.pop(), e)) : t.push(e), (a = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const a = [];
                                return (
                                    (0, r.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            a.push(...l(e, t));
                                        },
                                        (e) => {
                                            a.push(...l(e[2], t, e[1]));
                                        },
                                    ),
                                    a
                                );
                            })((0, n.Eg)((0, n.z4)(e)), t),
                        );
                        return (0, u.w)(a);
                    };
            },
            6799: (e, t, a) => {
                'use strict';
                a.d(t, { w: () => s });
                var n = a(597),
                    u = a(9053);
                const r = (e, t, a) => {
                        const s = [];
                        return (
                            e.childList.forEach((i, o) => {
                                const l = `${a}_${o}`;
                                if ((0, u.dz)(i)) {
                                    const e = i,
                                        t = e.blockType,
                                        a = n.IY[t],
                                        u = r(e, a, l);
                                    s.push(...u);
                                } else s.push(t({ elementList: [i], textBlock: e, key: l }));
                            }),
                            s
                        );
                    },
                    s = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, a) => {
                                t.push(
                                    ...((e, t) => {
                                        const a = [],
                                            s = e.blockType,
                                            i = n.IY[s],
                                            o = r(e, i, t);
                                        return (
                                            s === u.kH.NoBreakWrapper
                                                ? a.push(i({ elementList: o, textBlock: e, key: `${t}` }))
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
                    let u = t.exec(e),
                        r = 0;
                    for (; u; ) r !== u.index && a(e.slice(r, u.index)), n(u), (r = t.lastIndex), (u = t.exec(e));
                    r !== e.length && a(e.slice(r));
                };
            },
            131: (e, t, a) => {
                'use strict';
                a.d(t, { T: () => c });
                var n = a(6179),
                    u = a.n(n),
                    r = a(9053);
                const s = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    i = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    o = (e, t, a) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = i(e, t),
                            u = e.textContent.length,
                            r = e.offsetWidth / u,
                            s = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / r);
                            return n >= a ? [!0, a + s] : [!1, n];
                        }
                        const o = Math.max(a + s, 0);
                        return u < o ? [!1, 0] : [!0, o];
                    },
                    l = (e, t, a, n, s, i) => {
                        let c = -1,
                            m = null;
                        for (let d = a; d >= 0; d--) {
                            const a = e[d],
                                _ = Number(e[d].getAttribute(r.bF));
                            if (_ === r.kH.LineBreak || _ === r.kH.NewLine || _ === r.kH.Binding) continue;
                            const E = a.textContent || '';
                            if (!(a.childElementCount > 1)) {
                                const e = o(a, n, s),
                                    r = e[0],
                                    l = e[1];
                                if (!r) {
                                    l > 0 && (s -= l);
                                    continue;
                                }
                                const _ = E.slice(0, E.length - l) + i,
                                    g = t[d];
                                (m = u().cloneElement(g, g.props, _)), (c = d);
                                break;
                            }
                            {
                                const e = a.children,
                                    r = t[d],
                                    o = r.props.children,
                                    _ = l(e, o, e.length - 1, n, s, i),
                                    g = _[0],
                                    p = _[1];
                                if (!(g < 0)) {
                                    const e = o.slice(0, g);
                                    (m = u().cloneElement(r, r.props, e, p)), (c = d);
                                    break;
                                }
                                s -= E.length;
                            }
                        }
                        return [c, m];
                    },
                    c = (e, t, a, n = r.YA) => {
                        const u = [...t],
                            o = e.current;
                        if (!o) return [u, !1];
                        const c = a.height,
                            m = a.width,
                            d = o.lastElementChild;
                        if (!s(d, c) && i(d, m) <= 0) return [u, !1];
                        const _ = o.children,
                            E = ((e, t) => {
                                let a = 0,
                                    n = e.length - 1;
                                for (; n - a >= 0; ) {
                                    const u = a + Math.ceil(0.5 * (n - a));
                                    s(e[u], t) ? (n = u - 1) : (a = u + 1);
                                }
                                return a - 1;
                            })(_, c);
                        if (E < 0) return [u, !1];
                        const g = l(_, u, E, m, n.length, n),
                            p = g[0],
                            b = g[1];
                        return b && (u.splice(p, 1, b), u.splice(p + 1)), [u, !0];
                    };
            },
            9053: (e, t, a) => {
                'use strict';
                let n, u, r;
                a.d(t, { YA: () => i, aF: () => l, bF: () => o, dz: () => s, kH: () => n, v2: () => u }),
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
                    })(u || (u = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(r || (r = {}));
                const s = (e) => void 0 !== e.childList,
                    i = '...',
                    o = 'data-block-type',
                    l = { [r.NBSP]: n.NoBreakSymbol, [r.ZWNBSP]: n.NoBreakSymbol, [r.NEW_LINE]: n.LineBreak };
            },
            597: (e, t, a) => {
                'use strict';
                a.d(t, { IY: () => c });
                var n = a(6179),
                    u = a.n(n),
                    r = a(9053),
                    s = a(9627),
                    i = a(7629);
                const o = (e) => ({ color: `#${e}` }),
                    l = ({ elementList: e, textBlock: t, key: a }) => {
                        const n = t.colorTag;
                        return n
                            ? s.Z[n]
                                ? u().createElement(
                                      'span',
                                      { key: a, 'data-block-type': t.blockType, className: s.Z[n] },
                                      e,
                                  )
                                : u().createElement('span', { key: a, 'data-block-type': t.blockType, style: o(n) }, e)
                            : u().createElement('span', { key: a, 'data-block-type': t.blockType }, e);
                    },
                    c = {
                        [r.kH.Word]: l,
                        [r.kH.NoBreakSymbol]: l,
                        [r.kH.Binding]: ({ elementList: e, textBlock: t, key: a }) =>
                            u().createElement(
                                'span',
                                { key: a, 'data-block-type': t.blockType },
                                e.map((e) => u().createElement(u().Fragment, { key: a }, e)),
                            ),
                        [r.kH.LineBreak]: ({ key: e }) =>
                            u().createElement('span', {
                                key: e,
                                'data-block-type': r.kH.LineBreak,
                                className: i.Z.lineBreak,
                            }),
                        [r.kH.NewLine]: ({ elementList: e, key: t }) =>
                            u().createElement(
                                'span',
                                { key: t, 'data-block-type': r.kH.NewLine, className: i.Z.newLine },
                                e,
                            ),
                        [r.kH.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            u().createElement(
                                'span',
                                { key: t, 'data-block-type': r.kH.NoBreakWrapper, className: i.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            3458: (e, t, a) => {
                'use strict';
                let n;
                a.d(t, { Z0: () => u, in: () => n, sx: () => r }),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(n || (n = {}));
                const u = 'tooltip_watched',
                    r = 2;
                let s;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(s || (s = {}));
            },
            4828: (e, t, a) => {
                'use strict';
                a.d(t, { AB: () => d, D9: () => n, eX: () => r, sC: () => s, sk: () => o, tL: () => u, x3: () => l });
                const n = 'crew',
                    u = 2e3;
                let r, s, i, o, l, c, m;
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
                    })(s || (s = {})),
                    (function (e) {
                        e.DocumentChange = 'document_change_dialog';
                    })(i || (i = {})),
                    (function (e) {
                        (e.PremiumTooltip = 'personal_file_view_premium_tooltip'),
                            (e.MstlTooltip = 'personal_file_view_mstl_tooltip');
                    })(o || (o = {})),
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
            1943: (e, t, a) => {
                'use strict';
                a.d(t, { Jp: () => m, Sr: () => _ });
                var n = a(6179),
                    u = a(3458);
                const r = ['action', 'timeLimit'];
                const s = 'metrics',
                    i = () => Date.now(),
                    o = ({ partnerID: e, item: t, parentScreen: a, itemState: n, info: u }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: a || null,
                        item_state: n || null,
                        additional_info: u || null,
                    }),
                    l = (e, t) => {
                        const a = (0, n.useCallback)(
                            (a, n = u.in.Info, r) => {
                                r || (r = {}),
                                    Object.keys(r).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: a,
                                            logLevel: n,
                                            params: JSON.stringify(r),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, n) => a(e, t, n);
                    },
                    c = (e, t) => {
                        const a = l(e, t),
                            u = (0, n.useRef)(new Map()),
                            r = (0, n.useRef)(new Map()),
                            s = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = u.current.get(e);
                                    (void 0 !== t && t > 0) || u.current.set(e, i());
                                },
                                [u],
                            ),
                            o = (0, n.useCallback)(() => {
                                u.current.clear(), r.current.clear();
                            }, [u, r]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== u.current.get(e) &&
                                        void 0 === r.current.get(e) &&
                                        r.current.set(e, i());
                                },
                                [u, r],
                            ),
                            m = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = u.current.get(e);
                                    if (void 0 === t) return;
                                    const a = r.current.get(e);
                                    if (void 0 === a) return;
                                    r.current.delete(e);
                                    const n = i() - a;
                                    u.current.set(e, t + n);
                                },
                                [u, r],
                            ),
                            d = (0, n.useCallback)(
                                (e, t = 0, n, s) => {
                                    const o = u.current.get(e);
                                    if (void 0 === o) return;
                                    void 0 !== r.current.get(e) && m(e), u.current.delete(e);
                                    const l = (i() - o) / 1e3;
                                    l <= t ||
                                        ((s = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(s, l)),
                                        a(e, n, s));
                                },
                                [u, r, a, m],
                            );
                        return [(e) => s(e), (e, t, a, n) => d(e, t, a, n), () => o(), (e) => c(e), (e) => m(e)];
                    },
                    m = (e) => {
                        const t = l(e, s),
                            a = (0, n.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, o(e));
                                },
                                [t],
                            );
                        return (e) => a(e);
                    },
                    d = (e) => {
                        const t = c(e, s),
                            a = t[0],
                            u = t[1],
                            r = t[2],
                            i = t[3],
                            l = t[4],
                            m = (0, n.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        a = e.timeLimit,
                                        n = e.logLevel;
                                    u(t, a, n, o(e));
                                },
                                [u],
                            );
                        return [(e) => a(e), (e) => m(e), () => r(), (e) => i(e), (e) => l(e)];
                    },
                    _ = (e, t) => {
                        const a = d(e),
                            s = a[0],
                            i = a[1],
                            o = t.action,
                            l = t.timeLimit,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(t, r);
                        return (0, n.useMemo)(
                            () => ({
                                onShow: () => s(o || u.Z0),
                                onHide: () => i(Object.assign({ action: o || u.Z0, timeLimit: l || u.sx }, c)),
                            }),
                            [o, l, c, s, i],
                        );
                    };
            },
            7362: (e, t, a) => {
                'use strict';
                var n = a(7739),
                    u = a(6179),
                    r = a.n(u),
                    s = a(6483),
                    i = a.n(s),
                    o = a(926),
                    l = a.n(o),
                    c = a(5415);
                const m = ['children', 'className'];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const _ = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: l().SMALL_WIDTH,
                        [c.fd.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    E = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: l().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    g = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: l().SMALL,
                        [c.cJ.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [c.cJ.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [c.cJ.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    p = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, m);
                        const u = (0, c.GS)(),
                            s = u.mediaWidth,
                            o = u.mediaHeight,
                            l = u.mediaSize;
                        return r().createElement('div', d({ className: i()(a, _[s], E[o], g[l]) }, n), t);
                    },
                    b = ['children'];
                const v = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, b);
                    return r().createElement(n.ZN, null, r().createElement(p, a, t));
                };
                var h = a(493),
                    A = a.n(h),
                    C = a(7727);
                const f = r().memo;
                const D = {
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
                    F = { mouseEnter: 'highlight', click: 'play' },
                    B = (e, { active: t, enableInteractiveActiveTab: a = !1 }) => !!a || e !== t,
                    k = f(function (e) {
                        const t = e.active,
                            a = e.tabs,
                            n = e.onClick,
                            u = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.className,
                            l = e.classNames,
                            c = e.sounds,
                            m = void 0 === c ? F : c,
                            d = (t) => () => {
                                B(t, e) && (m.click && (0, C.G)(m.click), null == n || n(t));
                            },
                            _ = (t) => () => {
                                B(t, e) && (m.mouseEnter && (0, C.G)(m.mouseEnter), null == u || u(t));
                            },
                            E = (t) => () => {
                                B(t, e) && (m.mouseLeave && (0, C.G)(m.mouseLeave), null == s || s(t));
                            };
                        return r().createElement(
                            'div',
                            { className: i()(D.base, o) },
                            a.map(({ id: n, title: u, notification: s }, o) => {
                                var c;
                                return r().createElement(
                                    'div',
                                    {
                                        className: i()(
                                            D.tab,
                                            n === t && i()(D.tab__active, null == l ? void 0 : l.activeTab),
                                            !B(n, e) && D.tab__nonInteractive,
                                            null == l ? void 0 : l.tab,
                                        ),
                                        key: n,
                                        onClick: d(n),
                                        onMouseEnter: _(n),
                                        onMouseLeave: E(n),
                                    },
                                    ((e, t) => !((e, t) => e.length - 1 === t)(e, t))(a, o) &&
                                        r().createElement('div', {
                                            className: i()(D.divider, null == l ? void 0 : l.divider),
                                        }),
                                    r().createElement(
                                        'div',
                                        { className: i()(D.state, null == l ? void 0 : l.state) },
                                        r().createElement('div', {
                                            className: i()(D.highlight, null == l ? void 0 : l.highlight),
                                        }),
                                        r().createElement('div', {
                                            className: i()(
                                                D.border,
                                                D.border__left,
                                                null == l ? void 0 : l.border,
                                                null == l ? void 0 : l.borderLeft,
                                            ),
                                        }),
                                        r().createElement('div', {
                                            className: i()(
                                                D.border,
                                                D.border__right,
                                                null == l ? void 0 : l.border,
                                                null == l ? void 0 : l.borderRight,
                                            ),
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: i()(D.title, null == l ? void 0 : l.title) },
                                        u,
                                    ),
                                    void 0 !== s &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: i()(
                                                    D.notification,
                                                    D[`notification__${s.type}`],
                                                    D[`notification__${null != (c = s.size) ? c : 'medium'}`],
                                                    null == l ? void 0 : l.notification,
                                                ),
                                            },
                                            'dot' !== s.type && s.value,
                                        ),
                                );
                            }),
                        );
                    });
                var w = a(3138),
                    y = a(5521);
                a(4179);
                const S = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function N(e = y.n.NONE, t = S, a = !1) {
                    (0, u.useEffect)(() => {
                        if (e !== y.n.NONE)
                            return (
                                window.addEventListener('keydown', n, a),
                                () => {
                                    window.removeEventListener('keydown', n, a);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (w.O.view.isEventHandled()) return;
                                w.O.view.setEventHandled(), t(n), a && n.stopPropagation();
                            }
                        }
                    }, [t, e, a]);
                }
                var I = a(3403),
                    T = a(3215);
                let L, x, M, P;
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
                    })(M || (M = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded');
                    })(P || (P = {}));
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
                var z = a(794),
                    V = a(7701),
                    G = a(9480),
                    j = a(7078),
                    $ = a(3618);
                let U;
                !(function (e) {
                    (e[(e.none = 0)] = 'none'),
                        (e[(e.increase = 1)] = 'increase'),
                        (e[(e.decrease = 2)] = 'decrease'),
                        (e[(e.mixed = 3)] = 'mixed');
                })(U || (U = {}));
                const Z = {
                        base: 'BuffIcon_base_c8',
                        base__increase: 'BuffIcon_base__increase_60',
                        base__decrease: 'BuffIcon_base__decrease_31',
                        base__mixed: 'BuffIcon_base__mixed_23',
                    },
                    X = r().memo(function ({ buffIconType: e, className: t }) {
                        return e === U.none
                            ? null
                            : r().createElement('div', { className: i()(Z.base, Z[`base__${U[e]}`], t) });
                    });
                var q = a(7030);
                const K = 'Delta_base_3e',
                    Y = 'Delta_base__positive_82',
                    Q = 'Delta_base__negative_86',
                    J = r().memo(function ({ isPositive: e, width: t, isUseAnim: a }) {
                        const n = (0, q.useSpring)({
                                from: { left: 0, width: 0 },
                                left: e ? 0 : t,
                                width: e ? 0 : Math.abs(t),
                                config: { duration: oe },
                                delay: e ? 0 : oe,
                                immediate: !a,
                            }),
                            u = (0, q.useSpring)({
                                from: { left: 2, width: 0 },
                                left: 2,
                                width: e ? t : 0,
                                config: { duration: oe },
                                delay: e || 0 === t ? oe : 0,
                                immediate: !a,
                            });
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(q.animated.div, { className: i()(K, Q), style: n }),
                            r().createElement(q.animated.div, { className: i()(K, Y), style: u }),
                        );
                    }),
                    ee = 'Indicator_base_b9',
                    te = 'Indicator_progress_ce',
                    ae = 'Indicator_progressMarker_b4',
                    ne = 'Indicator_indicator_bc',
                    ue = 'Indicator_indicator__start_80',
                    re = 'Indicator_indicator__end_3b',
                    se = 'Indicator_marker_f7',
                    ie = 'Indicator_valueLine_1d',
                    oe = 300,
                    le = r().memo(function ({
                        minValue: e,
                        maxValue: t,
                        value: a,
                        markerValue: n,
                        delta: u,
                        isUseAnim: s,
                    }) {
                        const o = n === e ? 2 : (n / t) * 254,
                            l = (a / t) * 254,
                            c = (u / t) * 254,
                            m = u > 0,
                            d = { config: { duration: oe }, immediate: !s },
                            _ = (0, q.useSpring)(Object.assign({ from: { left: 2 }, to: { left: o }, delay: oe }, d)),
                            E = (0, q.useSpring)(Object.assign({ from: { width: e }, to: { width: l }, delay: oe }, d));
                        return r().createElement(
                            'div',
                            { className: ee },
                            r().createElement(
                                'div',
                                { className: te },
                                r().createElement('div', { className: i()(ne, ue) }),
                                r().createElement(q.animated.div, { className: ie, style: E }),
                                r().createElement(
                                    'div',
                                    { className: ae },
                                    r().createElement(
                                        q.animated.div,
                                        { className: se, style: _ },
                                        r().createElement(J, { isPositive: m, width: c, isUseAnim: s }),
                                    ),
                                ),
                                r().createElement('div', { className: i()(ne, re) }),
                            ),
                        );
                    });
                let ce;
                !(function (e) {
                    (e.None = 'none'), (e.Increase = 'increase'), (e.Decrease = 'decrease');
                })(ce || (ce = {}));
                var me = a(9053);
                const de = {
                        base: 'Param_base_51',
                        value: 'Param_value_51',
                        icon: 'Param_icon_37',
                        name: 'Param_name_82',
                        highlight: 'Param_highlight_81',
                        highlight__increase: 'Param_highlight__increase_35',
                        highlight__decrease: 'Param_highlight__decrease_ec',
                    },
                    _e = r().memo(function ({
                        id: e,
                        value: t,
                        tooltipID: a,
                        isEnabled: n,
                        highlightType: u,
                        localizedName: s,
                    }) {
                        return r().createElement(
                            j.t,
                            {
                                args: { tooltipId: a, paramId: e },
                                targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                isEnabled: n,
                            },
                            r().createElement(
                                'div',
                                { className: de.base },
                                r().createElement($.w, { justifyContent: me.v2.FlexEnd, classMix: de.value, text: t }),
                                r().createElement('div', {
                                    className: de.icon,
                                    style: { backgroundImage: `url('R.images.gui.maps.icons.vehParams.small.${e}')` },
                                }),
                                r().createElement(
                                    'div',
                                    { className: de.name },
                                    s || R.strings.menu.tank_params.$dyn(e),
                                ),
                                u !== ce.None &&
                                    r().createElement('div', { className: i()(de.highlight, de[`highlight__${u}`]) }),
                            ),
                        );
                    }),
                    Ee = 'Group_base_66',
                    ge = 'Group_group_07',
                    pe = 'Group_hoverBg_97',
                    be = 'Group_hoverBg__scrollable_2a',
                    ve = 'Group_groupHeader_f5',
                    he = 'Group_name_21',
                    Ae = 'Group_arrow_96',
                    Ce = 'Group_arrow__opened_47',
                    fe = 'Group_params_88',
                    De = 'Group_params__opened_9a',
                    Fe = 'Group_separator_b5',
                    Be = 'Group_right_13',
                    ke = 'Group_buff_fa',
                    we = 'Group_value_00',
                    ye = 'Group_value__additional_81';
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
                const Ne = (0, I.Pi)(
                        ({
                            id: e,
                            isOpen: t,
                            params: a,
                            extraParams: n,
                            tooltipID: u,
                            indicator: s,
                            value: o,
                            additionalValue: l,
                            buffIconType: c,
                            isEnabled: m,
                            isScrollable: d,
                        }) => {
                            const _ = W().controls,
                                E = n && n.length > 0;
                            return r().createElement(
                                'div',
                                { className: Ee },
                                r().createElement(
                                    j.t,
                                    {
                                        args: { tooltipId: u, paramId: e },
                                        targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                        isEnabled: m,
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: ge,
                                            onClick: () => _.onGroupClick(e),
                                            onMouseEnter: C.$.playHighlight,
                                        },
                                        r().createElement('div', { className: i()(pe, d && be) }),
                                        r().createElement(
                                            'div',
                                            { className: ve },
                                            r().createElement('div', { className: i()(Ae, t && Ce) }),
                                            r().createElement(
                                                'div',
                                                { className: he },
                                                R.strings.menu.tank_params.$dyn(e),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: Be },
                                                r().createElement(X, { buffIconType: c, className: ke }),
                                                l && r().createElement($.w, { classMix: i()(we, ye), text: l }),
                                                r().createElement($.w, { classMix: we, text: o }),
                                            ),
                                        ),
                                        r().createElement(le, s),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: i()(fe, t && De) },
                                    G.UI(a, (e) => r().createElement(_e, Se({ key: e.id }, e))),
                                    E && r().createElement('div', { className: Fe }),
                                    G.UI(n, (e) => r().createElement(_e, Se({ key: e.id }, e))),
                                ),
                            );
                        },
                    ),
                    Ie = {
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
                    xe = (0, I.Pi)(({ showBackground: e = !0, className: t }) => {
                        const a = W().model,
                            n = (0, u.useState)(!1),
                            s = n[0],
                            o = n[1],
                            l = a.groups.get(),
                            c = (0, V.c4)(Le);
                        return (
                            (0, u.useEffect)(() => {
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
                            r().createElement(
                                'div',
                                { className: i()(Ie.base, e && Ie.base__bg, t) },
                                r().createElement(
                                    z.X.Vertical.Area.Default,
                                    {
                                        api: c,
                                        barClassNames: { base: Ie.barBase },
                                        scrollClassName: Ie.scroll,
                                        scrollClassNames: { content: Ie.content },
                                    },
                                    r().createElement(
                                        'div',
                                        { className: Ie.groups },
                                        G.UI(l, (e) =>
                                            r().createElement(Ne, Te({ key: e.id }, e, { isScrollable: s })),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Re = (0, u.memo)(function (e) {
                        const t = (0, u.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return r().createElement(H, { options: t }, r().createElement(xe, e));
                    }),
                    Me = {
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
                    Pe = [
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
                class He extends r().PureComponent {
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
                            u = e.side,
                            s = e.type,
                            o = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            m = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        u = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                    return u;
                                })(e, Pe)),
                            E = i()(Me.base, Me[`base__${s}`], Me[`base__${u}`], null == o ? void 0 : o.base),
                            g = i()(Me.icon, Me[`icon__${s}`], Me[`icon__${u}`], null == o ? void 0 : o.icon),
                            p = i()(Me.glow, null == o ? void 0 : o.glow),
                            b = i()(Me.caption, Me[`caption__${s}`], null == o ? void 0 : o.caption),
                            v = i()(Me.goto, null == o ? void 0 : o.goto);
                        return r().createElement(
                            'div',
                            Oe(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                _,
                            ),
                            'info' !== s && r().createElement('div', { className: Me.shine }),
                            r().createElement('div', { className: g }, r().createElement('div', { className: p })),
                            r().createElement('div', { className: b }, t),
                            n && r().createElement('div', { className: v }, n),
                        );
                    }
                }
                He.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const We = ({ onClick: e }) =>
                        r().createElement(He, {
                            onClick: e,
                            caption: R.strings.crew.common.navigation.aboutCrew(),
                            type: 'info',
                        }),
                    ze = 'common_close_0e',
                    Ve = ({ onClick: e, label: t = R.strings.menu.viewHeader.closeBtn.label() }) =>
                        r().createElement(He, {
                            onClick: e,
                            classNames: { base: ze },
                            caption: t,
                            type: 'close',
                            side: 'right',
                        }),
                    Ge = 'TopButtons_base_ef',
                    je = 'TopButtons_leftButtons_9e',
                    $e = 'TopButtons_rightButtons_33',
                    Ue = r().memo(function ({
                        backButtonLabel: e,
                        closeButtonLabel: t = R.strings.menu.viewHeader.closeBtn.label(),
                        onBackClick: a,
                        onAboutClick: n,
                        onCloseClick: u,
                        className: s,
                        classNames: o,
                    }) {
                        return r().createElement(
                            'div',
                            { className: i()(Ge, s) },
                            r().createElement(
                                'div',
                                { className: i()(je, null == o ? void 0 : o.leftButtons) },
                                e && a && r().createElement(He, { onClick: a, caption: e, type: 'back' }),
                            ),
                            r().createElement(
                                'div',
                                { className: i()($e, null == o ? void 0 : o.rightButtons) },
                                n && r().createElement(We, { onClick: n }),
                                u && r().createElement(Ve, { onClick: u, label: t }),
                            ),
                        );
                    });
                var Ze = a(9690),
                    Xe = a(3649);
                const qe = {
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
                let Ke, Ye;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(Ke || (Ke = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(Ye || (Ye = {}));
                const Qe = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: a,
                        vehicleType: n,
                        vehicleLvl: u,
                        tags: s,
                        isPremiumIGR: o,
                        size: l = Ke.extraSmall,
                        type: c = Ye.colored,
                        className: m,
                        classNames: d,
                        isShortName: _ = !1,
                    }) => {
                        const E = `${(0, Xe.BN)(n)}${e ? '_elite' : ''}`,
                            g = R.images.gui.maps.icons.vehicleTypes.big.$dyn(E);
                        return r().createElement(
                            'div',
                            {
                                className: i()(
                                    qe.base,
                                    qe[`base__size${(0, Xe.e)(l)}`],
                                    qe[`base__type${(0, Xe.e)(c)}`],
                                    s && G.UI(s, (e) => qe[`base__tag${(0, Xe.e)(e)}`]),
                                    m,
                                ),
                            },
                            r().createElement(
                                'div',
                                { className: i()(qe.level, null == d ? void 0 : d.level) },
                                (0, Ze.HG)(u),
                            ),
                            r().createElement('div', {
                                className: i()(qe.type, e && qe.type__elite, null == d ? void 0 : d.typeIcon),
                                style: { backgroundImage: `url(${g})` },
                            }),
                            o && r().createElement('div', { className: qe.premiumIGR }),
                            r().createElement(
                                'div',
                                { className: i()(qe.name, null == d ? void 0 : d.name) },
                                _ ? a : t,
                            ),
                        );
                    },
                    Je = 'VehicleParamsDecorator_base_32',
                    et = 'VehicleParamsDecorator_vehicleInfo_02',
                    tt = 'VehicleParamsDecorator_tankName_ac',
                    at = 'VehicleParamsDecorator_tankLvl_26',
                    nt = 'VehicleParamsDecorator_type_e7',
                    ut = 'VehicleParamsDecorator_tip_6c',
                    rt = ['children', 'isPerkTipShown'];
                function st() {
                    return (
                        (st =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        st.apply(this, arguments)
                    );
                }
                const it = (e) => {
                    let t = e.children,
                        a = e.isPerkTipShown,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, rt);
                    return r().createElement(
                        'div',
                        { className: Je },
                        r().createElement(
                            Qe,
                            st({ className: et, classNames: { name: tt, level: at, typeIcon: nt } }, n, {
                                isShortName: !0,
                            }),
                        ),
                        t,
                        a &&
                            r().createElement(
                                'div',
                                { className: ut },
                                R.strings.crew.vehicleParamsDecorator.perkTip(),
                            ),
                    );
                };
                var ot = a(5499),
                    lt = a(4598),
                    ct = a(1612),
                    mt = a(9174),
                    dt = a(3946);
                const _t = (0, T.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives(['currentTabId', 'background', 'nation', 'backButtonLabel']),
                                    {
                                        tabs: e.array('tabs'),
                                        vehicleInfo: e.object('vehicleInfo'),
                                        isTankmanContainerTTCVisible: mt.LO.box(!1),
                                    },
                                ),
                                a = (0, dt.Om)(() => G.UI(t.tabs.get(), lt.yR)),
                                n = (0, dt.Om)(() => {
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
                                (0, ct.h)({
                                    setTankmanContainerTTCVisible: (e) => t.isTankmanContainerTTCVisible.set(e),
                                }),
                            ),
                    ),
                    Et = _t[0],
                    gt = _t[1],
                    pt = 'Spinner_base_87',
                    bt = 'Spinner_caption_cf',
                    vt = 'Spinner_gear_c4',
                    ht = 'Spinner_logo_bf',
                    At = ({ message: e, className: t, classNames: a }) =>
                        r().createElement(
                            'div',
                            { className: i()(pt, t) },
                            e && r().createElement('div', { className: i()(bt, null == a ? void 0 : a.caption) }, e),
                            r().createElement('div', { className: i()(vt, null == a ? void 0 : a.gear) }),
                            r().createElement('div', { className: i()(ht, null == a ? void 0 : a.logo) }),
                        );
                var Ct = a(3457);
                const ft = 'Error_base_46',
                    Dt = 'Error_alertIcon_04',
                    Ft = 'Error_errorCaption_f2',
                    Bt = 'Error_button_cd',
                    kt = ({ errorBtnLabel: e, errorBtnClickHandler: t, errorMessage: a }) =>
                        r().createElement(
                            'div',
                            { className: ft },
                            r().createElement('div', { className: Dt }),
                            r().createElement('div', { className: Ft }, a),
                            r().createElement(Ct.u5, { size: Ct.qE.medium, mixClass: Bt, onClick: t }, e),
                        );
                kt.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const wt = 'Waiting_base_c5',
                    yt = 'Waiting_blackOverlay_55',
                    St = ({
                        message: e,
                        isError: t,
                        errorMessage: a,
                        errorBtnLabel: n,
                        errorBtnClickHandler: s,
                        overlayAlpha: i,
                    }) => {
                        const o = r().createRef();
                        return (
                            (0, u.useEffect)(() => {
                                const e = o.current;
                                e && i && (e.style.opacity = i);
                            }, [o, i]),
                            r().createElement(
                                'div',
                                { className: wt },
                                r().createElement('div', { className: yt, ref: o }),
                                t
                                    ? r().createElement(kt, {
                                          errorBtnLabel: n,
                                          errorMessage: a,
                                          errorBtnClickHandler: s,
                                      })
                                    : r().createElement(At, { message: e }),
                            )
                        );
                    };
                St.defaultProps = {
                    isError: !1,
                    message: '',
                    overlayAlpha: '0.8',
                    errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                    errorMessage: '',
                };
                var Nt = a(3858),
                    It = a(3293),
                    Tt = a(894);
                const Lt = 'ViewMapper_base_42',
                    xt = r().lazy(() => Promise.resolve().then(a.bind(a, 3293))),
                    Rt = r().lazy(() => Promise.resolve().then(a.bind(a, 3858))),
                    Mt = r().lazy(() => Promise.resolve().then(a.bind(a, 894))),
                    Pt = {
                        [It.PERSONAL_FILE_VIEW_RES_ID]: xt,
                        [Nt.PERSONAL_DATA_RES_ID]: Rt,
                        [Tt.SERVICE_RECORD_RES_ID]: Mt,
                    },
                    Ot = ({ id: e, setTTCVisibility: t, className: a }) => {
                        const n = Pt[e];
                        return r().createElement(
                            'div',
                            { className: i()(Lt, a) },
                            r().createElement(
                                u.Suspense,
                                {
                                    fallback: r().createElement(St, {
                                        errorBtnClickHandler: lt.ZT,
                                        message: R.strings.waiting.loading(),
                                        overlayAlpha: '0.5',
                                    }),
                                },
                                r().createElement(n, { setTTCVisibility: t }),
                            ),
                        );
                    },
                    Ht = 'TankmanContainerApp_base_42',
                    Wt = 'TankmanContainerApp_tabs_59',
                    zt = 'TankmanContainerApp_widget_f9',
                    Vt = 'TankmanContainerApp_ttc_a4',
                    Gt = 'TankmanContainerApp_ttc__withPerk_39',
                    jt = 'TankmanContainerApp_flag_88';
                function $t() {
                    return (
                        ($t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        $t.apply(this, arguments)
                    );
                }
                const Ut = (0, I.Pi)(() => {
                    const e = gt(),
                        t = e.model,
                        a = e.controls,
                        n = t.currentTabId.get(),
                        s = t.background.get(),
                        o = t.computes.getTabs(),
                        l = t.computes.isTTCPerkTipShown();
                    var c;
                    (c = a.closeWithEsc), N(y.n.ESCAPE, c);
                    const m = (0, u.useMemo)(
                        () =>
                            o.map(({ counter: e, title: t, id: a }) =>
                                Object.assign(
                                    { id: a, title: t },
                                    e > 0 ? { notification: { type: 'value', value: e > 99 ? '99+' : e } } : {},
                                ),
                            ),
                        [o],
                    );
                    return r().createElement(
                        'div',
                        { style: { backgroundImage: s && `url('${s}')` }, className: Ht },
                        r().createElement('div', {
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.crew.flags.$dyn(t.nation.get())})`,
                            },
                            className: jt,
                        }),
                        r().createElement(Ot, { id: n, setTTCVisibility: a.setTankmanContainerTTCVisible }),
                        r().createElement('div', { className: zt }, r().createElement(ot.O, null)),
                        t.isTankmanContainerTTCVisible.get() &&
                            r().createElement(
                                'div',
                                { className: i()(Vt, l && Gt) },
                                r().createElement(
                                    it,
                                    $t({}, t.vehicleInfo.get(), { isPerkTipShown: l }),
                                    r().createElement(Re, {
                                        showBackground: !1,
                                        resId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                    }),
                                ),
                            ),
                        r().createElement(k, { onClick: a.tabChange, tabs: m, active: n, className: Wt }),
                        r().createElement(Ue, {
                            onBackClick: a.back,
                            backButtonLabel: t.backButtonLabel.get(),
                            onAboutClick: a.aboutCrew,
                            onCloseClick: a.hangar,
                            closeButtonLabel: R.strings.crew.common.navigation.toGarage(),
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    A().render(
                        r().createElement(v, null, r().createElement(Et, null, r().createElement(Ut, null))),
                        document.getElementById('root'),
                    );
                });
            },
            9367: (e, t, a) => {
                'use strict';
                a.d(t, { Q: () => m });
                var n = a(6483),
                    u = a.n(n),
                    r = a(9987),
                    s = a(6179),
                    i = a.n(s);
                const o = 'AlertCounter_base_f3',
                    l = 'AlertCounter_counter_da',
                    c = 'AlertCounter_label_18',
                    m = ({ value: e, className: t }) =>
                        i().createElement(
                            'div',
                            { className: u()(o, t) },
                            i().createElement(r.A, { value: e, className: l }),
                            !e && i().createElement('div', { className: c }, R.strings.crew.common.exclamationMark()),
                        );
            },
            9197: (e, t, a) => {
                'use strict';
                a.d(t, { C: () => b });
                var n = a(6483),
                    u = a.n(n),
                    r = a(6179),
                    s = a.n(r);
                const i = 'NumberRange_base_5e',
                    o = 'NumberRange_base__animation_79',
                    l = 'NumberRange_from_70',
                    c = 'NumberRange_from__red_f8',
                    m = 'NumberRange_separator_c0',
                    d = s().memo(function ({ from: e, to: t, className: a }) {
                        return s().createElement(
                            'div',
                            { className: u()(i, 0 === e && o, a) },
                            s().createElement('div', { className: u()(l, 0 === e && t > 0 && c) }, e),
                            e !== t &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: m }, '/'),
                                    s().createElement('div', null, t),
                                ),
                        );
                    }),
                    _ = 'NumberRangeWithLabel_base_2b',
                    E = 'NumberRangeWithLabel_title_94',
                    g = 'NumberRangeWithLabel_counter_00',
                    p = 'NumberRangeWithLabel_counterGlow_1f',
                    b = ({ title: e, isGlowVisible: t = !1, className: a, classNames: n, from: i, to: o }) => {
                        const l = (0, r.useMemo)(
                            () => ({
                                left: i !== o ? 7 * String(i).length + 4 : Math.round((7 * String(i).length) / 2),
                            }),
                            [i, o],
                        );
                        return s().createElement(
                            'div',
                            { className: u()(_, a) },
                            s().createElement('div', { className: E }, e),
                            s().createElement(
                                'div',
                                { className: g },
                                s().createElement(d, { from: i, to: o }),
                                t &&
                                    s().createElement('div', {
                                        style: l,
                                        className: u()(p, null == n ? void 0 : n.counterGlow),
                                    }),
                            ),
                        );
                    };
            },
            7077: (e, t, a) => {
                'use strict';
                a.d(t, { G: () => c, U: () => l });
                var n = a(6483),
                    u = a.n(n),
                    r = a(3649),
                    s = a(6179),
                    i = a.n(s),
                    o = a(3938);
                let l;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(l || (l = {}));
                const c = ({ name: e, size: t = l.c100x60, classMix: a, isSkin: n = !1 }) => {
                    const c = (0, s.useMemo)(() => {
                            try {
                                let a = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                                n && (a = a.$dyn('crewSkins'));
                                const u = a.$dyn((0, r.BN)(e));
                                if (!u) throw Error;
                                return { backgroundImage: `url(${u})` };
                            } catch (t) {
                                console.error('Cant find resource in TankmanIcon: ', e);
                            }
                        }, [e, t, n]),
                        m = t === l.c204x256;
                    return i().createElement(
                        'div',
                        { style: c, className: u()(o.Z.base, o.Z[`base__${t}`], a) },
                        m && i().createElement('div', { className: o.Z.innerShadow }),
                    );
                };
            },
            8485: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => l, d: () => c });
                var n = a(6483),
                    u = a.n(n),
                    r = a(8271),
                    s = a(6179),
                    i = a.n(s),
                    o = a(9426);
                let l;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(l || (l = {}));
                const c = i().memo(function ({ icon: e, type: t, size: a }) {
                    const n = (0, s.useMemo)(() => {
                            let e;
                            return (
                                (e =
                                    t === r.W.Possible || t === r.W.New
                                        ? R.images.gui.maps.icons.tankmen.skills.medium.new_skill()
                                        : R.images.gui.maps.icons.crew.$dyn(`${t}SkillFrame_${a}`)),
                                { backgroundImage: `url(${e})` }
                            );
                        }, [t, a]),
                        c = (0, s.useMemo)(() => {
                            if (!e) return null;
                            return {
                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.skills.$dyn(a === l.Big ? 'c_22x22' : 'small').$dyn(e)})`,
                            };
                        }, [e, a]);
                    return i().createElement(
                        'div',
                        { className: u()(o.Z.base, o.Z[`base__${a}`]) },
                        i().createElement('div', { className: o.Z.bg, style: n }),
                        c && i().createElement('div', { className: u()(o.Z.icon, o.Z[`icon__${t}`]), style: c }),
                    );
                });
            },
            9631: (e, t, a) => {
                'use strict';
                a.d(t, { C: () => _ });
                var n = a(6483),
                    u = a.n(n),
                    r = a(3457),
                    s = a(2106),
                    i = a(9987),
                    o = a(6179),
                    l = a.n(o),
                    c = a(4723);
                const m = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const _ = l().memo(function (e) {
                    let t = e.isActive,
                        a = e.counter,
                        n = e.className,
                        o = e.children,
                        _ = e.type,
                        E = void 0 === _ ? s.L.secondary : _,
                        g = e.size,
                        p = void 0 === g ? s.q.small : g,
                        b = e.hasIndicator,
                        v = void 0 === b || b,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, m);
                    return l().createElement(
                        'div',
                        { className: u()(c.Z.base, n, t && c.Z.base__active) },
                        l().createElement(r.u5, d({ type: E, size: p, mixClass: c.Z.button }, h), o),
                        l().createElement('div', { className: c.Z.overlay }),
                        v && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(a) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(i.A, { value: a, size: 'small' }),
                            ),
                    );
                });
            },
            7160: (e, t, a) => {
                'use strict';
                a.d(t, { BH: () => r, Fs: () => s, ei: () => n, qb: () => u });
                const n = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    u = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    r = (e) => {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    s = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, t, a) => {
                'use strict';
                a.d(t, { Gc: () => l, T3: () => r, Xd: () => i, gO: () => o, wP: () => s });
                var n = a(3649);
                const u = R.strings.common.percentValue(),
                    r = (e) => (0, n.uF)(u, { value: e });
                let s;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(s || (s = {}));
                const i = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let o;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(o || (o = {}));
                const l = (e, t = !1, a = null) => {
                    const n = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (a ? n.$dyn(`${a}Case`) : n).$dyn(e);
                };
            },
            3858: (e, t, a) => {
                'use strict';
                a.r(t), a.d(t, { PERSONAL_DATA_RES_ID: () => Ue, default: () => Ze });
                var n = a(6179),
                    u = a.n(n),
                    r = a(6483),
                    s = a.n(r),
                    i = a(1037),
                    o = a(5415);
                const l = {
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
                const m = ({ title: e, theme: t = c.Barracks, className: a, children: n }) =>
                    u().createElement(
                        'div',
                        { className: s()(l.base, l[`base__${t}`], a) },
                        u().createElement('div', { className: l.title }, e),
                        n,
                    );
                var d = a(5801),
                    _ = a(2106),
                    E = a(3403),
                    g = a(3457),
                    p = a(6373),
                    b = a(8018);
                const v = 'WarningText_base_13',
                    h = 'WarningText_icon_5d',
                    A = 'WarningText_label_c6',
                    C = u().memo(function ({ label: e }) {
                        return u().createElement(
                            'div',
                            { className: v },
                            u().createElement('div', { className: h }),
                            u().createElement('div', { className: A }, e),
                        );
                    }),
                    f = 'ListEmptyState_base_ae',
                    D = 'ListEmptyState_content_1e',
                    F = 'ListEmptyState_shadow_ae',
                    B = 'ListEmptyState_buttonWrapper_78',
                    k = 'ListEmptyState_button_f1',
                    w = u().memo(function ({
                        warningText: e,
                        buttonType: t = g.L$.secondary,
                        tooltipArgs: a = b.Xd,
                        className: n,
                        onClick: r,
                        children: i,
                    }) {
                        return u().createElement(
                            'div',
                            { className: s()(f, n) },
                            u().createElement(
                                'div',
                                { className: D },
                                u().createElement('div', { className: F }),
                                u().createElement(C, { label: e }),
                                i &&
                                    u().createElement(
                                        'div',
                                        { className: B },
                                        u().createElement(
                                            p.i,
                                            a,
                                            u().createElement(
                                                g.u5,
                                                { size: g.qE.small, type: t, onClick: r, mixClass: k },
                                                i,
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    });
                var y = a(794),
                    S = a(9653);
                var N = a(3138),
                    I = a(4385);
                const T = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: a,
                        paddingBottom: n,
                        amount: u,
                        itemsAmountPerRow: r,
                        visibleRowsAmount: s,
                    }) => {
                        const i = Math.ceil(u / r) * t,
                            o = s * t,
                            l = e * t;
                        return { paddingTop: `${l + a}rem`, paddingBottom: `${Math.max(i - l - o, 0) + n}rem` };
                    },
                    L = (e) => {
                        const t = e.className,
                            a = e.children,
                            n = e.itemsAmountPerRow,
                            r = e.visibleRowsAmount,
                            s = e.startRowIndex,
                            i = e.amount,
                            o = s * n,
                            l = Math.min(r * n, i - o);
                        return u().createElement(
                            'div',
                            { className: t, style: T(e) },
                            (0, I.K)(l, (e) => a(o + e)),
                        );
                    },
                    x = 'VirtualGrid_base_52',
                    M = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: a,
                        children: r,
                        api: i,
                        classNames: o,
                        preloadedRows: l = 1,
                        paddingTop: c = 0,
                        paddingBottom: m = 0,
                    }) => {
                        const d = i.scrollApi,
                            _ = (0, n.useRef)(0),
                            E = (0, n.useState)(0),
                            g = E[0],
                            p = E[1],
                            b = (0, n.useState)(null),
                            v = b[0],
                            h = b[1],
                            A = (0, n.useState)(null),
                            C = A[0],
                            f = A[1];
                        return (
                            (0, n.useEffect)(() => {
                                const t = (t) => {
                                    if (!v) return;
                                    const n = Math.floor((N.O.view.pxToRem(t.value.scrollPosition) - c) / a),
                                        u = Math.ceil(e / v),
                                        r = Math.max(0, Math.min(n - l, u));
                                    p(r), i.startRowIndexChanged(r);
                                };
                                return d.events.on('change', t), () => d.events.off('change', t);
                            }, [i, d, a, c, v, e, l]),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                        if (d.contentRef.current) {
                                            const e = getComputedStyle(d.contentRef.current),
                                                n = d.contentRef.current.getBoundingClientRect(),
                                                u =
                                                    N.O.view.pxToRem(n.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                r = Math.floor(u / t),
                                                s = Math.ceil(N.O.view.pxToRem(n.height) / a) + 2 * l;
                                            (_.current = r), h(r), f(s), i.layoutCalculated(r, s);
                                        }
                                    },
                                    n = () => {
                                        const t = _.current;
                                        e(), i.scrollToIndex(g * t);
                                    };
                                return (
                                    d.events.on('recalculateContent', e),
                                    d.events.on('resizeHandled', n),
                                    () => {
                                        d.events.off('recalculateContent', e), d.events.off('resizeHandled', n);
                                    }
                                );
                            }, [i, d, a, t, l, g]),
                            (0, n.useEffect)(() => {
                                const e = (e, t = !0) => {
                                    v && d.applyScroll(Math.floor((e + 1) / v) * a + c, { immediate: t });
                                };
                                return i.events.on('scrollToIndex', e), () => i.events.off('scrollToIndex', e);
                            }, [i, a, v, c, d]),
                            u().createElement(
                                y.X.Vertical.Default,
                                {
                                    api: d,
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
                                    u().createElement(
                                        L,
                                        {
                                            className: s()(x, null == o ? void 0 : o.inner),
                                            paddingBottom: m,
                                            paddingTop: c,
                                            amount: e,
                                            itemsAmountPerRow: v,
                                            visibleRowsAmount: C,
                                            startRowIndex: g,
                                            cellHeight: a,
                                        },
                                        r,
                                    ),
                            )
                        );
                    },
                    P = 'VirtualGridWithFade_scrollAreaFade_94',
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
                        r = e.classNames,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, O);
                    const o = (0, n.useState)(!0),
                        l = o[0],
                        c = o[1],
                        m = t.scrollApi;
                    return (
                        (0, n.useEffect)(() => {
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
                        u().createElement(
                            M,
                            H(
                                {
                                    api: t,
                                    classNames: Object.assign({}, r, {
                                        scrollClassName: s()(null == r ? void 0 : r.scrollClassName, l && P),
                                    }),
                                },
                                i,
                            ),
                            a,
                        )
                    );
                };
                var z = a(3215),
                    V = a(9480),
                    G = a(3946);
                const j = (0, z.q)()(
                        ({ observableModel: e }) => {
                            const t = e.array('cardList'),
                                a = (0, G.Om)((e) => {
                                    const a = V.U2(t.get(), e);
                                    if (a) return Object.assign({}, a, { restrictions: [...V.tP(a.restrictions)] });
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
                    $ = j[0],
                    U = j[1];
                let Z, X, q;
                !(function (e) {
                    (e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled');
                })(Z || (Z = {})),
                    (function (e) {
                        (e.Document = 'document'), (e.Skin = 'skin');
                    })(X || (X = {})),
                    (function (e) {
                        (e.Document = 'document'), (e.SuitableSkin = 'suitableSkin');
                    })(q || (q = {}));
                var K = a(7727),
                    Y = a(3649);
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
                    te = u().memo(function ({ nation: e, size: t, className: a }) {
                        return u().createElement('div', {
                            className: s()(Q.base, Q[`base__${t}`], a),
                            style: { backgroundImage: `url('${ee(e, t)}')` },
                        });
                    }),
                    ae = 'ListCardAlert_base_52',
                    ne = 'ListCardAlert_glow_1c',
                    ue = 'ListCardAlert_icon_d2',
                    re = ({ className: e, tooltipArgs: t }) =>
                        u().createElement(
                            'div',
                            { className: s()(ae, e) },
                            u().createElement('div', { className: ne }),
                            u().createElement(p.i, t, u().createElement('div', { className: ue })),
                        ),
                    se = {
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
                let ie;
                !(function (e) {
                    (e.None = 'none'), (e.Default = 'default'), (e.CardLocked = 'cardLocked');
                })(ie || (ie = {}));
                const oe = ({ icon: e, typeIcon: t, name: a, nation: n, cardState: r, children: i, alertType: o }) =>
                        u().createElement(
                            'div',
                            {
                                onMouseEnter: K.$.playHighlight,
                                className: s()(se.base, se[`base__${r}`], se[`base__alert${(0, Y.e)(o)}`]),
                            },
                            r === Z.Selected && u().createElement('div', { className: se.selectedFrame }),
                            n && u().createElement(te, { nation: n, size: J.c240x118, className: se.flag }),
                            u().createElement('div', { className: se.icon, style: { backgroundImage: `url(${e})` } }),
                            u().createElement('div', { className: se.separator }),
                            u().createElement(
                                'div',
                                { className: s()(se.cardInfo, Boolean(i) && se.cardInfo__withAdditionalInfo) },
                                u().createElement('div', { className: se.name }, a),
                                i,
                            ),
                            u().createElement('div', {
                                className: se.typeIcon,
                                style: { backgroundImage: `url(${t})` },
                            }),
                            o !== ie.None &&
                                u().createElement(re, {
                                    className: se.alertIcon,
                                    tooltipArgs: {
                                        header: R.strings.crew.personalData.card.tooltip.locked.title(),
                                        body: R.strings.crew.personalData.card.tooltip.locked.body(),
                                        isEnabled: o === ie.CardLocked,
                                    },
                                }),
                        ),
                    le = (0, E.Pi)(({ icon: e, name: t, cardState: a, className: n, onClick: r }) => {
                        const s = U().model.isCardsLocked.get();
                        return u().createElement(
                            p.i,
                            {
                                header: R.strings.crew.personalData.card.tooltip.document.title(),
                                body: R.strings.crew.personalData.card.tooltip.document.body(),
                                isEnabled: !s,
                            },
                            u().createElement(
                                'div',
                                { className: n, onClick: r },
                                u().createElement(oe, {
                                    icon: e,
                                    typeIcon: R.images.gui.maps.icons.crew.personalData.c_24x24.document(),
                                    name: t,
                                    cardState: a,
                                    alertType: s ? ie.CardLocked : ie.None,
                                }),
                            ),
                        );
                    });
                var ce = a(7078),
                    me = a(2603),
                    de = a(9367);
                const _e = 'InventoryInfo_base_c4',
                    Ee = 'InventoryInfo_icon_f6',
                    ge = 'InventoryInfo_amount_59',
                    pe = u().memo(function ({ amount: e, className: t }) {
                        return u().createElement(
                            'div',
                            { className: s()(_e, t) },
                            u().createElement('div', { className: Ee }),
                            u().createElement('div', { className: ge }, e),
                        );
                    }),
                    be = 'ResetButton_base_f1',
                    ve = 'ResetButton_iconWrapper_20',
                    he = 'ResetButton_icon_a2',
                    Ae = 'ResetButton_label_f8',
                    Ce = ({ className: e }) =>
                        u().createElement(
                            'div',
                            { className: s()(be, e) },
                            u().createElement('div', { className: ve }, u().createElement('div', { className: he })),
                            u().createElement('div', { className: Ae }, R.strings.crew.personalData.card.remove()),
                        ),
                    fe = ({ restrictions: e, className: t }) =>
                        u().createElement(
                            'div',
                            { className: t },
                            (0, Y.uF)(R.strings.crew.personalData.card.restrictions(), { restrictions: V.v_(e, ', ') }),
                        ),
                    De = 'SkinCard_base_bb',
                    Fe = 'SkinCard_resetButton_ff',
                    Be = 'SkinCard_restrictions_e8',
                    ke = 'SkinCard_inventoryInfo_62',
                    we = 'SkinCard_newSkinMark_16',
                    ye = (e, t) => (e ? ie.CardLocked : t ? ie.Default : ie.None),
                    Se = (0, E.Pi)(
                        ({
                            id: e,
                            nation: t,
                            icon: a,
                            name: n,
                            restrictions: r,
                            inventoryCount: i,
                            cardState: o,
                            newAmount: l,
                            className: c,
                            onClick: m,
                        }) => {
                            const d = U(),
                                _ = d.model,
                                E = d.controls,
                                g = r.length > 0,
                                p = l > 0;
                            return u().createElement(
                                ce.t,
                                {
                                    targetId: R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                                    args: { tooltipId: me.lu, skinId: e },
                                },
                                u().createElement(
                                    'div',
                                    { className: s()(De, c), onClick: m, onMouseEnter: () => p && E.markAsViewed(e) },
                                    u().createElement(
                                        oe,
                                        {
                                            icon: a,
                                            typeIcon: R.images.gui.maps.icons.crew.personalData.c_24x24.skin(),
                                            name: n,
                                            nation: t,
                                            cardState: o,
                                            alertType: ye(_.isCardsLocked.get(), g),
                                        },
                                        o === Z.Selected && u().createElement(Ce, { className: Fe }),
                                        g && u().createElement(fe, { restrictions: r, className: Be }),
                                    ),
                                    u().createElement(pe, { amount: i, className: ke }),
                                    p && u().createElement(de.Q, { value: l > 1 ? l : void 0, className: we }),
                                ),
                            );
                        },
                    );
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const Ie = { [X.Skin]: Se, [X.Document]: le },
                    Te = (0, E.Pi)(({ index: e, className: t }) => {
                        const a = U(),
                            n = a.model,
                            r = a.controls,
                            s = n.computes.getCard(e);
                        if (!s) throw Error(`Index ${e} is out of data card list range`);
                        const i = s.cardState !== Z.Disabled && !n.isCardsLocked.get(),
                            o = Ie[s.cardType];
                        return u().createElement(
                            o,
                            Ne({}, s, { className: t, onClick: () => i && r.selectCard(s.id, s.cardType === X.Skin) }),
                        );
                    }),
                    Le = 'DataCardList_base_0a',
                    xe = 'DataCardList_grid_63',
                    Re = 'DataCardList_gridWrapper_44',
                    Me = 'DataCardList_gridWrapper__scaled_8a',
                    Pe = 'DataCardList_emptyState_f2',
                    Oe = 'DataCardList_item_b1',
                    He = () => {
                        const e = (0, n.useState)(N.O.view.getScale()),
                            t = e[0],
                            a = e[1];
                        return (
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    a(N.O.view.getScale());
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
                    },
                    We = (0, E.Pi)(() => {
                        const e = (() => {
                                const e = y.X.Vertical.useVerticalScrollApi(),
                                    t = (0, S.q)(),
                                    a = (0, n.useCallback)((e, a = !0) => t.trigger('scrollToIndex', e, a), [t]),
                                    u = (0, n.useCallback)((e, a) => t.trigger('layoutCalculated', e, a), [t]),
                                    r = (0, n.useCallback)((e) => t.trigger('startRowIndexChanged', e), [t]);
                                return (0, n.useMemo)(
                                    () => ({
                                        scrollToIndex: a,
                                        layoutCalculated: u,
                                        startRowIndexChanged: r,
                                        scrollApi: e,
                                        events: { off: t.off, on: t.on },
                                    }),
                                    [a, u, r, e, t.off, t.on],
                                );
                            })(),
                            t = U(),
                            a = t.model,
                            r = t.controls,
                            i = a.cardList.get().length,
                            o = 2 === He();
                        return u().createElement(
                            'div',
                            { className: s()(Le) },
                            u().createElement(
                                'div',
                                { className: s()(Re, o && Me) },
                                i > 0
                                    ? u().createElement(
                                          W,
                                          {
                                              amount: i,
                                              cellWidth: 318,
                                              cellHeight: 208,
                                              paddingTop: 11,
                                              paddingBottom: 11,
                                              classNames: { content: xe },
                                              api: e,
                                          },
                                          (e) => u().createElement(Te, { key: e, index: e, className: Oe }),
                                      )
                                    : u().createElement(
                                          w,
                                          {
                                              warningText: R.strings.crew.personalData.emptyState.noFilteredItems(),
                                              buttonType: _.L.primary,
                                              onClick: r.resetFilters,
                                              className: Pe,
                                          },
                                          R.strings.crew.filter.reset(),
                                      ),
                            ),
                        );
                    }),
                    ze = 'PersonalDataApp_base_61',
                    Ve = 'PersonalDataApp_base__centered_a6',
                    Ge = 'PersonalDataApp_content_36',
                    je = 'PersonalDataApp_content__scaled_66',
                    $e = () => {
                        const e = (0, o.GS)().mediaHeight,
                            t = (0, o.GS)().remScreenWidth >= 2560,
                            a = 2 === He();
                        return u().createElement(
                            'div',
                            { className: s()(ze, t && !a && Ve) },
                            u().createElement(
                                'div',
                                { className: s()(Ge, a && je) },
                                u().createElement(m, {
                                    title: R.strings.crew.personalData.title(),
                                    theme: c.PersonalData,
                                }),
                                u().createElement(d.p, { popoverDirection: e < o.Aq.Medium ? i.IC.Left : i.IC.Bottom }),
                                u().createElement(We, null),
                            ),
                        );
                    },
                    Ue = R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                    Ze = u().memo(
                        ({ setTTCVisibility: e }) => (
                            e(!1), u().createElement($, { options: { rootId: Ue } }, u().createElement($e, null))
                        ),
                    );
            },
            3293: (e, t, a) => {
                'use strict';
                a.r(t), a.d(t, { PERSONAL_FILE_VIEW_RES_ID: () => Me, default: () => Pe });
                var n = a(6179),
                    u = a.n(n),
                    r = a(5415),
                    s = a(3403),
                    i = a(3215),
                    o = a(4598),
                    l = a(9480),
                    c = a(1612),
                    m = a(9174),
                    d = a(3946);
                const _ = (0, i.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'skillsState',
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
                                a = (e) => l.UI(e, (e) => Object.assign({}, e)),
                                n = (e) => l.UI(e, (e) => Object.assign({}, e, { skills: a(e.skills) })),
                                u = (0, d.Om)(() => n(t.relevantGroupedSkills.get()), { equals: o.jv }),
                                r = (0, d.Om)(() => n(t.irrelevantGroupedSkills.get()), { equals: o.jv }),
                                s = (0, d.Om)(() => a(t.commonSkills.get()), { equals: o.jv }),
                                i = (0, d.Om)(() => t.isTankmanInVehicle.get() && t.isTTCVisible.get(), !0);
                            return Object.assign({}, t, {
                                computes: {
                                    relevantSkillsGroups: u,
                                    irrelevantSkillsGroups: r,
                                    commonSkills: s,
                                    isTTCVisible: i,
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
                                (0, c.h)({ setTTCVisible: (e) => t.isTTCVisible.set(e) }),
                            ),
                    ),
                    E = _[0],
                    g = _[1];
                var p = a(4022),
                    b = a(6483),
                    v = a.n(b),
                    h = a(2106),
                    A = a(6373),
                    C = a(3457);
                const f = 'ButtonWithDiscountIndicator_base_6c',
                    D = 'ButtonWithDiscountIndicator_discountIndicator_a5',
                    F = 'ButtonWithDiscountIndicator_discountIndicator__small_d6',
                    B = ['hasDiscount', 'className', 'children', 'wrapperId', 'isSmall'];
                const k = u().memo(function (e) {
                        let t = e.hasDiscount,
                            a = e.className,
                            n = e.children,
                            r = e.wrapperId,
                            s = e.isSmall,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, B);
                        return u().createElement(
                            'div',
                            { id: r, className: v()(f, a) },
                            u().createElement(C.u5, i, n),
                            t && u().createElement('div', { className: v()(D, s && F) }),
                        );
                    }),
                    w = 'Buttons_base_ec',
                    y = 'Buttons_increaseBtnContainer_e9',
                    S = 'Buttons_increaseButton_75',
                    N = 'Buttons_resetButton_0a',
                    I = 'Buttons_resetButton__disabled_b9',
                    T = 'Buttons_resetButton__small_fb',
                    L = 'Buttons_resetIcon_fa',
                    x = 'Buttons_buttonWrapper_de',
                    M = (0, s.Pi)(function ({ className: e, style: t }) {
                        const a = g(),
                            n = a.controls,
                            s = a.model,
                            i = (0, r.GS)().mediaSize,
                            o = s.isResetDisable.get(),
                            l = i === r.cJ.ExtraSmall || i === r.cJ.Small,
                            c = o
                                ? R.strings.crew.matrix.resetTooltip.disable
                                : R.strings.crew.matrix.resetTooltip.enable;
                        return u().createElement(
                            'div',
                            { className: v()(w, e), style: t },
                            u().createElement(
                                'div',
                                { className: x },
                                u().createElement(
                                    A.i,
                                    {
                                        header: R.strings.crew.matrix.increaseTooltip.enable.header(),
                                        body: R.strings.crew.matrix.increaseTooltip.enable.body(),
                                    },
                                    u().createElement(
                                        k,
                                        {
                                            onClick: () => n.increase(),
                                            type: h.L.ghost,
                                            mixClass: S,
                                            hasDiscount: s.hasIncreaseDiscount.get(),
                                            className: y,
                                        },
                                        R.strings.crew.matrix.increaseButton(),
                                    ),
                                ),
                            ),
                            u().createElement(
                                A.i,
                                { header: c.header(), body: c.body(), ignoreMouseClick: o },
                                u().createElement(
                                    'div',
                                    { className: x, id: 'matrix_drop_skills_btn' },
                                    u().createElement(
                                        k,
                                        {
                                            hasDiscount: s.hasDropSkillDiscount.get(),
                                            soundHover: o ? null : 'highlight',
                                            soundClick: o ? null : 'play',
                                            onClick: () => !o && n.reset(),
                                            type: h.L.ghost,
                                            mixClass: v()(N, o && I, l && T),
                                            disabled: o,
                                            isSmall: l,
                                        },
                                        l
                                            ? u().createElement('div', { className: L })
                                            : R.strings.crew.matrix.resetButton(),
                                    ),
                                ),
                            ),
                        );
                    });
                var P = a(7701);
                let O;
                !(function (e) {
                    (e.LearnAvailable = 'available'),
                        (e.Training = 'training'),
                        (e.Achieve = 'achieve'),
                        (e.ZeroSkills = 'zeroSkills'),
                        (e.AllSkills = 'allSkills');
                })(O || (O = {}));
                var H = a(3961);
                const W = 'SkillRoleIcon_base_6b',
                    z = 'SkillRoleIcon_base__irrelevant_22',
                    V = (0, s.Pi)(function ({ role: e, isIrrelevant: t, className: a }) {
                        const n = ((e, t, a) =>
                            e
                                ? R.strings.crew.matrix.irrelevantQualification.header()
                                : t
                                  ? R.strings.crew.matrix.skills.roles.female.$dyn(a)
                                  : R.strings.crew.matrix.skills.roles.$dyn(a))(t, g().model.isFemale.get(), e);
                        return u().createElement(
                            A.i,
                            { body: n },
                            u().createElement('div', {
                                style: {
                                    backgroundImage: `url(${t ? R.images.gui.maps.icons.tankmen.roles.c_30x30_red.$dyn(e) : R.images.gui.maps.icons.tankmen.roles.c_30x30.$dyn(e)})`,
                                },
                                className: v()(W, t && z, a),
                            }),
                        );
                    });
                var G = a(4385),
                    j = a(5139);
                function $(e, t, a) {
                    const u = (0, n.useMemo)(
                        () =>
                            (function (e, t, a) {
                                return void 0 === a ? (0, j.Z)(e, t, !1) : (0, j.Z)(e, a, !1 !== t);
                            })(a, e),
                        t,
                    );
                    return (0, n.useEffect)(() => u.cancel, [u]), u;
                }
                var U = a(7078),
                    Z = a(2603),
                    X = a(7727);
                const q = {
                    base: 'SkillIcon_base_43',
                    base__small: 'SkillIcon_base__small_d0',
                    base__c22x22: 'SkillIcon_base__c22x22_e5',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c36x36_flat: 'SkillIcon_base__c36x36_flat_88',
                    base__big: 'SkillIcon_base__big_ae',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let K;
                !(function (e) {
                    (e.c14x14 = 'small'),
                        (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c180x135 = 'dialogs');
                })(K || (K = {}));
                const Y = u().memo(function ({ iconName: e, size: t = K.c24x24, className: a }) {
                    var n;
                    return u().createElement('div', {
                        style: {
                            backgroundImage: `url(${null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e)})`,
                        },
                        className: v()(q.base, q[`base__${t}`], a),
                    });
                });
                var Q = a(8018);
                const J = {
                    base: 'Skill_base_8e',
                    base__hover: 'Skill_base__hover_14',
                    base__inProgress: 'Skill_base__inProgress_d4',
                    base__clickable: 'Skill_base__clickable_6c',
                    progressBar: 'Skill_progressBar_2e',
                    stateBg: 'Skill_stateBg_7d',
                    base__learned: 'Skill_base__learned_34',
                    disabledPattern: 'Skill_disabledPattern_68',
                    progressText: 'Skill_progressText_df',
                    base__disabled: 'Skill_base__disabled_9d',
                    skillIcon: 'Skill_skillIcon_26',
                    skillName: 'Skill_skillName_dd',
                    zeroSkill: 'Skill_zeroSkill_b3',
                };
                let ee, te;
                !(function (e) {
                    (e.UnLearned = ''), (e.InProgress = 'inProgress'), (e.Learned = 'learned');
                })(ee || (ee = {})),
                    (function (e) {
                        (e.Default = ''), (e.Selectable = 'selectable'), (e.Disable = 'disable');
                    })(te || (te = {}));
                const ae = u().memo(function ({
                        skillId: e,
                        skillIcon: t,
                        skillUserName: a,
                        isZero: r,
                        skillProgress: s,
                        progressState: i,
                        onClick: o,
                        onHover: l,
                        onLeave: c,
                        skillState: m,
                        className: d,
                        canBeRelearnedAsZeroSkill: _,
                    }) {
                        const E = (0, n.useState)(!1),
                            g = E[0],
                            p = E[1],
                            b = i === ee.InProgress,
                            h = m === te.Disable,
                            A = ((e, t, a) => {
                                switch (e) {
                                    case ee.UnLearned:
                                        return [t === te.Selectable, t !== te.Disable];
                                    case ee.InProgress:
                                        return [a, t !== te.Disable];
                                    case ee.Learned:
                                        return [a, a];
                                    default:
                                        return [!1, !1];
                                }
                            })(i, m, _),
                            C = A[0],
                            f = A[1],
                            D = (0, n.useCallback)(() => {
                                X.$.playHighlight(), p(!0), null == l || l();
                            }, [l]),
                            F = (0, n.useCallback)(() => {
                                p(!1), null == c || c();
                            }, [c]),
                            B = (0, n.useCallback)(() => {
                                X.$.playClick(), o(e);
                            }, [o, e]),
                            k = (0, n.useMemo)(() => ({ height: s + '%' }), [s]),
                            w = (0, n.useMemo)(() => ({ skillName: e, tooltipId: Z.HZ }), [e]);
                        return u().createElement(
                            U.t,
                            { targetId: Me, args: w, ignoreMouseClick: !0 },
                            u().createElement(
                                'div',
                                {
                                    onMouseEnter: f ? D : void 0,
                                    onMouseLeave: f ? F : void 0,
                                    onClick: C ? B : void 0,
                                    className: v()(
                                        J.base,
                                        J[`base__${i}`],
                                        g && J.base__hover,
                                        h ? J.base__disabled : C && J.base__clickable,
                                        d,
                                    ),
                                },
                                b && u().createElement('div', { style: k, className: J.progressBar }),
                                u().createElement('div', { className: J.stateBg }),
                                h && u().createElement('div', { className: J.disabledPattern }),
                                b && u().createElement('div', { className: J.progressText }, (0, Q.T3)(s)),
                                u().createElement(Y, { iconName: t, size: K.c52x52, className: J.skillIcon }),
                                u().createElement('div', { className: J.skillName }, a),
                                r && u().createElement('div', { className: J.zeroSkill }),
                            ),
                        );
                    }),
                    ne = [
                        'isIrrelevant',
                        'className',
                        'skillId',
                        'skillProgress',
                        'isInProgress',
                        'isLockedByZeroPerks',
                    ];
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                const re = (0, s.Pi)(function (e) {
                        let t = e.isIrrelevant,
                            a = e.className,
                            r = e.skillId,
                            s = e.skillProgress,
                            i = e.isInProgress,
                            o = e.isLockedByZeroPerks,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, ne);
                        const c = (0, n.useRef)(!1),
                            m = (0, n.useRef)(!1),
                            d = g(),
                            _ = d.model,
                            E = d.controls,
                            p = _.isTTCVisible.get(),
                            b = ((e, t, a, n) => {
                                switch (!0) {
                                    case t:
                                    case n:
                                        return te.Disable;
                                    case a:
                                        return te.Default;
                                    case e > 0:
                                        return te.Selectable;
                                    default:
                                        return te.Default;
                                }
                            })(_.selectAvailableSkillsCount.get(), t, i, o),
                            v = ((e, t) => {
                                switch (!0) {
                                    case 100 === e:
                                        return ee.Learned;
                                    case t:
                                        return ee.InProgress;
                                    default:
                                        return ee.UnLearned;
                                }
                            })(s, i),
                            h = $(
                                () => {
                                    c.current && ((m.current = !0), E.hoverSkill(r));
                                },
                                [r],
                                250,
                            ),
                            A = (0, n.useCallback)(() => {
                                (c.current = !0), h();
                            }, [h]),
                            C = (0, n.useCallback)(() => {
                                (c.current = !1), m.current && ((m.current = !1), E.leaveSkill(r));
                            }, [E, r]);
                        return u().createElement(
                            ae,
                            ue({}, l, {
                                skillId: r,
                                onClick: E.clickSkill,
                                onHover: p ? A : void 0,
                                onLeave: p ? C : void 0,
                                skillState: b,
                                progressState: v,
                                skillProgress: s,
                                className: a,
                                canBeRelearnedAsZeroSkill:
                                    !t && !o && !l.isZero && _.skillsState.get() === O.ZeroSkills,
                            }),
                        );
                    }),
                    se = 'SkillsRow_base_1e',
                    ie = 'SkillsRow_skill_df',
                    oe = 'SkillsRow_emptySkill_b5';
                function le() {
                    return (
                        (le =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        le.apply(this, arguments)
                    );
                }
                const ce = ({ skills: e, isIrrelevant: t, className: a, isLockedByZeroPerks: n }) =>
                        u().createElement(
                            'div',
                            { className: v()(se, a) },
                            l.UI(e, (e) =>
                                u().createElement(
                                    re,
                                    le({ key: e.skillId }, e, {
                                        isIrrelevant: t,
                                        className: ie,
                                        isLockedByZeroPerks: n,
                                    }),
                                ),
                            ),
                            (0, G.K)(6 - e.length, (e) => u().createElement('div', { className: oe, key: e })),
                        ),
                    me = 'SkillsGroup_base_1e',
                    de = 'SkillsGroup_title_5c',
                    _e = 'SkillsGroup_qualificationContainer_18',
                    Ee = 'SkillsGroup_alertIcon_77',
                    ge = 'SkillsGroup_qualification_90',
                    pe = 'SkillsGroup_qualification__locked_57',
                    be = 'SkillsGroup_container_04',
                    ve = 'SkillsGroup_rowsContainer_a3',
                    he = 'SkillsGroup_row_ad',
                    Ae = 'SkillsGroup_roleIcon_b0';
                function Ce() {
                    return (
                        (Ce =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ce.apply(this, arguments)
                    );
                }
                const fe = ({
                        group: e,
                        qualificationNumber: t,
                        isIrrelevant: a,
                        additionalSkills: n,
                        className: r,
                        isLockedByZeroPerks: s = !1,
                    }) =>
                        u().createElement(
                            'div',
                            { className: v()(me, r) },
                            u().createElement(
                                'div',
                                { className: de },
                                s
                                    ? u().createElement(
                                          'div',
                                          { className: _e },
                                          u().createElement('div', { className: Ee }),
                                          u().createElement(
                                              'div',
                                              { className: v()(ge, pe) },
                                              R.strings.crew.matrix.qualification.lockByZeroPerks.$num(t),
                                          ),
                                      )
                                    : u().createElement(
                                          'div',
                                          { className: ge },
                                          R.strings.crew.matrix.qualification.$num(t),
                                      ),
                            ),
                            u().createElement(
                                'div',
                                { className: be },
                                u().createElement(V, Ce({}, e, { isIrrelevant: a, className: Ae })),
                                u().createElement(
                                    'div',
                                    { className: ve },
                                    n &&
                                        u().createElement(ce, {
                                            skills: n,
                                            isIrrelevant: a,
                                            className: he,
                                            isLockedByZeroPerks: s,
                                        }),
                                    u().createElement(
                                        ce,
                                        Ce({}, e, { isIrrelevant: a, className: he, isLockedByZeroPerks: s }),
                                    ),
                                ),
                            ),
                        ),
                    De = 'SkillsGroupsList_base_1d',
                    Fe = 'SkillsGroupsList_base__manyRoles_ba',
                    Be = 'SkillsGroupsList_scroll_e3',
                    ke = 'SkillsGroupsList_group_ed',
                    we = (0, s.Pi)(() => {
                        const e = g().model,
                            t = e.computes.relevantSkillsGroups(),
                            a = e.computes.irrelevantSkillsGroups(),
                            r = (0, P.c4)();
                        (0, n.useEffect)(() => {
                            r.recalculateContent();
                        }, [t, a, r]);
                        const s = t.length + a.length >= 2;
                        return u().createElement(
                            'div',
                            { className: v()(De, s && Fe) },
                            u().createElement(
                                H.z,
                                { className: Be },
                                u().createElement(
                                    'div',
                                    { id: 'matrix_skills_list' },
                                    l.UI(t, (t, a) =>
                                        u().createElement(fe, {
                                            key: `relevantGroup_${a}`,
                                            group: t,
                                            qualificationNumber: a + 1,
                                            isIrrelevant: !1,
                                            className: ke,
                                            additionalSkills: 0 === a ? e.commonSkills.get() : void 0,
                                            isLockedByZeroPerks: e.skillsState.get() === O.ZeroSkills && a > 0,
                                        }),
                                    ),
                                    l.UI(a, (e, a) =>
                                        u().createElement(fe, {
                                            key: `irrelevantGroup_${a}`,
                                            group: e,
                                            qualificationNumber: t.length + a + 1,
                                            isIrrelevant: !0,
                                            className: ke,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    });
                var ye = a(2056);
                const Se = {
                        base: 'SkillsStateInfo_base_de',
                        state: 'SkillsStateInfo_state_56',
                        state__achieve: 'SkillsStateInfo_state__achieve_e8',
                        state__allSkills: 'SkillsStateInfo_state__allSkills_a6',
                        state__training: 'SkillsStateInfo_state__training_60',
                        countContainer: 'SkillsStateInfo_countContainer_da',
                        count: 'SkillsStateInfo_count_87',
                        skillIcon: 'SkillsStateInfo_skillIcon_e2',
                        spinGlow: 'SkillsStateInfo_spinGlow_23',
                        rotation: 'SkillsStateInfo_rotation_58',
                    },
                    Ne = (0, s.Pi)(({ className: e }) => {
                        const t = g().model,
                            a = t.selectAvailableSkillsCount.get(),
                            n = t.skillsState.get();
                        return u().createElement(
                            'div',
                            { className: v()(Se.base, e) },
                            u().createElement(
                                'div',
                                { className: v()(Se.state, Se[`state__${n}`]) },
                                R.strings.crew.matrix.skills.$dyn(n),
                            ),
                            a > 0 &&
                                u().createElement(
                                    'div',
                                    { className: Se.countContainer },
                                    u().createElement('div', { className: Se.count }, a),
                                    u().createElement(
                                        ye.u,
                                        {
                                            targetId: Me,
                                            contentId: R.views.lobby.crew.tooltips.PerkAvailableTooltip('resId'),
                                        },
                                        u().createElement(
                                            'div',
                                            { className: Se.skillIcon },
                                            u().createElement('div', { className: Se.spinGlow }),
                                        ),
                                    ),
                                ),
                        );
                    }),
                    Ie = 'SkillsMatrix_base_2a',
                    Te = 'SkillsMatrix_topContainer_09',
                    Le = 'SkillsMatrix_skillsStateInfo_2e',
                    xe = () =>
                        u().createElement(
                            'div',
                            { className: Ie },
                            u().createElement(
                                'div',
                                { className: Te },
                                u().createElement(Ne, { className: Le }),
                                u().createElement(M, null),
                            ),
                            u().createElement(we, null),
                        ),
                    Re = (0, s.Pi)(({ setTTCVisibility: e }) => {
                        const t = (0, r.GS)().mediaSize,
                            a = g(),
                            s = a.model,
                            i = a.controls,
                            o = s.computes.isTTCVisible();
                        return (
                            (0, n.useEffect)(() => {
                                i.setTTCVisible(t >= r.cJ.Small), e && e(o);
                            }, [i, o, t, e]),
                            u().createElement(p.d, { isLoggingEnabled: !0 }, u().createElement(xe, null))
                        );
                    }),
                    Me = R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                    Pe = u().memo(({ setTTCVisibility: e }) =>
                        u().createElement(
                            E,
                            { options: { rootId: Me } },
                            u().createElement(Re, { setTTCVisibility: e }),
                        ),
                    );
            },
            894: (e, t, a) => {
                'use strict';
                a.r(t), a.d(t, { SERVICE_RECORD_RES_ID: () => ee, default: () => te });
                var n = a(6179),
                    u = a.n(n),
                    r = a(3403),
                    s = a(4022),
                    i = a(3215),
                    o = a(4598),
                    l = a(9480),
                    c = a(1612),
                    m = a(9174),
                    d = a(3946);
                const _ = (0, i.q)()(
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
                                    { achievementsList: e.array('achievementsList'), isTTCVisible: m.LO.box(!1) },
                                ),
                                a = (0, d.Om)(() => l.UI(t.achievementsList.get(), o.yR)),
                                n = (0, d.Om)(() => t.isTankmanInVehicle.get() && t.isTTCVisible.get(), !0),
                                u = (0, d.Om)(() => t.achievementsList.get().length > 0);
                            return Object.assign({}, t, {
                                computes: { getAchievementsList: a, isTTCVisible: n, hasAchievements: u },
                            });
                        },
                        ({ model: e }) => Object.assign({}, (0, c.h)({ setTTCVisible: (t) => e.isTTCVisible.set(t) })),
                    ),
                    E = _[0],
                    g = _[1];
                var p = a(6483),
                    b = a.n(p),
                    v = a(5415),
                    h = a(3961);
                const A = 'AchievementsList_base_90',
                    C = 'AchievementsList_title_f4',
                    f = 'AchievementsList_container_a7',
                    D = 'AchievementsList_item_10',
                    F = 'AchievementsList_bar_4a';
                var B = a(7078),
                    k = a(2603);
                const w = {
                    base: 'AchievementItem_base_45',
                    base__small: 'AchievementItem_base__small_b4',
                    icon: 'AchievementItem_icon_91',
                    amountBG: 'AchievementItem_amountBG_46',
                    amount: 'AchievementItem_amount_65',
                };
                let y;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(y || (y = {}));
                const S = ({ name: e, amount: t, block: a, isRare: n, size: r, className: s }) => {
                    const i =
                        r === y.Small ? R.images.gui.maps.icons.achievement : R.images.gui.maps.icons.achievement.big;
                    return u().createElement(
                        B.t,
                        {
                            args: { tooltipId: k.Th, name: e, block: a, isRare: n },
                            targetId: R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                        },
                        u().createElement(
                            'div',
                            { className: b()(w.base, w[`base__${r}`], s) },
                            u().createElement('div', {
                                className: w.icon,
                                style: { backgroundImage: `url(${i.$dyn(e)})` },
                            }),
                            t > 1 &&
                                u().createElement(
                                    'div',
                                    { className: w.amountBG },
                                    u().createElement('div', { className: w.amount }, t),
                                ),
                        ),
                    );
                };
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                const I = (0, r.Pi)(({ className: e }) => {
                    const t = g().model,
                        a = (0, v.GS)().mediaSize,
                        n = a === v.cJ.Small || a === v.cJ.ExtraSmall ? y.Small : y.Big;
                    return u().createElement(
                        'div',
                        { className: b()(A, e) },
                        u().createElement(
                            h.z,
                            { classNames: { bar: F } },
                            u().createElement(
                                'div',
                                { className: C },
                                R.strings.crew.serviceRecord.achievementsList.title(),
                            ),
                            u().createElement(
                                'div',
                                { className: f },
                                (0, l.UI)(t.computes.getAchievementsList(), (e, t) =>
                                    u().createElement(S, N({}, e, { size: n, key: `achievement_${t}`, className: D })),
                                ),
                            ),
                        ),
                    );
                });
                var T = a(6373);
                const L = 'BattlesInfo_base_25',
                    x = 'BattlesInfo_container_da',
                    M = 'Item_base_e0',
                    P = 'Item_icon_81',
                    O = 'Item_value_28',
                    H = 'Item_name_35',
                    W = ({ name: e, icon: t, value: a }) =>
                        u().createElement(
                            'div',
                            { className: M },
                            u().createElement('div', { className: P, style: { backgroundImage: `url(${t})` } }),
                            u().createElement('div', { className: O }, a),
                            u().createElement('div', { className: H }, e),
                        );
                var z = a(3649);
                const V = 'RankItem_base_19',
                    G = 'RankItem_icon_10',
                    j = 'RankItem_name_9d',
                    $ = ({ name: e, icon: t }) =>
                        u().createElement(
                            T.i,
                            {
                                header: R.strings.crew.serviceRecord.tooltip.rank.header(),
                                body: R.strings.crew.serviceRecord.tooltip.rank.body(),
                            },
                            u().createElement(
                                'div',
                                { className: V },
                                u().createElement('div', {
                                    className: G,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.tankmen.ranks.big.$dyn((0, z.BN)(t))})`,
                                    },
                                }),
                                u().createElement('div', { className: j }, e),
                            ),
                        ),
                    U = (0, r.Pi)(() => {
                        const e = g().model;
                        return u().createElement(
                            'div',
                            { className: L },
                            u().createElement(
                                'div',
                                { className: x },
                                u().createElement($, { name: e.rankName.get(), icon: e.rankIcon.get() }),
                                u().createElement(
                                    T.i,
                                    {
                                        header: R.strings.tooltips.battlesDetails.header(),
                                        body: R.strings.tooltips.battlesDetails.body(),
                                    },
                                    u().createElement(
                                        'div',
                                        null,
                                        u().createElement(W, {
                                            name: R.strings.crew.serviceRecord.battlesCounter(),
                                            icon: R.images.gui.maps.icons.crew.serviceRecord.battlesCountIcon(),
                                            value: e.battlesCount.get(),
                                        }),
                                    ),
                                ),
                                u().createElement(
                                    T.i,
                                    {
                                        header: R.strings.crew.serviceRecord.tooltip.averageXP.header(),
                                        body: R.strings.crew.serviceRecord.tooltip.averageXP.body(),
                                    },
                                    u().createElement(
                                        'div',
                                        null,
                                        u().createElement(W, {
                                            name: R.strings.crew.serviceRecord.averageXP(),
                                            icon: R.images.gui.maps.icons.crew.serviceRecord.averageXPIcon(),
                                            value: e.averageXP.get(),
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Z = 'NoAchievements_base_a5',
                    X = 'NoAchievements_icon_c7',
                    q = 'NoAchievements_text_34',
                    K = ({ className: e }) =>
                        u().createElement(
                            'div',
                            { className: b()(Z, e) },
                            u().createElement('div', { className: X }),
                            u().createElement('div', { className: q }, R.strings.crew.serviceRecord.noAchievements()),
                        ),
                    Y = 'ServiceRecordApp_achievementsList_fd',
                    Q = 'ServiceRecordApp_noAchievements_07',
                    J = (0, r.Pi)(({ setTTCVisibility: e }) => {
                        e(!1);
                        const t = g().model.computes.hasAchievements();
                        return u().createElement(
                            s.d,
                            null,
                            u().createElement(U, null),
                            t ? u().createElement(I, { className: Y }) : u().createElement(K, { className: Q }),
                        );
                    }),
                    ee = R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    te = u().memo(({ setTTCVisibility: e }) =>
                        u().createElement(
                            E,
                            { options: { rootId: ee } },
                            u().createElement(J, { setTTCVisibility: e }),
                        ),
                    );
            },
            3961: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => g });
                var n = a(6483),
                    u = a.n(n),
                    r = a(794),
                    s = a(7701),
                    i = a(6179),
                    o = a.n(i);
                const l = 'ScrollWithLips_base_81',
                    c = 'ScrollWithLips_fadeTop_3d',
                    m = 'ScrollWithLips_fadeBottom_44',
                    d = 'ScrollWithLips_bar_52',
                    _ = 'ScrollWithLips_content_fb';
                let E;
                !(function (e) {
                    (e.None = 'none'), (e.Top = 'top'), (e.Both = 'both'), (e.Bottom = 'bottom');
                })(E || (E = {}));
                const g = ({ children: e, className: t, classNames: a }) => {
                    const n = (0, i.useState)(E.None),
                        g = n[0],
                        p = n[1],
                        b = g === E.Both,
                        v = (0, s.c4)();
                    return (
                        (0, i.useEffect)(() => {
                            const e = () => {
                                const e = v.getBounds()[1],
                                    t = v.animationScroll.scrollPosition.get();
                                0 === e
                                    ? p(E.None)
                                    : t > 1 && t < e - 21
                                      ? p(E.Both)
                                      : t <= 1
                                        ? p(E.Bottom)
                                        : t >= e - 21 && p(E.Top);
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
                            { className: u()(l, t) },
                            o().createElement(
                                r.X.Vertical.Default,
                                {
                                    api: v,
                                    barClassNames: { base: u()(d, null == a ? void 0 : a.bar) },
                                    scrollClassNames: { content: _ },
                                },
                                e,
                            ),
                            (g === E.Top || b) && o().createElement('div', { className: c }),
                            (g === E.Bottom || b) && o().createElement('div', { className: m }),
                        )
                    );
                };
            },
            4022: (e, t, a) => {
                'use strict';
                a.d(t, { d: () => c });
                var n = a(6179),
                    u = a.n(n),
                    r = a(3055);
                const s = 'TankmanInfoWrapper_base_5a',
                    i = 'TankmanInfoWrapper_content_b4',
                    o = 'TankmanInfoWrapper_tankmanInfo_80',
                    l = 'TankmanInfoWrapper_children_66',
                    c = ({ children: e, isLoggingEnabled: t = !1 }) =>
                        u().createElement(
                            'div',
                            { className: s },
                            u().createElement(
                                'div',
                                { className: i },
                                u().createElement(r.JW, { className: o, isLoggingEnabled: t }),
                                u().createElement('div', { className: l }, e),
                            ),
                        );
            },
            5499: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => hn });
                var n = a(6179),
                    u = a.n(n),
                    r = a(3403),
                    s = a(3215),
                    i = a(4598),
                    o = a(9480),
                    l = a(3946),
                    c = a(4828);
                const m = [
                        R.views.lobby.crew.TankmanContainerView('resId'),
                        R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                        R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                        R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    ],
                    d = (0, s.q)()(
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
                                a = (0, l.Om)(
                                    () =>
                                        o.UI(t.slots.get(), (e) =>
                                            Object.assign({}, e, {
                                                roles: o.UI(e.roles, i.yR),
                                                tankman: Object.assign({}, e.tankman, {
                                                    roles: o.UI(e.tankman.roles, i.yR),
                                                    skills: o.UI(e.tankman.skills, (e) => Object.assign({}, e)),
                                                }),
                                            }),
                                        ),
                                    { equals: i.jv },
                                ),
                                n = (0, l.Om)(() => Boolean(o.sE(a(), (e) => -1 === e.tankman.tankmanID))),
                                u = (0, l.Om)(() => 1 === t.slots.get().length),
                                r = (0, l.Om)((e) => t.selectedSlotIdx.get() === e),
                                s = (0, l.Om)(() => -1 !== t.selectedSlotIdx.get()),
                                d = (0, l.Om)((e) => {
                                    var t;
                                    return null == (t = o.U2(a(), e)) ? void 0 : t.tankman;
                                }),
                                _ = (0, l.Om)((e) => {
                                    var t;
                                    const n = null == (t = o.U2(a(), e)) ? void 0 : t.tankman;
                                    return n ? n.skills.length + n.newSkillsAmount + n.possibleSkillsAmount : 0;
                                }),
                                E = (0, l.Om)(() => {
                                    return (
                                        (e = t.currentLayoutID.get()),
                                        (a = t.previousLayoutID.get()),
                                        {
                                            isCurrentLayoutHangar: e === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isCurrentLayoutTankmanContainer: m.includes(e),
                                            isCurrentLayoutQuickTraining:
                                                e === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isCurrentLayoutMemberChange:
                                                e === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutHangar: a === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isPreviousLayoutTankmanContainer: m.includes(a),
                                            isPreviousLayoutQuickTraining:
                                                a === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isPreviousLayoutMemberChange:
                                                a === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutBarrack: a === R.views.lobby.crew.BarracksView('resId'),
                                        }
                                    );
                                    var e, a;
                                }),
                                g = (0, l.Om)(() => {
                                    const e = E(),
                                        t = e.isCurrentLayoutHangar,
                                        a = e.isCurrentLayoutQuickTraining;
                                    return !u() && !t && !a;
                                }),
                                p = (0, l.Om)(() => !u() && t.buttonsBar.get().isVisible),
                                b = (0, l.Om)(() => {
                                    return (e = t.currentLayoutID.get()), c.AB[e] || c.sC.Hangar;
                                    var e;
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: a,
                                    isSlotSelected: r,
                                    isAnySlotSelected: s,
                                    getSlotTankman: d,
                                    getAllSkillsAmount: _,
                                    isAnyEmptySlots: n,
                                    isTankmanMode: u,
                                    isChangeCrewButtonVisible: g,
                                    isButtonBarVisible: p,
                                    getLayoutInfo: E,
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
                            onWotPlusClick: e.createCallbackNoArgs('buttonsBar.onWotPlusClick'),
                            onDogClick: e.createCallbackNoArgs('onDogClick'),
                            onDogMoreInfoClick: e.createCallbackNoArgs('onDogMoreInfoClick'),
                        }),
                    ),
                    _ = d[0],
                    E = d[1];
                var g = a(6483),
                    p = a.n(g),
                    b = a(2056);
                let v;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(v || (v = {}));
                const h = 'ButtonsBar_base_9c',
                    A = 'ButtonsBar_button_d1',
                    C = 'ButtonsBar_button__crewOperaions_70',
                    f = 'ButtonsBar_button__crewBooks_b4',
                    D = 'ButtonsBar_button__toggle_64',
                    F = 'ButtonsBar_acceleratedTraining_94',
                    B = 'ButtonsBar_acceleratedTraining__icon_9b',
                    k = 'ButtonsBar_acceleratedTraining__label_ad';
                var w = a(3457),
                    y = a(9987),
                    S = a(6373),
                    N = a(3649);
                const I = 'CrewBookButton_base_da',
                    T = 'CrewBookButton_button_ee',
                    L = 'CrewBookButton_icon_11',
                    x = 'CrewBookButton_discount_6b',
                    M = 'CrewBookButton_counter_5d',
                    P = (0, r.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const a = E(),
                            n = a.model,
                            r = a.controls,
                            s = n.crewBooks.get(),
                            i = r.onCrewBooksClick;
                        return u().createElement(
                            S.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, N.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: s.totalAmount,
                                }),
                            },
                            u().createElement(
                                'div',
                                { id: 'crew_book_button', className: p()(I, e) },
                                u().createElement(
                                    w.u5,
                                    { type: w.L$.primary, mixClass: T, disabled: s.isDisabled || t, onClick: i },
                                    u().createElement('div', { className: L }),
                                ),
                                s.newAmount > 0 &&
                                    u().createElement(
                                        'div',
                                        { className: M },
                                        u().createElement(y.A, { value: s.newAmount }),
                                    ),
                                s.hasDiscount && u().createElement('div', { className: x }),
                            ),
                        );
                    });
                var O = a(3616);
                const H = ['children'];
                function W() {
                    return (
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                }
                const z = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, H);
                    return u().createElement(
                        O.Z,
                        W(
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
                var V = a(4489);
                let G;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(G || (G = {}));
                var j = a(1943);
                const $ = 'CrewOperationsButton_base_e3',
                    U = 'CrewOperationsButton_button_8e',
                    Z = 'CrewOperationsButton_icon_0c',
                    X = 'CrewOperationsButton_autoReturnIcon_f0',
                    q = (0, r.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const a = E().model,
                            n = ((e) => {
                                const t = (0, j.Jp)(c.D9);
                                return (a) => t({ action: c.eX.Click, parentScreen: e, item: a });
                            })(a.computes.getUiLoggingParentScreen()),
                            r = a.crewOperations.get();
                        return u().createElement(
                            'div',
                            { id: 'crew_operations_button', className: p()($, e) },
                            u().createElement(
                                z,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !t,
                                    onClick: () => n(c.x3.CrewOperationsButton),
                                },
                                u().createElement(
                                    S.i,
                                    {
                                        header: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.header(),
                                        body: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.body(),
                                    },
                                    u().createElement(
                                        'div',
                                        null,
                                        u().createElement(
                                            w.u5,
                                            { type: w.L$.primary, mixClass: U, disabled: t },
                                            u().createElement('div', { className: Z }),
                                        ),
                                        r.isAutoReturnOn && u().createElement('div', { className: X }),
                                    ),
                                ),
                            ),
                        );
                    });
                var K = a(9631);
                const Y = 'CrewToggleButton_base_03',
                    Q = 'CrewToggleButton_button_89',
                    J = 'CrewToggleButton_iconContainer_f9',
                    ee = 'CrewToggleButton_icon_a7';
                let te;
                !(function (e) {
                    e.WotPlus = 'wotPlus';
                })(te || (te = {}));
                const ae = (0, n.memo)(({ type: e, state: t, isDisabled: a, onClick: r, classMix: s }) => {
                        const i = (0, n.useMemo)(() => {
                            const a = t === v.Disabled ? v.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${a})`,
                            };
                        }, [e, t]);
                        return u().createElement(
                            'div',
                            { className: p()(Y, s) },
                            u().createElement(
                                K.C,
                                {
                                    type: w.L$.primary,
                                    isActive: t === v.On,
                                    disabled: a || t === v.Disabled,
                                    className: Q,
                                    onClick: r,
                                },
                                u().createElement(
                                    'div',
                                    { className: J },
                                    u().createElement('div', { className: ee, style: i }),
                                ),
                            ),
                        );
                    }),
                    ne = R.strings.crew.acceleratedTraining,
                    ue = (0, r.Pi)(({ isWidgetDisabled: e }) => {
                        const t = E(),
                            a = t.model,
                            n = t.controls,
                            r = a.isAcceleratedTraining.get(),
                            s = a.wotPlus.get(),
                            i = n.onWotPlusClick;
                        return u().createElement(
                            'div',
                            { className: h },
                            u().createElement(q, { classMix: p()(A, C), isWidgetDisabled: e }),
                            u().createElement(P, { classMix: p()(A, f), isWidgetDisabled: e }),
                            s.state !== v.Hidden &&
                                u().createElement(
                                    b.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    u().createElement(
                                        'div',
                                        null,
                                        u().createElement(ae, {
                                            type: te.WotPlus,
                                            state: s.state,
                                            isDisabled: e || s.isDisabled,
                                            onClick: i,
                                            classMix: p()(A, D),
                                        }),
                                    ),
                                ),
                            r &&
                                u().createElement(
                                    S.i,
                                    { header: ne.tooltip.header(), body: ne.tooltip.body() },
                                    u().createElement(
                                        'div',
                                        { className: F },
                                        u().createElement('div', { className: B }),
                                        u().createElement('div', { className: k }, ne.label()),
                                    ),
                                ),
                        );
                    }),
                    re = 'CrewWidgetApp_base_cc',
                    se = 'CrewWidgetApp_buttonsBar_e5',
                    ie = 'CrewWidgetApp_slotsList_ee';
                var oe = a(7727),
                    le = a(7030),
                    ce = a(8018),
                    me = a(7160);
                const de = 'BaseSlot_base_97',
                    _e = 'BaseSlot_base__hovered_61',
                    Ee = 'BaseSlot_base__inactive_7e',
                    ge = 'BaseSlot_hoverGlow_de',
                    pe = 'BaseSlot_hoverGlow__visible_f4',
                    be = 'BaseSlot_selectedGlow_25',
                    ve = 'BaseSlot_selectedGlow__visible_2f',
                    he = 'BaseSlot_hover_e9',
                    Ae = 'BaseSlot_hover__visible_1f',
                    Ce = 'BaseSlot_disabled_67',
                    fe = ({
                        onClick: e,
                        children: t,
                        isSelected: a = !1,
                        isDisabled: r,
                        isEnabledForMouse: s,
                        isEmpty: i = !1,
                        layoutInfo: o,
                    }) => {
                        const l = (0, n.useState)(!1),
                            c = l[0],
                            m = l[1],
                            d = c && (!a || (!i && o.isCurrentLayoutMemberChange)),
                            _ = d && !i && !o.isCurrentLayoutHangar;
                        return u().createElement(
                            'div',
                            {
                                className: p()(de, (c || a) && !o.isCurrentLayoutHangar && _e, (a || !s) && Ee),
                                onClick: e,
                                onMouseEnter: () => {
                                    s && !a && (oe.$.playHighlight(), m(!0));
                                },
                                onMouseLeave: () => {
                                    m(!1);
                                },
                            },
                            !o.isCurrentLayoutMemberChange && u().createElement('div', { className: p()(be, a && ve) }),
                            u().createElement('div', { className: p()(ge, _ && pe) }),
                            u().createElement('div', { className: p()(he, d && Ae) }),
                            r && u().createElement('div', { className: Ce }),
                            t,
                        );
                    },
                    De = ({
                        startState: e,
                        endState: t,
                        layoutInfo: a,
                        isPaused: r,
                        children: s,
                        className: i,
                        isTankmanMode: o,
                    }) => {
                        const l = (0, le.useSpring)(
                                () => ({ from: e, to: t, config: { duration: 300, easing: me.qb }, pause: r }),
                                [r],
                            )[0],
                            c = (0, n.useMemo)(
                                () =>
                                    a.isCurrentLayoutHangar || a.isCurrentLayoutQuickTraining || o
                                        ? e
                                        : (!a.isPreviousLayoutHangar && !a.isPreviousLayoutBarrack) || r
                                          ? t
                                          : l,
                                [a, r, l, e, t, o],
                            );
                        return u().createElement(le.animated.div, { className: i, style: c }, s);
                    },
                    Fe = 'DogSlot_base_8f',
                    Be = 'DogSlot_icon_ba',
                    ke = 'DogSlot_container_63',
                    we = 'DogSlot_roleAndName_c9',
                    ye = 'DogSlot_role_5c',
                    Se = 'DogSlot_name_9c',
                    Ne = 'DogSlot_btnDetails_b7',
                    Ie = { transform: 'translateX(0rem)' },
                    Te = (0, r.Pi)(({ isDisabled: e, layoutInfo: t }) => {
                        const a = E(),
                            r = a.model,
                            s = a.controls,
                            i = r.nation.get(),
                            o = s.onDogMoreInfoClick,
                            l = (0, n.useCallback)(() => {
                                !e && (0, oe.G)(ce.gO.RUDY);
                            }, [e]),
                            c = (0, n.useCallback)(
                                (t) => {
                                    t.stopPropagation(), !e && o();
                                },
                                [o, e],
                            ),
                            m = (0, le.useSpring)(
                                () => ({
                                    from: Ie,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: me.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
                            )[0],
                            d = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(i);
                        return u().createElement(
                            S.i,
                            { header: d.header(), body: d.body() },
                            u().createElement(
                                'div',
                                null,
                                u().createElement(
                                    fe,
                                    { onClick: l, isDisabled: e, isEnabledForMouse: !1, layoutInfo: t },
                                    u().createElement(
                                        De,
                                        {
                                            startState: Ie,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            isPaused: !1,
                                            className: Fe,
                                            isTankmanMode: !1,
                                        },
                                        u().createElement(le.animated.div, { className: Be, style: m }),
                                        u().createElement(
                                            'div',
                                            { className: ke },
                                            u().createElement(
                                                'div',
                                                { className: we },
                                                u().createElement('div', { className: ye }),
                                                u().createElement(
                                                    'div',
                                                    { className: Se },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(i).name(),
                                                ),
                                            ),
                                            u().createElement(
                                                'div',
                                                { className: Ne },
                                                u().createElement(
                                                    w.u5,
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
                var Le = a(4179);
                const xe = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: u = 0,
                        args: r,
                        isEnabled: s = !0,
                        onMouseDown: i,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                (0, Le.c9)(Le.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: u,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    oe.$.playYes();
                            }, [r, t, a, u]),
                            l = (0, n.useCallback)(() => {
                                (0, Le.c9)(Le.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: u,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, u]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === G.RIGHT)(e) && o();
                                },
                                [i, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Re = ['children'];
                function Me() {
                    return (
                        (Me =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Me.apply(this, arguments)
                    );
                }
                const Pe = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, Re);
                        return u().createElement(
                            xe,
                            Me({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Oe = 'ChangeCrewButton_base_0f',
                    He = 'ChangeCrewButton_base__inactive_77',
                    We = 'ChangeCrewButton_normalState_07',
                    ze = 'ChangeCrewButton_normalState__hide_db',
                    Ve = 'ChangeCrewButton_hoverState_68',
                    Ge = 'ChangeCrewButton_hoverState__show_89',
                    je = (0, r.Pi)(({ isSelected: e, isLocked: t, mainRole: a, isFemale: r }) => {
                        const s = E().model,
                            i = (0, n.useState)(!1),
                            o = i[0],
                            l = i[1],
                            m = (0, j.Sr)(c.D9, {
                                item: c.x3.ChangeButtonTooltip,
                                action: c.eX.Viewed,
                                parentScreen: s.computes.getUiLoggingParentScreen(),
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
                                              (0, N.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, ce.Gc)(a, r, ce.wP.Objective),
                                              }),
                                          ],
                                [t, r, a],
                            ),
                            _ = d[0],
                            g = d[1];
                        return u().createElement(
                            S.i,
                            {
                                header: _,
                                body: g,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            u().createElement(
                                'div',
                                {
                                    className: p()(Oe, (t || e) && He),
                                    onMouseEnter: () => {
                                        m.onShow(), t || e || (oe.$.playHighlight(), l(!0));
                                    },
                                    onMouseLeave: () => {
                                        m.onHide(), l(!1);
                                    },
                                },
                                u().createElement('div', { className: p()(We, o && ze) }),
                                u().createElement('div', { className: p()(Ve, (e || o) && Ge) }),
                            ),
                        );
                    }),
                    $e = 'CrewSlot_base_ac',
                    Ue = 'CrewSlot_changeCrew_02',
                    Ze = 'CrewSlot_content_5b',
                    Xe = 'CrewSlot_content__withChangeCrewButton_4e',
                    qe = 'CrewSlot_warningHighlight_ff',
                    Ke = 'CrewSlot_selectHighlight_50',
                    Ye = 'CrewSlot_selectHighlightInTankmanMode_37';
                var Qe = a(7077);
                const Je = 'AcceleratedTrainingIcon_base_4f',
                    et = 'AcceleratedTrainingIcon_icon_45',
                    tt = (0, n.memo)(({ classMix: e }) =>
                        u().createElement(
                            S.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            },
                            u().createElement(
                                'div',
                                { className: p()(Je, e) },
                                u().createElement('div', { className: et }),
                            ),
                        ),
                    ),
                    at = 'SpecializationAndName_base_ef',
                    nt = 'SpecializationAndName_roleWrapper_87',
                    ut = 'SpecializationAndName_role_55',
                    rt = 'SpecializationAndName_role__withGap_35',
                    st = 'SpecializationAndName_percent_e6',
                    it = 'SpecializationAndName_percent__untrained_1b',
                    ot = 'SpecializationAndName_acceleratedTrainingIcon_35',
                    lt = 'SpecializationAndName_name_aa';
                function ct() {
                    return (
                        (ct =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
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
                            tankmanID: a,
                            isUntrained: n,
                            name: r,
                            isAcceleratedTrainingAvailable: s,
                        }) => {
                            const i = E().model,
                                l = (0, j.Sr)(c.D9, {
                                    item: c.x3.MstlTooltip,
                                    action: c.eX.Viewed,
                                    parentScreen: i.computes.getUiLoggingParentScreen(),
                                });
                            return u().createElement(
                                'div',
                                { className: at },
                                u().createElement(
                                    b.u,
                                    ct(
                                        {
                                            targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                            contentId: R.views.lobby.crew.tooltips.TrainingLevelTooltip('resId'),
                                            args: { tankmanID: a },
                                            isEnabled: Boolean(a),
                                            ignoreShowDelay: !0,
                                            ignoreMouseClick: !0,
                                        },
                                        l,
                                    ),
                                    u().createElement(
                                        'div',
                                        { className: nt },
                                        o.UI(e, (e, t) =>
                                            u().createElement('div', {
                                                key: `role__${e}`,
                                                className: p()(ut, t > 0 && rt),
                                                style: {
                                                    backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                                },
                                            }),
                                        ),
                                        t > 0 &&
                                            u().createElement(
                                                'div',
                                                { className: p()(st, n && it) },
                                                (0, N.uF)(R.strings.common.percentValue(), { value: t }),
                                            ),
                                    ),
                                ),
                                s && u().createElement(tt, { classMix: ot }),
                                u().createElement('div', { className: lt }, r),
                            );
                        },
                    ),
                    dt = 'EmptySlotContent_base_77',
                    _t = 'EmptySlotContent_tankmanIcon_07',
                    Et = 'EmptySlotContent_icon_a8',
                    gt = 'EmptySlotContent_specialization_1f',
                    pt = 'EmptySlotContent_specialization__disabled_3d',
                    bt = 'EmptySlotContent_vehicle_55',
                    vt = { transform: 'translateX(0rem)', opacity: 1 },
                    ht = { transform: 'translateX(-70rem)', opacity: 0 },
                    At = (0, n.memo)(
                        ({
                            roles: e,
                            layoutInfo: t,
                            vehicleName: a,
                            vehicleType: r,
                            isDisabled: s,
                            isSelected: i,
                            blinkStyle: l,
                            qtTankmanIconStyle: c,
                        }) => {
                            const m = (0, le.useSpring)(
                                    () => ({
                                        from: vt,
                                        to: ht,
                                        config: { duration: 200, easing: me.ei },
                                        immediate: !0,
                                        pause: i,
                                    }),
                                    [i],
                                ),
                                d = m[0],
                                _ = m[1],
                                E = (0, n.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || _.start({ reset: !0, reverse: !0 });
                                }, [_, t]),
                                g = o.U2(e, 0) || '',
                                b = R.strings.crew_widget.vehicleWithName.$dyn((0, N.BN)(r)),
                                v = (0, N.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(g),
                                });
                            return u().createElement(
                                'div',
                                { className: dt, onMouseEnter: E, onMouseLeave: E },
                                u().createElement(
                                    'div',
                                    { className: _t },
                                    u().createElement(
                                        le.animated.div,
                                        { style: c },
                                        u().createElement(Qe.G, {
                                            name: 'empty',
                                            size: Qe.U.c100x60Barracks,
                                            classMix: Et,
                                        }),
                                        u().createElement(
                                            le.animated.div,
                                            { style: s ? void 0 : l },
                                            u().createElement(Qe.G, {
                                                name: 'emptyRed',
                                                size: Qe.U.c100x60Barracks,
                                                classMix: Et,
                                            }),
                                        ),
                                    ),
                                ),
                                u().createElement(
                                    'div',
                                    { className: p()(gt, s && pt) },
                                    u().createElement(mt, { tankmanID: 0, roles: e, name: v, isUntrained: !0 }),
                                ),
                                u().createElement(
                                    le.animated.div,
                                    { className: bt, style: i ? void 0 : d },
                                    (0, N.uF)(b, { name: a }),
                                ),
                            );
                        },
                    );
                var Ct = a(7078),
                    ft = a(2603),
                    Dt = a(5415);
                const Ft = (e) => e.skills.length + e.newSkillsAmount + e.possibleSkillsAmount;
                var Bt = a(8271),
                    kt = a(4385),
                    wt = a(9887),
                    yt = a.n(wt);
                const St = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Nt = (e) => e.includes('_') && ((e) => St.includes(e))(e.split('_').at(-1)),
                    It = [Dt.cJ.ExtraLarge, Dt.cJ.Large, Dt.cJ.Medium, Dt.cJ.Small, Dt.cJ.ExtraSmall],
                    Tt = (e, t) =>
                        Object.keys(e).reduce((a, n) => {
                            if (n in a) return a;
                            if (Nt(n)) {
                                const u = n.split('_').slice(0, -1).join('_');
                                if (u in a) return a;
                                const r = It.indexOf(t),
                                    s = (-1 !== r ? St.slice(r) : [])
                                        .map((e) => u + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    i = s ? e[s] : void 0;
                                return (a[u] = void 0 !== i ? i : e[u]), a;
                            }
                            const u = e[n];
                            return (
                                void 0 === u ||
                                    ((e, t) => St.some((a) => void 0 !== t[`${e}_${a}`]))(n, e) ||
                                    (a[n] = u),
                                a
                            );
                        }, {}),
                    Lt = (e, t = Tt) => {
                        const a = (
                            (e, t = Tt) =>
                            (a) => {
                                const r = (0, Dt.GS)().mediaSize,
                                    s = (0, n.useMemo)(() => t(a, r), [a, r]);
                                return u().createElement(e, s);
                            }
                        )(e, t);
                        return u().memo((t) =>
                            Object.keys(t).some((e) => Nt(e) && void 0 !== t[e])
                                ? u().createElement(a, t)
                                : u().createElement(e, t),
                        );
                    },
                    xt = {
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
                function Mt() {
                    return (
                        (Mt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Mt.apply(this, arguments)
                    );
                }
                Object.keys(yt());
                const Pt = {
                        XL: { mt: xt.mt__XL, mr: xt.mr__XL, mb: xt.mb__XL, ml: xt.ml__XL },
                        LG: { mt: xt.mt__LG, mr: xt.mr__LG, mb: xt.mb__LG, ml: xt.ml__LG },
                        MDp: { mt: xt.mt__MDp, mr: xt.mr__MDp, mb: xt.mb__MDp, ml: xt.ml__MDp },
                        MD: { mt: xt.mt__MD, mr: xt.mr__MD, mb: xt.mb__MD, ml: xt.ml__MD },
                        SMp: { mt: xt.mt__SMp, mr: xt.mr__SMp, mb: xt.mb__SMp, ml: xt.ml__SMp },
                        SM: { mt: xt.mt__SM, mr: xt.mr__SM, mb: xt.mb__SM, ml: xt.ml__SM },
                        XS: { mt: xt.mt__XS, mr: xt.mr__XS, mb: xt.mb__XS, ml: xt.ml__XS },
                    },
                    Ot = (Object.keys(Pt), ['mt', 'mr', 'mb', 'ml']),
                    Ht = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Wt = Lt((e) => {
                        let t = e.className,
                            a = e.width,
                            r = e.height,
                            s = e.m,
                            i = e.mt,
                            o = void 0 === i ? s : i,
                            l = e.mr,
                            c = void 0 === l ? s : l,
                            m = e.mb,
                            d = void 0 === m ? s : m,
                            _ = e.ml,
                            E = void 0 === _ ? s : _,
                            g = e.column,
                            b = e.row,
                            v = e.flexDirection,
                            h = void 0 === v ? (g ? 'column' : b && 'row') || void 0 : v,
                            A = e.flexStart,
                            C = e.center,
                            f = e.flexEnd,
                            D = e.spaceBetween,
                            F = e.spaceAround,
                            B = e.justifyContent,
                            k =
                                void 0 === B
                                    ? (A ? 'flex-start' : C && 'center') ||
                                      (f && 'flex-end') ||
                                      (D && 'space-between') ||
                                      (F && 'space-around') ||
                                      void 0
                                    : B,
                            w = e.alignItems,
                            y = void 0 === w ? (A ? 'flex-start' : C && 'center') || (f && 'flex-end') || void 0 : w,
                            S = e.alignSelf,
                            N = e.wrap,
                            I = e.flexWrap,
                            T = void 0 === I ? (N ? 'wrap' : void 0) : I,
                            L = e.grow,
                            x = e.shrink,
                            R = e.flex,
                            M = void 0 === R ? (L || x ? `${L ? 1 : 0} ${x ? 1 : 0} auto` : void 0) : R,
                            P = e.style,
                            O = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, Rt);
                        const W = (0, n.useMemo)(() => {
                                const e = { mt: o, mr: c, mb: d, ml: E },
                                    t = ((e) =>
                                        Ot.reduce((t, a) => {
                                            const n = e[a];
                                            return n && 'number' != typeof n ? t.concat(Pt[!0 === n ? 'MD' : n][a]) : t;
                                        }, []))(e),
                                    n = ((e) =>
                                        Ot.reduce((t, a) => {
                                            const n = e[a];
                                            return 'number' == typeof n && (t[Ht[a]] = n + 'rem'), t;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, P, n, {
                                        width: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: M,
                                        alignSelf: S,
                                        display: h || y ? 'flex' : void 0,
                                        flexDirection: h,
                                        flexWrap: T,
                                        justifyContent: k,
                                        alignItems: y,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [a, r, o, c, d, E, P, M, S, h, T, k, y]),
                            z = W.computedStyle,
                            V = W.computedClassNames;
                        return u().createElement('div', Mt({ className: p()(xt.base, ...V, t), style: z }, H), O);
                    });
                var zt = a(280),
                    Vt = a(3532),
                    Gt = a.n(Vt);
                const jt = {
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
                Object.keys(yt());
                const Zt = Object.keys(Gt()),
                    Xt = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
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
                            'heading-H56': Xt,
                            'heading-H36': Xt,
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
                                ? ((e) => Zt.includes(e))(e)
                                    ? { colorClassName: jt[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    ea = Lt((e) => {
                        let t = e.text,
                            a = e.variant,
                            r = e.className,
                            s = e.color,
                            i = e.m,
                            o = e.mt,
                            l = void 0 === o ? i : o,
                            c = e.mr,
                            m = void 0 === c ? i : c,
                            d = e.mb,
                            _ = void 0 === d ? i : d,
                            E = e.ml,
                            g = void 0 === E ? i : E,
                            b = e.style,
                            v = e.format,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, $t);
                        const A = (0, n.useMemo)(() => {
                                const e = Jt(s),
                                    t = e.colorClassName,
                                    a = e.colorStyle,
                                    n = void 0 === a ? {} : a;
                                return { computedStyle: Object.assign({}, b, n), colorClassName: t };
                            }, [b, s]),
                            C = A.computedStyle,
                            f = A.colorClassName;
                        return u().createElement(
                            Wt,
                            Ut(
                                {
                                    className: p()(jt.base, a && jt[a], f, r),
                                    style: C,
                                    mt: !0 === l ? Qt[a || 'paragraph-P16'].mt : l,
                                    mr: !0 === m ? Qt[a || 'paragraph-P16'].mr : m,
                                    mb: !0 === _ ? Qt[a || 'paragraph-P16'].mb : _,
                                    ml: !0 === g ? Qt[a || 'paragraph-P16'].ml : g,
                                },
                                h,
                            ),
                            void 0 !== v ? u().createElement(zt.z, Ut({}, v, { text: t })) : t,
                        );
                    }),
                    ta = {
                        base: 'RoleLevelIcon_base_e1',
                        realLevel: 'RoleLevelIcon_realLevel_96',
                        base__small: 'RoleLevelIcon_base__small_ce',
                        icon: 'RoleLevelIcon_icon_fa',
                    },
                    aa = (0, n.memo)(({ percentValue: e, skillSize: t, hasSkills: a }) => {
                        const n = a ? R.strings.crew_widget.plusValue() : R.strings.crew_widget.plusSpecValue();
                        return u().createElement(
                            S.i,
                            {
                                header: R.strings.crew_widget.tooltip.roleLevelIcon.header(),
                                body: R.strings.crew_widget.tooltip.roleLevelIcon.body(),
                            },
                            u().createElement(
                                'div',
                                { className: p()(ta.base, ta[`base__${t}`]) },
                                u().createElement('div', { className: ta.icon }),
                                u().createElement(
                                    'div',
                                    { className: ta.realLevel },
                                    u().createElement(ea, {
                                        text: n,
                                        format: { binding: { value: u().createElement(ea, { text: e }) } },
                                    }),
                                ),
                            ),
                        );
                    }),
                    na = {
                        base: 'LastSkillInfo_base_38',
                        realLevel: 'LastSkillInfo_realLevel_78',
                        base__small: 'LastSkillInfo_base__small_c5',
                        possibleLevel: 'LastSkillInfo_possibleLevel_02',
                        acceleratedTrainingIcon: 'LastSkillInfo_acceleratedTrainingIcon_bf',
                        base__big: 'LastSkillInfo_base__big_10',
                    },
                    ua = 0.01,
                    ra = (0, n.memo)(
                        ({
                            lastSkillLevel: e,
                            lastPossibleSkillLevel: t,
                            showAcceleratedTrainingIcon: a,
                            skillSize: r,
                            blinkStyle: s,
                        }) => {
                            const i = (0, n.useRef)(e),
                                o = (0, le.useSpring)(() => ({ from: { scale: 1 } })),
                                l = o[0],
                                c = o[1];
                            (0, n.useEffect)(() => {
                                t < 0 &&
                                    i.current !== e &&
                                    (c.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: me.Fs },
                                    }),
                                    (i.current = e));
                            }, [e, t, c]);
                            const m = (0, n.useMemo)(
                                    () =>
                                        0 === t
                                            ? [R.strings.common.percentValue(), t]
                                            : t < ua
                                              ? [R.strings.crew_widget.plusMinValue(), ua]
                                              : [R.strings.crew_widget.plusValue(), t],
                                    [t],
                                ),
                                d = m[0],
                                _ = m[1];
                            return u().createElement(
                                'div',
                                { className: p()(na.base, na[`base__${r}`]) },
                                e >= 0 &&
                                    e < 100 &&
                                    u().createElement(
                                        le.animated.div,
                                        { style: l },
                                        u().createElement(
                                            'div',
                                            { className: na.realLevel },
                                            (0, N.uF)(R.strings.common.percentValue(), {
                                                value: e > 0 && e < ua ? ua : e,
                                            }),
                                        ),
                                    ),
                                t >= 0 &&
                                    t < 100 &&
                                    u().createElement(
                                        le.animated.div,
                                        { className: na.possibleLevel, style: s },
                                        (0, N.uF)(d, { value: _ }),
                                    ),
                                a && u().createElement(tt, { classMix: na.acceleratedTrainingIcon }),
                            );
                        },
                    );
                var sa = a(8485);
                const ia = 33,
                    oa = 0,
                    la = !0,
                    ca = 'play';
                const ma = [
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
                function da() {
                    return (
                        (da =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        da.apply(this, arguments)
                    );
                }
                const _a = (0, n.memo)(function (e) {
                        let t = e.width,
                            a = e.height,
                            r = e.getImageSource,
                            s = e.frameCount,
                            i = e.onAnimate,
                            o = e.frameTime,
                            l = void 0 === o ? ia : o,
                            c = e.initialFrameIndex,
                            m = void 0 === c ? oa : c,
                            d = e.lastFrameIndex,
                            _ = void 0 === d ? s - 1 : d,
                            E = e.loop,
                            g = void 0 === E ? la : E,
                            p = e.state,
                            b = void 0 === p ? ca : p,
                            v = e.onAnimationDone,
                            h = e.onAnimationComplete,
                            A = e.poster,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, ma);
                        const f = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = f.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    a = (a) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(a.img, -a.x, -a.y);
                                    };
                                switch (b) {
                                    case 'play':
                                        return (function () {
                                            const e = pa(m, _, r),
                                                t = Ea(m, _),
                                                n = window.setInterval(() => {
                                                    const u = t(),
                                                        r = e.get(u);
                                                    r
                                                        ? (null == i || i(u, r),
                                                          a(r),
                                                          u === _ &&
                                                              (null == h || h(),
                                                              g || (null == v || v(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === m && A ? { path: A, x: 0, y: 0 } : r(m),
                                                t = new Image();
                                            t.src = e.path;
                                            const n = () => a(ga(e, t));
                                            return (
                                                t.addEventListener('load', n), () => t.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, m, _, g, i, h, v, A, b]),
                            u().createElement('canvas', da({}, C, { width: t, height: a, ref: f }))
                        );
                    }),
                    Ea = (e, t) => {
                        let a = e;
                        return () => {
                            const n = a;
                            return (a += 1), a > t && (a = e), n;
                        };
                    },
                    ga = (e, t) => Object.assign({}, e, { img: t }),
                    pa = (e, t, a) => {
                        const n = new Map(),
                            u = {};
                        for (let r = e; r <= t; r++) {
                            const e = a(r),
                                t = u[e.path];
                            if (t) n.set(r, ga(e, t));
                            else {
                                const t = new Image();
                                (u[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, ga(e, t));
                            }
                        }
                        return n;
                    };
                function ba(e) {
                    return (t) => `${e}${t}`;
                }
                const va = [
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
                function ha() {
                    return (
                        (ha =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ha.apply(this, arguments)
                    );
                }
                let Aa;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(Aa || (Aa = {}));
                const Ca = (e, t, a) => {
                        const n = new Image();
                        (n.src = a(t)), e.push(n);
                    },
                    fa =
                        ((0, n.memo)((e) => {
                            let t = e.width,
                                a = e.height,
                                r = e.getSrcByFrame,
                                s = e.frameCount,
                                i = e.onAnimate,
                                o = void 0 === i ? () => {} : i,
                                l = e.frameTime,
                                c = void 0 === l ? 33 : l,
                                m = e.initialFrameIndex,
                                d = void 0 === m ? 0 : m,
                                _ = e.loop,
                                E = void 0 === _ || _,
                                g = e.state,
                                p = void 0 === g ? Aa.Play : g,
                                b = e.onAnimationComplete,
                                v = void 0 === b ? () => {} : b,
                                h = e.revers,
                                A = void 0 !== h && h,
                                C = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        u = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                    return u;
                                })(e, va);
                            const f = (0, n.useRef)(null);
                            return (
                                (0, n.useEffect)(() => {
                                    const e = f.current;
                                    if (!e) return;
                                    const n = s - 1,
                                        u = e.getContext('2d'),
                                        i = (n) => {
                                            u.clearRect(0, 0, e.width, e.height), u.drawImage(n, 0, 0, t, a);
                                        };
                                    if ('stop' === p) {
                                        const e = r(0),
                                            t = new Image();
                                        t.src = e;
                                        const a = () => i(t);
                                        return t.addEventListener('load', a), () => t.removeEventListener('load', a);
                                    }
                                    const l = ((e, t, a) => {
                                            const n = [];
                                            if (a) for (let a = e; a >= 0; a--) Ca(n, a, t);
                                            else for (let a = 0; a < e; a++) Ca(n, a, t);
                                            return n;
                                        })(s, r, A),
                                        m = ((e, t = 0) => {
                                            let a = t;
                                            return () => {
                                                const t = a;
                                                return (a += 1), a > e && (a = 0), t;
                                            };
                                        })(n, d),
                                        _ = setInterval(() => {
                                            const e = m(),
                                                t = l[e];
                                            i(l[e]), o(e, t), e === n && (v(), E || clearInterval(_));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [s, c, r, a, d, E, o, v, p, t, A]),
                                u().createElement('canvas', ha({}, C, { width: t, height: a, ref: f }))
                            );
                        }),
                        'AnimatedNewSkill_base_6b'),
                    Da = 'AnimatedNewSkill_base__big_31';
                function Fa(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ba(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return Ba(e, t);
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
                function Ba(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                class ka {
                    constructor() {
                        (this._intervalID = void 0),
                            (this._observers = void 0),
                            (this._intervalID = null),
                            (this._observers = new Map());
                    }
                    static get instance() {
                        return ka._instance || (ka._instance = new ka()), ka._instance;
                    }
                    subscribe(e) {
                        this._observers.set(e, e),
                            1 === this._observers.size &&
                                (this._intervalID = window.setInterval(() => {
                                    for (var e, t = Fa(this._observers.values()); !(e = t()).done; ) {
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
                ka._instance = void 0;
                const wa = {
                        width: 24,
                        height: 24,
                        frameCount: 42,
                        chunk: { count: 1, columns: 42, rows: 1 },
                        getChunkPath: ba('R.images.gui.maps.icons.sequence.new_skill.skill_'),
                    },
                    ya = {
                        width: 14,
                        height: 14,
                        frameCount: 35,
                        chunk: { count: 1, columns: 35, rows: 1 },
                        getChunkPath: ba('R.images.gui.maps.icons.sequence.new_skill.skill_small_'),
                    },
                    Sa = ({ size: e }) => {
                        const t = e === sa.O.Small ? ya : wa,
                            a = (function (e) {
                                const t = e.chunk,
                                    a = t.rows * t.columns;
                                return (n) => {
                                    const u = n % a,
                                        r = (u % t.columns) * e.width,
                                        s = Math.trunc(u / t.columns) * e.height;
                                    return { path: e.getChunkPath(Math.trunc(n / a)), x: r, y: s };
                                };
                            })(t),
                            r = (0, n.useState)(Aa.Stop),
                            s = r[0],
                            i = r[1],
                            o = (0, n.useCallback)(() => {
                                i(Aa.Play);
                            }, [i]),
                            l = (0, n.useCallback)(() => {
                                i(Aa.Stop);
                            }, [i]);
                        return (
                            (0, n.useEffect)(() => (ka.instance.subscribe(o), () => ka.instance.unsubscribe(o)), [o]),
                            u().createElement(_a, {
                                width: t.width,
                                height: t.height,
                                frameCount: t.frameCount,
                                getImageSource: a,
                                loop: !1,
                                state: s,
                                onAnimationDone: l,
                                className: p()(fa, e === sa.O.Big && Da),
                            })
                        );
                    },
                    Na = { base: 'Skill_base_ba', base__big: 'Skill_base__big_eb' };
                function Ia() {
                    return (
                        (Ia =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ia.apply(this, arguments)
                    );
                }
                let Ta;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(Ta || (Ta = {}));
                const La = (0, n.memo)(
                        ({
                            name: e,
                            icon: t,
                            type: a,
                            size: r,
                            marginValue: s,
                            clipWidth: i,
                            tankmanID: o,
                            blinkStyle: l,
                            showNewSkillAnimation: c,
                            isTooltipEnabled: m = !0,
                        }) => {
                            const d = (0, n.useRef)(''),
                                _ = (0, le.useSpring)(() => ({ from: { scale: 1 } })),
                                E = _[0],
                                g = _[1];
                            (0, n.useEffect)(() => {
                                a === Bt.W.New &&
                                    d.current === Bt.W.Possible &&
                                    g.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: me.Fs },
                                    }),
                                    (d.current = a);
                            }, [a, g]);
                            const v = (0, n.useCallback)(() => {
                                switch (a) {
                                    case Bt.W.Learned:
                                    case Bt.W.Learning:
                                    case Bt.W.Irrelevant:
                                        return {
                                            contentId:
                                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                    'resId',
                                                ),
                                            args: { tooltipId: ft.HZ, tankmanID: o, skillName: e },
                                        };
                                    case Bt.W.New:
                                    case Bt.W.Possible:
                                        return {
                                            contentId: R.views.lobby.crew.tooltips.PerkAvailableTooltip('resId'),
                                            args: { tankmanID: o },
                                        };
                                }
                            }, [a, e, o]);
                            return u().createElement(
                                b.u,
                                Ia({}, v(), {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: m,
                                    ignoreShowDelay: !0,
                                }),
                                u().createElement(
                                    le.animated.div,
                                    { style: E },
                                    u().createElement(
                                        le.animated.div,
                                        { style: a === Bt.W.Possible ? l : void 0 },
                                        u().createElement(
                                            'div',
                                            {
                                                className: p()(Na.base, Na[`base__${r}`]),
                                                style: { marginLeft: `${s}rem`, clipPath: `inset(0 ${i}rem 0 0)` },
                                            },
                                            !c || (a !== Bt.W.Possible && a !== Bt.W.New)
                                                ? u().createElement(sa.d, { icon: t, size: r, type: a })
                                                : u().createElement(Sa, { size: r }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    xa = 'SkillsList_base_11',
                    Ra = 'SkillsList_row_03',
                    Ma = 'SkillsList_possibleLevel_97',
                    Pa = 'SkillsList_possibleLevel__before_6f',
                    Oa = ({
                        tankman: e,
                        showAcceleratedTrainingIcon: t = !1,
                        rowWidth: a = 220,
                        maxBigSkillsInRow: r = 16,
                        blinkStyle: s,
                        isSkillTooltipEnabled: i = !0,
                        showNewSkillAnimation: l = !1,
                    }) => {
                        const c = e.skills,
                            m = c.length,
                            d = Ft(e),
                            _ = ((e, t, a) => {
                                let n = e > t ? 10 : e;
                                const u = 0 === e ? e : Math.ceil(e / n),
                                    r = u > 1 ? 16 : 24;
                                let s = 2,
                                    i = r;
                                for (; (a - (r + s)) / (i + s) < Math.floor((e - 1) / u); ) s > 0 ? s-- : i--;
                                return (
                                    (n = Math.min(n, 1 + Math.floor((a - r) / (i + s)))),
                                    i !== r && (s = i - r),
                                    [u, n, s, r, i]
                                );
                            })(d, r, a),
                            E = _[0],
                            g = _[1],
                            b = _[2],
                            v = _[3],
                            h = _[4],
                            A = E > 1 ? Ta.Small : Ta.Big,
                            C = (0, n.useMemo)(
                                () =>
                                    u().createElement(
                                        le.animated.div,
                                        { className: p()(Ma, 0 === m && Pa), style: s },
                                        u().createElement(aa, {
                                            percentValue: e.lastPossibleRoleLevel,
                                            skillSize: A,
                                            hasSkills: e.possibleSkillsAmount > 0 || m > 0,
                                        }),
                                    ),
                                [s, A, m, e.lastPossibleRoleLevel, e.possibleSkillsAmount],
                            );
                        return u().createElement(
                            'div',
                            { className: xa },
                            (0, kt.K)(E, (a) => {
                                const n = Math.min(g, d - a * g),
                                    r = a === E - 1;
                                return u().createElement(
                                    'div',
                                    { className: Ra, key: `row_${a}` },
                                    e.lastPossibleRoleLevel > 0 && 0 === m && C,
                                    (0, kt.K)(n, (t) => {
                                        const r = g * a + t;
                                        let d = '',
                                            _ = '',
                                            E = Bt.W.Learned;
                                        if (r < m) {
                                            const e = o.U2(c, r);
                                            e && ((d = e.name), (_ = e.icon), (E = e.type));
                                        } else E = r < m + e.newSkillsAmount ? Bt.W.New : Bt.W.Possible;
                                        return u().createElement(La, {
                                            name: d,
                                            icon: _,
                                            type: E,
                                            size: A,
                                            marginValue: 0 === t ? 0 : b,
                                            key: r + '_' + d,
                                            clipWidth: t === n - 1 ? 0 : v - h,
                                            tankmanID: e.tankmanID,
                                            blinkStyle: s,
                                            isTooltipEnabled: i,
                                            showNewSkillAnimation: l,
                                        });
                                    }),
                                    r &&
                                        u().createElement(
                                            u().Fragment,
                                            null,
                                            u().createElement(ra, {
                                                lastSkillLevel: e.possibleSkillsAmount > 0 ? -1 : e.lastSkillLevel,
                                                lastPossibleSkillLevel: e.lastPossibleSkillLevel,
                                                showAcceleratedTrainingIcon: t,
                                                lastPossibleRoleLevel: e.lastPossibleRoleLevel,
                                                skillSize: A,
                                                blinkStyle: s,
                                                hasSkills: e.possibleSkillsAmount > 0 || m > 0,
                                            }),
                                            e.lastPossibleRoleLevel > 0 && m > 0 && C,
                                        ),
                                );
                            }),
                            !E &&
                                u().createElement(
                                    'div',
                                    { className: Ra },
                                    e.lastPossibleRoleLevel > 0 && 0 === m && C,
                                    u().createElement(ra, {
                                        lastSkillLevel: e.possibleSkillsAmount > 0 ? -1 : e.lastSkillLevel,
                                        lastPossibleSkillLevel: e.lastPossibleSkillLevel,
                                        showAcceleratedTrainingIcon: t,
                                        lastPossibleRoleLevel: e.lastPossibleRoleLevel,
                                        skillSize: A,
                                        blinkStyle: s,
                                        hasSkills: e.possibleSkillsAmount > 0 || m > 0,
                                    }),
                                    e.lastPossibleRoleLevel > 0 && m > 0 && C,
                                ),
                        );
                    },
                    Ha = 'TankmanInfo_base_69',
                    Wa = 'TankmanInfo_base__disabled_36',
                    za = 'TankmanInfo_tankmanTooltipHoverArea_9b',
                    Va = 'TankmanInfo_specialization_77',
                    Ga = 'TankmanInfo_specialization__withManySkills_9a',
                    ja = 'TankmanInfo_skillsContainer_17',
                    $a = 'TankmanInfo_skillsContainer__withManySkills_00',
                    Ua = (0, r.Pi)(({ tankman: e, layoutInfo: t, isUntrained: a, blinkStyle: r, isDisabled: s }) => {
                        const i = E().model,
                            o = t.isCurrentLayoutQuickTraining || i.computes.isChangeCrewButtonVisible(),
                            l = (0, Dt.GS)().mediaSize,
                            c = (0, n.useMemo)(() => (o ? (l >= Dt.cJ.Small ? 190 : 146) : 220), [o, l]),
                            m = ((e, t) => Ft(e) > t)(e, 10),
                            d = !t.isCurrentLayoutQuickTraining && -1 !== e.tankmanID && e.isLessMastered,
                            _ = e.baseSpecializationLevel >= 100;
                        return u().createElement(
                            'div',
                            { className: p()(Ha, s && Wa) },
                            u().createElement(
                                Ct.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: ft.v$, tankmanID: e.tankmanID },
                                },
                                u().createElement('div', { className: za }),
                            ),
                            u().createElement(
                                'div',
                                { className: p()(Va, m && Ga) },
                                u().createElement(mt, {
                                    roles: e.roles,
                                    tankmanID: e.tankmanID,
                                    specializationLevel: e.specializationLevel,
                                    isUntrained: a,
                                    name: e.fullName,
                                    isAcceleratedTrainingAvailable: d && !_,
                                }),
                            ),
                            u().createElement(
                                'div',
                                { className: p()(ja, m && $a) },
                                u().createElement(Oa, {
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
                    Za = 'QuickTrainingTankmanSlotContent_base_8d',
                    Xa = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    qa = 'QuickTrainingTankmanSlotContent_highlight_72',
                    Ka = 'QuickTrainingTankmanSlotContent_icon_7c',
                    Ya = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    Qa = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    Ja = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    en = { opacity: 0 },
                    tn = [{ opacity: 1 }, { opacity: 0 }],
                    an = (0, n.memo)(
                        ({
                            tankman: e,
                            isUntrained: t,
                            blinkStyle: a,
                            qtTankmanIconStyle: r,
                            layoutInfo: s,
                            isDisabled: i,
                        }) => {
                            const o = (0, n.useRef)(e.lastSkillLevelFull),
                                l = (0, n.useRef)(e.skills.length),
                                c = (0, le.useSpring)(() => ({ from: Ya })),
                                m = c[0],
                                d = c[1],
                                _ = (0, le.useSpring)(() => ({ from: en })),
                                E = _[0],
                                g = _[1],
                                p = (0, n.useRef)(!1);
                            return (
                                (0, n.useEffect)(() => {
                                    e.hasPossibleProgress
                                        ? p.current ||
                                          (d.start({
                                              from: Ya,
                                              to: Qa,
                                              reverse: false,
                                              config: { duration: 300, easing: me.BH },
                                          }),
                                          (p.current = !0))
                                        : p.current
                                          ? (o.current !== e.lastSkillLevelFull || l.current !== e.skills.length
                                                ? (d.start({
                                                      from: Qa,
                                                      to: Ja,
                                                      delay: 200,
                                                      config: { duration: 500, easing: me.BH },
                                                  }),
                                                  (o.current = e.lastSkillLevelFull),
                                                  (l.current = e.skills.length),
                                                  g.start({
                                                      from: en,
                                                      to: tn,
                                                      delay: 200,
                                                      config: { duration: 500, easing: me.BH },
                                                  }))
                                                : d.start({ reset: !0, reverse: !0 }),
                                            (p.current = !1))
                                          : ((o.current = e.lastSkillLevelFull), (l.current = e.skills.length));
                                }, [d, g, e.lastSkillLevelFull, e.hasPossibleProgress, e.skills.length]),
                                u().createElement(
                                    'div',
                                    { className: Za },
                                    u().createElement(le.animated.div, { className: qa, style: E }),
                                    u().createElement(
                                        le.animated.div,
                                        { style: r },
                                        u().createElement(Qe.G, {
                                            name: e.icon,
                                            size: Qe.U.c100x60Barracks,
                                            classMix: Ka,
                                            isSkin: e.isInSkin,
                                        }),
                                    ),
                                    u().createElement(le.animated.div, { className: Xa, style: m }),
                                    u().createElement(Ua, {
                                        tankman: e,
                                        layoutInfo: s,
                                        isUntrained: t,
                                        blinkStyle: a,
                                        isDisabled: i,
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
                                    for (let r = 0; r < a; r++) {
                                        var n, u;
                                        if (
                                            (null == (n = o.U2(e, r)) ? void 0 : n.name) !==
                                            (null == (u = o.U2(t, r)) ? void 0 : u.name)
                                        )
                                            return !1;
                                    }
                                    return !0;
                                })(a.skills, n.skills) &&
                                a.lastSkillLevelFull === n.lastSkillLevelFull &&
                                a.possibleSkillsAmount === n.possibleSkillsAmount &&
                                a.lastPossibleSkillLevel === n.lastPossibleSkillLevel &&
                                a.specializationLevel === n.specializationLevel &&
                                a.lastPossibleRoleLevel === n.lastPossibleRoleLevel
                            );
                        },
                    ),
                    nn = 'TankmanSlotContent_base_00',
                    un = 'TankmanSlotContent_icon_ef',
                    rn = (0, n.memo)(({ tankman: e, layoutInfo: t, isUntrained: a, isDisabled: n }) =>
                        u().createElement(
                            'div',
                            { className: nn },
                            u().createElement(Qe.G, {
                                name: e.icon,
                                size: Qe.U.c100x60Barracks,
                                classMix: un,
                                isSkin: e.isInSkin,
                            }),
                            u().createElement(Ua, { tankman: e, layoutInfo: t, isUntrained: a, isDisabled: n }),
                        ),
                    ),
                    sn = (0, n.memo)(
                        ({
                            roles: e,
                            tankman: t,
                            layoutInfo: a,
                            vehicleName: n,
                            vehicleType: r,
                            isUntrained: s,
                            isDisabled: i,
                            isSelected: o,
                            blinkSlotStyle: l,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: m,
                        }) =>
                            -1 === t.tankmanID
                                ? u().createElement(At, {
                                      roles: e,
                                      layoutInfo: a,
                                      vehicleName: n,
                                      vehicleType: r,
                                      isDisabled: i,
                                      isSelected: o,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: m,
                                  })
                                : a.isCurrentLayoutQuickTraining
                                  ? u().createElement(an, {
                                        tankman: t,
                                        isUntrained: s,
                                        blinkStyle: l,
                                        qtTankmanIconStyle: m,
                                        layoutInfo: a,
                                        isDisabled: i,
                                    })
                                  : u().createElement(rn, { tankman: t, layoutInfo: a, isUntrained: s, isDisabled: i }),
                    ),
                    on = { transform: 'translateX(0rem)' },
                    ln = { transform: 'translateX(41rem)' },
                    cn = { opacity: 0 },
                    mn = { opacity: 1 },
                    dn = (0, r.Pi)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: a,
                            layoutInfo: r,
                            isSelected: s,
                            isAnySlotSelected: i,
                            isDisabled: l,
                            blinkSlotStyle: m,
                            blinkTankmanStyle: d,
                            qtTankmanIconStyle: _,
                        }) => {
                            const g = E(),
                                b = g.model,
                                v = g.controls,
                                h = ((e, t) => {
                                    const a = (0, j.Jp)(c.D9),
                                        n = (0, V.f)(
                                            () => a({ action: c.eX.Click, parentScreen: e, item: t }),
                                            [e, t],
                                            c.tL,
                                        );
                                    return (e) => {
                                        e.button === G.RIGHT && n();
                                    };
                                })(b.computes.getUiLoggingParentScreen(), c.x3.SlotContextMenu),
                                A = v.onSlotClick,
                                C = v.onChangeCrewClick,
                                f = b.computes.isChangeCrewButtonVisible(),
                                D = b.computes.isTankmanMode(),
                                F = b.isCrewLocked.get(),
                                B = b.vehicleName.get(),
                                k = b.vehicleType.get(),
                                w = !l && a.isInteractive && (!r.isCurrentLayoutQuickTraining || i),
                                y = (0, n.useCallback)(() => {
                                    w && !D && ((0, oe.G)(R.sounds.yes1()), A(e, a.tankmanID));
                                }, [e, a, A, D, w]),
                                S = (0, n.useCallback)(
                                    (t) => {
                                        t.stopPropagation(), F || ((0, oe.G)(R.sounds.yes1()), C(e, a.tankmanID));
                                    },
                                    [e, a, C, F],
                                ),
                                N = (0, n.useMemo)(() => ({ tankmanID: a.tankmanID, slotIdx: e }), [a, e]);
                            return u().createElement(
                                Pe,
                                {
                                    args: N,
                                    isEnabled: !l,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    onMouseDown: h,
                                },
                                u().createElement(
                                    'div',
                                    null,
                                    u().createElement(
                                        fe,
                                        {
                                            onClick: y,
                                            isSelected: s,
                                            isDisabled: l,
                                            isEmpty: -1 === a.tankmanID,
                                            layoutInfo: r,
                                            isEnabledForMouse: w,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: $e },
                                            a.hasWarning && u().createElement('div', { className: qe }),
                                            s && u().createElement('div', { className: D ? Ye : Ke }),
                                            u().createElement(
                                                De,
                                                {
                                                    startState: on,
                                                    endState: ln,
                                                    layoutInfo: r,
                                                    isPaused: !f,
                                                    className: p()(Ze, f && Xe),
                                                    isTankmanMode: D,
                                                },
                                                u().createElement(sn, {
                                                    roles: t,
                                                    tankman: a,
                                                    layoutInfo: r,
                                                    isUntrained: a.isUntrained,
                                                    isDisabled: l,
                                                    vehicleName: B,
                                                    vehicleType: k,
                                                    blinkSlotStyle: m,
                                                    blinkTankmanStyle: d,
                                                    qtTankmanIconStyle: _,
                                                    isSelected: s,
                                                }),
                                            ),
                                            f &&
                                                u().createElement(
                                                    'div',
                                                    { onClick: S },
                                                    u().createElement(
                                                        De,
                                                        {
                                                            startState: cn,
                                                            endState: mn,
                                                            layoutInfo: r,
                                                            isPaused: !f,
                                                            className: Ue,
                                                            isTankmanMode: D,
                                                        },
                                                        u().createElement(je, {
                                                            isSelected: r.isCurrentLayoutMemberChange && s,
                                                            isLocked: F,
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
                    _n = 'SlotsList_base_5f';
                function En() {
                    return (
                        (En =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        En.apply(this, arguments)
                    );
                }
                const gn = { transform: 'translateX(0rem)' },
                    pn = { transform: 'translateX(15rem)' },
                    bn = (0, r.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: a }) => {
                        const r = E().model,
                            s = r.computes.isAnyEmptySlots(),
                            i = (0, le.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: me.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            o = i[0],
                            l = i[1];
                        (0, n.useEffect)(() => {
                            s ? l.resume() : l.pause();
                        }, [l, s]);
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
                                to: pn,
                                delay: 200,
                                config: { duration: 300, easing: me.ei },
                                pause: !e.isCurrentLayoutQuickTraining,
                            }))[0],
                            g = (0, n.useCallback)(
                                (a) => t || (e.isCurrentLayoutQuickTraining && -1 === a),
                                [t, e.isCurrentLayoutQuickTraining],
                            );
                        return u().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: p()(_n, a) },
                            r.computes.getSlots().map((t, a) =>
                                u().createElement(
                                    dn,
                                    En({}, t, {
                                        layoutInfo: e,
                                        key: `slot_${a}_${t.tankman.tankmanID}`,
                                        isSelected:
                                            !e.isCurrentLayoutHangar &&
                                            (r.computes.isSlotSelected(t.slotIdx) || r.computes.isTankmanMode()),
                                        isAnySlotSelected: r.computes.isAnySlotSelected(),
                                        isDisabled: g(t.tankman.tankmanID),
                                        blinkSlotStyle: m,
                                        blinkTankmanStyle: o,
                                        qtTankmanIconStyle: _,
                                    }),
                                ),
                            ),
                        );
                    }),
                    vn = (0, r.Pi)(() => {
                        const e = E().model,
                            t = e.isDisabled.get(),
                            a = e.hasDog.get(),
                            n = e.computes.getLayoutInfo();
                        return u().createElement(
                            'div',
                            { className: re },
                            e.computes.isButtonBarVisible() &&
                                u().createElement(
                                    'div',
                                    { className: se },
                                    u().createElement(ue, { isWidgetDisabled: t }),
                                ),
                            u().createElement(bn, { layoutInfo: n, isWidgetDisabled: t, className: ie }),
                            a && u().createElement(Te, { layoutInfo: n, isDisabled: t }),
                        );
                    }),
                    hn = (0, n.memo)(() =>
                        u().createElement(
                            _,
                            { options: { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') } },
                            u().createElement(vn, null),
                        ),
                    );
            },
            5801: (e, t, a) => {
                'use strict';
                a.d(t, { p: () => Ne });
                var n = a(6179),
                    u = a.n(n),
                    r = a(6483),
                    s = a.n(r),
                    i = a(2106),
                    o = a(6373);
                let l;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(l || (l = {}));
                var c = a(3403),
                    m = a(3415),
                    d = a(9480),
                    _ = a(9631);
                const E = 'FilterTitle_base_a7',
                    g = 'FilterTitle_label_05',
                    p = 'FilterTitle_discount_42',
                    b = 'FilterTitle_discountIcon_30',
                    v = ({ label: e, hasDiscount: t, className: a }) =>
                        u().createElement(
                            'div',
                            { className: s()(E, a) },
                            u().createElement('div', { className: g }, e),
                            t && u().createElement('div', { className: p }, u().createElement('div', { className: b })),
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
                var A = a(3649);
                const C = 'ToggleIcon_base_59',
                    f = 'ToggleIcon_base__small_3e',
                    D = 'ToggleIcon_icon_e7',
                    F = u().memo(function ({ icon: e, isSmall: t = !1, classNames: a }) {
                        return u().createElement(
                            'div',
                            { className: s()(C, t && f) },
                            u().createElement('div', {
                                className: s()(D, null == a ? void 0 : a.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var B = a(9690);
                const k = 'VehicleTier_base_9c',
                    w = 'VehicleTier_base__small_fc',
                    y = ({ level: e, isSmall: t = !1 }) =>
                        u().createElement('div', { className: s()(k, t && w) }, (0, B.HG)(e)),
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
                    N = ({ id: e, icon: t, type: a, isSmall: n = !0, isSelected: r = !1 }) =>
                        a === h.VehicleTier
                            ? u().createElement(y, { isSmall: n, level: Number(e) })
                            : u().createElement(F, {
                                  icon: t,
                                  isSmall: n,
                                  classNames: {
                                      icon: s()(S[`icon__${a}`], S[`icon__${a}${(0, A.e)(e)}`], r && S.icon__selected),
                                  },
                              }),
                    I = {
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
                    M = ({
                        id: e,
                        type: t,
                        label: a,
                        hasDiscount: n,
                        filters: r,
                        onClick: i,
                        className: o,
                        toggleProps: l,
                        theme: c = L.Default,
                    }) => {
                        const E = c === L.InPopup;
                        return u().createElement(
                            'div',
                            { className: s()(I.base, I[`base__${c}`], o) },
                            E && u().createElement(v, { className: I.title, label: a, hasDiscount: n }),
                            u().createElement(
                                'div',
                                { className: I.content },
                                d.UI(r, ({ id: a, isSelected: n, tooltip: r, icon: o, counter: c }) =>
                                    u().createElement(
                                        m.l,
                                        { key: a, tooltipArgs: x(r), className: I.toggle },
                                        u().createElement(
                                            _.C,
                                            T({}, l, {
                                                className: s()(I.toggle, null == l ? void 0 : l.className),
                                                isActive: n,
                                                onClick: () => (null == i ? void 0 : i(e, a)),
                                                counter: c,
                                            }),
                                            u().createElement(N, {
                                                id: a,
                                                icon: o,
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
                var P = a(9197);
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
                var z = a(3457),
                    V = a(3616),
                    G = a(1037),
                    j = a(9367);
                const $ = 'PopupButton_base_7c',
                    U = 'PopupButton_popupButtonLabel_ed',
                    Z = 'PopupButton_buttonIconWrapper_d7',
                    X = 'PopupButton_buttonIcon_e0',
                    q = 'PopupButton_buttonIcon__isHighlighted_84',
                    K = 'PopupButton_discountAlert_c8',
                    Y = ({ isHighlighted: e, hasDiscountAlert: t, popoverDirection: a = G.IC.Bottom }) =>
                        u().createElement(
                            'div',
                            { className: $ },
                            u().createElement('div', { className: U }, R.strings.crew.filter.popup.button.title()),
                            u().createElement(
                                V.Z,
                                {
                                    contentId: R.views.lobby.crew.popovers.FilterPopoverView('resId'),
                                    targetId: R.views.lobby.crew.widgets.FilterPanelWidget('resId'),
                                    direction: a,
                                },
                                u().createElement(
                                    'div',
                                    { id: 'popup_btn', className: Z },
                                    u().createElement(
                                        _.C,
                                        { type: z.L$.ghost, size: z.qE.small, isActive: e, hasIndicator: !1 },
                                        u().createElement('div', { className: s()(X, e && q) }),
                                    ),
                                    t && u().createElement(j.Q, { className: K }),
                                ),
                            ),
                        );
                var Q = a(8018);
                const J = 'ResetButton_base_58',
                    ee = 'ResetButton_button_a5',
                    te = 'ResetButton_icon_4a',
                    ae = ({ onClick: e }) =>
                        u().createElement(
                            'div',
                            { className: J },
                            u().createElement(
                                o.i,
                                Q.Xd,
                                u().createElement(
                                    z.u5,
                                    { mixClass: ee, onClick: e, type: z.L$.ghost, size: z.qE.small },
                                    u().createElement('div', { className: te }),
                                ),
                            ),
                        ),
                    ne = 'default',
                    ue = 'search',
                    re = 'email',
                    se = 'password',
                    ie = 'normal',
                    oe = 'disabled',
                    le = 'alert',
                    ce = 'error',
                    me = 'medium',
                    de = {
                        [ne]: '',
                        [re]: R.strings.common.input.placeholder.email(),
                        [ue]: R.strings.common.input.placeholder.search(),
                        [se]: R.strings.common.input.placeholder.password(),
                    },
                    _e = { [ne]: 'text', [re]: 'text', [ue]: 'text', [se]: 'password' },
                    Ee = { [ne]: '', [re]: 'Invalid email', [ue]: '', [se]: '' },
                    ge = R.images.gui.maps.icons.components.input;
                function pe(e, t) {
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
                var be = a(7727);
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
                    he = u().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: a = ne,
                            size: r = me,
                            variant: i = ie,
                            placeholder: o = '',
                            highlighted: l,
                            withClear: c,
                            selectOnFocus: m = !0,
                            maxLength: d,
                            iconSource: _,
                            classMix: E,
                            onMouseEnter: g,
                            onMouseLeave: p,
                            onMouseDown: b,
                            onMouseUp: v,
                            onClick: h,
                            onChange: A,
                            onClear: C,
                            onFocus: f,
                            onBlur: D,
                        }) => {
                            const F = (0, n.useState)(!1),
                                B = F[0],
                                k = F[1],
                                w = (0, n.useRef)(null),
                                y = (0, n.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                S = i !== oe,
                                N = (0, n.useCallback)(
                                    (e) => {
                                        S && (k(!0), f && f(e));
                                    },
                                    [S, f],
                                ),
                                I = (0, n.useCallback)(
                                    (e) => {
                                        S && !y.current.mouseOver && (k(!1), D && D(e));
                                    },
                                    [S, D],
                                );
                            (0, n.useEffect)(() => {
                                S && B && m && w.current && w.current.select();
                            }, [m, B, S]);
                            const T = (0, n.useCallback)(
                                    (e) => {
                                        S && A && A(e.target.value);
                                    },
                                    [S, A],
                                ),
                                L = (0, n.useCallback)(
                                    (e) => {
                                        S && ((y.current.mouseOver = !0), g && g(e));
                                    },
                                    [S, g],
                                ),
                                x = (0, n.useCallback)(
                                    (e) => {
                                        S &&
                                            w.current &&
                                            (y.current.mouseDown && w.current.focus(),
                                            (y.current.mouseOver = !1),
                                            p && p(e));
                                    },
                                    [S, p],
                                ),
                                R = (0, n.useCallback)(
                                    (e) => {
                                        S && ((y.current.mouseDown = !0), b && b(e));
                                    },
                                    [S, b],
                                ),
                                M = (0, n.useCallback)(
                                    (e) => {
                                        S && ((y.current.mouseDown = !1), v && v(e));
                                    },
                                    [S, v],
                                ),
                                P = (0, n.useCallback)(
                                    (e) => {
                                        if (S && w.current) {
                                            (!B || (B && e.target !== w.current)) && w.current.focus(), h && h(e);
                                        }
                                    },
                                    [B, S, h],
                                ),
                                O = o || de[a],
                                H = Boolean(_),
                                W = s()(
                                    ve.base,
                                    ve[`base__${r}`],
                                    l && ve[`base__${i}`],
                                    B && ve.base__focused,
                                    H && ve.base__withIcon,
                                    E,
                                ),
                                z = (0, n.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                V = s()(ve.input, ve[`input__${a}`]),
                                G = s()(ve.icon, ve[`icon__${a}`]),
                                j = s()(ve.placeholder, ve[`placeholder__${a}`]);
                            return u().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: L,
                                    onMouseDown: R,
                                    onMouseUp: M,
                                    onMouseLeave: x,
                                    onClick: P,
                                },
                                !S && u().createElement('div', { className: ve.disabled }),
                                z && u().createElement('div', { style: z, className: G }),
                                u().createElement('input', {
                                    ref: w,
                                    className: V,
                                    type: _e[a],
                                    value: t,
                                    onChange: T,
                                    disabled: !S,
                                    onFocus: N,
                                    onBlur: I,
                                    maxLength: d,
                                }),
                                O && !t && !B && u().createElement('div', { className: j }, O),
                                c &&
                                    u().createElement('div', {
                                        className: ve.clear,
                                        onClick: (e) => {
                                            be.$.playClick(), C && C(e);
                                        },
                                        onMouseEnter: be.$.playHighlight,
                                    }),
                            );
                        },
                    ),
                    Ae = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    Ce = ({ variant: e, show: t = !0, helperText: a, helperIcon: r, classMix: i }) => {
                        const o = (0, n.useMemo)(() => {
                                const t =
                                    r ||
                                    (function (e) {
                                        return e === le ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [r, e]),
                            l = s()(Ae.base, t && Ae.base__shown),
                            c = s()(Ae.message, Ae[`message__${e}`], i);
                        return u().createElement(
                            'div',
                            { className: l },
                            o && u().createElement('div', { className: Ae.icon, style: o }),
                            u().createElement('div', { className: c }, a),
                        );
                    },
                    fe = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    De = [
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
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const Be = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    ke = (e) => {
                        let t = e.componentId,
                            a = e.type,
                            r = void 0 === a ? ne : a,
                            i = e.variant,
                            o = void 0 === i ? ie : i,
                            l = e.size,
                            c = void 0 === l ? me : l,
                            d = e.value,
                            _ = e.tooltipArgs,
                            E = e.helperText,
                            g = void 0 === E ? '' : E,
                            p = e.isValidated,
                            b = void 0 === p || p,
                            v = e.showHelper,
                            h = void 0 === v || v,
                            A = e.error,
                            C = e.options,
                            f = e.onFocus,
                            D = e.onMouseEnter,
                            F = e.onMouseLeave,
                            B = e.onMouseUp,
                            k = e.onMouseDown,
                            w = e.onChange,
                            y = e.classMix,
                            S = e.controlClassMix,
                            N = e.helperClassMix,
                            I = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, De);
                        const T = (0, n.useState)(d),
                            L = T[0],
                            x = T[1],
                            R = (0, n.useState)(b),
                            M = R[0],
                            P = R[1],
                            O = (0, n.useMemo)(() => Object.assign({}, Be, C), [C]),
                            H = (0, n.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: d, type: r }),
                            W = (0, n.useCallback)((e) => {
                                e !== H.current.value &&
                                    ((H.current.value = e), (H.current.isChangeHandled = !1), x(e));
                            }, []),
                            z = (0, n.useCallback)(
                                (e) => {
                                    let t = !0;
                                    O.performChangeValidation &&
                                        (t = O.changesValidator ? O.changesValidator(e) : pe(e, H.current.type)),
                                        w && w(e, t);
                                },
                                [w, O],
                            ),
                            V = (0, n.useCallback)(() => {
                                H.current.debounceTimeout &&
                                    (window.clearTimeout(H.current.debounceTimeout), (H.current.debounceTimeout = 0));
                            }, []),
                            G = (0, n.useCallback)(() => W(''), [W]);
                        (0, n.useEffect)(() => () => V(), [V]);
                        const j = (0, n.useCallback)(
                            (e) => {
                                V(),
                                    O.debounceTime
                                        ? (H.current.debounceTimeout = window.setTimeout(() => {
                                              z(e);
                                          }, O.debounceTime))
                                        : z(e);
                            },
                            [z, V, O.debounceTime],
                        );
                        (0, n.useEffect)(() => {
                            H.current.isChangeHandled ||
                                H.current.value !== L ||
                                (j(H.current.value), (H.current.isChangeHandled = !0));
                        }, [L, j]),
                            (0, n.useEffect)(() => {
                                H.current.isChangeHandled && d !== H.current.value && ((H.current.value = d), x(d)),
                                    (H.current.type = r);
                            }, [d, r]),
                            (0, n.useEffect)(() => {
                                P(b);
                            }, [b, o]);
                        const $ = (0, n.useCallback)((e) => D && D(e), [D]),
                            U = (0, n.useCallback)(
                                (e) => {
                                    O.disableHighlightOnFocus && M && P(!1), f && f(e);
                                },
                                [M, f, O.disableHighlightOnFocus],
                            ),
                            Z = (0, n.useCallback)((e) => B && B(e), [B]),
                            X = (0, n.useCallback)((e) => k && k(e), [k]),
                            q = (0, n.useCallback)((e) => F && F(e), [F]),
                            K = (0, n.useMemo)(
                                () =>
                                    O.withTypeIcon
                                        ? (function (e, t) {
                                              return e === ue ? ge.$dyn(`search_${t}`) : '';
                                          })(r, c)
                                        : '',
                                [r, c, O.withTypeIcon],
                            ),
                            Y = g || Ee[r],
                            Q = Boolean(L),
                            J = A ? ce : o,
                            ee = Boolean(A) || M,
                            te = (0, n.useMemo)(
                                () => ('boolean' == typeof O.withClear ? Q && O.withClear : Q && r === ue),
                                [r, Q, O],
                            ),
                            ae = s()(fe.base, fe[`base__${c}`], fe[`base__${o}`], y);
                        return u().createElement(
                            'div',
                            { id: t, className: ae, onMouseEnter: $, onMouseDown: X, onMouseUp: Z, onMouseLeave: q },
                            u().createElement(
                                m.l,
                                { tooltipArgs: _ },
                                u().createElement(
                                    he,
                                    Fe(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: K,
                                            size: c,
                                            type: r,
                                            variant: J,
                                            value: L,
                                            withClear: te,
                                            highlighted: ee,
                                            selectOnFocus: O.selectOnFocus,
                                            maxLength: O.maxLength,
                                            classMix: S,
                                            onFocus: U,
                                            onChange: W,
                                            onClear: G,
                                        },
                                        I,
                                    ),
                                ),
                            ),
                            Y &&
                                u().createElement(
                                    'div',
                                    { className: fe.helper },
                                    u().createElement(Ce, {
                                        variant: J,
                                        show: h && (O.isPermanentHelper || ee),
                                        helperText: A || Y,
                                        helperIcon: O.helperIconSource,
                                        classMix: N,
                                    }),
                                ),
                        );
                    },
                    we = ({ value: e, placeholder: t, tooltipHeader: a, onChange: n, className: r, tooltipBody: s }) =>
                        u().createElement(
                            o.i,
                            { header: null != a ? a : void 0, body: s, isEnabled: Boolean(a || s) },
                            u().createElement(ke, {
                                type: ue,
                                placeholder: null != t ? t : void 0,
                                value: e,
                                classMix: r,
                                onChange: n,
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
                            a = t.model,
                            n = t.controls,
                            r = a.amountInfo.get(),
                            c = r.from,
                            m = r.to,
                            d = a.panelType.get(),
                            _ = a.filter.get(),
                            E = a.hasAppliedFilters.get(),
                            g = E || (0 === c && 0 === m),
                            p = a.popoverTooltipHeader.get(),
                            b = a.popoverTooltipBody.get();
                        return u().createElement(
                            'div',
                            { className: s()(ye.base, ye[`base__${d}`]) },
                            u().createElement(
                                'div',
                                { className: ye.titleWrapper },
                                u().createElement(P.C, {
                                    title: a.title.get(),
                                    isGlowVisible: g,
                                    from: c,
                                    to: m,
                                    className: ye.title,
                                    classNames: { counterGlow: ye.counterGlow },
                                }),
                                E && u().createElement(ae, { onClick: n.resetFilter }),
                            ),
                            u().createElement(
                                'div',
                                { className: ye.filters },
                                a.isSearchEnabled.get() &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement(we, {
                                            value: a.searchString.get(),
                                            onChange: n.search,
                                            className: ye.search,
                                            placeholder: a.searchPlaceholder.get(),
                                            tooltipHeader: a.searchTooltipHeader.get(),
                                            tooltipBody: a.searchTooltipBody.get(),
                                        }),
                                        d === l.Barracks && u().createElement('div', { className: ye.separator }),
                                    ),
                                _.label && u().createElement('div', { className: ye.filterLabel }, _.label),
                                u().createElement(M, {
                                    id: _.id,
                                    label: _.label,
                                    type: _.type,
                                    hasDiscount: _.hasDiscount,
                                    filters: a.filters.get(),
                                    toggleProps: { type: i.L.ghost },
                                    onClick: n.updateFilter,
                                }),
                                a.isPopoverEnabled.get() &&
                                    u().createElement(
                                        o.i,
                                        {
                                            header: null != p ? p : void 0,
                                            body: null != b ? b : void 0,
                                            isEnabled: Boolean(p || b),
                                        },
                                        u().createElement(
                                            'div',
                                            { className: ye.popupButtonWrapper },
                                            u().createElement(Y, {
                                                isHighlighted: a.isPopoverHighlighted.get(),
                                                hasDiscountAlert: a.hasDiscountAlert.get(),
                                                popoverDirection: e,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Ne = ({ popoverDirection: e }) =>
                        u().createElement(
                            H,
                            { options: { rootId: R.views.lobby.crew.widgets.FilterPanelWidget('resId') } },
                            u().createElement(Se, { popoverDirection: e }),
                        );
            },
            3055: (e, t, a) => {
                'use strict';
                a.d(t, { Zk: () => Xe, zn: () => Ze, JW: () => qe });
                var n = a(6179),
                    u = a.n(n),
                    r = a(6483),
                    s = a.n(r),
                    i = a(3403),
                    o = a(3618),
                    l = a(3649),
                    c = a(7077);
                const m = 'TankmanFolder_base_00',
                    d = 'TankmanFolder_folder_f5',
                    _ = 'TankmanFolder_photoFrame_ae',
                    E = 'TankmanFolder_base__big_60',
                    g = 'TankmanFolder_icon_74',
                    p = R.images.gui.maps.icons.tankmen.icons.c_204x256,
                    b = u().memo(function ({ name: e, className: t, isSkin: a = !1 }) {
                        const r = (0, n.useMemo)(() => {
                            const t = (0, l.BN)(String(e));
                            return null !== (a ? p.$dyn('crewSkins') : p).$dyn(t) ? c.U.c204x256 : c.U.c158x118;
                        }, [e, a]);
                        return u().createElement(
                            'div',
                            { className: s()(m, r === c.U.c204x256 && E, t) },
                            u().createElement('div', { className: d }),
                            u().createElement(
                                'div',
                                { className: _ },
                                u().createElement(c.G, { name: e, size: r, isSkin: a, classMix: g }),
                            ),
                        );
                    });
                var v = a(3215),
                    h = a(3946);
                const A = (0, v.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'invId',
                                        'iconName',
                                        'fullName',
                                        'description',
                                        'role',
                                        'realRoleLevel',
                                        'nativeTankRealRoleLevel',
                                        'roleLevel',
                                        'hasRetrainDiscount',
                                        'isInSkin',
                                        'isFemale',
                                        'isCrewLocked',
                                        'hasUniqueSound',
                                    ]),
                                    {
                                        currentVehicle: e.object('currentVehicle'),
                                        nativeVehicle: e.object('nativeVehicle'),
                                        currentVehicleTags: e.array('currentVehicle.tags'),
                                    },
                                ),
                                a = (0, h.Om)(() => {
                                    const e = t.currentVehicle.get(),
                                        a = t.nativeVehicle.get(),
                                        n = Boolean(e.name);
                                    return {
                                        isWrongVehicleType: n && !(e.type === a.type && e.isPremium),
                                        isWrongVehicle: n && e.name !== a.name,
                                    };
                                }),
                                n = (0, h.Om)(() => {
                                    const e = a(),
                                        t = e.isWrongVehicle,
                                        n = e.isWrongVehicleType;
                                    return t && n;
                                }),
                                u = (0, h.Om)(() =>
                                    t.hasRetrainDiscount.get()
                                        ? { args: { tooltipId: 'actionPrice' }, targetId: Ze }
                                        : {
                                              contentId: R.views.lobby.crew.tooltips.TrainingLevelTooltip('resId'),
                                              targetId: Ze,
                                          },
                                );
                            return Object.assign({}, t, {
                                computes: { vehicleValidator: a, isRoleLevelPenaltyActive: n, discountTooltipArgs: u },
                            });
                        },
                        ({ externalModel: e }) => ({
                            playUniqueVoice: e.createCallbackNoArgs('onPlayUniqueVoice'),
                            changeVehicle: e.createCallbackNoArgs('onChangeVehicle'),
                            retrain: e.createCallbackNoArgs('onRetrain'),
                        }),
                    ),
                    C = A[0],
                    f = A[1];
                var D = a(3457),
                    F = a(3415),
                    B = a(2056),
                    k = a(5415),
                    w = a(4828),
                    y = a(1943),
                    S = a(8018);
                const N = 'CurrentVehicleTrain_base_22',
                    I = 'CurrentVehicleTrain_tooltipHoverArea_cc',
                    T = 'CurrentVehicleTrain_currentVehicle_9d',
                    L = 'CurrentVehicleTrain_currentVehicleName_19',
                    x = 'CurrentVehicleTrain_currentVehicleName__isPremium_86',
                    M = 'CurrentVehicleTrain_retrainContainer_6a',
                    P = 'CurrentVehicleTrain_roleLevelContainer_95',
                    O = 'CurrentVehicleTrain_roleLevelLabel_31',
                    H = 'CurrentVehicleTrain_roleLevelLabel__red_0e',
                    W = 'CurrentVehicleTrain_retrainBtnContainer_00',
                    z = 'CurrentVehicleTrain_discountIcon_04',
                    V = 'CurrentVehicleTrain_discountIcon__forText_d9',
                    G = 'CurrentVehicleTrain_retrainBtn_3e',
                    j = 'CurrentVehicleTrain_frameGlow_80',
                    $ = 'CurrentVehicleTrain_trainLevelRateContainer_5c',
                    U = 'CurrentVehicleTrain_trainLevelNumber_b0',
                    Z = 'CurrentVehicleTrain_trainLevelNumber__red_07',
                    X = 'CurrentVehicleTrain_trainLevelInfoIcon_27',
                    q = 'CurrentVehicleTrain_discountContainer_24',
                    K = 'CurrentVehicleTrain_discountText_45';
                function Y() {
                    return (
                        (Y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Y.apply(this, arguments)
                    );
                }
                const Q = (0, i.Pi)(function ({ className: e }) {
                    const t = f(),
                        a = t.model,
                        r = t.controls,
                        i = (0, k.GS)().mediaSize,
                        l = a.currentVehicle.get(),
                        c = l.name,
                        m = Boolean(c),
                        d = a.computes.vehicleValidator().isWrongVehicle,
                        _ = a.computes.discountTooltipArgs(),
                        E = a.hasRetrainDiscount.get(),
                        g = a.computes.isRoleLevelPenaltyActive(),
                        p = (0, n.useContext)(Xe),
                        b = (0, y.Sr)(w.D9, {
                            item: w.sk.MstlTooltip,
                            action: w.eX.Viewed,
                            parentScreen: w.sC.PersonalFile,
                        });
                    return u().createElement(
                        'div',
                        { className: s()(N, e) },
                        u().createElement(o.w, {
                            classMix: T,
                            text: m ? R.strings.crew.personalFile.inVehicle() : R.strings.crew.common.inBarracks(),
                            binding: { vehicle: u().createElement('div', { className: s()(L, l.isPremium && x) }, c) },
                        }),
                        u().createElement(
                            'div',
                            { className: P },
                            u().createElement(
                                'div',
                                { className: s()(O, g && H) },
                                R.strings.crew.personalFile.retrainLevel(),
                            ),
                            u().createElement(
                                'div',
                                { className: $ },
                                u().createElement(
                                    'div',
                                    { className: s()(U, g && Z) },
                                    (0, S.T3)(a.realRoleLevel.get()),
                                ),
                                !g && u().createElement('div', { className: X }),
                            ),
                        ),
                        u().createElement(
                            B.u,
                            Y(
                                {
                                    targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                    contentId: R.views.lobby.crew.tooltips.TrainingLevelTooltip('resId'),
                                    ignoreShowDelay: !0,
                                    ignoreMouseClick: !0,
                                },
                                p ? b : void 0,
                            ),
                            u().createElement('div', { className: I }),
                        ),
                        g &&
                            u().createElement(
                                F.l,
                                { tooltipArgs: _ },
                                u().createElement(
                                    'div',
                                    { className: M },
                                    u().createElement(
                                        'div',
                                        { className: W },
                                        E && u().createElement('div', { className: z }),
                                        u().createElement(
                                            D.u5,
                                            { onClick: r.retrain, type: D.L$.secondary, mixClass: G },
                                            d && u().createElement('div', { className: j }),
                                            R.strings.crew.personalFile.retrain(),
                                        ),
                                    ),
                                ),
                            ),
                        E &&
                            !g &&
                            u().createElement(
                                F.l,
                                { tooltipArgs: _ },
                                u().createElement(
                                    'div',
                                    { className: q },
                                    u().createElement('div', { className: s()(z, V) }),
                                    u().createElement(
                                        'div',
                                        { className: K },
                                        i === k.cJ.ExtraSmall
                                            ? R.strings.crew.personalFile.discount.short()
                                            : R.strings.crew.personalFile.discount.full(),
                                    ),
                                ),
                            ),
                    );
                });
                var J = a(6373);
                const ee = 'Name_base_2d',
                    te = 'Name_label_31',
                    ae = 'Name_voiceButton_00',
                    ne = 'Name_soundIcon_2a',
                    ue = (0, i.Pi)(function ({ className: e }) {
                        const t = f(),
                            a = t.model,
                            r = t.controls,
                            i = (0, n.useCallback)(() => {
                                r.playUniqueVoice();
                            }, [r]);
                        return u().createElement(
                            'div',
                            { className: s()(ee, e) },
                            u().createElement(
                                'div',
                                null,
                                u().createElement('div', { className: te }, a.fullName.get()),
                                a.hasUniqueSound.get() &&
                                    u().createElement(
                                        J.i,
                                        {
                                            header: R.strings.crew.personalFile.voiceTooltip.header(),
                                            body: R.strings.crew.personalFile.voiceTooltip.body(),
                                        },
                                        u().createElement(
                                            D.u5,
                                            { size: D.qE.extraSmall, type: D.L$.ghost, mixClass: ae, onClick: i },
                                            u().createElement('div', { className: ne }),
                                        ),
                                    ),
                            ),
                        );
                    });
                var re = a(7078),
                    se = a(2603);
                const ie = 'Role_base_e0',
                    oe = 'Role_role_2a',
                    le = 'Role_roleIcon_e6',
                    ce = 'Role_roleName_79',
                    me = 'Role_commanderFeature_e2',
                    de = 'Role_sense_21',
                    _e = 'Role_commanderBonus_99',
                    Ee = (0, i.Pi)(function ({ className: e }) {
                        const t = f().model,
                            a = t.role.get();
                        return u().createElement(
                            'div',
                            { className: s()(ie, e) },
                            u().createElement(
                                re.t,
                                { args: { tooltipId: se.v$ }, targetId: Ze },
                                u().createElement(
                                    'div',
                                    { className: oe },
                                    u().createElement('div', {
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(a)})`,
                                        },
                                        className: le,
                                    }),
                                    u().createElement('div', { className: ce }, (0, S.Gc)(a, t.isFemale.get())),
                                ),
                            ),
                            'commander' === a &&
                                u().createElement(
                                    'div',
                                    { className: me },
                                    u().createElement(
                                        re.t,
                                        {
                                            args: { skillName: 'commander_sixthSense', tooltipId: se.HZ, level: 100 },
                                            targetId: Ze,
                                        },
                                        u().createElement('div', { className: de }),
                                    ),
                                    u().createElement(
                                        re.t,
                                        { args: { tooltipId: se.uN }, targetId: Ze },
                                        u().createElement('div', { className: _e }),
                                    ),
                                ),
                        );
                    });
                var ge = a(9690),
                    pe = a(7727);
                const be = 'SpecializationSlots_base_1a',
                    ve = 'SpecializationSlots_frame_85',
                    he = 'SpecializationSlots_frame__first_23',
                    Ae = 'SpecializationSlots_frame__crewLocked_de',
                    Ce = 'SpecializationSlots_darkFrame_34',
                    fe = 'SpecializationSlots_frame__hover_06',
                    De = 'SpecializationSlots_shadow_4a',
                    Fe = 'SpecializationSlots_arrows_6e',
                    Be = 'SpecializationSlots_arrowsIcon_fc',
                    ke = 'SpecializationSlots_changeVehicle_58',
                    we = 'SpecializationSlots_tier_68',
                    ye = 'SpecializationSlots_vehicle_b6',
                    Se = 'SpecializationSlots_vehicleTypeIcon_77',
                    Ne = 'SpecializationSlots_info_7c',
                    Ie = 'SpecializationSlots_flag_84',
                    Te = 'SpecializationSlots_vehicleIcon_ec',
                    Le = 'SpecializationSlots_premVehicle_c3';
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
                const Re = (0, i.Pi)(function ({ className: e }) {
                        const t = f(),
                            a = t.model,
                            r = t.controls,
                            i = a.nativeVehicle.get(),
                            o = a.isCrewLocked.get(),
                            c = (0, n.useState)(!1),
                            m = c[0],
                            d = c[1],
                            _ = (0, n.useContext)(Xe),
                            E = (0, y.Sr)(w.D9, {
                                item: w.sk.PremiumTooltip,
                                action: w.eX.Viewed,
                                parentScreen: w.sC.PersonalFile,
                            }),
                            g = (0, n.useCallback)(() => {
                                pe.$.playHighlight(), d(!0);
                            }, []),
                            p = (0, n.useCallback)(() => d(!1), []),
                            b = (0, n.useCallback)(() => {
                                pe.$.playClick(), r.changeVehicle();
                            }, [r]),
                            v = (0, n.useCallback)(
                                (e) => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.$dyn(e ? 'c_48x48_elite' : 'c_48x48_specSlot').$dyn((0, l.BN)(i.type))})`,
                                }),
                                [i.type],
                            ),
                            h = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.nations.c_155x31.$dyn(i.nation)})`,
                                }),
                                [i.nation],
                            );
                        return u().createElement(
                            'div',
                            { className: s()(be, e) },
                            u().createElement(
                                J.i,
                                {
                                    header: o
                                        ? R.strings.crew.personalFile.crewLockedTooltip.header()
                                        : R.strings.crew.personalFile.vehicleTooltip.header(),
                                    body: o ? R.strings.crew.personalFile.crewLockedTooltip.body() : i.name,
                                    ignoreMouseClick: o,
                                },
                                u().createElement(
                                    'div',
                                    {
                                        id: 'retraining_btn',
                                        onMouseEnter: o ? void 0 : g,
                                        onMouseLeave: o ? void 0 : p,
                                        onClick: o ? void 0 : b,
                                        className: s()(ve, he, m && fe, o && Ae),
                                    },
                                    u().createElement('div', { className: Ce }),
                                    u().createElement('div', { style: h, className: Ie }),
                                    u().createElement('div', {
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.vehicle.small.$dyn((0, l.BN)(`${i.nation}-${i.techName}`))})`,
                                        },
                                        className: Te,
                                    }),
                                    u().createElement(
                                        'div',
                                        { className: Ne },
                                        u().createElement('div', { className: we }, (0, ge.HG)(i.tier)),
                                        u().createElement('div', { style: v(i.isPremium), className: Se }),
                                        u().createElement('div', { className: ye }, i.name),
                                    ),
                                    u().createElement('div', { className: De }),
                                    u().createElement(
                                        'div',
                                        { className: Fe },
                                        u().createElement('div', { className: Be }),
                                        u().createElement(
                                            'div',
                                            { className: ke },
                                            R.strings.crew.personalFile.changeVehicle(),
                                        ),
                                    ),
                                ),
                            ),
                            u().createElement(
                                B.u,
                                xe(
                                    {
                                        targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                        contentId: R.views.lobby.crew.tooltips.PremiumVehicleTooltip('resId'),
                                    },
                                    _ ? E : void 0,
                                ),
                                u().createElement(
                                    'div',
                                    { className: ve },
                                    u().createElement('div', { style: h, className: Ie }),
                                    u().createElement(
                                        'div',
                                        { className: Ne },
                                        u().createElement('div', { style: v(!0), className: Se }),
                                        u().createElement(
                                            'div',
                                            { className: Le },
                                            R.strings.crew.personalFile.premiumVehicle(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Me = 'TankmanInfoApp_base_8a',
                    Pe = 'TankmanInfoApp_tankmanFolder_2d',
                    Oe = 'TankmanInfoApp_descriptionBlock_f2',
                    He = 'TankmanInfoApp_role_71',
                    We = 'TankmanInfoApp_name_68',
                    ze = 'TankmanInfoApp_description_a6',
                    Ve = 'TankmanInfoApp_currentVehicle_06',
                    Ge = 'TankmanInfoApp_nativeVehicle_5c',
                    je = 'TankmanInfoApp_nativeVehicle__withDescription_03',
                    $e = 'TankmanInfoApp_slots_a1',
                    Ue = (0, i.Pi)(function ({ className: e }) {
                        const t = f().model,
                            a = t.description.get(),
                            n = Boolean(a);
                        return u().createElement(
                            'div',
                            { className: s()(Me, e) },
                            u().createElement(b, { name: t.iconName.get(), isSkin: t.isInSkin.get(), className: Pe }),
                            u().createElement(
                                'div',
                                { className: Oe },
                                u().createElement(Ee, { className: He }),
                                u().createElement(ue, { className: We }),
                                n &&
                                    u().createElement(o.w, {
                                        classMix: ze,
                                        isTruncationAvailable: !0,
                                        isTooltipEnable: !0,
                                        targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                        text: a,
                                    }),
                                u().createElement(
                                    'div',
                                    { className: s()(Ge, n && je) },
                                    R.strings.crew.personalFile.specialization(),
                                ),
                                u().createElement(Re, { className: $e }),
                                u().createElement(Q, { className: Ve }),
                            ),
                        );
                    }),
                    Ze = R.views.lobby.crew.widgets.TankmanInfo('resId'),
                    Xe = (0, n.createContext)(!1),
                    qe = u().memo(function ({ rootId: e = Ze, className: t, isLoggingEnabled: a = !1 }) {
                        return u().createElement(
                            C,
                            { options: { rootId: e } },
                            u().createElement(Xe.Provider, { value: a }, u().createElement(Ue, { className: t })),
                        );
                    });
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
                a.d(t, { HZ: () => n, Th: () => r, lu: () => s, uN: () => u, v$: () => i });
                const n = 'crewPerkGf',
                    u = 'commanderBonus',
                    r = 'achievement',
                    s = 'crewSkin',
                    i = 'tankman';
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
            5287: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
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
                    innerShadow: 'TankmanIcon_innerShadow_c6',
                };
            },
            9426: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
                    base: 'TankmanSkill_base_84',
                    base__big: 'TankmanSkill_base__big_a0',
                    bg: 'TankmanSkill_bg_f9',
                    icon: 'TankmanSkill_icon_1b',
                    icon__irrelevant: 'TankmanSkill_icon__irrelevant_50',
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
                var u = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, a, n] = deferred[o], r = !0, s = 0; s < t.length; s++)
                        (!1 & n || u >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), n < u && (u = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = a();
                        void 0 !== i && (e = i);
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
                        u,
                        [r, s, i] = a,
                        o = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(a); o < r.length; o++)
                        (u = r[o]), __webpack_require__.o(e, u) && e[u] && e[u][0](), (e[u] = 0);
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(7362));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
