(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var a = t(6483),
                    r = t.n(a),
                    i = t(7727),
                    n = t(6179),
                    o = t.n(n),
                    s = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: c,
                    mixClass: _,
                    soundHover: d,
                    soundClick: E,
                    onMouseEnter: F,
                    onMouseMove: A,
                    onMouseDown: m,
                    onMouseUp: b,
                    onMouseLeave: D,
                    onClick: C,
                }) => {
                    const p = (0, n.useRef)(null),
                        g = (0, n.useState)(t),
                        B = g[0],
                        v = g[1],
                        h = (0, n.useState)(!1),
                        f = h[0],
                        y = h[1],
                        S = (0, n.useState)(!1),
                        w = S[0],
                        k = S[1],
                        L = (0, n.useCallback)(() => {
                            c || (p.current && (p.current.focus(), v(!0)));
                        }, [c]),
                        x = (0, n.useCallback)(
                            (e) => {
                                B && null !== p.current && !p.current.contains(e.target) && v(!1);
                            },
                            [B],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                c || (C && C(e));
                            },
                            [c, C],
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                c || (null !== d && (0, i.G)(d), F && F(e), k(!0));
                            },
                            [c, d, F],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                c || (b && b(e), y(!1));
                            },
                            [c, b],
                        ),
                        O = (0, n.useCallback)(
                            (e) => {
                                c || (null !== E && (0, i.G)(E), m && m(e), t && L(), y(!0));
                            },
                            [c, E, m, L, t],
                        ),
                        I = (0, n.useCallback)(
                            (e) => {
                                c || (D && D(e), y(!1));
                            },
                            [c, D],
                        ),
                        W = r()(
                            s.Z.base,
                            s.Z[`base__${a}`],
                            {
                                [s.Z.base__disabled]: c,
                                [s.Z[`base__${u}`]]: u,
                                [s.Z.base__focus]: B,
                                [s.Z.base__highlightActive]: f,
                                [s.Z.base__firstHover]: w,
                            },
                            _,
                        ),
                        $ = r()(s.Z.state, s.Z.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, n.useEffect)(() => {
                            v(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: p,
                                className: W,
                                onMouseEnter: P,
                                onMouseMove: T,
                                onMouseUp: M,
                                onMouseDown: O,
                                onMouseLeave: I,
                                onClick: N,
                            },
                            a !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: s.Z.back }),
                                    o().createElement('span', { className: s.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: $ },
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
                const _ = (0, n.memo)(c);
            },
            2106: (e, u, t) => {
                let a, r;
                t.d(u, { L: () => a, q: () => r }),
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
            7405: (e, u, t) => {
                t.d(u, { F: () => c });
                var a = t(6483),
                    r = t.n(a),
                    i = t(2372),
                    n = t(6179),
                    o = t.n(n),
                    s = t(8460),
                    l = t(329);
                const c = (0, n.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: u,
                        size: t,
                        type: a,
                        value: n,
                        discountValue: c,
                        showPlus: _,
                        isEnough: d = !0,
                        stockBackgroundName: E = l.we.Red,
                        className: F,
                        classNames: A,
                    }) =>
                        o().createElement(
                            'span',
                            { className: r()(s.Z.base, s.Z[`base__${t}`], F) },
                            o().createElement(
                                'span',
                                {
                                    className: r()(
                                        s.Z.value,
                                        s.Z[`value__${a}`],
                                        !d && s.Z.value__notEnough,
                                        null == A ? void 0 : A.value,
                                    ),
                                },
                                _ && n > 0 && '+',
                                o().createElement(i.A, { value: n, format: a === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', {
                                className: r()(s.Z.icon, s.Z[`icon__${a}-${t}`], null == A ? void 0 : A.icon),
                            }),
                            e &&
                                o().createElement(
                                    'span',
                                    {
                                        className: r()(
                                            s.Z.stock,
                                            c && s.Z.stock__indent,
                                            u && s.Z.stock__interactive,
                                            null == A ? void 0 : A.stock,
                                        ),
                                    },
                                    o().createElement('span', {
                                        className: s.Z.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${E})` },
                                    }),
                                    Boolean(c) && c,
                                ),
                        ),
                );
            },
            329: (e, u, t) => {
                let a, r, i;
                t.d(u, { V2: () => r, et: () => a, we: () => i }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(a || (a = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(r || (r = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(i || (i = {}));
            },
            2372: (e, u, t) => {
                t.d(u, { A: () => n });
                var a = t(6179),
                    r = t.n(a),
                    i = t(9916);
                class n extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = i.B3.GOLD;
                        else e = i.B3.INTEGRAL;
                        const u = i.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                n.defaultProps = { format: 'integral' };
            },
            280: (e, u, t) => {
                t.d(u, { z: () => l });
                var a = t(6483),
                    r = t.n(a),
                    i = t(3649),
                    n = t(6179),
                    o = t.n(n),
                    s = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: a = i.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                    const c = l && e ? (0, i.WU)(u, e) : u;
                    return o().createElement(
                        n.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            o().createElement(
                                'div',
                                { className: r()(s.Z.base, t), key: `${u}-${l}` },
                                (0, i.Uw)(u, a, e).map((e, u) =>
                                    o().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            5626: (e, u, t) => {
                t.d(u, { z: () => a.z });
                var a = t(280);
                t(3649);
            },
            3495: (e, u, t) => {
                t.d(u, { Y: () => _ });
                var a = t(5067),
                    r = t(6179),
                    i = t(1043),
                    n = t(5262);
                const o = a.O.client.getSize('rem'),
                    s = o.width,
                    l = o.height,
                    c = Object.assign({ width: s, height: l }, (0, n.T)(s, l, i.j)),
                    _ = (0, r.createContext)(c);
            },
            1039: (e, u, t) => {
                t.d(u, { Z: () => c });
                var a = t(5067),
                    r = t(6536),
                    i = t(6179),
                    n = t.n(i),
                    o = t(3495),
                    s = t(1043),
                    l = t(5262);
                const c = ({ children: e }) => {
                    const u = (0, i.useContext)(o.Y),
                        t = (0, i.useState)(u),
                        c = t[0],
                        _ = t[1],
                        d = (0, i.useCallback)((e, u) => {
                            const t = a.O.view.pxToRem(e),
                                r = a.O.view.pxToRem(u);
                            _(Object.assign({ width: t, height: r }, (0, l.T)(t, r, s.j)));
                        }, []),
                        E = (0, i.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    (0, r.Z)(() => {
                        a.O.client.events.on('clientResized', d), a.O.client.events.on('self.onScaleUpdated', E);
                    }),
                        (0, i.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', d),
                                    a.O.client.events.off('self.onScaleUpdated', E);
                            },
                            [d, E],
                        );
                    const F = (0, i.useMemo)(() => Object.assign({}, c), [c]);
                    return n().createElement(o.Y.Provider, { value: F }, e);
                };
            },
            6010: (e, u, t) => {
                var a = t(6179),
                    r = t(7382),
                    i = t(3495);
                const n = ['children'];
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, n);
                    const o = (0, a.useContext)(i.Y),
                        s = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        _ = o.small,
                        d = o.extraSmall,
                        E = o.extraLargeWidth,
                        F = o.largeWidth,
                        A = o.mediumWidth,
                        m = o.smallWidth,
                        b = o.extraSmallWidth,
                        D = o.extraLargeHeight,
                        C = o.largeHeight,
                        p = o.mediumHeight,
                        g = o.smallHeight,
                        B = o.extraSmallHeight,
                        v = { extraLarge: D, large: C, medium: p, small: g, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && _) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && E) return (0, r.H)(u, t, v);
                        if (t.largeWidth && F) return (0, r.H)(u, t, v);
                        if (t.mediumWidth && A) return (0, r.H)(u, t, v);
                        if (t.smallWidth && m) return (0, r.H)(u, t, v);
                        if (t.extraSmallWidth && b) return (0, r.H)(u, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && p) return u;
                            if (t.smallHeight && g) return u;
                            if (t.extraSmallHeight && B) return u;
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
            7382: (e, u, t) => {
                t.d(u, { H: () => a });
                const a = (e, u, t) =>
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
                t.d(u, { YN: () => r.Y, ZN: () => a.Z });
                t(6010);
                var a = t(1039),
                    r = t(3495);
            },
            1043: (e, u, t) => {
                t.d(u, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                var a;
                function r(e, u, t) {
                    const a = (function (e, u) {
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
                        r = (function (e, u) {
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
                        i = Math.min(a, r);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
                    };
                }
                t.d(u, { T: () => r, u: () => a }),
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
            6373: (e, u, t) => {
                t.d(u, { i: () => l });
                var a = t(2056),
                    r = t(6179),
                    i = t.n(r);
                const n = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
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
                            _ = e.alert,
                            d = e.args,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, n);
                        const F = (0, r.useMemo)(() => {
                            const e = Object.assign({}, d, { body: t, header: l, note: c, alert: _ });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [_, t, l, c, d]);
                        return i().createElement(
                            a.u,
                            o(
                                {
                                    contentId:
                                        ((A = null == d ? void 0 : d.hasHtmlContent),
                                        A ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: F,
                                },
                                E,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                t.d(u, { u: () => l });
                var a = t(7902),
                    r = t(9916),
                    i = t(6179);
                const n = [
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
                const s = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            E = e.ignoreShowDelay,
                            F = void 0 !== E && E,
                            A = e.ignoreMouseClick,
                            m = void 0 !== A && A,
                            b = e.decoratorId,
                            D = void 0 === b ? 0 : b,
                            C = e.isEnabled,
                            p = void 0 === C || C,
                            g = e.targetId,
                            B = void 0 === g ? 0 : g,
                            v = e.onShow,
                            h = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, n);
                        const y = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, i.useMemo)(() => B || (0, a.F)().resId, [B]),
                            w = (0, i.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (s(t, D, { isMouseEvent: !0, on: !0, arguments: o(r) }, S),
                                    v && v(),
                                    (y.current.isVisible = !0));
                            }, [t, D, r, S, v]),
                            k = (0, i.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        s(t, D, { on: !1 }, S),
                                        y.current.isVisible && h && h(),
                                        (y.current.isVisible = !1);
                                }
                            }, [t, D, S, h]),
                            L = (0, i.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(y.current.prevTarget) && k();
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
                                !1 === p && k();
                            }, [p, k]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return p
                            ? (0, i.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(w, F ? 100 : 400)),
                                                      l && l(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              k(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === m && k(), null == d || d(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === m && k(), null == _ || _(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : u;
                        var x;
                    };
            },
            9338: (e, u, t) => {
                t.d(u, { Zj: () => a });
                function a(e) {
                    return e.filter((e) => Boolean(e)).map(({ value: e }) => e);
                }
            },
            7044: (e, u, t) => {
                t(3649), t(9916);
                var a = t(8613);
                Date.now(), a.Ew.getRegionalDateTime, a.Ew.getFormattedDateTime;
            },
            5067: (e, u, t) => {
                t.d(u, { O: () => Y });
                var a = {};
                t.r(a),
                    t.d(a, { mouse: () => F, off: () => d, on: () => _, onResize: () => l, onScaleUpdated: () => c });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => a,
                        getMouseGlobalPosition: () => m,
                        getSize: () => A,
                        graphicsQuality: () => b,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => C, getTextureUrl: () => D });
                var n = {};
                function o(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(n),
                    t.d(n, {
                        addModelObserver: () => N,
                        addPreloadTexture: () => k,
                        children: () => i,
                        displayStatus: () => p,
                        displayStatusIs: () => q,
                        events: () => g,
                        extraSize: () => z,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => O,
                        getBrowserTexturePath: () => x,
                        getDisplayStatus: () => j,
                        getScale: () => I,
                        getSize: () => R,
                        getViewGlobalPosition: () => M,
                        isEventHandled: () => V,
                        isFocused: () => U,
                        pxToRem: () => W,
                        remToPx: () => $,
                        resize: () => T,
                        sendEvent: () => w,
                        setAnimateWindow: () => H,
                        setEventHandled: () => G,
                        setInputPaddingsRem: () => L,
                        setSidePaddingsRem: () => P,
                        whenTutorialReady: () => K,
                    });
                const l = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    _ = (e, u) => engine.on(e, u),
                    d = (e, u) => engine.off(e, u),
                    E = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const F = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && s(!1);
                    }
                    function t() {
                        e.enabled && s(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : s(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${u}`,
                                        n = E[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, o),
                                        a(),
                                        () => {
                                            r &&
                                                (n(),
                                                window.removeEventListener(i, o),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
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
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
                        },
                        enableOutside() {
                            e.enabled && s(!0);
                        },
                        disableOutside() {
                            e.enabled && s(!1);
                        },
                    });
                })();
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function D(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function C(e, u, t) {
                    return `url(${D(e, u, t)})`;
                }
                const p = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    g = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    B = ['args'];
                const v = 2,
                    h = 16,
                    f = 32,
                    y = 64,
                    S = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, B);
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
                    w = {
                        close(e) {
                            S('popover' === e ? v : f);
                        },
                        minimize() {
                            S(y);
                        },
                        move(e) {
                            S(h, { isMouseEvent: !0, on: e });
                        },
                    };
                function k(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function x(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function N(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function P(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function R(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function T(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function M(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: $(u.x), y: $(u.y) };
                }
                function O() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function I() {
                    return viewEnv.getScale();
                }
                function W(e) {
                    return viewEnv.pxToRem(e);
                }
                function $(e) {
                    return viewEnv.remToPx(e);
                }
                function H(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function U() {
                    return viewEnv.isFocused();
                }
                function G() {
                    return viewEnv.setEventHandled();
                }
                function V() {
                    return viewEnv.isEventHandled();
                }
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function j() {
                    return viewEnv.getShowingStatus();
                }
                const q = Object.keys(p).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === p[u]), e), {}),
                    z = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    K = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : g.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Y = { view: n, client: r };
            },
            7902: (e, u, t) => {
                t.d(u, { F: () => a });
                const a = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        a = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (a = window.subViews[t].id)),
                        { caller: t, stack: u, resId: a }
                    );
                };
            },
            8071: (e, u, t) => {
                t.d(u, { M: () => a });
                const a = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
            },
            2344: (e, u, t) => {
                t.d(u, { D9: () => i, DA: () => r.D, tT: () => r.t });
                var a = t(2790),
                    r = (t(3469), t(2133), t(579), t(5360));
                t(9056);
                const i = a.Z;
            },
            6536: (e, u, t) => {
                t.d(u, { Z: () => r });
                var a = t(6179);
                const r = (e) => {
                    const u = (0, a.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            3469: (e, u, t) => {
                t(7044), t(6179);
            },
            2133: (e, u, t) => {
                t(6179);
            },
            9924: (e, u, t) => {
                t.d(u, { Z: () => l });
                var a = t(6483),
                    r = t.n(a),
                    i = t(7739),
                    n = t(5262),
                    o = t(6179),
                    s = t(3649);
                function l(e, u, t) {
                    const a = (0, o.useContext)(i.YN);
                    let l = Object.entries(a).filter(([e, u]) => !0 === u && e in n.u);
                    return (
                        t && (l = l.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const a = l.map((e) =>
                                r()(u[((e, u) => e + '__' + u)(t, e[0])], u[((e, u) => e + (0, s.e)(u))(t, e[0])]),
                            );
                            return (e[t] = r()(u[t], ...a)), e;
                        }, {})
                    );
                }
            },
            5360: (e, u, t) => {
                t.d(u, { D: () => c, t: () => _ });
                var a = t(7902),
                    r = t(8071),
                    i = t(6536),
                    n = t(9916),
                    o = t(7332),
                    s = t(6179);
                const l = n.Sw.instance;
                let c;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(c || (c = {}));
                const _ = (e = 'model', u = c.Deep) => {
                    const t = (0, s.useState)(0),
                        n = (t[0], t[1]),
                        _ = (0, s.useMemo)(() => (0, a.F)(), []),
                        d = _.caller,
                        E = _.resId,
                        F = (0, s.useMemo)(
                            () => (window.__feature && window.__feature !== d ? `subViews.${d}.${e}` : e),
                            [d, e],
                        ),
                        A = (0, s.useState)(() =>
                            ((e) => {
                                const u = (0, r.M)(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return (0, o.os)(u) ? u.value : u;
                            })((0, o.Gd)(F)),
                        ),
                        m = A[0],
                        b = A[1],
                        D = (0, s.useRef)(-1);
                    return (
                        (0, i.Z)(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? c.Deep : c.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== c.None)
                            ) {
                                const t = (e) => {
                                        (0, o.kJ)(e) && u === c.Deep
                                            ? (e === m && n((e) => e + 1), b(e))
                                            : b(Object.assign([], e));
                                    },
                                    a = (0, o.U0)(e);
                                D.current = l.addCallback(a, t, E, u === c.Deep);
                            }
                        }),
                        (0, s.useEffect)(() => {
                            if (u !== c.None)
                                return () => {
                                    l.removeCallback(D.current, E);
                                };
                        }, [E, u]),
                        m
                    );
                };
            },
            9056: (e, u, t) => {
                var a = t(9916);
                t(6179);
                a.Sw.instance;
            },
            2790: (e, u, t) => {
                t.d(u, { Z: () => r });
                var a = t(6179);
                const r = (e, u) => {
                    const t = (0, a.useRef)();
                    return (
                        (0, a.useEffect)(() => {
                            (u && !u(e)) || (t.current = e);
                        }, [u, e]),
                        t.current
                    );
                };
            },
            579: (e, u, t) => {
                t(5067), t(6179);
            },
            5521: (e, u, t) => {
                let a, r;
                t.d(u, { n: () => a }),
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
            9690: (e, u, t) => {
                t.d(u, { HG: () => o, cg: () => i, qP: () => n });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) (u += a[t]), (e -= r[t]);
                    return u;
                }
                const n = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) => (n ? `${e}` : i(e));
            },
            7727: (e, u, t) => {
                function a(e) {
                    engine.call('PlaySound', e);
                }
                t.d(u, { G: () => a });
            },
            3649: (e, u, t) => {
                t.d(u, { Uw: () => A, WU: () => i, e: () => o, uF: () => n, v2: () => r });
                var a = t(1281);
                let r;
                function i(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function n(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(r || (r = {}));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    c = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    _ = (e, u, t = r.left) => e.split(u).reduce(t === r.left ? l : c, []),
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    F = (e, u = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(t)) return d(e);
                        if ('ja' === t) {
                            return (0, a.D4)()
                                .parse(e)
                                .map((e) => s(e));
                        }
                        return ((e, u = r.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                i = s(e);
                            return _(i, /( )/, u).forEach((e) => (t = t.concat(_(e, a, r.left)))), t;
                        })(e, u);
                    },
                    A = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : F(e, u)));
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => i });
                var a = t(5067);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(e, t, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const i = r;
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
                t.d(u, { Sw: () => i.Z, B3: () => s, Gr: () => l, Z5: () => n.Z5, B0: () => o, ry: () => b });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                var i = t(1358);
                var n = t(8613);
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
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    E = t(5067);
                const F = ['args'];
                function A(e, u, t, a, r, i, n) {
                    try {
                        var o = e[i](n),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(a, r);
                }
                const m = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                    return new Promise(function (a, r) {
                                        var i = e.apply(u, t);
                                        function n(e) {
                                            A(i, a, r, n, o, 'next', e);
                                        }
                                        function o(e) {
                                            A(i, a, r, n, o, 'throw', e);
                                        }
                                        n(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, F);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    C = () => D(o.CLOSE),
                    p = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var g = t(7572);
                const B = r.instance,
                    v = {
                        DataTracker: i.Z,
                        ViewModel: g.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (e) => D(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => D(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), i) => {
                            const n = E.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                _ = s.width,
                                d = s.height,
                                F = {
                                    x: E.O.view.pxToRem(l) + n.x,
                                    y: E.O.view.pxToRem(c) + n.y,
                                    width: E.O.view.pxToRem(_),
                                    height: E.O.view.pxToRem(d),
                                };
                            D(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: m(F),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, C);
                        },
                        handleViewEvent: D,
                        onBindingsReady: b,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const r = Object.prototype.toString.call(u[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < r.length; u++) t[a].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: n.Z5,
                        UserLocale: n.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, u, t) => {
                t.d(u, { Ew: () => i, Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    i = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            7332: (e, u, t) => {
                t.d(u, { Gd: () => s, U0: () => l, kJ: () => n, os: () => i });
                var a = t(7902),
                    r = t(8071);
                const i = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    n = (e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name,
                    o = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    s = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const a = (0, r.M)(`${e}.${t}`, window);
                                return i(a) ? u(e, t, a) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    l = (e) => {
                        const u = ((e) => {
                                const u = (0, a.F)(),
                                    t = u.caller,
                                    r = u.resId,
                                    i = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: i, modelPath: o(i, e || ''), resId: r };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, a) => {
                                    const n = (0, r.M)(o(t, `${u}.${a}`), window);
                                    return i(n) ? (e.push(n.id), `${u}.${a}.value`) : (e.push(a), `${u}.${a}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
            },
            2007: (e, u, t) => {
                var a = t(6179),
                    r = t.n(a),
                    i = t(493),
                    n = t.n(i),
                    o = t(7739),
                    s = t(2344),
                    l = t(5067),
                    c = t(5521);
                t(9916);
                const _ = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function d(e = c.n.NONE, u = _, t = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== c.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!r && l.O.view.isEventHandled()) return;
                                l.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, r]);
                }
                var E = t(9924);
                var F = t(2569),
                    A = t(8136),
                    m = t(583),
                    b = t(3457);
                const D = 'CompareControl_base_cd',
                    C = 'CompareControl_buttonWrapper_a8',
                    p = 'CompareControl_flexboxPlaceholder_a2',
                    g = 'CompareControl_buttonMix_99',
                    B = R.strings.veh_post_progression.vehPostProgressionCmpView.compareControl.button.label,
                    v = (0, a.memo)(() => {
                        const e = (0, s.tT)('model.compareControl'),
                            u = e.onResetAction,
                            t = e.onCancelAction,
                            i = e.onApplyAction,
                            n = e.hasChanges,
                            o = e.hasInitChanges,
                            l = (0, a.useCallback)(() => u(), [u]),
                            c = (0, a.useCallback)(() => t(), [t]),
                            _ = (0, a.useCallback)(() => i(), [i]),
                            d = !n,
                            E = !o;
                        return r().createElement(
                            'div',
                            { className: D },
                            r().createElement(
                                'div',
                                { className: C },
                                r().createElement(
                                    b.u5,
                                    { size: b.qE.medium, type: b.L$.secondary, mixClass: g, onClick: l, disabled: E },
                                    B.reset(),
                                ),
                            ),
                            r().createElement('div', { className: p }),
                            r().createElement(
                                'div',
                                { className: C },
                                r().createElement(
                                    b.u5,
                                    { size: b.qE.medium, type: b.L$.secondary, mixClass: g, onClick: c },
                                    B.cancel(),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: C },
                                r().createElement(
                                    b.u5,
                                    { size: b.qE.medium, type: b.L$.primary, mixClass: g, onClick: _, disabled: d },
                                    B.apply(),
                                ),
                            ),
                        );
                    });
                var h = t(8247);
                const f = {
                        base: 'App_base_cc',
                        base__small: 'App_base__small_fb',
                        base__medium: 'App_base__medium_bd',
                        base__large: 'App_base__large_2a',
                        base__extraLarge: 'App_base__extraLarge_f8',
                        gridWrapper: 'App_gridWrapper_6a',
                    },
                    y = () => {
                        const e = (0, s.tT)('model'),
                            u = e.progressionState,
                            t = e.progressionAvailability,
                            i = e.onExitAction,
                            n = e.onViewRendered,
                            o = e.vehicleRole;
                        var l;
                        (l = i),
                            d(c.n.ESCAPE, l),
                            (0, a.useEffect)(
                                () =>
                                    ((e) => {
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
                                    })(n),
                                [n],
                            );
                        const _ = (0, a.useMemo)(
                                () => ({
                                    progressionType: h.e.Comparison,
                                    progressionState: u,
                                    progressionAvailability: t,
                                }),
                                [u, t],
                            ),
                            b = (0, E.Z)(['base'], f);
                        return r().createElement(
                            F.m.Provider,
                            { value: _ },
                            r().createElement(
                                'div',
                                { className: b.base },
                                r().createElement(
                                    'div',
                                    { className: f.gridWrapper },
                                    r().createElement(A.r, null),
                                    r().createElement(m.D, { vehicleRole: o }),
                                ),
                                r().createElement(v, null),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    n().render(
                        r().createElement(o.ZN, null, r().createElement(y, null)),
                        document.getElementById('root'),
                    );
                });
            },
            8434: (e, u, t) => {
                t.d(u, { r: () => l });
                var a = t(6179),
                    r = t.n(a),
                    i = t(9916),
                    n = t(1532);
                const o = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    s = ({ values: e, localeName: u }) => {
                        const t = e.filter(({ value: { valueKey: e } = {} }) => e === u).pop();
                        if (!t) return o;
                        const a = t.value,
                            r = a.value,
                            i = a.valueType,
                            s = a.valueKey,
                            l = i === n.W ? 100 * (r - 1) : r;
                        return { calcValue: l, isPositive: l > 0, valueKey: s };
                    },
                    l = ({
                        isUnitVisible: e = !0,
                        bonus: u,
                        classes: t = {},
                        isSpaceVisible: a = !0,
                        keepPositive: n = !1,
                    }) => {
                        const o = ((e) => {
                                const u = s(e),
                                    t = u.calcValue,
                                    a = u.isPositive,
                                    r = u.valueKey;
                                return `${a ? '+' : ''}${i.Z5.getRealFormat(t, i.Gr.WO_ZERO_DIGITS)}${R.strings.tank_setup.kpi.bonus.valueTypes.$dyn(r) || '%'}`;
                            })(u),
                            l = ((e, u = !1) =>
                                u || s(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(u, n);
                        return r().createElement(
                            'span',
                            { className: t.base },
                            e && r().createElement('span', { className: t.unit }, o),
                            e && a && ' ',
                            r().createElement('span', { className: t.text }, l),
                        );
                    };
            },
            8136: (e, u, t) => {
                t.d(u, { r: () => qu });
                var a = t(9338),
                    r = t(2344),
                    i = t(6179),
                    n = t.n(i);
                let o;
                !(function (e) {
                    (e.Modification = 'modification'),
                        (e.PairModification = 'pairModification'),
                        (e.ModificationWithFeature = 'modificationWithFeature');
                })(o || (o = {}));
                var s = t(2569),
                    l = t(9924);
                let c, _;
                !(function (e) {
                    (e.Persistent = 'persistent'), (e.Selectable = 'selectable'), (e.Changeable = 'changeable');
                })(c || (c = {})),
                    (function (e) {
                        (e.Restricted = 'restricted'),
                            (e.UnavailableLocked = 'unavailableLocked'),
                            (e.AvailablePurchase = 'availablePurchase'),
                            (e.Received = 'received');
                    })(_ || (_ = {}));
                var d = t(6483),
                    E = t.n(d),
                    F = t(3649),
                    A = t(2056),
                    m = t(7739);
                const b = () => (0, i.useContext)(m.YN);
                var D = t(3457),
                    C = t(7727),
                    p = t(2106);
                const g = {
                    base: 'ToggleButton_base_2c',
                    base__button: 'ToggleButton_base__button_cb',
                    base__active: 'ToggleButton_base__active_a6',
                    base__slot: 'ToggleButton_base__slot_98',
                    base__disabled: 'ToggleButton_base__disabled_19',
                    texture: 'ToggleButton_texture_f1',
                    background: 'ToggleButton_background_ef',
                    background__main: 'ToggleButton_background__main_68',
                    background__primary: 'ToggleButton_background__primary_a9',
                    background__primaryGreen: 'ToggleButton_background__primaryGreen_4f',
                    background__primaryRed: 'ToggleButton_background__primaryRed_ca',
                    background__secondary: 'ToggleButton_background__secondary_b2',
                    background__ghost: 'ToggleButton_background__ghost_d6',
                    content: 'ToggleButton_content_63',
                    overlay: 'ToggleButton_overlay_23',
                    indicator: 'ToggleButton_indicator_a7',
                };
                let B;
                !(function (e) {
                    (e.Button = 'button'), (e.Slot = 'slot');
                })(B || (B = {}));
                const v = () => {},
                    h = n().memo(
                        ({
                            active: e = !1,
                            className: u,
                            children: t,
                            toggleType: a = B.Button,
                            toggleButtonType: r = p.L.secondary,
                            onClick: o,
                            disabled: s,
                            soundClick: l = 'play',
                            soundHover: c = 'highlight',
                            onMouseEnter: _ = v,
                            onMouseDown: d = v,
                            onMouseUp: F = v,
                            onMouseLeave: A = v,
                        }) => {
                            const m = (0, i.useCallback)(
                                    (u) => {
                                        s || ((0, C.G)(l), o && o(u, e));
                                    },
                                    [o, s, e, l],
                                ),
                                b = (0, i.useCallback)(
                                    (e) => {
                                        s || ((0, C.G)(c), _ && _(e));
                                    },
                                    [s, c, _],
                                ),
                                D = (0, i.useCallback)(
                                    (e) => {
                                        s ||
                                            ((1 !== e.button && 2 !== e.button) || (null !== l && (0, C.G)(l)),
                                            d && d(e));
                                    },
                                    [d, s, l],
                                ),
                                h = E()(g.base, u, g[`base__${a}`], e && g.base__active, s && g.base__disabled);
                            return n().createElement(
                                'div',
                                {
                                    className: h,
                                    onClick: m,
                                    onMouseEnter: b,
                                    onMouseUp: s ? v : F,
                                    onMouseDown: D,
                                    onMouseLeave: s ? v : A,
                                },
                                n().createElement('div', { className: g.content }, t),
                                a === B.Button &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', {
                                            className: E()(g.background, g[`background__${r}`]),
                                        }),
                                        n().createElement('div', { className: g.texture }),
                                    ),
                                n().createElement('div', { className: g.overlay }),
                                n().createElement('div', { className: g.indicator }),
                            );
                        },
                    );
                var f = t(6373),
                    y = t(5634);
                const S = {
                    base: 'FeatureButton_base_f5',
                    base__actionStateSelectable: 'FeatureButton_base__actionStateSelectable_a8',
                    base__stepStateReceived: 'FeatureButton_base__stepStateReceived_b6',
                    base__actionStateChangeable: 'FeatureButton_base__actionStateChangeable_9d',
                    buttonWrapper: 'FeatureButton_buttonWrapper_07',
                    buttonWrapper__select: 'FeatureButton_buttonWrapper__select_e8',
                    buttonWrapper__change: 'FeatureButton_buttonWrapper__change_8e',
                    base__actionStatePersistent: 'FeatureButton_base__actionStatePersistent_16',
                    buttonWrapper__persistent: 'FeatureButton_buttonWrapper__persistent_f0',
                    buttonLabelWrapper: 'FeatureButton_buttonLabelWrapper_9f',
                    buttonMix: 'FeatureButton_buttonMix_97',
                };
                const w = R.strings.veh_post_progression.vehPostProgressionView.grid.featureButton.label,
                    k = R.strings.veh_post_progression.vehPostProgressionView.grid.featureButton.tooltip,
                    L = E()(S.buttonWrapper, S.buttonWrapper__select),
                    x = E()(S.buttonWrapper, S.buttonWrapper__change),
                    N = E()(S.buttonWrapper, S.buttonWrapper__persistent),
                    P = (0, i.memo)(
                        ({
                            id: e,
                            stepState: u,
                            actionState: t,
                            isDisabled: a,
                            isPrebattleSwitchEnabled: o,
                            isPrebattleSwitchLocked: _,
                            featureBgImageName: d,
                        }) => {
                            const A = (0, r.tT)('model.grid', r.DA.None),
                                m = A.onMainStepActionClick,
                                b = A.onPrebattleSwitchToggleClick,
                                C = t === c.Persistent,
                                p = (0, i.useCallback)(() => {
                                    b({ stepID: e, active: !o });
                                }, [o, b, e]),
                                g = (0, i.useCallback)(() => m({ stepID: e }), [m, e]),
                                B = (0, l.Z)(['base'], S),
                                v = E()(
                                    B.base,
                                    S[`base__stepState${(0, F.e)(u)}`],
                                    S[`base__actionState${(0, F.e)(t)}`],
                                ),
                                P = (0, i.useContext)(s.m).progressionAvailability,
                                R = a || P !== y.G.Available,
                                T = C ? k.prebattleSwitch.header() : '',
                                M = (function (e, u, t) {
                                    return e
                                        ? (0, F.WU)(k.prebattleSwitch.body.$dyn(u), {
                                              tip: k.prebattleSwitch.bodyTip(),
                                          })
                                        : k.$dyn(t);
                                })(C, d, P),
                                O = C || (Boolean(M) && R);
                            return n().createElement(
                                f.i,
                                { header: T, body: M, isEnabled: O },
                                n().createElement(
                                    'div',
                                    { className: v },
                                    n().createElement(
                                        'div',
                                        { className: L },
                                        n().createElement(
                                            D.u5,
                                            {
                                                onClick: g,
                                                size: D.qE.extraSmall,
                                                type: D.L$.main,
                                                disabled: R,
                                                mixClass: S.buttonMix,
                                            },
                                            n().createElement('span', { className: S.buttonLabelWrapper }, w.select()),
                                        ),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: x },
                                        n().createElement(
                                            D.u5,
                                            {
                                                onClick: g,
                                                size: D.qE.extraSmall,
                                                type: D.L$.primary,
                                                disabled: R,
                                                mixClass: S.buttonMix,
                                            },
                                            n().createElement('span', { className: S.buttonLabelWrapper }, w.change()),
                                        ),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: N },
                                        n().createElement(
                                            h,
                                            { active: o && !R, onClick: p, className: S.buttonMix, disabled: R || _ },
                                            n().createElement(
                                                'span',
                                                { className: S.buttonLabelWrapper },
                                                w.prebattleSwitch(),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    );
                var T = t(9690);
                const M = ['children'];
                function O() {
                    return (
                        (O =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        O.apply(this, arguments)
                    );
                }
                const I = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (t = i[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, M);
                    return n().createElement(
                        A.u,
                        O(
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
                function W() {
                    return (
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                }
                const $ = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const a = n().createElement('div', { className: t }, e);
                    if (u.header || u.body) return n().createElement(f.i, u, a);
                    const r = u.contentId;
                    return r ? n().createElement(A.u, W({}, u, { contentId: r }), a) : n().createElement(I, u, a);
                };
                let H, U, G, V;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Special = 'special'), (e.None = 'none');
                })(H || (H = {})),
                    (function (e) {
                        (e.Normal = 'normal'),
                            (e.Special = 'special'),
                            (e.SpecialReceived = 'specialReceived'),
                            (e.Unavailable = 'unavailable');
                    })(U || (U = {})),
                    (function (e) {
                        (e.Unlocked = 'unlocked'), (e.Locked = 'locked'), (e.Unavailable = 'unavailable');
                    })(G || (G = {})),
                    (function (e) {
                        (e.Normal = 'normal'), (e.Unavailable = 'unavailable'), (e.None = 'none');
                    })(V || (V = {}));
                const Z = {
                        base: 'UnlockLevel_base_4b',
                        background: 'UnlockLevel_background_90',
                        background__normal: 'UnlockLevel_background__normal_7d',
                        base__backgroundTypeNormal: 'UnlockLevel_base__backgroundTypeNormal_0b',
                        background__special: 'UnlockLevel_background__special_7a',
                        base__backgroundTypeSpecial: 'UnlockLevel_base__backgroundTypeSpecial_57',
                        border: 'UnlockLevel_border_03',
                        border__normal: 'UnlockLevel_border__normal_1f',
                        base__borderTypeNormal: 'UnlockLevel_base__borderTypeNormal_d8',
                        border__special: 'UnlockLevel_border__special_df',
                        base__borderTypeSpecial: 'UnlockLevel_base__borderTypeSpecial_5a',
                        border__specialReceived: 'UnlockLevel_border__specialReceived_7e',
                        base__borderTypeSpecialReceived: 'UnlockLevel_base__borderTypeSpecialReceived_e9',
                        border__unavailable: 'UnlockLevel_border__unavailable_66',
                        base__borderTypeUnavailable: 'UnlockLevel_base__borderTypeUnavailable_ff',
                        level: 'UnlockLevel_level_cf',
                        base__numberTypeLocked: 'UnlockLevel_base__numberTypeLocked_11',
                        base__numberTypeUnavailable: 'UnlockLevel_base__numberTypeUnavailable_1b',
                        lock: 'UnlockLevel_lock_0b',
                        base__lockTypeUnavailable: 'UnlockLevel_base__lockTypeUnavailable_b3',
                        base__lockTypeNone: 'UnlockLevel_base__lockTypeNone_b3',
                        tooltipArea: 'UnlockLevel_tooltipArea_bc',
                    },
                    j = R.strings.tooltips.vehPostProgressionView.unlockLevel,
                    q = (0, i.memo)(
                        ({
                            unlockLevel: e,
                            backgroundType: u = H.Normal,
                            borderType: t = U.Normal,
                            numberType: a = G.Unlocked,
                            lockType: r = V.None,
                            isTooltipEnabled: o = !0,
                        }) => {
                            const s = E()(
                                    Z.base,
                                    Z[`base__backgroundType${(0, F.e)(u)}`],
                                    Z[`base__borderType${(0, F.e)(t)}`],
                                    Z[`base__numberType${(0, F.e)(a)}`],
                                    Z[`base__lockType${(0, F.e)(r)}`],
                                ),
                                l = (0, i.useMemo)(
                                    () => ({ header: j.header(), body: (0, F.WU)(j.body(), { level: (0, T.HG)(e) }) }),
                                    [e],
                                );
                            return n().createElement(
                                'div',
                                { className: s },
                                Object.values(H)
                                    .filter((e) => e !== H.None)
                                    .map((e) =>
                                        n().createElement('div', {
                                            key: e,
                                            className: E()(Z.background, Z[`background__${e}`]),
                                        }),
                                    ),
                                Object.values(U).map((e) =>
                                    n().createElement('div', { key: e, className: E()(Z.border, Z[`border__${e}`]) }),
                                ),
                                n().createElement('div', { className: Z.level }, (0, T.HG)(e)),
                                n().createElement('div', { className: Z.lock }),
                                o &&
                                    n().createElement(
                                        $,
                                        { tooltipArgs: l },
                                        n().createElement('div', { className: Z.tooltipArea }),
                                    ),
                            );
                        },
                    ),
                    z = (0, i.memo)(({ stepState: e, unlockLevel: u, isDisabled: t }) => {
                        const a = ((e, u, t) =>
                                e !== _.Received || u !== y.G.Available || t ? U.Special : U.SpecialReceived)(
                                e,
                                (0, i.useContext)(s.m).progressionAvailability,
                                t,
                            ),
                            r = e === _.Received ? V.None : V.Normal,
                            o = e === _.Received ? G.Unlocked : G.Locked;
                        return n().createElement(q, {
                            unlockLevel: u,
                            backgroundType: H.Special,
                            borderType: a,
                            numberType: o,
                            lockType: r,
                            isTooltipEnabled: e !== _.Received,
                        });
                    });
                var K = t(9953),
                    Y = t(8475);
                let X;
                !(function (e) {
                    (e.Firepower = 'firepower'),
                        (e.Survivability = 'survivability'),
                        (e.Mobility = 'mobility'),
                        (e.Stealth = 'stealth'),
                        (e.None = 'none');
                })(X || (X = {}));
                const Q = 'RoleCategoryIcon_base_1c',
                    J = (0, i.memo)(({ roleCategory: e }) => {
                        const u = e !== X.None,
                            t = (0, i.useMemo)(
                                () => ({
                                    backgroundImage: u
                                        ? `url(${R.images.gui.maps.icons.specialization.$dyn(`medium_${e}_on`)})`
                                        : '',
                                }),
                                [u, e],
                            );
                        return n().createElement('div', { className: Q, style: t });
                    }),
                    ee = {
                        base: 'FeatureRoleCategoryIcon_base_4e',
                        underlay: 'FeatureRoleCategoryIcon_underlay_d6',
                        base__actionStateChangeable: 'FeatureRoleCategoryIcon_base__actionStateChangeable_95',
                        base__stepStateReceived: 'FeatureRoleCategoryIcon_base__stepStateReceived_f3',
                        wrapper: 'FeatureRoleCategoryIcon_wrapper_38',
                        wrapper__selected: 'FeatureRoleCategoryIcon_wrapper__selected_1a',
                        base__disabled: 'FeatureRoleCategoryIcon_base__disabled_55',
                        animation__enterActive: 'FeatureRoleCategoryIcon_animation__enterActive_67',
                        'opacity-animation': 'FeatureRoleCategoryIcon_opacity-animation_1e',
                        animation__exitActive: 'FeatureRoleCategoryIcon_animation__exitActive_43',
                    },
                    ue = { enterActive: ee.animation__enterActive, exitActive: ee.animation__exitActive },
                    te = (0, i.memo)(({ stepState: e, actionState: u, roleCategory: t = X.None, isDisabled: a }) => {
                        const r = (0, i.useContext)(s.m).progressionAvailability,
                            o = E()(
                                ee.base,
                                ee[`base__stepState${(0, F.e)(e)}`],
                                ee[`base__actionState${(0, F.e)(u)}`],
                                ee[`base__progressionAvailability${(0, F.e)(r)}`],
                                a && ee.base__disabled,
                            ),
                            l = (0, i.useCallback)(() => {
                                (0, C.G)('ev_pp_role_slot_selection');
                            }, []);
                        return n().createElement(
                            'div',
                            { className: o },
                            n().createElement('div', { className: ee.underlay }),
                            n().createElement(
                                'div',
                                { className: `${ee.wrapper} ${ee.wrapper__selected}` },
                                n().createElement(
                                    K.Z,
                                    { mode: 'out-in' },
                                    n().createElement(
                                        Y.Z,
                                        { key: t, timeout: 200, classNames: ue, onEnter: l },
                                        n().createElement(J, { roleCategory: t }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ae = 'AccentCorners_base_99',
                    re = 'AccentCorners_corner_49',
                    ie = 'AccentCorners_corner__topLeft_63',
                    ne = 'AccentCorners_corner__topRight_f6',
                    oe = 'AccentCorners_corner__bottomRight_09',
                    se = 'AccentCorners_corner__bottomLeft_1f',
                    le = (0, i.memo)(() =>
                        n().createElement(
                            'div',
                            { className: ae },
                            n().createElement('div', { className: `${re} ${ie}` }),
                            n().createElement('div', { className: `${re} ${ne}` }),
                            n().createElement('div', { className: `${re} ${oe}` }),
                            n().createElement('div', { className: `${re} ${se}` }),
                        ),
                    ),
                    ce = {
                        base: 'Feature_base_26',
                        base__medium: 'Feature_base__medium_bd',
                        base__large: 'Feature_base__large_17',
                        base__extraLarge: 'Feature_base__extraLarge_d1',
                        base__interactiveStateSelectedFaded: 'Feature_base__interactiveStateSelectedFaded_6b',
                        base__interactiveStateFaded: 'Feature_base__interactiveStateFaded_84',
                        content: 'Feature_content_37',
                        roleCategoryIconWrapper: 'Feature_roleCategoryIconWrapper_85',
                        featureButton: 'Feature_featureButton_4b',
                        glow: 'Feature_glow_64',
                        base__actionStateSelectable: 'Feature_base__actionStateSelectable_db',
                        base__stepStateReceived: 'Feature_base__stepStateReceived_44',
                        base__progressionAvailabilityAvailable: 'Feature_base__progressionAvailabilityAvailable_5d',
                        base__disabled: 'Feature_base__disabled_e3',
                        underlay: 'Feature_underlay_4c',
                        base__interactiveStateSelectedHighlighted:
                            'Feature_base__interactiveStateSelectedHighlighted_4b',
                        outline: 'Feature_outline_09',
                        accentCornersWrapper: 'Feature_accentCornersWrapper_32',
                        interactiveHighlight: 'Feature_interactiveHighlight_ff',
                        base__interactiveStateSelected: 'Feature_base__interactiveStateSelected_81',
                        image: 'Feature_image_94',
                        disabledPattern: 'Feature_disabledPattern_d0',
                        selectedRoleSlotPattern: 'Feature_selectedRoleSlotPattern_9b',
                        base__actionStateChangeable: 'Feature_base__actionStateChangeable_4f',
                        topHighlight: 'Feature_topHighlight_9e',
                        topHighlight__disabled: 'Feature_topHighlight__disabled_f8',
                        featureUnlockLevel: 'Feature_featureUnlockLevel_68',
                        alertImage: 'Feature_alertImage_42',
                    },
                    _e = R.images.gui.maps.icons.vehPostProgression.actionItems.modificationWithFeature,
                    de = (0, i.memo)(
                        ({
                            id: e,
                            isDisabled: u,
                            stepState: t,
                            actionState: a,
                            unlockLevel: r,
                            interactiveState: o,
                            roleCategory: _,
                            imageResName: d,
                            tooltipContentId: m,
                            isPrebattleSwitchEnabled: D,
                            isPrebattleSwitchLocked: C,
                        }) => {
                            const p = (0, i.useContext)(s.m).progressionAvailability,
                                g = (0, l.Z)(['base'], ce),
                                B = b(),
                                v = E()(
                                    g.base,
                                    ce[`base__stepState${(0, F.e)(t)}`],
                                    ce[`base__actionState${(0, F.e)(a)}`],
                                    ce[`base__interactiveState${(0, F.e)(o)}`],
                                    ce[`base__progressionAvailability${(0, F.e)(p)}`],
                                    u && ce.base__disabled,
                                ),
                                h = [c.Selectable, c.Changeable].includes(a),
                                f = ((e) =>
                                    e.extraLarge ? _e.c_192x120 : e.large || e.medium ? _e.c_160x100 : _e.c_120x80)(B),
                                y = (0, i.useMemo)(() => ({ backgroundImage: `url(${f.$dyn(d)})` }), [d, f]),
                                S = (0, i.useMemo)(() => ({ stepId: e }), [e]);
                            return n().createElement(
                                'div',
                                { className: v },
                                n().createElement('div', { className: ce.glow }),
                                n().createElement('div', { className: ce.underlay }),
                                n().createElement(
                                    'div',
                                    { className: ce.outline },
                                    n().createElement(
                                        'div',
                                        { className: ce.accentCornersWrapper },
                                        n().createElement(le, null),
                                    ),
                                ),
                                n().createElement('div', { className: ce.image, style: y }),
                                n().createElement('div', { className: ce.disabledPattern }),
                                h && n().createElement('div', { className: ce.selectedRoleSlotPattern }),
                                n().createElement('div', {
                                    className: `${ce.topHighlight} ${ce.topHighlight__disabled}`,
                                }),
                                n().createElement('div', { className: ce.interactiveHighlight }),
                                n().createElement(
                                    A.u,
                                    { contentId: m, args: S },
                                    n().createElement(
                                        'div',
                                        { className: ce.content },
                                        h &&
                                            n().createElement(
                                                'div',
                                                { className: ce.roleCategoryIconWrapper },
                                                n().createElement(te, {
                                                    stepState: t,
                                                    actionState: a,
                                                    roleCategory: _,
                                                    isDisabled: u,
                                                }),
                                            ),
                                        n().createElement(
                                            'div',
                                            { className: ce.featureButton },
                                            n().createElement(P, {
                                                id: e,
                                                stepState: t,
                                                actionState: a,
                                                isDisabled: u,
                                                isPrebattleSwitchEnabled: D,
                                                isPrebattleSwitchLocked: C,
                                                featureBgImageName: d,
                                            }),
                                        ),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: ce.featureUnlockLevel },
                                    n().createElement(z, { stepState: t, unlockLevel: r, isDisabled: u }),
                                ),
                                u && n().createElement('div', { className: ce.alertImage }),
                            );
                        },
                    ),
                    Ee = R.strings.veh_post_progression.vehPostProgressionView.grid.restrictions.label;
                const Fe = {
                    base: 'RestrictedSlot_base_8d',
                    base__typeFeature: 'RestrictedSlot_base__typeFeature_57',
                    base__medium: 'RestrictedSlot_base__medium_1f',
                    base__large: 'RestrictedSlot_base__large_ac',
                    base__extraLarge: 'RestrictedSlot_base__extraLarge_d5',
                    base__typePairModification: 'RestrictedSlot_base__typePairModification_f7',
                    label: 'RestrictedSlot_label_67',
                    border: 'RestrictedSlot_border_94',
                    border__main: 'RestrictedSlot_border__main_de',
                    border__sideLeft: 'RestrictedSlot_border__sideLeft_ed',
                    border__sideRight: 'RestrictedSlot_border__sideRight_c4',
                    unlockLevel: 'RestrictedSlot_unlockLevel_83',
                };
                let Ae;
                !(function (e) {
                    (e.Feature = 'feature'), (e.PairModification = 'pairModification');
                })(Ae || (Ae = {}));
                const me = (0, i.memo)(({ type: e, restrictions: u, unlockLevel: t }) => {
                        const r = (0, l.Z)(['base'], Fe),
                            i = E()(r.base, Fe[`base__type${(0, F.e)(e)}`]);
                        return n().createElement(
                            'div',
                            { className: i },
                            n().createElement('div', { className: `${Fe.border} ${Fe.border__main}` }),
                            n().createElement('div', { className: `${Fe.border} ${Fe.border__sideLeft}` }),
                            n().createElement('div', { className: `${Fe.border} ${Fe.border__sideRight}` }),
                            n().createElement(
                                'div',
                                { className: Fe.label },
                                (function (e) {
                                    const u = e.allowedLevels,
                                        t = (0, a.Zj)(u),
                                        r = Math.min(...t),
                                        i = Math.max(...t);
                                    return r === i
                                        ? (0, F.WU)(Ee.singleAllowedLevel(), { allowedLevel: (0, T.cg)(i) })
                                        : (0, F.WU)(Ee.multipleAllowedLevels(), {
                                              minAllowedLevel: (0, T.cg)(r),
                                              maxAllowedLevel: (0, T.cg)(i),
                                          });
                                })(u),
                            ),
                            n().createElement(
                                'div',
                                { className: Fe.unlockLevel },
                                n().createElement(q, {
                                    unlockLevel: t,
                                    isTooltipEnabled: !1,
                                    backgroundType: H.None,
                                    borderType: U.Unavailable,
                                    numberType: G.Unavailable,
                                    lockType: V.Unavailable,
                                }),
                            ),
                        );
                    }),
                    be = ({ model: e, unlockLevel: u, featureInteractiveState: t }) =>
                        e.stepState === _.Restricted
                            ? n().createElement(me, { type: Ae.Feature, restrictions: e.restrictions, unlockLevel: u })
                            : n().createElement(de, {
                                  id: e.id,
                                  isDisabled: e.isDisabled,
                                  stepState: e.stepState,
                                  actionState: e.actionState,
                                  unlockLevel: u,
                                  interactiveState: t,
                                  roleCategory: e.modification.roleCategory,
                                  imageResName: e.modification.imageResName,
                                  tooltipContentId: e.modification.tooltipContentId,
                                  isPrebattleSwitchEnabled: e.isPrebattleSwitchEnabled,
                                  isPrebattleSwitchLocked: e.isPrebattleSwitchLocked,
                              });
                var De = t(8247);
                const Ce = {
                        base: 'Modification_base_5a',
                        base__clickable: 'Modification_base__clickable_be',
                        background: 'Modification_background_83',
                        background__received: 'Modification_background__received_9f',
                        base__stepStateReceived: 'Modification_base__stepStateReceived_05',
                        base__actionTypeModification: 'Modification_base__actionTypeModification_ca',
                        base__current: 'Modification_base__current_25',
                        background__receivedSpecial: 'Modification_background__receivedSpecial_0a',
                        base__actionTypeModificationWithFeature:
                            'Modification_base__actionTypeModificationWithFeature_85',
                        background__current: 'Modification_background__current_07',
                        background__selected: 'Modification_background__selected_0c',
                        base__interactiveStateSelected: 'Modification_base__interactiveStateSelected_9f',
                        background__lastSelected: 'Modification_background__lastSelected_0a',
                        base__interactiveStateLastSelected: 'Modification_base__interactiveStateLastSelected_f3',
                        background__disabled: 'Modification_background__disabled_4a',
                        base__stepStateAvailablePurchase: 'Modification_base__stepStateAvailablePurchase_04',
                        base__interactiveStateNormal: 'Modification_base__interactiveStateNormal_96',
                        base__stepStateUnavailableLocked: 'Modification_base__stepStateUnavailableLocked_14',
                        background__disabledHover: 'Modification_background__disabledHover_ba',
                        labelWrapper: 'Modification_labelWrapper_f9',
                        lock: 'Modification_lock_1a',
                    },
                    pe = (0, i.memo)(
                        ({
                            id: e,
                            stepState: u,
                            actionType: t,
                            level: a,
                            isCurrent: o,
                            isClickable: l,
                            interactiveState: c,
                        }) => {
                            const _ = (0, i.useContext)(s.m).progressionType,
                                d = (0, r.tT)('model.grid', r.DA.None).onMainStepSelectClick,
                                m = E()(
                                    Ce.base,
                                    Ce[`base__stepState${(0, F.e)(u)}`],
                                    Ce[`base__interactiveState${(0, F.e)(c)}`],
                                    Ce[`base__actionType${(0, F.e)(t)}`],
                                    o && Ce.base__current,
                                    l && Ce.base__clickable,
                                ),
                                b = (0, i.useCallback)(() => {
                                    l && (0, C.G)('highlight');
                                }, [l]),
                                D = (0, i.useCallback)(() => {
                                    l && ((0, C.G)('ev_pp_level_click'), d({ stepID: e }));
                                }, [l, d, e]),
                                p = (0, i.useMemo)(() => ({ stepId: e }), [e]),
                                g = _ !== De.e.Comparison;
                            return n().createElement(
                                A.u,
                                {
                                    contentId:
                                        R.views.lobby.veh_post_progression.tooltip.PostProgressionLevelTooltipView(
                                            'resId',
                                        ),
                                    args: p,
                                },
                                n().createElement(
                                    'div',
                                    { className: m, onClick: D, onMouseEnter: b },
                                    n().createElement('div', {
                                        className: `${Ce.background} ${Ce.background__received}`,
                                    }),
                                    n().createElement('div', {
                                        className: `${Ce.background} ${Ce.background__receivedSpecial}`,
                                    }),
                                    n().createElement('div', {
                                        className: `${Ce.background} ${Ce.background__current}`,
                                    }),
                                    n().createElement('div', {
                                        className: `${Ce.background} ${Ce.background__selected}`,
                                    }),
                                    n().createElement('div', {
                                        className: `${Ce.background} ${Ce.background__lastSelected}`,
                                    }),
                                    n().createElement('div', {
                                        className: `${Ce.background} ${Ce.background__disabled}`,
                                    }),
                                    n().createElement('div', {
                                        className: `${Ce.background} ${Ce.background__disabledHover}`,
                                    }),
                                    n().createElement('div', { className: Ce.labelWrapper }, (0, T.HG)(a)),
                                    g && n().createElement('div', { className: Ce.lock }),
                                ),
                            );
                        },
                    ),
                    ge = {
                        base: 'ProgressLine_base_9e',
                        line: 'ProgressLine_line_9a',
                        base__stepStateReceived: 'ProgressLine_base__stepStateReceived_32',
                        base__interactiveStateSelected: 'ProgressLine_base__interactiveStateSelected_67',
                        base__interactiveStateLastSelected: 'ProgressLine_base__interactiveStateLastSelected_e5',
                        glow: 'ProgressLine_glow_a9',
                        base__current: 'ProgressLine_base__current_e4',
                    },
                    Be = (0, i.memo)(({ stepState: e, isCurrent: u, interactiveState: t }) => {
                        const a = E()(
                            ge.base,
                            ge[`base__stepState${(0, F.e)(e)}`],
                            ge[`base__interactiveState${(0, F.e)(t)}`],
                            u && ge.base__current,
                        );
                        return n().createElement(
                            'div',
                            { className: a },
                            n().createElement('div', { className: ge.line }),
                            n().createElement('div', { className: ge.glow }),
                        );
                    }),
                    ve = {
                        base: 'Progression_base_0c',
                        base__medium: 'Progression_base__medium_ba',
                        base__large: 'Progression_base__large_00',
                        base__extraLarge: 'Progression_base__extraLarge_68',
                        progressLine: 'Progression_progressLine_8c',
                        tape: 'Progression_tape_3f',
                        final: 'Progression_final_d1',
                        tape__small: 'Progression_tape__small_5a',
                        tape__medium: 'Progression_tape__medium_32',
                        tape__large: 'Progression_tape__large_cc',
                        tape__extraLarge: 'Progression_tape__extraLarge_89',
                        base__progressionStateFinal: 'Progression_base__progressionStateFinal_c1',
                        indicator: 'Progression_indicator_99',
                        indicatorLabel: 'Progression_indicatorLabel_ba',
                        header: 'Progression_header_f2',
                    },
                    he = R.images.gui.maps.icons.vehPostProgression.vehiclePostProgressionView.grid.progression.numbers,
                    fe = (e) => (e.extraLarge || e.large || e.medium ? he.c_50x30 : he.c_40x24),
                    ye = ({ steps: e }) => {
                        const u = e.filter(({ model: { stepState: e } }) => e !== _.Restricted),
                            t = (0, i.useContext)(s.m).progressionState,
                            a = u.length,
                            r = (0, l.Z)(['base', 'tape'], ve),
                            o = b(),
                            c = fe(o),
                            d = (0, i.useMemo)(
                                () => ({ backgroundImage: `url(${(T.qP ? c.arabic : c.roman).$num(a)})` }),
                                [a, c],
                            ),
                            A = E()(r.base, ve[`base__progressionState${(0, F.e)(t)}`]);
                        return n().createElement(
                            'div',
                            { className: A },
                            n().createElement(
                                'div',
                                { className: r.tape },
                                u.map((e, u) =>
                                    n().createElement(
                                        i.Fragment,
                                        { key: e.model.id },
                                        u > 0 &&
                                            n().createElement(
                                                'div',
                                                { className: ve.progressLine },
                                                n().createElement(Be, {
                                                    stepState: e.model.stepState,
                                                    isCurrent: e.isCurrent,
                                                    interactiveState: e.modificationInteractiveState,
                                                }),
                                            ),
                                        n().createElement(pe, {
                                            id: e.model.id,
                                            stepState: e.model.stepState,
                                            actionType: e.model.actionType,
                                            level: e.unlockLevel,
                                            isCurrent: e.isCurrent,
                                            isClickable: e.isModificationClickable,
                                            interactiveState: e.modificationInteractiveState,
                                        }),
                                    ),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: ve.final },
                                n().createElement(
                                    'div',
                                    { className: ve.indicator },
                                    n().createElement('div', { className: ve.indicatorLabel, style: d }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: ve.header },
                                    R.strings.veh_post_progression.vehPostProgressionView.grid.progression.maxLevel(),
                                ),
                            ),
                        );
                    },
                    Se = {
                        base: 'GridCenterGroup_base_cd',
                        featureStepsWrapper: 'GridCenterGroup_featureStepsWrapper_da',
                        base__medium: 'GridCenterGroup_base__medium_bd',
                        base__large: 'GridCenterGroup_base__large_95',
                        base__extraLarge: 'GridCenterGroup_base__extraLarge_2e',
                        featureStepWrapper: 'GridCenterGroup_featureStepWrapper_7c',
                    },
                    we = ({ steps: e }) => {
                        const u = (0, i.useContext)(s.m).progressionType,
                            t = e.filter(({ model: { actionType: e } }) => e === o.ModificationWithFeature),
                            a = (0, l.Z)(['base'], Se),
                            r = u !== De.e.Comparison;
                        return n().createElement(
                            'div',
                            { className: a.base },
                            r &&
                                n().createElement(
                                    'div',
                                    { className: Se.featureStepsWrapper },
                                    t.map((e) =>
                                        n().createElement(
                                            'div',
                                            { key: e.model.id, className: Se.featureStepWrapper },
                                            n().createElement(be, e),
                                        ),
                                    ),
                                ),
                            n().createElement(ye, { steps: e }),
                        );
                    },
                    ke = 'Checkmark_base_38',
                    Le = (0, i.memo)(() => n().createElement('div', { className: ke })),
                    xe = 'DiscardButton_base_d3',
                    Ne = 'DiscardButton_icon_43',
                    Pe = R.strings.veh_post_progression.vehPostProgressionView.grid.pairModification.discardButton,
                    Re = R.strings.veh_post_progression.vehPostProgressionView.grid.pairModification.buyButton.tooltip,
                    Te = (0, i.memo)(({ onClick: e, isDisabled: u = !1 }) => {
                        const t = (0, i.useContext)(s.m).progressionAvailability;
                        return n().createElement(
                            f.i,
                            { header: u ? void 0 : Pe.tooltip.header(), body: u ? Re.$dyn(t) : Pe.tooltip.body() },
                            n().createElement(
                                'div',
                                null,
                                n().createElement(
                                    D.u5,
                                    { onClick: e, type: D.L$.secondary, mixClass: xe, disabled: u },
                                    n().createElement('div', { className: Ne }),
                                ),
                            ),
                        );
                    });
                var Me = t(7405),
                    Oe = t(329),
                    Ie = t(2372),
                    We = t(3137);
                const $e = 'BuyButton_base_7f',
                    He = 'BuyButton_base__disabled_2e',
                    Ue = 'BuyButton_back_c0',
                    Ge = 'BuyButton_texture_21',
                    Ve = 'BuyButton_state_2c',
                    Ze = 'BuyButton_stateHighlightHover_71',
                    je = 'BuyButton_stateHighlightActive_ff',
                    qe = 'BuyButton_stateDisabled_8b',
                    ze = 'BuyButton_content_a8',
                    Ke = (0, i.memo)(({ children: e, isDisabled: u = !1, onClick: t }) => {
                        const a = (0, i.useContext)(s.m).progressionAvailability,
                            r =
                                R.strings.veh_post_progression.vehPostProgressionView.grid.pairModification.buyButton.tooltip.$dyn(
                                    a,
                                ),
                            o = (0, i.useCallback)(
                                (e) => {
                                    u || (t && t(e));
                                },
                                [u, t],
                            ),
                            l = (0, i.useCallback)(() => {
                                u || (0, C.G)('highlight');
                            }, [u]),
                            c = (0, i.useCallback)(() => {
                                u || (0, C.G)('play');
                            }, [u]),
                            _ = E()($e, u && He);
                        return n().createElement(
                            f.i,
                            { body: r, isEnabled: Boolean(r) && u },
                            n().createElement(
                                'div',
                                { className: _, onMouseEnter: l, onMouseDown: c, onClick: o },
                                n().createElement('div', { className: Ue }),
                                n().createElement('span', { className: Ge }),
                                n().createElement(
                                    'span',
                                    { className: Ve },
                                    n().createElement('span', { className: Ze }),
                                    n().createElement('span', { className: je }),
                                    n().createElement('span', { className: qe }),
                                ),
                                n().createElement('span', { className: ze }, e),
                            ),
                        );
                    }),
                    Ye = {
                        base: 'Price_base_24',
                        itemWrapper: 'Price_itemWrapper_22',
                        itemWrapper__label: 'Price_itemWrapper__label_50',
                        base__stepStateReceived: 'Price_base__stepStateReceived_40',
                        base__otherReceived: 'Price_base__otherReceived_b2',
                        base__selected: 'Price_base__selected_c7',
                        itemWrapper__button: 'Price_itemWrapper__button_3a',
                        base__received: 'Price_base__received_64',
                        base__otherSelected: 'Price_base__otherSelected_6a',
                        buttonContentWrapper: 'Price_buttonContentWrapper_74',
                        icon: 'Price_icon_98',
                        icon__typeCredits: 'Price_icon__typeCredits_2c',
                        icon__typeGold: 'Price_icon__typeGold_62',
                        icon__typeCrystal: 'Price_icon__typeCrystal_ce',
                        icon__typeXp: 'Price_icon__typeXp_88',
                        icon__typeFreeXp: 'Price_icon__typeFreeXp_ac',
                    },
                    Xe = ({
                        id: e,
                        stepState: u,
                        isReceived: t,
                        isOtherReceived: a,
                        isSelected: o,
                        isOtherSelected: l,
                        modification: { id: c, price: _ },
                    }) => {
                        const d = (0, r.tT)('model.grid', r.DA.None).onMultiStepActionClick,
                            A = (0, i.useContext)(s.m).progressionAvailability,
                            m = E()(
                                Ye.base,
                                Ye[`base__stepState${(0, F.e)(u)}`],
                                t && Ye.base__received,
                                a && Ye.base__otherReceived,
                                o && Ye.base__selected,
                                l && Ye.base__otherSelected,
                            ),
                            b = (0, We.b)(_),
                            D = b.value,
                            C = b.name,
                            p = b.isEnough,
                            g = C,
                            B = E()(Ye.icon, [Ye[`icon__type${(0, F.e)(g)}`]]),
                            v = !p || A !== y.G.Available,
                            h = (0, i.useCallback)(
                                (u) => {
                                    u.stopPropagation(), d({ stepID: e, modificationID: c });
                                },
                                [d, e, c],
                            );
                        return n().createElement(
                            'div',
                            { className: m },
                            n().createElement(
                                'div',
                                { className: `${Ye.itemWrapper} ${Ye.itemWrapper__label}` },
                                n().createElement(Me.F, { type: g, size: Oe.et.small, value: D }),
                            ),
                            n().createElement(
                                'div',
                                { className: `${Ye.itemWrapper} ${Ye.itemWrapper__button}` },
                                n().createElement(
                                    Ke,
                                    { isDisabled: v, onClick: h },
                                    n().createElement(
                                        'span',
                                        { className: Ye.buttonContentWrapper },
                                        n().createElement(Ie.A, { value: D, format: 'integral' }),
                                        n().createElement('span', { className: B }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Qe = {
                        base: 'Item_base_93',
                        base__received: 'Item_base__received_ec',
                        base__medium: 'Item_base__medium_76',
                        base__large: 'Item_base__large_93',
                        base__extraLarge: 'Item_base__extraLarge_12',
                        content: 'Item_content_9f',
                        imageWrapper: 'Item_imageWrapper_74',
                        imageWrapper__enabled: 'Item_imageWrapper__enabled_77',
                        imageWrapper__disabled: 'Item_imageWrapper__disabled_c6',
                        image: 'Item_image_30',
                        base__stepStateReceived: 'Item_base__stepStateReceived_a7',
                        base__selected: 'Item_base__selected_f1',
                        base__otherSelected: 'Item_base__otherSelected_60',
                        base__otherReceived: 'Item_base__otherReceived_4a',
                        disabledPattern: 'Item_disabledPattern_7b',
                        base__progressionAvailabilityAvailable: 'Item_base__progressionAvailabilityAvailable_d0',
                        base__interactiveStateSelectedHighlighted: 'Item_base__interactiveStateSelectedHighlighted_02',
                        topButtonWrapper: 'Item_topButtonWrapper_77',
                        bottomHighlight: 'Item_bottomHighlight_a4',
                        checkmarkWrapper: 'Item_checkmarkWrapper_13',
                        title: 'Item_title_ba',
                        base__titleAlignmentLeft: 'Item_base__titleAlignmentLeft_00',
                        base__titleAlignmentRight: 'Item_base__titleAlignmentRight_af',
                        base__titleAlignmentCenter: 'Item_base__titleAlignmentCenter_da',
                    },
                    Je = R.images.gui.maps.icons.vehPostProgression.actionItems.pairModifications;
                let eu;
                !(function (e) {
                    (e.Left = 'left'), (e.Center = 'center'), (e.Right = 'right');
                })(eu || (eu = {}));
                const uu = ({
                        id: e,
                        isReceived: u,
                        isOtherReceived: t,
                        isSelected: a,
                        isOtherSelected: o,
                        modification: c,
                        interactiveState: _,
                        stepState: d,
                        titleAlignment: m = eu.Center,
                        onMouseEnter: D,
                        onMouseLeave: C,
                    }) => {
                        const p = (0, i.useContext)(s.m),
                            g = p.progressionAvailability,
                            B = p.progressionType,
                            v = b(),
                            h = (0, r.tT)('model.grid', r.DA.None),
                            f = h.onMultiStepSelectClick,
                            S = h.onMultiStepActionClick,
                            w = c.id,
                            k = c.titleRes,
                            L = c.imageResName,
                            x = ((e) =>
                                e.extraLarge ? Je.c_120x120 : e.large || e.medium ? Je.c_100x100 : Je.c_80x80)(v),
                            N = (0, i.useMemo)(() => ({ backgroundImage: `url(${x.$dyn(L)})` }), [L, x]),
                            P = (0, i.useMemo)(() => ({ backgroundImage: `url(${x.$dyn(`${L}_disabled`)})` }), [L, x]),
                            T = (0, l.Z)(['base'], Qe),
                            M = E()(
                                T.base,
                                Qe[`base__stepState${(0, F.e)(d)}`],
                                Qe[`base__interactiveState${(0, F.e)(_)}`],
                                Qe[`base__progressionAvailability${(0, F.e)(g)}`],
                                Qe[`base__titleAlignment${(0, F.e)(m)}`],
                                u && Qe.base__received,
                                t && Qe.base__otherReceived,
                                a && Qe.base__selected,
                                o && Qe.base__otherSelected,
                            ),
                            O = (0, i.useCallback)(() => {
                                u || f({ stepID: e, modificationID: w });
                            }, [f, e, w, u]),
                            I = (0, i.useCallback)(() => {
                                D && D(w);
                            }, [w, D]),
                            W = (0, i.useCallback)(() => {
                                C && C(w);
                            }, [w, C]),
                            $ = (0, i.useCallback)(
                                (u) => {
                                    u.stopPropagation(), S({ stepID: e, modificationID: w });
                                },
                                [S, e, w],
                            ),
                            H = (0, i.useMemo)(() => ({ stepId: e, modificationId: w }), [e, w]),
                            U = B !== De.e.Comparison;
                        return n().createElement(
                            'div',
                            { className: M, onClick: O, onMouseEnter: I, onMouseLeave: W },
                            n().createElement(
                                'div',
                                { className: `${Qe.imageWrapper} ${Qe.imageWrapper__enabled}` },
                                n().createElement('div', { className: Qe.image, style: N }),
                            ),
                            n().createElement(
                                'div',
                                { className: `${Qe.imageWrapper} ${Qe.imageWrapper__disabled}` },
                                n().createElement('div', { className: Qe.image, style: P }),
                            ),
                            n().createElement('div', { className: Qe.disabledPattern }),
                            n().createElement(
                                A.u,
                                {
                                    contentId:
                                        R.views.lobby.veh_post_progression.tooltip.PairModificationTooltipView('resId'),
                                    args: H,
                                },
                                n().createElement(
                                    'div',
                                    { className: Qe.content },
                                    U &&
                                        n().createElement(Xe, {
                                            id: e,
                                            stepState: d,
                                            isReceived: u,
                                            isOtherReceived: t,
                                            isSelected: a,
                                            isOtherSelected: o,
                                            modification: c,
                                        }),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: Qe.topButtonWrapper },
                                n().createElement(Te, { onClick: $, isDisabled: g !== y.G.Available }),
                            ),
                            n().createElement('div', { className: Qe.bottomHighlight }),
                            n().createElement('div', { className: Qe.checkmarkWrapper }, n().createElement(Le, null)),
                            n().createElement('div', { className: Qe.title }, k),
                        );
                    },
                    tu = {
                        base: 'Separator_base_e1',
                        base__medium: 'Separator_base__medium_5c',
                        base__large: 'Separator_base__large_70',
                        base__extraLarge: 'Separator_base__extraLarge_50',
                        underlay: 'Separator_underlay_52',
                        line: 'Separator_line_a1',
                        base__lineVisible: 'Separator_base__lineVisible_a5',
                        line__top: 'Separator_line__top_23',
                        line__bottom: 'Separator_line__bottom_cf',
                        label: 'Separator_label_dd',
                    },
                    au = (0, i.memo)(({ isLineVisible: e = !0 }) => {
                        const u = (0, l.Z)(['base'], tu),
                            t = E()(u.base, e && tu.base__lineVisible);
                        return n().createElement(
                            'div',
                            { className: t },
                            n().createElement('div', { className: tu.underlay }),
                            n().createElement('div', { className: `${tu.line} ${tu.line__top}` }),
                            n().createElement('div', { className: `${tu.line} ${tu.line__bottom}` }),
                            n().createElement(
                                'div',
                                { className: tu.label },
                                R.strings.veh_post_progression.vehPostProgressionView.grid.pairModificationSeparator.label(),
                            ),
                        );
                    }),
                    ru = { base: 'Content_base_0e', separatorWrapper: 'Content_separatorWrapper_0d' },
                    iu = (e, u) => (0 === e ? eu.Right : e === u - 1 ? eu.Left : eu.Center),
                    nu = (e, u) => -1 === u || (u !== e && u !== e + 1),
                    ou = ({
                        id: e,
                        hoveredIdx: u,
                        receivedIdx: t,
                        selectedIdx: a,
                        stepState: r,
                        modifications: i,
                        interactiveState: o,
                        onItemMouseEnter: s,
                        onItemMouseLeave: c,
                    }) => {
                        const _ = (0, l.Z)(['base'], ru);
                        return n().createElement(
                            'div',
                            { className: _.base },
                            i.reduce(
                                (l, _, d) => (
                                    l.push(
                                        n().createElement(uu, {
                                            id: e,
                                            key: _.id,
                                            isReceived: d === t,
                                            isOtherReceived: -1 !== t && d !== t,
                                            isSelected: d === a,
                                            isOtherSelected: -1 !== a && d !== a,
                                            stepState: r,
                                            modification: _,
                                            interactiveState: o,
                                            titleAlignment: iu(d, i.length),
                                            onMouseEnter: s,
                                            onMouseLeave: c,
                                        }),
                                    ),
                                    d !== i.length - 1 &&
                                        l.push(
                                            n().createElement(
                                                'div',
                                                { key: `separator${d}`, className: ru.separatorWrapper },
                                                n().createElement(au, { isLineVisible: nu(d, u) }),
                                            ),
                                        ),
                                    l
                                ),
                                [],
                            ),
                        );
                    },
                    su = (0, i.memo)(({ stepState: e, unlockLevel: u }) => {
                        const t = e === _.UnavailableLocked ? V.Normal : V.None,
                            a = e === _.UnavailableLocked ? G.Locked : G.Unlocked;
                        return n().createElement(q, {
                            unlockLevel: u,
                            backgroundType: H.Normal,
                            borderType: U.Normal,
                            numberType: a,
                            lockType: t,
                            isTooltipEnabled: e !== _.Received,
                        });
                    });
                var lu = t(5135);
                const cu = {
                        base: 'Caret_base_07',
                        sector: 'Caret_sector_be',
                        base__medium: 'Caret_base__medium_3f',
                        base__large: 'Caret_base__large_5a',
                        base__extraLarge: 'Caret_base__extraLarge_ee',
                        sector__topLeft: 'Caret_sector__topLeft_b4',
                        sector__topRight: 'Caret_sector__topRight_6a',
                        sector__bottomRight: 'Caret_sector__bottomRight_54',
                        sector__bottomLeft: 'Caret_sector__bottomLeft_30',
                    },
                    _u = (0, i.memo)(() => {
                        const e = (0, l.Z)(['base'], cu);
                        return n().createElement(
                            'div',
                            { className: e.base },
                            n().createElement('div', { className: `${cu.sector} ${cu.sector__topLeft}` }),
                            n().createElement('div', { className: `${cu.sector} ${cu.sector__topRight}` }),
                            n().createElement('div', { className: `${cu.sector} ${cu.sector__bottomRight}` }),
                            n().createElement('div', { className: `${cu.sector} ${cu.sector__bottomLeft}` }),
                        );
                    }),
                    du = 'CaretRail_base_84',
                    Eu = 'CaretRail_caretWrapper_01',
                    Fu = 'CaretRail_base__animatingAppear_20',
                    Au = 'CaretRail_base__animatingDisappear_a7',
                    mu = 'CaretRail_base__visible_8f',
                    bu = (e) => ('number' == typeof e ? `${e}rem` : e),
                    Du = (0, i.memo)(
                        ({
                            isVisible: e = !0,
                            caretWidth: u = '100%',
                            caretHeight: t = '100%',
                            caretPositionX: a = 0,
                            caretPositionY: o = 0,
                        }) => {
                            const s = (0, r.D9)(e),
                                l = (0, r.D9)(a, (e) => e >= 0),
                                c = s && !e,
                                _ = !s && e && l !== a,
                                d = c ? l || 0 : a,
                                F = (0, i.useMemo)(
                                    () => ({ height: bu(t), width: bu(u), transform: `translate(${bu(d)}, ${bu(o)})` }),
                                    [t, u, d, o],
                                );
                            return n().createElement(
                                'div',
                                { className: E()(du, e && mu, _ && Fu, c && Au) },
                                n().createElement('div', { className: Eu, style: F }, n().createElement(_u, null)),
                            );
                        },
                    ),
                    Cu = 'SelectionFrame_base_46',
                    pu = 'SelectionFrame_hoverCaretWrapper_a0',
                    gu = 'SelectionFrame_hoverCaretWrapper__visible_ca',
                    Bu = ({ selectedIdx: e, hoveredIdx: u, length: t }) => {
                        const a = -1 !== e,
                            r = Math.floor(100 / t),
                            o = 100 * e,
                            s = (0, i.useCallback)(
                                (e) => ({ width: (0, lu.Q)(r), transform: `translateX(${(0, lu.Q)(100 * e)})` }),
                                [r],
                            );
                        return n().createElement(
                            'div',
                            { className: Cu },
                            n().createElement(Du, {
                                isVisible: a,
                                caretWidth: (0, lu.Q)(r),
                                caretPositionX: (0, lu.Q)(o),
                            }),
                            Array(t)
                                .fill(null)
                                .map((e, t) =>
                                    n().createElement(
                                        'div',
                                        { key: t, style: s(t), className: E()(pu, u === t && gu) },
                                        n().createElement(_u, null),
                                    ),
                                ),
                        );
                    },
                    vu = {
                        base: 'PairModification_base_7a',
                        base__interactiveStateSelectedFaded: 'PairModification_base__interactiveStateSelectedFaded_8e',
                        base__interactiveStateFaded: 'PairModification_base__interactiveStateFaded_c3',
                        underlay: 'PairModification_underlay_d9',
                        base__stepStateReceived: 'PairModification_base__stepStateReceived_ba',
                        base__interactiveStateSelectedHighlighted:
                            'PairModification_base__interactiveStateSelectedHighlighted_de',
                        topHighlight: 'PairModification_topHighlight_fe',
                        outline: 'PairModification_outline_31',
                        accentCornersWrapper: 'PairModification_accentCornersWrapper_89',
                        interactiveHighlight: 'PairModification_interactiveHighlight_56',
                        base__interactiveStateSelected: 'PairModification_base__interactiveStateSelected_13',
                        selectionFrameWrapper: 'PairModification_selectionFrameWrapper_ac',
                        unlockLevelWrapper: 'PairModification_unlockLevelWrapper_65',
                    },
                    hu = ({
                        id: e,
                        receivedIdx: u,
                        selectedIdx: t,
                        stepState: r,
                        modifications: o,
                        interactiveState: s,
                        unlockLevel: l,
                    }) => {
                        const c = (0, a.Zj)(o),
                            _ = (0, i.useRef)(),
                            d = (0, i.useState)(-1),
                            A = d[0],
                            m = d[1],
                            b = (0, i.useCallback)(() => {
                                _.current && (clearTimeout(_.current), (_.current = void 0));
                            }, []);
                        (0, i.useEffect)(() => () => b(), [b]);
                        const D = (0, i.useMemo)(() => c.reduce((e, { id: u }, t) => ((e[u] = t), e), {}), []),
                            p = (0, i.useCallback)(
                                (e) => {
                                    const t = D[e];
                                    u !== t && (b(), m(t), (0, C.G)('highlight'));
                                },
                                [D, u, b],
                            ),
                            g = (0, i.useCallback)(() => {
                                b(), (_.current = setTimeout(() => m(-1), 50));
                            }, [b]),
                            B = (0, i.useCallback)(() => {
                                b(), m(-1);
                            }, [b]),
                            v = E()(
                                vu.base,
                                vu[`base__stepState${(0, F.e)(r)}`],
                                vu[`base__interactiveState${(0, F.e)(s)}`],
                            );
                        return n().createElement(
                            'div',
                            { className: v, onMouseLeave: B },
                            n().createElement('div', { className: vu.underlay }),
                            n().createElement('div', { className: vu.topHighlight }),
                            n().createElement(
                                'div',
                                { className: vu.outline },
                                n().createElement(
                                    'div',
                                    { className: vu.accentCornersWrapper },
                                    n().createElement(le, null),
                                ),
                            ),
                            n().createElement(ou, {
                                id: e,
                                hoveredIdx: A,
                                receivedIdx: u,
                                selectedIdx: t,
                                stepState: r,
                                modifications: c,
                                interactiveState: s,
                                onItemMouseEnter: p,
                                onItemMouseLeave: g,
                            }),
                            n().createElement('div', { className: vu.interactiveHighlight }),
                            n().createElement(
                                'div',
                                { className: vu.selectionFrameWrapper },
                                n().createElement(Bu, { selectedIdx: t, hoveredIdx: A, length: c.length }),
                            ),
                            n().createElement(
                                'div',
                                { className: vu.unlockLevelWrapper },
                                n().createElement(su, { stepState: r, unlockLevel: l }),
                            ),
                        );
                    },
                    fu = ({ model: e, unlockLevel: u, interactiveState: t }) =>
                        e.stepState === _.Restricted
                            ? n().createElement(me, {
                                  type: Ae.PairModification,
                                  restrictions: e.restrictions,
                                  unlockLevel: u,
                              })
                            : n().createElement(hu, {
                                  id: e.id,
                                  receivedIdx: e.receivedIdx,
                                  selectedIdx: e.selectedIdx,
                                  stepState: e.stepState,
                                  modifications: e.modifications,
                                  interactiveState: t,
                                  unlockLevel: u,
                              }),
                    yu = {
                        base: 'DiagonalLine_base_9d',
                        base__stepStateReceived: 'DiagonalLine_base__stepStateReceived_c3',
                        base__directionLeft: 'DiagonalLine_base__directionLeft_5b',
                        lineBase: 'DiagonalLine_lineBase_32',
                        base__large: 'DiagonalLine_base__large_45',
                        base__extraLarge: 'DiagonalLine_base__extraLarge_c8',
                        line: 'DiagonalLine_line_21',
                        base__directionRight: 'DiagonalLine_base__directionRight_4f',
                        base__position1: 'DiagonalLine_base__position1_bf',
                        base__position2: 'DiagonalLine_base__position2_ef',
                        base__position3: 'DiagonalLine_base__position3_58',
                        base__medium: 'DiagonalLine_base__medium_ef',
                    };
                let Su;
                !(function (e) {
                    (e.Left = 'Left'), (e.Right = 'Right');
                })(Su || (Su = {}));
                const wu = [28, -8, -43],
                    ku = (e, u) => {
                        const t = wu[u];
                        return e === Su.Left ? -t : t;
                    },
                    Lu = (0, i.memo)(({ direction: e, index: u, stepState: t }) => {
                        const a = (0, l.Z)(['base'], yu),
                            r = E()(
                                yu.base,
                                a.base,
                                yu[`base__stepState${(0, F.e)(t)}`],
                                yu[`base__direction${e}`],
                                yu[`base__position${u + 1}`],
                            ),
                            o = (0, i.useMemo)(() => ({ transform: `rotate(${ku(e, u)}deg)` }), [e, u]);
                        return n().createElement(
                            'div',
                            { className: r },
                            n().createElement('div', { className: yu.lineBase }),
                            n().createElement('div', { style: o, className: yu.line }),
                        );
                    }),
                    xu = {
                        base: 'GridSideGroup_base_da',
                        base__medium: 'GridSideGroup_base__medium_94',
                        base__large: 'GridSideGroup_base__large_5e',
                        base__extraLarge: 'GridSideGroup_base__extraLarge_5b',
                        elementWrapper: 'GridSideGroup_elementWrapper_48',
                        elementWrapper__left: 'GridSideGroup_elementWrapper__left_fa',
                        elementWrapper__right: 'GridSideGroup_elementWrapper__right_66',
                        elementPlaceholder: 'GridSideGroup_elementPlaceholder_d4',
                        lineContainer: 'GridSideGroup_lineContainer_4d',
                        base__positionLeft: 'GridSideGroup_base__positionLeft_9a',
                        base__positionRight: 'GridSideGroup_base__positionRight_b4',
                    };
                let Nu;
                !(function (e) {
                    (e.Left = 'left'), (e.Right = 'right');
                })(Nu || (Nu = {}));
                const Pu = ({ position: e, steps: u }) => {
                        const t = (0, l.Z)(['base'], xu),
                            a = e === Nu.Right ? 0 : 1,
                            r = Math.max(3 - u.length, 0),
                            i = e === Nu.Right ? Su.Left : Su.Right,
                            o = E()(t.base, xu[`base__position${(0, F.e)(e)}`]);
                        return n().createElement(
                            'div',
                            { className: o },
                            u.map((e, u) =>
                                n().createElement(
                                    'div',
                                    {
                                        key: u,
                                        className: E()(
                                            xu.elementWrapper,
                                            (u + a) % 2 == 0 ? xu.elementWrapper__left : xu.elementWrapper__right,
                                        ),
                                    },
                                    n().createElement(fu, e),
                                    n().createElement(
                                        'div',
                                        { className: xu.lineContainer },
                                        n().createElement(Lu, { index: u, direction: i, stepState: e.model.stepState }),
                                    ),
                                ),
                            ),
                            Array(r)
                                .fill(null)
                                .map((e, u) => n().createElement('div', { key: u, className: xu.elementPlaceholder })),
                        );
                    },
                    Ru = 'Grid_base_bf';
                let Tu, Mu, Ou;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Selected = 'selected'), (e.LastSelected = 'lastSelected');
                })(Tu || (Tu = {})),
                    (function (e) {
                        (e.Normal = 'normal'),
                            (e.Faded = 'faded'),
                            (e.Selected = 'selected'),
                            (e.SelectedFaded = 'selectedFaded'),
                            (e.SelectedHighlighted = 'selectedHighlighted');
                    })(Mu || (Mu = {})),
                    (function (e) {
                        (e.Normal = 'normal'),
                            (e.Faded = 'faded'),
                            (e.Selected = 'selected'),
                            (e.SelectedFaded = 'selectedFaded'),
                            (e.SelectedHighlighted = 'selectedHighlighted');
                    })(Ou || (Ou = {}));
                const Iu = [_.UnavailableLocked];
                function Wu(e, u, t, a, r, i) {
                    return a.length
                        ? a.includes(e)
                            ? Ou.SelectedHighlighted
                            : Ou.Faded
                        : Iu.includes(u) && t <= r
                          ? i
                              ? Ou.SelectedFaded
                              : Ou.Selected
                          : i
                            ? Ou.Faded
                            : Ou.Normal;
                }
                const $u = [_.UnavailableLocked, _.AvailablePurchase];
                function Hu(e, u, t) {
                    const a = $u.includes(e);
                    return a && u < t ? Tu.Selected : a && u === t ? Tu.LastSelected : Tu.Normal;
                }
                function Uu(e, u, t, a, r, i) {
                    return a.length
                        ? a.includes(e)
                            ? Mu.SelectedHighlighted
                            : Mu.Faded
                        : $u.includes(u) && t <= r
                          ? i
                              ? Mu.SelectedFaded
                              : Mu.Selected
                          : i
                            ? Mu.Faded
                            : Mu.Normal;
                }
                function Gu(e, u) {
                    return !(-1 === u ? [_.Received, _.Restricted] : [_.Restricted]).includes(e);
                }
                function Vu(e, u, t, a) {
                    const r = ((e) => {
                        const u = [...e].reverse().find(({ stepState: e }) => e === _.Received);
                        return e.indexOf(u);
                    })(e);
                    return e.map((e, i) => ({
                        model: e,
                        unlockLevel: i + 1,
                        isCurrent: i === r,
                        isModificationClickable: Gu(e.stepState, u),
                        modificationInteractiveState: Hu(e.stepState, i, u),
                        featureInteractiveState: Uu(e.id, e.stepState, i, t, u, a),
                    }));
                }
                var Zu = t(7485);
                const ju = (e, u) => {
                        ((e) => {
                            const u = e.map(({ model: e }) => e),
                                t = (0, Zu.ws)(u),
                                a = (0, r.D9)(t);
                            a &&
                                Object.entries(t).some(([e, u]) => {
                                    const t = Number(e),
                                        r = a[t] === _.Received,
                                        i = u === _.Received;
                                    return !r && i;
                                }) &&
                                (0, C.G)('ev_pp_main_mod_levelup');
                        })(e),
                            ((e) => {
                                const u = e.map(({ model: e }) => e),
                                    t = (0, Zu.F4)(u),
                                    a = (0, r.D9)(t);
                                a &&
                                    Object.entries(t).some(([e, u]) => {
                                        const t = Number(e),
                                            r = a[t];
                                        return (-1 === r && -1 !== u) || (-1 !== r && -1 !== u && r !== u);
                                    }) &&
                                    (0, C.G)('ev_pp_paired_modification_select');
                            })(u),
                            ((e) => {
                                const u = e.map(({ model: e }) => e),
                                    t = (0, Zu.F4)(u),
                                    a = (0, r.D9)(t);
                                a &&
                                    Object.entries(t).some(([e, t]) => {
                                        const r = Number(e),
                                            i = a[r];
                                        return i !== u.find(({ id: e }) => e === r).receivedIdx && -1 !== i && -1 === t;
                                    }) &&
                                    (0, C.G)('ev_pp_paired_modification_deselect');
                            })(u);
                    },
                    qu = ({ highlightedFeatureStepIds: e = [], highlightedMultiStepIds: u = [] }) => {
                        const t = (0, r.tT)('model.grid').mainSelectedIdx,
                            i = (0, r.tT)('model.grid.mainSteps'),
                            o = (0, r.tT)('model.grid.multiSteps'),
                            s = (0, a.Zj)(i),
                            l = (0, a.Zj)(o),
                            c = Boolean(e.length || u.length),
                            _ = Vu(s, t, e, c),
                            d = (function (e, u, t, a, r) {
                                return u.map((u) => {
                                    const i = e.findIndex(({ id: e }) => e === u.parentId);
                                    return {
                                        model: u,
                                        unlockLevel: i + 1,
                                        interactiveState: Wu(u.id, u.stepState, i, a, t, r),
                                    };
                                });
                            })(s, l, t, u, c);
                        ju(_, d);
                        const E = d.slice(0, Math.ceil(3)),
                            F = d.slice(Math.ceil(3), 6);
                        return n().createElement(
                            'div',
                            { className: Ru },
                            n().createElement(Pu, { position: Nu.Left, steps: E }),
                            n().createElement(we, { steps: _ }),
                            n().createElement(Pu, { position: Nu.Right, steps: F }),
                        );
                    };
            },
            583: (e, u, t) => {
                t.d(u, { D: () => b });
                var a = t(6483),
                    r = t.n(a),
                    i = t(5626),
                    n = t(6373),
                    o = t(9338),
                    s = t(2344),
                    l = t(9924),
                    c = t(3649),
                    _ = t(6179),
                    d = t.n(_),
                    E = t(8434);
                const F = {
                    base: 'PersistentBonuses_base_46',
                    base__medium: 'PersistentBonuses_base__medium_43',
                    base__large: 'PersistentBonuses_base__large_a8',
                    base__extraLarge: 'PersistentBonuses_base__extraLarge_8e',
                    description: 'PersistentBonuses_description_16',
                    description__withOpacity: 'PersistentBonuses_description__withOpacity_11',
                    bonusBase: 'PersistentBonuses_bonusBase_b8',
                    roleIcon: 'PersistentBonuses_roleIcon_29',
                };
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        A.apply(this, arguments)
                    );
                }
                const m = R.strings.veh_post_progression.vehPostProgressionView.persistentBonuses,
                    b = (0, _.memo)(
                        ({ isDescriptionWithOpacity: e = !1, areBonusValuesDisplayed: u = !0, vehicleRole: t }) => {
                            const a = (0, s.tT)('model.persistentBonuses.items'),
                                b = (0, o.Zj)(a),
                                D = R.images.gui.maps.icons.roleExp.roles.c_24x24.$dyn(t),
                                C = (0, _.useMemo)(() => ({ backgroundImage: `url('${D}')` }), [D]),
                                p = (0, _.useMemo)(
                                    () =>
                                        (0, c.uF)(R.strings.menu.roleExp.roleName.$dyn(t), {
                                            groupName: R.strings.menu.roleExp.roleGroupName.$dyn(t),
                                        }),
                                    [t],
                                ),
                                g = (0, l.Z)(['base'], F);
                            if (0 === b.length) return d().createElement('div', { className: g.base });
                            const B = ((e, u) =>
                                    1 === e.length
                                        ? u
                                            ? m.nonZeroStepOneBonus()
                                            : m.zeroStepOneBonus()
                                        : 2 === e.length
                                          ? u
                                              ? m.nonZeroStepTwoBonuses()
                                              : m.zeroStepTwoBonuses()
                                          : u
                                            ? m.nonZeroStepMultipleBonuses()
                                            : m.zeroStepMultipleBonuses())(b, u),
                                v = ((e, u) => {
                                    const t = { isUnitVisible: u, classes: { base: F.bonusBase }, keepPositive: !u };
                                    return 1 === e.length
                                        ? { bonus: d().createElement(E.r, A({}, t, { bonus: e[0], key: 0 })) }
                                        : 2 === e.length
                                          ? {
                                                bonus1: d().createElement(E.r, A({}, t, { bonus: e[0], key: 0 })),
                                                bonus2: d().createElement(E.r, A({}, t, { bonus: e[1], key: 1 })),
                                            }
                                          : {
                                                bonuses: e.reduce(
                                                    (u, a, r) => (
                                                        u.push(d().createElement(E.r, A({}, t, { bonus: a, key: r }))),
                                                        r !== e.length - 1 && u.push(m.bonusesSeparator()),
                                                        u
                                                    ),
                                                    [],
                                                ),
                                            };
                                })(b, u),
                                h = r()(F.description, e && F.description__withOpacity);
                            return d().createElement(
                                'div',
                                { className: g.base },
                                D &&
                                    d().createElement(
                                        n.i,
                                        { body: p },
                                        d().createElement('div', { className: F.roleIcon, style: C }),
                                    ),
                                d().createElement(
                                    'div',
                                    { className: h },
                                    d().createElement(i.z, { text: B, binding: v }),
                                ),
                            );
                        },
                    );
            },
            2569: (e, u, t) => {
                t.d(u, { m: () => o });
                var a = t(6179),
                    r = t.n(a),
                    i = t(5634),
                    n = t(8247);
                const o = r().createContext({
                    progressionType: n.e.Configuration,
                    progressionState: i.T.Initial,
                    progressionAvailability: i.G.Available,
                });
            },
            3137: (e, u, t) => {
                t.d(u, { b: () => r });
                const a = { value: 0, name: t(329).V2.credits, isEnough: !1 },
                    r = (e) => (e && e.price && e.price[0] && e.price[0].value) || a;
            },
            7485: (e, u, t) => {
                function a(e) {
                    return e.reduce((e, u) => ((e[u.id] = u.stepState), e), {});
                }
                function r(e) {
                    return e.reduce((e, u) => ((e[u.id] = u.selectedIdx), e), {});
                }
                t.d(u, { F4: () => r, ws: () => a });
            },
            5135: (e, u, t) => {
                function a(e) {
                    return `${e}%`;
                }
                t.d(u, { Q: () => a });
            },
            8247: (e, u, t) => {
                let a;
                t.d(u, { e: () => a }),
                    (function (e) {
                        (e.Configuration = 'Configuration'), (e.Comparison = 'Comparison');
                    })(a || (a = {}));
            },
            1532: (e, u, t) => {
                t.d(u, { W: () => a });
                const a = 'mul';
            },
            5634: (e, u, t) => {
                let a, r;
                t.d(u, { G: () => a, T: () => r }),
                    (function (e) {
                        (e.Available = 'available'),
                            (e.UnavailableElite = 'unavailableElite'),
                            (e.UnavailablePurchase = 'unavailablePurchase'),
                            (e.UnavailableRent = 'unavailableRent'),
                            (e.UnavailableRentOver = 'unavailableRentOver'),
                            (e.UnavailableBattle = 'unavailableBattle'),
                            (e.UnavailableFormation = 'unavailableFormation'),
                            (e.UnavailableBreaker = 'unavailableBreaker'),
                            (e.UnavailableBroken = 'unavailableBroken');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Initial = 'initial'), (e.Transitional = 'transitional'), (e.Final = 'final');
                    })(r || (r = {}));
            },
            6880: (e, u, t) => {
                t.d(u, { Z: () => a });
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
                    base__firstHover: 'CButton_base__firstHover_d5',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
            },
            8460: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = {
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
            },
            5287: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, a] = deferred[s], i = !0, n = 0; n < u.length; n++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[n]))
                            ? u.splice(n--, 1)
                            : ((i = !1), a < r && (r = a));
                    if (i) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, a];
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
        (__webpack_require__.j = 573),
        (() => {
            var e = { 573: 0, 743: 0, 183: 0, 331: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [i, n, o] = t,
                        s = 0;
                    if (i.some((u) => 0 !== e[u])) {
                        for (a in n) __webpack_require__.o(n, a) && (__webpack_require__.m[a] = n[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < i.length; s++)
                        (r = i[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [428], () => __webpack_require__(2007));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
