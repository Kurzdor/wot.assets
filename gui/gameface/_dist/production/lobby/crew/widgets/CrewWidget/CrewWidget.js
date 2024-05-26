(() => {
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { L$: () => l.L, u5: () => E });
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
                    mixClass: E,
                    soundHover: m,
                    soundClick: d,
                    onMouseEnter: _,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: D,
                    onMouseLeave: C,
                    onClick: B,
                }) => {
                    const g = (0, i.useRef)(null),
                        b = (0, i.useState)(t),
                        h = b[0],
                        v = b[1],
                        p = (0, i.useState)(!1),
                        w = p[0],
                        f = p[1],
                        y = (0, i.useState)(!1),
                        k = y[0],
                        S = y[1],
                        x = (0, i.useCallback)(() => {
                            c || (g.current && (g.current.focus(), v(!0)));
                        }, [c]),
                        L = (0, i.useCallback)(
                            (e) => {
                                h && null !== g.current && !g.current.contains(e.target) && v(!1);
                            },
                            [h],
                        ),
                        T = (0, i.useCallback)(
                            (e) => {
                                c || (B && B(e));
                            },
                            [c, B],
                        ),
                        I = (0, i.useCallback)(
                            (e) => {
                                c || (null !== m && (0, r.G)(m), _ && _(e), S(!0));
                            },
                            [c, m, _],
                        ),
                        M = (0, i.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        O = (0, i.useCallback)(
                            (e) => {
                                c || (D && D(e), f(!1));
                            },
                            [c, D],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                c || (null !== d && (0, r.G)(d), F && F(e), t && x(), f(!0));
                            },
                            [c, d, F, x, t],
                        ),
                        N = (0, i.useCallback)(
                            (e) => {
                                c || (C && C(e), f(!1));
                            },
                            [c, C],
                        ),
                        H = a()(
                            s.Z.base,
                            s.Z[`base__${n}`],
                            {
                                [s.Z.base__disabled]: c,
                                [s.Z[`base__${u}`]]: u,
                                [s.Z.base__focus]: h,
                                [s.Z.base__highlightActive]: w,
                                [s.Z.base__firstHover]: k,
                            },
                            E,
                        ),
                        W = a()(s.Z.state, s.Z.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', L),
                                () => {
                                    document.removeEventListener('mousedown', L);
                                }
                            ),
                            [L],
                        ),
                        (0, i.useEffect)(() => {
                            v(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: g,
                                className: H,
                                onMouseEnter: I,
                                onMouseMove: M,
                                onMouseUp: O,
                                onMouseDown: P,
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
                const E = (0, i.memo)(c);
            },
            2106: (e, u, t) => {
                'use strict';
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(a || (a = {}));
            },
            9987: (e, u, t) => {
                'use strict';
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
                        E = e.maximumNumber,
                        m = e.className,
                        d = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, s);
                    const _ = n ? null : t,
                        A = 'string' == typeof _;
                    if ((_ && !A && _ < 0) || 0 === _) return null;
                    const F = _ && !A && _ > E,
                        D = a()(
                            o.Z.base,
                            o.Z[`base__${u}`],
                            r && o.Z.base__animated,
                            c && o.Z.base__hidden,
                            !_ && o.Z.base__pattern,
                            n && o.Z.base__empty,
                            m,
                        );
                    return i().createElement(
                        'div',
                        l({ className: D }, d),
                        i().createElement('div', { className: o.Z.bg }),
                        i().createElement('div', { className: o.Z.pattern }),
                        i().createElement(
                            'div',
                            { className: a()(o.Z.value, A && o.Z.value__text) },
                            F ? E : _,
                            F && i().createElement('span', { className: o.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var n = t(6179),
                    a = t.n(n),
                    r = t(6483),
                    i = t.n(r),
                    o = t(3649),
                    s = t(5287);
                const l = ({ binding: e, text: u = '', classMix: t, alignment: r = o.v2.left }) =>
                    null === u
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : a().createElement(
                              n.Fragment,
                              null,
                              u.split('\n').map((u, l) =>
                                  a().createElement(
                                      'div',
                                      { className: i()(s.Z.base, t), key: `${u}-${l}` },
                                      (0, o.Uw)(u, r, e).map((e, u) =>
                                          a().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => E });
                var n = t(3138),
                    a = t(6179),
                    r = t(1043),
                    i = t(5262);
                const o = n.O.client.getSize('rem'),
                    s = o.width,
                    l = o.height,
                    c = Object.assign({ width: s, height: l }, (0, i.T)(s, l, r.j)),
                    E = (0, a.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t.n(n),
                    r = t(6536),
                    i = t(3495),
                    o = t(1043),
                    s = t(5262),
                    l = t(3138);
                (0, n.memo)(({ children: e }) => {
                    const u = (0, n.useContext)(i.Y),
                        t = (0, n.useState)(u),
                        c = t[0],
                        E = t[1],
                        m = (0, n.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(u);
                            E(Object.assign({ width: t, height: n }, (0, s.T)(t, n, o.j)));
                        }, []);
                    (0, r.Z)(() => {
                        engine.on('clientResized', m);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', m), [m]);
                    const d = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return a().createElement(i.Y.Provider, { value: d }, e);
                });
            },
            6010: (e, u, t) => {
                'use strict';
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
                        E = o.small,
                        m = o.extraSmall,
                        d = o.extraLargeWidth,
                        _ = o.largeWidth,
                        A = o.mediumWidth,
                        F = o.smallWidth,
                        D = o.extraSmallWidth,
                        C = o.extraLargeHeight,
                        B = o.largeHeight,
                        g = o.mediumHeight,
                        b = o.smallHeight,
                        h = o.extraSmallHeight,
                        v = { extraLarge: C, large: B, medium: g, small: b, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && E) return u;
                        if (t.extraSmall && m) return u;
                    } else {
                        if (t.extraLargeWidth && d) return (0, a.H)(u, t, v);
                        if (t.largeWidth && _) return (0, a.H)(u, t, v);
                        if (t.mediumWidth && A) return (0, a.H)(u, t, v);
                        if (t.smallWidth && F) return (0, a.H)(u, t, v);
                        if (t.extraSmallWidth && D) return (0, a.H)(u, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && b) return u;
                            if (t.extraSmallHeight && h) return u;
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
                'use strict';
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
                'use strict';
                t.d(u, { YN: () => n.Y });
                t(6010), t(1039);
                var n = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
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
                'use strict';
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
                'use strict';
                t.d(u, { IC: () => n });
                var n,
                    a = t(6483),
                    r = t.n(a),
                    i = t(6373),
                    o = t(1856),
                    s = t(3138),
                    l = t(2039),
                    c = t(5099),
                    E = t(7727),
                    m = t(4179),
                    d = t(6179),
                    _ = t.n(d),
                    A = t(4769);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(n || (n = {}));
                const F = ['__left', '__right', '__top', '__bottom'];
                (0, d.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: n = {} }, a) => {
                        const D = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            g = (0, d.useState)(window.decorator && window.decorator.directionType),
                            b = g[0],
                            h = g[1],
                            v = (0, d.useCallback)(() => {
                                E.$.playClick(), s.O.view.sendEvent.close();
                            }, []),
                            p = (0, d.useCallback)(() => {
                                E.$.playHighlight();
                            }, []),
                            w = r()(A.Z.arrow, A.Z[`arrow${F[b]}`]);
                        (0, l.b)(
                            () => (
                                s.O.client.events.mouse.enableOutside(),
                                s.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (t ? t() : s.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const f = (0, d.useCallback)(
                                (e) => {
                                    let u = e.target;
                                    do {
                                        if (u === D.current || u === B.current) return;
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
                                [D, B, t],
                            ),
                            y = (0, d.useCallback)(
                                () => (
                                    s.O.view.freezeTextureBeforeResize(),
                                    (0, o.v)(() => {
                                        if (C.current) {
                                            const e = C.current.scrollWidth,
                                                u = C.current.scrollHeight;
                                            s.O.view.resize(e, u), h(window.decorator.directionType);
                                        }
                                    })
                                ),
                                [],
                            );
                        return (
                            (0, d.useImperativeHandle)(a, () => ({ updateSize: y })),
                            (0, l.b)(() => {
                                s.O.view.setInputPaddingsRem(58);
                            }),
                            (0, d.useEffect)(() => {
                                document.addEventListener('mousedown', f, { capture: !0 });
                                const e = (0, c.B)((0, m.Eu)());
                                return (
                                    !u && e.promise.then(() => y()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', f);
                                    }
                                );
                            }, [y, f, u]),
                            _().createElement(
                                'div',
                                { className: A.Z.base, ref: C },
                                _().createElement(
                                    'div',
                                    { className: A.Z.decorator },
                                    _().createElement(
                                        'div',
                                        { className: A.Z.content, ref: D },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            _().createElement(
                                                i.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                _().createElement('div', {
                                                    className: A.Z.closeBtn,
                                                    onClick: v,
                                                    onMouseEnter: p,
                                                    ref: B,
                                                }),
                                            ),
                                    ),
                                    _().createElement('div', { className: w, style: n.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => l });
                var n = t(1037),
                    a = t(4179),
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
                        E = e.targetId,
                        m = e.args,
                        d = e.onClick,
                        _ = e.children,
                        A = e.isEnabled,
                        F = void 0 === A || A,
                        D = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, o);
                    const C = (0, r.useRef)(null),
                        B = (0, r.useCallback)(() => {
                            if ((0, a.wU)()) return (0, a.SW)();
                            C.current && (0, a.P3)(u, c, C.current, t, E, m);
                        }, [u, c, m, t, E]);
                    return i().createElement(
                        'div',
                        s(
                            {
                                ref: C,
                                onClick:
                                    ((g = _.props.onClick),
                                    (e) => {
                                        F && (B(), d && d(e), g && g(e));
                                    }),
                            },
                            D,
                        ),
                        _,
                    );
                    var g;
                };
            },
            7078: (e, u, t) => {
                'use strict';
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
                'use strict';
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
                            E = e.alert,
                            m = e.args,
                            d = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, i);
                        const _ = (0, a.useMemo)(() => {
                            const e = Object.assign({}, m, { body: t, header: l, note: c, alert: E });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [E, t, l, c, m]);
                        return r().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((A = null == m ? void 0 : m.hasHtmlContent),
                                        A ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: _,
                                },
                                d,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var n = t(7902),
                    a = t(4179),
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
                            E = e.onMouseDown,
                            m = e.onClick,
                            d = e.ignoreShowDelay,
                            _ = void 0 !== d && d,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            D = e.decoratorId,
                            C = void 0 === D ? 0 : D,
                            B = e.isEnabled,
                            g = void 0 === B || B,
                            b = e.targetId,
                            h = void 0 === b ? 0 : b,
                            v = e.onShow,
                            p = e.onHide,
                            w = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, i);
                        const f = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => h || (0, n.F)().resId, [h]),
                            k = (0, r.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (s(t, C, { isMouseEvent: !0, on: !0, arguments: o(a) }, y),
                                    v && v(),
                                    (f.current.isVisible = !0));
                            }, [t, C, a, y, v]),
                            S = (0, r.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        s(t, C, { on: !1 }, y),
                                        f.current.isVisible && p && p(),
                                        (f.current.isVisible = !1);
                                }
                            }, [t, C, y, p]),
                            x = (0, r.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(f.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === g && S();
                            }, [g, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return g
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(k, _ ? 100 : 400)),
                                                      l && l(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              S(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === F && S(), null == m || m(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === F && S(), null == E || E(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : u;
                        var L;
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
            1856: (e, u, t) => {
                'use strict';
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
                'use strict';
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
                'use strict';
                t.d(u, { q: () => s });
                var n = t(4598),
                    a = t(9174),
                    r = t(6179),
                    i = t.n(r),
                    o = t(8246);
                const s = () => (e, u) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: E }) {
                            const m = (0, r.useRef)([]),
                                d = (t, r, i) => {
                                    var s;
                                    const l = o.U(r),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == i ? void 0 : i.getter) ? s : () => {},
                                                  }),
                                        E = (e) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        d = (e) => m.current.push(e),
                                        _ = e({
                                            mode: t,
                                            readByPath: E,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const r = null != u ? u : E(e),
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
                                                    const r = null != u ? u : E(e),
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
                                                    const n = E(u);
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
                                            cleanup: d,
                                        }),
                                        A = { mode: t, model: _, externalModel: c, cleanup: d };
                                    return {
                                        model: _,
                                        controls: 'mocks' === t && i ? i.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                _ = (0, r.useRef)(!1),
                                A = (0, r.useState)(s),
                                F = A[0],
                                D = A[1],
                                C = (0, r.useState)(() => d(s, l, E)),
                                B = C[0],
                                g = C[1];
                            return (
                                (0, r.useEffect)(() => {
                                    _.current ? g(d(F, l, E)) : (_.current = !0);
                                }, [E, F, l]),
                                (0, r.useEffect)(() => {
                                    D(s);
                                }, [s]),
                                (0, r.useEffect)(
                                    () => () => {
                                        B.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [B],
                                ),
                                i().createElement(t.Provider, { value: B }, c)
                            );
                        },
                        () => (0, r.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u), t.d(u, { mouse: () => o, onResize: () => r });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const o = (function () {
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
                                        o = i[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        n(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(r, s),
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
                'use strict';
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
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { O: () => a });
                var n = t(5959);
                const a = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => p,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => y,
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
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function p() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    f = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
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
                'use strict';
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
                'use strict';
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
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(6179);
                const a = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            5415: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { b: () => a });
                var n = t(6179);
                const a = (e) => {
                    (0, n.useEffect)(e, []);
                };
            },
            4489: (e, u, t) => {
                'use strict';
                t.d(u, { f: () => r });
                var n = t(5139),
                    a = t(6179);
                function r(e, u, t) {
                    const r = (0, a.useMemo)(() => (0, n.Z)(t, e), u);
                    return (0, a.useEffect)(() => r.cancel, [r]), r;
                }
            },
            5521: (e, u, t) => {
                'use strict';
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
            9480: (e, u, t) => {
                'use strict';
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
                'use strict';
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
                'use strict';
                t.d(u, { K: () => n });
                const n = (e, u) => {
                    const t = [];
                    for (let n = 0; n < e; n++) t.push(u(n));
                    return t;
                };
            },
            7727: (e, u, t) => {
                'use strict';
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
                'use strict';
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
                t.d(u, { BN: () => r, Uw: () => m, uF: () => a, v2: () => n }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(n || (n = {}));
                const i = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    o = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    s = (e, u, t = n.left) => e.split(u).reduce(t === n.left ? i : o, []),
                    l = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    c = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (e, u = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return c.includes(t)
                            ? l(e)
                            : ((e, u = n.left) => {
                                  let t = [];
                                  const a =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = e.replace(/&nbsp;/g, ' ');
                                  return s(r, /( )/, u).forEach((e) => (t = t.concat(s(e, a, n.left)))), t;
                              })(e, u);
                    },
                    m = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : E(e, u)));
            },
            5139: (e, u, t) => {
                'use strict';
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
                        function E() {
                            (i = Date.now()), t.apply(l, s);
                        }
                        r ||
                            (n && !a && E(),
                            o(),
                            void 0 === n && c > e
                                ? E()
                                : !0 !== u &&
                                  (a = setTimeout(
                                      n
                                          ? function () {
                                                a = void 0;
                                            }
                                          : E,
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
                'use strict';
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { B0: () => s, c9: () => g, wU: () => p, ry: () => C, Eu: () => B, SW: () => h, P3: () => v });
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
                const i = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
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
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    _ = t(3138);
                const A = ['args'];
                function F(e, u, t, n, a, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, a);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                            F(r, n, a, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            F(r, n, a, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    g = (e, u) => {
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
                                })(u, A);
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
                    b = () => g(s.CLOSE),
                    h = () => g(s.POP_OVER, { on: !1 }),
                    v = (e, u, t, n, a = R.invalid('resId'), r) => {
                        const i = _.O.view.getViewGlobalPosition(),
                            o = t.getBoundingClientRect(),
                            l = o.x,
                            c = o.y,
                            E = o.width,
                            m = o.height,
                            d = {
                                x: _.O.view.pxToRem(l) + i.x,
                                y: _.O.view.pxToRem(c) + i.y,
                                width: _.O.view.pxToRem(E),
                                height: _.O.view.pxToRem(m),
                            };
                        g(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: a,
                            direction: u,
                            bbox: D(d),
                            on: !0,
                            args: r,
                        });
                    },
                    p = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    w = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var f = t(7572);
                const y = a.instance,
                    k = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: m,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: h,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: v,
                        addEscapeListener: (e) => {
                            const u = (u) => w(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, b);
                        },
                        handleViewEvent: g,
                        onBindingsReady: C,
                        onLayoutReady: B,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: p,
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
                        ClickOutsideManager: y,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = k;
            },
            3458: (e, u, t) => {
                'use strict';
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
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(i || (i = {}));
            },
            4828: (e, u, t) => {
                'use strict';
                t.d(u, { AB: () => m, D9: () => n, eX: () => r, sC: () => i, tL: () => a, x3: () => l });
                const n = 'crew',
                    a = 2e3;
                let r, i, o, s, l, c, E;
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
                        e.DocumentChange = 'document_change_dialog';
                    })(o || (o = {})),
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
                    })(E || (E = {}));
                const m = {
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
                'use strict';
                t.d(u, { Jp: () => E, Sr: () => d });
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
                            E = (0, n.useCallback)(
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
                                    void 0 !== r.current.get(e) && E(e), a.current.delete(e);
                                    const l = (o() - s) / 1e3;
                                    l <= u ||
                                        ((i = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(i, l)),
                                        t(e, n, i));
                                },
                                [a, r, t, E],
                            );
                        return [(e) => i(e), (e, u, t, n) => m(e, u, t, n), () => s(), (e) => c(e), (e) => E(e)];
                    },
                    E = (e) => {
                        const u = l(e, i),
                            t = (0, n.useCallback)(
                                (e) => {
                                    u(e.action, e.logLevel, s(e));
                                },
                                [u],
                            );
                        return (e) => t(e);
                    },
                    m = (e) => {
                        const u = c(e, i),
                            t = u[0],
                            a = u[1],
                            r = u[2],
                            o = u[3],
                            l = u[4],
                            E = (0, n.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        t = e.timeLimit,
                                        n = e.logLevel;
                                    a(u, t, n, s(e));
                                },
                                [a],
                            );
                        return [(e) => t(e), (e) => E(e), () => r(), (e) => o(e), (e) => l(e)];
                    },
                    d = (e, u) => {
                        const t = m(e),
                            i = t[0],
                            o = t[1],
                            s = u.action,
                            l = u.timeLimit,
                            c = (function (e, u) {
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
                                onShow: () => i(s || a.Z0),
                                onHide: () => o(Object.assign({ action: s || a.Z0, timeLimit: l || a.sx }, c)),
                            }),
                            [s, l, c, i, o],
                        );
                    };
            },
            7077: (e, u, t) => {
                'use strict';
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
                        }, [e, u, n]),
                        E = u === l.c204x256;
                    return o().createElement(
                        'div',
                        { style: c, className: a()(s.Z.base, s.Z[`base__${u}`], t) },
                        E && o().createElement('div', { className: s.Z.innerShadow }),
                    );
                };
            },
            8485: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => l, d: () => c });
                var n = t(6483),
                    a = t.n(n),
                    r = t(8271),
                    i = t(6179),
                    o = t.n(i),
                    s = t(9426);
                let l;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(l || (l = {}));
                const c = o().memo(function ({ icon: e, type: u, size: t }) {
                    const n = (0, i.useMemo)(() => {
                            let e;
                            return (
                                (e =
                                    u === r.W.Possible || u === r.W.New
                                        ? R.images.gui.maps.icons.tankmen.skills.medium.new_skill()
                                        : R.images.gui.maps.icons.crew.$dyn(`${u}SkillFrame_${t}`)),
                                { backgroundImage: `url(${e})` }
                            );
                        }, [u, t]),
                        c = (0, i.useMemo)(() => {
                            if (!e) return null;
                            return {
                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.skills.$dyn(t === l.Big ? 'c_22x22' : 'small').$dyn(e)})`,
                            };
                        }, [e, t]);
                    return o().createElement(
                        'div',
                        { className: a()(s.Z.base, s.Z[`base__${t}`]) },
                        o().createElement('div', { className: s.Z.bg, style: n }),
                        c && o().createElement('div', { className: a()(s.Z.icon, s.Z[`icon__${u}`]), style: c }),
                    );
                });
            },
            9631: (e, u, t) => {
                'use strict';
                t.d(u, { C: () => d });
                var n = t(6483),
                    a = t.n(n),
                    r = t(3457),
                    i = t(2106),
                    o = t(9987),
                    s = t(6179),
                    l = t.n(s),
                    c = t(4723);
                const E = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
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
                const d = l().memo(function (e) {
                    let u = e.isActive,
                        t = e.counter,
                        n = e.className,
                        s = e.children,
                        d = e.type,
                        _ = void 0 === d ? i.L.secondary : d,
                        A = e.size,
                        F = void 0 === A ? i.q.small : A,
                        D = e.hasIndicator,
                        C = void 0 === D || D,
                        B = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, E);
                    return l().createElement(
                        'div',
                        { className: a()(c.Z.base, n, u && c.Z.base__active) },
                        l().createElement(r.u5, m({ type: _, size: F, mixClass: c.Z.button }, B), s),
                        l().createElement('div', { className: c.Z.overlay }),
                        C && l().createElement('div', { className: c.Z.indicator }),
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
                'use strict';
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
                'use strict';
                t.d(u, { Gc: () => r, gO: () => a, wP: () => n });
                t(3649);
                R.strings.common.percentValue();
                let n;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(n || (n = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let a;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(a || (a = {}));
                const r = (e, u = !1, t = null) => {
                    const n = u ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (t ? n.$dyn(`${t}Case`) : n).$dyn(e);
                };
            },
            5499: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t.n(n),
                    r = t(3403),
                    i = t(3215),
                    o = t(4598),
                    s = t(9480),
                    l = t(3946),
                    c = t(4828);
                const E = [
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
                                d = (0, l.Om)((e) => {
                                    var u;
                                    const n = null == (u = s.U2(t(), e)) ? void 0 : u.tankman;
                                    return n ? n.skills.length + n.newSkillsAmount + n.possibleSkillsAmount : 0;
                                }),
                                _ = (0, l.Om)(() => {
                                    return (
                                        (e = u.currentLayoutID.get()),
                                        (t = u.previousLayoutID.get()),
                                        {
                                            isCurrentLayoutHangar: e === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isCurrentLayoutTankmanContainer: E.includes(e),
                                            isCurrentLayoutQuickTraining:
                                                e === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isCurrentLayoutMemberChange:
                                                e === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutHangar: t === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isPreviousLayoutTankmanContainer: E.includes(t),
                                            isPreviousLayoutQuickTraining:
                                                t === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isPreviousLayoutMemberChange:
                                                t === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutBarrack: t === R.views.lobby.crew.BarracksView('resId'),
                                        }
                                    );
                                    var e, t;
                                }),
                                A = (0, l.Om)(() => {
                                    const e = _(),
                                        u = e.isCurrentLayoutHangar,
                                        t = e.isCurrentLayoutQuickTraining;
                                    return !a() && !u && !t;
                                }),
                                F = (0, l.Om)(() => !a() && u.buttonsBar.get().isVisible),
                                D = (0, l.Om)(() => {
                                    return (e = u.currentLayoutID.get()), c.AB[e] || c.sC.Hangar;
                                    var e;
                                });
                            return Object.assign({}, u, {
                                computes: {
                                    getSlots: t,
                                    isSlotSelected: r,
                                    isAnySlotSelected: i,
                                    getSlotTankman: m,
                                    getAllSkillsAmount: d,
                                    isAnyEmptySlots: n,
                                    isTankmanMode: a,
                                    isChangeCrewButtonVisible: A,
                                    isButtonBarVisible: F,
                                    getLayoutInfo: _,
                                    getUiLoggingParentScreen: D,
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
                            onWotPlusClick: e.createCallbackNoArgs('buttonsBar.onWotPlusClick'),
                            onDogClick: e.createCallbackNoArgs('onDogClick'),
                            onDogMoreInfoClick: e.createCallbackNoArgs('onDogMoreInfoClick'),
                        }),
                    ),
                    d = m[0],
                    _ = m[1];
                var A = t(6483),
                    F = t.n(A),
                    D = t(2056);
                let C;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(C || (C = {}));
                const B = 'ButtonsBar_base_9c',
                    g = 'ButtonsBar_button_d1',
                    b = 'ButtonsBar_button__crewOperaions_70',
                    h = 'ButtonsBar_button__crewBooks_b4',
                    v = 'ButtonsBar_button__toggle_64',
                    p = 'ButtonsBar_acceleratedTraining_94',
                    w = 'ButtonsBar_acceleratedTraining__icon_9b',
                    f = 'ButtonsBar_acceleratedTraining__label_ad';
                var y = t(3457),
                    k = t(9987),
                    S = t(6373),
                    x = t(3649);
                const L = 'CrewBookButton_base_da',
                    T = 'CrewBookButton_button_ee',
                    I = 'CrewBookButton_icon_11',
                    M = 'CrewBookButton_discount_6b',
                    O = 'CrewBookButton_counter_5d',
                    P = (0, r.Pi)(({ classMix: e, isWidgetDisabled: u }) => {
                        const t = _(),
                            n = t.model,
                            r = t.controls,
                            i = n.crewBooks.get(),
                            o = r.onCrewBooksClick;
                        return a().createElement(
                            S.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, x.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: i.totalAmount,
                                }),
                            },
                            a().createElement(
                                'div',
                                { id: 'crew_book_button', className: F()(L, e) },
                                a().createElement(
                                    y.u5,
                                    { type: y.L$.primary, mixClass: T, disabled: i.isDisabled || u, onClick: o },
                                    a().createElement('div', { className: I }),
                                ),
                                i.newAmount > 0 &&
                                    a().createElement(
                                        'div',
                                        { className: O },
                                        a().createElement(k.A, { value: i.newAmount }),
                                    ),
                                i.hasDiscount && a().createElement('div', { className: M }),
                            ),
                        );
                    });
                var N = t(3616);
                const H = ['children'];
                function W() {
                    return (
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                }
                const j = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, H);
                    return a().createElement(
                        N.Z,
                        W(
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
                var U = t(4489);
                let G;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(G || (G = {}));
                var z = t(1943);
                const V = 'CrewOperationsButton_base_e3',
                    Z = 'CrewOperationsButton_button_8e',
                    X = 'CrewOperationsButton_icon_0c',
                    $ = 'CrewOperationsButton_autoReturnIcon_f0',
                    q = (0, r.Pi)(({ classMix: e, isWidgetDisabled: u }) => {
                        const t = _().model,
                            n = ((e) => {
                                const u = (0, z.Jp)(c.D9);
                                return (t) => u({ action: c.eX.Click, parentScreen: e, item: t });
                            })(t.computes.getUiLoggingParentScreen()),
                            r = t.crewOperations.get();
                        return a().createElement(
                            'div',
                            { id: 'crew_operations_button', className: F()(V, e) },
                            a().createElement(
                                j,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !u,
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
                                            { type: y.L$.primary, mixClass: Z, disabled: u },
                                            a().createElement('div', { className: X }),
                                        ),
                                        r.isAutoReturnOn && a().createElement('div', { className: $ }),
                                    ),
                                ),
                            ),
                        );
                    });
                var Y = t(9631);
                const K = 'CrewToggleButton_base_03',
                    Q = 'CrewToggleButton_button_89',
                    J = 'CrewToggleButton_iconContainer_f9',
                    ee = 'CrewToggleButton_icon_a7';
                let ue;
                !(function (e) {
                    e.WotPlus = 'wotPlus';
                })(ue || (ue = {}));
                const te = (0, n.memo)(({ type: e, state: u, isDisabled: t, onClick: r, classMix: i }) => {
                        const o = (0, n.useMemo)(() => {
                            const t = u === C.Disabled ? C.Off : u;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${t})`,
                            };
                        }, [e, u]);
                        return a().createElement(
                            'div',
                            { className: F()(K, i) },
                            a().createElement(
                                Y.C,
                                {
                                    type: y.L$.primary,
                                    isActive: u === C.On,
                                    disabled: t || u === C.Disabled,
                                    className: Q,
                                    onClick: r,
                                },
                                a().createElement(
                                    'div',
                                    { className: J },
                                    a().createElement('div', { className: ee, style: o }),
                                ),
                            ),
                        );
                    }),
                    ne = R.strings.crew.acceleratedTraining,
                    ae = (0, r.Pi)(({ isWidgetDisabled: e }) => {
                        const u = _(),
                            t = u.model,
                            n = u.controls,
                            r = t.isAcceleratedTraining.get(),
                            i = t.wotPlus.get(),
                            o = n.onWotPlusClick;
                        return a().createElement(
                            'div',
                            { className: B },
                            a().createElement(q, { classMix: F()(g, b), isWidgetDisabled: e }),
                            a().createElement(P, { classMix: F()(g, h), isWidgetDisabled: e }),
                            i.state !== C.Hidden &&
                                a().createElement(
                                    D.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    a().createElement(
                                        'div',
                                        null,
                                        a().createElement(te, {
                                            type: ue.WotPlus,
                                            state: i.state,
                                            isDisabled: e || i.isDisabled,
                                            onClick: o,
                                            classMix: F()(g, v),
                                        }),
                                    ),
                                ),
                            r &&
                                a().createElement(
                                    S.i,
                                    { header: ne.tooltip.header(), body: ne.tooltip.body() },
                                    a().createElement(
                                        'div',
                                        { className: p },
                                        a().createElement('div', { className: w }),
                                        a().createElement('div', { className: f }, ne.label()),
                                    ),
                                ),
                        );
                    }),
                    re = 'CrewWidgetApp_base_cc',
                    ie = 'CrewWidgetApp_buttonsBar_e5',
                    oe = 'CrewWidgetApp_slotsList_ee';
                var se = t(7727),
                    le = t(7030),
                    ce = t(8018),
                    Ee = t(7160);
                const me = 'BaseSlot_base_97',
                    de = 'BaseSlot_base__hovered_61',
                    _e = 'BaseSlot_base__inactive_7e',
                    Ae = 'BaseSlot_hoverGlow_de',
                    Fe = 'BaseSlot_hoverGlow__visible_f4',
                    De = 'BaseSlot_selectedGlow_25',
                    Ce = 'BaseSlot_selectedGlow__visible_2f',
                    Be = 'BaseSlot_hover_e9',
                    ge = 'BaseSlot_hover__visible_1f',
                    be = 'BaseSlot_disabled_67',
                    he = ({
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
                            E = l[1],
                            m = c && (!t || (!o && s.isCurrentLayoutMemberChange)),
                            d = m && !o && !s.isCurrentLayoutHangar;
                        return a().createElement(
                            'div',
                            {
                                className: F()(me, (c || t) && !s.isCurrentLayoutHangar && de, (t || !i) && _e),
                                onClick: e,
                                onMouseEnter: () => {
                                    i && !t && (se.$.playHighlight(), E(!0));
                                },
                                onMouseLeave: () => {
                                    E(!1);
                                },
                            },
                            !s.isCurrentLayoutMemberChange && a().createElement('div', { className: F()(De, t && Ce) }),
                            a().createElement('div', { className: F()(Ae, d && Fe) }),
                            a().createElement('div', { className: F()(Be, m && ge) }),
                            r && a().createElement('div', { className: be }),
                            u,
                        );
                    },
                    ve = ({
                        startState: e,
                        endState: u,
                        layoutInfo: t,
                        isPaused: r,
                        children: i,
                        className: o,
                        isTankmanMode: s,
                    }) => {
                        const l = (0, le.useSpring)(
                                () => ({ from: e, to: u, config: { duration: 300, easing: Ee.qb }, pause: r }),
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
                        return a().createElement(le.animated.div, { className: o, style: c }, i);
                    },
                    pe = 'DogSlot_base_8f',
                    we = 'DogSlot_icon_ba',
                    fe = 'DogSlot_container_63',
                    ye = 'DogSlot_roleAndName_c9',
                    ke = 'DogSlot_role_5c',
                    Se = 'DogSlot_name_9c',
                    xe = 'DogSlot_btnDetails_b7',
                    Le = { transform: 'translateX(0rem)' },
                    Te = (0, r.Pi)(({ isDisabled: e, layoutInfo: u }) => {
                        const t = _(),
                            r = t.model,
                            i = t.controls,
                            o = r.nation.get(),
                            s = i.onDogMoreInfoClick,
                            l = (0, n.useCallback)(() => {
                                !e && (0, se.G)(ce.gO.RUDY);
                            }, [e]),
                            c = (0, n.useCallback)(
                                (u) => {
                                    u.stopPropagation(), !e && s();
                                },
                                [s, e],
                            ),
                            E = (0, le.useSpring)(
                                () => ({
                                    from: Le,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: Ee.qb },
                                    pause: !u.isCurrentLayoutQuickTraining,
                                }),
                                [u],
                            )[0],
                            m = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(o);
                        return a().createElement(
                            S.i,
                            { header: m.header(), body: m.body() },
                            a().createElement(
                                'div',
                                null,
                                a().createElement(
                                    he,
                                    { onClick: l, isDisabled: e, isEnabledForMouse: !1, layoutInfo: u },
                                    a().createElement(
                                        ve,
                                        {
                                            startState: Le,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: u,
                                            isPaused: !1,
                                            className: pe,
                                            isTankmanMode: !1,
                                        },
                                        a().createElement(le.animated.div, { className: we, style: E }),
                                        a().createElement(
                                            'div',
                                            { className: fe },
                                            a().createElement(
                                                'div',
                                                { className: ye },
                                                a().createElement('div', { className: ke }),
                                                a().createElement(
                                                    'div',
                                                    { className: Se },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(o).name(),
                                                ),
                                            ),
                                            a().createElement(
                                                'div',
                                                { className: xe },
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
                var Ie = t(4179);
                const Me = ({
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
                                    se.$.playYes();
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
                                    o && o(e), ((e) => e.button === G.RIGHT)(e) && s();
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
                    Oe = ['children'];
                function Re() {
                    return (
                        (Re =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Re.apply(this, arguments)
                    );
                }
                const Pe = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Oe);
                        return a().createElement(
                            Me,
                            Re({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                            u,
                        );
                    },
                    Ne = 'ChangeCrewButton_base_0f',
                    He = 'ChangeCrewButton_base__inactive_77',
                    We = 'ChangeCrewButton_normalState_07',
                    je = 'ChangeCrewButton_normalState__hide_db',
                    Ue = 'ChangeCrewButton_hoverState_68',
                    Ge = 'ChangeCrewButton_hoverState__show_89',
                    ze = (0, r.Pi)(({ isSelected: e, isLocked: u, mainRole: t, isFemale: r }) => {
                        const i = _().model,
                            o = (0, n.useState)(!1),
                            s = o[0],
                            l = o[1],
                            E = (0, z.Sr)(c.D9, {
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
                                              (0, x.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, ce.Gc)(t, r, ce.wP.Objective),
                                              }),
                                          ],
                                [u, r, t],
                            ),
                            d = m[0],
                            A = m[1];
                        return a().createElement(
                            S.i,
                            {
                                header: d,
                                body: A,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            a().createElement(
                                'div',
                                {
                                    className: F()(Ne, (u || e) && He),
                                    onMouseEnter: () => {
                                        E.onShow(), u || e || (se.$.playHighlight(), l(!0));
                                    },
                                    onMouseLeave: () => {
                                        E.onHide(), l(!1);
                                    },
                                },
                                a().createElement('div', { className: F()(We, s && je) }),
                                a().createElement('div', { className: F()(Ue, (e || s) && Ge) }),
                            ),
                        );
                    }),
                    Ve = 'CrewSlot_base_ac',
                    Ze = 'CrewSlot_changeCrew_02',
                    Xe = 'CrewSlot_content_5b',
                    $e = 'CrewSlot_content__withChangeCrewButton_4e',
                    qe = 'CrewSlot_warningHighlight_ff',
                    Ye = 'CrewSlot_selectHighlight_50',
                    Ke = 'CrewSlot_selectHighlightInTankmanMode_37';
                var Qe = t(7077);
                const Je = 'AcceleratedTrainingIcon_base_4f',
                    eu = 'AcceleratedTrainingIcon_icon_45',
                    uu = (0, n.memo)(({ classMix: e }) =>
                        a().createElement(
                            S.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            },
                            a().createElement(
                                'div',
                                { className: F()(Je, e) },
                                a().createElement('div', { className: eu }),
                            ),
                        ),
                    ),
                    tu = 'SpecializationAndName_base_ef',
                    nu = 'SpecializationAndName_roleWrapper_87',
                    au = 'SpecializationAndName_role_55',
                    ru = 'SpecializationAndName_role__withGap_35',
                    iu = 'SpecializationAndName_percent_e6',
                    ou = 'SpecializationAndName_percent__untrained_1b',
                    su = 'SpecializationAndName_acceleratedTrainingIcon_35',
                    lu = 'SpecializationAndName_name_aa';
                function cu() {
                    return (
                        (cu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        cu.apply(this, arguments)
                    );
                }
                const Eu = (0, r.Pi)(
                        ({
                            roles: e,
                            specializationLevel: u = 0,
                            tankmanID: t,
                            isUntrained: n,
                            name: r,
                            isAcceleratedTrainingAvailable: i,
                        }) => {
                            const o = _().model,
                                l = (0, z.Sr)(c.D9, {
                                    item: c.x3.MstlTooltip,
                                    action: c.eX.Viewed,
                                    parentScreen: o.computes.getUiLoggingParentScreen(),
                                });
                            return a().createElement(
                                'div',
                                { className: tu },
                                a().createElement(
                                    D.u,
                                    cu(
                                        {
                                            targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                            contentId: R.views.lobby.crew.tooltips.TrainingLevelTooltip('resId'),
                                            args: { tankmanID: t },
                                            isEnabled: Boolean(t),
                                            ignoreShowDelay: !0,
                                            ignoreMouseClick: !0,
                                        },
                                        l,
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: nu },
                                        s.UI(e, (e, u) =>
                                            a().createElement('div', {
                                                key: `role__${e}`,
                                                className: F()(au, u > 0 && ru),
                                                style: {
                                                    backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                                },
                                            }),
                                        ),
                                        u > 0 &&
                                            a().createElement(
                                                'div',
                                                { className: F()(iu, n && ou) },
                                                (0, x.uF)(R.strings.common.percentValue(), { value: u }),
                                            ),
                                    ),
                                ),
                                i && a().createElement(uu, { classMix: su }),
                                a().createElement('div', { className: lu }, r),
                            );
                        },
                    ),
                    mu = 'EmptySlotContent_base_77',
                    du = 'EmptySlotContent_tankmanIcon_07',
                    _u = 'EmptySlotContent_icon_a8',
                    Au = 'EmptySlotContent_specialization_1f',
                    Fu = 'EmptySlotContent_specialization__disabled_3d',
                    Du = 'EmptySlotContent_vehicle_55',
                    Cu = { transform: 'translateX(0rem)', opacity: 1 },
                    Bu = { transform: 'translateX(-70rem)', opacity: 0 },
                    gu = (0, n.memo)(
                        ({
                            roles: e,
                            layoutInfo: u,
                            vehicleName: t,
                            vehicleType: r,
                            isDisabled: i,
                            isSelected: o,
                            blinkStyle: l,
                            qtTankmanIconStyle: c,
                        }) => {
                            const E = (0, le.useSpring)(
                                    () => ({
                                        from: Cu,
                                        to: Bu,
                                        config: { duration: 200, easing: Ee.ei },
                                        immediate: !0,
                                        pause: o,
                                    }),
                                    [o],
                                ),
                                m = E[0],
                                d = E[1],
                                _ = (0, n.useCallback)(() => {
                                    u.isCurrentLayoutQuickTraining || d.start({ reset: !0, reverse: !0 });
                                }, [d, u]),
                                A = s.U2(e, 0) || '',
                                D = R.strings.crew_widget.vehicleWithName.$dyn((0, x.BN)(r)),
                                C = (0, x.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(A),
                                });
                            return a().createElement(
                                'div',
                                { className: mu, onMouseEnter: _, onMouseLeave: _ },
                                a().createElement(
                                    'div',
                                    { className: du },
                                    a().createElement(
                                        le.animated.div,
                                        { style: c },
                                        a().createElement(Qe.G, {
                                            name: 'empty',
                                            size: Qe.U.c100x60Barracks,
                                            classMix: _u,
                                        }),
                                        a().createElement(
                                            le.animated.div,
                                            { style: i ? void 0 : l },
                                            a().createElement(Qe.G, {
                                                name: 'emptyRed',
                                                size: Qe.U.c100x60Barracks,
                                                classMix: _u,
                                            }),
                                        ),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: F()(Au, i && Fu) },
                                    a().createElement(Eu, { tankmanID: 0, roles: e, name: C, isUntrained: !0 }),
                                ),
                                a().createElement(
                                    le.animated.div,
                                    { className: Du, style: o ? void 0 : m },
                                    (0, x.uF)(D, { name: t }),
                                ),
                            );
                        },
                    );
                var bu = t(7078),
                    hu = t(2603),
                    vu = t(5415);
                const pu = (e) => e.skills.length + e.newSkillsAmount + e.possibleSkillsAmount;
                var wu = t(8271),
                    fu = t(4385),
                    yu = t(9887),
                    ku = t.n(yu);
                const Su = ['xl', 'lg', 'md', 'sm', 'xs'],
                    xu = (e) => e.includes('_') && ((e) => Su.includes(e))(e.split('_').at(-1)),
                    Lu = [vu.cJ.ExtraLarge, vu.cJ.Large, vu.cJ.Medium, vu.cJ.Small, vu.cJ.ExtraSmall],
                    Tu = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (xu(n)) {
                                const a = n.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const r = Lu.indexOf(u),
                                    i = (-1 !== r ? Su.slice(r) : [])
                                        .map((e) => a + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = i ? e[i] : void 0;
                                return (t[a] = void 0 !== o ? o : e[a]), t;
                            }
                            const a = e[n];
                            return (
                                void 0 === a ||
                                    ((e, u) => Su.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = a),
                                t
                            );
                        }, {}),
                    Iu = (e, u = Tu) => {
                        const t = (
                            (e, u = Tu) =>
                            (t) => {
                                const r = (0, vu.GS)().mediaSize,
                                    i = (0, n.useMemo)(() => u(t, r), [t, r]);
                                return a().createElement(e, i);
                            }
                        )(e, u);
                        return a().memo((u) =>
                            Object.keys(u).some((e) => xu(e) && void 0 !== u[e])
                                ? a().createElement(t, u)
                                : a().createElement(e, u),
                        );
                    },
                    Mu = {
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
                    Ou = [
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
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                Object.keys(ku());
                const Pu = {
                        XL: { mt: Mu.mt__XL, mr: Mu.mr__XL, mb: Mu.mb__XL, ml: Mu.ml__XL },
                        LG: { mt: Mu.mt__LG, mr: Mu.mr__LG, mb: Mu.mb__LG, ml: Mu.ml__LG },
                        MDp: { mt: Mu.mt__MDp, mr: Mu.mr__MDp, mb: Mu.mb__MDp, ml: Mu.ml__MDp },
                        MD: { mt: Mu.mt__MD, mr: Mu.mr__MD, mb: Mu.mb__MD, ml: Mu.ml__MD },
                        SMp: { mt: Mu.mt__SMp, mr: Mu.mr__SMp, mb: Mu.mb__SMp, ml: Mu.ml__SMp },
                        SM: { mt: Mu.mt__SM, mr: Mu.mr__SM, mb: Mu.mb__SM, ml: Mu.ml__SM },
                        XS: { mt: Mu.mt__XS, mr: Mu.mr__XS, mb: Mu.mb__XS, ml: Mu.ml__XS },
                    },
                    Nu = (Object.keys(Pu), ['mt', 'mr', 'mb', 'ml']),
                    Hu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Wu = Iu((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            i = e.m,
                            o = e.mt,
                            s = void 0 === o ? i : o,
                            l = e.mr,
                            c = void 0 === l ? i : l,
                            E = e.mb,
                            m = void 0 === E ? i : E,
                            d = e.ml,
                            _ = void 0 === d ? i : d,
                            A = e.column,
                            D = e.row,
                            C = e.flexDirection,
                            B = void 0 === C ? (A ? 'column' : D && 'row') || void 0 : C,
                            g = e.flexStart,
                            b = e.center,
                            h = e.flexEnd,
                            v = e.spaceBetween,
                            p = e.spaceAround,
                            w = e.justifyContent,
                            f =
                                void 0 === w
                                    ? (g ? 'flex-start' : b && 'center') ||
                                      (h && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (p && 'space-around') ||
                                      void 0
                                    : w,
                            y = e.alignItems,
                            k = void 0 === y ? (g ? 'flex-start' : b && 'center') || (h && 'flex-end') || void 0 : y,
                            S = e.alignSelf,
                            x = e.wrap,
                            L = e.flexWrap,
                            T = void 0 === L ? (x ? 'wrap' : void 0) : L,
                            I = e.grow,
                            M = e.shrink,
                            O = e.flex,
                            R = void 0 === O ? (I || M ? `${I ? 1 : 0} ${M ? 1 : 0} auto` : void 0) : O,
                            P = e.style,
                            N = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Ou);
                        const W = (0, n.useMemo)(() => {
                                const e = { mt: s, mr: c, mb: m, ml: _ },
                                    u = ((e) =>
                                        Nu.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(Pu[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        Nu.reduce((u, t) => {
                                            const n = e[t];
                                            return 'number' == typeof n && (u[Hu[t]] = n + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, P, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: R,
                                        alignSelf: S,
                                        display: B || k ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: T,
                                        justifyContent: f,
                                        alignItems: k,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, s, c, m, _, P, R, S, B, T, f, k]),
                            j = W.computedStyle,
                            U = W.computedClassNames;
                        return a().createElement('div', Ru({ className: F()(Mu.base, ...U, u), style: j }, H), N);
                    });
                var ju = t(280),
                    Uu = t(3532),
                    Gu = t.n(Uu);
                const zu = {
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
                    Vu = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Zu() {
                    return (
                        (Zu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Zu.apply(this, arguments)
                    );
                }
                Object.keys(ku());
                const Xu = Object.keys(Gu()),
                    $u = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    qu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Yu = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ku = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Qu =
                        (Object.keys(Ku),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': $u,
                            'heading-H36': $u,
                            'heading-H28': qu,
                            'heading-H24': qu,
                            'heading-H24R': qu,
                            'heading-H22': qu,
                            'heading-H20R': qu,
                            'heading-H18': qu,
                            'heading-H15': Yu,
                            'heading-H14': Yu,
                            'paragraph-P24': qu,
                            'paragraph-P18': qu,
                            'paragraph-P16': qu,
                            'paragraph-P14': Yu,
                            'paragraph-P12': Yu,
                            'paragraph-P10': Yu,
                        }),
                    Ju =
                        (Object.keys(Qu),
                        (e) =>
                            e
                                ? ((e) => Xu.includes(e))(e)
                                    ? { colorClassName: zu[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    et = Iu((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            i = e.color,
                            o = e.m,
                            s = e.mt,
                            l = void 0 === s ? o : s,
                            c = e.mr,
                            E = void 0 === c ? o : c,
                            m = e.mb,
                            d = void 0 === m ? o : m,
                            _ = e.ml,
                            A = void 0 === _ ? o : _,
                            D = e.style,
                            C = e.format,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Vu);
                        const g = (0, n.useMemo)(() => {
                                const e = Ju(i),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, n), colorClassName: u };
                            }, [D, i]),
                            b = g.computedStyle,
                            h = g.colorClassName;
                        return a().createElement(
                            Wu,
                            Zu(
                                {
                                    className: F()(zu.base, t && zu[t], h, r),
                                    style: b,
                                    mt: !0 === l ? Qu[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === E ? Qu[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === d ? Qu[t || 'paragraph-P16'].mb : d,
                                    ml: !0 === A ? Qu[t || 'paragraph-P16'].ml : A,
                                },
                                B,
                            ),
                            void 0 !== C ? a().createElement(ju.z, Zu({}, C, { text: u })) : u,
                        );
                    }),
                    ut = {
                        base: 'RoleLevelIcon_base_e1',
                        realLevel: 'RoleLevelIcon_realLevel_96',
                        base__small: 'RoleLevelIcon_base__small_ce',
                        icon: 'RoleLevelIcon_icon_fa',
                    },
                    tt = (0, n.memo)(({ percentValue: e, skillSize: u, hasSkills: t }) => {
                        const n = t ? R.strings.crew_widget.plusValue() : R.strings.crew_widget.plusSpecValue();
                        return a().createElement(
                            S.i,
                            {
                                header: R.strings.crew_widget.tooltip.roleLevelIcon.header(),
                                body: R.strings.crew_widget.tooltip.roleLevelIcon.body(),
                            },
                            a().createElement(
                                'div',
                                { className: F()(ut.base, ut[`base__${u}`]) },
                                a().createElement('div', { className: ut.icon }),
                                a().createElement(
                                    'div',
                                    { className: ut.realLevel },
                                    a().createElement(et, {
                                        text: n,
                                        format: { binding: { value: a().createElement(et, { text: e }) } },
                                    }),
                                ),
                            ),
                        );
                    }),
                    nt = {
                        base: 'LastSkillInfo_base_38',
                        realLevel: 'LastSkillInfo_realLevel_78',
                        base__small: 'LastSkillInfo_base__small_c5',
                        possibleLevel: 'LastSkillInfo_possibleLevel_02',
                        acceleratedTrainingIcon: 'LastSkillInfo_acceleratedTrainingIcon_bf',
                        base__big: 'LastSkillInfo_base__big_10',
                    },
                    at = 0.01,
                    rt = (0, n.memo)(
                        ({
                            lastSkillLevel: e,
                            lastPossibleSkillLevel: u,
                            showAcceleratedTrainingIcon: t,
                            skillSize: r,
                            blinkStyle: i,
                        }) => {
                            const o = (0, n.useRef)(e),
                                s = (0, le.useSpring)(() => ({ from: { scale: 1 } })),
                                l = s[0],
                                c = s[1];
                            (0, n.useEffect)(() => {
                                u < 0 &&
                                    o.current !== e &&
                                    (c.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: Ee.Fs },
                                    }),
                                    (o.current = e));
                            }, [e, u, c]);
                            const E = (0, n.useMemo)(
                                    () =>
                                        0 === u
                                            ? [R.strings.common.percentValue(), u]
                                            : u < at
                                              ? [R.strings.crew_widget.plusMinValue(), at]
                                              : [R.strings.crew_widget.plusValue(), u],
                                    [u],
                                ),
                                m = E[0],
                                d = E[1];
                            return a().createElement(
                                'div',
                                { className: F()(nt.base, nt[`base__${r}`]) },
                                e >= 0 &&
                                    e < 100 &&
                                    a().createElement(
                                        le.animated.div,
                                        { style: l },
                                        a().createElement(
                                            'div',
                                            { className: nt.realLevel },
                                            (0, x.uF)(R.strings.common.percentValue(), {
                                                value: e > 0 && e < at ? at : e,
                                            }),
                                        ),
                                    ),
                                u >= 0 &&
                                    u < 100 &&
                                    a().createElement(
                                        le.animated.div,
                                        { className: nt.possibleLevel, style: i },
                                        (0, x.uF)(m, { value: d }),
                                    ),
                                t && a().createElement(uu, { classMix: nt.acceleratedTrainingIcon }),
                            );
                        },
                    );
                var it = t(8485);
                const ot = 33,
                    st = 0,
                    lt = !0,
                    ct = 'play';
                const Et = [
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
                function mt() {
                    return (
                        (mt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        mt.apply(this, arguments)
                    );
                }
                const dt = (0, n.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            r = e.getImageSource,
                            i = e.frameCount,
                            o = e.onAnimate,
                            s = e.frameTime,
                            l = void 0 === s ? ot : s,
                            c = e.initialFrameIndex,
                            E = void 0 === c ? st : c,
                            m = e.lastFrameIndex,
                            d = void 0 === m ? i - 1 : m,
                            _ = e.loop,
                            A = void 0 === _ ? lt : _,
                            F = e.state,
                            D = void 0 === F ? ct : F,
                            C = e.onAnimationDone,
                            B = e.onAnimationComplete,
                            g = e.poster,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Et);
                        const h = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = h.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const e = Ft(E, d, r),
                                                u = _t(E, d),
                                                n = window.setInterval(() => {
                                                    const a = u(),
                                                        r = e.get(a);
                                                    r
                                                        ? (null == o || o(a, r),
                                                          t(r),
                                                          a === d &&
                                                              (null == B || B(),
                                                              A || (null == C || C(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === E && g ? { path: g, x: 0, y: 0 } : r(E),
                                                u = new Image();
                                            u.src = e.path;
                                            const n = () => t(At(e, u));
                                            return (
                                                u.addEventListener('load', n), () => u.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, E, d, A, o, B, C, g, D]),
                            a().createElement('canvas', mt({}, b, { width: u, height: t, ref: h }))
                        );
                    }),
                    _t = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return (t += 1), t > u && (t = e), n;
                        };
                    },
                    At = (e, u) => Object.assign({}, e, { img: u }),
                    Ft = (e, u, t) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= u; r++) {
                            const e = t(r),
                                u = a[e.path];
                            if (u) n.set(r, At(e, u));
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
                                    n.set(r, At(e, u));
                            }
                        }
                        return n;
                    };
                function Dt(e) {
                    return (u) => `${e}${u}`;
                }
                const Ct = [
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
                function Bt() {
                    return (
                        (Bt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Bt.apply(this, arguments)
                    );
                }
                let gt;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(gt || (gt = {}));
                const bt = (e, u, t) => {
                        const n = new Image();
                        (n.src = t(u)), e.push(n);
                    },
                    ht =
                        ((0, n.memo)((e) => {
                            let u = e.width,
                                t = e.height,
                                r = e.getSrcByFrame,
                                i = e.frameCount,
                                o = e.onAnimate,
                                s = void 0 === o ? () => {} : o,
                                l = e.frameTime,
                                c = void 0 === l ? 33 : l,
                                E = e.initialFrameIndex,
                                m = void 0 === E ? 0 : E,
                                d = e.loop,
                                _ = void 0 === d || d,
                                A = e.state,
                                F = void 0 === A ? gt.Play : A,
                                D = e.onAnimationComplete,
                                C = void 0 === D ? () => {} : D,
                                B = e.revers,
                                g = void 0 !== B && B,
                                b = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(e, Ct);
                            const h = (0, n.useRef)(null);
                            return (
                                (0, n.useEffect)(() => {
                                    const e = h.current;
                                    if (!e) return;
                                    const n = i - 1,
                                        a = e.getContext('2d'),
                                        o = (n) => {
                                            a.clearRect(0, 0, e.width, e.height), a.drawImage(n, 0, 0, u, t);
                                        };
                                    if ('stop' === F) {
                                        const e = r(0),
                                            u = new Image();
                                        u.src = e;
                                        const t = () => o(u);
                                        return u.addEventListener('load', t), () => u.removeEventListener('load', t);
                                    }
                                    const l = ((e, u, t) => {
                                            const n = [];
                                            if (t) for (let t = e; t >= 0; t--) bt(n, t, u);
                                            else for (let t = 0; t < e; t++) bt(n, t, u);
                                            return n;
                                        })(i, r, g),
                                        E = ((e, u = 0) => {
                                            let t = u;
                                            return () => {
                                                const u = t;
                                                return (t += 1), t > e && (t = 0), u;
                                            };
                                        })(n, m),
                                        d = setInterval(() => {
                                            const e = E(),
                                                u = l[e];
                                            o(l[e]), s(e, u), e === n && (C(), _ || clearInterval(d));
                                        }, c);
                                    return () => clearInterval(d);
                                }, [i, c, r, t, m, _, s, C, F, u, g]),
                                a().createElement('canvas', Bt({}, b, { width: u, height: t, ref: h }))
                            );
                        }),
                        'AnimatedNewSkill_base_6b'),
                    vt = 'AnimatedNewSkill_base__big_31';
                function pt(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return wt(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return wt(e, u);
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
                function wt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                class ft {
                    constructor() {
                        (this._intervalID = void 0),
                            (this._observers = void 0),
                            (this._intervalID = null),
                            (this._observers = new Map());
                    }
                    static get instance() {
                        return ft._instance || (ft._instance = new ft()), ft._instance;
                    }
                    subscribe(e) {
                        this._observers.set(e, e),
                            1 === this._observers.size &&
                                (this._intervalID = window.setInterval(() => {
                                    for (var e, u = pt(this._observers.values()); !(e = u()).done; ) {
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
                ft._instance = void 0;
                const yt = {
                        width: 24,
                        height: 24,
                        frameCount: 42,
                        chunk: { count: 1, columns: 42, rows: 1 },
                        getChunkPath: Dt('R.images.gui.maps.icons.sequence.new_skill.skill_'),
                    },
                    kt = {
                        width: 14,
                        height: 14,
                        frameCount: 35,
                        chunk: { count: 1, columns: 35, rows: 1 },
                        getChunkPath: Dt('R.images.gui.maps.icons.sequence.new_skill.skill_small_'),
                    },
                    St = ({ size: e }) => {
                        const u = e === it.O.Small ? kt : yt,
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
                            r = (0, n.useState)(gt.Stop),
                            i = r[0],
                            o = r[1],
                            s = (0, n.useCallback)(() => {
                                o(gt.Play);
                            }, [o]),
                            l = (0, n.useCallback)(() => {
                                o(gt.Stop);
                            }, [o]);
                        return (
                            (0, n.useEffect)(() => (ft.instance.subscribe(s), () => ft.instance.unsubscribe(s)), [s]),
                            a().createElement(dt, {
                                width: u.width,
                                height: u.height,
                                frameCount: u.frameCount,
                                getImageSource: t,
                                loop: !1,
                                state: i,
                                onAnimationDone: l,
                                className: F()(ht, e === it.O.Big && vt),
                            })
                        );
                    },
                    xt = { base: 'Skill_base_ba', base__big: 'Skill_base__big_eb' };
                function Lt() {
                    return (
                        (Lt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Lt.apply(this, arguments)
                    );
                }
                let Tt;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(Tt || (Tt = {}));
                const It = (0, n.memo)(
                        ({
                            name: e,
                            icon: u,
                            type: t,
                            size: r,
                            marginValue: i,
                            clipWidth: o,
                            tankmanID: s,
                            blinkStyle: l,
                            showNewSkillAnimation: c,
                            isTooltipEnabled: E = !0,
                        }) => {
                            const m = (0, n.useRef)(''),
                                d = (0, le.useSpring)(() => ({ from: { scale: 1 } })),
                                _ = d[0],
                                A = d[1];
                            (0, n.useEffect)(() => {
                                t === wu.W.New &&
                                    m.current === wu.W.Possible &&
                                    A.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: Ee.Fs },
                                    }),
                                    (m.current = t);
                            }, [t, A]);
                            const C = (0, n.useCallback)(() => {
                                switch (t) {
                                    case wu.W.Learned:
                                    case wu.W.Learning:
                                    case wu.W.Irrelevant:
                                        return {
                                            contentId:
                                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                    'resId',
                                                ),
                                            args: { tooltipId: hu.HZ, tankmanID: s, skillName: e },
                                        };
                                    case wu.W.New:
                                    case wu.W.Possible:
                                        return {
                                            contentId: R.views.lobby.crew.tooltips.PerkAvailableTooltip('resId'),
                                            args: { tankmanID: s },
                                        };
                                }
                            }, [t, e, s]);
                            return a().createElement(
                                D.u,
                                Lt({}, C(), {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: E,
                                    ignoreShowDelay: !0,
                                }),
                                a().createElement(
                                    le.animated.div,
                                    { style: _ },
                                    a().createElement(
                                        le.animated.div,
                                        { style: t === wu.W.Possible ? l : void 0 },
                                        a().createElement(
                                            'div',
                                            {
                                                className: F()(xt.base, xt[`base__${r}`]),
                                                style: { marginLeft: `${i}rem`, clipPath: `inset(0 ${o}rem 0 0)` },
                                            },
                                            !c || (t !== wu.W.Possible && t !== wu.W.New)
                                                ? a().createElement(it.d, { icon: u, size: r, type: t })
                                                : a().createElement(St, { size: r }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Mt = 'SkillsList_base_11',
                    Ot = 'SkillsList_row_03',
                    Rt = 'SkillsList_possibleLevel_97',
                    Pt = 'SkillsList_possibleLevel__before_6f',
                    Nt = ({
                        tankman: e,
                        showAcceleratedTrainingIcon: u = !1,
                        rowWidth: t = 220,
                        maxBigSkillsInRow: r = 16,
                        blinkStyle: i,
                        isSkillTooltipEnabled: o = !0,
                        showNewSkillAnimation: l = !1,
                    }) => {
                        const c = e.skills,
                            E = c.length,
                            m = pu(e),
                            d = ((e, u, t) => {
                                let n = e > u ? 10 : e;
                                const a = 0 === e ? e : Math.ceil(e / n),
                                    r = a > 1 ? 16 : 24;
                                let i = 2,
                                    o = r;
                                for (; (t - (r + i)) / (o + i) < Math.floor((e - 1) / a); ) i > 0 ? i-- : o--;
                                return (
                                    (n = Math.min(n, 1 + Math.floor((t - r) / (o + i)))),
                                    o !== r && (i = o - r),
                                    [a, n, i, r, o]
                                );
                            })(m, r, t),
                            _ = d[0],
                            A = d[1],
                            D = d[2],
                            C = d[3],
                            B = d[4],
                            g = _ > 1 ? Tt.Small : Tt.Big,
                            b = (0, n.useMemo)(
                                () =>
                                    a().createElement(
                                        le.animated.div,
                                        { className: F()(Rt, 0 === E && Pt), style: i },
                                        a().createElement(tt, {
                                            percentValue: e.lastPossibleRoleLevel,
                                            skillSize: g,
                                            hasSkills: e.possibleSkillsAmount > 0 || E > 0,
                                        }),
                                    ),
                                [i, g, E, e.lastPossibleRoleLevel, e.possibleSkillsAmount],
                            );
                        return a().createElement(
                            'div',
                            { className: Mt },
                            (0, fu.K)(_, (t) => {
                                const n = Math.min(A, m - t * A),
                                    r = t === _ - 1;
                                return a().createElement(
                                    'div',
                                    { className: Ot, key: `row_${t}` },
                                    e.lastPossibleRoleLevel > 0 && 0 === E && b,
                                    (0, fu.K)(n, (u) => {
                                        const r = A * t + u;
                                        let m = '',
                                            d = '',
                                            _ = wu.W.Learned;
                                        if (r < E) {
                                            const e = s.U2(c, r);
                                            e && ((m = e.name), (d = e.icon), (_ = e.type));
                                        } else _ = r < E + e.newSkillsAmount ? wu.W.New : wu.W.Possible;
                                        return a().createElement(It, {
                                            name: m,
                                            icon: d,
                                            type: _,
                                            size: g,
                                            marginValue: 0 === u ? 0 : D,
                                            key: r + '_' + m,
                                            clipWidth: u === n - 1 ? 0 : C - B,
                                            tankmanID: e.tankmanID,
                                            blinkStyle: i,
                                            isTooltipEnabled: o,
                                            showNewSkillAnimation: l,
                                        });
                                    }),
                                    r &&
                                        a().createElement(
                                            a().Fragment,
                                            null,
                                            a().createElement(rt, {
                                                lastSkillLevel: e.possibleSkillsAmount > 0 ? -1 : e.lastSkillLevel,
                                                lastPossibleSkillLevel: e.lastPossibleSkillLevel,
                                                showAcceleratedTrainingIcon: u,
                                                lastPossibleRoleLevel: e.lastPossibleRoleLevel,
                                                skillSize: g,
                                                blinkStyle: i,
                                                hasSkills: e.possibleSkillsAmount > 0 || E > 0,
                                            }),
                                            e.lastPossibleRoleLevel > 0 && E > 0 && b,
                                        ),
                                );
                            }),
                            !_ &&
                                a().createElement(
                                    'div',
                                    { className: Ot },
                                    e.lastPossibleRoleLevel > 0 && 0 === E && b,
                                    a().createElement(rt, {
                                        lastSkillLevel: e.possibleSkillsAmount > 0 ? -1 : e.lastSkillLevel,
                                        lastPossibleSkillLevel: e.lastPossibleSkillLevel,
                                        showAcceleratedTrainingIcon: u,
                                        lastPossibleRoleLevel: e.lastPossibleRoleLevel,
                                        skillSize: g,
                                        blinkStyle: i,
                                        hasSkills: e.possibleSkillsAmount > 0 || E > 0,
                                    }),
                                    e.lastPossibleRoleLevel > 0 && E > 0 && b,
                                ),
                        );
                    },
                    Ht = 'TankmanInfo_base_69',
                    Wt = 'TankmanInfo_base__disabled_36',
                    jt = 'TankmanInfo_tankmanTooltipHoverArea_9b',
                    Ut = 'TankmanInfo_specialization_77',
                    Gt = 'TankmanInfo_specialization__withManySkills_9a',
                    zt = 'TankmanInfo_skillsContainer_17',
                    Vt = 'TankmanInfo_skillsContainer__withManySkills_00',
                    Zt = (0, r.Pi)(({ tankman: e, layoutInfo: u, isUntrained: t, blinkStyle: r, isDisabled: i }) => {
                        const o = _().model,
                            s = u.isCurrentLayoutQuickTraining || o.computes.isChangeCrewButtonVisible(),
                            l = (0, vu.GS)().mediaSize,
                            c = (0, n.useMemo)(() => (s ? (l >= vu.cJ.Small ? 190 : 146) : 220), [s, l]),
                            E = ((e, u) => pu(e) > u)(e, 10),
                            m = !u.isCurrentLayoutQuickTraining && -1 !== e.tankmanID && e.isLessMastered,
                            d = e.baseSpecializationLevel >= 100;
                        return a().createElement(
                            'div',
                            { className: F()(Ht, i && Wt) },
                            a().createElement(
                                bu.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: hu.v$, tankmanID: e.tankmanID },
                                },
                                a().createElement('div', { className: jt }),
                            ),
                            a().createElement(
                                'div',
                                { className: F()(Ut, E && Gt) },
                                a().createElement(Eu, {
                                    roles: e.roles,
                                    tankmanID: e.tankmanID,
                                    specializationLevel: e.specializationLevel,
                                    isUntrained: t,
                                    name: e.fullName,
                                    isAcceleratedTrainingAvailable: m && !d,
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: F()(zt, E && Vt) },
                                a().createElement(Nt, {
                                    tankman: e,
                                    showAcceleratedTrainingIcon: m && d,
                                    rowWidth: c,
                                    maxBigSkillsInRow: 10,
                                    blinkStyle: r,
                                    showNewSkillAnimation: u.isCurrentLayoutHangar,
                                }),
                            ),
                        );
                    }),
                    Xt = 'QuickTrainingTankmanSlotContent_base_8d',
                    $t = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    qt = 'QuickTrainingTankmanSlotContent_highlight_72',
                    Yt = 'QuickTrainingTankmanSlotContent_icon_7c',
                    Kt = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    Qt = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    Jt = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    en = { opacity: 0 },
                    un = [{ opacity: 1 }, { opacity: 0 }],
                    tn = (0, n.memo)(
                        ({
                            tankman: e,
                            isUntrained: u,
                            blinkStyle: t,
                            qtTankmanIconStyle: r,
                            layoutInfo: i,
                            isDisabled: o,
                        }) => {
                            const s = (0, n.useRef)(e.lastSkillLevelFull),
                                l = (0, n.useRef)(e.skills.length),
                                c = (0, le.useSpring)(() => ({ from: Kt })),
                                E = c[0],
                                m = c[1],
                                d = (0, le.useSpring)(() => ({ from: en })),
                                _ = d[0],
                                A = d[1],
                                F = (0, n.useRef)(!1);
                            return (
                                (0, n.useEffect)(() => {
                                    e.hasPossibleProgress
                                        ? F.current ||
                                          (m.start({
                                              from: Kt,
                                              to: Qt,
                                              reverse: false,
                                              config: { duration: 300, easing: Ee.BH },
                                          }),
                                          (F.current = !0))
                                        : F.current
                                          ? (s.current !== e.lastSkillLevelFull || l.current !== e.skills.length
                                                ? (m.start({
                                                      from: Qt,
                                                      to: Jt,
                                                      delay: 200,
                                                      config: { duration: 500, easing: Ee.BH },
                                                  }),
                                                  (s.current = e.lastSkillLevelFull),
                                                  (l.current = e.skills.length),
                                                  A.start({
                                                      from: en,
                                                      to: un,
                                                      delay: 200,
                                                      config: { duration: 500, easing: Ee.BH },
                                                  }))
                                                : m.start({ reset: !0, reverse: !0 }),
                                            (F.current = !1))
                                          : ((s.current = e.lastSkillLevelFull), (l.current = e.skills.length));
                                }, [m, A, e.lastSkillLevelFull, e.hasPossibleProgress, e.skills.length]),
                                a().createElement(
                                    'div',
                                    { className: Xt },
                                    a().createElement(le.animated.div, { className: qt, style: _ }),
                                    a().createElement(
                                        le.animated.div,
                                        { style: r },
                                        a().createElement(Qe.G, {
                                            name: e.icon,
                                            size: Qe.U.c100x60Barracks,
                                            classMix: Yt,
                                            isSkin: e.isInSkin,
                                        }),
                                    ),
                                    a().createElement(le.animated.div, { className: $t, style: E }),
                                    a().createElement(Zt, {
                                        tankman: e,
                                        layoutInfo: i,
                                        isUntrained: u,
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
                                t.specializationLevel === n.specializationLevel &&
                                t.lastPossibleRoleLevel === n.lastPossibleRoleLevel
                            );
                        },
                    ),
                    nn = 'TankmanSlotContent_base_00',
                    an = 'TankmanSlotContent_icon_ef',
                    rn = (0, n.memo)(({ tankman: e, layoutInfo: u, isUntrained: t, isDisabled: n }) =>
                        a().createElement(
                            'div',
                            { className: nn },
                            a().createElement(Qe.G, {
                                name: e.icon,
                                size: Qe.U.c100x60Barracks,
                                classMix: an,
                                isSkin: e.isInSkin,
                            }),
                            a().createElement(Zt, { tankman: e, layoutInfo: u, isUntrained: t, isDisabled: n }),
                        ),
                    ),
                    on = (0, n.memo)(
                        ({
                            roles: e,
                            tankman: u,
                            layoutInfo: t,
                            vehicleName: n,
                            vehicleType: r,
                            isUntrained: i,
                            isDisabled: o,
                            isSelected: s,
                            blinkSlotStyle: l,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: E,
                        }) =>
                            -1 === u.tankmanID
                                ? a().createElement(gu, {
                                      roles: e,
                                      layoutInfo: t,
                                      vehicleName: n,
                                      vehicleType: r,
                                      isDisabled: o,
                                      isSelected: s,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: E,
                                  })
                                : t.isCurrentLayoutQuickTraining
                                  ? a().createElement(tn, {
                                        tankman: u,
                                        isUntrained: i,
                                        blinkStyle: l,
                                        qtTankmanIconStyle: E,
                                        layoutInfo: t,
                                        isDisabled: o,
                                    })
                                  : a().createElement(rn, { tankman: u, layoutInfo: t, isUntrained: i, isDisabled: o }),
                    ),
                    sn = { transform: 'translateX(0rem)' },
                    ln = { transform: 'translateX(41rem)' },
                    cn = { opacity: 0 },
                    En = { opacity: 1 },
                    mn = (0, r.Pi)(
                        ({
                            slotIdx: e,
                            roles: u,
                            tankman: t,
                            layoutInfo: r,
                            isSelected: i,
                            isAnySlotSelected: o,
                            isDisabled: l,
                            blinkSlotStyle: E,
                            blinkTankmanStyle: m,
                            qtTankmanIconStyle: d,
                        }) => {
                            const A = _(),
                                D = A.model,
                                C = A.controls,
                                B = ((e, u) => {
                                    const t = (0, z.Jp)(c.D9),
                                        n = (0, U.f)(
                                            () => t({ action: c.eX.Click, parentScreen: e, item: u }),
                                            [e, u],
                                            c.tL,
                                        );
                                    return (e) => {
                                        e.button === G.RIGHT && n();
                                    };
                                })(D.computes.getUiLoggingParentScreen(), c.x3.SlotContextMenu),
                                g = C.onSlotClick,
                                b = C.onChangeCrewClick,
                                h = D.computes.isChangeCrewButtonVisible(),
                                v = D.computes.isTankmanMode(),
                                p = D.isCrewLocked.get(),
                                w = D.vehicleName.get(),
                                f = D.vehicleType.get(),
                                y = !l && t.isInteractive && (!r.isCurrentLayoutQuickTraining || o),
                                k = (0, n.useCallback)(() => {
                                    y && !v && ((0, se.G)(R.sounds.yes1()), g(e, t.tankmanID));
                                }, [e, t, g, v, y]),
                                S = (0, n.useCallback)(
                                    (u) => {
                                        u.stopPropagation(), p || ((0, se.G)(R.sounds.yes1()), b(e, t.tankmanID));
                                    },
                                    [e, t, b, p],
                                ),
                                x = (0, n.useMemo)(() => ({ tankmanID: t.tankmanID, slotIdx: e }), [t, e]);
                            return a().createElement(
                                Pe,
                                {
                                    args: x,
                                    isEnabled: !l,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    onMouseDown: B,
                                },
                                a().createElement(
                                    'div',
                                    null,
                                    a().createElement(
                                        he,
                                        {
                                            onClick: k,
                                            isSelected: i,
                                            isDisabled: l,
                                            isEmpty: -1 === t.tankmanID,
                                            layoutInfo: r,
                                            isEnabledForMouse: y,
                                        },
                                        a().createElement(
                                            'div',
                                            { className: Ve },
                                            t.hasWarning && a().createElement('div', { className: qe }),
                                            i && a().createElement('div', { className: v ? Ke : Ye }),
                                            a().createElement(
                                                ve,
                                                {
                                                    startState: sn,
                                                    endState: ln,
                                                    layoutInfo: r,
                                                    isPaused: !h,
                                                    className: F()(Xe, h && $e),
                                                    isTankmanMode: v,
                                                },
                                                a().createElement(on, {
                                                    roles: u,
                                                    tankman: t,
                                                    layoutInfo: r,
                                                    isUntrained: t.isUntrained,
                                                    isDisabled: l,
                                                    vehicleName: w,
                                                    vehicleType: f,
                                                    blinkSlotStyle: E,
                                                    blinkTankmanStyle: m,
                                                    qtTankmanIconStyle: d,
                                                    isSelected: i,
                                                }),
                                            ),
                                            h &&
                                                a().createElement(
                                                    'div',
                                                    { onClick: S },
                                                    a().createElement(
                                                        ve,
                                                        {
                                                            startState: cn,
                                                            endState: En,
                                                            layoutInfo: r,
                                                            isPaused: !h,
                                                            className: Ze,
                                                            isTankmanMode: v,
                                                        },
                                                        a().createElement(ze, {
                                                            isSelected: r.isCurrentLayoutMemberChange && i,
                                                            isLocked: p,
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
                    dn = 'SlotsList_base_5f';
                function _n() {
                    return (
                        (_n =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        _n.apply(this, arguments)
                    );
                }
                const An = { transform: 'translateX(0rem)' },
                    Fn = { transform: 'translateX(15rem)' },
                    Dn = (0, r.Pi)(({ layoutInfo: e, isWidgetDisabled: u, className: t }) => {
                        const r = _().model,
                            i = r.computes.isAnyEmptySlots(),
                            o = (0, le.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: Ee.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            s = o[0],
                            l = o[1];
                        (0, n.useEffect)(() => {
                            i ? l.resume() : l.pause();
                        }, [l, i]);
                        const c = (0, le.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0.3 }, { opacity: 1 }],
                                    config: { duration: 400, easing: Ee.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            E = c[0],
                            m = c[1];
                        (0, n.useEffect)(() => {
                            e.isCurrentLayoutQuickTraining ? m.resume() : m.pause();
                        }, [m, e.isCurrentLayoutQuickTraining]);
                        const d = (0, le.useSpring)(() => ({
                                from: An,
                                to: Fn,
                                delay: 200,
                                config: { duration: 300, easing: Ee.ei },
                                pause: !e.isCurrentLayoutQuickTraining,
                            }))[0],
                            A = (0, n.useCallback)(
                                (t) => u || (e.isCurrentLayoutQuickTraining && -1 === t),
                                [u, e.isCurrentLayoutQuickTraining],
                            );
                        return a().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: F()(dn, t) },
                            r.computes.getSlots().map((u, t) =>
                                a().createElement(
                                    mn,
                                    _n({}, u, {
                                        layoutInfo: e,
                                        key: `slot_${t}_${u.tankman.tankmanID}`,
                                        isSelected:
                                            !e.isCurrentLayoutHangar &&
                                            (r.computes.isSlotSelected(u.slotIdx) || r.computes.isTankmanMode()),
                                        isAnySlotSelected: r.computes.isAnySlotSelected(),
                                        isDisabled: A(u.tankman.tankmanID),
                                        blinkSlotStyle: E,
                                        blinkTankmanStyle: s,
                                        qtTankmanIconStyle: d,
                                    }),
                                ),
                            ),
                        );
                    }),
                    Cn = (0, r.Pi)(() => {
                        const e = _().model,
                            u = e.isDisabled.get(),
                            t = e.hasDog.get(),
                            n = e.computes.getLayoutInfo();
                        return a().createElement(
                            'div',
                            { className: re },
                            e.computes.isButtonBarVisible() &&
                                a().createElement(
                                    'div',
                                    { className: ie },
                                    a().createElement(ae, { isWidgetDisabled: u }),
                                ),
                            a().createElement(Dn, { layoutInfo: n, isWidgetDisabled: u, className: oe }),
                            t && a().createElement(Te, { layoutInfo: n, isDisabled: u }),
                        );
                    });
                (0, n.memo)(() =>
                    a().createElement(
                        d,
                        { options: { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') } },
                        a().createElement(Cn, null),
                    ),
                );
            },
            8271: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { HZ: () => n, v$: () => a });
                const n = 'crewPerkGf',
                    a = 'tankman';
            },
            6880: (e, u, t) => {
                'use strict';
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
                'use strict';
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
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            4769: (e, u, t) => {
                'use strict';
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
            3938: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
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
            9426: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'TankmanSkill_base_84',
                    base__big: 'TankmanSkill_base__big_a0',
                    bg: 'TankmanSkill_bg_f9',
                    icon: 'TankmanSkill_icon_1b',
                    icon__irrelevant: 'TankmanSkill_icon__irrelevant_50',
                };
            },
            4723: (e, u, t) => {
                'use strict';
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(5499));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
