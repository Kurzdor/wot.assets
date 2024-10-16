(() => {
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { u5: () => d });
                var a = t(6483),
                    n = t.n(a),
                    r = t(7727),
                    s = t(6179),
                    i = t.n(s),
                    o = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: c,
                    mixClass: d,
                    soundHover: _,
                    soundClick: E,
                    onMouseEnter: m,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: h,
                    onMouseLeave: b,
                    onClick: D,
                }) => {
                    const g = (0, s.useRef)(null),
                        B = (0, s.useState)(t),
                        C = B[0],
                        f = B[1],
                        p = (0, s.useState)(!1),
                        v = p[0],
                        y = p[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                C && null !== g.current && !g.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, s.useEffect)(() => {
                            f(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: g,
                                className: n()(
                                    o.Z.base,
                                    o.Z[`base__${a}`],
                                    c && o.Z.base__disabled,
                                    u && o.Z[`base__${u}`],
                                    C && o.Z.base__focus,
                                    v && o.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== _ && (0, r.G)(_), m && m(e));
                                },
                                onMouseMove: function (e) {
                                    A && A(e);
                                },
                                onMouseUp: function (e) {
                                    c || (h && h(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== E && (0, r.G)(E),
                                        F && F(e),
                                        t && (c || (g.current && (g.current.focus(), f(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (b && b(e), y(!1));
                                },
                                onClick: function (e) {
                                    c || (D && D(e));
                                },
                            },
                            a !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: o.Z.back }),
                                    i().createElement('span', { className: o.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: n()(o.Z.state, o.Z.state__default) },
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
                const d = c;
            },
            2106: (e, u, t) => {
                'use strict';
                let a, n;
                t.d(u, { L: () => a }),
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
                    })(n || (n = {}));
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => d });
                var a = t(3138),
                    n = t(6179),
                    r = t(1043),
                    s = t(5262);
                const i = a.O.client.getSize('rem'),
                    o = i.width,
                    l = i.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, r.j)),
                    d = (0, n.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var a = t(3138),
                    n = t(6536),
                    r = t(6179),
                    s = t.n(r),
                    i = t(3495),
                    o = t(1043),
                    l = t(5262);
                const c = ({ children: e }) => {
                    const u = (0, r.useContext)(i.Y),
                        t = (0, r.useState)(u),
                        c = t[0],
                        d = t[1],
                        _ = (0, r.useCallback)((e, u) => {
                            const t = a.O.view.pxToRem(e),
                                n = a.O.view.pxToRem(u);
                            d(Object.assign({ width: t, height: n }, (0, l.T)(t, n, o.j)));
                        }, []),
                        E = (0, r.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            _(e.width, e.height);
                        }, [_]);
                    (0, n.Z)(() => {
                        a.O.client.events.on('clientResized', _), a.O.client.events.on('self.onScaleUpdated', E);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', _),
                                    a.O.client.events.off('self.onScaleUpdated', E);
                            },
                            [_, E],
                        );
                    const m = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(i.Y.Provider, { value: m }, e);
                };
            },
            6010: (e, u, t) => {
                'use strict';
                var a = t(6179),
                    n = t(7382),
                    r = t(3495);
                const s = ['children'],
                    i = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, s);
                        const i = (0, a.useContext)(r.Y),
                            o = i.extraLarge,
                            l = i.large,
                            c = i.medium,
                            d = i.small,
                            _ = i.extraSmall,
                            E = i.extraLargeWidth,
                            m = i.largeWidth,
                            A = i.mediumWidth,
                            F = i.smallWidth,
                            h = i.extraSmallWidth,
                            b = i.extraLargeHeight,
                            D = i.largeHeight,
                            g = i.mediumHeight,
                            B = i.smallHeight,
                            C = i.extraSmallHeight,
                            f = { extraLarge: b, large: D, medium: g, small: B, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && o) return u;
                            if (t.large && l) return u;
                            if (t.medium && c) return u;
                            if (t.small && d) return u;
                            if (t.extraSmall && _) return u;
                        } else {
                            if (t.extraLargeWidth && E) return (0, n.H)(u, t, f);
                            if (t.largeWidth && m) return (0, n.H)(u, t, f);
                            if (t.mediumWidth && A) return (0, n.H)(u, t, f);
                            if (t.smallWidth && F) return (0, n.H)(u, t, f);
                            if (t.extraSmallWidth && h) return (0, n.H)(u, t, f);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && b) return u;
                                if (t.largeHeight && D) return u;
                                if (t.mediumHeight && g) return u;
                                if (t.smallHeight && B) return u;
                                if (t.extraSmallHeight && C) return u;
                            }
                        }
                        return null;
                    };
                (i.defaultProps = {
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
                    (0, a.memo)(i);
            },
            7382: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { YN: () => n.Y, ZN: () => a.Z }), t(6010);
                var a = t(1039),
                    n = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
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
                'use strict';
                var a;
                function n(e, u, t) {
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
                        n = (function (e, u) {
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
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
                }
                t.d(u, { T: () => n }),
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
            7078: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => o });
                var a = t(6179),
                    n = t.n(a),
                    r = t(2056);
                const s = ['children'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, s);
                    return n().createElement(
                        r.u,
                        i(
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
            3415: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => l });
                var a = t(6179),
                    n = t.n(a),
                    r = t(7078),
                    s = t(6373),
                    i = t(2056);
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const a = n().createElement('div', { className: t }, e);
                    if (u.header || u.body) return n().createElement(s.i, u, a);
                    const l = u.contentId;
                    return l ? n().createElement(i.u, o({}, u, { contentId: l }), a) : n().createElement(r.t, u, a);
                };
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var a = t(2056),
                    n = t(6179),
                    r = t.n(n);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            _ = e.args,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, s);
                        const m = (0, n.useMemo)(() => {
                            const e = Object.assign({}, _, { body: t, header: l, note: c, alert: d });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [d, t, l, c, _]);
                        return r().createElement(
                            a.u,
                            i(
                                {
                                    contentId:
                                        ((A = null == _ ? void 0 : _.hasHtmlContent),
                                        A ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: m,
                                },
                                E,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var a = t(7902),
                    n = t(9916),
                    r = t(6179);
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
                const o = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
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
                            n = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            E = e.ignoreShowDelay,
                            m = void 0 !== E && E,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            h = e.decoratorId,
                            b = void 0 === h ? 0 : h,
                            D = e.isEnabled,
                            g = void 0 === D || D,
                            B = e.targetId,
                            C = void 0 === B ? 0 : B,
                            f = e.onShow,
                            p = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, s);
                        const y = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, r.useMemo)(() => C || (0, a.F)().resId, [C]),
                            x = (0, r.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (o(t, b, { isMouseEvent: !0, on: !0, arguments: i(n) }, w),
                                    f && f(),
                                    (y.current.isVisible = !0));
                            }, [t, b, n, w, f]),
                            k = (0, r.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        o(t, b, { on: !1 }, w),
                                        y.current.isVisible && p && p(),
                                        (y.current.isVisible = !1);
                                }
                            }, [t, b, w, p]),
                            S = (0, r.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(y.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = y.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', S, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', S, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === g && k();
                            }, [g, k]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            ),
                            g
                                ? (0, r.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((L = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((y.current.timeoutId = window.setTimeout(x, m ? 100 : 400)),
                                                          l && l(e),
                                                          L && L(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  k(), null == c || c(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === F && k(), null == _ || _(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === F && k(), null == d || d(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : u
                        );
                        var L;
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
                t.d(u, { U: () => s });
                var a = t(3138);
                function n(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const r = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: u = 0, getRoot: t = r, context: s = 'model' } = {}) {
                    const i = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = i.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const a = t(u),
                            n = s.split('.').reduce((e, u) => e[u], a);
                        return 'string' != typeof e || 0 === e.length
                            ? n
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, n);
                    };
                    return {
                        subscribe: (t, n) => {
                            const r = 'string' == typeof n ? `${s}.${n}` : s,
                                o = a.O.view.addModelObserver(r, u, !0);
                            return i.set(o, t), e && t(l(n)), o;
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
                            for (
                                var e,
                                    t = (function (e, u) {
                                        var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (t) return (t = t.call(e)).next.bind(t);
                                        if (
                                            Array.isArray(e) ||
                                            (t = (function (e, u) {
                                                if (e) {
                                                    if ('string' == typeof e) return n(e, u);
                                                    var t = {}.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === t && e.constructor && (t = e.constructor.name),
                                                        'Map' === t || 'Set' === t
                                                            ? Array.from(e)
                                                            : 'Arguments' === t ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                              ? n(e, u)
                                                              : void 0
                                                    );
                                                }
                                            })(e)) ||
                                            (u && e && 'number' == typeof e.length)
                                        ) {
                                            t && (e = t);
                                            var a = 0;
                                            return function () {
                                                return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                                            };
                                        }
                                        throw new TypeError(
                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })(i.keys());
                                !(e = t()).done;

                            )
                                o(e.value, u);
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => o });
                var a = t(4598),
                    n = t(9174),
                    r = t(6179),
                    s = t.n(r),
                    i = t(8246);
                const o = () => (e, u) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: d }) {
                            const _ = (0, r.useRef)([]),
                                E = (t, r, s) => {
                                    var o;
                                    const l = i.U(r),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        E = (e) => _.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const r = null != u ? u : d(e),
                                                        s = n.LO.box(r, { equals: a.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const r = null != u ? u : d(e),
                                                        s = n.LO.box(r, { equals: a.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const a = d(u);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, u) => ((e[u] = n.LO.box(a[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((u) => {
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
                                                            s = Object.entries(r),
                                                            i = s.reduce(
                                                                (e, [u, t]) => ((e[t] = n.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        s.forEach(([u, t]) => {
                                                                            i[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            i
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
                                m = (0, r.useRef)(!1),
                                A = (0, r.useState)(o),
                                F = A[0],
                                h = A[1],
                                b = (0, r.useState)(() => E(o, l, d)),
                                D = b[0],
                                g = b[1];
                            return (
                                (0, r.useEffect)(() => {
                                    m.current ? g(E(F, l, d)) : (m.current = !0);
                                }, [d, F, l]),
                                (0, r.useEffect)(() => {
                                    h(o);
                                }, [o]),
                                (0, r.useEffect)(
                                    () => () => {
                                        D.externalModel.dispose(), _.current.forEach((e) => e());
                                    },
                                    [D],
                                ),
                                s().createElement(t.Provider, { value: D }, c)
                            );
                        },
                        () => (0, r.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => i, onResize: () => r, onScaleUpdated: () => s });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, n.R)(!0);
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
                                : (0, n.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${u}`,
                                            s = l[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, i),
                                            a(),
                                            () => {
                                                n &&
                                                    (s(),
                                                    window.removeEventListener(r, i),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (n = !1));
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
                                e.enabled && (0, n.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, n.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var a = t(527),
                    n = t(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
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
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2493: (e, u, t) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function n(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => n, G: () => a });
            },
            2472: (e, u, t) => {
                'use strict';
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var a = t(5959),
                    n = t(514);
                const r = { view: t(7641), client: a, sound: n.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => s });
                var a = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, a.playSound)(n[u])), e), {}),
                    s = { play: Object.assign({}, r, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var a = t(2472);
                const n = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => y,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => p,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getScale: () => h,
                        getSize: () => E,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => f,
                        isFocused: () => B,
                        pxToRem: () => b,
                        remToPx: () => D,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => x,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    s = t(8566);
                const i = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, i);
                }
                function c(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, i);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
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
                function B() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function p() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const a = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
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
                        var n;
                    },
                    r = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                function a() {}
                function n(e) {
                    return e;
                }
                function r() {
                    return !1;
                }
                t.d(u, { ZT: () => a, jv: () => r, yR: () => n }), console.log;
            },
            7902: (e, u, t) => {
                'use strict';
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
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(6179);
                const n = (e) => {
                    const u = (0, a.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => o, GS: () => l, cJ: () => s, fd: () => i });
                var a = t(6179),
                    n = t(7739),
                    r = t(1043);
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
                    const e = (0, a.useContext)(n.YN),
                        u = e.width,
                        t = e.height,
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
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            4419: (e, u, t) => {
                'use strict';
                t.d(u, { y: () => r });
                var a = t(8045),
                    n = t(6179);
                const r = (e, u, t = !0) => {
                    const r = (0, n.useCallback)(
                        (e) => {
                            const t = e[0];
                            u && u(t);
                        },
                        [u],
                    );
                    (0, n.useEffect)(() => {
                        if (!e.current || !t) return;
                        const u = new a.Z((e) => r(e));
                        return (
                            u.observe(e.current),
                            () => {
                                u.disconnect();
                            }
                        );
                    }, [r, t, e]);
                };
            },
            5521: (e, u, t) => {
                'use strict';
                let a, n;
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
                    })(n || (n = {}));
            },
            9480: (e, u, t) => {
                'use strict';
                function a(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                t.d(u, { UI: () => a });
            },
            7727: (e, u, t) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { G: () => a });
            },
            3649: (e, u, t) => {
                'use strict';
                let a;
                function n(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                t.d(u, { BN: () => r, Eg: () => i, uF: () => n, z4: () => s }),
                    t(1281),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(a || (a = {}));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    i = (e) => e.replace(/&zwnbsp;/g, '\ufeff');
                new RegExp(
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
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(3138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, t, n);
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
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
                t.d(u, { B3: () => l, Z5: () => s.Z5, B0: () => i, c9: () => D, ry: () => b });
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
                const n = a;
                var r = t(1358),
                    s = t(8613);
                let i;
                var o;
                ((o = i || (i = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    m = t(3138);
                const A = ['args'];
                function F(e, u, t, a, n, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, n);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function s(e) {
                                            F(r, a, n, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            F(r, a, n, s, i, 'throw', e);
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
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, A);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    g = () => D(i.CLOSE),
                    B = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var C = t(7572);
                const f = n.instance,
                    p = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => D(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => D(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                _ = o.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            D(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: h(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, g);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = p;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            1504: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => o });
                var a = t(7739),
                    n = t(6179),
                    r = t.n(n),
                    s = t(2849);
                const i = ['children'],
                    o = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, i);
                        return r().createElement(a.ZN, null, r().createElement(s.l, t, u));
                    };
            },
            2849: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => A });
                var a = t(6483),
                    n = t.n(a),
                    r = t(926),
                    s = t.n(r),
                    i = t(6179),
                    o = t.n(i),
                    l = t(5415);
                const c = ['children', 'className'];
                function d() {
                    return (
                        (d = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        d.apply(null, arguments)
                    );
                }
                const _ = {
                        [l.fd.ExtraSmall]: '',
                        [l.fd.Small]: s().SMALL_WIDTH,
                        [l.fd.Medium]: `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH}`,
                        [l.fd.Large]: `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH} ${s().LARGE_WIDTH}`,
                        [l.fd.ExtraLarge]:
                            `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH} ${s().LARGE_WIDTH} ${s().EXTRA_LARGE_WIDTH}`,
                    },
                    E = {
                        [l.Aq.ExtraSmall]: '',
                        [l.Aq.Small]: s().SMALL_HEIGHT,
                        [l.Aq.Medium]: `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT}`,
                        [l.Aq.Large]: `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT} ${s().LARGE_HEIGHT}`,
                        [l.Aq.ExtraLarge]:
                            `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT} ${s().LARGE_HEIGHT} ${s().EXTRA_LARGE_HEIGHT}`,
                    },
                    m = {
                        [l.cJ.ExtraSmall]: '',
                        [l.cJ.Small]: s().SMALL,
                        [l.cJ.Medium]: `${s().SMALL} ${s().MEDIUM}`,
                        [l.cJ.Large]: `${s().SMALL} ${s().MEDIUM} ${s().LARGE}`,
                        [l.cJ.ExtraLarge]: `${s().SMALL} ${s().MEDIUM} ${s().LARGE} ${s().EXTRA_LARGE}`,
                    },
                    A = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, c);
                        const r = (0, l.GS)(),
                            s = r.mediaWidth,
                            i = r.mediaHeight,
                            A = r.mediaSize;
                        return o().createElement('div', d({ className: n()(t, _[s], E[i], m[A]) }, a), u);
                    };
            },
            4029: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => a.z });
                var a = t(1504);
            },
            3618: (e, u, t) => {
                'use strict';
                t.d(u, { w: () => E });
                var a = t(6483),
                    n = t.n(a),
                    r = t(3415),
                    s = t(4419),
                    i = t(6179),
                    o = t.n(i),
                    l = t(8055),
                    c = t(3310),
                    d = t(131),
                    _ = t(9053);
                const E = o().memo(
                    ({
                        text: e,
                        classMix: u,
                        onSizeChanged: t,
                        binding: a,
                        isTooltipEnable: E = !1,
                        isTruncationAvailable: m = !1,
                        customTooltipArgs: A,
                        targetId: F,
                        justifyContent: h = _.v2.FlexStart,
                        alignContent: b = _.v2.FlexStart,
                        truncateIdentify: D = _.YA,
                    }) => {
                        const g = (0, i.useRef)(null),
                            B = (0, i.useRef)({ height: 0, width: 0 }),
                            C = (0, i.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            f = C[0],
                            p = C[1],
                            v = (0, i.useMemo)(() => (0, c.s)(e, a, { justifyContent: h }), [a, h, e]),
                            y = (0, i.useMemo)(() => {
                                if (E && f.isTruncated && (!a || !Object.values(a).find((e) => 'object' == typeof e)))
                                    return {
                                        args: Object.assign({ text: e }, A, {
                                            stringifyKwargs: a ? JSON.stringify(a) : '',
                                        }),
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: F,
                                    };
                            }, [a, E, F, e, A, f.isTruncated]),
                            w = (0, i.useCallback)(
                                (e) => {
                                    (B.current.width = e.contentRect.width), (B.current.height = e.contentRect.height);
                                    const u = (0, d.T)(g, v, B.current, D),
                                        a = u[0],
                                        n = u[1];
                                    p({ elementList: a, isTruncated: n, isTruncateFinished: !0 }), t && t(n);
                                },
                                [t, D, v],
                            ),
                            x = (0, i.useMemo)(() => ({ justifyContent: h, alignContent: b }), [b, h]);
                        return (
                            (0, s.y)(g, w, m),
                            o().createElement(
                                'div',
                                {
                                    className: n()(
                                        l.Z.base,
                                        u,
                                        l.Z.base__zeroPadding,
                                        m && l.Z.base__isTruncationAvailable,
                                    ),
                                    style: x,
                                },
                                o().createElement('div', { className: l.Z.unTruncated, ref: g }, v),
                                o().createElement(
                                    r.l,
                                    {
                                        tooltipArgs: y,
                                        className: n()(
                                            l.Z.tooltip,
                                            l.Z[`tooltip__justify-${h}`],
                                            l.Z[`tooltip__align-${b}`],
                                        ),
                                    },
                                    o().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                l.Z.truncated,
                                                !f.isTruncateFinished && m && l.Z.truncated__hide,
                                            ),
                                            style: x,
                                        },
                                        f.isTruncateFinished && m ? f.elementList : v,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, u, t) => {
                'use strict';
                t.d(u, { s: () => _ });
                var a = t(3649),
                    n = t(6799),
                    r = t(6960),
                    s = t(9053);
                const i = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    o = s.u6
                        ? (e) => {
                              const u = [];
                              return (
                                  (0, r.Z)(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(
                                              ...((e) => {
                                                  const u = [];
                                                  return (
                                                      (0, r.Z)(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var t;
                                                              R.strings.settings.LANGUAGE_CODE().toLowerCase() === s.Co
                                                                  ? u.push(...((t = e), t.match(i) || []))
                                                                  : u.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              u.push(e[0]);
                                                          },
                                                      ),
                                                      u
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let a = t.exec(e);
                              if (!a) return [e];
                              const n = [];
                              let r = 0;
                              for (; a; ) {
                                  const i = u.justifyContent === s.v2.FlexEnd ? a.index : t.lastIndex;
                                  n.push(e.slice(r, i)), (r = i), (a = t.exec(e));
                              }
                              return r !== e.length && n.push(e.slice(r)), n;
                          },
                    l = (e, u = '', t) => {
                        const a = [];
                        return (
                            (0, r.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: s.kH.Word, colorTag: u, childList: o(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        n = s.aF[t.charAt(0)];
                                    n === s.kH.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: s.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: s.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : a.push({ blockType: n, colorTag: u, childList: [t] });
                                },
                            ),
                            a
                        );
                    },
                    c = (e, u, t = '', a) => {
                        const n = [];
                        return (
                            (0, r.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...l(e, t, a));
                                },
                                (e) => {
                                    const r = e[1],
                                        i = void 0 === u[r] ? e[0] : u[r];
                                    'string' == typeof i || 'number' == typeof i
                                        ? n.push(...l(String(i), t, a))
                                        : n.push({ blockType: s.kH.Binding, colorTag: t, childList: [i] });
                                },
                            ),
                            n
                        );
                    },
                    d = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            a = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === s.kH.NoBreakWrapper) e.childList.push(a), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: s.kH.NoBreakWrapper, colorTag: '', childList: [u, a] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    _ = (e, u = {}, t) => {
                        if (!e) return [];
                        const i = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === s.kH.NoBreakSymbol
                                        ? ((t = !0), u.push(...d(u.pop(), e)))
                                        : (t ? u.push(...d(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const a = [];
                                return (
                                    (0, r.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...c(e, u, '', t));
                                        },
                                        (e) => {
                                            a.push(...c(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    a
                                );
                            })((0, a.Eg)((0, a.z4)(e)), u, t),
                        );
                        return (0, n.w)(i);
                    };
            },
            6799: (e, u, t) => {
                'use strict';
                t.d(u, { w: () => s });
                var a = t(597),
                    n = t(9053);
                const r = (e, u, t) => {
                        const s = [];
                        return (
                            e.childList.forEach((i, o) => {
                                const l = `${t}_${o}`;
                                if ((0, n.dz)(i)) {
                                    const e = i,
                                        u = e.blockType,
                                        t = a.IY[u],
                                        n = r(e, t, l);
                                    s.push(...n);
                                } else s.push(u({ elementList: [i], textBlock: e, key: l }));
                            }),
                            s
                        );
                    },
                    s = (e) => {
                        const u = [];
                        return (
                            e.forEach((e, t) => {
                                u.push(
                                    ...((e, u) => {
                                        const t = [],
                                            s = e.blockType,
                                            i = a.IY[s],
                                            o = r(e, i, u);
                                        return (
                                            s === n.kH.NoBreakWrapper
                                                ? t.push(i({ elementList: o, textBlock: e, key: `${u}` }))
                                                : t.push(...o),
                                            t
                                        );
                                    })(e, t),
                                );
                            }),
                            u
                        );
                    };
            },
            6960: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = (e, u, t, a) => {
                    let n = u.exec(e),
                        r = 0;
                    for (; n; ) r !== n.index && t(e.slice(r, n.index)), a(n), (r = u.lastIndex), (n = u.exec(e));
                    r !== e.length && t(e.slice(r));
                };
            },
            131: (e, u, t) => {
                'use strict';
                t.d(u, { T: () => c });
                var a = t(6179),
                    n = t.n(a),
                    r = t(9053);
                const s = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    i = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    o = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const a = i(e, u),
                            n = e.textContent.length,
                            r = e.offsetWidth / n,
                            s = Math.ceil(a / r);
                        if (a > 0) {
                            const a = Math.floor((u - e.offsetLeft) / r);
                            return a >= t ? [!0, t + s] : [!1, a];
                        }
                        const o = Math.max(t + s, 0);
                        return n < o ? [!1, 0] : [!0, o];
                    },
                    l = (e, u, t, a, s, i) => {
                        let c = -1,
                            d = null;
                        for (let _ = t; _ >= 0; _--) {
                            const t = e[_],
                                E = Number(e[_].getAttribute(r.bF));
                            if (E === r.kH.LineBreak || E === r.kH.NewLine || E === r.kH.Binding) continue;
                            const m = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = o(t, a, s),
                                    r = e[0],
                                    l = e[1];
                                if (!r) {
                                    l > 0 && (s -= l);
                                    continue;
                                }
                                const E = m.slice(0, m.length - l) + i,
                                    A = u[_];
                                (d = n().cloneElement(A, A.props, E)), (c = _);
                                break;
                            }
                            {
                                const e = t.children,
                                    r = u[_],
                                    o = r.props.children,
                                    E = l(e, o, e.length - 1, a, s, i),
                                    A = E[0],
                                    F = E[1];
                                if (!(A < 0)) {
                                    const e = o.slice(0, A);
                                    (d = n().cloneElement(r, r.props, e, F)), (c = _);
                                    break;
                                }
                                s -= m.length;
                            }
                        }
                        return [c, d];
                    },
                    c = (e, u, t, a = r.YA) => {
                        const n = [...u],
                            o = e.current;
                        if (!o) return [n, !1];
                        const c = t.height,
                            d = t.width,
                            _ = o.lastElementChild;
                        if (!s(_, c) && i(_, d) <= 0) return [n, !1];
                        const E = o.children,
                            m = ((e, u) => {
                                let t = 0,
                                    a = e.length - 1;
                                for (; a - t >= 0; ) {
                                    const n = t + Math.ceil(0.5 * (a - t));
                                    s(e[n], u) ? (a = n - 1) : (t = n + 1);
                                }
                                return t - 1;
                            })(E, c);
                        if (m < 0) return [n, !1];
                        const A = l(E, n, m, d, a.length, a),
                            F = A[0],
                            h = A[1];
                        return h && (n.splice(F, 1, h), n.splice(F + 1)), [n, !0];
                    };
            },
            9053: (e, u, t) => {
                'use strict';
                let a, n, r;
                t.d(u, {
                    Co: () => c,
                    YA: () => i,
                    aF: () => l,
                    bF: () => o,
                    dz: () => s,
                    kH: () => a,
                    u6: () => d,
                    v2: () => n,
                }),
                    (function (e) {
                        (e[(e.Word = 0)] = 'Word'),
                            (e[(e.LineBreak = 1)] = 'LineBreak'),
                            (e[(e.NewLine = 2)] = 'NewLine'),
                            (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (e[(e.Binding = 5)] = 'Binding');
                    })(a || (a = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(n || (n = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(r || (r = {}));
                const s = (e) => void 0 !== e.childList,
                    i = '...',
                    o = 'data-block-type',
                    l = { [r.NBSP]: a.NoBreakSymbol, [r.ZWNBSP]: a.NoBreakSymbol, [r.NEW_LINE]: a.LineBreak },
                    c = 'th',
                    d = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', c].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase());
            },
            597: (e, u, t) => {
                'use strict';
                t.d(u, { IY: () => _ });
                var a = t(6483),
                    n = t.n(a),
                    r = t(6179),
                    s = t.n(r),
                    i = t(9053),
                    o = t(9627),
                    l = t(7629);
                const c = (e) => ({ color: `#${e}` }),
                    d = ({ elementList: e, textBlock: u, key: t }) => {
                        const a = u.colorTag;
                        return a
                            ? o.Z[a]
                                ? s().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: n()(l.Z.word, o.Z[a]) },
                                      e,
                                  )
                                : s().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: l.Z.word, style: c(a) },
                                      e,
                                  )
                            : s().createElement(
                                  'span',
                                  { key: t, 'data-block-type': u.blockType, className: l.Z.word },
                                  e,
                              );
                    },
                    _ = {
                        [i.kH.Word]: d,
                        [i.kH.NoBreakSymbol]: d,
                        [i.kH.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            s().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => s().createElement(s().Fragment, { key: t }, e)),
                            ),
                        [i.kH.LineBreak]: ({ key: e }) =>
                            s().createElement('span', {
                                key: e,
                                'data-block-type': i.kH.LineBreak,
                                className: l.Z.lineBreak,
                            }),
                        [i.kH.NewLine]: ({ elementList: e, key: u }) =>
                            s().createElement(
                                'span',
                                { key: u, 'data-block-type': i.kH.NewLine, className: l.Z.newLine },
                                e,
                            ),
                        [i.kH.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            s().createElement(
                                'span',
                                { key: u, 'data-block-type': i.kH.NoBreakWrapper, className: l.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { f: () => a });
                const a = (e, u) => e.split(',').includes(u);
            },
            5716: (e, u, t) => {
                'use strict';
                t.d(u, { FN: () => n, T6: () => i, XQ: () => a, f3: () => o, hR: () => s, yq: () => r });
                const a = 'lightTank',
                    n = 'mediumTank',
                    r = 'heavyTank',
                    s = 'SPG',
                    i = 'AT-SPG',
                    o = 'premiumIGR';
            },
            3416: (e, u, t) => {
                'use strict';
                t.d(u, { F0: () => d, Rl: () => c, Wq: () => l });
                var a = t(6483),
                    n = t.n(a),
                    r = t(3649),
                    s = t(6179),
                    i = t.n(s),
                    o = t(8387);
                let l, c;
                !(function (e) {
                    (e.C24x24 = 'c_24x24'), (e.C38x38 = 'c_38x38'), (e.C48x48 = 'c_48x48'), (e.C83x74 = 'c_83x74');
                })(l || (l = {})),
                    (function (e) {
                        (e.Silver = 'silver'),
                            (e.Gray = 'gray'),
                            (e.Elite = 'elite'),
                            (e.WhiteSpanish = 'whitespanish'),
                            (e.WhiteSpanishBright = 'whitespanish_bright');
                    })(c || (c = {}));
                const d = (0, s.memo)(function ({ type: e, color: u, className: t, size: a = l.C24x24 }) {
                    return i().createElement('div', {
                        className: n()(o.Z.base, o.Z[`base__${a}`], t),
                        style: {
                            backgroundImage: `url('R.images.halloween.gui.maps.icons.vehicleTypes.flat.${u}.${a}.${(0, r.BN)(e)}')`,
                        },
                    });
                });
            },
            2918: (e, u, t) => {
                'use strict';
                var a = t(4029),
                    n = t(6179),
                    r = t.n(n),
                    s = t(493),
                    i = t.n(s),
                    o = t(6483),
                    l = t.n(o),
                    c = t(3649),
                    d = t(3403),
                    _ = t(5042),
                    E = t(9300),
                    m = t(3215),
                    A = t(4598),
                    F = t(3946);
                const h = (0, m.q)()(({ observableModel: e }) => {
                        const u = { root: e.object(), buffs: e.array('playerBuffs') },
                            t = (0, F.Om)(() => 0 === u.buffs.get().length);
                        return Object.assign({}, u, { computes: { isBuffsEmpty: t } });
                    }, A.ZT),
                    b = h[0],
                    D = h[1],
                    g = 'Caption_line_6d',
                    B = r().memo(function ({ className: e, text: u }) {
                        return r().createElement(
                            'div',
                            { className: l()('Caption_base_6d', e) },
                            r().createElement('div', { className: 'Caption_flare_07' }),
                            r().createElement('div', { className: g }),
                            r().createElement('div', { className: 'Caption_label_96' }, u),
                            r().createElement('div', { className: l()(g, 'Caption_line__right_11') }),
                        );
                    });
                var C = t(3618);
                const f = (0, n.memo)(function ({ missionTitle: e, difficultyLevel: u }) {
                    return r().createElement(
                        'div',
                        { className: 'Header_base_14' },
                        r().createElement(
                            'div',
                            { className: 'Header_mapInfo_13' },
                            r().createElement(
                                'div',
                                { className: 'Header_mapName_87' },
                                R.strings.halloween_battle.eventStats.eventName(),
                            ),
                            r().createElement(C.w, {
                                classMix: 'Header_difficulty_f9',
                                text: R.strings.halloween_battle.eventStats.difficulty(),
                                binding: { difficulty: R.strings.halloween_lobby.difficult.$dyn(`level_${u}`) },
                            }),
                        ),
                        r().createElement('div', { className: 'Header_icon_21' }),
                        r().createElement(
                            'div',
                            { className: 'Header_battleInfo_1e' },
                            r().createElement('div', { className: 'Header_battleMode_37' }, e),
                            r().createElement(
                                'div',
                                { className: 'Header_battleTask_0d' },
                                R.strings.halloween_battle.eventStats.globalTask(),
                            ),
                        ),
                    );
                });
                var p = t(9480),
                    v = t(9053);
                const y = (0, d.Pi)(() => {
                        const e = D().model;
                        return r().createElement(
                            'div',
                            { className: 'PlayerBuffs_base_d6' },
                            p.UI(e.buffs.get(), ({ name: e }) => {
                                const u = R.strings.halloween_buffs.buffs.$dyn(e),
                                    t = u.$dyn('description');
                                return r().createElement(
                                    'div',
                                    { className: 'PlayerBuffs_buff_cd', key: e },
                                    r().createElement(C.w, {
                                        classMix: 'PlayerBuffs_name_2a',
                                        text: u.$dyn('header'),
                                        justifyContent: v.v2.Center,
                                        isTruncationAvailable: !0,
                                        isTooltipEnable: !0,
                                    }),
                                    r().createElement(C.w, {
                                        classMix: 'PlayerBuffs_description_84',
                                        text: t.$dyn('tab'),
                                        justifyContent: v.v2.Center,
                                        isTruncationAvailable: !0,
                                        isTooltipEnable: !0,
                                    }),
                                    r().createElement('div', {
                                        className: 'PlayerBuffs_icon_a3',
                                        style: {
                                            backgroundImage: `url(${R.images.halloween.gui.maps.icons.battleBuffs.c_58x58.$dyn(e)})`,
                                        },
                                    }),
                                );
                            }),
                        );
                    }),
                    w = {
                        base: 'FullEventStatsApp_base_6e',
                        darkener: 'FullEventStatsApp_darkener_cf',
                        overlay: 'FullEventStatsApp_overlay_19',
                        missionTask: 'FullEventStatsApp_missionTask_d1',
                        content: 'FullEventStatsApp_content_a8',
                        tableCaption__top: 'FullEventStatsApp_tableCaption__top_59',
                        tableCaption__bottom: 'FullEventStatsApp_tableCaption__bottom_eb',
                        buffs: 'FullEventStatsApp_buffs_77',
                    },
                    x = (0, d.Pi)(() => {
                        const e = D().model,
                            u = e.root.get(),
                            t = u.difficultyLevel,
                            a = u.missionTitle,
                            n = u.missionTask;
                        return r().createElement(
                            'div',
                            { className: w.base },
                            r().createElement(
                                'div',
                                { className: w.darkener },
                                r().createElement('div', { className: w.overlay }),
                            ),
                            r().createElement(f, { difficultyLevel: t, missionTitle: a }),
                            r().createElement(
                                'div',
                                { className: w.content },
                                r().createElement('div', { className: w.missionTask }, (0, c.z4)(n)),
                                r().createElement(B, {
                                    className: l()(w.tableCaption, w.tableCaption__top),
                                    text: R.strings.halloween_battle.eventStats.tableCaption(),
                                }),
                                r().createElement(
                                    'div',
                                    { className: w.table },
                                    r().createElement(E.J, {
                                        resId: R.views.halloween.lobby.widgets.EventStats('resId'),
                                        tableType: _.N.TabWindow,
                                    }),
                                ),
                                !e.computes.isBuffsEmpty() &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(B, {
                                            className: l()(w.tableCaption, w.tableCaption__bottom),
                                            text: R.strings.halloween_battle.eventStats.buffsCaption(),
                                        }),
                                        r().createElement('div', { className: w.buffs }, r().createElement(y, null)),
                                    ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    i().render(
                        r().createElement(a.z, null, r().createElement(b, null, r().createElement(x, null))),
                        document.getElementById('root'),
                    );
                });
            },
            9300: (e, u, t) => {
                'use strict';
                t.d(u, { J: () => Me });
                var a = t(4029),
                    n = t(6179),
                    r = t.n(n),
                    s = t(6483),
                    i = t.n(s),
                    o = t(4598),
                    l = t(9480),
                    c = t(3403),
                    d = t(5716);
                let _;
                !(function (e) {
                    (e.Kills = 'kills'),
                        (e.Damage = 'damage'),
                        (e.Assist = 'assist'),
                        (e.Blocked = 'blocked'),
                        (e.Place = 'place'),
                        (e.Buffs = 'buffs'),
                        (e.Keys = 'keys');
                })(_ || (_ = {}));
                var E = t(3215),
                    m = t(9174),
                    A = t(3946),
                    F = t(3138);
                const h = {
                        base: 'SortHelper_base_1f',
                        base__active: 'SortHelper_base__active_55',
                        base__selected: 'SortHelper_base__selected_ca',
                        arrow: 'SortHelper_arrow_4d',
                        base__desc: 'SortHelper_base__desc_f4',
                    },
                    b = 'vehicle',
                    D = 'buffs',
                    g = 'damage',
                    B = ({
                        onClick: e,
                        className: u,
                        isSelected: t,
                        isEnabled: a,
                        sortDirection: n,
                        column: s,
                        children: o,
                    }) =>
                        r().createElement(
                            'div',
                            {
                                className: i()(
                                    h.base,
                                    a && h.base__active,
                                    u,
                                    t && h.base__selected,
                                    h[`base__${f[n]}`],
                                ),
                                onClick: () => {
                                    a && (e(s), F.O.sound.play.click());
                                },
                                onMouseEnter: () => {
                                    a && F.O.sound.play.highlight();
                                },
                            },
                            o,
                            t && a && r().createElement('div', { className: h.arrow }),
                        ),
                    C = [d.yq, d.FN, d.XQ, d.hR, d.T6];
                let f;
                !(function (e) {
                    (e[(e.desc = 1)] = 'desc'), (e[(e.asc = -1)] = 'asc');
                })(f || (f = {}));
                const p = (0, E.q)()(
                        ({ observableModel: e }) => {
                            const u = m.LO.box(_.Place),
                                t = m.LO.box(f.desc),
                                a = {
                                    root: e.object(),
                                    team: e.array('team', []),
                                    visibleColumns: e.array('columnSettings.visibleColumns'),
                                },
                                n = (0, A.Om)(
                                    () =>
                                        l
                                            .UI(a.team.get(), o.yR)
                                            .slice()
                                            .sort((e, n) => {
                                                const r = String(u) === _.Place ? -1 * Number(t) : Number(t);
                                                return String(u) === b
                                                    ? e.vehicle.vehicleType === n.vehicle.vehicleType
                                                        ? a.root.get().isDefenseMode
                                                            ? r *
                                                              String(e.vehicle.vehicleShortName)
                                                                  .toLocaleLowerCase()
                                                                  .localeCompare(
                                                                      String(
                                                                          n.vehicle.vehicleShortName,
                                                                      ).toLocaleLowerCase(),
                                                                  )
                                                            : r *
                                                              String(e.vehicle.vehicleName)
                                                                  .toLocaleLowerCase()
                                                                  .localeCompare(
                                                                      String(n.vehicle.vehicleName).toLocaleLowerCase(),
                                                                  )
                                                        : r *
                                                          (C.indexOf(e.vehicle.vehicleType) -
                                                              C.indexOf(n.vehicle.vehicleType))
                                                    : r * (n.stats[u] - e.stats[u]);
                                            }),
                                    { equals: o.jv },
                                );
                            return Object.assign({}, a, {
                                sortBy: u,
                                sortDirection: t,
                                computes: { getSortedTeam: n },
                            });
                        },
                        ({ externalModel: e, model: u }) => ({
                            setSortBy: (0, m.aD)((e) => {
                                e === u.sortBy.get()
                                    ? u.sortDirection.set(-1 * u.sortDirection.get())
                                    : u.sortDirection.set(f.desc),
                                    u.sortBy.set(e);
                            }),
                            sendFriendRequest: e.createCallback(
                                (e, u, t) => ({ playerId: e, userName: u, clanAbbrev: t }),
                                'onSendFriendRequest',
                            ),
                            sendPlatoonInvitation: e.createCallback(
                                (e, u) => ({ playerId: e, userName: u }),
                                'onSendPlatoonInvitation',
                            ),
                            removeFromBlacklist: e.createCallback(
                                (e, u) => ({ playerId: e, userName: u }),
                                'onRemoveFromBlacklist',
                            ),
                        }),
                    ),
                    v = p[0],
                    y = p[1];
                var w = t(6373),
                    x = t(5042);
                const k = (0, n.createContext)(x.N.TabWindow),
                    S = {
                        base: 'CellDecorator_base_93',
                        base__keys: 'CellDecorator_base__keys_20',
                        base__actions: 'CellDecorator_base__actions_64',
                        base__tabWindow: 'CellDecorator_base__tabWindow_45',
                        base__currentPlayer: 'CellDecorator_base__currentPlayer_49',
                        base__player: 'CellDecorator_base__player_05',
                        base__stats: 'CellDecorator_base__stats_d1',
                        base__buffs: 'CellDecorator_base__buffs_87',
                        base__damage: 'CellDecorator_base__damage_ae',
                        base__vehicle: 'CellDecorator_base__vehicle_fd',
                        base__vehicleIcon: 'CellDecorator_base__vehicleIcon_ee',
                        base__bordered: 'CellDecorator_base__bordered_97',
                        border: 'CellDecorator_border_55',
                        children: 'CellDecorator_children_21',
                        base__statsLarge: 'CellDecorator_base__statsLarge_69',
                    };
                let L;
                !(function (e) {
                    (e.Player = 'player'),
                        (e.Stats = 'stats'),
                        (e.Vehicle = 'vehicle'),
                        (e.VehicleIcon = 'vehicleIcon'),
                        (e.Buffs = 'buffs'),
                        (e.Keys = 'keys'),
                        (e.Actions = 'actions'),
                        (e.Damage = 'damage'),
                        (e.Kills = 'kills');
                })(L || (L = {}));
                const T = ({ cellStyle: e, bordered: u = !1, isCurrentPlayer: t, children: a }) => {
                        const s = (0, n.useContext)(k);
                        return r().createElement(
                            'div',
                            { className: i()(S.base, S[`base__${e}`], S[`base__${s}`], t && S.base__currentPlayer) },
                            u && r().createElement('div', { className: S.border }),
                            r().createElement('div', { className: S.children }, a),
                        );
                    },
                    N = {
                        base: 'RowDecorator_base_67',
                        base__currentPlayer: 'RowDecorator_base__currentPlayer_4d',
                        base__currentPlayerDefence: 'RowDecorator_base__currentPlayerDefence_ca',
                        childrenWrapper: 'RowDecorator_childrenWrapper_c3',
                        base__defaultText: 'RowDecorator_base__defaultText_ab',
                        base__goldText: 'RowDecorator_base__goldText_b6',
                        base__disable: 'RowDecorator_base__disable_ed',
                        backgroundHelper: 'RowDecorator_backgroundHelper_8e',
                        base__goldBg: 'RowDecorator_base__goldBg_95',
                        backgroundHelper__header: 'RowDecorator_backgroundHelper__header_f8',
                    },
                    P = ({ children: e }) =>
                        r().createElement(
                            'div',
                            { className: N.base },
                            r().createElement('div', {
                                className: i()(N.backgroundHelper, N.backgroundHelper__header),
                            }),
                            r().createElement('div', { className: N.childrenWrapper }, e),
                        ),
                    I = {
                        base: 'HeaderIcon_base_88',
                        base__hoverEnabled: 'HeaderIcon_base__hoverEnabled_3f',
                        base__highlighted: 'HeaderIcon_base__highlighted_62',
                        base__squad_small: 'HeaderIcon_base__squad_small_e9',
                        base__buffs: 'HeaderIcon_base__buffs_80',
                        icon: 'HeaderIcon_icon_d9',
                    };
                let O;
                !(function (e) {
                    (e.Assist = 'assist'),
                        (e.Blocked = 'blocked'),
                        (e.Damage = 'damage'),
                        (e.Kills = 'kills'),
                        (e.SquadSmall = 'squad_small'),
                        (e.Vehicle = 'vehicle'),
                        (e.Souls = 'souls'),
                        (e.Place = 'place'),
                        (e.Buffs = 'buffs'),
                        (e.Keys = 'keys');
                })(O || (O = {}));
                const M = (0, n.memo)(function ({
                        icon: e,
                        className: u,
                        isHighlighted: t = !1,
                        isHoverEnabled: a = !1,
                    }) {
                        return r().createElement(
                            'div',
                            {
                                className: i()(
                                    I.base,
                                    t && I.base__highlighted,
                                    a && I.base__hoverEnabled,
                                    I[`base__${e}`],
                                    u,
                                ),
                            },
                            r().createElement('div', {
                                className: I.icon,
                                style: {
                                    backgroundImage: `url('${R.images.halloween.gui.maps.icons.common.stats.c_32x32.$dyn(e)}')`,
                                },
                            }),
                        );
                    }),
                    H = {
                        base: 'HeaderRow_base_be',
                        text: 'HeaderRow_text_74',
                        text__tabWindow: 'HeaderRow_text__tabWindow_8a',
                        cell: 'HeaderRow_cell_44',
                        squad: 'HeaderRow_squad_8f',
                        vehicle: 'HeaderRow_vehicle_0d',
                        border: 'HeaderRow_border_5e',
                        upperLine: 'HeaderRow_upperLine_f5',
                        iconBorder: 'HeaderRow_iconBorder_36',
                        actions: 'HeaderRow_actions_31',
                    },
                    W = (e) => {
                        switch (e) {
                            case b:
                                return L.VehicleIcon;
                            case D:
                                return L.Buffs;
                            case g:
                                return L.Damage;
                        }
                        return L.Stats;
                    },
                    $ = (0, n.memo)(function ({
                        visibleColumns: e,
                        sortBy: u = _.Place,
                        sortDirection: t,
                        onSortChanged: a,
                        tableType: s,
                        sortEnabled: o,
                    }) {
                        const l = (0, n.useContext)(k),
                            c = (0, n.useCallback)(
                                (e) => {
                                    a && a(e);
                                },
                                [a],
                            ),
                            d = e.map((e) => e);
                        d.unshift(b);
                        const E = s === x.N.LeaderBoard;
                        return r().createElement(
                            P,
                            null,
                            r().createElement(
                                T,
                                { cellStyle: L.Player },
                                r().createElement(
                                    'div',
                                    { className: H.base },
                                    r().createElement(
                                        w.i,
                                        { body: R.strings.halloween_tooltips.teamList.squad.header() },
                                        r().createElement(
                                            'div',
                                            null,
                                            r().createElement(M, { icon: O.SquadSmall, className: H.squad }),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: H.border },
                                        r().createElement('div', { className: H.iconBorder }),
                                    ),
                                    r().createElement(
                                        w.i,
                                        { body: R.strings.halloween_tooltips.teamList.name.header() },
                                        r().createElement(
                                            'span',
                                            { className: i()(H.text, H[`text__${l}`]) },
                                            R.strings.battle_results.teamList.teammates(),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                T,
                                { cellStyle: L.Actions },
                                r().createElement(
                                    'div',
                                    { className: H.border },
                                    r().createElement('div', { className: H.iconBorder }),
                                ),
                                r().createElement(
                                    w.i,
                                    {
                                        header: R.strings.halloween_tooltips.teamList.actions.header(),
                                        body: R.strings.halloween_tooltips.teamList.actions.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        { className: H.actions },
                                        R.strings.battle_results.teamList.actions(),
                                    ),
                                ),
                            ),
                            d.map((e) =>
                                r().createElement(
                                    T,
                                    { key: e, cellStyle: W(e), bordered: !0 },
                                    r().createElement(
                                        w.i,
                                        ((e, u) => {
                                            const t = R.strings.halloween_tooltips.teamList.$dyn(e),
                                                a = { header: '', body: '' };
                                            return (
                                                u === x.N.LeaderBoard
                                                    ? ((a.header = t.$dyn('header')), (a.body = t.$dyn('body')))
                                                    : (a.body = t.$dyn('header')),
                                                a
                                            );
                                        })(e, s),
                                        r().createElement(
                                            'div',
                                            { className: i()(H.cell, H[`cell__${s}`]) },
                                            r().createElement(
                                                B,
                                                {
                                                    isSelected: E && u === e,
                                                    sortDirection: t,
                                                    column: e,
                                                    onClick: c,
                                                    isEnabled: o,
                                                },
                                                r().createElement(M, {
                                                    icon: e,
                                                    isHighlighted: E && u === e,
                                                    isHoverEnabled: E && u !== e,
                                                    className: H[`${e}`],
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            s === x.N.LeaderBoard && r().createElement('div', { className: H.upperLine }),
                        );
                    });
                var j = t(3416),
                    q = t(3457),
                    G = t(9916);
                const U = (0, n.memo)(
                        ({ args: e, children: u, decoratorID: t = 0, isLeftClick: a, isDisabled: r = !1 }) => {
                            const s = (0, n.useRef)(null),
                                i = (0, n.useCallback)(() => {
                                    (0, G.c9)(G.B0.CONTEXT_MENU, {
                                        contentID: R.views.common.BackportContextMenu('resId'),
                                        decoratorID: t,
                                        isMouseEvent: !1,
                                        on: !0,
                                        args: e,
                                    }),
                                        F.O.sound.play.yes1();
                                }, [e, t]),
                                o = (0, n.useCallback)(
                                    (e) => {
                                        ((a && 0 === e.button) || (!a && 2 === e.button)) && !r && i();
                                    },
                                    [a, r, i],
                                );
                            return (0, n.useMemo)(() => (0, n.cloneElement)(u, { onMouseDown: o, ref: s }), [u, o]);
                        },
                    ),
                    V = 'InteractionControls_control_92',
                    Z = 'InteractionControls_button_3f',
                    z = 'InteractionControls_icon_75',
                    K = (e) => {
                        e.stopPropagation(), e.preventDefault();
                    };
                let Y;
                !(function (e) {
                    (e.Blacklisted = 'blacklisted'),
                        (e.Friend = 'friend'),
                        (e.RequestSent = 'requestSent'),
                        (e.Default = 'default');
                })(Y || (Y = {}));
                const X = {
                    [Y.Blacklisted]: {
                        icon: 'InteractionControls_icon__friendBlacklist_87',
                        tooltipBody: R.strings.halloween_tooltips.battleResult.interaction.friend.removeFromBlacklist(),
                        isButton: !0,
                        isDisabled: !1,
                    },
                    [Y.Friend]: {
                        icon: 'InteractionControls_icon__friend_c3',
                        tooltipBody: R.strings.halloween_tooltips.battleResult.interaction.friend.friend(),
                        isButton: !0,
                        isDisabled: !0,
                    },
                    [Y.RequestSent]: {
                        icon: 'InteractionControls_icon__friendSent_17',
                        tooltipBody: R.strings.halloween_tooltips.battleResult.interaction.friend.inviteSent(),
                        isButton: !1,
                        isDisabled: !1,
                    },
                    [Y.Default]: {
                        icon: 'InteractionControls_icon__addFriend_d9',
                        tooltipBody: R.strings.halloween_tooltips.battleResult.interaction.friend.sendInvite(),
                        isButton: !0,
                        isDisabled: !1,
                    },
                };
                let J;
                !(function (e) {
                    (e.PlatoonSent = 'platoonSent'),
                        (e.PlatoonDone = 'platoonDone'),
                        (e.PlatoonUnavailable = 'platoonUnavailable'),
                        (e.PlatoonCanMade = 'platoonCanMade');
                })(J || (J = {}));
                const Q = {
                        [J.PlatoonSent]: {
                            icon: 'InteractionControls_icon__platoonSent_21',
                            tooltipBody: R.strings.halloween_tooltips.battleResult.interaction.platoon.platoonSent(),
                            isButton: !1,
                            isDisabled: !1,
                        },
                        [J.PlatoonDone]: {
                            icon: 'InteractionControls_icon__platoonDone_75',
                            tooltipBody: R.strings.halloween_tooltips.battleResult.interaction.platoon.platoonDone(),
                            isButton: !0,
                            isDisabled: !0,
                        },
                        [J.PlatoonUnavailable]: {
                            icon: 'InteractionControls_icon__platoonUnavailable_55',
                            tooltipBody:
                                R.strings.halloween_tooltips.battleResult.interaction.platoon.platoonUnavailable(),
                            isButton: !1,
                            isDisabled: !1,
                        },
                        [J.PlatoonCanMade]: {
                            icon: 'InteractionControls_icon__platoonCanMade_b6',
                            tooltipBody: R.strings.halloween_tooltips.battleResult.interaction.platoon.platoonCanMade(),
                            isButton: !0,
                            isDisabled: !1,
                        },
                    },
                    ee = (0, c.Pi)(
                        ({
                            className: e,
                            isInFriendList: u,
                            playerId: t,
                            userName: a,
                            clanAbbrev: s,
                            vehicleCD: o,
                            clientArenaIdx: l,
                            isBlacklisted: c,
                            isFriendRequestSent: d,
                            isPlatoonRequestCanMade: _,
                            isPlatoonRequestInSquad: E,
                            isPlatoonRequestSent: m,
                        }) => {
                            const A = y().controls,
                                F = A.sendFriendRequest,
                                h = A.removeFromBlacklist,
                                b = A.sendPlatoonInvitation,
                                D = ((e, u, t) => (e ? Y.Blacklisted : u ? Y.RequestSent : t ? Y.Friend : Y.Default))(
                                    c,
                                    d,
                                    u,
                                ),
                                g = ((e, u, t) =>
                                    t
                                        ? J.PlatoonSent
                                        : e && !u
                                          ? J.PlatoonCanMade
                                          : u
                                            ? J.PlatoonDone
                                            : J.PlatoonUnavailable)(_, E, m),
                                B = (0, n.useCallback)(
                                    (e) => {
                                        K(e), D === Y.Blacklisted && h(t, a), D === Y.Default && F(t, a, s);
                                    },
                                    [F, h, D, t, a, s],
                                ),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        K(e), g === J.PlatoonCanMade && b(t, a);
                                    },
                                    [b, g, t, a],
                                ),
                                f = (0, n.useMemo)(() => ({ body: Q[g].tooltipBody }), [g]),
                                p = (0, n.useMemo)(
                                    () => ({
                                        playerId: t,
                                        userName: a,
                                        clanAbbrev: s,
                                        clientArenaIdx: l,
                                        vehicleCD: o,
                                    }),
                                    [t, a, s, l, o],
                                ),
                                v = (0, n.useCallback)((e) => {
                                    K(e);
                                }, []);
                            return r().createElement(
                                'div',
                                { className: i()('InteractionControls_base_e0', e) },
                                r().createElement(
                                    w.i,
                                    { body: X[D].tooltipBody },
                                    r().createElement(
                                        'div',
                                        { className: V },
                                        X[D].isButton
                                            ? r().createElement(
                                                  q.u5,
                                                  { mixClass: Z, disabled: X[D].isDisabled, onClick: B },
                                                  r().createElement('div', { className: i()(z, X[D].icon) }),
                                              )
                                            : r().createElement('div', { className: i()(z, X[D].icon) }),
                                    ),
                                ),
                                r().createElement(
                                    w.i,
                                    f,
                                    r().createElement(
                                        'div',
                                        { className: V },
                                        Q[g].isButton
                                            ? r().createElement(
                                                  q.u5,
                                                  { mixClass: Z, disabled: Q[g].isDisabled, onClick: C },
                                                  r().createElement('div', { className: i()(z, Q[g].icon) }),
                                              )
                                            : r().createElement('div', { className: i()(z, Q[g].icon) }),
                                    ),
                                ),
                                r().createElement(
                                    w.i,
                                    { body: R.strings.halloween_tooltips.battleResult.interaction.menu() },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(
                                            U,
                                            { args: p, isLeftClick: !0 },
                                            r().createElement(
                                                'div',
                                                { className: V },
                                                r().createElement(
                                                    q.u5,
                                                    { mixClass: Z, type: 'secondary', onClick: v },
                                                    r().createElement('div', {
                                                        className: i()(z, 'InteractionControls_icon__menu_1d'),
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    ue = (0, n.memo)(function ({
                        bgColor: e,
                        textColor: u,
                        children: t,
                        playerId: a,
                        userName: n,
                        vehicleCD: s,
                        isCurrentPlayer: o,
                        clanAbbrev: l,
                        clientArenaIdx: c,
                        isAlive: d,
                        isReady: _,
                        isDefence: E,
                    }) {
                        return r().createElement(
                            U,
                            {
                                args: { playerId: a, userName: n, clanAbbrev: l, clientArenaIdx: c, vehicleCD: s },
                                isDisabled: o,
                            },
                            r().createElement(
                                'div',
                                {
                                    className: i()(
                                        N.base,
                                        e && N[`base__${e}Bg`],
                                        u && N[`base__${u}Text`],
                                        o && N.base__currentPlayer,
                                        (!_ || !d) && N.base__disable,
                                        E && o && N.base__currentPlayerDefence,
                                    ),
                                },
                                r().createElement('div', { className: N.backgroundHelper }),
                                r().createElement('div', { className: N.childrenWrapper }, t),
                            ),
                        );
                    }),
                    te = ({ buffs: e, isOwnSquad: u, isCurrentPlayer: t }) =>
                        r().createElement(
                            'div',
                            { className: 'BuffList_base_ca' },
                            e.map(({ name: e }) => {
                                const a = R.strings.halloween_buffs.buffs.$dyn(e),
                                    n = a.$dyn('description'),
                                    s = u || t ? e : `${e}_gray`;
                                return r().createElement(
                                    w.i,
                                    { key: e, header: a.$dyn('header'), body: n.$dyn('tabTooltip') },
                                    r().createElement('div', {
                                        className: 'BuffList_icon_b8',
                                        style: {
                                            backgroundImage: `url(${R.images.halloween.gui.maps.icons.battleBuffs.c_24x24.$dyn(s)})`,
                                        },
                                    }),
                                );
                            }),
                        );
                let ae;
                !(function (e) {
                    (e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220');
                })(ae || (ae = {}));
                const ne = ['content', 'classMix', 'className'];
                function re() {
                    return (
                        (re = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        re.apply(null, arguments)
                    );
                }
                const se = (e) => {
                        let u = e.content,
                            t = e.classMix,
                            a = e.className,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, ne);
                        const o = (0, n.useRef)(null),
                            l = (0, n.useState)(!0),
                            c = l[0],
                            d = l[1];
                        return (
                            (0, n.useEffect)(() =>
                                ((e) => {
                                    let u,
                                        t = null;
                                    return (
                                        (t = requestAnimationFrame(() => {
                                            t = requestAnimationFrame(() => {
                                                (t = null),
                                                    (u = (() => {
                                                        const e = o.current;
                                                        e && e.offsetWidth >= e.scrollWidth && d(!1);
                                                    })());
                                            });
                                        })),
                                        () => {
                                            'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                                        }
                                    );
                                })(),
                            ),
                            r().createElement(
                                w.i,
                                { isEnabled: c, body: u },
                                r().createElement(
                                    'div',
                                    re({}, s, { ref: o, className: i()('TextOverflow_base_3b', a, t) }),
                                    u,
                                ),
                            )
                        );
                    },
                    ie = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    oe = { [ae.default]: 'c_24x24', [ae.x48]: 'c_48x48', [ae.x80]: 'c_80x80', [ae.x220]: 'c_220x220' },
                    le = ({ badgeID: e, size: u = ae.default, className: t }) => {
                        const a = R.images.gui.maps.icons.library.badges.$dyn(oe[u]);
                        return r().createElement('div', {
                            className: i()(ie.base, ie[`base__${u}`], t),
                            style: { backgroundImage: `url(${a.$dyn(`badge_${e}`)})` },
                        });
                    };
                var ce = t(3649);
                const de = {
                        base: 'PlayerNickname_base_32',
                        userName: 'PlayerNickname_userName_cc',
                        igrIcon: 'PlayerNickname_igrIcon_34',
                        base__default: 'PlayerNickname_base__default_8d',
                        base__x48: 'PlayerNickname_base__x48_84',
                        suffixBadgeWrapper: 'PlayerNickname_suffixBadgeWrapper_cc',
                        suffixBadgeStripe: 'PlayerNickname_suffixBadgeStripe_8a',
                        base__inverted: 'PlayerNickname_base__inverted_34',
                        suffixBadge: 'PlayerNickname_suffixBadge_bd',
                        anonymizedIcon: 'PlayerNickname_anonymizedIcon_80',
                    },
                    _e = (0, n.memo)(({ tooltipHeaderName: e }) => {
                        const u = (0, n.useMemo)(
                                () => (0, ce.uF)(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                                [e],
                            ),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return r().createElement(
                            w.i,
                            { header: u, body: t },
                            r().createElement('div', { className: de.anonymizedIcon }),
                        );
                    });
                function Ee() {
                    return (
                        (Ee = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Ee.apply(null, arguments)
                    );
                }
                const me = { [ae.default]: 'c_64x24', [ae.x48]: 'c_68x28' },
                    Ae = { [ae.default]: 'c_48x48', [ae.x48]: 'c_48x48' },
                    Fe = ({
                        userName: e,
                        clanAbbrev: u = '',
                        igrType: t = 0,
                        badge: a = { badgeID: '' },
                        suffixBadge: s = { badgeID: '' },
                        isInverted: o = !1,
                        isFakeNameVisible: l = !1,
                        isAnonymizerShown: c = !1,
                        hiddenUserName: d = '',
                        size: _ = ae.default,
                        userNameClassName: E = '',
                        clanTagClassName: m = '',
                    }) => {
                        const A = R.images.gui.maps.icons.library.badges.strips.$dyn(me[_]),
                            F = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${A.$dyn(`strip_${s.badgeID}`)})` }),
                                [s, A],
                            ),
                            h = R.images.gui.maps.icons.library.badges.$dyn(Ae[_]),
                            b = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${h.$dyn(`badge_${s.badgeID}`)})` }),
                                [s, h],
                            ),
                            D = u ? `[${u}]` : '',
                            g = i()(de.base, de[`base__${_}`], o && de.base__inverted),
                            B = i()(de.userName, E),
                            C = i()(de.clanTag, m),
                            f = e !== d,
                            p = l ? `${d}${D}` : d,
                            v = Boolean(a.badgeID) && r().createElement(le, Ee({ size: _ }, a, { key: 'badge' })),
                            y = Date.now(),
                            w = [
                                v,
                                [
                                    r().createElement(
                                        'div',
                                        { className: B, key: 'userName' },
                                        r().createElement(se, { content: e, key: y }),
                                    ),
                                    !l && Boolean(D) && r().createElement('div', { className: C, key: 'clanTag' }, D),
                                ],
                                0 !== t && r().createElement('div', { className: de.igrIcon, key: 'igrType' }),
                                Boolean(s.badgeID) &&
                                    r().createElement(
                                        'div',
                                        { className: de.suffixBadgeWrapper, key: 'suffixBadge' },
                                        r().createElement('div', { className: de.suffixBadgeStripe, style: F }),
                                        r().createElement('div', { className: de.suffixBadge, style: b }),
                                    ),
                                c && f && r().createElement(_e, { tooltipHeaderName: p, key: 'anonymizer' }),
                            ];
                        return r().createElement('div', { className: g }, o ? w.reverse() : w);
                    };
                var he = t(2683);
                const be = {
                    base: 'PlayerInfo_base_b6',
                    nickName: 'PlayerInfo_nickName_53',
                    nickName__withSquad: 'PlayerInfo_nickName__withSquad_ff',
                    userName: 'PlayerInfo_userName_82',
                    userName__withBadge: 'PlayerInfo_userName__withBadge_43',
                    name: 'PlayerInfo_name_21',
                    base__currentPlayer: 'PlayerInfo_base__currentPlayer_c3',
                    base__tabWindow: 'PlayerInfo_base__tabWindow_5a',
                    clanTag: 'PlayerInfo_clanTag_bc',
                    squad: 'PlayerInfo_squad_9a',
                    squad__highContrast: 'PlayerInfo_squad__highContrast_44',
                    squad__defaultAlly: 'PlayerInfo_squad__defaultAlly_c3',
                    banIcon: 'PlayerInfo_banIcon_48',
                    banIcon__warned: 'PlayerInfo_banIcon__warned_ad',
                    banIcon__banned: 'PlayerInfo_banIcon__banned_37',
                };
                function De() {
                    return (
                        (De = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        De.apply(null, arguments)
                    );
                }
                let ge;
                !(function (e) {
                    (e.Default = 'default'), (e.HighContrast = 'highContrast');
                })(ge || (ge = {}));
                const Be = { [x.N.TabWindow]: ge.Default, [x.N.LeaderBoard]: ge.Default },
                    Ce = ({ user: e, squadNum: u, isOwnSquad: t = !1, banType: a, isCurrentPlayer: s }) => {
                        const o = (0, n.useContext)(k),
                            l = Be[o],
                            c = R.images.halloween.gui.maps.icons.common.teamList.squad.$dyn(l),
                            d = () => {
                                if (a === he.L.NotBanned) return { body: void 0, header: void 0 };
                                const e = R.strings.halloween_tooltips.teamList.$dyn(a);
                                return s
                                    ? { body: e.$dyn('self').$dyn('body'), header: e.$dyn('header') }
                                    : { body: e.$dyn('body'), header: e.$dyn('header') };
                            },
                            _ = u > 0;
                        return r().createElement(
                            'div',
                            { className: i()(be.base, be[`base__${o}`], s && be.base__currentPlayer) },
                            _ &&
                                r().createElement(
                                    'div',
                                    {
                                        className: i()(
                                            be.squad,
                                            be[`squad__${l}`],
                                            t && l === ge.Default && be.squad__defaultAlly,
                                        ),
                                        style: { backgroundImage: `url('${c.$dyn(t ? 'ally' : 'other')}')` },
                                    },
                                    u,
                                ),
                            r().createElement(
                                'div',
                                { className: i()(be.nickName, _ && be.nickName__withSquad) },
                                a !== he.L.NotBanned &&
                                    r().createElement(
                                        w.i,
                                        d,
                                        r().createElement('div', { className: i()(be.banIcon, be[`banIcon__${a}`]) }),
                                    ),
                                r().createElement(
                                    'div',
                                    { className: be.name },
                                    r().createElement(
                                        Fe,
                                        De({}, e, {
                                            igrType: e.igrType,
                                            badge: e.badge,
                                            userNameClassName: i()(
                                                be.userName,
                                                e.badge.badgeID && be.userName__withBadge,
                                            ),
                                            suffixBadge: e.suffixBadge,
                                            clanTagClassName: be.clanTag,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    },
                    fe = {
                        base: 'StatValueDecorator_base_aa',
                        base__max: 'StatValueDecorator_base__max_08',
                        crown: 'StatValueDecorator_crown_21',
                        crown__gold: 'StatValueDecorator_crown__gold_b7',
                        base__currentPlayer: 'StatValueDecorator_base__currentPlayer_7a',
                        crown__silver: 'StatValueDecorator_crown__silver_0e',
                        crown__bronze: 'StatValueDecorator_crown__bronze_86',
                        amount: 'StatValueDecorator_amount_97',
                    },
                    pe = ['gold', 'silver', 'bronze'],
                    ve = (0, n.memo)(function ({
                        current: e,
                        isMax: u,
                        column: t,
                        tableType: a,
                        isCrowned: n,
                        isCurrentPlayer: s,
                    }) {
                        const o = G.Z5.getNumberFormat(e, G.B3.GOLD);
                        return r().createElement(
                            'div',
                            { className: i()(fe.base, s && fe.base__currentPlayer, u && fe.base__max) },
                            n &&
                                r().createElement('div', {
                                    className: i()(
                                        fe.crown,
                                        a === x.N.LeaderBoard && t === _.Place && fe[`crown__${pe[e - 1]}`],
                                    ),
                                }),
                            r().createElement('span', { className: fe.amount }, o),
                        );
                    });
                var ye = t(3618),
                    we = t(9690);
                const xe = (0, c.Pi)(({ vehicleName: e, vehicleShortName: u, vehicleType: t, color: a, tags: n }) => {
                    const s = y().model;
                    return r().createElement(
                        'div',
                        { className: 'VehicleInfo_base_a4' },
                        r().createElement(j.F0, {
                            size: j.Wq.C38x38,
                            color: a,
                            type: t,
                            className: 'VehicleInfo_vehType_de',
                        }),
                        (0, we.f)(n, d.f3) && r().createElement('div', { className: 'VehicleInfo_premiumIGR_5c' }),
                        r().createElement(ye.w, {
                            text: s.root.get().isDefenseMode ? u : e,
                            classMix: 'VehicleInfo_label_0e',
                            isTruncationAvailable: !0,
                            isTooltipEnable: !0,
                        }),
                    );
                });
                function ke() {
                    return (
                        (ke = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        ke.apply(null, arguments)
                    );
                }
                const Se = (0, c.Pi)(
                    ({
                        playerId: e,
                        rowStyle: u,
                        isCurrentPlayer: t,
                        isOwnSquad: a,
                        squadNum: n,
                        user: s,
                        vehicle: i,
                        banType: c,
                        stats: d,
                        columnsMaxValue: E,
                        visibleColumns: m,
                        isReady: A,
                        isPlatoonRequestSent: F,
                        isInFriendList: h,
                        isPlatoonRequestCanMade: B,
                        isPlatoonRequestInSquad: C,
                        isFriendRequestSent: f,
                        isBlacklisted: p,
                        tableType: v,
                        isAlive: w,
                    }) => {
                        const k = y().model.root.get(),
                            S = k.clientArenaIdx,
                            N = k.contextMenuPlayerId,
                            R = k.isDefenseMode,
                            P = (e) => {
                                switch (e) {
                                    case b:
                                        return L.VehicleIcon;
                                    case D:
                                        return L.Buffs;
                                    case g:
                                        return L.Damage;
                                }
                                return L.Stats;
                            },
                            I = 0 === e || !t,
                            O = t || a ? j.Rl.WhiteSpanishBright : j.Rl.Gray;
                        return r().createElement(
                            ue,
                            ke({}, u, {
                                playerId: e,
                                userName: s.userName,
                                vehicleCD: i.vehicleCD,
                                clanAbbrev: s.clanAbbrev,
                                isCurrentPlayer: t,
                                isReady: A,
                                isDefence: R,
                                clientArenaIdx: S,
                                contextMenuPlayerId: N,
                                isAlive: v !== x.N.TabWindow || w,
                            }),
                            r().createElement(
                                T,
                                { cellStyle: L.Player, isCurrentPlayer: t },
                                r().createElement(Ce, {
                                    user: s,
                                    squadNum: n,
                                    isOwnSquad: a,
                                    banType: c,
                                    isCurrentPlayer: t,
                                }),
                            ),
                            r().createElement(
                                T,
                                { cellStyle: L.Actions, isCurrentPlayer: t },
                                I &&
                                    r().createElement(ee, {
                                        clientArenaIdx: S,
                                        clanAbbrev: s.clanAbbrev,
                                        vehicleCD: i.vehicleCD,
                                        playerId: e,
                                        userName: s.userName,
                                        isBlacklisted: p,
                                        isFriendRequestSent: f,
                                        isInFriendList: h,
                                        isPlatoonRequestCanMade: B,
                                        isPlatoonRequestInSquad: C,
                                        isPlatoonRequestSent: F,
                                    }),
                            ),
                            r().createElement(
                                T,
                                { cellStyle: L.Vehicle },
                                r().createElement(xe, ke({}, i, { color: O })),
                            ),
                            m.map((e) => {
                                if (e !== _.Buffs) {
                                    const u = e === _.Place ? 1 === d[e] : E[e] === d[e] && d[e] > 0,
                                        a = !d[_.Damage];
                                    return r().createElement(
                                        T,
                                        { key: e, cellStyle: P(e) },
                                        r().createElement(ve, {
                                            tableType: v,
                                            column: e,
                                            current: d[e],
                                            isMax: u,
                                            isCrowned: !a && (e === _.Place ? d[e] < 4 : u),
                                            isCurrentPlayer: t,
                                        }),
                                    );
                                }
                                return r().createElement(
                                    T,
                                    { key: e, cellStyle: L.Buffs },
                                    r().createElement(te, {
                                        key: e,
                                        buffs: l.UI(d[e], o.yR),
                                        isOwnSquad: a,
                                        isCurrentPlayer: t,
                                    }),
                                );
                            }),
                        );
                    },
                );
                let Le, Te;
                !(function (e) {
                    (e.Default = 'default'), (e.Red = 'red'), (e.Gold = 'gold');
                })(Le || (Le = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Gold = 'gold');
                    })(Te || (Te = {}));
                function Ne() {
                    return (
                        (Ne = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Ne.apply(null, arguments)
                    );
                }
                const Re = (e) => ({
                        bgColor: e.isCurrentPlayer ? Le.Gold : Le.Default,
                        textColor: e.isCurrentPlayer || e.isOwnSquad ? Te.Gold : Te.Default,
                    }),
                    Pe = (0, c.Pi)(({ className: e, isSortable: u = !1, tableType: t = x.N.TabWindow }) => {
                        const a = y(),
                            s = a.model,
                            c = a.controls,
                            d = s.sortDirection.get(),
                            _ = s.sortBy.get(),
                            E = s.computes.getSortedTeam(),
                            m = l.UI(s.visibleColumns.get(), o.yR),
                            A = (0, n.useCallback)(
                                (e) => {
                                    c.setSortBy(e);
                                },
                                [c],
                            ),
                            F = {};
                        return (
                            m.forEach((e) => {
                                const u = l.UI(s.team.get(), (u) => u.stats[e]);
                                F[e] = Math.max(...u);
                            }),
                            r().createElement(
                                'div',
                                { className: i()('TeamList_base_f2', e) },
                                r().createElement(
                                    k.Provider,
                                    { value: t },
                                    r().createElement($, {
                                        visibleColumns: m,
                                        sortEnabled: u,
                                        onSortChanged: A,
                                        sortBy: _,
                                        sortDirection: d,
                                        tableType: t,
                                    }),
                                    E.map((e) =>
                                        r().createElement(
                                            Se,
                                            Ne({}, e, {
                                                rowStyle: Re(e),
                                                columnsMaxValue: F,
                                                key: e.id,
                                                visibleColumns: m,
                                                isHoverEnabled: t === x.N.LeaderBoard,
                                                tableType: t,
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Ie = (e) => r().createElement(Pe, e),
                    Oe = ['resId'],
                    Me = (0, n.memo)(function (e) {
                        const u = e.resId,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Oe),
                            s = (0, n.useMemo)(() => ({ rootId: u }), [u]);
                        return r().createElement(
                            a.z,
                            null,
                            r().createElement(v, { options: s }, r().createElement(Ie, t)),
                        );
                    });
            },
            5042: (e, u, t) => {
                'use strict';
                let a;
                t.d(u, { N: () => a }),
                    (function (e) {
                        (e.TabWindow = 'tabWindow'), (e.LeaderBoard = 'leaderBoard');
                    })(a || (a = {}));
            },
            2683: (e, u, t) => {
                'use strict';
                let a;
                t.d(u, { L: () => a }),
                    (function (e) {
                        (e.NotBanned = 'notBanned'), (e.Warned = 'warned'), (e.Banned = 'banned');
                    })(a || (a = {}));
            },
            6880: (e, u, t) => {
                'use strict';
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
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
            },
            8055: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
            },
            9627: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = {
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
            7629: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                    word: 'renderers_word_f3',
                };
            },
            8387: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = {
                    base: 'VehicleType_base_13',
                    base__c_24x24: 'VehicleType_base__c_24x24_8a',
                    base__c_38x38: 'VehicleType_base__c_38x38_c5',
                    base__c_48x48: 'VehicleType_base__c_48x48_83',
                    base__c_83x74: 'VehicleType_base__c_83x74_a3',
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
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], r = !0, s = 0; s < u.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, a];
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
        (__webpack_require__.j = 929),
        (() => {
            var e = { 929: 0, 136: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, s, i] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        (n = r[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(2918));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
