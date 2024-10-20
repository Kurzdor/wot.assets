(() => {
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    i = u(7727),
                    r = u(6179),
                    s = u.n(r),
                    o = u(6880),
                    l = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: u,
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
                    const g = (0, r.useRef)(null),
                        C = (0, r.useState)(u),
                        B = C[0],
                        h = C[1],
                        f = (0, r.useState)(!1),
                        S = f[0],
                        v = f[1],
                        w = (0, r.useState)(!1),
                        x = w[0],
                        y = w[1],
                        T = (0, r.useCallback)(() => {
                            c || (g.current && (g.current.focus(), h(!0)));
                        }, [c]),
                        I = (0, r.useCallback)(
                            (e) => {
                                B && null !== g.current && !g.current.contains(e.target) && h(!1);
                            },
                            [B],
                        ),
                        k = (0, r.useCallback)(
                            (e) => {
                                c || (p && p(e));
                            },
                            [c, p],
                        ),
                        M = (0, r.useCallback)(
                            (e) => {
                                c || (null !== d && (0, i.G)(d), m && m(e), y(!0));
                            },
                            [c, d, m],
                        ),
                        L = (0, r.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        O = (0, r.useCallback)(
                            (e) => {
                                c || (D && D(e), v(!1));
                            },
                            [c, D],
                        ),
                        N = (0, r.useCallback)(
                            (e) => {
                                c || (null !== E && (0, i.G)(E), F && F(e), u && T(), v(!0));
                            },
                            [c, E, F, T, u],
                        ),
                        H = (0, r.useCallback)(
                            (e) => {
                                c || (b && b(e), v(!1));
                            },
                            [c, b],
                        ),
                        P = a()(
                            o.Z.base,
                            o.Z[`base__${n}`],
                            {
                                [o.Z.base__disabled]: c,
                                [o.Z[`base__${t}`]]: t,
                                [o.Z.base__focus]: B,
                                [o.Z.base__highlightActive]: S,
                                [o.Z.base__firstHover]: x,
                            },
                            _,
                        ),
                        G = a()(o.Z.state, o.Z.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', I),
                                () => {
                                    document.removeEventListener('mousedown', I);
                                }
                            ),
                            [I],
                        ),
                        (0, r.useEffect)(() => {
                            h(u);
                        }, [u]),
                        s().createElement(
                            'div',
                            {
                                ref: g,
                                className: P,
                                onMouseEnter: M,
                                onMouseMove: L,
                                onMouseUp: O,
                                onMouseDown: N,
                                onMouseLeave: H,
                                onClick: k,
                            },
                            n !== l.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: o.Z.back }),
                                    s().createElement('span', { className: o.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: G },
                                s().createElement('span', { className: o.Z.stateDisabled }),
                                s().createElement('span', { className: o.Z.stateHighlightHover }),
                                s().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _ = (0, r.memo)(c);
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
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => _ });
                var n = u(3138),
                    a = u(6179),
                    i = u(1043),
                    r = u(5262);
                const s = n.O.client.getSize('rem'),
                    o = s.width,
                    l = s.height,
                    c = Object.assign({ width: o, height: l }, (0, r.T)(o, l, i.j)),
                    _ = (0, a.createContext)(c);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => c });
                var n = u(6179),
                    a = u.n(n),
                    i = u(6536),
                    r = u(3495),
                    s = u(1043),
                    o = u(5262),
                    l = u(3138);
                const c = (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(r.Y),
                        u = (0, n.useState)(t),
                        c = u[0],
                        _ = u[1],
                        d = (0, n.useCallback)((e, t) => {
                            const u = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(t);
                            _(Object.assign({ width: u, height: n }, (0, o.T)(u, n, s.j)));
                        }, []);
                    (0, i.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', d), [d]);
                    const E = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return a().createElement(r.Y.Provider, { value: E }, e);
                });
            },
            6010: (e, t, u) => {
                'use strict';
                var n = u(6179),
                    a = u(7382),
                    i = u(3495);
                const r = ['children'];
                const s = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, r);
                    const s = (0, n.useContext)(i.Y),
                        o = s.extraLarge,
                        l = s.large,
                        c = s.medium,
                        _ = s.small,
                        d = s.extraSmall,
                        E = s.extraLargeWidth,
                        m = s.largeWidth,
                        A = s.mediumWidth,
                        F = s.smallWidth,
                        D = s.extraSmallWidth,
                        b = s.extraLargeHeight,
                        p = s.largeHeight,
                        g = s.mediumHeight,
                        C = s.smallHeight,
                        B = s.extraSmallHeight,
                        h = { extraLarge: b, large: p, medium: g, small: C, extraSmall: B };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && o) return t;
                        if (u.large && l) return t;
                        if (u.medium && c) return t;
                        if (u.small && _) return t;
                        if (u.extraSmall && d) return t;
                    } else {
                        if (u.extraLargeWidth && E) return (0, a.H)(t, u, h);
                        if (u.largeWidth && m) return (0, a.H)(t, u, h);
                        if (u.mediumWidth && A) return (0, a.H)(t, u, h);
                        if (u.smallWidth && F) return (0, a.H)(t, u, h);
                        if (u.extraSmallWidth && D) return (0, a.H)(t, u, h);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && b) return t;
                            if (u.largeHeight && p) return t;
                            if (u.mediumHeight && g) return t;
                            if (u.smallHeight && C) return t;
                            if (u.extraSmallHeight && B) return t;
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
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === u.extraLarge.weight,
                        large: i === u.large.weight,
                        medium: i === u.medium.weight,
                        small: i === u.small.weight,
                        extraSmall: i === u.extraSmall.weight,
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
                u.d(t, { T: () => a, u: () => n }),
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
            8089: (e, t, u) => {
                'use strict';
                var n = u(6179),
                    a = u.n(n),
                    i = u(6483),
                    r = u.n(i),
                    s = u(7727),
                    o = u(7476);
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
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
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
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, s.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, s.G)(this.props.soundClick);
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
                            i = e.side,
                            s = e.type,
                            _ = e.classNames,
                            d = e.onMouseEnter,
                            E = e.onMouseLeave,
                            m = e.onMouseDown,
                            A = e.onMouseUp,
                            F =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, l)),
                            D = r()(o.Z.base, o.Z[`base__${s}`], o.Z[`base__${i}`], null == _ ? void 0 : _.base),
                            b = r()(o.Z.icon, o.Z[`icon__${s}`], o.Z[`icon__${i}`], null == _ ? void 0 : _.icon),
                            p = r()(o.Z.glow, null == _ ? void 0 : _.glow),
                            g = r()(o.Z.caption, o.Z[`caption__${s}`], null == _ ? void 0 : _.caption),
                            C = r()(o.Z.goto, null == _ ? void 0 : _.goto);
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
                                    onClick: u,
                                },
                                F,
                            ),
                            'info' !== s && a().createElement('div', { className: o.Z.shine }),
                            a().createElement('div', { className: b }, a().createElement('div', { className: p })),
                            a().createElement('div', { className: g }, t),
                            n && a().createElement('div', { className: C }, n),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => o });
                var n = u(6179),
                    a = u.n(n),
                    i = u(2056);
                const r = ['children'];
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
                const o = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, r);
                    return a().createElement(
                        i.u,
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
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => l });
                var n = u(7902),
                    a = u(4179),
                    i = u(6179);
                const r = [
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
                const o = (e, t, u = {}, n = 0) => {
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
                            S = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, r);
                        const v = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, i.useMemo)(() => B || (0, n.F)().resId, [B]),
                            x = (0, i.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (o(u, b, { isMouseEvent: !0, on: !0, arguments: s(a) }, w),
                                    h && h(),
                                    (v.current.isVisible = !0));
                            }, [u, b, a, w, h]),
                            y = (0, i.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        o(u, b, { on: !1 }, w),
                                        v.current.isVisible && f && f(),
                                        (v.current.isVisible = !1);
                                }
                            }, [u, b, w, f]),
                            T = (0, i.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(v.current.prevTarget) && y();
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
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((I = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(x, m ? 100 : 400)),
                                                      l && l(e),
                                                      I && I(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              y(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === F && y(), null == d || d(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === F && y(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      S,
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
            527: (e, t, u) => {
                'use strict';
                u.r(t), u.d(t, { mouse: () => s, onResize: () => i });
                var n = u(2472),
                    a = u(1176);
                const i = (0, n.E)('clientResized'),
                    r = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
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
                    const i = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        s = r[t]((e) => u([e, 'outside']));
                                    function o(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, o),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(i, o),
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
            5959: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => r,
                    });
                var n = u(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const r = {
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
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => w,
                    });
                var n = u(3722),
                    a = u(6112),
                    i = u(6538),
                    r = u(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
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
                function p(e, t) {
                    viewEnv.setAnimateWindow(e, t);
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
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    v = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    i = 16,
                    r = 32,
                    s = 64,
                    o = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : r);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(i, { isMouseEvent: !0, on: e });
                        },
                    };
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
            8071: (e, t, u) => {
                'use strict';
                u.d(t, { M: () => n });
                const n = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
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
            8526: (e, t, u) => {
                'use strict';
                u.d(t, { gd: () => s });
                var n = u(3138),
                    a = u(5521),
                    i = (u(4179), u(6179));
                const r = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function s(e = a.n.NONE, t = r, u = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== a.n.NONE)
                            return (
                                window.addEventListener('keydown', i, u),
                                () => {
                                    window.removeEventListener('keydown', i, u);
                                }
                            );
                        function i(a) {
                            if (a.keyCode === e) {
                                if (n.O.view.isEventHandled()) return;
                                n.O.view.setEventHandled(), t(a), u && a.stopPropagation();
                            }
                        }
                    }, [t, e, u]);
                }
            },
            9056: (e, t, u) => {
                'use strict';
                u.d(t, { m: () => o });
                var n = u(7902),
                    a = u(8071),
                    i = u(4179),
                    r = u(6179);
                const s = i.Sw.instance,
                    o = (e = 'model', t = !0) => {
                        const u = (0, r.useState)(0),
                            i = (u[0], u[1]),
                            o = (0, r.useMemo)(() => (0, n.F)(), []),
                            l = o.caller,
                            c = o.resId,
                            _ = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== l ? `children.${l}.${e}` : e),
                                [l, e],
                            ),
                            d = (0, r.useMemo)(
                                () =>
                                    ((e) => {
                                        const t = (0, a.M)(e, window);
                                        for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                        return t;
                                    })(_),
                                [_],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                if (t) {
                                    const t = () => {
                                            i((e) => e + 1);
                                        },
                                        u = s.addCallback(e, t, c);
                                    return () => s.removeCallback(u, c);
                                }
                            }, [e, t, c]),
                            d
                        );
                    };
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
                u.d(t, {
                    DZ: () => c,
                    G: () => o,
                    MH: () => i,
                    UI: () => r,
                    hX: () => l,
                    u4: () => d,
                    v: () => _,
                    yW: () => s,
                });
                var n = u(8968);
                function a(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                const i = a;
                function r(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function s(e, t) {
                    if (Array.isArray(e)) return e.every(t);
                    for (let u = 0; u < e.length; u++) {
                        if (!t(i(e, u), u, e)) return !1;
                    }
                    return !0;
                }
                function o(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let u = 0; u < e.length; u++) {
                        if (t(i(e, u), u, e)) return !0;
                    }
                    return !1;
                }
                function l(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const u = [];
                    for (let a = 0; a < e.length; a++) {
                        var n;
                        const i = null == (n = e[a]) ? void 0 : n.value;
                        t(i, a, e) && u.push(i);
                    }
                    return u;
                }
                function c(e, t, u) {
                    const n = [];
                    for (let a = 0; a < e.length; a++) {
                        const r = i(e, a);
                        t(r, a, e) && n.push(u(r, a, e));
                    }
                    return n;
                }
                function _(e, t) {
                    return c(e, n.C, t);
                }
                function d(e, t, u) {
                    if (Array.isArray(e)) return e.reduce(t, u);
                    let n = u;
                    for (let u = 0; u < e.length; u++) {
                        n = t(n, i(e, u), u, e);
                    }
                    return n;
                }
            },
            8968: (e, t, u) => {
                'use strict';
                function n(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                u.d(t, { C: () => n });
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
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => i });
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
                        const i = n.O.view.addModelObserver(e, u, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(i) : (this._views[u] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
            4179: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => i.Z, B0: () => o, c9: () => p, ry: () => b });
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
                var i = u(1358);
                const r = {
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
                var E = u(5521),
                    m = u(3138);
                const A = ['args'];
                function F(e, t, u, n, a, i, r) {
                    try {
                        var s = e[i](r),
                            o = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(o) : Promise.resolve(o).then(n, a);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        u = arguments;
                                    return new Promise(function (n, a) {
                                        var i = e.apply(t, u);
                                        function r(e) {
                                            F(i, n, a, r, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(i, n, a, r, s, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, A);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    g = () => p(o.CLOSE),
                    C = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var B = u(7572);
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
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            p(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), i) => {
                            const r = m.O.view.getViewGlobalPosition(),
                                s = u.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                _ = s.width,
                                d = s.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + r.x,
                                    y: m.O.view.pxToRem(c) + r.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            p(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: D(E),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
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
                        ClickOutsideManager: h,
                        SystemLocale: r,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = f;
            },
            6602: (e, t, u) => {
                'use strict';
                var n = u(7739),
                    a = u(6179),
                    i = u.n(a),
                    r = u(6483),
                    s = u.n(r),
                    o = u(926),
                    l = u.n(o),
                    c = u(1043);
                let _, d, E;
                !(function (e) {
                    (e[(e.ExtraSmall = c.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = c.j.small.width)] = 'Small'),
                        (e[(e.Medium = c.j.medium.width)] = 'Medium'),
                        (e[(e.Large = c.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = c.j.extraLarge.width)] = 'ExtraLarge');
                })(_ || (_ = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = c.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = c.j.small.width)] = 'Small'),
                            (e[(e.Medium = c.j.medium.width)] = 'Medium'),
                            (e[(e.Large = c.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = c.j.extraLarge.width)] = 'ExtraLarge');
                    })(d || (d = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = c.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = c.j.small.height)] = 'Small'),
                            (e[(e.Medium = c.j.medium.height)] = 'Medium'),
                            (e[(e.Large = c.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = c.j.extraLarge.height)] = 'ExtraLarge');
                    })(E || (E = {}));
                const m = () => {
                        const e = (0, a.useContext)(n.YN),
                            t = e.width,
                            u = e.height,
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return _.ExtraLarge;
                                    case e.large:
                                        return _.Large;
                                    case e.medium:
                                        return _.Medium;
                                    case e.small:
                                        return _.Small;
                                    case e.extraSmall:
                                        return _.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), _.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return d.ExtraLarge;
                                    case e.largeWidth:
                                        return d.Large;
                                    case e.mediumWidth:
                                        return d.Medium;
                                    case e.smallWidth:
                                        return d.Small;
                                    case e.extraSmallWidth:
                                        return d.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), d.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return E.ExtraLarge;
                                    case e.largeHeight:
                                        return E.Large;
                                    case e.mediumHeight:
                                        return E.Medium;
                                    case e.smallHeight:
                                        return E.Small;
                                    case e.extraSmallHeight:
                                        return E.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), E.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: i, mediaWidth: r, mediaHeight: s, remScreenWidth: t, remScreenHeight: u };
                    },
                    A = ['children', 'className'];
                function F() {
                    return (
                        (F =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        F.apply(this, arguments)
                    );
                }
                const D = {
                        [d.ExtraSmall]: '',
                        [d.Small]: l().SMALL_WIDTH,
                        [d.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [d.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [d.ExtraLarge]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    b = {
                        [E.ExtraSmall]: '',
                        [E.Small]: l().SMALL_HEIGHT,
                        [E.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [E.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [E.ExtraLarge]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    p = {
                        [_.ExtraSmall]: '',
                        [_.Small]: l().SMALL,
                        [_.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [_.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [_.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    g = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, A);
                        const a = m(),
                            r = a.mediaWidth,
                            o = a.mediaHeight,
                            l = a.mediaSize;
                        return i().createElement('div', F({ className: s()(u, D[r], b[o], p[l]) }, n), t);
                    },
                    C = ['children'];
                const B = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, C);
                    return i().createElement(n.ZN, null, i().createElement(g, u, t));
                };
                var h = u(493),
                    f = u.n(h),
                    S = u(3138);
                const v = [];
                const w = (e) => {
                    (0, a.useEffect)(e, []);
                };
                function x() {
                    const e = (0, a.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, a.useEffect)(() => t, []),
                        (0, a.useMemo)(
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
                const y = (0, a.createContext)(null);
                function T() {
                    return (0, a.useContext)(y);
                }
                const I = (e) => {
                        const t = i().useRef(null),
                            u = x(),
                            n = i().useRef(),
                            r = i().useRef(!1),
                            s = i().useCallback(() => {
                                const e = t.current;
                                if (!e) throw new Error('Element is not defined');
                                return (function (e, t) {
                                    if (t.current) {
                                        const u = t.current,
                                            n = u.width,
                                            a = u.height;
                                        if (n === e.offsetWidth && a === e.offsetHeight) return !0;
                                    }
                                    return !1;
                                })(e, n);
                            }, []),
                            o = (function (e) {
                                const t = (0, a.useRef)(e);
                                return (
                                    (0, a.useLayoutEffect)(() => {
                                        t.current = e;
                                    }),
                                    (0, a.useCallback)((...e) => (0, t.current)(...e), v)
                                );
                            })(() => {
                                u.run(() => {
                                    const u = t.current;
                                    if (!u || !1 === (null == e.needUpdate ? void 0 : e.needUpdate())) return;
                                    const a = s();
                                    if (a && !r.current) return;
                                    const i = {
                                        width: Math.max(1, u.offsetWidth),
                                        height: Math.max(1, u.offsetHeight),
                                    };
                                    (n.current = i),
                                        S.O.view.resize(i.width, i.height),
                                        !1 === a && (null == e.onResize || e.onResize(i));
                                });
                            });
                        w(() =>
                            S.O.view.events.onTextureFrozen(() => {
                                r.current = !0;
                            }),
                        ),
                            w(() =>
                                S.O.view.events.onTextureReady(() => {
                                    r.current && n.current && S.O.view.resize(n.current.width, n.current.height),
                                        (r.current = !1);
                                }),
                            ),
                            w(
                                () => (
                                    window.addEventListener('resize', o), () => window.removeEventListener('resize', o)
                                ),
                            ),
                            i().useEffect(() => {
                                var t;
                                (null == (t = e.autoUpdate) || t) && o();
                            });
                        const l = i().useMemo(
                            () => ({
                                resize: o,
                                equalSize: s,
                                getLastSize: () => n.current,
                                getCurrentSize: () => {
                                    const e = t.current;
                                    return e
                                        ? { width: e.offsetWidth, height: e.offsetHeight }
                                        : { width: 0, height: 0 };
                                },
                                freeze: () => {
                                    (r.current = !0), S.O.view.freezeTextureBeforeResize();
                                },
                                isFrozen: () => r.current,
                            }),
                            [s, o],
                        );
                        return i().createElement(y.Provider, { value: l }, e.children(t, o));
                    },
                    k = (e) => {
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
                var M = u(7641);
                var L = u(8526),
                    O = u(7902),
                    N = u(8071),
                    H = u(6536),
                    P = u(4179);
                const G = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    $ = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    W = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = (0, N.M)(`${e}.${u}`, window);
                                return G(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    z = (e) => {
                        const t = ((e) => {
                                const t = (0, O.F)(),
                                    u = t.caller,
                                    n = t.resId,
                                    a = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: a, modelPath: $(a, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const a = (0, N.M)($(u, `${t}.${n}`), window);
                                    return G(a) ? (e.push(a.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    U = P.Sw.instance;
                let j;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(j || (j = {}));
                const X = (e = 'model', t = j.Deep) => {
                    const u = (0, a.useState)(0),
                        n = (u[0], u[1]),
                        i = (0, a.useMemo)(() => (0, O.F)(), []),
                        r = i.caller,
                        s = i.resId,
                        o = (0, a.useMemo)(
                            () => (window.__feature && window.__feature !== r ? `subViews.${r}.${e}` : e),
                            [r, e],
                        ),
                        l = (0, a.useState)(() =>
                            ((e) => {
                                const t = (0, N.M)(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return G(t) ? t.value : t;
                            })(W(o)),
                        ),
                        c = l[0],
                        _ = l[1],
                        d = (0, a.useRef)(-1);
                    return (
                        (0, H.Z)(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? j.Deep : j.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== j.None)
                            ) {
                                const u = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === j.Deep
                                            ? (e === c && n((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    a = z(e);
                                d.current = U.addCallback(a, u, s, t === j.Deep);
                            }
                        }),
                        (0, a.useEffect)(() => {
                            if (t !== j.None)
                                return () => {
                                    U.removeCallback(d.current, s);
                                };
                        }, [s, t]),
                        c
                    );
                };
                var V = u(5521),
                    K = u(5262);
                let q;
                function Z(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(q || (q = {}));
                const Y = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    J = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    Q = (e, t, u = q.left) => e.split(t).reduce(u === q.left ? Y : J, []),
                    ee = (() => {
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
                    te = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ue = (e, t = q.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return te.includes(u)
                            ? ee(e)
                            : ((e, t = q.left) => {
                                  let u = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = e.replace(/&nbsp;/g, ' ');
                                  return Q(a, /( )/, t).forEach((e) => (u = u.concat(Q(e, n, q.left)))), u;
                              })(e, t);
                    };
                function ne(e, t, u) {
                    const i = (0, a.useContext)(n.YN);
                    let r = Object.entries(i).filter(([e, t]) => !0 === t && e in K.u);
                    return (
                        u && (r = r.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const n = r.map((e) =>
                                s()(t[((e, t) => e + '__' + t)(u, e[0])], t[((e, t) => e + Z(t))(u, e[0])]),
                            );
                            return (e[u] = s()(t[u], ...n)), e;
                        }, {})
                    );
                }
                var ae = u(9480);
                const ie = (e, t, u, n = []) => {
                    const i = ((e, t = []) => {
                        const u = (0, a.useRef)(),
                            n = (0, a.useCallback)((...t) => {
                                u.current && u.current(), (u.current = e(...t));
                            }, t);
                        return (
                            (0, a.useEffect)(
                                () => () => {
                                    u.current && u.current();
                                },
                                [n],
                            ),
                            n
                        );
                    })(
                        () =>
                            k(() =>
                                k(() => {
                                    if (e.current) {
                                        const u = e.current.getBoundingClientRect(),
                                            n = {
                                                width: S.O.view.pxToRem(u.width),
                                                height: S.O.view.pxToRem(u.height),
                                                offsetX: S.O.view.pxToRem(u.left),
                                                offsetY: S.O.view.pxToRem(u.top),
                                            };
                                        window.tutorialApi.updateComponents(), t(n);
                                    }
                                }),
                            ),
                        [t, e],
                    );
                    return (
                        (0, a.useEffect)(() => {
                            i();
                        }, [i, ...n]),
                        (0, a.useEffect)(() => {
                            if (u)
                                return (
                                    engine.on('clientResized', i),
                                    () => {
                                        engine.off('clientResized', i);
                                    }
                                );
                        }, [u, i]),
                        i
                    );
                };
                var re = u(9887),
                    se = u.n(re);
                const oe = ['xl', 'lg', 'md', 'sm', 'xs'],
                    le = (e) => e.includes('_') && ((e) => oe.includes(e))(e.split('_').at(-1)),
                    ce = [_.ExtraLarge, _.Large, _.Medium, _.Small, _.ExtraSmall],
                    _e = (e, t) =>
                        Object.keys(e).reduce((u, n) => {
                            if (n in u) return u;
                            if (le(n)) {
                                const a = n.split('_').slice(0, -1).join('_');
                                if (a in u) return u;
                                const i = ce.indexOf(t),
                                    r = (-1 !== i ? oe.slice(i) : [])
                                        .map((e) => a + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    s = r ? e[r] : void 0;
                                return (u[a] = void 0 !== s ? s : e[a]), u;
                            }
                            const a = e[n];
                            return (
                                void 0 === a ||
                                    ((e, t) => oe.some((u) => void 0 !== t[`${e}_${u}`]))(n, e) ||
                                    (u[n] = a),
                                u
                            );
                        }, {}),
                    de = (e, t = _e) => {
                        const u = (
                            (e, t = _e) =>
                            (u) => {
                                const n = m().mediaSize,
                                    r = (0, a.useMemo)(() => t(u, n), [u, n]);
                                return i().createElement(e, r);
                            }
                        )(e, t);
                        return i().memo((t) =>
                            Object.keys(t).some((e) => le(e) && void 0 !== t[e])
                                ? i().createElement(u, t)
                                : i().createElement(e, t),
                        );
                    },
                    Ee = {
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
                    me = [
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
                function Ae() {
                    return (
                        (Ae =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ae.apply(this, arguments)
                    );
                }
                Object.keys(se());
                const Fe = {
                        XL: { mt: Ee.mt__XL, mr: Ee.mr__XL, mb: Ee.mb__XL, ml: Ee.ml__XL },
                        LG: { mt: Ee.mt__LG, mr: Ee.mr__LG, mb: Ee.mb__LG, ml: Ee.ml__LG },
                        MDp: { mt: Ee.mt__MDp, mr: Ee.mr__MDp, mb: Ee.mb__MDp, ml: Ee.ml__MDp },
                        MD: { mt: Ee.mt__MD, mr: Ee.mr__MD, mb: Ee.mb__MD, ml: Ee.ml__MD },
                        SMp: { mt: Ee.mt__SMp, mr: Ee.mr__SMp, mb: Ee.mb__SMp, ml: Ee.ml__SMp },
                        SM: { mt: Ee.mt__SM, mr: Ee.mr__SM, mb: Ee.mb__SM, ml: Ee.ml__SM },
                        XS: { mt: Ee.mt__XS, mr: Ee.mr__XS, mb: Ee.mb__XS, ml: Ee.ml__XS },
                    },
                    De = (Object.keys(Fe), ['mt', 'mr', 'mb', 'ml']),
                    be = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    pe = de((e) => {
                        let t = e.className,
                            u = e.width,
                            n = e.height,
                            r = e.m,
                            o = e.mt,
                            l = void 0 === o ? r : o,
                            c = e.mr,
                            _ = void 0 === c ? r : c,
                            d = e.mb,
                            E = void 0 === d ? r : d,
                            m = e.ml,
                            A = void 0 === m ? r : m,
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
                            I = e.flexWrap,
                            k = void 0 === I ? (T ? 'wrap' : void 0) : I,
                            R = e.grow,
                            M = e.shrink,
                            L = e.flex,
                            O = void 0 === L ? (R || M ? `${R ? 1 : 0} ${M ? 1 : 0} auto` : void 0) : L,
                            N = e.style,
                            H = e.children,
                            P = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, me);
                        const G = (0, a.useMemo)(() => {
                                const e = { mt: l, mr: _, mb: E, ml: A },
                                    t = ((e) =>
                                        De.reduce((t, u) => {
                                            const n = e[u];
                                            return n && 'number' != typeof n ? t.concat(Fe[!0 === n ? 'MD' : n][u]) : t;
                                        }, []))(e),
                                    a = ((e) =>
                                        De.reduce((t, u) => {
                                            const n = e[u];
                                            return 'number' == typeof n && (t[be[u]] = n + 'rem'), t;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, N, a, {
                                        width: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: O,
                                        alignSelf: y,
                                        display: p || x ? 'flex' : void 0,
                                        flexDirection: p,
                                        flexWrap: k,
                                        justifyContent: v,
                                        alignItems: x,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, n, l, _, E, A, N, O, y, p, k, v, x]),
                            $ = G.computedStyle,
                            W = G.computedClassNames;
                        return i().createElement('div', Ae({ className: s()(Ee.base, ...W, t), style: $ }, P), H);
                    }),
                    ge = 'FormatText_base_d0',
                    Ce = ({ binding: e, text: t = '', classMix: u, alignment: n = q.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : i().createElement(
                                  a.Fragment,
                                  null,
                                  t.split('\n').map((t, r) =>
                                      i().createElement(
                                          'div',
                                          { className: s()(ge, u), key: `${t}-${r}` },
                                          ((e, t, u) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (u && e in u ? u[e] : ue(e, t))))(t, n, e).map((e, t) =>
                                              i().createElement(a.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Be = u(3532),
                    he = u.n(Be);
                const fe = {
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
                    Se = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                Object.keys(se());
                const we = Object.keys(he()),
                    xe = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    ye = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Te = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ie = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    ke =
                        (Object.keys(Ie),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': xe,
                            'heading-H36': xe,
                            'heading-H28': ye,
                            'heading-H24': ye,
                            'heading-H24R': ye,
                            'heading-H22': ye,
                            'heading-H20R': ye,
                            'heading-H18': ye,
                            'heading-H15': Te,
                            'heading-H14': Te,
                            'paragraph-P24': ye,
                            'paragraph-P18': ye,
                            'paragraph-P16': ye,
                            'paragraph-P14': Te,
                            'paragraph-P12': Te,
                            'paragraph-P10': Te,
                        }),
                    Re =
                        (Object.keys(ke),
                        (e) =>
                            e
                                ? ((e) => we.includes(e))(e)
                                    ? { colorClassName: fe[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Me = de((e) => {
                        let t = e.text,
                            u = e.variant,
                            n = e.className,
                            r = e.color,
                            o = e.m,
                            l = e.mt,
                            c = void 0 === l ? o : l,
                            _ = e.mr,
                            d = void 0 === _ ? o : _,
                            E = e.mb,
                            m = void 0 === E ? o : E,
                            A = e.ml,
                            F = void 0 === A ? o : A,
                            D = e.style,
                            b = e.format,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Se);
                        const g = (0, a.useMemo)(() => {
                                const e = Re(r),
                                    t = e.colorClassName,
                                    u = e.colorStyle,
                                    n = void 0 === u ? {} : u;
                                return { computedStyle: Object.assign({}, D, n), colorClassName: t };
                            }, [D, r]),
                            C = g.computedStyle,
                            B = g.colorClassName;
                        return i().createElement(
                            pe,
                            ve(
                                {
                                    className: s()(fe.base, u && fe[u], B, n),
                                    style: C,
                                    mt: !0 === c ? ke[u || 'paragraph-P16'].mt : c,
                                    mr: !0 === d ? ke[u || 'paragraph-P16'].mr : d,
                                    mb: !0 === m ? ke[u || 'paragraph-P16'].mb : m,
                                    ml: !0 === F ? ke[u || 'paragraph-P16'].ml : F,
                                },
                                p,
                            ),
                            void 0 !== b ? i().createElement(Ce, ve({}, b, { text: t })) : t,
                        );
                    });
                var Le = u(7078),
                    Oe = u(2056);
                const Ne = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const Pe = R.views.common.tooltip_window.simple_tooltip_content,
                    Ge = (e) => {
                        let t = e.children,
                            u = e.body,
                            n = e.header,
                            r = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Ne);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: u, header: n, note: r, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, u, n, r, o]);
                        return i().createElement(
                            Oe.u,
                            He(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? Pe.SimpleTooltipHtmlContent('resId') : Pe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var _;
                    };
                function $e() {
                    return (
                        ($e =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        $e.apply(this, arguments)
                    );
                }
                const We = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const n = i().createElement('div', { className: u }, e);
                        if (t.header || t.body) return i().createElement(Ge, t, n);
                        const a = t.contentId,
                            r = t.args,
                            s = null == r ? void 0 : r.contentId;
                        return a || s
                            ? i().createElement(Oe.u, $e({}, t, { contentId: a || s }), n)
                            : i().createElement(Le.t, t, n);
                    },
                    ze = 'AbilitySkillSlot_base_d7',
                    Ue = 'AbilitySkillSlot_slotText_1e',
                    je = 'AbilitySkillSlot_icon_d2',
                    Xe = ({ skillName: e, tooltipId: t, tooltipHeader: u, tooltipBody: n, className: r }) => {
                        const o = (0, a.useMemo)(
                            () => ({
                                args: { tooltipId: t, skillName: e, header: u, body: n, hasHtmlContent: !0 },
                                header: u,
                                body: n,
                                ignoreShowDelay: !0,
                            }),
                            [e, u, n, t],
                        );
                        return i().createElement(
                            We,
                            { tooltipArgs: o, className: s()(ze, r) },
                            i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(Me, {
                                    className: Ue,
                                    text: R.strings.tank_setup.tooltips.abilitySlot.title(),
                                }),
                                i().createElement('div', {
                                    className: je,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                    },
                                }),
                            ),
                        );
                    },
                    Ve = {
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
                    Ke = 'Border_base_f9',
                    qe = 'Border_border_83',
                    Ze = 'Border_wrapper_17',
                    Ye = 'Border_active_e8',
                    Je = (0, a.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: u }) => {
                        const n = (0, a.useRef)(null),
                            r = (0, a.useRef)(!1);
                        (0, a.useEffect)(() => {
                            r.current = !0;
                        }, [e, t]);
                        const s = (0, a.useCallback)(() => {
                            r.current && u(), (r.current = !1);
                        }, [u]);
                        (0, a.useEffect)(() => {
                            const e = n.current;
                            return (
                                e && e.addEventListener('transitionend', s),
                                () => {
                                    e && e.removeEventListener('transitionend', s);
                                }
                            );
                        }, [s]);
                        const o = (0, a.useMemo)(() => ({ left: e }), [e]),
                            l = (0, a.useMemo)(() => ({ width: t }), [t]);
                        return i().createElement(
                            'div',
                            { className: Ke },
                            i().createElement(
                                'div',
                                { ref: n, className: qe, style: o },
                                i().createElement(
                                    'div',
                                    { className: Ze },
                                    i().createElement('div', { className: Ye, style: l }),
                                ),
                            ),
                        );
                    });
                let Qe;
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
                })(Qe || (Qe = {}));
                Date.now();
                u(9056);
                var et = u(9344),
                    tt = u(2558),
                    ut = u(8934);
                const nt = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    at = 'up',
                    it = 'down',
                    rt = ({ children: e, index: t, setSetupSwitching: u, disabled: n = !1 }) => {
                        const r = (0, a.useRef)(1 - t),
                            s = (0, a.useMemo)(() => {
                                const e = ((u = t), (a = r.current), u === a ? '' : u > a ? it : at);
                                var u, a;
                                const i = e && Z(e);
                                return n ? {} : { enter: nt[`base__enter${i}`], exit: nt[`base__exit${i}`] };
                            }, [t, n]);
                        return (
                            (r.current = t),
                            i().createElement(
                                tt.Z,
                                { className: nt.base },
                                i().createElement(
                                    ut.Z,
                                    {
                                        timeout: 300,
                                        key: t,
                                        classNames: s,
                                        onEnter: () => u(!0),
                                        onExited: () => u(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    };
                let st;
                !(function (e) {
                    (e.Hangar = 'hangar'),
                        (e.Setup = 'setup'),
                        (e.Compare = 'compare'),
                        (e.Battle = 'battle'),
                        (e.Respawn = 'respawn'),
                        (e.Prebattle = 'prebattle');
                })(st || (st = {}));
                const ot = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    lt = (e) => e === st.Battle || e === st.Prebattle,
                    ct = (e) => !lt(e),
                    _t = (e) => lt(e) || e === st.Respawn;
                var dt = u(7383),
                    Et = u(9152),
                    mt = u(7727);
                function At(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ft(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Ft(e, t);
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
                function Ft(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const Dt = (e, t = []) => {
                        const u = document.getElementById('root');
                        u && (u.style.cursor = e ? 'grabbing' : 'default');
                        for (var n, a = At(t); !(n = a()).done; ) {
                            const t = n.value,
                                u = document.getElementById(t);
                            u && (u.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    bt = (e, t, u) => {
                        let n = '',
                            a = 8e3;
                        for (var i, r = At(u); !(i = r()).done; ) {
                            const e = i.value,
                                u = Math.abs(e.centerX - t);
                            u < a && ((n = e.id), (a = u));
                        }
                        return n;
                    },
                    pt = (e, t) => {
                        const u = t.find((t) => t.id === e);
                        return u ? u.centerX : 0;
                    };
                let gt, Ct;
                !(function (e) {
                    (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                })(gt || (gt = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(Ct || (Ct = {}));
                const Bt = (e) => `panel-${e}-section`,
                    ht = (e, t) => {
                        const u = Bt(e),
                            n = t.filter((e) => e !== u);
                        return { selfId: u, blockOnGrabIds: [Et.y, ...n] };
                    },
                    ft = ({ baseId: e, slotsLength: t, handleSwap: u, setIsExitBlocked: n, syncInitiator: i }) => {
                        const r = ((e, t, u) => {
                                const n = (0, a.useRef)([]),
                                    i = (0, a.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    r = (0, a.useState)({ activeDragId: '', potentialDropId: '' }),
                                    s = r[0],
                                    o = r[1],
                                    l = (0, a.useCallback)((e) => {
                                        i.current.dropId ||
                                            i.current.prevPotentialDropId ||
                                            ((i.current.prevPotentialDropId = e),
                                            o({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    c = (0, a.useCallback)((e, t) => {
                                        if (n.current) {
                                            const u = bt(0, t, n.current);
                                            u !== i.current.prevPotentialDropId &&
                                                ((i.current.prevPotentialDropId = u),
                                                o({ activeDragId: e, potentialDropId: u }));
                                        }
                                    }, []),
                                    _ = (0, a.useCallback)((e, t) => {
                                        if (n.current && t) {
                                            const u = i.current,
                                                a = bt(0, t, n.current);
                                            (u.dropId = a),
                                                (u.dragId = e),
                                                (u.prevPotentialDropId = ''),
                                                o({ activeDragId: e, potentialDropId: '' }),
                                                a !== e && (0, mt.G)('cons_equipment_swipe');
                                        }
                                    }, []),
                                    d = (0, a.useCallback)(() => {
                                        const e = i.current,
                                            t = e.dragId,
                                            u = e.dropId,
                                            n = e.prevPotentialDropId;
                                        (t || u || n) &&
                                            ((i.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            o({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    E = (0, a.useCallback)(
                                        (e) => {
                                            const t = i.current.dropId;
                                            t && t !== e ? u(e, t) : d();
                                        },
                                        [d, u],
                                    ),
                                    m = (0, a.useCallback)((e, t) => {
                                        const u = n.current.find((t) => t.id === e);
                                        u && t && (u.centerX = t);
                                    }, []),
                                    A = (0, a.useCallback)(
                                        (e, t) => {
                                            const u = t.dragId,
                                                n = t.currentCenterX;
                                            switch (e) {
                                                case Ct.Ready:
                                                    return m(u, n);
                                                case Ct.DragStart:
                                                    return l(u);
                                                case Ct.Drag:
                                                    return c(u, n);
                                                case Ct.Drop:
                                                    return _(u, n);
                                                case Ct.DropExit:
                                                    return E(u);
                                                default:
                                                    return;
                                            }
                                        },
                                        [l, c, _, E, m],
                                    );
                                return (
                                    (0, a.useEffect)(() => {
                                        if (e !== n.current.length) {
                                            const u = new Array(e).fill(null);
                                            n.current = u.map((e, u) => ({ id: `${t}-${u}`, centerX: 0 }));
                                        }
                                    }, [e, t]),
                                    {
                                        dragState: s,
                                        handleGrabberAction: A,
                                        getForceCenterX: (0, a.useCallback)((e) => {
                                            const t = i.current,
                                                u = t.dragId,
                                                a = t.dropId;
                                            return e === u ? pt(a, n.current) : e === a ? pt(u, n.current) : 0;
                                        }, []),
                                        resetDragResults: d,
                                    }
                                );
                            })(t, e, u),
                            s = r.dragState,
                            o = r.handleGrabberAction,
                            l = r.getForceCenterX,
                            c = r.resetDragResults,
                            _ = (0, a.useCallback)(
                                (e, t) => {
                                    if (n)
                                        switch (e) {
                                            case Ct.DragStart:
                                            case Ct.Drag:
                                                n(!0);
                                                break;
                                            default:
                                                n(!1);
                                        }
                                    o(e, t);
                                },
                                [o, n],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                n && n(!1);
                            }, [n]),
                            (0, a.useEffect)(() => {
                                c();
                            }, [i, c]),
                            { handleGrabberAction: _, dragState: s, getForceCenterX: l }
                        );
                    },
                    St = {
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
                    vt = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function wt() {
                    return (
                        (wt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        wt.apply(this, arguments)
                    );
                }
                const xt = (e) => {
                    let t = e.size,
                        u = e.value,
                        n = e.isEmpty,
                        a = e.fadeInAnimation,
                        r = e.hide,
                        o = e.maximumNumber,
                        l = e.className,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, vt);
                    const _ = n ? null : u,
                        d = 'string' == typeof _;
                    if ((_ && !d && _ < 0) || 0 === _) return null;
                    const E = _ && !d && _ > o,
                        m = s()(
                            St.base,
                            St[`base__${t}`],
                            a && St.base__animated,
                            r && St.base__hidden,
                            !_ && St.base__pattern,
                            n && St.base__empty,
                            l,
                        );
                    return i().createElement(
                        'div',
                        wt({ className: m }, c),
                        i().createElement('div', { className: St.bg }),
                        i().createElement('div', { className: St.pattern }),
                        i().createElement(
                            'div',
                            { className: s()(St.value, d && St.value__text) },
                            E ? o : _,
                            E && i().createElement('span', { className: St.plus }, '+'),
                        ),
                    );
                };
                xt.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const yt = 'display',
                    Tt = 'visible_change',
                    It = Tt,
                    kt = 'TopLabel_base_7f',
                    Rt = 'TopLabel_base__ready_00',
                    Mt = 'TopLabel_text_d0',
                    Lt = 'TopLabel_text__hangar_36',
                    Ot = 'TopLabel_text__shown_25',
                    Nt = 'TopLabel_text__hidden_79',
                    Ht = 'TopLabel_text__truncated_29',
                    Pt = (0, a.memo)(({ panelType: e, text: t, parentRef: u, isTruncated: n = !1, show: r = !1 }) => {
                        const o = (0, a.useRef)(!1),
                            l = (0, a.useState)(!1),
                            c = l[0],
                            _ = l[1];
                        (0, a.useEffect)(() => {
                            u || (r && !o.current && (o.current = !0), _(r));
                        }, [r, u]);
                        const d = (0, a.useCallback)(() => {
                                (o.current = !0), _(!0);
                            }, []),
                            E = (0, a.useCallback)(() => {
                                _(!1);
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = u && u.current;
                            if (e)
                                return (
                                    e.addEventListener('mouseenter', d),
                                    e.addEventListener('mouseleave', E),
                                    () => {
                                        e.removeEventListener('mouseenter', d), e.removeEventListener('mouseleave', E);
                                    }
                                );
                        }, [u, d, E]);
                        const m = s()(kt, o.current && Rt),
                            A = s()(Mt, e !== st.Setup && Lt, n && Ht, r && c ? Ot : Nt);
                        return i().createElement(
                            'div',
                            { className: m },
                            i().createElement('div', { className: A }, t),
                        );
                    }),
                    Gt = 'notUsableSection',
                    $t = 'Section_base_8a',
                    Wt = 'Section_base__hidden_f0',
                    zt = 'Section_label_73',
                    Ut = 'Section_counter_8a',
                    jt = 'Section_configLabel_c9',
                    Xt = 'Section_configText_eb',
                    Vt = 'Section_configVehicleIcon_20';
                let Kt;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(Kt || (Kt = {}));
                const qt = 'tooltip_watched';
                let Zt;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(Zt || (Zt = {}));
                let Yt, Jt, Qt;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(Yt || (Yt = {})),
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
                    })(Jt || (Jt = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(Qt || (Qt = {}));
                const eu = 'metrics',
                    tu = () => Date.now(),
                    uu = ({ partnerID: e, item: t, parentScreen: u, itemState: n, info: a }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: u || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    nu = (e, t) => {
                        const u = (0, a.useCallback)(
                            (u, n = Kt.Info, a) => {
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
                    au = (e, t) => {
                        const u = nu(e, t),
                            n = (0, a.useRef)(new Map()),
                            i = (0, a.useRef)(new Map()),
                            r = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = n.current.get(e);
                                    (void 0 !== t && t > 0) || n.current.set(e, tu());
                                },
                                [n],
                            ),
                            s = (0, a.useCallback)(() => {
                                n.current.clear(), i.current.clear();
                            }, [n, i]),
                            o = (0, a.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== n.current.get(e) &&
                                        void 0 === i.current.get(e) &&
                                        i.current.set(e, tu());
                                },
                                [n, i],
                            ),
                            l = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = n.current.get(e);
                                    if (void 0 === t) return;
                                    const u = i.current.get(e);
                                    if (void 0 === u) return;
                                    i.current.delete(e);
                                    const a = tu() - u;
                                    n.current.set(e, t + a);
                                },
                                [n, i],
                            ),
                            c = (0, a.useCallback)(
                                (e, t = 0, a, r) => {
                                    const s = n.current.get(e);
                                    if (void 0 === s) return;
                                    void 0 !== i.current.get(e) && l(e), n.current.delete(e);
                                    const o = (tu() - s) / 1e3;
                                    o <= t ||
                                        ((r = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(r, o)),
                                        u(e, a, r));
                                },
                                [n, i, u, l],
                            );
                        return [(e) => r(e), (e, t, u, n) => c(e, t, u, n), () => s(), (e) => o(e), (e) => l(e)];
                    },
                    iu = (e) => {
                        const t = au(e, eu),
                            u = t[0],
                            n = t[1],
                            i = t[2],
                            r = t[3],
                            s = t[4],
                            o = (0, a.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        u = e.timeLimit,
                                        a = e.logLevel;
                                    n(t, u, a, uu(e));
                                },
                                [n],
                            );
                        return [(e) => u(e), (e) => o(e), () => i(), (e) => r(e), (e) => s(e)];
                    },
                    ru = i().memo(function ({ className: e, children: t }) {
                        const u = ((e, t, u, n) => {
                                const i = iu('epic_battle'),
                                    r = i[0],
                                    s = i[1];
                                return [
                                    (0, a.useCallback)(() => r(qt), [r]),
                                    (0, a.useCallback)(
                                        () =>
                                            s({
                                                action: qt,
                                                timeLimit: 2,
                                                item: e,
                                                parentScreen: t,
                                                itemState: u,
                                                info: n,
                                            }),
                                        [s, e, t, u, n],
                                    ),
                                ];
                            })(Jt.SkillOrderTooltip, Yt.SetupView),
                            n = u[0],
                            r = u[1];
                        return i().createElement(
                            Oe.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                                onMouseEnter: n,
                                onMouseLeave: r,
                            },
                            i().createElement('div', { className: e }, t),
                        );
                    }),
                    su = 'SlotDivider_base_60',
                    ou = () => i().createElement('div', { className: su });
                var lu = u(3267),
                    cu = u(8253),
                    _u = u(3141);
                const du = 'Grabber_base_cf',
                    Eu = 'Grabber_base__enabled_b0',
                    mu = 'Grabber_base__waitingUpdate_1d',
                    Au = 'Grabber_base__updating_f1',
                    Fu = 'Grabber_base__active_71',
                    Du = 'Grabber_base__exit_1f',
                    bu = 'Grabber_base__showAnimation_d9',
                    pu = i().memo(
                        ({
                            children: e,
                            id: t,
                            containerRef: u,
                            isEnabled: n = !0,
                            onClick: r,
                            forceCenterX: o,
                            isUpdateAvailable: l,
                            handleAction: c,
                            blockOnGrabIds: _ = [],
                        }) => {
                            const d = m().mediaSize,
                                E = (0, a.useRef)({
                                    actualX: 0,
                                    clickCenterOffset: 0,
                                    dropCenterX: 0,
                                    grabActivationPassed: !1,
                                    isDragActive: !1,
                                    id: t,
                                }),
                                A = (0, a.useRef)({
                                    isValid: !1,
                                    startX: 0,
                                    startCenterX: 0,
                                    minXRestriction: 0,
                                    maxXRestriction: 8e3,
                                }),
                                F = (0, a.useRef)(null),
                                D = (0, a.useState)(!1),
                                b = D[0],
                                p = D[1],
                                g = (0, a.useState)(0),
                                C = g[0],
                                B = g[1],
                                h = 0 !== o && n;
                            (0, a.useEffect)(() => {
                                if (((A.current.isValid = !1), t))
                                    return k(() => {
                                        const e = F.current,
                                            n = u.current;
                                        if (n && e) {
                                            const u = e.getBoundingClientRect(),
                                                a = n.getBoundingClientRect(),
                                                i = u.left + 0.5 * u.width;
                                            (A.current = {
                                                isValid: !0,
                                                minXRestriction: a.left,
                                                maxXRestriction: a.left + a.width,
                                                startX: u.left,
                                                startCenterX: i,
                                            }),
                                                c(Ct.Ready, { dragId: t, currentCenterX: i });
                                        }
                                    });
                            }, [d]);
                            const f = (0, a.useCallback)(
                                    (e) => {
                                        (E.current.isDragActive = e),
                                            p(e),
                                            E.current.grabActivationPassed && !e && Dt(!1, _);
                                    },
                                    [_],
                                ),
                                v = (0, a.useCallback)(() => {
                                    c(Ct.DragStart, { dragId: E.current.id }),
                                        (E.current.grabActivationPassed = !0),
                                        Dt(!0, _);
                                }, [c, _]),
                                w = (0, a.useCallback)((e) => {
                                    const t = E.current,
                                        u = A.current,
                                        n = u.startX,
                                        a = u.startCenterX,
                                        i = u.minXRestriction,
                                        r = u.maxXRestriction,
                                        s = a - n,
                                        o = e - t.clickCenterOffset;
                                    t.dropCenterX = ((e, t, u, n) => {
                                        const a = u + t,
                                            i = n - t;
                                        return e < a ? a : e > i ? i : e;
                                    })(o, s, i, r);
                                }, []),
                                x = (0, a.useCallback)(
                                    (e) => {
                                        const t = E.current,
                                            u = A.current;
                                        0 === e.button &&
                                            !t.isDragActive &&
                                            u.isValid &&
                                            n &&
                                            !l &&
                                            F.current &&
                                            ((t.actualX = e.clientX),
                                            (t.clickCenterOffset = t.actualX - u.startCenterX),
                                            f(!0));
                                    },
                                    [n, l, f],
                                ),
                                y = (0, a.useCallback)(() => {
                                    !r || (n && A.current.isValid) || r();
                                }, [n, r]),
                                T = (0, a.useCallback)(
                                    (e) => {
                                        const t = E.current;
                                        e.target === F.current &&
                                            t.grabActivationPassed &&
                                            ((t.grabActivationPassed = !1),
                                            setTimeout(() => c(Ct.DropExit, { dragId: t.id })));
                                    },
                                    [c],
                                );
                            (0, L.gd)(V.n.ESCAPE, () => f(!1)),
                                (0, a.useEffect)(() => {
                                    n && o && B(0);
                                }, [o, n]);
                            const I = !b && E.current.grabActivationPassed;
                            (0, a.useEffect)(() => {
                                E.current.id = t;
                            }, [t]),
                                (0, a.useEffect)(() => {
                                    I && c(Ct.Drop, { dragId: E.current.id, currentCenterX: E.current.dropCenterX });
                                }, [I, c]),
                                (0, a.useEffect)(() => {
                                    const e = F.current;
                                    if (h && e)
                                        return (
                                            e.addEventListener('transitionend', T),
                                            () => {
                                                e.removeEventListener('transitionend', T);
                                            }
                                        );
                                }, [h, T]),
                                (0, a.useEffect)(() => {
                                    if (n && b && E.current.id) {
                                        const e = S.O.client.events.mouse.up(([e, t]) => {
                                                if ('outside' === t) return f(!1);
                                                const u = E.current,
                                                    n = e.clientX;
                                                n === u.actualX && 0 === e.button && !E.current.grabActivationPassed
                                                    ? r && r()
                                                    : E.current.grabActivationPassed && w(n),
                                                    E.current.isDragActive && f(!1);
                                            }),
                                            t = S.O.client.events.mouse.move(([e]) => {
                                                const t = E.current;
                                                if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                                                const u = e.clientX,
                                                    n = t.grabActivationPassed;
                                                !n && v(),
                                                    u !== t.actualX &&
                                                        ((t.actualX = u),
                                                        w(u),
                                                        n &&
                                                            c(Ct.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                                        B(t.dropCenterX - A.current.startCenterX));
                                            });
                                        return () => {
                                            t(), e();
                                        };
                                    }
                                }, [v, c, b, n, r, f, w]);
                            const R = (0, a.useMemo)(
                                    () => (o ? { left: o - A.current.startCenterX } : { left: C }),
                                    [C, o],
                                ),
                                M = n ? s()(du, Eu, b && Fu, I && Du, h && mu, o && Au) : s()(du, o && bu);
                            return i().createElement(
                                'div',
                                { id: t, ref: F, onClick: y, onMouseDown: x, className: M, style: R },
                                e,
                            );
                        },
                    );
                let gu;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(gu || (gu = {}));
                const Cu = 'KeyLabel_base_ec',
                    Bu = 'KeyLabel_base__current_c2',
                    hu = 'KeyLabel_base__next_fa',
                    fu = ({ text: e, show: t, panelType: u, shellState: n }) => {
                        if (!e) return null;
                        e = 'KEY_NONE' === e ? '..' : R.strings.readable_key_names.$dyn(e);
                        const a = s()(Cu, n === gu.Current && Bu, n === gu.Next && hu);
                        return i().createElement(
                            'div',
                            { className: a },
                            i().createElement(Pt, { isTruncated: !0, text: e, show: t, panelType: u }),
                        );
                    },
                    Su = ({ children: e, slotType: t, slotId: u, isEnabled: n = !0 }) => {
                        const r = (0, a.useMemo)(() => ({ slotType: t, slotId: u }), [t, u]);
                        return i().createElement(Le.t, { isEnabled: n, args: r }, i().createElement('div', null, e));
                    },
                    vu = 'Close_base_f3',
                    wu = 'Close_base__invisible_0e',
                    xu = 'Close_base__shown_a2',
                    yu = 'Close_base__hover_6d',
                    Tu = 'Close_base__down_2b',
                    Iu = (0, a.memo)(
                        ({ id: e, show: t = !0, onClick: u, soundHover: n = 'highlight', soundClick: r = 'play' }) => {
                            const o = (0, a.useState)(!1),
                                l = o[0],
                                c = o[1],
                                _ = (0, a.useState)(!1),
                                d = _[0],
                                E = _[1],
                                m = (0, a.useState)(!1),
                                A = m[0],
                                F = m[1],
                                D = (0, a.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                b = (0, a.useCallback)(() => {
                                    E(!0), n && (0, mt.G)(n);
                                }, [n]),
                                p = (0, a.useCallback)(() => {
                                    c(!1), E(!1);
                                }, []),
                                g = (0, a.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && (c(!0), r && (0, mt.G)(r));
                                    },
                                    [t, r],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && u && u();
                                    },
                                    [t, u],
                                );
                            (0, a.useEffect)(
                                () =>
                                    k(() => {
                                        F(!0);
                                    }),
                                [],
                            );
                            const B = s()(vu, !A && wu, A && t && xu, l && Tu, d && yu);
                            return i().createElement('div', {
                                id: e,
                                onMouseOver: b,
                                onMouseLeave: p,
                                onMouseDown: g,
                                onMouseUp: C,
                                className: B,
                                onClick: D,
                            });
                        },
                    ),
                    ku = 'Slot_base_3a',
                    Ru = 'Slot_label_e6',
                    Mu = 'Slot_close_bb',
                    Lu = 'Slot_disabled_5d',
                    Ou = 'Slot_shadow_a7',
                    Nu = 'Slot_category_2c';
                let Hu;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Hu || (Hu = {}));
                const Pu = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: n = 0,
                        args: i,
                        isEnabled: r = !0,
                        onMouseDown: s,
                    }) => {
                        const o = (0, a.useCallback)(() => {
                                (0, P.c9)(P.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    mt.$.playYes();
                            }, [i, t, u, n]),
                            l = (0, a.useCallback)(() => {
                                (0, P.c9)(P.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, n]),
                            c = (0, a.useCallback)(
                                (e) => {
                                    s && s(e), ((e) => e.button === Hu.RIGHT)(e) && o();
                                },
                                [s, o],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                !1 === r && l();
                            }, [r, l]),
                            r ? (0, a.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Gu = ['children'];
                function $u() {
                    return (
                        ($u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        $u.apply(this, arguments)
                    );
                }
                const Wu = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, Gu);
                    return i().createElement(
                        Pu,
                        $u({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var zu = u(5918);
                const Uu = i().memo(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: u,
                            isMountedMoreThanOne: n,
                            isInstalled: r,
                            isDisabled: s,
                            imageSource: o,
                            isEmpty: l,
                            slotIndex: c,
                            slotType: _,
                            isBootCamp: d,
                            contextMenuDisabled: E,
                            isSetupSwitching: m,
                            children: A,
                        }) => {
                            const F = (0, a.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: t,
                                    isMounted: r,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: u,
                                    itemInstalledSetupSlotIdx: t,
                                    isMountedMoreThanOne: n,
                                }),
                                [e, _, t, u, r, n],
                            );
                            return i().createElement(
                                zu.y,
                                {
                                    uniqueKey: e,
                                    isEmpty: l,
                                    slotIndex: c,
                                    slotType: _,
                                    imageSource: o,
                                    itemInstalledSetupIdx: u,
                                },
                                i().createElement(
                                    Wu,
                                    { isEnabled: !(m || E || s || l || d), args: F },
                                    i().createElement('div', null, A),
                                ),
                            );
                        },
                    ),
                    ju = ({
                        id: e,
                        intCD: t,
                        slotType: u,
                        imageSource: n,
                        isInstalled: r,
                        itemInstalledSetupIdx: s,
                        isMountedMoreThanOne: o,
                        overlayType: l,
                        keyName: c,
                        slotIndex: _,
                        level: d,
                        isBootCamp: E,
                        isSelected: m,
                        isSetupSwitching: A,
                        isSectionSelected: F,
                        withAttention: D,
                        onActiveSlotChanged: b,
                        onSlotSelected: p,
                        onActiveSlotRefChanged: g,
                        onSlotClear: C,
                        panelType: B,
                        isDisabled: h = !1,
                        isBorderActive: f,
                        isIncompatible: S = !1,
                        grabberId: v,
                        containerRef: w,
                        activeDragId: x,
                        handleGrabberAction: y,
                        forceLeftUpdate: T,
                        potentialDropId: I,
                        blockOnGrabIds: R,
                        categoryImgSource: M,
                        contextMenuDisabled: L,
                    }) => {
                        const O = B === st.Setup,
                            N = !_t(B),
                            H = B === st.Compare,
                            P = O && F && N,
                            G = (0, a.useRef)(!1),
                            $ = (0, a.useRef)(null),
                            W = -1 === t;
                        (0, a.useEffect)(() => {
                            if (!G.current && F && m)
                                return k(() => {
                                    b && b($, u, e), (G.current = !0);
                                });
                            G.current = !0;
                        }, [e, F, m, b, u]),
                            (0, a.useEffect)(() => {
                                m && g($);
                            }, [m, g]);
                        const z = ((e) => {
                                const t = (0, a.useRef)(-1),
                                    u = (0, a.useCallback)(
                                        (u) => {
                                            if (-1 === t.current) {
                                                const n = e(u);
                                                n &&
                                                    (t.current = window.setTimeout(() => {
                                                        t.current = -1;
                                                    }, n));
                                            }
                                        },
                                        [e],
                                    );
                                return (0, a.useEffect)(() => () => clearTimeout(t.current), []), u;
                            })((0, a.useCallback)(() => (!m && N && !A && p(u, e), 500), [e, N, m, A, p, u])),
                            U = (0, a.useCallback)(() => {
                                h || z('');
                            }, [z, h]),
                            j = (0, a.useCallback)(() => {
                                !m && !x && !h && mt.$.playHighlight();
                            }, [m, x, h]);
                        (0, a.useEffect)(() => {
                            I && mt.$.playHighlight();
                        }, [I]);
                        const X = (0, a.useCallback)(() => {
                                null == C || C(e, u);
                            }, [e, C, u]),
                            V = O && !r,
                            K = Boolean(v && I === v),
                            q = v && (P || H),
                            Z = `${u}-slot-${e}`,
                            Y = M && M.length > 0,
                            J = Y ? { backgroundImage: `url(${M})` } : {},
                            Q = {
                                id: v,
                                containerRef: w,
                                isEnabled: !W,
                                onClick: U,
                                isUpdateAvailable: Boolean(x),
                                handleAction: y,
                                forceCenterX: T,
                                blockOnGrabIds: R,
                            },
                            ee = {
                                isEmpty: W,
                                intCD: t,
                                slotType: u,
                                slotIndex: _,
                                imageSource: n,
                                isBootCamp: E,
                                isDisabled: h,
                                isInstalled: r,
                                id: e,
                                itemInstalledSetupIdx: s,
                                isMountedMoreThanOne: o,
                                contextMenuDisabled: L,
                                isSetupSwitching: A,
                            };
                        return i().createElement(
                            'div',
                            { className: ku, onMouseEnter: j, id: Z },
                            (F || H) &&
                                !r &&
                                i().createElement(
                                    'div',
                                    { className: Mu },
                                    i().createElement(Iu, { id: `close-${Z}`, show: !x, onClick: X }),
                                ),
                            i().createElement(
                                Su,
                                { slotType: u, slotId: e, isEnabled: !x && ct(B) },
                                i().createElement(
                                    'div',
                                    { ref: $ },
                                    i().createElement(
                                        cu.W,
                                        {
                                            activeDragId: x,
                                            slotType: u,
                                            isSelected: m,
                                            isBorderActive: Boolean(f),
                                            panelType: B,
                                            isDisabled: h,
                                            isPotentialDrop: K,
                                            onClick: q ? void 0 : U,
                                        },
                                        N &&
                                            i().createElement(
                                                'div',
                                                { className: Ru },
                                                i().createElement(fu, { text: c, show: Boolean(F), panelType: B }),
                                            ),
                                        i().createElement(
                                            lu.J,
                                            { when: Boolean(q), wrapper: pu, withProps: Q },
                                            i().createElement(
                                                lu.J,
                                                { when: N, wrapper: Uu, withProps: ee },
                                                i().createElement(_u.c, {
                                                    imageSource: n,
                                                    isIncompatible: S,
                                                    overlayType: l,
                                                    level: d,
                                                    isTemporary: V,
                                                    withAttention: D,
                                                }),
                                            ),
                                        ),
                                        Y &&
                                            i().createElement(
                                                i().Fragment,
                                                null,
                                                i().createElement('span', { className: Ou }),
                                                i().createElement('span', { className: Nu, style: J }),
                                            ),
                                        h && i().createElement('div', { className: Lu }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Xu = 'BattleAbilitySlot_base_74',
                    Vu = 'BattleAbilitySlot_rank_01',
                    Ku = ['rank'];
                const qu = (0, a.memo)((e) => {
                    let t = e.rank,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, Ku);
                    const n = (0, a.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]),
                        r = s()(Xu);
                    return i().createElement(
                        'div',
                        { className: r },
                        i().createElement(ju, u),
                        t && i().createElement('div', { className: Vu, style: n }),
                    );
                });
                var Zu = u(4814);
                const Yu = 'OptDeviceSlot_base_14',
                    Ju = 'OptDeviceSlot_specializations_c3',
                    Qu = ['specializations', 'activeSpecsMask', 'isChangeSetupIndex', 'isDynamic'];
                const en = (e) => {
                        let t = e.specializations,
                            u = e.activeSpecsMask,
                            n = e.isChangeSetupIndex,
                            a = e.isDynamic,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Qu);
                        const o = X('model.ammunitionPanel', j.None).onSpecializationSelect,
                            l = r.panelType === st.Setup || r.panelType === st.Compare,
                            c = !_t(r.panelType);
                        return i().createElement(
                            'div',
                            { className: s()(Yu, t.length && !a && !n && 'specializationsSlot') },
                            c &&
                                i().createElement(
                                    'div',
                                    { className: Ju },
                                    i().createElement(Zu.G, {
                                        specializations: t,
                                        isDynamic: a,
                                        activeSpecsMask: u,
                                        isSpecializationActive: l,
                                        onSpecializationClick: (e) => {
                                            o({ slotId: r.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            i().createElement(ju, r),
                        );
                    },
                    tn = {
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
                    un = ({ id: e, isSelected: t, isLocked: u, onSlotSelected: n, panelType: r }) => {
                        const o = dt.yZ,
                            l = (0, a.useCallback)(() => {
                                n(o, e);
                            }, [e, n, o]),
                            c = s()(tn.base, tn[`base__${r}`], u && tn.base__disabled, t && tn.base__toggle),
                            _ = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            d = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.tanksetup.shells.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            ),
                            E = `toggle-camouflage-slot-${e}`;
                        return i().createElement(
                            Su,
                            { slotType: o, slotId: e },
                            i().createElement(
                                'div',
                                { id: E, className: c, onClick: l, onMouseEnter: mt.$.playHighlight },
                                t && i().createElement('div', { className: tn.glow }),
                                i().createElement('div', { className: tn.image, style: _ }),
                                i().createElement('div', { className: tn.toggle, style: d }),
                            ),
                        );
                    },
                    nn = ['value', 'sectionType'];
                function an() {
                    return (
                        (an =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        an.apply(this, arguments)
                    );
                }
                const rn = (e) => {
                        let t = e.value,
                            u = e.sectionType,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, nn);
                        switch (u) {
                            case dt.zn: {
                                const e = t;
                                return i().createElement(
                                    en,
                                    an({}, e, n, {
                                        specializations: e.specializations.specializations,
                                        isDynamic: e.specializations.isDynamic,
                                    }),
                                );
                            }
                            case dt.yZ: {
                                const e = t;
                                return i().createElement(un, an({}, n, e));
                            }
                            case dt.YN: {
                                const e = t;
                                return i().createElement(qu, an({}, n, e));
                            }
                            default:
                                return i().createElement(ju, an({}, n, t));
                        }
                    },
                    sn = 'Slots_base_27',
                    on = ({
                        slots: e,
                        sectionType: t,
                        panelType: u,
                        isBorderActive: n,
                        onActiveSlotChanged: r,
                        isDisabled: o,
                        isBootCamp: l,
                        selectedSection: c,
                        selectedSlot: _,
                        syncInitiator: d,
                        blockOnGrabIds: E,
                        isChangeSetupIndex: m,
                        setIsExitBlocked: A,
                    }) => {
                        const F = (0, a.useRef)(null),
                            D = (0, a.useRef)(null),
                            b = X('model.ammunitionPanel', j.None),
                            p = b.onSectionSelect,
                            g = b.onDragDropSwap,
                            C = b.onSlotClear,
                            B = (0, a.useCallback)(
                                (e, u) => {
                                    g({
                                        sectionType: t,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(u[u.length - 1]),
                                    });
                                },
                                [g, t],
                            ),
                            h = c === t,
                            f = h ? _ : -1,
                            S = `${t}-${e.length}slots`,
                            v = ft({
                                baseId: S,
                                slotsLength: e.length,
                                handleSwap: B,
                                setIsExitBlocked: A,
                                syncInitiator: d,
                            }),
                            w = v.handleGrabberAction,
                            x = v.dragState,
                            y = v.getForceCenterX;
                        (0, a.useEffect)(() => {
                            h && -1 !== f && F.current && r(F, c, f);
                        }, [r, h, c, f]);
                        const T = (e, t) => {
                                if ((o || mt.$.playClick(), 'number' != typeof t))
                                    return console.warn('selectedSlot is not a number');
                                p({ selectedSlot: t, selectedSection: e });
                            },
                            I = (e) => {
                                F.current = e ? e.current : null;
                            },
                            k = (e, t) => {
                                C({ slotId: e, sectionType: t });
                            };
                        return i().createElement(
                            'div',
                            { id: S, ref: D, className: s()(sn, t) },
                            ae.v(e, (s, c) => {
                                const _ = t === dt.YN,
                                    d = !_ && e.length > 1 ? `${S}-${c}` : '';
                                return i().createElement(
                                    a.Fragment,
                                    { key: `${s.id}-${c}` },
                                    c > 0 && i().createElement(ou, null),
                                    i().createElement(rn, {
                                        value: s,
                                        sectionType: t,
                                        panelType: u,
                                        isSelected: f === s.id,
                                        isSectionSelected: h,
                                        isDisabled: o,
                                        isBootCamp: l,
                                        isBorderActive: n,
                                        contextMenuDisabled: _,
                                        slotType: t,
                                        onActiveSlotChanged: r,
                                        onSlotSelected: T,
                                        onActiveSlotRefChanged: I,
                                        onSlotClear: k,
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
                    ln = ({
                        type: e,
                        slots: t,
                        newItemsCount: u,
                        isDisabled: n,
                        panelType: r,
                        onActiveSlotChanged: o,
                        isBorderActive: l,
                        isBootCamp: c = !0,
                        selectedSection: _,
                        selectedSlot: d,
                        syncInitiator: E,
                        sectionsIds: m,
                        onBootcampPanelAppear: A,
                        vehicle: F,
                        vehicleType: D,
                        isSetupSwitching: b,
                        isChangeSetupIndex: p,
                        classMix: g,
                        setIsExitBlocked: C,
                    }) => {
                        const B = (0, a.useRef)(null),
                            h = (0, a.useState)(c),
                            f = h[0],
                            S = h[1],
                            v = (0, a.useMemo)(
                                () =>
                                    r === st.Setup
                                        ? e === dt.mH
                                            ? 'AmmunitionSetupHangarEquipmentSlots'
                                            : 'AmmunitionSetupOptionalDeviceSlots'
                                        : e === dt.mH
                                          ? 'HangarEquipmentSlots'
                                          : 'HangarOptionalDeviceSlots',
                                [r, e],
                            ),
                            w = ((e, t) => {
                                const u = X('tutorialModel.effects.items').filter((u) => {
                                    if (!u) return !1;
                                    const n = u.value,
                                        a = window.__featureId.toString();
                                    return n.componentId === e && n.type === t && n.viewId === a;
                                });
                                if (0 === u.length) return null;
                                const n = Object.assign({}, u[0].value);
                                return {
                                    effect: n,
                                    completeEffect: () => {
                                        tutorialModel.onEffectCompleted({
                                            componentId: e,
                                            viewId: window.__featureId.toFixed(0),
                                            effectType: t,
                                            effectBuilder: n.builder,
                                        }),
                                            t === yt && window.tutorialApi && window.tutorialApi.updateComponents();
                                    },
                                };
                            })(v, yt);
                        (0, a.useEffect)(
                            () => (
                                null !== w && S(!w.effect.visible),
                                k(() => {
                                    null !== w && w.completeEffect();
                                })
                            ),
                            [w, e],
                        );
                        const x = T();
                        (0, a.useEffect)(() => {
                            x && (x.freeze(), x.resize());
                        }, [t.length, x, v, f]);
                        const y = ((e, t) => {
                            const u = X('tutorialModel.triggers.items').filter((u) => {
                                if (!u) return !1;
                                const n = u.value,
                                    a = n.triggers.filter((e) => e.value === t);
                                return n.componentId === e && a.length > 0;
                            });
                            return 0 === u.length
                                ? null
                                : window.tutorialModel.foundComponents.items.some((t) => t.value.componentId === e)
                                  ? {
                                        trigger: u[0].value,
                                        runTrigger: (u) => {
                                            window.tutorialModel.onTriggerActivated({
                                                componentId: e,
                                                triggerType: t,
                                                state: u,
                                            });
                                        },
                                    }
                                  : null;
                        })('AmmunitionPanelBattleAbilities', It);
                        (0, a.useEffect)(() => {
                            null == y || y.runTrigger(!0);
                        }, [y]);
                        const I = _ === e,
                            M = ht(e, m),
                            L = M.selfId,
                            O = M.blockOnGrabIds;
                        (0, a.useEffect)(() => {
                            r === st.Hangar && S(c);
                        }, [r, c]),
                            (0, a.useEffect)(() => {
                                if (c && !f && A)
                                    return k(() => {
                                        A(), x && x.resize();
                                    });
                            }, [f, c, A, x]);
                        const N = E >= 0 && ae.G(t, (e) => e.intCD > 0),
                            H = s()(
                                $t,
                                g,
                                f && Wt,
                                I && 'sectionSelected',
                                t.length > 1 && 'multiSlot',
                                N && 'existFilledSlots',
                            ),
                            P = ((F && F.length > 0) || (D && D.length > 0)) && r !== st.Battle && r !== st.Respawn,
                            G = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: D
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(D)})`
                                        : '',
                                }),
                                [D],
                            ),
                            $ = (0, a.useMemo)(
                                () => ({ icon: i().createElement('span', { className: Vt, style: G }), vehicle: F }),
                                [G, F],
                            ),
                            W = t.length > 0 && r !== st.Compare && r !== st.Battle && r !== st.Respawn && t.length > 0,
                            z = R.strings.tank_setup.section.$dyn(e);
                        if ('string' != typeof z)
                            throw new Error(`No top label text for section type ${e} or it's not a string`);
                        return i().createElement(
                            'div',
                            { id: b ? Gt : L, ref: B, className: H },
                            P &&
                                i().createElement(
                                    ru,
                                    { className: jt },
                                    i().createElement(Ce, {
                                        classMix: Xt,
                                        text: R.strings.tank_setup.categories.reserves.config(),
                                        binding: $,
                                    }),
                                ),
                            W &&
                                i().createElement(
                                    'div',
                                    { className: zt },
                                    i().createElement(Pt, { text: z, parentRef: B, show: !I, panelType: r }),
                                ),
                            i().createElement(on, {
                                slots: t,
                                sectionType: e,
                                panelType: r,
                                isBorderActive: l,
                                onActiveSlotChanged: o,
                                isDisabled: n,
                                isBootCamp: c,
                                syncInitiator: E,
                                selectedSection: _,
                                selectedSlot: d,
                                blockOnGrabIds: O,
                                isChangeSetupIndex: p,
                                setIsExitBlocked: C,
                            }),
                            Boolean(u) &&
                                i().createElement(
                                    'div',
                                    { className: Ut },
                                    i().createElement(xt, { value: u, size: 'small', fadeInAnimation: !0 }),
                                ),
                        );
                    };
                var cn = u(8598);
                const _n = 'ShellsSlot_base_05',
                    dn = 'ShellsSlot_shell_ab',
                    En = 'ShellsSlot_shell__grabbing_98',
                    mn = 'ShellsSlot_shell__active_7e',
                    An = 'ShellsSlot_shell__potential_30',
                    Fn = 'ShellsSlot_label_da',
                    Dn = 'ShellsSlot_image_3f',
                    bn = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: u,
                        imageSource: n,
                        count: r,
                        isSelected: o,
                        keyName: l,
                        panelType: c,
                        intCD: _,
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
                        const h = !_t(c),
                            f = (0, a.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]),
                            S = E && E === p,
                            v = E && E === F,
                            w = (0, a.useMemo)(() => {
                                const n = { slotType: dt.g9, slotId: e, fieldType: 1, intCD: _ };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: t,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: u,
                                    }),
                                ];
                            }, [_, e, t, u]),
                            x = w[0],
                            y = w[1],
                            T = s()(dn, !F && h && !B && mn, v && En, !v && S && An),
                            I = (0, a.useMemo)(
                                () => ({
                                    id: E,
                                    containerRef: A,
                                    isEnabled: Boolean(E) && o,
                                    isUpdateAvailable: Boolean(F),
                                    handleAction: D,
                                    forceCenterX: b,
                                    blockOnGrabIds: g,
                                }),
                                [F, g, A, b, E, D, o],
                            ),
                            k = (0, a.useMemo)(
                                () => ({ slotIndex: d, uniqueKey: _, slotType: dt.g9, imageSource: null }),
                                [_, d],
                            );
                        return i().createElement(
                            Wu,
                            { isEnabled: h && !m && !B, args: y },
                            i().createElement(
                                Le.t,
                                { args: x, isEnabled: !F && ct(c) },
                                i().createElement(
                                    'div',
                                    { id: `shell-slot-${d}`, className: _n },
                                    l &&
                                        i().createElement(
                                            'div',
                                            { className: Fn },
                                            i().createElement(fu, {
                                                text: l,
                                                show: o || c === st.Battle || c === st.Respawn,
                                                shellState: C,
                                                panelType: c,
                                            }),
                                        ),
                                    i().createElement(
                                        'div',
                                        { className: T },
                                        i().createElement(
                                            lu.J,
                                            { when: h, wrapper: pu, withProps: I },
                                            i().createElement(
                                                lu.J,
                                                { when: h, wrapper: zu.y, withProps: k },
                                                i().createElement('div', { className: Dn, style: f }),
                                                i().createElement(cn.X, { count: r }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    pn = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    gn = ({ id: e, isSelected: t, imageSource: u, onSlotSelected: n }) => {
                        const r = (0, a.useCallback)(() => {
                                !t && n(e);
                            }, [e, t, n]),
                            o = s()(pn.slot, !t && pn.slot__active, pn.slot__compare),
                            l = (0, a.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            c = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.tanksetup.shells.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return i().createElement(
                            Su,
                            { slotType: dt.WI, slotId: e },
                            i().createElement(
                                'div',
                                { className: pn.base },
                                i().createElement(
                                    'div',
                                    { className: o, onClick: r, id: `shell-slot-${e}` },
                                    t && i().createElement('div', { className: pn.glow }),
                                    i().createElement('div', { className: pn.image, style: l }),
                                    i().createElement('div', { className: pn.toggle, style: c }),
                                ),
                            ),
                        );
                    },
                    Cn = 'Shells_base_f9',
                    Bn = 'Shells_shell_3f',
                    hn = 'Shells_shell__compressed_2e';
                function fn() {
                    return (
                        (fn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        fn.apply(this, arguments)
                    );
                }
                const Sn = ({
                        shells: e,
                        panelType: t,
                        onSelected: u,
                        isCompare: n,
                        isSelected: r,
                        syncInitiator: o,
                        blockOnGrabIds: l,
                        isDisabled: c,
                        isSetupSwitching: _,
                        setIsExitBlocked: d,
                    }) => {
                        const E = X('model.ammunitionPanel', j.None),
                            m = E.onSectionSelect,
                            A = E.onDragDropSwap,
                            F = (0, a.useRef)(!1),
                            D = (0, a.useRef)(null),
                            b = n ? dt.WI : dt.g9,
                            p = `${b}-${e.length}shells`,
                            g = (0, a.useCallback)(
                                (e) => {
                                    m({ selectedSlot: e, selectedSection: b }), mt.$.playClick();
                                },
                                [m, b],
                            ),
                            C = (0, a.useCallback)(() => {
                                r || n || c || _ || g(0);
                            }, [r, n, _, c, g]),
                            B = (0, a.useCallback)(
                                (e, t) => {
                                    A({
                                        sectionType: b,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [A, b],
                            ),
                            h = ft({
                                baseId: p,
                                slotsLength: e.length,
                                handleSwap: B,
                                setIsExitBlocked: d,
                                syncInitiator: o,
                            }),
                            f = h.handleGrabberAction,
                            S = h.dragState,
                            v = h.getForceCenterX;
                        return (
                            (0, a.useEffect)(
                                () =>
                                    k(() => {
                                        F.current = !0;
                                    }),
                                [],
                            ),
                            (0, a.useEffect)(() => {
                                if (r && t === st.Setup) {
                                    if (!F.current)
                                        return k(() => {
                                            u();
                                        });
                                    u();
                                }
                            }, [r, t, u]),
                            i().createElement(
                                'div',
                                {
                                    id: p,
                                    ref: D,
                                    className: Cn,
                                    onClick: C,
                                    onMouseEnter: () => {
                                        c || mt.$.playHighlight();
                                    },
                                },
                                ae.v(e, (u, a) => {
                                    if (ot(u)) return null;
                                    const o = !n && e.length > 1 ? `${p}-${u.id}` : '';
                                    return i().createElement(
                                        'div',
                                        { key: u.id, className: s()(Bn, !n && 0 !== a && hn) },
                                        n
                                            ? i().createElement(gn, fn({}, u, { onSlotSelected: g }))
                                            : i().createElement(
                                                  bn,
                                                  fn({}, u, {
                                                      slotIndex: a,
                                                      isSetupSwitching: _,
                                                      isSelected: r,
                                                      panelType: t,
                                                      grabberId: o,
                                                      containerRef: D,
                                                      forceLeftUpdate: v(o),
                                                      activeDragId: S.activeDragId,
                                                      handleGrabberAction: f,
                                                      potentialDropId: S.potentialDropId,
                                                      blockOnGrabIds: l,
                                                      isDisabled: c,
                                                  }),
                                              ),
                                    );
                                }),
                            )
                        );
                    },
                    vn = {
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
                    wn = [st.Hangar, st.Battle, st.Prebattle, st.Respawn],
                    xn = ({
                        slots: e,
                        ammoNotFull: t,
                        type: u,
                        sectionsIds: n,
                        panelType: r,
                        onActiveSlotChanged: o,
                        isDisabled: l,
                        isBorderActive: c,
                        selectedSection: _,
                        syncInitiator: d,
                        classMix: E,
                        isSetupSwitching: m,
                        setIsExitBlocked: A,
                        newItemsCount: F,
                    }) => {
                        const D = (0, a.useRef)(null),
                            b = r === st.Compare,
                            p = _ === u,
                            g = (0, a.useCallback)(() => {
                                o(D, _, 0);
                            }, [o, _]),
                            C = ht(u, n),
                            B = C.selfId,
                            h = C.blockOnGrabIds,
                            f = ((e) => wn.includes(e))(r) && !l && t,
                            S = ae.hX(e, (e) => Boolean(e) && !ot(e)).length,
                            v = (0, a.useMemo)(() => {
                                if (!f) return null;
                                const e = s()(vn.border, 2 === S && vn.border__double, 3 === S && vn.border__triple);
                                return i().createElement('div', { className: e });
                            }, [f, S]),
                            w = s()(
                                vn.base,
                                E,
                                vn[`base__${r}`],
                                !c && p && vn.base__selected,
                                b && vn.base__compare,
                                l && vn.base__disabled,
                            ),
                            x = !b && r !== st.Battle && r !== st.Respawn;
                        return i().createElement(
                            'div',
                            { id: m ? Gt : B, className: w, ref: D },
                            f && i().createElement('div', { className: vn.attention }),
                            x &&
                                i().createElement(
                                    'div',
                                    { className: vn.label },
                                    i().createElement(Pt, {
                                        text: R.strings.tank_setup.section.shells(),
                                        parentRef: D,
                                        show: !p,
                                        panelType: r,
                                    }),
                                ),
                            v,
                            i().createElement(Sn, {
                                shells: e,
                                panelType: r,
                                onSelected: g,
                                isSelected: p,
                                isCompare: b,
                                syncInitiator: d,
                                blockOnGrabIds: h,
                                isDisabled: l,
                                isSetupSwitching: m,
                                setIsExitBlocked: A,
                            }),
                            Boolean(F) &&
                                i().createElement(
                                    'div',
                                    { className: vn.counter },
                                    i().createElement(xt, { value: F, size: 'small', fadeInAnimation: !0 }),
                                ),
                            l && i().createElement('div', { className: vn.disabled }),
                        );
                    },
                    yn = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function Tn() {
                    return (
                        (Tn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Tn.apply(this, arguments)
                    );
                }
                const In = ({
                        panelType: e,
                        isDisabled: t = !1,
                        onActiveSlotChanged: u,
                        isBorderActive: n,
                        isBootCamp: a = !1,
                        sections: r,
                        selectedSection: o,
                        selectedSlot: l,
                        syncInitiator: c,
                        ammoNotFull: _,
                        onBootcampPanelAppear: d,
                        isChangeSetupIndex: E,
                        setIsExitBlocked: m,
                    }) => {
                        const A = ne(['section'], yn),
                            F = ae.v(r, (e) => Bt(e.type)),
                            D = {
                                panelType: e,
                                isDisabled: t,
                                onActiveSlotChanged: u,
                                isBorderActive: n,
                                selectedSection: o,
                                selectedSlot: l,
                                syncInitiator: c,
                                sectionsIds: F,
                                isChangeSetupIndex: E,
                                setIsExitBlocked: m,
                            };
                        return i().createElement(
                            'div',
                            { className: yn.base },
                            ae.v(r, (t, u) => {
                                if (!t.slots || !t.slots.length) return null;
                                const n = s()(
                                        A.section,
                                        0 !== u && _t(e) && yn.section__battle,
                                        0 === u && yn.section__first,
                                    ),
                                    r = ae.UI(t.slots, (e) => Object.assign({}, e));
                                if (t.type === dt.g9 || t.type === dt.WI) {
                                    const e = t;
                                    return i().createElement(
                                        xn,
                                        Tn({}, e, D, {
                                            isSetupSwitching: E,
                                            slots: r,
                                            key: `${t.name}${u}${t.slots.length}`,
                                            classMix: n,
                                            ammoNotFull: _,
                                        }),
                                    );
                                }
                                return i().createElement(
                                    ln,
                                    Tn({}, t, D, {
                                        isSetupSwitching: E,
                                        slots: r,
                                        key: `${t.name}${u}${t.slots.length}`,
                                        classMix: n,
                                        isBootCamp: a,
                                        onBootcampPanelAppear: d,
                                    }),
                                );
                            }),
                        );
                    },
                    kn = 'KeyboardKey_base_57',
                    Rn = 'KeyboardKey_back_43',
                    Mn = i().memo(({ text: e }) =>
                        i().createElement('div', { className: kn }, i().createElement('div', { className: Rn }, e)),
                    ),
                    Ln = 'SetupSwitchHotkey_base_4c',
                    On = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    Nn = 'SetupSwitchHotkey_plusWrapper_f0',
                    Hn = 'SetupSwitchHotkey_plus_f0',
                    Pn = 'SetupSwitchHotkey_plus__horizontal_e0',
                    Gn = 'SetupSwitchHotkey_plus__vertical_5b',
                    $n = i().memo(({ hotKeys: e }) =>
                        i().createElement(
                            'div',
                            { className: Ln },
                            e.map((e, t) => {
                                if (!e) return null;
                                const u = e.value;
                                return 0 === t
                                    ? i().createElement(Mn, { key: t, text: u })
                                    : i().createElement(
                                          'div',
                                          { key: t, className: On },
                                          i().createElement(
                                              'div',
                                              { className: Nn },
                                              i().createElement('div', { className: `${Hn} ${Pn}` }),
                                              i().createElement('div', { className: `${Hn} ${Gn}` }),
                                          ),
                                          i().createElement(Mn, { text: u }),
                                      );
                            }),
                        ),
                    ),
                    Wn = {
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
                function zn() {
                    return (
                        (zn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        zn.apply(this, arguments)
                    );
                }
                const Un = (e) => e.setupSelector.hotKeys,
                    jn = (e) =>
                        Object.assign({}, e, {
                            slots: ae.v(e.slots, (e) => {
                                if ('specializations' in e) {
                                    const t = e;
                                    return Object.assign({}, t, {
                                        specializations: Object.assign({}, t.specializations, {
                                            specializations: ae.v(t.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        }),
                                    });
                                }
                                return Object.assign({}, e);
                            }),
                        }),
                    Xn = ({ sectionProps: e, isSetupSwitching: t, isReady: u, setSetupSwitching: n, children: r }) => {
                        const o = ne(['switch'], Wn),
                            l = X('model'),
                            c = l.isDisabled,
                            _ = l.vehicleInfo,
                            d = X('model.ammunitionPanel'),
                            E = d.sectionGroups,
                            m = d.onChangeSetupIndex,
                            A = d.selectedSection,
                            F = d.selectedSlot,
                            D = d.syncInitiator,
                            b = d.ammoNotFull,
                            p = null == _ ? void 0 : _.vehicleName,
                            g =
                                ((C = E),
                                ae.DZ(
                                    C,
                                    (e) => {
                                        var t;
                                        const u = ae.yW(null != (t = null == e ? void 0 : e.sections) ? t : [], (e) => {
                                            var t, u;
                                            return (
                                                0 === (null != (t = null == (u = e.slots) ? void 0 : u.length) ? t : 0)
                                            );
                                        });
                                        return !(!e || u);
                                    },
                                    (e) =>
                                        Object.assign({}, e, {
                                            setupSelector: Object.assign({}, e.setupSelector, {
                                                states: ae.UI(e.setupSelector.states, (e) => e),
                                            }),
                                            sections: ae.v(e.sections, jn),
                                        }),
                                ));
                        var C;
                        (0, a.useEffect)(() => {
                            (e.panelType !== st.Hangar && e.panelType !== st.Setup) || !u || n(!1);
                        }, [u, e.panelType, n]),
                            (0, a.useEffect)(() => {
                                e.panelType === st.Respawn && n(!1);
                            }, [p, e.panelType, n]);
                        const B = (0, a.useCallback)(
                                (t) => {
                                    e.panelType === st.Respawn && n(!0), m(t);
                                },
                                [m, e.panelType, n],
                            ),
                            h = (e.panelType !== st.Respawn && u) || (e.panelType === st.Respawn && t);
                        return i().createElement(
                            'div',
                            { className: Wn.base },
                            ae.UI(g, (u) => {
                                const a = R.strings.tank_setup.tooltips.prebattleSwitchIndicator.desc.$dyn(
                                    `c_${u.groupId}`,
                                );
                                return i().createElement(
                                    'div',
                                    { key: u.groupId, className: Wn.group },
                                    i().createElement(
                                        'div',
                                        { className: Wn.groupWrapper },
                                        i().createElement(
                                            rt,
                                            zn(
                                                { disabled: !h && Boolean(e.isBootCamp) },
                                                ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(u, n),
                                            ),
                                            i().createElement(
                                                In,
                                                zn({}, e, {
                                                    sections: u.sections,
                                                    selectedSection: A,
                                                    selectedSlot: F,
                                                    syncInitiator: D,
                                                    ammoNotFull: b,
                                                    isChangeSetupIndex: t,
                                                }),
                                            ),
                                        ),
                                        u.setupSelector.isSwitchEnabled &&
                                            i().createElement(
                                                'div',
                                                { className: s()(o.switch, lt(e.panelType) && Wn.switch__battle) },
                                                i().createElement(et._, {
                                                    states: u.setupSelector.states,
                                                    onClick: B,
                                                    totalCount: u.totalCount,
                                                    currentIndex: u.currentIndex,
                                                    groupId: u.groupId,
                                                    isDisabled: e.isDisabled,
                                                }),
                                                u.setupSelector.isPrebattleSwitchDisabled &&
                                                    i().createElement(
                                                        Ge,
                                                        {
                                                            header: R.strings.tank_setup.tooltips.prebattleSwitchIndicator.title(),
                                                            body: 'string' == typeof a ? a : void 0,
                                                        },
                                                        i().createElement('div', {
                                                            className: Wn.prebattleSwitchIndicator,
                                                        }),
                                                    ),
                                            ),
                                    ),
                                    ((r = u),
                                    ((l = e.panelType) === st.Battle || l === st.Respawn) &&
                                        r.setupSelector.isSwitchEnabled &&
                                        Un(r) &&
                                        i().createElement(
                                            'div',
                                            { className: s()(Wn.hint, c && Wn.hint__disabled) },
                                            i().createElement($n, { hotKeys: Un(u) }),
                                        )),
                                );
                                var r, l;
                            }),
                            r,
                        );
                    },
                    Vn = 'RoleSkillSlot_base_c4',
                    Kn = 'RoleSkillSlot_icon_79',
                    qn = ({
                        roleSkill: e,
                        roleName: t,
                        tooltipId: u,
                        tooltipHeader: n,
                        tooltipBody: r,
                        className: o,
                    }) => {
                        const l = (0, a.useMemo)(
                            () => ({
                                args: {
                                    tooltipId: u,
                                    roleSkill: e,
                                    roleName: t,
                                    header: n,
                                    body: r,
                                    hasHtmlContent: !0,
                                },
                                header: n,
                                body: r,
                                ignoreShowDelay: !0,
                            }),
                            [e, t, n, r, u],
                        );
                        return i().createElement(
                            We,
                            { tooltipArgs: l, className: s()(Vn, o) },
                            i().createElement('div', {
                                className: Kn,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    Zn = 'SlotGlow_base_40',
                    Yn = 'SlotGlow_glow_a9',
                    Jn = 'SlotGlow_glow__shown_f2',
                    Qn = 'SlotGlow_glow__hidden_94',
                    ea = (0, a.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: u }) => {
                        const n = (0, a.useState)({ offset: e, slotWidth: t }),
                            r = n[0],
                            o = n[1],
                            l = (0, a.useRef)({ initialized: !1, offset: e, slotWidth: t });
                        (0, a.useEffect)(() => {
                            let u = l.current.initialized;
                            !u && e && ((u = !0), o({ offset: e, slotWidth: t })),
                                (l.current = { initialized: u, offset: e, slotWidth: t });
                        }, [e, t]),
                            (0, a.useEffect)(() => {
                                u || o(l.current);
                            }, [u]);
                        const c = (0, a.useMemo)(() => {
                                const e = r.slotWidth + 25;
                                return { left: r.offset, width: e, backgroundSize: `${S.O.view.pxToRem(e)}rem 100%` };
                            }, [r.offset, r.slotWidth]),
                            _ = !u && r.offset === l.current.offset,
                            d = s()(Yn, _ ? Jn : Qn);
                        return i().createElement(
                            'div',
                            { className: Zn },
                            l.current.initialized && i().createElement('div', { className: d, style: c }),
                        );
                    }),
                    ta = ({
                        show: e = !0,
                        isReady: t = !0,
                        panelType: u,
                        isBootCamp: n = !1,
                        isDisabled: r = !1,
                        onBootcampPanelAppear: o,
                        onResize: l,
                        setIsExitBlocked: c,
                    }) => {
                        const _ = X('model.ammunitionPanel'),
                            d = _.isSetupSwitchInProgress,
                            E = _.syncInitiator,
                            m = _.sectionGroups,
                            A = _.onSectionResized,
                            F = ae.u4(m, (e, t) => e + t.sections.length, 0),
                            D = X('model.roleSkillSlot'),
                            b = X('model.abilitySlot'),
                            p = (0, a.useState)(!1),
                            g = p[0],
                            C = p[1],
                            B = (0, a.useRef)(!1),
                            h = (0, a.useState)({ slotWidth: 0, slotOffset: 0 }),
                            f = h[0],
                            S = h[1],
                            v = (0, a.useState)(!1),
                            w = v[0],
                            x = v[1],
                            y = (0, a.useRef)(null),
                            I = T(),
                            R = (0, a.useRef)({ element: null, generation: 0, slotIndex: null, sectionIndex: null }),
                            M = (0, a.useCallback)(
                                (e, t) => {
                                    if (g || d || n || u !== st.Hangar) return;
                                    const a = t || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                    A(Object.assign({ sectionType: e }, a)), I && (I.freeze(), I.resize());
                                },
                                [g, d, n, u, A, I],
                            ),
                            L = (0, a.useCallback)(
                                (e) => {
                                    M('main', e);
                                },
                                [M],
                            );
                        ie(y, L, !0, [E]), (0, a.useEffect)(() => () => L(), [L]);
                        const O = (0, a.useCallback)(() => {
                                x(!1);
                            }, []),
                            N = (0, a.useCallback)(() => {
                                if (R.current.element && y.current) {
                                    const e = R.current.element.getBoundingClientRect(),
                                        t = y.current.getBoundingClientRect();
                                    S({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                                }
                            }, []),
                            H = (0, a.useCallback)(
                                (e, t, u) => {
                                    if (e.current && y.current) {
                                        const n = ((e, t, u) =>
                                            e !== u.current.slotIndex || t !== u.current.sectionIndex)(u, t, R);
                                        (R.current.element = e.current),
                                            (R.current.slotIndex = u),
                                            (R.current.sectionIndex = t),
                                            B.current && n ? x(!0) : (B.current = !0),
                                            R.current.generation && N();
                                    }
                                },
                                [N],
                            ),
                            P = (0, a.useCallback)(
                                () =>
                                    k(() => {
                                        (R.current.generation += 1), N();
                                    }),
                                [R, N],
                            );
                        (0, a.useEffect)(() => k(P), [P]),
                            (0, a.useEffect)(
                                () => (
                                    engine.on('clientResized', P),
                                    () => {
                                        engine.off('clientResized', P);
                                    }
                                ),
                                [P],
                            );
                        const G = (0, a.useCallback)(() => {
                                (R.current.generation += 1),
                                    F >= R.current.generation && (null == o || o(), null == l || l()),
                                    N();
                            }, [o, l, F, N]),
                            $ = f.slotWidth,
                            W = f.slotOffset,
                            z = s()(Ve.base, !t && Ve.base__locked, !e && Ve.base__hidden, r && Ve.base__disabled),
                            U = s()(Ve.border, !w && Ve.border__hidden),
                            j = u === st.Setup || u === st.Compare,
                            V = {
                                panelType: u,
                                isDisabled: r,
                                onActiveSlotChanged: H,
                                isBorderActive: w,
                                isBootCamp: n,
                                onBootcampPanelAppear: G,
                                setIsExitBlocked: c,
                            };
                        (0, a.useEffect)(() => {
                            !1 === n && (null == l || l());
                        }, [l, D.roleSkill, b.ability, n]);
                        const K = ne(['roleSkillSlot', 'abilitySkillSlot'], Ve);
                        return i().createElement(
                            'div',
                            { ref: y, className: z },
                            j &&
                                i().createElement(ea, {
                                    key: R.current.generation,
                                    slotOffset: W,
                                    slotWidth: $,
                                    isAnimationRunning: w,
                                }),
                            i().createElement(
                                Xn,
                                { isSetupSwitching: d || g, sectionProps: V, isReady: t, setSetupSwitching: C },
                                D.roleSkill &&
                                    i().createElement(qn, {
                                        roleSkill: D.roleSkill,
                                        roleName: D.roleName,
                                        tooltipId: D.tooltipId,
                                        tooltipHeader: D.tooltipHeader,
                                        tooltipBody: D.tooltipBody,
                                        className: s()(Ve.roleSkillSlot, Ve[`roleSkillSlot__${u}`], K.roleSkillSlot),
                                    }),
                                b.ability &&
                                    i().createElement(Xe, {
                                        skillName: b.ability,
                                        tooltipId: b.tooltipId,
                                        tooltipHeader: b.tooltipHeader,
                                        tooltipBody: b.tooltipBody,
                                        className: s()(
                                            Ve.abilitySkillSlot,
                                            Ve[`abilitySkillSlot__${u}`],
                                            K.abilitySkillSlot,
                                        ),
                                    }),
                            ),
                            j &&
                                i().createElement(
                                    'div',
                                    { className: U },
                                    i().createElement(Je, { slotWidth: $, slotOffset: W, onAnimationEnd: O }),
                                ),
                        );
                    },
                    ua = 'AmmunitionPanelApp_base_aa',
                    na = 'AmmunitionPanelApp_base__hidden_c1',
                    aa = () => {
                        const e = X('model'),
                            t = e.isDisabled,
                            u = e.isReady,
                            n = e.isBootcamp,
                            r = e.onEscKeyDown;
                        (0, L.gd)(
                            V.n.ESCAPE,
                            (0, a.useCallback)(() => r(), [r]),
                        );
                        const o = (0, a.useState)(!0),
                            l = o[0],
                            c = o[1],
                            _ = (function (e, t = []) {
                                const u = (0, a.useRef)(!1);
                                return (0, a.useCallback)(() => {
                                    u.current || (e(), (u.current = !0));
                                }, t);
                            })(() => {
                                S.O.view.setSidePaddingsRem({ left: 65, right: 65, bottom: 45, top: 65 });
                            });
                        return (
                            (0, a.useEffect)(() => {
                                if (u) return k(() => k(() => c(!1)));
                                c(!0);
                            }, [u]),
                            w(() => {
                                M.displayStatusIs.shown()
                                    ? S.O.view.freezeTextureBeforeResize()
                                    : M.displayStatusIs.hidden() && S.O.view.resize(1, 1);
                            }),
                            i().createElement(I, { onResize: _ }, (e, a) =>
                                i().createElement(
                                    'div',
                                    { ref: e, className: s()(ua, l && na) },
                                    i().createElement(ta, {
                                        panelType: st.Hangar,
                                        isDisabled: t,
                                        isReady: u,
                                        isBootCamp: n,
                                        onResize: a,
                                    }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    f().render(
                        i().createElement(B, null, i().createElement(aa, null)),
                        document.getElementById('root'),
                    );
                });
            },
            1922: (e, t, u) => {
                'use strict';
                u.d(t, { cJ: () => n });
                u(6483), u(7739), u(6179), u(1960);
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
            3267: (e, t, u) => {
                'use strict';
                u.d(t, { J: () => i });
                var n = u(6179),
                    a = u.n(n);
                const i = ({ wrapper: e, children: t, when: u, withProps: n }) =>
                    u ? a().createElement(e, n, t) : a().createElement(a().Fragment, null, t);
            },
            9152: (e, t, u) => {
                'use strict';
                u.d(t, { y: () => n });
                u(6483), u(8089), u(8526), u(5521), u(7727), u(6179), u(1922);
                const n = 'setup-content';
            },
            906: (e, t, u) => {
                'use strict';
                u.d(t, { r: () => o });
                var n = u(6179),
                    a = u.n(n),
                    i = u(6483),
                    r = u.n(i);
                const s = {
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
                    o = a().memo(({ isTemporary: e, overlayType: t, overlaySource: u }) => {
                        const i = r()(s.base, e && s.base__fitting),
                            o = r()(s.icon, s[`icon__${t}`]),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: o, style: l }),
                        );
                    });
            },
            8253: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => o });
                var n = u(6179),
                    a = u.n(n),
                    i = u(6483),
                    r = u.n(i);
                const s = {
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
                        slotType: t,
                        isSelected: u,
                        isBorderActive: n,
                        children: i,
                        panelType: o,
                        isDisabled: l,
                        isPotentialDrop: c,
                        onClick: _,
                    }) => {
                        const d = r()(
                            s.base,
                            !e && s[`base__${o}`],
                            t && s[`base__${t}`],
                            u && !c && !n && s.base__selected,
                            c && s['base__dragIn' + (u ? 'Active' : '')],
                            l && s.base__disabled,
                        );
                        return a().createElement('div', { className: d, onClick: _ }, i);
                    };
            },
            8598: (e, t, u) => {
                'use strict';
                u.d(t, { X: () => l });
                var n = u(6179),
                    a = u.n(n),
                    i = u(6483),
                    r = u.n(i);
                const s = 'Count_base_e4',
                    o = 'Count_base__zero_64',
                    l = ({ count: e }) => {
                        const t = r()(s, !e && o);
                        return a().createElement('div', { className: t }, e);
                    };
            },
            3141: (e, t, u) => {
                'use strict';
                u.d(t, { c: () => m });
                var n = u(6483),
                    a = u.n(n),
                    i = u(3977),
                    r = u(6179),
                    s = u.n(r),
                    o = u(906),
                    l = u(4105);
                const c = 'Inside_image_e5',
                    _ = 'Inside_image__fitting_11',
                    d = 'Inside_warning_e4',
                    E = 'Inside_change_5a',
                    m = ({
                        level: e,
                        overlayType: t,
                        isTemporary: u,
                        withAttention: n,
                        imageSource: m,
                        isIncompatible: A,
                    }) => {
                        const F = (0, r.useMemo)(() => {
                                const u = t === i.qm ? `${t}_${e}_overlay` : `${t}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(u);
                            }, [t, e]),
                            D = (0, r.useMemo)(() => ({ backgroundImage: `url(${m})` }), [m]),
                            b = !F && Boolean(t) && e;
                        return s().createElement(
                            'div',
                            null,
                            b && s().createElement(l.a, { level: e }),
                            s().createElement('div', { className: a()(c, (u || n) && _), style: D }),
                            n && s().createElement('div', { className: d }),
                            A && s().createElement('div', { className: E }),
                            F && s().createElement(o.r, { isTemporary: u, overlaySource: F, overlayType: t }),
                        );
                    };
            },
            4105: (e, t, u) => {
                'use strict';
                u.d(t, { a: () => o });
                var n = u(6179),
                    a = u.n(n),
                    i = u(6483),
                    r = u.n(i);
                const s = {
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
                        const t = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            u = r()(s.base, s[`base__level${e}`]);
                        return a().createElement('div', { style: t, className: u });
                    };
            },
            4814: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => A });
                var n = u(9480),
                    a = u(6179),
                    i = u.n(a),
                    r = u(1922),
                    s = u(6483),
                    o = u.n(s),
                    l = u(3457),
                    c = u(7078);
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
                        isCorrect: t,
                        isSpecializationActive: u = !0,
                        isDynamic: n,
                        mediaSize: s,
                        isClickable: d,
                        onSpecializationClick: E,
                        index: m,
                    }) => {
                        const A = s !== r.cJ.None,
                            F = (0, a.useCallback)(() => {
                                d && u && E && E(m);
                            }, [m, d, u, E]),
                            D = (0, a.useMemo)(() => {
                                let u = '';
                                A && (u = (s === r.cJ.Large || s === r.cJ.Huge ? r.cJ.Large : r.cJ.Medium) + '_');
                                const n = `${u}${e}_${t ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, t, s, A]),
                            b = (0, a.useMemo)(
                                () => ({ spec: e, isDyn: n, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, n, d],
                            );
                        if (!D) return null;
                        const p = o()(
                                `specialization-${e}`,
                                _.base,
                                A && _[`base__${s}`],
                                u && _.base__setup,
                                t && _.base__correct,
                            ),
                            g = o()(_.icon, A && _[`icon__${s}`]),
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
                            d && u
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
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const A = ({
                    specializations: e,
                    isSpecializationActive: t = !0,
                    isDynamic: u,
                    mediaSize: a = r.cJ.None,
                    activeSpecsMask: s,
                    onSpecializationClick: o,
                }) =>
                    e.length
                        ? i().createElement(
                              'div',
                              { className: E, key: s },
                              n.UI(e, (e, n) =>
                                  i().createElement(
                                      d,
                                      m({ index: n, key: e.name }, e, {
                                          isSpecializationActive: t,
                                          isDynamic: u,
                                          mediaSize: a,
                                          onSpecializationClick: o,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            9605: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => b });
                var n = u(6179),
                    a = u.n(n),
                    i = u(6483),
                    r = u.n(i);
                let s;
                !(function (e) {
                    (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING');
                })(s || (s = {}));
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
                    b = ({ id: e, state: t, currentIndex: u, isHovered: i }) => {
                        const b = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            p = e === u,
                            g = !p && t === s.WARNING;
                        return a().createElement(
                            'div',
                            { className: r()(o, { [l]: p, [c]: g, [E]: i }) },
                            a().createElement('div', { className: _ }),
                            a().createElement('div', { className: d }),
                            a().createElement('div', { className: A }),
                            a().createElement('div', { className: m }),
                            a().createElement('div', { className: F }),
                            a().createElement('div', { style: b, className: D }),
                        );
                    };
            },
            9344: (e, t, u) => {
                'use strict';
                u.d(t, { _: () => E });
                var n = u(6483),
                    a = u.n(n),
                    i = u(9480),
                    r = u(7727),
                    s = u(6179),
                    o = u.n(s),
                    l = u(9605);
                const c = 'SwitchEquipment_base_1a',
                    _ = 'SwitchEquipment_base__disabled_73',
                    d = 'SwitchEquipment_cover_b3',
                    E = ({ onClick: e, totalCount: t, currentIndex: u, states: n, isDisabled: E, groupId: m }) => {
                        const A = (0, s.useRef)(null),
                            F = (0, s.useState)(!1),
                            D = F[0],
                            b = F[1],
                            p = (u + 1) % t,
                            g = (0, s.useCallback)(() => {
                                E || e({ groupId: m, currentIndex: p });
                            }, [m, E, p, e]),
                            C = (0, s.useCallback)(() => {
                                E || (b(!0), r.$.playHighlight());
                            }, [E]),
                            B = (0, s.useCallback)(() => {
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
                            Array.from({ length: t }, (e, t) =>
                                o().createElement(l.U, {
                                    key: t,
                                    id: t,
                                    state: i.MH(n, t),
                                    currentIndex: u,
                                    isHovered: D,
                                }),
                            ),
                            E && o().createElement('div', { className: d }),
                        );
                    };
            },
            5918: (e, t, u) => {
                'use strict';
                u.d(t, { y: () => v });
                var n = u(4888),
                    a = u(7383),
                    i = u(9056),
                    r = u(6179),
                    s = u.n(r),
                    o = u(2558),
                    l = u(8934),
                    c = u(5958);
                const _ = 'BackEffects_shine_f6',
                    d = 'BackEffects_sparks_55',
                    E = 'BackEffects_nut_79',
                    m = 'BackEffects_wrench_5a',
                    A = { enterActive: 'BackEffects_shine__enterActive_54' },
                    F = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    D = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    b = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    p = [n.dZ, n.sH],
                    g = s().memo(({ in: e, actionType: t }) =>
                        s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(
                                l.Z,
                                { in: e, timeout: c.Dp, classNames: A },
                                s().createElement('div', { className: _ }),
                            ),
                            s().createElement(
                                l.Z,
                                { in: e, timeout: c.IG, classNames: F },
                                s().createElement('div', { className: d }),
                            ),
                            p.includes(t) &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        l.Z,
                                        { in: e, timeout: c.wx, classNames: D },
                                        s().createElement('div', { className: E }),
                                    ),
                                    s().createElement(
                                        l.Z,
                                        { in: e, timeout: c.Kz, classNames: b },
                                        s().createElement('div', { className: m }),
                                    ),
                                ),
                        ),
                    ),
                    C = 'ColorMask_base_60',
                    B = 'ColorMask_base__enterActive_62',
                    h = ({ in: e, maskImage: t }) => {
                        const u = (0, r.useMemo)(() => ({ enterActive: B }), []),
                            n = (0, r.useMemo)(() => ({ maskImage: `url(${t})` }), [t]);
                        return s().createElement(
                            l.Z,
                            { in: e, timeout: c.Qj, classNames: u },
                            s().createElement('div', { className: C, style: n }),
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
                    v = s().memo(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: u,
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
                                v = (0, r.useState)(!0),
                                w = v[0],
                                x = v[1],
                                y = (0, r.useState)(!0),
                                T = y[0],
                                I = y[1],
                                k = (0, r.useState)(E),
                                R = k[0],
                                M = k[1],
                                L = (0, r.useState)(u),
                                O = L[0],
                                N = L[1],
                                H = (0, r.useState)(m),
                                P = H[0],
                                G = H[1],
                                $ = (0, r.useRef)(),
                                W = (0, r.useRef)(),
                                z = [n._2, n.dZ, n.sH],
                                U = (B === u || B === O) && P !== m && z.includes(C),
                                j = -1 === b || -1 === p,
                                X = _ ? `base${_[0].toUpperCase() + _.slice(1)}` : 'base',
                                V = c.Sr[C] || 0;
                            (0, r.useEffect)(
                                () => () => {
                                    $.current && clearTimeout($.current), W.current && clearTimeout(W.current);
                                },
                                [],
                            ),
                                (0, r.useEffect)(() => {
                                    d || M(E);
                                }, [d, E]);
                            const K = (0, r.useCallback)(
                                    (e) => {
                                        const u = Object.assign({}, S);
                                        switch (C) {
                                            case n.Xo: {
                                                const e = F === t ? c.mI.RIGHT : c.mI.LEFT,
                                                    n = D - F != 1 ? c.mI.SWAP : '';
                                                (u.enterDone = f[`${X}__enter${e}${n}`]),
                                                    (u.exit = f[`${X}__exit${e}${n}`]),
                                                    j &&
                                                        (d
                                                            ? (u.enterDone = f[`${X}__enter${c.mI.FADE}`])
                                                            : (u.exit = f[`${X}__exit${c.mI.FADE}`]));
                                                break;
                                            }
                                            case n._2:
                                                (u.enterDone = f[`${X}__enter${c.mI.DESTROY}`]),
                                                    (u.exit = f[`${X}__exit${c.mI.DESTROY}`]),
                                                    ($.current = setTimeout(() => x(!0), c.YJ)),
                                                    I(!0);
                                                break;
                                            case n.sH:
                                            case n.dZ:
                                                (u.enter = f[`${X}__enter${c.mI.DEMOUNT}${c.mI.FADE}`]),
                                                    (u.exit = f[`${X}__exit${c.mI.DEMOUNT}`]),
                                                    ($.current = setTimeout(() => x(!0), c.Ij));
                                                break;
                                            case n.eC:
                                            case n.FR:
                                                if (_ !== a.g9) {
                                                    const e = C === n.eC ? c.mI.FITTING : c.mI.FITTING_REMOVE;
                                                    (u.enter = f[`${X}__enter${e}`]),
                                                        (u.exit = f[`${X}__exit${e}`]),
                                                        (u.exitActive = f[`${X}__exitActive${c.mI.FITTING}`]);
                                                } else
                                                    (u.enterDone = f[`${X}__enter${c.mI.FADE}`]),
                                                        (u.exit = f[`${X}__exit${c.mI.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return s().cloneElement(e, { classNames: u, timeout: V });
                                    },
                                    [C, _, X, V, F, t, D, d, j],
                                ),
                                q = (0, r.useCallback)(
                                    (e) => {
                                        W.current = setTimeout(() => {
                                            (e.className = ''), e.classList.add(f.base), N(u), G(m);
                                        }, V);
                                    },
                                    [V, u, m],
                                ),
                                Z = (0, r.useCallback)(() => {
                                    x(!1), I(!1);
                                }, []);
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    o.Z,
                                    { component: null, childFactory: K },
                                    s().createElement(
                                        l.Z,
                                        {
                                            key: u,
                                            timeout: V,
                                            classNames: S,
                                            onEntered: q,
                                            onExiting: Z,
                                            unmountOnExit: !0,
                                        },
                                        s().createElement('div', { className: f.base }, e),
                                    ),
                                ),
                                U &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(g, { in: w, actionType: C }),
                                        s().createElement(h, { in: T, maskImage: R }),
                                    ),
                            );
                        },
                    );
            },
            5958: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Dp: () => s,
                    IG: () => o,
                    Ij: () => i,
                    Kz: () => c,
                    Qj: () => _,
                    Sr: () => E,
                    YJ: () => r,
                    mI: () => d,
                    wx: () => l,
                });
                var n = u(4888);
                const a = 1600,
                    i = 900,
                    r = 900,
                    s = 200,
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
            3977: (e, t, u) => {
                'use strict';
                u.d(t, { qm: () => n });
                const n = 'equipmentModernized';
            },
            4888: (e, t, u) => {
                'use strict';
                u.d(t, { FR: () => a, Fd: () => s, Xo: () => i, _2: () => l, dZ: () => r, eC: () => n, sH: () => o });
                const n = 'select',
                    a = 'undo',
                    i = 'swap',
                    r = 'demount',
                    s = 'demount_from_setup',
                    o = 'demount_from_setups',
                    l = 'destroy';
            },
            7383: (e, t, u) => {
                'use strict';
                u.d(t, { WI: () => s, YN: () => r, g9: () => a, mH: () => i, yZ: () => o, zn: () => n });
                const n = 'optDevices',
                    a = 'shells',
                    i = 'consumables',
                    r = 'battleAbilities',
                    s = 'toggleShells',
                    o = 'toggleCamouflage';
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
            7476: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, n] = deferred[o], i = !0, r = 0; r < t.length; r++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[r]))
                            ? t.splice(r--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(o--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, n];
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
        (__webpack_require__.j = 434),
        (() => {
            var e = { 434: 0, 927: 0, 490: 0, 754: 0, 803: 0, 761: 0, 833: 0, 795: 0, 723: 0, 287: 0, 975: 0, 197: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [i, r, s] = u,
                        o = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in r) __webpack_require__.o(r, n) && (__webpack_require__.m[n] = r[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(u); o < i.length; o++)
                        (a = i[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(6602));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
