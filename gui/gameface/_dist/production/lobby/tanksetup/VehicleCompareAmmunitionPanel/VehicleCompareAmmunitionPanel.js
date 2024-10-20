(() => {
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var n = t(6483),
                    a = t.n(n),
                    i = t(7727),
                    s = t(6179),
                    r = t.n(s),
                    o = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: c,
                    mixClass: _,
                    soundHover: d,
                    soundClick: E,
                    onMouseEnter: m,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: D,
                    onMouseLeave: b,
                    onClick: p,
                }) => {
                    const g = (0, s.useRef)(null),
                        C = (0, s.useState)(t),
                        B = C[0],
                        h = C[1],
                        f = (0, s.useState)(!1),
                        S = f[0],
                        v = f[1],
                        w = (0, s.useState)(!1),
                        x = w[0],
                        y = w[1],
                        T = (0, s.useCallback)(() => {
                            c || (g.current && (g.current.focus(), h(!0)));
                        }, [c]),
                        k = (0, s.useCallback)(
                            (e) => {
                                B && null !== g.current && !g.current.contains(e.target) && h(!1);
                            },
                            [B],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                c || (p && p(e));
                            },
                            [c, p],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                c || (null !== d && (0, i.G)(d), m && m(e), y(!0));
                            },
                            [c, d, m],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                c || (D && D(e), v(!1));
                            },
                            [c, D],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                c || (null !== E && (0, i.G)(E), F && F(e), t && T(), v(!0));
                            },
                            [c, E, F, T, t],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                c || (b && b(e), v(!1));
                            },
                            [c, b],
                        ),
                        H = a()(
                            o.Z.base,
                            o.Z[`base__${n}`],
                            {
                                [o.Z.base__disabled]: c,
                                [o.Z[`base__${u}`]]: u,
                                [o.Z.base__focus]: B,
                                [o.Z.base__highlightActive]: S,
                                [o.Z.base__firstHover]: x,
                            },
                            _,
                        ),
                        G = a()(o.Z.state, o.Z.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', k),
                                () => {
                                    document.removeEventListener('mousedown', k);
                                }
                            ),
                            [k],
                        ),
                        (0, s.useEffect)(() => {
                            h(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: g,
                                className: H,
                                onMouseEnter: O,
                                onMouseMove: M,
                                onMouseUp: L,
                                onMouseDown: N,
                                onMouseLeave: P,
                                onClick: I,
                            },
                            n !== l.L.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: o.Z.back }),
                                    r().createElement('span', { className: o.Z.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: G },
                                r().createElement('span', { className: o.Z.stateDisabled }),
                                r().createElement('span', { className: o.Z.stateHighlightHover }),
                                r().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _ = (0, s.memo)(c);
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
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => _ });
                var n = t(3138),
                    a = t(6179),
                    i = t(1043),
                    s = t(5262);
                const r = n.O.client.getSize('rem'),
                    o = r.width,
                    l = r.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, i.j)),
                    _ = (0, a.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t.n(n),
                    i = t(6536),
                    s = t(3495),
                    r = t(1043),
                    o = t(5262),
                    l = t(3138);
                (0, n.memo)(({ children: e }) => {
                    const u = (0, n.useContext)(s.Y),
                        t = (0, n.useState)(u),
                        c = t[0],
                        _ = t[1],
                        d = (0, n.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(u);
                            _(Object.assign({ width: t, height: n }, (0, o.T)(t, n, r.j)));
                        }, []);
                    (0, i.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', d), [d]);
                    const E = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return a().createElement(s.Y.Provider, { value: E }, e);
                });
            },
            6010: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t(7382),
                    i = t(3495);
                const s = ['children'];
                const r = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, s);
                    const r = (0, n.useContext)(i.Y),
                        o = r.extraLarge,
                        l = r.large,
                        c = r.medium,
                        _ = r.small,
                        d = r.extraSmall,
                        E = r.extraLargeWidth,
                        m = r.largeWidth,
                        A = r.mediumWidth,
                        F = r.smallWidth,
                        D = r.extraSmallWidth,
                        b = r.extraLargeHeight,
                        p = r.largeHeight,
                        g = r.mediumHeight,
                        C = r.smallHeight,
                        B = r.extraSmallHeight,
                        h = { extraLarge: b, large: p, medium: g, small: C, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && _) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && E) return (0, a.H)(u, t, h);
                        if (t.largeWidth && m) return (0, a.H)(u, t, h);
                        if (t.mediumWidth && A) return (0, a.H)(u, t, h);
                        if (t.smallWidth && F) return (0, a.H)(u, t, h);
                        if (t.extraSmallWidth && D) return (0, a.H)(u, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && b) return u;
                            if (t.largeHeight && p) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                };
                r.defaultProps = {
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
                (0, n.memo)(r);
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
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
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
                t.d(u, { T: () => a, u: () => n }),
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
            8089: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t.n(n),
                    i = t(6483),
                    s = t.n(i),
                    r = t(7727),
                    o = t(7476);
                const l = [
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
                function c() {
                    return (
                        (c =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                class _ extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, r.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, r.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            i = e.side,
                            r = e.type,
                            _ = e.classNames,
                            d = e.onMouseEnter,
                            E = e.onMouseLeave,
                            m = e.onMouseDown,
                            A = e.onMouseUp,
                            F =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(e, l)),
                            D = s()(o.Z.base, o.Z[`base__${r}`], o.Z[`base__${i}`], null == _ ? void 0 : _.base),
                            b = s()(o.Z.icon, o.Z[`icon__${r}`], o.Z[`icon__${i}`], null == _ ? void 0 : _.icon),
                            p = s()(o.Z.glow, null == _ ? void 0 : _.glow),
                            g = s()(o.Z.caption, o.Z[`caption__${r}`], null == _ ? void 0 : _.caption),
                            C = s()(o.Z.goto, null == _ ? void 0 : _.goto);
                        return a().createElement(
                            'div',
                            c(
                                {
                                    className: D,
                                    onMouseEnter: this._onMouseEnter(d),
                                    onMouseLeave: this._onMouseLeave(E),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                F,
                            ),
                            'info' !== r && a().createElement('div', { className: o.Z.shine }),
                            a().createElement('div', { className: b }, a().createElement('div', { className: p })),
                            a().createElement('div', { className: g }, u),
                            n && a().createElement('div', { className: C }, n),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => o });
                var n = t(6179),
                    a = t.n(n),
                    i = t(2056);
                const s = ['children'];
                function r() {
                    return (
                        (r =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        r.apply(this, arguments)
                    );
                }
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, s);
                    return a().createElement(
                        i.u,
                        r(
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
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var n = t(7902),
                    a = t(4179),
                    i = t(6179);
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
                function r(e) {
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
                const o = (e, u, t = {}, n = 0) => {
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
                            _ = e.onMouseDown,
                            d = e.onClick,
                            E = e.ignoreShowDelay,
                            m = void 0 !== E && E,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            D = e.decoratorId,
                            b = void 0 === D ? 0 : D,
                            p = e.isEnabled,
                            g = void 0 === p || p,
                            C = e.targetId,
                            B = void 0 === C ? 0 : C,
                            h = e.onShow,
                            f = e.onHide,
                            S = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, s);
                        const v = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, i.useMemo)(() => B || (0, n.F)().resId, [B]),
                            x = (0, i.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (o(t, b, { isMouseEvent: !0, on: !0, arguments: r(a) }, w),
                                    h && h(),
                                    (v.current.isVisible = !0));
                            }, [t, b, a, w, h]),
                            y = (0, i.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        o(t, b, { on: !1 }, w),
                                        v.current.isVisible && f && f(),
                                        (v.current.isVisible = !1);
                                }
                            }, [t, b, w, f]),
                            T = (0, i.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(v.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = v.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', T, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === g && y();
                            }, [g, y]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            );
                        return g
                            ? (0, i.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(x, m ? 100 : 400)),
                                                      l && l(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              y(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === F && y(), null == d || d(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === F && y(), null == _ || _(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      S,
                                  ),
                              )
                            : u;
                        var k;
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
            527: (e, u, t) => {
                'use strict';
                t.r(u), t.d(u, { mouse: () => r, onResize: () => i });
                var n = t(2472),
                    a = t(1176);
                const i = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const r = (function () {
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
                    const i = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${u}`,
                                        r = s[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, o),
                                        n(),
                                        () => {
                                            a &&
                                                (r(),
                                                window.removeEventListener(i, o),
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
                    return Object.assign({}, i, {
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
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => s,
                    });
                var n = t(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
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
                        addPreloadTexture: () => r,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => S,
                        events: () => i.U,
                        extraSize: () => v,
                        forceTriggerMouseMove: () => h,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => d,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => B,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => b,
                        resize: () => E,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => w,
                    });
                var n = t(3722),
                    a = t(6112),
                    i = t(6538),
                    s = t(8566);
                function r(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: b(u.x), y: b(u.y) };
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
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function h() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const S = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    v = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    i = 16,
                    s = 32,
                    r = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const i = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((a = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : s);
                        },
                        minimize() {
                            o(r);
                        },
                        move(e) {
                            o(i, { isMouseEvent: !0, on: e });
                        },
                    };
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
            8071: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => n });
                const n = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
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
            8526: (e, u, t) => {
                'use strict';
                t.d(u, { gd: () => r });
                var n = t(3138),
                    a = t(5521),
                    i = (t(4179), t(6179));
                const s = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function r(e = a.n.NONE, u = s, t = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== a.n.NONE)
                            return (
                                window.addEventListener('keydown', i, t),
                                () => {
                                    window.removeEventListener('keydown', i, t);
                                }
                            );
                        function i(a) {
                            if (a.keyCode === e) {
                                if (n.O.view.isEventHandled()) return;
                                n.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
            },
            9056: (e, u, t) => {
                'use strict';
                t.d(u, { m: () => o });
                var n = t(7902),
                    a = t(8071),
                    i = t(4179),
                    s = t(6179);
                const r = i.Sw.instance,
                    o = (e = 'model', u = !0) => {
                        const t = (0, s.useState)(0),
                            i = (t[0], t[1]),
                            o = (0, s.useMemo)(() => (0, n.F)(), []),
                            l = o.caller,
                            c = o.resId,
                            _ = (0, s.useMemo)(
                                () => (window.__feature && window.__feature !== l ? `children.${l}.${e}` : e),
                                [l, e],
                            ),
                            d = (0, s.useMemo)(
                                () =>
                                    ((e) => {
                                        const u = (0, a.M)(e, window);
                                        for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                        return u;
                                    })(_),
                                [_],
                            );
                        return (
                            (0, s.useEffect)(() => {
                                if (u) {
                                    const u = () => {
                                            i((e) => e + 1);
                                        },
                                        t = r.addCallback(e, u, c);
                                    return () => r.removeCallback(t, c);
                                }
                            }, [e, u, c]),
                            d
                        );
                    };
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
                t.d(u, {
                    DZ: () => c,
                    G: () => o,
                    MH: () => i,
                    UI: () => s,
                    hX: () => l,
                    u4: () => d,
                    v: () => _,
                    yW: () => r,
                });
                var n = t(8968);
                function a(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const i = a;
                function s(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function r(e, u) {
                    if (Array.isArray(e)) return e.every(u);
                    for (let t = 0; t < e.length; t++) {
                        if (!u(i(e, t), t, e)) return !1;
                    }
                    return !0;
                }
                function o(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(i(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                function l(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let a = 0; a < e.length; a++) {
                        var n;
                        const i = null == (n = e[a]) ? void 0 : n.value;
                        u(i, a, e) && t.push(i);
                    }
                    return t;
                }
                function c(e, u, t) {
                    const n = [];
                    for (let a = 0; a < e.length; a++) {
                        const s = i(e, a);
                        u(s, a, e) && n.push(t(s, a, e));
                    }
                    return n;
                }
                function _(e, u) {
                    return c(e, n.C, u);
                }
                function d(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let n = t;
                    for (let t = 0; t < e.length; t++) {
                        n = u(n, i(e, t), t, e);
                    }
                    return n;
                }
            },
            8968: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                t.d(u, { C: () => n });
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
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => i });
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
                        const i = n.O.view.addModelObserver(e, t, a);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                a.__instance = void 0;
                const i = a;
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
                t.d(u, { Sw: () => i.Z, B0: () => o, c9: () => p, ry: () => b });
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
                var i = t(1358);
                const s = {
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
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    m = t(3138);
                const A = ['args'];
                function F(e, u, t, n, a, i, s) {
                    try {
                        var r = e[i](s),
                            o = r.value;
                    } catch (e) {
                        return void t(e);
                    }
                    r.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (n, a) {
                                        var i = e.apply(u, t);
                                        function s(e) {
                                            F(i, n, a, s, r, 'next', e);
                                        }
                                        function r(e) {
                                            F(i, n, a, s, r, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, A);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => p(o.CLOSE),
                    C = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var B = t(7572);
                const h = a.instance,
                    f = {
                        DataTracker: i.Z,
                        ViewModel: B.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => p(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => p(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), i) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                r = t.getBoundingClientRect(),
                                l = r.x,
                                c = r.y,
                                _ = r.width,
                                d = r.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            p(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: D(E),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, g);
                        },
                        handleViewEvent: p,
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
                        ClickOutsideManager: h,
                        SystemLocale: s,
                        UserLocale: r,
                    };
                window.ViewEnvHelper = f;
            },
            1922: (e, u, t) => {
                'use strict';
                t.d(u, { cJ: () => n });
                t(6483), t(7739), t(6179), t(1960);
                let n;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(n || (n = {}));
            },
            5348: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t.n(n),
                    i = t(493),
                    s = t.n(i),
                    r = t(9056),
                    o = t(8526),
                    l = t(5521),
                    c = t(6483),
                    _ = t.n(c),
                    d = t(3138);
                const E = (0, n.createContext)(null);
                function m() {
                    return (0, n.useContext)(E);
                }
                const A = (e) => {
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
                var F = t(7739),
                    D = t(5262);
                let b;
                function p(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(b || (b = {}));
                const g = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    C = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    B = (e, u, t = b.left) => e.split(u).reduce(t === b.left ? g : C, []),
                    h = (() => {
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
                    f = ['zh_cn', 'zh_sg', 'zh_tw'],
                    S = (e, u = b.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return f.includes(t)
                            ? h(e)
                            : ((e, u = b.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = e.replace(/&nbsp;/g, ' ');
                                  return B(a, /( )/, u).forEach((e) => (t = t.concat(B(e, n, b.left)))), t;
                              })(e, u);
                    };
                function v(e, u, t) {
                    const a = (0, n.useContext)(F.YN);
                    let i = Object.entries(a).filter(([e, u]) => !0 === u && e in D.u);
                    return (
                        t && (i = i.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const n = i.map((e) =>
                                _()(u[((e, u) => e + '__' + u)(t, e[0])], u[((e, u) => e + p(u))(t, e[0])]),
                            );
                            return (e[t] = _()(u[t], ...n)), e;
                        }, {})
                    );
                }
                var w = t(7902),
                    x = t(8071),
                    y = t(6536),
                    T = t(4179);
                const k = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    I = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    O = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = (0, x.M)(`${e}.${t}`, window);
                                return k(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    M = (e) => {
                        const u = ((e) => {
                                const u = (0, w.F)(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: I(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const a = (0, x.M)(I(t, `${u}.${n}`), window);
                                    return k(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    L = T.Sw.instance;
                let N;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(N || (N = {}));
                const P = (e = 'model', u = N.Deep) => {
                    const t = (0, n.useState)(0),
                        a = (t[0], t[1]),
                        i = (0, n.useMemo)(() => (0, w.F)(), []),
                        s = i.caller,
                        r = i.resId,
                        o = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                            [s, e],
                        ),
                        l = (0, n.useState)(() =>
                            ((e) => {
                                const u = (0, x.M)(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return k(u) ? u.value : u;
                            })(O(o)),
                        ),
                        c = l[0],
                        _ = l[1],
                        d = (0, n.useRef)(-1);
                    return (
                        (0, y.Z)(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? N.Deep : N.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== N.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === N.Deep
                                            ? (e === c && a((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    n = M(e);
                                d.current = L.addCallback(n, t, r, u === N.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (u !== N.None)
                                return () => {
                                    L.removeCallback(d.current, r);
                                };
                        }, [r, u]),
                        c
                    );
                };
                var H = t(9480);
                const G = (e, u, t, a = []) => {
                    const i = ((e, u = []) => {
                        const t = (0, n.useRef)(),
                            a = (0, n.useCallback)((...u) => {
                                t.current && t.current(), (t.current = e(...u));
                            }, u);
                        return (
                            (0, n.useEffect)(
                                () => () => {
                                    t.current && t.current();
                                },
                                [a],
                            ),
                            a
                        );
                    })(
                        () =>
                            A(() =>
                                A(() => {
                                    if (e.current) {
                                        const t = e.current.getBoundingClientRect(),
                                            n = {
                                                width: d.O.view.pxToRem(t.width),
                                                height: d.O.view.pxToRem(t.height),
                                                offsetX: d.O.view.pxToRem(t.left),
                                                offsetY: d.O.view.pxToRem(t.top),
                                            };
                                        window.tutorialApi.updateComponents(), u(n);
                                    }
                                }),
                            ),
                        [u, e],
                    );
                    return (
                        (0, n.useEffect)(() => {
                            i();
                        }, [i, ...a]),
                        (0, n.useEffect)(() => {
                            if (t)
                                return (
                                    engine.on('clientResized', i),
                                    () => {
                                        engine.off('clientResized', i);
                                    }
                                );
                        }, [t, i]),
                        i
                    );
                };
                var $ = t(9887),
                    W = t.n($),
                    j = t(1043);
                let z, U, X;
                !(function (e) {
                    (e[(e.ExtraSmall = j.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = j.j.small.width)] = 'Small'),
                        (e[(e.Medium = j.j.medium.width)] = 'Medium'),
                        (e[(e.Large = j.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = j.j.extraLarge.width)] = 'ExtraLarge');
                })(z || (z = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = j.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = j.j.small.width)] = 'Small'),
                            (e[(e.Medium = j.j.medium.width)] = 'Medium'),
                            (e[(e.Large = j.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = j.j.extraLarge.width)] = 'ExtraLarge');
                    })(U || (U = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = j.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = j.j.small.height)] = 'Small'),
                            (e[(e.Medium = j.j.medium.height)] = 'Medium'),
                            (e[(e.Large = j.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = j.j.extraLarge.height)] = 'ExtraLarge');
                    })(X || (X = {}));
                const V = () => {
                        const e = (0, n.useContext)(F.YN),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return z.ExtraLarge;
                                    case e.large:
                                        return z.Large;
                                    case e.medium:
                                        return z.Medium;
                                    case e.small:
                                        return z.Small;
                                    case e.extraSmall:
                                        return z.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), z.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return U.ExtraLarge;
                                    case e.largeWidth:
                                        return U.Large;
                                    case e.mediumWidth:
                                        return U.Medium;
                                    case e.smallWidth:
                                        return U.Small;
                                    case e.extraSmallWidth:
                                        return U.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), U.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return X.ExtraLarge;
                                    case e.largeHeight:
                                        return X.Large;
                                    case e.mediumHeight:
                                        return X.Medium;
                                    case e.smallHeight:
                                        return X.Small;
                                    case e.extraSmallHeight:
                                        return X.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), X.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    K = ['xl', 'lg', 'md', 'sm', 'xs'],
                    q = (e) => e.includes('_') && ((e) => K.includes(e))(e.split('_').at(-1)),
                    Y = [z.ExtraLarge, z.Large, z.Medium, z.Small, z.ExtraSmall],
                    Z = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (q(n)) {
                                const a = n.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const i = Y.indexOf(u),
                                    s = (-1 !== i ? K.slice(i) : [])
                                        .map((e) => a + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    r = s ? e[s] : void 0;
                                return (t[a] = void 0 !== r ? r : e[a]), t;
                            }
                            const a = e[n];
                            return (
                                void 0 === a ||
                                    ((e, u) => K.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = a),
                                t
                            );
                        }, {}),
                    J = (e, u = Z) => {
                        const t = (
                            (e, u = Z) =>
                            (t) => {
                                const i = V().mediaSize,
                                    s = (0, n.useMemo)(() => u(t, i), [t, i]);
                                return a().createElement(e, s);
                            }
                        )(e, u);
                        return a().memo((u) =>
                            Object.keys(u).some((e) => q(e) && void 0 !== u[e])
                                ? a().createElement(t, u)
                                : a().createElement(e, u),
                        );
                    },
                    Q = {
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
                    ee = [
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
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                Object.keys(W());
                const te = {
                        XL: { mt: Q.mt__XL, mr: Q.mr__XL, mb: Q.mb__XL, ml: Q.ml__XL },
                        LG: { mt: Q.mt__LG, mr: Q.mr__LG, mb: Q.mb__LG, ml: Q.ml__LG },
                        MDp: { mt: Q.mt__MDp, mr: Q.mr__MDp, mb: Q.mb__MDp, ml: Q.ml__MDp },
                        MD: { mt: Q.mt__MD, mr: Q.mr__MD, mb: Q.mb__MD, ml: Q.ml__MD },
                        SMp: { mt: Q.mt__SMp, mr: Q.mr__SMp, mb: Q.mb__SMp, ml: Q.ml__SMp },
                        SM: { mt: Q.mt__SM, mr: Q.mr__SM, mb: Q.mb__SM, ml: Q.ml__SM },
                        XS: { mt: Q.mt__XS, mr: Q.mr__XS, mb: Q.mb__XS, ml: Q.ml__XS },
                    },
                    ne = (Object.keys(te), ['mt', 'mr', 'mb', 'ml']),
                    ae = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    ie = J((e) => {
                        let u = e.className,
                            t = e.width,
                            i = e.height,
                            s = e.m,
                            r = e.mt,
                            o = void 0 === r ? s : r,
                            l = e.mr,
                            c = void 0 === l ? s : l,
                            d = e.mb,
                            E = void 0 === d ? s : d,
                            m = e.ml,
                            A = void 0 === m ? s : m,
                            F = e.column,
                            D = e.row,
                            b = e.flexDirection,
                            p = void 0 === b ? (F ? 'column' : D && 'row') || void 0 : b,
                            g = e.flexStart,
                            C = e.center,
                            B = e.flexEnd,
                            h = e.spaceBetween,
                            f = e.spaceAround,
                            S = e.justifyContent,
                            v =
                                void 0 === S
                                    ? (g ? 'flex-start' : C && 'center') ||
                                      (B && 'flex-end') ||
                                      (h && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : S,
                            w = e.alignItems,
                            x = void 0 === w ? (g ? 'flex-start' : C && 'center') || (B && 'flex-end') || void 0 : w,
                            y = e.alignSelf,
                            T = e.wrap,
                            k = e.flexWrap,
                            I = void 0 === k ? (T ? 'wrap' : void 0) : k,
                            R = e.grow,
                            O = e.shrink,
                            M = e.flex,
                            L = void 0 === M ? (R || O ? `${R ? 1 : 0} ${O ? 1 : 0} auto` : void 0) : M,
                            N = e.style,
                            P = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, ee);
                        const G = (0, n.useMemo)(() => {
                                const e = { mt: o, mr: c, mb: E, ml: A },
                                    u = ((e) =>
                                        ne.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(te[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        ne.reduce((u, t) => {
                                            const n = e[t];
                                            return 'number' == typeof n && (u[ae[t]] = n + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, N, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== i && 'number' == typeof i ? i + 'rem' : i,
                                        flex: L,
                                        alignSelf: y,
                                        display: p || x ? 'flex' : void 0,
                                        flexDirection: p,
                                        flexWrap: I,
                                        justifyContent: v,
                                        alignItems: x,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, i, o, c, E, A, N, L, y, p, I, v, x]),
                            $ = G.computedStyle,
                            W = G.computedClassNames;
                        return a().createElement('div', ue({ className: _()(Q.base, ...W, u), style: $ }, H), P);
                    }),
                    se = 'FormatText_base_d0',
                    re = ({ binding: e, text: u = '', classMix: t, alignment: i = b.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, s) =>
                                      a().createElement(
                                          'div',
                                          { className: _()(se, t), key: `${u}-${s}` },
                                          ((e, u, t) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (t && e in t ? t[e] : S(e, u))))(u, i, e).map((e, u) =>
                                              a().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var oe = t(3532),
                    le = t.n(oe);
                const ce = {
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
                    _e = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                Object.keys(W());
                const Ee = Object.keys(le()),
                    me = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Ae = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Fe = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    De = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    be =
                        (Object.keys(De),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': me,
                            'heading-H36': me,
                            'heading-H28': Ae,
                            'heading-H24': Ae,
                            'heading-H24R': Ae,
                            'heading-H22': Ae,
                            'heading-H20R': Ae,
                            'heading-H18': Ae,
                            'heading-H15': Fe,
                            'heading-H14': Fe,
                            'paragraph-P24': Ae,
                            'paragraph-P18': Ae,
                            'paragraph-P16': Ae,
                            'paragraph-P14': Fe,
                            'paragraph-P12': Fe,
                            'paragraph-P10': Fe,
                        }),
                    pe =
                        (Object.keys(be),
                        (e) =>
                            e
                                ? ((e) => Ee.includes(e))(e)
                                    ? { colorClassName: ce[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    ge = J((e) => {
                        let u = e.text,
                            t = e.variant,
                            i = e.className,
                            s = e.color,
                            r = e.m,
                            o = e.mt,
                            l = void 0 === o ? r : o,
                            c = e.mr,
                            d = void 0 === c ? r : c,
                            E = e.mb,
                            m = void 0 === E ? r : E,
                            A = e.ml,
                            F = void 0 === A ? r : A,
                            D = e.style,
                            b = e.format,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, _e);
                        const g = (0, n.useMemo)(() => {
                                const e = pe(s),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, n), colorClassName: u };
                            }, [D, s]),
                            C = g.computedStyle,
                            B = g.colorClassName;
                        return a().createElement(
                            ie,
                            de(
                                {
                                    className: _()(ce.base, t && ce[t], B, i),
                                    style: C,
                                    mt: !0 === l ? be[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === d ? be[t || 'paragraph-P16'].mr : d,
                                    mb: !0 === m ? be[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === F ? be[t || 'paragraph-P16'].ml : F,
                                },
                                p,
                            ),
                            void 0 !== b ? a().createElement(re, de({}, b, { text: u })) : u,
                        );
                    });
                var Ce = t(7078),
                    Be = t(2056);
                const he = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function fe() {
                    return (
                        (fe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        fe.apply(this, arguments)
                    );
                }
                const Se = R.views.common.tooltip_window.simple_tooltip_content,
                    ve = (e) => {
                        let u = e.children,
                            t = e.body,
                            i = e.header,
                            s = e.note,
                            r = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, he);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: i, note: s, alert: r });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [r, t, i, s, o]);
                        return a().createElement(
                            Be.u,
                            fe(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? Se.SimpleTooltipHtmlContent('resId') : Se.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const xe = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(ve, u, n);
                        const i = u.contentId,
                            s = u.args,
                            r = null == s ? void 0 : s.contentId;
                        return i || r
                            ? a().createElement(Be.u, we({}, u, { contentId: i || r }), n)
                            : a().createElement(Ce.t, u, n);
                    },
                    ye = 'AbilitySkillSlot_base_d7',
                    Te = 'AbilitySkillSlot_slotText_1e',
                    ke = 'AbilitySkillSlot_icon_d2',
                    Ie = ({ skillName: e, tooltipId: u, tooltipHeader: t, tooltipBody: i, className: s }) => {
                        const r = (0, n.useMemo)(
                            () => ({
                                args: { tooltipId: u, skillName: e, header: t, body: i, hasHtmlContent: !0 },
                                header: t,
                                body: i,
                                ignoreShowDelay: !0,
                            }),
                            [e, t, i, u],
                        );
                        return a().createElement(
                            xe,
                            { tooltipArgs: r, className: _()(ye, s) },
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(ge, {
                                    className: Te,
                                    text: R.strings.tank_setup.tooltips.abilitySlot.title(),
                                }),
                                a().createElement('div', {
                                    className: ke,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                    },
                                }),
                            ),
                        );
                    },
                    Re = {
                        base: 'AmmunitionPanel_base_f8',
                        base__locked: 'AmmunitionPanel_base__locked_71',
                        base__disabled: 'AmmunitionPanel_base__disabled_41',
                        base__hidden: 'AmmunitionPanel_base__hidden_10',
                        border: 'AmmunitionPanel_border_38',
                        border__hidden: 'AmmunitionPanel_border__hidden_7d',
                        roleSkillSlot: 'AmmunitionPanel_roleSkillSlot_21',
                        roleSkillSlot__battle: 'AmmunitionPanel_roleSkillSlot__battle_e4',
                        roleSkillSlot__small: 'AmmunitionPanel_roleSkillSlot__small_8b',
                        roleSkillSlot__extraSmall: 'AmmunitionPanel_roleSkillSlot__extraSmall_7a',
                        roleSkillSlot__prebattle: 'AmmunitionPanel_roleSkillSlot__prebattle_00',
                        abilitySkillSlot: 'AmmunitionPanel_abilitySkillSlot_50',
                        abilitySkillSlot__battle: 'AmmunitionPanel_abilitySkillSlot__battle_ac',
                        abilitySkillSlot__small: 'AmmunitionPanel_abilitySkillSlot__small_c1',
                        abilitySkillSlot__extraSmall: 'AmmunitionPanel_abilitySkillSlot__extraSmall_bd',
                        abilitySkillSlot__prebattle: 'AmmunitionPanel_abilitySkillSlot__prebattle_f0',
                    },
                    Oe = 'Border_base_f9',
                    Me = 'Border_border_83',
                    Le = 'Border_wrapper_17',
                    Ne = 'Border_active_e8',
                    Pe = (0, n.memo)(({ slotOffset: e, slotWidth: u, onAnimationEnd: t }) => {
                        const i = (0, n.useRef)(null),
                            s = (0, n.useRef)(!1);
                        (0, n.useEffect)(() => {
                            s.current = !0;
                        }, [e, u]);
                        const r = (0, n.useCallback)(() => {
                            s.current && t(), (s.current = !1);
                        }, [t]);
                        (0, n.useEffect)(() => {
                            const e = i.current;
                            return (
                                e && e.addEventListener('transitionend', r),
                                () => {
                                    e && e.removeEventListener('transitionend', r);
                                }
                            );
                        }, [r]);
                        const o = (0, n.useMemo)(() => ({ left: e }), [e]),
                            l = (0, n.useMemo)(() => ({ width: u }), [u]);
                        return a().createElement(
                            'div',
                            { className: Oe },
                            a().createElement(
                                'div',
                                { ref: i, className: Me, style: o },
                                a().createElement(
                                    'div',
                                    { className: Le },
                                    a().createElement('div', { className: Ne, style: l }),
                                ),
                            ),
                        );
                    });
                let He;
                !(function (e) {
                    (e.SHORT_DATE = 'short-date'),
                        (e.SHORT_TIME = 'short-time'),
                        (e.SHORT_DATE_TIME = 'short-date-time'),
                        (e.FULL_DATE = 'full-date'),
                        (e.FULL_DATE_TIME = 'full-date-time'),
                        (e.MONTH = 'month'),
                        (e.MONTH_DATE = 'month-date'),
                        (e.DATE_MONTH = 'date-month'),
                        (e.MONTH_YEAR = 'month-year'),
                        (e.WEEK_DAY = 'week-day'),
                        (e.WEEK_DAY_TIME = 'week-day-time'),
                        (e.YEAR = 'year'),
                        (e.DATE_YEAR = 'date-year');
                })(He || (He = {}));
                Date.now();
                var Ge = t(9344),
                    $e = t(2558),
                    We = t(8934);
                const je = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    ze = 'up',
                    Ue = 'down',
                    Xe = ({ children: e, index: u, setSetupSwitching: t, disabled: i = !1 }) => {
                        const s = (0, n.useRef)(1 - u),
                            r = (0, n.useMemo)(() => {
                                const e = ((t = u), (n = s.current), t === n ? '' : t > n ? Ue : ze);
                                var t, n;
                                const a = e && p(e);
                                return i ? {} : { enter: je[`base__enter${a}`], exit: je[`base__exit${a}`] };
                            }, [u, i]);
                        return (
                            (s.current = u),
                            a().createElement(
                                $e.Z,
                                { className: je.base },
                                a().createElement(
                                    We.Z,
                                    {
                                        timeout: 300,
                                        key: u,
                                        classNames: r,
                                        onEnter: () => t(!0),
                                        onExited: () => t(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    };
                let Ve;
                !(function (e) {
                    (e.Hangar = 'hangar'),
                        (e.Setup = 'setup'),
                        (e.Compare = 'compare'),
                        (e.Battle = 'battle'),
                        (e.Respawn = 'respawn'),
                        (e.Prebattle = 'prebattle');
                })(Ve || (Ve = {}));
                const Ke = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    qe = (e) => e === Ve.Battle || e === Ve.Prebattle,
                    Ye = (e) => !qe(e),
                    Ze = (e) => qe(e) || e === Ve.Respawn;
                var Je = t(7383),
                    Qe = t(9152),
                    eu = t(7727);
                function uu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return tu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return tu(e, u);
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
                function tu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const nu = (e, u = []) => {
                        const t = document.getElementById('root');
                        t && (t.style.cursor = e ? 'grabbing' : 'default');
                        for (var n, a = uu(u); !(n = a()).done; ) {
                            const u = n.value,
                                t = document.getElementById(u);
                            t && (t.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    au = (e, u, t) => {
                        let n = '',
                            a = 8e3;
                        for (var i, s = uu(t); !(i = s()).done; ) {
                            const e = i.value,
                                t = Math.abs(e.centerX - u);
                            t < a && ((n = e.id), (a = t));
                        }
                        return n;
                    },
                    iu = (e, u) => {
                        const t = u.find((u) => u.id === e);
                        return t ? t.centerX : 0;
                    };
                let su, ru;
                !(function (e) {
                    (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                })(su || (su = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(ru || (ru = {}));
                const ou = (e) => `panel-${e}-section`,
                    lu = (e, u) => {
                        const t = ou(e),
                            n = u.filter((e) => e !== t);
                        return { selfId: t, blockOnGrabIds: [Qe.y, ...n] };
                    },
                    cu = ({ baseId: e, slotsLength: u, handleSwap: t, setIsExitBlocked: a, syncInitiator: i }) => {
                        const s = ((e, u, t) => {
                                const a = (0, n.useRef)([]),
                                    i = (0, n.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    s = (0, n.useState)({ activeDragId: '', potentialDropId: '' }),
                                    r = s[0],
                                    o = s[1],
                                    l = (0, n.useCallback)((e) => {
                                        i.current.dropId ||
                                            i.current.prevPotentialDropId ||
                                            ((i.current.prevPotentialDropId = e),
                                            o({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    c = (0, n.useCallback)((e, u) => {
                                        if (a.current) {
                                            const t = au(0, u, a.current);
                                            t !== i.current.prevPotentialDropId &&
                                                ((i.current.prevPotentialDropId = t),
                                                o({ activeDragId: e, potentialDropId: t }));
                                        }
                                    }, []),
                                    _ = (0, n.useCallback)((e, u) => {
                                        if (a.current && u) {
                                            const t = i.current,
                                                n = au(0, u, a.current);
                                            (t.dropId = n),
                                                (t.dragId = e),
                                                (t.prevPotentialDropId = ''),
                                                o({ activeDragId: e, potentialDropId: '' }),
                                                n !== e && (0, eu.G)('cons_equipment_swipe');
                                        }
                                    }, []),
                                    d = (0, n.useCallback)(() => {
                                        const e = i.current,
                                            u = e.dragId,
                                            t = e.dropId,
                                            n = e.prevPotentialDropId;
                                        (u || t || n) &&
                                            ((i.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            o({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    E = (0, n.useCallback)(
                                        (e) => {
                                            const u = i.current.dropId;
                                            u && u !== e ? t(e, u) : d();
                                        },
                                        [d, t],
                                    ),
                                    m = (0, n.useCallback)((e, u) => {
                                        const t = a.current.find((u) => u.id === e);
                                        t && u && (t.centerX = u);
                                    }, []),
                                    A = (0, n.useCallback)(
                                        (e, u) => {
                                            const t = u.dragId,
                                                n = u.currentCenterX;
                                            switch (e) {
                                                case ru.Ready:
                                                    return m(t, n);
                                                case ru.DragStart:
                                                    return l(t);
                                                case ru.Drag:
                                                    return c(t, n);
                                                case ru.Drop:
                                                    return _(t, n);
                                                case ru.DropExit:
                                                    return E(t);
                                                default:
                                                    return;
                                            }
                                        },
                                        [l, c, _, E, m],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        if (e !== a.current.length) {
                                            const t = new Array(e).fill(null);
                                            a.current = t.map((e, t) => ({ id: `${u}-${t}`, centerX: 0 }));
                                        }
                                    }, [e, u]),
                                    {
                                        dragState: r,
                                        handleGrabberAction: A,
                                        getForceCenterX: (0, n.useCallback)((e) => {
                                            const u = i.current,
                                                t = u.dragId,
                                                n = u.dropId;
                                            return e === t ? iu(n, a.current) : e === n ? iu(t, a.current) : 0;
                                        }, []),
                                        resetDragResults: d,
                                    }
                                );
                            })(u, e, t),
                            r = s.dragState,
                            o = s.handleGrabberAction,
                            l = s.getForceCenterX,
                            c = s.resetDragResults,
                            _ = (0, n.useCallback)(
                                (e, u) => {
                                    if (a)
                                        switch (e) {
                                            case ru.DragStart:
                                            case ru.Drag:
                                                a(!0);
                                                break;
                                            default:
                                                a(!1);
                                        }
                                    o(e, u);
                                },
                                [o, a],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                a && a(!1);
                            }, [a]),
                            (0, n.useEffect)(() => {
                                c();
                            }, [i, c]),
                            { handleGrabberAction: _, dragState: r, getForceCenterX: l }
                        );
                    },
                    _u = {
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
                    },
                    du = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function Eu() {
                    return (
                        (Eu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Eu.apply(this, arguments)
                    );
                }
                const mu = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        i = e.fadeInAnimation,
                        s = e.hide,
                        r = e.maximumNumber,
                        o = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, du);
                    const c = n ? null : t,
                        d = 'string' == typeof c;
                    if ((c && !d && c < 0) || 0 === c) return null;
                    const E = c && !d && c > r,
                        m = _()(
                            _u.base,
                            _u[`base__${u}`],
                            i && _u.base__animated,
                            s && _u.base__hidden,
                            !c && _u.base__pattern,
                            n && _u.base__empty,
                            o,
                        );
                    return a().createElement(
                        'div',
                        Eu({ className: m }, l),
                        a().createElement('div', { className: _u.bg }),
                        a().createElement('div', { className: _u.pattern }),
                        a().createElement(
                            'div',
                            { className: _()(_u.value, d && _u.value__text) },
                            E ? r : c,
                            E && a().createElement('span', { className: _u.plus }, '+'),
                        ),
                    );
                };
                mu.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Au = 'display',
                    Fu = 'visible_change',
                    Du = Fu,
                    bu = 'TopLabel_base_7f',
                    pu = 'TopLabel_base__ready_00',
                    gu = 'TopLabel_text_d0',
                    Cu = 'TopLabel_text__hangar_36',
                    Bu = 'TopLabel_text__shown_25',
                    hu = 'TopLabel_text__hidden_79',
                    fu = 'TopLabel_text__truncated_29',
                    Su = (0, n.memo)(({ panelType: e, text: u, parentRef: t, isTruncated: i = !1, show: s = !1 }) => {
                        const r = (0, n.useRef)(!1),
                            o = (0, n.useState)(!1),
                            l = o[0],
                            c = o[1];
                        (0, n.useEffect)(() => {
                            t || (s && !r.current && (r.current = !0), c(s));
                        }, [s, t]);
                        const d = (0, n.useCallback)(() => {
                                (r.current = !0), c(!0);
                            }, []),
                            E = (0, n.useCallback)(() => {
                                c(!1);
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = t && t.current;
                            if (e)
                                return (
                                    e.addEventListener('mouseenter', d),
                                    e.addEventListener('mouseleave', E),
                                    () => {
                                        e.removeEventListener('mouseenter', d), e.removeEventListener('mouseleave', E);
                                    }
                                );
                        }, [t, d, E]);
                        const m = _()(bu, r.current && pu),
                            A = _()(gu, e !== Ve.Setup && Cu, i && fu, s && l ? Bu : hu);
                        return a().createElement(
                            'div',
                            { className: m },
                            a().createElement('div', { className: A }, u),
                        );
                    }),
                    vu = 'notUsableSection',
                    wu = 'Section_base_8a',
                    xu = 'Section_base__hidden_f0',
                    yu = 'Section_label_73',
                    Tu = 'Section_counter_8a',
                    ku = 'Section_configLabel_c9',
                    Iu = 'Section_configText_eb',
                    Ru = 'Section_configVehicleIcon_20';
                let Ou;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(Ou || (Ou = {}));
                const Mu = 'tooltip_watched';
                let Lu;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(Lu || (Lu = {}));
                let Nu, Pu, Hu;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(Nu || (Nu = {})),
                    (function (e) {
                        (e.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
                            (e.EpicWidgetTooltip = 'epic_widget_tooltip'),
                            (e.BannerPerformance = 'banner_performance_tooltip'),
                            (e.SkillPointsTooltip = 'skill_points_tooltip'),
                            (e.AbilityLevelsTooltip = 'ability_levels_tooltip'),
                            (e.SkillOrderTooltip = 'skill_order_tooltip'),
                            (e.SkillLevelTab = 'skill_level_tab'),
                            (e.RewardsButton = 'rewards_button'),
                            (e.RewardsButtonTooltip = 'rewards_button_tooltip'),
                            (e.RewardTooltip = 'reward_tooltip'),
                            (e.AwardsOkButton = 'awards_ok'),
                            (e.AwardsView = 'awards_view'),
                            (e.RewardsSelectionView = 'rewards_selection_view');
                    })(Pu || (Pu = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(Hu || (Hu = {}));
                const Gu = 'metrics',
                    $u = () => Date.now(),
                    Wu = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: a }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    ju = (e, u) => {
                        const t = (0, n.useCallback)(
                            (t, n = Ou.Info, a) => {
                                a || (a = {}),
                                    Object.keys(a).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: u,
                                            action: t,
                                            logLevel: n,
                                            params: JSON.stringify(a),
                                        });
                            },
                            [e, u],
                        );
                        return (e, u, n) => t(e, u, n);
                    },
                    zu = (e, u) => {
                        const t = ju(e, u),
                            a = (0, n.useRef)(new Map()),
                            i = (0, n.useRef)(new Map()),
                            s = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    (void 0 !== u && u > 0) || a.current.set(e, $u());
                                },
                                [a],
                            ),
                            r = (0, n.useCallback)(() => {
                                a.current.clear(), i.current.clear();
                            }, [a, i]),
                            o = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === i.current.get(e) &&
                                        i.current.set(e, $u());
                                },
                                [a, i],
                            ),
                            l = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    if (void 0 === u) return;
                                    const t = i.current.get(e);
                                    if (void 0 === t) return;
                                    i.current.delete(e);
                                    const n = $u() - t;
                                    a.current.set(e, u + n);
                                },
                                [a, i],
                            ),
                            c = (0, n.useCallback)(
                                (e, u = 0, n, s) => {
                                    const r = a.current.get(e);
                                    if (void 0 === r) return;
                                    void 0 !== i.current.get(e) && l(e), a.current.delete(e);
                                    const o = ($u() - r) / 1e3;
                                    o <= u ||
                                        ((s = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(s, o)),
                                        t(e, n, s));
                                },
                                [a, i, t, l],
                            );
                        return [(e) => s(e), (e, u, t, n) => c(e, u, t, n), () => r(), (e) => o(e), (e) => l(e)];
                    },
                    Uu = (e) => {
                        const u = zu(e, Gu),
                            t = u[0],
                            a = u[1],
                            i = u[2],
                            s = u[3],
                            r = u[4],
                            o = (0, n.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        t = e.timeLimit,
                                        n = e.logLevel;
                                    a(u, t, n, Wu(e));
                                },
                                [a],
                            );
                        return [(e) => t(e), (e) => o(e), () => i(), (e) => s(e), (e) => r(e)];
                    },
                    Xu = a().memo(function ({ className: e, children: u }) {
                        const t = ((e, u, t, a) => {
                                const i = Uu('epic_battle'),
                                    s = i[0],
                                    r = i[1];
                                return [
                                    (0, n.useCallback)(() => s(Mu), [s]),
                                    (0, n.useCallback)(
                                        () =>
                                            r({
                                                action: Mu,
                                                timeLimit: 2,
                                                item: e,
                                                parentScreen: u,
                                                itemState: t,
                                                info: a,
                                            }),
                                        [r, e, u, t, a],
                                    ),
                                ];
                            })(Pu.SkillOrderTooltip, Nu.SetupView),
                            i = t[0],
                            s = t[1];
                        return a().createElement(
                            Be.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                                onMouseEnter: i,
                                onMouseLeave: s,
                            },
                            a().createElement('div', { className: e }, u),
                        );
                    }),
                    Vu = 'SlotDivider_base_60',
                    Ku = () => a().createElement('div', { className: Vu });
                var qu = t(3267),
                    Yu = t(8253),
                    Zu = t(3141);
                const Ju = 'Grabber_base_cf',
                    Qu = 'Grabber_base__enabled_b0',
                    et = 'Grabber_base__waitingUpdate_1d',
                    ut = 'Grabber_base__updating_f1',
                    tt = 'Grabber_base__active_71',
                    nt = 'Grabber_base__exit_1f',
                    at = 'Grabber_base__showAnimation_d9',
                    it = a().memo(
                        ({
                            children: e,
                            id: u,
                            containerRef: t,
                            isEnabled: i = !0,
                            onClick: s,
                            forceCenterX: r,
                            isUpdateAvailable: c,
                            handleAction: E,
                            blockOnGrabIds: m = [],
                        }) => {
                            const F = V().mediaSize,
                                D = (0, n.useRef)({
                                    actualX: 0,
                                    clickCenterOffset: 0,
                                    dropCenterX: 0,
                                    grabActivationPassed: !1,
                                    isDragActive: !1,
                                    id: u,
                                }),
                                b = (0, n.useRef)({
                                    isValid: !1,
                                    startX: 0,
                                    startCenterX: 0,
                                    minXRestriction: 0,
                                    maxXRestriction: 8e3,
                                }),
                                p = (0, n.useRef)(null),
                                g = (0, n.useState)(!1),
                                C = g[0],
                                B = g[1],
                                h = (0, n.useState)(0),
                                f = h[0],
                                S = h[1],
                                v = 0 !== r && i;
                            (0, n.useEffect)(() => {
                                if (((b.current.isValid = !1), u))
                                    return A(() => {
                                        const e = p.current,
                                            n = t.current;
                                        if (n && e) {
                                            const t = e.getBoundingClientRect(),
                                                a = n.getBoundingClientRect(),
                                                i = t.left + 0.5 * t.width;
                                            (b.current = {
                                                isValid: !0,
                                                minXRestriction: a.left,
                                                maxXRestriction: a.left + a.width,
                                                startX: t.left,
                                                startCenterX: i,
                                            }),
                                                E(ru.Ready, { dragId: u, currentCenterX: i });
                                        }
                                    });
                            }, [F]);
                            const w = (0, n.useCallback)(
                                    (e) => {
                                        (D.current.isDragActive = e),
                                            B(e),
                                            D.current.grabActivationPassed && !e && nu(!1, m);
                                    },
                                    [m],
                                ),
                                x = (0, n.useCallback)(() => {
                                    E(ru.DragStart, { dragId: D.current.id }),
                                        (D.current.grabActivationPassed = !0),
                                        nu(!0, m);
                                }, [E, m]),
                                y = (0, n.useCallback)((e) => {
                                    const u = D.current,
                                        t = b.current,
                                        n = t.startX,
                                        a = t.startCenterX,
                                        i = t.minXRestriction,
                                        s = t.maxXRestriction,
                                        r = a - n,
                                        o = e - u.clickCenterOffset;
                                    u.dropCenterX = ((e, u, t, n) => {
                                        const a = t + u,
                                            i = n - u;
                                        return e < a ? a : e > i ? i : e;
                                    })(o, r, i, s);
                                }, []),
                                T = (0, n.useCallback)(
                                    (e) => {
                                        const u = D.current,
                                            t = b.current;
                                        0 === e.button &&
                                            !u.isDragActive &&
                                            t.isValid &&
                                            i &&
                                            !c &&
                                            p.current &&
                                            ((u.actualX = e.clientX),
                                            (u.clickCenterOffset = u.actualX - t.startCenterX),
                                            w(!0));
                                    },
                                    [i, c, w],
                                ),
                                k = (0, n.useCallback)(() => {
                                    !s || (i && b.current.isValid) || s();
                                }, [i, s]),
                                I = (0, n.useCallback)(
                                    (e) => {
                                        const u = D.current;
                                        e.target === p.current &&
                                            u.grabActivationPassed &&
                                            ((u.grabActivationPassed = !1),
                                            setTimeout(() => E(ru.DropExit, { dragId: u.id })));
                                    },
                                    [E],
                                );
                            (0, o.gd)(l.n.ESCAPE, () => w(!1)),
                                (0, n.useEffect)(() => {
                                    i && r && S(0);
                                }, [r, i]);
                            const R = !C && D.current.grabActivationPassed;
                            (0, n.useEffect)(() => {
                                D.current.id = u;
                            }, [u]),
                                (0, n.useEffect)(() => {
                                    R && E(ru.Drop, { dragId: D.current.id, currentCenterX: D.current.dropCenterX });
                                }, [R, E]),
                                (0, n.useEffect)(() => {
                                    const e = p.current;
                                    if (v && e)
                                        return (
                                            e.addEventListener('transitionend', I),
                                            () => {
                                                e.removeEventListener('transitionend', I);
                                            }
                                        );
                                }, [v, I]),
                                (0, n.useEffect)(() => {
                                    if (i && C && D.current.id) {
                                        const e = d.O.client.events.mouse.up(([e, u]) => {
                                                if ('outside' === u) return w(!1);
                                                const t = D.current,
                                                    n = e.clientX;
                                                n === t.actualX && 0 === e.button && !D.current.grabActivationPassed
                                                    ? s && s()
                                                    : D.current.grabActivationPassed && y(n),
                                                    D.current.isDragActive && w(!1);
                                            }),
                                            u = d.O.client.events.mouse.move(([e]) => {
                                                const u = D.current;
                                                if ((0 === e.clientX && 0 === e.clientY) || !u.isDragActive) return;
                                                const t = e.clientX,
                                                    n = u.grabActivationPassed;
                                                !n && x(),
                                                    t !== u.actualX &&
                                                        ((u.actualX = t),
                                                        y(t),
                                                        n &&
                                                            E(ru.Drag, { dragId: u.id, currentCenterX: u.dropCenterX }),
                                                        S(u.dropCenterX - b.current.startCenterX));
                                            });
                                        return () => {
                                            u(), e();
                                        };
                                    }
                                }, [x, E, C, i, s, w, y]);
                            const O = (0, n.useMemo)(
                                    () => (r ? { left: r - b.current.startCenterX } : { left: f }),
                                    [f, r],
                                ),
                                M = i ? _()(Ju, Qu, C && tt, R && nt, v && et, r && ut) : _()(Ju, r && at);
                            return a().createElement(
                                'div',
                                { id: u, ref: p, onClick: k, onMouseDown: T, className: M, style: O },
                                e,
                            );
                        },
                    );
                let st;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(st || (st = {}));
                const rt = 'KeyLabel_base_ec',
                    ot = 'KeyLabel_base__current_c2',
                    lt = 'KeyLabel_base__next_fa',
                    ct = ({ text: e, show: u, panelType: t, shellState: n }) => {
                        if (!e) return null;
                        e = 'KEY_NONE' === e ? '..' : R.strings.readable_key_names.$dyn(e);
                        const i = _()(rt, n === st.Current && ot, n === st.Next && lt);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement(Su, { isTruncated: !0, text: e, show: u, panelType: t }),
                        );
                    },
                    _t = ({ children: e, slotType: u, slotId: t, isEnabled: i = !0 }) => {
                        const s = (0, n.useMemo)(() => ({ slotType: u, slotId: t }), [u, t]);
                        return a().createElement(Ce.t, { isEnabled: i, args: s }, a().createElement('div', null, e));
                    },
                    dt = 'Close_base_f3',
                    Et = 'Close_base__invisible_0e',
                    mt = 'Close_base__shown_a2',
                    At = 'Close_base__hover_6d',
                    Ft = 'Close_base__down_2b',
                    Dt = (0, n.memo)(
                        ({ id: e, show: u = !0, onClick: t, soundHover: i = 'highlight', soundClick: s = 'play' }) => {
                            const r = (0, n.useState)(!1),
                                o = r[0],
                                l = r[1],
                                c = (0, n.useState)(!1),
                                d = c[0],
                                E = c[1],
                                m = (0, n.useState)(!1),
                                F = m[0],
                                D = m[1],
                                b = (0, n.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                p = (0, n.useCallback)(() => {
                                    E(!0), i && (0, eu.G)(i);
                                }, [i]),
                                g = (0, n.useCallback)(() => {
                                    l(!1), E(!1);
                                }, []),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && (l(!0), s && (0, eu.G)(s));
                                    },
                                    [u, s],
                                ),
                                B = (0, n.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && t && t();
                                    },
                                    [u, t],
                                );
                            (0, n.useEffect)(
                                () =>
                                    A(() => {
                                        D(!0);
                                    }),
                                [],
                            );
                            const h = _()(dt, !F && Et, F && u && mt, o && Ft, d && At);
                            return a().createElement('div', {
                                id: e,
                                onMouseOver: p,
                                onMouseLeave: g,
                                onMouseDown: C,
                                onMouseUp: B,
                                className: h,
                                onClick: b,
                            });
                        },
                    ),
                    bt = 'Slot_base_3a',
                    pt = 'Slot_label_e6',
                    gt = 'Slot_close_bb',
                    Ct = 'Slot_disabled_5d',
                    Bt = 'Slot_shadow_a7',
                    ht = 'Slot_category_2c';
                let ft;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(ft || (ft = {}));
                const St = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: i,
                        isEnabled: s = !0,
                        onMouseDown: r,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                (0, T.c9)(T.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    eu.$.playYes();
                            }, [i, u, t, a]),
                            l = (0, n.useCallback)(() => {
                                (0, T.c9)(T.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    r && r(e), ((e) => e.button === ft.RIGHT)(e) && o();
                                },
                                [r, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    vt = ['children'];
                function wt() {
                    return (
                        (wt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        wt.apply(this, arguments)
                    );
                }
                const xt = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, vt);
                    return a().createElement(
                        St,
                        wt({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                        u,
                    );
                };
                var yt = t(5918);
                const Tt = a().memo(
                        ({
                            intCD: e,
                            id: u,
                            itemInstalledSetupIdx: t,
                            isMountedMoreThanOne: i,
                            isInstalled: s,
                            isDisabled: r,
                            imageSource: o,
                            isEmpty: l,
                            slotIndex: c,
                            slotType: _,
                            isBootCamp: d,
                            contextMenuDisabled: E,
                            isSetupSwitching: m,
                            children: A,
                        }) => {
                            const F = (0, n.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: u,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: t,
                                    itemInstalledSetupSlotIdx: u,
                                    isMountedMoreThanOne: i,
                                }),
                                [e, _, u, t, s, i],
                            );
                            return a().createElement(
                                yt.y,
                                {
                                    uniqueKey: e,
                                    isEmpty: l,
                                    slotIndex: c,
                                    slotType: _,
                                    imageSource: o,
                                    itemInstalledSetupIdx: t,
                                },
                                a().createElement(
                                    xt,
                                    { isEnabled: !(m || E || r || l || d), args: F },
                                    a().createElement('div', null, A),
                                ),
                            );
                        },
                    ),
                    kt = ({
                        id: e,
                        intCD: u,
                        slotType: t,
                        imageSource: i,
                        isInstalled: s,
                        itemInstalledSetupIdx: r,
                        isMountedMoreThanOne: o,
                        overlayType: l,
                        keyName: c,
                        slotIndex: _,
                        level: d,
                        isBootCamp: E,
                        isSelected: m,
                        isSetupSwitching: F,
                        isSectionSelected: D,
                        withAttention: b,
                        onActiveSlotChanged: p,
                        onSlotSelected: g,
                        onActiveSlotRefChanged: C,
                        onSlotClear: B,
                        panelType: h,
                        isDisabled: f = !1,
                        isBorderActive: S,
                        isIncompatible: v = !1,
                        grabberId: w,
                        containerRef: x,
                        activeDragId: y,
                        handleGrabberAction: T,
                        forceLeftUpdate: k,
                        potentialDropId: I,
                        blockOnGrabIds: R,
                        categoryImgSource: O,
                        contextMenuDisabled: M,
                    }) => {
                        const L = h === Ve.Setup,
                            N = !Ze(h),
                            P = h === Ve.Compare,
                            H = L && D && N,
                            G = (0, n.useRef)(!1),
                            $ = (0, n.useRef)(null),
                            W = -1 === u;
                        (0, n.useEffect)(() => {
                            if (!G.current && D && m)
                                return A(() => {
                                    p && p($, t, e), (G.current = !0);
                                });
                            G.current = !0;
                        }, [e, D, m, p, t]),
                            (0, n.useEffect)(() => {
                                m && C($);
                            }, [m, C]);
                        const j = ((e) => {
                                const u = (0, n.useRef)(-1),
                                    t = (0, n.useCallback)(
                                        (t) => {
                                            if (-1 === u.current) {
                                                const n = e(t);
                                                n &&
                                                    (u.current = window.setTimeout(() => {
                                                        u.current = -1;
                                                    }, n));
                                            }
                                        },
                                        [e],
                                    );
                                return (0, n.useEffect)(() => () => clearTimeout(u.current), []), t;
                            })((0, n.useCallback)(() => (!m && N && !F && g(t, e), 500), [e, N, m, F, g, t])),
                            z = (0, n.useCallback)(() => {
                                f || j('');
                            }, [j, f]),
                            U = (0, n.useCallback)(() => {
                                !m && !y && !f && eu.$.playHighlight();
                            }, [m, y, f]);
                        (0, n.useEffect)(() => {
                            I && eu.$.playHighlight();
                        }, [I]);
                        const X = (0, n.useCallback)(() => {
                                null == B || B(e, t);
                            }, [e, B, t]),
                            V = L && !s,
                            K = Boolean(w && I === w),
                            q = w && (H || P),
                            Y = `${t}-slot-${e}`,
                            Z = O && O.length > 0,
                            J = Z ? { backgroundImage: `url(${O})` } : {},
                            Q = {
                                id: w,
                                containerRef: x,
                                isEnabled: !W,
                                onClick: z,
                                isUpdateAvailable: Boolean(y),
                                handleAction: T,
                                forceCenterX: k,
                                blockOnGrabIds: R,
                            },
                            ee = {
                                isEmpty: W,
                                intCD: u,
                                slotType: t,
                                slotIndex: _,
                                imageSource: i,
                                isBootCamp: E,
                                isDisabled: f,
                                isInstalled: s,
                                id: e,
                                itemInstalledSetupIdx: r,
                                isMountedMoreThanOne: o,
                                contextMenuDisabled: M,
                                isSetupSwitching: F,
                            };
                        return a().createElement(
                            'div',
                            { className: bt, onMouseEnter: U, id: Y },
                            (D || P) &&
                                !s &&
                                a().createElement(
                                    'div',
                                    { className: gt },
                                    a().createElement(Dt, { id: `close-${Y}`, show: !y, onClick: X }),
                                ),
                            a().createElement(
                                _t,
                                { slotType: t, slotId: e, isEnabled: !y && Ye(h) },
                                a().createElement(
                                    'div',
                                    { ref: $ },
                                    a().createElement(
                                        Yu.W,
                                        {
                                            activeDragId: y,
                                            slotType: t,
                                            isSelected: m,
                                            isBorderActive: Boolean(S),
                                            panelType: h,
                                            isDisabled: f,
                                            isPotentialDrop: K,
                                            onClick: q ? void 0 : z,
                                        },
                                        N &&
                                            a().createElement(
                                                'div',
                                                { className: pt },
                                                a().createElement(ct, { text: c, show: Boolean(D), panelType: h }),
                                            ),
                                        a().createElement(
                                            qu.J,
                                            { when: Boolean(q), wrapper: it, withProps: Q },
                                            a().createElement(
                                                qu.J,
                                                { when: N, wrapper: Tt, withProps: ee },
                                                a().createElement(Zu.c, {
                                                    imageSource: i,
                                                    isIncompatible: v,
                                                    overlayType: l,
                                                    level: d,
                                                    isTemporary: V,
                                                    withAttention: b,
                                                }),
                                            ),
                                        ),
                                        Z &&
                                            a().createElement(
                                                a().Fragment,
                                                null,
                                                a().createElement('span', { className: Bt }),
                                                a().createElement('span', { className: ht, style: J }),
                                            ),
                                        f && a().createElement('div', { className: Ct }),
                                    ),
                                ),
                            ),
                        );
                    },
                    It = 'BattleAbilitySlot_base_74',
                    Rt = 'BattleAbilitySlot_rank_01',
                    Ot = ['rank'];
                const Mt = (0, n.memo)((e) => {
                    let u = e.rank,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, Ot);
                    const i = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                        s = _()(It);
                    return a().createElement(
                        'div',
                        { className: s },
                        a().createElement(kt, t),
                        u && a().createElement('div', { className: Rt, style: i }),
                    );
                });
                var Lt = t(4814);
                const Nt = 'OptDeviceSlot_base_14',
                    Pt = 'OptDeviceSlot_specializations_c3',
                    Ht = ['specializations', 'activeSpecsMask', 'isChangeSetupIndex', 'isDynamic'];
                const Gt = (e) => {
                        let u = e.specializations,
                            t = e.activeSpecsMask,
                            n = e.isChangeSetupIndex,
                            i = e.isDynamic,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Ht);
                        const r = P('model.ammunitionPanel', N.None).onSpecializationSelect,
                            o = s.panelType === Ve.Setup || s.panelType === Ve.Compare,
                            l = !Ze(s.panelType);
                        return a().createElement(
                            'div',
                            { className: _()(Nt, u.length && !i && !n && 'specializationsSlot') },
                            l &&
                                a().createElement(
                                    'div',
                                    { className: Pt },
                                    a().createElement(Lt.G, {
                                        specializations: u,
                                        isDynamic: i,
                                        activeSpecsMask: t,
                                        isSpecializationActive: o,
                                        onSpecializationClick: (e) => {
                                            r({ slotId: s.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            a().createElement(kt, s),
                        );
                    },
                    $t = {
                        base: 'ToggleCamouflageSlot_base_17',
                        base__grabbing: 'ToggleCamouflageSlot_base__grabbing_79',
                        base__hangar: 'ToggleCamouflageSlot_base__hangar_e7',
                        base__setup: 'ToggleCamouflageSlot_base__setup_44',
                        base__compare: 'ToggleCamouflageSlot_base__compare_0d',
                        base__selected: 'ToggleCamouflageSlot_base__selected_0c',
                        base__dragIn: 'ToggleCamouflageSlot_base__dragIn_68',
                        base__dragInActive: 'ToggleCamouflageSlot_base__dragInActive_b1',
                        base__toggle: 'ToggleCamouflageSlot_base__toggle_fc',
                        base__disabled: 'ToggleCamouflageSlot_base__disabled_1e',
                        image: 'ToggleCamouflageSlot_image_ee',
                        glow: 'ToggleCamouflageSlot_glow_45',
                        toggle: 'ToggleCamouflageSlot_toggle_c2',
                    },
                    Wt = ({ id: e, isSelected: u, isLocked: t, onSlotSelected: i, panelType: s }) => {
                        const r = Je.yZ,
                            o = (0, n.useCallback)(() => {
                                i(r, e);
                            }, [e, i, r]),
                            l = _()($t.base, $t[`base__${s}`], t && $t.base__disabled, u && $t.base__toggle),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            d = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.tanksetup.shells.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            ),
                            E = `toggle-camouflage-slot-${e}`;
                        return a().createElement(
                            _t,
                            { slotType: r, slotId: e },
                            a().createElement(
                                'div',
                                { id: E, className: l, onClick: o, onMouseEnter: eu.$.playHighlight },
                                u && a().createElement('div', { className: $t.glow }),
                                a().createElement('div', { className: $t.image, style: c }),
                                a().createElement('div', { className: $t.toggle, style: d }),
                            ),
                        );
                    },
                    jt = ['value', 'sectionType'];
                function zt() {
                    return (
                        (zt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        zt.apply(this, arguments)
                    );
                }
                const Ut = (e) => {
                        let u = e.value,
                            t = e.sectionType,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, jt);
                        switch (t) {
                            case Je.zn: {
                                const e = u;
                                return a().createElement(
                                    Gt,
                                    zt({}, e, n, {
                                        specializations: e.specializations.specializations,
                                        isDynamic: e.specializations.isDynamic,
                                    }),
                                );
                            }
                            case Je.yZ: {
                                const e = u;
                                return a().createElement(Wt, zt({}, n, e));
                            }
                            case Je.YN: {
                                const e = u;
                                return a().createElement(Mt, zt({}, n, e));
                            }
                            default:
                                return a().createElement(kt, zt({}, n, u));
                        }
                    },
                    Xt = 'Slots_base_27',
                    Vt = ({
                        slots: e,
                        sectionType: u,
                        panelType: t,
                        isBorderActive: i,
                        onActiveSlotChanged: s,
                        isDisabled: r,
                        isBootCamp: o,
                        selectedSection: l,
                        selectedSlot: c,
                        syncInitiator: d,
                        blockOnGrabIds: E,
                        isChangeSetupIndex: m,
                        setIsExitBlocked: A,
                    }) => {
                        const F = (0, n.useRef)(null),
                            D = (0, n.useRef)(null),
                            b = P('model.ammunitionPanel', N.None),
                            p = b.onSectionSelect,
                            g = b.onDragDropSwap,
                            C = b.onSlotClear,
                            B = (0, n.useCallback)(
                                (e, t) => {
                                    g({
                                        sectionType: u,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [g, u],
                            ),
                            h = l === u,
                            f = h ? c : -1,
                            S = `${u}-${e.length}slots`,
                            v = cu({
                                baseId: S,
                                slotsLength: e.length,
                                handleSwap: B,
                                setIsExitBlocked: A,
                                syncInitiator: d,
                            }),
                            w = v.handleGrabberAction,
                            x = v.dragState,
                            y = v.getForceCenterX;
                        (0, n.useEffect)(() => {
                            h && -1 !== f && F.current && s(F, l, f);
                        }, [s, h, l, f]);
                        const T = (e, u) => {
                                if ((r || eu.$.playClick(), 'number' != typeof u))
                                    return console.warn('selectedSlot is not a number');
                                p({ selectedSlot: u, selectedSection: e });
                            },
                            k = (e) => {
                                F.current = e ? e.current : null;
                            },
                            I = (e, u) => {
                                C({ slotId: e, sectionType: u });
                            };
                        return a().createElement(
                            'div',
                            { id: S, ref: D, className: _()(Xt, u) },
                            H.v(e, (l, c) => {
                                const _ = u === Je.YN,
                                    d = !_ && e.length > 1 ? `${S}-${c}` : '';
                                return a().createElement(
                                    n.Fragment,
                                    { key: `${l.id}-${c}` },
                                    c > 0 && a().createElement(Ku, null),
                                    a().createElement(Ut, {
                                        value: l,
                                        sectionType: u,
                                        panelType: t,
                                        isSelected: f === l.id,
                                        isSectionSelected: h,
                                        isDisabled: r,
                                        isBootCamp: o,
                                        isBorderActive: i,
                                        contextMenuDisabled: _,
                                        slotType: u,
                                        onActiveSlotChanged: s,
                                        onSlotSelected: T,
                                        onActiveSlotRefChanged: k,
                                        onSlotClear: I,
                                        slotIndex: c,
                                        grabberId: d,
                                        containerRef: D,
                                        forceLeftUpdate: y(d),
                                        activeDragId: x.activeDragId,
                                        handleGrabberAction: w,
                                        potentialDropId: x.potentialDropId,
                                        blockOnGrabIds: E,
                                        isSetupSwitching: m,
                                        isChangeSetupIndex: m,
                                    }),
                                );
                            }),
                        );
                    },
                    Kt = ({
                        type: e,
                        slots: u,
                        newItemsCount: t,
                        isDisabled: i,
                        panelType: s,
                        onActiveSlotChanged: r,
                        isBorderActive: o,
                        isBootCamp: l = !0,
                        selectedSection: c,
                        selectedSlot: d,
                        syncInitiator: E,
                        sectionsIds: F,
                        onBootcampPanelAppear: D,
                        vehicle: b,
                        vehicleType: p,
                        isSetupSwitching: g,
                        isChangeSetupIndex: C,
                        classMix: B,
                        setIsExitBlocked: h,
                    }) => {
                        const f = (0, n.useRef)(null),
                            S = (0, n.useState)(l),
                            v = S[0],
                            w = S[1],
                            x = (0, n.useMemo)(
                                () =>
                                    s === Ve.Setup
                                        ? e === Je.mH
                                            ? 'AmmunitionSetupHangarEquipmentSlots'
                                            : 'AmmunitionSetupOptionalDeviceSlots'
                                        : e === Je.mH
                                          ? 'HangarEquipmentSlots'
                                          : 'HangarOptionalDeviceSlots',
                                [s, e],
                            ),
                            y = ((e, u) => {
                                const t = P('tutorialModel.effects.items').filter((t) => {
                                    if (!t) return !1;
                                    const n = t.value,
                                        a = window.__featureId.toString();
                                    return n.componentId === e && n.type === u && n.viewId === a;
                                });
                                if (0 === t.length) return null;
                                const n = Object.assign({}, t[0].value);
                                return {
                                    effect: n,
                                    completeEffect: () => {
                                        tutorialModel.onEffectCompleted({
                                            componentId: e,
                                            viewId: window.__featureId.toFixed(0),
                                            effectType: u,
                                            effectBuilder: n.builder,
                                        }),
                                            u === Au && window.tutorialApi && window.tutorialApi.updateComponents();
                                    },
                                };
                            })(x, Au);
                        (0, n.useEffect)(
                            () => (
                                null !== y && w(!y.effect.visible),
                                A(() => {
                                    null !== y && y.completeEffect();
                                })
                            ),
                            [y, e],
                        );
                        const T = m();
                        (0, n.useEffect)(() => {
                            T && (T.freeze(), T.resize());
                        }, [u.length, T, x, v]);
                        const k = ((e, u) => {
                            const t = P('tutorialModel.triggers.items').filter((t) => {
                                if (!t) return !1;
                                const n = t.value,
                                    a = n.triggers.filter((e) => e.value === u);
                                return n.componentId === e && a.length > 0;
                            });
                            return 0 === t.length
                                ? null
                                : window.tutorialModel.foundComponents.items.some((u) => u.value.componentId === e)
                                  ? {
                                        trigger: t[0].value,
                                        runTrigger: (t) => {
                                            window.tutorialModel.onTriggerActivated({
                                                componentId: e,
                                                triggerType: u,
                                                state: t,
                                            });
                                        },
                                    }
                                  : null;
                        })('AmmunitionPanelBattleAbilities', Du);
                        (0, n.useEffect)(() => {
                            null == k || k.runTrigger(!0);
                        }, [k]);
                        const I = c === e,
                            O = lu(e, F),
                            M = O.selfId,
                            L = O.blockOnGrabIds;
                        (0, n.useEffect)(() => {
                            s === Ve.Hangar && w(l);
                        }, [s, l]),
                            (0, n.useEffect)(() => {
                                if (l && !v && D)
                                    return A(() => {
                                        D(), T && T.resize();
                                    });
                            }, [v, l, D, T]);
                        const N = E >= 0 && H.G(u, (e) => e.intCD > 0),
                            G = _()(
                                wu,
                                B,
                                v && xu,
                                I && 'sectionSelected',
                                u.length > 1 && 'multiSlot',
                                N && 'existFilledSlots',
                            ),
                            $ = ((b && b.length > 0) || (p && p.length > 0)) && s !== Ve.Battle && s !== Ve.Respawn,
                            W = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: p
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(p)})`
                                        : '',
                                }),
                                [p],
                            ),
                            j = (0, n.useMemo)(
                                () => ({ icon: a().createElement('span', { className: Ru, style: W }), vehicle: b }),
                                [W, b],
                            ),
                            z = u.length > 0 && s !== Ve.Compare && s !== Ve.Battle && s !== Ve.Respawn && u.length > 0,
                            U = R.strings.tank_setup.section.$dyn(e);
                        if ('string' != typeof U)
                            throw new Error(`No top label text for section type ${e} or it's not a string`);
                        return a().createElement(
                            'div',
                            { id: g ? vu : M, ref: f, className: G },
                            $ &&
                                a().createElement(
                                    Xu,
                                    { className: ku },
                                    a().createElement(re, {
                                        classMix: Iu,
                                        text: R.strings.tank_setup.categories.reserves.config(),
                                        binding: j,
                                    }),
                                ),
                            z &&
                                a().createElement(
                                    'div',
                                    { className: yu },
                                    a().createElement(Su, { text: U, parentRef: f, show: !I, panelType: s }),
                                ),
                            a().createElement(Vt, {
                                slots: u,
                                sectionType: e,
                                panelType: s,
                                isBorderActive: o,
                                onActiveSlotChanged: r,
                                isDisabled: i,
                                isBootCamp: l,
                                syncInitiator: E,
                                selectedSection: c,
                                selectedSlot: d,
                                blockOnGrabIds: L,
                                isChangeSetupIndex: C,
                                setIsExitBlocked: h,
                            }),
                            Boolean(t) &&
                                a().createElement(
                                    'div',
                                    { className: Tu },
                                    a().createElement(mu, { value: t, size: 'small', fadeInAnimation: !0 }),
                                ),
                        );
                    };
                var qt = t(8598);
                const Yt = 'ShellsSlot_base_05',
                    Zt = 'ShellsSlot_shell_ab',
                    Jt = 'ShellsSlot_shell__grabbing_98',
                    Qt = 'ShellsSlot_shell__active_7e',
                    en = 'ShellsSlot_shell__potential_30',
                    un = 'ShellsSlot_label_da',
                    tn = 'ShellsSlot_image_3f',
                    nn = ({
                        id: e,
                        itemInstalledSetupIdx: u,
                        isMountedMoreThanOne: t,
                        imageSource: i,
                        count: s,
                        isSelected: r,
                        keyName: o,
                        panelType: l,
                        intCD: c,
                        slotIndex: d,
                        grabberId: E,
                        isSetupSwitching: m,
                        containerRef: A,
                        activeDragId: F,
                        handleGrabberAction: D,
                        forceLeftUpdate: b,
                        potentialDropId: p,
                        blockOnGrabIds: g,
                        shellState: C,
                        isDisabled: B,
                    }) => {
                        const h = !Ze(l),
                            f = (0, n.useMemo)(() => ({ backgroundImage: `url(${i})` }), [i]),
                            S = E && E === p,
                            v = E && E === F,
                            w = (0, n.useMemo)(() => {
                                const n = { slotType: Je.g9, slotId: e, fieldType: 1, intCD: c };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: u,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: t,
                                    }),
                                ];
                            }, [c, e, u, t]),
                            x = w[0],
                            y = w[1],
                            T = _()(Zt, !F && h && !B && Qt, v && Jt, !v && S && en),
                            k = (0, n.useMemo)(
                                () => ({
                                    id: E,
                                    containerRef: A,
                                    isEnabled: Boolean(E) && r,
                                    isUpdateAvailable: Boolean(F),
                                    handleAction: D,
                                    forceCenterX: b,
                                    blockOnGrabIds: g,
                                }),
                                [F, g, A, b, E, D, r],
                            ),
                            I = (0, n.useMemo)(
                                () => ({ slotIndex: d, uniqueKey: c, slotType: Je.g9, imageSource: null }),
                                [c, d],
                            );
                        return a().createElement(
                            xt,
                            { isEnabled: h && !m && !B, args: y },
                            a().createElement(
                                Ce.t,
                                { args: x, isEnabled: !F && Ye(l) },
                                a().createElement(
                                    'div',
                                    { id: `shell-slot-${d}`, className: Yt },
                                    o &&
                                        a().createElement(
                                            'div',
                                            { className: un },
                                            a().createElement(ct, {
                                                text: o,
                                                show: r || l === Ve.Battle || l === Ve.Respawn,
                                                shellState: C,
                                                panelType: l,
                                            }),
                                        ),
                                    a().createElement(
                                        'div',
                                        { className: T },
                                        a().createElement(
                                            qu.J,
                                            { when: h, wrapper: it, withProps: k },
                                            a().createElement(
                                                qu.J,
                                                { when: h, wrapper: yt.y, withProps: I },
                                                a().createElement('div', { className: tn, style: f }),
                                                a().createElement(qt.X, { count: s }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    an = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    sn = ({ id: e, isSelected: u, imageSource: t, onSlotSelected: i }) => {
                        const s = (0, n.useCallback)(() => {
                                !u && i(e);
                            }, [e, u, i]),
                            r = _()(an.slot, !u && an.slot__active, an.slot__compare),
                            o = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]),
                            l = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.tanksetup.shells.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            );
                        return a().createElement(
                            _t,
                            { slotType: Je.WI, slotId: e },
                            a().createElement(
                                'div',
                                { className: an.base },
                                a().createElement(
                                    'div',
                                    { className: r, onClick: s, id: `shell-slot-${e}` },
                                    u && a().createElement('div', { className: an.glow }),
                                    a().createElement('div', { className: an.image, style: o }),
                                    a().createElement('div', { className: an.toggle, style: l }),
                                ),
                            ),
                        );
                    },
                    rn = 'Shells_base_f9',
                    on = 'Shells_shell_3f',
                    ln = 'Shells_shell__compressed_2e';
                function cn() {
                    return (
                        (cn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        cn.apply(this, arguments)
                    );
                }
                const _n = ({
                        shells: e,
                        panelType: u,
                        onSelected: t,
                        isCompare: i,
                        isSelected: s,
                        syncInitiator: r,
                        blockOnGrabIds: o,
                        isDisabled: l,
                        isSetupSwitching: c,
                        setIsExitBlocked: d,
                    }) => {
                        const E = P('model.ammunitionPanel', N.None),
                            m = E.onSectionSelect,
                            F = E.onDragDropSwap,
                            D = (0, n.useRef)(!1),
                            b = (0, n.useRef)(null),
                            p = i ? Je.WI : Je.g9,
                            g = `${p}-${e.length}shells`,
                            C = (0, n.useCallback)(
                                (e) => {
                                    m({ selectedSlot: e, selectedSection: p }), eu.$.playClick();
                                },
                                [m, p],
                            ),
                            B = (0, n.useCallback)(() => {
                                s || i || l || c || C(0);
                            }, [s, i, c, l, C]),
                            h = (0, n.useCallback)(
                                (e, u) => {
                                    F({
                                        sectionType: p,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(u[u.length - 1]),
                                    });
                                },
                                [F, p],
                            ),
                            f = cu({
                                baseId: g,
                                slotsLength: e.length,
                                handleSwap: h,
                                setIsExitBlocked: d,
                                syncInitiator: r,
                            }),
                            S = f.handleGrabberAction,
                            v = f.dragState,
                            w = f.getForceCenterX;
                        return (
                            (0, n.useEffect)(
                                () =>
                                    A(() => {
                                        D.current = !0;
                                    }),
                                [],
                            ),
                            (0, n.useEffect)(() => {
                                if (s && u === Ve.Setup) {
                                    if (!D.current)
                                        return A(() => {
                                            t();
                                        });
                                    t();
                                }
                            }, [s, u, t]),
                            a().createElement(
                                'div',
                                {
                                    id: g,
                                    ref: b,
                                    className: rn,
                                    onClick: B,
                                    onMouseEnter: () => {
                                        l || eu.$.playHighlight();
                                    },
                                },
                                H.v(e, (t, n) => {
                                    if (Ke(t)) return null;
                                    const r = !i && e.length > 1 ? `${g}-${t.id}` : '';
                                    return a().createElement(
                                        'div',
                                        { key: t.id, className: _()(on, !i && 0 !== n && ln) },
                                        i
                                            ? a().createElement(sn, cn({}, t, { onSlotSelected: C }))
                                            : a().createElement(
                                                  nn,
                                                  cn({}, t, {
                                                      slotIndex: n,
                                                      isSetupSwitching: c,
                                                      isSelected: s,
                                                      panelType: u,
                                                      grabberId: r,
                                                      containerRef: b,
                                                      forceLeftUpdate: w(r),
                                                      activeDragId: v.activeDragId,
                                                      handleGrabberAction: S,
                                                      potentialDropId: v.potentialDropId,
                                                      blockOnGrabIds: o,
                                                      isDisabled: l,
                                                  }),
                                              ),
                                    );
                                }),
                            )
                        );
                    },
                    dn = {
                        base: 'ShellsSection_base_08',
                        base__grabbing: 'ShellsSection_base__grabbing_2e',
                        base__hangar: 'ShellsSection_base__hangar_24',
                        base__setup: 'ShellsSection_base__setup_c8',
                        base__compare: 'ShellsSection_base__compare_e3',
                        base__selected: 'ShellsSection_base__selected_fd',
                        base__dragIn: 'ShellsSection_base__dragIn_39',
                        base__dragInActive: 'ShellsSection_base__dragInActive_96',
                        base__toggle: 'ShellsSection_base__toggle_bd',
                        base__disabled: 'ShellsSection_base__disabled_7e',
                        label: 'ShellsSection_label_38',
                        attention: 'ShellsSection_attention_7e',
                        blinking: 'ShellsSection_blinking_57',
                        border: 'ShellsSection_border_0d',
                        border__double: 'ShellsSection_border__double_a1',
                        border__triple: 'ShellsSection_border__triple_f2',
                        counter: 'ShellsSection_counter_74',
                        disabled: 'ShellsSection_disabled_c2',
                    },
                    En = [Ve.Hangar, Ve.Battle, Ve.Prebattle, Ve.Respawn],
                    mn = ({
                        slots: e,
                        ammoNotFull: u,
                        type: t,
                        sectionsIds: i,
                        panelType: s,
                        onActiveSlotChanged: r,
                        isDisabled: o,
                        isBorderActive: l,
                        selectedSection: c,
                        syncInitiator: d,
                        classMix: E,
                        isSetupSwitching: m,
                        setIsExitBlocked: A,
                        newItemsCount: F,
                    }) => {
                        const D = (0, n.useRef)(null),
                            b = s === Ve.Compare,
                            p = c === t,
                            g = (0, n.useCallback)(() => {
                                r(D, c, 0);
                            }, [r, c]),
                            C = lu(t, i),
                            B = C.selfId,
                            h = C.blockOnGrabIds,
                            f = ((e) => En.includes(e))(s) && !o && u,
                            S = H.hX(e, (e) => Boolean(e) && !Ke(e)).length,
                            v = (0, n.useMemo)(() => {
                                if (!f) return null;
                                const e = _()(dn.border, 2 === S && dn.border__double, 3 === S && dn.border__triple);
                                return a().createElement('div', { className: e });
                            }, [f, S]),
                            w = _()(
                                dn.base,
                                E,
                                dn[`base__${s}`],
                                !l && p && dn.base__selected,
                                b && dn.base__compare,
                                o && dn.base__disabled,
                            ),
                            x = !b && s !== Ve.Battle && s !== Ve.Respawn;
                        return a().createElement(
                            'div',
                            { id: m ? vu : B, className: w, ref: D },
                            f && a().createElement('div', { className: dn.attention }),
                            x &&
                                a().createElement(
                                    'div',
                                    { className: dn.label },
                                    a().createElement(Su, {
                                        text: R.strings.tank_setup.section.shells(),
                                        parentRef: D,
                                        show: !p,
                                        panelType: s,
                                    }),
                                ),
                            v,
                            a().createElement(_n, {
                                shells: e,
                                panelType: s,
                                onSelected: g,
                                isSelected: p,
                                isCompare: b,
                                syncInitiator: d,
                                blockOnGrabIds: h,
                                isDisabled: o,
                                isSetupSwitching: m,
                                setIsExitBlocked: A,
                            }),
                            Boolean(F) &&
                                a().createElement(
                                    'div',
                                    { className: dn.counter },
                                    a().createElement(mu, { value: F, size: 'small', fadeInAnimation: !0 }),
                                ),
                            o && a().createElement('div', { className: dn.disabled }),
                        );
                    },
                    An = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function Fn() {
                    return (
                        (Fn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Fn.apply(this, arguments)
                    );
                }
                const Dn = ({
                        panelType: e,
                        isDisabled: u = !1,
                        onActiveSlotChanged: t,
                        isBorderActive: n,
                        isBootCamp: i = !1,
                        sections: s,
                        selectedSection: r,
                        selectedSlot: o,
                        syncInitiator: l,
                        ammoNotFull: c,
                        onBootcampPanelAppear: d,
                        isChangeSetupIndex: E,
                        setIsExitBlocked: m,
                    }) => {
                        const A = v(['section'], An),
                            F = H.v(s, (e) => ou(e.type)),
                            D = {
                                panelType: e,
                                isDisabled: u,
                                onActiveSlotChanged: t,
                                isBorderActive: n,
                                selectedSection: r,
                                selectedSlot: o,
                                syncInitiator: l,
                                sectionsIds: F,
                                isChangeSetupIndex: E,
                                setIsExitBlocked: m,
                            };
                        return a().createElement(
                            'div',
                            { className: An.base },
                            H.v(s, (u, t) => {
                                if (!u.slots || !u.slots.length) return null;
                                const n = _()(
                                        A.section,
                                        0 !== t && Ze(e) && An.section__battle,
                                        0 === t && An.section__first,
                                    ),
                                    s = H.UI(u.slots, (e) => Object.assign({}, e));
                                if (u.type === Je.g9 || u.type === Je.WI) {
                                    const e = u;
                                    return a().createElement(
                                        mn,
                                        Fn({}, e, D, {
                                            isSetupSwitching: E,
                                            slots: s,
                                            key: `${u.name}${t}${u.slots.length}`,
                                            classMix: n,
                                            ammoNotFull: c,
                                        }),
                                    );
                                }
                                return a().createElement(
                                    Kt,
                                    Fn({}, u, D, {
                                        isSetupSwitching: E,
                                        slots: s,
                                        key: `${u.name}${t}${u.slots.length}`,
                                        classMix: n,
                                        isBootCamp: i,
                                        onBootcampPanelAppear: d,
                                    }),
                                );
                            }),
                        );
                    },
                    bn = 'KeyboardKey_base_57',
                    pn = 'KeyboardKey_back_43',
                    gn = a().memo(({ text: e }) =>
                        a().createElement('div', { className: bn }, a().createElement('div', { className: pn }, e)),
                    ),
                    Cn = 'SetupSwitchHotkey_base_4c',
                    Bn = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    hn = 'SetupSwitchHotkey_plusWrapper_f0',
                    fn = 'SetupSwitchHotkey_plus_f0',
                    Sn = 'SetupSwitchHotkey_plus__horizontal_e0',
                    vn = 'SetupSwitchHotkey_plus__vertical_5b',
                    wn = a().memo(({ hotKeys: e }) =>
                        a().createElement(
                            'div',
                            { className: Cn },
                            e.map((e, u) => {
                                if (!e) return null;
                                const t = e.value;
                                return 0 === u
                                    ? a().createElement(gn, { key: u, text: t })
                                    : a().createElement(
                                          'div',
                                          { key: u, className: Bn },
                                          a().createElement(
                                              'div',
                                              { className: hn },
                                              a().createElement('div', { className: `${fn} ${Sn}` }),
                                              a().createElement('div', { className: `${fn} ${vn}` }),
                                          ),
                                          a().createElement(gn, { text: t }),
                                      );
                            }),
                        ),
                    ),
                    xn = {
                        base: 'Groups_base_de',
                        group: 'Groups_group_1f',
                        groupWrapper: 'Groups_groupWrapper_70',
                        switch: 'Groups_switch_98',
                        switch__battle: 'Groups_switch__battle_0f',
                        switch__small: 'Groups_switch__small_45',
                        switch__extraSmall: 'Groups_switch__extraSmall_b5',
                        prebattleSwitchIndicator: 'Groups_prebattleSwitchIndicator_da',
                        hint: 'Groups_hint_49',
                        hint__disabled: 'Groups_hint__disabled_17',
                    };
                function yn() {
                    return (
                        (yn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        yn.apply(this, arguments)
                    );
                }
                const Tn = (e) => e.setupSelector.hotKeys,
                    kn = (e) =>
                        Object.assign({}, e, {
                            slots: H.v(e.slots, (e) => {
                                if ('specializations' in e) {
                                    const u = e;
                                    return Object.assign({}, u, {
                                        specializations: Object.assign({}, u.specializations, {
                                            specializations: H.v(u.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        }),
                                    });
                                }
                                return Object.assign({}, e);
                            }),
                        }),
                    In = ({ sectionProps: e, isSetupSwitching: u, isReady: t, setSetupSwitching: i, children: s }) => {
                        const r = v(['switch'], xn),
                            o = P('model'),
                            l = o.isDisabled,
                            c = o.vehicleInfo,
                            d = P('model.ammunitionPanel'),
                            E = d.sectionGroups,
                            m = d.onChangeSetupIndex,
                            A = d.selectedSection,
                            F = d.selectedSlot,
                            D = d.syncInitiator,
                            b = d.ammoNotFull,
                            p = null == c ? void 0 : c.vehicleName,
                            g =
                                ((C = E),
                                H.DZ(
                                    C,
                                    (e) => {
                                        var u;
                                        const t = H.yW(null != (u = null == e ? void 0 : e.sections) ? u : [], (e) => {
                                            var u, t;
                                            return (
                                                0 === (null != (u = null == (t = e.slots) ? void 0 : t.length) ? u : 0)
                                            );
                                        });
                                        return !(!e || t);
                                    },
                                    (e) =>
                                        Object.assign({}, e, {
                                            setupSelector: Object.assign({}, e.setupSelector, {
                                                states: H.UI(e.setupSelector.states, (e) => e),
                                            }),
                                            sections: H.v(e.sections, kn),
                                        }),
                                ));
                        var C;
                        (0, n.useEffect)(() => {
                            (e.panelType !== Ve.Hangar && e.panelType !== Ve.Setup) || !t || i(!1);
                        }, [t, e.panelType, i]),
                            (0, n.useEffect)(() => {
                                e.panelType === Ve.Respawn && i(!1);
                            }, [p, e.panelType, i]);
                        const B = (0, n.useCallback)(
                                (u) => {
                                    e.panelType === Ve.Respawn && i(!0), m(u);
                                },
                                [m, e.panelType, i],
                            ),
                            h = (e.panelType !== Ve.Respawn && t) || (e.panelType === Ve.Respawn && u);
                        return a().createElement(
                            'div',
                            { className: xn.base },
                            H.UI(g, (t) => {
                                const n = R.strings.tank_setup.tooltips.prebattleSwitchIndicator.desc.$dyn(
                                    `c_${t.groupId}`,
                                );
                                return a().createElement(
                                    'div',
                                    { key: t.groupId, className: xn.group },
                                    a().createElement(
                                        'div',
                                        { className: xn.groupWrapper },
                                        a().createElement(
                                            Xe,
                                            yn(
                                                { disabled: !h && Boolean(e.isBootCamp) },
                                                ((e, u) => ({ index: e.currentIndex, setSetupSwitching: u }))(t, i),
                                            ),
                                            a().createElement(
                                                Dn,
                                                yn({}, e, {
                                                    sections: t.sections,
                                                    selectedSection: A,
                                                    selectedSlot: F,
                                                    syncInitiator: D,
                                                    ammoNotFull: b,
                                                    isChangeSetupIndex: u,
                                                }),
                                            ),
                                        ),
                                        t.setupSelector.isSwitchEnabled &&
                                            a().createElement(
                                                'div',
                                                { className: _()(r.switch, qe(e.panelType) && xn.switch__battle) },
                                                a().createElement(Ge._, {
                                                    states: t.setupSelector.states,
                                                    onClick: B,
                                                    totalCount: t.totalCount,
                                                    currentIndex: t.currentIndex,
                                                    groupId: t.groupId,
                                                    isDisabled: e.isDisabled,
                                                }),
                                                t.setupSelector.isPrebattleSwitchDisabled &&
                                                    a().createElement(
                                                        ve,
                                                        {
                                                            header: R.strings.tank_setup.tooltips.prebattleSwitchIndicator.title(),
                                                            body: 'string' == typeof n ? n : void 0,
                                                        },
                                                        a().createElement('div', {
                                                            className: xn.prebattleSwitchIndicator,
                                                        }),
                                                    ),
                                            ),
                                    ),
                                    ((s = t),
                                    ((o = e.panelType) === Ve.Battle || o === Ve.Respawn) &&
                                        s.setupSelector.isSwitchEnabled &&
                                        Tn(s) &&
                                        a().createElement(
                                            'div',
                                            { className: _()(xn.hint, l && xn.hint__disabled) },
                                            a().createElement(wn, { hotKeys: Tn(t) }),
                                        )),
                                );
                                var s, o;
                            }),
                            s,
                        );
                    },
                    Rn = 'RoleSkillSlot_base_c4',
                    On = 'RoleSkillSlot_icon_79',
                    Mn = ({
                        roleSkill: e,
                        roleName: u,
                        tooltipId: t,
                        tooltipHeader: i,
                        tooltipBody: s,
                        className: r,
                    }) => {
                        const o = (0, n.useMemo)(
                            () => ({
                                args: {
                                    tooltipId: t,
                                    roleSkill: e,
                                    roleName: u,
                                    header: i,
                                    body: s,
                                    hasHtmlContent: !0,
                                },
                                header: i,
                                body: s,
                                ignoreShowDelay: !0,
                            }),
                            [e, u, i, s, t],
                        );
                        return a().createElement(
                            xe,
                            { tooltipArgs: o, className: _()(Rn, r) },
                            a().createElement('div', {
                                className: On,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    Ln = 'SlotGlow_base_40',
                    Nn = 'SlotGlow_glow_a9',
                    Pn = 'SlotGlow_glow__shown_f2',
                    Hn = 'SlotGlow_glow__hidden_94',
                    Gn = (0, n.memo)(({ slotOffset: e, slotWidth: u, isAnimationRunning: t }) => {
                        const i = (0, n.useState)({ offset: e, slotWidth: u }),
                            s = i[0],
                            r = i[1],
                            o = (0, n.useRef)({ initialized: !1, offset: e, slotWidth: u });
                        (0, n.useEffect)(() => {
                            let t = o.current.initialized;
                            !t && e && ((t = !0), r({ offset: e, slotWidth: u })),
                                (o.current = { initialized: t, offset: e, slotWidth: u });
                        }, [e, u]),
                            (0, n.useEffect)(() => {
                                t || r(o.current);
                            }, [t]);
                        const l = (0, n.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${d.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            c = !t && s.offset === o.current.offset,
                            E = _()(Nn, c ? Pn : Hn);
                        return a().createElement(
                            'div',
                            { className: Ln },
                            o.current.initialized && a().createElement('div', { className: E, style: l }),
                        );
                    }),
                    $n = ({
                        show: e = !0,
                        isReady: u = !0,
                        panelType: t,
                        isBootCamp: i = !1,
                        isDisabled: s = !1,
                        onBootcampPanelAppear: r,
                        onResize: o,
                        setIsExitBlocked: l,
                    }) => {
                        const c = P('model.ammunitionPanel'),
                            d = c.isSetupSwitchInProgress,
                            E = c.syncInitiator,
                            F = c.sectionGroups,
                            D = c.onSectionResized,
                            b = H.u4(F, (e, u) => e + u.sections.length, 0),
                            p = P('model.roleSkillSlot'),
                            g = P('model.abilitySlot'),
                            C = (0, n.useState)(!1),
                            B = C[0],
                            h = C[1],
                            f = (0, n.useRef)(!1),
                            S = (0, n.useState)({ slotWidth: 0, slotOffset: 0 }),
                            w = S[0],
                            x = S[1],
                            y = (0, n.useState)(!1),
                            T = y[0],
                            k = y[1],
                            I = (0, n.useRef)(null),
                            R = m(),
                            O = (0, n.useRef)({ element: null, generation: 0, slotIndex: null, sectionIndex: null }),
                            M = (0, n.useCallback)(
                                (e, u) => {
                                    if (B || d || i || t !== Ve.Hangar) return;
                                    const n = u || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                    D(Object.assign({ sectionType: e }, n)), R && (R.freeze(), R.resize());
                                },
                                [B, d, i, t, D, R],
                            ),
                            L = (0, n.useCallback)(
                                (e) => {
                                    M('main', e);
                                },
                                [M],
                            );
                        G(I, L, !0, [E]), (0, n.useEffect)(() => () => L(), [L]);
                        const N = (0, n.useCallback)(() => {
                                k(!1);
                            }, []),
                            $ = (0, n.useCallback)(() => {
                                if (O.current.element && I.current) {
                                    const e = O.current.element.getBoundingClientRect(),
                                        u = I.current.getBoundingClientRect();
                                    x({ slotWidth: e.width, slotOffset: e.left - u.left + 0.5 * e.width });
                                }
                            }, []),
                            W = (0, n.useCallback)(
                                (e, u, t) => {
                                    if (e.current && I.current) {
                                        const n = ((e, u, t) =>
                                            e !== t.current.slotIndex || u !== t.current.sectionIndex)(t, u, O);
                                        (O.current.element = e.current),
                                            (O.current.slotIndex = t),
                                            (O.current.sectionIndex = u),
                                            f.current && n ? k(!0) : (f.current = !0),
                                            O.current.generation && $();
                                    }
                                },
                                [$],
                            ),
                            j = (0, n.useCallback)(
                                () =>
                                    A(() => {
                                        (O.current.generation += 1), $();
                                    }),
                                [O, $],
                            );
                        (0, n.useEffect)(() => A(j), [j]),
                            (0, n.useEffect)(
                                () => (
                                    engine.on('clientResized', j),
                                    () => {
                                        engine.off('clientResized', j);
                                    }
                                ),
                                [j],
                            );
                        const z = (0, n.useCallback)(() => {
                                (O.current.generation += 1),
                                    b >= O.current.generation && (null == r || r(), null == o || o()),
                                    $();
                            }, [r, o, b, $]),
                            U = w.slotWidth,
                            X = w.slotOffset,
                            V = _()(Re.base, !u && Re.base__locked, !e && Re.base__hidden, s && Re.base__disabled),
                            K = _()(Re.border, !T && Re.border__hidden),
                            q = t === Ve.Setup || t === Ve.Compare,
                            Y = {
                                panelType: t,
                                isDisabled: s,
                                onActiveSlotChanged: W,
                                isBorderActive: T,
                                isBootCamp: i,
                                onBootcampPanelAppear: z,
                                setIsExitBlocked: l,
                            };
                        (0, n.useEffect)(() => {
                            !1 === i && (null == o || o());
                        }, [o, p.roleSkill, g.ability, i]);
                        const Z = v(['roleSkillSlot', 'abilitySkillSlot'], Re);
                        return a().createElement(
                            'div',
                            { ref: I, className: V },
                            q &&
                                a().createElement(Gn, {
                                    key: O.current.generation,
                                    slotOffset: X,
                                    slotWidth: U,
                                    isAnimationRunning: T,
                                }),
                            a().createElement(
                                In,
                                { isSetupSwitching: d || B, sectionProps: Y, isReady: u, setSetupSwitching: h },
                                p.roleSkill &&
                                    a().createElement(Mn, {
                                        roleSkill: p.roleSkill,
                                        roleName: p.roleName,
                                        tooltipId: p.tooltipId,
                                        tooltipHeader: p.tooltipHeader,
                                        tooltipBody: p.tooltipBody,
                                        className: _()(Re.roleSkillSlot, Re[`roleSkillSlot__${t}`], Z.roleSkillSlot),
                                    }),
                                g.ability &&
                                    a().createElement(Ie, {
                                        skillName: g.ability,
                                        tooltipId: g.tooltipId,
                                        tooltipHeader: g.tooltipHeader,
                                        tooltipBody: g.tooltipBody,
                                        className: _()(
                                            Re.abilitySkillSlot,
                                            Re[`abilitySkillSlot__${t}`],
                                            Z.abilitySkillSlot,
                                        ),
                                    }),
                            ),
                            q &&
                                a().createElement(
                                    'div',
                                    { className: K },
                                    a().createElement(Pe, { slotWidth: U, slotOffset: X, onAnimationEnd: N }),
                                ),
                        );
                    },
                    Wn = 'App_base_43',
                    jn = 'App_title_0e',
                    zn = 'App_panel_2c',
                    Un = () => {
                        const e = (0, r.m)('model', !1).onClose,
                            u = (0, n.useCallback)(() => {
                                e();
                            }, [e]);
                        return (
                            (0, o.gd)(l.n.ESCAPE, u),
                            a().createElement(
                                'div',
                                { className: Wn },
                                a().createElement('span', { className: jn }, R.strings.veh_compare.vehConf.equipment()),
                                a().createElement(
                                    'div',
                                    { className: zn },
                                    a().createElement($n, { panelType: Ve.Compare }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    s().render(a().createElement(Un, null), document.getElementById('root'));
                });
            },
            3267: (e, u, t) => {
                'use strict';
                t.d(u, { J: () => i });
                var n = t(6179),
                    a = t.n(n);
                const i = ({ wrapper: e, children: u, when: t, withProps: n }) =>
                    t ? a().createElement(e, n, u) : a().createElement(a().Fragment, null, u);
            },
            9152: (e, u, t) => {
                'use strict';
                t.d(u, { y: () => n });
                t(6483), t(8089), t(8526), t(5521), t(7727), t(6179), t(1922);
                const n = 'setup-content';
            },
            906: (e, u, t) => {
                'use strict';
                t.d(u, { r: () => o });
                var n = t(6179),
                    a = t.n(n),
                    i = t(6483),
                    s = t.n(i);
                const r = {
                        base: 'Bonus_base_dd',
                        base__fitting: 'Bonus_base__fitting_d1',
                        icon: 'Bonus_icon_3b',
                        icon__battleBooster: 'Bonus_icon__battleBooster_66',
                        icon__battleBoosterReplace: 'Bonus_icon__battleBoosterReplace_8d',
                        icon__equipmentPlus: 'Bonus_icon__equipmentPlus_48',
                        icon__builtInEquipment: 'Bonus_icon__builtInEquipment_77',
                        icon__equipmentModernized: 'Bonus_icon__equipmentModernized_76',
                        icon__equipmentTrophyBasic: 'Bonus_icon__equipmentTrophyBasic_a4',
                        icon__equipmentTrophyUpgraded: 'Bonus_icon__equipmentTrophyUpgraded_6d',
                    },
                    o = a().memo(({ isTemporary: e, overlayType: u, overlaySource: t }) => {
                        const i = s()(r.base, e && r.base__fitting),
                            o = s()(r.icon, r[`icon__${u}`]),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: o, style: l }),
                        );
                    });
            },
            8253: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => o });
                var n = t(6179),
                    a = t.n(n),
                    i = t(6483),
                    s = t.n(i);
                const r = {
                        base: 'Container_base_9a',
                        base__grabbing: 'Container_base__grabbing_73',
                        base__hangar: 'Container_base__hangar_ab',
                        base__setup: 'Container_base__setup_1c',
                        base__compare: 'Container_base__compare_0b',
                        base__selected: 'Container_base__selected_17',
                        base__dragIn: 'Container_base__dragIn_a6',
                        base__dragInActive: 'Container_base__dragInActive_e5',
                        base__toggle: 'Container_base__toggle_94',
                        base__disabled: 'Container_base__disabled_22',
                    },
                    o = ({
                        activeDragId: e,
                        slotType: u,
                        isSelected: t,
                        isBorderActive: n,
                        children: i,
                        panelType: o,
                        isDisabled: l,
                        isPotentialDrop: c,
                        onClick: _,
                    }) => {
                        const d = s()(
                            r.base,
                            !e && r[`base__${o}`],
                            u && r[`base__${u}`],
                            t && !c && !n && r.base__selected,
                            c && r['base__dragIn' + (t ? 'Active' : '')],
                            l && r.base__disabled,
                        );
                        return a().createElement('div', { className: d, onClick: _ }, i);
                    };
            },
            8598: (e, u, t) => {
                'use strict';
                t.d(u, { X: () => l });
                var n = t(6179),
                    a = t.n(n),
                    i = t(6483),
                    s = t.n(i);
                const r = 'Count_base_e4',
                    o = 'Count_base__zero_64',
                    l = ({ count: e }) => {
                        const u = s()(r, !e && o);
                        return a().createElement('div', { className: u }, e);
                    };
            },
            3141: (e, u, t) => {
                'use strict';
                t.d(u, { c: () => m });
                var n = t(6483),
                    a = t.n(n),
                    i = t(3977),
                    s = t(6179),
                    r = t.n(s),
                    o = t(906),
                    l = t(4105);
                const c = 'Inside_image_e5',
                    _ = 'Inside_image__fitting_11',
                    d = 'Inside_warning_e4',
                    E = 'Inside_change_5a',
                    m = ({
                        level: e,
                        overlayType: u,
                        isTemporary: t,
                        withAttention: n,
                        imageSource: m,
                        isIncompatible: A,
                    }) => {
                        const F = (0, s.useMemo)(() => {
                                const t = u === i.qm ? `${u}_${e}_overlay` : `${u}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(t);
                            }, [u, e]),
                            D = (0, s.useMemo)(() => ({ backgroundImage: `url(${m})` }), [m]),
                            b = !F && Boolean(u) && e;
                        return r().createElement(
                            'div',
                            null,
                            b && r().createElement(l.a, { level: e }),
                            r().createElement('div', { className: a()(c, (t || n) && _), style: D }),
                            n && r().createElement('div', { className: d }),
                            A && r().createElement('div', { className: E }),
                            F && r().createElement(o.r, { isTemporary: t, overlaySource: F, overlayType: u }),
                        );
                    };
            },
            4105: (e, u, t) => {
                'use strict';
                t.d(u, { a: () => o });
                var n = t(6179),
                    a = t.n(n),
                    i = t(6483),
                    s = t.n(i);
                const r = {
                        base: 'Level_base_57',
                        base__level1: 'Level_base__level1_c4',
                        base__level2: 'Level_base__level2_9c',
                        base__level3: 'Level_base__level3_39',
                        base__level4: 'Level_base__level4_e3',
                        base__level5: 'Level_base__level5_ea',
                        base__level6: 'Level_base__level6_5d',
                        base__level7: 'Level_base__level7_03',
                        base__level8: 'Level_base__level8_b5',
                        base__level9: 'Level_base__level9_d6',
                        base__level10: 'Level_base__level10_89',
                    },
                    o = ({ level: e }) => {
                        const u = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            t = s()(r.base, r[`base__level${e}`]);
                        return a().createElement('div', { style: u, className: t });
                    };
            },
            4814: (e, u, t) => {
                'use strict';
                t.d(u, { G: () => A });
                var n = t(9480),
                    a = t(6179),
                    i = t.n(a),
                    s = t(1922),
                    r = t(6483),
                    o = t.n(r),
                    l = t(3457),
                    c = t(7078);
                const _ = {
                        base: 'Specialization_base_ec',
                        base__tiny: 'Specialization_base__tiny_fe',
                        base__small: 'Specialization_base__small_a3',
                        base__medium: 'Specialization_base__medium_85',
                        base__large: 'Specialization_base__large_07',
                        base__huge: 'Specialization_base__huge_33',
                        base__setup: 'Specialization_base__setup_5e',
                        base__correct: 'Specialization_base__correct_4c',
                        glow: 'Specialization_glow_f0',
                        icon: 'Specialization_icon_3a',
                        icon__tiny: 'Specialization_icon__tiny_05',
                        icon__small: 'Specialization_icon__small_cf',
                        icon__medium: 'Specialization_icon__medium_ed',
                        icon__large: 'Specialization_icon__large_98',
                        icon__huge: 'Specialization_icon__huge_f7',
                        specializationWrapper: 'Specialization_specializationWrapper_bf',
                        specializationButton: 'Specialization_specializationButton_45',
                    },
                    d = ({
                        name: e,
                        isCorrect: u,
                        isSpecializationActive: t = !0,
                        isDynamic: n,
                        mediaSize: r,
                        isClickable: d,
                        onSpecializationClick: E,
                        index: m,
                    }) => {
                        const A = r !== s.cJ.None,
                            F = (0, a.useCallback)(() => {
                                d && t && E && E(m);
                            }, [m, d, t, E]),
                            D = (0, a.useMemo)(() => {
                                let t = '';
                                A && (t = (r === s.cJ.Large || r === s.cJ.Huge ? s.cJ.Large : s.cJ.Medium) + '_');
                                const n = `${t}${e}_${u ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, u, r, A]),
                            b = (0, a.useMemo)(
                                () => ({ spec: e, isDyn: n, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, n, d],
                            );
                        if (!D) return null;
                        const p = o()(
                                `specialization-${e}`,
                                _.base,
                                A && _[`base__${r}`],
                                t && _.base__setup,
                                u && _.base__correct,
                            ),
                            g = o()(_.icon, A && _[`icon__${r}`]),
                            C = A ? '' : _.specializationWrapper,
                            B = i().createElement(
                                'div',
                                { key: e, className: p },
                                i().createElement('div', { className: _.glow }),
                                i().createElement('div', { className: g, style: D }),
                            );
                        return i().createElement(
                            c.t,
                            { args: b },
                            d && t
                                ? i().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: F,
                                      },
                                      B,
                                  )
                                : i().createElement('div', { className: C }, B),
                        );
                    },
                    E = 'Specializations_base_ab';
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
                const A = ({
                    specializations: e,
                    isSpecializationActive: u = !0,
                    isDynamic: t,
                    mediaSize: a = s.cJ.None,
                    activeSpecsMask: r,
                    onSpecializationClick: o,
                }) =>
                    e.length
                        ? i().createElement(
                              'div',
                              { className: E, key: r },
                              n.UI(e, (e, n) =>
                                  i().createElement(
                                      d,
                                      m({ index: n, key: e.name }, e, {
                                          isSpecializationActive: u,
                                          isDynamic: t,
                                          mediaSize: a,
                                          onSpecializationClick: o,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            9605: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => b });
                var n = t(6179),
                    a = t.n(n),
                    i = t(6483),
                    s = t.n(i);
                let r;
                !(function (e) {
                    (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING');
                })(r || (r = {}));
                const o = 'SwitchButton_base_23',
                    l = 'SwitchButton_base__active_31',
                    c = 'SwitchButton_base__warning_71',
                    _ = 'SwitchButton_buttonBack_ce',
                    d = 'SwitchButton_buttonBackHovered_45',
                    E = 'SwitchButton_base__hovered_b4',
                    m = 'SwitchButton_buttonGlow_4c',
                    A = 'SwitchButton_buttonIcon_d3',
                    F = 'SwitchButton_buttonWarning_3f',
                    D = 'SwitchButton_number_8a',
                    b = ({ id: e, state: u, currentIndex: t, isHovered: i }) => {
                        const b = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            p = e === t,
                            g = !p && u === r.WARNING;
                        return a().createElement(
                            'div',
                            { className: s()(o, { [l]: p, [c]: g, [E]: i }) },
                            a().createElement('div', { className: _ }),
                            a().createElement('div', { className: d }),
                            a().createElement('div', { className: A }),
                            a().createElement('div', { className: m }),
                            a().createElement('div', { className: F }),
                            a().createElement('div', { style: b, className: D }),
                        );
                    };
            },
            9344: (e, u, t) => {
                'use strict';
                t.d(u, { _: () => E });
                var n = t(6483),
                    a = t.n(n),
                    i = t(9480),
                    s = t(7727),
                    r = t(6179),
                    o = t.n(r),
                    l = t(9605);
                const c = 'SwitchEquipment_base_1a',
                    _ = 'SwitchEquipment_base__disabled_73',
                    d = 'SwitchEquipment_cover_b3',
                    E = ({ onClick: e, totalCount: u, currentIndex: t, states: n, isDisabled: E, groupId: m }) => {
                        const A = (0, r.useRef)(null),
                            F = (0, r.useState)(!1),
                            D = F[0],
                            b = F[1],
                            p = (t + 1) % u,
                            g = (0, r.useCallback)(() => {
                                E || e({ groupId: m, currentIndex: p });
                            }, [m, E, p, e]),
                            C = (0, r.useCallback)(() => {
                                E || (b(!0), s.$.playHighlight());
                            }, [E]),
                            B = (0, r.useCallback)(() => {
                                E || b(!1);
                            }, [E]),
                            h = a()(c, E && _);
                        return o().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${m}`,
                                className: h,
                                onClick: g,
                                onMouseEnter: C,
                                onMouseLeave: B,
                                ref: A,
                            },
                            Array.from({ length: u }, (e, u) =>
                                o().createElement(l.U, {
                                    key: u,
                                    id: u,
                                    state: i.MH(n, u),
                                    currentIndex: t,
                                    isHovered: D,
                                }),
                            ),
                            E && o().createElement('div', { className: d }),
                        );
                    };
            },
            5918: (e, u, t) => {
                'use strict';
                t.d(u, { y: () => v });
                var n = t(4888),
                    a = t(7383),
                    i = t(9056),
                    s = t(6179),
                    r = t.n(s),
                    o = t(2558),
                    l = t(8934),
                    c = t(5958);
                const _ = 'BackEffects_shine_f6',
                    d = 'BackEffects_sparks_55',
                    E = 'BackEffects_nut_79',
                    m = 'BackEffects_wrench_5a',
                    A = { enterActive: 'BackEffects_shine__enterActive_54' },
                    F = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    D = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    b = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    p = [n.dZ, n.sH],
                    g = r().memo(({ in: e, actionType: u }) =>
                        r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(
                                l.Z,
                                { in: e, timeout: c.Dp, classNames: A },
                                r().createElement('div', { className: _ }),
                            ),
                            r().createElement(
                                l.Z,
                                { in: e, timeout: c.IG, classNames: F },
                                r().createElement('div', { className: d }),
                            ),
                            p.includes(u) &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        l.Z,
                                        { in: e, timeout: c.wx, classNames: D },
                                        r().createElement('div', { className: E }),
                                    ),
                                    r().createElement(
                                        l.Z,
                                        { in: e, timeout: c.Kz, classNames: b },
                                        r().createElement('div', { className: m }),
                                    ),
                                ),
                        ),
                    ),
                    C = 'ColorMask_base_60',
                    B = 'ColorMask_base__enterActive_62',
                    h = ({ in: e, maskImage: u }) => {
                        const t = (0, s.useMemo)(() => ({ enterActive: B }), []),
                            n = (0, s.useMemo)(() => ({ maskImage: `url(${u})` }), [u]);
                        return r().createElement(
                            l.Z,
                            { in: e, timeout: c.Qj, classNames: t },
                            r().createElement('div', { className: C, style: n }),
                        );
                    },
                    f = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d8',
                        'animation-left': 'SlotTransitions_animation-left_27',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_53',
                        'animation-fade': 'SlotTransitions_animation-fade_ce',
                        base__enterRight: 'SlotTransitions_base__enterRight_bb',
                        'animation-right': 'SlotTransitions_animation-right_31',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_63',
                        base__exitRight: 'SlotTransitions_base__exitRight_b9',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_e9',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_64',
                        'animation-right-long': 'SlotTransitions_animation-right-long_bd',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_5e',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_da',
                        'animation-left-long': 'SlotTransitions_animation-left-long_ec',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_c3',
                        base__exitFade: 'SlotTransitions_base__exitFade_4c',
                        base__enterFade: 'SlotTransitions_base__enterFade_77',
                        base: 'SlotTransitions_base_6d',
                        base__enter: 'SlotTransitions_base__enter_54',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_c7',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_1e',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_0d',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_66',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_7c',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_e4',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_94',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_fd',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_41',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_41',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_19',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_00',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_04',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_1b',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_72',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_fe',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_8a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_5d',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_2c',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_72',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_0f',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_09',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_04',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_52',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_e9',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_8b',
                        'animation-fitting': 'SlotTransitions_animation-fitting_24',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_fc',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_e0',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_d0',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_c9',
                        'animation-destroy': 'SlotTransitions_animation-destroy_12',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_19',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_e3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_8e',
                        'animation-demount': 'SlotTransitions_animation-demount_d8',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_8a',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_10',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_cf',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_57',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_d9',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_4f',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_02',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_c6',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_39',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_97',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_8a',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_28',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_8e',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_0e',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_13',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_01',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_10',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_5b',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_bd',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_52',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_a9',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_7b',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_d3',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_fc',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_97',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_7d',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e5',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_ca',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_c0',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_de',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_bc',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_3d',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_21',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_15',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_56',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_e5',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_f1',
                    },
                    S = { enter: f.base__enter, exit: f.base__enter },
                    v = r().memo(
                        ({
                            children: e,
                            slotIndex: u,
                            uniqueKey: t,
                            slotType: _,
                            isEmpty: d = !1,
                            imageSource: E,
                            itemInstalledSetupIdx: m,
                        }) => {
                            const A = (0, i.m)('model.lastSlotAction'),
                                F = A.leftID,
                                D = A.rightID,
                                b = A.leftIntCD,
                                p = A.rightIntCD,
                                C = A.actionType,
                                B = A.intCD,
                                v = (0, s.useState)(!0),
                                w = v[0],
                                x = v[1],
                                y = (0, s.useState)(!0),
                                T = y[0],
                                k = y[1],
                                I = (0, s.useState)(E),
                                R = I[0],
                                O = I[1],
                                M = (0, s.useState)(t),
                                L = M[0],
                                N = M[1],
                                P = (0, s.useState)(m),
                                H = P[0],
                                G = P[1],
                                $ = (0, s.useRef)(),
                                W = (0, s.useRef)(),
                                j = [n._2, n.dZ, n.sH],
                                z = (B === t || B === L) && H !== m && j.includes(C),
                                U = -1 === b || -1 === p,
                                X = _ ? `base${_[0].toUpperCase() + _.slice(1)}` : 'base',
                                V = c.Sr[C] || 0;
                            (0, s.useEffect)(
                                () => () => {
                                    $.current && clearTimeout($.current), W.current && clearTimeout(W.current);
                                },
                                [],
                            ),
                                (0, s.useEffect)(() => {
                                    d || O(E);
                                }, [d, E]);
                            const K = (0, s.useCallback)(
                                    (e) => {
                                        const t = Object.assign({}, S);
                                        switch (C) {
                                            case n.Xo: {
                                                const e = F === u ? c.mI.RIGHT : c.mI.LEFT,
                                                    n = D - F != 1 ? c.mI.SWAP : '';
                                                (t.enterDone = f[`${X}__enter${e}${n}`]),
                                                    (t.exit = f[`${X}__exit${e}${n}`]),
                                                    U &&
                                                        (d
                                                            ? (t.enterDone = f[`${X}__enter${c.mI.FADE}`])
                                                            : (t.exit = f[`${X}__exit${c.mI.FADE}`]));
                                                break;
                                            }
                                            case n._2:
                                                (t.enterDone = f[`${X}__enter${c.mI.DESTROY}`]),
                                                    (t.exit = f[`${X}__exit${c.mI.DESTROY}`]),
                                                    ($.current = setTimeout(() => x(!0), c.YJ)),
                                                    k(!0);
                                                break;
                                            case n.sH:
                                            case n.dZ:
                                                (t.enter = f[`${X}__enter${c.mI.DEMOUNT}${c.mI.FADE}`]),
                                                    (t.exit = f[`${X}__exit${c.mI.DEMOUNT}`]),
                                                    ($.current = setTimeout(() => x(!0), c.Ij));
                                                break;
                                            case n.eC:
                                            case n.FR:
                                                if (_ !== a.g9) {
                                                    const e = C === n.eC ? c.mI.FITTING : c.mI.FITTING_REMOVE;
                                                    (t.enter = f[`${X}__enter${e}`]),
                                                        (t.exit = f[`${X}__exit${e}`]),
                                                        (t.exitActive = f[`${X}__exitActive${c.mI.FITTING}`]);
                                                } else
                                                    (t.enterDone = f[`${X}__enter${c.mI.FADE}`]),
                                                        (t.exit = f[`${X}__exit${c.mI.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return r().cloneElement(e, { classNames: t, timeout: V });
                                    },
                                    [C, _, X, V, F, u, D, d, U],
                                ),
                                q = (0, s.useCallback)(
                                    (e) => {
                                        W.current = setTimeout(() => {
                                            (e.className = ''), e.classList.add(f.base), N(t), G(m);
                                        }, V);
                                    },
                                    [V, t, m],
                                ),
                                Y = (0, s.useCallback)(() => {
                                    x(!1), k(!1);
                                }, []);
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(
                                    o.Z,
                                    { component: null, childFactory: K },
                                    r().createElement(
                                        l.Z,
                                        {
                                            key: t,
                                            timeout: V,
                                            classNames: S,
                                            onEntered: q,
                                            onExiting: Y,
                                            unmountOnExit: !0,
                                        },
                                        r().createElement('div', { className: f.base }, e),
                                    ),
                                ),
                                z &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(g, { in: w, actionType: C }),
                                        r().createElement(h, { in: T, maskImage: R }),
                                    ),
                            );
                        },
                    );
            },
            5958: (e, u, t) => {
                'use strict';
                t.d(u, {
                    Dp: () => r,
                    IG: () => o,
                    Ij: () => i,
                    Kz: () => c,
                    Qj: () => _,
                    Sr: () => E,
                    YJ: () => s,
                    mI: () => d,
                    wx: () => l,
                });
                var n = t(4888);
                const a = 1600,
                    i = 900,
                    s = 900,
                    r = 200,
                    o = 400,
                    l = 600,
                    c = 600,
                    _ = 1200;
                let d;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(d || (d = {}));
                const E = { [n.Xo]: 200, [n.FR]: 250, [n.eC]: 250, [n._2]: 1400, [n.dZ]: a, [n.sH]: a, [n.Fd]: a };
            },
            3977: (e, u, t) => {
                'use strict';
                t.d(u, { qm: () => n });
                const n = 'equipmentModernized';
            },
            4888: (e, u, t) => {
                'use strict';
                t.d(u, { FR: () => a, Fd: () => r, Xo: () => i, _2: () => l, dZ: () => s, eC: () => n, sH: () => o });
                const n = 'select',
                    a = 'undo',
                    i = 'swap',
                    s = 'demount',
                    r = 'demount_from_setup',
                    o = 'demount_from_setups',
                    l = 'destroy';
            },
            7383: (e, u, t) => {
                'use strict';
                t.d(u, { WI: () => r, YN: () => s, g9: () => a, mH: () => i, yZ: () => o, zn: () => n });
                const n = 'optDevices',
                    a = 'shells',
                    i = 'consumables',
                    s = 'battleAbilities',
                    r = 'toggleShells',
                    o = 'toggleCamouflage';
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
            7476: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
                };
            },
            1960: () => {
                'use strict';
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], i = !0, s = 0; s < u.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(o--, 1);
                        var r = t();
                        void 0 !== r && (e = r);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (__webpack_require__.j = 736),
        (() => {
            var e = { 736: 0, 927: 0, 490: 0, 754: 0, 803: 0, 761: 0, 833: 0, 795: 0, 723: 0, 287: 0, 975: 0, 197: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [i, s, r] = t,
                        o = 0;
                    if (i.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (r) var l = r(__webpack_require__);
                    }
                    for (u && u(t); o < i.length; o++)
                        (a = i[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(5348));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
