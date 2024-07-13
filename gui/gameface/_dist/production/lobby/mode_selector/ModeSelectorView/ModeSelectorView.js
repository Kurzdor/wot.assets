(() => {
    var __webpack_modules__ = {
            4090: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => l });
                var a = u(6483),
                    _ = u.n(a),
                    r = u(6179),
                    i = u.n(r);
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
                    },
                    s = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.size,
                        u = e.value,
                        a = e.isEmpty,
                        r = e.fadeInAnimation,
                        l = e.hide,
                        c = e.maximumNumber,
                        m = e.className,
                        d = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                _ = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                            return _;
                        })(e, s);
                    const b = a ? null : u,
                        E = 'string' == typeof b;
                    if ((b && !E && b < 0) || 0 === b) return null;
                    const g = b && !E && b > c,
                        A = _()(
                            n.base,
                            n[`base__${t}`],
                            r && n.base__animated,
                            l && n.base__hidden,
                            !b && n.base__pattern,
                            a && n.base__empty,
                            m,
                        );
                    return i().createElement(
                        'div',
                        o({ className: A }, d),
                        i().createElement('div', { className: n.bg }),
                        i().createElement('div', { className: n.pattern }),
                        i().createElement(
                            'div',
                            { className: _()(n.value, E && n.value__text) },
                            g ? c : b,
                            g && i().createElement('span', { className: n.plus }, '+'),
                        ),
                    );
                };
                l.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            280: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => o });
                var a = u(6483),
                    _ = u.n(a),
                    r = u(3649),
                    i = u(6179),
                    n = u.n(i),
                    s = u(5287);
                const o = ({
                    binding: e,
                    text: t = '',
                    classMix: u,
                    alignment: a = r.v2.left,
                    formatWithBrackets: o,
                }) => {
                    if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                    const l = o && e ? (0, r.WU)(t, e) : t;
                    return n().createElement(
                        i.Fragment,
                        null,
                        l.split('\n').map((t, o) =>
                            n().createElement(
                                'div',
                                { className: _()(s.Z.base, u), key: `${t}-${o}` },
                                (0, r.Uw)(t, a, e).map((e, t) =>
                                    n().createElement(i.Fragment, { key: `${t}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => c });
                var a = u(3138),
                    _ = u(6179),
                    r = u(1043),
                    i = u(5262);
                const n = a.O.client.getSize('rem'),
                    s = n.width,
                    o = n.height,
                    l = Object.assign({ width: s, height: o }, (0, i.T)(s, o, r.j)),
                    c = (0, _.createContext)(l);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => l });
                var a = u(3138),
                    _ = u(6536),
                    r = u(6179),
                    i = u.n(r),
                    n = u(3495),
                    s = u(1043),
                    o = u(5262);
                const l = ({ children: e }) => {
                    const t = (0, r.useContext)(n.Y),
                        u = (0, r.useState)(t),
                        l = u[0],
                        c = u[1],
                        m = (0, r.useCallback)((e, t) => {
                            const u = a.O.view.pxToRem(e),
                                _ = a.O.view.pxToRem(t);
                            c(Object.assign({ width: u, height: _ }, (0, o.T)(u, _, s.j)));
                        }, []),
                        d = (0, r.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            m(e.width, e.height);
                        }, [m]);
                    (0, _.Z)(() => {
                        a.O.client.events.on('clientResized', m), a.O.client.events.on('self.onScaleUpdated', d);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', m),
                                    a.O.client.events.off('self.onScaleUpdated', d);
                            },
                            [m, d],
                        );
                    const b = (0, r.useMemo)(() => Object.assign({}, l), [l]);
                    return i().createElement(n.Y.Provider, { value: b }, e);
                };
            },
            6010: (e, t, u) => {
                'use strict';
                var a = u(6179),
                    _ = u(7382),
                    r = u(3495);
                const i = ['children'];
                const n = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                _ = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                            return _;
                        })(e, i);
                    const n = (0, a.useContext)(r.Y),
                        s = n.extraLarge,
                        o = n.large,
                        l = n.medium,
                        c = n.small,
                        m = n.extraSmall,
                        d = n.extraLargeWidth,
                        b = n.largeWidth,
                        E = n.mediumWidth,
                        g = n.smallWidth,
                        A = n.extraSmallWidth,
                        C = n.extraLargeHeight,
                        F = n.largeHeight,
                        D = n.mediumHeight,
                        B = n.smallHeight,
                        p = n.extraSmallHeight,
                        h = { extraLarge: C, large: F, medium: D, small: B, extraSmall: p };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && s) return t;
                        if (u.large && o) return t;
                        if (u.medium && l) return t;
                        if (u.small && c) return t;
                        if (u.extraSmall && m) return t;
                    } else {
                        if (u.extraLargeWidth && d) return (0, _.H)(t, u, h);
                        if (u.largeWidth && b) return (0, _.H)(t, u, h);
                        if (u.mediumWidth && E) return (0, _.H)(t, u, h);
                        if (u.smallWidth && g) return (0, _.H)(t, u, h);
                        if (u.extraSmallWidth && A) return (0, _.H)(t, u, h);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && C) return t;
                            if (u.largeHeight && F) return t;
                            if (u.mediumHeight && D) return t;
                            if (u.smallHeight && B) return t;
                            if (u.extraSmallHeight && p) return t;
                        }
                    }
                    return null;
                };
                n.defaultProps = {
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
                (0, a.memo)(n);
            },
            7382: (e, t, u) => {
                'use strict';
                u.d(t, { H: () => a });
                const a = (e, t, u) =>
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
                u.d(t, { YN: () => _.Y, ZN: () => a.Z });
                u(6010);
                var a = u(1039),
                    _ = u(3495);
            },
            1043: (e, t, u) => {
                'use strict';
                u.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, u) => {
                'use strict';
                var a;
                function _(e, t, u) {
                    const a = (function (e, t) {
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
                        _ = (function (e, t) {
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
                        r = Math.min(a, _);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: a === u.extraLarge.weight,
                        largeWidth: a === u.large.weight,
                        mediumWidth: a === u.medium.weight,
                        smallWidth: a === u.small.weight,
                        extraSmallWidth: a === u.extraSmall.weight,
                        extraLargeHeight: _ === u.extraLarge.weight,
                        largeHeight: _ === u.large.weight,
                        mediumHeight: _ === u.medium.weight,
                        smallHeight: _ === u.small.weight,
                        extraSmallHeight: _ === u.extraSmall.weight,
                    };
                }
                u.d(t, { T: () => _, u: () => a }),
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
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => s });
                var a = u(6179),
                    _ = u.n(a),
                    r = u(2056);
                const i = ['children'];
                function n() {
                    return (
                        (n =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        n.apply(this, arguments)
                    );
                }
                const s = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                _ = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                            return _;
                        })(e, i);
                    return _().createElement(
                        r.u,
                        n(
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
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => o });
                var a = u(2056),
                    _ = u(6179),
                    r = u.n(_);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function n() {
                    return (
                        (n =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        n.apply(this, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    o = (e) => {
                        let t = e.children,
                            u = e.body,
                            o = e.header,
                            l = e.note,
                            c = e.alert,
                            m = e.args,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, i);
                        const b = (0, _.useMemo)(() => {
                            const e = Object.assign({}, m, { body: u, header: o, note: l, alert: c });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [c, u, o, l, m]);
                        return r().createElement(
                            a.u,
                            n(
                                {
                                    contentId:
                                        ((E = null == m ? void 0 : m.hasHtmlContent),
                                        E ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: b,
                                },
                                d,
                            ),
                            t,
                        );
                        var E;
                    };
            },
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => o });
                var a = u(7902),
                    _ = u(9916),
                    r = u(6179);
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
                function n(e) {
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
                const s = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: _.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    o = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            _ = e.args,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onClick,
                            d = e.ignoreShowDelay,
                            b = void 0 !== d && d,
                            E = e.ignoreMouseClick,
                            g = void 0 !== E && E,
                            A = e.decoratorId,
                            C = void 0 === A ? 0 : A,
                            F = e.isEnabled,
                            D = void 0 === F || F,
                            B = e.targetId,
                            p = void 0 === B ? 0 : B,
                            h = e.onShow,
                            v = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, i);
                        const x = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, r.useMemo)(() => p || (0, a.F)().resId, [p]),
                            S = (0, r.useCallback)(() => {
                                (x.current.isVisible && x.current.timeoutId) ||
                                    (s(u, C, { isMouseEvent: !0, on: !0, arguments: n(_) }, w),
                                    h && h(),
                                    (x.current.isVisible = !0));
                            }, [u, C, _, w, h]),
                            N = (0, r.useCallback)(() => {
                                if (x.current.isVisible || x.current.timeoutId) {
                                    const e = x.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (x.current.timeoutId = 0)),
                                        s(u, C, { on: !1 }, w),
                                        x.current.isVisible && v && v(),
                                        (x.current.isVisible = !1);
                                }
                            }, [u, C, w, v]),
                            k = (0, r.useCallback)((e) => {
                                x.current.isVisible &&
                                    ((x.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (x.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(x.current.prevTarget) && N();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = x.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', k, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', k, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === D && N();
                            }, [D, N]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', N),
                                    () => {
                                        window.removeEventListener('mouseleave', N), N();
                                    }
                                ),
                                [N],
                            );
                        return D
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((x.current.timeoutId = window.setTimeout(S, b ? 100 : 400)),
                                                      o && o(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              N(), null == l || l(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === g && N(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === g && N(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var y;
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
            527: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, { mouse: () => l, off: () => s, on: () => n, onResize: () => r, onScaleUpdated: () => i });
                var a = u(2472),
                    _ = u(1176);
                const r = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    n = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
                    o = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const l = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, _.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, _.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : (0, _.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let _ = !0;
                                    const r = `mouse${t}`,
                                        i = o[t]((e) => u([e, 'outside']));
                                    function n(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, n),
                                        a(),
                                        () => {
                                            _ &&
                                                (i(),
                                                window.removeEventListener(r, n),
                                                (e.listeners -= 1),
                                                a(),
                                                (_ = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
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
                            e.enabled && (0, _.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, _.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => n,
                        playSound: () => _.G,
                        setRTPC: () => _.E,
                    });
                var a = u(527),
                    _ = u(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const n = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => a });
            },
            2493: (e, t, u) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function _(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => _, G: () => a });
            },
            2472: (e, t, u) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => a });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => r });
                var a = u(5959),
                    _ = u(514);
                const r = { view: u(7641), client: a, sound: _.ZP };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => i });
                var a = u(5959);
                const _ = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(_).reduce((e, t) => ((e[t] = () => (0, a.playSound)(_[t])), e), {}),
                    i = { play: Object.assign({}, r, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function a(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function _(e, t, u) {
                    return `url(${a(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => _, getTextureUrl: () => a });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => _ });
                var a = u(2472);
                const _ = {
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
            7641: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => l,
                        addPreloadTexture: () => n,
                        children: () => a,
                        displayStatus: () => _.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => h,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => o,
                        getDisplayStatus: () => v,
                        getScale: () => g,
                        getSize: () => m,
                        getViewGlobalPosition: () => b,
                        isEventHandled: () => p,
                        isFocused: () => D,
                        pxToRem: () => A,
                        remToPx: () => C,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => w,
                    });
                var a = u(3722),
                    _ = u(6112),
                    r = u(6538),
                    i = u(8566);
                function n(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function o(e, t, u, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, a);
                }
                function l(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function b(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: C(t.x), y: C(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function A(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function D() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function h() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(_.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === _.W[t]), e),
                        {},
                    ),
                    x = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => o });
                const a = ['args'];
                const _ = 2,
                    r = 16,
                    i = 32,
                    n = 64,
                    s = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        _ = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                    return _;
                                })(t, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
                                          arguments:
                                              ((_ = r),
                                              Object.entries(_).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var _;
                    },
                    o = {
                        close(e) {
                            s('popover' === e ? _ : i);
                        },
                        minimize() {
                            s(n);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            7902: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => a });
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let u,
                        a = R.invalid('resId');
                    return (
                        t &&
                            ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== u &&
                                window.subViews[u] &&
                                (a = window.subViews[u].id)),
                        { caller: u, stack: t, resId: a }
                    );
                };
            },
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => _ });
                var a = u(6179);
                const _ = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            9924: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => o });
                var a = u(6483),
                    _ = u.n(a),
                    r = u(7739),
                    i = u(5262),
                    n = u(6179),
                    s = u(3649);
                function o(e, t, u) {
                    const a = (0, n.useContext)(r.YN);
                    let o = Object.entries(a).filter(([e, t]) => !0 === t && e in i.u);
                    return (
                        u && (o = o.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const a = o.map((e) =>
                                _()(t[((e, t) => e + '__' + t)(u, e[0])], t[((e, t) => e + (0, s.e)(t))(u, e[0])]),
                            );
                            return (e[u] = _()(t[u], ...a)), e;
                        }, {})
                    );
                }
            },
            5521: (e, t, u) => {
                'use strict';
                let a, _;
                u.d(t, { n: () => a }),
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
                    })(_ || (_ = {}));
            },
            3649: (e, t, u) => {
                'use strict';
                u.d(t, { Uw: () => E, WU: () => r, e: () => n, uF: () => i, v2: () => _, z4: () => s });
                var a = u(1281);
                let _;
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function i(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function n(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(_ || (_ = {}));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
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
                    c = (e, t, u = _.left) => e.split(t).reduce(u === _.left ? o : l, []),
                    m = (() => {
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
                    b = (e, t = _.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (d.includes(u)) return m(e);
                        if ('ja' === u) {
                            return (0, a.D4)()
                                .parse(e)
                                .map((e) => s(e));
                        }
                        return ((e, t = _.left) => {
                            let u = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = s(e);
                            return c(r, /( )/, t).forEach((e) => (u = u.concat(c(e, a, _.left)))), u;
                        })(e, t);
                    },
                    E = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : b(e, t)));
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var a = u(3138);
                class _ {
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
                        return window.__dataTracker || (window.__dataTracker = new _()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, u = 0, _ = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, u, _);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                            const a = this._callbacks[u];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                _.__instance = void 0;
                const r = _;
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
            9916: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Sw: () => r.Z,
                    B3: () => s,
                    Gr: () => o,
                    Z5: () => i.Z5,
                    B0: () => n,
                    wU: () => h,
                    ry: () => A,
                    Eu: () => C,
                    Sy: () => D,
                    SW: () => B,
                    P3: () => p,
                });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    u();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const u = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== a)),
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
                const _ = a;
                var r = u(1358);
                var i = u(8613);
                let n;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(n || (n = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(5521),
                    d = u(3138);
                const b = ['args'];
                function E(e, t, u, a, _, r, i) {
                    try {
                        var n = e[r](i),
                            s = n.value;
                    } catch (e) {
                        return void u(e);
                    }
                    n.done ? t(s) : Promise.resolve(s).then(a, _);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    A = (function () {
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
                                    return new Promise(function (a, _) {
                                        var r = e.apply(t, u);
                                        function i(e) {
                                            E(r, a, _, i, n, 'next', e);
                                        }
                                        function n(e) {
                                            E(r, a, _, i, n, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
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
                    F = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const _ = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        _ = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                    return _;
                                })(t, b);
                            void 0 !== _
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = _),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    D = () => F(n.CLOSE),
                    B = () => F(n.POP_OVER, { on: !1 }),
                    p = (e, t, u, a, _ = R.invalid('resId'), r) => {
                        const i = d.O.view.getViewGlobalPosition(),
                            s = u.getBoundingClientRect(),
                            o = s.x,
                            l = s.y,
                            c = s.width,
                            m = s.height,
                            b = {
                                x: d.O.view.pxToRem(o) + i.x,
                                y: d.O.view.pxToRem(l) + i.y,
                                width: d.O.view.pxToRem(c),
                                height: d.O.view.pxToRem(m),
                            };
                        F(n.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: _,
                            direction: t,
                            bbox: g(b),
                            on: !0,
                            args: r,
                        });
                    },
                    h = () => viewEnv.isWindowShownByViewEvent(n.POP_OVER),
                    v = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var f = u(7572);
                const x = _.instance,
                    w = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: n,
                        NumberFormatType: s,
                        RealFormatType: o,
                        TimeFormatType: l,
                        DateFormatType: c,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => F(n.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: B,
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            F(n.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: p,
                        addEscapeListener: (e) => {
                            const t = (t) => v(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            v(e, D);
                        },
                        handleViewEvent: F,
                        onBindingsReady: A,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(n.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(n.CONTEXT_MENU),
                        isPopOverShown: h,
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const _ = Object.prototype.toString.call(t[a]);
                                    if (_.startsWith('[object CoherentArrayProxy]')) {
                                        const _ = t[a];
                                        u[a] = [];
                                        for (let t = 0; t < _.length; t++) u[a].push({ value: e(_[t].value) });
                                    } else
                                        _.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[a] = e(t[a]))
                                            : (u[a] = t[a]);
                                }
                            return u;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = w;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => a, cy: () => _ });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    _ = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            9905: (e, t, u) => {
                'use strict';
                var a = u(3138),
                    _ = u(7739),
                    r = u(6179),
                    i = u.n(r),
                    n = u(6483),
                    s = u.n(n),
                    o = u(926),
                    l = u.n(o),
                    c = u(1043);
                let m, d, b;
                !(function (e) {
                    (e[(e.ExtraSmall = c.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = c.j.small.width)] = 'Small'),
                        (e[(e.Medium = c.j.medium.width)] = 'Medium'),
                        (e[(e.Large = c.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = c.j.extraLarge.width)] = 'ExtraLarge');
                })(m || (m = {})),
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
                    })(b || (b = {}));
                const E = () => {
                        const e = (0, r.useContext)(_.YN),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return m.ExtraLarge;
                                    case e.large:
                                        return m.Large;
                                    case e.medium:
                                        return m.Medium;
                                    case e.small:
                                        return m.Small;
                                    case e.extraSmall:
                                        return m.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), m.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
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
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return b.ExtraLarge;
                                    case e.largeHeight:
                                        return b.Large;
                                    case e.mediumHeight:
                                        return b.Medium;
                                    case e.smallHeight:
                                        return b.Small;
                                    case e.extraSmallHeight:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: n, remScreenWidth: t, remScreenHeight: u };
                    },
                    g = ['children', 'className'];
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        A.apply(this, arguments)
                    );
                }
                const C = {
                        [d.ExtraSmall]: '',
                        [d.Small]: l().SMALL_WIDTH,
                        [d.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [d.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [d.ExtraLarge]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    F = {
                        [b.ExtraSmall]: '',
                        [b.Small]: l().SMALL_HEIGHT,
                        [b.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [b.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    D = {
                        [m.ExtraSmall]: '',
                        [m.Small]: l().SMALL,
                        [m.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [m.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [m.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    B = (e) => {
                        let t = e.children,
                            u = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, g);
                        const _ = E(),
                            r = _.mediaWidth,
                            n = _.mediaHeight,
                            o = _.mediaSize;
                        return i().createElement('div', A({ className: s()(u, C[r], F[n], D[o]) }, a), t);
                    },
                    p = ['children'];
                const h = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                _ = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                            return _;
                        })(e, p);
                    return i().createElement(_.ZN, null, i().createElement(B, u, t));
                };
                var v = u(493),
                    f = u.n(v);
                function x(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const w = {
                        playHighlight() {
                            x('highlight');
                        },
                        playClick() {
                            x('play');
                        },
                        playYes() {
                            x('yes1');
                        },
                    },
                    S = {
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
                let N, k;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(N || (N = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(k || (k = {}));
                const y = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: a,
                    disabled: _,
                    mixClass: n,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: m,
                    onMouseDown: d,
                    onMouseUp: b,
                    onMouseLeave: E,
                    onClick: g,
                }) => {
                    const A = (0, r.useRef)(null),
                        C = (0, r.useState)(u),
                        F = C[0],
                        D = C[1],
                        B = (0, r.useState)(!1),
                        p = B[0],
                        h = B[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                F && null !== A.current && !A.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [F]),
                        (0, r.useEffect)(() => {
                            D(u);
                        }, [u]),
                        i().createElement(
                            'div',
                            {
                                ref: A,
                                className: s()(
                                    S.base,
                                    S[`base__${a}`],
                                    _ && S.base__disabled,
                                    t && S[`base__${t}`],
                                    F && S.base__focus,
                                    p && S.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    _ || (null !== o && x(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    m && m(e);
                                },
                                onMouseUp: function (e) {
                                    _ || (b && b(e), h(!1));
                                },
                                onMouseDown: function (e) {
                                    _ ||
                                        (null !== l && x(l),
                                        d && d(e),
                                        u && (_ || (A.current && (A.current.focus(), D(!0)))),
                                        h(!0));
                                },
                                onMouseLeave: function (e) {
                                    _ || (E && E(e), h(!1));
                                },
                                onClick: function (e) {
                                    _ || (g && g(e));
                                },
                            },
                            a !== N.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: S.back }),
                                    i().createElement('span', { className: S.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: s()(S.state, S.state__default) },
                                i().createElement('span', { className: S.stateDisabled }),
                                i().createElement('span', { className: S.stateHighlightHover }),
                                i().createElement('span', { className: S.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: S.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                y.defaultProps = { type: N.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const W = y,
                    T = {
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
                    L = [
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
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                }
                class M extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && x(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && x(this.props.soundClick);
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
                            a = e.goto,
                            _ = e.side,
                            r = e.type,
                            n = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        _ = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                    return _;
                                })(e, L)),
                            b = s()(T.base, T[`base__${r}`], T[`base__${_}`], null == n ? void 0 : n.base),
                            E = s()(T.icon, T[`icon__${r}`], T[`icon__${_}`], null == n ? void 0 : n.icon),
                            g = s()(T.glow, null == n ? void 0 : n.glow),
                            A = s()(T.caption, T[`caption__${r}`], null == n ? void 0 : n.caption),
                            C = s()(T.goto, null == n ? void 0 : n.goto);
                        return i().createElement(
                            'div',
                            P(
                                {
                                    className: b,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                d,
                            ),
                            'info' !== r && i().createElement('div', { className: T.shine }),
                            i().createElement('div', { className: E }, i().createElement('div', { className: g })),
                            i().createElement('div', { className: A }, t),
                            a && i().createElement('div', { className: C }, a),
                        );
                    }
                }
                M.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var I = u(6373);
                var O = u(3649),
                    $ = u(9916),
                    H = u(8613);
                const z = 60,
                    U = 3600,
                    V = 86400;
                Date.now(), H.Ew.getRegionalDateTime, H.Ew.getFormattedDateTime;
                const j = () => {},
                    q = (e = 0, t, u = 0, a = j) => {
                        const _ = (0, r.useState)(e),
                            i = _[0],
                            n = _[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e > 0) {
                                    n(e);
                                    const _ = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - _) / 1e3);
                                                null !== u && t <= u ? (n(u), a && a(), clearInterval(r)) : n(t);
                                            },
                                            1e3 * (t || (e > 120 ? z : 1)),
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, t, u, a]),
                            i
                        );
                    };
                var G = u(7902);
                const Z = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var Y = u(6536);
                const K = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    X = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    J = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const a = Z(`${e}.${u}`, window);
                                return K(a) ? t(e, u, a) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    Q = (e) => {
                        const t = ((e) => {
                                const t = (0, G.F)(),
                                    u = t.caller,
                                    a = t.resId,
                                    _ = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: _, modelPath: X(_, e || ''), resId: a };
                            })(),
                            u = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const _ = Z(X(u, `${t}.${a}`), window);
                                    return K(_) ? (e.push(_.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    ee = $.Sw.instance;
                let te;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(te || (te = {}));
                const ue = (e = 'model', t = te.Deep) => {
                        const u = (0, r.useState)(0),
                            a = (u[0], u[1]),
                            _ = (0, r.useMemo)(() => (0, G.F)(), []),
                            i = _.caller,
                            n = _.resId,
                            s = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                                [i, e],
                            ),
                            o = (0, r.useState)(() =>
                                ((e) => {
                                    const t = Z(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return K(t) ? t.value : t;
                                })(J(s)),
                            ),
                            l = o[0],
                            c = o[1],
                            m = (0, r.useRef)(-1);
                        return (
                            (0, Y.Z)(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? te.Deep : te.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== te.None)
                                ) {
                                    const u = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === te.Deep
                                                ? (e === l && a((e) => e + 1), c(e))
                                                : c(Object.assign([], e));
                                        },
                                        _ = Q(e);
                                    m.current = ee.addCallback(_, u, n, t === te.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (t !== te.None)
                                    return () => {
                                        ee.removeCallback(m.current, n);
                                    };
                            }, [n, t]),
                            l
                        );
                    },
                    ae = ($.Sw.instance, q);
                var _e = u(5521);
                const re = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ie(e = _e.n.NONE, t = re, u = !1, _ = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== _e.n.NONE)
                            return (
                                window.addEventListener('keydown', r, u),
                                () => {
                                    window.removeEventListener('keydown', r, u);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!_ && a.O.view.isEventHandled()) return;
                                a.O.view.setEventHandled(), t(r), u && r.stopPropagation();
                            }
                        }
                    }, [t, e, u, _]);
                }
                function ne() {
                    !(function (e = _e.n.ESCAPE) {
                        ie(e, $.Sy, !0);
                    })(_e.n.ESCAPE);
                }
                var se = u(9924),
                    oe = u(3486);
                let le;
                !(function (e) {
                    (e.DISABLED = 'disabled'), (e.ACTIVE = 'active');
                })(le || (le = {}));
                var ce = u(2646),
                    me = u(4194),
                    de = u(3872),
                    be = u(7663),
                    Ee = u(5611);
                let ge;
                !(function (e) {
                    (e[(e.NONE = 0)] = 'NONE'), (e[(e.STATIC = 1)] = 'STATIC'), (e[(e.NEW = 2)] = 'NEW');
                })(ge || (ge = {}));
                var Ae = u(7078),
                    Ce = u(2056);
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const De = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const a = i().createElement('div', { className: u }, e);
                    if (t.header || t.body) return i().createElement(I.i, t, a);
                    const _ = t.contentId;
                    return _ ? i().createElement(Ce.u, Fe({}, t, { contentId: _ }), a) : i().createElement(Ae.t, t, a);
                };
                var Be = u(8188),
                    pe = u(9930),
                    he = u(4090);
                const ve = {
                        base: 'CardWrapper_base_b7',
                        base__disabled: 'CardWrapper_base__disabled_4f',
                        base__isNotStarted: 'CardWrapper_base__isNotStarted_29',
                        mask: 'CardWrapper_mask_f7',
                        border: 'CardWrapper_border_a3',
                        hover: 'CardWrapper_hover_af',
                        hover__anim: 'CardWrapper_hover__anim_10',
                        animBg: 'CardWrapper_animBg_f3',
                        animBg__wide: 'CardWrapper_animBg__wide_16',
                        selection: 'CardWrapper_selection_35',
                        check: 'CardWrapper_check_c1',
                        check__extraSmall: 'CardWrapper_check__extraSmall_fa',
                        check__small: 'CardWrapper_check__small_33',
                        checkBackground: 'CardWrapper_checkBackground_bd',
                        checkBackground__extraSmall: 'CardWrapper_checkBackground__extraSmall_ff',
                        checkBackground__small: 'CardWrapper_checkBackground__small_d8',
                        disabling: 'CardWrapper_disabling_63',
                        background: 'CardWrapper_background_34',
                        background__anim: 'CardWrapper_background__anim_34',
                        background__empty: 'CardWrapper_background__empty_bb',
                        novelty: 'CardWrapper_novelty_ae',
                        info: 'CardWrapper_info_49',
                        info__anim: 'CardWrapper_info__anim_81',
                        info__extraSmall: 'CardWrapper_info__extraSmall_fc',
                        info__small: 'CardWrapper_info__small_9c',
                        info__medium: 'CardWrapper_info__medium_9f',
                        infoCorner: 'CardWrapper_infoCorner_49',
                        infoCorner__anim: 'CardWrapper_infoCorner__anim_ba',
                        children: 'CardWrapper_children_88',
                    },
                    fe = ({
                        index: e,
                        size: t,
                        isSelected: u,
                        isDisabled: a,
                        isNew: _ = !1,
                        isInfoIconVisible: n,
                        resourcesFolderName: o,
                        children: l,
                        onHoverChanged: c,
                        onItemClicked: m,
                        onInfoClicked: d,
                        resourceFolderGetter: b,
                        id: E,
                        modeName: g,
                        isNotStarted: A,
                    }) => {
                        const C = (0, pe.O)(),
                            F = (0, r.useCallback)(
                                (t) => {
                                    t.stopPropagation(), w.playYes(), d({ index: e });
                                },
                                [d, e],
                            ),
                            D = (0, pe.B)(c),
                            B = D[0],
                            p = D[1],
                            h = (0, r.useCallback)(() => {
                                x(
                                    [oe.Id.B4, oe.Id.B5, oe.Id.B6].includes(t)
                                        ? 'ev_mode_selector_hover_simple'
                                        : 'ev_mode_selector_hover',
                                ),
                                    p(!0);
                            }, [p, t]),
                            v = (0, r.useCallback)(() => {
                                p(!1);
                            }, [p]),
                            f = (0, se.Z)(['info', 'check', 'checkBackground'], ve),
                            S = C !== oe.Cg.Big;
                        let N;
                        const k = b(o);
                        if (null !== k) {
                            const e = k.$dyn(`bg_${t}_${C}`);
                            null !== e && (N = { backgroundImage: `url(${e})` });
                            const u = k.$dyn(`bg_${t}`);
                            null !== u && (N = { backgroundImage: `url(${u})`, backgroundSize: 'cover' });
                        }
                        const y = n && (B || u);
                        return i().createElement(
                            Ae.t,
                            { isEnabled: a, args: { index: e, modeName: g, tooltipId: ce.p5 } },
                            i().createElement(
                                'div',
                                null,
                                i().createElement(
                                    'div',
                                    {
                                        id: E,
                                        className: s()(ve.base, a && ve.base__disabled, A && ve.base__isNotStarted),
                                        onClick: () => {
                                            m({ index: e, size: t, cardMediaSize: C }), w.playClick();
                                        },
                                        onMouseEnter: h,
                                        onMouseLeave: v,
                                    },
                                    i().createElement(
                                        'div',
                                        { className: ve.mask },
                                        i().createElement('div', {
                                            className: s()(
                                                ve.background,
                                                void 0 === N && ve.background__empty,
                                                B && ve.background__anim,
                                            ),
                                            style: N,
                                        }),
                                    ),
                                    i().createElement('div', { className: ve.border }),
                                    u &&
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement('div', { className: ve.selection }),
                                            i().createElement('div', {
                                                className: s()(ve.animBg, t === oe.Id.B0 && ve.animBg__wide),
                                            }),
                                            i().createElement('div', { className: f.checkBackground }),
                                            i().createElement('div', { className: f.check }),
                                        ),
                                    i().createElement('div', { className: s()(ve.hover, B && !A && ve.hover__anim) }),
                                    i().createElement('div', { className: ve.children }, l),
                                    _ &&
                                        !a &&
                                        i().createElement(
                                            'div',
                                            { className: ve.novelty },
                                            i().createElement(he.A, {
                                                value: R.strings.mode_selector.novelty(),
                                                size: S ? 'small' : 'big',
                                            }),
                                        ),
                                    i().createElement('div', {
                                        className: s()(ve.infoCorner, y && ve.infoCorner__anim),
                                    }),
                                    i().createElement(
                                        I.i,
                                        { body: R.strings.tooltips.mode_selector.info.body(), isEnabled: y },
                                        i().createElement('div', {
                                            className: s()(f.info, y && ve.info__anim),
                                            onClick: F,
                                        }),
                                    ),
                                    a && i().createElement('div', { className: ve.disabling }),
                                ),
                            ),
                        );
                    },
                    xe = 'TimeLeft_base_cf',
                    we = 'TimeLeft_base__small_7c',
                    Se = 'TimeLeft_icon_5d',
                    Ne = ({ index: e, text: t, isSmall: u = !1, classMix: a, tooltipId: _, modeName: r = '' }) =>
                        i().createElement(
                            Ae.t,
                            { args: _ ? { tooltipId: _, modeName: r } : { tooltipId: ce.GN, index: e } },
                            i().createElement(
                                'div',
                                { className: s()(xe, u && we, a) },
                                i().createElement('div', { className: Se }),
                                t,
                            ),
                        ),
                    ke = {
                        base: 'BattlePassIcon_base_bf',
                        bpIcon: 'BattlePassIcon_bpIcon_18',
                        bpIcon__extraLarge: 'BattlePassIcon_bpIcon__extraLarge_b3',
                        bpIcon__large: 'BattlePassIcon_bpIcon__large_c2',
                        bpAnim: 'BattlePassIcon_bpAnim_01',
                        bpAnim__extraLarge: 'BattlePassIcon_bpAnim__extraLarge_38',
                        bpAnim__large: 'BattlePassIcon_bpAnim__large_1e',
                    },
                    ye = ({ modeName: e, isDisabled: t, battlePassState: u }) => {
                        const a = (0, se.Z)([...(0, oe.Hp)('bpIcon', 'bpAnim')], ke);
                        return (
                            (0, r.useEffect)(() => {
                                u !== ge.NEW || t || x('ev_mode_selector_bp_points_icon_appear');
                            }, [u, t]),
                            u === ge.NONE || t
                                ? null
                                : i().createElement(
                                      'div',
                                      { className: ke.base },
                                      i().createElement(
                                          Ce.u,
                                          {
                                              contentId:
                                                  R.views.lobby.mode_selector.tooltips.SimplyFormatTooltip('resId'),
                                              args: { modeName: e },
                                              ignoreShowDelay: !0,
                                          },
                                          i().createElement('div', { className: a.bpIcon }),
                                      ),
                                      u === ge.NEW && i().createElement('div', { className: a.bpAnim }),
                                  )
                        );
                    };
                var We = u(280);
                const Te = {
                        base: 'Reward_base_80',
                        header: 'Reward_header_7c',
                        vehicleType: 'Reward_vehicleType_fa',
                        icon: 'Reward_icon_93',
                        base__small: 'Reward_base__small_cb',
                        'base__small-b0': 'Reward_base__small-b0_c5',
                        'base__small-b1': 'Reward_base__small-b1_16',
                        base__medium: 'Reward_base__medium_ce',
                        'base__medium-b1': 'Reward_base__medium-b1_3f',
                        name: 'Reward_name_17',
                    },
                    Le = R.images.gui.maps.icons.mode_selector.rewards,
                    Re = R.images.gui.maps.icons.vehicleTypes,
                    Pe = ['small', 'small-b0', 'small-b1', 'medium'],
                    Me = [oe.Id.B0, oe.Id.B1],
                    Ie = ({
                        mediaSize: e,
                        cardSize: t,
                        iconName: u,
                        name: a,
                        description: _,
                        tooltipID: n,
                        vehicleLevel: o,
                        vehicleType: l,
                    }) => {
                        const c = `${e}${Me.includes(t) ? `-${t}` : ''}`,
                            m = (0, r.useMemo)(() => {
                                const e = Pe.includes(c) ? 'c_48x48' : 'c_64x64';
                                return { backgroundImage: `url(${Le.$dyn(e).$dyn(u)})` };
                            }, [c, u]);
                        return i().createElement(
                            De,
                            {
                                tooltipArgs: {
                                    args: { tooltipId: n },
                                    tooltipId: n,
                                    body: n ? '' : _,
                                    header: n ? '' : a,
                                    ignoreShowDelay: !0,
                                },
                            },
                            i().createElement(
                                'div',
                                { className: s()(Te.base, Te[`base__${c}`]) },
                                i().createElement(
                                    'div',
                                    { className: Te.header },
                                    i().createElement('div', {
                                        className: Te.vehicleType,
                                        style: l ? { backgroundImage: `url(${Re.$dyn(l)})` } : void 0,
                                    }),
                                    i().createElement('div', null, o),
                                ),
                                i().createElement('div', { className: Te.icon, style: m }),
                                a && i().createElement(We.z, { text: a, classMix: Te.name }),
                            ),
                        );
                    },
                    Oe = {
                        base: 'Rewards_base_c8',
                        base__extraSmall: 'Rewards_base__extraSmall_9b',
                        base__small: 'Rewards_base__small_78',
                        base__medium: 'Rewards_base__medium_75',
                    };
                function $e() {
                    return (
                        ($e =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        $e.apply(this, arguments)
                    );
                }
                const He = ({ size: e, rewardsList: t }) => {
                        const u = (0, pe.O)(),
                            a = (0, se.Z)(['base'], Oe);
                        return i().createElement(
                            'div',
                            { className: a.base },
                            t &&
                                t.map(
                                    (t) =>
                                        t &&
                                        t.value &&
                                        i().createElement(
                                            Ie,
                                            $e({ key: t.value.iconName, mediaSize: u, cardSize: e }, t.value),
                                        ),
                                ),
                        );
                    },
                    ze = {
                        base: 'NormalCard_base_7a',
                        base__medium: 'NormalCard_base__medium_34',
                        base__extraLarge: 'NormalCard_base__extraLarge_87',
                        base__large: 'NormalCard_base__large_a8',
                        base__b0: 'NormalCard_base__b0_17',
                        base__b0__medium: 'NormalCard_base__b0__medium_8c',
                        base__b0__extraLarge: 'NormalCard_base__b0__extraLarge_bc',
                        base__b0__large: 'NormalCard_base__b0__large_ff',
                        base__b1: 'NormalCard_base__b1_ff',
                        base__b1__medium: 'NormalCard_base__b1__medium_63',
                        base__b1__extraLarge: 'NormalCard_base__b1__extraLarge_b0',
                        base__b1__large: 'NormalCard_base__b1__large_f9',
                        base__b2: 'NormalCard_base__b2_54',
                        base__b2__medium: 'NormalCard_base__b2__medium_57',
                        base__b2__extraLarge: 'NormalCard_base__b2__extraLarge_c0',
                        base__b2__large: 'NormalCard_base__b2__large_22',
                        base__b3: 'NormalCard_base__b3_50',
                        base__b3__medium: 'NormalCard_base__b3__medium_25',
                        base__b3__extraLarge: 'NormalCard_base__b3__extraLarge_8f',
                        base__b3__large: 'NormalCard_base__b3__large_18',
                        base__b4: 'NormalCard_base__b4_d9',
                        base__b4__medium: 'NormalCard_base__b4__medium_5c',
                        base__b4__extraLarge: 'NormalCard_base__b4__extraLarge_c3',
                        base__b4__large: 'NormalCard_base__b4__large_52',
                        base__b5: 'NormalCard_base__b5_f3',
                        base__b5__medium: 'NormalCard_base__b5__medium_30',
                        base__b5__extraLarge: 'NormalCard_base__b5__extraLarge_2b',
                        base__b5__large: 'NormalCard_base__b5__large_df',
                        base__b6: 'NormalCard_base__b6_8b',
                        base__b6__medium: 'NormalCard_base__b6__medium_10',
                        base__b6__extraLarge: 'NormalCard_base__b6__extraLarge_35',
                        base__b6__large: 'NormalCard_base__b6__large_5c',
                        name: 'NormalCard_name_ce',
                        name__b0: 'NormalCard_name__b0_98',
                        name__b1: 'NormalCard_name__b1_a6',
                        name__b0__medium: 'NormalCard_name__b0__medium_d2',
                        name__b1__medium: 'NormalCard_name__b1__medium_e3',
                        name__b0__extraLarge: 'NormalCard_name__b0__extraLarge_0e',
                        name__b0__large: 'NormalCard_name__b0__large_d2',
                        name__b1__extraLarge: 'NormalCard_name__b1__extraLarge_a3',
                        name__b1__large: 'NormalCard_name__b1__large_20',
                        name__b2: 'NormalCard_name__b2_73',
                        name__b2__medium: 'NormalCard_name__b2__medium_1c',
                        name__b2__extraLarge: 'NormalCard_name__b2__extraLarge_76',
                        name__b2__large: 'NormalCard_name__b2__large_53',
                        name__b3: 'NormalCard_name__b3_49',
                        name__b3__medium: 'NormalCard_name__b3__medium_78',
                        name__b3__extraLarge: 'NormalCard_name__b3__extraLarge_e9',
                        name__b3__large: 'NormalCard_name__b3__large_68',
                        name__b4: 'NormalCard_name__b4_ac',
                        name__b4__medium: 'NormalCard_name__b4__medium_e4',
                        name__b4__extraLarge: 'NormalCard_name__b4__extraLarge_2b',
                        name__b4__large: 'NormalCard_name__b4__large_a3',
                        name__b5: 'NormalCard_name__b5_2b',
                        name__b5__medium: 'NormalCard_name__b5__medium_c3',
                        name__b5__extraLarge: 'NormalCard_name__b5__extraLarge_78',
                        name__b5__large: 'NormalCard_name__b5__large_9b',
                        name__b6: 'NormalCard_name__b6_49',
                        name__b6__medium: 'NormalCard_name__b6__medium_dc',
                        name__b6__extraLarge: 'NormalCard_name__b6__extraLarge_83',
                        name__b6__large: 'NormalCard_name__b6__large_89',
                        formatText: 'NormalCard_formatText_cb',
                        formatText__b0__extraSmall: 'NormalCard_formatText__b0__extraSmall_7b',
                        formatText__b0__small: 'NormalCard_formatText__b0__small_65',
                        formatText__b1__extraSmall: 'NormalCard_formatText__b1__extraSmall_e4',
                        formatText__b1__small: 'NormalCard_formatText__b1__small_1e',
                        formatText__b2__extraSmall: 'NormalCard_formatText__b2__extraSmall_e0',
                        formatText__b2__small: 'NormalCard_formatText__b2__small_e4',
                        formatText__b3__extraSmall: 'NormalCard_formatText__b3__extraSmall_13',
                        formatText__b3__small: 'NormalCard_formatText__b3__small_8c',
                        formatText__b4__extraSmall: 'NormalCard_formatText__b4__extraSmall_f5',
                        formatText__b4__small: 'NormalCard_formatText__b4__small_49',
                        formatText__b5__extraSmall: 'NormalCard_formatText__b5__extraSmall_04',
                        formatText__b5__small: 'NormalCard_formatText__b5__small_b6',
                        formatText__b6__extraSmall: 'NormalCard_formatText__b6__extraSmall_a3',
                        formatText__b6__small: 'NormalCard_formatText__b6__small_e0',
                        subtitle: 'NormalCard_subtitle_75',
                        subtitle__b0: 'NormalCard_subtitle__b0_bf',
                        subtitle__b1: 'NormalCard_subtitle__b1_2e',
                        subtitle__b0__medium: 'NormalCard_subtitle__b0__medium_42',
                        subtitle__b1__medium: 'NormalCard_subtitle__b1__medium_95',
                        subtitle__b0__extraLarge: 'NormalCard_subtitle__b0__extraLarge_f2',
                        subtitle__b0__large: 'NormalCard_subtitle__b0__large_76',
                        subtitle__b1__extraLarge: 'NormalCard_subtitle__b1__extraLarge_8f',
                        subtitle__b1__large: 'NormalCard_subtitle__b1__large_d1',
                        subtitle__b2: 'NormalCard_subtitle__b2_98',
                        subtitle__b2__medium: 'NormalCard_subtitle__b2__medium_86',
                        subtitle__b2__extraLarge: 'NormalCard_subtitle__b2__extraLarge_44',
                        subtitle__b2__large: 'NormalCard_subtitle__b2__large_77',
                        subtitle__b3: 'NormalCard_subtitle__b3_7e',
                        subtitle__b3__medium: 'NormalCard_subtitle__b3__medium_57',
                        subtitle__b3__extraLarge: 'NormalCard_subtitle__b3__extraLarge_f3',
                        subtitle__b3__large: 'NormalCard_subtitle__b3__large_00',
                        subtitle__b4: 'NormalCard_subtitle__b4_b1',
                        subtitle__b4__medium: 'NormalCard_subtitle__b4__medium_64',
                        subtitle__b4__extraLarge: 'NormalCard_subtitle__b4__extraLarge_44',
                        subtitle__b4__large: 'NormalCard_subtitle__b4__large_6d',
                        subtitle__b5: 'NormalCard_subtitle__b5_4a',
                        subtitle__b5__medium: 'NormalCard_subtitle__b5__medium_03',
                        subtitle__b5__extraLarge: 'NormalCard_subtitle__b5__extraLarge_04',
                        subtitle__b5__large: 'NormalCard_subtitle__b5__large_14',
                        subtitle__b6: 'NormalCard_subtitle__b6_51',
                        subtitle__b6__medium: 'NormalCard_subtitle__b6__medium_94',
                        subtitle__b6__extraLarge: 'NormalCard_subtitle__b6__extraLarge_34',
                        subtitle__b6__large: 'NormalCard_subtitle__b6__large_f3',
                        subtitle__normal: 'NormalCard_subtitle__normal_23',
                        subtitle__noReward: 'NormalCard_subtitle__noReward_9c',
                        subtitle__statusActive: 'NormalCard_subtitle__statusActive_8c',
                        subtitle__staticPrepare: 'NormalCard_subtitle__staticPrepare_7c',
                        subtitle__anim: 'NormalCard_subtitle__anim_07',
                        subtitle__disable: 'NormalCard_subtitle__disable_9d',
                        statusDescription: 'NormalCard_statusDescription_9b',
                        statusDescription__position: 'NormalCard_statusDescription__position_e1',
                        statusDescription__color: 'NormalCard_statusDescription__color_b5',
                        alert: 'NormalCard_alert_4c',
                        cornerAlert: 'NormalCard_cornerAlert_a7',
                        alertIcon: 'NormalCard_alertIcon_86',
                        belowStatus: 'NormalCard_belowStatus_05',
                        calendarIcon: 'NormalCard_calendarIcon_c1',
                        calendarIcon__hover: 'NormalCard_calendarIcon__hover_7c',
                        calendarIcon__extraSmall: 'NormalCard_calendarIcon__extraSmall_9a',
                        calendarIcon__small: 'NormalCard_calendarIcon__small_3d',
                        timeLeft: 'NormalCard_timeLeft_28',
                        timeLeft__small: 'NormalCard_timeLeft__small_a5',
                        footer: 'NormalCard_footer_ba',
                        footer__medium: 'NormalCard_footer__medium_77',
                        footer__extraLarge: 'NormalCard_footer__extraLarge_5e',
                        footer__large: 'NormalCard_footer__large_69',
                        footer__anim: 'NormalCard_footer__anim_73',
                        mask: 'NormalCard_mask_ee',
                        mask__b0: 'NormalCard_mask__b0_e9',
                        mask__b1: 'NormalCard_mask__b1_02',
                        mask__b0__medium: 'NormalCard_mask__b0__medium_ac',
                        mask__b1__medium: 'NormalCard_mask__b1__medium_26',
                        mask__b0__extraLarge: 'NormalCard_mask__b0__extraLarge_28',
                        mask__b0__large: 'NormalCard_mask__b0__large_d1',
                        mask__b1__extraLarge: 'NormalCard_mask__b1__extraLarge_74',
                        mask__b1__large: 'NormalCard_mask__b1__large_74',
                        mask__b2: 'NormalCard_mask__b2_71',
                        mask__b2__medium: 'NormalCard_mask__b2__medium_b2',
                        mask__b2__extraLarge: 'NormalCard_mask__b2__extraLarge_6c',
                        mask__b2__large: 'NormalCard_mask__b2__large_b2',
                        mask__b3: 'NormalCard_mask__b3_f4',
                        mask__b3__medium: 'NormalCard_mask__b3__medium_d1',
                        mask__b3__extraLarge: 'NormalCard_mask__b3__extraLarge_3a',
                        mask__b3__large: 'NormalCard_mask__b3__large_17',
                        mask__b4: 'NormalCard_mask__b4_3c',
                        mask__b4__medium: 'NormalCard_mask__b4__medium_b1',
                        mask__b4__extraLarge: 'NormalCard_mask__b4__extraLarge_4c',
                        mask__b4__large: 'NormalCard_mask__b4__large_ed',
                        mask__b5: 'NormalCard_mask__b5_85',
                        mask__b5__medium: 'NormalCard_mask__b5__medium_99',
                        mask__b5__extraLarge: 'NormalCard_mask__b5__extraLarge_8a',
                        mask__b5__large: 'NormalCard_mask__b5__large_cc',
                        mask__b6: 'NormalCard_mask__b6_90',
                        mask__b6__medium: 'NormalCard_mask__b6__medium_fe',
                        mask__b6__extraLarge: 'NormalCard_mask__b6__extraLarge_97',
                        mask__b6__large: 'NormalCard_mask__b6__large_bc',
                        mask__static: 'NormalCard_mask__static_ae',
                        mask__anim: 'NormalCard_mask__anim_b6',
                        icon: 'NormalCard_icon_cb',
                        icon__animPrepare: 'NormalCard_icon__animPrepare_a2',
                        icon__static__b0: 'NormalCard_icon__static__b0_3c',
                        icon__static__b1: 'NormalCard_icon__static__b1_36',
                        icon__static__b2: 'NormalCard_icon__static__b2_13',
                        icon__static__b3: 'NormalCard_icon__static__b3_6d',
                        icon__anim__b0: 'NormalCard_icon__anim__b0_e3',
                        icon__anim__b1: 'NormalCard_icon__anim__b1_04',
                        icon__static__b0__medium: 'NormalCard_icon__static__b0__medium_64',
                        icon__static__b1__medium: 'NormalCard_icon__static__b1__medium_b9',
                        icon__anim__b0__medium: 'NormalCard_icon__anim__b0__medium_a6',
                        icon__anim__b1__medium: 'NormalCard_icon__anim__b1__medium_6c',
                        icon__static__b0__extraLarge: 'NormalCard_icon__static__b0__extraLarge_0b',
                        icon__static__b0__large: 'NormalCard_icon__static__b0__large_7c',
                        icon__static__b1__extraLarge: 'NormalCard_icon__static__b1__extraLarge_8b',
                        icon__static__b1__large: 'NormalCard_icon__static__b1__large_f0',
                        icon__anim__b0__extraLarge: 'NormalCard_icon__anim__b0__extraLarge_2c',
                        icon__anim__b0__large: 'NormalCard_icon__anim__b0__large_07',
                        icon__anim__b1__extraLarge: 'NormalCard_icon__anim__b1__extraLarge_a7',
                        icon__anim__b1__large: 'NormalCard_icon__anim__b1__large_0a',
                        icon__anim__b2: 'NormalCard_icon__anim__b2_19',
                        icon__static__b2__medium: 'NormalCard_icon__static__b2__medium_92',
                        icon__anim__b2__medium: 'NormalCard_icon__anim__b2__medium_da',
                        icon__static__b2__extraLarge: 'NormalCard_icon__static__b2__extraLarge_99',
                        icon__static__b2__large: 'NormalCard_icon__static__b2__large_e3',
                        icon__anim__b2__extraLarge: 'NormalCard_icon__anim__b2__extraLarge_8e',
                        icon__anim__b2__large: 'NormalCard_icon__anim__b2__large_94',
                        icon__anim__b3: 'NormalCard_icon__anim__b3_e8',
                        icon__static__b3__medium: 'NormalCard_icon__static__b3__medium_1a',
                        icon__anim__b3__medium: 'NormalCard_icon__anim__b3__medium_eb',
                        icon__static__b3__extraLarge: 'NormalCard_icon__static__b3__extraLarge_a0',
                        icon__static__b3__large: 'NormalCard_icon__static__b3__large_e3',
                        icon__anim__b3__extraLarge: 'NormalCard_icon__anim__b3__extraLarge_92',
                        icon__anim__b3__large: 'NormalCard_icon__anim__b3__large_7a',
                        icon__huge: 'NormalCard_icon__huge_56',
                        icon__big: 'NormalCard_icon__big_c9',
                        icon__medium: 'NormalCard_icon__medium_87',
                        icon__small: 'NormalCard_icon__small_a6',
                        icon__b0: 'NormalCard_icon__b0_f2',
                        icon__b1: 'NormalCard_icon__b1_50',
                        icon__b0__medium: 'NormalCard_icon__b0__medium_d8',
                        icon__b1__medium: 'NormalCard_icon__b1__medium_d4',
                        icon__b0__extraLarge: 'NormalCard_icon__b0__extraLarge_3b',
                        icon__b0__large: 'NormalCard_icon__b0__large_32',
                        icon__b1__extraLarge: 'NormalCard_icon__b1__extraLarge_db',
                        icon__b1__large: 'NormalCard_icon__b1__large_53',
                        icon__b2: 'NormalCard_icon__b2_ae',
                        icon__b2__medium: 'NormalCard_icon__b2__medium_17',
                        icon__b2__extraLarge: 'NormalCard_icon__b2__extraLarge_b9',
                        icon__b2__large: 'NormalCard_icon__b2__large_a7',
                        icon__b3: 'NormalCard_icon__b3_28',
                        icon__b3__medium: 'NormalCard_icon__b3__medium_74',
                        icon__b3__extraLarge: 'NormalCard_icon__b3__extraLarge_64',
                        icon__b3__large: 'NormalCard_icon__b3__large_89',
                        icon__b4: 'NormalCard_icon__b4_f8',
                        icon__b4__medium: 'NormalCard_icon__b4__medium_c6',
                        icon__b4__extraLarge: 'NormalCard_icon__b4__extraLarge_eb',
                        icon__b4__large: 'NormalCard_icon__b4__large_90',
                        icon__b5: 'NormalCard_icon__b5_e9',
                        icon__b5__medium: 'NormalCard_icon__b5__medium_df',
                        icon__b5__extraLarge: 'NormalCard_icon__b5__extraLarge_e3',
                        icon__b5__large: 'NormalCard_icon__b5__large_2d',
                        icon__b6: 'NormalCard_icon__b6_dc',
                        icon__b6__medium: 'NormalCard_icon__b6__medium_73',
                        icon__b6__extraLarge: 'NormalCard_icon__b6__extraLarge_63',
                        icon__b6__large: 'NormalCard_icon__b6__large_c3',
                        statusNotActive: 'NormalCard_statusNotActive_9c',
                        statusNotActive__b0: 'NormalCard_statusNotActive__b0_4f',
                        statusNotActive__b1: 'NormalCard_statusNotActive__b1_78',
                        statusNotActive__b0__medium: 'NormalCard_statusNotActive__b0__medium_8f',
                        statusNotActive__b1__medium: 'NormalCard_statusNotActive__b1__medium_f6',
                        statusNotActive__b0__extraLarge: 'NormalCard_statusNotActive__b0__extraLarge_33',
                        statusNotActive__b0__large: 'NormalCard_statusNotActive__b0__large_bf',
                        statusNotActive__b1__extraLarge: 'NormalCard_statusNotActive__b1__extraLarge_d8',
                        statusNotActive__b1__large: 'NormalCard_statusNotActive__b1__large_10',
                        statusNotActive__b2: 'NormalCard_statusNotActive__b2_35',
                        statusNotActive__b2__medium: 'NormalCard_statusNotActive__b2__medium_f9',
                        statusNotActive__b2__extraLarge: 'NormalCard_statusNotActive__b2__extraLarge_09',
                        statusNotActive__b2__large: 'NormalCard_statusNotActive__b2__large_a0',
                        statusNotActive__b3: 'NormalCard_statusNotActive__b3_fe',
                        statusNotActive__b3__medium: 'NormalCard_statusNotActive__b3__medium_88',
                        statusNotActive__b3__extraLarge: 'NormalCard_statusNotActive__b3__extraLarge_b2',
                        statusNotActive__b3__large: 'NormalCard_statusNotActive__b3__large_69',
                        statusNotActive__b4: 'NormalCard_statusNotActive__b4_dd',
                        statusNotActive__b4__medium: 'NormalCard_statusNotActive__b4__medium_ae',
                        statusNotActive__b4__extraLarge: 'NormalCard_statusNotActive__b4__extraLarge_78',
                        statusNotActive__b4__large: 'NormalCard_statusNotActive__b4__large_d5',
                        statusNotActive__b5: 'NormalCard_statusNotActive__b5_02',
                        statusNotActive__b5__medium: 'NormalCard_statusNotActive__b5__medium_24',
                        statusNotActive__b5__extraLarge: 'NormalCard_statusNotActive__b5__extraLarge_f4',
                        statusNotActive__b5__large: 'NormalCard_statusNotActive__b5__large_1f',
                        statusNotActive__b6: 'NormalCard_statusNotActive__b6_9d',
                        statusNotActive__b6__medium: 'NormalCard_statusNotActive__b6__medium_cd',
                        statusNotActive__b6__extraLarge: 'NormalCard_statusNotActive__b6__extraLarge_09',
                        statusNotActive__b6__large: 'NormalCard_statusNotActive__b6__large_09',
                        widgetOverlay: 'NormalCard_widgetOverlay_09',
                        widgetOverlay__hide: 'NormalCard_widgetOverlay__hide_7e',
                        darken__show: 'NormalCard_darken__show_3f',
                    };
                var Ue = u(8668);
                const Ve = [
                    'name',
                    'eventName',
                    'statusNotActive',
                    'description',
                    'conditions',
                    'children',
                    'onHoverChanged',
                    'calendarTooltip',
                    'widgetComponent',
                    'battlePassState',
                    'isDisabled',
                    'timeLeft',
                    'rewardList',
                    'statusActive',
                    'divider',
                    'belowStatusComponent',
                    'nameSuffixComponent',
                    'forceShowIcon',
                    'hideStatus',
                    'noWidgetSizes',
                    'alert',
                    'classNames',
                    'resourceFolderGetter',
                ];
                function je() {
                    return (
                        (je =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        je.apply(this, arguments)
                    );
                }
                const qe = (e) => {
                        let t = e.name,
                            u = e.eventName,
                            a = e.statusNotActive,
                            _ = e.description,
                            n = e.conditions,
                            o = e.children,
                            l = e.onHoverChanged,
                            c = e.calendarTooltip,
                            m = void 0 === c ? '' : c,
                            d = e.widgetComponent,
                            b = e.battlePassState,
                            E = e.isDisabled,
                            g = e.timeLeft,
                            A = e.rewardList,
                            C = e.statusActive,
                            F = e.divider,
                            D = void 0 === F ? ' ' : F,
                            B = e.belowStatusComponent,
                            p = e.nameSuffixComponent,
                            h = e.forceShowIcon,
                            v = void 0 !== h && h,
                            f = e.hideStatus,
                            x = void 0 !== f && f,
                            w = e.noWidgetSizes,
                            S = void 0 === w ? [oe.Id.B5, oe.Id.B6] : w,
                            N = e.alert,
                            k = e.classNames,
                            y = e.resourceFolderGetter,
                            W = void 0 === y ? oe.d6 : y,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, Ve);
                        const L = (0, pe.O)(),
                            P = (0, se.Z)(
                                [
                                    ...(0, oe.Hp)(
                                        'base',
                                        'icon',
                                        'footer',
                                        'name',
                                        'subtitle',
                                        'mask',
                                        'formatText',
                                        'icon__anim',
                                        'icon__static',
                                        'statusNotActive',
                                    ),
                                    'calendarIcon',
                                ],
                                ze,
                            ),
                            M = ue('model', te.None),
                            I = M.onItemClicked,
                            $ = M.onInfoClicked,
                            H = T.resourcesFolderName,
                            z = T.size,
                            U = T.isSelected,
                            V = T.showWidget,
                            j = T.isNew,
                            q = T.modeName,
                            G = T.index,
                            Z = (0, pe.B)(l),
                            Y = Z[0],
                            K = Z[1],
                            X = (0, r.useMemo)(() => Ue.S4[z][L], [z, L]),
                            J = (0, r.useMemo)(() => {
                                const e = W(H);
                                if (null !== e) {
                                    const t = e.$dyn(`icon_${X}`);
                                    if (void 0 !== t) return { backgroundImage: `url(${t})` };
                                }
                            }, [W, H, X]),
                            Q = V || U,
                            ee = Ue.Hi.includes(z),
                            ae = z === oe.Id.B0,
                            _e = z === oe.Id.B1,
                            re = z === oe.Id.B2,
                            ie = z === oe.Id.B3,
                            ne = Ue.u_.includes(z),
                            le = !S.includes(z) && V && d,
                            ce = Q && !ee,
                            me = Y && !ee && !Q,
                            de = Y || (U && C),
                            be = L !== oe.Cg.Big,
                            Ee = A && A.length > 0 && !a && ne,
                            ge = (0, r.useMemo)(
                                () =>
                                    E
                                        ? R.strings.ranked_battles.rankedBattlesUnreachableView.subtitleText()
                                        : C || u || void 0,
                                [E, C, u],
                            ),
                            Ae = (0, r.useMemo)(
                                () => (ne || ie ? a || '' : void 0 === a ? '' : a.replace('\n', ' ')),
                                [ne, a, ie],
                            );
                        let Ce = '';
                        _e && _ === ge ? n && (Ce = (0, O.z4)(n)) : (ae && _ === ge) || (Ce = (0, O.z4)(_ + D + n));
                        const Fe = s()(
                                ze.icon,
                                ze[`icon__${X}`],
                                P[`icon__${z}`],
                                !ee && ze.icon__animPrepare,
                                ce && P[`icon__static__${z}`],
                                me && P[`icon__anim__${z}`],
                            ),
                            he = s()(ze.mask, P[`mask__${z}`], ce && ze.mask__static, me && ze.mask__anim),
                            ve = s()(
                                P.subtitle,
                                P[`subtitle__${z}`],
                                (u || !ee) && ze.subtitle__normal,
                                !ne && ze.subtitle__noReward,
                                C && ee && ze.subtitle__statusActive,
                                C && Q && ze.subtitle__staticPrepare,
                                de && ze.subtitle__anim,
                                E && ze.subtitle__disable,
                                null == k ? void 0 : k.subtitle,
                            ),
                            xe = s()(
                                ze.statusDescription,
                                re && ze.statusDescription__position,
                                ne && ze.statusDescription__color,
                            ),
                            we = s()(P.footer, (Y || U) && !V && ie && ze.footer__anim, null == k ? void 0 : k.footer),
                            Se = s()(P.formatText, P[`formatText__${z}`]),
                            ke = s()(ze.darken, V && ze.darken__show),
                            We = s()(
                                ze.widgetOverlay,
                                !le && ze.widgetOverlay__hide,
                                null == k ? void 0 : k.widgetOverlay,
                            );
                        return i().createElement(
                            'div',
                            { className: s()(P.base, P[`base__${z}`]) },
                            i().createElement(
                                fe,
                                je({ onHoverChanged: K, isDisabled: E }, T, {
                                    onItemClicked: I,
                                    onInfoClicked: $,
                                    resourceFolderGetter: W,
                                }),
                                Ee && i().createElement(He, { size: z, rewardsList: A }),
                                a &&
                                    i().createElement(
                                        'div',
                                        { className: s()(P.statusNotActive, P[`statusNotActive__${z}`]) },
                                        i().createElement(Be.B, { text: Ae, classMix: Se }),
                                    ),
                                i().createElement('div', { className: ke }),
                                d && i().createElement('div', { className: We }, d),
                                o,
                                (!le || v) &&
                                    i().createElement(
                                        'div',
                                        { className: he },
                                        i().createElement('div', { className: Fe, style: J }),
                                    ),
                                i().createElement('div', { className: s()(ze.name, P.name, P[`name__${z}`]) }, t, p),
                                i().createElement(
                                    'div',
                                    { className: ve },
                                    !x && (!re || E) && i().createElement(Be.B, { classMix: Se, text: ge || '' }),
                                    Ce &&
                                        ne &&
                                        !E &&
                                        (!le || ne) &&
                                        i().createElement(
                                            'div',
                                            { className: xe },
                                            i().createElement(Be.B, { classMix: Se, text: Ce }),
                                            N &&
                                                !re &&
                                                i().createElement(
                                                    De,
                                                    { tooltipArgs: { header: N.header, body: N.description } },
                                                    i().createElement(
                                                        'div',
                                                        { className: ze.alert },
                                                        i().createElement('div', { className: ze.alertIcon }),
                                                        N.text,
                                                    ),
                                                ),
                                        ),
                                    i().createElement(
                                        'div',
                                        { className: s()(ze.belowStatus, null == k ? void 0 : k.belowStatus) },
                                        B,
                                    ),
                                ),
                                n &&
                                    i().createElement(
                                        'div',
                                        { className: we },
                                        i().createElement(Be.B, { classMix: Se, text: (0, O.z4)(n) }),
                                    ),
                                g &&
                                    !j &&
                                    i().createElement(Ne, {
                                        index: G,
                                        text: g,
                                        isSmall: be,
                                        classMix: s()(ze.timeLeft, be && ze.timeLeft__small),
                                        tooltipId: m,
                                        modeName: q,
                                    }),
                                !N || (ne && !re)
                                    ? i().createElement(ye, { modeName: T.modeName, isDisabled: E, battlePassState: b })
                                    : i().createElement(
                                          De,
                                          { tooltipArgs: { header: N.header, body: N.description } },
                                          i().createElement(
                                              'div',
                                              { className: ze.cornerAlert },
                                              i().createElement('div', { className: ze.alertIcon }),
                                          ),
                                      ),
                            ),
                        );
                    },
                    Ge = { widgetOverlay: 'Card_widgetOverlay_a5', belowStatus: 'Card_belowStatus_b6' },
                    Ze = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Ye, Ke;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Ye || (Ye = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Ke || (Ke = {}));
                const Xe = ({ size: e = Ye.Default }) => {
                        const t = s()(Ze.background, Ze[`background__${e}`]);
                        return i().createElement('div', { className: t });
                    },
                    Je = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Qe = ({ size: e }) => {
                        const t = s()(Je.base, Je[`base__${e}`]);
                        return i().createElement('div', { className: t });
                    },
                    et = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    tt = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: _, withoutBounce: r }) => {
                            const n = s()(
                                    et.base,
                                    et[`base__${e}`],
                                    u && et.base__disabled,
                                    _ && et.base__finished,
                                    r && et.base__withoutBounce,
                                ),
                                o = !u && !_;
                            return i().createElement(
                                'div',
                                { className: n, style: a, ref: t },
                                i().createElement('div', { className: et.pattern }),
                                i().createElement('div', { className: et.gradient }),
                                o && i().createElement(Qe, { size: e }),
                            );
                        },
                    ),
                    ut = ({ size: e, value: t, lineRef: u, disabled: a, onComplete: _ }) => {
                        const n = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            s = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                s && _ && _();
                            }, [s, _]),
                            i().createElement(tt, { size: e, disabled: a, baseStyles: n, isComplete: s, lineRef: u })
                        );
                    },
                    at = (e, t) => {
                        let u;
                        const a = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            'function' == typeof u && u(), clearTimeout(a);
                        };
                    };
                let _t, rt;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(_t || (_t = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(rt || (rt = {}));
                const it = 'ProgressBarDeltaSimple_base_6c',
                    nt = 'ProgressBarDeltaSimple_delta_99',
                    st = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: _,
                            to: n,
                            onEndAnimation: s,
                            onChangeAnimationState: o,
                        }) => {
                            const l = n < a,
                                c = (0, r.useState)(rt.Idle),
                                m = c[0],
                                d = c[1],
                                b = m === rt.In,
                                E = m === rt.End,
                                g = m === rt.Idle,
                                A = (0, r.useCallback)(
                                    (e) => {
                                        d(e), o && o(e);
                                    },
                                    [o],
                                );
                            (0, r.useEffect)(() => {
                                if (g && !u) {
                                    return at(() => {
                                        A(rt.In);
                                    }, t);
                                }
                            }, [A, u, g, t]),
                                (0, r.useEffect)(() => {
                                    if (b) {
                                        return at(() => {
                                            s && s(), A(rt.End);
                                        }, e + t);
                                    }
                                }, [A, b, s, t, e]);
                            const C = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, t, e],
                                ),
                                F = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, t, e],
                                ),
                                D = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(a - n)}%`, left: `${l ? n : a}%` }),
                                    [a, l, n],
                                );
                            return E
                                ? null
                                : i().createElement(
                                      'div',
                                      { className: it, style: D },
                                      i().createElement(
                                          'div',
                                          { style: g ? C : F, className: nt },
                                          i().createElement(Qe, { size: _ }),
                                      ),
                                  );
                        },
                    ),
                    ot = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: _,
                            isComplete: n,
                            animationSettings: s,
                            onChangeAnimationState: o,
                            onEndAnimation: l,
                        }) => {
                            const c = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, e],
                            );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(tt, {
                                    size: t,
                                    lineRef: a,
                                    disabled: _,
                                    isComplete: n,
                                    baseStyles: c,
                                }),
                                u >= 0 &&
                                    i().createElement(st, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: o,
                                        onEndAnimation: l,
                                    }),
                            );
                        },
                    ),
                    lt = 'ProgressBarDeltaGrow_base_7e',
                    ct = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    mt = 'ProgressBarDeltaGrow_glow_68',
                    dt = (e) => (e ? { left: 0 } : { right: 0 }),
                    bt = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Et = (e) => ({ transitionDuration: `${e}ms` }),
                    gt = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: _,
                            to: n,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = n < a,
                                d = (0, r.useState)(_t.Idle),
                                b = d[0],
                                E = d[1],
                                g = b === _t.End,
                                A = b === _t.Idle,
                                C = b === _t.Grow,
                                F = b === _t.Shrink,
                                D = (0, r.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                B = (0, r.useCallback)(
                                    (e, t) =>
                                        at(() => {
                                            D(e);
                                        }, t),
                                    [D],
                                );
                            (0, r.useEffect)(() => {
                                if (!u)
                                    return A
                                        ? B(_t.Grow, t)
                                        : C
                                          ? B(_t.Shrink, e)
                                          : F
                                            ? B(_t.End, e)
                                            : void (g && o && o());
                            }, [B, u, g, C, A, F, o, t, e]);
                            const p = (0, r.useMemo)(() => Object.assign({ width: '100%' }, Et(e), dt(m)), [m, e]),
                                h = (0, r.useMemo)(() => Object.assign({ width: '0%' }, Et(e), dt(m)), [m, e]),
                                v = (0, r.useMemo)(() => Object.assign({ width: '0%' }, bt(m, a), Et(e)), [a, m, e]),
                                f = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(n - a)}%` }, bt(m, a), Et(e)),
                                    [a, m, n, e],
                                );
                            if (g) return null;
                            const x = s()(lt, c, m && 0 === n && ct);
                            return i().createElement(
                                'div',
                                { style: A ? v : f, className: x },
                                i().createElement(
                                    'div',
                                    { style: F ? h : p, className: mt },
                                    i().createElement(Qe, { size: _ }),
                                ),
                            );
                        },
                    ),
                    At = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: _,
                            isComplete: n,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = e < u,
                                m = (0, r.useState)(!1),
                                d = m[0],
                                b = m[1],
                                E = (0, r.useCallback)(
                                    (e) => {
                                        e === _t.Shrink && b(!0), l && l(e);
                                    },
                                    [l],
                                ),
                                g = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                A = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, e],
                                );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(tt, {
                                    size: t,
                                    lineRef: a,
                                    disabled: _,
                                    isComplete: n,
                                    withoutBounce: c && 0 === e,
                                    baseStyles: d ? A : g,
                                }),
                                u >= 0 &&
                                    i().createElement(gt, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: E,
                                        freezed: s.freezed,
                                        onEndAnimation: o,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    Ct = ['onComplete', 'onEndAnimation'];
                function Ft() {
                    return (
                        (Ft =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ft.apply(this, arguments)
                    );
                }
                const Dt = (0, r.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, Ct);
                        const _ = (0, r.useState)(!1),
                            n = _[0],
                            s = _[1],
                            o = (0, r.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== n && s(e), e && t && t(), u && u();
                            }, [n, t, u, a.to]);
                        switch (a.animationSettings.type) {
                            case Ke.Simple:
                                return i().createElement(ot, Ft({}, a, { onEndAnimation: o, isComplete: n }));
                            case Ke.Growing:
                                return i().createElement(At, Ft({}, a, { onEndAnimation: o, isComplete: n }));
                            default:
                                return null;
                        }
                    }),
                    Bt = ['onEndAnimation'];
                function pt() {
                    return (
                        (pt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        pt.apply(this, arguments)
                    );
                }
                const ht = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                _ = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                            return _;
                        })(e, Bt);
                    const a = (0, r.useRef)({}),
                        _ = (0, r.useCallback)(() => {
                            (a.current.from = void 0), t && t();
                        }, [t]),
                        n = 'number' == typeof a.current.from ? a.current.from : u.from;
                    return (
                        (a.current.from = n),
                        i().createElement(Dt, pt({}, u, { onEndAnimation: _, key: `${n}-${u.to}`, from: n }))
                    );
                });
                function vt() {
                    return (
                        (vt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        vt.apply(this, arguments)
                    );
                }
                const ft = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: a,
                            deltaFrom: _,
                            animationSettings: r,
                            onEndAnimation: n,
                            onChangeAnimationState: s,
                            onComplete: o,
                        }) => {
                            if (_ === t)
                                return i().createElement(ut, {
                                    key: `${_}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: a,
                                    onComplete: o,
                                });
                            const l = {
                                from: _,
                                to: t,
                                size: e,
                                lineRef: u,
                                disabled: a,
                                animationSettings: r,
                                onComplete: o,
                                onEndAnimation: n,
                                onChangeAnimationState: s,
                            };
                            return r.withStack
                                ? i().createElement(ht, l)
                                : i().createElement(Dt, vt({ key: `${_}-${t}` }, l));
                        },
                    ),
                    xt = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    wt = (e, t, u) => (u < e ? e : u > t ? t : u),
                    St = (e, t, u) => {
                        if ('number' == typeof u) {
                            return (wt(0, t, u) / t) * 100;
                        }
                        return e;
                    },
                    Nt = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    kt = {
                        freezed: !1,
                        withStack: !1,
                        type: Ke.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    yt = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Nt,
                            size: u = Ye.Default,
                            animationSettings: a = kt,
                            disabled: _ = !1,
                            withoutBackground: n = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: m,
                            onEndAnimation: d,
                            onComplete: b,
                        }) => {
                            const E = ((e, t, u) =>
                                (0, r.useMemo)(() => {
                                    const a = (wt(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: St(a, t, u) };
                                }, [u, t, e]))(o, e, l);
                            return i().createElement(
                                'div',
                                { className: s()(Ze.base, Ze[`base__${u}`]), style: xt(t) },
                                !n && i().createElement(Xe, { size: u }),
                                i().createElement(ft, {
                                    size: u,
                                    lineRef: c,
                                    disabled: _,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: d,
                                    onChangeAnimationState: m,
                                    onComplete: b,
                                }),
                            );
                        },
                    ),
                    Wt = {
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
                    Tt = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Lt = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Rt = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Pt = (0, r.memo)(({ text: e, binding: t, classMix: u }) => {
                        const a = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            _ = (0, r.useMemo)(() => t || {}, [t]);
                        let n = Tt.exec(e),
                            s = e,
                            o = 0;
                        for (; n; ) {
                            const u = n[0],
                                r = Lt.exec(u),
                                l = Rt.exec(u),
                                c = n[1];
                            if (r && l) {
                                const e = r[0],
                                    n = e + o++ + e;
                                (s = s.replace(u, `%(${n})`)),
                                    (_[n] = Wt[e]
                                        ? i().createElement(
                                              'span',
                                              { className: Wt[e] },
                                              i().createElement(We.z, { text: c, binding: t }),
                                          )
                                        : i().createElement(
                                              'span',
                                              { style: a(e) },
                                              i().createElement(We.z, { text: c, binding: t }),
                                          ));
                            }
                            n = Tt.exec(e);
                        }
                        return i().createElement(We.z, { text: s, classMix: u, binding: _ });
                    }),
                    Mt = {
                        base: 'Progression_base_94',
                        title: 'Progression_title_81',
                        contentWrapper: 'Progression_contentWrapper_3a',
                        progress: 'Progression_progress_7b',
                        currentStage: 'Progression_currentStage_67',
                        progressValue: 'Progression_progressValue_f7',
                        progressValueIcon: 'Progression_progressValueIcon_e9',
                    },
                    It = R.strings.mode_selector.mode.battleRoyale.progression,
                    Ot = {
                        freezed: !1,
                        withStack: !1,
                        type: Ke.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    $t = ({ status: e = le.ACTIVE, currentStage: t, stageCurrentPoints: u, stageMaximumPoints: a }) =>
                        i().createElement(
                            'div',
                            { className: s()(Mt.base, Mt[`base__${e}`]) },
                            i().createElement(
                                'div',
                                { className: Mt.contentWrapper },
                                u !== a &&
                                    e === le.ACTIVE &&
                                    i().createElement(
                                        'div',
                                        { className: Mt.progress },
                                        i().createElement(
                                            'div',
                                            { className: Mt.currentStage },
                                            It.currentStage(),
                                            i().createElement('span', null, t),
                                        ),
                                        i().createElement(yt, {
                                            size: Ye.Small,
                                            value: u,
                                            maxValue: a,
                                            animationSettings: Ot,
                                            deltaFrom: u,
                                        }),
                                        i().createElement(
                                            'div',
                                            { className: Mt.progressValue },
                                            i().createElement(Pt, { text: It.steps(), binding: { done: u, total: a } }),
                                            i().createElement('div', { className: Mt.progressValueIcon }),
                                        ),
                                    ),
                            ),
                        );
                function Ht() {
                    return (
                        (Ht =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ht.apply(this, arguments)
                    );
                }
                const zt = (e) => {
                        const t = e.statusNotActive,
                            u = e.battlePassState,
                            a = e.size,
                            _ = e.widget,
                            r = e.showWidget,
                            n = a === oe.Id.B1 && r;
                        return i().createElement(
                            'div',
                            { className: Ge[`base__${a}`] },
                            i().createElement(
                                qe,
                                Ht(
                                    {
                                        belowStatusComponent: n && i().createElement($t, _),
                                        classNames: { belowStatus: Ge.belowStatus },
                                    },
                                    e,
                                    { battlePassState: t ? ge.NONE : u },
                                ),
                            ),
                        );
                    },
                    Ut = {
                        widgetOverlay: 'Comp7BattleCard_widgetOverlay_66',
                        belowStatus: 'Comp7BattleCard_belowStatus_48',
                    };
                let Vt;
                !(function (e) {
                    (e.DISABLED = 'disabled'), (e.ACTIVE = 'active');
                })(Vt || (Vt = {}));
                const jt = {
                        base: 'Progression_base_c8',
                        title: 'Progression_title_62',
                        contentWrapper: 'Progression_contentWrapper_8f',
                        progress: 'Progression_progress_b8',
                        currentStage: 'Progression_currentStage_1b',
                        progressValue: 'Progression_progressValue_f8',
                        progressValueIcon: 'Progression_progressValueIcon_df',
                    },
                    qt = R.strings.mode_selector.mode.comp7.progression,
                    Gt = {
                        freezed: !1,
                        withStack: !1,
                        type: Ke.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    Zt = ({ status: e = Vt.ACTIVE, currentStage: t, stageCurrentPoints: u, stageMaximumPoints: a }) =>
                        i().createElement(
                            'div',
                            { className: s()(jt.base, jt[`base__${e}`]) },
                            i().createElement(
                                'div',
                                { className: jt.contentWrapper },
                                u !== a &&
                                    e === Vt.ACTIVE &&
                                    i().createElement(
                                        'div',
                                        { className: jt.progress },
                                        i().createElement(
                                            'div',
                                            { className: jt.currentStage },
                                            qt.currentStage(),
                                            i().createElement('span', null, t),
                                        ),
                                        i().createElement(yt, {
                                            size: Ye.Small,
                                            value: u,
                                            maxValue: a,
                                            animationSettings: Gt,
                                            deltaFrom: u,
                                        }),
                                        i().createElement(
                                            'div',
                                            { className: jt.progressValue },
                                            i().createElement(Pt, { text: qt.steps(), binding: { done: u, total: a } }),
                                            i().createElement('div', { className: jt.progressValueIcon }),
                                        ),
                                    ),
                            ),
                        );
                function Yt() {
                    return (
                        (Yt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Yt.apply(this, arguments)
                    );
                }
                const Kt = (e) => {
                    const t = e.statusNotActive,
                        u = e.battlePassState,
                        a = e.size,
                        _ = e.widget,
                        r = e.showWidget,
                        n = a === oe.Id.B1 && r;
                    return i().createElement(
                        'div',
                        { className: Ut[`base__${a}`] },
                        i().createElement(
                            qe,
                            Yt(
                                {
                                    belowStatusComponent: n && i().createElement(Zt, _),
                                    classNames: { belowStatus: Ut.belowStatus },
                                },
                                e,
                                { battlePassState: t ? ge.NONE : u },
                            ),
                        ),
                    );
                };
                var Xt = u(9459);
                let Jt, Qt;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(Jt || (Jt = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(Qt || (Qt = {}));
                const eu = 'Countdown_base_fe',
                    tu = 'Countdown_icon_8b',
                    uu = 'Countdown_description_8d',
                    au = (e) => e.toString().padStart(2, '0'),
                    _u = (e, t) => {
                        switch (t) {
                            case Qt.Description:
                                return ((e, t = !0) =>
                                    e.days > 7 && t
                                        ? (0, O.WU)(R.strings.common.duration.days(), { days: e.days })
                                        : e.days >= 1
                                          ? 0 === e.hours
                                              ? (0, O.WU)(R.strings.common.duration.days(), { days: e.days })
                                              : `${(0, O.WU)(R.strings.common.duration.days(), { days: e.days })} ${(0, O.WU)(R.strings.common.duration.hours(), { hours: e.hours })}`
                                          : e.hours >= 1
                                            ? 0 === e.minutes
                                                ? (0, O.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                                : `${(0, O.WU)(R.strings.common.duration.hours(), { hours: e.hours })} ${(0, O.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                            : (0, O.WU)(R.strings.common.duration.minutes(), {
                                                  minutes: e.minutes || 1,
                                              }))(e);
                            case Qt.Short:
                                return `${au(e.minutes)}:${au(e.seconds)}`;
                            case Qt.Long:
                                return `${au(e.hours)}:${au(e.minutes)}:${au(e.seconds)}`;
                            case Qt.Extended:
                                return `${(0, O.WU)(R.strings.common.duration.days(), { days: e.days })} | ${au(e.hours)}:${au(e.minutes)}:${au(e.seconds)}`;
                        }
                    },
                    ru = R.images.gui.maps.icons.components.countdown,
                    iu = (e, t) => {
                        const u = 2 === t ? ru.big : ru;
                        switch (e) {
                            case Jt.Timer:
                                return u.clock();
                            case Jt.Countdown:
                                return u.hourglass();
                            case Jt.Cooldown:
                                return u.lock();
                        }
                    },
                    nu = (0, r.memo)(
                        ({
                            duration: e,
                            icon: t = Jt.Timer,
                            style: u = Qt.Description,
                            onTimeReached: _,
                            className: n = '',
                            classNames: o = {},
                        }) => {
                            const l = u !== Qt.Description ? 1 : void 0,
                                c = ae(e, l),
                                m = (() => {
                                    const e = (0, r.useState)(a.O.view.getScale()),
                                        t = e[0],
                                        u = e[1];
                                    return (
                                        (0, r.useEffect)(() => {
                                            const e = () => {
                                                u(a.O.view.getScale());
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
                                })();
                            _ && _[c] && _[c]();
                            const d = _u(
                                (function (e = 0) {
                                    let t = e;
                                    const u = Math.trunc(t / V);
                                    t -= u * V;
                                    const a = Math.trunc(t / U);
                                    t -= a * U;
                                    const _ = Math.trunc(t / z);
                                    return (t -= _ * z), { days: u, hours: a, minutes: _, seconds: t };
                                })(c),
                                u,
                            );
                            return i().createElement(
                                'div',
                                { className: s()(eu, n) },
                                t !== Jt.None &&
                                    i().createElement('div', {
                                        className: s()(tu, o.icon),
                                        style: { backgroundImage: `url('${iu(t, m)}')` },
                                    }),
                                i().createElement('div', { className: s()(uu, o.text) }, d),
                            );
                        },
                    );
                let su;
                !(function (e) {
                    (e.DISABLED = 'disabled'), (e.ACTIVE = 'active'), (e.RESETTABLE = 'resettable');
                })(su || (su = {}));
                const ou = {
                    base: 'Progression_base_4f',
                    title: 'Progression_title_d7',
                    base__resettable: 'Progression_base__resettable_e1',
                    base__disabled: 'Progression_base__disabled_bf',
                    contentWrapper: 'Progression_contentWrapper_24',
                    progress: 'Progression_progress_4f',
                    progressValue: 'Progression_progressValue_1a',
                    countdown: 'Progression_countdown_5b',
                };
                var lu = u(9762),
                    cu = u(6457);
                let mu, du;
                !(function (e) {
                    (e.Init = 'init'),
                        (e.Active = 'active'),
                        (e.NonActive = 'nonActive'),
                        (e.UpdateState = 'updateState');
                })(mu || (mu = {})),
                    (function (e) {
                        (e.CheckDataUpdate = 'checkDataUpdate'),
                            (e.UpdateStageData = 'updateStageData'),
                            (e.SwitchState = 'switchState');
                    })(du || (du = {}));
                const bu = (e) => e === su.ACTIVE,
                    Eu = (e) => bu(e.status),
                    gu = (e) => !bu(e.status),
                    Au = (e, t) => e.status !== t.status && Cu(e, t),
                    Cu = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints === e.currentPoints &&
                        t.maximumPoints === e.maximumPoints &&
                        0 === e.earnedPoints,
                    Fu = (e, t) =>
                        bu(t.status) &&
                        ((1 === t.stage && 0 === t.currentPoints) ||
                            (t.stage === e.stage && e.maximumPoints !== t.maximumPoints)),
                    Du = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints === e.currentPoints &&
                        t.maximumPoints === e.maximumPoints &&
                        0 !== e.earnedPoints,
                    Bu = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints !== e.currentPoints &&
                        t.maximumPoints === e.maximumPoints,
                    pu = (e, t) => t.stage > e.stage && e.currentPoints < e.maximumPoints,
                    hu = (e, t) => t.stage > e.stage && e.currentPoints === e.maximumPoints,
                    vu = (e, t) => t.stage < e.stage && e.currentPoints > 0,
                    fu = (e, t) => t.stage < e.stage && 0 === e.currentPoints,
                    xu = (e, t) => e.status !== t.status && bu(t.status),
                    wu = (e) => {
                        e.isSoundEnabled && 0 !== e.earnedPoints && x('ev_fep_progress_bar');
                    },
                    Su = R.strings.fun_random.modes,
                    Nu = R.strings.fun_random.modeSelector.progression,
                    ku = {
                        freezed: !1,
                        withStack: !1,
                        type: Ke.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    yu = ({
                        status: e,
                        currentStage: t,
                        statusTimer: u,
                        stageCurrentPoints: a,
                        stageMaximumPoints: _,
                        conditionText: n,
                        isContentVisible: o,
                        assetsPointer: l,
                    }) => {
                        const c = i().useMemo(() => {
                                return (
                                    (u = 'fun-card-fsm'),
                                    (r = {
                                        status: e,
                                        stage: t,
                                        currentPoints: a,
                                        maximumPoints: _,
                                        earnedPoints: 0,
                                        isSoundEnabled: o,
                                    }),
                                    (i = 300),
                                    (0, lu.C)(
                                        {
                                            preserveActionOrder: !0,
                                            id: u,
                                            initial: mu.Init,
                                            context: r,
                                            states: {
                                                [mu.Init]: { always: { target: mu.UpdateState } },
                                                [mu.UpdateState]: {
                                                    always: [
                                                        { target: mu.Active, cond: Eu },
                                                        { target: mu.NonActive, cond: gu },
                                                    ],
                                                },
                                                [mu.Active]: {
                                                    on: {
                                                        [du.CheckDataUpdate]: [
                                                            {
                                                                target: mu.Active,
                                                                actions: [
                                                                    (0, cu.lW)((e, t) => ({
                                                                        type: du.SwitchState,
                                                                        status: t.status,
                                                                    })),
                                                                ],
                                                                cond: Au,
                                                            },
                                                            { target: mu.Active, cond: Cu },
                                                            {
                                                                target: mu.UpdateState,
                                                                actions: [
                                                                    (0, cu.f0)({
                                                                        status: (e, t) => t.status,
                                                                        stage: (e, t) => t.stage,
                                                                        currentPoints: (e, t) => t.currentPoints,
                                                                        maximumPoints: (e, t) => t.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    }),
                                                                ],
                                                                cond: Fu,
                                                            },
                                                            {
                                                                target: mu.Active,
                                                                actions: [
                                                                    (0, cu.lW)((e) => ({
                                                                        type: du.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.maximumPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: e.maximumPoints - e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: pu,
                                                            },
                                                            {
                                                                target: mu.Active,
                                                                actions: [
                                                                    (0, cu.lW)((e, t) => ({
                                                                        type: du.UpdateStageData,
                                                                        stage: t.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: t.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    (0, cu.lW)(
                                                                        (e, t) => ({
                                                                            type: du.UpdateStageData,
                                                                            stage: t.stage,
                                                                            currentPoints: t.currentPoints,
                                                                            maximumPoints: t.maximumPoints,
                                                                            earnedPoints: t.currentPoints,
                                                                        }),
                                                                        { delay: i },
                                                                    ),
                                                                ],
                                                                cond: hu,
                                                            },
                                                            {
                                                                target: mu.Active,
                                                                actions: [
                                                                    (0, cu.lW)((e, t) => ({
                                                                        type: du.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: t.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: t.currentPoints - e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: Bu,
                                                            },
                                                            {
                                                                target: mu.Active,
                                                                actions: [
                                                                    (0, cu.lW)((e) => ({
                                                                        type: du.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    (0, cu.lW)((e, t) => ({
                                                                        type: du.SwitchState,
                                                                        status: t.status,
                                                                    })),
                                                                ],
                                                                cond: Du,
                                                            },
                                                            {
                                                                target: mu.Active,
                                                                actions: [
                                                                    (0, cu.lW)((e) => ({
                                                                        type: du.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: -e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: vu,
                                                            },
                                                            {
                                                                target: mu.Active,
                                                                actions: [
                                                                    (0, cu.lW)((e, t) => ({
                                                                        type: du.UpdateStageData,
                                                                        stage: t.stage,
                                                                        currentPoints: t.currentPoints,
                                                                        maximumPoints: t.maximumPoints,
                                                                        earnedPoints: t.currentPoints - t.maximumPoints,
                                                                    })),
                                                                ],
                                                                cond: fu,
                                                            },
                                                        ],
                                                        [du.UpdateStageData]: {
                                                            target: mu.Active,
                                                            actions: [
                                                                (0, cu.f0)({
                                                                    stage: (e, t) => t.stage,
                                                                    currentPoints: (e, t) => t.currentPoints,
                                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                                    earnedPoints: (e, t) => t.earnedPoints,
                                                                }),
                                                                wu,
                                                            ],
                                                        },
                                                        [du.SwitchState]: {
                                                            target: mu.UpdateState,
                                                            actions: (0, cu.f0)({ status: (e, t) => t.status }),
                                                        },
                                                    },
                                                },
                                                [mu.NonActive]: {
                                                    on: {
                                                        [du.CheckDataUpdate]: {
                                                            target: mu.UpdateState,
                                                            actions: [
                                                                (0, cu.f0)({
                                                                    status: (e, t) => t.status,
                                                                    stage: (e, t) => t.stage,
                                                                    currentPoints: (e, t) => t.currentPoints,
                                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                                    earnedPoints: 0,
                                                                }),
                                                            ],
                                                            cond: xu,
                                                        },
                                                        [du.SwitchState]: {
                                                            target: mu.UpdateState,
                                                            actions: (0, cu.f0)({ status: (e, t) => t.status }),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            guards: {
                                                hasActiveStatus: Eu,
                                                hasNonActiveStatus: gu,
                                                isStatusUpdate: Au,
                                                isNoUpdate: Cu,
                                                isTaskSwitchingUpdate: Fu,
                                                isUpdateCurrentStageWithZeroEarnPoints: Du,
                                                isUpdateCurrentStageWithCurrentPoints: Bu,
                                                isUpdateToNextStageWithoutFillMax: hu,
                                                isUpdateToNextStageWithFillMax: pu,
                                                isUpdateToPrevStageWithReset: vu,
                                                isUpdateToPrevStageWithoutReset: fu,
                                                isUpdateWithActiveSwitch: xu,
                                            },
                                        },
                                    )
                                );
                                var u, r, i;
                            }, []),
                            m = (0, Xt.eO)(c),
                            d = m[0],
                            b = m[1],
                            E = (0, r.useMemo)(() => {
                                var e;
                                return (null != (e = Su.$dyn(l)) ? e : Su.undefined).mode_selector.progression;
                            }, [l]),
                            g = d.context.status === su.ACTIVE,
                            A = d.context.status === su.RESETTABLE,
                            C = Nu.$dyn(d.context.currentPoints > 0 ? 'steps' : 'stepsNoProgress'),
                            F = E.resettable(),
                            D = A ? F : n;
                        (0, r.useEffect)(() => {
                            b({ type: du.CheckDataUpdate, status: e, stage: t, currentPoints: a, maximumPoints: _ });
                        }, [e, a, _, t, b]);
                        const B = (0, r.useCallback)(() => {
                            b({ type: du.CheckDataUpdate, status: e, stage: t, currentPoints: a, maximumPoints: _ });
                        }, [a, _, t, e, b]);
                        return i().createElement(
                            Ce.u,
                            {
                                contentId: R.views.fun_random.lobby.tooltips.FunRandomProgressionTooltipView('resId'),
                                isEnabled: g,
                            },
                            i().createElement(
                                'div',
                                { className: s()(ou.base, ou[`base__${d.context.status}`]) },
                                i().createElement('div', { className: ou.title }, D),
                                i().createElement(
                                    'div',
                                    { className: ou.contentWrapper },
                                    i().createElement(
                                        'div',
                                        { className: ou.progress },
                                        i().createElement(
                                            'div',
                                            { className: ou.progressValue },
                                            i().createElement(Pt, {
                                                text: C,
                                                binding: {
                                                    done: d.context.currentPoints,
                                                    total: d.context.maximumPoints,
                                                },
                                            }),
                                        ),
                                        i().createElement(yt, {
                                            size: Ye.Small,
                                            value: d.context.currentPoints,
                                            maxValue: d.context.maximumPoints,
                                            animationSettings: ku,
                                            deltaFrom: d.context.currentPoints - d.context.earnedPoints,
                                            onEndAnimation: B,
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: ou.countdown },
                                        i().createElement(nu, { duration: u, style: Qt.Description }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Wu = {
                        widgetOverlay: 'FunRandomCard_widgetOverlay_f2',
                        subtitle: 'FunRandomCard_subtitle_d0',
                        belowStatus: 'FunRandomCard_belowStatus_03',
                        belowStatus__hidden: 'FunRandomCard_belowStatus__hidden_ad',
                    },
                    Tu = ['size', 'showWidget', 'widget', 'isContentVisible', 'resourcesFolderName'];
                function Lu() {
                    return (
                        (Lu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Lu.apply(this, arguments)
                    );
                }
                const Ru = R.images.fun_random.gui.maps.icons.feature.asset_packs.modes,
                    Pu = R.strings.fun_random.sub_modes,
                    Mu = (e) => {
                        var t;
                        let u = e.size,
                            a = e.showWidget,
                            _ = e.widget,
                            r = e.isContentVisible,
                            n = e.resourcesFolderName,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, Tu);
                        const l = u === oe.Id.B1 && a,
                            c = null == (t = Pu.$dyn(n)) ? void 0 : t.alert_tooltip,
                            m = c ? c.alert() : '',
                            d = m && { text: m, header: c.modeSelectHeader(), description: c.description() };
                        return i().createElement(
                            'div',
                            { className: Wu[`base__${u}`] },
                            i().createElement(
                                qe,
                                Lu(
                                    {
                                        showWidget: a,
                                        size: u,
                                        belowStatusComponent:
                                            l &&
                                            i().createElement(yu, Lu({}, _, { isContentVisible: r, assetsPointer: n })),
                                        alert: d,
                                        classNames: {
                                            belowStatus: s()(Wu.belowStatus, !l && Wu.belowStatus__hidden),
                                            subtitle: Wu.subtitle,
                                        },
                                        resourcesFolderName: n,
                                    },
                                    o,
                                    {
                                        resourceFolderGetter: (e) => {
                                            var t;
                                            return (null != (t = Ru.$dyn(e)) ? t : Ru.undefined).mode_selector;
                                        },
                                    },
                                ),
                            ),
                        );
                    },
                    Iu = (e) => {
                        (0, r.useEffect)(e, []);
                    },
                    Ou = {
                        base: 'PopoverDecorator_base_ed',
                        decorator: 'PopoverDecorator_decorator_d3',
                        arrow: 'PopoverDecorator_arrow_8a',
                        arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                        arrow__top: 'PopoverDecorator_arrow__top_6e',
                        arrow__left: 'PopoverDecorator_arrow__left_7a',
                        arrow__right: 'PopoverDecorator_arrow__right_b6',
                        closeBtn: 'PopoverDecorator_closeBtn_32',
                        content: 'PopoverDecorator_content_f0',
                    };
                function $u() {
                    const e = (0, r.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, r.useEffect)(() => t, []),
                        (0, r.useMemo)(
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
                var Hu;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(Hu || (Hu = {}));
                const zu = ['__left', '__right', '__top', '__bottom'],
                    Uu =
                        ((0, r.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: u, customStyles: _ = {} }, n) => {
                                const o = (0, r.useRef)(null),
                                    l = (0, r.useRef)(null),
                                    c = (0, r.useRef)(null),
                                    m = (0, r.useState)(window.decorator && window.decorator.directionType),
                                    d = m[0],
                                    b = m[1],
                                    E = (0, r.useCallback)(() => {
                                        w.playClick(), a.O.view.sendEvent.close();
                                    }, []),
                                    g = (0, r.useCallback)(() => {
                                        w.playHighlight();
                                    }, []),
                                    A = s()(Ou.arrow, Ou[`arrow${zu[d]}`]);
                                Iu(
                                    () => (
                                        a.O.client.events.mouse.enableOutside(),
                                        a.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (u ? u() : a.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const C = (0, r.useCallback)(
                                        (e) => {
                                            let t = e.target;
                                            do {
                                                if (t === o.current || t === c.current) return;
                                                t = t.parentNode;
                                            } while (t);
                                            const _ = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = a.O.client.getMouseGlobalPosition(),
                                                    t = ![_.boundX, _.boundY, _.boundWidth, _.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    u =
                                                        e.x < _.boundX ||
                                                        e.x > _.boundX + _.boundWidth ||
                                                        e.y > _.boundY + _.boundHeight ||
                                                        e.y < _.boundY;
                                                if (t && !u) return;
                                            }
                                            u ? u() : a.O.view.sendEvent.close('popover');
                                        },
                                        [o, c, u],
                                    ),
                                    F = $u(),
                                    D = (0, r.useCallback)(() => {
                                        const e = l.current;
                                        if (e)
                                            return (
                                                a.O.view.freezeTextureBeforeResize(),
                                                F.run(() => {
                                                    const t = e.scrollWidth,
                                                        u = e.scrollHeight;
                                                    a.O.view.resize(t, u), b(window.decorator.directionType);
                                                })
                                            );
                                    }, [F]);
                                return (
                                    (0, r.useImperativeHandle)(n, () => ({ updateSize: D })),
                                    Iu(() => {
                                        a.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, r.useEffect)(() => {
                                        document.addEventListener('mousedown', C, { capture: !0 });
                                        const e = ((e) => {
                                            let t = !1;
                                            return {
                                                promise: new Promise((u, a) => {
                                                    e.then((e) => !t && u(e)).catch((e) => !t && a(e));
                                                }),
                                                cancel() {
                                                    t = !0;
                                                },
                                            };
                                        })((0, $.Eu)());
                                        return (
                                            !t && e.promise.then(() => D()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', C);
                                            }
                                        );
                                    }, [D, C, t]),
                                    i().createElement(
                                        'div',
                                        { className: Ou.base, ref: l },
                                        i().createElement(
                                            'div',
                                            { className: Ou.decorator },
                                            i().createElement(
                                                'div',
                                                { className: Ou.content, ref: o },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    i().createElement(
                                                        I.i,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        i().createElement('div', {
                                                            className: Ou.closeBtn,
                                                            onClick: E,
                                                            onMouseEnter: g,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            i().createElement('div', { className: A, style: _.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        [
                            'contentId',
                            'decoratorId',
                            'direction',
                            'targetId',
                            'args',
                            'onClick',
                            'children',
                            'isEnabled',
                        ]);
                function Vu() {
                    return (
                        (Vu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Vu.apply(this, arguments)
                    );
                }
                const ju = (e) => {
                        let t = e.contentId,
                            u = e.decoratorId,
                            a = e.direction,
                            _ = void 0 === a ? Hu.Top : a,
                            n = e.targetId,
                            s = e.args,
                            o = e.onClick,
                            l = e.children,
                            c = e.isEnabled,
                            m = void 0 === c || c,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, Uu);
                        const b = (0, r.useRef)(null),
                            E = (0, r.useCallback)(() => {
                                if ((0, $.wU)()) return (0, $.SW)();
                                b.current && (0, $.P3)(t, _, b.current, u, n, s);
                            }, [t, _, s, u, n]);
                        return i().createElement(
                            'div',
                            Vu(
                                {
                                    ref: b,
                                    onMouseDown:
                                        ((g = l.props.onClick),
                                        (e) => {
                                            m && (E(), o && o(e), g && g(e));
                                        }),
                                },
                                d,
                            ),
                            l,
                        );
                        var g;
                    },
                    qu = 'ToggleButton_base_d9',
                    Gu = 'ToggleButton_content_ee',
                    Zu = 'ToggleButton_overlay_d9',
                    Yu = 'ToggleButton_base__active_6e',
                    Ku = 'ToggleButton_indicator_c5',
                    Xu = ['active', 'className', 'children', 'size', 'showIndicator'];
                function Ju() {
                    return (
                        (Ju =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ju.apply(this, arguments)
                    );
                }
                const Qu = (e) => {
                        let t = e.active,
                            u = e.className,
                            a = e.children,
                            _ = e.size,
                            r = void 0 === _ ? k.small : _,
                            n = e.showIndicator,
                            o = void 0 === n || n,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, Xu);
                        return i().createElement(
                            'div',
                            { className: s()(qu, u, t && Yu) },
                            i().createElement(
                                W,
                                Ju({ type: 'secondary', size: r }, l),
                                i().createElement('div', { className: Gu }, a),
                            ),
                            o && i().createElement('div', { className: Ku }),
                            i().createElement('div', { className: Zu }),
                        );
                    },
                    ea =
                        ((0, r.memo)(Qu),
                        {
                            base: 'Settings_base_fe',
                            base__extraSmall: 'Settings_base__extraSmall_6e',
                            base__small: 'Settings_base__small_5a',
                            base__medium: 'Settings_base__medium_a8',
                            base__bigButton: 'Settings_base__bigButton_d2',
                            base__bigButton__medium: 'Settings_base__bigButton__medium_7f',
                            base__bigButton__extraSmall: 'Settings_base__bigButton__extraSmall_8f',
                            base__bigButton__small: 'Settings_base__bigButton__small_76',
                            base__anim: 'Settings_base__anim_b2',
                            settingsLabel: 'Settings_settingsLabel_0e',
                            toggle: 'Settings_toggle_92',
                            toggle__extraSmall: 'Settings_toggle__extraSmall_ff',
                            toggle__small: 'Settings_toggle__small_df',
                            toggle__medium: 'Settings_toggle__medium_a6',
                            toggle__shortBtn: 'Settings_toggle__shortBtn_b5',
                            icon: 'Settings_icon_90',
                            icon__shortBtn: 'Settings_icon__shortBtn_34',
                            bubble: 'Settings_bubble_6e',
                        }),
                    ta = R.strings.mode_selector.mode.random,
                    ua = (0, r.memo)(
                        ({
                            contentId: e,
                            handleSettingsClick: t,
                            body: u,
                            showBigSettingsButton: a,
                            isShowButton: _,
                            isSettingsActive: r,
                            withBubble: n,
                        }) => {
                            const o = (0, se.Z)(['base', 'toggle', 'base__bigButton'], ea);
                            return i().createElement(
                                'div',
                                { className: s()(o.base, a && o.base__bigButton, _ && ea.base__anim), onClick: t },
                                i().createElement(
                                    ju,
                                    { contentId: e, direction: a ? Hu.Top : Hu.Right },
                                    i().createElement(
                                        I.i,
                                        { body: u, isEnabled: _ },
                                        i().createElement(
                                            Qu,
                                            {
                                                type: N.ghost,
                                                size: k.medium,
                                                active: r,
                                                showIndicator: !1,
                                                mixClass: s()(o.toggle, !a && ea.toggle__shortBtn),
                                            },
                                            i().createElement(
                                                'div',
                                                { className: ea.settingsLabel },
                                                i().createElement('div', {
                                                    className: s()(ea.icon, !a && ea.icon__shortBtn),
                                                }),
                                                a && ta.setup(),
                                            ),
                                        ),
                                    ),
                                ),
                                Boolean(n) && i().createElement('div', { className: ea.bubble }),
                            );
                        },
                    ),
                    aa = ['isSelected', 'onHoverChanged', 'isSettingsActive', 'withSettingsNotification'];
                function _a() {
                    return (
                        (_a =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        _a.apply(this, arguments)
                    );
                }
                const ra = (e) => {
                    let t = e.isSelected,
                        u = e.onHoverChanged,
                        a = e.isSettingsActive,
                        _ = e.withSettingsNotification,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                _ = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                            return _;
                        })(e, aa);
                    const s = (0, r.useCallback)((e) => {
                            e.stopPropagation();
                        }, []),
                        o = (0, pe.B)(u),
                        l = o[0],
                        c = o[1],
                        m = [oe.Id.B0, oe.Id.B1].includes(n.size),
                        d = l || t || a;
                    return i().createElement(
                        qe,
                        _a(
                            {
                                id: 'mode-selector-random-battle',
                                isSelected: t,
                                onHoverChanged: c,
                                belowStatusComponent: i().createElement(ua, {
                                    contentId: R.views.lobby.mode_selector.popovers.RandomBattlePopover('resId'),
                                    handleSettingsClick: s,
                                    body: R.strings.tooltips.mode_selector.popover.body(),
                                    showBigSettingsButton: m,
                                    isShowButton: d,
                                    isSettingsActive: a,
                                    withBubble: _,
                                }),
                            },
                            n,
                        ),
                    );
                };
                function ia() {
                    return (
                        (ia =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ia.apply(this, arguments)
                    );
                }
                const na = [oe.Id.B5, oe.Id.B6],
                    sa = [oe.Id.B4, oe.Id.B5, oe.Id.B6],
                    oa = [],
                    la = (e) => {
                        let t = ia({}, e);
                        return i().createElement(
                            qe,
                            ia(
                                {
                                    calendarTooltip: ce.D3,
                                    forceShowIcon: t.showWidget && na.includes(t.size),
                                    hideStatus: t.showWidget && sa.includes(t.size),
                                    noWidgetSizes: oa,
                                },
                                t,
                            ),
                        );
                    },
                    ca = ['type', 'widget', 'isContentVisible'];
                function ma() {
                    return (
                        (ma =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ma.apply(this, arguments)
                    );
                }
                const da = [oe.Id.B6],
                    ba = (e) => {
                        let t = e.type,
                            u = e.widget,
                            a = e.isContentVisible,
                            _ = void 0 === a || a,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, ca);
                        const n = r.size;
                        switch (t) {
                            case 1:
                                return i().createElement(ra, r);
                            case 2: {
                                const e = u && u.isEnabled && i().createElement(Ee.n, ma({ size: n }, u));
                                return i().createElement(la, ma({ widgetComponent: e }, r));
                            }
                            case 3:
                                return i().createElement(qe, ma({ calendarTooltip: ce.zD }, r));
                            case 4: {
                                const e =
                                    u &&
                                    u.isEnabled &&
                                    i().createElement(be.Gg, ma({ size: n, conditions: r.conditions }, u));
                                return i().createElement(
                                    qe,
                                    ma(
                                        {
                                            calendarTooltip: ce.TR,
                                            widgetComponent: e,
                                            noWidgetSizes: da,
                                            divider: '\n',
                                        },
                                        r,
                                    ),
                                );
                            }
                            case 5: {
                                const e = u,
                                    t = e.status,
                                    a = e.stageCurrentPoints,
                                    _ = e.stageMaximumPoints,
                                    s =
                                        u &&
                                        t === le.ACTIVE &&
                                        i().createElement(me.$, { size: n, isCompletedProgression: a === _ });
                                return i().createElement(zt, ma({ widgetComponent: s, widget: u, divider: '\n' }, r));
                            }
                            case 6:
                                return i().createElement(
                                    Mu,
                                    ma({ calendarTooltip: ce.$b, widget: u, isContentVisible: _, divider: '\n' }, r),
                                );
                            case 7: {
                                const e = u,
                                    t = e.status,
                                    a = e.stageCurrentPoints,
                                    _ = e.stageMaximumPoints,
                                    s =
                                        u &&
                                        t === le.ACTIVE &&
                                        i().createElement(de.$, { size: n, isCompletedProgression: a === _ });
                                return i().createElement(
                                    Kt,
                                    ma({ calendarTooltip: ce.hg, widgetComponent: s, widget: u, divider: '\n' }, r),
                                );
                            }
                            default:
                                return i().createElement(qe, r);
                        }
                    },
                    Ea = 'Column_base_41';
                function ga() {
                    return (
                        (ga =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ga.apply(this, arguments)
                    );
                }
                const Aa = ({ items: e, showWidgets: t, canBeWide: u = !1, isContentVisible: a = !0 }) => {
                        const _ = (0, oe.SH)(e.length, u);
                        return i().createElement(
                            'div',
                            { className: Ea },
                            e
                                .sort((e, t) => e.priority - t.priority)
                                .map((e) =>
                                    i().createElement(
                                        ba,
                                        ga({ key: `item_${e.index}` }, e, {
                                            size: _,
                                            showWidget: t,
                                            isContentVisible: a,
                                        }),
                                    ),
                                ),
                        );
                    },
                    Ca = {
                        base: 'ModeSelectorViewApp_base_4a',
                        placeholder: 'ModeSelectorViewApp_placeholder_1e',
                        base__show: 'ModeSelectorViewApp_base__show_3c',
                        closeButton: 'ModeSelectorViewApp_closeButton_d2',
                        closeButton__extraSmall: 'ModeSelectorViewApp_closeButton__extraSmall_52',
                        closeButton__small: 'ModeSelectorViewApp_closeButton__small_e4',
                        toggleButton: 'ModeSelectorViewApp_toggleButton_a8',
                        toggleButtonContainer: 'ModeSelectorViewApp_toggleButtonContainer_23',
                        title: 'ModeSelectorViewApp_title_f5',
                        title__medium: 'ModeSelectorViewApp_title__medium_99',
                        title__extraSmall: 'ModeSelectorViewApp_title__extraSmall_e5',
                        title__small: 'ModeSelectorViewApp_title__small_32',
                        selectMap: 'ModeSelectorViewApp_selectMap_4a',
                        selectMap__empty: 'ModeSelectorViewApp_selectMap__empty_ce',
                        selectMapTitle: 'ModeSelectorViewApp_selectMapTitle_00',
                        selectMapTitle__extraSmall: 'ModeSelectorViewApp_selectMapTitle__extraSmall_3a',
                        selectMapTitle__small: 'ModeSelectorViewApp_selectMapTitle__small_01',
                        selectMapTitle__medium: 'ModeSelectorViewApp_selectMapTitle__medium_a1',
                        selectMapButton: 'ModeSelectorViewApp_selectMapButton_04',
                        buttonText: 'ModeSelectorViewApp_buttonText_44',
                        centerBlock: 'ModeSelectorViewApp_centerBlock_13',
                        items: 'ModeSelectorViewApp_items_8f',
                        base__hide: 'ModeSelectorViewApp_base__hide_20',
                        hide: 'ModeSelectorViewApp_hide_4a',
                        show: 'ModeSelectorViewApp_show_ef',
                        items__medium: 'ModeSelectorViewApp_items__medium_72',
                        items__extraSmall: 'ModeSelectorViewApp_items__extraSmall_fc',
                        items__small: 'ModeSelectorViewApp_items__small_36',
                    },
                    Fa = () => {
                        const e = ue(),
                            t = e.isMapSelectionVisible,
                            u = e.isMapSelectionEnabled,
                            a = e.onShowMapSelectionClicked,
                            _ = e.onShowWidgetsClicked,
                            n = e.areWidgetsVisible,
                            o = e.isContentVisible,
                            l = ue('model.cardList'),
                            c = (0, r.useState)(!1),
                            m = c[0],
                            d = c[1],
                            b = (0, r.useRef)(!0),
                            E = n === !m,
                            g = (0, se.Z)(['closeButton', 'title', 'items', 'selectMapTitle'], Ca),
                            A = {};
                        l.forEach(({ value: e }) => {
                            const t = e.column;
                            t in A || (A[t] = new Array()), A[t].push(e);
                        });
                        const C = Object.keys(A)
                                .sort((e, t) => parseInt(e) - parseInt(t))
                                .map((e) => A[e]),
                            F = (0, r.useCallback)(() => {
                                (0, $.Sy)();
                            }, []),
                            D = (0, r.useCallback)(() => {
                                a();
                            }, [a]),
                            B = (0, r.useCallback)(() => {
                                _();
                            }, [_]),
                            p = (0, r.useCallback)(() => {
                                b.current = !0;
                            }, []),
                            h = (0, r.useCallback)(() => {
                                (b.current = !1), !n && m && d(!1);
                            }, [n, m]);
                        ne(),
                            (0, r.useEffect)(() => {
                                function e(e) {
                                    b.current && d(e.altKey);
                                }
                                return (
                                    window.addEventListener('keydown', e),
                                    window.addEventListener('keyup', e),
                                    () => {
                                        window.removeEventListener('keydown', e),
                                            window.removeEventListener('keyup', e);
                                    }
                                );
                            }, []);
                        const v = (0, r.useRef)(null);
                        return (
                            (0, r.useEffect)(() => {
                                v.current &&
                                    (o
                                        ? (v.current.classList.remove(Ca.base__hide),
                                          v.current.classList.add(Ca.base__show))
                                        : (v.current.classList.remove(Ca.base__show),
                                          v.current.classList.add(Ca.base__hide)));
                            }, [o]),
                            i().createElement(
                                'div',
                                { className: Ca.base, ref: v },
                                i().createElement(
                                    'div',
                                    { className: Ca.placeholder, onMouseOver: p, onMouseLeave: h },
                                    i().createElement(
                                        'div',
                                        { className: g.closeButton },
                                        i().createElement(M, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: F,
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: Ca.centerBlock },
                                        i().createElement(
                                            'div',
                                            { className: g.title },
                                            R.strings.mode_selector.title(),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: s()(Ca.selectMap, !t && Ca.selectMap__empty) },
                                            i().createElement(
                                                'div',
                                                { className: g.selectMapTitle },
                                                R.strings.mode_selector.selectMap(),
                                            ),
                                            i().createElement(
                                                W,
                                                {
                                                    size: k.small,
                                                    type: N.primary,
                                                    mixClass: Ca.selectMapButton,
                                                    onClick: D,
                                                    disabled: !u,
                                                },
                                                i().createElement(
                                                    'div',
                                                    { className: Ca.buttonText },
                                                    R.strings.mode_selector.button.select(),
                                                ),
                                            ),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: Ca.items },
                                            C.map((e, t) =>
                                                i().createElement(Aa, {
                                                    key: `column_${t}`,
                                                    items: e,
                                                    showWidgets: E,
                                                    canBeWide: 0 === t && C.length <= 3,
                                                    isContentVisible: o,
                                                }),
                                            ),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: Ca.toggleButtonContainer },
                                            o &&
                                                i().createElement(
                                                    I.i,
                                                    { body: R.strings.tooltips.mode_selector.progressionBtn.body() },
                                                    i().createElement(
                                                        'div',
                                                        { id: 'mode-selector-widgets-btn' },
                                                        i().createElement(
                                                            Qu,
                                                            {
                                                                size: k.small,
                                                                type: N.secondary,
                                                                onClick: B,
                                                                active: E,
                                                                mixClass: Ca.toggleButton,
                                                            },
                                                            R.strings.mode_selector.button.progression(),
                                                        ),
                                                    ),
                                                ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    };
                a.O.view.extraSize.set(0, 0),
                    a.O.view.whenTutorialReady.then(() => {
                        f().render(
                            i().createElement(h, null, i().createElement(Fa, null)),
                            document.getElementById('root'),
                        );
                    });
            },
            8668: (e, t, u) => {
                'use strict';
                u.d(t, { Hi: () => r, Jh: () => _, S4: () => n, u_: () => i });
                var a = u(3486);
                let _;
                !(function (e) {
                    (e.Huge = 'huge'), (e.Big = 'big'), (e.Medium = 'medium'), (e.Small = 'small');
                })(_ || (_ = {}));
                const r = [a.Id.B4, a.Id.B5, a.Id.B6],
                    i = [a.Id.B0, a.Id.B1, a.Id.B2],
                    n = {
                        [a.Id.B0]: { [a.Cg.Big]: _.Huge, [a.Cg.Medium]: _.Huge, [a.Cg.Small]: _.Big },
                        [a.Id.B1]: { [a.Cg.Big]: _.Huge, [a.Cg.Medium]: _.Huge, [a.Cg.Small]: _.Big },
                        [a.Id.B2]: { [a.Cg.Big]: _.Huge, [a.Cg.Medium]: _.Huge, [a.Cg.Small]: _.Big },
                        [a.Id.B3]: { [a.Cg.Big]: _.Huge, [a.Cg.Medium]: _.Big, [a.Cg.Small]: _.Big },
                        [a.Id.B4]: { [a.Cg.Big]: _.Big, [a.Cg.Medium]: _.Big, [a.Cg.Small]: _.Medium },
                        [a.Id.B5]: { [a.Cg.Big]: _.Medium, [a.Cg.Medium]: _.Medium, [a.Cg.Small]: _.Small },
                        [a.Id.B6]: { [a.Cg.Big]: _.Medium, [a.Cg.Medium]: _.Small, [a.Cg.Small]: _.Small },
                    };
            },
            8188: (e, t, u) => {
                'use strict';
                u.d(t, { B: () => l });
                var a = u(280),
                    _ = u(6179),
                    r = u.n(_),
                    i = u(8487);
                const n = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    s = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    o = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    l = ({ text: e, binding: t, classMix: u }) => {
                        const l = (0, _.useCallback)((e) => ({ color: `#${e}` }), []),
                            c = t || {};
                        let m = n.exec(e),
                            d = e;
                        for (; m; ) {
                            const u = m[0],
                                _ = s.exec(u),
                                b = o.exec(u),
                                E = m[1];
                            if (_ && b) {
                                const e = _[0],
                                    n = e + b[0].length + e;
                                (d = d.replace(u, `%(${n})`)),
                                    (c[n] = i.Z[e]
                                        ? r().createElement(
                                              'span',
                                              { className: i.Z[e] },
                                              r().createElement(a.z, { text: E, binding: t }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: l(e) },
                                              r().createElement(a.z, { text: E, binding: t }),
                                          ));
                            }
                            m = n.exec(e);
                        }
                        return r().createElement(a.z, { text: d, classMix: u, binding: c });
                    };
            },
            9930: (e, t, u) => {
                'use strict';
                u.d(t, { B: () => i, O: () => n });
                var a = u(7739),
                    _ = u(6179),
                    r = u(3486);
                const i = (e) => {
                        const t = (0, _.useState)(!1),
                            u = t[0],
                            a = t[1],
                            r = (0, _.useCallback)(
                                (t) => {
                                    a(t), e && e(t);
                                },
                                [e],
                            );
                        return [u, r];
                    },
                    n = () => {
                        const e = (0, _.useContext)(a.YN),
                            t = e.extraSmall,
                            u = e.small,
                            i = e.medium;
                        return (0, _.useMemo)(() => {
                            switch (!0) {
                                case u:
                                case t:
                                    return r.Cg.Small;
                                case i:
                                    return r.Cg.Medium;
                                default:
                                    return r.Cg.Big;
                            }
                        }, [t, i, u]);
                    };
            },
            3486: (e, t, u) => {
                'use strict';
                u.d(t, { Cg: () => r, Hp: () => s, Id: () => _, SH: () => i, d6: () => a });
                const a = (e) => (e ? R.images.gui.maps.icons.mode_selector.mode.$dyn(e) : null);
                let _, r;
                !(function (e) {
                    (e.B0 = 'b0'),
                        (e.B1 = 'b1'),
                        (e.B2 = 'b2'),
                        (e.B3 = 'b3'),
                        (e.B4 = 'b4'),
                        (e.B5 = 'b5'),
                        (e.B6 = 'b6');
                })(_ || (_ = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big');
                    })(r || (r = {}));
                const i = (e, t = !1) => (t && 1 === e ? _.B0 : `b${Math.min(Math.max(Math.floor(e), 0), 6)}`),
                    n = {},
                    s = (...e) => {
                        let t = [];
                        for (var u = 0, a = e; u < a.length; u++) {
                            const e = a[u];
                            if (e in n) t = t.concat(n[e]);
                            else {
                                const u = [e];
                                for (let t = 0; t <= 6; t++) u.push(`${e}__${i(t)}`);
                                (n[e] = u), (t = t.concat(n[e]));
                            }
                        }
                        return t;
                    };
            },
            4194: (e, t, u) => {
                'use strict';
                u.d(t, { $: () => b });
                var a = u(6483),
                    _ = u.n(a),
                    r = u(9924),
                    i = u(6179),
                    n = u.n(i),
                    s = u(8668),
                    o = u(9930),
                    l = u(3486);
                const c = {
                        base: 'Widget_base_e7',
                        icon: 'Widget_icon_16',
                        icon__huge: 'Widget_icon__huge_6c',
                        icon__big: 'Widget_icon__big_ad',
                        icon__medium: 'Widget_icon__medium_db',
                        icon__small: 'Widget_icon__small_ea',
                        icon__b0: 'Widget_icon__b0_19',
                        icon__b1: 'Widget_icon__b1_0b',
                        icon__b0__medium: 'Widget_icon__b0__medium_43',
                        icon__b1__medium: 'Widget_icon__b1__medium_85',
                        icon__b0__extraSmall: 'Widget_icon__b0__extraSmall_a2',
                        icon__b0__small: 'Widget_icon__b0__small_c9',
                        icon__b1__extraSmall: 'Widget_icon__b1__extraSmall_6a',
                        icon__b1__small: 'Widget_icon__b1__small_67',
                        icon__b2: 'Widget_icon__b2_c7',
                        icon__b2__medium: 'Widget_icon__b2__medium_7f',
                        icon__b2__extraSmall: 'Widget_icon__b2__extraSmall_6b',
                        icon__b2__small: 'Widget_icon__b2__small_33',
                        icon__b3: 'Widget_icon__b3_21',
                        icon__b3__medium: 'Widget_icon__b3__medium_8c',
                        icon__b3__extraSmall: 'Widget_icon__b3__extraSmall_a9',
                        icon__b3__small: 'Widget_icon__b3__small_c7',
                        icon__b4: 'Widget_icon__b4_55',
                        icon__b4__medium: 'Widget_icon__b4__medium_f1',
                        icon__b4__extraSmall: 'Widget_icon__b4__extraSmall_26',
                        icon__b4__small: 'Widget_icon__b4__small_78',
                        icon__b5: 'Widget_icon__b5_af',
                        icon__b5__medium: 'Widget_icon__b5__medium_67',
                        icon__b5__extraSmall: 'Widget_icon__b5__extraSmall_7e',
                        icon__b5__small: 'Widget_icon__b5__small_32',
                        icon__b6: 'Widget_icon__b6_3a',
                        icon__b6__medium: 'Widget_icon__b6__medium_e3',
                        icon__b6__extraSmall: 'Widget_icon__b6__extraSmall_3e',
                        icon__b6__small: 'Widget_icon__b6__small_69',
                    },
                    m = { [s.Jh.Huge]: '130x130', [s.Jh.Big]: '64x64', [s.Jh.Medium]: '64x64', [s.Jh.Small]: '64x64' },
                    d = R.images.gui.maps.icons.battleRoyale.widget,
                    b = ({ size: e, isCompletedProgression: t }) => {
                        const u = (0, o.O)(),
                            a = (0, r.Z)([...(0, l.Hp)('icon')], c),
                            i = s.S4[e][u],
                            b = d.$dyn(`c_${m[i]}`).$dyn(t ? 'bg1' : 'bg2'),
                            E = _()(c.icon, c[`icon__${i}`], a[`icon__${e}`]);
                        return n().createElement(
                            'div',
                            { className: c.base },
                            n().createElement('div', { className: E, style: { backgroundImage: `url(${b})` } }),
                        );
                    };
            },
            3872: (e, t, u) => {
                'use strict';
                u.d(t, { $: () => d });
                var a = u(6483),
                    _ = u.n(a),
                    r = u(9924),
                    i = u(6179),
                    n = u.n(i),
                    s = u(8668),
                    o = u(9930),
                    l = u(3486);
                const c = {
                        base: 'Widget_base_82',
                        icon: 'Widget_icon_fa',
                        icon__huge: 'Widget_icon__huge_60',
                        icon__big: 'Widget_icon__big_55',
                        icon__medium: 'Widget_icon__medium_79',
                        icon__small: 'Widget_icon__small_f3',
                        icon__b0: 'Widget_icon__b0_37',
                        icon__b1: 'Widget_icon__b1_04',
                        icon__b0__medium: 'Widget_icon__b0__medium_8d',
                        icon__b1__medium: 'Widget_icon__b1__medium_39',
                        icon__b0__extraSmall: 'Widget_icon__b0__extraSmall_d4',
                        icon__b0__small: 'Widget_icon__b0__small_87',
                        icon__b1__extraSmall: 'Widget_icon__b1__extraSmall_f3',
                        icon__b1__small: 'Widget_icon__b1__small_9b',
                        icon__b2: 'Widget_icon__b2_7a',
                        icon__b2__medium: 'Widget_icon__b2__medium_3e',
                        icon__b2__extraSmall: 'Widget_icon__b2__extraSmall_4d',
                        icon__b2__small: 'Widget_icon__b2__small_22',
                        icon__b3: 'Widget_icon__b3_d8',
                        icon__b3__medium: 'Widget_icon__b3__medium_54',
                        icon__b3__extraSmall: 'Widget_icon__b3__extraSmall_dd',
                        icon__b3__small: 'Widget_icon__b3__small_65',
                        icon__b4: 'Widget_icon__b4_aa',
                        icon__b4__medium: 'Widget_icon__b4__medium_3c',
                        icon__b4__extraSmall: 'Widget_icon__b4__extraSmall_03',
                        icon__b4__small: 'Widget_icon__b4__small_78',
                        icon__b5: 'Widget_icon__b5_56',
                        icon__b5__medium: 'Widget_icon__b5__medium_79',
                        icon__b5__extraSmall: 'Widget_icon__b5__extraSmall_cc',
                        icon__b5__small: 'Widget_icon__b5__small_12',
                        icon__b6: 'Widget_icon__b6_7b',
                        icon__b6__medium: 'Widget_icon__b6__medium_42',
                        icon__b6__extraSmall: 'Widget_icon__b6__extraSmall_f6',
                        icon__b6__small: 'Widget_icon__b6__small_cd',
                    },
                    m = R.images.gui.maps.icons.comp7.widget,
                    d = ({ size: e, isCompletedProgression: t }) => {
                        const u = (0, o.O)(),
                            a = (0, r.Z)([...(0, l.Hp)('icon')], c),
                            i = s.S4[e][u],
                            d = t ? m.completed : m.in_progress;
                        return n().createElement(
                            'div',
                            { className: c.base },
                            n().createElement('div', {
                                className: _()(c.icon, c[`icon__${i}`], a[`icon__${e}`]),
                                style: { backgroundImage: `url(${d.main_icon_130()})` },
                            }),
                        );
                    };
            },
            7663: (e, t, u) => {
                'use strict';
                u.d(t, { Gg: () => B });
                var a = u(6483),
                    _ = u.n(a),
                    r = u(7078),
                    i = u(2646),
                    n = u(9924),
                    s = u(3649),
                    o = u(6179),
                    l = u.n(o),
                    c = u(4090),
                    m = u(8188),
                    d = u(8668),
                    b = u(9930),
                    E = u(3486);
                const g = {
                    base: 'EpicWidget_base_4d',
                    icon: 'EpicWidget_icon_c8',
                    icon__huge: 'EpicWidget_icon__huge_1b',
                    icon__big: 'EpicWidget_icon__big_e5',
                    icon__medium: 'EpicWidget_icon__medium_5c',
                    icon__small: 'EpicWidget_icon__small_bc',
                    icon__b0: 'EpicWidget_icon__b0_36',
                    icon__b1: 'EpicWidget_icon__b1_9a',
                    icon__b0__medium: 'EpicWidget_icon__b0__medium_e8',
                    icon__b1__medium: 'EpicWidget_icon__b1__medium_19',
                    icon__b0__extraSmall: 'EpicWidget_icon__b0__extraSmall_57',
                    icon__b0__small: 'EpicWidget_icon__b0__small_25',
                    icon__b1__extraSmall: 'EpicWidget_icon__b1__extraSmall_b1',
                    icon__b1__small: 'EpicWidget_icon__b1__small_6f',
                    icon__b2: 'EpicWidget_icon__b2_21',
                    icon__b2__medium: 'EpicWidget_icon__b2__medium_37',
                    icon__b2__extraSmall: 'EpicWidget_icon__b2__extraSmall_1a',
                    icon__b2__small: 'EpicWidget_icon__b2__small_84',
                    icon__b3: 'EpicWidget_icon__b3_9c',
                    icon__b3__medium: 'EpicWidget_icon__b3__medium_6d',
                    icon__b3__extraSmall: 'EpicWidget_icon__b3__extraSmall_4f',
                    icon__b3__small: 'EpicWidget_icon__b3__small_ca',
                    icon__b4: 'EpicWidget_icon__b4_04',
                    icon__b4__medium: 'EpicWidget_icon__b4__medium_ba',
                    icon__b4__extraSmall: 'EpicWidget_icon__b4__extraSmall_81',
                    icon__b4__small: 'EpicWidget_icon__b4__small_fe',
                    icon__b5: 'EpicWidget_icon__b5_09',
                    icon__b5__medium: 'EpicWidget_icon__b5__medium_4a',
                    icon__b5__extraSmall: 'EpicWidget_icon__b5__extraSmall_b1',
                    icon__b5__small: 'EpicWidget_icon__b5__small_00',
                    icon__b6: 'EpicWidget_icon__b6_04',
                    icon__b6__medium: 'EpicWidget_icon__b6__medium_d7',
                    icon__b6__extraSmall: 'EpicWidget_icon__b6__extraSmall_91',
                    icon__b6__small: 'EpicWidget_icon__b6__small_9a',
                    counter: 'EpicWidget_counter_ff',
                    counter__huge: 'EpicWidget_counter__huge_a5',
                    level: 'EpicWidget_level_ca',
                    icon__bg0: 'EpicWidget_icon__bg0_2e',
                    icon__bg1: 'EpicWidget_icon__bg1_d4',
                    icon__bg2: 'EpicWidget_icon__bg2_5a',
                    icon__bg3: 'EpicWidget_icon__bg3_c6',
                    icon__bg4: 'EpicWidget_icon__bg4_f9',
                    icon__bg5: 'EpicWidget_icon__bg5_a5',
                    level__b0: 'EpicWidget_level__b0_17',
                    level__b1: 'EpicWidget_level__b1_fd',
                    level__b2: 'EpicWidget_level__b2_cd',
                    level__b3: 'EpicWidget_level__b3_59',
                    level__b0__extraSmall: 'EpicWidget_level__b0__extraSmall_48',
                    level__b0__small: 'EpicWidget_level__b0__small_57',
                    level__b1__extraSmall: 'EpicWidget_level__b1__extraSmall_e4',
                    level__b1__small: 'EpicWidget_level__b1__small_10',
                    level__b2__extraSmall: 'EpicWidget_level__b2__extraSmall_fc',
                    level__b2__small: 'EpicWidget_level__b2__small_50',
                    level__b3__extraSmall: 'EpicWidget_level__b3__extraSmall_3d',
                    level__b3__small: 'EpicWidget_level__b3__small_76',
                    subtitle: 'EpicWidget_subtitle_e4',
                    subtitle__b0: 'EpicWidget_subtitle__b0_5d',
                    subtitle__b1: 'EpicWidget_subtitle__b1_f4',
                    subtitle__b0__medium: 'EpicWidget_subtitle__b0__medium_60',
                    subtitle__b1__medium: 'EpicWidget_subtitle__b1__medium_e0',
                    subtitle__b0__extraSmall: 'EpicWidget_subtitle__b0__extraSmall_7c',
                    subtitle__b0__small: 'EpicWidget_subtitle__b0__small_23',
                    subtitle__b1__extraSmall: 'EpicWidget_subtitle__b1__extraSmall_27',
                    subtitle__b1__small: 'EpicWidget_subtitle__b1__small_ac',
                    subtitle__b2: 'EpicWidget_subtitle__b2_44',
                    subtitle__b2__medium: 'EpicWidget_subtitle__b2__medium_b2',
                    subtitle__b2__extraSmall: 'EpicWidget_subtitle__b2__extraSmall_54',
                    subtitle__b2__small: 'EpicWidget_subtitle__b2__small_3d',
                    subtitle__b3: 'EpicWidget_subtitle__b3_c1',
                    subtitle__b3__medium: 'EpicWidget_subtitle__b3__medium_f2',
                    subtitle__b3__extraSmall: 'EpicWidget_subtitle__b3__extraSmall_27',
                    subtitle__b3__small: 'EpicWidget_subtitle__b3__small_2f',
                    subtitle__b4: 'EpicWidget_subtitle__b4_fa',
                    subtitle__b4__medium: 'EpicWidget_subtitle__b4__medium_a9',
                    subtitle__b4__extraSmall: 'EpicWidget_subtitle__b4__extraSmall_ba',
                    subtitle__b4__small: 'EpicWidget_subtitle__b4__small_9b',
                    subtitle__b5: 'EpicWidget_subtitle__b5_67',
                    subtitle__b5__medium: 'EpicWidget_subtitle__b5__medium_f2',
                    subtitle__b5__extraSmall: 'EpicWidget_subtitle__b5__extraSmall_25',
                    subtitle__b5__small: 'EpicWidget_subtitle__b5__small_95',
                    subtitle__b6: 'EpicWidget_subtitle__b6_e7',
                    subtitle__b6__medium: 'EpicWidget_subtitle__b6__medium_87',
                    subtitle__b6__extraSmall: 'EpicWidget_subtitle__b6__extraSmall_0f',
                    subtitle__b6__small: 'EpicWidget_subtitle__b6__small_04',
                };
                let A;
                !(function (e) {
                    (e.Icon1 = 'bg0'),
                        (e.Icon2 = 'bg1'),
                        (e.Icon3 = 'bg2'),
                        (e.Icon4 = 'bg3'),
                        (e.Icon5 = 'bg4'),
                        (e.Icon6 = 'bg5');
                })(A || (A = {}));
                const C = {
                        [d.Jh.Huge]: '130x130',
                        [d.Jh.Big]: '72x72',
                        [d.Jh.Medium]: '64x64',
                        [d.Jh.Small]: '40x40',
                    },
                    F = {
                        [A.Icon1]: [0],
                        [A.Icon2]: [1, 2, 3, 4],
                        [A.Icon3]: [5, 6, 7, 8, 9],
                        [A.Icon4]: [10, 11, 12, 13, 14],
                        [A.Icon5]: [15, 16, 17, 18, 19],
                        [A.Icon6]: [20],
                    },
                    D = [E.Id.B0, E.Id.B1, E.Id.B2],
                    B = ({ size: e, level: t, conditions: u, restRewards: a }) => {
                        const B = (0, b.O)(),
                            p = (0, n.Z)([...(0, E.Hp)('icon', 'level', 'subtitle')], g),
                            h = (0, o.useMemo)(() => d.S4[e][B], [e, B]),
                            v = (0, o.useMemo)(
                                () => ((e) => Object.keys(F).find((t) => F[t].includes(e)) || A.Icon1)(t),
                                [t],
                            ),
                            f = (0, o.useMemo)(() => ({ tooltipId: i.I3 }), []),
                            x = (0, o.useMemo)(() => {
                                const e = R.images.gui.maps.icons.epicBattles.metaLvls;
                                if (null !== e) {
                                    const t = e.$dyn(`c_${C[h]}`);
                                    if (void 0 !== t && void 0 !== v) return { backgroundImage: `url(${t.$dyn(v)})` };
                                }
                            }, [v, h]),
                            w = _()(g.icon, g[`icon__${v}`], g[`icon__${h}`], p[`icon__${e}`]);
                        return l().createElement(
                            'div',
                            { className: g.base },
                            l().createElement(
                                r.t,
                                { args: f },
                                l().createElement(
                                    'div',
                                    { className: w, style: x },
                                    a > 0 &&
                                        l().createElement(
                                            'div',
                                            { className: _()(g.counter, g[`counter__${h}`]) },
                                            l().createElement(c.A, { size: 'normal', value: a }),
                                        ),
                                    t > 0 && l().createElement('div', { className: _()(g.level, p[`level__${e}`]) }, t),
                                ),
                            ),
                            u &&
                                !D.includes(e) &&
                                l().createElement(m.B, {
                                    classMix: _()(p.subtitle, p[`subtitle__${e}`]),
                                    text: (0, s.z4)(u),
                                }),
                        );
                    };
            },
            5611: (e, t, u) => {
                'use strict';
                u.d(t, { n: () => V });
                var a = u(6483),
                    _ = u.n(a),
                    r = u(7739),
                    i = u(9924),
                    n = u(6179),
                    s = u.n(n),
                    o = u(8188),
                    l = u(3486),
                    c = u(7078),
                    m = u(2646),
                    d = u(9916);
                const b = 'BonusBattles_base_1b',
                    E = 'BonusBattles_light_51',
                    g = 'BonusBattles_divider_52',
                    A = 'BonusBattles_divider__right_08',
                    C = 'BonusBattles_icon_2c',
                    F = 'BonusBattles_amount_a2',
                    D = { tooltipId: m.T3 },
                    B = (0, n.memo)((e) => {
                        const t = e.amount,
                            u = d.Z5.getNumberFormat(t, d.B3.INTEGRAL),
                            a = _()(g, A);
                        return s().createElement(
                            c.t,
                            { args: D },
                            s().createElement(
                                'div',
                                { className: b },
                                s().createElement('div', { className: E }),
                                s().createElement('div', { className: g }),
                                s().createElement('div', { className: C }),
                                s().createElement('div', { className: F }, u),
                                s().createElement('div', { className: a }),
                            ),
                        );
                    });
                var p = u(6373),
                    h = u(3649);
                let v, f;
                !(function (e) {
                    (e.ExtraLarge = 'extraLarge'),
                        (e.Large = 'large'),
                        (e.Medium = 'medium'),
                        (e.SMedium = 'smedium'),
                        (e.Small = 'small'),
                        (e.ExtraSmall = 'extraSmall'),
                        (e.Tiny = 'tiny');
                })(v || (v = {})),
                    (function (e) {
                        (e.Large = 'large'), (e.Medium = 'medium'), (e.Small = 'small');
                    })(f || (f = {}));
                const x = {
                        base: 'Rank_base_80',
                        icon: 'Rank_icon_64',
                        icon__small: 'Rank_icon__small_92',
                        icon__large: 'Rank_icon__large_65',
                        icon__next: 'Rank_icon__next_89',
                        frame: 'Rank_frame_88',
                        frame__small: 'Rank_frame__small_33',
                        frame__large: 'Rank_frame__large_c7',
                        unburnable: 'Rank_unburnable_65',
                        unburnable__small: 'Rank_unburnable__small_76',
                        unburnable__large: 'Rank_unburnable__large_20',
                        shield: 'Rank_shield_13',
                        shield__small: 'Rank_shield__small_36',
                        shield__large: 'Rank_shield__large_b2',
                        hp: 'Rank_hp_3a',
                        hp__small: 'Rank_hp__small_dd',
                        hp__large: 'Rank_hp__large_7e',
                        hpValue: 'Rank_hpValue_9f',
                    },
                    w = { [f.Large]: '80x110', [f.Medium]: '58x80', [f.Small]: '42x56' },
                    S = (0, n.memo)((e) => {
                        const t = e.isInactive,
                            u = void 0 !== t && t,
                            a = e.isQualification,
                            r = e.divisionID,
                            i = e.rankName,
                            o = e.rankID,
                            l = e.isUnburnable,
                            d = e.shieldHP,
                            b = e.size,
                            E = void 0 === b ? f.Medium : b,
                            g = !a && o > 0,
                            A = (0, n.useMemo)(() => {
                                const e = R.images.gui.maps.icons.rankedBattles,
                                    t = w[E];
                                let u;
                                return (
                                    (u = a
                                        ? e.divisions.$dyn(`c_${t}`).$num(r)
                                        : e.ranks.$dyn(`c_${t}`).$dyn(`rank${r}_${i}`)),
                                    { backgroundImage: `url(${u})` }
                                );
                            }, [r, i, a, E]),
                            C = (e) => [x[e], x[`${e}__${E}`]],
                            F = _()(x.icon, u && x.icon__next, ...C('icon')),
                            D = _()(...C('frame'), ...C('unburnable')),
                            B = _()(...C('frame'), ...C('shield')),
                            p = _()(...C('hp'));
                        return s().createElement(
                            c.t,
                            { isEnabled: g, args: { rankID: o, tooltipId: m.MS } },
                            s().createElement(
                                'div',
                                { className: x.base },
                                s().createElement('div', { className: F, style: A }),
                                l && s().createElement('div', { className: D }),
                                d > 0 &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: B }),
                                        s().createElement(
                                            'div',
                                            { className: p },
                                            s().createElement('div', { className: x.hpValue }, d),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    N = {
                        base: 'Division_base_30',
                        base__extraSmall: 'Division_base__extraSmall_1a',
                        base__small: 'Division_base__small_34',
                        base__smedium: 'Division_base__smedium_98',
                        base__medium: 'Division_base__medium_08',
                        base__large: 'Division_base__large_7d',
                        steps: 'Division_steps_31',
                        steps__wide: 'Division_steps__wide_6b',
                        steps__side: 'Division_steps__side_8c',
                        step: 'Division_step_54',
                        step__notReceived: 'Division_step__notReceived_d3',
                        step__small: 'Division_step__small_b3',
                    };
                function k() {
                    return (
                        (k =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        k.apply(this, arguments)
                    );
                }
                const y = { tooltipId: m.u6 },
                    W = (e) => {
                        const t = e.rankLeft,
                            u = void 0 === t ? void 0 : t,
                            a = e.rankRight,
                            r = e.steps,
                            i = e.stepsTotal,
                            o = e.qualBattles,
                            l = e.qualTotalBattles,
                            m = e.size,
                            d = i > 0 && !a.isQualification,
                            b = void 0 !== u || d,
                            E = ![v.ExtraLarge, v.Medium].includes(m),
                            g = (0, n.useMemo)(
                                () =>
                                    [v.Medium, v.SMedium].includes(m)
                                        ? f.Medium
                                        : [v.Small, v.ExtraSmall].includes(m)
                                          ? f.Small
                                          : f.Large,
                                [m],
                            ),
                            A = () => ({
                                header: (0, h.uF)(R.strings.tooltips.mode_selector.ranked.qualification.header(), {
                                    current: o,
                                    max: l,
                                }),
                                body: R.strings.tooltips.mode_selector.ranked.qualification.description(),
                                isEnabled: a.isQualification,
                            }),
                            C = _()(
                                N.steps,
                                E && N.steps__small,
                                m === v.Medium && N.steps__wide,
                                void 0 === u && N.steps__side,
                            );
                        return s().createElement(
                            'div',
                            { className: _()(N.base, N[`base__${m}`]) },
                            u && s().createElement(S, k({}, u, { size: g })),
                            d &&
                                s().createElement(
                                    c.t,
                                    { args: y },
                                    s().createElement(
                                        'div',
                                        { className: C },
                                        [...Array(i)].map((e, t) => {
                                            return s().createElement('div', {
                                                key: `step_${t}`,
                                                className:
                                                    ((u = t < r),
                                                    _()(N.step, E && N.step__small, !u && N.step__notReceived)),
                                            });
                                            var u;
                                        }),
                                    ),
                                ),
                            s().createElement(
                                p.i,
                                A,
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement(S, k({}, a, { size: g, isInactive: b })),
                                ),
                            ),
                        );
                    },
                    T = {
                        base: 'RankedStat_base_29',
                        base__large: 'RankedStat_base__large_6b',
                        icon: 'RankedStat_icon_83',
                        icon__efficiency: 'RankedStat_icon__efficiency_9e',
                        icon__efficiency__large: 'RankedStat_icon__efficiency__large_44',
                        icon__position: 'RankedStat_icon__position_6f',
                        icon__position__large: 'RankedStat_icon__position__large_40',
                        value: 'RankedStat_value_cb',
                        value__medium: 'RankedStat_value__medium_dc',
                        value__small: 'RankedStat_value__small_0a',
                        delta: 'RankedStat_delta_ff',
                        delta__medium: 'RankedStat_delta__medium_89',
                        delta__small: 'RankedStat_delta__small_ab',
                        delta__minus: 'RankedStat_delta__minus_71',
                        arrow: 'RankedStat_arrow_97',
                        arrow__minus: 'RankedStat_arrow__minus_e1',
                    };
                let L, P;
                !(function (e) {
                    (e.Efficiency = 'efficiency'), (e.Position = 'position');
                })(L || (L = {})),
                    (function (e) {
                        (e.Large = 'large'), (e.Medium = 'medium'), (e.Small = 'small');
                    })(P || (P = {}));
                const M = { [L.Efficiency]: m.wm, [L.Position]: m.q_ },
                    I = (0, n.memo)(
                        ({
                            type: e,
                            value: t,
                            valueDiff: u = 0,
                            isUnavailable: a = !1,
                            isPercent: r = !1,
                            size: i = P.Large,
                        }) => {
                            const n = (e) =>
                                    a
                                        ? '- -'
                                        : r
                                          ? d.Z5.getRealFormat(100 * e, d.Gr.WO_ZERO_DIGITS) + '%'
                                          : d.Z5.getRealFormat(e, d.Gr.WO_ZERO_DIGITS),
                                o = n(t),
                                l = n(u);
                            return s().createElement(
                                c.t,
                                { args: { tooltipId: M[e] } },
                                s().createElement(
                                    'div',
                                    { className: _()(T.base, T[`base__${i}`]) },
                                    s().createElement('div', {
                                        className: _()(T.icon, T[`icon__${e}`], T[`icon__${e}__${i}`]),
                                    }),
                                    s().createElement('div', { className: _()(T.value, T[`value__${i}`]) }, o),
                                    0 !== u &&
                                        !a &&
                                        s().createElement(
                                            'div',
                                            { className: _()(T.delta, T[`delta__${i}`], u < 0 && T.delta__minus) },
                                            s().createElement('div', {
                                                className: _()(T.arrow, u < 0 && T.arrow__minus),
                                            }),
                                            l,
                                        ),
                                ),
                            );
                        },
                    ),
                    O = {
                        base: 'League_base_18',
                        base__extraSmall: 'League_base__extraSmall_c7',
                        base__tiny: 'League_base__tiny_d4',
                        base__small: 'League_base__small_30',
                        base__smedium: 'League_base__smedium_5e',
                        base__medium: 'League_base__medium_15',
                        base__large: 'League_base__large_1b',
                        icon: 'League_icon_dd',
                        base__extraLarge: 'League_base__extraLarge_31',
                    },
                    $ = { [f.Large]: '130x130', [f.Medium]: '100x100', [f.Small]: '64x64' },
                    H = { tooltipId: m._Y },
                    z = (0, n.memo)((e) => {
                        const t = e.leagueID,
                            u = e.efficiency,
                            a = e.efficiencyDiff,
                            r = e.position,
                            i = e.isEfficiencyUnavailable,
                            o = void 0 !== i && i,
                            l = e.isPositionUnavailable,
                            m = void 0 !== l && l,
                            d = e.size,
                            b = (0, n.useMemo)(
                                () =>
                                    [v.Medium, v.SMedium].includes(d)
                                        ? f.Medium
                                        : [v.Small, v.ExtraSmall, v.Tiny].includes(d)
                                          ? f.Small
                                          : f.Large,
                                [d],
                            ),
                            E = (0, n.useMemo)(
                                () =>
                                    [v.Medium, v.ExtraLarge].includes(d) ? P.Large : d === v.Tiny ? P.Small : P.Medium,
                                [d],
                            ),
                            g = (0, n.useMemo)(() => {
                                const e = R.images.gui.maps.icons.rankedBattles.league,
                                    u = $[b],
                                    a = e.$dyn(`c_${u}`);
                                if (a) {
                                    return { backgroundImage: `url(${a.$num(t)})` };
                                }
                            }, [t, b]);
                        return s().createElement(
                            'div',
                            { className: _()(O.base, O[`base__${d}`]) },
                            s().createElement(I, {
                                type: L.Efficiency,
                                value: u,
                                valueDiff: a,
                                isUnavailable: o,
                                isPercent: !0,
                                size: E,
                            }),
                            s().createElement(
                                c.t,
                                { args: H },
                                s().createElement('div', { className: O.icon, style: g }),
                            ),
                            s().createElement(I, {
                                type: L.Position,
                                value: r,
                                isUnavailable: m,
                                isPercent: !1,
                                size: E,
                            }),
                        );
                    }),
                    U = {
                        base: 'RankedWidget_base_9c',
                        qualBattles: 'RankedWidget_qualBattles_ec',
                        qualBattles__b0: 'RankedWidget_qualBattles__b0_8a',
                        qualBattles__b1: 'RankedWidget_qualBattles__b1_a1',
                        qualBattles__b0__medium: 'RankedWidget_qualBattles__b0__medium_0e',
                        qualBattles__b1__medium: 'RankedWidget_qualBattles__b1__medium_66',
                        qualBattles__b0__extraSmall: 'RankedWidget_qualBattles__b0__extraSmall_3f',
                        qualBattles__b0__small: 'RankedWidget_qualBattles__b0__small_9d',
                        qualBattles__b1__extraSmall: 'RankedWidget_qualBattles__b1__extraSmall_e5',
                        qualBattles__b1__small: 'RankedWidget_qualBattles__b1__small_b6',
                        qualBattles__b2: 'RankedWidget_qualBattles__b2_f8',
                        qualBattles__b2__medium: 'RankedWidget_qualBattles__b2__medium_a4',
                        qualBattles__b2__extraSmall: 'RankedWidget_qualBattles__b2__extraSmall_8b',
                        qualBattles__b2__small: 'RankedWidget_qualBattles__b2__small_d8',
                        qualBattles__b3: 'RankedWidget_qualBattles__b3_1c',
                        qualBattles__b3__medium: 'RankedWidget_qualBattles__b3__medium_ef',
                        qualBattles__b3__extraSmall: 'RankedWidget_qualBattles__b3__extraSmall_28',
                        qualBattles__b3__small: 'RankedWidget_qualBattles__b3__small_9f',
                        qualBattles__b4: 'RankedWidget_qualBattles__b4_f5',
                        qualBattles__b4__medium: 'RankedWidget_qualBattles__b4__medium_65',
                        qualBattles__b4__extraSmall: 'RankedWidget_qualBattles__b4__extraSmall_4e',
                        qualBattles__b4__small: 'RankedWidget_qualBattles__b4__small_9e',
                        ranks__b0: 'RankedWidget_ranks__b0_7d',
                        ranks__b1: 'RankedWidget_ranks__b1_fc',
                        ranks__b0__medium: 'RankedWidget_ranks__b0__medium_db',
                        ranks__b1__medium: 'RankedWidget_ranks__b1__medium_57',
                        ranks__b0__extraSmall: 'RankedWidget_ranks__b0__extraSmall_a9',
                        ranks__b0__small: 'RankedWidget_ranks__b0__small_45',
                        ranks__b1__extraSmall: 'RankedWidget_ranks__b1__extraSmall_1e',
                        ranks__b1__small: 'RankedWidget_ranks__b1__small_6c',
                        ranks__b2: 'RankedWidget_ranks__b2_f5',
                        ranks__b2__medium: 'RankedWidget_ranks__b2__medium_7e',
                        ranks__b2__extraSmall: 'RankedWidget_ranks__b2__extraSmall_ff',
                        ranks__b2__small: 'RankedWidget_ranks__b2__small_8d',
                        ranks__b3: 'RankedWidget_ranks__b3_77',
                        ranks__b3__medium: 'RankedWidget_ranks__b3__medium_29',
                        ranks__b3__extraSmall: 'RankedWidget_ranks__b3__extraSmall_fb',
                        ranks__b3__small: 'RankedWidget_ranks__b3__small_cb',
                        ranks__b4: 'RankedWidget_ranks__b4_80',
                        ranks__b4__medium: 'RankedWidget_ranks__b4__medium_ff',
                        ranks__b4__extraSmall: 'RankedWidget_ranks__b4__extraSmall_f2',
                        ranks__b4__small: 'RankedWidget_ranks__b4__small_38',
                        ranks__qual__b0__medium: 'RankedWidget_ranks__qual__b0__medium_79',
                        ranks__qual__b1__medium: 'RankedWidget_ranks__qual__b1__medium_24',
                        ranks__qual__b2__medium: 'RankedWidget_ranks__qual__b2__medium_cf',
                        ranks__qual__b3__extraLarge: 'RankedWidget_ranks__qual__b3__extraLarge_b0',
                        ranks__qual__b3__large: 'RankedWidget_ranks__qual__b3__large_12',
                        ranks__qual__b3__medium: 'RankedWidget_ranks__qual__b3__medium_f9',
                        ranks__qual__b3__extraSmall: 'RankedWidget_ranks__qual__b3__extraSmall_be',
                        ranks__qual__b3__small: 'RankedWidget_ranks__qual__b3__small_07',
                        bonus: 'RankedWidget_bonus_35',
                        bonus__b0: 'RankedWidget_bonus__b0_8d',
                        bonus__b1: 'RankedWidget_bonus__b1_3d',
                        bonus__b0__extraSmall: 'RankedWidget_bonus__b0__extraSmall_78',
                        bonus__b0__small: 'RankedWidget_bonus__b0__small_bc',
                        bonus__b1__extraSmall: 'RankedWidget_bonus__b1__extraSmall_f0',
                        bonus__b1__small: 'RankedWidget_bonus__b1__small_d2',
                        bonus__b0__medium: 'RankedWidget_bonus__b0__medium_68',
                        bonus__b1__medium: 'RankedWidget_bonus__b1__medium_80',
                        bonus__b2: 'RankedWidget_bonus__b2_42',
                        bonus__b2__extraSmall: 'RankedWidget_bonus__b2__extraSmall_63',
                        bonus__b2__small: 'RankedWidget_bonus__b2__small_cb',
                        bonus__b2__medium: 'RankedWidget_bonus__b2__medium_ee',
                        bonus__b5__extraSmall: 'RankedWidget_bonus__b5__extraSmall_c8',
                        bonus__b5__small: 'RankedWidget_bonus__b5__small_c0',
                        bonus__b6__extraSmall: 'RankedWidget_bonus__b6__extraSmall_b1',
                        bonus__b6__small: 'RankedWidget_bonus__b6__small_08',
                    },
                    V = ({
                        size: e,
                        rankLeft: t,
                        rankRight: u,
                        hasLeftRank: a,
                        steps: c,
                        stepsTotal: m,
                        leagueID: d,
                        efficiency: b,
                        efficiencyDiff: E,
                        position: g,
                        isEfficiencyUnavailable: A,
                        isPositionUnavailable: C,
                        qualBattles: F,
                        qualTotalBattles: D,
                        bonusBattles: p,
                    }) => {
                        const h = (0, n.useContext)(r.YN),
                            f = h.extraSmall,
                            x = h.small,
                            w = h.medium,
                            S = ![l.Id.B5, l.Id.B6].includes(e),
                            N = d > -1,
                            k = D > 0 && u.isQualification && S,
                            y = p > 0,
                            T = (0, i.Z)((0, l.Hp)('qualBattles', 'ranks', 'ranks__qual', 'bonus'), U),
                            L = (0, n.useMemo)(
                                () =>
                                    x || f
                                        ? N && e === l.Id.B4
                                            ? v.Tiny
                                            : v.ExtraSmall
                                        : w
                                          ? e === l.Id.B1
                                              ? v.Large
                                              : e === l.Id.B2
                                                ? v.SMedium
                                                : v.Small
                                          : e === l.Id.B4
                                            ? v.Small
                                            : e === l.Id.B3
                                              ? v.Medium
                                              : v.ExtraLarge,
                                [N, e, f, x, w],
                            ),
                            P = _()(U.ranks, T[`ranks__${e}`], k && T[`ranks__qual__${e}`]);
                        return s().createElement(
                            'div',
                            { className: U.base },
                            S &&
                                s().createElement(
                                    'div',
                                    { className: P },
                                    N
                                        ? s().createElement(z, {
                                              leagueID: d,
                                              efficiency: b,
                                              efficiencyDiff: E,
                                              position: g,
                                              isEfficiencyUnavailable: A,
                                              isPositionUnavailable: C,
                                              size: L,
                                          })
                                        : s().createElement(W, {
                                              rankLeft: a ? t : void 0,
                                              rankRight: u,
                                              steps: c,
                                              stepsTotal: m,
                                              qualBattles: F,
                                              qualTotalBattles: D,
                                              size: L,
                                          }),
                                ),
                            k &&
                                s().createElement(
                                    'div',
                                    { className: _()(U.qualBattles, T[`qualBattles__${e}`]) },
                                    s().createElement(o.B, {
                                        text: R.strings.mode_selector.ranked.widget.qualBattles(),
                                        binding: { current: F, max: D },
                                    }),
                                ),
                            y &&
                                s().createElement(
                                    'div',
                                    { className: _()(U.bonus, T[`bonus__${e}`]) },
                                    s().createElement(B, { amount: p }),
                                ),
                        );
                    };
            },
            2646: (e, t, u) => {
                'use strict';
                u.d(t, {
                    $b: () => E,
                    D3: () => _,
                    GN: () => c,
                    I3: () => b,
                    MS: () => i,
                    T3: () => n,
                    TR: () => d,
                    _Y: () => s,
                    hg: () => g,
                    p5: () => a,
                    q_: () => l,
                    u6: () => r,
                    wm: () => o,
                    zD: () => m,
                });
                const a = 'disabledTooltip',
                    _ = 'rankedCalendarDayInfoExtended',
                    r = 'rankedStep',
                    i = 'rankedBattlesRank',
                    n = 'rankedBattlesBonus',
                    s = 'rankedBattlesLeague',
                    o = 'rankedBattlesEfficiency',
                    l = 'rankedBattlesPosition',
                    c = 'calendarTooltip',
                    m = 'mapboxCalendar',
                    d = 'epicBattleCalendarTooltip',
                    b = 'epicBattleWidgetInfo',
                    E = 'funRandomModeSelectorCalendarDay',
                    g = 'comp7CalendarDayExtendedInfo';
            },
            5287: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
            },
            8487: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = {
                    blackReal: 'FormatTextWithColorTags_blackReal_d5',
                    whiteReal: 'FormatTextWithColorTags_whiteReal_d8',
                    white: 'FormatTextWithColorTags_white_b9',
                    whiteOrange: 'FormatTextWithColorTags_whiteOrange_ea',
                    whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_54',
                    par: 'FormatTextWithColorTags_par_c1',
                    parSecondary: 'FormatTextWithColorTags_parSecondary_4e',
                    parTertiary: 'FormatTextWithColorTags_parTertiary_14',
                    red: 'FormatTextWithColorTags_red_d9',
                    redDark: 'FormatTextWithColorTags_redDark_ea',
                    yellow: 'FormatTextWithColorTags_yellow_48',
                    orange: 'FormatTextWithColorTags_orange_ad',
                    cream: 'FormatTextWithColorTags_cream_96',
                    brown: 'FormatTextWithColorTags_brown_27',
                    greenBright: 'FormatTextWithColorTags_greenBright_04',
                    green: 'FormatTextWithColorTags_green_58',
                    greenDark: 'FormatTextWithColorTags_greenDark_af',
                    blueBooster: 'FormatTextWithColorTags_blueBooster_b3',
                    blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_ab',
                    cred: 'FormatTextWithColorTags_cred_d3',
                    gold: 'FormatTextWithColorTags_gold_28',
                    bond: 'FormatTextWithColorTags_bond_74',
                    prom: 'FormatTextWithColorTags_prom_58',
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
        (__webpack_require__.O = (e, t, u, a) => {
            if (!t) {
                var _ = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, u, a] = deferred[s], r = !0, i = 0; i < t.length; i++)
                        (!1 & a || _ >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((r = !1), a < _ && (_ = a));
                    if (r) {
                        deferred.splice(s--, 1);
                        var n = u();
                        void 0 !== n && (e = n);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, u, a];
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
        (__webpack_require__.j = 261),
        (() => {
            var e = { 261: 0, 588: 0, 687: 0, 13: 0, 153: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var a,
                        _,
                        [r, i, n] = u,
                        s = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (n) var o = n(__webpack_require__);
                    }
                    for (t && t(u); s < r.length; s++)
                        (_ = r[s]), __webpack_require__.o(e, _) && e[_] && e[_][0](), (e[_] = 0);
                    return __webpack_require__.O(o);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [705], () => __webpack_require__(9905));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
