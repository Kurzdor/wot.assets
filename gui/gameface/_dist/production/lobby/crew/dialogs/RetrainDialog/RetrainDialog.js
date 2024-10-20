(() => {
    var __webpack_modules__ = {
            7405: (u, e, t) => {
                'use strict';
                t.d(e, { F: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    i = t.n(a),
                    o = t(329),
                    s = t(2372),
                    l = t(8460);
                const c = ({
                    isDiscount: u,
                    isInteractiveDiscount: e,
                    size: t,
                    type: n,
                    isEnough: a,
                    value: c,
                    discountValue: E,
                    showPlus: _,
                    stockBackgroundName: d = o.we.Red,
                }) => {
                    const A = r()(l.Z.value, l.Z[`value__${n}`], !a && l.Z.value__notEnough),
                        F = r()(l.Z.icon, l.Z[`icon__${n}-${t}`]),
                        D = r()(l.Z.stock, E && l.Z.stock__indent, e && l.Z.stock__interactive),
                        m = _ && c > 0 && '+',
                        C = r()(l.Z.base, l.Z[`base__${t}`]);
                    return i().createElement(
                        'span',
                        { className: C },
                        i().createElement(
                            'span',
                            { className: A },
                            m,
                            i().createElement(s.A, { value: c, format: n === o.V2.gold ? 'gold' : 'integral' }),
                        ),
                        i().createElement('span', { className: F }),
                        u &&
                            i().createElement(
                                'span',
                                { className: D },
                                i().createElement('span', {
                                    className: l.Z.stockBackground,
                                    style: { backgroundImage: `url(R.images.gui.maps.icons.library.${d})` },
                                }),
                                Boolean(E) && E,
                            ),
                    );
                };
                c.defaultProps = { isEnough: !0 };
                const E = i().memo(c);
            },
            329: (u, e, t) => {
                'use strict';
                let n, r, a;
                t.d(e, { V2: () => r, we: () => a }),
                    (function (u) {
                        (u.small = 'small'), (u.big = 'big'), (u.large = 'large'), (u.extraLarge = 'extraLarge');
                    })(n || (n = {})),
                    (function (u) {
                        (u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.equipCoin = 'equipCoin');
                    })(r || (r = {})),
                    (function (u) {
                        (u.Red = 'RedActionBG'), (u.Blue = 'BlueActionBG');
                    })(a || (a = {}));
            },
            2372: (u, e, t) => {
                'use strict';
                t.d(e, { A: () => i });
                var n = t(6179),
                    r = t.n(n),
                    a = t(4179);
                const i = ({ format: u, value: e }) => {
                    const t = ((u, e = 'integral') => {
                        let t;
                        t = 'gold' === e ? a.B3.GOLD : a.B3.INTEGRAL;
                        return void 0 === u ? '' : a.Z5.getNumberFormat(u, t);
                    })(e, u);
                    return t ? r().createElement('span', null, t) : null;
                };
            },
            3495: (u, e, t) => {
                'use strict';
                t.d(e, { Y: () => E });
                var n = t(3138),
                    r = t(6179),
                    a = t(1043),
                    i = t(5262);
                const o = n.O.client.getSize('rem'),
                    s = o.width,
                    l = o.height,
                    c = Object.assign({ width: s, height: l }, (0, i.T)(s, l, a.j)),
                    E = (0, r.createContext)(c);
            },
            1039: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => c });
                var n = t(6179),
                    r = t.n(n),
                    a = t(6536),
                    i = t(3495),
                    o = t(1043),
                    s = t(5262),
                    l = t(3138);
                const c = (0, n.memo)(({ children: u }) => {
                    const e = (0, n.useContext)(i.Y),
                        t = (0, n.useState)(e),
                        c = t[0],
                        E = t[1],
                        _ = (0, n.useCallback)((u, e) => {
                            const t = l.O.view.pxToRem(u),
                                n = l.O.view.pxToRem(e);
                            E(Object.assign({ width: t, height: n }, (0, s.T)(t, n, o.j)));
                        }, []);
                    (0, a.Z)(() => {
                        engine.on('clientResized', _);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', _), [_]);
                    const d = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return r().createElement(i.Y.Provider, { value: d }, u);
                });
            },
            6010: (u, e, t) => {
                'use strict';
                var n = t(6179),
                    r = t(7382),
                    a = t(3495);
                const i = ['children'];
                const o = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, i);
                    const o = (0, n.useContext)(a.Y),
                        s = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        E = o.small,
                        _ = o.extraSmall,
                        d = o.extraLargeWidth,
                        A = o.largeWidth,
                        F = o.mediumWidth,
                        D = o.smallWidth,
                        m = o.extraSmallWidth,
                        C = o.extraLargeHeight,
                        B = o.largeHeight,
                        g = o.mediumHeight,
                        h = o.smallHeight,
                        b = o.extraSmallHeight,
                        p = { extraLarge: C, large: B, medium: g, small: h, extraSmall: b };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return e;
                        if (t.large && l) return e;
                        if (t.medium && c) return e;
                        if (t.small && E) return e;
                        if (t.extraSmall && _) return e;
                    } else {
                        if (t.extraLargeWidth && d) return (0, r.H)(e, t, p);
                        if (t.largeWidth && A) return (0, r.H)(e, t, p);
                        if (t.mediumWidth && F) return (0, r.H)(e, t, p);
                        if (t.smallWidth && D) return (0, r.H)(e, t, p);
                        if (t.extraSmallWidth && m) return (0, r.H)(e, t, p);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return e;
                            if (t.largeHeight && B) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && h) return e;
                            if (t.extraSmallHeight && b) return e;
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
            7382: (u, e, t) => {
                'use strict';
                t.d(e, { H: () => n });
                const n = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
            },
            7739: (u, e, t) => {
                'use strict';
                t.d(e, { YN: () => r.Y, ZN: () => n.Z });
                t(6010);
                var n = t(1039),
                    r = t(3495);
            },
            1043: (u, e, t) => {
                'use strict';
                t.d(e, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (u, e, t) => {
                'use strict';
                var n;
                function r(u, e, t) {
                    const n = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.width:
                                    return e.extraLarge.weight;
                                case u >= e.large.width && u < e.extraLarge.width:
                                    return e.large.weight;
                                case u >= e.medium.width && u < e.large.width:
                                    return e.medium.weight;
                                case u >= e.small.width && u < e.medium.width:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(u, t),
                        r = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.height:
                                    return e.extraLarge.weight;
                                case u >= e.large.height && u < e.extraLarge.height:
                                    return e.large.weight;
                                case u >= e.medium.height && u < e.large.height:
                                    return e.medium.weight;
                                case u >= e.small.height && u < e.medium.height:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(e, t),
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
                t.d(e, { T: () => r, u: () => n }),
                    (function (u) {
                        (u.extraLarge = 'extraLarge'),
                            (u.large = 'large'),
                            (u.medium = 'medium'),
                            (u.small = 'small'),
                            (u.extraSmall = 'extraSmall'),
                            (u.extraLargeWidth = 'extraLargeWidth'),
                            (u.largeWidth = 'largeWidth'),
                            (u.mediumWidth = 'mediumWidth'),
                            (u.smallWidth = 'smallWidth'),
                            (u.extraSmallWidth = 'extraSmallWidth'),
                            (u.extraLargeHeight = 'extraLargeHeight'),
                            (u.largeHeight = 'largeHeight'),
                            (u.mediumHeight = 'mediumHeight'),
                            (u.smallHeight = 'smallHeight'),
                            (u.extraSmallHeight = 'extraSmallHeight');
                    })(n || (n = {}));
            },
            7078: (u, e, t) => {
                'use strict';
                t.d(e, { t: () => s });
                var n = t(6179),
                    r = t.n(n),
                    a = t(2056);
                const i = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const s = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, i);
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
                        e,
                    );
                };
            },
            3415: (u, e, t) => {
                'use strict';
                t.d(e, { l: () => l });
                var n = t(6179),
                    r = t.n(n),
                    a = t(7078),
                    i = t(6373),
                    o = t(2056);
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const n = r().createElement('div', { className: t }, u);
                    if (e.header || e.body) return r().createElement(i.i, e, n);
                    const l = e.contentId,
                        c = e.args,
                        E = null == c ? void 0 : c.contentId;
                    return l || E
                        ? r().createElement(o.u, s({}, e, { contentId: l || E }), n)
                        : r().createElement(a.t, e, n);
                };
            },
            6373: (u, e, t) => {
                'use strict';
                t.d(e, { i: () => l });
                var n = t(2056),
                    r = t(6179),
                    a = t.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (u) => {
                        let e = u.children,
                            t = u.body,
                            l = u.header,
                            c = u.note,
                            E = u.alert,
                            _ = u.args,
                            d = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, i);
                        const A = (0, r.useMemo)(() => {
                            const u = Object.assign({}, _, { body: t, header: l, note: c, alert: E });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [E, t, l, c, _]);
                        return a().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((F = null == _ ? void 0 : _.hasHtmlContent),
                                        F ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: A,
                                },
                                d,
                            ),
                            e,
                        );
                        var F;
                    };
            },
            2056: (u, e, t) => {
                'use strict';
                t.d(e, { u: () => l });
                var n = t(7902),
                    r = t(4179),
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
                function o(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const s = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    l = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            r = u.args,
                            l = u.onMouseEnter,
                            c = u.onMouseLeave,
                            E = u.onMouseDown,
                            _ = u.onClick,
                            d = u.ignoreShowDelay,
                            A = void 0 !== d && d,
                            F = u.ignoreMouseClick,
                            D = void 0 !== F && F,
                            m = u.decoratorId,
                            C = void 0 === m ? 0 : m,
                            B = u.isEnabled,
                            g = void 0 === B || B,
                            h = u.targetId,
                            b = void 0 === h ? 0 : h,
                            p = u.onShow,
                            v = u.onHide,
                            f = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, i);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, a.useMemo)(() => b || (0, n.F)().resId, [b]),
                            y = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(t, C, { isMouseEvent: !0, on: !0, arguments: o(r) }, k),
                                    p && p(),
                                    (w.current.isVisible = !0));
                            }, [t, C, r, k, p]),
                            x = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const u = w.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (w.current.timeoutId = 0)),
                                        s(t, C, { on: !1 }, k),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, C, k, v]),
                            T = (0, a.useCallback)((u) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(w.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const u = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', T, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && x();
                            }, [g, x]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        window.removeEventListener('mouseleave', x), x();
                                    }
                                ),
                                [x],
                            );
                        return g
                            ? (0, a.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(y, A ? 100 : 400)),
                                                      l && l(u),
                                                      L && L(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              x(), null == c || c(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === D && x(), null == _ || _(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === D && x(), null == E || E(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : e;
                        var L;
                    };
            },
            926: (u) => {
                u.exports = {
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
            8246: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => o });
                var n = t(3138);
                function r(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return a(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var n = 0;
                        return function () {
                            return n >= u.length ? { done: !0 } : { done: !1, value: u[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function a(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = new Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const i = (u) => (0 === u ? window : window.subViews.get(u));
                function o({ initializer: u = !0, rootId: e = 0, getRoot: t = i, context: a = 'model' } = {}) {
                    const o = new Map();
                    function s(u, e = 0) {
                        viewEnv.removeDataChangedCallback(u, e)
                            ? o.delete(u)
                            : console.error("Can't remove callback by id:", u);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (u, e, t) => {
                            t.forEach((e) => {
                                const t = o.get(e);
                                void 0 !== t && t(u);
                            });
                        });
                    });
                    const l = (u) => {
                        const n = t(e),
                            r = a.split('.').reduce((u, e) => u[e], n);
                        return 'string' != typeof u || 0 === u.length
                            ? r
                            : u.split('.').reduce((u, e) => {
                                  const t = u[e];
                                  return 'function' == typeof t ? t.bind(u) : t;
                              }, r);
                    };
                    return {
                        subscribe: (t, r) => {
                            const i = 'string' == typeof r ? `${a}.${r}` : a,
                                s = n.O.view.addModelObserver(i, e, !0);
                            return o.set(s, t), u && t(l(r)), s;
                        },
                        readByPath: l,
                        createCallback: (u, e) => {
                            const t = l(e);
                            return (...e) => {
                                t(u(...e));
                            };
                        },
                        createCallbackNoArgs: (u) => {
                            const e = l(u);
                            return () => {
                                e();
                            };
                        },
                        dispose: function () {
                            for (var u, t = r(o.keys()); !(u = t()).done; ) {
                                s(u.value, e);
                            }
                        },
                        unsubscribe: s,
                    };
                }
            },
            3215: (u, e, t) => {
                'use strict';
                t.d(e, { q: () => s });
                var n = t(4598),
                    r = t(9174),
                    a = t(6179),
                    i = t.n(a),
                    o = t(8246);
                const s = () => (u, e) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: E }) {
                            const _ = (0, a.useRef)([]),
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
                                        E = (u) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(u)) : c.readByPath(u),
                                        d = (u) => _.current.push(u),
                                        A = u({
                                            mode: t,
                                            readByPath: E,
                                            externalModel: c,
                                            observableModel: {
                                                array: (u, e) => {
                                                    const a = null != e ? e : E(u),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((u) => i.set(u)),
                                                                u,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (u, e) => {
                                                    const a = null != e ? e : E(u),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((u) => i.set(u)),
                                                                u,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (u, e) => {
                                                    const n = E(e);
                                                    if (Array.isArray(u)) {
                                                        const a = u.reduce(
                                                            (u, e) => ((u[e] = r.LO.box(n[e], {})), u),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        u.forEach((u) => {
                                                                            a[u].set(e[u]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = u,
                                                            i = Object.entries(a),
                                                            o = i.reduce(
                                                                (u, [e, t]) => ((u[t] = r.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((u) => {
                                                                        i.forEach(([e, t]) => {
                                                                            o[t].set(u[e]);
                                                                        });
                                                                    }),
                                                                    e,
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
                                        controls: 'mocks' === t && i ? i.controls(F) : e(F),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                A = (0, a.useRef)(!1),
                                F = (0, a.useState)(s),
                                D = F[0],
                                m = F[1],
                                C = (0, a.useState)(() => d(s, l, E)),
                                B = C[0],
                                g = C[1];
                            return (
                                (0, a.useEffect)(() => {
                                    A.current ? g(d(D, l, E)) : (A.current = !0);
                                }, [E, D, l]),
                                (0, a.useEffect)(() => {
                                    m(s);
                                }, [s]),
                                (0, a.useEffect)(
                                    () => () => {
                                        B.externalModel.dispose(), _.current.forEach((u) => u());
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
            527: (u, e, t) => {
                'use strict';
                t.r(e), t.d(e, { mouse: () => o, onResize: () => a });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    i = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const o = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, r.R)(!0);
                    }
                    function n() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${e}`,
                                        o = i[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, s),
                                                (u.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => i,
                    });
                var n = t(527);
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            2472: (u, e, t) => {
                'use strict';
                function n(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => n });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => r });
                var n = t(5959);
                const r = { view: t(7641), client: n };
            },
            3722: (u, e, t) => {
                'use strict';
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function r(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => r });
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
            7641: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => f,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => p,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => D,
                        getSize: () => _,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => b,
                        isFocused: () => g,
                        pxToRem: () => m,
                        remToPx: () => C,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => k,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    i = t(8566);
                function o(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function c(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function E(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function A(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: C(e.x), y: C(e.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function m(u) {
                    return viewEnv.pxToRem(u);
                }
                function C(u) {
                    return viewEnv.remToPx(u);
                }
                function B(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function p() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(r.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === r.W[e]), u),
                        {},
                    ),
                    w = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    k = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : a.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    i = 32,
                    o = 64,
                    s = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(u);
                                    for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    l = {
                        close(u) {
                            s('popover' === u ? r : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(u) {
                            s(a, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            4598: (u, e, t) => {
                'use strict';
                function n() {}
                t.d(e, { ZT: () => n, jv: () => a, yR: () => r });
                function r(u) {
                    return u;
                }
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (u, e, t) => {
                'use strict';
                t.d(e, { F: () => n });
                const n = (u = 1) => {
                    const e = new Error().stack;
                    let t,
                        n = R.invalid('resId');
                    return (
                        e &&
                            ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id)),
                        { caller: t, stack: e, resId: n }
                    );
                };
            },
            6536: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var n = t(6179);
                const r = (u) => {
                    const e = (0, n.useRef)(!1);
                    e.current || (u(), (e.current = !0));
                };
            },
            5415: (u, e, t) => {
                'use strict';
                t.d(e, { Aq: () => s, GS: () => l, cJ: () => i, fd: () => o });
                var n = t(6179),
                    r = t(7739),
                    a = t(1043);
                let i, o, s;
                !(function (u) {
                    (u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = a.j.small.width)] = 'Small'),
                        (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                        (u[(u.Large = a.j.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(i || (i = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.width)] = 'Small'),
                            (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                            (u[(u.Large = a.j.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(o || (o = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.height)] = 'Small'),
                            (u[(u.Medium = a.j.medium.height)] = 'Medium'),
                            (u[(u.Large = a.j.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(s || (s = {}));
                const l = () => {
                    const u = (0, n.useContext)(r.YN),
                        e = u.width,
                        t = u.height,
                        a = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return i.ExtraLarge;
                                case u.large:
                                    return i.Large;
                                case u.medium:
                                    return i.Medium;
                                case u.small:
                                    return i.Small;
                                case u.extraSmall:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(u),
                        l = ((u) => {
                            switch (!0) {
                                case u.extraLargeWidth:
                                    return o.ExtraLarge;
                                case u.largeWidth:
                                    return o.Large;
                                case u.mediumWidth:
                                    return o.Medium;
                                case u.smallWidth:
                                    return o.Small;
                                case u.extraSmallWidth:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(u),
                        c = ((u) => {
                            switch (!0) {
                                case u.extraLargeHeight:
                                    return s.ExtraLarge;
                                case u.largeHeight:
                                    return s.Large;
                                case u.mediumHeight:
                                    return s.Medium;
                                case u.smallHeight:
                                    return s.Small;
                                case u.extraSmallHeight:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(u);
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: e, remScreenHeight: t };
                };
            },
            4419: (u, e, t) => {
                'use strict';
                t.d(e, { y: () => a });
                var n = t(8045),
                    r = t(6179);
                const a = (u, e, t = !0) => {
                    const a = (0, r.useCallback)(
                        (u) => {
                            const t = u[0];
                            e && e(t);
                        },
                        [e],
                    );
                    (0, r.useEffect)(() => {
                        if (!u.current || !t) return;
                        const e = new n.Z((u) => a(u));
                        return (
                            e.observe(u.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [a, t, u]);
                };
            },
            5521: (u, e, t) => {
                'use strict';
                let n, r;
                t.d(e, { n: () => n }),
                    (function (u) {
                        (u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9'),
                            (u[(u.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (u[(u.INSERT = 45)] = 'INSERT'),
                            (u[(u.F1 = 112)] = 'F1'),
                            (u[(u.F2 = 113)] = 'F2'),
                            (u[(u.F3 = 114)] = 'F3'),
                            (u[(u.F4 = 115)] = 'F4'),
                            (u[(u.F5 = 116)] = 'F5'),
                            (u[(u.F6 = 117)] = 'F6'),
                            (u[(u.F7 = 118)] = 'F7'),
                            (u[(u.F8 = 119)] = 'F8'),
                            (u[(u.F9 = 120)] = 'F9'),
                            (u[(u.F10 = 121)] = 'F10'),
                            (u[(u.F11 = 122)] = 'F11'),
                            (u[(u.F12 = 123)] = 'F12'),
                            (u[(u.SELECT = 93)] = 'SELECT'),
                            (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (u[(u.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (u[(u.STAR = 106)] = 'STAR'),
                            (u[(u.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (u[(u.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (u[(u.COMMA = 188)] = 'COMMA'),
                            (u[(u.DASH = 189)] = 'DASH'),
                            (u[(u.PERIOD = 190)] = 'PERIOD');
                    })(n || (n = {})),
                    (function (u) {
                        (u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock');
                    })(r || (r = {}));
            },
            9480: (u, e, t) => {
                'use strict';
                function n(u, e) {
                    var t;
                    if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
                }
                t.d(e, { U2: () => n, UI: () => r });
                function r(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, n) => e(null == u ? void 0 : u.value, t, n));
                }
            },
            7727: (u, e, t) => {
                'use strict';
                function n(u) {
                    engine.call('PlaySound', u);
                }
                t.d(e, { $: () => r, G: () => n });
                const r = {
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
            3649: (u, e, t) => {
                'use strict';
                let n;
                function r(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                function a(u) {
                    return u.replace(/-/g, '_');
                }
                function i(u) {
                    return u[0].toUpperCase() + u.slice(1);
                }
                t.d(e, { BN: () => a, Eg: () => s, Uw: () => F, e: () => i, uF: () => r, v2: () => n, z4: () => o }),
                    (function (u) {
                        (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                    })(n || (n = {}));
                const o = (u) => u.replace(/&nbsp;/g, ' '),
                    s = (u) => u.replace(/&zwnbsp;/g, '\ufeff'),
                    l = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    c = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    E = (u, e, t = n.left) => u.split(e).reduce(t === n.left ? l : c, []),
                    _ = (() => {
                        const u = new RegExp(
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
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    d = ['zh_cn', 'zh_sg', 'zh_tw'],
                    A = (u, e = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return d.includes(t)
                            ? _(u)
                            : ((u, e = n.left) => {
                                  let t = [];
                                  const r =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = o(u);
                                  return E(a, /( )/, e).forEach((u) => (t = t.concat(E(u, r, n.left)))), t;
                              })(u, e);
                    },
                    F = (u, e, t) => u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : A(u, e)));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var n = t(3138);
                class r {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(u, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
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
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(u) {
                        this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data);
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            4179: (u, e, t) => {
                'use strict';
                t.d(e, { Sw: () => a.Z, B3: () => l, Z5: () => i, B0: () => s, ry: () => C, Eu: () => B });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let n = u.target;
                                    do {
                                        if (n === e) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
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
                const i = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    o = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let s;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(u, e, t, n, r, a, i) {
                    try {
                        var o = u[a](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(n, r);
                }
                const m = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (n, r) {
                                        var a = u.apply(e, t);
                                        function i(u) {
                                            D(a, n, r, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            D(a, n, r, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    g = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(u);
                                    for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, F);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    h = () => g(s.CLOSE),
                    b = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var p = t(7572);
                const v = r.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: _,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (u) => g(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => g(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), a) => {
                            const i = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                _ = o.height,
                                d = {
                                    x: A.O.view.pxToRem(l) + i.x,
                                    y: A.O.view.pxToRem(c) + i.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(_),
                                };
                            g(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: m(d),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => b(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            b(u, h);
                        },
                        handleViewEvent: g,
                        onBindingsReady: C,
                        onLayoutReady: B,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const r = Object.prototype.toString.call(e[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < r.length; e++) t[n].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = f;
            },
            3618: (u, e, t) => {
                'use strict';
                t.d(e, { w: () => d });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3415),
                    i = t(4419),
                    o = t(6179),
                    s = t.n(o),
                    l = t(6143),
                    c = t(3310),
                    E = t(131),
                    _ = t(9053);
                const d = s().memo(
                    ({
                        text: u,
                        classMix: e,
                        onSizeChanged: t,
                        binding: n,
                        isTooltipEnable: d = !1,
                        isTruncationAvailable: A = !1,
                        targetId: F,
                        justifyContent: D = _.v2.FlexStart,
                        alignContent: m = _.v2.FlexStart,
                        truncateIdentify: C = _.YA,
                    }) => {
                        const B = (0, o.useRef)(null),
                            g = (0, o.useRef)({ height: 0, width: 0 }),
                            h = (0, o.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            b = h[0],
                            p = h[1],
                            v = (0, o.useMemo)(() => (0, c.s)(u, n), [n, u]),
                            f = (0, o.useMemo)(() => {
                                if (d && b.isTruncated)
                                    return {
                                        args: { text: u, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: F,
                                    };
                            }, [n, d, F, u, b.isTruncated]),
                            w = (0, o.useCallback)(
                                (u) => {
                                    (g.current.width = u.contentRect.width), (g.current.height = u.contentRect.height);
                                    const e = (0, E.T)(B, v, g.current, C),
                                        n = e[0],
                                        r = e[1];
                                    p({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r);
                                },
                                [t, C, v],
                            ),
                            k = (0, o.useMemo)(() => ({ justifyContent: D, alignContent: m }), [m, D]);
                        return (
                            (0, i.y)(B, w, A),
                            s().createElement(
                                'div',
                                {
                                    className: r()(
                                        l.Z.base,
                                        e,
                                        l.Z.base__zeroPadding,
                                        A && l.Z.base__isTruncationAvailable,
                                    ),
                                    style: k,
                                },
                                s().createElement('div', { className: l.Z.unTruncated, ref: B }, v),
                                s().createElement(
                                    a.l,
                                    { tooltipArgs: f },
                                    s().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                l.Z.truncated,
                                                !b.isTruncateFinished && A && l.Z.truncated__hide,
                                            ),
                                            style: k,
                                        },
                                        b.isTruncateFinished && A ? b.elementList : v,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (u, e, t) => {
                'use strict';
                t.d(e, { s: () => E });
                var n = t(3649),
                    r = t(6799),
                    a = t(6960),
                    i = t(9053);
                const o = (u) => {
                        const e = /[\s\u002d]/g;
                        let t = e.exec(u);
                        if (!t) return [u];
                        const n = [];
                        let r = 0;
                        for (; t; ) n.push(u.slice(r, e.lastIndex)), (r = e.lastIndex), (t = e.exec(u));
                        return r !== u.length && n.push(u.slice(r)), n;
                    },
                    s = (u, e = '') => {
                        const t = [];
                        return (
                            (0, a.Z)(
                                u,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (u) => {
                                    t.push({ blockType: i.kH.Word, colorTag: e, childList: o(u) });
                                },
                                (u) => {
                                    const n = u[0],
                                        r = i.aF[n.charAt(0)];
                                    r === i.kH.LineBreak
                                        ? t.push(
                                              ...((u) => {
                                                  const e = [
                                                      {
                                                          blockType: i.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < u.length - 1; t++)
                                                      e.push({
                                                          blockType: i.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      });
                                                  return e;
                                              })(n),
                                          )
                                        : t.push({ blockType: r, colorTag: e, childList: [n] });
                                },
                            ),
                            t
                        );
                    },
                    l = (u, e, t = '') => {
                        const n = [];
                        return (
                            (0, a.Z)(
                                u,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (u) => {
                                    n.push(...s(u, t));
                                },
                                (u) => {
                                    const r = u[1],
                                        a = void 0 === e[r] ? u[0] : e[r];
                                    'string' == typeof a || 'number' == typeof a
                                        ? n.push(...s(String(a), t))
                                        : n.push({ blockType: i.kH.Binding, colorTag: t, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    c = (u, e) => {
                        if (!u) return [e];
                        const t = [],
                            n = Object.assign({}, e, { childList: e.childList.splice(0, 1) });
                        if (u.blockType === i.kH.NoBreakWrapper) u.childList.push(n), t.push(u);
                        else {
                            const e = Object.assign({}, u, { childList: u.childList.splice(-1) });
                            u.childList.length > 0 && t.push(u),
                                t.push({ blockType: i.kH.NoBreakWrapper, colorTag: '', childList: [e, n] });
                        }
                        return e.childList.length > 0 && t.push(e), t;
                    },
                    E = (u, e = {}) => {
                        if (!u) return [];
                        const t = ((u) => {
                            const e = [];
                            let t = !1;
                            return (
                                u.forEach((u) => {
                                    u.blockType === i.kH.NoBreakSymbol
                                        ? ((t = !0), e.push(...c(e.pop(), u)))
                                        : (t ? e.push(...c(e.pop(), u)) : e.push(u), (t = !1));
                                }),
                                e
                            );
                        })(
                            ((u, e) => {
                                const t = [];
                                return (
                                    (0, a.Z)(
                                        u,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (u) => {
                                            t.push(...l(u, e));
                                        },
                                        (u) => {
                                            t.push(...l(u[2], e, u[1]));
                                        },
                                    ),
                                    t
                                );
                            })((0, n.Eg)((0, n.z4)(u)), e),
                        );
                        return (0, r.w)(t);
                    };
            },
            6799: (u, e, t) => {
                'use strict';
                t.d(e, { w: () => i });
                var n = t(597),
                    r = t(9053);
                const a = (u, e, t) => {
                        const i = [];
                        return (
                            u.childList.forEach((o, s) => {
                                const l = `${t}_${s}`;
                                if ((0, r.dz)(o)) {
                                    const u = o,
                                        e = u.blockType,
                                        t = n.IY[e],
                                        r = a(u, t, l);
                                    i.push(...r);
                                } else i.push(e({ elementList: [o], textBlock: u, key: l }));
                            }),
                            i
                        );
                    },
                    i = (u) => {
                        const e = [];
                        return (
                            u.forEach((u, t) => {
                                e.push(
                                    ...((u, e) => {
                                        const t = [],
                                            i = u.blockType,
                                            o = n.IY[i],
                                            s = a(u, o, e);
                                        return (
                                            i === r.kH.NoBreakWrapper
                                                ? t.push(o({ elementList: s, textBlock: u, key: `${e}` }))
                                                : t.push(...s),
                                            t
                                        );
                                    })(u, t),
                                );
                            }),
                            e
                        );
                    };
            },
            6960: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                const n = (u, e, t, n) => {
                    let r = e.exec(u),
                        a = 0;
                    for (; r; ) a !== r.index && t(u.slice(a, r.index)), n(r), (a = e.lastIndex), (r = e.exec(u));
                    a !== u.length && t(u.slice(a));
                };
            },
            131: (u, e, t) => {
                'use strict';
                t.d(e, { T: () => c });
                var n = t(6179),
                    r = t.n(n),
                    a = t(9053);
                const i = (u, e) => !u || u.offsetTop + u.offsetHeight > e,
                    o = (u, e) => u.offsetLeft + u.offsetWidth - e,
                    s = (u, e, t) => {
                        if (!u || !u.textContent) return [!1, 0];
                        if (u.offsetLeft > e) return [!1, 0];
                        const n = o(u, e),
                            r = u.textContent.length,
                            a = u.offsetWidth / r,
                            i = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((e - u.offsetLeft) / a);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const s = Math.max(t + i, 0);
                        return r < s ? [!1, 0] : [!0, s];
                    },
                    l = (u, e, t, n, i, o) => {
                        let c = -1,
                            E = null;
                        for (let _ = t; _ >= 0; _--) {
                            const t = u[_],
                                d = Number(u[_].getAttribute(a.bF));
                            if (d === a.kH.LineBreak || d === a.kH.NewLine || d === a.kH.Binding) continue;
                            const A = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const u = s(t, n, i),
                                    a = u[0],
                                    l = u[1];
                                if (!a) {
                                    l > 0 && (i -= l);
                                    continue;
                                }
                                const d = A.slice(0, A.length - l) + o,
                                    F = e[_];
                                (E = r().cloneElement(F, F.props, d)), (c = _);
                                break;
                            }
                            {
                                const u = t.children,
                                    a = e[_],
                                    s = a.props.children,
                                    d = l(u, s, u.length - 1, n, i, o),
                                    F = d[0],
                                    D = d[1];
                                if (!(F < 0)) {
                                    const u = s.slice(0, F);
                                    (E = r().cloneElement(a, a.props, u, D)), (c = _);
                                    break;
                                }
                                i -= A.length;
                            }
                        }
                        return [c, E];
                    },
                    c = (u, e, t, n = a.YA) => {
                        const r = [...e],
                            s = u.current;
                        if (!s) return [r, !1];
                        const c = t.height,
                            E = t.width,
                            _ = s.lastElementChild;
                        if (!i(_, c) && o(_, E) <= 0) return [r, !1];
                        const d = s.children,
                            A = ((u, e) => {
                                let t = 0,
                                    n = u.length - 1;
                                for (; n - t >= 0; ) {
                                    const r = t + Math.ceil(0.5 * (n - t));
                                    i(u[r], e) ? (n = r - 1) : (t = r + 1);
                                }
                                return t - 1;
                            })(d, c);
                        if (A < 0) return [r, !1];
                        const F = l(d, r, A, E, n.length, n),
                            D = F[0],
                            m = F[1];
                        return m && (r.splice(D, 1, m), r.splice(D + 1)), [r, !0];
                    };
            },
            9053: (u, e, t) => {
                'use strict';
                let n, r, a;
                t.d(e, { YA: () => o, aF: () => l, bF: () => s, dz: () => i, kH: () => n, v2: () => r }),
                    (function (u) {
                        (u[(u.Word = 0)] = 'Word'),
                            (u[(u.LineBreak = 1)] = 'LineBreak'),
                            (u[(u.NewLine = 2)] = 'NewLine'),
                            (u[(u.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (u[(u.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (u[(u.Binding = 5)] = 'Binding');
                    })(n || (n = {})),
                    (function (u) {
                        (u.FlexStart = 'flex-start'), (u.Center = 'center'), (u.FlexEnd = 'flex-end');
                    })(r || (r = {})),
                    (function (u) {
                        (u.NBSP = ' '), (u.ZWNBSP = '\ufeff'), (u.NEW_LINE = '\n');
                    })(a || (a = {}));
                const i = (u) => void 0 !== u.childList,
                    o = '...',
                    s = 'data-block-type',
                    l = { [a.NBSP]: n.NoBreakSymbol, [a.ZWNBSP]: n.NoBreakSymbol, [a.NEW_LINE]: n.LineBreak };
            },
            597: (u, e, t) => {
                'use strict';
                t.d(e, { IY: () => c });
                var n = t(6179),
                    r = t.n(n),
                    a = t(9053),
                    i = t(9627),
                    o = t(7629);
                const s = (u) => ({ color: `#${u}` }),
                    l = ({ elementList: u, textBlock: e, key: t }) => {
                        const n = e.colorTag;
                        return n
                            ? i.Z[n]
                                ? r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: i.Z[n] },
                                      u,
                                  )
                                : r().createElement('span', { key: t, 'data-block-type': e.blockType, style: s(n) }, u)
                            : r().createElement('span', { key: t, 'data-block-type': e.blockType }, u);
                    },
                    c = {
                        [a.kH.Word]: l,
                        [a.kH.NoBreakSymbol]: l,
                        [a.kH.Binding]: ({ elementList: u, textBlock: e, key: t }) =>
                            r().createElement(
                                'span',
                                { key: t, 'data-block-type': e.blockType },
                                u.map((u) => r().createElement(r().Fragment, { key: t }, u)),
                            ),
                        [a.kH.LineBreak]: ({ key: u }) =>
                            r().createElement('span', {
                                key: u,
                                'data-block-type': a.kH.LineBreak,
                                className: o.Z.lineBreak,
                            }),
                        [a.kH.NewLine]: ({ elementList: u, key: e }) =>
                            r().createElement(
                                'span',
                                { key: e, 'data-block-type': a.kH.NewLine, className: o.Z.newLine },
                                u,
                            ),
                        [a.kH.NoBreakWrapper]: ({ elementList: u, key: e }) =>
                            r().createElement(
                                'span',
                                { key: e, 'data-block-type': a.kH.NoBreakWrapper, className: o.Z.noBreakWrapper },
                                u,
                            ),
                    };
            },
            5298: (u, e, t) => {
                'use strict';
                t.d(e, { l: () => r });
                var n = t(776);
                const r = (u, e) => ({
                    isEnabled: u !== n.f.absent,
                    args: e,
                    contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                    decoratorId:
                        u === n.f.normal ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId') : void 0,
                    ignoreShowDelay: u === n.f.backport,
                    ignoreMouseClick: !0,
                });
            },
            8018: (u, e, t) => {
                'use strict';
                t.d(e, { Gc: () => s, T3: () => a, wP: () => i });
                var n = t(3649);
                const r = R.strings.common.percentValue(),
                    a = (u) => (0, n.uF)(r, { value: u });
                let i;
                !(function (u) {
                    (u.Objective = 'objective'), (u.Possessive = 'possessive');
                })(i || (i = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let o;
                !(function (u) {
                    (u.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (u.SHOP_INFO = 'shop_info'),
                        (u.RUDY = 'rudy');
                })(o || (o = {}));
                const s = (u, e = !1, t = null) => {
                    const n = e ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (t ? n.$dyn(`${t}Case`) : n).$dyn(u);
                };
            },
            2423: (u, e, t) => {
                'use strict';
                var n = t(7739),
                    r = t(6179),
                    a = t.n(r),
                    i = t(6483),
                    o = t.n(i),
                    s = t(926),
                    l = t.n(s),
                    c = t(5415);
                const E = ['children', 'className'];
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        _.apply(this, arguments)
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
                    D = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, E);
                        const r = (0, c.GS)(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            l = r.mediaSize;
                        return a().createElement('div', _({ className: o()(t, d[i], A[s], F[l]) }, n), e);
                    },
                    m = ['children'];
                const C = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, m);
                    return a().createElement(n.ZN, null, a().createElement(D, t, e));
                };
                var B = t(493),
                    g = t.n(B);
                var h = t(3649);
                let b;
                !(function (u) {
                    (u.SHORT_DATE = 'short-date'),
                        (u.SHORT_TIME = 'short-time'),
                        (u.SHORT_DATE_TIME = 'short-date-time'),
                        (u.FULL_DATE = 'full-date'),
                        (u.FULL_DATE_TIME = 'full-date-time'),
                        (u.MONTH = 'month'),
                        (u.MONTH_DATE = 'month-date'),
                        (u.DATE_MONTH = 'date-month'),
                        (u.MONTH_YEAR = 'month-year'),
                        (u.WEEK_DAY = 'week-day'),
                        (u.WEEK_DAY_TIME = 'week-day-time'),
                        (u.YEAR = 'year'),
                        (u.DATE_YEAR = 'date-year');
                })(b || (b = {}));
                var p = t(4179);
                Date.now();
                var v = t(3138);
                var f = t(7902);
                const w = (u, e) => u.split('.').reduce((u, e) => u && u[e], e);
                var k = t(6536);
                const y = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    x = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    T = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = w(`${u}.${t}`, window);
                                return y(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    L = (u) => {
                        const e = ((u) => {
                                const e = (0, f.F)(),
                                    t = e.caller,
                                    n = e.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: x(r, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const r = w(x(t, `${e}.${n}`), window);
                                    return y(r) ? (u.push(r.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    S = p.Sw.instance;
                let M;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(M || (M = {}));
                const O = (u = 'model', e = M.Deep) => {
                    const t = (0, r.useState)(0),
                        n = (t[0], t[1]),
                        a = (0, r.useMemo)(() => (0, f.F)(), []),
                        i = a.caller,
                        o = a.resId,
                        s = (0, r.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${u}` : u),
                            [i, u],
                        ),
                        l = (0, r.useState)(() =>
                            ((u) => {
                                const e = w(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return y(e) ? e.value : e;
                            })(T(s)),
                        ),
                        c = l[0],
                        E = l[1],
                        _ = (0, r.useRef)(-1);
                    return (
                        (0, k.Z)(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? M.Deep : M.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== M.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === M.Deep
                                            ? (u === c && n((u) => u + 1), E(u))
                                            : E(Object.assign([], u));
                                    },
                                    r = L(u);
                                _.current = S.addCallback(r, t, o, e === M.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (e !== M.None)
                                return () => {
                                    S.removeCallback(_.current, o);
                                };
                        }, [o, e]),
                        c
                    );
                };
                p.Sw.instance;
                var N = t(5521);
                const P = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function H(u = N.n.NONE, e = P, t = !1) {
                    (0, r.useEffect)(() => {
                        if (u !== N.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (v.O.view.isEventHandled()) return;
                                v.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t]);
                }
                const I = /<link.*?>/g,
                    W = /\.\.\//g,
                    j = /<script.*?>/g,
                    U = 'default.css',
                    $ = (u) => {
                        const e = u.match(W);
                        return e && e.join('');
                    },
                    G = () => {
                        for (
                            var u = 0, e = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            u < e.length;
                            u++
                        ) {
                            const t = e[u];
                            if (!t.href.includes(U)) return t.href;
                        }
                        return '';
                    },
                    V = (u) => {
                        const e = G(),
                            t = $(e);
                        let n,
                            r = u;
                        for (; null !== (n = j.exec(u)); ) {
                            const u = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (u) {
                                const e = t + u[2].replace(W, '');
                                r = r.replace(u[2], e);
                            }
                        }
                        return r;
                    },
                    q = 'SubView_base_df',
                    z = 'subViews.onChanged',
                    Z = (() => {
                        const u = [];
                        let e = !1;
                        const t = () => {
                            if (!u.length) return void (e = !1);
                            const n = u.shift();
                            n && ((e = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                u.push(n), e || t();
                            },
                        };
                    })(),
                    Y = (0, r.memo)(({ id: u, fallback: e, onLoadCallback: t, mixClass: n }) => {
                        const i = (0, r.useState)(''),
                            s = i[0],
                            l = i[1],
                            c = (0, r.useMemo)(() => ({ __html: V(s) }), [s]),
                            E = (0, r.useMemo)(() => window.subViews.addChildChangedCallback(u), [u]),
                            _ = (0, r.useState)(!1),
                            d = _[0],
                            A = _[1],
                            F = (0, r.useCallback)(
                                (u) => {
                                    u.includes(E) &&
                                        (A(!0), engine.off(z, F), window.subViews.removeChildChangedCallback(E));
                                },
                                [E],
                            ),
                            D = (0, r.useCallback)((u) => {
                                Z.add(
                                    () =>
                                        new Promise((e) => {
                                            l(u);
                                            const t = new MutationObserver(() => {
                                                    t.disconnect(), e();
                                                }),
                                                n = document.getElementById('root');
                                            n && t.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, r.useEffect)(() => {
                            if (window.subViews.ids().includes(u)) {
                                const e = window.subViews.get(u),
                                    t = e.path;
                                let n;
                                if ((n = t.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: u }, e)),
                                        engine.on(`subView:inject->${n}`, D),
                                        (({ path: u, name: e }) => {
                                            const t = new XMLHttpRequest();
                                            (t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, p.Eu)().then(() => {
                                                              console.info(`Sub view ${e} loaded: ${u}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${e}`,
                                                                      t.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${t.status} - can't get bundle`,
                                                          ));
                                            }),
                                                t.open('GET', u),
                                                t.send();
                                        })({ name: n, path: t }),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: u }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(u),
                                                engine.off(`subView:inject->${n}`, D),
                                                console.info(`Sub view ${n} is destroyed: ${t}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(z, F);
                        }, [F, D, u, d]),
                            (0, r.useEffect)(
                                () => () => {
                                    s &&
                                        ((u) => {
                                            const e = $(G());
                                            let t;
                                            for (; null !== (t = I.exec(u)); ) {
                                                const u = t[0].match(/href="(.*?)"/);
                                                if (u) {
                                                    const t = e + u[1].replace(W, ''),
                                                        n = document.head.querySelector(`[href="${t}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(s);
                                },
                                [s],
                            );
                        const m = o()(q, n);
                        if (s) {
                            let e;
                            return (
                                (e = document.getElementById('root')) && e.setAttribute('id', 'bugSubView'),
                                ((u) => {
                                    let e;
                                    const t = G(),
                                        n = $(t);
                                    for (; null !== (e = I.exec(u)); ) {
                                        const u = e[0].match(/href="(.*?)"/);
                                        if (u && !u[1].includes(U) && n) {
                                            const e = n + u[1].replace(W, ''),
                                                t = document.createElement('link');
                                            (t.href = e), (t.rel = 'stylesheet'), document.head.appendChild(t);
                                        }
                                    }
                                })(s),
                                t && t(u),
                                a().createElement('div', { className: m, dangerouslySetInnerHTML: c })
                            );
                        }
                        return e ? a().createElement('div', { className: m }, a().createElement(e, null)) : null;
                    });
                var K = t(7727);
                const X = {
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
                let J, Q;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(J || (J = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(Q || (Q = {}));
                const uu = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: n,
                    disabled: i,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: E,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: A,
                    onMouseLeave: F,
                    onClick: D,
                }) => {
                    const m = (0, r.useRef)(null),
                        C = (0, r.useState)(t),
                        B = C[0],
                        g = C[1],
                        h = (0, r.useState)(!1),
                        b = h[0],
                        p = h[1],
                        v = (0, r.useState)(!1),
                        f = v[0],
                        w = v[1],
                        k = (0, r.useCallback)(() => {
                            i || (m.current && (m.current.focus(), g(!0)));
                        }, [i]),
                        y = (0, r.useCallback)(
                            (u) => {
                                B && null !== m.current && !m.current.contains(u.target) && g(!1);
                            },
                            [B],
                        ),
                        x = (0, r.useCallback)(
                            (u) => {
                                i || (D && D(u));
                            },
                            [i, D],
                        ),
                        T = (0, r.useCallback)(
                            (u) => {
                                i || (null !== l && (0, K.G)(l), E && E(u), w(!0));
                            },
                            [i, l, E],
                        ),
                        L = (0, r.useCallback)(
                            (u) => {
                                _ && _(u);
                            },
                            [_],
                        ),
                        S = (0, r.useCallback)(
                            (u) => {
                                i || (A && A(u), p(!1));
                            },
                            [i, A],
                        ),
                        M = (0, r.useCallback)(
                            (u) => {
                                i || (null !== c && (0, K.G)(c), d && d(u), t && k(), p(!0));
                            },
                            [i, c, d, k, t],
                        ),
                        O = (0, r.useCallback)(
                            (u) => {
                                i || (F && F(u), p(!1));
                            },
                            [i, F],
                        ),
                        N = o()(
                            X.base,
                            X[`base__${n}`],
                            {
                                [X.base__disabled]: i,
                                [X[`base__${e}`]]: e,
                                [X.base__focus]: B,
                                [X.base__highlightActive]: b,
                                [X.base__firstHover]: f,
                            },
                            s,
                        ),
                        P = o()(X.state, X.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, r.useEffect)(() => {
                            g(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: m,
                                className: N,
                                onMouseEnter: T,
                                onMouseMove: L,
                                onMouseUp: S,
                                onMouseDown: M,
                                onMouseLeave: O,
                                onClick: x,
                            },
                            n !== J.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: X.back }),
                                    a().createElement('span', { className: X.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: P },
                                a().createElement('span', { className: X.stateDisabled }),
                                a().createElement('span', { className: X.stateHighlightHover }),
                                a().createElement('span', { className: X.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: X.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                uu.defaultProps = { type: J.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const eu = (0, r.memo)(uu);
                var tu = t(6373);
                const nu = 'TextOverflow_base_3b',
                    ru = ({ content: u, classMix: e }) => {
                        const t = (0, r.useRef)(null),
                            n = (0, r.useState)(!0),
                            i = n[0],
                            s = n[1];
                        return (
                            (0, r.useEffect)(() =>
                                ((u) => {
                                    let e,
                                        t = null;
                                    return (
                                        (t = requestAnimationFrame(() => {
                                            t = requestAnimationFrame(() => {
                                                (t = null), (e = u());
                                            });
                                        })),
                                        () => {
                                            'function' == typeof e && e(), null !== t && cancelAnimationFrame(t);
                                        }
                                    );
                                })(() => {
                                    const u = t.current;
                                    u && u.offsetWidth >= u.scrollWidth && s(!1);
                                }),
                            ),
                            a().createElement(
                                tu.i,
                                { isEnabled: i, body: u },
                                a().createElement('div', { ref: t, className: o()(nu, e) }, u),
                            )
                        );
                    };
                var au = t(2056),
                    iu = t(776),
                    ou = t(5298);
                const su = 'DialogTemplateButton_base_0b',
                    lu = 'DialogTemplateButton_label_83',
                    cu = 'DialogTemplateButton_label__noTooltip_14',
                    Eu = (0, r.memo)(
                        ({ onClick: u, isFocused: e, buttonID: t, isDisabled: n, label: i, tooltip: s, type: l }) => {
                            const c = (0, r.useCallback)(() => {
                                    u({ buttonID: t });
                                }, [u, t]),
                                E = (0, r.useCallback)(
                                    (u) => {
                                        u.altKey || !e || n || c();
                                    },
                                    [e, n, c],
                                );
                            H(N.n.ENTER, E);
                            const _ = (0, r.useMemo)(() => (0, ou.l)(s.type, { buttonID: t }), [s.type, t]),
                                d = o()(lu, s.type !== iu.f.absent && cu);
                            return a().createElement(
                                au.u,
                                _,
                                a().createElement(
                                    'div',
                                    { className: su },
                                    a().createElement(
                                        eu,
                                        { size: Q.medium, type: l, disabled: n, onClick: c, isFocused: e },
                                        a().createElement(ru, { classMix: d, content: i || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    _u = 'DialogTemplateButtonList_base_8e';
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const Au = (0, r.memo)(() => {
                        const u = O('model').onButtonClicked,
                            e = O('model.focus'),
                            t = e.focusedIndex,
                            n = e.onTabPressed,
                            i = O('model.buttons'),
                            o = (0, r.useCallback)(
                                (u) => {
                                    n({ shift: u.shiftKey });
                                },
                                [n],
                            );
                        return (
                            H(N.n.TAB, o),
                            a().createElement(
                                'div',
                                { className: _u },
                                i.map(({ value: e }, n) =>
                                    a().createElement(Eu, du({ key: e.buttonID, isFocused: n === t, onClick: u }, e)),
                                ),
                            )
                        );
                    }),
                    Fu = 'DialogTemplateWrapper_base_f7',
                    Du = 'DialogTemplateWrapper_base__hidden_5f',
                    mu = 'DialogTemplateWrapper_subView_30';
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                const Bu = (0, r.memo)(({ Template: u }) => {
                    const e = O('model', M.None),
                        t = e.onCloseClicked,
                        i = e.placeHolders,
                        s = e.background,
                        l = e.dimmerAlpha,
                        c = e.displayFlags;
                    (0, r.useEffect)(() => {
                        const u = document.getElementById('root');
                        u && u.setAttribute('id', 'stubDialogTemplate');
                    }, []);
                    const E = c.map(({ value: u }) => u),
                        _ = (0, r.useRef)(i.map(({ value: u }) => u.resourceID)),
                        d = (0, r.useState)(0 !== _.current.length),
                        A = d[0],
                        F = d[1],
                        D = (0, r.useCallback)(
                            (u = 'default') => {
                                t({ reason: u });
                            },
                            [t],
                        ),
                        m = (0, r.useCallback)(() => {
                            D('escape');
                        }, [D]);
                    var C;
                    (C = m), H(N.n.ESCAPE, C);
                    const B = (0, r.useCallback)((u) => {
                            const e = _.current,
                                t = e.indexOf(u);
                            t > -1 && (e.splice(t, 1), 0 === e.length && F(!1));
                        }, []),
                        g = (0, r.useMemo)(() => {
                            const u = { backgroundColor: `rgba(19, 18, 16, ${l})` };
                            return s && (u.backgroundImage = `url(${s})`), u;
                        }, [s, l]),
                        h = (0, r.useMemo)(
                            () =>
                                i.reduce(
                                    (u, { value: e }) => (
                                        (u[e.placeHolder] = a().createElement(Y, {
                                            key: e.placeHolder,
                                            id: e.resourceID,
                                            mixClass: mu,
                                            onLoadCallback: B,
                                        })),
                                        u
                                    ),
                                    {},
                                ),
                            [B, i],
                        ),
                        b = o()(Fu, A && Du);
                    return a().createElement(
                        n.ZN,
                        null,
                        a().createElement(
                            'div',
                            { className: b, style: g },
                            a().createElement(
                                u,
                                Cu(
                                    { onClose: D, buttons: a().createElement(Au, null), displayFlags: E, isShown: !A },
                                    h,
                                ),
                            ),
                        ),
                    );
                });
                var gu = t(3403);
                const hu = {
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
                    bu = [
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
                function pu() {
                    return (
                        (pu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        pu.apply(this, arguments)
                    );
                }
                class vu extends a().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, K.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, K.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                u && u(e), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            n = u.goto,
                            r = u.side,
                            i = u.type,
                            s = u.classNames,
                            l = u.onMouseEnter,
                            c = u.onMouseLeave,
                            E = u.onMouseDown,
                            _ = u.onMouseUp,
                            d =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(u);
                                    for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(u, bu)),
                            A = o()(hu.base, hu[`base__${i}`], hu[`base__${r}`], null == s ? void 0 : s.base),
                            F = o()(hu.icon, hu[`icon__${i}`], hu[`icon__${r}`], null == s ? void 0 : s.icon),
                            D = o()(hu.glow, null == s ? void 0 : s.glow),
                            m = o()(hu.caption, hu[`caption__${i}`], null == s ? void 0 : s.caption),
                            C = o()(hu.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            pu(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== i && a().createElement('div', { className: hu.shine }),
                            a().createElement('div', { className: F }, a().createElement('div', { className: D })),
                            a().createElement('div', { className: m }, e),
                            n && a().createElement('div', { className: C }, n),
                        );
                    }
                }
                let fu;
                (vu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (u) {
                        (u.responsiveHeader = 'responsiveHeader'),
                            (u.responsiveClosePosition = 'responsiveClosePosition'),
                            (u.disableResponsiveContentPosition = 'disableResponsiveContentPosition');
                    })(fu || (fu = {}));
                var wu = t(5262);
                function ku(u, e, t) {
                    const a = (0, r.useContext)(n.YN);
                    let i = Object.entries(a).filter(([u, e]) => !0 === e && u in wu.u);
                    return (
                        t && (i = i.filter((u) => t.includes(u[0]))),
                        u.reduce((u, t) => {
                            const n = i.map((u) =>
                                o()(e[((u, e) => u + '__' + e)(t, u[0])], e[((u, e) => u + (0, h.e)(e))(t, u[0])]),
                            );
                            return (u[t] = o()(e[t], ...n)), u;
                        }, {})
                    );
                }
                const yu = {
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
                    xu = (0, r.memo)(
                        ({
                            isShown: u = !0,
                            classMix: e,
                            onClose: t,
                            icon: n,
                            topRight: i,
                            title: s,
                            content: l,
                            buttons: c,
                            footer: E,
                            displayFlags: _,
                            classNames: d,
                        }) => {
                            const A = ((u, e) => Object.keys(e).reduce((e, t) => ((e[t] = u.includes(t)), e), {}))(
                                    _,
                                    fu,
                                ),
                                F = A.responsiveHeader,
                                D = A.responsiveClosePosition,
                                m = A.disableResponsiveContentPosition,
                                C = ku(['base'], yu),
                                B = (0, r.useCallback)(() => {
                                    t && t();
                                }, [t]),
                                g = o()(C.base, e),
                                h = o()(
                                    yu.center,
                                    n && yu.center__withIcon,
                                    u && yu.center__shown,
                                    !m && yu.center__responsive,
                                    null == d ? void 0 : d.center,
                                ),
                                b = o()(yu.icon, F && yu.icon__responsive),
                                p = o()(yu.title, F && yu.title__responsive),
                                v = o()(yu.closeBtn, D && yu.closeBtn__responsive),
                                f = o()(
                                    yu.divider,
                                    !l && yu.divider__noContent,
                                    !E && yu.divider__noFooter,
                                    null == d ? void 0 : d.divider,
                                );
                            return a().createElement(
                                'div',
                                { className: g },
                                a().createElement(
                                    'div',
                                    { className: yu.topRight },
                                    i,
                                    a().createElement(
                                        'div',
                                        { className: v },
                                        a().createElement(vu, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: B,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: h },
                                    n && a().createElement('div', { className: b }, n),
                                    s && a().createElement('div', { className: p }, s),
                                    l && a().createElement('div', { className: yu.content }, l),
                                    a().createElement('div', { className: f }),
                                    E && a().createElement('div', { className: yu.footer }, E),
                                    c && a().createElement('div', { className: yu.buttons }, c),
                                ),
                            );
                        },
                    ),
                    Tu = 'WarningText_base_10',
                    Lu = 'WarningText_alertIcon_8f',
                    Su = (0, r.memo)(({ className: u, children: e }) =>
                        a().createElement(
                            'div',
                            { className: o()(Tu, u) },
                            a().createElement('div', { className: Lu }),
                            e,
                        ),
                    );
                let Mu, Ou, Nu, Ru;
                !(function (u) {
                    (u[(u.LEFT = 0)] = 'LEFT'),
                        (u[(u.WHEEL = 1)] = 'WHEEL'),
                        (u[(u.RIGHT = 2)] = 'RIGHT'),
                        (u[(u.FOURTH = 3)] = 'FOURTH'),
                        (u[(u.FIFTH = 4)] = 'FIFTH');
                })(Mu || (Mu = {})),
                    (function (u) {
                        (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large'), (u.extraLarge = 'extraLarge');
                    })(Ou || (Ou = {})),
                    (function (u) {
                        (u.primary = 'primary'), (u.main = 'main');
                    })(Nu || (Nu = {})),
                    (function (u) {
                        (u.Center = 'center'), (u.Bottom = 'bottom');
                    })(Ru || (Ru = {}));
                const Pu = {
                        base: 'Checkbox_base_36',
                        base__disabled: 'Checkbox_base__disabled_08',
                        base__center: 'Checkbox_base__center_52',
                        base__bottom: 'Checkbox_base__bottom_28',
                        input: 'Checkbox_input_37',
                        base__mouseDown: 'Checkbox_base__mouseDown_45',
                        base__small: 'Checkbox_base__small_18',
                        base__medium: 'Checkbox_base__medium_12',
                        base__large: 'Checkbox_base__large_f7',
                        base__extraLarge: 'Checkbox_base__extraLarge_c9',
                        alertOverlay: 'Checkbox_alertOverlay_52',
                        base__alert: 'Checkbox_base__alert_b7',
                        blink: 'Checkbox_blink_5e',
                        base__checked: 'Checkbox_base__checked_a2',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                        highlight: 'Checkbox_highlight_b8',
                        base__main: 'Checkbox_base__main_3a',
                        base__primary: 'Checkbox_base__primary_ab',
                        checkmark: 'Checkbox_checkmark_60',
                        fadeIn: 'Checkbox_fadeIn_1a',
                        label: 'Checkbox_label_bc',
                        labelContent: 'Checkbox_labelContent_64',
                    },
                    Hu = [
                        'id',
                        'isChecked',
                        'isDisabled',
                        'isAlert',
                        'size',
                        'type',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'text',
                        'contentStyles',
                        'children',
                        'alignment',
                    ];
                function Iu() {
                    return (
                        (Iu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Iu.apply(this, arguments)
                    );
                }
                const Wu = (u) => {
                    let e = u.id,
                        t = u.isChecked,
                        n = void 0 !== t && t,
                        i = u.isDisabled,
                        s = void 0 !== i && i,
                        l = u.isAlert,
                        c = void 0 !== l && l,
                        E = u.size,
                        _ = void 0 === E ? Ou.medium : E,
                        d = u.type,
                        A = void 0 === d ? Nu.primary : d,
                        F = u.soundHover,
                        D = void 0 === F ? 'highlight' : F,
                        m = u.soundClick,
                        C = void 0 === m ? 'play' : m,
                        B = u.onMouseEnter,
                        g = u.onMouseLeave,
                        h = u.onMouseUp,
                        b = u.onMouseDown,
                        p = u.onClick,
                        v = u.onChange,
                        f = u.onFocus,
                        w = u.onBlur,
                        k = u.text,
                        y = u.contentStyles,
                        x = u.children,
                        T = u.alignment,
                        L = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, Hu);
                    const S = (0, r.useState)(!1),
                        M = S[0],
                        O = S[1],
                        N = (0, r.useState)(!1),
                        R = (N[0], N[1]),
                        P = (0, r.useCallback)(
                            (u) => {
                                s || (v && v(), p && p(u));
                            },
                            [s, v, p],
                        ),
                        H = (0, r.useCallback)(
                            (u) => {
                                const e = u.button === Mu.LEFT;
                                s || (e && O(!0), e && b && b(u), C && (0, K.G)(C));
                            },
                            [s, b, C],
                        ),
                        I = (0, r.useCallback)(
                            (u) => {
                                s || (O(!1), h && h(u));
                            },
                            [s, h],
                        ),
                        W = (0, r.useCallback)(
                            (u) => {
                                s || (B && B(u), D && (0, K.G)(D));
                            },
                            [s, B, D],
                        ),
                        j = (0, r.useCallback)(
                            (u) => {
                                s || (O(!1), g && g(u));
                            },
                            [s, g],
                        ),
                        U = (0, r.useCallback)(
                            (u) => {
                                s || (R(!0), f && f(u));
                            },
                            [s, f],
                        ),
                        $ = (0, r.useCallback)(
                            (u) => {
                                s || (R(!1), w && w(u));
                            },
                            [s, w],
                        ),
                        G = a().createElement(
                            'div',
                            { className: Pu.label },
                            a().createElement(
                                'div',
                                { className: o()(Pu.labelContent, 's-labelContent'), style: y },
                                k || x,
                            ),
                        );
                    return a().createElement(
                        'div',
                        Iu(
                            {
                                id: e,
                                className: o()(Pu.base, Pu[`base__${_}`], Pu[`base__${A}`], {
                                    [Pu.base__checked]: n,
                                    [Pu.base__disabled]: s,
                                    [Pu.base__mouseDown]: M,
                                    [Pu.base__alert]: c,
                                    [Pu.base__center]: T === Ru.Center,
                                    [Pu.base__bottom]: T === Ru.Bottom,
                                }),
                                onClick: P,
                                onMouseEnter: W,
                                onMouseLeave: j,
                                onMouseDown: H,
                                onMouseUp: I,
                                onFocus: U,
                                onBlur: $,
                            },
                            L,
                        ),
                        a().createElement(
                            'div',
                            { className: Pu.input },
                            a().createElement('div', { className: Pu.alertOverlay }),
                            a().createElement('div', { className: Pu.inputHoverOverlay }),
                            a().createElement('div', { className: Pu.highlight }),
                        ),
                        a().createElement('div', { className: Pu.checkmark }),
                        ((k || x) && G) || null,
                    );
                };
                var ju = t(3618),
                    Uu = t(5501),
                    $u = t(3215),
                    Gu = t(4598),
                    Vu = t(9480),
                    qu = t(3946);
                const zu = (0, $u.q)()(
                        ({ observableModel: u }) => {
                            const e = Object.assign(
                                    {},
                                    u.primitives([
                                        'vehicleName',
                                        'isPremium',
                                        'isPriceVisible',
                                        'isMassive',
                                        'isTransferSelectionVisible',
                                        'isTransferChecked',
                                    ]),
                                    { tankmen: u.array('tankmen', []) },
                                ),
                                t = (0, qu.Om)(() => Vu.UI(e.tankmen.get(), Gu.yR), { equals: Gu.jv }),
                                n = (0, qu.Om)(() => Vu.U2(t(), 0));
                            return Object.assign({}, e, { computes: { tankmen: t, singleRetrainTankman: n } });
                        },
                        ({ externalModel: u }) => ({ changeTransfer: u.createCallbackNoArgs('onTransferChanged') }),
                    ),
                    Zu = zu[0],
                    Yu = zu[1],
                    Ku = 'RetrainPriceList_base_a0',
                    Xu = 'RetrainPriceList_tankmenCount_c0',
                    Ju = 'RetrainPriceList_checkBox_16',
                    Qu = (0, gu.Pi)(function ({ className: u }) {
                        const e = Yu(),
                            t = e.model,
                            n = e.controls;
                        return a().createElement(
                            'div',
                            { className: o()(Ku, u) },
                            a().createElement(Uu.u, null),
                            t.isMassive.get()
                                ? a().createElement(ju.w, {
                                      text: R.strings.dialogs.retrain.massive.tankmenCount(),
                                      binding: { count: t.tankmen.get().length },
                                      classMix: Xu,
                                  })
                                : t.isTransferSelectionVisible.get() &&
                                      a().createElement(
                                          'div',
                                          { className: Ju },
                                          a().createElement(Wu, {
                                              isChecked: t.isTransferChecked.get(),
                                              size: Ou.medium,
                                              type: Nu.main,
                                              text: R.strings.dialogs.retrain.single.checkBoxLabel(),
                                              onChange: n.changeTransfer,
                                          }),
                                      ),
                        );
                    }),
                    ue = 'Divider_base_0a',
                    ee = 'Divider_line_c9',
                    te = a().memo(function ({ className: u }) {
                        return a().createElement(
                            'div',
                            { className: o()(ue, u) },
                            a().createElement('div', { className: ee }),
                        );
                    }),
                    ne = {
                        base: 'TankmanIcon_base_f9',
                        base__big: 'TankmanIcon_base__big_98',
                        base__small: 'TankmanIcon_base__small_b2',
                        base__barracks: 'TankmanIcon_base__barracks_62',
                        base__special: 'TankmanIcon_base__special_3f',
                        base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                        innerShadow: 'TankmanIcon_innerShadow_c6',
                    };
                let re;
                !(function (u) {
                    (u.c158x118 = 'big'),
                        (u.c100x60 = 'small'),
                        (u.c100x60Barracks = 'barracks'),
                        (u.c444x300 = 'special'),
                        (u.c204x256 = 'c_204x256');
                })(re || (re = {}));
                const ae = ({ name: u, size: e = re.c100x60, classMix: t, isSkin: n = !1 }) => {
                        const i = (0, r.useMemo)(() => {
                                try {
                                    let t = R.images.gui.maps.icons.tankmen.icons.$dyn(e);
                                    n && (t = t.$dyn('crewSkins'));
                                    const r = t.$dyn((0, h.BN)(u));
                                    if (!r) throw Error;
                                    return { backgroundImage: `url(${r})` };
                                } catch (e) {
                                    console.error('Cant find resource in TankmanIcon: ', u);
                                }
                            }, [u, e, n]),
                            s = e === re.c204x256;
                        return a().createElement(
                            'div',
                            { style: i, className: o()(ne.base, ne[`base__${e}`], t) },
                            s && a().createElement('div', { className: ne.innerShadow }),
                        );
                    },
                    ie = 'TankmenList_base_10',
                    oe = 'TankmenList_tankmanList_00',
                    se = 'TankmenList_tankmanList__withRoles_97',
                    le = 'TankmenList_tankman_2d',
                    ce = 'TankmenList_divider_17',
                    Ee = 'TankmenList_roles_ee',
                    _e = 'TankmenList_role_ed',
                    de = 'TankmenList_roleShadow_74',
                    Ae = 'TankmenList_roleIcon_1b',
                    Fe = a().memo(function ({ tankmanList: u, isRolesVisible: e, className: t }) {
                        return a().createElement(
                            'div',
                            { className: o()(ie, t) },
                            a().createElement(
                                'div',
                                { className: o()(oe, e && se) },
                                u.map(({ iconName: u, isInSkin: e }, t) =>
                                    a().createElement(ae, {
                                        key: `${t}_${u}`,
                                        name: u,
                                        size: re.c158x118,
                                        isSkin: e,
                                        classMix: le,
                                    }),
                                ),
                            ),
                            a().createElement(te, { className: ce }),
                            a().createElement(
                                'div',
                                { className: Ee },
                                e &&
                                    u.map(({ role: u }, e) =>
                                        a().createElement(
                                            'div',
                                            { className: _e, key: `${e}_${u}` },
                                            a().createElement('div', { className: de }),
                                            a().createElement('div', {
                                                style: {
                                                    backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_30x30.$dyn(u)})`,
                                                },
                                                className: Ae,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    });
                var De = t(7405);
                const me = 'FormatText_base_d0',
                    Ce = ({ binding: u, text: e = '', classMix: t, alignment: n = h.v2.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  r.Fragment,
                                  null,
                                  e.split('\n').map((e, i) =>
                                      a().createElement(
                                          'div',
                                          { className: o()(me, t), key: `${e}-${i}` },
                                          (0, h.Uw)(e, n, u).map((u, e) =>
                                              a().createElement(r.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              ),
                    Be = {
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
                    },
                    ge = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    he = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    be = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    pe = (0, r.memo)(({ text: u, binding: e, classMix: t }) => {
                        const n = (0, r.useCallback)((u) => ({ color: `#${u}` }), []),
                            i = (0, r.useMemo)(() => e || {}, [e]);
                        let o = ge.exec(u),
                            s = u,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                r = he.exec(t),
                                c = be.exec(t),
                                E = o[1];
                            if (r && c) {
                                const u = r[0],
                                    o = u + l++ + u;
                                (s = s.replace(t, `%(${o})`)),
                                    (i[o] = Be[u]
                                        ? a().createElement(
                                              'span',
                                              { className: Be[u] },
                                              a().createElement(Ce, { text: E, binding: e }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: n(u) },
                                              a().createElement(Ce, { text: E, binding: e }),
                                          ));
                            }
                            o = ge.exec(u);
                        }
                        return a().createElement(Ce, { text: s, classMix: t, binding: i });
                    }),
                    ve = (0, $u.q)()(
                        ({ observableModel: u }) =>
                            Object.assign({}, u.primitives(['text']), {
                                cost: u.object('cost'),
                                tooltip: u.object('tooltip'),
                            }),
                        Gu.ZT,
                    ),
                    fe = ve[0],
                    we = ve[1],
                    ke = {
                        base: 'SinglePriceApp_base_55',
                        text: 'SinglePriceApp_text_d5',
                        currency: 'SinglePriceApp_currency_9c',
                        currency__big: 'SinglePriceApp_currency__big_a5',
                    };
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                const xe = (0, gu.Pi)(function ({ tooltipRootId: u }) {
                        const e = we().model,
                            t = (0, ou.l)(e.tooltip.get().type, void 0),
                            n = e.cost.get(),
                            r = o()(ke.currency, ke[`currency__${n.size}`]);
                        return a().createElement(
                            'div',
                            { className: ke.base },
                            a().createElement(
                                'div',
                                { className: ke.text },
                                a().createElement(pe, { text: e.text.get() }),
                            ),
                            a().createElement(
                                au.u,
                                ye({}, t, { targetId: u }),
                                a().createElement('div', { className: r }, a().createElement(De.F, n)),
                            ),
                        );
                    }),
                    Te = a().memo(function ({ rootId: u = R.views.dialogs.widgets.SinglePrice('resId') }) {
                        return a().createElement(
                            fe,
                            { options: { rootId: u } },
                            a().createElement(xe, { tooltipRootId: u }),
                        );
                    }),
                    Le = 'Footer_base_77',
                    Se = (0, gu.Pi)(function () {
                        return Yu().model.isPriceVisible.get()
                            ? a().createElement(Te, null)
                            : a().createElement('div', { className: Le });
                    });
                var Me = t(9053),
                    Oe = t(8018);
                const Ne = (0, gu.Pi)(function () {
                        const u = Yu().model,
                            e = u.isMassive.get(),
                            t = u.computes.singleRetrainTankman();
                        return a().createElement(ju.w, {
                            text: e
                                ? R.strings.dialogs.retrain.title.massive()
                                : R.strings.dialogs.retrain.title.single(),
                            binding: {
                                role:
                                    null != t && t.role
                                        ? (0, Oe.Gc)(
                                              null == t ? void 0 : t.role,
                                              null == t ? void 0 : t.isFemale,
                                              Oe.wP.Objective,
                                          )
                                        : void 0,
                                vehicleName: a().createElement('span', null, u.vehicleName.get()),
                            },
                            justifyContent: Me.v2.Center,
                        });
                    }),
                    Re = 'RetrainDialogApp_center_92',
                    Pe = 'RetrainDialogApp_content_58',
                    He = 'RetrainDialogApp_warning_92',
                    Ie = 'RetrainDialogApp_priceList_fb',
                    We = ['onClose', 'buttons', 'isShown', 'displayFlags'];
                function je() {
                    return (
                        (je =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        je.apply(this, arguments)
                    );
                }
                const Ue = (0, gu.Pi)(function (u) {
                    let e = u.onClose,
                        t = u.buttons,
                        n = u.isShown,
                        r = u.displayFlags,
                        i = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, We);
                    const o = Yu().model,
                        s = o.isMassive.get();
                    return a().createElement(
                        xu,
                        je({ onClose: e, buttons: t, displayFlags: r, isShown: n }, i, {
                            icon: a().createElement(Fe, { tankmanList: o.computes.tankmen(), isRolesVisible: s }),
                            title: a().createElement(Ne, null),
                            content: a().createElement(
                                'div',
                                { className: Pe },
                                o.isPremium.get() &&
                                    a().createElement(
                                        Su,
                                        { className: He },
                                        a().createElement(
                                            'div',
                                            null,
                                            R.strings.dialogs.retrain.warning.premiumVehicle(),
                                        ),
                                    ),
                                a().createElement(Qu, { className: Ie }),
                            ),
                            footer: o.isMassive.get() ? a().createElement(Se, null) : null,
                            classNames: { center: Re },
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    g().render(
                        a().createElement(
                            Zu,
                            null,
                            a().createElement(C, null, a().createElement(Bu, { Template: Ue })),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
            5501: (u, e, t) => {
                'use strict';
                t.d(e, { u: () => q });
                var n = t(6179),
                    r = t.n(n),
                    a = t(3215),
                    i = t(4598),
                    o = t(9480),
                    s = t(3946);
                const l = (0, a.q)()(
                        ({ observableModel: u }) => {
                            const e = { cardsList: u.array('cardsList', []) },
                                t = (0, s.Om)(() => (0, o.UI)(e.cardsList.get(), i.yR), { equals: i.jv });
                            return Object.assign({}, e, { computes: { cards: t } });
                        },
                        ({ externalModel: u }) => ({
                            onCardClick: u.createCallback((u) => ({ index: u }), 'onCardClick'),
                        }),
                    ),
                    c = l[0],
                    E = l[1];
                var _ = t(6483),
                    d = t.n(_),
                    A = t(5415),
                    F = t(3403);
                let D, m;
                !(function (u) {
                    (u.Default = 'default'), (u.Reset = 'reset'), (u.Retrain = 'retrain'), (u.Recruit = 'recruit');
                })(D || (D = {})),
                    (function (u) {
                        (u.Default = ''), (u.Disabled = 'disabled'), (u.Selected = 'selected');
                    })(m || (m = {}));
                var C = t(7727);
                const B = 'CustomComponents_storage_c8',
                    g = 'CustomComponents_storageIcon_2c',
                    h = 'CustomComponents_storageCount_9b',
                    b = (0, n.memo)(({ kwargs: u, cardType: e }) => {
                        if (e === D.Reset) {
                            const e = null == u ? void 0 : u.storageCount;
                            return void 0 === e
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: B },
                                      r().createElement('div', { className: g }),
                                      r().createElement('div', { className: h }, e),
                                  );
                        }
                        return null;
                    });
                var p = t(3618),
                    v = t(9053),
                    f = t(8018);
                const w = {
                        base: 'Description_base_bf',
                        binding: 'Description_binding_da',
                        binding__highLight: 'Description_binding__highLight_95',
                        newSkillIcon: 'Description_newSkillIcon_1b',
                    },
                    k = r().memo(function ({ description: u, cardType: e, kwargs: t, className: n }) {
                        switch (e) {
                            case D.Reset:
                            case D.Retrain:
                            case D.Recruit:
                                return r().createElement(
                                    'div',
                                    { className: d()(w.base, n) },
                                    r().createElement(p.w, {
                                        text: u,
                                        justifyContent: v.v2.Center,
                                        binding: {
                                            value: r().createElement(
                                                'div',
                                                {
                                                    className: d()(
                                                        w.binding,
                                                        (null == t ? void 0 : t.isHighlight) && w.binding__highlight,
                                                    ),
                                                },
                                                (0, f.T3)(null == t ? void 0 : t.value),
                                            ),
                                        },
                                    }),
                                );
                            default:
                                return r().createElement(
                                    'div',
                                    { className: d()(w.base, n) },
                                    r().createElement(p.w, { text: u, justifyContent: v.v2.Center, binding: t }),
                                );
                        }
                    });
                var y = t(7405),
                    x = t(2056),
                    T = t(5298);
                const L = 'Price_base_3c',
                    S = 'Price_base__withPrice_ef';
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const O = ({ cost: u, tooltip: e, index: t, tooltipRootId: n }) => {
                        const a = (0, T.l)(e.type, { index: t });
                        return u.value === u.discountValue && 0 === u.value
                            ? r().createElement('div', { className: L }, R.strings.dialogs.priceCard.price.free())
                            : r().createElement(
                                  'div',
                                  { className: d()(L, S) },
                                  r().createElement(
                                      x.u,
                                      M({}, a, { targetId: n }),
                                      r().createElement('div', null, r().createElement(y.F, u)),
                                  ),
                              );
                    },
                    N = 'Title_base_5e',
                    P = 'Title_base__highLight_1c',
                    H = r().memo(function ({ title: u, cardType: e, kwargs: t, className: n }) {
                        switch (e) {
                            case D.Reset:
                            case D.Retrain:
                            case D.Recruit:
                                return r().createElement(
                                    'div',
                                    { className: d()(N, (null == t ? void 0 : t.isHighlight) && P, n) },
                                    u,
                                );
                            default:
                                return r().createElement('div', { className: d()(N, n) }, u);
                        }
                    }),
                    I = {
                        base: 'PriceCard_base_1c',
                        base__small: 'PriceCard_base__small_b0',
                        base__selected: 'PriceCard_base__selected_e3',
                        base__disabled: 'PriceCard_base__disabled_9c',
                        hover: 'PriceCard_hover_a1',
                        disabled: 'PriceCard_disabled_79',
                        selected: 'PriceCard_selected_df',
                        icon: 'PriceCard_icon_43',
                        title: 'PriceCard_title_98',
                        description: 'PriceCard_description_97',
                        price: 'PriceCard_price_13',
                    };
                let W;
                !(function (u) {
                    (u.Big = 'big'), (u.Small = 'small');
                })(W || (W = {}));
                const j = ({
                        onClick: u,
                        tooltipRootId: e,
                        tooltip: t,
                        index: a,
                        icon: i,
                        size: o = W.Big,
                        title: s,
                        description: l,
                        cardType: c,
                        kwargs: E,
                        price: _,
                        cardState: A,
                        className: F,
                    }) => {
                        const D = A === m.Default,
                            B = (0, n.useState)(!1),
                            g = B[0],
                            h = B[1],
                            p = d()(I.base, I[`base__${o}`], I[`base__${A}`], g && I.base__hover, F),
                            v = (0, n.useMemo)(() => (E ? JSON.parse(E) : {}), [E]),
                            f = (0, n.useCallback)(() => {
                                D && (C.$.playClick(), u(a));
                            }, [a, D, u]),
                            w = (0, n.useCallback)(() => {
                                D && (C.$.playHighlight(), h(!0));
                            }, [D]),
                            y = (0, n.useCallback)(() => D && h(!1), [D]);
                        return r().createElement(
                            'div',
                            { className: p, onClick: f, onMouseEnter: w, onMouseLeave: y },
                            A === m.Disabled && r().createElement('div', { className: I.disabled }),
                            A === m.Selected && r().createElement('div', { className: I.selected }),
                            g && r().createElement('div', { className: I.hover }),
                            r().createElement('div', { className: I.icon, style: { backgroundImage: `url(${i})` } }),
                            r().createElement(H, { title: s, cardType: c, kwargs: v, className: I.title }),
                            r().createElement(k, { description: l, cardType: c, kwargs: v, className: I.description }),
                            r().createElement(
                                'div',
                                { className: I.price },
                                r().createElement(O, { cost: _, tooltip: t, index: a, tooltipRootId: e }),
                            ),
                            r().createElement(b, { cardType: c, kwargs: v }),
                        );
                    },
                    U = 'PriceListApp_base_7d',
                    $ = 'PriceListApp_card_6a';
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        G.apply(this, arguments)
                    );
                }
                const V = (0, F.Pi)(function ({ rootId: u, className: e }) {
                        const t = E(),
                            n = t.model,
                            a = t.controls,
                            i = (0, A.GS)().mediaWidth;
                        return r().createElement(
                            'div',
                            { className: d()(U, e) },
                            (0, o.UI)(n.computes.cards(), (e, t) =>
                                r().createElement(
                                    j,
                                    G({}, e, {
                                        key: `${t}-${e.cardState}`,
                                        onClick: a.onCardClick,
                                        index: t,
                                        tooltipRootId: u,
                                        size: i > A.cJ.ExtraSmall ? W.Big : W.Small,
                                        className: $,
                                    }),
                                ),
                            ),
                        );
                    }),
                    q = r().memo(function ({
                        rootId: u = R.views.lobby.crew.widgets.PriceList('resId'),
                        className: e,
                    }) {
                        return r().createElement(
                            c,
                            { options: { rootId: u } },
                            r().createElement(V, { rootId: u, className: e }),
                        );
                    });
            },
            776: (u, e, t) => {
                'use strict';
                let n;
                t.d(e, { f: () => n }),
                    (function (u) {
                        (u.backport = 'backport'), (u.normal = 'normal'), (u.absent = 'absent');
                    })(n || (n = {}));
            },
            8460: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
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
            6143: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                const n = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                };
            },
            9627: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
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
            7629: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                const n = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, n] = deferred[s], a = !0, i = 0; i < e.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, n];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return __webpack_require__.d(e, { a: e }), e;
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 951),
        (() => {
            var u = { 951: 0, 897: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [a, i, o] = t,
                        s = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < a.length; s++)
                        (r = a[s]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(2423));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
