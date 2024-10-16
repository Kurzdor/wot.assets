(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    i = u(7727),
                    s = u(6179),
                    r = u.n(s),
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
                    onMouseMove: b,
                    onMouseDown: A,
                    onMouseUp: F,
                    onMouseLeave: D,
                    onClick: p,
                }) => {
                    const g = (0, s.useRef)(null),
                        C = (0, s.useState)(u),
                        h = C[0],
                        B = C[1],
                        f = (0, s.useState)(!1),
                        S = f[0],
                        v = f[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                h && null !== g.current && !g.current.contains(e.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, s.useEffect)(() => {
                            B(u);
                        }, [u]),
                        r().createElement(
                            'div',
                            {
                                ref: g,
                                className: a()(
                                    o.Z.base,
                                    o.Z[`base__${n}`],
                                    c && o.Z.base__disabled,
                                    t && o.Z[`base__${t}`],
                                    h && o.Z.base__focus,
                                    S && o.Z.base__highlightActive,
                                    _,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== d && (0, i.G)(d), m && m(e));
                                },
                                onMouseMove: function (e) {
                                    b && b(e);
                                },
                                onMouseUp: function (e) {
                                    c || (F && F(e), v(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== E && (0, i.G)(E),
                                        A && A(e),
                                        u && (c || (g.current && (g.current.focus(), B(!0)))),
                                        v(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (D && D(e), v(!1));
                                },
                                onClick: function (e) {
                                    c || (p && p(e));
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
                    i = u(6179),
                    s = u.n(i),
                    r = u(9734);
                const o = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        l.apply(null, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        u = e.value,
                        n = e.isEmpty,
                        i = e.fadeInAnimation,
                        c = e.hide,
                        _ = e.maximumNumber,
                        d = e.className,
                        E = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, o);
                    const m = n ? null : u,
                        b = 'string' == typeof m;
                    if ((m && !b && m < 0) || 0 === m) return null;
                    const A = m && !b && m > _,
                        F = a()(
                            r.Z.base,
                            r.Z[`base__${t}`],
                            i && r.Z.base__animated,
                            c && r.Z.base__hidden,
                            !m && r.Z.base__pattern,
                            n && r.Z.base__empty,
                            d,
                        );
                    return s().createElement(
                        'div',
                        l({ className: F }, E),
                        s().createElement('div', { className: r.Z.bg }),
                        s().createElement('div', { className: r.Z.pattern }),
                        s().createElement(
                            'div',
                            { className: a()(r.Z.value, b && r.Z.value__text) },
                            A ? _ : m,
                            A && s().createElement('span', { className: r.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            3495: (e, t, u) => {
                u.d(t, { Y: () => _ });
                var n = u(3138),
                    a = u(6179),
                    i = u(1043),
                    s = u(5262);
                const r = n.O.client.getSize('rem'),
                    o = r.width,
                    l = r.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, i.j)),
                    _ = (0, a.createContext)(c);
            },
            1039: (e, t, u) => {
                u(3138), u(6536), u(6179), u(3495), u(1043), u(5262);
            },
            6010: (e, t, u) => {
                var n = u(6179),
                    a = u(7382),
                    i = u(3495);
                const s = ['children'],
                    r = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, s);
                        const r = (0, n.useContext)(i.Y),
                            o = r.extraLarge,
                            l = r.large,
                            c = r.medium,
                            _ = r.small,
                            d = r.extraSmall,
                            E = r.extraLargeWidth,
                            m = r.largeWidth,
                            b = r.mediumWidth,
                            A = r.smallWidth,
                            F = r.extraSmallWidth,
                            D = r.extraLargeHeight,
                            p = r.largeHeight,
                            g = r.mediumHeight,
                            C = r.smallHeight,
                            h = r.extraSmallHeight,
                            B = { extraLarge: D, large: p, medium: g, small: C, extraSmall: h };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && o) return t;
                            if (u.large && l) return t;
                            if (u.medium && c) return t;
                            if (u.small && _) return t;
                            if (u.extraSmall && d) return t;
                        } else {
                            if (u.extraLargeWidth && E) return (0, a.H)(t, u, B);
                            if (u.largeWidth && m) return (0, a.H)(t, u, B);
                            if (u.mediumWidth && b) return (0, a.H)(t, u, B);
                            if (u.smallWidth && A) return (0, a.H)(t, u, B);
                            if (u.extraSmallWidth && F) return (0, a.H)(t, u, B);
                            if (
                                !(
                                    u.extraLargeWidth ||
                                    u.largeWidth ||
                                    u.mediumWidth ||
                                    u.smallWidth ||
                                    u.extraSmallWidth
                                )
                            ) {
                                if (u.extraLargeHeight && D) return t;
                                if (u.largeHeight && p) return t;
                                if (u.mediumHeight && g) return t;
                                if (u.smallHeight && C) return t;
                                if (u.extraSmallHeight && h) return t;
                            }
                        }
                        return null;
                    };
                (r.defaultProps = {
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
                }),
                    (0, n.memo)(r);
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
                u.d(t, { YN: () => n.Y }), u(6010), u(1039);
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
            7078: (e, t, u) => {
                u.d(t, { t: () => o });
                var n = u(6179),
                    a = u.n(n),
                    i = u(2056);
                const s = ['children'];
                function r() {
                    return (
                        (r = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        r.apply(null, arguments)
                    );
                }
                const o = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
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
                            u,
                        ),
                        t,
                    );
                };
            },
            3415: (e, t, u) => {
                u.d(t, { l: () => l });
                var n = u(6179),
                    a = u.n(n),
                    i = u(7078),
                    s = u(6373),
                    r = u(2056);
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(s.i, t, n);
                    const l = t.contentId;
                    return l ? a().createElement(r.u, o({}, t, { contentId: l }), n) : a().createElement(i.t, t, n);
                };
            },
            6373: (e, t, u) => {
                u.d(t, { i: () => l });
                var n = u(2056),
                    a = u(6179),
                    i = u.n(a);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function r() {
                    return (
                        (r = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        r.apply(null, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            u = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            d = e.args,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, s);
                        const m = (0, a.useMemo)(() => {
                            const e = Object.assign({}, d, { body: u, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, u, l, c, d]);
                        return i().createElement(
                            n.u,
                            r(
                                {
                                    contentId:
                                        ((b = null == d ? void 0 : d.hasHtmlContent),
                                        b ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: m,
                                },
                                E,
                            ),
                            t,
                        );
                        var b;
                    };
            },
            2056: (e, t, u) => {
                u.d(t, { u: () => l });
                var n = u(7902),
                    a = u(9916),
                    i = u(6179);
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
                            b = e.ignoreMouseClick,
                            A = void 0 !== b && b,
                            F = e.decoratorId,
                            D = void 0 === F ? 0 : F,
                            p = e.isEnabled,
                            g = void 0 === p || p,
                            C = e.targetId,
                            h = void 0 === C ? 0 : C,
                            B = e.onShow,
                            f = e.onHide,
                            S = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, s);
                        const v = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, i.useMemo)(() => h || (0, n.F)().resId, [h]),
                            x = (0, i.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (o(u, D, { isMouseEvent: !0, on: !0, arguments: r(a) }, w),
                                    B && B(),
                                    (v.current.isVisible = !0));
                            }, [u, D, a, w, B]),
                            T = (0, i.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        o(u, D, { on: !1 }, w),
                                        v.current.isVisible && f && f(),
                                        (v.current.isVisible = !1);
                                }
                            }, [u, D, w, f]),
                            y = (0, i.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(v.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const e = v.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, i.useEffect)(() => {
                                !1 === g && T();
                            }, [g, T]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        window.removeEventListener('mouseleave', T), T();
                                    }
                                ),
                                [T],
                            ),
                            g
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
                                                  T(), null == c || c(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === A && T(), null == d || d(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === A && T(), null == _ || _(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          S,
                                      ),
                                  )
                                : t
                        );
                        var I;
                    };
            },
            1856: (e, t, u) => {
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
                u.d(t, { U: () => s });
                var n = u(3138);
                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: u = i, context: s = 'model' } = {}) {
                    const r = new Map();
                    function o(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? r.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = r.get(t);
                                void 0 !== u && u(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = u(t),
                            a = s.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, a);
                    };
                    return {
                        subscribe: (u, a) => {
                            const i = 'string' == typeof a ? `${s}.${a}` : s,
                                o = n.O.view.addModelObserver(i, t, !0);
                            return r.set(o, u), e && u(l(a)), o;
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
                            for (
                                var e,
                                    u = (function (e, t) {
                                        var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (u) return (u = u.call(e)).next.bind(u);
                                        if (
                                            Array.isArray(e) ||
                                            (u = (function (e, t) {
                                                if (e) {
                                                    if ('string' == typeof e) return a(e, t);
                                                    var u = {}.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === u && e.constructor && (u = e.constructor.name),
                                                        'Map' === u || 'Set' === u
                                                            ? Array.from(e)
                                                            : 'Arguments' === u ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                                              ? a(e, t)
                                                              : void 0
                                                    );
                                                }
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
                                    })(r.keys());
                                !(e = u()).done;

                            )
                                o(e.value, t);
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, t, u) => {
                u.d(t, { q: () => o });
                var n = u(4598),
                    a = u(9174),
                    i = u(6179),
                    s = u.n(i),
                    r = u(8246);
                const o = () => (e, t) => {
                    const u = (0, i.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, i.useRef)([]),
                                E = (u, i, s) => {
                                    var o;
                                    const l = r.U(i),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === u ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        E = (e) => d.current.push(e),
                                        m = e({
                                            mode: u,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const i = null != t ? t : _(e),
                                                        s = a.LO.box(i, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : _(e),
                                                        s = a.LO.box(i, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = _(t);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = a.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            i[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                    {
                                                        const i = e,
                                                            s = Object.entries(i),
                                                            r = s.reduce(
                                                                (e, [t, u]) => ((e[u] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        s.forEach(([t, u]) => {
                                                                            r[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: E,
                                        }),
                                        b = { mode: u, model: m, externalModel: c, cleanup: E };
                                    return {
                                        model: m,
                                        controls: 'mocks' === u && s ? s.controls(b) : t(b),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                m = (0, i.useRef)(!1),
                                b = (0, i.useState)(o),
                                A = b[0],
                                F = b[1],
                                D = (0, i.useState)(() => E(o, l, _)),
                                p = D[0],
                                g = D[1];
                            return (
                                (0, i.useEffect)(() => {
                                    m.current ? g(E(A, l, _)) : (m.current = !0);
                                }, [_, A, l]),
                                (0, i.useEffect)(() => {
                                    F(o);
                                }, [o]),
                                (0, i.useEffect)(
                                    () => () => {
                                        p.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [p],
                                ),
                                s().createElement(u.Provider, { value: p }, c)
                            );
                        },
                        () => (0, i.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
                u.r(t),
                    u.d(t, { mouse: () => c, off: () => o, on: () => r, onResize: () => i, onScaleUpdated: () => s });
                var n = u(2472),
                    a = u(1176);
                const i = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    r = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
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
                                            s = l[t]((e) => u([e, 'outside']));
                                        function r(e) {
                                            u([e, 'inside']);
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
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => i,
                        graphicsQuality: () => r,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = u(527),
                    a = u(2493);
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
                u.d(t, { O: () => i });
                var n = u(5959),
                    a = u(514);
                const i = { view: u(7641), client: n, sound: a.ZP };
            },
            514: (e, t, u) => {
                u.d(t, { ZP: () => s });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    s = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
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
                        addModelObserver: () => _,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => v,
                        events: () => i.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => b,
                        isEventHandled: () => B,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => p,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => x,
                    });
                var n = u(3722),
                    a = u(6112),
                    i = u(6538),
                    s = u(8566);
                const r = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, r);
                }
                function c(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function _(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, r);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function b(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
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
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(a.W).reduce(
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
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                u.d(t, { qP: () => i });
                const n = ['args'],
                    a = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            u[n] = e[n];
                                        }
                                    return u;
                                })(t, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    i = {
                        close(e) {
                            a('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(e) {
                            a(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                function n() {
                    return !1;
                }
                u.d(t, { jv: () => n }), console.log;
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
                u.d(t, { Z: () => a });
                var n = u(6179);
                const a = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            4532: (e, t, u) => {
                u.d(t, { M: () => a });
                var n = u(6179);
                const a = (e, t = []) => {
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
                };
            },
            3815: (e, t, u) => {
                u.d(t, { z: () => i });
                var n = u(6179);
                const a = [];
                function i(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), a)
                    );
                }
            },
            8526: (e, t, u) => {
                u.d(t, { gd: () => r });
                var n = u(3138),
                    a = u(5521),
                    i = (u(9916), u(6179));
                const s = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function r(e = a.n.NONE, t = s, u = !1, r = !1) {
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
                                if (!r && n.O.view.isEventHandled()) return;
                                n.O.view.setEventHandled(), t(a), u && a.stopPropagation();
                            }
                        }
                    }, [t, e, u, r]);
                }
            },
            5415: (e, t, u) => {
                u.d(t, { GS: () => l });
                var n = u(6179),
                    a = u(7739),
                    i = u(1043);
                let s, r, o;
                !(function (e) {
                    (e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.j.small.width)] = 'Small'),
                        (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                        (e[(e.Large = i.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.width)] = 'Small'),
                            (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                            (e[(e.Large = i.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                    })(r || (r = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.height)] = 'Small'),
                            (e[(e.Medium = i.j.medium.height)] = 'Medium'),
                            (e[(e.Large = i.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.height)] = 'ExtraLarge');
                    })(o || (o = {}));
                const l = () => {
                    const e = (0, n.useContext)(a.YN),
                        t = e.width,
                        u = e.height,
                        i = ((e) => {
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
                                    return r.ExtraLarge;
                                case e.largeWidth:
                                    return r.Large;
                                case e.mediumWidth:
                                    return r.Medium;
                                case e.smallWidth:
                                    return r.Small;
                                case e.extraSmallWidth:
                                    return r.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), r.ExtraSmall;
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
                    return { mediaSize: i, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            2039: (e, t, u) => {
                u.d(t, { k: () => a });
                var n = u(6179);
                const a = (e) => {
                    (0, n.useEffect)(() => e, []);
                };
            },
            1396: (e, t, u) => {
                u.d(t, { K: () => s });
                var n = u(6179),
                    a = u(2039);
                const i = 0;
                function s() {
                    const e = (0, n.useRef)(i);
                    return (
                        (0, a.k)(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (t, u) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (e.current = i), t();
                                        }, u));
                                },
                                clear: () => {
                                    window.clearTimeout(e.current), (e.current = i);
                                },
                                get isRunning() {
                                    return e.current !== i;
                                },
                            }),
                            [],
                        )
                    );
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
                u.d(t, { G: () => r, U2: () => a, UI: () => s, hX: () => o, u4: () => c, v: () => l });
                var n = u(8968);
                function a(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                const i = a;
                function s(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function r(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let u = 0; u < e.length; u++) if (t(i(e, u), u, e)) return !0;
                    return !1;
                }
                function o(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const u = [];
                    for (let a = 0; a < e.length; a++) {
                        var n;
                        const i = null == (n = e[a]) ? void 0 : n.value;
                        t(i, a, e) && u.push(i);
                    }
                    return u;
                }
                function l(e, t) {
                    return (function (e, t, u) {
                        const n = [];
                        for (let a = 0; a < e.length; a++) {
                            const s = i(e, a);
                            t(s, a, e) && n.push(u(s, a, e));
                        }
                        return n;
                    })(e, n.C, t);
                }
                function c(e, t, u) {
                    if (Array.isArray(e)) return e.reduce(t, u);
                    let n = u;
                    for (let u = 0; u < e.length; u++) n = t(n, i(e, u), u, e);
                    return n;
                }
            },
            1641: (e, t, u) => {
                let n;
                u.d(t, { t: () => n }),
                    (function (e) {
                        (e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH');
                    })(n || (n = {}));
            },
            8968: (e, t, u) => {
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
                u.d(t, { Uw: () => E, WU: () => i, e: () => s, v2: () => a });
                var n = u(1281);
                let a;
                function i(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function s(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                const r = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e, t, u) => {
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
                    c = (e, t, u = a.left) => e.split(t).reduce(u === a.left ? o : l, []),
                    _ = (() => {
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
                    d = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (e, t, u) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            u && e in u
                                ? u[e]
                                : ((e, t = a.left) => {
                                      const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return d.includes(u)
                                          ? _(e)
                                          : 'ja' === u
                                            ? (0, n.D4)()
                                                  .parse(e)
                                                  .map((e) => r(e))
                                            : ((e, t = a.left) => {
                                                  let u = [];
                                                  const n =
                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                      i = r(e);
                                                  return (
                                                      c(i, /( )/, t).forEach((e) => (u = u.concat(c(e, n, a.left)))), u
                                                  );
                                              })(e, t);
                                  })(e, t),
                        );
            },
            1358: (e, t, u) => {
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
                u.d(t, { Sw: () => i.Z, B0: () => r, c9: () => p, ry: () => D });
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
                var i = u(1358),
                    s = u(8613);
                let r;
                var o;
                ((o = r || (r = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = u(5521),
                    m = u(3138);
                const b = ['args'];
                function A(e, t, u, n, a, i, s) {
                    try {
                        var r = e[i](s),
                            o = r.value;
                    } catch (e) {
                        return void u(e);
                    }
                    r.done ? t(o) : Promise.resolve(o).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            u[n] = e[n];
                                        }
                                    return u;
                                })(t, b);
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
                    g = () => p(r.CLOSE),
                    C = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var h = u(7572);
                const B = a.instance,
                    f = {
                        DataTracker: i.Z,
                        ViewModel: h.Z,
                        ViewEventType: r,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => p(r.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => p(r.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            p(r.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), i) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            p(r.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: F(E),
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
                        onBindingsReady: D,
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
                        ClickOutsideManager: B,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = f;
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
            7271: (e, t, u) => {
                var n = u(6483),
                    a = u.n(n),
                    i = u(6373),
                    s = u(3138),
                    r = u(6179),
                    o = u.n(r),
                    l = u(7841);
                let c;
                !(function (e) {
                    (e.Info = 'info'), (e.Close = 'close'), (e.Leaderboard = 'leaderboard');
                })(c || (c = {})),
                    o().memo(function ({ className: e, type: t, caption: u, onClick: n, tooltipBody: _ }) {
                        const d = (0, r.useState)(!1),
                            E = d[0],
                            m = d[1],
                            b = (0, r.useState)(!1),
                            A = b[0],
                            F = b[1];
                        return o().createElement(
                            i.i,
                            { isEnabled: Boolean(_), body: _ },
                            o().createElement(
                                'div',
                                {
                                    className: a()(
                                        l.Z.base,
                                        l.Z[`base__${t}`],
                                        E && l.Z.base__hover,
                                        A && l.Z.base__active,
                                        e,
                                    ),
                                    onMouseEnter: () => {
                                        s.O.sound.play.highlight(), m(!0);
                                    },
                                    onMouseLeave: () => {
                                        m(!1), F(!1);
                                    },
                                    onMouseDown: () => F(!0),
                                    onMouseUp: () => F(!1),
                                    onClick: () => {
                                        s.O.sound.play.click(), n();
                                    },
                                },
                                o().createElement('div', { className: a()(l.Z.icon, l.Z[`icon__${t}`]) }),
                                o().createElement('div', { className: a()(l.Z.iconHover, l.Z[`iconHover__${t}`]) }),
                                o().createElement('div', { className: l.Z.caption }, u),
                                t === c.Leaderboard &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: a()(l.Z.icon, l.Z.icon__url) }),
                                        o().createElement('div', { className: a()(l.Z.iconHover, l.Z.iconHover__url) }),
                                    ),
                            ),
                        );
                    });
            },
            8485: (e, t, u) => {
                var n = u(6179),
                    a = u.n(n);
                let i;
                !(function (e) {
                    (e.Hangar = 'hangar'),
                        (e.Setup = 'setup'),
                        (e.Compare = 'compare'),
                        (e.Battle = 'battle'),
                        (e.Respawn = 'respawn'),
                        (e.Prebattle = 'prebattle');
                })(i || (i = {}));
                var s = u(3403);
                const r = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    o = (e) => e === i.Battle || e === i.Prebattle,
                    l = (e) => o(e) || e === i.Respawn;
                var c = u(6483),
                    _ = u.n(c),
                    d = (u(7271), u(4598)),
                    E = u(3815),
                    m = u(8526),
                    b = u(5521),
                    A = u(7727),
                    F = u(7739);
                let D;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(D || (D = {}));
                function p(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return g(e, t);
                                var u = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === u && e.constructor && (u = e.constructor.name),
                                    'Map' === u || 'Set' === u
                                        ? Array.from(e)
                                        : 'Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                          ? g(e, t)
                                          : void 0
                                );
                            }
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
                function g(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const C = (e, t = []) => {
                        const u = document.getElementById('root');
                        u && (u.style.cursor = e ? 'grabbing' : 'default');
                        for (var n, a = p(t); !(n = a()).done; ) {
                            const t = n.value,
                                u = document.getElementById(t);
                            u && (u.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    h = (e, t, u) => {
                        let n = '',
                            a = 8e3;
                        for (var i, s = p(u); !(i = s()).done; ) {
                            const e = i.value,
                                u = Math.abs(e.centerX - t);
                            u < a && ((n = e.id), (a = u));
                        }
                        return n;
                    },
                    B = (e, t) => {
                        const u = t.find((t) => t.id === e);
                        return u ? u.centerX : 0;
                    };
                let f, S;
                !(function (e) {
                    (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                })(f || (f = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(S || (S = {}));
                const v = (e) => `panel-${e}-section`,
                    w = (e, t) => {
                        const u = v(e),
                            n = t.filter((e) => e !== u);
                        return { selfId: u, blockOnGrabIds: ['setup-content', ...n] };
                    },
                    x = ({ baseId: e, slotsLength: t, handleSwap: u, setIsExitBlocked: a, syncInitiator: i }) => {
                        const s = ((e, t, u) => {
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
                                    c = (0, n.useCallback)((e, t) => {
                                        if (a.current) {
                                            const u = h(0, t, a.current);
                                            u !== i.current.prevPotentialDropId &&
                                                ((i.current.prevPotentialDropId = u),
                                                o({ activeDragId: e, potentialDropId: u }));
                                        }
                                    }, []),
                                    _ = (0, n.useCallback)((e, t) => {
                                        if (a.current && t) {
                                            const u = i.current,
                                                n = h(0, t, a.current);
                                            (u.dropId = n),
                                                (u.dragId = e),
                                                (u.prevPotentialDropId = ''),
                                                o({ activeDragId: e, potentialDropId: '' }),
                                                n !== e && (0, A.G)('cons_equipment_swipe');
                                        }
                                    }, []),
                                    d = (0, n.useCallback)(() => {
                                        const e = i.current,
                                            t = e.dragId,
                                            u = e.dropId,
                                            n = e.prevPotentialDropId;
                                        (t || u || n) &&
                                            ((i.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            o({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    E = (0, n.useCallback)(
                                        (e) => {
                                            const t = i.current.dropId;
                                            t && t !== e ? u(e, t) : d();
                                        },
                                        [d, u],
                                    ),
                                    m = (0, n.useCallback)((e, t) => {
                                        const u = a.current.find((t) => t.id === e);
                                        u && t && (u.centerX = t);
                                    }, []),
                                    b = (0, n.useCallback)(
                                        (e, t) => {
                                            const u = t.dragId,
                                                n = t.currentCenterX;
                                            switch (e) {
                                                case S.Ready:
                                                    return m(u, n);
                                                case S.DragStart:
                                                    return l(u);
                                                case S.Drag:
                                                    return c(u, n);
                                                case S.Drop:
                                                    return _(u, n);
                                                case S.DropExit:
                                                    return E(u);
                                                default:
                                                    return void console.warn('Unknown grabber action', e);
                                            }
                                        },
                                        [l, c, _, E, m],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        if (e !== a.current.length) {
                                            const u = new Array(e).fill(null);
                                            a.current = u.map((e, u) => ({ id: `${t}-${u}`, centerX: 0 }));
                                        }
                                    }, [e, t]),
                                    {
                                        dragState: r,
                                        handleGrabberAction: b,
                                        getForceCenterX: (0, n.useCallback)((e) => {
                                            const t = i.current,
                                                u = t.dragId,
                                                n = t.dropId;
                                            return e === u ? B(n, a.current) : e === n ? B(u, a.current) : 0;
                                        }, []),
                                        resetDragResults: d,
                                    }
                                );
                            })(t, e, u),
                            r = s.dragState,
                            o = s.handleGrabberAction,
                            l = s.getForceCenterX,
                            c = s.resetDragResults,
                            _ = (0, n.useCallback)(
                                (e, t) => {
                                    if (a)
                                        switch (e) {
                                            case S.DragStart:
                                            case S.Drag:
                                                a(!0);
                                                break;
                                            default:
                                                a(!1);
                                        }
                                    o(e, t);
                                },
                                [o, a],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                a && a(!1);
                            }, [a]),
                            (0, n.useEffect)(() => c, [i, c]),
                            { handleGrabberAction: _, dragState: r, getForceCenterX: l }
                        );
                    };
                var T = u(3215),
                    y = u(9480),
                    I = u(3946);
                const O = (0, T.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    state: e.object('state'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                u = (0, I.Om)(() => t.sectionGroups.get().length),
                                n = (0, I.Om)(
                                    (e) => {
                                        const u = y.U2(t.sectionGroups.get(), e);
                                        if (!u) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, u, {
                                            sections: y.UI(u.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: y.UI(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, u.setupSelector, {
                                                states: y.UI(u.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: d.jv },
                                ),
                                a = (0, I.Om)((e) => n(e).sections.length),
                                i = (0, I.Om)(
                                    (e, t) => {
                                        const u = n(e),
                                            a = y.U2(u.sections, t);
                                        if (!a) throw Error(`No ammunition section found with index: ${t}`);
                                        return a;
                                    },
                                    { equals: d.jv },
                                ),
                                s = (0, I.Om)((e, t) => i(e, t).slots.length),
                                o = (0, I.Om)((e, t) => {
                                    const u = i(e, t).slots;
                                    return y.hX(u, (e) => Boolean(e) && !r(e)).length;
                                }),
                                l = (0, I.Om)((e, t) => {
                                    const u = i(e, t).slots;
                                    return y.G(u, (e) => e.intCD > 0);
                                }),
                                c = (0, I.Om)(
                                    (e, t, u) => {
                                        const n = i(e, t),
                                            a = y.U2(n.slots, u);
                                        if (!a) throw Error(`No ammunition slot found with index: ${u}`);
                                        return a;
                                    },
                                    { equals: d.jv },
                                ),
                                _ = (0, I.Om)(
                                    (e) => {
                                        const t = n(e).sections;
                                        return y.v(t, (e) => v(e.type));
                                    },
                                    { equals: d.jv },
                                ),
                                E = (0, I.Om)(
                                    (e, t, u) => {
                                        const n = c(e, t, u);
                                        if (!n) throw Error(`No ammunition slot found with index: ${u}`);
                                        if (!n.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, n.specializations, {
                                            specializations: y.UI(n.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: d.jv },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: u, group: n },
                                    sections: { length: a, section: i, IDs: _ },
                                    slots: { length: s, filteredLength: o, slot: c, existFilled: l },
                                    specializations: E,
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
                    k = (O[0], O[1]);
                var L = u(1856);
                const N = (0, n.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: u }) => {
                    const i = (0, n.useRef)(null),
                        s = (0, n.useRef)(!1);
                    (0, n.useEffect)(() => {
                        s.current = !0;
                    }, [e, t]);
                    const r = (0, n.useCallback)(() => {
                        s.current && u(), (s.current = !1);
                    }, [u]);
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
                        l = (0, n.useMemo)(() => ({ width: t }), [t]);
                    return a().createElement(
                        'div',
                        { className: 'Border_base_f9' },
                        a().createElement(
                            'div',
                            { ref: i, className: 'Border_border_83', style: o },
                            a().createElement(
                                'div',
                                { className: 'Border_wrapper_17' },
                                a().createElement('div', { className: 'Border_active_e8', style: l }),
                            ),
                        ),
                    );
                });
                var P = u(3415);
                const M = ({ roleSkill: e, tooltipId: t, tooltipHeader: u, tooltipBody: i, className: s }) => {
                    const r = (0, n.useMemo)(
                        () => ({
                            args: { tooltipId: t, roleSkill: e, header: u, body: i, hasHtmlContent: !0 },
                            header: u,
                            body: i,
                            ignoreShowDelay: !0,
                        }),
                        [e, u, i, t],
                    );
                    return a().createElement(
                        P.l,
                        { tooltipArgs: r, className: _()('RoleSkillSlot_base_c4', s) },
                        a().createElement('div', {
                            className: 'RoleSkillSlot_icon_79',
                            style: { backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})` },
                        }),
                    );
                };
                var $ = u(3138);
                const H = (0, n.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: u }) => {
                    const i = (0, n.useState)({ offset: e, slotWidth: t }),
                        s = i[0],
                        r = i[1],
                        o = (0, n.useRef)({ initialized: !1, offset: e, slotWidth: t });
                    (0, n.useEffect)(() => {
                        let u = o.current.initialized;
                        !u && e && ((u = !0), r({ offset: e, slotWidth: t })),
                            (o.current = { initialized: u, offset: e, slotWidth: t });
                    }, [e, t]),
                        (0, n.useEffect)(() => {
                            u || r(o.current);
                        }, [u]);
                    const l = (0, n.useMemo)(() => {
                            const e = s.slotWidth + 25;
                            return { left: s.offset, width: e, backgroundSize: `${$.O.view.pxToRem(e)}rem 100%` };
                        }, [s.offset, s.slotWidth]),
                        c = !u && s.offset === o.current.offset,
                        d = _()(
                            'SlotGlow_glow_a9',
                            o.current.initialized && 'SlotGlow_glow__initialized_8d',
                            c ? 'SlotGlow_glow__shown_f2' : 'SlotGlow_glow__hidden_94',
                        );
                    return a().createElement(
                        'div',
                        { className: 'SlotGlow_base_40' },
                        a().createElement('div', { className: d, style: l }),
                    );
                });
                var j = u(4532),
                    z = u(5262),
                    G = u(3649);
                function W(e, t, u) {
                    const a = (0, n.useContext)(F.YN);
                    let i = Object.entries(a).filter(([e, t]) => !0 === t && e in z.u);
                    return (
                        u && (i = i.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const n = i.map((e) =>
                                _()(t[((e, t) => e + '__' + t)(u, e[0])], t[((e, t) => e + (0, G.e)(t))(u, e[0])]),
                            );
                            return (e[u] = _()(t[u], ...n)), e;
                        }, {})
                    );
                }
                const U = (e, t) => {
                    const u = [];
                    for (let n = 0; n < e; n++) u.push(t(n));
                    return u;
                };
                var V = u(6373),
                    q = u(2558),
                    Z = u(8934);
                const X = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    K = ({ children: e, index: t, setSetupSwitching: u, disabled: i = !1 }) => {
                        const s = (0, n.useRef)(1 - t),
                            r = (0, n.useMemo)(() => {
                                const e = (u = t) === (n = s.current) ? '' : u > n ? 'down' : 'up';
                                var u, n;
                                const a = e && (0, G.e)(e);
                                return i ? {} : { enter: X[`base__enter${a}`], exit: X[`base__exit${a}`] };
                            }, [t, i]);
                        return (
                            (s.current = t),
                            a().createElement(
                                q.Z,
                                { className: X.base },
                                a().createElement(
                                    Z.Z,
                                    {
                                        timeout: 300,
                                        key: t,
                                        classNames: r,
                                        onEnter: () => u(!0),
                                        onExited: () => u(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    },
                    Y = a().memo(({ text: e }) =>
                        a().createElement(
                            'div',
                            { className: 'KeyboardKey_base_57' },
                            a().createElement('div', { className: 'KeyboardKey_back_43' }, e),
                        ),
                    ),
                    Q = 'SetupSwitchHotkey_plus_f0',
                    J = a().memo(({ hotKeys: e }) =>
                        a().createElement(
                            'div',
                            { className: 'SetupSwitchHotkey_base_4c' },
                            e.map((e, t) => {
                                if (!e) return null;
                                const u = e.value;
                                return 0 === t
                                    ? a().createElement(Y, { key: t, text: u })
                                    : a().createElement(
                                          'div',
                                          { key: t, className: 'SetupSwitchHotkey_hotKeyWrapper_8d' },
                                          a().createElement(
                                              'div',
                                              { className: 'SetupSwitchHotkey_plusWrapper_f0' },
                                              a().createElement('div', {
                                                  className: `${Q} SetupSwitchHotkey_plus__horizontal_e0`,
                                              }),
                                              a().createElement('div', {
                                                  className: `${Q} SetupSwitchHotkey_plus__vertical_5b`,
                                              }),
                                          ),
                                          a().createElement(Y, { text: u }),
                                      );
                            }),
                        ),
                    ),
                    ee = 'shells',
                    te = 'battleAbilities',
                    ue = 'toggleShells';
                var ne = u(2056);
                const ae = a().memo(function ({ panelType: e }) {
                    return a().createElement(
                        'div',
                        { className: 'HWSection_base_31' },
                        a().createElement(
                            ne.u,
                            {
                                contentId: R.views.halloween.lobby.tooltips.AbilityTooltip('resId'),
                                targetId:
                                    e !== i.Setup ? R.views.halloween.lobby.widgets.TankSetupView('resId') : void 0,
                                args: { abilityName: 'nitro' },
                            },
                            a().createElement(
                                'div',
                                { className: 'HWSection_nitro_91' },
                                a().createElement('div', { className: 'HWSection_shadow_f7' }),
                            ),
                        ),
                    );
                });
                var ie = u(9987);
                const se = ({
                        binding: e,
                        text: t = '',
                        classMix: u,
                        alignment: i = G.v2.left,
                        formatWithBrackets: s,
                    }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const r = s && e ? (0, G.WU)(t, e) : t;
                        return a().createElement(
                            n.Fragment,
                            null,
                            r.split('\n').map((t, s) =>
                                a().createElement(
                                    'div',
                                    { className: _()('FormatText_base_d0', u), key: `${t}-${s}` },
                                    (0, G.Uw)(t, i, e).map((e, t) =>
                                        a().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    re = (0, n.memo)(({ panelType: e, text: t, parentRef: u, isTruncated: s = !1, show: r = !1 }) => {
                        const o = (0, n.useRef)(!1),
                            l = (0, n.useState)(!1),
                            c = l[0],
                            d = l[1];
                        (0, n.useEffect)(() => {
                            u || (r && !o.current && (o.current = !0), d(r));
                        }, [r, u]);
                        const E = (0, n.useCallback)(() => {
                                (o.current = !0), d(!0);
                            }, []),
                            m = (0, n.useCallback)(() => {
                                d(!1);
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = u && u.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', E),
                                        e.addEventListener('mouseleave', m),
                                        () => {
                                            e.removeEventListener('mouseenter', E),
                                                e.removeEventListener('mouseleave', m);
                                        }
                                    );
                            }, [u, E, m]),
                            a().createElement(
                                'div',
                                { className: _()('TopLabel_base_7f', o.current && 'TopLabel_base__ready_00') },
                                a().createElement(
                                    'div',
                                    {
                                        className: _()(
                                            'TopLabel_text_d0',
                                            e !== i.Setup && 'TopLabel_text__hangar_36',
                                            s && 'TopLabel_text__truncated_29',
                                            r && c ? 'TopLabel_text__shown_25' : 'TopLabel_text__hidden_79',
                                        ),
                                    },
                                    t,
                                ),
                            )
                        );
                    }),
                    oe = 'notUsableSection';
                let le;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(le || (le = {}));
                const ce = 'tooltip_watched';
                let _e, de, Ee, me;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(_e || (_e = {})),
                    (function (e) {
                        (e.HangarView = 'hangar'),
                            (e.SetupView = 'setup_view'),
                            (e.ProgressView = 'progress_view'),
                            (e.RewardsView = 'rewards_view'),
                            (e.RewardsSelectionView = 'rewards_selection_view'),
                            (e.SkillsView = 'skills_view'),
                            (e.AwardsView = 'awards_view'),
                            (e.ContainerView = 'container_view');
                    })(de || (de = {})),
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
                    })(Ee || (Ee = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(me || (me = {}));
                const be = () => Date.now(),
                    Ae = (e, t) => {
                        const u = ((e, t) => {
                                const u = (0, n.useCallback)(
                                    (u, n = le.Info, a) => {
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
                            })(e, t),
                            a = (0, n.useRef)(new Map()),
                            i = (0, n.useRef)(new Map()),
                            s = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, be());
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
                                        i.current.set(e, be());
                                },
                                [a, i],
                            ),
                            l = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const u = i.current.get(e);
                                    if (void 0 === u) return;
                                    i.current.delete(e);
                                    const n = be() - u;
                                    a.current.set(e, t + n);
                                },
                                [a, i],
                            ),
                            c = (0, n.useCallback)(
                                (e, t = 0, n, s) => {
                                    const r = a.current.get(e);
                                    if (void 0 === r) return;
                                    void 0 !== i.current.get(e) && l(e), a.current.delete(e);
                                    const o = (be() - r) / 1e3;
                                    o <= t ||
                                        ((s = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(s, o)),
                                        u(e, n, s));
                                },
                                [a, i, u, l],
                            );
                        return [(e) => s(e), (e, t, u, n) => c(e, t, u, n), () => r(), (e) => o(e), (e) => l(e)];
                    },
                    Fe = a().memo(function ({ className: e, children: t }) {
                        const u = ((e, t, u, a) => {
                                const i = ((e) => {
                                        const t = Ae(e, 'metrics'),
                                            u = t[0],
                                            a = t[1],
                                            i = t[2],
                                            s = t[3],
                                            r = t[4],
                                            o = (0, n.useCallback)(
                                                (e) => {
                                                    const t = e.action,
                                                        u = e.timeLimit,
                                                        n = e.logLevel;
                                                    a(
                                                        t,
                                                        u,
                                                        n,
                                                        (({
                                                            partnerID: e,
                                                            item: t,
                                                            parentScreen: u,
                                                            itemState: n,
                                                            info: a,
                                                        }) => ({
                                                            item: t,
                                                            partnerID: e || null,
                                                            parent_screen: u || null,
                                                            item_state: n || null,
                                                            additional_info: a || null,
                                                        }))(e),
                                                    );
                                                },
                                                [a],
                                            );
                                        return [(e) => u(e), (e) => o(e), () => i(), (e) => s(e), (e) => r(e)];
                                    })('epic_battle'),
                                    s = i[0],
                                    r = i[1];
                                return [
                                    (0, n.useCallback)(() => s(ce), [s]),
                                    (0, n.useCallback)(
                                        () =>
                                            r({
                                                action: ce,
                                                timeLimit: 2,
                                                item: e,
                                                parentScreen: t,
                                                itemState: u,
                                                info: a,
                                            }),
                                        [r, e, t, u, a],
                                    ),
                                ];
                            })(Ee.SkillOrderTooltip, de.SetupView),
                            i = u[0],
                            s = u[1];
                        return a().createElement(
                            ne.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                                onMouseEnter: i,
                                onMouseLeave: s,
                            },
                            a().createElement('div', { className: e }, t),
                        );
                    });
                var De = u(7902);
                const pe = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var ge = u(6536),
                    Ce = u(9916);
                const he = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Be = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    fe = Ce.Sw.instance;
                let Se;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Se || (Se = {}));
                const ve = (e = 'model', t = Se.Deep) => {
                        const u = (0, n.useState)(0),
                            a = (u[0], u[1]),
                            i = (0, n.useMemo)(() => (0, De.F)(), []),
                            s = i.caller,
                            r = i.resId,
                            o = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                                [s, e],
                            ),
                            l = (0, n.useState)(() =>
                                ((e) => {
                                    const t = pe(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return he(t) ? t.value : t;
                                })(
                                    ((e) =>
                                        ((e, t) =>
                                            e.split('.').reduce((e, t) => {
                                                const u = pe(`${e}.${t}`, window);
                                                return he(u) ? ((e, t) => `${e}.${t}.value`)(e, t) : `${e}.${t}`;
                                            }))(e))(o),
                                ),
                            ),
                            c = l[0],
                            _ = l[1],
                            d = (0, n.useRef)(-1);
                        return (
                            (0, ge.Z)(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? Se.Deep : Se.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== Se.None)
                                ) {
                                    const u = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === Se.Deep
                                                ? (e === c && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        n = ((e) => {
                                            const t = ((e) => {
                                                    const t = (0, De.F)(),
                                                        u = t.caller,
                                                        n = t.resId,
                                                        a =
                                                            window.__feature && window.__feature !== u && u
                                                                ? `subViews.${u}`
                                                                : '';
                                                    return { modelPrefix: a, modelPath: Be(a, ''), resId: n };
                                                })(),
                                                u = t.modelPrefix,
                                                n = e.split('.');
                                            if (n.length > 0) {
                                                const e = [n[0]];
                                                return (
                                                    n.reduce((t, n) => {
                                                        const a = pe(Be(u, `${t}.${n}`), window);
                                                        return he(a)
                                                            ? (e.push(a.id), `${t}.${n}.value`)
                                                            : (e.push(n), `${t}.${n}`);
                                                    }),
                                                    e.reduce((e, t) => e + '.' + t)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    d.current = fe.addCallback(n, u, r, t === Se.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (t !== Se.None)
                                    return () => {
                                        fe.removeCallback(d.current, r);
                                    };
                            }, [r, t]),
                            c
                        );
                    },
                    we = () => a().createElement('div', { className: 'SlotDivider_base_60' }),
                    xe = ({ wrapper: e, children: t, when: u, withProps: n }) =>
                        u ? a().createElement(e, n, t) : a().createElement(a().Fragment, null, t),
                    Te = {
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
                    ye = ({
                        activeDragId: e,
                        slotType: t,
                        isSelected: u,
                        isBorderActive: n,
                        children: i,
                        panelType: s,
                        isDisabled: r,
                        isPotentialDrop: o,
                        onClick: l,
                    }) => {
                        const c = _()(
                            Te.base,
                            !e && Te[`base__${s}`],
                            t && Te[`base__${t}`],
                            u && !o && !n && Te.base__selected,
                            o && Te['base__dragIn' + (u ? 'Active' : '')],
                            r && Te.base__disabled,
                        );
                        return a().createElement('div', { className: c, onClick: l }, i);
                    },
                    Ie = {
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
                    Oe = a().memo(({ isTemporary: e, overlayType: t, overlaySource: u }) => {
                        const i = _()(Ie.base, e && Ie.base__fitting),
                            s = _()(Ie.icon, Ie[`icon__${t}`]),
                            r = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: s, style: r }),
                        );
                    }),
                    ke = {
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
                    Re = ({ level: e }) => {
                        const t = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            u = _()(ke.base, ke[`base__level${e}`]);
                        return a().createElement('div', { style: t, className: u });
                    },
                    Le = ({
                        level: e,
                        overlayType: t,
                        isTemporary: u,
                        withAttention: i,
                        imageSource: s,
                        isIncompatible: r,
                    }) => {
                        const o = (0, n.useMemo)(() => {
                                const u = 'equipmentModernized' === t ? `${t}_${e}_overlay` : `${t}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(u);
                            }, [t, e]),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            c = !o && Boolean(t) && e;
                        return a().createElement(
                            'div',
                            null,
                            c && a().createElement(Re, { level: e }),
                            a().createElement('div', {
                                className: _()('Inside_image_e5', (u || i) && 'Inside_image__fitting_11'),
                                style: l,
                            }),
                            i && a().createElement('div', { className: 'Inside_warning_e4' }),
                            r && a().createElement('div', { className: 'Inside_change_5a' }),
                            o && a().createElement(Oe, { isTemporary: u, overlaySource: o, overlayType: t }),
                        );
                    },
                    Ne = (e) => {
                        const t = (0, n.useRef)(-1),
                            u = (0, n.useCallback)(
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
                        return (0, n.useEffect)(() => () => clearTimeout(t.current), []), u;
                    };
                var Pe = u(5415),
                    Me = u(2039);
                const $e = 'Grabber_base_cf',
                    He = ({
                        children: e,
                        id: t,
                        containerRef: u,
                        isEnabled: i = !0,
                        onClick: s,
                        forceCenterX: r,
                        isUpdateAvailable: o,
                        handleAction: l,
                        blockOnGrabIds: c = [],
                    }) => {
                        const d = (0, Pe.GS)().mediaSize,
                            A = (0, n.useRef)({
                                actualX: 0,
                                clickCenterOffset: 0,
                                dropCenterX: 0,
                                grabActivationPassed: !1,
                                isDragActive: !1,
                                id: t,
                            }),
                            F = (0, n.useRef)({
                                isValid: !1,
                                startX: 0,
                                startCenterX: 0,
                                minXRestriction: 0,
                                maxXRestriction: 8e3,
                            }),
                            D = (0, n.useRef)(null),
                            p = (0, n.useState)(!1),
                            g = p[0],
                            h = p[1],
                            B = (0, n.useState)(0),
                            f = B[0],
                            v = B[1],
                            w = (function () {
                                const e = (0, n.useRef)(0);
                                return (
                                    (0, Me.k)(() => {
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
                            })(),
                            x = 0 !== r && i,
                            T = r ? r - F.current.startCenterX : f;
                        (0, n.useEffect)(() => {
                            if (((F.current.isValid = !1), t))
                                return (0, L.v)(() => {
                                    const e = D.current,
                                        n = u.current;
                                    if (n && e) {
                                        const u = e.getBoundingClientRect(),
                                            a = n.getBoundingClientRect(),
                                            i = u.left + 0.5 * u.width;
                                        (F.current = {
                                            isValid: !0,
                                            minXRestriction: a.left,
                                            maxXRestriction: a.left + a.width,
                                            startX: u.left,
                                            startCenterX: i,
                                        }),
                                            l(S.Ready, { dragId: t, currentCenterX: i });
                                    }
                                });
                        }, [d]);
                        const y = (0, n.useCallback)(
                                (e) => {
                                    (A.current.isDragActive = e),
                                        h(e),
                                        A.current.grabActivationPassed && !e && C(!1, c);
                                },
                                [c],
                            ),
                            I = (0, n.useCallback)(() => {
                                l(S.DragStart, { dragId: A.current.id }),
                                    (A.current.grabActivationPassed = !0),
                                    C(!0, c);
                            }, [l, c]),
                            O = (0, n.useCallback)((e) => {
                                const t = A.current,
                                    u = F.current,
                                    n = u.startX,
                                    a = u.startCenterX,
                                    i = u.minXRestriction,
                                    s = u.maxXRestriction,
                                    r = a - n,
                                    o = e - t.clickCenterOffset;
                                t.dropCenterX = ((e, t, u, n) => {
                                    const a = u + t,
                                        i = n - t;
                                    return e < a ? a : e > i ? i : e;
                                })(o, r, i, s);
                            }, []),
                            k = (0, n.useCallback)(
                                (e) => {
                                    const t = A.current,
                                        u = F.current;
                                    0 === e.button &&
                                        !t.isDragActive &&
                                        u.isValid &&
                                        i &&
                                        !o &&
                                        D.current &&
                                        ((t.actualX = e.clientX),
                                        (t.clickCenterOffset = t.actualX - u.startCenterX),
                                        y(!0));
                                },
                                [i, o, y],
                            ),
                            R = (0, n.useCallback)(() => {
                                !s || (i && F.current.isValid) || s();
                            }, [i, s]);
                        (0, m.gd)(
                            g ? b.n.ESCAPE : b.n.NONE,
                            (0, E.z)(() => y(!1)),
                        ),
                            (0, n.useEffect)(() => {
                                i && r && v(0);
                            }, [r, i]);
                        const N = !g && A.current.grabActivationPassed;
                        (0, n.useLayoutEffect)(() => {
                            A.current.id = t;
                        }, [t]),
                            (0, n.useEffect)(() => {
                                if (N) {
                                    const e = A.current;
                                    l(S.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                        r === e.dropCenterX &&
                                            ((e.grabActivationPassed = !1),
                                            w.run(() => l(S.DropExit, { dragId: e.id })));
                                }
                            }, [N, w, r, l]),
                            (0, n.useEffect)(() => {
                                if (i && g && A.current.id) {
                                    const e = $.O.client.events.mouse.up(([e, t]) => {
                                            if ('outside' === t) return y(!1);
                                            const u = A.current,
                                                n = e.clientX;
                                            n !== u.actualX || 0 !== e.button || A.current.grabActivationPassed
                                                ? A.current.grabActivationPassed && O(n)
                                                : s && s(),
                                                A.current.isDragActive && y(!1);
                                        }),
                                        t = $.O.client.events.mouse.move(([e]) => {
                                            const t = A.current;
                                            if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                                            const u = e.clientX,
                                                n = t.grabActivationPassed;
                                            !n && I(),
                                                u !== t.actualX &&
                                                    ((t.actualX = u),
                                                    O(u),
                                                    n && l(S.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                                    v(t.dropCenterX - F.current.startCenterX));
                                        });
                                    return () => {
                                        t(), e();
                                    };
                                }
                            }, [I, l, g, i, s, y, O]);
                        const P = i
                            ? _()(
                                  $e,
                                  'Grabber_base__enabled_b0',
                                  g && 'Grabber_base__active_71',
                                  N && 'Grabber_base__exit_1f',
                                  x && 'Grabber_base__waitingUpdate_1d',
                                  r && 'Grabber_base__updating_f1',
                              )
                            : _()($e, r && 'Grabber_base__showAnimation_d9');
                        return a().createElement(
                            'div',
                            {
                                id: t,
                                ref: D,
                                onClick: R,
                                onMouseDown: k,
                                onTransitionEnd: (e) => {
                                    const t = A.current;
                                    e.target === D.current &&
                                        t.grabActivationPassed &&
                                        ((t.grabActivationPassed = !1), w.run(() => l(S.DropExit, { dragId: t.id })));
                                },
                                className: P,
                                style: { left: T },
                            },
                            e,
                        );
                    };
                let je;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(je || (je = {}));
                const ze = ({ text: e, show: t, panelType: u, shellState: n, className: i }) => {
                    if (!e) return null;
                    const s = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                    return a().createElement(
                        'div',
                        {
                            className: _()(
                                'KeyLabel_base_ec',
                                n === je.Current && 'KeyLabel_base__current_c2',
                                n === je.Next && 'KeyLabel_base__next_fa',
                                i,
                            ),
                        },
                        a().createElement(re, { isTruncated: !0, text: s, show: t, panelType: u }),
                    );
                };
                var Ge = u(7078);
                const We = ({ children: e, slotType: t, slotId: u, panelType: s, isEnabled: r = !0 }) => {
                        const o = (0, n.useMemo)(() => ({ slotType: t, slotId: u }), [t, u]);
                        return a().createElement(
                            Ge.t,
                            {
                                isEnabled: r,
                                args: o,
                                decoratorId: [i.Battle, i.Prebattle].includes(s)
                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                    : 0,
                            },
                            a().createElement('div', null, e),
                        );
                    },
                    Ue = (0, T.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                u = (0, I.Om)(() => t.sectionGroups.get().length),
                                n = (0, I.Om)(
                                    (e) => {
                                        const u = y.U2(t.sectionGroups.get(), e);
                                        if (!u) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, u, {
                                            sections: y.UI(u.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: y.UI(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, u.setupSelector, {
                                                states: y.UI(u.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: d.jv },
                                ),
                                a = (0, I.Om)(() => y.u4(t.sectionGroups.get(), (e, t) => e + t.sections.length, 0)),
                                i = (0, I.Om)((e) => n(e).sections.length),
                                s = (0, I.Om)(
                                    (e, t) => {
                                        const u = n(e),
                                            a = y.U2(u.sections, t);
                                        if (!a) throw Error(`No ammunition section found with index: ${t}`);
                                        return a;
                                    },
                                    { equals: d.jv },
                                ),
                                o = (0, I.Om)((e, t) => s(e, t).slots.length),
                                l = (0, I.Om)((e, t) => {
                                    const u = s(e, t).slots;
                                    return y.hX(u, (e) => Boolean(e) && !r(e)).length;
                                }),
                                c = (0, I.Om)((e, t) => {
                                    const u = s(e, t).slots;
                                    return y.G(u, (e) => e.intCD > 0);
                                }),
                                _ = (0, I.Om)(
                                    (e, t, u) => {
                                        const n = s(e, t),
                                            a = y.U2(n.slots, u);
                                        if (!a) throw Error(`No ammunition slot found with index: ${u}`);
                                        return a;
                                    },
                                    { equals: d.jv },
                                ),
                                E = (0, I.Om)(
                                    (e) => {
                                        const t = n(e).sections;
                                        return y.v(t, (e) => v(e.type));
                                    },
                                    { equals: d.jv },
                                ),
                                m = (0, I.Om)(
                                    (e, t, u) => {
                                        const n = _(e, t, u);
                                        if (!n) throw Error(`No ammunition slot found with index: ${u}`);
                                        if (!n.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, n.specializations, {
                                            specializations: y.UI(n.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: d.jv },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: u, group: n },
                                    sections: { allSectionsLength: a, length: i, section: s, IDs: E },
                                    slots: { length: o, filteredLength: l, slot: _, existFilled: c },
                                    specializations: m,
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
                    Ve = (Ue[0], Ue[1]),
                    qe = (0, n.memo)(
                        ({ id: e, show: t = !0, onClick: u, soundHover: i = 'highlight', soundClick: s = 'play' }) => {
                            const r = (0, n.useState)(!1),
                                o = r[0],
                                l = r[1],
                                c = (0, n.useState)(!1),
                                d = c[0],
                                E = c[1],
                                m = (0, n.useState)(!1),
                                b = m[0],
                                F = m[1],
                                D = (0, n.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                p = (0, n.useCallback)(() => {
                                    E(!0), i && (0, A.G)(i);
                                }, [i]),
                                g = (0, n.useCallback)(() => {
                                    l(!1), E(!1);
                                }, []),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && (l(!0), s && (0, A.G)(s));
                                    },
                                    [t, s],
                                ),
                                h = (0, n.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && u && u();
                                    },
                                    [t, u],
                                );
                            (0, n.useEffect)(
                                () =>
                                    (0, L.v)(() => {
                                        F(!0);
                                    }),
                                [],
                            );
                            const B = _()(
                                'Close_base_f3',
                                !b && 'Close_base__invisible_0e',
                                b && t && 'Close_base__shown_a2',
                                o && 'Close_base__down_2b',
                                d && 'Close_base__hover_6d',
                            );
                            return a().createElement('div', {
                                id: e,
                                onMouseOver: p,
                                onMouseLeave: g,
                                onMouseDown: C,
                                onMouseUp: h,
                                className: B,
                                onClick: D,
                            });
                        },
                    );
                var Ze = u(1641);
                const Xe = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: a = 0,
                        args: i,
                        isEnabled: s = !0,
                        onMouseDown: r,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                (0, Ce.c9)(Ce.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    A.$.playYes();
                            }, [i, t, u, a]),
                            l = (0, n.useCallback)(() => {
                                (0, Ce.c9)(Ce.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    r && r(e), ((e) => e.button === Ze.t.RIGHT)(e) && o();
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
                    Ke = ['children'];
                function Ye() {
                    return (
                        (Ye = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        Ye.apply(null, arguments)
                    );
                }
                const Qe = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, Ke);
                    return a().createElement(
                        Xe,
                        Ye({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var Je = u(1396);
                const et = 'select',
                    tt = 'undo',
                    ut = 'swap',
                    nt = 'demount',
                    at = 'demount_from_setup',
                    it = 'demount_from_setups',
                    st = 'destroy',
                    rt = 1600;
                let ot;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(ot || (ot = {}));
                const lt = { [ut]: 200, [tt]: 250, [et]: 250, [st]: 1400, [nt]: rt, [it]: rt, [at]: rt },
                    ct = { enterActive: 'BackEffects_shine__enterActive_54' },
                    _t = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    dt = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    Et = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    mt = [nt, it],
                    bt = a().memo(({ in: e, actionType: t }) =>
                        a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(
                                Z.Z,
                                { in: e, timeout: 200, classNames: ct },
                                a().createElement('div', { className: 'BackEffects_shine_f6' }),
                            ),
                            a().createElement(
                                Z.Z,
                                { in: e, timeout: 400, classNames: _t },
                                a().createElement('div', { className: 'BackEffects_sparks_55' }),
                            ),
                            mt.includes(t) &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        Z.Z,
                                        { in: e, timeout: 600, classNames: dt },
                                        a().createElement('div', { className: 'BackEffects_nut_79' }),
                                    ),
                                    a().createElement(
                                        Z.Z,
                                        { in: e, timeout: 600, classNames: Et },
                                        a().createElement('div', { className: 'BackEffects_wrench_5a' }),
                                    ),
                                ),
                        ),
                    ),
                    At = ({ inProp: e, maskImage: t }) =>
                        a().createElement(
                            Z.Z,
                            { in: e, timeout: 1200, classNames: { enterActive: 'ColorMask_base__enterActive_62' } },
                            a().createElement('div', {
                                className: 'ColorMask_base_60',
                                style: { maskImage: `url(${t})` },
                            }),
                        ),
                    Ft = {
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
                    Dt = { enter: Ft.base__enter, exit: Ft.base__enter },
                    pt = (0, s.Pi)(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: u,
                            slotType: i,
                            isEmpty: s = !1,
                            imageSource: r,
                            itemInstalledSetupIndex: o,
                        }) => {
                            const l = Ve().model.lastSlotAction.get(),
                                c = l.leftID,
                                _ = l.rightID,
                                d = l.leftIntCD,
                                E = l.rightIntCD,
                                m = l.actionType,
                                b = l.intCD,
                                A = (0, n.useState)(!0),
                                F = A[0],
                                D = A[1],
                                p = (0, n.useState)(!0),
                                g = p[0],
                                C = p[1],
                                h = (0, n.useState)(r),
                                B = h[0],
                                f = h[1],
                                S = (0, n.useState)(u),
                                v = S[0],
                                w = S[1],
                                x = (0, n.useState)(o),
                                T = x[0],
                                y = x[1],
                                I = (0, Je.K)(),
                                O = (0, Je.K)(),
                                k = (b === u || b === v) && T !== o && [st, nt, it].includes(m),
                                R = -1 === d || -1 === E,
                                L = i ? `base${i[0].toUpperCase() + i.slice(1)}` : 'base',
                                N = lt[m] || 0;
                            (0, n.useEffect)(() => {
                                s || f(r);
                            }, [s, r]);
                            const P = (0, n.useCallback)(
                                    (e) => {
                                        const u = Object.assign({}, Dt);
                                        switch (m) {
                                            case ut: {
                                                const e = c === t ? ot.RIGHT : ot.LEFT,
                                                    n = _ - c != 1 ? ot.SWAP : '';
                                                (u.enterDone = Ft[`${L}__enter${e}${n}`]),
                                                    (u.exit = Ft[`${L}__exit${e}${n}`]),
                                                    R &&
                                                        (s
                                                            ? (u.enterDone = Ft[`${L}__enter${ot.FADE}`])
                                                            : (u.exit = Ft[`${L}__exit${ot.FADE}`]));
                                                break;
                                            }
                                            case st:
                                                (u.enterDone = Ft[`${L}__enter${ot.DESTROY}`]),
                                                    (u.exit = Ft[`${L}__exit${ot.DESTROY}`]),
                                                    I.run(() => D(!0), 900),
                                                    C(!0);
                                                break;
                                            case it:
                                            case nt:
                                                (u.enter = Ft[`${L}__enter${ot.DEMOUNT}${ot.FADE}`]),
                                                    (u.exit = Ft[`${L}__exit${ot.DEMOUNT}`]),
                                                    I.run(() => D(!0), 900);
                                                break;
                                            case et:
                                            case tt:
                                                if (i !== ee) {
                                                    const e = m === et ? ot.FITTING : ot.FITTING_REMOVE;
                                                    (u.enter = Ft[`${L}__enter${e}`]),
                                                        (u.exit = Ft[`${L}__exit${e}`]),
                                                        (u.exitActive = Ft[`${L}__exitActive${ot.FITTING}`]);
                                                } else
                                                    (u.enterDone = Ft[`${L}__enter${ot.FADE}`]),
                                                        (u.exit = Ft[`${L}__exit${ot.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return a().cloneElement(e, { classNames: u, timeout: N });
                                    },
                                    [m, N, c, t, _, L, R, s, I, i],
                                ),
                                M = (0, n.useCallback)(
                                    (e) => {
                                        O.run(() => {
                                            (e.className = ''), e.classList.add(Ft.base), w(u), y(o);
                                        }, N);
                                    },
                                    [O, N, u, o],
                                ),
                                $ = (0, n.useCallback)(() => {
                                    D(!1), C(!1);
                                }, []);
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    q.Z,
                                    { component: null, childFactory: P },
                                    a().createElement(
                                        Z.Z,
                                        {
                                            key: u,
                                            timeout: N,
                                            classNames: Dt,
                                            onEntered: M,
                                            onExiting: $,
                                            unmountOnExit: !0,
                                        },
                                        a().createElement('div', { className: Ft.base }, e),
                                    ),
                                ),
                                k &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(bt, { in: F, actionType: m }),
                                        a().createElement(At, { inProp: g, maskImage: B }),
                                    ),
                            );
                        },
                    ),
                    gt = (0, s.Pi)(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: u,
                            isMountedMoreThanOne: i,
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
                            const b = Ve().model.root.get().vehicleCD,
                                A = (0, n.useState)(!0),
                                F = A[0],
                                D = A[1],
                                p = (0, Je.K)();
                            (0, n.useEffect)(() => {
                                D(!1), p.run(() => D(!0), 100);
                            }, [b]);
                            const g = (0, n.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: t,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: u,
                                    itemInstalledSetupSlotIdx: t,
                                    isMountedMoreThanOne: i,
                                }),
                                [e, _, t, u, s, i],
                            );
                            return F
                                ? a().createElement(
                                      pt,
                                      {
                                          uniqueKey: e,
                                          isEmpty: l,
                                          slotIndex: c,
                                          slotType: _,
                                          imageSource: o,
                                          itemInstalledSetupIndex: u,
                                      },
                                      a().createElement(
                                          Qe,
                                          { isEnabled: !(E || d || r || l), args: g },
                                          a().createElement('div', null, m),
                                      ),
                                  )
                                : a().createElement('div', null, m);
                        },
                    ),
                    Ct = (0, s.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: u,
                            isSelected: s,
                            isSetupSwitching: r,
                            isSectionSelected: c,
                            onActiveSlotChanged: _,
                            onSlotSelected: d,
                            onActiveSlotRefChanged: E,
                            onSlotClear: m,
                            panelType: b,
                            isDisabled: F = !1,
                            isBorderActive: D,
                            isIncompatible: p = !1,
                            grabberId: g,
                            containerRef: C,
                            activeDragId: h,
                            handleGrabberAction: B,
                            forceLeftUpdate: f,
                            potentialDropId: S,
                            blockOnGrabIds: v,
                            contextMenuDisabled: w,
                            groupIndex: x,
                            sectionIndex: T,
                        }) => {
                            const y = Ve().model.computes.slots.slot(x, T, t),
                                I = y.imageSource,
                                O = y.isInstalled,
                                k = y.itemInstalledSetupIdx,
                                R = y.isMountedMoreThanOne,
                                N = y.overlayType,
                                P = y.keyName,
                                M = y.categoryImgSource,
                                $ = y.withAttention,
                                H = y.id,
                                j = y.intCD,
                                z = b === i.Setup,
                                G = !l(b),
                                W = !o(b),
                                U = b === i.Compare,
                                V = z && c && G,
                                q = (0, n.useRef)(!1),
                                Z = (0, n.useRef)(null),
                                X = -1 === j;
                            (0, n.useEffect)(() => {
                                if (!q.current && c && s)
                                    return (0, L.v)(() => {
                                        _ && _(Z, e, H), (q.current = !0);
                                    });
                                q.current = !0;
                            }, [H, c, s, _, e]),
                                (0, n.useEffect)(() => {
                                    s && E(Z);
                                }, [s, E]);
                            const K = (0, n.useCallback)(() => (!s && G && !r && d(e, H), 500), [H, G, s, r, d, e]),
                                Y = Ne(K),
                                Q = (0, n.useCallback)(() => {
                                    F || Y('');
                                }, [Y, F]),
                                J = (0, n.useCallback)(() => {
                                    W && !s && !h && !F && A.$.playHighlight();
                                }, [s, h, F, W]);
                            (0, n.useEffect)(() => {
                                S && A.$.playHighlight();
                            }, [S]);
                            const ee = (0, n.useCallback)(() => {
                                    null == m || m(H, e);
                                }, [H, m, e]),
                                te = z && !O,
                                ue = Boolean(g && S === g),
                                ne = g && (V || U),
                                ae = `${e}-slot-${H}`,
                                ie = M && M.length > 0,
                                se = ie ? { backgroundImage: `url(${M})` } : {},
                                re = {
                                    id: g,
                                    containerRef: C,
                                    isEnabled: !X,
                                    onClick: Q,
                                    isUpdateAvailable: Boolean(h),
                                    handleAction: B,
                                    forceCenterX: f,
                                    blockOnGrabIds: v,
                                },
                                oe = {
                                    isEmpty: X,
                                    intCD: j,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: I,
                                    isDisabled: F,
                                    isInstalled: O,
                                    id: H,
                                    itemInstalledSetupIdx: k,
                                    isMountedMoreThanOne: R,
                                    contextMenuDisabled: w,
                                    isSetupSwitching: r,
                                };
                            return a().createElement(
                                'div',
                                { className: 'Slot_base_3a', onMouseEnter: J, id: ae },
                                (c || U) &&
                                    !O &&
                                    a().createElement(
                                        'div',
                                        { className: 'Slot_close_bb' },
                                        a().createElement(qe, { id: `close-${ae}`, show: !h, onClick: ee }),
                                    ),
                                a().createElement(
                                    We,
                                    { slotType: e, slotId: H, isEnabled: !h, panelType: b },
                                    a().createElement(
                                        'div',
                                        { ref: Z },
                                        a().createElement(
                                            ye,
                                            {
                                                activeDragId: h,
                                                slotType: e,
                                                isSelected: s,
                                                isBorderActive: Boolean(D),
                                                panelType: b,
                                                isDisabled: F,
                                                isPotentialDrop: ue,
                                                onClick: ne ? void 0 : Q,
                                            },
                                            G &&
                                                a().createElement(
                                                    'div',
                                                    { className: 'Slot_label_e6' },
                                                    a().createElement(ze, { text: P, show: Boolean(c), panelType: b }),
                                                ),
                                            a().createElement(
                                                xe,
                                                { when: Boolean(ne), wrapper: He, withProps: re },
                                                a().createElement(
                                                    xe,
                                                    { when: G, wrapper: gt, withProps: oe },
                                                    a().createElement(Le, {
                                                        imageSource: I,
                                                        isIncompatible: p,
                                                        overlayType: N,
                                                        level: u,
                                                        isTemporary: te,
                                                        withAttention: $,
                                                    }),
                                                ),
                                            ),
                                            ie &&
                                                a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement('span', { className: 'Slot_shadow_a7' }),
                                                    a().createElement('span', {
                                                        className: 'Slot_category_2c',
                                                        style: se,
                                                    }),
                                                ),
                                            F && a().createElement('div', { className: 'Slot_disabled_5d' }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    ht = ['rank'],
                    Bt = (e) => {
                        let t = e.rank,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, ht);
                        return a().createElement(
                            'div',
                            { className: 'BattleAbilitySlot_base_3c' },
                            a().createElement(Ct, u),
                            t &&
                                a().createElement('div', {
                                    className: 'BattleAbilitySlot_rank_60',
                                    style: { backgroundImage: `url(${t})` },
                                }),
                        );
                    };
                var ft = u(3457);
                const St = {
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
                    vt = ({
                        name: e,
                        isCorrect: t,
                        isSpecializationActive: u = !0,
                        isDynamic: i,
                        mediaSize: s,
                        isClickable: r,
                        onSpecializationClick: o,
                        index: l,
                    }) => {
                        const c = s !== D.None,
                            d = (0, n.useCallback)(() => {
                                r && u && o && o(l);
                            }, [l, r, u, o]),
                            E = (0, n.useMemo)(() => {
                                let u = '';
                                c && (u = (s === D.Large || s === D.Huge ? D.Large : D.Medium) + '_');
                                const n = `${u}${e}_${t ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, t, s, c]),
                            m = (0, n.useMemo)(
                                () => ({ spec: e, isDyn: i, isClickable: r, tooltip: 'hangarSlotSpec' }),
                                [e, i, r],
                            );
                        if (!E) return null;
                        const b = _()(
                                `specialization-${e}`,
                                St.base,
                                c && St[`base__${s}`],
                                u && St.base__setup,
                                t && St.base__correct,
                            ),
                            A = _()(St.icon, c && St[`icon__${s}`]),
                            F = c ? '' : St.specializationWrapper,
                            p = a().createElement(
                                'div',
                                { key: e, className: b },
                                a().createElement('div', { className: St.glow }),
                                a().createElement('div', { className: A, style: E }),
                            );
                        return a().createElement(
                            Ge.t,
                            { args: m },
                            r && u
                                ? a().createElement(
                                      ft.u5,
                                      {
                                          size: ft.qE.small,
                                          type: ft.L$.ghost,
                                          mixClass: St.specializationButton,
                                          onClick: d,
                                      },
                                      p,
                                  )
                                : a().createElement('div', { className: F }, p),
                        );
                    };
                function wt() {
                    return (
                        (wt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        wt.apply(null, arguments)
                    );
                }
                const xt = ({
                        specializations: e,
                        isSpecializationActive: t = !0,
                        isDynamic: u,
                        mediaSize: n = D.None,
                        activeSpecsMask: i,
                        onSpecializationClick: s,
                    }) =>
                        e.length
                            ? a().createElement(
                                  'div',
                                  { className: 'Specializations_base_ab', key: i },
                                  y.UI(e, (e, i) =>
                                      a().createElement(
                                          vt,
                                          wt({ index: i, key: e.name }, e, {
                                              isSpecializationActive: t,
                                              isDynamic: u,
                                              mediaSize: n,
                                              onSpecializationClick: s,
                                          }),
                                      ),
                                  ),
                              )
                            : null,
                    Tt = ({ children: e, slotType: t, slotId: u, isEnabled: n = !0, panelType: s }) =>
                        a().createElement(
                            Ge.t,
                            {
                                targetId: s !== i.Setup ? R.views.halloween.lobby.widgets.TankSetupView('resId') : 0,
                                isEnabled: n,
                                args: { slotType: t, slotId: u },
                            },
                            a().createElement('div', null, e),
                        ),
                    yt = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d6',
                        'animation-left': 'SlotTransitions_animation-left_e7',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_95',
                        'animation-fade': 'SlotTransitions_animation-fade_d6',
                        base__enterRight: 'SlotTransitions_base__enterRight_09',
                        'animation-right': 'SlotTransitions_animation-right_1c',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_17',
                        base__exitRight: 'SlotTransitions_base__exitRight_9a',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_b3',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_b4',
                        'animation-right-long': 'SlotTransitions_animation-right-long_63',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_e9',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_b0',
                        'animation-left-long': 'SlotTransitions_animation-left-long_fd',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_fd',
                        base__exitFade: 'SlotTransitions_base__exitFade_0f',
                        base__enterFade: 'SlotTransitions_base__enterFade_a0',
                        base: 'SlotTransitions_base_ba',
                        base__enter: 'SlotTransitions_base__enter_7d',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_ed',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_27',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_e6',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_35',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_71',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_61',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_1a',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_0c',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_63',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_05',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_97',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_44',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_93',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_b0',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_70',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_6a',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_4a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_f5',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_99',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_c6',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_00',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_5c',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_18',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_11',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_9c',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_d0',
                        'animation-fitting': 'SlotTransitions_animation-fitting_3f',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_b9',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_a3',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_ab',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_64',
                        'animation-destroy': 'SlotTransitions_animation-destroy_ca',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_d0',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_c3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_22',
                        'animation-demount': 'SlotTransitions_animation-demount_4b',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_93',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_df',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_e3',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_a8',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_4d',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_9e',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_f6',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_a5',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_67',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_1e',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_00',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_3b',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_de',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_a7',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_69',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_b2',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_b6',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_bd',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_b9',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_bf',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_84',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_88',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_8b',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_48',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_ff',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_ab',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e6',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_f9',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_33',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_ae',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_d4',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_42',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_41',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_05',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_0e',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_19',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_e6',
                        baseHw_consumables__exitLeft: 'SlotTransitions_baseHw_consumables__exitLeft_0d',
                        baseHw_consumables__exitLeftFade: 'SlotTransitions_baseHw_consumables__exitLeftFade_80',
                        baseHw_consumables__enterRight: 'SlotTransitions_baseHw_consumables__enterRight_70',
                        baseHw_consumables__enterRightFade: 'SlotTransitions_baseHw_consumables__enterRightFade_fb',
                        baseHw_consumables__exitRight: 'SlotTransitions_baseHw_consumables__exitRight_0a',
                        baseHw_consumables__enterLeft: 'SlotTransitions_baseHw_consumables__enterLeft_7c',
                        baseHw_consumables__exitRightSwap: 'SlotTransitions_baseHw_consumables__exitRightSwap_b0',
                        baseHw_consumables__enterRightSwap: 'SlotTransitions_baseHw_consumables__enterRightSwap_c9',
                        baseHw_consumables__enterLeftSwap: 'SlotTransitions_baseHw_consumables__enterLeftSwap_47',
                        baseHw_consumables__exitLeftSwap: 'SlotTransitions_baseHw_consumables__exitLeftSwap_16',
                        baseHw_consumables__enterFitting: 'SlotTransitions_baseHw_consumables__enterFitting_7c',
                        baseHw_consumables__exitFittingRemove:
                            'SlotTransitions_baseHw_consumables__exitFittingRemove_2f',
                        baseHw_consumables__exitActiveFitting:
                            'SlotTransitions_baseHw_consumables__exitActiveFitting_9d',
                        baseHw_consumables__exitFade: 'SlotTransitions_baseHw_consumables__exitFade_64',
                        baseHw_consumables__enterFade: 'SlotTransitions_baseHw_consumables__enterFade_b0',
                    },
                    It = { enter: yt.base__enter, exit: yt.base__enter },
                    Ot = (0, s.Pi)(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: u,
                            slotType: i,
                            isEmpty: s = !1,
                            imageSource: r,
                            itemInstalledSetupIdx: o,
                        }) => {
                            const l = k().model.lastSlotAction.get(),
                                c = l.leftID,
                                _ = l.rightID,
                                d = l.leftIntCD,
                                E = l.rightIntCD,
                                m = l.actionType,
                                b = l.intCD,
                                A = (0, n.useState)(!0),
                                F = A[0],
                                D = A[1],
                                p = (0, n.useState)(!0),
                                g = p[0],
                                C = p[1],
                                h = (0, n.useState)(r),
                                B = h[0],
                                f = h[1],
                                S = (0, n.useState)(u),
                                v = S[0],
                                w = S[1],
                                x = (0, n.useState)(o),
                                T = x[0],
                                y = x[1],
                                I = (0, n.useRef)(),
                                O = (0, n.useRef)(),
                                R = !((b !== u && b !== v) || T === o || (m !== st && m !== nt)),
                                L = -1 === d || -1 === E,
                                N = i ? `base${i[0].toUpperCase() + i.slice(1)}` : 'base',
                                P = lt[m] || 0;
                            (0, n.useEffect)(
                                () => () => {
                                    I.current && clearTimeout(I.current), O.current && clearTimeout(O.current);
                                },
                                [],
                            ),
                                (0, n.useEffect)(() => {
                                    s || f(r);
                                }, [s, r]);
                            const M = (0, n.useCallback)(
                                    (e) => {
                                        const u = Object.assign({}, It);
                                        switch (m) {
                                            case ut: {
                                                const e = c === t ? ot.RIGHT : ot.LEFT,
                                                    n = _ - c != 1 ? ot.SWAP : '';
                                                (u.enterDone = yt[`${N}__enter${e}${n}`]),
                                                    (u.exit = yt[`${N}__exit${e}${n}`]),
                                                    L &&
                                                        (s
                                                            ? (u.enterDone = yt[`${N}__enter${ot.FADE}`])
                                                            : (u.exit = yt[`${N}__exit${ot.FADE}`]));
                                                break;
                                            }
                                            case st:
                                                (u.enterDone = yt[`${N}__enter${ot.DESTROY}`]),
                                                    (u.exit = yt[`${N}__exit${ot.DESTROY}`]),
                                                    (I.current = setTimeout(() => D(!0), 900)),
                                                    C(!0);
                                                break;
                                            case nt:
                                                (u.enter = yt[`${N}__enter${ot.DEMOUNT}${ot.FADE}`]),
                                                    (u.exit = yt[`${N}__exit${ot.DEMOUNT}`]),
                                                    (I.current = setTimeout(() => D(!0), 900));
                                                break;
                                            case et:
                                            case tt:
                                                if (i !== ee) {
                                                    const e = m === et ? ot.FITTING : ot.FITTING_REMOVE;
                                                    (u.enter = yt[`${N}__enter${e}`]),
                                                        (u.exit = yt[`${N}__exit${e}`]),
                                                        (u.exitActive = yt[`${N}__exitActive${ot.FITTING}`]);
                                                } else
                                                    (u.enterDone = yt[`${N}__enter${ot.FADE}`]),
                                                        (u.exit = yt[`${N}__exit${ot.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return a().cloneElement(e, { classNames: u, timeout: P });
                                    },
                                    [m, i, N, P, c, t, _, s, L],
                                ),
                                $ = (0, n.useCallback)(
                                    (e) => {
                                        O.current = setTimeout(() => {
                                            (e.className = ''), e.classList.add(yt.base), w(u), y(o);
                                        }, P);
                                    },
                                    [P, u, o],
                                ),
                                H = (0, n.useCallback)(() => {
                                    D(!1), C(!1);
                                }, []);
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    q.Z,
                                    { component: null, childFactory: M },
                                    a().createElement(
                                        Z.Z,
                                        {
                                            key: u,
                                            timeout: P,
                                            classNames: It,
                                            onEntered: $,
                                            onExiting: H,
                                            unmountOnExit: !0,
                                        },
                                        a().createElement('div', { className: yt.base }, e),
                                    ),
                                ),
                                R &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(bt, { in: F, actionType: m }),
                                        a().createElement(At, { inProp: g, maskImage: B }),
                                    ),
                            );
                        },
                    ),
                    kt = a().memo(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: u,
                            isMountedMoreThanOne: n,
                            isInstalled: i,
                            isDisabled: s,
                            imageSource: r,
                            isEmpty: o,
                            slotIndex: l,
                            slotType: c,
                            isBootCamp: _,
                            contextMenuDisabled: d,
                            isSetupSwitching: E,
                            children: m,
                        }) =>
                            a().createElement(
                                Ot,
                                {
                                    uniqueKey: e,
                                    isEmpty: o,
                                    slotIndex: l,
                                    slotType: c,
                                    imageSource: r,
                                    itemInstalledSetupIdx: u,
                                },
                                a().createElement(
                                    Qe,
                                    {
                                        isEnabled: !(E || d || s || o || _),
                                        args: {
                                            intCD: e,
                                            slotType: c,
                                            installedSlotId: t,
                                            isMounted: i,
                                            fieldType: 1,
                                            itemInstalledSetupIdx: u,
                                            itemInstalledSetupSlotIdx: t,
                                            isMountedMoreThanOne: n,
                                        },
                                    },
                                    a().createElement('div', null, m),
                                ),
                            ),
                    ),
                    Rt = R.images.halloween.gui.maps.icons.tanksetup.panel.empty(),
                    Lt = R.images.halloween.gui.maps.icons.tanksetup.panel.empty_hover(),
                    Nt = (e, t, u, n, a) => (t ? (n || a || !u ? Rt : Lt) : e),
                    Pt = (0, s.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: u,
                            isSelected: s,
                            isSetupSwitching: c,
                            isSectionSelected: _,
                            onActiveSlotChanged: d,
                            onSlotSelected: E,
                            onActiveSlotRefChanged: m,
                            onSlotClear: b,
                            panelType: A,
                            isDisabled: F = !1,
                            isBorderActive: D,
                            isIncompatible: p = !1,
                            grabberId: g,
                            containerRef: C,
                            activeDragId: h,
                            handleGrabberAction: B,
                            forceLeftUpdate: f,
                            potentialDropId: S,
                            blockOnGrabIds: v,
                            contextMenuDisabled: w,
                            groupIndex: x,
                            sectionIndex: T,
                        }) => {
                            const y = k().model,
                                I = y.computes.slots.slot(x, T, t),
                                O = I.imageSource,
                                R = I.isInstalled,
                                N = I.itemInstalledSetupIdx,
                                P = I.isMountedMoreThanOne,
                                M = I.overlayType,
                                H = I.keyName,
                                j = I.categoryImgSource,
                                z = I.withAttention,
                                G = I.id,
                                W = I.intCD,
                                U = (0, n.useState)(!1),
                                V = U[0],
                                q = U[1],
                                Z = A === i.Setup,
                                X = !l(A),
                                K = !o(A),
                                Y = A === i.Compare,
                                Q = Z && _ && X,
                                J = (0, n.useRef)(!1),
                                ee = (0, n.useRef)(null),
                                te = -1 === W;
                            (0, n.useEffect)(() => {
                                if (!J.current && _ && s)
                                    return (0, L.v)(() => {
                                        d && d(ee, e, G), (J.current = !0);
                                    });
                                J.current = !0;
                            }, [G, _, s, d, e]),
                                (0, n.useEffect)(() => {
                                    s && m(ee);
                                }, [s, m]);
                            const ue = (0, n.useCallback)(() => (!s && X && !c && E(e, G), 500), [G, X, s, c, E, e]),
                                ne = Ne(ue),
                                ae = (0, n.useCallback)(() => {
                                    F || ne('');
                                }, [ne, F]),
                                ie = (0, n.useCallback)(() => {
                                    K && !s && !h && !F && $.O.sound.play.highlight(), q(!0);
                                }, [s, h, F, K]);
                            (0, n.useEffect)(() => {
                                S && $.O.sound.play.highlight();
                            }, [S]);
                            const se = (0, n.useCallback)(() => {
                                    q(!1), null == b || b(G, e);
                                }, [G, b, e]),
                                re = Z && !R,
                                oe = Boolean(g && S === g),
                                le = g && (Q || Y),
                                ce = `${e}-slot-${G}`,
                                _e = j && j.length > 0,
                                de = _e ? { backgroundImage: `url(${j})` } : {},
                                Ee = {
                                    id: g,
                                    containerRef: C,
                                    isEnabled: !te,
                                    onClick: ae,
                                    isUpdateAvailable: Boolean(h),
                                    handleAction: B,
                                    forceCenterX: f,
                                    blockOnGrabIds: v,
                                },
                                me = {
                                    isEmpty: te,
                                    intCD: W,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: O,
                                    isDisabled: F,
                                    isInstalled: R,
                                    id: G,
                                    itemInstalledSetupIdx: N,
                                    isMountedMoreThanOne: P,
                                    contextMenuDisabled: w,
                                    isSetupSwitching: c,
                                };
                            return a().createElement(
                                'div',
                                { className: 'Slot_base_1e', onMouseEnter: ie, onMouseLeave: () => q(!1), id: ce },
                                (_ || Y) &&
                                    !R &&
                                    a().createElement(
                                        'div',
                                        { className: 'Slot_close_35' },
                                        a().createElement(qe, { id: `close-${ce}`, show: !h, onClick: se }),
                                    ),
                                a().createElement(
                                    Tt,
                                    { slotType: e, slotId: G, isEnabled: !h, panelType: A },
                                    a().createElement(
                                        'div',
                                        { ref: ee },
                                        a().createElement(
                                            ye,
                                            {
                                                activeDragId: h,
                                                slotType: e,
                                                isSelected: s,
                                                isBorderActive: Boolean(D),
                                                panelType: A,
                                                isDisabled: F,
                                                isPotentialDrop: oe,
                                                onClick: le ? void 0 : ae,
                                            },
                                            X &&
                                                a().createElement(
                                                    'div',
                                                    { className: 'Slot_label_0b' },
                                                    a().createElement(ze, { text: H, show: Boolean(_), panelType: A }),
                                                ),
                                            a().createElement(
                                                xe,
                                                { when: Boolean(le), wrapper: He, withProps: Ee },
                                                a().createElement(
                                                    xe,
                                                    { when: X, wrapper: kt, withProps: me },
                                                    a().createElement(Le, {
                                                        imageSource: Nt(O, r(y.computes.slots.slot(x, T, t)), V, F, s),
                                                        isIncompatible: p,
                                                        overlayType: M,
                                                        level: u,
                                                        isTemporary: re,
                                                        withAttention: z,
                                                    }),
                                                ),
                                            ),
                                            _e &&
                                                a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement('span', { className: 'Slot_shadow_1f' }),
                                                    a().createElement('span', {
                                                        className: 'Slot_category_19',
                                                        style: de,
                                                    }),
                                                ),
                                            F && a().createElement('div', { className: 'Slot_disabled_22' }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Mt = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function $t() {
                    return (
                        ($t = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        $t.apply(null, arguments)
                    );
                }
                const Ht = (0, s.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            s = e.activeSpecsMask,
                            r = e.isChangeSetupIndex,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, Mt);
                        const c = k(),
                            d = c.controls,
                            E = c.model.computes.specializations(t, u, n),
                            m = E.specializations.length,
                            b = o.panelType === i.Setup || o.panelType === i.Compare,
                            A = !l(o.panelType),
                            F = E.isDynamic;
                        return a().createElement(
                            'div',
                            { className: _()('OptDeviceSlot_base_fa', m && !F && !r && 'specializationsSlot') },
                            A &&
                                a().createElement(
                                    'div',
                                    { className: 'OptDeviceSlot_specializations_05' },
                                    a().createElement(xt, {
                                        specializations: E.specializations,
                                        isDynamic: F,
                                        activeSpecsMask: s,
                                        isSpecializationActive: b,
                                        onSpecializationClick: (e) => {
                                            d.specializationSelect({ slotId: o.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            a().createElement(Pt, $t({}, o, { groupIndex: t, sectionIndex: u, slotIndex: n })),
                        );
                    }),
                    jt = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function zt() {
                    return (
                        (zt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        zt.apply(null, arguments)
                    );
                }
                const Gt = (0, s.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.sectionType,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, jt);
                        const r = k().model,
                            o = r.computes.slots.slot(t, u, n),
                            l = r.ammunitionPanel.get(),
                            c = l.selectedSection,
                            _ = l.selectedSlot,
                            d = (c === i ? _ : -1) === o.id;
                        switch (i) {
                            case 'optDevices': {
                                const e = o;
                                return a().createElement(
                                    Ht,
                                    zt({}, e, s, { groupIndex: t, sectionIndex: u, slotIndex: n, isSelected: d }),
                                );
                            }
                            case te: {
                                const e = o;
                                return a().createElement(
                                    Bt,
                                    zt({}, s, e, { groupIndex: t, sectionIndex: u, slotIndex: n, isSelected: d }),
                                );
                            }
                            default:
                                return a().createElement(
                                    Pt,
                                    zt({}, s, { isSelected: d, groupIndex: t, sectionIndex: u, slotIndex: n }),
                                );
                        }
                    }),
                    Wt = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function Ut() {
                    return (
                        (Ut = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        Ut.apply(null, arguments)
                    );
                }
                const Vt = (0, s.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            i = e.sectionType,
                            s = e.onActiveSlotChanged,
                            r = e.isDisabled,
                            o = e.blockOnGrabIds,
                            l = e.isChangeSetupIndex,
                            c = e.setIsExitBlocked,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, Wt);
                        const E = (0, n.useRef)(null),
                            m = (0, n.useRef)(null),
                            b = k(),
                            A = b.model,
                            F = b.controls,
                            D = A.computes.slots.length(t, u),
                            p = A.ammunitionPanel.get(),
                            g = p.selectedSection,
                            C = p.selectedSlot,
                            h = p.syncInitiator,
                            B = (0, n.useCallback)(
                                (e, t) => {
                                    F.dragDropSwap({
                                        sectionType: i,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [F, i],
                            ),
                            f = g === i,
                            S = i === te,
                            v = f ? C : -1,
                            w = `${i}-${D}slots`,
                            T = x({ baseId: w, slotsLength: D, handleSwap: B, setIsExitBlocked: c, syncInitiator: h }),
                            y = T.handleGrabberAction,
                            I = T.dragState,
                            O = T.getForceCenterX;
                        (0, n.useEffect)(() => {
                            f && -1 !== v && E.current && s(E, g, v);
                        }, [s, f, g, v]);
                        const R = (e, t) => {
                                if ((r || $.O.sound.play.click(), 'number' != typeof t))
                                    return console.warn('selectedSlot is not a number');
                                F.sectionSelect({ selectedSlot: t, selectedSection: e });
                            },
                            L = (e) => {
                                E.current = e ? e.current : null;
                            },
                            N = (e, t) => {
                                F.slotClear({ slotId: e, sectionType: t });
                            };
                        return a().createElement(
                            'div',
                            { id: w, ref: m, className: _()('Slots_base_f2', i) },
                            U(D, (e) => {
                                const c = !S && D > 1 ? `${w}-${e}` : '';
                                return a().createElement(
                                    n.Fragment,
                                    { key: `slot ${t}-${u}-${e}` },
                                    e > 0 && a().createElement(we, null),
                                    a().createElement(
                                        Gt,
                                        Ut(
                                            {
                                                groupIndex: t,
                                                sectionIndex: u,
                                                slotIndex: e,
                                                sectionType: i,
                                                isSectionSelected: f,
                                                isDisabled: r,
                                                contextMenuDisabled: S,
                                                slotType: i,
                                                onActiveSlotChanged: s,
                                                onSlotSelected: R,
                                                onActiveSlotRefChanged: L,
                                                onSlotClear: N,
                                                grabberId: c,
                                                containerRef: m,
                                                forceLeftUpdate: O(c),
                                                activeDragId: I.activeDragId,
                                                handleGrabberAction: y,
                                                potentialDropId: I.potentialDropId,
                                                blockOnGrabIds: o,
                                                isSetupSwitching: l,
                                                isChangeSetupIndex: l,
                                            },
                                            d,
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    qt = [
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
                function Zt() {
                    return (
                        (Zt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        Zt.apply(null, arguments)
                    );
                }
                const Xt = (0, s.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            s = e.type,
                            r = e.newItemsCount,
                            o = e.panelType,
                            l = e.sectionsIds,
                            c = e.vehicle,
                            d = e.vehicleType,
                            E = e.isSetupSwitching,
                            m = e.classMix,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, qt);
                        const A = k().model,
                            F = (0, n.useRef)(null),
                            D = A.ammunitionPanel.get(),
                            p = D.selectedSection,
                            g = D.syncInitiator,
                            C = A.computes.slots.length(t, u),
                            h = A.computes.slots.existFilled(t, u),
                            B = ((e, t) => {
                                const u = ve('tutorialModel.triggers.items').filter((u) => {
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
                            })('AmmunitionPanelBattleAbilities', 'visible_change');
                        (0, n.useEffect)(() => {
                            null == B || B.runTrigger(!0);
                        }, [B]);
                        const f = p === s,
                            S = w(s, l),
                            v = S.selfId,
                            x = S.blockOnGrabIds,
                            T = ((c && c.length > 0) || (d && d.length > 0)) && o !== i.Battle && o !== i.Respawn,
                            y = (0, n.useMemo)(
                                () => ({
                                    icon: a().createElement('span', {
                                        className: 'Section_configVehicleIcon_05',
                                        style: {
                                            backgroundImage: d
                                                ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(d)})`
                                                : '',
                                        },
                                    }),
                                    vehicle: c,
                                }),
                                [c, d],
                            ),
                            I = C > 0 && o !== i.Compare && o !== i.Battle && o !== i.Respawn,
                            O = R.strings.tank_setup.section.$dyn(s);
                        if ('string' != typeof O)
                            throw new Error(`No top label text for section type ${s} or it's not a string`);
                        return a().createElement(
                            'div',
                            {
                                id: E ? oe : v,
                                ref: F,
                                className: _()(
                                    'Section_base_87',
                                    m,
                                    f && 'sectionSelected',
                                    C > 1 && 'multiSlot',
                                    g >= 0 && h && 'existFilledSlots',
                                ),
                            },
                            T &&
                                a().createElement(
                                    Fe,
                                    { className: 'Section_configLabel_e7' },
                                    a().createElement(se, {
                                        classMix: 'Section_configText_d0',
                                        text: R.strings.tank_setup.categories.reserves.config(),
                                        binding: y,
                                    }),
                                ),
                            I &&
                                a().createElement(
                                    'div',
                                    { className: 'Section_label_52' },
                                    a().createElement(re, { text: O, parentRef: F, show: !f, panelType: o }),
                                ),
                            a().createElement(
                                Vt,
                                Zt(
                                    { groupIndex: t, sectionIndex: u, sectionType: s, panelType: o, blockOnGrabIds: x },
                                    b,
                                ),
                            ),
                            Boolean(r) &&
                                a().createElement(
                                    'div',
                                    { className: 'Section_counter_e3' },
                                    a().createElement(ie.A, { value: r, size: 'small', fadeInAnimation: !0 }),
                                ),
                        );
                    }),
                    Kt = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    Yt = ({ id: e, isSelected: t, imageSource: u, onSlotSelected: i, panelType: s }) => {
                        const r = (0, n.useCallback)(() => {
                                !t && i(e);
                            }, [e, t, i]),
                            o = _()(Kt.slot, !t && Kt.slot__active, Kt.slot__compare),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return a().createElement(
                            We,
                            { slotType: ue, slotId: e, panelType: s },
                            a().createElement(
                                'div',
                                { className: Kt.base },
                                a().createElement(
                                    'div',
                                    { className: o, onClick: r, id: `shell-slot-${e}` },
                                    t && a().createElement('div', { className: Kt.glow }),
                                    a().createElement('div', { className: Kt.image, style: l }),
                                    a().createElement('div', { className: Kt.toggle, style: c }),
                                ),
                            ),
                        );
                    },
                    Qt = {
                        base: 'ShellsSlot_base_a1',
                        base__grabbing: 'ShellsSlot_base__grabbing_8f',
                        shell: 'ShellsSlot_shell_85',
                        hover: 'ShellsSlot_hover_f0',
                        image: 'ShellsSlot_image_e6',
                        infinity: 'ShellsSlot_infinity_06',
                        count: 'ShellsSlot_count_ea',
                        shadow: 'ShellsSlot_shadow_e6',
                    },
                    Jt = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: u,
                        imageSource: s,
                        count: r,
                        isInfinity: o,
                        isSelected: c,
                        panelType: d,
                        intCD: E,
                        slotIndex: m,
                        grabberId: b,
                        isSetupSwitching: A,
                        containerRef: F,
                        activeDragId: D,
                        handleGrabberAction: p,
                        forceLeftUpdate: g,
                        potentialDropId: C,
                        blockOnGrabIds: h,
                        isDisabled: B,
                        isDefenseMode: f,
                    }) => {
                        const S = !l(d),
                            v = (0, n.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            w = b && b === C,
                            x = b && b === D,
                            T = (0, n.useMemo)(() => {
                                const n = { slotType: ee, slotId: e, fieldType: 1, intCD: E };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: t,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: u,
                                    }),
                                ];
                            }, [E, e, t, u]),
                            y = T[0],
                            I = T[1],
                            O = (0, n.useMemo)(
                                () => ({
                                    id: b,
                                    containerRef: F,
                                    isEnabled: Boolean(b) && c,
                                    isUpdateAvailable: Boolean(D),
                                    handleAction: p,
                                    forceCenterX: g,
                                    blockOnGrabIds: h,
                                }),
                                [D, h, F, g, b, p, c],
                            ),
                            k = (0, n.useMemo)(
                                () => ({ slotIndex: m, uniqueKey: E, slotType: ee, imageSource: null }),
                                [E, m],
                            );
                        return a().createElement(
                            Qe,
                            { isEnabled: S && f && !A && !B, args: I },
                            a().createElement(
                                Ge.t,
                                {
                                    targetId:
                                        d !== i.Setup ? R.views.halloween.lobby.widgets.TankSetupView('resId') : void 0,
                                    args: y,
                                    isEnabled: !D,
                                },
                                a().createElement(
                                    'div',
                                    { id: `shell-slot-${m}`, className: Qt.base },
                                    a().createElement(
                                        'div',
                                        {
                                            className: _()(
                                                Qt.shell,
                                                !D && S && !B && Qt.shell__active,
                                                x && Qt.shell__grabbing,
                                                !x && w && Qt.shell__potential,
                                            ),
                                        },
                                        a().createElement('div', { className: Qt.shadow }),
                                        a().createElement(
                                            xe,
                                            { when: S, wrapper: He, withProps: O },
                                            a().createElement(
                                                xe,
                                                { when: S, wrapper: Ot, withProps: k },
                                                a().createElement('div', { className: Qt.image, style: v }),
                                                o
                                                    ? a().createElement('div', { className: Qt.infinity })
                                                    : a().createElement('div', { className: Qt.count }, r),
                                            ),
                                        ),
                                        a().createElement('div', { className: Qt.hover }),
                                    ),
                                ),
                            ),
                        );
                    },
                    eu = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                    ];
                function tu() {
                    return (
                        (tu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        tu.apply(null, arguments)
                    );
                }
                const uu = (0, s.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.isCompare,
                            s = e.handleSlotSelected,
                            o = e.baseId,
                            l = e.grabber,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, eu);
                        const d = l.handleGrabberAction,
                            E = l.dragState,
                            m = l.getForceCenterX,
                            b = k().model,
                            A = b.computes.slots.length(t, u),
                            F = b.computes.slots.slot(t, u, n),
                            D = A > 1 ? `${o}-${F.id}` : '';
                        return r(F)
                            ? null
                            : a().createElement(
                                  'div',
                                  {
                                      key: F.id,
                                      className: _()(
                                          'ShellContainer_base_fc',
                                          b.root.get().isDefenseMode && 0 !== n && 'ShellContainer_base__compressed_c6',
                                      ),
                                  },
                                  i
                                      ? a().createElement(Yt, tu({}, F, { onSlotSelected: s }))
                                      : a().createElement(
                                            Jt,
                                            tu(
                                                {},
                                                F,
                                                {
                                                    slotIndex: n,
                                                    grabberId: D,
                                                    forceLeftUpdate: m(D),
                                                    activeDragId: E.activeDragId,
                                                    handleGrabberAction: d,
                                                    potentialDropId: E.potentialDropId,
                                                    isDefenseMode: b.root.get().isDefenseMode,
                                                },
                                                c,
                                            ),
                                        ),
                              );
                    }),
                    nu = (0, s.Pi)(
                        ({
                            panelType: e,
                            onSelected: t,
                            isCompare: u,
                            isSelected: s,
                            syncInitiator: r,
                            blockOnGrabIds: l,
                            isDisabled: c,
                            isSetupSwitching: _,
                            setIsExitBlocked: d,
                            groupIndex: E,
                            sectionIndex: m,
                        }) => {
                            const b = k(),
                                A = b.model,
                                F = b.controls,
                                D = A.computes.slots.length(E, m),
                                p = (0, n.useRef)(!1),
                                g = (0, n.useRef)(null),
                                C = u ? ue : ee,
                                h = `${C}-${D}shells`,
                                B = !o(e),
                                f = (0, n.useCallback)(
                                    (e) => {
                                        F.sectionSelect({ selectedSlot: e, selectedSection: C }),
                                            B && $.O.sound.play.click();
                                    },
                                    [F, C, B],
                                ),
                                S = (0, n.useCallback)(
                                    (e, t) => {
                                        F.dragDropSwap({
                                            sectionType: C,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(t[t.length - 1]),
                                        });
                                    },
                                    [F, C],
                                ),
                                v = x({
                                    baseId: h,
                                    slotsLength: D,
                                    handleSwap: S,
                                    setIsExitBlocked: d,
                                    syncInitiator: r,
                                });
                            return (
                                (0, n.useEffect)(
                                    () =>
                                        (0, L.v)(() => {
                                            p.current = !0;
                                        }),
                                    [],
                                ),
                                (0, n.useEffect)(() => {
                                    if (s && e === i.Setup) {
                                        if (!p.current)
                                            return (0, L.v)(() => {
                                                t();
                                            });
                                        t();
                                    }
                                }, [s, e, t]),
                                a().createElement(
                                    'div',
                                    {
                                        id: h,
                                        ref: g,
                                        className: 'Shells_base_c3',
                                        onMouseEnter: () => {
                                            !c && B && $.O.sound.play.highlight();
                                        },
                                    },
                                    U(D, (t) =>
                                        a().createElement(uu, {
                                            key: `${E} ${m} ${t}`,
                                            groupIndex: E,
                                            sectionIndex: m,
                                            slotIndex: t,
                                            isCompare: u,
                                            containerRef: g,
                                            handleSlotSelected: f,
                                            panelType: e,
                                            blockOnGrabIds: l,
                                            isSelected: s,
                                            isSetupSwitching: _,
                                            grabber: v,
                                            baseId: h,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    au = {
                        base: 'ShellsSection_base_dd',
                        base__grabbing: 'ShellsSection_base__grabbing_33',
                        base__compressed: 'ShellsSection_base__compressed_c6',
                        attention: 'ShellsSection_attention_09',
                        blinking: 'ShellsSection_blinking_6f',
                        border: 'ShellsSection_border_b2',
                        border__double: 'ShellsSection_border__double_64',
                        border__triple: 'ShellsSection_border__triple_ed',
                        disabled: 'ShellsSection_disabled_4c',
                    },
                    iu = [i.Hangar, i.Battle, i.Prebattle, i.Respawn],
                    su = (0, s.Pi)(
                        ({
                            type: e,
                            sectionsIds: t,
                            panelType: u,
                            onActiveSlotChanged: s,
                            isDisabled: r,
                            isBorderActive: o,
                            classMix: l,
                            isSetupSwitching: c,
                            setIsExitBlocked: d,
                            newItemsCount: E,
                            groupIndex: m,
                            sectionIndex: b,
                        }) => {
                            const A = k().model,
                                F = A.ammunitionPanel.get(),
                                D = F.ammoNotFull,
                                p = F.selectedSection,
                                g = F.syncInitiator,
                                C = (0, n.useRef)(null),
                                h = u === i.Compare,
                                B = u === i.Prebattle && e === ee,
                                f = p === e || B,
                                S = (0, n.useCallback)(() => {
                                    s(C, p, 0);
                                }, [s, p]),
                                v = w(e, t),
                                x = v.selfId,
                                T = v.blockOnGrabIds,
                                y = ((e) => iu.includes(e))(u) && !r && D,
                                I = A.computes.slots.filteredLength(m, b);
                            return a().createElement(
                                'div',
                                {
                                    id: c ? oe : x,
                                    className: _()(
                                        au.base,
                                        l,
                                        au[`base__${u}`],
                                        !o && f && au.base__selected,
                                        h && au.base__compare,
                                        A.root.get().isDefenseMode && au.base__compressed,
                                        r && au.base__disabled,
                                    ),
                                    ref: C,
                                },
                                y && a().createElement('div', { className: au.attention }),
                                y &&
                                    a().createElement('div', {
                                        className: _()(
                                            au.border,
                                            2 === I && au.border__double,
                                            3 === I && au.border__triple,
                                        ),
                                    }),
                                a().createElement(nu, {
                                    groupIndex: m,
                                    sectionIndex: b,
                                    panelType: u,
                                    onSelected: S,
                                    isSelected: f,
                                    isCompare: h,
                                    syncInitiator: g,
                                    blockOnGrabIds: T,
                                    isSetupSwitching: c,
                                    setIsExitBlocked: d,
                                }),
                                Boolean(E) &&
                                    a().createElement(
                                        'div',
                                        { className: au.counter },
                                        a().createElement(ie.A, { value: E, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                r && a().createElement('div', { className: au.disabled }),
                            );
                        },
                    ),
                    ru = {
                        base: 'Sections_base_61',
                        section: 'Sections_section_10',
                        section__battle: 'Sections_section__battle_f5',
                        section__small: 'Sections_section__small_bd',
                        section__extraSmall: 'Sections_section__extraSmall_48',
                        section__first: 'Sections_section__first_39',
                    };
                function ou() {
                    return (
                        (ou = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        ou.apply(null, arguments)
                    );
                }
                const lu = (0, s.Pi)(
                        ({
                            groupIndex: e,
                            panelType: t,
                            isDisabled: u = !1,
                            onActiveSlotChanged: n,
                            isBorderActive: i,
                            isChangeSetupIndex: s,
                            setIsExitBlocked: r,
                        }) => {
                            const o = k().model,
                                c = W(['section'], ru),
                                d = o.computes.sections.IDs(e),
                                E = {
                                    panelType: t,
                                    isDisabled: u,
                                    onActiveSlotChanged: n,
                                    isBorderActive: i,
                                    sectionsIds: d,
                                    isChangeSetupIndex: s,
                                    setIsExitBlocked: r,
                                };
                            return a().createElement(
                                'div',
                                { className: ru.base },
                                U(o.computes.sections.length(e), (u) => {
                                    const n = o.computes.sections.section(e, u);
                                    if (!n.slots || !n.slots.length) return null;
                                    const i = _()(
                                        c.section,
                                        0 !== u && l(t) && ru.section__battle,
                                        0 === u && ru.section__first,
                                    );
                                    if (n.type === ee || n.type === ue) {
                                        const r = n;
                                        return a().createElement(
                                            a().Fragment,
                                            { key: `${n.name}${u}${n.slots.length}` },
                                            !o.root.get().isDefenseMode && a().createElement(ae, { panelType: t }),
                                            a().createElement(
                                                su,
                                                ou({}, r, E, {
                                                    groupIndex: e,
                                                    sectionIndex: u,
                                                    isSetupSwitching: s,
                                                    key: `${n.name}${e}${n.slots.length}`,
                                                    classMix: i,
                                                }),
                                            ),
                                        );
                                    }
                                    return a().createElement(
                                        Xt,
                                        ou({}, n, E, {
                                            groupIndex: e,
                                            sectionIndex: u,
                                            isSetupSwitching: s,
                                            key: `${n.name}${e}${n.slots.length}`,
                                            classMix: i,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    cu = {
                        base: 'Group_base_cc',
                        wrapper: 'Group_wrapper_22',
                        switch: 'Group_switch_1f',
                        switch__battle: 'Group_switch__battle_37',
                        switch__small: 'Group_switch__small_e9',
                        switch__extraSmall: 'Group_switch__extraSmall_19',
                        prebattleSwitchIndicator: 'Group_prebattleSwitchIndicator_7b',
                        hint: 'Group_hint_ff',
                        hint__disabled: 'Group_hint__disabled_0a',
                    };
                function _u() {
                    return (
                        (_u = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        _u.apply(null, arguments)
                    );
                }
                const du = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    Eu = (e) => e.setupSelector.hotKeys,
                    mu = (0, s.Pi)(({ groupIndex: e, sectionProps: t, isSetupSwitching: u, setSetupSwitching: n }) => {
                        const s = W(['switch'], cu),
                            r = k().model,
                            l = r.root.get().isDisabled,
                            c = r.computes.groups.group(e);
                        return a().createElement(
                            'div',
                            { className: cu.base },
                            a().createElement(
                                'div',
                                { className: cu.wrapper },
                                a().createElement(
                                    K,
                                    ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(c, n),
                                    a().createElement(lu, _u({}, t, { groupIndex: e, isChangeSetupIndex: u })),
                                ),
                                c.setupSelector.isSwitchEnabled &&
                                    a().createElement(
                                        'div',
                                        { className: _()(s.switch, o(t.panelType) && cu.switch__battle) },
                                        c.setupSelector.isPrebattleSwitchDisabled &&
                                            a().createElement(
                                                V.i,
                                                { header: du.title(), body: String(du.desc.$dyn(`c_${c.groupId}`)) },
                                                a().createElement('div', { className: cu.prebattleSwitchIndicator }),
                                            ),
                                    ),
                            ),
                            ((d = c),
                            ((E = t.panelType) === i.Battle || E === i.Respawn) &&
                                d.setupSelector.isSwitchEnabled &&
                                Eu(d) &&
                                a().createElement(
                                    'div',
                                    { className: _()(cu.hint, l && cu.hint__disabled) },
                                    a().createElement(J, { hotKeys: Eu(c) }),
                                )),
                        );
                        var d, E;
                    }),
                    bu = (0, s.Pi)(
                        ({ sectionProps: e, isSetupSwitching: t, isReady: u, setSetupSwitching: s, children: r }) => {
                            const o = k(),
                                l = o.model,
                                c = o.controls.changeSetupIndex;
                            (0, n.useEffect)(() => {
                                (e.panelType !== i.Hangar && e.panelType !== i.Setup) || !u || s(!1);
                            }, [u, e.panelType, s]),
                                (0, n.useEffect)(() => {
                                    e.panelType === i.Respawn && s(!1);
                                }, [e.panelType, s]);
                            const _ = (0, n.useCallback)(
                                (t) => {
                                    e.panelType === i.Respawn && s(!0), c(t);
                                },
                                [c, e.panelType, s],
                            );
                            return a().createElement(
                                'div',
                                { className: 'Groups_base_9c' },
                                U(l.computes.groups.length(), (u) =>
                                    a().createElement(mu, {
                                        key: `group-${u}`,
                                        sectionProps: e,
                                        groupIndex: u,
                                        isSetupSwitching: t,
                                        setSetupSwitching: s,
                                        handleSetupSwitching: _,
                                    }),
                                ),
                                r,
                            );
                        },
                    ),
                    Au = {
                        base: 'AmmunitionPanel_base_78',
                        base__locked: 'AmmunitionPanel_base__locked_14',
                        base__disabled: 'AmmunitionPanel_base__disabled_f2',
                        base__hidden: 'AmmunitionPanel_base__hidden_5e',
                        border: 'AmmunitionPanel_border_de',
                        border__hidden: 'AmmunitionPanel_border__hidden_8a',
                        roleSkillSlot: 'AmmunitionPanel_roleSkillSlot_67',
                        roleSkillSlot__battle: 'AmmunitionPanel_roleSkillSlot__battle_91',
                        roleSkillSlot__small: 'AmmunitionPanel_roleSkillSlot__small_14',
                        roleSkillSlot__extraSmall: 'AmmunitionPanel_roleSkillSlot__extraSmall_6a',
                        roleSkillSlot__prebattle: 'AmmunitionPanel_roleSkillSlot__prebattle_6a',
                    },
                    Fu = (0, s.Pi)(({ show: e = !0, isReady: t = !0, panelType: u, isDisabled: s = !1 }) => {
                        const r = k(),
                            o = r.model,
                            l = r.controls,
                            c = o.ammunitionPanel.get(),
                            d = c.isSetupSwitchInProgress,
                            E = c.syncInitiator,
                            m = o.roleSkillSlot.get(),
                            b = (0, n.useRef)(!1),
                            A = (0, n.useState)({ slotWidth: 0, slotOffset: 0 }),
                            F = A[0],
                            D = A[1],
                            p = (0, n.useState)(!1),
                            g = p[0],
                            C = p[1],
                            h = (0, n.useState)(!1),
                            B = h[0],
                            f = h[1],
                            S = (0, n.useRef)(null),
                            v = (0, n.useRef)({ element: null, generation: 0, slotIndex: null, sectionIndex: null }),
                            w = (0, n.useCallback)(
                                (e, t) => {
                                    if (g || d || u !== i.Hangar) return;
                                    const n = null != t ? t : { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                    l.sectionResized(Object.assign({ sectionType: e }, n));
                                },
                                [g, d, u, l],
                            ),
                            x = (0, n.useCallback)(
                                (e) => {
                                    w('main', e);
                                },
                                [w],
                            );
                        ((e, t, u, a = []) => {
                            const i = (0, j.M)(
                                () =>
                                    (0, L.v)(() =>
                                        (0, L.v)(() => {
                                            if (e.current) {
                                                const u = e.current.getBoundingClientRect(),
                                                    n = {
                                                        width: $.O.view.pxToRem(u.width),
                                                        height: $.O.view.pxToRem(u.height),
                                                        offsetX: $.O.view.pxToRem(u.left),
                                                        offsetY: $.O.view.pxToRem(u.top),
                                                    };
                                                window.tutorialApi.updateComponents(), t(n);
                                            }
                                        }),
                                    ),
                                [t, e],
                            );
                            (0, n.useEffect)(() => {
                                i();
                            }, [i, ...a]),
                                (0, n.useEffect)(() => {
                                    if (u)
                                        return (
                                            engine.on('clientResized', i),
                                            () => {
                                                engine.off('clientResized', i);
                                            }
                                        );
                                }, [u, i]);
                        })(S, x, !0, [E]);
                        const T = (0, n.useCallback)(() => {
                                f(!1);
                            }, []),
                            y = (() => {
                                const e = (0, n.useState)($.O.view.getScale()),
                                    t = e[0],
                                    u = e[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = () => {
                                            u($.O.view.getScale());
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
                            I = (0, n.useCallback)(() => {
                                if (v.current.element && S.current) {
                                    const e = v.current.element.getBoundingClientRect(),
                                        t = S.current.getBoundingClientRect();
                                    D({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                                }
                            }, [y]),
                            O = (0, n.useCallback)(
                                (e, t, u) => {
                                    if (e.current && S.current) {
                                        const n = ((e, t, u) =>
                                            e !== u.current.slotIndex || t !== u.current.sectionIndex)(u, t, v);
                                        (v.current.element = e.current),
                                            (v.current.slotIndex = u),
                                            (v.current.sectionIndex = t),
                                            b.current && n ? f(!0) : (b.current = !0),
                                            v.current.generation && I();
                                    }
                                },
                                [I],
                            ),
                            R = (0, n.useCallback)(
                                () =>
                                    (0, L.v)(() => {
                                        (v.current.generation += 1), I();
                                    }),
                                [v, I],
                            );
                        (0, n.useEffect)(
                            () => (
                                engine.on('clientResized', R),
                                (0, L.v)(() => {
                                    engine.off('clientResized', R), x(), R();
                                })
                            ),
                            [x, R],
                        );
                        const P = F.slotWidth,
                            z = F.slotOffset,
                            G = u === i.Setup || u === i.Compare,
                            U = (0, n.useMemo)(
                                () => ({ panelType: u, isDisabled: s, onActiveSlotChanged: O, isBorderActive: B }),
                                [B, s, O, u],
                            ),
                            V = W(['roleSkillSlot'], Au);
                        return a().createElement(
                            'div',
                            {
                                ref: S,
                                className: _()(
                                    Au.base,
                                    !t && Au.base__locked,
                                    !e && Au.base__hidden,
                                    s && Au.base__disabled,
                                ),
                            },
                            G &&
                                a().createElement(H, {
                                    key: v.current.generation,
                                    slotOffset: z,
                                    slotWidth: P,
                                    isAnimationRunning: B,
                                }),
                            a().createElement(
                                bu,
                                { isSetupSwitching: d || g, sectionProps: U, isReady: t, setSetupSwitching: C },
                                m.roleSkill &&
                                    a().createElement(M, {
                                        roleSkill: m.roleSkill,
                                        tooltipId: m.tooltipId,
                                        tooltipHeader: m.tooltipHeader,
                                        tooltipBody: m.tooltipBody,
                                        className: _()(Au.roleSkillSlot, Au[`roleSkillSlot__${u}`], V.roleSkillSlot),
                                    }),
                            ),
                            G &&
                                a().createElement(
                                    'div',
                                    { className: _()(Au.border, !B && Au.border__hidden) },
                                    a().createElement(N, { slotWidth: P, slotOffset: z, onAnimationEnd: T }),
                                ),
                        );
                    });
                (0, s.Pi)(() => {
                    const e = k().model.root.get(),
                        t = e.isDisabled,
                        u = e.isReady;
                    return a().createElement(
                        'div',
                        { className: 'TankSetupApp_base_94' },
                        a().createElement(Fu, { panelType: i.Hangar, isDisabled: t, isReady: u }),
                    );
                });
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
            9734: (e, t, u) => {
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
            7841: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    base: 'TextButton_base_1b',
                    base__leaderboard: 'TextButton_base__leaderboard_30',
                    base__close: 'TextButton_base__close_82',
                    caption: 'TextButton_caption_d0',
                    base__hover: 'TextButton_base__hover_23',
                    base__active: 'TextButton_base__active_61',
                    icon: 'TextButton_icon_a6',
                    icon__close: 'TextButton_icon__close_42',
                    icon__info: 'TextButton_icon__info_cf',
                    icon__leaderboard: 'TextButton_icon__leaderboard_65',
                    icon__url: 'TextButton_icon__url_2d',
                    iconHover: 'TextButton_iconHover_6e',
                    iconHover__close: 'TextButton_iconHover__close_83',
                    iconHover__info: 'TextButton_iconHover__info_54',
                    iconHover__leaderboard: 'TextButton_iconHover__leaderboard_35',
                    iconHover__url: 'TextButton_iconHover__url_81',
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, n] = deferred[o], i = !0, s = 0; s < t.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(o--, 1);
                        var r = u();
                        void 0 !== r && (e = r);
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
        (__webpack_require__.j = 945),
        (() => {
            var e = { 945: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [i, s, r] = u,
                        o = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (r) var l = r(__webpack_require__);
                    }
                    for (t && t(u); o < i.length; o++)
                        (a = i[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(8485));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
