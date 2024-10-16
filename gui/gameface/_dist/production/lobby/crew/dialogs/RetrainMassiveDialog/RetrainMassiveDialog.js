(() => {
    var __webpack_modules__ = {
            7405: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(2372),
                    i = t(6179),
                    o = t.n(i),
                    s = t(8460),
                    l = t(329);
                const c = (0, i.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: u,
                        size: t,
                        type: n,
                        value: i,
                        discountValue: c,
                        showPlus: _,
                        isEnough: E = !0,
                        stockBackgroundName: d = l.we.Red,
                        className: A,
                        classNames: F,
                    }) =>
                        o().createElement(
                            'span',
                            { className: r()(s.Z.base, s.Z[`base__${t}`], A) },
                            o().createElement(
                                'span',
                                {
                                    className: r()(
                                        s.Z.value,
                                        s.Z[`value__${n}`],
                                        !E && s.Z.value__notEnough,
                                        null == F ? void 0 : F.value,
                                    ),
                                },
                                _ && i > 0 && '+',
                                o().createElement(a.A, { value: i, format: n === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', {
                                className: r()(s.Z.icon, s.Z[`icon__${n}-${t}`], null == F ? void 0 : F.icon),
                            }),
                            e &&
                                o().createElement(
                                    'span',
                                    {
                                        className: r()(
                                            s.Z.stock,
                                            c && s.Z.stock__indent,
                                            u && s.Z.stock__interactive,
                                            null == F ? void 0 : F.stock,
                                        ),
                                    },
                                    o().createElement('span', {
                                        className: s.Z.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${d})` },
                                    }),
                                    Boolean(c) && c,
                                ),
                        ),
                );
            },
            329: (e, u, t) => {
                'use strict';
                let n, r, a;
                t.d(u, { V2: () => r, we: () => a }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(n || (n = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(r || (r = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(a || (a = {}));
            },
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => i });
                var n = t(6179),
                    r = t.n(n),
                    a = t(9916);
                class i extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = a.B3.GOLD;
                        else e = a.B3.INTEGRAL;
                        const u = a.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                i.defaultProps = { format: 'integral' };
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3649),
                    i = t(6179),
                    o = t.n(i),
                    s = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: n = a.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                    const c = l && e ? (0, a.WU)(u, e) : u;
                    return o().createElement(
                        i.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            o().createElement(
                                'div',
                                { className: r()(s.Z.base, t), key: `${u}-${l}` },
                                (0, a.Uw)(u, n, e).map((e, u) =>
                                    o().createElement(i.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => _ });
                var n = t(3138),
                    r = t(6179),
                    a = t(1043),
                    i = t(5262);
                const o = n.O.client.getSize('rem'),
                    s = o.width,
                    l = o.height,
                    c = Object.assign({ width: s, height: l }, (0, i.T)(s, l, a.j)),
                    _ = (0, r.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var n = t(3138),
                    r = t(6536),
                    a = t(6179),
                    i = t.n(a),
                    o = t(3495),
                    s = t(1043),
                    l = t(5262);
                const c = ({ children: e }) => {
                    const u = (0, a.useContext)(o.Y),
                        t = (0, a.useState)(u),
                        c = t[0],
                        _ = t[1],
                        E = (0, a.useCallback)((e, u) => {
                            const t = n.O.view.pxToRem(e),
                                r = n.O.view.pxToRem(u);
                            _(Object.assign({ width: t, height: r }, (0, l.T)(t, r, s.j)));
                        }, []),
                        d = (0, a.useCallback)(() => {
                            const e = n.O.client.getSize('px');
                            E(e.width, e.height);
                        }, [E]);
                    (0, r.Z)(() => {
                        n.O.client.events.on('clientResized', E), n.O.client.events.on('self.onScaleUpdated', d);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                n.O.client.events.off('clientResized', E),
                                    n.O.client.events.off('self.onScaleUpdated', d);
                            },
                            [E, d],
                        );
                    const A = (0, a.useMemo)(() => Object.assign({}, c), [c]);
                    return i().createElement(o.Y.Provider, { value: A }, e);
                };
            },
            6010: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t(7382),
                    a = t(3495);
                const i = ['children'];
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, i);
                    const o = (0, n.useContext)(a.Y),
                        s = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        _ = o.small,
                        E = o.extraSmall,
                        d = o.extraLargeWidth,
                        A = o.largeWidth,
                        F = o.mediumWidth,
                        m = o.smallWidth,
                        D = o.extraSmallWidth,
                        C = o.extraLargeHeight,
                        B = o.largeHeight,
                        g = o.mediumHeight,
                        p = o.smallHeight,
                        h = o.extraSmallHeight,
                        f = { extraLarge: C, large: B, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && _) return u;
                        if (t.extraSmall && E) return u;
                    } else {
                        if (t.extraLargeWidth && d) return (0, r.H)(u, t, f);
                        if (t.largeWidth && A) return (0, r.H)(u, t, f);
                        if (t.mediumWidth && F) return (0, r.H)(u, t, f);
                        if (t.smallWidth && m) return (0, r.H)(u, t, f);
                        if (t.extraSmallWidth && D) return (0, r.H)(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && p) return u;
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
                t.d(u, { YN: () => r.Y, ZN: () => n.Z });
                t(6010);
                var n = t(1039),
                    r = t(3495);
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
                function r(e, u, t) {
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
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
                    };
                }
                t.d(u, { T: () => r, u: () => n }),
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
            7078: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => s });
                var n = t(6179),
                    r = t.n(n),
                    a = t(2056);
                const i = ['children'];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const s = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, i);
                    return r().createElement(
                        a.u,
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
            3415: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => l });
                var n = t(6179),
                    r = t.n(n),
                    a = t(7078),
                    i = t(6373),
                    o = t(2056);
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(i.i, u, n);
                    const l = u.contentId;
                    return l ? r().createElement(o.u, s({}, u, { contentId: l }), n) : r().createElement(a.t, u, n);
                };
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var n = t(2056),
                    r = t(6179),
                    a = t.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            E = e.args,
                            d = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, i);
                        const A = (0, r.useMemo)(() => {
                            const e = Object.assign({}, E, { body: t, header: l, note: c, alert: _ });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [_, t, l, c, E]);
                        return a().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((F = null == E ? void 0 : E.hasHtmlContent),
                                        F ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: A,
                                },
                                d,
                            ),
                            u,
                        );
                        var F;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var n = t(7902),
                    r = t(9916),
                    a = t(6179);
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
                                    type: r.B0.TOOLTIP,
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
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            E = e.onClick,
                            d = e.ignoreShowDelay,
                            A = void 0 !== d && d,
                            F = e.ignoreMouseClick,
                            m = void 0 !== F && F,
                            D = e.decoratorId,
                            C = void 0 === D ? 0 : D,
                            B = e.isEnabled,
                            g = void 0 === B || B,
                            p = e.targetId,
                            h = void 0 === p ? 0 : p,
                            f = e.onShow,
                            b = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, i);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, a.useMemo)(() => h || (0, n.F)().resId, [h]),
                            x = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(t, C, { isMouseEvent: !0, on: !0, arguments: o(r) }, y),
                                    f && f(),
                                    (w.current.isVisible = !0));
                            }, [t, C, r, y, f]),
                            k = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        s(t, C, { on: !1 }, y),
                                        w.current.isVisible && b && b(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, C, y, b]),
                            T = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', T, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && k();
                            }, [g, k]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return g
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(x, A ? 100 : 400)),
                                                      l && l(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              k(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === m && k(), null == E || E(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === m && k(), null == _ || _(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : u;
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
                t.d(u, { U: () => o });
                var n = t(3138);
                function r(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return a(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? a(e, u)
                                          : void 0
                                );
                            }
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
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: u = 0, getRoot: t = i, context: a = 'model' } = {}) {
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
                            r = a.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, r);
                    };
                    return {
                        subscribe: (t, r) => {
                            const i = 'string' == typeof r ? `${a}.${r}` : a,
                                s = n.O.view.addModelObserver(i, u, !0);
                            return o.set(s, t), e && t(l(r)), s;
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
                            for (var e, t = r(o.keys()); !(e = t()).done; ) {
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
                    r = t(9174),
                    a = t(6179),
                    i = t.n(a),
                    o = t(8246);
                const s = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: _ }) {
                            const E = (0, a.useRef)([]),
                                d = (t, a, i) => {
                                    var s;
                                    const l = o.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == i ? void 0 : i.getter) ? s : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        d = (e) => E.current.push(e),
                                        A = e({
                                            mode: t,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const a = null != u ? u : _(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const a = null != u ? u : _(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = _(u);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, u) => ((e[u] = r.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            i = Object.entries(a),
                                                            o = i.reduce(
                                                                (e, [u, t]) => ((e[t] = r.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
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
                                        F = { mode: t, model: A, externalModel: c, cleanup: d };
                                    return {
                                        model: A,
                                        controls: 'mocks' === t && i ? i.controls(F) : u(F),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                A = (0, a.useRef)(!1),
                                F = (0, a.useState)(s),
                                m = F[0],
                                D = F[1],
                                C = (0, a.useState)(() => d(s, l, _)),
                                B = C[0],
                                g = C[1];
                            return (
                                (0, a.useEffect)(() => {
                                    A.current ? g(d(m, l, _)) : (A.current = !0);
                                }, [_, m, l]),
                                (0, a.useEffect)(() => {
                                    D(s);
                                }, [s]),
                                (0, a.useEffect)(
                                    () => () => {
                                        B.externalModel.dispose(), E.current.forEach((e) => e());
                                    },
                                    [B],
                                ),
                                i().createElement(t.Provider, { value: B }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            7044: (e, u, t) => {
                'use strict';
                t(3649), t(9916);
                var n = t(8613);
                Date.now(), n.Ew.getRegionalDateTime, n.Ew.getFormattedDateTime;
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => s, on: () => o, onResize: () => a, onScaleUpdated: () => i });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${u}`,
                                        i = l[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
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
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
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
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => n });
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
                var n = t(5959),
                    r = t(514);
                const a = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => i });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    i = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getScale: () => D,
                        getSize: () => d,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => f,
                        isFocused: () => p,
                        pxToRem: () => C,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    i = t(8566);
                const o = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function _(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function F(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    y = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    i = 32,
                    o = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? r : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(e) {
                            s(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                function n() {}
                t.d(u, { ZT: () => n, jv: () => a, yR: () => r });
                function r(e) {
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
            8071: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => n });
                const n = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
            },
            2344: (e, u, t) => {
                'use strict';
                t.d(u, { D9: () => a, DA: () => r.D, tT: () => r.t });
                t(3469), t(2133);
                var n = t(2790),
                    r = (t(579), t(5360));
                t(9056);
                const a = n.Z;
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(6179);
                const r = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            3469: (e, u, t) => {
                'use strict';
                t(7044), t(6179);
            },
            2133: (e, u, t) => {
                'use strict';
                t(6179);
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => s, GS: () => l, cJ: () => i, fd: () => o });
                var n = t(6179),
                    r = t(7739),
                    a = t(1043);
                let i, o, s;
                !(function (e) {
                    (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(s || (s = {}));
                const l = () => {
                    const e = (0, n.useContext)(r.YN),
                        u = e.width,
                        t = e.height,
                        a = ((e) => {
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
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5360: (e, u, t) => {
                'use strict';
                t.d(u, { D: () => c, t: () => _ });
                var n = t(7902),
                    r = t(8071),
                    a = t(6536),
                    i = t(9916),
                    o = t(7332),
                    s = t(6179);
                const l = i.Sw.instance;
                let c;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(c || (c = {}));
                const _ = (e = 'model', u = c.Deep) => {
                    const t = (0, s.useState)(0),
                        i = (t[0], t[1]),
                        _ = (0, s.useMemo)(() => (0, n.F)(), []),
                        E = _.caller,
                        d = _.resId,
                        A = (0, s.useMemo)(
                            () => (window.__feature && window.__feature !== E ? `subViews.${E}.${e}` : e),
                            [E, e],
                        ),
                        F = (0, s.useState)(() =>
                            ((e) => {
                                const u = (0, r.M)(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return (0, o.os)(u) ? u.value : u;
                            })((0, o.Gd)(A)),
                        ),
                        m = F[0],
                        D = F[1],
                        C = (0, s.useRef)(-1);
                    return (
                        (0, a.Z)(() => {
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
                                            ? (e === m && i((e) => e + 1), D(e))
                                            : D(Object.assign([], e));
                                    },
                                    n = (0, o.U0)(e);
                                C.current = l.addCallback(n, t, d, u === c.Deep);
                            }
                        }),
                        (0, s.useEffect)(() => {
                            if (u !== c.None)
                                return () => {
                                    l.removeCallback(C.current, d);
                                };
                        }, [d, u]),
                        m
                    );
                };
            },
            9056: (e, u, t) => {
                'use strict';
                var n = t(9916);
                t(6179);
                n.Sw.instance;
            },
            2790: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(6179);
                const r = (e, u) => {
                    const t = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            (u && !u(e)) || (t.current = e);
                        }, [u, e]),
                        t.current
                    );
                };
            },
            4419: (e, u, t) => {
                'use strict';
                t.d(u, { y: () => a });
                var n = t(8045),
                    r = t(6179);
                const a = (e, u, t = !0) => {
                    const a = (0, r.useCallback)(
                        (e) => {
                            const t = e[0];
                            u && u(t);
                        },
                        [u],
                    );
                    (0, r.useEffect)(() => {
                        if (!e.current || !t) return;
                        const u = new n.Z((e) => a(e));
                        return (
                            u.observe(e.current),
                            () => {
                                u.disconnect();
                            }
                        );
                    }, [a, t, e]);
                };
            },
            579: (e, u, t) => {
                'use strict';
                t(3138), t(6179);
            },
            5521: (e, u, t) => {
                'use strict';
                let n, r;
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
                    })(r || (r = {}));
            },
            9480: (e, u, t) => {
                'use strict';
                function n(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                t.d(u, { UI: () => a, u4: () => i });
                const r = n;
                function a(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function i(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let n = t;
                    for (let t = 0; t < e.length; t++) {
                        n = u(n, r(e, t), t, e);
                    }
                    return n;
                }
            },
            3649: (e, u, t) => {
                'use strict';
                t.d(u, {
                    BN: () => i,
                    Eg: () => l,
                    Uw: () => m,
                    WU: () => a,
                    dL: () => D,
                    e: () => o,
                    v2: () => r,
                    z4: () => s,
                });
                var n = t(1281);
                let r;
                function a(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function i(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(r || (r = {}));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    c = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    _ = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    E = (e, u, t = r.left) => e.split(u).reduce(t === r.left ? c : _, []),
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
                    A = ['zh_cn', 'zh_sg', 'zh_tw'],
                    F = (e, u = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (A.includes(t)) return d(e);
                        if ('ja' === t) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => s(e));
                        }
                        return ((e, u = r.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = s(e);
                            return E(a, /( )/, u).forEach((e) => (t = t.concat(E(e, n, r.left)))), t;
                        })(e, u);
                    },
                    m = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : F(e, u))),
                    D = (e) => a(R.strings.common.percentValue(), { value: e });
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(3138);
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
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                r.__instance = void 0;
                const a = r;
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
                t.d(u, { Sw: () => a.Z, B3: () => s, Z5: () => i.Z5, B0: () => o, ry: () => D, Eu: () => C });
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
                const r = n;
                var a = t(1358);
                var i = t(8613);
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
                var E = t(5521),
                    d = t(3138);
                const A = ['args'];
                function F(e, u, t, n, r, a, i) {
                    try {
                        var o = e[a](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, r);
                }
                const m = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function i(e) {
                                            F(a, n, r, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            F(a, n, r, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => B(o.CLOSE),
                    p = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var h = t(7572);
                const f = r.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (e) => B(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => B(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                _ = s.width,
                                E = s.height,
                                A = {
                                    x: d.O.view.pxToRem(l) + i.x,
                                    y: d.O.view.pxToRem(c) + i.y,
                                    width: d.O.view.pxToRem(_),
                                    height: d.O.view.pxToRem(E),
                                };
                            B(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: m(A),
                                on: !0,
                                args: a,
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
                        handleViewEvent: B,
                        onBindingsReady: D,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
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
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            7332: (e, u, t) => {
                'use strict';
                t.d(u, { Gd: () => s, U0: () => l, kJ: () => i, os: () => a });
                var n = t(7902),
                    r = t(8071);
                const a = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    i = (e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name,
                    o = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    s = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = (0, r.M)(`${e}.${t}`, window);
                                return a(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    l = (e) => {
                        const u = ((e) => {
                                const u = (0, n.F)(),
                                    t = u.caller,
                                    r = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: o(a, e || ''), resId: r };
                            })(),
                            t = u.modelPrefix,
                            i = e.split('.');
                        if (i.length > 0) {
                            const e = [i[0]];
                            return (
                                i.reduce((u, n) => {
                                    const i = (0, r.M)(o(t, `${u}.${n}`), window);
                                    return a(i) ? (e.push(i.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
            },
            3618: (e, u, t) => {
                'use strict';
                t.d(u, { w: () => d });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3415),
                    i = t(4419),
                    o = t(6179),
                    s = t.n(o),
                    l = t(6143),
                    c = t(3310),
                    _ = t(131),
                    E = t(9053);
                const d = s().memo(
                    ({
                        text: e,
                        classMix: u,
                        onSizeChanged: t,
                        binding: n,
                        isTooltipEnable: d = !1,
                        isTruncationAvailable: A = !1,
                        customTooltipArgs: F,
                        targetId: m,
                        justifyContent: D = E.v2.FlexStart,
                        alignContent: C = E.v2.FlexStart,
                        truncateIdentify: B = E.YA,
                    }) => {
                        const g = (0, o.useRef)(null),
                            p = (0, o.useRef)({ height: 0, width: 0 }),
                            h = (0, o.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            f = h[0],
                            b = h[1],
                            v = (0, o.useMemo)(() => (0, c.s)(e, n, { justifyContent: D }), [n, D, e]),
                            w = (0, o.useMemo)(() => {
                                if (d && f.isTruncated && (!n || !Object.values(n).find((e) => 'object' == typeof e)))
                                    return {
                                        args: Object.assign({ text: e }, F, {
                                            stringifyKwargs: n ? JSON.stringify(n) : '',
                                        }),
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: m,
                                    };
                            }, [n, d, m, e, F, f.isTruncated]),
                            y = (0, o.useCallback)(
                                (e) => {
                                    (p.current.width = e.contentRect.width), (p.current.height = e.contentRect.height);
                                    const u = (0, _.T)(g, v, p.current, B),
                                        n = u[0],
                                        r = u[1];
                                    b({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r);
                                },
                                [t, B, v],
                            ),
                            x = (0, o.useMemo)(() => ({ justifyContent: D, alignContent: C }), [C, D]);
                        return (
                            (0, i.y)(g, y, A),
                            s().createElement(
                                'div',
                                {
                                    className: r()(
                                        l.Z.base,
                                        u,
                                        l.Z.base__zeroPadding,
                                        A && l.Z.base__isTruncationAvailable,
                                    ),
                                    style: x,
                                },
                                s().createElement('div', { className: l.Z.unTruncated, ref: g }, v),
                                s().createElement(
                                    a.l,
                                    {
                                        tooltipArgs: w,
                                        className: r()(
                                            l.Z.tooltip,
                                            l.Z[`tooltip__justify-${D}`],
                                            l.Z[`tooltip__align-${C}`],
                                        ),
                                    },
                                    s().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                l.Z.truncated,
                                                !f.isTruncateFinished && A && l.Z.truncated__hide,
                                            ),
                                            style: x,
                                        },
                                        f.isTruncateFinished && A ? f.elementList : v,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, u, t) => {
                'use strict';
                t.d(u, { s: () => d });
                var n = t(3649),
                    r = t(6799),
                    a = t(6960),
                    i = t(9053);
                const o = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    s = (e) => {
                        const u = [];
                        return (
                            (0, a.Z)(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var t;
                                    R.strings.settings.LANGUAGE_CODE().toLowerCase() === i.Co
                                        ? u.push(...((t = e), t.match(o) || []))
                                        : u.push(...e.split(''));
                                },
                                (e) => {
                                    u.push(e[0]);
                                },
                            ),
                            u
                        );
                    },
                    l = i.u6
                        ? (e) => {
                              const u = [];
                              return (
                                  (0, a.Z)(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(...s(e[0]));
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(e);
                              if (!n) return [e];
                              const r = [];
                              let a = 0;
                              for (; n; ) {
                                  const o = u.justifyContent === i.v2.FlexEnd ? n.index : t.lastIndex;
                                  r.push(e.slice(a, o)), (a = o), (n = t.exec(e));
                              }
                              return a !== e.length && r.push(e.slice(a)), r;
                          },
                    c = (e, u = '', t) => {
                        const n = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: i.kH.Word, colorTag: u, childList: l(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        r = i.aF[t.charAt(0)];
                                    r === i.kH.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: i.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: i.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : n.push({ blockType: r, colorTag: u, childList: [t] });
                                },
                            ),
                            n
                        );
                    },
                    _ = (e, u, t = '', n) => {
                        const r = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...c(e, t, n));
                                },
                                (e) => {
                                    const a = e[1],
                                        o = void 0 === u[a] ? e[0] : u[a];
                                    'string' == typeof o || 'number' == typeof o
                                        ? r.push(...c(String(o), t, n))
                                        : r.push({ blockType: i.kH.Binding, colorTag: t, childList: [o] });
                                },
                            ),
                            r
                        );
                    },
                    E = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === i.kH.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: i.kH.NoBreakWrapper, colorTag: '', childList: [u, n] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    d = (e, u = {}, t) => {
                        if (!e) return [];
                        const o = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === i.kH.NoBreakSymbol
                                        ? ((t = !0), u.push(...E(u.pop(), e)))
                                        : (t ? u.push(...E(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const n = [];
                                return (
                                    (0, a.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(..._(e, u, '', t));
                                        },
                                        (e) => {
                                            n.push(..._(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    n
                                );
                            })((0, n.Eg)((0, n.z4)(e)), u, t),
                        );
                        return (0, r.w)(o);
                    };
            },
            6799: (e, u, t) => {
                'use strict';
                t.d(u, { w: () => i });
                var n = t(597),
                    r = t(9053);
                const a = (e, u, t) => {
                        const i = [];
                        return (
                            e.childList.forEach((o, s) => {
                                const l = `${t}_${s}`;
                                if ((0, r.dz)(o)) {
                                    const e = o,
                                        u = e.blockType,
                                        t = n.IY[u],
                                        r = a(e, t, l);
                                    i.push(...r);
                                } else i.push(u({ elementList: [o], textBlock: e, key: l }));
                            }),
                            i
                        );
                    },
                    i = (e) => {
                        const u = [];
                        return (
                            e.forEach((e, t) => {
                                u.push(
                                    ...((e, u) => {
                                        const t = [],
                                            i = e.blockType,
                                            o = n.IY[i],
                                            s = a(e, o, u);
                                        return (
                                            i === r.kH.NoBreakWrapper
                                                ? t.push(o({ elementList: s, textBlock: e, key: `${u}` }))
                                                : t.push(...s),
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
                t.d(u, { Z: () => n });
                const n = (e, u, t, n) => {
                    let r = u.exec(e),
                        a = 0;
                    for (; r; ) a !== r.index && t(e.slice(a, r.index)), n(r), (a = u.lastIndex), (r = u.exec(e));
                    a !== e.length && t(e.slice(a));
                };
            },
            131: (e, u, t) => {
                'use strict';
                t.d(u, { T: () => c });
                var n = t(6179),
                    r = t.n(n),
                    a = t(9053);
                const i = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    o = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    s = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = o(e, u),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            i = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / a);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const s = Math.max(t + i, 0);
                        return r < s ? [!1, 0] : [!0, s];
                    },
                    l = (e, u, t, n, i, o) => {
                        let c = -1,
                            _ = null;
                        for (let E = t; E >= 0; E--) {
                            const t = e[E],
                                d = Number(e[E].getAttribute(a.bF));
                            if (d === a.kH.LineBreak || d === a.kH.NewLine || d === a.kH.Binding) continue;
                            const A = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = s(t, n, i),
                                    a = e[0],
                                    l = e[1];
                                if (!a) {
                                    l > 0 && (i -= l);
                                    continue;
                                }
                                const d = A.slice(0, A.length - l) + o,
                                    F = u[E];
                                (_ = r().cloneElement(F, F.props, d)), (c = E);
                                break;
                            }
                            {
                                const e = t.children,
                                    a = u[E],
                                    s = a.props.children,
                                    d = l(e, s, e.length - 1, n, i, o),
                                    F = d[0],
                                    m = d[1];
                                if (!(F < 0)) {
                                    const e = s.slice(0, F);
                                    (_ = r().cloneElement(a, a.props, e, m)), (c = E);
                                    break;
                                }
                                i -= A.length;
                            }
                        }
                        return [c, _];
                    },
                    c = (e, u, t, n = a.YA) => {
                        const r = [...u],
                            s = e.current;
                        if (!s) return [r, !1];
                        const c = t.height,
                            _ = t.width,
                            E = s.lastElementChild;
                        if (!i(E, c) && o(E, _) <= 0) return [r, !1];
                        const d = s.children,
                            A = ((e, u) => {
                                let t = 0,
                                    n = e.length - 1;
                                for (; n - t >= 0; ) {
                                    const r = t + Math.ceil(0.5 * (n - t));
                                    i(e[r], u) ? (n = r - 1) : (t = r + 1);
                                }
                                return t - 1;
                            })(d, c);
                        if (A < 0) return [r, !1];
                        const F = l(d, r, A, _, n.length, n),
                            m = F[0],
                            D = F[1];
                        return D && (r.splice(m, 1, D), r.splice(m + 1)), [r, !0];
                    };
            },
            9053: (e, u, t) => {
                'use strict';
                let n, r, a;
                t.d(u, {
                    Co: () => c,
                    YA: () => o,
                    aF: () => l,
                    bF: () => s,
                    dz: () => i,
                    kH: () => n,
                    u6: () => _,
                    v2: () => r,
                }),
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
                    })(r || (r = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(a || (a = {}));
                const i = (e) => void 0 !== e.childList,
                    o = '...',
                    s = 'data-block-type',
                    l = { [a.NBSP]: n.NoBreakSymbol, [a.ZWNBSP]: n.NoBreakSymbol, [a.NEW_LINE]: n.LineBreak },
                    c = 'th',
                    _ = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', c].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase());
            },
            597: (e, u, t) => {
                'use strict';
                t.d(u, { IY: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    i = t.n(a),
                    o = t(9053),
                    s = t(9627),
                    l = t(7629);
                const c = (e) => ({ color: `#${e}` }),
                    _ = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? s.Z[n]
                                ? i().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: r()(l.Z.word, s.Z[n]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: l.Z.word, style: c(n) },
                                      e,
                                  )
                            : i().createElement(
                                  'span',
                                  { key: t, 'data-block-type': u.blockType, className: l.Z.word },
                                  e,
                              );
                    },
                    E = {
                        [o.kH.Word]: _,
                        [o.kH.NoBreakSymbol]: _,
                        [o.kH.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: t }, e)),
                            ),
                        [o.kH.LineBreak]: ({ key: e }) =>
                            i().createElement('span', {
                                key: e,
                                'data-block-type': o.kH.LineBreak,
                                className: l.Z.lineBreak,
                            }),
                        [o.kH.NewLine]: ({ elementList: e, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': o.kH.NewLine, className: l.Z.newLine },
                                e,
                            ),
                        [o.kH.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': o.kH.NoBreakWrapper, className: l.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            5298: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => r });
                var n = t(776);
                const r = (e, u) => ({
                    isEnabled: e !== n.f.absent,
                    args: u,
                    contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                    decoratorId:
                        e === n.f.normal ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId') : void 0,
                    ignoreShowDelay: e === n.f.backport,
                    ignoreMouseClick: !0,
                });
            },
            7160: (e, u, t) => {
                'use strict';
                t.d(u, { qb: () => n });
                const n = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2);
            },
            8018: (e, u, t) => {
                'use strict';
                t.d(u, { H$: () => i, Y4: () => o, gO: () => a });
                var n = t(771);
                t(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let r;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(r || (r = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let a;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.CREW_POST_PROGRESSION_START = 'crew_pb_start'),
                        (e.CREW_POST_PROGRESSION_STOP = 'crew_pb_stop'),
                        (e.CREW_POST_PROGRESSION_REWARD = 'crew_postprog_reward'),
                        (e.CREW_RETRAIN_DOWN = 'crew_retrain_down'),
                        (e.CREW_RETRAIN_UP = 'crew_retrain_up'),
                        (e.CREW_PROFILE_UPGRADE = 'crew_profile_upgrade'),
                        (e.CREW_POSTPROG_WIDGET = 'crew_postprog_widget'),
                        (e.CREW_UNLOCK_MAJOR_PERK_START = 'crew_unlock_major_perk_start'),
                        (e.CREW_UNLOCK_MAJOR_PERK_STOP = 'crew_unlock_major_perk_stop'),
                        (e.CREW_SETTING_UP_MAJOR_PERK = 'crew_setting_up_major_perk'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(a || (a = {}));
                let i;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(i || (i = {}));
                const o = (e) => (e === n.sU ? i.Untrained : e < n.yb ? i.Low : i.Normal);
            },
            3345: (e, u, t) => {
                'use strict';
                var n = t(7739),
                    r = t(6179),
                    a = t.n(r),
                    i = t(6483),
                    o = t.n(i),
                    s = t(926),
                    l = t.n(s),
                    c = t(5415);
                const _ = ['children', 'className'];
                function E() {
                    return (
                        (E = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        E.apply(null, arguments)
                    );
                }
                const d = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: l().SMALL_WIDTH,
                        [c.fd.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    A = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: l().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    F = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: l().SMALL,
                        [c.cJ.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [c.cJ.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [c.cJ.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    m = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, _);
                        const r = (0, c.GS)(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            l = r.mediaSize;
                        return a().createElement('div', E({ className: o()(t, d[i], A[s], F[l]) }, n), u);
                    },
                    D = ['children'];
                const C = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, D);
                    return a().createElement(n.ZN, null, a().createElement(m, t, u));
                };
                var B = t(493),
                    g = t.n(B);
                var p = t(2344),
                    h = t(3138),
                    f = t(5521),
                    b = t(9916);
                const v = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function w(e = f.n.NONE, u = v, t = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== f.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && h.O.view.isEventHandled()) return;
                                h.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                const y = /<link.*?>/g,
                    x = /\.\.\//g,
                    k = /<script.*?>/g,
                    T = 'default.css',
                    L = (e) => {
                        const u = e.match(x);
                        return u && u.join('');
                    },
                    S = () => {
                        for (
                            var e = 0, u = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < u.length;
                            e++
                        ) {
                            const t = u[e];
                            if (!t.href.includes(T)) return t.href;
                        }
                        return '';
                    },
                    N = (e) => {
                        const u = S(),
                            t = L(u);
                        let n,
                            r = e;
                        for (; null !== (n = k.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const u = t + e[2].replace(x, '');
                                r = r.replace(e[2], u);
                            }
                        }
                        return r;
                    },
                    O = 'SubView_base_df',
                    P = 'subViews.onChanged',
                    M = 'subView:inject->',
                    I = (() => {
                        const e = [];
                        let u = !1;
                        const t = () => {
                            if (!e.length) return void (u = !1);
                            const n = e.shift();
                            n && ((u = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                e.push(n), u || t();
                            },
                        };
                    })(),
                    H = (0, r.memo)(({ id: e, fallback: u, onLoadCallback: t, mixClass: n }) => {
                        const i = (0, r.useState)(''),
                            s = i[0],
                            l = i[1],
                            c = (0, r.useMemo)(() => ({ __html: N(s) }), [s]),
                            _ = (0, r.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            E = (0, r.useState)(!1),
                            d = E[0],
                            A = E[1],
                            F = (0, r.useCallback)(
                                (e) => {
                                    e.includes(_) &&
                                        (A(!0), engine.off(P, F), window.subViews.removeChildChangedCallback(_));
                                },
                                [_],
                            ),
                            m = (0, r.useCallback)((e) => {
                                I.add(
                                    () =>
                                        new Promise((u) => {
                                            l(e);
                                            const t = new MutationObserver(() => {
                                                    t.disconnect(), u();
                                                }),
                                                n = document.getElementById('root');
                                            n && t.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, r.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const u = window.subViews.get(e),
                                    t = u.path;
                                let n;
                                if ((n = t.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, u)),
                                        engine.on(`${M}${n}`, m),
                                        (({ path: e, name: u }) => {
                                            const t = new XMLHttpRequest();
                                            (t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, b.Eu)().then(() => {
                                                              console.info(`Sub view ${u} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${u}`,
                                                                      t.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${t.status} - can't get bundle`,
                                                          ));
                                            }),
                                                t.open('GET', e),
                                                t.send();
                                        })({ name: n, path: t }),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`${M}${n}`, m),
                                                console.info(`Sub view ${n} is destroyed: ${t}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(P, F);
                        }, [F, m, e, d]),
                            (0, r.useEffect)(
                                () => () => {
                                    s &&
                                        ((e) => {
                                            const u = L(S());
                                            let t;
                                            for (; null !== (t = y.exec(e)); ) {
                                                const e = t[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const t = u + e[1].replace(x, ''),
                                                        n = document.head.querySelector(`[href="${t}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(s);
                                },
                                [s],
                            );
                        const D = o()(O, n);
                        if (s) {
                            let u;
                            return (
                                (u = document.getElementById('root')) && u.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let u;
                                    const t = S(),
                                        n = L(t);
                                    for (; null !== (u = y.exec(e)); ) {
                                        const e = u[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(T) && n) {
                                            const u = n + e[1].replace(x, ''),
                                                t = document.createElement('link');
                                            (t.href = u), (t.rel = 'stylesheet'), document.head.appendChild(t);
                                        }
                                    }
                                })(s),
                                t && t(e),
                                a().createElement('div', { className: D, dangerouslySetInnerHTML: c })
                            );
                        }
                        return u ? a().createElement('div', { className: D }, a().createElement(u, null)) : null;
                    });
                function W(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const j = {
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
                let $, G;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })($ || ($ = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(G || (G = {}));
                const U = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: i,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: _,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: A,
                    onMouseLeave: F,
                    onClick: m,
                }) => {
                    const D = (0, r.useRef)(null),
                        C = (0, r.useState)(t),
                        B = C[0],
                        g = C[1],
                        p = (0, r.useState)(!1),
                        h = p[0],
                        f = p[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                B && null !== D.current && !D.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, r.useEffect)(() => {
                            g(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: D,
                                className: o()(
                                    j.base,
                                    j[`base__${n}`],
                                    i && j.base__disabled,
                                    u && j[`base__${u}`],
                                    B && j.base__focus,
                                    h && j.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    i || (null !== l && W(l), _ && _(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    i || (A && A(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    i ||
                                        (null !== c && W(c),
                                        d && d(e),
                                        t && (i || (D.current && (D.current.focus(), g(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    i || (F && F(e), f(!1));
                                },
                                onClick: function (e) {
                                    i || (m && m(e));
                                },
                            },
                            n !== $.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: j.back }),
                                    a().createElement('span', { className: j.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: o()(j.state, j.state__default) },
                                a().createElement('span', { className: j.stateDisabled }),
                                a().createElement('span', { className: j.stateHighlightHover }),
                                a().createElement('span', { className: j.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: j.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                U.defaultProps = { type: $.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const V = U;
                var Z = t(6373);
                const z = 'TextOverflow_base_3b',
                    q = ['content', 'classMix', 'className'];
                function X() {
                    return (
                        (X = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        X.apply(null, arguments)
                    );
                }
                const Y = (e) => {
                    let u = e.content,
                        t = e.classMix,
                        n = e.className,
                        i = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, q);
                    const s = (0, r.useRef)(null),
                        l = (0, r.useState)(!0),
                        c = l[0],
                        _ = l[1];
                    return (
                        (0, r.useEffect)(() =>
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
                            })(() => {
                                const e = s.current;
                                e && e.offsetWidth >= e.scrollWidth && _(!1);
                            }),
                        ),
                        a().createElement(
                            Z.i,
                            { isEnabled: c, body: u },
                            a().createElement('div', X({}, i, { ref: s, className: o()(z, n, t) }), u),
                        )
                    );
                };
                var K = t(2056),
                    J = t(776),
                    Q = t(5298);
                const ee = 'DialogTemplateButton_base_0b',
                    ue = 'DialogTemplateButton_label_83',
                    te = 'DialogTemplateButton_label__noTooltip_14',
                    ne = (0, r.memo)(
                        ({ onClick: e, isFocused: u, buttonID: t, isDisabled: n, label: i, tooltip: s, type: l }) => {
                            const c = (0, r.useCallback)(() => {
                                    e({ buttonID: t });
                                }, [e, t]),
                                _ = (0, r.useMemo)(() => (0, Q.l)(s.type, { buttonID: t }), [s.type, t]),
                                E = o()(ue, s.type !== J.f.absent && te);
                            return a().createElement(
                                K.u,
                                _,
                                a().createElement(
                                    'div',
                                    { className: ee },
                                    a().createElement(
                                        V,
                                        { size: G.medium, type: l, disabled: n, onClick: c, isFocused: u },
                                        a().createElement(Y, { classMix: E, content: i || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    re = 'DialogTemplateButtonList_base_8e';
                function ae() {
                    return (
                        (ae = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ae.apply(null, arguments)
                    );
                }
                const ie = (0, r.memo)(() => {
                        const e = (0, p.tT)('model').onButtonClicked,
                            u = (0, p.tT)('model.focus'),
                            t = u.focusedIndex,
                            n = u.onTabPressed,
                            i = (0, p.tT)('model.buttons'),
                            o = (0, r.useCallback)(
                                (e) => {
                                    n({ shift: e.shiftKey });
                                },
                                [n],
                            );
                        w(f.n.TAB, o);
                        const s = (0, r.useCallback)(
                            (u) => {
                                if (t < 0 || t >= i.length) return;
                                const n = i[t].value;
                                u.altKey || n.isDisabled || e({ buttonID: n.buttonID });
                            },
                            [i, t, e],
                        );
                        return (
                            w(f.n.ENTER, s),
                            a().createElement(
                                'div',
                                { className: re },
                                i.map(({ value: u }, n) =>
                                    a().createElement(ne, ae({ key: u.buttonID, isFocused: n === t, onClick: e }, u)),
                                ),
                            )
                        );
                    }),
                    oe = 'DialogTemplateWrapper_base_f7',
                    se = 'DialogTemplateWrapper_base__hidden_5f',
                    le = 'DialogTemplateWrapper_subView_30';
                function ce() {
                    return (
                        (ce = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ce.apply(null, arguments)
                    );
                }
                const _e = (0, r.memo)(({ Template: e }) => {
                    const u = (0, p.tT)('model', p.DA.None),
                        t = u.onCloseClicked,
                        i = u.placeHolders,
                        s = u.background,
                        l = u.dimmerAlpha,
                        c = u.displayFlags;
                    (0, r.useEffect)(() => {
                        const e = document.getElementById('root');
                        e && e.setAttribute('id', 'stubDialogTemplate');
                    }, []);
                    const _ = c.map(({ value: e }) => e),
                        E = (0, r.useRef)(i.map(({ value: e }) => e.resourceID)),
                        d = (0, r.useState)(0 !== E.current.length),
                        A = d[0],
                        F = d[1],
                        m = (0, r.useCallback)(
                            (e = 'default') => {
                                t({ reason: e });
                            },
                            [t],
                        ),
                        D = (0, r.useCallback)(() => {
                            m('escape');
                        }, [m]);
                    var C;
                    (C = D), w(f.n.ESCAPE, C);
                    const B = (0, r.useCallback)((e) => {
                            const u = E.current,
                                t = u.indexOf(e);
                            t > -1 && (u.splice(t, 1), 0 === u.length && F(!1));
                        }, []),
                        g = (0, r.useMemo)(() => {
                            const e = { backgroundColor: `rgba(19, 18, 16, ${l})` };
                            return s && (e.backgroundImage = `url(${s})`), e;
                        }, [s, l]),
                        h = (0, r.useMemo)(
                            () =>
                                i.reduce(
                                    (e, { value: u }) => (
                                        (e[u.placeHolder] = a().createElement(H, {
                                            key: u.placeHolder,
                                            id: u.resourceID,
                                            mixClass: le,
                                            onLoadCallback: B,
                                        })),
                                        e
                                    ),
                                    {},
                                ),
                            [B, i],
                        ),
                        b = o()(oe, A && se);
                    return a().createElement(
                        n.ZN,
                        null,
                        a().createElement(
                            'div',
                            { className: b, style: g },
                            a().createElement(
                                e,
                                ce(
                                    { onClose: m, buttons: a().createElement(ie, null), displayFlags: _, isShown: !A },
                                    h,
                                ),
                            ),
                        ),
                    );
                });
                var Ee = t(3403);
                const de = {
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
                    Ae = [
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
                function Fe() {
                    return (
                        (Fe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Fe.apply(null, arguments)
                    );
                }
                class me extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && W(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && W(this.props.soundClick);
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
                            r = e.side,
                            i = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            E = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, Ae)),
                            A = o()(de.base, de[`base__${i}`], de[`base__${r}`], null == s ? void 0 : s.base),
                            F = o()(de.icon, de[`icon__${i}`], de[`icon__${r}`], null == s ? void 0 : s.icon),
                            m = o()(de.glow, null == s ? void 0 : s.glow),
                            D = o()(de.caption, de[`caption__${i}`], null == s ? void 0 : s.caption),
                            C = o()(de.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            Fe(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(_),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== i && a().createElement('div', { className: de.shine }),
                            a().createElement('div', { className: F }, a().createElement('div', { className: m })),
                            a().createElement('div', { className: D }, u),
                            n && a().createElement('div', { className: C }, n),
                        );
                    }
                }
                let De;
                (me.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.responsiveHeader = 'responsiveHeader'),
                            (e.responsiveClosePosition = 'responsiveClosePosition'),
                            (e.disableResponsiveContentPosition = 'disableResponsiveContentPosition');
                    })(De || (De = {}));
                var Ce = t(5262),
                    Be = t(3649);
                function ge(e, u, t) {
                    const a = (0, r.useContext)(n.YN);
                    let i = Object.entries(a).filter(([e, u]) => !0 === u && e in Ce.u);
                    return (
                        t && (i = i.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const n = i.map((e) =>
                                o()(u[((e, u) => e + '__' + u)(t, e[0])], u[((e, u) => e + (0, Be.e)(u))(t, e[0])]),
                            );
                            return (e[t] = o()(u[t], ...n)), e;
                        }, {})
                    );
                }
                const pe = {
                        base: 'DefaultDialogTemplate_base_d2',
                        topRight: 'DefaultDialogTemplate_topRight_eb',
                        center: 'DefaultDialogTemplate_center_b4',
                        center__shown: 'DefaultDialogTemplate_center__shown_e1',
                        windowIn: 'DefaultDialogTemplate_windowIn_3b',
                        center__withIcon: 'DefaultDialogTemplate_center__withIcon_f9',
                        base__extraSmallHeight: 'DefaultDialogTemplate_base__extraSmallHeight_f5',
                        center__responsive: 'DefaultDialogTemplate_center__responsive_21',
                        base__smallHeight: 'DefaultDialogTemplate_base__smallHeight_52',
                        icon: 'DefaultDialogTemplate_icon_36',
                        icon__responsive: 'DefaultDialogTemplate_icon__responsive_e0',
                        title: 'DefaultDialogTemplate_title_c6',
                        title__responsive: 'DefaultDialogTemplate_title__responsive_6e',
                        content: 'DefaultDialogTemplate_content_22',
                        footer: 'DefaultDialogTemplate_footer_4e',
                        buttons: 'DefaultDialogTemplate_buttons_f7',
                        divider: 'DefaultDialogTemplate_divider_d5',
                        divider__noContent: 'DefaultDialogTemplate_divider__noContent_3f',
                        divider__noFooter: 'DefaultDialogTemplate_divider__noFooter_10',
                        closeBtn: 'DefaultDialogTemplate_closeBtn_5e',
                        closeBtn__responsive: 'DefaultDialogTemplate_closeBtn__responsive_49',
                    },
                    he = (0, r.memo)(
                        ({
                            isShown: e = !0,
                            classMix: u,
                            onClose: t,
                            icon: n,
                            topRight: i,
                            title: s,
                            content: l,
                            buttons: c,
                            footer: _,
                            displayFlags: E,
                            classNames: d,
                        }) => {
                            const A = ((e, u) => Object.keys(u).reduce((u, t) => ((u[t] = e.includes(t)), u), {}))(
                                    E,
                                    De,
                                ),
                                F = A.responsiveHeader,
                                m = A.responsiveClosePosition,
                                D = A.disableResponsiveContentPosition,
                                C = ge(['base'], pe),
                                B = (0, r.useCallback)(() => {
                                    t && t();
                                }, [t]),
                                g = o()(C.base, u),
                                p = o()(
                                    pe.center,
                                    n && pe.center__withIcon,
                                    e && pe.center__shown,
                                    !D && pe.center__responsive,
                                    null == d ? void 0 : d.center,
                                ),
                                h = o()(pe.icon, F && pe.icon__responsive, null == d ? void 0 : d.icon),
                                f = o()(pe.title, F && pe.title__responsive),
                                b = o()(pe.closeBtn, m && pe.closeBtn__responsive),
                                v = o()(
                                    pe.divider,
                                    !l && pe.divider__noContent,
                                    !_ && pe.divider__noFooter,
                                    null == d ? void 0 : d.divider,
                                );
                            return a().createElement(
                                'div',
                                { className: g },
                                a().createElement(
                                    'div',
                                    { className: pe.topRight },
                                    i,
                                    a().createElement(
                                        'div',
                                        { className: b },
                                        a().createElement(me, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: B,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: p },
                                    n && a().createElement('div', { className: h }, n),
                                    s && a().createElement('div', { className: f }, s),
                                    l && a().createElement('div', { className: pe.content }, l),
                                    a().createElement('div', { className: v }),
                                    _ && a().createElement('div', { className: pe.footer }, _),
                                    c && a().createElement('div', { className: pe.buttons }, c),
                                ),
                            );
                        },
                    ),
                    fe = 'WarningText_base_10',
                    be = 'WarningText_alertIcon_8f',
                    ve = (0, r.memo)(({ className: e, children: u }) =>
                        a().createElement(
                            'div',
                            { className: o()(fe, e) },
                            a().createElement('div', { className: be }),
                            u,
                        ),
                    );
                var we = t(3215),
                    ye = t(4598),
                    xe = t(9480),
                    ke = t(3946);
                const Te = (0, we.q)()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {},
                                    e.primitives(['isPriceSelected', 'isPriceVisible', 'warning']),
                                    { tankmen: e.array('tankmen', []), targetVehicle: e.object('targetVehicle') },
                                ),
                                t = (0, ke.Om)(() => xe.UI(u.tankmen.get(), ye.yR), { equals: ye.jv }),
                                n = (0, ke.Om)(() => xe.u4(u.tankmen.get(), (e, u) => (u.isSelected ? e + 1 : e), 0), {
                                    equals: ye.jv,
                                });
                            return Object.assign({}, u, { computes: { tankmen: t, selectedCount: n } });
                        },
                        () => (0, ye.ZT)(),
                    ),
                    Le = Te[0],
                    Se = Te[1];
                var Ne = t(7405),
                    Re = t(280);
                const Oe = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    Pe = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Me = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ie = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    He = (0, r.memo)(({ text: e, binding: u, classMix: t }) => {
                        const n = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            i = (0, r.useMemo)(() => u || {}, [u]);
                        let o = Pe.exec(e),
                            s = e,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                r = Me.exec(t),
                                c = Ie.exec(t),
                                _ = o[1];
                            if (r && c) {
                                const e = r[0],
                                    o = e + l++ + e;
                                (s = s.replace(t, `%(${o})`)),
                                    (i[o] = Oe[e]
                                        ? a().createElement(
                                              'span',
                                              { className: Oe[e] },
                                              a().createElement(Re.z, { text: _, binding: u }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: n(e) },
                                              a().createElement(Re.z, { text: _, binding: u }),
                                          ));
                            }
                            o = Pe.exec(e);
                        }
                        return a().createElement(Re.z, { text: s, classMix: t, binding: i });
                    }),
                    We = (0, we.q)()(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['text']), {
                                cost: e.object('cost'),
                                tooltip: e.object('tooltip'),
                            }),
                        ye.ZT,
                    ),
                    je = We[0],
                    $e = We[1],
                    Ge = {
                        base: 'SinglePriceApp_base_55',
                        text: 'SinglePriceApp_text_d5',
                        currency: 'SinglePriceApp_currency_9c',
                        currency__big: 'SinglePriceApp_currency__big_a5',
                    };
                function Ue() {
                    return (
                        (Ue = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ue.apply(null, arguments)
                    );
                }
                const Ve = (0, Ee.Pi)(function ({ tooltipRootId: e }) {
                        const u = $e().model,
                            t = (0, Q.l)(u.tooltip.get().type, void 0),
                            n = u.cost.get(),
                            r = o()(Ge.currency, Ge[`currency__${n.size}`]);
                        return a().createElement(
                            'div',
                            { className: Ge.base },
                            a().createElement(
                                'div',
                                { className: Ge.text },
                                a().createElement(He, { text: u.text.get() }),
                            ),
                            a().createElement(
                                K.u,
                                Ue({}, t, { targetId: e }),
                                a().createElement('div', { className: r }, a().createElement(Ne.F, n)),
                            ),
                        );
                    }),
                    Ze = a().memo(function ({ rootId: e = R.views.dialogs.widgets.SinglePrice('resId') }) {
                        return a().createElement(
                            je,
                            { options: { rootId: e } },
                            a().createElement(Ve, { tooltipRootId: e }),
                        );
                    }),
                    ze = 'Footer_base_72',
                    qe = (0, Ee.Pi)(function () {
                        return Se().model.isPriceVisible.get()
                            ? a().createElement(Ze, null)
                            : a().createElement('div', { className: ze });
                    });
                var Xe = t(3618),
                    Ye = t(883);
                const Ke = 'RetrainPriceList_base_d9',
                    Je = 'RetrainPriceList_tankmenCount_8f',
                    Qe = (0, Ee.Pi)(function ({ className: e }) {
                        const u = Se().model,
                            t = u.isPriceSelected.get() ? u.computes.selectedCount() : u.tankmen.get().length;
                        return a().createElement(
                            'div',
                            { className: o()(Ke, e) },
                            a().createElement(Ye.u, null),
                            a().createElement(Xe.w, {
                                text: R.strings.dialogs.retrain.massive.tankmenCount(),
                                binding: { count: t },
                                classMix: Je,
                            }),
                        );
                    });
                var eu = t(771);
                const uu = 'Divider_base_0a',
                    tu = 'Divider_line_c9',
                    nu = a().memo(function ({ className: e }) {
                        return a().createElement(
                            'div',
                            { className: o()(uu, e) },
                            a().createElement('div', { className: tu }),
                        );
                    }),
                    ru = {
                        base: 'TankmanIcon_base_f9',
                        base__big: 'TankmanIcon_base__big_98',
                        base__small: 'TankmanIcon_base__small_b2',
                        base__barracks: 'TankmanIcon_base__barracks_62',
                        base__special: 'TankmanIcon_base__special_3f',
                        base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                    };
                let au;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(au || (au = {}));
                const iu = (0, r.memo)(function ({ name: e, size: u = au.c100x60, classMix: t, isSkin: n = !1 }) {
                    let r = R.images.gui.maps.icons.tankmen.icons.$dyn(u);
                    n && (r = r.$dyn('crewSkins'));
                    const i = r.$dyn((0, Be.BN)(e));
                    return (
                        i ||
                            console.error(
                                `Can't find ${(0, Be.BN)(e)} in R.images.gui.maps.icons.tankmen.icons.${u}${n ? '.crewSkins' : ''}`,
                            ),
                        a().createElement('div', {
                            style: { backgroundImage: `url(${i})` },
                            className: o()(ru.base, ru[`base__${u}`], t),
                        })
                    );
                });
                var ou = t(7078);
                var su = t(8018);
                const lu = {
                        base: 'SkillEfficiency_base_16',
                        bg: 'SkillEfficiency_bg_59',
                        base__untrained: 'SkillEfficiency_base__untrained_42',
                        base__low: 'SkillEfficiency_base__low_11',
                        base__normal: 'SkillEfficiency_base__normal_2a',
                        arrow: 'SkillEfficiency_arrow_11',
                        base__selected: 'SkillEfficiency_base__selected_8a',
                        glow: 'SkillEfficiency_glow_7b',
                        untrained: 'SkillEfficiency_untrained_94',
                        efficiency: 'SkillEfficiency_efficiency_14',
                    },
                    cu = a().memo(function ({ skillEfficiency: e, isSelected: u, tankmanInvId: t, className: n }) {
                        const r = (0, su.Y4)(e),
                            i = r === su.H$.Untrained;
                        return a().createElement(
                            ou.t,
                            {
                                args: {
                                    tooltipId: i ? 'crewSkillUntrained' : 'skillsEfficiency',
                                    tankmanInvId: t,
                                    skillEfficiency: e,
                                },
                            },
                            a().createElement(
                                'div',
                                { className: o()(lu.base, lu[`base__${r}`], u && lu.base__selected, n) },
                                a().createElement('div', { className: lu.bg }),
                                a().createElement('div', { className: lu.arrow }),
                                u && a().createElement('div', { className: lu.glow }),
                                i
                                    ? a().createElement('div', { className: lu.untrained })
                                    : a().createElement(
                                          'div',
                                          { className: o()(lu.efficiency) },
                                          (0, Be.dL)(b.Z5.getNumberFormat(100 * e, b.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    }),
                    _u = 'TankmenList_base_4c',
                    Eu = 'TankmenList_tankmanList_20',
                    du = 'TankmenList_tankman_5a',
                    Au = 'TankmenList_divider_5a',
                    Fu = 'TankmenList_infoRow_fa',
                    mu = 'TankmenList_infoBlock_d9',
                    Du = 'TankmenList_roleShadow_23',
                    Cu = 'TankmenList_efficiency_3c',
                    Bu = 'TankmenList_roleIcon_b4',
                    gu = 'TankmenList_discount_bb',
                    pu = 'TankmenList_discountTooltipBox_11',
                    hu = a().memo(function ({ tankmanList: e, className: u }) {
                        return a().createElement(
                            'div',
                            { className: o()(_u, u) },
                            a().createElement(
                                'div',
                                { className: o()(Eu) },
                                e.map(({ iconName: e, isInSkin: u }, t) =>
                                    a().createElement(iu, {
                                        key: `${t}_${e}`,
                                        name: e,
                                        size: au.c158x118,
                                        isSkin: u,
                                        classMix: du,
                                    }),
                                ),
                            ),
                            a().createElement(nu, { className: Au }),
                            a().createElement(
                                'div',
                                { className: Fu },
                                e.map(
                                    ({ invId: e, role: u, skillEfficiency: t, isSelected: n, fullSkillsCount: r }, i) =>
                                        a().createElement(
                                            'div',
                                            { className: mu, key: `${i}_${u}` },
                                            a().createElement('div', { className: Du }),
                                            a().createElement(cu, {
                                                tankmanInvId: e,
                                                skillEfficiency: t,
                                                isSelected: n,
                                                className: Cu,
                                            }),
                                            r <= eu.bY &&
                                                a().createElement(
                                                    'div',
                                                    { className: gu },
                                                    a().createElement(
                                                        Z.i,
                                                        {
                                                            header: R.strings.tooltips.retrain.tankmanDiscount.header(),
                                                            body:
                                                                r === eu.bY
                                                                    ? R.strings.tooltips.retrain.tankmanDiscount.half.body()
                                                                    : R.strings.tooltips.retrain.tankmanDiscount.full.body(),
                                                        },
                                                        a().createElement('div', { className: pu }),
                                                    ),
                                                ),
                                            a().createElement('div', {
                                                style: {
                                                    backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_30x30.$dyn(u)})`,
                                                },
                                                className: Bu,
                                            }),
                                        ),
                                ),
                            ),
                        );
                    });
                var fu = t(9053);
                const bu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    vu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const wu = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    yu = (e) =>
                        wu
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = vu.length - 1; t >= 0; t--)
                                      for (; e >= vu[t]; ) (u += bu[t]), (e -= vu[t]);
                                  return u;
                              })(e),
                    xu = (e, u) => e.split(',').includes(u),
                    ku = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_ac',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__extraSmall: 'TankName_type__extraSmall_80',
                        type__medium: 'TankName_type__medium_ff',
                        type__big: 'TankName_type__big_9a',
                        type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                        type__eliteMedium: 'TankName_type__eliteMedium_10',
                        type__eliteBig: 'TankName_type__eliteBig_ac',
                        name: 'TankName_name_56',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let Tu, Lu;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(Tu || (Tu = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(Lu || (Lu = {}));
                const Su = ({
                        isElite: e,
                        vehicleName: u,
                        vehicleShortName: t,
                        vehicleType: n,
                        vehicleLvl: r,
                        tags: i = '',
                        size: s = Tu.extraSmall,
                        type: l = Lu.colored,
                        className: c,
                        classNames: _,
                        isShortName: E = !1,
                    }) => {
                        const d = `${(0, Be.BN)(n)}${e ? '_elite' : ''}`,
                            A = R.images.gui.maps.icons.vehicleTypes.big.$dyn(d);
                        return a().createElement(
                            'div',
                            {
                                className: o()(
                                    ku.base,
                                    ku[`base__size${(0, Be.e)(s)}`],
                                    ku[`base__type${(0, Be.e)(l)}`],
                                    c,
                                ),
                            },
                            a().createElement('div', { className: o()(ku.level, null == _ ? void 0 : _.level) }, yu(r)),
                            a().createElement('div', {
                                className: o()(
                                    ku.type,
                                    e && ku[`type__elite${(0, Be.e)(s)}`],
                                    ku[`type__${s}`],
                                    null == _ ? void 0 : _.typeIcon,
                                ),
                                style: n ? { backgroundImage: `url(${A})` } : void 0,
                            }),
                            xu(i, 'premiumIGR') && a().createElement('div', { className: ku.premiumIGR }),
                            a().createElement(
                                'div',
                                { className: o()(ku.name, null == _ ? void 0 : _.name) },
                                E ? t : u,
                            ),
                        );
                    },
                    Nu = 'TitleContent_base_7f',
                    Ru = 'TitleContent_tankName_6b',
                    Ou = 'TitleContent_title_49';
                function Pu() {
                    return (
                        (Pu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Pu.apply(null, arguments)
                    );
                }
                const Mu = (0, Ee.Pi)(function () {
                        const e = Se().model;
                        return a().createElement(
                            'div',
                            { className: Nu },
                            a().createElement(Xe.w, {
                                text: R.strings.dialogs.retrain.title.massive(),
                                binding: {
                                    vehicleName: a().createElement(
                                        Su,
                                        Pu(
                                            { isShortName: !0, type: Lu.white, size: Tu.big, className: Ru },
                                            e.targetVehicle.get(),
                                        ),
                                    ),
                                },
                                justifyContent: fu.v2.Center,
                                classMix: Ou,
                            }),
                        );
                    }),
                    Iu = 'RetrainMassiveDialogApp_center_7c',
                    Hu = 'RetrainMassiveDialogApp_content_34',
                    Wu = 'RetrainMassiveDialogApp_warning_17',
                    ju = 'RetrainMassiveDialogApp_priceList_cb',
                    $u = ['onClose', 'buttons', 'isShown', 'displayFlags'];
                function Gu() {
                    return (
                        (Gu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Gu.apply(null, arguments)
                    );
                }
                const Uu = (0, Ee.Pi)(function (e) {
                    let u = e.onClose,
                        t = e.buttons,
                        n = e.isShown,
                        r = e.displayFlags,
                        i = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, $u);
                    const o = Se().model,
                        s = o.warning.get();
                    return a().createElement(
                        he,
                        Gu({ onClose: u, buttons: t, displayFlags: r, isShown: n }, i, {
                            icon: a().createElement(hu, { tankmanList: o.computes.tankmen() }),
                            title: a().createElement(Mu, null),
                            content: a().createElement(
                                'div',
                                { className: Hu },
                                s && a().createElement(ve, { className: Wu }, s),
                                a().createElement(Qe, { className: ju }),
                            ),
                            footer: a().createElement(qe, null),
                            classNames: { center: Iu },
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    g().render(
                        a().createElement(
                            Le,
                            null,
                            a().createElement(C, null, a().createElement(_e, { Template: Uu })),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
            883: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => ie });
                var n = t(6179),
                    r = t.n(n),
                    a = t(3215),
                    i = t(4598),
                    o = t(9480),
                    s = t(3946);
                const l = (0, a.q)()(
                        ({ observableModel: e }) => {
                            const u = { cardsList: e.array('cardsList', []) },
                                t = (0, s.Om)(
                                    () =>
                                        (0, o.UI)(u.cardsList.get(), (e) =>
                                            Object.assign({}, e, {
                                                price: Object.assign({}, e.price),
                                                cardTooltip: Object.assign({}, e.cardTooltip),
                                                priceTooltip: Object.assign({}, e.priceTooltip),
                                            }),
                                        ),
                                    { equals: i.jv },
                                );
                            return Object.assign({}, u, { computes: { cards: t } });
                        },
                        ({ externalModel: e }) => ({
                            onCardClick: e.createCallback((e) => ({ index: e }), 'onCardClick'),
                        }),
                    ),
                    c = l[0],
                    _ = l[1];
                var E = t(6483),
                    d = t.n(E),
                    A = t(5415),
                    F = t(3403),
                    m = t(3415);
                let D, C;
                !(function (e) {
                    (e.Default = 'default'), (e.Reset = 'reset'), (e.Retrain = 'retrain');
                })(D || (D = {})),
                    (function (e) {
                        (e.Default = ''), (e.Disabled = 'disabled'), (e.Selected = 'selected');
                    })(C || (C = {}));
                var B = t(3138),
                    g = t(2344),
                    p = t(7030),
                    h = t(7160),
                    f = t(8018);
                const b = 'CustomComponents_storage_c8',
                    v = 'CustomComponents_storageIcon_2c',
                    w = 'CustomComponents_storageCount_9b',
                    y = (0, n.memo)(({ kwargs: e, cardType: u }) => {
                        if (u === D.Reset) {
                            const u = null == e ? void 0 : e.storageCount;
                            return void 0 === u
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: b },
                                      r().createElement('div', { className: v }),
                                      r().createElement('div', { className: w }, u),
                                  );
                        }
                        return null;
                    });
                var x = t(3618),
                    k = t(9053);
                const T = {
                    base: 'Description_base_bf',
                    base__selected: 'Description_base__selected_01',
                    efficiencyAfterRetrain: 'Description_efficiencyAfterRetrain_2f',
                    efficiencyAfterRetrain__highlighted: 'Description_efficiencyAfterRetrain__highlighted_71',
                    efficiencyAfterRetrain__selected: 'Description_efficiencyAfterRetrain__selected_41',
                    efficiencyAfterRetrainValue: 'Description_efficiencyAfterRetrainValue_f4',
                    efficiencyAfterRetrainGlow: 'Description_efficiencyAfterRetrainGlow_cb',
                    efficiencyAfterRetrainGlow__increase: 'Description_efficiencyAfterRetrainGlow__increase_84',
                    efficiencyAfterRetrainGlow__decrease: 'Description_efficiencyAfterRetrainGlow__decrease_24',
                    efficiencyAfterRetrainValuePercents: 'Description_efficiencyAfterRetrainValuePercents_29',
                    resetPerksLayout: 'Description_resetPerksLayout_44',
                    resetPercentsText: 'Description_resetPercentsText_e1',
                    xpAmount: 'Description_xpAmount_28',
                    xpIcon: 'Description_xpIcon_0e',
                    resetPerksDescription: 'Description_resetPerksDescription_5f',
                    resetPerksDescription__withXpLoose: 'Description_resetPerksDescription__withXpLoose_86',
                };
                var L = t(2372),
                    S = t(280),
                    N = t(3649),
                    O = t(771);
                const P = r().memo(({ description: e, cardState: u, kwargs: t, className: n }) => {
                    const a = Number(t.value) < O.I;
                    return r().createElement(
                        'div',
                        { className: d()(T.base, T[`base__${u}`], n) },
                        a &&
                            r().createElement(x.w, {
                                text: R.strings.dialogs.perksReset.priceCard.xpLoose(),
                                classMix: T.resetPerksLayout,
                                binding: {
                                    percentAmount: r().createElement(
                                        'div',
                                        { className: d()(T.resetPercentsText) },
                                        (0, N.dL)(((i = t.value), -(O.I - Number(i)))),
                                    ),
                                    xpAmount: r().createElement(
                                        'div',
                                        { className: d()(T.xpAmount) },
                                        r().createElement(L.A, { value: Number(t.xpLossAmount) }),
                                        r().createElement('div', { className: T.xpIcon }),
                                    ),
                                },
                            }),
                        r().createElement(S.z, {
                            text: e,
                            classMix: d()(T.resetPerksDescription, a && T.resetPerksDescription__withXpLoose),
                        }),
                    );
                    var i;
                });
                let M;
                !(function (e) {
                    (e.None = 'none'), (e.Increase = 'increase'), (e.Decrease = 'decrease');
                })(M || (M = {}));
                const I = (e, u) => (e && u && e !== u ? (e > u ? M.Decrease : M.Increase) : M.None),
                    H = r().memo(({ description: e, cardState: u, kwargs: t, className: n }) => {
                        const a = (0, g.D9)(t.value),
                            i = I(a, t.value),
                            o = (0, p.useSpring)({
                                from: { opacity: 0 },
                                to: [
                                    { opacity: 1, immediate: !0, delay: 450 },
                                    { opacity: 1, config: { duration: 250 } },
                                    { opacity: 0, config: { duration: 300 } },
                                ],
                            });
                        return r().createElement(
                            'div',
                            { className: d()(T.base, T[`base__${u}`], n) },
                            r().createElement(x.w, {
                                text: e,
                                justifyContent: k.v2.Center,
                                binding: {
                                    value: r().createElement(
                                        'div',
                                        {
                                            className: d()(
                                                T.efficiencyAfterRetrain,
                                                t.isHighlight && T.efficiencyAfterRetrain__highlighted,
                                                u === C.Selected && T.efficiencyAfterRetrain__selected,
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: T.efficiencyAfterRetrainValue },
                                            i !== M.None &&
                                                r().createElement(p.animated.div, {
                                                    style: o,
                                                    className: d()(
                                                        T.efficiencyAfterRetrainGlow,
                                                        T[`efficiencyAfterRetrainGlow__${i}`],
                                                    ),
                                                }),
                                            r().createElement(
                                                'div',
                                                { className: T.efficiencyAfterRetrainValuePercents },
                                                (0, N.dL)(Number(t.value)),
                                            ),
                                        ),
                                    ),
                                },
                            }),
                        );
                    }),
                    W = { [D.Reset.toString()]: P, [D.Retrain.toString()]: H },
                    j = (e) =>
                        W[e.cardType]
                            ? r().createElement(W[e.cardType], e)
                            : r().createElement(
                                  'div',
                                  { className: d()(T.base, e.className) },
                                  r().createElement(x.w, {
                                      text: e.description,
                                      justifyContent: k.v2.Center,
                                      binding: e.kwargs,
                                  }),
                              );
                var $ = t(7405),
                    G = t(2056),
                    U = t(5298);
                const V = 'Price_base_3c',
                    Z = 'Price_base__withPrice_ef',
                    z = 'Price_base__withTooltip_a2',
                    q = 'Price_resetCardPriceIcon_89',
                    X = 'Price_recertificationPrice_b6';
                function Y() {
                    return (
                        (Y = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Y.apply(null, arguments)
                    );
                }
                const K = ({
                        cost: e,
                        tooltip: u,
                        index: t,
                        tooltipRootId: n,
                        className: a,
                        isRecertification: i = !1,
                    }) => {
                        if (i)
                            return r().createElement(
                                'div',
                                { className: X },
                                r().createElement('div', null, 1),
                                r().createElement('div', { className: q }),
                            );
                        if (e.value === e.discountValue && 0 === e.value && !e.isDiscount)
                            return r().createElement(
                                'div',
                                { className: d()(V, a) },
                                R.strings.dialogs.priceCard.price.free(),
                            );
                        const o = (0, U.l)(u.type, { index: t });
                        return r().createElement(
                            'div',
                            { className: d()(V, Z, o.isEnabled && z, a) },
                            r().createElement(
                                G.u,
                                Y({}, o, { targetId: n }),
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement($.F, Y({}, e, { isInteractiveDiscount: !0 })),
                                ),
                            ),
                        );
                    },
                    J = {
                        base: 'PriceCard_base_1c',
                        base__small: 'PriceCard_base__small_b0',
                        base__selected: 'PriceCard_base__selected_e3',
                        base__hoverEnabled: 'PriceCard_base__hoverEnabled_18',
                        hoverRays: 'PriceCard_hoverRays_75',
                        base__disabled: 'PriceCard_base__disabled_9c',
                        tooltip: 'PriceCard_tooltip_69',
                        tooltipBox: 'PriceCard_tooltipBox_c9',
                        disabledPattern: 'PriceCard_disabledPattern_a7',
                        discountPattern: 'PriceCard_discountPattern_d5',
                        title: 'PriceCard_title_98',
                        icon: 'PriceCard_icon_43',
                        description: 'PriceCard_description_97',
                        description__reset: 'PriceCard_description__reset_aa',
                        price: 'PriceCard_price_13',
                        price__specialDiscount: 'PriceCard_price__specialDiscount_12',
                        bottomGlow: 'PriceCard_bottomGlow_a3',
                    };
                let Q;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(Q || (Q = {}));
                const ee = ({ header: e, body: u, contentId: t }, n, r) =>
                        t
                            ? { contentId: t, targetId: n, args: { index: r } }
                            : u || e
                              ? { header: e || void 0, body: u || void 0 }
                              : void 0,
                    ue = ({
                        onClick: e,
                        tooltipRootId: u,
                        priceTooltip: t,
                        cardTooltip: a,
                        index: i,
                        icon: o,
                        size: s = Q.Big,
                        title: l,
                        description: c,
                        cardType: _,
                        kwargs: E,
                        price: A,
                        cardState: F,
                        className: b,
                    }) => {
                        const v = F === C.Default,
                            w = (0, n.useMemo)(() => (E ? JSON.parse(E) : {}), [E]),
                            x = (0, g.D9)(w.value),
                            k = I(x, w.value),
                            T = _ === D.Reset && w.withSpecialDiscount,
                            L = _ === D.Retrain && k !== M.None,
                            S = F === C.Default && !T,
                            N = (0, p.useSpring)(() => {
                                const e = k === M.Increase ? -1 : 1;
                                return {
                                    from: { opacity: 1, y: 0 },
                                    to: [
                                        { opacity: 0, y: 30 * e },
                                        { y: -30 * e, immediate: !0 },
                                        { opacity: 1, y: 0 },
                                    ],
                                    config: { duration: 200, easing: h.qb },
                                };
                            }, [k])[0];
                        (0, n.useEffect)(() => {
                            k !== M.None &&
                                B.O.sound.play.sound(k === M.Increase ? f.gO.CREW_RETRAIN_UP : f.gO.CREW_RETRAIN_DOWN);
                        }, [k]);
                        const R = d()(J.base, J[`base__${s}`], J[`base__${F}`], S && J.base__hoverEnabled, b);
                        return r().createElement(
                            p.animated.div,
                            {
                                style: L ? N : void 0,
                                className: R,
                                onClick: () => {
                                    v && (B.O.sound.play.sound('play'), e(i));
                                },
                                onMouseEnter: () => v && B.O.sound.play.sound('highlight'),
                            },
                            F === C.Disabled && r().createElement('div', { className: J.disabledPattern }),
                            T && r().createElement('div', { className: J.discountPattern }),
                            r().createElement('div', { className: J.hoverRays }),
                            r().createElement('div', { className: J.title }, l),
                            r().createElement('div', { className: J.icon, style: { backgroundImage: `url(${o})` } }),
                            r().createElement(j, {
                                description: c,
                                cardType: _,
                                cardState: F,
                                kwargs: w,
                                className: d()(J.description, J[`description__${_}`]),
                            }),
                            r().createElement(
                                m.l,
                                { tooltipArgs: ee(a, u, i), className: J.tooltip },
                                r().createElement('div', { className: J.tooltipBox }),
                            ),
                            r().createElement(y, { cardType: _, kwargs: w }),
                            r().createElement(K, {
                                cost: A,
                                tooltip: t,
                                index: i,
                                tooltipRootId: u,
                                className: d()(J.price, T && J.price__specialDiscount),
                                isRecertification: null == w ? void 0 : w.isRecertificationCard,
                            }),
                            T && r().createElement('div', { className: J.bottomGlow }),
                        );
                    },
                    te = 'PriceListApp_base_7d',
                    ne = 'PriceListApp_card_6a';
                function re() {
                    return (
                        (re = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        re.apply(null, arguments)
                    );
                }
                const ae = (0, F.Pi)(function ({ rootId: e, className: u }) {
                        const t = _(),
                            n = t.model,
                            a = t.controls,
                            i = (0, A.GS)().mediaSize;
                        return r().createElement(
                            'div',
                            { className: d()(te, u) },
                            (0, o.UI)(n.computes.cards(), (u, t) =>
                                r().createElement(
                                    ue,
                                    re({}, u, {
                                        key: `${t}-${u.cardState}`,
                                        onClick: a.onCardClick,
                                        index: t,
                                        tooltipRootId: e,
                                        size: i > A.cJ.Small ? Q.Big : Q.Small,
                                        className: ne,
                                    }),
                                ),
                            ),
                        );
                    }),
                    ie = r().memo(function ({
                        rootId: e = R.views.lobby.crew.widgets.PriceList('resId'),
                        className: u,
                    }) {
                        const t = (0, n.useMemo)(() => ({ rootId: e }), [e]);
                        return r().createElement(c, { options: t }, r().createElement(ae, { rootId: e, className: u }));
                    });
            },
            776: (e, u, t) => {
                'use strict';
                let n;
                t.d(u, { f: () => n }),
                    (function (e) {
                        (e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent');
                    })(n || (n = {}));
            },
            771: (e, u, t) => {
                'use strict';
                t.d(u, { I: () => a, bY: () => i, sU: () => n, yb: () => r });
                const n = -1,
                    r = 1,
                    a = 100,
                    i = 1;
                let o;
                !(function (e) {
                    (e.BlackReal = 'blackReal'),
                        (e.WhiteReal = 'whiteReal'),
                        (e.White = 'white'),
                        (e.WhiteOrange = 'whiteOrange'),
                        (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Par = 'par'),
                        (e.ParSecondary = 'parSecondary'),
                        (e.ParTertiary = 'parTertiary'),
                        (e.Red = 'red'),
                        (e.RedDark = 'redDark'),
                        (e.Yellow = 'yellow'),
                        (e.Orange = 'orange'),
                        (e.Cream = 'cream'),
                        (e.Brown = 'brown'),
                        (e.GreenBright = 'greenBright'),
                        (e.Green = 'green'),
                        (e.GreenDark = 'greenDark'),
                        (e.BlueBooster = 'blueBooster'),
                        (e.BlueTeamkiller = 'blueTeamkiller'),
                        (e.Cred = 'cred'),
                        (e.Gold = 'gold'),
                        (e.Bond = 'bond'),
                        (e.Prom = 'prom');
                })(o || (o = {}));
            },
            8460: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
                    'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                    'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                    'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                    'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
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
                    value__eliteXP: 'Currency_value__eliteXP_62',
                    value__notEnough: 'Currency_value__notEnough_56',
                    stock: 'Currency_stock_87',
                    stock__indent: 'Currency_stock__indent_a1',
                    stock__interactive: 'Currency_stock__interactive_93',
                    stockBackground: 'Currency_stockBackground_82',
                };
            },
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            6143: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
                t.d(u, { Z: () => n });
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
            7629: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                    word: 'renderers_word_f3',
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
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], a = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
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
        (__webpack_require__.j = 2400),
        (() => {
            var e = { 2400: 0, 5897: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, i, o] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        (r = a[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(3345));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
