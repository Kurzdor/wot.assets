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
                    onMouseUp: b,
                    onMouseLeave: D,
                    onClick: g,
                }) => {
                    const p = (0, s.useRef)(null),
                        C = (0, s.useState)(t),
                        h = C[0],
                        B = C[1],
                        f = (0, s.useState)(!1),
                        v = f[0],
                        S = f[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                h && null !== p.current && !p.current.contains(e.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, s.useEffect)(() => {
                            B(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: p,
                                className: a()(
                                    o.Z.base,
                                    o.Z[`base__${n}`],
                                    c && o.Z.base__disabled,
                                    u && o.Z[`base__${u}`],
                                    h && o.Z.base__focus,
                                    v && o.Z.base__highlightActive,
                                    _,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== d && (0, i.G)(d), m && m(e));
                                },
                                onMouseMove: function (e) {
                                    A && A(e);
                                },
                                onMouseUp: function (e) {
                                    c || (b && b(e), S(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== E && (0, i.G)(E),
                                        F && F(e),
                                        t && (c || (p.current && (p.current.focus(), B(!0)))),
                                        S(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (D && D(e), S(!1));
                                },
                                onClick: function (e) {
                                    c || (g && g(e));
                                },
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
                                { className: a()(o.Z.state, o.Z.state__default) },
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
                const _ = c;
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
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
                t.d(u, { Z: () => c });
                var n = t(3138),
                    a = t(6536),
                    i = t(6179),
                    s = t.n(i),
                    r = t(3495),
                    o = t(1043),
                    l = t(5262);
                const c = ({ children: e }) => {
                    const u = (0, i.useContext)(r.Y),
                        t = (0, i.useState)(u),
                        c = t[0],
                        _ = t[1],
                        d = (0, i.useCallback)((e, u) => {
                            const t = n.O.view.pxToRem(e),
                                a = n.O.view.pxToRem(u);
                            _(Object.assign({ width: t, height: a }, (0, l.T)(t, a, o.j)));
                        }, []),
                        E = (0, i.useCallback)(() => {
                            const e = n.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    (0, a.Z)(() => {
                        n.O.client.events.on('clientResized', d), n.O.client.events.on('self.onScaleUpdated', E);
                    }),
                        (0, i.useEffect)(
                            () => () => {
                                n.O.client.events.off('clientResized', d),
                                    n.O.client.events.off('self.onScaleUpdated', E);
                            },
                            [d, E],
                        );
                    const m = (0, i.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(r.Y.Provider, { value: m }, e);
                };
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
                        b = r.extraSmallWidth,
                        D = r.extraLargeHeight,
                        g = r.largeHeight,
                        p = r.mediumHeight,
                        C = r.smallHeight,
                        h = r.extraSmallHeight,
                        B = { extraLarge: D, large: g, medium: p, small: C, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && _) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && E) return (0, a.H)(u, t, B);
                        if (t.largeWidth && m) return (0, a.H)(u, t, B);
                        if (t.mediumWidth && A) return (0, a.H)(u, t, B);
                        if (t.smallWidth && F) return (0, a.H)(u, t, B);
                        if (t.extraSmallWidth && b) return (0, a.H)(u, t, B);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && p) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && h) return u;
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
                t.d(u, { YN: () => a.Y, ZN: () => n.Z });
                t(6010);
                var n = t(1039),
                    a = t(3495);
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
                            b = s()(o.Z.base, o.Z[`base__${r}`], o.Z[`base__${i}`], null == _ ? void 0 : _.base),
                            D = s()(o.Z.icon, o.Z[`icon__${r}`], o.Z[`icon__${i}`], null == _ ? void 0 : _.icon),
                            g = s()(o.Z.glow, null == _ ? void 0 : _.glow),
                            p = s()(o.Z.caption, o.Z[`caption__${r}`], null == _ ? void 0 : _.caption),
                            C = s()(o.Z.goto, null == _ ? void 0 : _.goto);
                        return a().createElement(
                            'div',
                            c(
                                {
                                    className: b,
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
                            a().createElement('div', { className: D }, a().createElement('div', { className: g })),
                            a().createElement('div', { className: p }, u),
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
                    a = t(9916),
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
                            b = e.decoratorId,
                            D = void 0 === b ? 0 : b,
                            g = e.isEnabled,
                            p = void 0 === g || g,
                            C = e.targetId,
                            h = void 0 === C ? 0 : C,
                            B = e.onShow,
                            f = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, s);
                        const S = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, i.useMemo)(() => h || (0, n.F)().resId, [h]),
                            x = (0, i.useCallback)(() => {
                                (S.current.isVisible && S.current.timeoutId) ||
                                    (o(t, D, { isMouseEvent: !0, on: !0, arguments: r(a) }, w),
                                    B && B(),
                                    (S.current.isVisible = !0));
                            }, [t, D, a, w, B]),
                            y = (0, i.useCallback)(() => {
                                if (S.current.isVisible || S.current.timeoutId) {
                                    const e = S.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (S.current.timeoutId = 0)),
                                        o(t, D, { on: !1 }, w),
                                        S.current.isVisible && f && f(),
                                        (S.current.isVisible = !1);
                                }
                            }, [t, D, w, f]),
                            I = (0, i.useCallback)((e) => {
                                S.current.isVisible &&
                                    ((S.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (S.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(S.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = S.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', I, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', I, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === p && y();
                            }, [p, y]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            );
                        return p
                            ? (0, i.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((S.current.timeoutId = window.setTimeout(x, m ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
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
                                      v,
                                  ),
                              )
                            : u;
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
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(3138);
                function a(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return i(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return i(e, u);
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
                function i(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function r({ initializer: e = !0, rootId: u = 0, getRoot: t = s, context: i = 'model' } = {}) {
                    const r = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? r.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = r.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = t(u),
                            a = i.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, a);
                    };
                    return {
                        subscribe: (t, a) => {
                            const s = 'string' == typeof a ? `${i}.${a}` : i,
                                o = n.O.view.addModelObserver(s, u, !0);
                            return r.set(o, t), e && t(l(a)), o;
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
                            for (var e, t = a(r.keys()); !(e = t()).done; ) {
                                o(e.value, u);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => o });
                var n = t(4598),
                    a = t(9174),
                    i = t(6179),
                    s = t.n(i),
                    r = t(8246);
                const o = () => (e, u) => {
                    const t = (0, i.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, i.useRef)([]),
                                E = (t, i, s) => {
                                    var o;
                                    const l = r.U(i),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        E = (e) => d.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const i = null != u ? u : _(e),
                                                        s = a.LO.box(i, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const i = null != u ? u : _(e),
                                                        s = a.LO.box(i, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = _(u);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, u) => ((e[u] = a.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            i[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                    {
                                                        const i = e,
                                                            s = Object.entries(i),
                                                            r = s.reduce(
                                                                (e, [u, t]) => ((e[t] = a.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        s.forEach(([u, t]) => {
                                                                            r[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: E,
                                        }),
                                        A = { mode: t, model: m, externalModel: c, cleanup: E };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && s ? s.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                m = (0, i.useRef)(!1),
                                A = (0, i.useState)(o),
                                F = A[0],
                                b = A[1],
                                D = (0, i.useState)(() => E(o, l, _)),
                                g = D[0],
                                p = D[1];
                            return (
                                (0, i.useEffect)(() => {
                                    m.current ? p(E(F, l, _)) : (m.current = !0);
                                }, [_, F, l]),
                                (0, i.useEffect)(() => {
                                    b(o);
                                }, [o]),
                                (0, i.useEffect)(
                                    () => () => {
                                        g.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [g],
                                ),
                                s().createElement(t.Provider, { value: g }, c)
                            );
                        },
                        () => (0, i.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => r, onResize: () => i, onScaleUpdated: () => s });
                var n = t(2472),
                    a = t(1176);
                const i = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    r = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
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
                    const i = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${u}`,
                                        s = l[u]((e) => t([e, 'outside']));
                                    function r(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, r),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(i, r),
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
                        getMouseGlobalPosition: () => s,
                        getSize: () => i,
                        graphicsQuality: () => r,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const r = {
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
            2493: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
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
                t.d(u, { O: () => i });
                var n = t(5959),
                    a = t(514);
                const i = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => s });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    s = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
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
                        displayStatusIs: () => v,
                        events: () => i.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => d,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => h,
                        isFocused: () => p,
                        pxToRem: () => b,
                        remToPx: () => D,
                        resize: () => E,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => g,
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
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    S = {
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
            4598: (e, u, t) => {
                'use strict';
                t.d(u, { jv: () => n });
                function n() {
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
            3815: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => i });
                var n = t(6179);
                const a = [];
                function i(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), a)
                    );
                }
            },
            8526: (e, u, t) => {
                'use strict';
                t.d(u, { gd: () => r });
                var n = t(3138),
                    a = t(5521),
                    i = (t(9916), t(6179));
                const s = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function r(e = a.n.NONE, u = s, t = !1, r = !1) {
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
                                if (!r && n.O.view.isEventHandled()) return;
                                n.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, r]);
                }
            },
            2039: (e, u, t) => {
                'use strict';
                t.d(u, { b: () => a, k: () => i });
                var n = t(6179);
                const a = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    i = (e) => {
                        (0, n.useEffect)(() => e, []);
                    };
            },
            1396: (e, u, t) => {
                'use strict';
                t.d(u, { K: () => i });
                var n = t(6179),
                    a = t(2039);
                function i() {
                    const e = (0, n.useRef)(0);
                    return (
                        (0, a.k)(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (u, t) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (e.current = 0), u();
                                        }, t));
                                },
                                clear: () => {
                                    window.clearTimeout(e.current), (e.current = 0);
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
                'use strict';
                t.d(u, { G: () => r, MH: () => i, U2: () => a, UI: () => s, hX: () => o, u4: () => c, v: () => l });
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
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(i(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                function o(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let a = 0; a < e.length; a++) {
                        var n;
                        const i = null == (n = e[a]) ? void 0 : n.value;
                        u(i, a, e) && t.push(i);
                    }
                    return t;
                }
                function l(e, u) {
                    return (function (e, u, t) {
                        const n = [];
                        for (let a = 0; a < e.length; a++) {
                            const s = i(e, a);
                            u(s, a, e) && n.push(t(s, a, e));
                        }
                        return n;
                    })(e, n.C, u);
                }
                function c(e, u, t) {
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
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
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
                'use strict';
                t.d(u, { Sw: () => i.Z, B0: () => r, c9: () => D, ry: () => b });
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
                var s = t(8613);
                let r;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(r || (r = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    E = t(3138);
                const m = ['args'];
                function A(e, u, t, n, a, i, s) {
                    try {
                        var r = e[i](s),
                            o = r.value;
                    } catch (e) {
                        return void t(e);
                    }
                    r.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                            A(i, n, a, s, r, 'next', e);
                                        }
                                        function r(e) {
                                            A(i, n, a, s, r, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
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
                                })(u, m);
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
                    g = () => D(r.CLOSE),
                    p = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var C = t(7572);
                const h = a.instance,
                    B = {
                        DataTracker: i.Z,
                        ViewModel: C.Z,
                        ViewEventType: r,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(r.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => D(r.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(r.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), i) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                m = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(_),
                                    height: E.O.view.pxToRem(d),
                                };
                            D(r.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: F(m),
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
                            p(e, g);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(r.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(r.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(r.POP_OVER),
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
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = B;
            },
            8613: (e, u, t) => {
                'use strict';
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
            4727: (e, u, t) => {
                'use strict';
                var n = t(7739),
                    a = t(6179),
                    i = t.n(a),
                    s = t(6483),
                    r = t.n(s),
                    o = t(926),
                    l = t.n(o),
                    c = t(1043);
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
                            u = e.width,
                            t = e.height,
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
                            s = ((e) => {
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
                            r = ((e) => {
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
                        return { mediaSize: i, mediaWidth: s, mediaHeight: r, remScreenWidth: u, remScreenHeight: t };
                    },
                    A = ['children', 'className'];
                function F() {
                    return (
                        (F =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        F.apply(this, arguments)
                    );
                }
                const b = {
                        [d.ExtraSmall]: '',
                        [d.Small]: l().SMALL_WIDTH,
                        [d.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [d.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [d.ExtraLarge]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    D = {
                        [E.ExtraSmall]: '',
                        [E.Small]: l().SMALL_HEIGHT,
                        [E.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [E.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [E.ExtraLarge]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    g = {
                        [_.ExtraSmall]: '',
                        [_.Small]: l().SMALL,
                        [_.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [_.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [_.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    p = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, A);
                        const a = m(),
                            s = a.mediaWidth,
                            o = a.mediaHeight,
                            l = a.mediaSize;
                        return i().createElement('div', F({ className: r()(t, b[s], D[o], g[l]) }, n), u);
                    },
                    C = ['children'];
                const h = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, C);
                    return i().createElement(n.ZN, null, i().createElement(p, t, u));
                };
                var B = t(493),
                    f = t.n(B),
                    v = t(3138),
                    S = t(3815),
                    w = t(2039);
                function x() {
                    const e = (0, a.useRef)(0);
                    return (
                        (0, w.k)(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, a.useMemo)(
                            () => ({
                                run: (u) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                u(), (e.current = 0);
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
                const I = (e) => {
                        const u = i().useRef(null),
                            t = x(),
                            n = i().useRef(),
                            a = i().useRef(!1),
                            s = i().useCallback(() => {
                                const e = u.current;
                                if (!e) throw new Error('Element is not defined');
                                return (function (e, u) {
                                    if (u.current) {
                                        const t = u.current,
                                            n = t.width,
                                            a = t.height;
                                        if (n === e.offsetWidth && a === e.offsetHeight) return !0;
                                    }
                                    return !1;
                                })(e, n);
                            }, []),
                            r = (0, S.z)(() => {
                                t.run(() => {
                                    const t = u.current;
                                    if (!t || !1 === (null == e.needUpdate ? void 0 : e.needUpdate())) return;
                                    const i = s();
                                    if (i && !a.current) return;
                                    const r = {
                                        width: Math.max(1, t.offsetWidth),
                                        height: Math.max(1, t.offsetHeight),
                                    };
                                    (n.current = r),
                                        v.O.view.resize(r.width, r.height),
                                        !1 === i && (null == e.onResize || e.onResize(r));
                                });
                            });
                        (0, w.b)(() =>
                            v.O.view.events.onTextureFrozen(() => {
                                a.current = !0;
                            }),
                        ),
                            (0, w.b)(() =>
                                v.O.view.events.onTextureReady(() => {
                                    a.current && n.current && v.O.view.resize(n.current.width, n.current.height),
                                        (a.current = !1);
                                }),
                            ),
                            (0, w.b)(
                                () => (
                                    window.addEventListener('resize', r), () => window.removeEventListener('resize', r)
                                ),
                            ),
                            i().useEffect(() => {
                                var u;
                                (null == (u = e.autoUpdate) || u) && r();
                            });
                        const o = i().useMemo(
                            () => ({
                                resize: r,
                                equalSize: s,
                                getLastSize: () => n.current,
                                getCurrentSize: () => {
                                    const e = u.current;
                                    return e
                                        ? { width: e.offsetWidth, height: e.offsetHeight }
                                        : { width: 0, height: 0 };
                                },
                                freeze: () => {
                                    (a.current = !0), v.O.view.freezeTextureBeforeResize();
                                },
                                isFrozen: () => a.current,
                            }),
                            [s, r],
                        );
                        return i().createElement(y.Provider, { value: o }, e.children(u, r));
                    },
                    T = (e) => {
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
                var k = t(7641);
                var O = t(8526),
                    L = t(5521),
                    M = t(3403),
                    N = t(3220),
                    P = t(5262),
                    H = t(1281);
                let $;
                function G(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function j(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })($ || ($ = {}));
                const z = (e) => e.replace(/&nbsp;/g, ' '),
                    W = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    U = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    q = (e, u, t = $.left) => e.split(u).reduce(t === $.left ? W : U, []),
                    X = (() => {
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
                    V = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Z = (e, u = $.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (V.includes(t)) return X(e);
                        if ('ja' === t) {
                            return (0, H.D4)()
                                .parse(e)
                                .map((e) => z(e));
                        }
                        return ((e, u = $.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = z(e);
                            return q(a, /( )/, u).forEach((e) => (t = t.concat(q(e, n, $.left)))), t;
                        })(e, u);
                    };
                function K(e, u, t) {
                    const i = (0, a.useContext)(n.YN);
                    let s = Object.entries(i).filter(([e, u]) => !0 === u && e in P.u);
                    return (
                        t && (s = s.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const n = s.map((e) =>
                                r()(u[((e, u) => e + '__' + u)(t, e[0])], u[((e, u) => e + j(u))(t, e[0])]),
                            );
                            return (e[t] = r()(u[t], ...n)), e;
                        }, {})
                    );
                }
                const Y = (e, u, t, n = []) => {
                        const i = ((e, u = []) => {
                            const t = (0, a.useRef)(),
                                n = (0, a.useCallback)((...u) => {
                                    t.current && t.current(), (t.current = e(...u));
                                }, u);
                            return (
                                (0, a.useEffect)(
                                    () => () => {
                                        t.current && t.current();
                                    },
                                    [n],
                                ),
                                n
                            );
                        })(
                            () =>
                                T(() =>
                                    T(() => {
                                        if (e.current) {
                                            const t = e.current.getBoundingClientRect(),
                                                n = {
                                                    width: v.O.view.pxToRem(t.width),
                                                    height: v.O.view.pxToRem(t.height),
                                                    offsetX: v.O.view.pxToRem(t.left),
                                                    offsetY: v.O.view.pxToRem(t.top),
                                                };
                                            window.tutorialApi.updateComponents(), u(n);
                                        }
                                    }),
                                ),
                            [u, e],
                        );
                        return (
                            (0, a.useEffect)(() => {
                                i();
                            }, [i, ...n]),
                            (0, a.useEffect)(() => {
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
                    },
                    J = {
                        base: 'AmmoPanel_base_8d',
                        base__locked: 'AmmoPanel_base__locked_f8',
                        base__disabled: 'AmmoPanel_base__disabled_13',
                        base__hidden: 'AmmoPanel_base__hidden_14',
                        border: 'AmmoPanel_border_e6',
                        border__hidden: 'AmmoPanel_border__hidden_b1',
                        roleSkillSlot: 'AmmoPanel_roleSkillSlot_20',
                        roleSkillSlot__battle: 'AmmoPanel_roleSkillSlot__battle_b0',
                        roleSkillSlot__small: 'AmmoPanel_roleSkillSlot__small_a1',
                        roleSkillSlot__extraSmall: 'AmmoPanel_roleSkillSlot__extraSmall_a9',
                        roleSkillSlot__prebattle: 'AmmoPanel_roleSkillSlot__prebattle_b5',
                    },
                    Q = 'Border_base_f9',
                    ee = 'Border_border_83',
                    ue = 'Border_wrapper_17',
                    te = 'Border_active_e8',
                    ne = (0, a.memo)(({ slotOffset: e, slotWidth: u, onAnimationEnd: t }) => {
                        const n = (0, a.useRef)(null),
                            s = (0, a.useRef)(!1);
                        (0, a.useEffect)(() => {
                            s.current = !0;
                        }, [e, u]);
                        const r = (0, a.useCallback)(() => {
                            s.current && t(), (s.current = !1);
                        }, [t]);
                        (0, a.useEffect)(() => {
                            const e = n.current;
                            return (
                                e && e.addEventListener('transitionend', r),
                                () => {
                                    e && e.removeEventListener('transitionend', r);
                                }
                            );
                        }, [r]);
                        const o = (0, a.useMemo)(() => ({ left: e }), [e]),
                            l = (0, a.useMemo)(() => ({ width: u }), [u]);
                        return i().createElement(
                            'div',
                            { className: Q },
                            i().createElement(
                                'div',
                                { ref: n, className: ee, style: o },
                                i().createElement(
                                    'div',
                                    { className: ue },
                                    i().createElement('div', { className: te, style: l }),
                                ),
                            ),
                        );
                    }),
                    ae = (e, u) => {
                        const t = [];
                        for (let n = 0; n < e; n++) t.push(u(n));
                        return t;
                    };
                var ie = t(2056);
                const se = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function re() {
                    return (
                        (re =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        re.apply(this, arguments)
                    );
                }
                const oe = R.views.common.tooltip_window.simple_tooltip_content,
                    le = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
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
                            })(e, se);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: s, alert: r });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [r, t, n, s, o]);
                        return i().createElement(
                            ie.u,
                            re(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? oe.SimpleTooltipHtmlContent('resId') : oe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
                var ce = t(9344),
                    _e = t(2558),
                    de = t(8934);
                const Ee = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    me = 'up',
                    Ae = 'down',
                    Fe = ({ children: e, index: u, setSetupSwitching: t, disabled: n = !1 }) => {
                        const s = (0, a.useRef)(1 - u),
                            r = (0, a.useMemo)(() => {
                                const e = ((t = u), (a = s.current), t === a ? '' : t > a ? Ae : me);
                                var t, a;
                                const i = e && j(e);
                                return n ? {} : { enter: Ee[`base__enter${i}`], exit: Ee[`base__exit${i}`] };
                            }, [u, n]);
                        return (
                            (s.current = u),
                            i().createElement(
                                _e.Z,
                                { className: Ee.base },
                                i().createElement(
                                    de.Z,
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
                var be = t(4301),
                    De = t(7383);
                const ge = {
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
                    pe = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function Ce() {
                    return (
                        (Ce =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ce.apply(this, arguments)
                    );
                }
                const he = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        a = e.fadeInAnimation,
                        s = e.hide,
                        o = e.maximumNumber,
                        l = e.className,
                        c = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, pe);
                    const _ = n ? null : t,
                        d = 'string' == typeof _;
                    if ((_ && !d && _ < 0) || 0 === _) return null;
                    const E = _ && !d && _ > o,
                        m = r()(
                            ge.base,
                            ge[`base__${u}`],
                            a && ge.base__animated,
                            s && ge.base__hidden,
                            !_ && ge.base__pattern,
                            n && ge.base__empty,
                            l,
                        );
                    return i().createElement(
                        'div',
                        Ce({ className: m }, c),
                        i().createElement('div', { className: ge.bg }),
                        i().createElement('div', { className: ge.pattern }),
                        i().createElement(
                            'div',
                            { className: r()(ge.value, d && ge.value__text) },
                            E ? o : _,
                            E && i().createElement('span', { className: ge.plus }, '+'),
                        ),
                    );
                };
                he.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Be = 'FormatText_base_d0',
                    fe = ({ binding: e, text: u = '', classMix: t, alignment: n = $.left, formatWithBrackets: s }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const o = s && e ? G(u, e) : u;
                        return i().createElement(
                            a.Fragment,
                            null,
                            o.split('\n').map((u, s) =>
                                i().createElement(
                                    'div',
                                    { className: r()(Be, t), key: `${u}-${s}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : Z(e, u))))(
                                        u,
                                        n,
                                        e,
                                    ).map((e, u) => i().createElement(a.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    };
                var ve = t(7902);
                const Se = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
                var we = t(6536),
                    xe = t(9916);
                const ye = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Ie = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    Te = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = Se(`${e}.${t}`, window);
                                return ye(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    ke = (e) => {
                        const u = ((e) => {
                                const u = (0, ve.F)(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: Ie(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const a = Se(Ie(t, `${u}.${n}`), window);
                                    return ye(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    Oe = xe.Sw.instance;
                let Re;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Re || (Re = {}));
                const Le = (e = 'model', u = Re.Deep) => {
                        const t = (0, a.useState)(0),
                            n = (t[0], t[1]),
                            i = (0, a.useMemo)(() => (0, ve.F)(), []),
                            s = i.caller,
                            r = i.resId,
                            o = (0, a.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                                [s, e],
                            ),
                            l = (0, a.useState)(() =>
                                ((e) => {
                                    const u = Se(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return ye(u) ? u.value : u;
                                })(Te(o)),
                            ),
                            c = l[0],
                            _ = l[1],
                            d = (0, a.useRef)(-1);
                        return (
                            (0, we.Z)(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? Re.Deep : Re.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== Re.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === Re.Deep
                                                ? (e === c && n((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        a = ke(e);
                                    d.current = Oe.addCallback(a, t, r, u === Re.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (u !== Re.None)
                                    return () => {
                                        Oe.removeCallback(d.current, r);
                                    };
                            }, [r, u]),
                            c
                        );
                    },
                    Me = 'visible_change',
                    Ne = Me;
                var Pe = t(4231);
                const He = 'TopLabel_base_7f',
                    $e = 'TopLabel_base__ready_00',
                    Ge = 'TopLabel_text_d0',
                    je = 'TopLabel_text__hangar_36',
                    ze = 'TopLabel_text__shown_25',
                    We = 'TopLabel_text__hidden_79',
                    Ue = 'TopLabel_text__truncated_29',
                    qe = (0, a.memo)(({ panelType: e, text: u, parentRef: t, isTruncated: n = !1, show: s = !1 }) => {
                        const o = (0, a.useRef)(!1),
                            l = (0, a.useState)(!1),
                            c = l[0],
                            _ = l[1];
                        (0, a.useEffect)(() => {
                            t || (s && !o.current && (o.current = !0), _(s));
                        }, [s, t]);
                        const d = (0, a.useCallback)(() => {
                                (o.current = !0), _(!0);
                            }, []),
                            E = (0, a.useCallback)(() => {
                                _(!1);
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = t && t.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', d),
                                        e.addEventListener('mouseleave', E),
                                        () => {
                                            e.removeEventListener('mouseenter', d),
                                                e.removeEventListener('mouseleave', E);
                                        }
                                    );
                            }, [t, d, E]),
                            i().createElement(
                                'div',
                                { className: r()(He, o.current && $e) },
                                i().createElement(
                                    'div',
                                    { className: r()(Ge, e !== Pe.w.Setup && je, n && Ue, s && c ? ze : We) },
                                    u,
                                ),
                            )
                        );
                    });
                var Xe = t(6063),
                    Ve = t(7626);
                const Ze = 'Section_base_8a',
                    Ke = 'Section_label_73',
                    Ye = 'Section_counter_8a',
                    Je = 'Section_configLabel_c9',
                    Qe = 'Section_configText_eb',
                    eu = 'Section_configVehicleIcon_20';
                let uu;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(uu || (uu = {}));
                const tu = 'tooltip_watched';
                let nu;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(nu || (nu = {}));
                let au, iu, su;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(au || (au = {})),
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
                    })(iu || (iu = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(su || (su = {}));
                const ru = 'metrics',
                    ou = () => Date.now(),
                    lu = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: a }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    cu = (e, u) => {
                        const t = (0, a.useCallback)(
                            (t, n = uu.Info, a) => {
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
                    _u = (e, u) => {
                        const t = cu(e, u),
                            n = (0, a.useRef)(new Map()),
                            i = (0, a.useRef)(new Map()),
                            s = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = n.current.get(e);
                                    (void 0 !== u && u > 0) || n.current.set(e, ou());
                                },
                                [n],
                            ),
                            r = (0, a.useCallback)(() => {
                                n.current.clear(), i.current.clear();
                            }, [n, i]),
                            o = (0, a.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== n.current.get(e) &&
                                        void 0 === i.current.get(e) &&
                                        i.current.set(e, ou());
                                },
                                [n, i],
                            ),
                            l = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = n.current.get(e);
                                    if (void 0 === u) return;
                                    const t = i.current.get(e);
                                    if (void 0 === t) return;
                                    i.current.delete(e);
                                    const a = ou() - t;
                                    n.current.set(e, u + a);
                                },
                                [n, i],
                            ),
                            c = (0, a.useCallback)(
                                (e, u = 0, a, s) => {
                                    const r = n.current.get(e);
                                    if (void 0 === r) return;
                                    void 0 !== i.current.get(e) && l(e), n.current.delete(e);
                                    const o = (ou() - r) / 1e3;
                                    o <= u ||
                                        ((s = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(s, o)),
                                        t(e, a, s));
                                },
                                [n, i, t, l],
                            );
                        return [(e) => s(e), (e, u, t, n) => c(e, u, t, n), () => r(), (e) => o(e), (e) => l(e)];
                    },
                    du = (e) => {
                        const u = _u(e, ru),
                            t = u[0],
                            n = u[1],
                            i = u[2],
                            s = u[3],
                            r = u[4],
                            o = (0, a.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        t = e.timeLimit,
                                        a = e.logLevel;
                                    n(u, t, a, lu(e));
                                },
                                [n],
                            );
                        return [(e) => t(e), (e) => o(e), () => i(), (e) => s(e), (e) => r(e)];
                    },
                    Eu = i().memo(function ({ className: e, children: u }) {
                        const t = ((e, u, t, n) => {
                                const i = du('epic_battle'),
                                    s = i[0],
                                    r = i[1];
                                return [
                                    (0, a.useCallback)(() => s(tu), [s]),
                                    (0, a.useCallback)(
                                        () =>
                                            r({
                                                action: tu,
                                                timeLimit: 2,
                                                item: e,
                                                parentScreen: u,
                                                itemState: t,
                                                info: n,
                                            }),
                                        [r, e, u, t, n],
                                    ),
                                ];
                            })(iu.SkillOrderTooltip, au.SetupView),
                            n = t[0],
                            s = t[1];
                        return i().createElement(
                            ie.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                                onMouseEnter: n,
                                onMouseLeave: s,
                            },
                            i().createElement('div', { className: e }, u),
                        );
                    });
                var mu = t(7727);
                const Au = 'SlotDivider_base_60',
                    Fu = () => i().createElement('div', { className: Au });
                var bu = t(3267),
                    Du = t(8253),
                    gu = t(3141);
                const pu = 'Grabber_base_cf',
                    Cu = 'Grabber_base__enabled_b0',
                    hu = 'Grabber_base__waitingUpdate_1d',
                    Bu = 'Grabber_base__updating_f1',
                    fu = 'Grabber_base__active_71',
                    vu = 'Grabber_base__exit_1f',
                    Su = 'Grabber_base__showAnimation_d9';
                var wu = t(3521),
                    xu = t(1820);
                const yu = ({
                    children: e,
                    id: u,
                    containerRef: t,
                    isEnabled: n = !0,
                    onClick: s,
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
                            id: u,
                        }),
                        A = (0, a.useRef)({
                            isValid: !1,
                            startX: 0,
                            startCenterX: 0,
                            minXRestriction: 0,
                            maxXRestriction: 8e3,
                        }),
                        F = (0, a.useRef)(null),
                        b = (0, a.useState)(!1),
                        D = b[0],
                        g = b[1],
                        p = (0, a.useState)(0),
                        C = p[0],
                        h = p[1],
                        B = x(),
                        f = 0 !== o && n,
                        w = o ? o - A.current.startCenterX : C;
                    (0, a.useEffect)(() => {
                        if (((A.current.isValid = !1), u))
                            return T(() => {
                                const e = F.current,
                                    n = t.current;
                                if (n && e) {
                                    const t = e.getBoundingClientRect(),
                                        a = n.getBoundingClientRect(),
                                        i = t.left + 0.5 * t.width;
                                    (A.current = {
                                        isValid: !0,
                                        minXRestriction: a.left,
                                        maxXRestriction: a.left + a.width,
                                        startX: t.left,
                                        startCenterX: i,
                                    }),
                                        c(xu.m.Ready, { dragId: u, currentCenterX: i });
                                }
                            });
                    }, [d]);
                    const y = (0, a.useCallback)(
                            (e) => {
                                (E.current.isDragActive = e),
                                    g(e),
                                    E.current.grabActivationPassed && !e && (0, wu.jZ)(!1, _);
                            },
                            [_],
                        ),
                        I = (0, a.useCallback)(() => {
                            c(xu.m.DragStart, { dragId: E.current.id }),
                                (E.current.grabActivationPassed = !0),
                                (0, wu.jZ)(!0, _);
                        }, [c, _]),
                        k = (0, a.useCallback)((e) => {
                            const u = E.current,
                                t = A.current,
                                n = t.startX,
                                a = t.startCenterX,
                                i = t.minXRestriction,
                                s = t.maxXRestriction,
                                r = a - n,
                                o = e - u.clickCenterOffset;
                            u.dropCenterX = (0, wu.yG)(o, r, i, s);
                        }, []),
                        R = (0, a.useCallback)(
                            (e) => {
                                const u = E.current,
                                    t = A.current;
                                0 === e.button &&
                                    !u.isDragActive &&
                                    t.isValid &&
                                    n &&
                                    !l &&
                                    F.current &&
                                    ((u.actualX = e.clientX),
                                    (u.clickCenterOffset = u.actualX - t.startCenterX),
                                    y(!0));
                            },
                            [n, l, y],
                        ),
                        M = (0, a.useCallback)(() => {
                            !s || (n && A.current.isValid) || s();
                        }, [n, s]);
                    (0, O.gd)(
                        D ? L.n.ESCAPE : L.n.NONE,
                        (0, S.z)(() => y(!1)),
                    ),
                        (0, a.useEffect)(() => {
                            n && o && h(0);
                        }, [o, n]);
                    const N = !D && E.current.grabActivationPassed;
                    (0, a.useLayoutEffect)(() => {
                        E.current.id = u;
                    }, [u]),
                        (0, a.useEffect)(() => {
                            if (N) {
                                const e = E.current;
                                c(xu.m.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                    o === e.dropCenterX &&
                                        ((e.grabActivationPassed = !1),
                                        B.run(() => c(xu.m.DropExit, { dragId: e.id })));
                            }
                        }, [N, B, o, c]),
                        (0, a.useEffect)(() => {
                            if (n && D && E.current.id) {
                                const e = v.O.client.events.mouse.up(([e, u]) => {
                                        if ('outside' === u) return y(!1);
                                        const t = E.current,
                                            n = e.clientX;
                                        n === t.actualX && 0 === e.button && !E.current.grabActivationPassed
                                            ? s && s()
                                            : E.current.grabActivationPassed && k(n),
                                            E.current.isDragActive && y(!1);
                                    }),
                                    u = v.O.client.events.mouse.move(([e]) => {
                                        const u = E.current;
                                        if ((0 === e.clientX && 0 === e.clientY) || !u.isDragActive) return;
                                        const t = e.clientX,
                                            n = u.grabActivationPassed;
                                        !n && I(),
                                            t !== u.actualX &&
                                                ((u.actualX = t),
                                                k(t),
                                                n && c(xu.m.Drag, { dragId: u.id, currentCenterX: u.dropCenterX }),
                                                h(u.dropCenterX - A.current.startCenterX));
                                    });
                                return () => {
                                    u(), e();
                                };
                            }
                        }, [I, c, D, n, s, y, k]);
                    const P = n ? r()(pu, Cu, D && fu, N && vu, f && hu, o && Bu) : r()(pu, o && Su);
                    return i().createElement(
                        'div',
                        {
                            id: u,
                            ref: F,
                            onClick: M,
                            onMouseDown: R,
                            onTransitionEnd: (e) => {
                                const u = E.current;
                                e.target === F.current &&
                                    u.grabActivationPassed &&
                                    ((u.grabActivationPassed = !1), B.run(() => c(xu.m.DropExit, { dragId: u.id })));
                            },
                            className: P,
                            style: { left: w },
                        },
                        e,
                    );
                };
                let Iu;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(Iu || (Iu = {}));
                const Tu = 'KeyLabel_base_ec',
                    ku = 'KeyLabel_base__current_c2',
                    Ou = 'KeyLabel_base__next_fa',
                    Ru = ({ text: e, show: u, panelType: t, shellState: n, className: a }) => {
                        if (!e) return null;
                        const s = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                        return i().createElement(
                            'div',
                            { className: r()(Tu, n === Iu.Current && ku, n === Iu.Next && Ou, a) },
                            i().createElement(qe, { isTruncated: !0, text: s, show: u, panelType: t }),
                        );
                    };
                var Lu = t(7078);
                const Mu = ({ children: e, slotType: u, slotId: t, isEnabled: n = !0 }) => {
                        const s = (0, a.useMemo)(() => ({ slotType: u, slotId: t }), [u, t]);
                        return i().createElement(Lu.t, { isEnabled: n, args: s }, i().createElement('div', null, e));
                    },
                    Nu = 'Close_base_f3',
                    Pu = 'Close_base__invisible_0e',
                    Hu = 'Close_base__shown_a2',
                    $u = 'Close_base__hover_6d',
                    Gu = 'Close_base__down_2b',
                    ju = (0, a.memo)(
                        ({ id: e, show: u = !0, onClick: t, soundHover: n = 'highlight', soundClick: s = 'play' }) => {
                            const o = (0, a.useState)(!1),
                                l = o[0],
                                c = o[1],
                                _ = (0, a.useState)(!1),
                                d = _[0],
                                E = _[1],
                                m = (0, a.useState)(!1),
                                A = m[0],
                                F = m[1],
                                b = (0, a.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                D = (0, a.useCallback)(() => {
                                    E(!0), n && (0, mu.G)(n);
                                }, [n]),
                                g = (0, a.useCallback)(() => {
                                    c(!1), E(!1);
                                }, []),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && (c(!0), s && (0, mu.G)(s));
                                    },
                                    [u, s],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && t && t();
                                    },
                                    [u, t],
                                );
                            (0, a.useEffect)(
                                () =>
                                    T(() => {
                                        F(!0);
                                    }),
                                [],
                            );
                            const h = r()(Nu, !A && Pu, A && u && Hu, l && Gu, d && $u);
                            return i().createElement('div', {
                                id: e,
                                onMouseOver: D,
                                onMouseLeave: g,
                                onMouseDown: p,
                                onMouseUp: C,
                                className: h,
                                onClick: b,
                            });
                        },
                    ),
                    zu = 'Slot_base_3a',
                    Wu = 'Slot_label_e6',
                    Uu = 'Slot_close_bb',
                    qu = 'Slot_disabled_5d',
                    Xu = 'Slot_shadow_a7',
                    Vu = 'Slot_category_2c';
                let Zu;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Zu || (Zu = {}));
                const Ku = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: n = 0,
                        args: i,
                        isEnabled: s = !0,
                        onMouseDown: r,
                    }) => {
                        const o = (0, a.useCallback)(() => {
                                (0, xe.c9)(xe.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    mu.$.playYes();
                            }, [i, u, t, n]),
                            l = (0, a.useCallback)(() => {
                                (0, xe.c9)(xe.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, n]),
                            c = (0, a.useCallback)(
                                (e) => {
                                    r && r(e), ((e) => e.button === Zu.RIGHT)(e) && o();
                                },
                                [r, o],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, a.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Yu = ['children'];
                function Ju() {
                    return (
                        (Ju =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ju.apply(this, arguments)
                    );
                }
                const Qu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, Yu);
                    return i().createElement(
                        Ku,
                        Ju({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                        u,
                    );
                };
                var et = t(1396),
                    ut = t(5918);
                const tt = (0, M.Pi)(
                        ({
                            intCD: e,
                            id: u,
                            itemInstalledSetupIdx: t,
                            isMountedMoreThanOne: n,
                            isInstalled: s,
                            isDisabled: r,
                            imageSource: o,
                            isEmpty: l,
                            slotIndex: c,
                            slotType: _,
                            contextMenuDisabled: d,
                            isSetupSwitching: E,
                            children: m,
                        }) => {
                            const A = (0, N.t)().model.root.get().vehicleCD,
                                F = (0, a.useState)(!0),
                                b = F[0],
                                D = F[1],
                                g = (0, et.K)();
                            (0, a.useEffect)(() => {
                                D(!1), g.run(() => D(!0), 100);
                            }, [A]);
                            const p = (0, a.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: u,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: t,
                                    itemInstalledSetupSlotIdx: u,
                                    isMountedMoreThanOne: n,
                                }),
                                [e, _, u, t, s, n],
                            );
                            return b
                                ? i().createElement(
                                      ut.y,
                                      {
                                          uniqueKey: e,
                                          isEmpty: l,
                                          slotIndex: c,
                                          slotType: _,
                                          imageSource: o,
                                          itemInstalledSetupIndex: t,
                                      },
                                      i().createElement(
                                          Qu,
                                          { isEnabled: !(E || d || r || l), args: p },
                                          i().createElement('div', null, m),
                                      ),
                                  )
                                : i().createElement('div', null, m);
                        },
                    ),
                    nt = (0, M.Pi)(
                        ({
                            slotType: e,
                            slotIndex: u,
                            level: t,
                            isSelected: n,
                            isSetupSwitching: s,
                            isSectionSelected: r,
                            onActiveSlotChanged: o,
                            onSlotSelected: l,
                            onActiveSlotRefChanged: c,
                            onSlotClear: _,
                            panelType: d,
                            isDisabled: E = !1,
                            isBorderActive: m,
                            isIncompatible: A = !1,
                            grabberId: F,
                            containerRef: b,
                            activeDragId: D,
                            handleGrabberAction: g,
                            forceLeftUpdate: p,
                            potentialDropId: C,
                            blockOnGrabIds: h,
                            contextMenuDisabled: B,
                            groupIndex: f,
                            sectionIndex: v,
                        }) => {
                            const S = (0, N.t)().model,
                                w = S.computes.slots.slot(f, v, u),
                                x = w.imageSource,
                                y = w.isInstalled,
                                I = w.itemInstalledSetupIdx,
                                k = w.isMountedMoreThanOne,
                                O = w.overlayType,
                                R = w.keyName,
                                L = w.categoryImgSource,
                                M = w.withAttention,
                                P = w.id,
                                H = w.intCD,
                                $ = d === Pe.w.Setup,
                                G = !(0, be.s$)(d),
                                j = !(0, be.iN)(d),
                                z = d === Pe.w.Compare,
                                W = $ && r && G,
                                U = (0, a.useRef)(!1),
                                q = (0, a.useRef)(null),
                                X = -1 === H,
                                V = S.computes.isQFGMode();
                            (0, a.useEffect)(() => {
                                if (!U.current && r && n)
                                    return T(() => {
                                        o && o(q, e, P), (U.current = !0);
                                    });
                                U.current = !0;
                            }, [P, r, n, o, e]),
                                (0, a.useEffect)(() => {
                                    n && !V && c(q);
                                }, [n, c, V]);
                            const Z = ((e) => {
                                    const u = (0, a.useRef)(-1),
                                        t = (0, a.useCallback)(
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
                                    return (0, a.useEffect)(() => () => clearTimeout(u.current), []), t;
                                })((0, a.useCallback)(() => (!n && G && !s && l(e, P), Xe.C3), [P, G, n, s, l, e])),
                                K = (0, a.useCallback)(() => {
                                    E || V || Z('');
                                }, [Z, E, V]),
                                Y = (0, a.useCallback)(() => {
                                    j && !n && !D && !E && mu.$.playHighlight();
                                }, [n, D, E, j]);
                            (0, a.useEffect)(() => {
                                C && mu.$.playHighlight();
                            }, [C]);
                            const J = (0, a.useCallback)(() => {
                                    null == _ || _(P, e);
                                }, [P, _, e]),
                                Q = $ && !y,
                                ee = Boolean(F && C === F),
                                ue = F && (W || z),
                                te = `${e}-slot-${P}`,
                                ne = L && L.length > 0,
                                ae = ne ? { backgroundImage: `url(${L})` } : {},
                                ie = {
                                    id: F,
                                    containerRef: b,
                                    isEnabled: !X,
                                    onClick: K,
                                    isUpdateAvailable: Boolean(D),
                                    handleAction: g,
                                    forceCenterX: p,
                                    blockOnGrabIds: h,
                                },
                                se = {
                                    isEmpty: X,
                                    intCD: H,
                                    slotType: e,
                                    slotIndex: u,
                                    imageSource: x,
                                    isDisabled: E,
                                    isInstalled: y,
                                    id: P,
                                    itemInstalledSetupIdx: I,
                                    isMountedMoreThanOne: k,
                                    contextMenuDisabled: B,
                                    isSetupSwitching: s,
                                };
                            return i().createElement(
                                'div',
                                { className: zu, onMouseEnter: Y, id: te },
                                (r || z) &&
                                    !y &&
                                    i().createElement(
                                        'div',
                                        { className: Uu },
                                        i().createElement(ju, { id: `close-${te}`, show: !D, onClick: J }),
                                    ),
                                i().createElement(
                                    Mu,
                                    { slotType: e, slotId: P, isEnabled: !D && (0, be.qG)(d) },
                                    i().createElement(
                                        'div',
                                        { ref: q },
                                        i().createElement(
                                            Du.W,
                                            {
                                                activeDragId: D,
                                                slotType: e,
                                                isSelected: n,
                                                isBorderActive: Boolean(m),
                                                panelType: d,
                                                isDisabled: E,
                                                isPotentialDrop: ee,
                                                withBackground: !V,
                                                onClick: ue ? void 0 : K,
                                            },
                                            G &&
                                                i().createElement(
                                                    'div',
                                                    { className: Wu },
                                                    i().createElement(Ru, { text: R, show: Boolean(r), panelType: d }),
                                                ),
                                            i().createElement(
                                                bu.J,
                                                { when: Boolean(ue), wrapper: yu, withProps: ie },
                                                i().createElement(
                                                    bu.J,
                                                    { when: G, wrapper: tt, withProps: se },
                                                    i().createElement(gu.c, {
                                                        imageSource: x,
                                                        isIncompatible: A,
                                                        overlayType: O,
                                                        level: t,
                                                        isTemporary: Q,
                                                        withAttention: M,
                                                    }),
                                                ),
                                            ),
                                            ne &&
                                                i().createElement(
                                                    i().Fragment,
                                                    null,
                                                    i().createElement('span', { className: Xu }),
                                                    i().createElement('span', { className: Vu, style: ae }),
                                                ),
                                            E && i().createElement('div', { className: qu }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    at = 'BattleAbilitySlot_base_74',
                    it = 'BattleAbilitySlot_rank_01',
                    st = ['rank'];
                const rt = (e) => {
                    let u = e.rank,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, st);
                    return i().createElement(
                        'div',
                        { className: at },
                        i().createElement(nt, t),
                        u && i().createElement('div', { className: it, style: { backgroundImage: `url(${u})` } }),
                    );
                };
                var ot = t(4814);
                const lt = 'OptDeviceSlot_base_14',
                    ct = 'OptDeviceSlot_specializations_c3',
                    _t = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function dt() {
                    return (
                        (dt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        dt.apply(this, arguments)
                    );
                }
                const Et = (0, M.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            n = e.slotIndex,
                            a = e.activeSpecsMask,
                            s = e.isChangeSetupIndex,
                            o = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, _t);
                        const l = (0, N.t)(),
                            c = l.controls,
                            _ = l.model.computes.specializations(u, t, n),
                            d = _.specializations.length,
                            E = o.panelType === Pe.w.Setup || o.panelType === Pe.w.Compare,
                            m = !(0, be.s$)(o.panelType),
                            A = _.isDynamic;
                        return i().createElement(
                            'div',
                            { className: r()(lt, d && !A && !s && 'specializationsSlot') },
                            m &&
                                i().createElement(
                                    'div',
                                    { className: ct },
                                    i().createElement(ot.G, {
                                        specializations: _.specializations,
                                        isDynamic: A,
                                        activeSpecsMask: a,
                                        isSpecializationActive: E,
                                        onSpecializationClick: (e) => {
                                            c.specializationSelect({ slotId: o.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            i().createElement(nt, dt({}, o, { groupIndex: u, sectionIndex: t, slotIndex: n })),
                        );
                    }),
                    mt = {
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
                    At = ({ id: e, isSelected: u, isLocked: t, onSlotSelected: n, panelType: s }) => {
                        const o = De.yZ,
                            l = (0, a.useCallback)(() => {
                                n(o, e);
                            }, [e, n, o]),
                            c = r()(mt.base, mt[`base__${s}`], t && mt.base__disabled, u && mt.base__toggle),
                            _ = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            d = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            ),
                            E = `toggle-camouflage-slot-${e}`;
                        return i().createElement(
                            Mu,
                            { slotType: o, slotId: e },
                            i().createElement(
                                'div',
                                { id: E, className: c, onClick: l, onMouseEnter: mu.$.playHighlight },
                                u && i().createElement('div', { className: mt.glow }),
                                i().createElement('div', { className: mt.image, style: _ }),
                                i().createElement('div', { className: mt.toggle, style: d }),
                            ),
                        );
                    },
                    Ft = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function bt() {
                    return (
                        (bt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        bt.apply(this, arguments)
                    );
                }
                const Dt = (0, M.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            n = e.slotIndex,
                            a = e.sectionType,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Ft);
                        const r = (0, N.t)().model,
                            o = r.computes.slots.slot(u, t, n),
                            l = r.ammunitionPanel.get(),
                            c = l.selectedSection,
                            _ = l.selectedSlot,
                            d = (c === a ? _ : -1) === o.id;
                        switch (a) {
                            case De.zn: {
                                const e = o;
                                return i().createElement(
                                    Et,
                                    bt({}, e, s, { groupIndex: u, sectionIndex: t, slotIndex: n, isSelected: d }),
                                );
                            }
                            case De.yZ: {
                                const e = o;
                                return i().createElement(
                                    At,
                                    bt({}, s, e, { groupIndex: u, sectionIndex: t, slotIndex: n }),
                                );
                            }
                            case De.YN: {
                                const e = o;
                                return i().createElement(
                                    rt,
                                    bt({}, s, e, { groupIndex: u, sectionIndex: t, slotIndex: n, isSelected: d }),
                                );
                            }
                            default:
                                return i().createElement(
                                    nt,
                                    bt({}, s, { isSelected: d, groupIndex: u, sectionIndex: t, slotIndex: n }),
                                );
                        }
                    }),
                    gt = 'Slots_base_27',
                    pt = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function Ct() {
                    return (
                        (Ct =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ct.apply(this, arguments)
                    );
                }
                const ht = (0, M.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            n = e.sectionType,
                            s = e.onActiveSlotChanged,
                            o = e.isDisabled,
                            l = e.blockOnGrabIds,
                            c = e.isChangeSetupIndex,
                            _ = e.setIsExitBlocked,
                            d = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, pt);
                        const E = (0, a.useRef)(null),
                            m = (0, a.useRef)(null),
                            A = (0, N.t)(),
                            F = A.model,
                            b = A.controls,
                            D = F.computes.slots.length(u, t),
                            g = F.ammunitionPanel.get(),
                            p = g.selectedSection,
                            C = g.selectedSlot,
                            h = g.syncInitiator,
                            B = F.computes.isQFGMode(),
                            f = (0, a.useCallback)(
                                (e, u) => {
                                    b.dragDropSwap({
                                        sectionType: n,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(u[u.length - 1]),
                                    });
                                },
                                [b, n],
                            ),
                            v = p === n,
                            S = n === De.YN,
                            w = v ? C : -1,
                            x = `${n}-${D}slots`,
                            y = (0, Ve.UW)({
                                baseId: x,
                                slotsLength: D,
                                handleSwap: f,
                                setIsExitBlocked: _,
                                syncInitiator: h,
                            }),
                            I = y.handleGrabberAction,
                            T = y.dragState,
                            k = y.getForceCenterX;
                        (0, a.useEffect)(() => {
                            v && -1 !== w && E.current && s(E, p, w);
                        }, [s, v, p, w]);
                        const O = (e, u) => {
                                if ((o || B || mu.$.playClick(), 'number' != typeof u))
                                    return console.warn('selectedSlot is not a number');
                                b.sectionSelect({ selectedSlot: u, selectedSection: e });
                            },
                            R = (e) => {
                                E.current = e ? e.current : null;
                            },
                            L = (e, u) => {
                                b.slotClear({ slotId: e, sectionType: u });
                            };
                        return i().createElement(
                            'div',
                            { id: x, ref: m, className: r()(gt, n) },
                            ae(D, (e) => {
                                const r = !S && D > 1 ? `${x}-${e}` : '';
                                return i().createElement(
                                    a.Fragment,
                                    { key: `slot ${u}-${t}-${e}` },
                                    e > 0 && i().createElement(Fu, null),
                                    i().createElement(
                                        Dt,
                                        Ct(
                                            {
                                                groupIndex: u,
                                                sectionIndex: t,
                                                slotIndex: e,
                                                sectionType: n,
                                                isSectionSelected: v,
                                                isDisabled: o,
                                                contextMenuDisabled: S,
                                                slotType: n,
                                                onActiveSlotChanged: s,
                                                onSlotSelected: O,
                                                onActiveSlotRefChanged: R,
                                                onSlotClear: L,
                                                grabberId: r,
                                                containerRef: m,
                                                forceLeftUpdate: k(r),
                                                activeDragId: T.activeDragId,
                                                handleGrabberAction: I,
                                                potentialDropId: T.potentialDropId,
                                                blockOnGrabIds: l,
                                                isSetupSwitching: c,
                                                isChangeSetupIndex: c,
                                            },
                                            d,
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    Bt = [
                        'groupIndex',
                        'sectionIndex',
                        'type',
                        'newItemsCount',
                        'panelType',
                        'sectionsIds',
                        'vehicle',
                        'vehicleType',
                        'isSetupSwitching',
                        'classMix',
                    ];
                function ft() {
                    return (
                        (ft =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ft.apply(this, arguments)
                    );
                }
                const vt = (0, M.Pi)((e) => {
                    let u = e.groupIndex,
                        t = e.sectionIndex,
                        n = e.type,
                        s = e.newItemsCount,
                        o = e.panelType,
                        l = e.sectionsIds,
                        c = e.vehicle,
                        _ = e.vehicleType,
                        d = e.isSetupSwitching,
                        E = e.classMix,
                        m = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, Bt);
                    const A = (0, N.t)().model,
                        F = (0, a.useRef)(null),
                        b = A.ammunitionPanel.get(),
                        D = b.selectedSection,
                        g = b.syncInitiator,
                        p = A.computes.slots.length(u, t),
                        C = A.computes.slots.existFilled(u, t),
                        h = ((e, u) => {
                            const t = Le('tutorialModel.triggers.items').filter((t) => {
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
                        })('AmmunitionPanelBattleAbilities', Ne);
                    (0, a.useEffect)(() => {
                        null == h || h.runTrigger(!0);
                    }, [h]);
                    const B = D === n,
                        f = (0, Ve.Tu)(n, l),
                        v = f.selfId,
                        S = f.blockOnGrabIds,
                        w = ((c && c.length > 0) || (_ && _.length > 0)) && o !== Pe.w.Battle && o !== Pe.w.Respawn,
                        x = (0, a.useMemo)(
                            () => ({
                                icon: i().createElement('span', {
                                    className: eu,
                                    style: {
                                        backgroundImage: _
                                            ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(_)})`
                                            : '',
                                    },
                                }),
                                vehicle: c,
                            }),
                            [c, _],
                        ),
                        y = p > 0 && o !== Pe.w.Compare && o !== Pe.w.Battle && o !== Pe.w.Respawn,
                        I = R.strings.tank_setup.section.$dyn(n);
                    if ('string' != typeof I)
                        throw new Error(`No top label text for section type ${n} or it's not a string`);
                    return i().createElement(
                        'div',
                        {
                            id: d ? Xe.CF : v,
                            ref: F,
                            className: r()(
                                Ze,
                                E,
                                B && 'sectionSelected',
                                p > 1 && 'multiSlot',
                                g >= 0 && C && 'existFilledSlots',
                            ),
                        },
                        w &&
                            i().createElement(
                                Eu,
                                { className: Je },
                                i().createElement(fe, {
                                    classMix: Qe,
                                    text: R.strings.tank_setup.categories.reserves.config(),
                                    binding: x,
                                }),
                            ),
                        y &&
                            i().createElement(
                                'div',
                                { className: Ke },
                                i().createElement(qe, { text: I, parentRef: F, show: !B, panelType: o }),
                            ),
                        i().createElement(
                            ht,
                            ft({ groupIndex: u, sectionIndex: t, sectionType: n, panelType: o, blockOnGrabIds: S }, m),
                        ),
                        Boolean(s) &&
                            i().createElement(
                                'div',
                                { className: Ye },
                                i().createElement(he, { value: s, size: 'small', fadeInAnimation: !0 }),
                            ),
                    );
                });
                var St = t(8598);
                const wt = {
                        base: 'ShellsSlot_base_05',
                        base__grabbing: 'ShellsSlot_base__grabbing_2f',
                        shell: 'ShellsSlot_shell_ab',
                        shell__grabbing: 'ShellsSlot_shell__grabbing_98',
                        shell__active: 'ShellsSlot_shell__active_7e',
                        shell__potential: 'ShellsSlot_shell__potential_30',
                        label: 'ShellsSlot_label_da',
                        image: 'ShellsSlot_image_3f',
                        infinity: 'ShellsSlot_infinity_19',
                    },
                    xt = ({
                        id: e,
                        itemInstalledSetupIdx: u,
                        isMountedMoreThanOne: t,
                        imageSource: n,
                        count: s,
                        isInfinity: o,
                        isSelected: l,
                        keyName: c,
                        panelType: _,
                        intCD: d,
                        slotIndex: E,
                        grabberId: m,
                        isSetupSwitching: A,
                        containerRef: F,
                        activeDragId: b,
                        handleGrabberAction: D,
                        forceLeftUpdate: g,
                        potentialDropId: p,
                        blockOnGrabIds: C,
                        shellState: h,
                        isDisabled: B,
                    }) => {
                        const f = !(0, be.s$)(_),
                            v = (0, a.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]),
                            S = m && m === p,
                            w = m && m === b,
                            x = (0, a.useMemo)(() => {
                                const n = { slotType: De.g9, slotId: e, fieldType: 1, intCD: d };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: u,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: t,
                                    }),
                                ];
                            }, [d, e, u, t]),
                            y = x[0],
                            I = x[1],
                            T = (0, a.useMemo)(
                                () => ({
                                    id: m,
                                    containerRef: F,
                                    isEnabled: Boolean(m) && l,
                                    isUpdateAvailable: Boolean(b),
                                    handleAction: D,
                                    forceCenterX: g,
                                    blockOnGrabIds: C,
                                }),
                                [b, C, F, g, m, D, l],
                            ),
                            k = (0, a.useMemo)(
                                () => ({ slotIndex: E, uniqueKey: d, slotType: De.g9, imageSource: null }),
                                [d, E],
                            );
                        return i().createElement(
                            Qu,
                            { isEnabled: f && !A && !B, args: I },
                            i().createElement(
                                Lu.t,
                                { args: y, isEnabled: !b && (0, be.qG)(_) },
                                i().createElement(
                                    'div',
                                    { id: `shell-slot-${E}`, className: wt.base },
                                    c &&
                                        i().createElement(
                                            'div',
                                            { className: wt.label },
                                            i().createElement(Ru, {
                                                text: c,
                                                show: l || _ === Pe.w.Battle || _ === Pe.w.Respawn,
                                                shellState: h,
                                                panelType: _,
                                                className: r()(
                                                    0 === E && wt.topLabel__first,
                                                    2 === E && wt.topLabel__last,
                                                ),
                                            }),
                                        ),
                                    i().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                wt.shell,
                                                !b && f && !B && wt.shell__active,
                                                w && wt.shell__grabbing,
                                                !w && S && wt.shell__potential,
                                            ),
                                        },
                                        i().createElement(
                                            bu.J,
                                            { when: f, wrapper: yu, withProps: T },
                                            i().createElement(
                                                bu.J,
                                                { when: f, wrapper: ut.y, withProps: k },
                                                i().createElement('div', { className: wt.image, style: v }),
                                                !o && i().createElement(St.X, { count: s }),
                                                o && i().createElement('div', { className: wt.infinity }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    yt = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    It = ({ id: e, isSelected: u, imageSource: t, onSlotSelected: n }) => {
                        const s = (0, a.useCallback)(() => {
                                !u && n(e);
                            }, [e, u, n]),
                            o = r()(yt.slot, !u && yt.slot__active, yt.slot__compare),
                            l = (0, a.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]),
                            c = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            );
                        return i().createElement(
                            Mu,
                            { slotType: De.WI, slotId: e },
                            i().createElement(
                                'div',
                                { className: yt.base },
                                i().createElement(
                                    'div',
                                    { className: o, onClick: s, id: `shell-slot-${e}` },
                                    u && i().createElement('div', { className: yt.glow }),
                                    i().createElement('div', { className: yt.image, style: l }),
                                    i().createElement('div', { className: yt.toggle, style: c }),
                                ),
                            ),
                        );
                    },
                    Tt = 'ShellContainer_base_46',
                    kt = 'ShellContainer_base__compressed_13',
                    Ot = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                    ];
                function Rt() {
                    return (
                        (Rt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Rt.apply(this, arguments)
                    );
                }
                const Lt = (0, M.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            n = e.slotIndex,
                            a = e.isCompare,
                            s = e.handleSlotSelected,
                            o = e.baseId,
                            l = e.grabber,
                            c = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Ot);
                        const _ = l.handleGrabberAction,
                            d = l.dragState,
                            E = l.getForceCenterX,
                            m = (0, N.t)().model,
                            A = m.computes.slots.length(u, t),
                            F = m.computes.slots.slot(u, t, n),
                            b = !a && A > 1 ? `${o}-${F.id}` : '',
                            D = m.computes.isQFGMode(),
                            g = !a && 0 !== n && !D;
                        return (0, be.j2)(F)
                            ? null
                            : i().createElement(
                                  'div',
                                  { key: F.id, className: r()(Tt, g && kt) },
                                  a
                                      ? i().createElement(It, Rt({}, F, { onSlotSelected: s }))
                                      : i().createElement(
                                            xt,
                                            Rt(
                                                {},
                                                F,
                                                {
                                                    slotIndex: n,
                                                    grabberId: b,
                                                    forceLeftUpdate: E(b),
                                                    activeDragId: d.activeDragId,
                                                    handleGrabberAction: _,
                                                    potentialDropId: d.potentialDropId,
                                                },
                                                c,
                                            ),
                                        ),
                              );
                    }),
                    Mt = 'Shells_base_f9',
                    Nt = (0, M.Pi)(
                        ({
                            panelType: e,
                            onSelected: u,
                            isCompare: t,
                            isSelected: n,
                            syncInitiator: s,
                            blockOnGrabIds: r,
                            isDisabled: o,
                            isSetupSwitching: l,
                            setIsExitBlocked: c,
                            groupIndex: _,
                            sectionIndex: d,
                        }) => {
                            const E = (0, N.t)(),
                                m = E.model,
                                A = E.controls,
                                F = m.computes.slots.length(_, d),
                                b = (0, a.useRef)(!1),
                                D = (0, a.useRef)(null),
                                g = t ? De.WI : De.g9,
                                p = `${g}-${F}shells`,
                                C = !(0, be.iN)(e),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        A.sectionSelect({ selectedSlot: e, selectedSection: g }), C && mu.$.playClick();
                                    },
                                    [A, g, C],
                                ),
                                B = (0, a.useCallback)(() => {
                                    n || t || o || l || h(0);
                                }, [n, t, l, o, h]),
                                f = (0, a.useCallback)(
                                    (e, u) => {
                                        A.dragDropSwap({
                                            sectionType: g,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(u[u.length - 1]),
                                        });
                                    },
                                    [A, g],
                                ),
                                v = (0, Ve.UW)({
                                    baseId: p,
                                    slotsLength: F,
                                    handleSwap: f,
                                    setIsExitBlocked: c,
                                    syncInitiator: s,
                                });
                            return (
                                (0, a.useEffect)(
                                    () =>
                                        T(() => {
                                            b.current = !0;
                                        }),
                                    [],
                                ),
                                (0, a.useEffect)(() => {
                                    if (n && e === Pe.w.Setup) {
                                        if (!b.current)
                                            return T(() => {
                                                u();
                                            });
                                        u();
                                    }
                                }, [n, e, u]),
                                i().createElement(
                                    'div',
                                    {
                                        id: p,
                                        ref: D,
                                        className: Mt,
                                        onClick: B,
                                        onMouseEnter: () => {
                                            !o && C && mu.$.playHighlight();
                                        },
                                    },
                                    ae(F, (u) =>
                                        i().createElement(Lt, {
                                            key: `${_} ${d} ${u}`,
                                            groupIndex: _,
                                            sectionIndex: d,
                                            slotIndex: u,
                                            isCompare: t,
                                            containerRef: D,
                                            handleSlotSelected: h,
                                            panelType: e,
                                            blockOnGrabIds: r,
                                            isSelected: n,
                                            isDisabled: o,
                                            isSetupSwitching: l,
                                            grabber: v,
                                            baseId: p,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    Pt = {
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
                        base__noBG: 'ShellsSection_base__noBG_0a',
                        label: 'ShellsSection_label_38',
                        attention: 'ShellsSection_attention_7e',
                        blinking: 'ShellsSection_blinking_57',
                        border: 'ShellsSection_border_0d',
                        border__double: 'ShellsSection_border__double_a1',
                        border__triple: 'ShellsSection_border__triple_f2',
                        counter: 'ShellsSection_counter_74',
                        disabled: 'ShellsSection_disabled_c2',
                    },
                    Ht = [Pe.w.Hangar, Pe.w.Battle, Pe.w.Prebattle, Pe.w.Respawn],
                    $t = (0, M.Pi)(
                        ({
                            type: e,
                            sectionsIds: u,
                            panelType: t,
                            onActiveSlotChanged: n,
                            isDisabled: s,
                            isBorderActive: o,
                            classMix: l,
                            isSetupSwitching: c,
                            setIsExitBlocked: _,
                            newItemsCount: d,
                            groupIndex: E,
                            sectionIndex: m,
                        }) => {
                            const A = (0, N.t)().model,
                                F = A.ammunitionPanel.get(),
                                b = F.ammoNotFull,
                                D = F.selectedSection,
                                g = F.syncInitiator,
                                p = (0, a.useRef)(null),
                                C = t === Pe.w.Compare,
                                h = t === Pe.w.Prebattle && e === De.g9,
                                B = D === e || h,
                                f = A.computes.isQFGMode(),
                                v = (0, a.useCallback)(() => {
                                    n(p, D, 0);
                                }, [n, D]),
                                S = (0, Ve.Tu)(e, u),
                                w = S.selfId,
                                x = S.blockOnGrabIds,
                                y = ((e) => Ht.includes(e))(t) && !s && b,
                                I = A.computes.slots.filteredLength(E, m),
                                T = !C && t !== Pe.w.Battle && t !== Pe.w.Respawn;
                            return i().createElement(
                                'div',
                                {
                                    id: c ? Xe.CF : w,
                                    className: r()(
                                        Pt.base,
                                        l,
                                        f && Pt.base__noBG,
                                        Pt[`base__${t}`],
                                        !o && B && Pt.base__selected,
                                        C && Pt.base__compare,
                                        s && Pt.base__disabled,
                                    ),
                                    ref: p,
                                },
                                y && i().createElement('div', { className: Pt.attention }),
                                T &&
                                    i().createElement(
                                        'div',
                                        { className: Pt.label },
                                        i().createElement(qe, {
                                            text: R.strings.tank_setup.section.shells(),
                                            parentRef: p,
                                            show: !B,
                                            panelType: t,
                                        }),
                                    ),
                                y &&
                                    i().createElement('div', {
                                        className: r()(
                                            Pt.border,
                                            2 === I && Pt.border__double,
                                            3 === I && Pt.border__triple,
                                        ),
                                    }),
                                i().createElement(Nt, {
                                    groupIndex: E,
                                    sectionIndex: m,
                                    panelType: t,
                                    onSelected: v,
                                    isSelected: B,
                                    isCompare: C,
                                    syncInitiator: g,
                                    blockOnGrabIds: x,
                                    isDisabled: s || f,
                                    isSetupSwitching: c,
                                    setIsExitBlocked: _,
                                }),
                                Boolean(d) &&
                                    i().createElement(
                                        'div',
                                        { className: Pt.counter },
                                        i().createElement(he, { value: d, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                s && i().createElement('div', { className: Pt.disabled }),
                            );
                        },
                    ),
                    Gt = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function jt() {
                    return (
                        (jt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        jt.apply(this, arguments)
                    );
                }
                const zt = (0, M.Pi)(
                        ({
                            groupIndex: e,
                            panelType: u,
                            isDisabled: t = !1,
                            onActiveSlotChanged: n,
                            isBorderActive: a,
                            isChangeSetupIndex: s,
                            setIsExitBlocked: o,
                        }) => {
                            const l = (0, N.t)().model,
                                c = K(['section'], Gt),
                                _ = l.computes.sections.IDs(e),
                                d = {
                                    panelType: u,
                                    isDisabled: t,
                                    onActiveSlotChanged: n,
                                    isBorderActive: a,
                                    sectionsIds: _,
                                    isChangeSetupIndex: s,
                                    setIsExitBlocked: o,
                                };
                            return i().createElement(
                                'div',
                                { className: Gt.base },
                                ae(l.computes.sections.length(e), (t) => {
                                    const n = l.computes.sections.section(e, t);
                                    if (!n.slots || !n.slots.length) return null;
                                    const a = r()(
                                        c.section,
                                        0 !== t && (0, be.s$)(u) && Gt.section__battle,
                                        0 === t && Gt.section__first,
                                    );
                                    if (n.type === De.g9 || n.type === De.WI) {
                                        const u = n;
                                        return i().createElement(
                                            $t,
                                            jt({}, u, d, {
                                                groupIndex: e,
                                                sectionIndex: t,
                                                isSetupSwitching: s,
                                                key: `${n.name}${e}${n.slots.length}`,
                                                classMix: a,
                                            }),
                                        );
                                    }
                                    return i().createElement(
                                        vt,
                                        jt({}, n, d, {
                                            groupIndex: e,
                                            sectionIndex: t,
                                            isSetupSwitching: s,
                                            key: `${n.name}${e}${n.slots.length}`,
                                            classMix: a,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    Wt = 'KeyboardKey_base_57',
                    Ut = 'KeyboardKey_back_43',
                    qt = i().memo(({ text: e }) =>
                        i().createElement('div', { className: Wt }, i().createElement('div', { className: Ut }, e)),
                    ),
                    Xt = 'SetupSwitchHotkey_base_4c',
                    Vt = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    Zt = 'SetupSwitchHotkey_plusWrapper_f0',
                    Kt = 'SetupSwitchHotkey_plus_f0',
                    Yt = 'SetupSwitchHotkey_plus__horizontal_e0',
                    Jt = 'SetupSwitchHotkey_plus__vertical_5b',
                    Qt = i().memo(({ hotKeys: e }) =>
                        i().createElement(
                            'div',
                            { className: Xt },
                            e.map((e, u) => {
                                if (!e) return null;
                                const t = e.value;
                                return 0 === u
                                    ? i().createElement(qt, { key: u, text: t })
                                    : i().createElement(
                                          'div',
                                          { key: u, className: Vt },
                                          i().createElement(
                                              'div',
                                              { className: Zt },
                                              i().createElement('div', { className: `${Kt} ${Yt}` }),
                                              i().createElement('div', { className: `${Kt} ${Jt}` }),
                                          ),
                                          i().createElement(qt, { text: t }),
                                      );
                            }),
                        ),
                    ),
                    en = {
                        base: 'Group_base_70',
                        wrapper: 'Group_wrapper_07',
                        switch: 'Group_switch_ff',
                        switch__battle: 'Group_switch__battle_c0',
                        switch__small: 'Group_switch__small_5e',
                        switch__extraSmall: 'Group_switch__extraSmall_ec',
                        prebattleSwitchIndicator: 'Group_prebattleSwitchIndicator_2e',
                        hint: 'Group_hint_99',
                        hint__disabled: 'Group_hint__disabled_6a',
                    };
                function un() {
                    return (
                        (un =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        un.apply(this, arguments)
                    );
                }
                const tn = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    nn = (e) => e.setupSelector.hotKeys,
                    an = (0, M.Pi)(
                        ({
                            groupIndex: e,
                            sectionProps: u,
                            isSetupSwitching: t,
                            setSetupSwitching: n,
                            handleSetupSwitching: a,
                        }) => {
                            const s = K(['switch'], en),
                                o = (0, N.t)().model,
                                l = o.root.get().isDisabled,
                                c = o.computes.groups.group(e);
                            return o.computes.groups.isGroupEmpty(e)
                                ? null
                                : i().createElement(
                                      'div',
                                      { key: c.groupId, className: en.base },
                                      i().createElement(
                                          'div',
                                          { className: en.wrapper },
                                          i().createElement(
                                              Fe,
                                              ((e, u) => ({ index: e.currentIndex, setSetupSwitching: u }))(c, n),
                                              i().createElement(
                                                  zt,
                                                  un({}, u, { groupIndex: e, isChangeSetupIndex: t }),
                                              ),
                                          ),
                                          c.setupSelector.isSwitchEnabled &&
                                              i().createElement(
                                                  'div',
                                                  {
                                                      className: r()(
                                                          s.switch,
                                                          (0, be.iN)(u.panelType) && en.switch__battle,
                                                      ),
                                                  },
                                                  i().createElement(ce._, {
                                                      states: c.setupSelector.states,
                                                      onClick: a,
                                                      totalCount: c.totalCount,
                                                      currentIndex: c.currentIndex,
                                                      groupId: c.groupId,
                                                      isDisabled: u.isDisabled,
                                                  }),
                                                  c.setupSelector.isPrebattleSwitchDisabled &&
                                                      i().createElement(
                                                          le,
                                                          {
                                                              header: tn.title(),
                                                              body: String(tn.desc.$dyn(`c_${c.groupId}`)),
                                                          },
                                                          i().createElement('div', {
                                                              className: en.prebattleSwitchIndicator,
                                                          }),
                                                      ),
                                              ),
                                      ),
                                      ((_ = c),
                                      ((d = u.panelType) === Pe.w.Battle || d === Pe.w.Respawn) &&
                                          _.setupSelector.isSwitchEnabled &&
                                          nn(_) &&
                                          i().createElement(
                                              'div',
                                              { className: r()(en.hint, l && en.hint__disabled) },
                                              i().createElement(Qt, { hotKeys: nn(c) }),
                                          )),
                                  );
                            var _, d;
                        },
                    ),
                    sn = 'Groups_base_de',
                    rn = (0, M.Pi)(
                        ({ sectionProps: e, isSetupSwitching: u, isReady: t, setSetupSwitching: n, children: s }) => {
                            const r = (0, N.t)(),
                                o = r.model,
                                l = r.controls,
                                c = o.vehicleInfo.get(),
                                _ = l.changeSetupIndex,
                                d = null == c ? void 0 : c.vehicleName;
                            (0, a.useEffect)(() => {
                                (e.panelType !== Pe.w.Hangar && e.panelType !== Pe.w.Setup) || !t || n(!1);
                            }, [t, e.panelType, n]),
                                (0, a.useEffect)(() => {
                                    e.panelType === Pe.w.Respawn && n(!1);
                                }, [d, e.panelType, n]);
                            const E = (0, a.useCallback)(
                                (u) => {
                                    e.panelType === Pe.w.Respawn && n(!0), _(u);
                                },
                                [_, e.panelType, n],
                            );
                            return i().createElement(
                                'div',
                                { className: sn },
                                ae(o.computes.groups.length(), (t) =>
                                    i().createElement(an, {
                                        key: `group-${t}`,
                                        sectionProps: e,
                                        groupIndex: t,
                                        isSetupSwitching: u,
                                        setSetupSwitching: n,
                                        handleSetupSwitching: E,
                                    }),
                                ),
                                s,
                            );
                        },
                    );
                function on() {
                    return (
                        (on =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        on.apply(this, arguments)
                    );
                }
                const ln = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = i().createElement('div', { className: t }, e);
                        if (u.header || u.body) return i().createElement(le, u, n);
                        const a = u.contentId;
                        return a
                            ? i().createElement(ie.u, on({}, u, { contentId: a }), n)
                            : i().createElement(Lu.t, u, n);
                    },
                    cn = 'RoleSkillSlot_base_c4',
                    _n = 'RoleSkillSlot_icon_79',
                    dn = ({ roleSkill: e, tooltipId: u, tooltipHeader: t, tooltipBody: n, className: s }) => {
                        const o = (0, a.useMemo)(
                            () => ({
                                args: { tooltipId: u, roleSkill: e, header: t, body: n, hasHtmlContent: !0 },
                                header: t,
                                body: n,
                                ignoreShowDelay: !0,
                            }),
                            [e, t, n, u],
                        );
                        return i().createElement(
                            ln,
                            { tooltipArgs: o, className: r()(cn, s) },
                            i().createElement('div', {
                                className: _n,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    En = 'SlotGlow_base_40',
                    mn = 'SlotGlow_glow_a9',
                    An = 'SlotGlow_glow__initialized_8d',
                    Fn = 'SlotGlow_glow__shown_f2',
                    bn = 'SlotGlow_glow__hidden_94',
                    Dn = (0, a.memo)(({ slotOffset: e, slotWidth: u, isAnimationRunning: t }) => {
                        const n = (0, a.useState)({ offset: e, slotWidth: u }),
                            s = n[0],
                            o = n[1],
                            l = (0, a.useRef)({ initialized: !1, offset: e, slotWidth: u });
                        (0, a.useEffect)(() => {
                            let t = l.current.initialized;
                            !t && e && ((t = !0), o({ offset: e, slotWidth: u })),
                                (l.current = { initialized: t, offset: e, slotWidth: u });
                        }, [e, u]),
                            (0, a.useEffect)(() => {
                                t || o(l.current);
                            }, [t]);
                        const c = (0, a.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${v.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            _ = !t && s.offset === l.current.offset,
                            d = r()(mn, l.current.initialized && An, _ ? Fn : bn);
                        return i().createElement(
                            'div',
                            { className: En },
                            i().createElement('div', { className: d, style: c }),
                        );
                    }),
                    gn = (0, M.Pi)(
                        ({
                            show: e = !0,
                            isReady: u = !0,
                            panelType: t,
                            isDisabled: n = !1,
                            onResize: s,
                            setIsExitBlocked: o,
                        }) => {
                            const l = (0, N.t)(),
                                c = l.model,
                                _ = l.controls,
                                d = c.ammunitionPanel.get(),
                                E = d.isSetupSwitchInProgress,
                                m = d.syncInitiator,
                                A = c.roleSkillSlot.get(),
                                F = (0, a.useState)(!1),
                                b = F[0],
                                D = F[1],
                                g = (0, a.useRef)(!1),
                                p = (0, a.useState)({ slotWidth: 0, slotOffset: 0 }),
                                C = p[0],
                                h = p[1],
                                B = (0, a.useState)(!1),
                                f = B[0],
                                v = B[1],
                                S = (0, a.useRef)(null),
                                w = (0, a.useContext)(y),
                                x = (0, a.useRef)({
                                    element: null,
                                    generation: 0,
                                    slotIndex: null,
                                    sectionIndex: null,
                                }),
                                I = (0, a.useCallback)(
                                    (e, u) => {
                                        if (b || E || t !== Pe.w.Hangar) return;
                                        const n = u || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                        _.sectionResized(Object.assign({ sectionType: e }, n)),
                                            w && (w.freeze(), w.resize());
                                    },
                                    [b, E, t, _, w],
                                ),
                                k = (0, a.useCallback)(
                                    (e) => {
                                        I('main', e);
                                    },
                                    [I],
                                );
                            Y(S, k, !0, [m]), (0, a.useEffect)(() => () => k(), [k]);
                            const O = (0, a.useCallback)(() => {
                                    v(!1);
                                }, []),
                                R = (0, a.useCallback)(() => {
                                    if (x.current.element && S.current) {
                                        const e = x.current.element.getBoundingClientRect(),
                                            u = S.current.getBoundingClientRect();
                                        h({ slotWidth: e.width, slotOffset: e.left - u.left + 0.5 * e.width });
                                    }
                                }, []),
                                L = (0, a.useCallback)(
                                    (e, u, t) => {
                                        if (e.current && S.current) {
                                            const n = ((e, u, t) =>
                                                e !== t.current.slotIndex || u !== t.current.sectionIndex)(t, u, x);
                                            (x.current.element = e.current),
                                                (x.current.slotIndex = t),
                                                (x.current.sectionIndex = u),
                                                g.current && n ? v(!0) : (g.current = !0),
                                                x.current.generation && R();
                                        }
                                    },
                                    [R],
                                ),
                                M = (0, a.useCallback)(
                                    () =>
                                        T(() => {
                                            (x.current.generation += 1), R();
                                        }),
                                    [x, R],
                                );
                            (0, a.useEffect)(() => T(M), [M]),
                                (0, a.useEffect)(
                                    () => (
                                        engine.on('clientResized', M),
                                        () => {
                                            engine.off('clientResized', M);
                                        }
                                    ),
                                    [M],
                                );
                            const P = C.slotWidth,
                                H = C.slotOffset,
                                $ = r()(J.base, !u && J.base__locked, !e && J.base__hidden, n && J.base__disabled),
                                G = r()(J.border, !f && J.border__hidden),
                                j = t === Pe.w.Setup || t === Pe.w.Compare,
                                z = {
                                    panelType: t,
                                    isDisabled: n,
                                    onActiveSlotChanged: L,
                                    isBorderActive: f,
                                    setIsExitBlocked: o,
                                };
                            (0, a.useEffect)(() => {
                                null == s || s();
                            }, [s, A.roleSkill]);
                            const W = K(['roleSkillSlot'], J);
                            return i().createElement(
                                'div',
                                { ref: S, className: $ },
                                j &&
                                    i().createElement(Dn, {
                                        key: x.current.generation,
                                        slotOffset: H,
                                        slotWidth: P,
                                        isAnimationRunning: f,
                                    }),
                                i().createElement(
                                    rn,
                                    { isSetupSwitching: E || b, sectionProps: z, isReady: u, setSetupSwitching: D },
                                    A.roleSkill &&
                                        i().createElement(dn, {
                                            roleSkill: A.roleSkill,
                                            tooltipId: A.tooltipId,
                                            tooltipHeader: A.tooltipHeader,
                                            tooltipBody: A.tooltipBody,
                                            className: r()(J.roleSkillSlot, J[`roleSkillSlot__${t}`], W.roleSkillSlot),
                                        }),
                                ),
                                j &&
                                    i().createElement(
                                        'div',
                                        { className: G },
                                        i().createElement(ne, { slotWidth: P, slotOffset: H, onAnimationEnd: O }),
                                    ),
                            );
                        },
                    ),
                    pn = 'AmmunitionPanelApp_base_aa',
                    Cn = 'AmmunitionPanelApp_base__hidden_c1',
                    hn = (0, M.Pi)(() => {
                        const e = (0, N.t)(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            s = n.isDisabled,
                            o = n.isReady;
                        (0, O.gd)(L.n.ESCAPE, t.escKeyDown);
                        const l = (0, a.useState)(!0),
                            c = l[0],
                            _ = l[1],
                            d = (function (e, u = []) {
                                const t = (0, a.useRef)(!1);
                                return (0, a.useCallback)(() => {
                                    t.current || (e(), (t.current = !0));
                                }, u);
                            })(() => {
                                v.O.view.setSidePaddingsRem({ left: 120, right: 120, bottom: 45, top: 65 });
                            });
                        return (
                            (0, a.useEffect)(() => {
                                if (o) return T(() => T(() => _(!1)));
                                _(!0);
                            }, [o]),
                            (0, w.b)(() => {
                                k.displayStatusIs.shown()
                                    ? v.O.view.freezeTextureBeforeResize()
                                    : k.displayStatusIs.hidden() && v.O.view.resize(1, 1);
                            }),
                            i().createElement(I, { onResize: d }, (e, u) =>
                                i().createElement(
                                    'div',
                                    { ref: e, className: r()(pn, c && Cn) },
                                    i().createElement(gn, {
                                        panelType: Pe.w.Hangar,
                                        isDisabled: s,
                                        isReady: o,
                                        onResize: u,
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    f().render(
                        i().createElement(N.k, null, i().createElement(h, null, i().createElement(hn, null))),
                        document.getElementById('root'),
                    );
                });
            },
            3521: (e, u, t) => {
                'use strict';
                function n(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return a(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, u);
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
                function a(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                t.d(u, { WL: () => r, aR: () => o, jZ: () => i, yG: () => s });
                const i = (e, u = []) => {
                        const t = document.getElementById('root');
                        t && (t.style.cursor = e ? 'grabbing' : 'default');
                        for (var a, i = n(u); !(a = i()).done; ) {
                            const u = a.value,
                                t = document.getElementById(u);
                            t && (t.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    s = (e, u, t, n) => {
                        const a = t + u,
                            i = n - u;
                        return e < a ? a : e > i ? i : e;
                    },
                    r = (e, u, t) => {
                        let a = '',
                            i = 8e3;
                        for (var s, r = n(t); !(s = r()).done; ) {
                            const e = s.value,
                                t = Math.abs(e.centerX - u);
                            t < i && ((a = e.id), (i = t));
                        }
                        return a;
                    },
                    o = (e, u) => {
                        const t = u.find((u) => u.id === e);
                        return t ? t.centerX : 0;
                    };
            },
            1820: (e, u, t) => {
                'use strict';
                let n, a;
                t.d(u, { m: () => a }),
                    (function (e) {
                        (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                    })(n || (n = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(a || (a = {}));
            },
            6063: (e, u, t) => {
                'use strict';
                t.d(u, { C3: () => n, CF: () => a, L0: () => i });
                const n = 500,
                    a = 'notUsableSection',
                    i = 'FunRandomQuickFireGuns';
            },
            4301: (e, u, t) => {
                'use strict';
                t.d(u, { iN: () => i, j2: () => a, qG: () => s, s$: () => r });
                var n = t(4231);
                const a = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    i = (e) => e === n.w.Battle || e === n.w.Prebattle,
                    s = (e) => !i(e),
                    r = (e) => i(e) || e === n.w.Respawn;
            },
            7626: (e, u, t) => {
                'use strict';
                t.d(u, { YR: () => o, UW: () => c, Tu: () => l });
                var n = t(6179),
                    a = t(9152),
                    i = t(7727),
                    s = t(3521),
                    r = t(1820);
                const o = (e) => `panel-${e}-section`,
                    l = (e, u) => {
                        const t = o(e),
                            n = u.filter((e) => e !== t);
                        return { selfId: t, blockOnGrabIds: [a.y, ...n] };
                    },
                    c = ({ baseId: e, slotsLength: u, handleSwap: t, setIsExitBlocked: a, syncInitiator: o }) => {
                        const l = ((e, u, t) => {
                                const a = (0, n.useRef)([]),
                                    o = (0, n.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    l = (0, n.useState)({ activeDragId: '', potentialDropId: '' }),
                                    c = l[0],
                                    _ = l[1],
                                    d = (0, n.useCallback)((e) => {
                                        o.current.dropId ||
                                            o.current.prevPotentialDropId ||
                                            ((o.current.prevPotentialDropId = e),
                                            _({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    E = (0, n.useCallback)((e, u) => {
                                        if (a.current) {
                                            const t = (0, s.WL)(e, u, a.current);
                                            t !== o.current.prevPotentialDropId &&
                                                ((o.current.prevPotentialDropId = t),
                                                _({ activeDragId: e, potentialDropId: t }));
                                        }
                                    }, []),
                                    m = (0, n.useCallback)((e, u) => {
                                        if (a.current && u) {
                                            const t = o.current,
                                                n = (0, s.WL)(e, u, a.current);
                                            (t.dropId = n),
                                                (t.dragId = e),
                                                (t.prevPotentialDropId = ''),
                                                _({ activeDragId: e, potentialDropId: '' }),
                                                n !== e && (0, i.G)('cons_equipment_swipe');
                                        }
                                    }, []),
                                    A = (0, n.useCallback)(() => {
                                        const e = o.current,
                                            u = e.dragId,
                                            t = e.dropId,
                                            n = e.prevPotentialDropId;
                                        (u || t || n) &&
                                            ((o.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            _({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    F = (0, n.useCallback)(
                                        (e) => {
                                            const u = o.current.dropId;
                                            u && u !== e ? t(e, u) : A();
                                        },
                                        [A, t],
                                    ),
                                    b = (0, n.useCallback)((e, u) => {
                                        const t = a.current.find((u) => u.id === e);
                                        t && u && (t.centerX = u);
                                    }, []),
                                    D = (0, n.useCallback)(
                                        (e, u) => {
                                            const t = u.dragId,
                                                n = u.currentCenterX;
                                            switch (e) {
                                                case r.m.Ready:
                                                    return b(t, n);
                                                case r.m.DragStart:
                                                    return d(t);
                                                case r.m.Drag:
                                                    return E(t, n);
                                                case r.m.Drop:
                                                    return m(t, n);
                                                case r.m.DropExit:
                                                    return F(t);
                                                default:
                                                    return void console.warn('Unknown grabber action', e);
                                            }
                                        },
                                        [d, E, m, F, b],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        if (e !== a.current.length) {
                                            const t = new Array(e).fill(null);
                                            a.current = t.map((e, t) => ({ id: `${u}-${t}`, centerX: 0 }));
                                        }
                                    }, [e, u]),
                                    {
                                        dragState: c,
                                        handleGrabberAction: D,
                                        getForceCenterX: (0, n.useCallback)((e) => {
                                            const u = o.current,
                                                t = u.dragId,
                                                n = u.dropId;
                                            return e === t
                                                ? (0, s.aR)(n, a.current)
                                                : e === n
                                                  ? (0, s.aR)(t, a.current)
                                                  : 0;
                                        }, []),
                                        resetDragResults: A,
                                    }
                                );
                            })(u, e, t),
                            c = l.dragState,
                            _ = l.handleGrabberAction,
                            d = l.getForceCenterX,
                            E = l.resetDragResults,
                            m = (0, n.useCallback)(
                                (e, u) => {
                                    if (a)
                                        switch (e) {
                                            case r.m.DragStart:
                                            case r.m.Drag:
                                                a(!0);
                                                break;
                                            default:
                                                a(!1);
                                        }
                                    _(e, u);
                                },
                                [_, a],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                a && a(!1);
                            }, [a]),
                            (0, n.useEffect)(() => E, [o, E]),
                            { handleGrabberAction: m, dragState: c, getForceCenterX: d }
                        );
                    };
            },
            4231: (e, u, t) => {
                'use strict';
                let n;
                t.d(u, { w: () => n }),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.Setup = 'setup'),
                            (e.Compare = 'compare'),
                            (e.Battle = 'battle'),
                            (e.Respawn = 'respawn'),
                            (e.Prebattle = 'prebattle');
                    })(n || (n = {}));
            },
            3220: (e, u, t) => {
                'use strict';
                t.d(u, { k: () => _, t: () => d });
                var n = t(3215),
                    a = t(9480),
                    i = t(3946),
                    s = t(4598),
                    r = t(6063),
                    o = t(4301),
                    l = t(7626);
                const c = (0, n.q)()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                t = (0, i.Om)(() => u.root.get().modeName === r.L0),
                                n = (0, i.Om)(() => u.sectionGroups.get().length),
                                c = (0, i.Om)(
                                    (e) => {
                                        const t = a.U2(u.sectionGroups.get(), e);
                                        if (!t) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, t, {
                                            sections: a.UI(t.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: a.UI(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, t.setupSelector, {
                                                states: a.UI(t.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: s.jv },
                                ),
                                _ = (0, i.Om)((e) => {
                                    if (0 === E(e)) return !0;
                                    const u = c(e),
                                        t = a.u4(u.sections, (e, u) => e + u.slots.length, 0);
                                    return 0 === t;
                                }),
                                d = (0, i.Om)(() => a.u4(u.sectionGroups.get(), (e, u) => e + u.sections.length, 0)),
                                E = (0, i.Om)((e) => c(e).sections.length),
                                m = (0, i.Om)(
                                    (e, u) => {
                                        const t = c(e),
                                            n = a.U2(t.sections, u);
                                        if (!n) throw Error(`No ammunition section found with index: ${u}`);
                                        return n;
                                    },
                                    { equals: s.jv },
                                ),
                                A = (0, i.Om)((e, u) => m(e, u).slots.length),
                                F = (0, i.Om)((e, u) => {
                                    const t = m(e, u).slots;
                                    return a.hX(t, (e) => Boolean(e) && !(0, o.j2)(e)).length;
                                }),
                                b = (0, i.Om)((e, u) => {
                                    const t = m(e, u).slots;
                                    return a.G(t, (e) => e.intCD > 0);
                                }),
                                D = (0, i.Om)(
                                    (e, u, t) => {
                                        const n = m(e, u),
                                            i = a.U2(n.slots, t);
                                        if (!i) throw Error(`No ammunition slot found with index: ${t}`);
                                        return i;
                                    },
                                    { equals: s.jv },
                                ),
                                g = (0, i.Om)(
                                    (e) => {
                                        const u = c(e).sections;
                                        return a.v(u, (e) => (0, l.YR)(e.type));
                                    },
                                    { equals: s.jv },
                                ),
                                p = (0, i.Om)(
                                    (e, u, t) => {
                                        const n = D(e, u, t);
                                        if (!n) throw Error(`No ammunition slot found with index: ${t}`);
                                        if (!n.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, n.specializations, {
                                            specializations: a.UI(n.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: s.jv },
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    groups: { length: n, group: c, isGroupEmpty: _ },
                                    sections: { allSectionsLength: d, length: E, section: m, IDs: g },
                                    slots: { length: A, filteredLength: F, slot: D, existFilled: b },
                                    specializations: p,
                                    isQFGMode: t,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            sectionSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionSelect',
                            ),
                            dragDropSwap: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onDragDropSwap',
                            ),
                            slotClear: e.createCallback((e) => Object.assign({}, e), 'ammunitionPanel.onSlotClear'),
                            sectionResized: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionResized',
                            ),
                            changeSetupIndex: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onChangeSetupIndex',
                            ),
                            specializationSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSpecializationSelect',
                            ),
                            escKeyDown: e.createCallbackNoArgs('onEscKeyDown'),
                        }),
                    ),
                    _ = c[0],
                    d = c[1];
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
                t(6483), t(8089), t(4598), t(3815), t(8526), t(5521), t(7727), t(6179), t(1922);
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
                var n = t(6483),
                    a = t.n(n),
                    i = t(6179),
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
                        base__noBG: 'Container_base__noBG_69',
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
                        withBackground: _ = !0,
                        onClick: d,
                    }) => {
                        const E = t && !c && !n;
                        return s().createElement(
                            'div',
                            {
                                className: a()(
                                    r.base,
                                    !e && r[`base__${o}`],
                                    u && r[`base__${u}`],
                                    E && r.base__selected,
                                    c && r['base__dragIn' + (t ? 'Active' : '')],
                                    !_ && r.base__noBG,
                                    l && r.base__disabled,
                                ),
                                onClick: d,
                            },
                            i,
                        );
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
                            b = (0, s.useMemo)(() => ({ backgroundImage: `url(${m})` }), [m]),
                            D = !F && Boolean(u) && e;
                        return r().createElement(
                            'div',
                            null,
                            D && r().createElement(l.a, { level: e }),
                            r().createElement('div', { className: a()(c, (t || n) && _), style: b }),
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
                            b = (0, a.useMemo)(() => {
                                let t = '';
                                A && (t = (r === s.cJ.Large || r === s.cJ.Huge ? s.cJ.Large : s.cJ.Medium) + '_');
                                const n = `${t}${e}_${u ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, u, r, A]),
                            D = (0, a.useMemo)(
                                () => ({ spec: e, isDyn: n, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, n, d],
                            );
                        if (!b) return null;
                        const g = o()(
                                `specialization-${e}`,
                                _.base,
                                A && _[`base__${r}`],
                                t && _.base__setup,
                                u && _.base__correct,
                            ),
                            p = o()(_.icon, A && _[`icon__${r}`]),
                            C = A ? '' : _.specializationWrapper,
                            h = i().createElement(
                                'div',
                                { key: e, className: g },
                                i().createElement('div', { className: _.glow }),
                                i().createElement('div', { className: p, style: b }),
                            );
                        return i().createElement(
                            c.t,
                            { args: D },
                            d && t
                                ? i().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: F,
                                      },
                                      h,
                                  )
                                : i().createElement('div', { className: C }, h),
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
                t.d(u, { U: () => D });
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
                    b = 'SwitchButton_number_8a',
                    D = ({ id: e, state: u, currentIndex: t, isHovered: i }) => {
                        const D = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            g = e === t,
                            p = !g && u === r.WARNING;
                        return a().createElement(
                            'div',
                            { className: s()(o, { [l]: g, [c]: p, [E]: i }) },
                            a().createElement('div', { className: _ }),
                            a().createElement('div', { className: d }),
                            a().createElement('div', { className: A }),
                            a().createElement('div', { className: m }),
                            a().createElement('div', { className: F }),
                            a().createElement('div', { style: D, className: b }),
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
                            b = F[0],
                            D = F[1],
                            g = (t + 1) % u,
                            p = (0, r.useCallback)(() => {
                                E || e({ groupId: m, currentIndex: g });
                            }, [m, E, g, e]),
                            C = (0, r.useCallback)(() => {
                                E || (D(!0), s.$.playHighlight());
                            }, [E]),
                            h = (0, r.useCallback)(() => {
                                E || D(!1);
                            }, [E]),
                            B = a()(c, E && _);
                        return o().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${m}`,
                                className: B,
                                onClick: p,
                                onMouseEnter: C,
                                onMouseLeave: h,
                                ref: A,
                            },
                            Array.from({ length: u }, (e, u) =>
                                o().createElement(l.U, {
                                    key: u,
                                    id: u,
                                    state: i.MH(n, u),
                                    currentIndex: t,
                                    isHovered: b,
                                }),
                            ),
                            E && o().createElement('div', { className: d }),
                        );
                    };
            },
            5918: (e, u, t) => {
                'use strict';
                t.d(u, { y: () => x });
                var n = t(4888),
                    a = t(7383),
                    i = t(1396),
                    s = t(3403),
                    r = t(6179),
                    o = t.n(r),
                    l = t(2558),
                    c = t(8934),
                    _ = t(3220),
                    d = t(5958);
                const E = 'BackEffects_shine_f6',
                    m = 'BackEffects_sparks_55',
                    A = 'BackEffects_nut_79',
                    F = 'BackEffects_wrench_5a',
                    b = { enterActive: 'BackEffects_shine__enterActive_54' },
                    D = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    g = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    p = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    C = [n.dZ, n.sH],
                    h = o().memo(({ in: e, actionType: u }) =>
                        o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                c.Z,
                                { in: e, timeout: d.Dp, classNames: b },
                                o().createElement('div', { className: E }),
                            ),
                            o().createElement(
                                c.Z,
                                { in: e, timeout: d.IG, classNames: D },
                                o().createElement('div', { className: m }),
                            ),
                            C.includes(u) &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        c.Z,
                                        { in: e, timeout: d.wx, classNames: g },
                                        o().createElement('div', { className: A }),
                                    ),
                                    o().createElement(
                                        c.Z,
                                        { in: e, timeout: d.Kz, classNames: p },
                                        o().createElement('div', { className: F }),
                                    ),
                                ),
                        ),
                    ),
                    B = 'ColorMask_base_60',
                    f = 'ColorMask_base__enterActive_62',
                    v = ({ inProp: e, maskImage: u }) =>
                        o().createElement(
                            c.Z,
                            { in: e, timeout: d.Qj, classNames: { enterActive: f } },
                            o().createElement('div', { className: B, style: { maskImage: `url(${u})` } }),
                        ),
                    S = {
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
                    w = { enter: S.base__enter, exit: S.base__enter },
                    x = (0, s.Pi)(
                        ({
                            children: e,
                            slotIndex: u,
                            uniqueKey: t,
                            slotType: s,
                            isEmpty: E = !1,
                            imageSource: m,
                            itemInstalledSetupIndex: A,
                        }) => {
                            const F = (0, _.t)().model.lastSlotAction.get(),
                                b = F.leftID,
                                D = F.rightID,
                                g = F.leftIntCD,
                                p = F.rightIntCD,
                                C = F.actionType,
                                B = F.intCD,
                                f = (0, r.useState)(!0),
                                x = f[0],
                                y = f[1],
                                I = (0, r.useState)(!0),
                                T = I[0],
                                k = I[1],
                                O = (0, r.useState)(m),
                                R = O[0],
                                L = O[1],
                                M = (0, r.useState)(t),
                                N = M[0],
                                P = M[1],
                                H = (0, r.useState)(A),
                                $ = H[0],
                                G = H[1],
                                j = (0, i.K)(),
                                z = (0, i.K)(),
                                W = [n._2, n.dZ, n.sH],
                                U = (B === t || B === N) && $ !== A && W.includes(C),
                                q = -1 === g || -1 === p,
                                X = s ? `base${s[0].toUpperCase() + s.slice(1)}` : 'base',
                                V = d.Sr[C] || 0;
                            (0, r.useEffect)(() => {
                                E || L(m);
                            }, [E, m]);
                            const Z = (0, r.useCallback)(
                                    (e) => {
                                        const t = Object.assign({}, w);
                                        switch (C) {
                                            case n.Xo: {
                                                const e = b === u ? d.mI.RIGHT : d.mI.LEFT,
                                                    n = D - b != 1 ? d.mI.SWAP : '';
                                                (t.enterDone = S[`${X}__enter${e}${n}`]),
                                                    (t.exit = S[`${X}__exit${e}${n}`]),
                                                    q &&
                                                        (E
                                                            ? (t.enterDone = S[`${X}__enter${d.mI.FADE}`])
                                                            : (t.exit = S[`${X}__exit${d.mI.FADE}`]));
                                                break;
                                            }
                                            case n._2:
                                                (t.enterDone = S[`${X}__enter${d.mI.DESTROY}`]),
                                                    (t.exit = S[`${X}__exit${d.mI.DESTROY}`]),
                                                    j.run(() => y(!0), d.YJ),
                                                    k(!0);
                                                break;
                                            case n.sH:
                                            case n.dZ:
                                                (t.enter = S[`${X}__enter${d.mI.DEMOUNT}${d.mI.FADE}`]),
                                                    (t.exit = S[`${X}__exit${d.mI.DEMOUNT}`]),
                                                    j.run(() => y(!0), d.Ij);
                                                break;
                                            case n.eC:
                                            case n.FR:
                                                if (s !== a.g9) {
                                                    const e = C === n.eC ? d.mI.FITTING : d.mI.FITTING_REMOVE;
                                                    (t.enter = S[`${X}__enter${e}`]),
                                                        (t.exit = S[`${X}__exit${e}`]),
                                                        (t.exitActive = S[`${X}__exitActive${d.mI.FITTING}`]);
                                                } else
                                                    (t.enterDone = S[`${X}__enter${d.mI.FADE}`]),
                                                        (t.exit = S[`${X}__exit${d.mI.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return o().cloneElement(e, { classNames: t, timeout: V });
                                    },
                                    [C, V, b, u, D, X, q, E, j, s],
                                ),
                                K = (0, r.useCallback)(
                                    (e) => {
                                        z.run(() => {
                                            (e.className = ''), e.classList.add(S.base), P(t), G(A);
                                        }, V);
                                    },
                                    [z, V, t, A],
                                ),
                                Y = (0, r.useCallback)(() => {
                                    y(!1), k(!1);
                                }, []);
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(
                                    l.Z,
                                    { component: null, childFactory: Z },
                                    o().createElement(
                                        c.Z,
                                        {
                                            key: t,
                                            timeout: V,
                                            classNames: w,
                                            onEntered: K,
                                            onExiting: Y,
                                            unmountOnExit: !0,
                                        },
                                        o().createElement('div', { className: S.base }, e),
                                    ),
                                ),
                                U &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(h, { in: x, actionType: C }),
                                        o().createElement(v, { inProp: T, maskImage: R }),
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
                t.d(u, { WI: () => s, YN: () => i, g9: () => a, yZ: () => r, zn: () => n });
                const n = 'optDevices',
                    a = 'shells',
                    i = 'battleAbilities',
                    s = 'toggleShells',
                    r = 'toggleCamouflage';
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
        (__webpack_require__.j = 434),
        (() => {
            var e = { 434: 0, 927: 0, 490: 0, 754: 0, 803: 0, 761: 0, 833: 0, 795: 0, 723: 0, 287: 0, 975: 0, 197: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(4727));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
