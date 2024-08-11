(() => {
    'use strict';
    var __webpack_modules__ = {
            7405: (u, e, t) => {
                t.d(e, { F: () => l });
                var r = t(6483),
                    n = t.n(r),
                    i = t(2372),
                    a = t(6179),
                    o = t.n(a),
                    s = t(8460),
                    c = t(329);
                const l = (0, a.memo)(
                    ({
                        isDiscount: u,
                        isInteractiveDiscount: e,
                        size: t,
                        type: r,
                        value: a,
                        discountValue: l,
                        showPlus: E,
                        isEnough: A = !0,
                        stockBackgroundName: F = c.we.Red,
                        className: d,
                        classNames: _,
                    }) =>
                        o().createElement(
                            'span',
                            { className: n()(s.Z.base, s.Z[`base__${t}`], d) },
                            o().createElement(
                                'span',
                                {
                                    className: n()(
                                        s.Z.value,
                                        s.Z[`value__${r}`],
                                        !A && s.Z.value__notEnough,
                                        null == _ ? void 0 : _.value,
                                    ),
                                },
                                E && a > 0 && '+',
                                o().createElement(i.A, { value: a, format: r === c.V2.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', {
                                className: n()(s.Z.icon, s.Z[`icon__${r}-${t}`], null == _ ? void 0 : _.icon),
                            }),
                            u &&
                                o().createElement(
                                    'span',
                                    {
                                        className: n()(
                                            s.Z.stock,
                                            l && s.Z.stock__indent,
                                            e && s.Z.stock__interactive,
                                            null == _ ? void 0 : _.stock,
                                        ),
                                    },
                                    o().createElement('span', {
                                        className: s.Z.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${F})` },
                                    }),
                                    Boolean(l) && l,
                                ),
                        ),
                );
            },
            329: (u, e, t) => {
                let r, n, i;
                t.d(e, { V2: () => n, we: () => i }),
                    (function (u) {
                        (u.small = 'small'), (u.big = 'big'), (u.large = 'large'), (u.extraLarge = 'extraLarge');
                    })(r || (r = {})),
                    (function (u) {
                        (u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.eliteXP = 'eliteXP'),
                            (u.equipCoin = 'equipCoin');
                    })(n || (n = {})),
                    (function (u) {
                        (u.Red = 'RedActionBG'), (u.Blue = 'BlueActionBG');
                    })(i || (i = {}));
            },
            2372: (u, e, t) => {
                t.d(e, { A: () => a });
                var r = t(6179),
                    n = t.n(r),
                    i = t(9916);
                class a extends n().PureComponent {
                    render() {
                        let u;
                        if ('gold' === this.props.format) u = i.B3.GOLD;
                        else u = i.B3.INTEGRAL;
                        const e = i.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                a.defaultProps = { format: 'integral' };
            },
            280: (u, e, t) => {
                t.d(e, { z: () => c });
                var r = t(6483),
                    n = t.n(r),
                    i = t(3649),
                    a = t(6179),
                    o = t.n(a),
                    s = t(5287);
                const c = ({
                    binding: u,
                    text: e = '',
                    classMix: t,
                    alignment: r = i.v2.left,
                    formatWithBrackets: c,
                }) => {
                    if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                    const l = c && u ? (0, i.WU)(e, u) : e;
                    return o().createElement(
                        a.Fragment,
                        null,
                        l.split('\n').map((e, c) =>
                            o().createElement(
                                'div',
                                { className: n()(s.Z.base, t), key: `${e}-${c}` },
                                (0, i.Uw)(e, r, u).map((u, e) =>
                                    o().createElement(a.Fragment, { key: `${e}-${u}` }, u),
                                ),
                            ),
                        ),
                    );
                };
            },
            3495: (u, e, t) => {
                t.d(e, { Y: () => E });
                var r = t(3138),
                    n = t(6179),
                    i = t(1043),
                    a = t(5262);
                const o = r.O.client.getSize('rem'),
                    s = o.width,
                    c = o.height,
                    l = Object.assign({ width: s, height: c }, (0, a.T)(s, c, i.j)),
                    E = (0, n.createContext)(l);
            },
            1039: (u, e, t) => {
                t(3138), t(6536), t(6179), t(3495), t(1043), t(5262);
            },
            6010: (u, e, t) => {
                var r = t(6179),
                    n = t(7382),
                    i = t(3495);
                const a = ['children'];
                const o = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                i = Object.keys(u);
                            for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, a);
                    const o = (0, r.useContext)(i.Y),
                        s = o.extraLarge,
                        c = o.large,
                        l = o.medium,
                        E = o.small,
                        A = o.extraSmall,
                        F = o.extraLargeWidth,
                        d = o.largeWidth,
                        _ = o.mediumWidth,
                        D = o.smallWidth,
                        C = o.extraSmallWidth,
                        B = o.extraLargeHeight,
                        m = o.largeHeight,
                        g = o.mediumHeight,
                        h = o.smallHeight,
                        p = o.extraSmallHeight,
                        f = { extraLarge: B, large: m, medium: g, small: h, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return e;
                        if (t.large && c) return e;
                        if (t.medium && l) return e;
                        if (t.small && E) return e;
                        if (t.extraSmall && A) return e;
                    } else {
                        if (t.extraLargeWidth && F) return (0, n.H)(e, t, f);
                        if (t.largeWidth && d) return (0, n.H)(e, t, f);
                        if (t.mediumWidth && _) return (0, n.H)(e, t, f);
                        if (t.smallWidth && D) return (0, n.H)(e, t, f);
                        if (t.extraSmallWidth && C) return (0, n.H)(e, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return e;
                            if (t.largeHeight && m) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && h) return e;
                            if (t.extraSmallHeight && p) return e;
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
                (0, r.memo)(o);
            },
            7382: (u, e, t) => {
                t.d(e, { H: () => r });
                const r = (u, e, t) =>
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
                t.d(e, { YN: () => r.Y });
                t(6010), t(1039);
                var r = t(3495);
            },
            1043: (u, e, t) => {
                t.d(e, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (u, e, t) => {
                var r;
                function n(u, e, t) {
                    const r = (function (u, e) {
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
                        n = (function (u, e) {
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
                        i = Math.min(r, n);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
                }
                t.d(e, { T: () => n }),
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
                    })(r || (r = {}));
            },
            7078: (u, e, t) => {
                t.d(e, { t: () => s });
                var r = t(6179),
                    n = t.n(r),
                    i = t(2056);
                const a = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
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
                                r,
                                n = {},
                                i = Object.keys(u);
                            for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, a);
                    return n().createElement(
                        i.u,
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
                t.d(e, { l: () => c });
                var r = t(6179),
                    n = t.n(r),
                    i = t(7078),
                    a = t(6373),
                    o = t(2056);
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const c = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const r = n().createElement('div', { className: t }, u);
                    if (e.header || e.body) return n().createElement(a.i, e, r);
                    const c = e.contentId;
                    return c ? n().createElement(o.u, s({}, e, { contentId: c }), r) : n().createElement(i.t, e, r);
                };
            },
            6373: (u, e, t) => {
                t.d(e, { i: () => c });
                var r = t(2056),
                    n = t(6179),
                    i = t.n(n);
                const a = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    c = (u) => {
                        let e = u.children,
                            t = u.body,
                            c = u.header,
                            l = u.note,
                            E = u.alert,
                            A = u.args,
                            F = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    i = Object.keys(u);
                                for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, a);
                        const d = (0, n.useMemo)(() => {
                            const u = Object.assign({}, A, { body: t, header: c, note: l, alert: E });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [E, t, c, l, A]);
                        return i().createElement(
                            r.u,
                            o(
                                {
                                    contentId:
                                        ((_ = null == A ? void 0 : A.hasHtmlContent),
                                        _ ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                F,
                            ),
                            e,
                        );
                        var _;
                    };
            },
            2056: (u, e, t) => {
                t.d(e, { u: () => c });
                var r = t(7902),
                    n = t(9916),
                    i = t(6179);
                const a = [
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
                const s = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    c = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            c = u.onMouseEnter,
                            l = u.onMouseLeave,
                            E = u.onMouseDown,
                            A = u.onClick,
                            F = u.ignoreShowDelay,
                            d = void 0 !== F && F,
                            _ = u.ignoreMouseClick,
                            D = void 0 !== _ && _,
                            C = u.decoratorId,
                            B = void 0 === C ? 0 : C,
                            m = u.isEnabled,
                            g = void 0 === m || m,
                            h = u.targetId,
                            p = void 0 === h ? 0 : h,
                            f = u.onShow,
                            v = u.onHide,
                            b = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    i = Object.keys(u);
                                for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, a);
                        const w = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, i.useMemo)(() => p || (0, r.F)().resId, [p]),
                            x = (0, i.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(t, B, { isMouseEvent: !0, on: !0, arguments: o(n) }, y),
                                    f && f(),
                                    (w.current.isVisible = !0));
                            }, [t, B, n, y, f]),
                            k = (0, i.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const u = w.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (w.current.timeoutId = 0)),
                                        s(t, B, { on: !1 }, y),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, B, y, v]),
                            T = (0, i.useCallback)((u) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(w.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const u = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', T, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === g && k();
                            }, [g, k]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return g
                            ? (0, i.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(x, d ? 100 : 400)),
                                                      c && c(u),
                                                      L && L(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              k(), null == l || l(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === D && k(), null == A || A(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === D && k(), null == E || E(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : e;
                        var L;
                    };
            },
            8246: (u, e, t) => {
                t.d(e, { U: () => o });
                var r = t(3138);
                function n(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return i(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return i(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var r = 0;
                        return function () {
                            return r >= u.length ? { done: !0 } : { done: !1, value: u[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function i(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const a = (u) => (0 === u ? window : window.subViews.get(u));
                function o({ initializer: u = !0, rootId: e = 0, getRoot: t = a, context: i = 'model' } = {}) {
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
                    const c = (u) => {
                        const r = t(e),
                            n = i.split('.').reduce((u, e) => u[e], r);
                        return 'string' != typeof u || 0 === u.length
                            ? n
                            : u.split('.').reduce((u, e) => {
                                  const t = u[e];
                                  return 'function' == typeof t ? t.bind(u) : t;
                              }, n);
                    };
                    return {
                        subscribe: (t, n) => {
                            const a = 'string' == typeof n ? `${i}.${n}` : i,
                                s = r.O.view.addModelObserver(a, e, !0);
                            return o.set(s, t), u && t(c(n)), s;
                        },
                        readByPath: c,
                        createCallback: (u, e) => {
                            const t = c(e);
                            return (...e) => {
                                t(u(...e));
                            };
                        },
                        createCallbackNoArgs: (u) => {
                            const e = c(u);
                            return () => {
                                e();
                            };
                        },
                        dispose: function () {
                            for (var u, t = n(o.keys()); !(u = t()).done; ) {
                                s(u.value, e);
                            }
                        },
                        unsubscribe: s,
                    };
                }
            },
            3215: (u, e, t) => {
                t.d(e, { q: () => s });
                var r = t(4598),
                    n = t(9174),
                    i = t(6179),
                    a = t.n(i),
                    o = t(8246);
                const s = () => (u, e) => {
                    const t = (0, i.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: c, children: l, mocks: E }) {
                            const A = (0, i.useRef)([]),
                                F = (t, i, a) => {
                                    var s;
                                    const c = o.U(i),
                                        l =
                                            'real' === t
                                                ? c
                                                : Object.assign({}, c, {
                                                      readByPath:
                                                          null != (s = null == a ? void 0 : a.getter) ? s : () => {},
                                                  }),
                                        E = (u) =>
                                            'mocks' === t ? (null == a ? void 0 : a.getter(u)) : l.readByPath(u),
                                        F = (u) => A.current.push(u),
                                        d = u({
                                            mode: t,
                                            readByPath: E,
                                            externalModel: l,
                                            observableModel: {
                                                array: (u, e) => {
                                                    const i = null != e ? e : E(u),
                                                        a = n.LO.box(i, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            l.subscribe(
                                                                (0, n.aD)((u) => a.set(u)),
                                                                u,
                                                            ),
                                                        a
                                                    );
                                                },
                                                object: (u, e) => {
                                                    const i = null != e ? e : E(u),
                                                        a = n.LO.box(i, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            l.subscribe(
                                                                (0, n.aD)((u) => a.set(u)),
                                                                u,
                                                            ),
                                                        a
                                                    );
                                                },
                                                primitives: (u, e) => {
                                                    const r = E(e);
                                                    if (Array.isArray(u)) {
                                                        const i = u.reduce(
                                                            (u, e) => ((u[e] = n.LO.box(r[e], {})), u),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        u.forEach((u) => {
                                                                            i[u].set(e[u]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                    {
                                                        const i = u,
                                                            a = Object.entries(i),
                                                            o = a.reduce(
                                                                (u, [e, t]) => ((u[t] = n.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, n.aD)((u) => {
                                                                        a.forEach(([e, t]) => {
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
                                            cleanup: F,
                                        }),
                                        _ = { mode: t, model: d, externalModel: l, cleanup: F };
                                    return {
                                        model: d,
                                        controls: 'mocks' === t && a ? a.controls(_) : e(_),
                                        externalModel: l,
                                        mode: t,
                                    };
                                },
                                d = (0, i.useRef)(!1),
                                _ = (0, i.useState)(s),
                                D = _[0],
                                C = _[1],
                                B = (0, i.useState)(() => F(s, c, E)),
                                m = B[0],
                                g = B[1];
                            return (
                                (0, i.useEffect)(() => {
                                    d.current ? g(F(D, c, E)) : (d.current = !0);
                                }, [E, D, c]),
                                (0, i.useEffect)(() => {
                                    C(s);
                                }, [s]),
                                (0, i.useEffect)(
                                    () => () => {
                                        m.externalModel.dispose(), A.current.forEach((u) => u());
                                    },
                                    [m],
                                ),
                                a().createElement(t.Provider, { value: m }, l)
                            );
                        },
                        () => (0, i.useContext)(t),
                    ];
                };
            },
            7044: (u, e, t) => {
                t(3649), t(9916);
                var r = t(8613);
                Date.now(), r.Ew.getRegionalDateTime, r.Ew.getFormattedDateTime;
            },
            527: (u, e, t) => {
                t.r(e),
                    t.d(e, { mouse: () => l, off: () => s, on: () => o, onResize: () => i, onScaleUpdated: () => a });
                var r = t(2472),
                    n = t(1176);
                const i = (0, r.E)('clientResized'),
                    a = (0, r.E)('self.onScaleUpdated'),
                    o = (u, e) => engine.on(u, e),
                    s = (u, e) => engine.off(u, e),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const l = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${e}`,
                                        a = c[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, o),
                                        r(),
                                        () => {
                                            n &&
                                                (a(),
                                                window.removeEventListener(i, o),
                                                (u.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            (u.enabled = !1), r();
                        },
                        enable() {
                            (u.enabled = !0), r();
                        },
                        enableOutside() {
                            u.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => i,
                        graphicsQuality: () => o,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var r = t(527),
                    n = t(2493);
                function i(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                function r(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => r });
            },
            2493: (u, e, t) => {
                function r(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function n(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => n, G: () => r });
            },
            2472: (u, e, t) => {
                function r(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => r });
            },
            3138: (u, e, t) => {
                t.d(e, { O: () => i });
                var r = t(5959),
                    n = t(514);
                const i = { view: t(7641), client: r, sound: n.ZP };
            },
            514: (u, e, t) => {
                t.d(e, { ZP: () => a });
                var r = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(n).reduce((u, e) => ((u[e] = () => (0, r.playSound)(n[e])), u), {}),
                    a = { play: Object.assign({}, i, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (u, e, t) => {
                function r(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${r(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            6112: (u, e, t) => {
                t.d(e, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                t.d(e, { U: () => n });
                var r = t(2472);
                const n = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => l,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => b,
                        events: () => i.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getScale: () => D,
                        getSize: () => A,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => C,
                        remToPx: () => B,
                        resize: () => F,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => m,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => y,
                    });
                var r = t(3722),
                    n = t(6112),
                    i = t(6538),
                    a = t(8566);
                function o(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function c(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function l(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function E(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function d(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function C(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function m(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
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
                    y = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : i.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                t.d(e, { qP: () => c });
                const r = ['args'];
                const n = 2,
                    i = 16,
                    a = 32,
                    o = 64,
                    s = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const i = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        i = Object.keys(u);
                                    for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, r);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((n = i),
                                              Object.entries(n).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    c = {
                        close(u) {
                            s('popover' === u ? n : a);
                        },
                        minimize() {
                            s(o);
                        },
                        move(u) {
                            s(i, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            4598: (u, e, t) => {
                t.d(e, { jv: () => r });
                function r() {
                    return !1;
                }
                console.log;
            },
            7902: (u, e, t) => {
                t.d(e, { F: () => r });
                const r = (u = 1) => {
                    const e = new Error().stack;
                    let t,
                        r = R.invalid('resId');
                    return (
                        e &&
                            ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (r = window.subViews[t].id)),
                        { caller: t, stack: e, resId: r }
                    );
                };
            },
            2344: (u, e, t) => {
                t.d(e, { D9: () => n });
                var r = t(2790);
                t(3469), t(2133), t(579), t(5360), t(9056);
                const n = r.Z;
            },
            6536: (u, e, t) => {
                t(6179);
            },
            3469: (u, e, t) => {
                t(7044), t(6179);
            },
            2133: (u, e, t) => {
                t(6179);
            },
            5415: (u, e, t) => {
                t.d(e, { GS: () => c, cJ: () => a });
                var r = t(6179),
                    n = t(7739),
                    i = t(1043);
                let a, o, s;
                !(function (u) {
                    (u[(u.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = i.j.small.width)] = 'Small'),
                        (u[(u.Medium = i.j.medium.width)] = 'Medium'),
                        (u[(u.Large = i.j.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                })(a || (a = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = i.j.small.width)] = 'Small'),
                            (u[(u.Medium = i.j.medium.width)] = 'Medium'),
                            (u[(u.Large = i.j.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                    })(o || (o = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = i.j.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = i.j.small.height)] = 'Small'),
                            (u[(u.Medium = i.j.medium.height)] = 'Medium'),
                            (u[(u.Large = i.j.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = i.j.extraLarge.height)] = 'ExtraLarge');
                    })(s || (s = {}));
                const c = () => {
                    const u = (0, r.useContext)(n.YN),
                        e = u.width,
                        t = u.height,
                        i = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return a.ExtraLarge;
                                case u.large:
                                    return a.Large;
                                case u.medium:
                                    return a.Medium;
                                case u.small:
                                    return a.Small;
                                case u.extraSmall:
                                    return a.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), a.ExtraSmall;
                            }
                        })(u),
                        c = ((u) => {
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
                        l = ((u) => {
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
                    return { mediaSize: i, mediaWidth: c, mediaHeight: l, remScreenWidth: e, remScreenHeight: t };
                };
            },
            5360: (u, e, t) => {
                t(6536);
                var r = t(9916);
                t(6179);
                r.Sw.instance;
                let n;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(n || (n = {}));
            },
            9056: (u, e, t) => {
                var r = t(9916);
                t(6179);
                r.Sw.instance;
            },
            2790: (u, e, t) => {
                t.d(e, { Z: () => n });
                var r = t(6179);
                const n = (u, e) => {
                    const t = (0, r.useRef)();
                    return (
                        (0, r.useEffect)(() => {
                            (e && !e(u)) || (t.current = u);
                        }, [e, u]),
                        t.current
                    );
                };
            },
            4419: (u, e, t) => {
                t.d(e, { y: () => i });
                var r = t(8045),
                    n = t(6179);
                const i = (u, e, t = !0) => {
                    const i = (0, n.useCallback)(
                        (u) => {
                            const t = u[0];
                            e && e(t);
                        },
                        [e],
                    );
                    (0, n.useEffect)(() => {
                        if (!u.current || !t) return;
                        const e = new r.Z((u) => i(u));
                        return (
                            e.observe(u.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [i, t, u]);
                };
            },
            579: (u, e, t) => {
                t(3138), t(6179);
            },
            5521: (u, e, t) => {
                let r, n;
                t.d(e, { n: () => r }),
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
                            (u[(u.KEY_9 = 57)] = 'KEY_9');
                    })(r || (r = {})),
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
                    })(n || (n = {}));
            },
            9480: (u, e, t) => {
                t.d(e, { UI: () => r });
                function r(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, r) => e(null == u ? void 0 : u.value, t, r));
                }
            },
            3649: (u, e, t) => {
                t.d(e, { Eg: () => o, Uw: () => d, WU: () => i, dL: () => _, v2: () => n, z4: () => a });
                var r = t(1281);
                let n;
                function i(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(n || (n = {}));
                const a = (u) => u.replace(/&nbsp;/g, ' '),
                    o = (u) => u.replace(/&zwnbsp;/g, '\ufeff'),
                    s = (u, e, t) => {
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
                    l = (u, e, t = n.left) => u.split(e).reduce(t === n.left ? s : c, []),
                    E = (() => {
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
                    A = ['zh_cn', 'zh_sg', 'zh_tw'],
                    F = (u, e = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (A.includes(t)) return E(u);
                        if ('ja' === t) {
                            return (0, r.D4)()
                                .parse(u)
                                .map((u) => a(u));
                        }
                        return ((u, e = n.left) => {
                            let t = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                i = a(u);
                            return l(i, /( )/, e).forEach((u) => (t = t.concat(l(u, r, n.left)))), t;
                        })(u, e);
                    },
                    d = (u, e, t) => u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : F(u, e))),
                    _ = (u) => i(R.strings.common.percentValue(), { value: u });
            },
            1358: (u, e, t) => {
                t.d(e, { Z: () => i });
                var r = t(3138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = r.O.view.addModelObserver(u, t, n);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", u),
                            i
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(u, e);
                        });
                    }
                }
                n.__instance = void 0;
                const i = n;
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
            9916: (u, e, t) => {
                t.d(e, { Sw: () => i.Z, B3: () => s, Z5: () => a.Z5, B0: () => o, ry: () => C });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let r = u.target;
                                    do {
                                        if (r === e) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
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
                r.__instance = void 0;
                const n = r;
                var i = t(1358);
                var a = t(8613);
                let o;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    F = t(3138);
                const d = ['args'];
                function _(u, e, t, r, n, i, a) {
                    try {
                        var o = u[i](a),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(r, n);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
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
                                    return new Promise(function (r, n) {
                                        var i = u.apply(e, t);
                                        function a(u) {
                                            _(i, r, n, a, o, 'next', u);
                                        }
                                        function o(u) {
                                            _(i, r, n, a, o, 'throw', u);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        i = Object.keys(u);
                                    for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, d);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    m = () => B(o.CLOSE),
                    g = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var h = t(7572);
                const p = n.instance,
                    f = {
                        DataTracker: i.Z,
                        ViewModel: h.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: c,
                        TimeFormatType: l,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => B(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: m,
                        sendClosePopOverEvent: () => B(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), i) => {
                            const a = F.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                c = s.x,
                                l = s.y,
                                E = s.width,
                                A = s.height,
                                d = {
                                    x: F.O.view.pxToRem(c) + a.x,
                                    y: F.O.view.pxToRem(l) + a.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(A),
                                };
                            B(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: D(d),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, m);
                        },
                        handleViewEvent: B,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const n = Object.prototype.toString.call(e[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < n.length; e++) t[r].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (u, e, t) => {
                t.d(e, { Ew: () => i, Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    n = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    i = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            3618: (u, e, t) => {
                t.d(e, { w: () => F });
                var r = t(6483),
                    n = t.n(r),
                    i = t(3415),
                    a = t(4419),
                    o = t(6179),
                    s = t.n(o),
                    c = t(6143),
                    l = t(3310),
                    E = t(131),
                    A = t(9053);
                const F = s().memo(
                    ({
                        text: u,
                        classMix: e,
                        onSizeChanged: t,
                        binding: r,
                        isTooltipEnable: F = !1,
                        isTruncationAvailable: d = !1,
                        customTooltipArgs: _,
                        targetId: D,
                        justifyContent: C = A.v2.FlexStart,
                        alignContent: B = A.v2.FlexStart,
                        truncateIdentify: m = A.YA,
                    }) => {
                        const g = (0, o.useRef)(null),
                            h = (0, o.useRef)({ height: 0, width: 0 }),
                            p = (0, o.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            f = p[0],
                            v = p[1],
                            b = (0, o.useMemo)(() => (0, l.s)(u, r, { justifyContent: C }), [r, C, u]),
                            w = (0, o.useMemo)(() => {
                                if (F && f.isTruncated && (!r || !Object.values(r).find((u) => 'object' == typeof u)))
                                    return {
                                        args: Object.assign({ text: u }, _, {
                                            stringifyKwargs: r ? JSON.stringify(r) : '',
                                        }),
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: D,
                                    };
                            }, [r, F, D, u, _, f.isTruncated]),
                            y = (0, o.useCallback)(
                                (u) => {
                                    (h.current.width = u.contentRect.width), (h.current.height = u.contentRect.height);
                                    const e = (0, E.T)(g, b, h.current, m),
                                        r = e[0],
                                        n = e[1];
                                    v({ elementList: r, isTruncated: n, isTruncateFinished: !0 }), t && t(n);
                                },
                                [t, m, b],
                            ),
                            x = (0, o.useMemo)(() => ({ justifyContent: C, alignContent: B }), [B, C]);
                        return (
                            (0, a.y)(g, y, d),
                            s().createElement(
                                'div',
                                {
                                    className: n()(
                                        c.Z.base,
                                        e,
                                        c.Z.base__zeroPadding,
                                        d && c.Z.base__isTruncationAvailable,
                                    ),
                                    style: x,
                                },
                                s().createElement('div', { className: c.Z.unTruncated, ref: g }, b),
                                s().createElement(
                                    i.l,
                                    {
                                        tooltipArgs: w,
                                        className: n()(
                                            c.Z.tooltip,
                                            c.Z[`tooltip__justify-${C}`],
                                            c.Z[`tooltip__align-${B}`],
                                        ),
                                    },
                                    s().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                c.Z.truncated,
                                                !f.isTruncateFinished && d && c.Z.truncated__hide,
                                            ),
                                            style: x,
                                        },
                                        f.isTruncateFinished && d ? f.elementList : b,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (u, e, t) => {
                t.d(e, { s: () => F });
                var r = t(3649),
                    n = t(6799),
                    i = t(6960),
                    a = t(9053);
                const o = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    s = (u) => {
                        const e = [];
                        return (
                            (0, i.Z)(
                                u,
                                /\S\s+/g,
                                (u) => {
                                    var t;
                                    R.strings.settings.LANGUAGE_CODE().toLowerCase() === a.Co
                                        ? e.push(...((t = u), t.match(o) || []))
                                        : e.push(...u.split(''));
                                },
                                (u) => {
                                    e.push(u[0]);
                                },
                            ),
                            e
                        );
                    },
                    c = a.u6
                        ? (u) => {
                              const e = [];
                              return (
                                  (0, i.Z)(
                                      u,
                                      /[^a-zA-Z0-9]+/g,
                                      (u) => {
                                          e.push(u);
                                      },
                                      (u) => {
                                          e.push(...s(u[0]));
                                      },
                                  ),
                                  e
                              );
                          }
                        : (u, e) => {
                              const t = /[\s\u002d]/g;
                              let r = t.exec(u);
                              if (!r) return [u];
                              const n = [];
                              let i = 0;
                              for (; r; ) {
                                  const o = e.justifyContent === a.v2.FlexEnd ? r.index : t.lastIndex;
                                  n.push(u.slice(i, o)), (i = o), (r = t.exec(u));
                              }
                              return i !== u.length && n.push(u.slice(i)), n;
                          },
                    l = (u, e = '', t) => {
                        const r = [];
                        return (
                            (0, i.Z)(
                                u,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (u) => {
                                    r.push({ blockType: a.kH.Word, colorTag: e, childList: c(u, t) });
                                },
                                (u) => {
                                    const t = u[0],
                                        n = a.aF[t.charAt(0)];
                                    n === a.kH.LineBreak
                                        ? r.push(
                                              ...((u) => {
                                                  const e = [
                                                      {
                                                          blockType: a.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < u.length - 1; t++)
                                                      e.push({
                                                          blockType: a.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      });
                                                  return e;
                                              })(t),
                                          )
                                        : r.push({ blockType: n, colorTag: e, childList: [t] });
                                },
                            ),
                            r
                        );
                    },
                    E = (u, e, t = '', r) => {
                        const n = [];
                        return (
                            (0, i.Z)(
                                u,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (u) => {
                                    n.push(...l(u, t, r));
                                },
                                (u) => {
                                    const i = u[1],
                                        o = void 0 === e[i] ? u[0] : e[i];
                                    'string' == typeof o || 'number' == typeof o
                                        ? n.push(...l(String(o), t, r))
                                        : n.push({ blockType: a.kH.Binding, colorTag: t, childList: [o] });
                                },
                            ),
                            n
                        );
                    },
                    A = (u, e) => {
                        if (!u) return [e];
                        const t = [],
                            r = Object.assign({}, e, { childList: e.childList.splice(0, 1) });
                        if (u.blockType === a.kH.NoBreakWrapper) u.childList.push(r), t.push(u);
                        else {
                            const e = Object.assign({}, u, { childList: u.childList.splice(-1) });
                            u.childList.length > 0 && t.push(u),
                                t.push({ blockType: a.kH.NoBreakWrapper, colorTag: '', childList: [e, r] });
                        }
                        return e.childList.length > 0 && t.push(e), t;
                    },
                    F = (u, e = {}, t) => {
                        if (!u) return [];
                        const o = ((u) => {
                            const e = [];
                            let t = !1;
                            return (
                                u.forEach((u) => {
                                    u.blockType === a.kH.NoBreakSymbol
                                        ? ((t = !0), e.push(...A(e.pop(), u)))
                                        : (t ? e.push(...A(e.pop(), u)) : e.push(u), (t = !1));
                                }),
                                e
                            );
                        })(
                            ((u, e, t) => {
                                const r = [];
                                return (
                                    (0, i.Z)(
                                        u,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (u) => {
                                            r.push(...E(u, e, '', t));
                                        },
                                        (u) => {
                                            r.push(...E(u[2] + u[3], e, u[1], t));
                                        },
                                    ),
                                    r
                                );
                            })((0, r.Eg)((0, r.z4)(u)), e, t),
                        );
                        return (0, n.w)(o);
                    };
            },
            6799: (u, e, t) => {
                t.d(e, { w: () => a });
                var r = t(597),
                    n = t(9053);
                const i = (u, e, t) => {
                        const a = [];
                        return (
                            u.childList.forEach((o, s) => {
                                const c = `${t}_${s}`;
                                if ((0, n.dz)(o)) {
                                    const u = o,
                                        e = u.blockType,
                                        t = r.IY[e],
                                        n = i(u, t, c);
                                    a.push(...n);
                                } else a.push(e({ elementList: [o], textBlock: u, key: c }));
                            }),
                            a
                        );
                    },
                    a = (u) => {
                        const e = [];
                        return (
                            u.forEach((u, t) => {
                                e.push(
                                    ...((u, e) => {
                                        const t = [],
                                            a = u.blockType,
                                            o = r.IY[a],
                                            s = i(u, o, e);
                                        return (
                                            a === n.kH.NoBreakWrapper
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
                t.d(e, { Z: () => r });
                const r = (u, e, t, r) => {
                    let n = e.exec(u),
                        i = 0;
                    for (; n; ) i !== n.index && t(u.slice(i, n.index)), r(n), (i = e.lastIndex), (n = e.exec(u));
                    i !== u.length && t(u.slice(i));
                };
            },
            131: (u, e, t) => {
                t.d(e, { T: () => l });
                var r = t(6179),
                    n = t.n(r),
                    i = t(9053);
                const a = (u, e) => !u || u.offsetTop + u.offsetHeight > e,
                    o = (u, e) => u.offsetLeft + u.offsetWidth - e,
                    s = (u, e, t) => {
                        if (!u || !u.textContent) return [!1, 0];
                        if (u.offsetLeft > e) return [!1, 0];
                        const r = o(u, e),
                            n = u.textContent.length,
                            i = u.offsetWidth / n,
                            a = Math.ceil(r / i);
                        if (r > 0) {
                            const r = Math.floor((e - u.offsetLeft) / i);
                            return r >= t ? [!0, t + a] : [!1, r];
                        }
                        const s = Math.max(t + a, 0);
                        return n < s ? [!1, 0] : [!0, s];
                    },
                    c = (u, e, t, r, a, o) => {
                        let l = -1,
                            E = null;
                        for (let A = t; A >= 0; A--) {
                            const t = u[A],
                                F = Number(u[A].getAttribute(i.bF));
                            if (F === i.kH.LineBreak || F === i.kH.NewLine || F === i.kH.Binding) continue;
                            const d = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const u = s(t, r, a),
                                    i = u[0],
                                    c = u[1];
                                if (!i) {
                                    c > 0 && (a -= c);
                                    continue;
                                }
                                const F = d.slice(0, d.length - c) + o,
                                    _ = e[A];
                                (E = n().cloneElement(_, _.props, F)), (l = A);
                                break;
                            }
                            {
                                const u = t.children,
                                    i = e[A],
                                    s = i.props.children,
                                    F = c(u, s, u.length - 1, r, a, o),
                                    _ = F[0],
                                    D = F[1];
                                if (!(_ < 0)) {
                                    const u = s.slice(0, _);
                                    (E = n().cloneElement(i, i.props, u, D)), (l = A);
                                    break;
                                }
                                a -= d.length;
                            }
                        }
                        return [l, E];
                    },
                    l = (u, e, t, r = i.YA) => {
                        const n = [...e],
                            s = u.current;
                        if (!s) return [n, !1];
                        const l = t.height,
                            E = t.width,
                            A = s.lastElementChild;
                        if (!a(A, l) && o(A, E) <= 0) return [n, !1];
                        const F = s.children,
                            d = ((u, e) => {
                                let t = 0,
                                    r = u.length - 1;
                                for (; r - t >= 0; ) {
                                    const n = t + Math.ceil(0.5 * (r - t));
                                    a(u[n], e) ? (r = n - 1) : (t = n + 1);
                                }
                                return t - 1;
                            })(F, l);
                        if (d < 0) return [n, !1];
                        const _ = c(F, n, d, E, r.length, r),
                            D = _[0],
                            C = _[1];
                        return C && (n.splice(D, 1, C), n.splice(D + 1)), [n, !0];
                    };
            },
            9053: (u, e, t) => {
                let r, n, i;
                t.d(e, {
                    Co: () => l,
                    YA: () => o,
                    aF: () => c,
                    bF: () => s,
                    dz: () => a,
                    kH: () => r,
                    u6: () => E,
                    v2: () => n,
                }),
                    (function (u) {
                        (u[(u.Word = 0)] = 'Word'),
                            (u[(u.LineBreak = 1)] = 'LineBreak'),
                            (u[(u.NewLine = 2)] = 'NewLine'),
                            (u[(u.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (u[(u.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (u[(u.Binding = 5)] = 'Binding');
                    })(r || (r = {})),
                    (function (u) {
                        (u.FlexStart = 'flex-start'), (u.Center = 'center'), (u.FlexEnd = 'flex-end');
                    })(n || (n = {})),
                    (function (u) {
                        (u.NBSP = ' '), (u.ZWNBSP = '\ufeff'), (u.NEW_LINE = '\n');
                    })(i || (i = {}));
                const a = (u) => void 0 !== u.childList,
                    o = '...',
                    s = 'data-block-type',
                    c = { [i.NBSP]: r.NoBreakSymbol, [i.ZWNBSP]: r.NoBreakSymbol, [i.NEW_LINE]: r.LineBreak },
                    l = 'th',
                    E = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', l].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase());
            },
            597: (u, e, t) => {
                t.d(e, { IY: () => A });
                var r = t(6483),
                    n = t.n(r),
                    i = t(6179),
                    a = t.n(i),
                    o = t(9053),
                    s = t(9627),
                    c = t(7629);
                const l = (u) => ({ color: `#${u}` }),
                    E = ({ elementList: u, textBlock: e, key: t }) => {
                        const r = e.colorTag;
                        return r
                            ? s.Z[r]
                                ? a().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: n()(c.Z.word, s.Z[r]) },
                                      u,
                                  )
                                : a().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: c.Z.word, style: l(r) },
                                      u,
                                  )
                            : a().createElement(
                                  'span',
                                  { key: t, 'data-block-type': e.blockType, className: c.Z.word },
                                  u,
                              );
                    },
                    A = {
                        [o.kH.Word]: E,
                        [o.kH.NoBreakSymbol]: E,
                        [o.kH.Binding]: ({ elementList: u, textBlock: e, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': e.blockType },
                                u.map((u) => a().createElement(a().Fragment, { key: t }, u)),
                            ),
                        [o.kH.LineBreak]: ({ key: u }) =>
                            a().createElement('span', {
                                key: u,
                                'data-block-type': o.kH.LineBreak,
                                className: c.Z.lineBreak,
                            }),
                        [o.kH.NewLine]: ({ elementList: u, key: e }) =>
                            a().createElement(
                                'span',
                                { key: e, 'data-block-type': o.kH.NewLine, className: c.Z.newLine },
                                u,
                            ),
                        [o.kH.NoBreakWrapper]: ({ elementList: u, key: e }) =>
                            a().createElement(
                                'span',
                                { key: e, 'data-block-type': o.kH.NoBreakWrapper, className: c.Z.noBreakWrapper },
                                u,
                            ),
                    };
            },
            5298: (u, e, t) => {
                t.d(e, { l: () => n });
                var r = t(776);
                const n = (u, e) => ({
                    isEnabled: u !== r.f.absent,
                    args: e,
                    contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                    decoratorId:
                        u === r.f.normal ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId') : void 0,
                    ignoreShowDelay: u === r.f.backport,
                    ignoreMouseClick: !0,
                });
            },
            2768: (u, e, t) => {
                t.d(e, { F: () => s, y: () => c });
                var r = t(6483),
                    n = t.n(r),
                    i = t(6179),
                    a = t.n(i),
                    o = t(4458);
                let s;
                !(function (u) {
                    (u.c22x22 = 'c_22x22'),
                        (u.c24x24 = 'medium'),
                        (u.c36x36_flat = 'c_36x36_flat'),
                        (u.c52x52 = 'big'),
                        (u.c80x80 = 'c_80x80'),
                        (u.c120x90 = 'c_120x90'),
                        (u.c180x135 = 'dialogs');
                })(s || (s = {}));
                const c = a().memo(function ({ iconName: u, size: e = s.c24x24, className: t }) {
                    var r;
                    const i = null == (r = R.images.gui.maps.icons.tankmen.skills.$dyn(e)) ? void 0 : r.$dyn(u);
                    return a().createElement('div', {
                        style: null !== i ? { backgroundImage: `url(${i})` } : void 0,
                        className: n()(o.Z.base, o.Z[`base__${e}`], t),
                    });
                });
            },
            7160: (u, e, t) => {
                t.d(e, { qb: () => r });
                const r = (u) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);
            },
            8018: (u, e, t) => {
                t.d(e, { gO: () => n });
                t(771), t(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let r;
                !(function (u) {
                    (u.Objective = 'objective'), (u.Possessive = 'possessive');
                })(r || (r = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let n;
                !(function (u) {
                    (u.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (u.CREW_POST_PROGRESSION_START = 'crew_pb_start'),
                        (u.CREW_POST_PROGRESSION_STOP = 'crew_pb_stop'),
                        (u.CREW_POST_PROGRESSION_REWARD = 'crew_postprog_reward'),
                        (u.CREW_RETRAIN_DOWN = 'crew_retrain_down'),
                        (u.CREW_RETRAIN_UP = 'crew_retrain_up'),
                        (u.CREW_PROFILE_UPGRADE = 'crew_profile_upgrade'),
                        (u.CREW_POSTPROG_WIDGET = 'crew_postprog_widget'),
                        (u.CREW_UNLOCK_MAJOR_PERK_START = 'crew_unlock_major_perk_start'),
                        (u.CREW_UNLOCK_MAJOR_PERK_STOP = 'crew_unlock_major_perk_stop'),
                        (u.CREW_SETTING_UP_MAJOR_PERK = 'crew_setting_up_major_perk'),
                        (u.SHOP_INFO = 'shop_info'),
                        (u.RUDY = 'rudy');
                })(n || (n = {}));
                let i;
                !(function (u) {
                    (u.Normal = 'normal'), (u.Low = 'low'), (u.Untrained = 'untrained');
                })(i || (i = {}));
            },
            2206: (u, e, t) => {
                var r = t(6179),
                    n = t.n(r),
                    i = t(3215),
                    a = t(4598),
                    o = t(9480),
                    s = t(3946);
                const c = (0, i.q)()(
                        ({ observableModel: u }) => {
                            const e = { cardsList: u.array('cardsList', []) },
                                t = (0, s.Om)(
                                    () =>
                                        (0, o.UI)(e.cardsList.get(), (u) =>
                                            Object.assign({}, u, {
                                                price: Object.assign({}, u.price),
                                                cardTooltip: Object.assign({}, u.cardTooltip),
                                                priceTooltip: Object.assign({}, u.priceTooltip),
                                            }),
                                        ),
                                    { equals: a.jv },
                                );
                            return Object.assign({}, e, { computes: { cards: t } });
                        },
                        ({ externalModel: u }) => ({
                            onCardClick: u.createCallback((u) => ({ index: u }), 'onCardClick'),
                        }),
                    ),
                    l = c[0],
                    E = c[1];
                var A = t(6483),
                    F = t.n(A),
                    d = t(5415),
                    _ = t(3403),
                    D = t(3415);
                let C, B;
                !(function (u) {
                    (u.Default = 'default'), (u.Reset = 'reset'), (u.Retrain = 'retrain'), (u.Recruit = 'recruit');
                })(C || (C = {})),
                    (function (u) {
                        (u.Default = ''), (u.Disabled = 'disabled'), (u.Selected = 'selected');
                    })(B || (B = {}));
                var m = t(3138),
                    g = t(7030),
                    h = t(2344),
                    p = t(7160),
                    f = t(8018);
                const v = 'CustomComponents_storage_c8',
                    b = 'CustomComponents_storageIcon_2c',
                    w = 'CustomComponents_storageCount_9b',
                    y = 'CustomComponents_freeCrew_17',
                    x = 'CustomComponents_freeCrewLabel_7d',
                    k = (0, r.memo)(({ kwargs: u, cardType: e }) => {
                        if (e === C.Reset) {
                            const e = null == u ? void 0 : u.storageCount;
                            return void 0 === e
                                ? null
                                : n().createElement(
                                      'div',
                                      { className: v },
                                      n().createElement('div', { className: b }),
                                      n().createElement('div', { className: w }, e),
                                  );
                        }
                        if (e === C.Recruit) {
                            return (null == u ? void 0 : u.isFreeCrew)
                                ? n().createElement(
                                      'div',
                                      { className: y },
                                      n().createElement(
                                          'div',
                                          { className: x },
                                          R.strings.hangar.buyVehicleWindow.freeCrew(),
                                      ),
                                  )
                                : null;
                        }
                        return null;
                    });
                var T = t(3618),
                    L = t(9053);
                const S = {
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
                    bonusSkill: 'Description_bonusSkill_0d',
                    percentText: 'Description_percentText_01',
                    percentText__highlighted: 'Description_percentText__highlighted_1a',
                    resetPerksLayout: 'Description_resetPerksLayout_44',
                    resetPercentsText: 'Description_resetPercentsText_e1',
                    xpAmount: 'Description_xpAmount_28',
                    xpIcon: 'Description_xpIcon_0e',
                    resetPerksDescription: 'Description_resetPerksDescription_5f',
                    resetPerksDescription__withXpLoose: 'Description_resetPerksDescription__withXpLoose_86',
                };
                var P = t(2372),
                    O = t(280),
                    N = t(3649),
                    I = t(771);
                const M = n().memo(({ description: u, cardState: e, kwargs: t, className: r }) => {
                    const i = Number(t.value) < I.I;
                    return n().createElement(
                        'div',
                        { className: F()(S.base, S[`base__${e}`], r) },
                        i &&
                            n().createElement(T.w, {
                                text: R.strings.dialogs.perksReset.priceCard.xpLoose(),
                                classMix: S.resetPerksLayout,
                                binding: {
                                    percentAmount: n().createElement(
                                        'div',
                                        { className: F()(S.resetPercentsText) },
                                        (0, N.dL)(((a = t.value), -(I.I - Number(a)))),
                                    ),
                                    xpAmount: n().createElement(
                                        'div',
                                        { className: F()(S.xpAmount) },
                                        n().createElement(P.A, { value: Number(t.xpLossAmount) }),
                                        n().createElement('div', { className: S.xpIcon }),
                                    ),
                                },
                            }),
                        n().createElement(O.z, {
                            text: u,
                            classMix: F()(S.resetPerksDescription, i && S.resetPerksDescription__withXpLoose),
                        }),
                    );
                    var a;
                });
                var W = t(2768);
                const H = n().memo(({ description: u, cardState: e, kwargs: t, className: r }) =>
                    n().createElement(
                        'div',
                        { className: F()(S.base, S[`base__${e}`], r) },
                        n().createElement(
                            'div',
                            { className: S.bonusSkill },
                            n().createElement(W.y, { iconName: I.jw, size: W.F.c36x36_flat }),
                            n().createElement(
                                'div',
                                { className: F()(S.percentText, t.isHighlight && S.percentText__highlighted) },
                                (0, N.dL)(Number(t.value)),
                            ),
                        ),
                        u,
                    ),
                );
                let j;
                !(function (u) {
                    (u.None = 'none'), (u.Increase = 'increase'), (u.Decrease = 'decrease');
                })(j || (j = {}));
                const G = (u, e) => (u && e && u !== e ? (u > e ? j.Decrease : j.Increase) : j.None),
                    Z = n().memo(({ description: u, cardState: e, kwargs: t, className: r }) => {
                        const i = (0, h.D9)(t.value),
                            a = G(i, t.value),
                            o = (0, g.useSpring)({
                                from: { opacity: 0 },
                                to: [
                                    { opacity: 1, immediate: !0, delay: 450 },
                                    { opacity: 1, config: { duration: 250 } },
                                    { opacity: 0, config: { duration: 300 } },
                                ],
                            });
                        return n().createElement(
                            'div',
                            { className: F()(S.base, S[`base__${e}`], r) },
                            n().createElement(T.w, {
                                text: u,
                                justifyContent: L.v2.Center,
                                binding: {
                                    value: n().createElement(
                                        'div',
                                        {
                                            className: F()(
                                                S.efficiencyAfterRetrain,
                                                t.isHighlight && S.efficiencyAfterRetrain__highlighted,
                                                e === B.Selected && S.efficiencyAfterRetrain__selected,
                                            ),
                                        },
                                        n().createElement(
                                            'div',
                                            { className: S.efficiencyAfterRetrainValue },
                                            a !== j.None &&
                                                n().createElement(g.animated.div, {
                                                    style: o,
                                                    className: F()(
                                                        S.efficiencyAfterRetrainGlow,
                                                        S[`efficiencyAfterRetrainGlow__${a}`],
                                                    ),
                                                }),
                                            n().createElement(
                                                'div',
                                                { className: S.efficiencyAfterRetrainValuePercents },
                                                (0, N.dL)(Number(t.value)),
                                            ),
                                        ),
                                    ),
                                },
                            }),
                        );
                    }),
                    U = { [C.Reset.toString()]: M, [C.Recruit.toString()]: H, [C.Retrain.toString()]: Z },
                    V = (u) =>
                        U[u.cardType]
                            ? n().createElement(U[u.cardType], u)
                            : n().createElement(
                                  'div',
                                  { className: F()(S.base, u.className) },
                                  n().createElement(T.w, {
                                      text: u.description,
                                      justifyContent: L.v2.Center,
                                      binding: u.kwargs,
                                  }),
                              );
                var z = t(7405),
                    q = t(2056),
                    K = t(5298);
                const Y = 'Price_base_3c',
                    X = 'Price_base__withPrice_ef',
                    $ = 'Price_base__withTooltip_a2',
                    J = 'Price_resetCardPriceIcon_89',
                    Q = 'Price_recertificationPrice_b6';
                function uu() {
                    return (
                        (uu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        uu.apply(this, arguments)
                    );
                }
                const eu = ({
                        cost: u,
                        tooltip: e,
                        index: t,
                        tooltipRootId: r,
                        className: i,
                        isRecertification: a = !1,
                    }) => {
                        if (a)
                            return n().createElement(
                                'div',
                                { className: Q },
                                n().createElement('div', null, 1),
                                n().createElement('div', { className: J }),
                            );
                        if (u.value === u.discountValue && 0 === u.value && !u.isDiscount)
                            return n().createElement(
                                'div',
                                { className: F()(Y, i) },
                                R.strings.dialogs.priceCard.price.free(),
                            );
                        const o = (0, K.l)(e.type, { index: t });
                        return n().createElement(
                            'div',
                            { className: F()(Y, X, o.isEnabled && $, i) },
                            n().createElement(
                                q.u,
                                uu({}, o, { targetId: r }),
                                n().createElement(
                                    'div',
                                    null,
                                    n().createElement(z.F, uu({}, u, { isInteractiveDiscount: !0 })),
                                ),
                            ),
                        );
                    },
                    tu = {
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
                        description__recruit: 'PriceCard_description__recruit_60',
                        description__reset: 'PriceCard_description__reset_aa',
                        price: 'PriceCard_price_13',
                        price__specialDiscount: 'PriceCard_price__specialDiscount_12',
                        bottomGlow: 'PriceCard_bottomGlow_a3',
                    };
                let ru;
                !(function (u) {
                    (u.Big = 'big'), (u.Small = 'small');
                })(ru || (ru = {}));
                const nu = ({ header: u, body: e, contentId: t }, r, n) =>
                        t
                            ? { contentId: t, targetId: r, args: { index: n } }
                            : e || u
                              ? { header: u || void 0, body: e || void 0 }
                              : void 0,
                    iu = ({
                        onClick: u,
                        tooltipRootId: e,
                        priceTooltip: t,
                        cardTooltip: i,
                        index: a,
                        icon: o,
                        size: s = ru.Big,
                        title: c,
                        description: l,
                        cardType: E,
                        kwargs: A,
                        price: d,
                        cardState: _,
                        className: v,
                    }) => {
                        const b = _ === B.Default,
                            w = (0, r.useMemo)(() => (A ? JSON.parse(A) : {}), [A]),
                            y = (0, h.D9)(w.value),
                            x = G(y, w.value),
                            T = E === C.Reset && w.withSpecialDiscount,
                            L = E === C.Retrain && x !== j.None,
                            S = _ === B.Default && !T,
                            R = (0, g.useSpring)(() => {
                                const u = x === j.Increase ? -1 : 1;
                                return {
                                    from: { opacity: 1, y: 0 },
                                    to: [
                                        { opacity: 0, y: 30 * u },
                                        { y: -30 * u, immediate: !0 },
                                        { opacity: 1, y: 0 },
                                    ],
                                    config: { duration: 200, easing: p.qb },
                                };
                            }, [x])[0];
                        (0, r.useEffect)(() => {
                            x !== j.None &&
                                m.O.sound.play.sound(x === j.Increase ? f.gO.CREW_RETRAIN_UP : f.gO.CREW_RETRAIN_DOWN);
                        }, [x]);
                        const P = F()(tu.base, tu[`base__${s}`], tu[`base__${_}`], S && tu.base__hoverEnabled, v);
                        return n().createElement(
                            g.animated.div,
                            {
                                style: L ? R : void 0,
                                className: P,
                                onClick: () => {
                                    b && (m.O.sound.play.sound('play'), u(a));
                                },
                                onMouseEnter: () => b && m.O.sound.play.sound('highlight'),
                            },
                            _ === B.Disabled && n().createElement('div', { className: tu.disabledPattern }),
                            T && n().createElement('div', { className: tu.discountPattern }),
                            n().createElement('div', { className: tu.hoverRays }),
                            n().createElement('div', { className: tu.title }, c),
                            n().createElement('div', { className: tu.icon, style: { backgroundImage: `url(${o})` } }),
                            n().createElement(V, {
                                description: l,
                                cardType: E,
                                cardState: _,
                                kwargs: w,
                                className: F()(tu.description, tu[`description__${E}`]),
                            }),
                            n().createElement(
                                D.l,
                                { tooltipArgs: nu(i, e, a), className: tu.tooltip },
                                n().createElement('div', { className: tu.tooltipBox }),
                            ),
                            n().createElement(k, { cardType: E, kwargs: w }),
                            n().createElement(eu, {
                                cost: d,
                                tooltip: t,
                                index: a,
                                tooltipRootId: e,
                                className: F()(tu.price, T && tu.price__specialDiscount),
                                isRecertification: null == w ? void 0 : w.isRecertificationCard,
                            }),
                            T && n().createElement('div', { className: tu.bottomGlow }),
                        );
                    },
                    au = 'PriceListApp_base_7d',
                    ou = 'PriceListApp_card_6a';
                function su() {
                    return (
                        (su =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        su.apply(this, arguments)
                    );
                }
                const cu = (0, _.Pi)(function ({ rootId: u, className: e }) {
                    const t = E(),
                        r = t.model,
                        i = t.controls,
                        a = (0, d.GS)().mediaSize;
                    return n().createElement(
                        'div',
                        { className: F()(au, e) },
                        (0, o.UI)(r.computes.cards(), (e, t) =>
                            n().createElement(
                                iu,
                                su({}, e, {
                                    key: `${t}-${e.cardState}`,
                                    onClick: i.onCardClick,
                                    index: t,
                                    tooltipRootId: u,
                                    size: a > d.cJ.Small ? ru.Big : ru.Small,
                                    className: ou,
                                }),
                            ),
                        ),
                    );
                });
                n().memo(function ({ rootId: u = R.views.lobby.crew.widgets.PriceList('resId'), className: e }) {
                    const t = (0, r.useMemo)(() => ({ rootId: u }), [u]);
                    return n().createElement(l, { options: t }, n().createElement(cu, { rootId: u, className: e }));
                });
            },
            776: (u, e, t) => {
                let r;
                t.d(e, { f: () => r }),
                    (function (u) {
                        (u.backport = 'backport'), (u.normal = 'normal'), (u.absent = 'absent');
                    })(r || (r = {}));
            },
            771: (u, e, t) => {
                t.d(e, { I: () => r, jw: () => n });
                const r = 100,
                    n = 'new_skill';
                let i;
                !(function (u) {
                    (u.BlackReal = 'blackReal'),
                        (u.WhiteReal = 'whiteReal'),
                        (u.White = 'white'),
                        (u.WhiteOrange = 'whiteOrange'),
                        (u.WhiteSpanish = 'whiteSpanish'),
                        (u.Par = 'par'),
                        (u.ParSecondary = 'parSecondary'),
                        (u.ParTertiary = 'parTertiary'),
                        (u.Red = 'red'),
                        (u.RedDark = 'redDark'),
                        (u.Yellow = 'yellow'),
                        (u.Orange = 'orange'),
                        (u.Cream = 'cream'),
                        (u.Brown = 'brown'),
                        (u.GreenBright = 'greenBright'),
                        (u.Green = 'green'),
                        (u.GreenDark = 'greenDark'),
                        (u.BlueBooster = 'blueBooster'),
                        (u.BlueTeamkiller = 'blueTeamkiller'),
                        (u.Cred = 'cred'),
                        (u.Gold = 'gold'),
                        (u.Bond = 'bond'),
                        (u.Prom = 'prom');
                })(i || (i = {}));
            },
            8460: (u, e, t) => {
                t.d(e, { Z: () => r });
                const r = {
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
            5287: (u, e, t) => {
                t.d(e, { Z: () => r });
                const r = { base: 'FormatText_base_d0' };
            },
            6143: (u, e, t) => {
                t.d(e, { Z: () => r });
                const r = {
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
            9627: (u, e, t) => {
                t.d(e, { Z: () => r });
                const r = {
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
                t.d(e, { Z: () => r });
                const r = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                    word: 'renderers_word_f3',
                };
            },
            4458: (u, e, t) => {
                t.d(e, { Z: () => r });
                const r = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
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
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, r] = deferred[s], i = !0, a = 0; a < e.length; a++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[a]))
                            ? e.splice(a--, 1)
                            : ((i = !1), r < n && (n = r));
                    if (i) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, r];
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
        (__webpack_require__.j = 5897),
        (() => {
            var u = { 5897: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [i, a, o] = t,
                        s = 0;
                    if (i.some((e) => 0 !== u[e])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (e && e(t); s < i.length; s++)
                        (n = i[s]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(2206));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
