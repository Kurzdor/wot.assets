(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => c });
                var a = t(6483),
                    r = t.n(a),
                    n = t(7727),
                    i = t(6179),
                    o = t.n(i),
                    s = t(6880),
                    l = t(2106);
                const _ = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: _,
                    mixClass: c,
                    soundHover: d,
                    soundClick: E,
                    onMouseEnter: F,
                    onMouseMove: A,
                    onMouseDown: b,
                    onMouseUp: m,
                    onMouseLeave: g,
                    onClick: D,
                }) => {
                    const C = (0, i.useRef)(null),
                        B = (0, i.useState)(t),
                        v = B[0],
                        p = B[1],
                        h = (0, i.useState)(!1),
                        f = h[0],
                        w = h[1],
                        y = (0, i.useState)(!1),
                        k = y[0],
                        S = y[1],
                        L = (0, i.useCallback)(() => {
                            _ || (C.current && (C.current.focus(), p(!0)));
                        }, [_]),
                        x = (0, i.useCallback)(
                            (e) => {
                                v && null !== C.current && !C.current.contains(e.target) && p(!1);
                            },
                            [v],
                        ),
                        T = (0, i.useCallback)(
                            (e) => {
                                _ || (D && D(e));
                            },
                            [_, D],
                        ),
                        N = (0, i.useCallback)(
                            (e) => {
                                _ || (null !== d && (0, n.G)(d), F && F(e), S(!0));
                            },
                            [_, d, F],
                        ),
                        M = (0, i.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                _ || (m && m(e), w(!1));
                            },
                            [_, m],
                        ),
                        O = (0, i.useCallback)(
                            (e) => {
                                _ || (null !== E && (0, n.G)(E), b && b(e), t && L(), w(!0));
                            },
                            [_, E, b, L, t],
                        ),
                        U = (0, i.useCallback)(
                            (e) => {
                                _ || (g && g(e), w(!1));
                            },
                            [_, g],
                        ),
                        H = r()(
                            s.Z.base,
                            s.Z[`base__${a}`],
                            {
                                [s.Z.base__disabled]: _,
                                [s.Z[`base__${u}`]]: u,
                                [s.Z.base__focus]: v,
                                [s.Z.base__highlightActive]: f,
                                [s.Z.base__firstHover]: k,
                            },
                            c,
                        ),
                        I = r()(s.Z.state, s.Z.state__default);
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
                            p(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: C,
                                className: H,
                                onMouseEnter: N,
                                onMouseMove: M,
                                onMouseUp: P,
                                onMouseDown: O,
                                onMouseLeave: U,
                                onClick: T,
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
                                { className: I },
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
                _.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const c = (0, i.memo)(_);
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(r || (r = {}));
            },
            7405: (e, u, t) => {
                var a = t(6483),
                    r = t.n(a),
                    n = t(6179),
                    i = t.n(n),
                    o = t(329),
                    s = t(2372),
                    l = t(8460);
                const _ = ({
                    isDiscount: e,
                    isInteractiveDiscount: u,
                    size: t,
                    type: a,
                    isEnough: n,
                    value: _,
                    discountValue: c,
                    showPlus: d,
                    stockBackgroundName: E = o.we.Red,
                }) => {
                    const F = r()(l.Z.value, l.Z[`value__${a}`], !n && l.Z.value__notEnough),
                        A = r()(l.Z.icon, l.Z[`icon__${a}-${t}`]),
                        b = r()(l.Z.stock, c && l.Z.stock__indent, u && l.Z.stock__interactive),
                        m = d && _ > 0 && '+',
                        g = r()(l.Z.base, l.Z[`base__${t}`]);
                    return i().createElement(
                        'span',
                        { className: g },
                        i().createElement(
                            'span',
                            { className: F },
                            m,
                            i().createElement(s.A, { value: _, format: a === o.V2.gold ? 'gold' : 'integral' }),
                        ),
                        i().createElement('span', { className: A }),
                        e &&
                            i().createElement(
                                'span',
                                { className: b },
                                i().createElement('span', {
                                    className: l.Z.stockBackground,
                                    style: { backgroundImage: `url(R.images.gui.maps.icons.library.${E})` },
                                }),
                                Boolean(c) && c,
                            ),
                    );
                };
                _.defaultProps = { isEnough: !0 };
                i().memo(_);
            },
            329: (e, u, t) => {
                let a, r, n;
                t.d(u, { V2: () => r, we: () => n }),
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
                    })(n || (n = {}));
            },
            2372: (e, u, t) => {
                t.d(u, { A: () => i });
                var a = t(6179),
                    r = t.n(a),
                    n = t(4179);
                class i extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = n.B3.GOLD;
                        else e = n.B3.INTEGRAL;
                        const u = n.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                i.defaultProps = { format: 'integral' };
            },
            3495: (e, u, t) => {
                t.d(u, { Y: () => c });
                var a = t(5067),
                    r = t(6179),
                    n = t(1043),
                    i = t(5262);
                const o = a.O.client.getSize('rem'),
                    s = o.width,
                    l = o.height,
                    _ = Object.assign({ width: s, height: l }, (0, i.T)(s, l, n.j)),
                    c = (0, r.createContext)(_);
            },
            1039: (e, u, t) => {
                var a = t(6179),
                    r = t.n(a),
                    n = t(6536),
                    i = t(3495),
                    o = t(1043),
                    s = t(5262),
                    l = t(5067);
                (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(i.Y),
                        t = (0, a.useState)(u),
                        _ = t[0],
                        c = t[1],
                        d = (0, a.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                a = l.O.view.pxToRem(u);
                            c(Object.assign({ width: t, height: a }, (0, s.T)(t, a, o.j)));
                        }, []);
                    (0, n.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', d), [d]);
                    const E = (0, a.useMemo)(() => Object.assign({}, _), [_]);
                    return r().createElement(i.Y.Provider, { value: E }, e);
                });
            },
            6010: (e, u, t) => {
                var a = t(6179),
                    r = t(7382),
                    n = t(3495);
                const i = ['children'];
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, i);
                    const o = (0, a.useContext)(n.Y),
                        s = o.extraLarge,
                        l = o.large,
                        _ = o.medium,
                        c = o.small,
                        d = o.extraSmall,
                        E = o.extraLargeWidth,
                        F = o.largeWidth,
                        A = o.mediumWidth,
                        b = o.smallWidth,
                        m = o.extraSmallWidth,
                        g = o.extraLargeHeight,
                        D = o.largeHeight,
                        C = o.mediumHeight,
                        B = o.smallHeight,
                        v = o.extraSmallHeight,
                        p = { extraLarge: g, large: D, medium: C, small: B, extraSmall: v };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && l) return u;
                        if (t.medium && _) return u;
                        if (t.small && c) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && E) return (0, r.H)(u, t, p);
                        if (t.largeWidth && F) return (0, r.H)(u, t, p);
                        if (t.mediumWidth && A) return (0, r.H)(u, t, p);
                        if (t.smallWidth && b) return (0, r.H)(u, t, p);
                        if (t.extraSmallWidth && m) return (0, r.H)(u, t, p);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && g) return u;
                            if (t.largeHeight && D) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && B) return u;
                            if (t.extraSmallHeight && v) return u;
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
                t.d(u, { YN: () => a.Y });
                t(6010), t(1039);
                var a = t(3495);
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
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
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
                    n = t.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                            _ = e.note,
                            c = e.alert,
                            d = e.args,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, i);
                        const F = (0, r.useMemo)(() => {
                            const e = Object.assign({}, d, { body: t, header: l, note: _, alert: c });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [c, t, l, _, d]);
                        return n().createElement(
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
                    r = t(4179),
                    n = t(6179);
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
                            _ = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onClick,
                            E = e.ignoreShowDelay,
                            F = void 0 !== E && E,
                            A = e.ignoreMouseClick,
                            b = void 0 !== A && A,
                            m = e.decoratorId,
                            g = void 0 === m ? 0 : m,
                            D = e.isEnabled,
                            C = void 0 === D || D,
                            B = e.targetId,
                            v = void 0 === B ? 0 : B,
                            p = e.onShow,
                            h = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, i);
                        const w = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, n.useMemo)(() => v || (0, a.F)().resId, [v]),
                            k = (0, n.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(t, g, { isMouseEvent: !0, on: !0, arguments: o(r) }, y),
                                    p && p(),
                                    (w.current.isVisible = !0));
                            }, [t, g, r, y, p]),
                            S = (0, n.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        s(t, g, { on: !1 }, y),
                                        w.current.isVisible && h && h(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, g, y, h]),
                            L = (0, n.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', L, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', L, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === C && S();
                            }, [C, S]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return C
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(k, F ? 100 : 400)),
                                                      l && l(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              S(), null == _ || _(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === b && S(), null == d || d(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === b && S(), null == c || c(u), null == e || e(u);
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
                t(3649), t(728), t(4179);
                Date.now();
            },
            5067: (e, u, t) => {
                t.d(u, { O: () => q });
                var a = {};
                t.r(a), t.d(a, { mouse: () => c, onResize: () => l });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => a,
                        getMouseGlobalPosition: () => E,
                        getSize: () => d,
                        graphicsQuality: () => F,
                    });
                var n = {};
                t.r(n), t.d(n, { getBgUrl: () => b, getTextureUrl: () => A });
                var i = {};
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
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => S,
                        addPreloadTexture: () => w,
                        children: () => n,
                        displayStatus: () => m,
                        displayStatusIs: () => G,
                        events: () => g,
                        extraSize: () => Z,
                        forceTriggerMouseMove: () => $,
                        freezeTextureBeforeResize: () => M,
                        getBrowserTexturePath: () => k,
                        getDisplayStatus: () => V,
                        getScale: () => R,
                        getSize: () => x,
                        getViewGlobalPosition: () => N,
                        isEventHandled: () => W,
                        isFocused: () => H,
                        pxToRem: () => P,
                        remToPx: () => O,
                        resize: () => T,
                        sendEvent: () => f,
                        setAnimateWindow: () => U,
                        setEventHandled: () => I,
                        setInputPaddingsRem: () => y,
                        setSidePaddingsRem: () => L,
                        whenTutorialReady: () => j,
                    });
                const l = o('clientResized'),
                    _ = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const c = (function () {
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
                                    const n = `mouse${u}`,
                                        i = _[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, o),
                                        a(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(n, o),
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
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const F = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function A(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function b(e, u, t) {
                    return `url(${A(e, u, t)})`;
                }
                const m = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    D = ['args'];
                const C = 2,
                    B = 16,
                    v = 32,
                    p = 64,
                    h = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, D);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    f = {
                        close(e) {
                            h('popover' === e ? C : v);
                        },
                        minimize() {
                            h(p);
                        },
                        move(e) {
                            h(B, { isMouseEvent: !0, on: e });
                        },
                    };
                function w(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function y(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function k(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function S(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function T(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function N(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: O(u.x), y: O(u.y) };
                }
                function M() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function R() {
                    return viewEnv.getScale();
                }
                function P(e) {
                    return viewEnv.pxToRem(e);
                }
                function O(e) {
                    return viewEnv.remToPx(e);
                }
                function U(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function I() {
                    return viewEnv.setEventHandled();
                }
                function W() {
                    return viewEnv.isEventHandled();
                }
                function $() {
                    viewEnv.forceTriggerMouseMove();
                }
                function V() {
                    return viewEnv.getShowingStatus();
                }
                const G = Object.keys(m).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === m[u]), e), {}),
                    Z = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    j = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : g.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    q = { view: i, client: r };
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
                t.d(u, { D9: () => n, DA: () => r.D, tT: () => r.t });
                var a = t(2790),
                    r = (t(3469), t(2133), t(579), t(5360));
                t(9056);
                const n = a.Z;
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
                    n = t(7739),
                    i = t(5262),
                    o = t(6179),
                    s = t(3649);
                function l(e, u, t) {
                    const a = (0, o.useContext)(n.YN);
                    let l = Object.entries(a).filter(([e, u]) => !0 === u && e in i.u);
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
                t.d(u, { D: () => _, t: () => c });
                var a = t(7902),
                    r = t(8071),
                    n = t(6536),
                    i = t(4179),
                    o = t(7332),
                    s = t(6179);
                const l = i.Sw.instance;
                let _;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(_ || (_ = {}));
                const c = (e = 'model', u = _.Deep) => {
                    const t = (0, s.useState)(0),
                        i = (t[0], t[1]),
                        c = (0, s.useMemo)(() => (0, a.F)(), []),
                        d = c.caller,
                        E = c.resId,
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
                        b = A[0],
                        m = A[1],
                        g = (0, s.useRef)(-1);
                    return (
                        (0, n.Z)(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? _.Deep : _.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== _.None)
                            ) {
                                const t = (e) => {
                                        (0, o.kJ)(e) && u === _.Deep
                                            ? (e === b && i((e) => e + 1), m(e))
                                            : m(Object.assign([], e));
                                    },
                                    a = (0, o.U0)(e);
                                g.current = l.addCallback(a, t, E, u === _.Deep);
                            }
                        }),
                        (0, s.useEffect)(() => {
                            if (u !== _.None)
                                return () => {
                                    l.removeCallback(g.current, E);
                                };
                        }, [E, u]),
                        b
                    );
                };
            },
            9056: (e, u, t) => {
                var a = t(4179);
                t(6179);
                a.Sw.instance;
            },
            2790: (e, u, t) => {
                t.d(u, { Z: () => r });
                var a = t(6179);
                const r = (e) => {
                    const u = (0, a.useRef)();
                    return (
                        (0, a.useEffect)(() => {
                            u.current = e;
                        }, [e]),
                        u.current
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
                t.d(u, { HG: () => o, cg: () => n });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function n(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) (u += a[t]), (e -= r[t]);
                    return u;
                }
                const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) => (i ? `${e}` : n(e));
            },
            7727: (e, u, t) => {
                function a(e) {
                    engine.call('PlaySound', e);
                }
                t.d(u, { G: () => a });
            },
            3649: (e, u, t) => {
                let a;
                function r(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function n(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                t.d(u, { WU: () => r, e: () => n }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(a || (a = {}));
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
            },
            728: (e, u, t) => {
                let a;
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
                })(a || (a = {}));
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => n });
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
                        const n = a.O.view.addModelObserver(e, t, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                const n = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
                t.d(u, { Sw: () => n.Z, B3: () => l, Z5: () => i, B0: () => s, ry: () => g });
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
                var n = t(1358);
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
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    F = t(5067);
                const A = ['args'];
                function b(e, u, t, a, r, n, i) {
                    try {
                        var o = e[n](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(a, r);
                }
                const m = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                        var n = e.apply(u, t);
                                        function i(e) {
                                            b(n, a, r, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            b(n, a, r, i, o, 'throw', e);
                                        }
                                        i(void 0);
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
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    C = () => D(s.CLOSE),
                    B = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var v = t(7572);
                const p = r.instance,
                    h = {
                        DataTracker: n.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: _,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (e) => D(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => D(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                _ = o.y,
                                c = o.width,
                                d = o.height,
                                E = {
                                    x: F.O.view.pxToRem(l) + i.x,
                                    y: F.O.view.pxToRem(_) + i.y,
                                    width: F.O.view.pxToRem(c),
                                    height: F.O.view.pxToRem(d),
                                };
                            D(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: m(E),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, C);
                        },
                        handleViewEvent: D,
                        onBindingsReady: g,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                        ClickOutsideManager: p,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = h;
            },
            7332: (e, u, t) => {
                t.d(u, { Gd: () => s, U0: () => l, kJ: () => i, os: () => n });
                var a = t(7902),
                    r = t(8071);
                const n = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    i = (e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name,
                    o = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    s = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const a = (0, r.M)(`${e}.${t}`, window);
                                return n(a) ? u(e, t, a) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    l = (e) => {
                        const u = ((e) => {
                                const u = (0, a.F)(),
                                    t = u.caller,
                                    r = u.resId,
                                    n = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: n, modelPath: o(n, e || ''), resId: r };
                            })(),
                            t = u.modelPrefix,
                            i = e.split('.');
                        if (i.length > 0) {
                            const e = [i[0]];
                            return (
                                i.reduce((u, a) => {
                                    const i = (0, r.M)(o(t, `${u}.${a}`), window);
                                    return n(i) ? (e.push(i.id), `${u}.${a}.value`) : (e.push(a), `${u}.${a}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
            },
            8012: (e, u, t) => {
                var a = t(2344),
                    r = t(6179),
                    n = t.n(r);
                let i;
                !(function (e) {
                    (e.Modification = 'modification'),
                        (e.PairModification = 'pairModification'),
                        (e.ModificationWithFeature = 'modificationWithFeature');
                })(i || (i = {}));
                var o = t(2569),
                    s = t(9924);
                let l, _;
                !(function (e) {
                    (e.Persistent = 'persistent'), (e.Selectable = 'selectable'), (e.Changeable = 'changeable');
                })(l || (l = {})),
                    (function (e) {
                        (e.Restricted = 'restricted'),
                            (e.UnavailableLocked = 'unavailableLocked'),
                            (e.AvailablePurchase = 'availablePurchase'),
                            (e.Received = 'received');
                    })(_ || (_ = {}));
                var c = t(6483),
                    d = t.n(c),
                    E = t(3649),
                    F = t(2056),
                    A = t(7739);
                var b = t(3457),
                    m = t(7727),
                    g = t(2106);
                const D = {
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
                let C;
                !(function (e) {
                    (e.Button = 'button'), (e.Slot = 'slot');
                })(C || (C = {}));
                const B = () => {},
                    v = n().memo(
                        ({
                            active: e = !1,
                            className: u,
                            children: t,
                            toggleType: a = C.Button,
                            toggleButtonType: i = g.L.secondary,
                            onClick: o,
                            disabled: s,
                            soundClick: l = 'play',
                            soundHover: _ = 'highlight',
                            onMouseEnter: c = B,
                            onMouseDown: E = B,
                            onMouseUp: F = B,
                            onMouseLeave: A = B,
                        }) => {
                            const b = (0, r.useCallback)(
                                    (u) => {
                                        s || ((0, m.G)(l), o && o(u, e));
                                    },
                                    [o, s, e, l],
                                ),
                                v = (0, r.useCallback)(
                                    (e) => {
                                        s || ((0, m.G)(_), c && c(e));
                                    },
                                    [s, _, c],
                                ),
                                p = (0, r.useCallback)(
                                    (e) => {
                                        s ||
                                            ((1 !== e.button && 2 !== e.button) || (null !== l && (0, m.G)(l)),
                                            E && E(e));
                                    },
                                    [E, s, l],
                                ),
                                h = d()(D.base, u, D[`base__${a}`], e && D.base__active, s && D.base__disabled);
                            return n().createElement(
                                'div',
                                {
                                    className: h,
                                    onClick: b,
                                    onMouseEnter: v,
                                    onMouseUp: s ? B : F,
                                    onMouseDown: p,
                                    onMouseLeave: s ? B : A,
                                },
                                n().createElement('div', { className: D.content }, t),
                                a === C.Button &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', {
                                            className: d()(D.background, D[`background__${i}`]),
                                        }),
                                        n().createElement('div', { className: D.texture }),
                                    ),
                                n().createElement('div', { className: D.overlay }),
                                n().createElement('div', { className: D.indicator }),
                            );
                        },
                    );
                var p = t(6373),
                    h = t(5634);
                const f = {
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
                    y = R.strings.veh_post_progression.vehPostProgressionView.grid.featureButton.tooltip,
                    k = d()(f.buttonWrapper, f.buttonWrapper__select),
                    S = d()(f.buttonWrapper, f.buttonWrapper__change),
                    L = d()(f.buttonWrapper, f.buttonWrapper__persistent),
                    x = (0, r.memo)(
                        ({
                            id: e,
                            stepState: u,
                            actionState: t,
                            isDisabled: i,
                            isPrebattleSwitchEnabled: _,
                            isPrebattleSwitchLocked: c,
                            featureBgImageName: F,
                        }) => {
                            const A = (0, a.tT)('model.grid', a.DA.None),
                                m = A.onMainStepActionClick,
                                g = A.onPrebattleSwitchToggleClick,
                                D = t === l.Persistent,
                                C = (0, r.useCallback)(() => {
                                    g({ stepID: e, active: !_ });
                                }, [_, g, e]),
                                B = (0, r.useCallback)(() => m({ stepID: e }), [m, e]),
                                x = (0, s.Z)(['base'], f),
                                T = d()(
                                    x.base,
                                    f[`base__stepState${(0, E.e)(u)}`],
                                    f[`base__actionState${(0, E.e)(t)}`],
                                ),
                                N = (0, r.useContext)(o.m).progressionAvailability,
                                M = i || N !== h.G.Available,
                                R = D ? y.prebattleSwitch.header() : '',
                                P = (function (e, u, t) {
                                    return e
                                        ? (0, E.WU)(y.prebattleSwitch.body.$dyn(u), {
                                              tip: y.prebattleSwitch.bodyTip(),
                                          })
                                        : y.$dyn(t);
                                })(D, F, N),
                                O = D || (Boolean(P) && M);
                            return n().createElement(
                                p.i,
                                { header: R, body: P, isEnabled: O },
                                n().createElement(
                                    'div',
                                    { className: T },
                                    n().createElement(
                                        'div',
                                        { className: k },
                                        n().createElement(
                                            b.u5,
                                            {
                                                onClick: B,
                                                size: b.qE.extraSmall,
                                                type: b.L$.main,
                                                disabled: M,
                                                mixClass: f.buttonMix,
                                            },
                                            n().createElement('span', { className: f.buttonLabelWrapper }, w.select()),
                                        ),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: S },
                                        n().createElement(
                                            b.u5,
                                            {
                                                onClick: B,
                                                size: b.qE.extraSmall,
                                                type: b.L$.primary,
                                                disabled: M,
                                                mixClass: f.buttonMix,
                                            },
                                            n().createElement('span', { className: f.buttonLabelWrapper }, w.change()),
                                        ),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: L },
                                        n().createElement(
                                            v,
                                            { active: _ && !M, onClick: C, className: f.buttonMix, disabled: M || c },
                                            n().createElement(
                                                'span',
                                                { className: f.buttonLabelWrapper },
                                                w.prebattleSwitch(),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    );
                var T = t(9690);
                const N = ['children'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const P = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, N);
                    return n().createElement(
                        F.u,
                        M(
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
                const U = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const a = n().createElement('div', { className: t }, e);
                    if (u.header || u.body) return n().createElement(p.i, u, a);
                    const r = u.contentId,
                        i = u.args,
                        o = null == i ? void 0 : i.contentId;
                    return r || o
                        ? n().createElement(F.u, O({}, u, { contentId: r || o }), a)
                        : n().createElement(P, u, a);
                };
                let H, I, W, $;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Special = 'special'), (e.None = 'none');
                })(H || (H = {})),
                    (function (e) {
                        (e.Normal = 'normal'),
                            (e.Special = 'special'),
                            (e.SpecialReceived = 'specialReceived'),
                            (e.Unavailable = 'unavailable');
                    })(I || (I = {})),
                    (function (e) {
                        (e.Unlocked = 'unlocked'), (e.Locked = 'locked'), (e.Unavailable = 'unavailable');
                    })(W || (W = {})),
                    (function (e) {
                        (e.Normal = 'normal'), (e.Unavailable = 'unavailable'), (e.None = 'none');
                    })($ || ($ = {}));
                const V = {
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
                    G = R.strings.tooltips.vehPostProgressionView.unlockLevel,
                    Z = (0, r.memo)(
                        ({
                            unlockLevel: e,
                            backgroundType: u = H.Normal,
                            borderType: t = I.Normal,
                            numberType: a = W.Unlocked,
                            lockType: i = $.None,
                            isTooltipEnabled: o = !0,
                        }) => {
                            const s = d()(
                                    V.base,
                                    V[`base__backgroundType${(0, E.e)(u)}`],
                                    V[`base__borderType${(0, E.e)(t)}`],
                                    V[`base__numberType${(0, E.e)(a)}`],
                                    V[`base__lockType${(0, E.e)(i)}`],
                                ),
                                l = (0, r.useMemo)(
                                    () => ({ header: G.header(), body: (0, E.WU)(G.body(), { level: (0, T.HG)(e) }) }),
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
                                            className: d()(V.background, V[`background__${e}`]),
                                        }),
                                    ),
                                Object.values(I).map((e) =>
                                    n().createElement('div', { key: e, className: d()(V.border, V[`border__${e}`]) }),
                                ),
                                n().createElement('div', { className: V.level }, (0, T.HG)(e)),
                                n().createElement('div', { className: V.lock }),
                                o &&
                                    n().createElement(
                                        U,
                                        { tooltipArgs: l },
                                        n().createElement('div', { className: V.tooltipArea }),
                                    ),
                            );
                        },
                    ),
                    j = (0, r.memo)(({ stepState: e, unlockLevel: u, isDisabled: t }) => {
                        const a = ((e, u, t) =>
                                e !== _.Received || u !== h.G.Available || t ? I.Special : I.SpecialReceived)(
                                e,
                                (0, r.useContext)(o.m).progressionAvailability,
                                t,
                            ),
                            i = e === _.Received ? $.None : $.Normal,
                            s = e === _.Received ? W.Unlocked : W.Locked;
                        return n().createElement(Z, {
                            unlockLevel: u,
                            backgroundType: H.Special,
                            borderType: a,
                            numberType: s,
                            lockType: i,
                            isTooltipEnabled: e !== _.Received,
                        });
                    });
                var q = t(9953),
                    Y = t(8475);
                let z;
                !(function (e) {
                    (e.Firepower = 'firepower'),
                        (e.Survivability = 'survivability'),
                        (e.Mobility = 'mobility'),
                        (e.Stealth = 'stealth'),
                        (e.None = 'none');
                })(z || (z = {}));
                const K = 'RoleCategoryIcon_base_1c',
                    X = (0, r.memo)(({ roleCategory: e }) => {
                        const u = e !== z.None,
                            t = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: u
                                        ? `url(${R.images.gui.maps.icons.specialization.$dyn(`medium_${e}_on`)})`
                                        : '',
                                }),
                                [u, e],
                            );
                        return n().createElement('div', { className: K, style: t });
                    }),
                    Q = {
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
                    J = { enterActive: Q.animation__enterActive, exitActive: Q.animation__exitActive },
                    ee = (0, r.memo)(({ stepState: e, actionState: u, roleCategory: t = z.None, isDisabled: a }) => {
                        const i = (0, r.useContext)(o.m).progressionAvailability,
                            s = d()(
                                Q.base,
                                Q[`base__stepState${(0, E.e)(e)}`],
                                Q[`base__actionState${(0, E.e)(u)}`],
                                Q[`base__progressionAvailability${(0, E.e)(i)}`],
                                a && Q.base__disabled,
                            );
                        return n().createElement(
                            'div',
                            { className: s },
                            n().createElement('div', { className: Q.underlay }),
                            n().createElement(
                                'div',
                                { className: `${Q.wrapper} ${Q.wrapper__selected}` },
                                n().createElement(
                                    q.Z,
                                    { mode: 'out-in' },
                                    n().createElement(
                                        Y.Z,
                                        { key: t, timeout: 200, classNames: J },
                                        n().createElement(X, { roleCategory: t }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ue = 'AccentCorners_base_99',
                    te = 'AccentCorners_corner_49',
                    ae = 'AccentCorners_corner__topLeft_63',
                    re = 'AccentCorners_corner__topRight_f6',
                    ne = 'AccentCorners_corner__bottomRight_09',
                    ie = 'AccentCorners_corner__bottomLeft_1f',
                    oe = (0, r.memo)(() =>
                        n().createElement(
                            'div',
                            { className: ue },
                            n().createElement('div', { className: `${te} ${ae}` }),
                            n().createElement('div', { className: `${te} ${re}` }),
                            n().createElement('div', { className: `${te} ${ne}` }),
                            n().createElement('div', { className: `${te} ${ie}` }),
                        ),
                    ),
                    se = {
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
                    le = R.images.gui.maps.icons.vehPostProgression.actionItems.modificationWithFeature;
                (0, r.memo)(
                    ({
                        id: e,
                        isDisabled: u,
                        stepState: t,
                        actionState: a,
                        unlockLevel: i,
                        interactiveState: _,
                        roleCategory: c,
                        imageResName: b,
                        tooltipContentId: m,
                        isPrebattleSwitchEnabled: g,
                        isPrebattleSwitchLocked: D,
                    }) => {
                        const C = (0, r.useContext)(o.m).progressionAvailability,
                            B = (0, s.Z)(['base'], se),
                            v = (0, r.useContext)(A.YN),
                            p = d()(
                                B.base,
                                se[`base__stepState${(0, E.e)(t)}`],
                                se[`base__actionState${(0, E.e)(a)}`],
                                se[`base__interactiveState${(0, E.e)(_)}`],
                                se[`base__progressionAvailability${(0, E.e)(C)}`],
                                u && se.base__disabled,
                            ),
                            h = [l.Selectable, l.Changeable].includes(a),
                            f = ((e) =>
                                e.extraLarge ? le.c_192x120 : e.large || e.medium ? le.c_160x100 : le.c_120x80)(v),
                            w = (0, r.useMemo)(() => ({ backgroundImage: `url(${f.$dyn(b)})` }), [b, f]),
                            y = (0, r.useMemo)(() => ({ stepId: e }), [e]);
                        return n().createElement(
                            'div',
                            { className: p },
                            n().createElement('div', { className: se.glow }),
                            n().createElement('div', { className: se.underlay }),
                            n().createElement(
                                'div',
                                { className: se.outline },
                                n().createElement(
                                    'div',
                                    { className: se.accentCornersWrapper },
                                    n().createElement(oe, null),
                                ),
                            ),
                            n().createElement('div', { className: se.image, style: w }),
                            n().createElement('div', { className: se.disabledPattern }),
                            h && n().createElement('div', { className: se.selectedRoleSlotPattern }),
                            n().createElement('div', { className: `${se.topHighlight} ${se.topHighlight__disabled}` }),
                            n().createElement('div', { className: se.interactiveHighlight }),
                            n().createElement(
                                F.u,
                                { contentId: m, args: y },
                                n().createElement(
                                    'div',
                                    { className: se.content },
                                    h &&
                                        n().createElement(
                                            'div',
                                            { className: se.roleCategoryIconWrapper },
                                            n().createElement(ee, {
                                                stepState: t,
                                                actionState: a,
                                                roleCategory: c,
                                                isDisabled: u,
                                            }),
                                        ),
                                    n().createElement(
                                        'div',
                                        { className: se.featureButton },
                                        n().createElement(x, {
                                            id: e,
                                            stepState: t,
                                            actionState: a,
                                            isDisabled: u,
                                            isPrebattleSwitchEnabled: g,
                                            isPrebattleSwitchLocked: D,
                                            featureBgImageName: b,
                                        }),
                                    ),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: se.featureUnlockLevel },
                                n().createElement(j, { stepState: t, unlockLevel: i, isDisabled: u }),
                            ),
                            u && n().createElement('div', { className: se.alertImage }),
                        );
                    },
                );
                var _e = t(9338);
                const ce = R.strings.veh_post_progression.vehPostProgressionView.grid.restrictions.label;
                const de = {
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
                let Ee;
                !(function (e) {
                    (e.Feature = 'feature'), (e.PairModification = 'pairModification');
                })(Ee || (Ee = {}));
                (0, r.memo)(({ type: e, restrictions: u, unlockLevel: t }) => {
                    const a = (0, s.Z)(['base'], de),
                        r = d()(a.base, de[`base__type${(0, E.e)(e)}`]);
                    return n().createElement(
                        'div',
                        { className: r },
                        n().createElement('div', { className: `${de.border} ${de.border__main}` }),
                        n().createElement('div', { className: `${de.border} ${de.border__sideLeft}` }),
                        n().createElement('div', { className: `${de.border} ${de.border__sideRight}` }),
                        n().createElement(
                            'div',
                            { className: de.label },
                            (function (e) {
                                const u = e.allowedLevels,
                                    t = (0, _e.Zj)(u),
                                    a = Math.min(...t),
                                    r = Math.max(...t);
                                return a === r
                                    ? (0, E.WU)(ce.singleAllowedLevel(), { allowedLevel: (0, T.cg)(r) })
                                    : (0, E.WU)(ce.multipleAllowedLevels(), {
                                          minAllowedLevel: (0, T.cg)(a),
                                          maxAllowedLevel: (0, T.cg)(r),
                                      });
                            })(u),
                        ),
                        n().createElement(
                            'div',
                            { className: de.unlockLevel },
                            n().createElement(Z, {
                                unlockLevel: t,
                                isTooltipEnabled: !1,
                                backgroundType: H.None,
                                borderType: I.Unavailable,
                                numberType: W.Unavailable,
                                lockType: $.Unavailable,
                            }),
                        ),
                    );
                });
                var Fe = t(8247);
                const Ae = {
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
                    be =
                        ((0, r.memo)(
                            ({
                                id: e,
                                stepState: u,
                                actionType: t,
                                level: i,
                                isCurrent: s,
                                isClickable: l,
                                interactiveState: _,
                            }) => {
                                const c = (0, r.useContext)(o.m).progressionType,
                                    A = (0, a.tT)('model.grid', a.DA.None).onMainStepSelectClick,
                                    b = d()(
                                        Ae.base,
                                        Ae[`base__stepState${(0, E.e)(u)}`],
                                        Ae[`base__interactiveState${(0, E.e)(_)}`],
                                        Ae[`base__actionType${(0, E.e)(t)}`],
                                        s && Ae.base__current,
                                        l && Ae.base__clickable,
                                    ),
                                    g = (0, r.useCallback)(() => {
                                        l && (0, m.G)('highlight');
                                    }, [l]),
                                    D = (0, r.useCallback)(() => {
                                        l && ((0, m.G)('ev_pp_level_click'), A({ stepID: e }));
                                    }, [l, A, e]),
                                    C = (0, r.useMemo)(() => ({ stepId: e }), [e]),
                                    B = c !== Fe.e.Comparison;
                                return n().createElement(
                                    F.u,
                                    {
                                        contentId:
                                            R.views.lobby.veh_post_progression.tooltip.PostProgressionLevelTooltipView(
                                                'resId',
                                            ),
                                        args: C,
                                    },
                                    n().createElement(
                                        'div',
                                        { className: b, onClick: D, onMouseEnter: g },
                                        n().createElement('div', {
                                            className: `${Ae.background} ${Ae.background__received}`,
                                        }),
                                        n().createElement('div', {
                                            className: `${Ae.background} ${Ae.background__receivedSpecial}`,
                                        }),
                                        n().createElement('div', {
                                            className: `${Ae.background} ${Ae.background__current}`,
                                        }),
                                        n().createElement('div', {
                                            className: `${Ae.background} ${Ae.background__selected}`,
                                        }),
                                        n().createElement('div', {
                                            className: `${Ae.background} ${Ae.background__lastSelected}`,
                                        }),
                                        n().createElement('div', {
                                            className: `${Ae.background} ${Ae.background__disabled}`,
                                        }),
                                        n().createElement('div', {
                                            className: `${Ae.background} ${Ae.background__disabledHover}`,
                                        }),
                                        n().createElement('div', { className: Ae.labelWrapper }, (0, T.HG)(i)),
                                        B && n().createElement('div', { className: Ae.lock }),
                                    ),
                                );
                            },
                        ),
                        {
                            base: 'ProgressLine_base_9e',
                            line: 'ProgressLine_line_9a',
                            base__stepStateReceived: 'ProgressLine_base__stepStateReceived_32',
                            base__interactiveStateSelected: 'ProgressLine_base__interactiveStateSelected_67',
                            base__interactiveStateLastSelected: 'ProgressLine_base__interactiveStateLastSelected_e5',
                            glow: 'ProgressLine_glow_a9',
                            base__current: 'ProgressLine_base__current_e4',
                        }),
                    me =
                        ((0, r.memo)(({ stepState: e, isCurrent: u, interactiveState: t }) => {
                            const a = d()(
                                be.base,
                                be[`base__stepState${(0, E.e)(e)}`],
                                be[`base__interactiveState${(0, E.e)(t)}`],
                                u && be.base__current,
                            );
                            return n().createElement(
                                'div',
                                { className: a },
                                n().createElement('div', { className: be.line }),
                                n().createElement('div', { className: be.glow }),
                            );
                        }),
                        R.images.gui.maps.icons.vehPostProgression.vehiclePostProgressionView.grid.progression.numbers,
                        'Checkmark_base_38'),
                    ge = ((0, r.memo)(() => n().createElement('div', { className: me })), 'DiscardButton_base_d3'),
                    De = 'DiscardButton_icon_43',
                    Ce = R.strings.veh_post_progression.vehPostProgressionView.grid.pairModification.discardButton,
                    Be = R.strings.veh_post_progression.vehPostProgressionView.grid.pairModification.buyButton.tooltip;
                (0, r.memo)(({ onClick: e, isDisabled: u = !1 }) => {
                    const t = (0, r.useContext)(o.m).progressionAvailability;
                    return n().createElement(
                        p.i,
                        { header: u ? void 0 : Ce.tooltip.header(), body: u ? Be.$dyn(t) : Ce.tooltip.body() },
                        n().createElement(
                            'div',
                            null,
                            n().createElement(
                                b.u5,
                                { onClick: e, type: b.L$.secondary, mixClass: ge, disabled: u },
                                n().createElement('div', { className: De }),
                            ),
                        ),
                    );
                });
                t(7405), t(329), t(2372), t(3137);
                const ve = 'BuyButton_base_7f',
                    pe = 'BuyButton_base__disabled_2e',
                    he = 'BuyButton_back_c0',
                    fe = 'BuyButton_texture_21',
                    we = 'BuyButton_state_2c',
                    ye = 'BuyButton_stateHighlightHover_71',
                    ke = 'BuyButton_stateHighlightActive_ff',
                    Se = 'BuyButton_stateDisabled_8b',
                    Le = 'BuyButton_content_a8';
                (0, r.memo)(({ children: e, isDisabled: u = !1, onClick: t }) => {
                    const a = (0, r.useContext)(o.m).progressionAvailability,
                        i =
                            R.strings.veh_post_progression.vehPostProgressionView.grid.pairModification.buyButton.tooltip.$dyn(
                                a,
                            ),
                        s = (0, r.useCallback)(
                            (e) => {
                                u || (t && t(e));
                            },
                            [u, t],
                        ),
                        l = (0, r.useCallback)(() => {
                            u || (0, m.G)('highlight');
                        }, [u]),
                        _ = (0, r.useCallback)(() => {
                            u || (0, m.G)('play');
                        }, [u]),
                        c = d()(ve, u && pe);
                    return n().createElement(
                        p.i,
                        { body: i, isEnabled: Boolean(i) && u },
                        n().createElement(
                            'div',
                            { className: c, onMouseEnter: l, onMouseDown: _, onClick: s },
                            n().createElement('div', { className: he }),
                            n().createElement('span', { className: fe }),
                            n().createElement(
                                'span',
                                { className: we },
                                n().createElement('span', { className: ye }),
                                n().createElement('span', { className: ke }),
                                n().createElement('span', { className: Se }),
                            ),
                            n().createElement('span', { className: Le }, e),
                        ),
                    );
                }),
                    R.images.gui.maps.icons.vehPostProgression.actionItems.pairModifications;
                let xe;
                !(function (e) {
                    (e.Left = 'left'), (e.Center = 'center'), (e.Right = 'right');
                })(xe || (xe = {}));
                const Te = {
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
                };
                (0, r.memo)(({ isLineVisible: e = !0 }) => {
                    const u = (0, s.Z)(['base'], Te),
                        t = d()(u.base, e && Te.base__lineVisible);
                    return n().createElement(
                        'div',
                        { className: t },
                        n().createElement('div', { className: Te.underlay }),
                        n().createElement('div', { className: `${Te.line} ${Te.line__top}` }),
                        n().createElement('div', { className: `${Te.line} ${Te.line__bottom}` }),
                        n().createElement(
                            'div',
                            { className: Te.label },
                            R.strings.veh_post_progression.vehPostProgressionView.grid.pairModificationSeparator.label(),
                        ),
                    );
                }),
                    (0, r.memo)(({ stepState: e, unlockLevel: u }) => {
                        const t = e === _.UnavailableLocked ? $.Normal : $.None,
                            a = e === _.UnavailableLocked ? W.Locked : W.Unlocked;
                        return n().createElement(Z, {
                            unlockLevel: u,
                            backgroundType: H.Normal,
                            borderType: I.Normal,
                            numberType: a,
                            lockType: t,
                            isTooltipEnabled: e !== _.Received,
                        });
                    });
                function Ne(e) {
                    return `${e}%`;
                }
                const Me = {
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
                    Re = (0, r.memo)(() => {
                        const e = (0, s.Z)(['base'], Me);
                        return n().createElement(
                            'div',
                            { className: e.base },
                            n().createElement('div', { className: `${Me.sector} ${Me.sector__topLeft}` }),
                            n().createElement('div', { className: `${Me.sector} ${Me.sector__topRight}` }),
                            n().createElement('div', { className: `${Me.sector} ${Me.sector__bottomRight}` }),
                            n().createElement('div', { className: `${Me.sector} ${Me.sector__bottomLeft}` }),
                        );
                    }),
                    Pe = 'CaretRail_base_84',
                    Oe = 'CaretRail_caretWrapper_01',
                    Ue = 'CaretRail_base__animatingAppear_20',
                    He = 'CaretRail_base__animatingDisappear_a7',
                    Ie = 'CaretRail_base__visible_8f',
                    We = (e) => ('number' == typeof e ? `${e}rem` : e),
                    $e = (0, r.memo)(
                        ({
                            isVisible: e = !0,
                            caretWidth: u = '100%',
                            caretHeight: t = '100%',
                            caretPositionX: i = 0,
                            caretPositionY: o = 0,
                        }) => {
                            const s = (0, a.D9)(e),
                                l = (0, a.D9)(i),
                                _ = s && !e,
                                c = !s && e,
                                E = _ ? l || 0 : i,
                                F = d()(Pe, e && Ie, c && Ue, _ && He),
                                A = (0, r.useMemo)(
                                    () => ({ height: We(t), width: We(u), transform: `translate(${We(E)}, ${We(o)})` }),
                                    [t, u, E, o],
                                );
                            return n().createElement(
                                'div',
                                { className: F },
                                n().createElement('div', { className: Oe, style: A }, n().createElement(Re, null)),
                            );
                        },
                    ),
                    Ve = 'SelectionFrame_base_46',
                    Ge = 'SelectionFrame_hoverCaretWrapper_a0',
                    Ze = 'SelectionFrame_hoverCaretWrapper__visible_ca',
                    je =
                        ((0, r.memo)(({ selectedIdx: e, hoveredIdx: u, length: t }) => {
                            const a = -1 !== e,
                                i = Math.floor(100 / t),
                                o = 100 * e,
                                s = (0, r.useCallback)(
                                    (e) => ({ width: Ne(i), transform: `translateX(${Ne(100 * e)})` }),
                                    [i],
                                );
                            return n().createElement(
                                'div',
                                { className: Ve },
                                n().createElement($e, { isVisible: a, caretWidth: Ne(i), caretPositionX: Ne(o) }),
                                Array(t)
                                    .fill(null)
                                    .map((e, t) =>
                                        n().createElement(
                                            'div',
                                            { key: t, style: s(t), className: d()(Ge, u === t && Ze) },
                                            n().createElement(Re, null),
                                        ),
                                    ),
                            );
                        }),
                        {
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
                        });
                let qe;
                !(function (e) {
                    (e.Left = 'Left'), (e.Right = 'Right');
                })(qe || (qe = {}));
                const Ye = [28, -8, -43],
                    ze = (e, u) => {
                        const t = Ye[u];
                        return e === qe.Left ? -t : t;
                    };
                (0, r.memo)(({ direction: e, index: u, stepState: t }) => {
                    const a = (0, s.Z)(['base'], je),
                        i = d()(
                            je.base,
                            a.base,
                            je[`base__stepState${(0, E.e)(t)}`],
                            je[`base__direction${e}`],
                            je[`base__position${u + 1}`],
                        ),
                        o = (0, r.useMemo)(() => ({ transform: `rotate(${ze(e, u)}deg)` }), [e, u]);
                    return n().createElement(
                        'div',
                        { className: i },
                        n().createElement('div', { className: je.lineBase }),
                        n().createElement('div', { style: o, className: je.line }),
                    );
                });
                let Ke;
                !(function (e) {
                    (e.Left = 'left'), (e.Right = 'right');
                })(Ke || (Ke = {}));
                let Xe, Qe, Je;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Selected = 'selected'), (e.LastSelected = 'lastSelected');
                })(Xe || (Xe = {})),
                    (function (e) {
                        (e.Normal = 'normal'),
                            (e.Faded = 'faded'),
                            (e.Selected = 'selected'),
                            (e.SelectedFaded = 'selectedFaded'),
                            (e.SelectedHighlighted = 'selectedHighlighted');
                    })(Qe || (Qe = {})),
                    (function (e) {
                        (e.Normal = 'normal'),
                            (e.Faded = 'faded'),
                            (e.Selected = 'selected'),
                            (e.SelectedFaded = 'selectedFaded'),
                            (e.SelectedHighlighted = 'selectedHighlighted');
                    })(Je || (Je = {}));
                _.UnavailableLocked;
                _.UnavailableLocked, _.AvailablePurchase;
            },
            2569: (e, u, t) => {
                t.d(u, { m: () => o });
                var a = t(6179),
                    r = t.n(a),
                    n = t(5634),
                    i = t(8247);
                const o = r().createContext({
                    progressionType: i.e.Configuration,
                    progressionState: n.T.Initial,
                    progressionAvailability: n.G.Available,
                });
            },
            3137: (e, u, t) => {
                t(329).V2.credits;
            },
            8247: (e, u, t) => {
                let a;
                t.d(u, { e: () => a }),
                    (function (e) {
                        (e.Configuration = 'Configuration'), (e.Comparison = 'Comparison');
                    })(a || (a = {}));
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
                    for (var [u, t, a] = deferred[s], n = !0, i = 0; i < u.length; i++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
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
        (__webpack_require__.j = 183),
        (() => {
            var e = { 183: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, i, o] = t,
                        s = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < n.length; s++)
                        (r = n[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [428], () => __webpack_require__(8012));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
