(() => {
    var __webpack_modules__ = {
            4090: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => l });
                var a = u(6483),
                    _ = u.n(a),
                    n = u(6179),
                    r = u.n(n);
                const i = {
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
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.size,
                        u = e.value,
                        a = e.isEmpty,
                        n = e.fadeInAnimation,
                        l = e.hide,
                        c = e.maximumNumber,
                        m = e.className,
                        d = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    u[a] = e[a];
                                }
                            return u;
                        })(e, s);
                    const b = a ? null : u,
                        g = 'string' == typeof b;
                    if ((b && !g && b < 0) || 0 === b) return null;
                    const E = b && !g && b > c,
                        A = _()(
                            i.base,
                            i[`base__${t}`],
                            n && i.base__animated,
                            l && i.base__hidden,
                            !b && i.base__pattern,
                            a && i.base__empty,
                            m,
                        );
                    return r().createElement(
                        'div',
                        o({ className: A }, d),
                        r().createElement('div', { className: i.bg }),
                        r().createElement('div', { className: i.pattern }),
                        r().createElement(
                            'div',
                            { className: _()(i.value, g && i.value__text) },
                            E ? c : b,
                            E && r().createElement('span', { className: i.plus }, '+'),
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
                    n = u(3649),
                    r = u(6179),
                    i = u.n(r),
                    s = u(5287);
                const o = ({
                    binding: e,
                    text: t = '',
                    classMix: u,
                    alignment: a = n.v2.left,
                    formatWithBrackets: o,
                }) => {
                    if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                    const l = o && e ? (0, n.WU)(t, e) : t;
                    return i().createElement(
                        r.Fragment,
                        null,
                        l.split('\n').map((t, o) =>
                            i().createElement(
                                'div',
                                { className: _()(s.Z.base, u), key: `${t}-${o}` },
                                (0, n.Uw)(t, a, e).map((e, t) =>
                                    i().createElement(r.Fragment, { key: `${t}-${e}` }, e),
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
                    n = u(1043),
                    r = u(5262);
                const i = a.O.client.getSize('rem'),
                    s = i.width,
                    o = i.height,
                    l = Object.assign({ width: s, height: o }, (0, r.T)(s, o, n.j)),
                    c = (0, _.createContext)(l);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => l });
                var a = u(3138),
                    _ = u(6536),
                    n = u(6179),
                    r = u.n(n),
                    i = u(3495),
                    s = u(1043),
                    o = u(5262);
                const l = ({ children: e }) => {
                    const t = (0, n.useContext)(i.Y),
                        u = (0, n.useState)(t),
                        l = u[0],
                        c = u[1],
                        m = (0, n.useCallback)((e, t) => {
                            const u = a.O.view.pxToRem(e),
                                _ = a.O.view.pxToRem(t);
                            c(Object.assign({ width: u, height: _ }, (0, o.T)(u, _, s.j)));
                        }, []),
                        d = (0, n.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            m(e.width, e.height);
                        }, [m]);
                    (0, _.Z)(() => {
                        a.O.client.events.on('clientResized', m), a.O.client.events.on('self.onScaleUpdated', d);
                    }),
                        (0, n.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', m),
                                    a.O.client.events.off('self.onScaleUpdated', d);
                            },
                            [m, d],
                        );
                    const b = (0, n.useMemo)(() => Object.assign({}, l), [l]);
                    return r().createElement(i.Y.Provider, { value: b }, e);
                };
            },
            6010: (e, t, u) => {
                'use strict';
                var a = u(6179),
                    _ = u(7382),
                    n = u(3495);
                const r = ['children'];
                const i = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    u[a] = e[a];
                                }
                            return u;
                        })(e, r);
                    const i = (0, a.useContext)(n.Y),
                        s = i.extraLarge,
                        o = i.large,
                        l = i.medium,
                        c = i.small,
                        m = i.extraSmall,
                        d = i.extraLargeWidth,
                        b = i.largeWidth,
                        g = i.mediumWidth,
                        E = i.smallWidth,
                        A = i.extraSmallWidth,
                        C = i.extraLargeHeight,
                        p = i.largeHeight,
                        F = i.mediumHeight,
                        B = i.smallHeight,
                        D = i.extraSmallHeight,
                        h = { extraLarge: C, large: p, medium: F, small: B, extraSmall: D };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && s) return t;
                        if (u.large && o) return t;
                        if (u.medium && l) return t;
                        if (u.small && c) return t;
                        if (u.extraSmall && m) return t;
                    } else {
                        if (u.extraLargeWidth && d) return (0, _.H)(t, u, h);
                        if (u.largeWidth && b) return (0, _.H)(t, u, h);
                        if (u.mediumWidth && g) return (0, _.H)(t, u, h);
                        if (u.smallWidth && E) return (0, _.H)(t, u, h);
                        if (u.extraSmallWidth && A) return (0, _.H)(t, u, h);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && C) return t;
                            if (u.largeHeight && p) return t;
                            if (u.mediumHeight && F) return t;
                            if (u.smallHeight && B) return t;
                            if (u.extraSmallHeight && D) return t;
                        }
                    }
                    return null;
                };
                i.defaultProps = {
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
                (0, a.memo)(i);
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
                        n = Math.min(a, _);
                    return {
                        extraLarge: n === u.extraLarge.weight,
                        large: n === u.large.weight,
                        medium: n === u.medium.weight,
                        small: n === u.small.weight,
                        extraSmall: n === u.extraSmall.weight,
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
                    n = u(2056);
                const r = ['children'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const s = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    u[a] = e[a];
                                }
                            return u;
                        })(e, r);
                    return _().createElement(
                        n.u,
                        i(
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
                    n = u.n(_);
                const r = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
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
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, r);
                        const b = (0, _.useMemo)(() => {
                            const e = Object.assign({}, m, { body: u, header: o, note: l, alert: c });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [c, u, o, l, m]);
                        return n().createElement(
                            a.u,
                            i(
                                {
                                    contentId:
                                        ((g = null == m ? void 0 : m.hasHtmlContent),
                                        g ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: b,
                                },
                                d,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => o });
                var a = u(7902),
                    _ = u(9916),
                    n = u(6179);
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
                function i(e) {
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
                            g = e.ignoreMouseClick,
                            E = void 0 !== g && g,
                            A = e.decoratorId,
                            C = void 0 === A ? 0 : A,
                            p = e.isEnabled,
                            F = void 0 === p || p,
                            B = e.targetId,
                            D = void 0 === B ? 0 : B,
                            h = e.onShow,
                            f = e.onHide,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, r);
                        const x = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, n.useMemo)(() => D || (0, a.F)().resId, [D]),
                            N = (0, n.useCallback)(() => {
                                (x.current.isVisible && x.current.timeoutId) ||
                                    (s(u, C, { isMouseEvent: !0, on: !0, arguments: i(_) }, w),
                                    h && h(),
                                    (x.current.isVisible = !0));
                            }, [u, C, _, w, h]),
                            S = (0, n.useCallback)(() => {
                                if (x.current.isVisible || x.current.timeoutId) {
                                    const e = x.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (x.current.timeoutId = 0)),
                                        s(u, C, { on: !1 }, w),
                                        x.current.isVisible && f && f(),
                                        (x.current.isVisible = !1);
                                }
                            }, [u, C, w, f]),
                            k = (0, n.useCallback)((e) => {
                                x.current.isVisible &&
                                    ((x.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (x.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(x.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = x.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', k, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', k, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && S();
                            }, [F, S]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return F
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((x.current.timeoutId = window.setTimeout(N, b ? 100 : 400)),
                                                      o && o(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == l || l(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === E && S(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === E && S(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      v,
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
                    u.d(t, { mouse: () => l, off: () => s, on: () => i, onResize: () => n, onScaleUpdated: () => r });
                var a = u(2472),
                    _ = u(1176);
                const n = (0, a.E)('clientResized'),
                    r = (0, a.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
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
                    const n = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let _ = !0;
                                    const n = `mouse${t}`,
                                        r = o[t]((e) => u([e, 'outside']));
                                    function i(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, i),
                                        a(),
                                        () => {
                                            _ &&
                                                (r(),
                                                window.removeEventListener(n, i),
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
                    return Object.assign({}, n, {
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
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => i,
                        playSound: () => _.G,
                        setRTPC: () => _.E,
                    });
                var a = u(527),
                    _ = u(2493);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
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
                u.d(t, { O: () => n });
                var a = u(5959),
                    _ = u(514);
                const n = { view: u(7641), client: a, sound: _.ZP };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => r });
                var a = u(5959);
                const _ = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    n = Object.keys(_).reduce((e, t) => ((e[t] = () => (0, a.playSound)(_[t])), e), {}),
                    r = { play: Object.assign({}, n, { sound: a.playSound }), setRTPC: a.setRTPC };
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
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => _.W,
                        displayStatusIs: () => x,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => A,
                        getSize: () => d,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => h,
                        isFocused: () => B,
                        pxToRem: () => C,
                        remToPx: () => p,
                        resize: () => b,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => D,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => N,
                    });
                var a = u(3722),
                    _ = u(6112),
                    n = u(6538),
                    r = u(8566);
                const i = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, i);
                }
                function l(e, t, u, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, a);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, i);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function b(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function D() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const x = Object.keys(_.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === _.W[t]), e),
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
                    N = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => o });
                const a = ['args'];
                const _ = 2,
                    n = 16,
                    r = 32,
                    i = 64,
                    s = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            u[a] = e[a];
                                        }
                                    return u;
                                })(t, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((_ = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var _;
                    },
                    o = {
                        close(e) {
                            s('popover' === e ? _ : r);
                        },
                        minimize() {
                            s(i);
                        },
                        move(e) {
                            s(n, { isMouseEvent: !0, on: e });
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
                u.d(t, { Z: () => c });
                var a = u(6483),
                    _ = u.n(a),
                    n = u(7739),
                    r = u(5262),
                    i = u(6179),
                    s = u(3649);
                const o = (e, t) => e + '__' + t,
                    l = (e, t) => e + (0, s.e)(t);
                function c(e, t, u) {
                    const a = (0, i.useContext)(n.YN);
                    let s = Object.entries(a).filter(([e, t]) => !0 === t && e in r.u);
                    return (
                        u && (s = s.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const a = s.map((e) => _()(t[o(u, e[0])], t[l(u, e[0])]));
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
                u.d(t, {
                    BN: () => i,
                    Eg: () => l,
                    Uw: () => A,
                    WU: () => n,
                    e: () => s,
                    uF: () => r,
                    v2: () => _,
                    z4: () => o,
                });
                var a = u(1281);
                let _;
                function n(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function i(e) {
                    return e.replace(/-/g, '_');
                }
                function s(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(_ || (_ = {}));
                const o = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    c = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    m = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    d = (e, t, u = _.left) => e.split(t).reduce(u === _.left ? c : m, []),
                    b = (() => {
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
                    g = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (e, t = _.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (g.includes(u)) return b(e);
                        if ('ja' === u) {
                            return (0, a.D4)()
                                .parse(e)
                                .map((e) => o(e));
                        }
                        return ((e, t = _.left) => {
                            let u = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = o(e);
                            return d(n, /( )/, t).forEach((e) => (u = u.concat(d(e, a, _.left)))), u;
                        })(e, t);
                    },
                    A = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : E(e, t)));
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
                        const n = a.O.view.addModelObserver(e, u, _);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(n) : (this._views[u] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                const n = _;
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
                    Sw: () => n.Z,
                    B3: () => s,
                    Gr: () => o,
                    Z5: () => r.Z5,
                    B0: () => i,
                    wU: () => h,
                    ry: () => A,
                    Eu: () => C,
                    Sy: () => F,
                    SW: () => B,
                    P3: () => D,
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
                var n = u(1358);
                var r = u(8613);
                let i;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(i || (i = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(5521),
                    d = u(3138);
                const b = ['args'];
                function g(e, t, u, a, _, n, r) {
                    try {
                        var i = e[n](r),
                            s = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(s) : Promise.resolve(s).then(a, _);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        var n = e.apply(t, u);
                                        function r(e) {
                                            g(n, a, _, r, i, 'next', e);
                                        }
                                        function i(e) {
                                            g(n, a, _, r, i, 'throw', e);
                                        }
                                        r(void 0);
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
                    p = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const _ = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            u[a] = e[a];
                                        }
                                    return u;
                                })(t, b);
                            void 0 !== _
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, n, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    F = () => p(i.CLOSE),
                    B = () => p(i.POP_OVER, { on: !1 }),
                    D = (e, t, u, a, _ = R.invalid('resId'), n) => {
                        const r = d.O.view.getViewGlobalPosition(),
                            s = u.getBoundingClientRect(),
                            o = s.x,
                            l = s.y,
                            c = s.width,
                            m = s.height,
                            b = {
                                x: d.O.view.pxToRem(o) + r.x,
                                y: d.O.view.pxToRem(l) + r.y,
                                width: d.O.view.pxToRem(c),
                                height: d.O.view.pxToRem(m),
                            };
                        p(i.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: _,
                            direction: t,
                            bbox: E(b),
                            on: !0,
                            args: n,
                        });
                    },
                    h = () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                    f = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var v = u(7572);
                const x = _.instance,
                    w = {
                        DataTracker: n.Z,
                        ViewModel: v.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: o,
                        TimeFormatType: l,
                        DateFormatType: c,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => p(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: F,
                        sendClosePopOverEvent: B,
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            p(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: D,
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, F);
                        },
                        handleViewEvent: p,
                        onBindingsReady: A,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
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
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = w;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => n, Z5: () => a, cy: () => _ });
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
                    n = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            7388: (e, t, u) => {
                'use strict';
                var a = u(3138),
                    _ = u(7739),
                    n = u(6179),
                    r = u.n(n),
                    i = u(6483),
                    s = u.n(i),
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
                const g = () => {
                        const e = (0, n.useContext)(_.YN),
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
                            i = ((e) => {
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
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: t, remScreenHeight: u };
                    },
                    E = ['children', 'className'];
                function A() {
                    return (
                        (A = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        A.apply(null, arguments)
                    );
                }
                const C = {
                        [d.ExtraSmall]: '',
                        [d.Small]: l().SMALL_WIDTH,
                        [d.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [d.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [d.ExtraLarge]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    p = {
                        [b.ExtraSmall]: '',
                        [b.Small]: l().SMALL_HEIGHT,
                        [b.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [b.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    F = {
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
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, E);
                        const _ = g(),
                            n = _.mediaWidth,
                            i = _.mediaHeight,
                            o = _.mediaSize;
                        return r().createElement('div', A({ className: s()(u, C[n], p[i], F[o]) }, a), t);
                    },
                    D = ['children'];
                const h = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    u[a] = e[a];
                                }
                            return u;
                        })(e, D);
                    return r().createElement(_.ZN, null, r().createElement(B, u, t));
                };
                var f = u(493),
                    v = u.n(f);
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
                    N = {
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
                let S, k;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(S || (S = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(k || (k = {}));
                const y = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: a,
                    disabled: _,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: m,
                    onMouseDown: d,
                    onMouseUp: b,
                    onMouseLeave: g,
                    onClick: E,
                }) => {
                    const A = (0, n.useRef)(null),
                        C = (0, n.useState)(u),
                        p = C[0],
                        F = C[1],
                        B = (0, n.useState)(!1),
                        D = B[0],
                        h = B[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                p && null !== A.current && !A.current.contains(e.target) && F(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [p]),
                        (0, n.useEffect)(() => {
                            F(u);
                        }, [u]),
                        r().createElement(
                            'div',
                            {
                                ref: A,
                                className: s()(
                                    N.base,
                                    N[`base__${a}`],
                                    _ && N.base__disabled,
                                    t && N[`base__${t}`],
                                    p && N.base__focus,
                                    D && N.base__highlightActive,
                                    i,
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
                                        u && (_ || (A.current && (A.current.focus(), F(!0)))),
                                        h(!0));
                                },
                                onMouseLeave: function (e) {
                                    _ || (g && g(e), h(!1));
                                },
                                onClick: function (e) {
                                    _ || (E && E(e));
                                },
                            },
                            a !== S.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: N.back }),
                                    r().createElement('span', { className: N.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: s()(N.state, N.state__default) },
                                r().createElement('span', { className: N.stateDisabled }),
                                r().createElement('span', { className: N.stateHighlightHover }),
                                r().createElement('span', { className: N.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: N.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                y.defaultProps = { type: S.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const T = y,
                    L = {
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
                    W = [
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
                        (P = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        P.apply(null, arguments)
                    );
                }
                class M extends r().PureComponent {
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
                            n = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            u[a] = e[a];
                                        }
                                    return u;
                                })(e, W)),
                            b = s()(L.base, L[`base__${n}`], L[`base__${_}`], null == i ? void 0 : i.base),
                            g = s()(L.icon, L[`icon__${n}`], L[`icon__${_}`], null == i ? void 0 : i.icon),
                            E = s()(L.glow, null == i ? void 0 : i.glow),
                            A = s()(L.caption, L[`caption__${n}`], null == i ? void 0 : i.caption),
                            C = s()(L.goto, null == i ? void 0 : i.goto);
                        return r().createElement(
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
                            'info' !== n && r().createElement('div', { className: L.shine }),
                            r().createElement('div', { className: g }, r().createElement('div', { className: E })),
                            r().createElement('div', { className: A }, t),
                            a && r().createElement('div', { className: C }, a),
                        );
                    }
                }
                M.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var I = u(6373),
                    O = u(3649),
                    $ = u(9916),
                    H = u(8613);
                const z = 24,
                    j = 60,
                    U = 60 * j,
                    q = z * U;
                Date.now(), H.Ew.getRegionalDateTime, H.Ew.getFormattedDateTime;
                const V = () => {},
                    G = (e = 0, t, u = 0, a = V) => {
                        const _ = (0, n.useState)(e),
                            r = _[0],
                            i = _[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    i(e);
                                    const _ = Date.now(),
                                        n = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - _) / 1e3);
                                                null !== u && t <= u ? (i(u), a && a(), clearInterval(n)) : i(t);
                                            },
                                            1e3 * (t || (e > 2 * j ? j : 1)),
                                        );
                                    return () => {
                                        clearInterval(n);
                                    };
                                }
                            }, [e, t, u, a]),
                            r
                        );
                    };
                var Z = u(7902);
                const Y = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var K = u(6536);
                const X = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Q = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    J = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const a = Y(`${e}.${u}`, window);
                                return X(a) ? t(e, u, a) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    ee = (e) => {
                        const t = ((e) => {
                                const t = (0, Z.F)(),
                                    u = t.caller,
                                    a = t.resId,
                                    _ = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: _, modelPath: Q(_, e || ''), resId: a };
                            })(),
                            u = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const _ = Y(Q(u, `${t}.${a}`), window);
                                    return X(_) ? (e.push(_.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    te = $.Sw.instance;
                let ue;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(ue || (ue = {}));
                const ae = (e = 'model', t = ue.Deep) => {
                        const u = (0, n.useState)(0),
                            a = (u[0], u[1]),
                            _ = (0, n.useMemo)(() => (0, Z.F)(), []),
                            r = _.caller,
                            i = _.resId,
                            s = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== r ? `subViews.${r}.${e}` : e),
                                [r, e],
                            ),
                            o = (0, n.useState)(() =>
                                ((e) => {
                                    const t = Y(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return X(t) ? t.value : t;
                                })(J(s)),
                            ),
                            l = o[0],
                            c = o[1],
                            m = (0, n.useRef)(-1);
                        return (
                            (0, K.Z)(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? ue.Deep : ue.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== ue.None)
                                ) {
                                    const u = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === ue.Deep
                                                ? (e === l && a((e) => e + 1), c(e))
                                                : c(Object.assign([], e));
                                        },
                                        _ = ee(e);
                                    m.current = te.addCallback(_, u, i, t === ue.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (t !== ue.None)
                                    return () => {
                                        te.removeCallback(m.current, i);
                                    };
                            }, [i, t]),
                            l
                        );
                    },
                    _e = ($.Sw.instance, G);
                var ne = u(5521);
                const re = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ie(e = ne.n.NONE, t = re, u = !1, _ = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== ne.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!_ && a.O.view.isEventHandled()) return;
                                a.O.view.setEventHandled(), t(n), u && n.stopPropagation();
                            }
                        }
                    }, [t, e, u, _]);
                }
                function se() {
                    !(function (e = ne.n.ESCAPE) {
                        ie(e, $.Sy, !0);
                    })(ne.n.ESCAPE);
                }
                var oe = u(9924),
                    le = u(3486);
                let ce;
                !(function (e) {
                    (e.DISABLED = 'disabled'), (e.ACTIVE = 'active');
                })(ce || (ce = {}));
                var me = u(2646),
                    de = u(4194),
                    be = u(7663),
                    ge = u(5611);
                let Ee;
                !(function (e) {
                    (e[(e.NONE = 0)] = 'NONE'), (e[(e.STATIC = 1)] = 'STATIC'), (e[(e.NEW = 2)] = 'NEW');
                })(Ee || (Ee = {}));
                var Ae = u(8188),
                    Ce = u(9930),
                    pe = u(4090),
                    Fe = u(7078);
                const Be = {
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
                    De = ({
                        index: e,
                        size: t,
                        isSelected: u,
                        isDisabled: a,
                        isNew: _ = !1,
                        isInfoIconVisible: i,
                        resourcesFolderName: o,
                        children: l,
                        onHoverChanged: c,
                        onItemClicked: m,
                        onInfoClicked: d,
                        resourceFolderGetter: b,
                        id: g,
                        modeName: E,
                        isNotStarted: A,
                    }) => {
                        const C = (0, Ce.O)(),
                            p = (0, n.useCallback)(
                                (t) => {
                                    t.stopPropagation(), w.playYes(), d({ index: e });
                                },
                                [d, e],
                            ),
                            F = (0, Ce.B)(c),
                            B = F[0],
                            D = F[1],
                            h = (0, n.useCallback)(() => {
                                x(
                                    [le.Id.B4, le.Id.B5, le.Id.B6].includes(t)
                                        ? 'ev_mode_selector_hover_simple'
                                        : 'ev_mode_selector_hover',
                                ),
                                    D(!0);
                            }, [D, t]),
                            f = (0, n.useCallback)(() => {
                                D(!1);
                            }, [D]),
                            v = (0, oe.Z)(['info', 'check', 'checkBackground'], Be),
                            N = C !== le.Cg.Big;
                        let S;
                        const k = b(o);
                        if (null !== k) {
                            const e = k.$dyn(`bg_${t}_${C}`);
                            null !== e && (S = { backgroundImage: `url(${e})` });
                            const u = k.$dyn(`bg_${t}`);
                            null !== u && (S = { backgroundImage: `url(${u})`, backgroundSize: 'cover' });
                        }
                        const y = i && (B || u);
                        return r().createElement(
                            Fe.t,
                            { isEnabled: a, args: { index: e, modeName: E, tooltipId: me.p5 } },
                            r().createElement(
                                'div',
                                null,
                                r().createElement(
                                    'div',
                                    {
                                        id: g,
                                        className: s()(Be.base, a && Be.base__disabled, A && Be.base__isNotStarted),
                                        onClick: () => {
                                            m({ index: e, size: t, cardMediaSize: C }), w.playClick();
                                        },
                                        onMouseEnter: h,
                                        onMouseLeave: f,
                                    },
                                    r().createElement(
                                        'div',
                                        { className: Be.mask },
                                        r().createElement('div', {
                                            className: s()(
                                                Be.background,
                                                void 0 === S && Be.background__empty,
                                                B && Be.background__anim,
                                            ),
                                            style: S,
                                        }),
                                    ),
                                    r().createElement('div', { className: Be.border }),
                                    u &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement('div', { className: Be.selection }),
                                            r().createElement('div', {
                                                className: s()(Be.animBg, t === le.Id.B0 && Be.animBg__wide),
                                            }),
                                            r().createElement('div', { className: v.checkBackground }),
                                            r().createElement('div', { className: v.check }),
                                        ),
                                    r().createElement('div', { className: s()(Be.hover, B && !A && Be.hover__anim) }),
                                    r().createElement('div', { className: Be.children }, l),
                                    _ &&
                                        !a &&
                                        r().createElement(
                                            'div',
                                            { className: Be.novelty },
                                            r().createElement(pe.A, {
                                                value: R.strings.mode_selector.novelty(),
                                                size: N ? 'small' : 'big',
                                            }),
                                        ),
                                    r().createElement('div', {
                                        className: s()(Be.infoCorner, y && Be.infoCorner__anim),
                                    }),
                                    r().createElement(
                                        I.i,
                                        { body: R.strings.tooltips.mode_selector.info.body(), isEnabled: y },
                                        r().createElement('div', {
                                            className: s()(v.info, y && Be.info__anim),
                                            onClick: p,
                                        }),
                                    ),
                                    a && r().createElement('div', { className: Be.disabling }),
                                ),
                            ),
                        );
                    };
                var he = u(2056);
                let fe;
                !(function (e) {
                    (e.LowRisk = 'lowRisk'), (e.MediumRisk = 'mediumRisk'), (e.HighRisk = 'highRisk');
                })(fe || (fe = {}));
                const ve = {
                    base: 'Performance_base_fd',
                    base__b2: 'Performance_base__b2_73',
                    text: 'Performance_text_2f',
                    base__mediumRisk: 'Performance_base__mediumRisk_ad',
                    base__highRisk: 'Performance_base__highRisk_ab',
                    icon: 'Performance_icon_69',
                    iconBig: 'Performance_iconBig_d5',
                    iconBig__mediumRisk: 'Performance_iconBig__mediumRisk_59',
                    iconBig__highRisk: 'Performance_iconBig__highRisk_5a',
                };
                let xe;
                function we() {
                    return (
                        (we = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        we.apply(null, arguments)
                    );
                }
                !(function (e) {
                    (e.Normal = 'normal'), (e.Attention = 'attention'), (e.Alert = 'alert'), (e.Blocker = 'blocker');
                })(xe || (xe = {}));
                const Ne = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const a = r().createElement('div', { className: u }, e);
                    if (t.header || t.body) return r().createElement(I.i, t, a);
                    const _ = t.contentId;
                    return _ ? r().createElement(he.u, we({}, t, { contentId: _ }), a) : r().createElement(Fe.t, t, a);
                };
                var Se = u(8045);
                const ke = {
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
                let ye, Te, Le;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(ye || (ye = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Te || (Te = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Le || (Le = {}));
                const We = { [Le.NBSP]: ye.NoBreakSymbol, [Le.ZWNBSP]: ye.NoBreakSymbol, [Le.NEW_LINE]: ye.LineBreak },
                    Re = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Pe = {
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
                    },
                    Me = 'renderers_noBreakWrapper_10',
                    Ie = 'renderers_lineBreak_b5',
                    Oe = 'renderers_newLine_bd',
                    $e = 'renderers_word_f3',
                    He = (e) => ({ color: `#${e}` }),
                    ze = ({ elementList: e, textBlock: t, key: u }) => {
                        const a = t.colorTag;
                        return a
                            ? Pe[a]
                                ? r().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: s()($e, Pe[a]) },
                                      e,
                                  )
                                : r().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: $e, style: He(a) },
                                      e,
                                  )
                            : r().createElement('span', { key: u, 'data-block-type': t.blockType, className: $e }, e);
                    },
                    je = {
                        [ye.Word]: ze,
                        [ye.NoBreakSymbol]: ze,
                        [ye.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            r().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => r().createElement(r().Fragment, { key: u }, e)),
                            ),
                        [ye.LineBreak]: ({ key: e }) =>
                            r().createElement('span', { key: e, 'data-block-type': ye.LineBreak, className: Ie }),
                        [ye.NewLine]: ({ elementList: e, key: t }) =>
                            r().createElement('span', { key: t, 'data-block-type': ye.NewLine, className: Oe }, e),
                        [ye.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            r().createElement(
                                'span',
                                { key: t, 'data-block-type': ye.NoBreakWrapper, className: Me },
                                e,
                            ),
                    },
                    Ue = (e, t, u) => {
                        const a = [];
                        return (
                            e.childList.forEach((_, n) => {
                                const r = `${u}_${n}`;
                                if (((e) => void 0 !== e.childList)(_)) {
                                    const e = _,
                                        t = e.blockType,
                                        u = Ue(e, je[t], r);
                                    a.push(...u);
                                } else a.push(t({ elementList: [_], textBlock: e, key: r }));
                            }),
                            a
                        );
                    },
                    qe = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            a = e.blockType,
                                            _ = je[a],
                                            n = Ue(e, _, t);
                                        return (
                                            a === ye.NoBreakWrapper
                                                ? u.push(_({ elementList: n, textBlock: e, key: `${t}` }))
                                                : u.push(...n),
                                            u
                                        );
                                    })(e, u),
                                );
                            }),
                            t
                        );
                    },
                    Ve = (e, t, u, a) => {
                        let _ = t.exec(e),
                            n = 0;
                        for (; _; ) n !== _.index && u(e.slice(n, _.index)), a(_), (n = t.lastIndex), (_ = t.exec(e));
                        n !== e.length && u(e.slice(n));
                    },
                    Ge = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    Ze = (e) => {
                        const t = [];
                        return (
                            Ve(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var u;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((u = e), u.match(Ge) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    Ye = Re
                        ? (e) => {
                              const t = [];
                              return (
                                  Ve(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...Ze(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const u = /[\s\u002d]/g;
                              let a = u.exec(e);
                              if (!a) return [e];
                              const _ = [];
                              let n = 0;
                              for (; a; ) {
                                  const r = t.justifyContent === Te.FlexEnd ? a.index : u.lastIndex;
                                  _.push(e.slice(n, r)), (n = r), (a = u.exec(e));
                              }
                              return n !== e.length && _.push(e.slice(n)), _;
                          },
                    Ke = (e, t = '', u) => {
                        const a = [];
                        return (
                            Ve(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: ye.Word, colorTag: t, childList: Ye(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        _ = We[u.charAt(0)];
                                    _ === ye.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: ye.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: ye.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(u),
                                          )
                                        : a.push({ blockType: _, colorTag: t, childList: [u] });
                                },
                            ),
                            a
                        );
                    },
                    Xe = (e, t, u = '', a) => {
                        const _ = [];
                        return (
                            Ve(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    _.push(...Ke(e, u, a));
                                },
                                (e) => {
                                    const n = e[1],
                                        r = void 0 === t[n] ? e[0] : t[n];
                                    'string' == typeof r || 'number' == typeof r
                                        ? _.push(...Ke(String(r), u, a))
                                        : _.push({ blockType: ye.Binding, colorTag: u, childList: [r] });
                                },
                            ),
                            _
                        );
                    },
                    Qe = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === ye.NoBreakWrapper) e.childList.push(a), u.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && u.push(e),
                                u.push({ blockType: ye.NoBreakWrapper, colorTag: '', childList: [t, a] });
                        }
                        return t.childList.length > 0 && u.push(t), u;
                    },
                    Je = (e, t = {}, u) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === ye.NoBreakSymbol
                                        ? ((u = !0), t.push(...Qe(t.pop(), e)))
                                        : (u ? t.push(...Qe(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const a = [];
                                return (
                                    Ve(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...Xe(e, t, '', u));
                                        },
                                        (e) => {
                                            a.push(...Xe(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    a
                                );
                            })((0, O.Eg)((0, O.z4)(e)), t, u),
                        );
                        return qe(a);
                    },
                    et = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    tt = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    ut = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = tt(e, t),
                            _ = e.textContent.length,
                            n = e.offsetWidth / _,
                            r = Math.ceil(a / n);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / n);
                            return a >= u ? [!0, u + r] : [!1, a];
                        }
                        const i = Math.max(u + r, 0);
                        return _ < i ? [!1, 0] : [!0, i];
                    },
                    at = (e, t, u, a, _, n) => {
                        let i = -1,
                            s = null;
                        for (let o = u; o >= 0; o--) {
                            const u = e[o],
                                l = Number(e[o].getAttribute('data-block-type'));
                            if (l === ye.LineBreak || l === ye.NewLine || l === ye.Binding) continue;
                            const c = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = ut(u, a, _),
                                    l = e[0],
                                    m = e[1];
                                if (!l) {
                                    m > 0 && (_ -= m);
                                    continue;
                                }
                                const d = c.slice(0, c.length - m) + n,
                                    b = t[o];
                                (s = r().cloneElement(b, b.props, d)), (i = o);
                                break;
                            }
                            {
                                const e = u.children,
                                    l = t[o],
                                    m = l.props.children,
                                    d = at(e, m, e.length - 1, a, _, n),
                                    b = d[0],
                                    g = d[1];
                                if (!(b < 0)) {
                                    const e = m.slice(0, b);
                                    (s = r().cloneElement(l, l.props, e, g)), (i = o);
                                    break;
                                }
                                _ -= c.length;
                            }
                        }
                        return [i, s];
                    },
                    _t = (e, t, u, a = '...') => {
                        const _ = [...t],
                            n = e.current;
                        if (!n) return [_, !1];
                        const r = u.height,
                            i = u.width,
                            s = n.lastElementChild;
                        if (!et(s, r) && tt(s, i) <= 0) return [_, !1];
                        const o = n.children,
                            l = ((e, t) => {
                                let u = 0,
                                    a = e.length - 1;
                                for (; a - u >= 0; ) {
                                    const _ = u + Math.ceil(0.5 * (a - u));
                                    et(e[_], t) ? (a = _ - 1) : (u = _ + 1);
                                }
                                return u - 1;
                            })(o, r);
                        if (l < 0) return [_, !1];
                        const c = at(o, _, l, i, a.length, a),
                            m = c[0],
                            d = c[1];
                        return d && (_.splice(m, 1, d), _.splice(m + 1)), [_, !0];
                    },
                    nt = r().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: a,
                            isTooltipEnable: _ = !1,
                            isTruncationAvailable: i = !1,
                            customTooltipArgs: o,
                            targetId: l,
                            justifyContent: c = Te.FlexStart,
                            alignContent: m = Te.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const b = (0, n.useRef)(null),
                                g = (0, n.useRef)({ height: 0, width: 0 }),
                                E = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = E[0],
                                C = E[1],
                                p = (0, n.useMemo)(() => Je(e, a, { justifyContent: c }), [a, c, e]),
                                F = (0, n.useMemo)(() => {
                                    if (
                                        _ &&
                                        A.isTruncated &&
                                        (!a || !Object.values(a).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, o, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [a, _, l, e, o, A.isTruncated]),
                                B = (0, n.useCallback)(
                                    (e) => {
                                        (g.current.width = e.contentRect.width),
                                            (g.current.height = e.contentRect.height);
                                        const t = _t(b, p, g.current, d),
                                            a = t[0],
                                            _ = t[1];
                                        C({ elementList: a, isTruncated: _, isTruncateFinished: !0 }), u && u(_);
                                    },
                                    [u, d, p],
                                ),
                                D = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: m }), [m, c]);
                            return (
                                ((e, t, u = !0) => {
                                    const a = (0, n.useCallback)(
                                        (e) => {
                                            const u = e[0];
                                            t && t(u);
                                        },
                                        [t],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !u) return;
                                        const t = new Se.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, u, e]);
                                })(b, B, i),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            ke.base,
                                            t,
                                            ke.base__zeroPadding,
                                            i && ke.base__isTruncationAvailable,
                                        ),
                                        style: D,
                                    },
                                    r().createElement('div', { className: ke.unTruncated, ref: b }, p),
                                    r().createElement(
                                        Ne,
                                        {
                                            tooltipArgs: F,
                                            className: s()(
                                                ke.tooltip,
                                                ke[`tooltip__justify-${c}`],
                                                ke[`tooltip__align-${m}`],
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    ke.truncated,
                                                    !A.isTruncateFinished && i && ke.truncated__hide,
                                                ),
                                                style: D,
                                            },
                                            A.isTruncateFinished && i ? A.elementList : p,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                function rt() {
                    return (
                        (rt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        rt.apply(null, arguments)
                    );
                }
                const it = { [fe.LowRisk]: xe.Normal, [fe.MediumRisk]: xe.Alert, [fe.HighRisk]: xe.Blocker },
                    st = ({ size: e, performanceRisk: t = fe.LowRisk, modeName: u, cut: a }) => {
                        var _;
                        const i = R.strings.mode_selector.mode.$dyn(u),
                            o = (0, n.useMemo)(() => {
                                if (i && i.performance) {
                                    const e = i.performance.$dyn(t);
                                    if (e) {
                                        const u = e.header(),
                                            _ = e.description(),
                                            n = a
                                                ? R.views.lobby.common.tooltips.SimpleIconTooltip('resId')
                                                : R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                      'resId',
                                                  ),
                                            r = a
                                                ? 0
                                                : R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId');
                                        return {
                                            args: { header: u, body: _, headerType: a ? it[t] : xe.Normal },
                                            contentId: n,
                                            decoratorId: r,
                                        };
                                    }
                                }
                            }, [i, t, a]);
                        if (t === fe.LowRisk || !i || null == i || !i.performance) return null;
                        const l = (null == (_ = i.performance) ? void 0 : _.$dyn(t)).headerIcon();
                        return r().createElement(
                            he.u,
                            rt({}, o, { isEnabled: Boolean(o) }),
                            a
                                ? r().createElement('div', { className: s()(ve.iconBig, ve[`iconBig__${t}`]) })
                                : r().createElement(
                                      'div',
                                      { className: s()(ve.base, ve[`base__${e}`], ve[`base__${t}`]) },
                                      r().createElement(nt, {
                                          classMix: ve.text,
                                          text: l,
                                          isTruncationAvailable: e === le.Id.B2,
                                          binding: { icon: r().createElement('div', { className: ve.icon }) },
                                          justifyContent: Te.Center,
                                      }),
                                  ),
                        );
                    },
                    ot = 'TimeLeft_base_cf',
                    lt = 'TimeLeft_base__small_7c',
                    ct = 'TimeLeft_icon_5d',
                    mt = ({ index: e, text: t, isSmall: u = !1, classMix: a, tooltipId: _, modeName: n = '' }) =>
                        r().createElement(
                            Fe.t,
                            { args: _ ? { tooltipId: _, modeName: n } : { tooltipId: me.GN, index: e } },
                            r().createElement(
                                'div',
                                { className: s()(ot, u && lt, a) },
                                r().createElement('div', { className: ct }),
                                t,
                            ),
                        ),
                    dt = {
                        base: 'BattlePassIcon_base_bf',
                        bpIcon: 'BattlePassIcon_bpIcon_18',
                        bpIcon__extraLarge: 'BattlePassIcon_bpIcon__extraLarge_b3',
                        bpIcon__large: 'BattlePassIcon_bpIcon__large_c2',
                        bpAnim: 'BattlePassIcon_bpAnim_01',
                        bpAnim__extraLarge: 'BattlePassIcon_bpAnim__extraLarge_38',
                        bpAnim__large: 'BattlePassIcon_bpAnim__large_1e',
                    },
                    bt = ({ modeName: e, isDisabled: t, battlePassState: u }) => {
                        const a = (0, oe.Z)([...(0, le.Hp)('bpIcon', 'bpAnim')], dt);
                        return (
                            (0, n.useEffect)(() => {
                                u !== Ee.NEW || t || x('ev_mode_selector_bp_points_icon_appear');
                            }, [u, t]),
                            u === Ee.NONE || t
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: dt.base },
                                      r().createElement(
                                          he.u,
                                          {
                                              contentId:
                                                  R.views.lobby.mode_selector.tooltips.SimplyFormatTooltip('resId'),
                                              args: { modeName: e },
                                              ignoreShowDelay: !0,
                                          },
                                          r().createElement('div', { className: a.bpIcon }),
                                      ),
                                      u === Ee.NEW && r().createElement('div', { className: a.bpAnim }),
                                  )
                        );
                    };
                var gt = u(280);
                const Et = {
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
                    At = R.images.gui.maps.icons.mode_selector.rewards,
                    Ct = R.images.gui.maps.icons.vehicleTypes.c_24x24,
                    pt = ['small', 'small-b0', 'small-b1', 'medium'],
                    Ft = [le.Id.B0, le.Id.B1],
                    Bt = ({
                        mediaSize: e,
                        cardSize: t,
                        iconName: u,
                        name: a,
                        description: _,
                        tooltipID: i,
                        vehicleLevel: o,
                        vehicleType: l,
                        isPremium: c,
                    }) => {
                        const m = `${e}${Ft.includes(t) ? `-${t}` : ''}`,
                            d = (0, n.useMemo)(() => {
                                const e = pt.includes(m) ? 'c_48x48' : 'c_64x64';
                                return { backgroundImage: `url(${At.$dyn(e).$dyn(u)})` };
                            }, [m, u]);
                        return r().createElement(
                            Ne,
                            {
                                tooltipArgs: {
                                    args: { tooltipId: i },
                                    body: i ? '' : _,
                                    header: i ? '' : a,
                                    ignoreShowDelay: !0,
                                },
                            },
                            r().createElement(
                                'div',
                                { className: s()(Et.base, Et[`base__${m}`]) },
                                r().createElement(
                                    'div',
                                    { className: Et.header },
                                    r().createElement('div', {
                                        className: Et.vehicleType,
                                        style: l
                                            ? {
                                                  backgroundImage: `url(${Ct.$dyn(`${(0, O.BN)(l)}${c ? '_elite' : ''}`)})`,
                                              }
                                            : void 0,
                                    }),
                                    r().createElement('div', null, o),
                                ),
                                r().createElement('div', { className: Et.icon, style: d }),
                                a && r().createElement(gt.z, { text: a, classMix: Et.name }),
                            ),
                        );
                    },
                    Dt = {
                        base: 'Rewards_base_c8',
                        base__extraSmall: 'Rewards_base__extraSmall_9b',
                        base__small: 'Rewards_base__small_78',
                        base__medium: 'Rewards_base__medium_75',
                    };
                function ht() {
                    return (
                        (ht = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        ht.apply(null, arguments)
                    );
                }
                const ft = ({ size: e, rewardsList: t }) => {
                        const u = (0, Ce.O)(),
                            a = (0, oe.Z)(['base'], Dt);
                        return r().createElement(
                            'div',
                            { className: a.base },
                            t &&
                                t.map(
                                    (t) =>
                                        t &&
                                        t.value &&
                                        r().createElement(
                                            Bt,
                                            ht({ key: t.value.iconName, mediaSize: u, cardSize: e }, t.value),
                                        ),
                                ),
                        );
                    },
                    vt = {
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
                var xt = u(8668);
                const wt = [
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
                    'classNames',
                    'resourceFolderGetter',
                ];
                function Nt() {
                    return (
                        (Nt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        Nt.apply(null, arguments)
                    );
                }
                const St = (e) => {
                        let t = e.name,
                            u = e.eventName,
                            a = e.statusNotActive,
                            _ = e.description,
                            i = e.conditions,
                            o = e.children,
                            l = e.onHoverChanged,
                            c = e.calendarTooltip,
                            m = void 0 === c ? '' : c,
                            d = e.widgetComponent,
                            b = e.battlePassState,
                            g = e.isDisabled,
                            E = e.timeLeft,
                            A = e.rewardList,
                            C = e.statusActive,
                            p = e.divider,
                            F = void 0 === p ? ' ' : p,
                            B = e.belowStatusComponent,
                            D = e.nameSuffixComponent,
                            h = e.forceShowIcon,
                            f = void 0 !== h && h,
                            v = e.hideStatus,
                            x = void 0 !== v && v,
                            w = e.noWidgetSizes,
                            N = void 0 === w ? [le.Id.B5, le.Id.B6] : w,
                            S = e.classNames,
                            k = e.resourceFolderGetter,
                            y = void 0 === k ? le.d6 : k,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, wt);
                        const L = (0, Ce.O)(),
                            W = (0, oe.Z)(
                                [
                                    ...(0, le.Hp)(
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
                                vt,
                            ),
                            P = ae('model', ue.None),
                            M = P.onItemClicked,
                            I = P.onInfoClicked,
                            $ = T.resourcesFolderName,
                            H = T.size,
                            z = T.isSelected,
                            j = T.showWidget,
                            U = T.isNew,
                            q = T.modeName,
                            V = T.index,
                            G = T.performance,
                            Z = (0, Ce.B)(l),
                            Y = Z[0],
                            K = Z[1],
                            X = (0, n.useMemo)(() => xt.S4[H][L], [H, L]),
                            Q = (0, n.useMemo)(() => {
                                const e = y($);
                                if (null !== e) {
                                    const t = e.$dyn(`icon_${X}`);
                                    if (void 0 !== t) return { backgroundImage: `url(${t})` };
                                }
                            }, [y, $, X]),
                            J = j || z,
                            ee = xt.Hi.includes(H),
                            te = H === le.Id.B0,
                            _e = H === le.Id.B1,
                            ne = H === le.Id.B2,
                            re = H === le.Id.B3,
                            ie = xt.u_.includes(H),
                            se = !N.includes(H) && j && d,
                            ce = J && !ee,
                            me = Y && !ee && !J,
                            de = Y || (z && C),
                            be = L !== le.Cg.Big,
                            ge = A && A.length > 0 && !a && ie,
                            Ee = G && G.showPerfRisk,
                            pe = (0, n.useMemo)(
                                () =>
                                    g
                                        ? R.strings.ranked_battles.rankedBattlesUnreachableView.subtitleText()
                                        : C || u || void 0,
                                [g, C, u],
                            ),
                            Fe = (0, n.useMemo)(
                                () => (ie || re ? a || '' : void 0 === a ? '' : a.replace('\n', ' ')),
                                [ie, a, re],
                            );
                        let Be = '';
                        _e && _ === pe ? i && (Be = (0, O.z4)(i)) : (te && _ === pe) || (Be = (0, O.z4)(_ + F + i));
                        const he = s()(
                                vt.icon,
                                vt[`icon__${X}`],
                                W[`icon__${H}`],
                                !ee && vt.icon__animPrepare,
                                ce && W[`icon__static__${H}`],
                                me && W[`icon__anim__${H}`],
                            ),
                            fe = s()(vt.mask, W[`mask__${H}`], ce && vt.mask__static, me && vt.mask__anim),
                            ve = s()(
                                W.subtitle,
                                W[`subtitle__${H}`],
                                (u || !ee) && vt.subtitle__normal,
                                !ie && vt.subtitle__noReward,
                                C && ee && vt.subtitle__statusActive,
                                C && J && vt.subtitle__staticPrepare,
                                de && vt.subtitle__anim,
                                g && vt.subtitle__disable,
                                null == S ? void 0 : S.subtitle,
                            ),
                            xe = s()(
                                vt.statusDescription,
                                ne && vt.statusDescription__position,
                                ie && vt.statusDescription__color,
                            ),
                            we = s()(W.footer, (Y || z) && !j && re && vt.footer__anim, null == S ? void 0 : S.footer),
                            Ne = s()(W.formatText, W[`formatText__${H}`]),
                            Se = s()(vt.darken, j && vt.darken__show),
                            ke = s()(
                                vt.widgetOverlay,
                                !se && vt.widgetOverlay__hide,
                                null == S ? void 0 : S.widgetOverlay,
                            );
                        return r().createElement(
                            'div',
                            { className: s()(W.base, W[`base__${H}`]) },
                            r().createElement(
                                De,
                                Nt({ onHoverChanged: K, isDisabled: g }, T, {
                                    onItemClicked: M,
                                    onInfoClicked: I,
                                    resourceFolderGetter: y,
                                }),
                                ge && r().createElement(ft, { size: H, rewardsList: A }),
                                a &&
                                    r().createElement(
                                        'div',
                                        { className: s()(W.statusNotActive, W[`statusNotActive__${H}`]) },
                                        r().createElement(Ae.B, { text: Fe, classMix: Ne }),
                                    ),
                                r().createElement('div', { className: Se }),
                                d && r().createElement('div', { className: ke }, d),
                                o,
                                (!se || f) &&
                                    r().createElement(
                                        'div',
                                        { className: fe },
                                        r().createElement('div', { className: he, style: Q }),
                                    ),
                                r().createElement('div', { className: s()(vt.name, W.name, W[`name__${H}`]) }, t, D),
                                r().createElement(
                                    'div',
                                    { className: ve },
                                    !x && (!ne || g) && r().createElement(Ae.B, { classMix: Ne, text: pe || '' }),
                                    Be &&
                                        ie &&
                                        !g &&
                                        (!se || ie) &&
                                        r().createElement(
                                            'div',
                                            { className: xe },
                                            r().createElement(Ae.B, { classMix: Ne, text: Be }),
                                        ),
                                    Ee &&
                                        ie &&
                                        r().createElement(st, {
                                            size: H,
                                            modeName: q,
                                            performanceRisk: G.performanceRisk,
                                            cut: !1,
                                        }),
                                    r().createElement(
                                        'div',
                                        { className: s()(vt.belowStatus, null == S ? void 0 : S.belowStatus) },
                                        B,
                                    ),
                                ),
                                i &&
                                    r().createElement(
                                        'div',
                                        { className: we },
                                        r().createElement(Ae.B, { classMix: Ne, text: (0, O.z4)(i) }),
                                    ),
                                E &&
                                    !U &&
                                    r().createElement(mt, {
                                        index: V,
                                        text: E,
                                        isSmall: be,
                                        classMix: s()(vt.timeLeft, be && vt.timeLeft__small),
                                        tooltipId: m,
                                        modeName: q,
                                    }),
                                r().createElement(bt, { modeName: q, isDisabled: g, battlePassState: b }),
                                Ee &&
                                    !ie &&
                                    r().createElement(st, {
                                        size: H,
                                        modeName: q,
                                        performanceRisk: G.performanceRisk,
                                        cut: !0,
                                    }),
                            ),
                        );
                    },
                    kt = { widgetOverlay: 'Card_widgetOverlay_a5', belowStatus: 'Card_belowStatus_b6' },
                    yt = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Tt, Lt;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Tt || (Tt = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Lt || (Lt = {}));
                const Wt = ({ size: e = Tt.Default }) => {
                        const t = s()(yt.background, yt[`background__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    Rt = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Pt = ({ size: e }) => {
                        const t = s()(Rt.base, Rt[`base__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    Mt = {
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
                    It = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: _, withoutBounce: n }) => {
                            const i = s()(
                                    Mt.base,
                                    Mt[`base__${e}`],
                                    u && Mt.base__disabled,
                                    _ && Mt.base__finished,
                                    n && Mt.base__withoutBounce,
                                ),
                                o = !u && !_;
                            return r().createElement(
                                'div',
                                { className: i, style: a, ref: t },
                                r().createElement('div', { className: Mt.pattern }),
                                r().createElement('div', { className: Mt.gradient }),
                                o && r().createElement(Pt, { size: e }),
                            );
                        },
                    ),
                    Ot = ({ size: e, value: t, lineRef: u, disabled: a, onComplete: _ }) => {
                        const i = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            s = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                s && _ && _();
                            }, [s, _]),
                            r().createElement(It, { size: e, disabled: a, baseStyles: i, isComplete: s, lineRef: u })
                        );
                    },
                    $t = (e, t) => {
                        let u;
                        const a = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            'function' == typeof u && u(), clearTimeout(a);
                        };
                    };
                let Ht, zt;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Ht || (Ht = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(zt || (zt = {}));
                const jt = 'ProgressBarDeltaSimple_base_6c',
                    Ut = 'ProgressBarDeltaSimple_delta_99',
                    qt = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: _,
                            to: i,
                            onEndAnimation: s,
                            onChangeAnimationState: o,
                        }) => {
                            const l = i < a,
                                c = (0, n.useState)(zt.Idle),
                                m = c[0],
                                d = c[1],
                                b = m === zt.In,
                                g = m === zt.End,
                                E = m === zt.Idle,
                                A = (0, n.useCallback)(
                                    (e) => {
                                        d(e), o && o(e);
                                    },
                                    [o],
                                );
                            (0, n.useEffect)(() => {
                                if (E && !u) {
                                    return $t(() => {
                                        A(zt.In);
                                    }, t);
                                }
                            }, [A, u, E, t]),
                                (0, n.useEffect)(() => {
                                    if (b) {
                                        return $t(() => {
                                            s && s(), A(zt.End);
                                        }, e + t);
                                    }
                                }, [A, b, s, t, e]);
                            const C = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, t, e],
                                ),
                                p = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, t, e],
                                ),
                                F = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(a - i)}%`, left: `${l ? i : a}%` }),
                                    [a, l, i],
                                );
                            return g
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: jt, style: F },
                                      r().createElement(
                                          'div',
                                          { style: E ? C : p, className: Ut },
                                          r().createElement(Pt, { size: _ }),
                                      ),
                                  );
                        },
                    ),
                    Vt = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: _,
                            isComplete: i,
                            animationSettings: s,
                            onChangeAnimationState: o,
                            onEndAnimation: l,
                        }) => {
                            const c = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(It, {
                                    size: t,
                                    lineRef: a,
                                    disabled: _,
                                    isComplete: i,
                                    baseStyles: c,
                                }),
                                u >= 0 &&
                                    r().createElement(qt, {
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
                    Gt = 'ProgressBarDeltaGrow_base_7e',
                    Zt = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Yt = 'ProgressBarDeltaGrow_glow_68',
                    Kt = (e) => (e ? { left: 0 } : { right: 0 }),
                    Xt = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Qt = (e) => ({ transitionDuration: `${e}ms` }),
                    Jt = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: _,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = i < a,
                                d = (0, n.useState)(Ht.Idle),
                                b = d[0],
                                g = d[1],
                                E = b === Ht.End,
                                A = b === Ht.Idle,
                                C = b === Ht.Grow,
                                p = b === Ht.Shrink,
                                F = (0, n.useCallback)(
                                    (e) => {
                                        g(e), l && l(e);
                                    },
                                    [l],
                                ),
                                B = (0, n.useCallback)(
                                    (e, t) =>
                                        $t(() => {
                                            F(e);
                                        }, t),
                                    [F],
                                );
                            (0, n.useEffect)(() => {
                                if (!u)
                                    return A
                                        ? B(Ht.Grow, t)
                                        : C
                                          ? B(Ht.Shrink, e)
                                          : p
                                            ? B(Ht.End, e)
                                            : void (E && o && o());
                            }, [B, u, E, C, A, p, o, t, e]);
                            const D = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Qt(e), Kt(m)), [m, e]),
                                h = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Qt(e), Kt(m)), [m, e]),
                                f = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Xt(m, a), Qt(e)), [a, m, e]),
                                v = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - a)}%` }, Xt(m, a), Qt(e)),
                                    [a, m, i, e],
                                );
                            if (E) return null;
                            const x = s()(Gt, c, m && 0 === i && Zt);
                            return r().createElement(
                                'div',
                                { style: A ? f : v, className: x },
                                r().createElement(
                                    'div',
                                    { style: p ? h : D, className: Yt },
                                    r().createElement(Pt, { size: _ }),
                                ),
                            );
                        },
                    ),
                    eu = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: _,
                            isComplete: i,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = e < u,
                                m = (0, n.useState)(!1),
                                d = m[0],
                                b = m[1],
                                g = (0, n.useCallback)(
                                    (e) => {
                                        e === Ht.Shrink && b(!0), l && l(e);
                                    },
                                    [l],
                                ),
                                E = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                A = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(It, {
                                    size: t,
                                    lineRef: a,
                                    disabled: _,
                                    isComplete: i,
                                    withoutBounce: c && 0 === e,
                                    baseStyles: d ? A : E,
                                }),
                                u >= 0 &&
                                    r().createElement(Jt, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: g,
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
                    tu = ['onComplete', 'onEndAnimation'];
                function uu() {
                    return (
                        (uu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        uu.apply(null, arguments)
                    );
                }
                const au = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, tu);
                        const _ = (0, n.useState)(!1),
                            i = _[0],
                            s = _[1],
                            o = (0, n.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== i && s(e), e && t && t(), u && u();
                            }, [i, t, u, a.to]);
                        switch (a.animationSettings.type) {
                            case Lt.Simple:
                                return r().createElement(Vt, uu({}, a, { onEndAnimation: o, isComplete: i }));
                            case Lt.Growing:
                                return r().createElement(eu, uu({}, a, { onEndAnimation: o, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    _u = ['onEndAnimation'];
                function nu() {
                    return (
                        (nu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        nu.apply(null, arguments)
                    );
                }
                const ru = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    u[a] = e[a];
                                }
                            return u;
                        })(e, _u);
                    const a = (0, n.useRef)({}),
                        _ = (0, n.useCallback)(() => {
                            (a.current.from = void 0), t && t();
                        }, [t]),
                        i = 'number' == typeof a.current.from ? a.current.from : u.from;
                    return (
                        (a.current.from = i),
                        r().createElement(au, nu({}, u, { onEndAnimation: _, key: `${i}-${u.to}`, from: i }))
                    );
                });
                function iu() {
                    return (
                        (iu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        iu.apply(null, arguments)
                    );
                }
                const su = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: a,
                            deltaFrom: _,
                            animationSettings: n,
                            onEndAnimation: i,
                            onChangeAnimationState: s,
                            onComplete: o,
                        }) => {
                            if (_ === t)
                                return r().createElement(Ot, {
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
                                animationSettings: n,
                                onComplete: o,
                                onEndAnimation: i,
                                onChangeAnimationState: s,
                            };
                            return n.withStack
                                ? r().createElement(ru, l)
                                : r().createElement(au, iu({ key: `${_}-${t}` }, l));
                        },
                    ),
                    ou = (e) => ({
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
                    lu = (e, t, u) => (u < e ? e : u > t ? t : u),
                    cu = (e, t, u) => {
                        if ('number' == typeof u) {
                            return (lu(0, t, u) / t) * 100;
                        }
                        return e;
                    },
                    mu = {
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
                    du = {
                        freezed: !1,
                        withStack: !1,
                        type: Lt.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    bu = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = mu,
                            size: u = Tt.Default,
                            animationSettings: a = du,
                            disabled: _ = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: m,
                            onEndAnimation: d,
                            onComplete: b,
                        }) => {
                            const g = ((e, t, u) =>
                                (0, n.useMemo)(() => {
                                    const a = (lu(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: cu(a, t, u) };
                                }, [u, t, e]))(o, e, l);
                            return r().createElement(
                                'div',
                                { className: s()(yt.base, yt[`base__${u}`]), style: ou(t) },
                                !i && r().createElement(Wt, { size: u }),
                                r().createElement(su, {
                                    size: u,
                                    lineRef: c,
                                    disabled: _,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: d,
                                    onChangeAnimationState: m,
                                    onComplete: b,
                                }),
                            );
                        },
                    ),
                    gu = {
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
                    Eu = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Au = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Cu = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    pu = (0, n.memo)(({ text: e, binding: t, classMix: u }) => {
                        const a = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            _ = (0, n.useMemo)(() => t || {}, [t]);
                        let i = Eu.exec(e),
                            s = e,
                            o = 0;
                        for (; i; ) {
                            const u = i[0],
                                n = Au.exec(u),
                                l = Cu.exec(u),
                                c = i[1];
                            if (n && l) {
                                const e = n[0],
                                    i = e + o++ + e;
                                (s = s.replace(u, `%(${i})`)),
                                    (_[i] = gu[e]
                                        ? r().createElement(
                                              'span',
                                              { className: gu[e] },
                                              r().createElement(gt.z, { text: c, binding: t }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: a(e) },
                                              r().createElement(gt.z, { text: c, binding: t }),
                                          ));
                            }
                            i = Eu.exec(e);
                        }
                        return r().createElement(gt.z, { text: s, classMix: u, binding: _ });
                    }),
                    Fu = {
                        base: 'Progression_base_94',
                        title: 'Progression_title_81',
                        contentWrapper: 'Progression_contentWrapper_3a',
                        progress: 'Progression_progress_7b',
                        currentStage: 'Progression_currentStage_67',
                        progressValue: 'Progression_progressValue_f7',
                        progressValueIcon: 'Progression_progressValueIcon_e9',
                    },
                    Bu = R.strings.mode_selector.mode.battleRoyale.progression,
                    Du = {
                        freezed: !1,
                        withStack: !1,
                        type: Lt.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    hu = ({ status: e = ce.ACTIVE, currentStage: t, stageCurrentPoints: u, stageMaximumPoints: a }) =>
                        r().createElement(
                            'div',
                            { className: s()(Fu.base, Fu[`base__${e}`]) },
                            r().createElement(
                                'div',
                                { className: Fu.contentWrapper },
                                u !== a &&
                                    e === ce.ACTIVE &&
                                    r().createElement(
                                        'div',
                                        { className: Fu.progress },
                                        r().createElement(
                                            'div',
                                            { className: Fu.currentStage },
                                            Bu.currentStage(),
                                            r().createElement('span', null, t),
                                        ),
                                        r().createElement(bu, {
                                            size: Tt.Small,
                                            value: u,
                                            maxValue: a,
                                            animationSettings: Du,
                                            deltaFrom: u,
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: Fu.progressValue },
                                            r().createElement(pu, { text: Bu.steps(), binding: { done: u, total: a } }),
                                            r().createElement('div', { className: Fu.progressValueIcon }),
                                        ),
                                    ),
                            ),
                        );
                function fu() {
                    return (
                        (fu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        fu.apply(null, arguments)
                    );
                }
                const vu = (e) => {
                    const t = e.statusNotActive,
                        u = e.battlePassState,
                        a = e.size,
                        _ = e.widget,
                        n = e.showWidget,
                        i = a === le.Id.B1 && n;
                    return r().createElement(
                        'div',
                        { className: kt[`base__${a}`] },
                        r().createElement(
                            St,
                            fu(
                                {
                                    belowStatusComponent: i && r().createElement(hu, _),
                                    classNames: { belowStatus: kt.belowStatus },
                                },
                                e,
                                { battlePassState: t ? Ee.NONE : u },
                            ),
                        ),
                    );
                };
                let xu, wu;
                !(function (e) {
                    (e[(e.A = 1)] = 'A'),
                        (e[(e.B = 2)] = 'B'),
                        (e[(e.C = 3)] = 'C'),
                        (e[(e.D = 4)] = 'D'),
                        (e[(e.E = 5)] = 'E');
                })(xu || (xu = {})),
                    (function (e) {
                        (e[(e.Achieved = 0)] = 'Achieved'),
                            (e[(e.Current = 1)] = 'Current'),
                            (e[(e.Inactive = 2)] = 'Inactive');
                    })(wu || (wu = {}));
                const Nu = R.strings.comp7.division,
                    Su = { [xu.A]: 'A', [xu.B]: 'B', [xu.C]: 'C', [xu.D]: 'D', [xu.E]: 'E' },
                    ku = (e) => Nu.$dyn(Su[e]);
                let yu;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(yu || (yu = {}));
                const Tu = {
                        [yu.First]: 'first',
                        [yu.Second]: 'second',
                        [yu.Third]: 'third',
                        [yu.Fourth]: 'fourth',
                        [yu.Fifth]: 'fifth',
                        [yu.Sixth]: 'sixth',
                    },
                    Lu = (e) => ((e, t) => `${e.$dyn(Tu[t])}`)(R.strings.comp7.rank, e),
                    Wu = [yu.First, yu.Second, yu.Third, yu.Fourth],
                    Ru = (e) => Wu.includes(e),
                    Pu = {
                        widget: 'Comp7BattleCard_widget_3b',
                        base__b0: 'Comp7BattleCard_base__b0_91',
                        base__b1: 'Comp7BattleCard_base__b1_30',
                        base__b2: 'Comp7BattleCard_base__b2_da',
                        belowStatus: 'Comp7BattleCard_belowStatus_48',
                    },
                    Mu = 'QualificationCounter_base_fb',
                    Iu = 'QualificationCounter_dash_e2',
                    Ou = 'QualificationCounter_dash__right_3e',
                    $u = 'QualificationCounter_iconContainer_c3',
                    Hu = 'QualificationCounter_battleIcon_2e',
                    zu = 'QualificationCounter_score_3b',
                    ju = ({ battlesCount: e, maxBattlesCount: t, className: u }) =>
                        r().createElement(
                            'div',
                            { className: s()(Mu, u) },
                            r().createElement('div', { className: Iu }),
                            r().createElement(pu, {
                                text: R.strings.comp7.qualification.battlesCounter(),
                                binding: {
                                    battleIcon: r().createElement(
                                        'div',
                                        { className: $u },
                                        r().createElement('div', { className: Hu }),
                                    ),
                                    battlesCount: e,
                                    maxBattlesCount: t,
                                },
                                classMix: zu,
                            }),
                            r().createElement('div', { className: s()(Iu, Ou) }),
                        );
                var Uu = u(3403),
                    qu = u(7030);
                const Vu = {
                        [yu.First]: 'first',
                        [yu.Second]: 'second',
                        [yu.Third]: 'third',
                        [yu.Fourth]: 'fourth',
                        [yu.Fifth]: 'fifth',
                        [yu.Sixth]: 'sixth',
                    },
                    Gu = (e) => Vu[e];
                let Zu;
                !(function (e) {
                    (e[(e.x22 = 22)] = 'x22'),
                        (e[(e.x40 = 40)] = 'x40'),
                        (e[(e.x48 = 48)] = 'x48'),
                        (e[(e.x64 = 64)] = 'x64'),
                        (e[(e.x84 = 84)] = 'x84'),
                        (e[(e.x110 = 110)] = 'x110'),
                        (e[(e.x150 = 150)] = 'x150'),
                        (e[(e.x200 = 200)] = 'x200'),
                        (e[(e.x260 = 260)] = 'x260'),
                        (e[(e.x320 = 320)] = 'x320'),
                        (e[(e.x420 = 420)] = 'x420'),
                        (e[(e.x600 = 600)] = 'x600');
                })(Zu || (Zu = {}));
                const Yu = 'RankEmblem_base_ec',
                    Ku = ({ rank: e, size: t, division: u, seasonName: a, className: _ }) => {
                        const i = (0, n.useMemo)(() => {
                            const _ = R.images.gui.maps.icons.comp7.ranks.$dyn(a).$num(t),
                                n = Ru(e) && void 0 !== u ? `_${ku(u)}` : '';
                            return { backgroundImage: `url(${_.$dyn(`${Gu(e)}${n}`)})`, '--imageSize': `${t}rem` };
                        }, [a, t, e, u]);
                        return r().createElement('div', { className: s()(Yu, _), style: i });
                    },
                    Xu = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 100, config: { duration: 300 } };
                function Qu() {
                    return !1;
                }
                console.log;
                var Ju = u(9174);
                function ea(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return ta(e, t);
                                var u = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === u && e.constructor && (u = e.constructor.name),
                                    'Map' === u || 'Set' === u
                                        ? Array.from(e)
                                        : 'Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                          ? ta(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ta(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const ua = (e) => (0 === e ? window : window.subViews.get(e));
                const aa = ((e, t) => {
                        const u = (0, n.createContext)({});
                        return [
                            function ({ mode: _ = 'real', options: i, children: s, mocks: o }) {
                                const l = (0, n.useRef)([]),
                                    c = (u, _, n) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = ua,
                                                context: _ = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = n.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const a = u(t),
                                                        n = _.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const s = 'string' == typeof r ? `${_}.${r}` : _,
                                                            o = a.O.view.addModelObserver(s, t, !0);
                                                        return n.set(o, u), e && u(i(r)), o;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const u = i(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, u = ea(n.keys()); !(e = u()).done; ) r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(_),
                                            s =
                                                'real' === u
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === u ? (null == n ? void 0 : n.getter(e)) : s.readByPath(e),
                                            c = (e) => l.current.push(e),
                                            m = e({
                                                mode: u,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : o(e),
                                                            _ = Ju.LO.box(a, { equals: Qu });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, Ju.aD)((e) => _.set(e)),
                                                                    e,
                                                                ),
                                                            _
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : o(e),
                                                            _ = Ju.LO.box(a, { equals: Qu });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, Ju.aD)((e) => _.set(e)),
                                                                    e,
                                                                ),
                                                            _
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = o(t);
                                                        if (Array.isArray(e)) {
                                                            const _ = e.reduce(
                                                                (e, t) => ((e[t] = Ju.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, Ju.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                _[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                _
                                                            );
                                                        }
                                                        {
                                                            const _ = e,
                                                                n = Object.entries(_),
                                                                r = n.reduce(
                                                                    (e, [t, u]) => ((e[u] = Ju.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, Ju.aD)((e) => {
                                                                            n.forEach(([t, u]) => {
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
                                                cleanup: c,
                                            }),
                                            d = { mode: u, model: m, externalModel: s, cleanup: c };
                                        return {
                                            model: m,
                                            controls: 'mocks' === u && n ? n.controls(d) : t(d),
                                            externalModel: s,
                                            mode: u,
                                        };
                                    },
                                    m = (0, n.useRef)(!1),
                                    d = (0, n.useState)(_),
                                    b = d[0],
                                    g = d[1],
                                    E = (0, n.useState)(() => c(_, i, o)),
                                    A = E[0],
                                    C = E[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        m.current ? C(c(b, i, o)) : (m.current = !0);
                                    }, [o, b, i]),
                                    (0, n.useEffect)(() => {
                                        g(_);
                                    }, [_]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            A.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [A],
                                    ),
                                    r().createElement(u.Provider, { value: A }, s)
                                );
                            },
                            () => (0, n.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            divisionInfo: e.object('divisionInfo'),
                            qualification: e.primitives(
                                ['isActive', 'maxBattlesCount', 'battlesCount', 'isRatingCalculation'],
                                'qualificationModel',
                            ),
                        }),
                        ({ externalModel: e }) => ({ onOpenMeta: e.createCallbackNoArgs('onOpenMeta') }),
                    ),
                    _a = (aa[0], aa[1]),
                    na = 'Progress_base_2e',
                    ra = 'Progress_progress_32',
                    ia = 'Progress_status_95',
                    sa = 'Progress_statusPoints_73',
                    oa = 'Progress_points_a7',
                    la = 'Progress_dash_32',
                    ca = 'Progress_dash__right_fb',
                    ma = 'Progress_score_c0',
                    da = ({ rank: e, currentScore: t, prevScore: u, divisionInfo: a, className: _ }) =>
                        Ru(e)
                            ? r().createElement(
                                  'div',
                                  { className: s()(na, _) },
                                  r().createElement(
                                      'div',
                                      { className: ra },
                                      r().createElement(bu, {
                                          size: Tt.Small,
                                          value: t - a.from,
                                          maxValue: a.to - a.from,
                                          deltaFrom: u - a.from,
                                      }),
                                  ),
                                  r().createElement(
                                      'div',
                                      { className: ia },
                                      r().createElement(gt.z, {
                                          text: R.strings.comp7.mainWidget.status(),
                                          binding: {
                                              score: r().createElement('span', { className: sa }, t),
                                              scoreToNextDivision: a.to,
                                          },
                                      }),
                                  ),
                              )
                            : r().createElement(
                                  'div',
                                  { className: oa },
                                  r().createElement('div', { className: la }),
                                  r().createElement('div', { className: ma }, t),
                                  r().createElement('div', { className: s()(la, ca) }),
                              ),
                    ba = R.strings.comp7.qualification,
                    ga = { hasHtmlContent: !0 },
                    Ea = ({ maxBattlesCount: e, children: t }) =>
                        r().createElement(
                            I.i,
                            {
                                header: ba.conditionTooltip.header(),
                                body: (0, O.uF)(ba.conditionTooltip.body(e), { maxBattlesCount: e }),
                                args: ga,
                            },
                            r().createElement('div', null, t),
                        ),
                    Aa = ({ size: e, seasonName: t, className: u }) => {
                        const a = R.images.gui.maps.icons.comp7.ranks.$dyn(t).$num(e);
                        return r().createElement('div', {
                            className: s()(Yu, u),
                            style: { backgroundImage: `url(${a.$dyn('qualification')})`, '--imageSize': `${e}rem` },
                        });
                    },
                    Ca = 'Qualification_base_46',
                    pa = 'Qualification_ratingCalculation_8f',
                    Fa = 'Qualification_timer_78',
                    Ba = R.strings.comp7.mainWidget,
                    Da = (0, Uu.Pi)(({ seasonName: e, classNames: t }) => {
                        const u = _a(),
                            a = u.model,
                            _ = u.controls,
                            n = a.root.get().isEnabled,
                            i = a.qualification.battlesCount.get(),
                            s = a.qualification.maxBattlesCount.get(),
                            o = a.qualification.isRatingCalculation.get();
                        return r().createElement(
                            'div',
                            { className: Ca },
                            r().createElement(
                                'div',
                                { className: null == t ? void 0 : t.content },
                                r().createElement(
                                    he.u,
                                    {
                                        contentId: R.views.lobby.comp7.tooltips.MainWidgetTooltip('resId'),
                                        isEnabled: n,
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: null == t ? void 0 : t.emblemContainer,
                                            onClick: n ? _.onOpenMeta : void 0,
                                            onMouseDown: n ? w.playClick : void 0,
                                            onMouseEnter: w.playHighlight,
                                        },
                                        r().createElement(Aa, {
                                            size: Zu.x150,
                                            seasonName: e,
                                            className: null == t ? void 0 : t.emblem,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    Ea,
                                    { maxBattlesCount: s },
                                    r().createElement(ju, { battlesCount: i, maxBattlesCount: s }),
                                ),
                            ),
                            o &&
                                r().createElement(
                                    I.i,
                                    { body: R.strings.comp7.qualification.ratingCalculationTooltip() },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(gt.z, {
                                            text: Ba.ratingCalculation(),
                                            classMix: pa,
                                            binding: { timer: r().createElement('div', { className: Fa }) },
                                        }),
                                    ),
                                ),
                        );
                    }),
                    ha = 'Warning_base_a5',
                    fa = 'Warning_lighting_e0',
                    va = 'Warning_value_1e',
                    xa = 'Warning_base__text_08',
                    wa = 'Warning_timer_fe',
                    Na = ({ rankInactivityCount: e, warningText: t, className: u }) => {
                        const a = 0 === e;
                        return r().createElement(
                            'div',
                            { className: s()(ha, a && xa, u) },
                            !a && r().createElement('div', { className: fa }),
                            r().createElement('div', { className: va }, a ? t : e),
                            r().createElement(
                                'div',
                                { className: wa },
                                a && r().createElement('div', { className: fa }),
                            ),
                        );
                    },
                    Sa = 'App_base_de',
                    ka = 'App_content_da',
                    ya = 'App_emblemContainer_dc',
                    Ta = 'App_base__unavailable_e1',
                    La = 'App_emblem_90',
                    Wa = 'App_progression_e6',
                    Ra = 'App_warning_f8',
                    Pa = R.strings.comp7.scoreTooltip,
                    Ma = { content: ka, emblemContainer: ya, emblem: La },
                    Ia =
                        ((0, Uu.Pi)(() => {
                            const e = _a(),
                                t = e.model,
                                u = e.controls,
                                _ = t.root.get(),
                                i = _.hasRankInactivityWarning,
                                o = _.rankInactivityCount,
                                l = _.isEnabled,
                                c = _.rank,
                                m = _.currentScore,
                                d = _.prevScore,
                                b = _.seasonName,
                                E = t.divisionInfo.get(),
                                A = (0, n.useRef)(null),
                                C = g().mediaSize,
                                p = (0, qu.useSpring)(Xu);
                            return (
                                (0, n.useEffect)(
                                    () =>
                                        ((e) => {
                                            let t,
                                                u = null;
                                            return (
                                                (u = requestAnimationFrame(() => {
                                                    u = requestAnimationFrame(() => {
                                                        (u = null), (t = e());
                                                    });
                                                })),
                                                () => {
                                                    'function' == typeof t && t(),
                                                        null !== u && cancelAnimationFrame(u);
                                                }
                                            );
                                        })(() => {
                                            if (null != A && A.current) {
                                                const e = A.current.getBoundingClientRect(),
                                                    t = e.width,
                                                    u = e.height;
                                                viewEnv.setInputArea(0, 0, a.O.view.pxToRem(t), a.O.view.pxToRem(u));
                                            }
                                        }),
                                    [C, i],
                                ),
                                r().createElement(
                                    qu.animated.div,
                                    { className: s()(Sa, !l && Ta), ref: A, style: p },
                                    t.qualification.isActive.get()
                                        ? r().createElement(Da, { seasonName: b, classNames: Ma })
                                        : r().createElement(
                                              r().Fragment,
                                              null,
                                              r().createElement(
                                                  'div',
                                                  { className: ka },
                                                  r().createElement(
                                                      he.u,
                                                      {
                                                          contentId:
                                                              R.views.lobby.comp7.tooltips.MainWidgetTooltip('resId'),
                                                          isEnabled: l,
                                                      },
                                                      r().createElement(
                                                          'div',
                                                          {
                                                              className: ya,
                                                              onClick: l ? u.onOpenMeta : void 0,
                                                              onMouseDown: l ? w.playClick : void 0,
                                                              onMouseEnter: w.playHighlight,
                                                          },
                                                          r().createElement(Ku, {
                                                              rank: c,
                                                              size: Zu.x150,
                                                              seasonName: b,
                                                              className: La,
                                                              division: l ? E.name : void 0,
                                                          }),
                                                      ),
                                                  ),
                                                  l &&
                                                      r().createElement(
                                                          I.i,
                                                          { header: Pa.header(), body: Pa.body() },
                                                          r().createElement(
                                                              'div',
                                                              null,
                                                              r().createElement(da, {
                                                                  rank: c,
                                                                  currentScore: m,
                                                                  prevScore: d,
                                                                  divisionInfo: E,
                                                                  className: Wa,
                                                              }),
                                                          ),
                                                      ),
                                              ),
                                              l &&
                                                  i &&
                                                  r().createElement(
                                                      he.u,
                                                      {
                                                          contentId:
                                                              R.views.lobby.comp7.tooltips.RankInactivityTooltip(
                                                                  'resId',
                                                              ),
                                                          ignoreShowDelay: !0,
                                                      },
                                                      r().createElement(
                                                          'div',
                                                          null,
                                                          r().createElement(Na, {
                                                              rankInactivityCount: o,
                                                              warningText: R.strings.comp7.mainWidget.warning(),
                                                              className: Ra,
                                                          }),
                                                      ),
                                                  ),
                                          ),
                                )
                            );
                        }),
                        {
                            base: 'Progression_base_bb',
                            progress: 'Progression_progress_2a',
                            warning: 'Progression_warning_1f',
                            battlesCounter__b0: 'Progression_battlesCounter__b0_31',
                            battlesCounter__b1: 'Progression_battlesCounter__b1_92',
                            battlesCounter__b2: 'Progression_battlesCounter__b2_0c',
                            battlesCounter: 'Progression_battlesCounter_df',
                        }),
                    Oa = R.strings.comp7.scoreTooltip,
                    $a = ({
                        rankInactivityCount: e,
                        hasRankInactivityWarning: t,
                        rank: u,
                        currentScore: a,
                        prevScore: _,
                        divisionInfo: n,
                        size: i,
                        qualificationModel: o,
                    }) =>
                        r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(
                                'div',
                                { className: Ia.base },
                                o.isActive
                                    ? r().createElement(
                                          'div',
                                          { className: s()(Ia.battlesCounter, Ia[`battlesCounter__${i}`]) },
                                          r().createElement(ju, {
                                              battlesCount: o.battlesCount,
                                              maxBattlesCount: o.maxBattlesCount,
                                          }),
                                      )
                                    : r().createElement(
                                          I.i,
                                          { header: Oa.header(), body: Oa.body() },
                                          r().createElement(da, {
                                              rank: u,
                                              currentScore: a,
                                              prevScore: _,
                                              divisionInfo: n,
                                              className: Ia.progress,
                                          }),
                                      ),
                            ),
                            t &&
                                r().createElement(
                                    he.u,
                                    {
                                        contentId: R.views.lobby.comp7.tooltips.RankInactivityTooltip('resId'),
                                        ignoreShowDelay: !0,
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(Na, {
                                            rankInactivityCount: e,
                                            warningText: R.strings.mode_selector.mode.comp7.warning(),
                                            className: Ia.warning,
                                        }),
                                    ),
                                ),
                        ),
                    Ha = ({ widget: e, className: t }) => {
                        const u = g().mediaSize < m.Medium,
                            a = e.qualificationModel.isActive;
                        return r().createElement(
                            he.u,
                            { contentId: R.views.lobby.comp7.tooltips.MainWidgetTooltip('resId') },
                            r().createElement(
                                'div',
                                { onMouseEnter: w.playHighlight },
                                a
                                    ? r().createElement(Aa, {
                                          size: u ? Zu.x64 : Zu.x150,
                                          seasonName: e.seasonName,
                                          className: t,
                                      })
                                    : r().createElement(Ku, {
                                          seasonName: e.seasonName,
                                          rank: e.rank,
                                          division: u ? void 0 : e.divisionInfo.name,
                                          size: u ? Zu.x64 : Zu.x150,
                                          className: t,
                                      }),
                            ),
                        );
                    },
                    za = ['size', 'description', 'showWidget', 'widget'];
                function ja() {
                    return (
                        (ja = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        ja.apply(null, arguments)
                    );
                }
                const Ua = R.strings.mode_selector.mode.comp7.widgetDescription,
                    qa = [le.Id.B0, le.Id.B1],
                    Va = (e) => {
                        if (e.qualificationModel.isActive) {
                            const t = e.qualificationModel.maxBattlesCount;
                            return (0, O.uF)(Ua.qualification(t), { maxBattlesCount: t });
                        }
                        const t = Lu(e.rank);
                        return Ru(e.rank)
                            ? (0, O.uF)(Ua.status(), {
                                  rank: t,
                                  division: ((u = e.divisionInfo.name), (0, O.uF)(Nu.text(), { division: ku(u) })),
                              })
                            : t;
                        var u;
                    },
                    Ga = R.images.gui.maps.icons.mode_selector.mode.comp7,
                    Za = (e) => {
                        let t = e.size,
                            u = e.description,
                            a = e.showWidget,
                            _ = e.widget,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, za);
                        const i = _ && _.isEnabled,
                            s = a && i && qa.includes(t);
                        return r().createElement(
                            'div',
                            { className: Pu[`base__${t}`] },
                            r().createElement(
                                St,
                                ja(
                                    {
                                        widgetComponent:
                                            i && r().createElement(Ha, { widget: _, className: Pu.widget }),
                                        showWidget: a,
                                        size: t,
                                        belowStatusComponent: s && r().createElement($a, ja({}, _, { size: t })),
                                        description: a && i ? Va(_) : u,
                                        classNames: { belowStatus: Pu.belowStatus },
                                    },
                                    n,
                                    { resourceFolderGetter: () => (_ ? Ga.$dyn(_.seasonName) : null) },
                                ),
                            ),
                        );
                    };
                var Ya = u(9459);
                let Ka, Xa;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(Ka || (Ka = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(Xa || (Xa = {}));
                const Qa = 'Countdown_base_fe',
                    Ja = 'Countdown_icon_8b',
                    e_ = 'Countdown_description_8d',
                    t_ = (e) => e.toString().padStart(2, '0'),
                    u_ = (e, t) => {
                        switch (t) {
                            case Xa.Description:
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
                            case Xa.Short:
                                return `${t_(e.minutes)}:${t_(e.seconds)}`;
                            case Xa.Long:
                                return `${t_(e.hours)}:${t_(e.minutes)}:${t_(e.seconds)}`;
                            case Xa.Extended:
                                return `${(0, O.WU)(R.strings.common.duration.days(), { days: e.days })} | ${t_(e.hours)}:${t_(e.minutes)}:${t_(e.seconds)}`;
                        }
                    },
                    a_ = R.images.gui.maps.icons.components.countdown,
                    __ = (e, t) => {
                        const u = 2 === t ? a_.big : a_;
                        switch (e) {
                            case Ka.Timer:
                                return u.clock();
                            case Ka.Countdown:
                                return u.hourglass();
                            case Ka.Cooldown:
                                return u.lock();
                        }
                    },
                    n_ = (0, n.memo)(
                        ({
                            duration: e,
                            icon: t = Ka.Timer,
                            style: u = Xa.Description,
                            onTimeReached: _,
                            className: i = '',
                            classNames: o = {},
                        }) => {
                            const l = u !== Xa.Description ? 1 : void 0,
                                c = _e(e, l),
                                m = (() => {
                                    const e = (0, n.useState)(a.O.view.getScale()),
                                        t = e[0],
                                        u = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
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
                            const d = u_(
                                (function (e = 0) {
                                    let t = e;
                                    const u = Math.trunc(t / q);
                                    t -= u * q;
                                    const a = Math.trunc(t / U);
                                    t -= a * U;
                                    const _ = Math.trunc(t / j);
                                    return (t -= _ * j), { days: u, hours: a, minutes: _, seconds: t };
                                })(c),
                                u,
                            );
                            return r().createElement(
                                'div',
                                { className: s()(Qa, i) },
                                t !== Ka.None &&
                                    r().createElement('div', {
                                        className: s()(Ja, o.icon),
                                        style: { backgroundImage: `url('${__(t, m)}')` },
                                    }),
                                r().createElement('div', { className: s()(e_, o.text) }, d),
                            );
                        },
                    );
                let r_;
                !(function (e) {
                    (e.DISABLED = 'disabled'), (e.ACTIVE = 'active'), (e.RESETTABLE = 'resettable');
                })(r_ || (r_ = {}));
                const i_ = {
                    base: 'Progression_base_4f',
                    title: 'Progression_title_d7',
                    base__resettable: 'Progression_base__resettable_e1',
                    base__disabled: 'Progression_base__disabled_bf',
                    contentWrapper: 'Progression_contentWrapper_24',
                    progress: 'Progression_progress_4f',
                    progressValue: 'Progression_progressValue_1a',
                    countdown: 'Progression_countdown_5b',
                };
                var s_ = u(9762),
                    o_ = u(6457);
                let l_, c_;
                !(function (e) {
                    (e.Init = 'init'),
                        (e.Active = 'active'),
                        (e.NonActive = 'nonActive'),
                        (e.UpdateState = 'updateState');
                })(l_ || (l_ = {})),
                    (function (e) {
                        (e.CheckDataUpdate = 'checkDataUpdate'),
                            (e.UpdateStageData = 'updateStageData'),
                            (e.SwitchState = 'switchState');
                    })(c_ || (c_ = {}));
                const m_ = (e) => e === r_.ACTIVE,
                    d_ = (e) => m_(e.status),
                    b_ = (e) => !m_(e.status),
                    g_ = (e, t) => e.status !== t.status && E_(e, t),
                    E_ = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints === e.currentPoints &&
                        t.maximumPoints === e.maximumPoints &&
                        0 === e.earnedPoints,
                    A_ = (e, t) =>
                        m_(t.status) &&
                        ((1 === t.stage && 0 === t.currentPoints) ||
                            (t.stage === e.stage && e.maximumPoints !== t.maximumPoints)),
                    C_ = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints === e.currentPoints &&
                        t.maximumPoints === e.maximumPoints &&
                        0 !== e.earnedPoints,
                    p_ = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints !== e.currentPoints &&
                        t.maximumPoints === e.maximumPoints,
                    F_ = (e, t) => t.stage > e.stage && e.currentPoints < e.maximumPoints,
                    B_ = (e, t) => t.stage > e.stage && e.currentPoints === e.maximumPoints,
                    D_ = (e, t) => t.stage < e.stage && e.currentPoints > 0,
                    h_ = (e, t) => t.stage < e.stage && 0 === e.currentPoints,
                    f_ = (e, t) => e.status !== t.status && m_(t.status),
                    v_ = (e) => {
                        e.isSoundEnabled && 0 !== e.earnedPoints && x('ev_fep_progress_bar');
                    },
                    x_ = R.strings.fun_random.modes,
                    w_ = R.strings.fun_random.modeSelector.progression,
                    N_ = {
                        freezed: !1,
                        withStack: !1,
                        type: Lt.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    S_ = ({
                        status: e,
                        currentStage: t,
                        statusTimer: u,
                        stageCurrentPoints: a,
                        stageMaximumPoints: _,
                        conditionText: i,
                        isContentVisible: o,
                        assetsPointer: l,
                    }) => {
                        const c = r().useMemo(() => {
                                return (
                                    (u = 'fun-card-fsm'),
                                    (n = {
                                        status: e,
                                        stage: t,
                                        currentPoints: a,
                                        maximumPoints: _,
                                        earnedPoints: 0,
                                        isSoundEnabled: o,
                                    }),
                                    (r = 300),
                                    (0, s_.C)(
                                        {
                                            preserveActionOrder: !0,
                                            id: u,
                                            initial: l_.Init,
                                            context: n,
                                            states: {
                                                [l_.Init]: { always: { target: l_.UpdateState } },
                                                [l_.UpdateState]: {
                                                    always: [
                                                        { target: l_.Active, cond: d_ },
                                                        { target: l_.NonActive, cond: b_ },
                                                    ],
                                                },
                                                [l_.Active]: {
                                                    on: {
                                                        [c_.CheckDataUpdate]: [
                                                            {
                                                                target: l_.Active,
                                                                actions: [
                                                                    (0, o_.lW)((e, t) => ({
                                                                        type: c_.SwitchState,
                                                                        status: t.status,
                                                                    })),
                                                                ],
                                                                cond: g_,
                                                            },
                                                            { target: l_.Active, cond: E_ },
                                                            {
                                                                target: l_.UpdateState,
                                                                actions: [
                                                                    (0, o_.f0)({
                                                                        status: (e, t) => t.status,
                                                                        stage: (e, t) => t.stage,
                                                                        currentPoints: (e, t) => t.currentPoints,
                                                                        maximumPoints: (e, t) => t.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    }),
                                                                ],
                                                                cond: A_,
                                                            },
                                                            {
                                                                target: l_.Active,
                                                                actions: [
                                                                    (0, o_.lW)((e) => ({
                                                                        type: c_.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.maximumPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: e.maximumPoints - e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: F_,
                                                            },
                                                            {
                                                                target: l_.Active,
                                                                actions: [
                                                                    (0, o_.lW)((e, t) => ({
                                                                        type: c_.UpdateStageData,
                                                                        stage: t.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: t.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    (0, o_.lW)(
                                                                        (e, t) => ({
                                                                            type: c_.UpdateStageData,
                                                                            stage: t.stage,
                                                                            currentPoints: t.currentPoints,
                                                                            maximumPoints: t.maximumPoints,
                                                                            earnedPoints: t.currentPoints,
                                                                        }),
                                                                        { delay: r },
                                                                    ),
                                                                ],
                                                                cond: B_,
                                                            },
                                                            {
                                                                target: l_.Active,
                                                                actions: [
                                                                    (0, o_.lW)((e, t) => ({
                                                                        type: c_.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: t.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: t.currentPoints - e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: p_,
                                                            },
                                                            {
                                                                target: l_.Active,
                                                                actions: [
                                                                    (0, o_.lW)((e) => ({
                                                                        type: c_.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    (0, o_.lW)((e, t) => ({
                                                                        type: c_.SwitchState,
                                                                        status: t.status,
                                                                    })),
                                                                ],
                                                                cond: C_,
                                                            },
                                                            {
                                                                target: l_.Active,
                                                                actions: [
                                                                    (0, o_.lW)((e) => ({
                                                                        type: c_.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: -e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: D_,
                                                            },
                                                            {
                                                                target: l_.Active,
                                                                actions: [
                                                                    (0, o_.lW)((e, t) => ({
                                                                        type: c_.UpdateStageData,
                                                                        stage: t.stage,
                                                                        currentPoints: t.currentPoints,
                                                                        maximumPoints: t.maximumPoints,
                                                                        earnedPoints: t.currentPoints - t.maximumPoints,
                                                                    })),
                                                                ],
                                                                cond: h_,
                                                            },
                                                        ],
                                                        [c_.UpdateStageData]: {
                                                            target: l_.Active,
                                                            actions: [
                                                                (0, o_.f0)({
                                                                    stage: (e, t) => t.stage,
                                                                    currentPoints: (e, t) => t.currentPoints,
                                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                                    earnedPoints: (e, t) => t.earnedPoints,
                                                                }),
                                                                v_,
                                                            ],
                                                        },
                                                        [c_.SwitchState]: {
                                                            target: l_.UpdateState,
                                                            actions: (0, o_.f0)({ status: (e, t) => t.status }),
                                                        },
                                                    },
                                                },
                                                [l_.NonActive]: {
                                                    on: {
                                                        [c_.CheckDataUpdate]: {
                                                            target: l_.UpdateState,
                                                            actions: [
                                                                (0, o_.f0)({
                                                                    status: (e, t) => t.status,
                                                                    stage: (e, t) => t.stage,
                                                                    currentPoints: (e, t) => t.currentPoints,
                                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                                    earnedPoints: 0,
                                                                }),
                                                            ],
                                                            cond: f_,
                                                        },
                                                        [c_.SwitchState]: {
                                                            target: l_.UpdateState,
                                                            actions: (0, o_.f0)({ status: (e, t) => t.status }),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            guards: {
                                                hasActiveStatus: d_,
                                                hasNonActiveStatus: b_,
                                                isStatusUpdate: g_,
                                                isNoUpdate: E_,
                                                isTaskSwitchingUpdate: A_,
                                                isUpdateCurrentStageWithZeroEarnPoints: C_,
                                                isUpdateCurrentStageWithCurrentPoints: p_,
                                                isUpdateToNextStageWithoutFillMax: B_,
                                                isUpdateToNextStageWithFillMax: F_,
                                                isUpdateToPrevStageWithReset: D_,
                                                isUpdateToPrevStageWithoutReset: h_,
                                                isUpdateWithActiveSwitch: f_,
                                            },
                                        },
                                    )
                                );
                                var u, n, r;
                            }, []),
                            m = (0, Ya.eO)(c),
                            d = m[0],
                            b = m[1],
                            g = (0, n.useMemo)(() => {
                                var e;
                                return (null != (e = x_.$dyn(l)) ? e : x_.undefined).mode_selector.progression;
                            }, [l]),
                            E = d.context.status === r_.ACTIVE,
                            A = d.context.status === r_.RESETTABLE,
                            C = w_.$dyn(d.context.currentPoints > 0 ? 'steps' : 'stepsNoProgress'),
                            p = g.resettable(),
                            F = A ? p : i;
                        (0, n.useEffect)(() => {
                            b({ type: c_.CheckDataUpdate, status: e, stage: t, currentPoints: a, maximumPoints: _ });
                        }, [e, a, _, t, b]);
                        const B = (0, n.useCallback)(() => {
                            b({ type: c_.CheckDataUpdate, status: e, stage: t, currentPoints: a, maximumPoints: _ });
                        }, [a, _, t, e, b]);
                        return r().createElement(
                            he.u,
                            {
                                contentId: R.views.fun_random.lobby.tooltips.FunRandomProgressionTooltipView('resId'),
                                isEnabled: E,
                            },
                            r().createElement(
                                'div',
                                { className: s()(i_.base, i_[`base__${d.context.status}`]) },
                                r().createElement('div', { className: i_.title }, F),
                                r().createElement(
                                    'div',
                                    { className: i_.contentWrapper },
                                    r().createElement(
                                        'div',
                                        { className: i_.progress },
                                        r().createElement(
                                            'div',
                                            { className: i_.progressValue },
                                            r().createElement(pu, {
                                                text: C,
                                                binding: {
                                                    done: d.context.currentPoints,
                                                    total: d.context.maximumPoints,
                                                },
                                            }),
                                        ),
                                        r().createElement(bu, {
                                            size: Tt.Small,
                                            value: d.context.currentPoints,
                                            maxValue: d.context.maximumPoints,
                                            animationSettings: N_,
                                            deltaFrom: d.context.currentPoints - d.context.earnedPoints,
                                            onEndAnimation: B,
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: i_.countdown },
                                        r().createElement(n_, { duration: u, style: Xa.Description }),
                                    ),
                                ),
                            ),
                        );
                    },
                    k_ = {
                        widgetOverlay: 'FunRandomCard_widgetOverlay_f2',
                        subtitle: 'FunRandomCard_subtitle_d0',
                        belowStatus: 'FunRandomCard_belowStatus_03',
                        belowStatus__hidden: 'FunRandomCard_belowStatus__hidden_ad',
                    },
                    y_ = ['size', 'showWidget', 'widget', 'isContentVisible', 'resourcesFolderName'];
                function T_() {
                    return (
                        (T_ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        T_.apply(null, arguments)
                    );
                }
                const L_ = R.images.fun_random.gui.maps.icons.feature.asset_packs.modes,
                    W_ = (e) => {
                        let t = e.size,
                            u = e.showWidget,
                            a = e.widget,
                            _ = e.isContentVisible,
                            n = e.resourcesFolderName,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, y_);
                        const o = t === le.Id.B1 && u;
                        return r().createElement(
                            'div',
                            { className: k_[`base__${t}`] },
                            r().createElement(
                                St,
                                T_(
                                    {
                                        showWidget: u,
                                        size: t,
                                        belowStatusComponent:
                                            o &&
                                            r().createElement(S_, T_({}, a, { isContentVisible: _, assetsPointer: n })),
                                        classNames: {
                                            belowStatus: s()(k_.belowStatus, !o && k_.belowStatus__hidden),
                                            subtitle: k_.subtitle,
                                        },
                                        resourcesFolderName: n,
                                    },
                                    i,
                                    {
                                        resourceFolderGetter: (e) => {
                                            var t;
                                            return (null != (t = L_.$dyn(e)) ? t : L_.undefined).mode_selector;
                                        },
                                    },
                                ),
                            ),
                        );
                    },
                    R_ = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    P_ = {
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
                function M_() {
                    const e = (0, n.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useEffect)(() => t, []),
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
                }
                var I_;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(I_ || (I_ = {}));
                const O_ = ['__left', '__right', '__top', '__bottom'],
                    $_ =
                        ((0, n.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: u, customStyles: _ = {} }, i) => {
                                const o = (0, n.useRef)(null),
                                    l = (0, n.useRef)(null),
                                    c = (0, n.useRef)(null),
                                    m = (0, n.useState)(window.decorator && window.decorator.directionType),
                                    d = m[0],
                                    b = m[1],
                                    g = (0, n.useCallback)(() => {
                                        w.playClick(), a.O.view.sendEvent.close();
                                    }, []),
                                    E = (0, n.useCallback)(() => {
                                        w.playHighlight();
                                    }, []),
                                    A = s()(P_.arrow, P_[`arrow${O_[d]}`]);
                                R_(
                                    () => (
                                        a.O.client.events.mouse.enableOutside(),
                                        a.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (u ? u() : a.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const C = (0, n.useCallback)(
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
                                    p = M_(),
                                    F = (0, n.useCallback)(() => {
                                        const e = l.current;
                                        if (e)
                                            return (
                                                a.O.view.freezeTextureBeforeResize(),
                                                p.run(() => {
                                                    const t = e.scrollWidth,
                                                        u = e.scrollHeight;
                                                    a.O.view.resize(t, u), b(window.decorator.directionType);
                                                })
                                            );
                                    }, [p]);
                                return (
                                    (0, n.useImperativeHandle)(i, () => ({ updateSize: F })),
                                    R_(() => {
                                        a.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, n.useEffect)(() => {
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
                                            !t && e.promise.then(() => F()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', C);
                                            }
                                        );
                                    }, [F, C, t]),
                                    r().createElement(
                                        'div',
                                        { className: P_.base, ref: l },
                                        r().createElement(
                                            'div',
                                            { className: P_.decorator },
                                            r().createElement(
                                                'div',
                                                { className: P_.content, ref: o },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    r().createElement(
                                                        I.i,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        r().createElement('div', {
                                                            className: P_.closeBtn,
                                                            onClick: g,
                                                            onMouseEnter: E,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            r().createElement('div', { className: A, style: _.arrow }),
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
                function H_() {
                    return (
                        (H_ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        H_.apply(null, arguments)
                    );
                }
                const z_ = (e) => {
                        let t = e.contentId,
                            u = e.decoratorId,
                            a = e.direction,
                            _ = void 0 === a ? I_.Top : a,
                            i = e.targetId,
                            s = e.args,
                            o = e.onClick,
                            l = e.children,
                            c = e.isEnabled,
                            m = void 0 === c || c,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, $_);
                        const b = (0, n.useRef)(null),
                            g = (0, n.useCallback)(() => {
                                if ((0, $.wU)()) return (0, $.SW)();
                                b.current && (0, $.P3)(t, _, b.current, u, i, s);
                            }, [t, _, s, u, i]);
                        return r().createElement(
                            'div',
                            H_(
                                {
                                    ref: b,
                                    onMouseDown:
                                        ((E = l.props.onClick),
                                        (e) => {
                                            m && (g(), o && o(e), E && E(e));
                                        }),
                                },
                                d,
                            ),
                            l,
                        );
                        var E;
                    },
                    j_ = 'ToggleButton_base_d9',
                    U_ = 'ToggleButton_content_ee',
                    q_ = 'ToggleButton_overlay_d9',
                    V_ = 'ToggleButton_base__active_6e',
                    G_ = 'ToggleButton_indicator_c5',
                    Z_ = ['active', 'className', 'children', 'size', 'showIndicator'];
                function Y_() {
                    return (
                        (Y_ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        Y_.apply(null, arguments)
                    );
                }
                const K_ = (e) => {
                        let t = e.active,
                            u = e.className,
                            a = e.children,
                            _ = e.size,
                            n = void 0 === _ ? k.small : _,
                            i = e.showIndicator,
                            o = void 0 === i || i,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, Z_);
                        return r().createElement(
                            'div',
                            { className: s()(j_, u, t && V_) },
                            r().createElement(
                                T,
                                Y_({ type: 'secondary', size: n }, l),
                                r().createElement('div', { className: U_ }, a),
                            ),
                            o && r().createElement('div', { className: G_ }),
                            r().createElement('div', { className: q_ }),
                        );
                    },
                    X_ =
                        ((0, n.memo)(K_),
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
                    Q_ = R.strings.mode_selector.mode.random,
                    J_ = (0, n.memo)(
                        ({
                            contentId: e,
                            handleSettingsClick: t,
                            body: u,
                            showBigSettingsButton: a,
                            isShowButton: _,
                            isSettingsActive: n,
                            withBubble: i,
                        }) => {
                            const o = (0, oe.Z)(['base', 'toggle', 'base__bigButton'], X_);
                            return r().createElement(
                                'div',
                                { className: s()(o.base, a && o.base__bigButton, _ && X_.base__anim), onClick: t },
                                r().createElement(
                                    z_,
                                    { contentId: e, direction: a ? I_.Top : I_.Right },
                                    r().createElement(
                                        I.i,
                                        { body: u, isEnabled: _ },
                                        r().createElement(
                                            K_,
                                            {
                                                type: S.ghost,
                                                size: k.medium,
                                                active: n,
                                                showIndicator: !1,
                                                mixClass: s()(o.toggle, !a && X_.toggle__shortBtn),
                                            },
                                            r().createElement(
                                                'div',
                                                { className: X_.settingsLabel },
                                                r().createElement('div', {
                                                    className: s()(X_.icon, !a && X_.icon__shortBtn),
                                                }),
                                                a && Q_.setup(),
                                            ),
                                        ),
                                    ),
                                ),
                                Boolean(i) && r().createElement('div', { className: X_.bubble }),
                            );
                        },
                    ),
                    en = ['isSelected', 'onHoverChanged', 'isSettingsActive', 'withSettingsNotification'];
                function tn() {
                    return (
                        (tn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        tn.apply(null, arguments)
                    );
                }
                const un = (e) => {
                    let t = e.isSelected,
                        u = e.onHoverChanged,
                        a = e.isSettingsActive,
                        _ = e.withSettingsNotification,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    u[a] = e[a];
                                }
                            return u;
                        })(e, en);
                    const s = (0, n.useCallback)((e) => {
                            e.stopPropagation();
                        }, []),
                        o = (0, Ce.B)(u),
                        l = o[0],
                        c = o[1],
                        m = [le.Id.B0, le.Id.B1].includes(i.size),
                        d = l || t || a;
                    return r().createElement(
                        St,
                        tn(
                            {
                                id: 'mode-selector-random-battle',
                                isSelected: t,
                                onHoverChanged: c,
                                belowStatusComponent: r().createElement(J_, {
                                    contentId: R.views.lobby.mode_selector.popovers.RandomBattlePopover('resId'),
                                    handleSettingsClick: s,
                                    body: R.strings.tooltips.mode_selector.popover.body(),
                                    showBigSettingsButton: m,
                                    isShowButton: d,
                                    isSettingsActive: a,
                                    withBubble: _,
                                }),
                            },
                            i,
                        ),
                    );
                };
                function an() {
                    return (
                        (an = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        an.apply(null, arguments)
                    );
                }
                const _n = [le.Id.B5, le.Id.B6],
                    nn = [le.Id.B4, le.Id.B5, le.Id.B6],
                    rn = [],
                    sn = (e) => {
                        let t = an(
                            {},
                            ((function (e) {
                                if (null == e) throw new TypeError('Cannot destructure ' + e);
                            })(e),
                            e),
                        );
                        return r().createElement(
                            St,
                            an(
                                {
                                    calendarTooltip: me.D3,
                                    forceShowIcon: t.showWidget && _n.includes(t.size),
                                    hideStatus: t.showWidget && nn.includes(t.size),
                                    noWidgetSizes: rn,
                                },
                                t,
                            ),
                        );
                    },
                    on = ['type', 'widget', 'isContentVisible'];
                function ln() {
                    return (
                        (ln = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        ln.apply(null, arguments)
                    );
                }
                const cn = [le.Id.B6],
                    mn = (e) => {
                        let t = e.type,
                            u = e.widget,
                            a = e.isContentVisible,
                            _ = void 0 === a || a,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, on);
                        const i = n.size;
                        switch (t) {
                            case 1:
                                return r().createElement(un, n);
                            case 2: {
                                const e = u && u.isEnabled && r().createElement(ge.n, ln({ size: i }, u));
                                return r().createElement(sn, ln({ widgetComponent: e }, n));
                            }
                            case 3:
                                return r().createElement(St, ln({ calendarTooltip: me.zD }, n));
                            case 4: {
                                const e =
                                    u &&
                                    u.isEnabled &&
                                    r().createElement(be.Gg, ln({ size: i, conditions: n.conditions }, u));
                                return r().createElement(
                                    St,
                                    ln(
                                        {
                                            calendarTooltip: me.TR,
                                            widgetComponent: e,
                                            noWidgetSizes: cn,
                                            divider: '\n',
                                        },
                                        n,
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
                                        t === ce.ACTIVE &&
                                        r().createElement(de.$, { size: i, isCompletedProgression: a === _ });
                                return r().createElement(vu, ln({ widgetComponent: s, widget: u, divider: '\n' }, n));
                            }
                            case 6:
                                return r().createElement(
                                    W_,
                                    ln({ calendarTooltip: me.$b, widget: u, isContentVisible: _, divider: '\n' }, n),
                                );
                            case 7:
                                return r().createElement(Za, ln({ calendarTooltip: me.hg, widget: u }, n));
                            default:
                                return r().createElement(St, n);
                        }
                    },
                    dn = 'Column_base_41';
                function bn() {
                    return (
                        (bn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        bn.apply(null, arguments)
                    );
                }
                const gn = ({ items: e, showWidgets: t, canBeWide: u = !1, isContentVisible: a = !0 }) => {
                        const _ = (0, le.SH)(e.length, u);
                        return r().createElement(
                            'div',
                            { className: dn },
                            e
                                .sort((e, t) => e.priority - t.priority)
                                .map((e) =>
                                    r().createElement(
                                        mn,
                                        bn({ key: `item_${e.index}` }, e, {
                                            size: _,
                                            showWidget: t,
                                            isContentVisible: a,
                                        }),
                                    ),
                                ),
                        );
                    },
                    En = {
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
                    An = () => {
                        const e = ae(),
                            t = e.isMapSelectionVisible,
                            u = e.isMapSelectionEnabled,
                            a = e.onShowMapSelectionClicked,
                            _ = e.onShowWidgetsClicked,
                            i = e.areWidgetsVisible,
                            o = e.isContentVisible,
                            l = ae('model.cardList'),
                            c = (0, n.useState)(!1),
                            m = c[0],
                            d = c[1],
                            b = (0, n.useRef)(!0),
                            g = i === !m,
                            E = (0, oe.Z)(['closeButton', 'title', 'items', 'selectMapTitle'], En),
                            A = {};
                        l.forEach(({ value: e }) => {
                            const t = e.column;
                            t in A || (A[t] = new Array()), A[t].push(e);
                        });
                        const C = Object.keys(A)
                                .sort((e, t) => parseInt(e) - parseInt(t))
                                .map((e) => A[e]),
                            p = (0, n.useCallback)(() => {
                                (0, $.Sy)();
                            }, []),
                            F = (0, n.useCallback)(() => {
                                a();
                            }, [a]),
                            B = (0, n.useCallback)(() => {
                                _();
                            }, [_]),
                            D = (0, n.useCallback)(() => {
                                b.current = !0;
                            }, []),
                            h = (0, n.useCallback)(() => {
                                (b.current = !1), !i && m && d(!1);
                            }, [i, m]);
                        se(),
                            (0, n.useEffect)(() => {
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
                        const f = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                f.current &&
                                    (o
                                        ? (f.current.classList.remove(En.base__hide),
                                          f.current.classList.add(En.base__show))
                                        : (f.current.classList.remove(En.base__show),
                                          f.current.classList.add(En.base__hide)));
                            }, [o]),
                            r().createElement(
                                'div',
                                { className: En.base, ref: f },
                                r().createElement(
                                    'div',
                                    { className: En.placeholder, onMouseOver: D, onMouseLeave: h },
                                    r().createElement(
                                        'div',
                                        { className: E.closeButton },
                                        r().createElement(M, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: p,
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: En.centerBlock },
                                        r().createElement(
                                            'div',
                                            { className: E.title },
                                            R.strings.mode_selector.title(),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: s()(En.selectMap, !t && En.selectMap__empty) },
                                            r().createElement(
                                                'div',
                                                { className: E.selectMapTitle },
                                                R.strings.mode_selector.selectMap(),
                                            ),
                                            r().createElement(
                                                T,
                                                {
                                                    size: k.small,
                                                    type: S.primary,
                                                    mixClass: En.selectMapButton,
                                                    onClick: F,
                                                    disabled: !u,
                                                },
                                                r().createElement(
                                                    'div',
                                                    { className: En.buttonText },
                                                    R.strings.mode_selector.button.select(),
                                                ),
                                            ),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: En.items },
                                            C.map((e, t) =>
                                                r().createElement(gn, {
                                                    key: `column_${t}`,
                                                    items: e,
                                                    showWidgets: g,
                                                    canBeWide: 0 === t && C.length <= 3,
                                                    isContentVisible: o,
                                                }),
                                            ),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: En.toggleButtonContainer },
                                            o &&
                                                r().createElement(
                                                    I.i,
                                                    { body: R.strings.tooltips.mode_selector.progressionBtn.body() },
                                                    r().createElement(
                                                        'div',
                                                        { id: 'mode-selector-widgets-btn' },
                                                        r().createElement(
                                                            K_,
                                                            {
                                                                size: k.small,
                                                                type: S.secondary,
                                                                onClick: B,
                                                                active: g,
                                                                mixClass: En.toggleButton,
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
                        v().render(
                            r().createElement(h, null, r().createElement(An, null)),
                            document.getElementById('root'),
                        );
                    });
            },
            8668: (e, t, u) => {
                'use strict';
                u.d(t, { Hi: () => n, Jh: () => _, S4: () => i, u_: () => r });
                var a = u(3486);
                let _;
                !(function (e) {
                    (e.Huge = 'huge'), (e.Big = 'big'), (e.Medium = 'medium'), (e.Small = 'small');
                })(_ || (_ = {}));
                const n = [a.Id.B4, a.Id.B5, a.Id.B6],
                    r = [a.Id.B0, a.Id.B1, a.Id.B2],
                    i = {
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
                    n = u.n(_),
                    r = u(8487);
                const i = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    s = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    o = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    l = ({ text: e, binding: t, classMix: u }) => {
                        const l = (0, _.useCallback)((e) => ({ color: `#${e}` }), []),
                            c = t || {};
                        let m = i.exec(e),
                            d = e;
                        for (; m; ) {
                            const u = m[0],
                                _ = s.exec(u),
                                b = o.exec(u),
                                g = m[1];
                            if (_ && b) {
                                const e = _[0],
                                    i = e + b[0].length + e;
                                (d = d.replace(u, `%(${i})`)),
                                    (c[i] = r.Z[e]
                                        ? n().createElement(
                                              'span',
                                              { className: r.Z[e] },
                                              n().createElement(a.z, { text: g, binding: t }),
                                          )
                                        : n().createElement(
                                              'span',
                                              { style: l(e) },
                                              n().createElement(a.z, { text: g, binding: t }),
                                          ));
                            }
                            m = i.exec(e);
                        }
                        return n().createElement(a.z, { text: d, classMix: u, binding: c });
                    };
            },
            9930: (e, t, u) => {
                'use strict';
                u.d(t, { B: () => r, O: () => i });
                var a = u(7739),
                    _ = u(6179),
                    n = u(3486);
                const r = (e) => {
                        const t = (0, _.useState)(!1),
                            u = t[0],
                            a = t[1],
                            n = (0, _.useCallback)(
                                (t) => {
                                    a(t), e && e(t);
                                },
                                [e],
                            );
                        return [u, n];
                    },
                    i = () => {
                        const e = (0, _.useContext)(a.YN),
                            t = e.extraSmall,
                            u = e.small,
                            r = e.medium;
                        return (0, _.useMemo)(() => {
                            switch (!0) {
                                case u:
                                case t:
                                    return n.Cg.Small;
                                case r:
                                    return n.Cg.Medium;
                                default:
                                    return n.Cg.Big;
                            }
                        }, [t, r, u]);
                    };
            },
            3486: (e, t, u) => {
                'use strict';
                u.d(t, { Cg: () => n, Hp: () => s, Id: () => _, SH: () => r, d6: () => a });
                const a = (e) => (e ? R.images.gui.maps.icons.mode_selector.mode.$dyn(e) : null);
                let _, n;
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
                    })(n || (n = {}));
                const r = (e, t = !1) => (t && 1 === e ? _.B0 : `b${Math.min(Math.max(Math.floor(e), 0), 6)}`),
                    i = {},
                    s = (...e) => {
                        let t = [];
                        for (var u = 0, a = e; u < a.length; u++) {
                            const e = a[u];
                            if (e in i) t = t.concat(i[e]);
                            else {
                                const u = [e];
                                for (let t = 0; t <= 6; t++) u.push(`${e}__${r(t)}`);
                                (i[e] = u), (t = t.concat(i[e]));
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
                    n = u(9924),
                    r = u(6179),
                    i = u.n(r),
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
                            a = (0, n.Z)([...(0, l.Hp)('icon')], c),
                            r = s.S4[e][u],
                            b = d.$dyn(`c_${m[r]}`).$dyn(t ? 'bg1' : 'bg2'),
                            g = _()(c.icon, c[`icon__${r}`], a[`icon__${e}`]);
                        return i().createElement(
                            'div',
                            { className: c.base },
                            i().createElement('div', { className: g, style: { backgroundImage: `url(${b})` } }),
                        );
                    };
            },
            7663: (e, t, u) => {
                'use strict';
                u.d(t, { Gg: () => B });
                var a = u(6483),
                    _ = u.n(a),
                    n = u(7078),
                    r = u(2646),
                    i = u(9924),
                    s = u(3649),
                    o = u(6179),
                    l = u.n(o),
                    c = u(4090),
                    m = u(8188),
                    d = u(8668),
                    b = u(9930),
                    g = u(3486);
                const E = {
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
                    p = {
                        [A.Icon1]: [0],
                        [A.Icon2]: [1, 2, 3, 4],
                        [A.Icon3]: [5, 6, 7, 8, 9],
                        [A.Icon4]: [10, 11, 12, 13, 14],
                        [A.Icon5]: [15, 16, 17, 18, 19],
                        [A.Icon6]: [20],
                    },
                    F = [g.Id.B0, g.Id.B1, g.Id.B2],
                    B = ({ size: e, level: t, conditions: u, restRewards: a }) => {
                        const B = (0, b.O)(),
                            D = (0, i.Z)([...(0, g.Hp)('icon', 'level', 'subtitle')], E),
                            h = (0, o.useMemo)(() => d.S4[e][B], [e, B]),
                            f = (0, o.useMemo)(
                                () => ((e) => Object.keys(p).find((t) => p[t].includes(e)) || A.Icon1)(t),
                                [t],
                            ),
                            v = (0, o.useMemo)(() => ({ tooltipId: r.I3 }), []),
                            x = (0, o.useMemo)(() => {
                                const e = R.images.gui.maps.icons.epicBattles.metaLvls;
                                if (null !== e) {
                                    const t = e.$dyn(`c_${C[h]}`);
                                    if (void 0 !== t && void 0 !== f) return { backgroundImage: `url(${t.$dyn(f)})` };
                                }
                            }, [f, h]),
                            w = _()(E.icon, E[`icon__${f}`], E[`icon__${h}`], D[`icon__${e}`]);
                        return l().createElement(
                            'div',
                            { className: E.base },
                            l().createElement(
                                n.t,
                                { args: v },
                                l().createElement(
                                    'div',
                                    { className: w, style: x },
                                    a > 0 &&
                                        l().createElement(
                                            'div',
                                            { className: _()(E.counter, E[`counter__${h}`]) },
                                            l().createElement(c.A, { size: 'normal', value: a }),
                                        ),
                                    t > 0 && l().createElement('div', { className: _()(E.level, D[`level__${e}`]) }, t),
                                ),
                            ),
                            u &&
                                !F.includes(e) &&
                                l().createElement(m.B, {
                                    classMix: _()(D.subtitle, D[`subtitle__${e}`]),
                                    text: (0, s.z4)(u),
                                }),
                        );
                    };
            },
            5611: (e, t, u) => {
                'use strict';
                u.d(t, { n: () => U });
                var a = u(6483),
                    _ = u.n(a),
                    n = u(7739),
                    r = u(9924),
                    i = u(6179),
                    s = u.n(i),
                    o = u(8188),
                    l = u(3486),
                    c = u(7078),
                    m = u(2646),
                    d = u(9916);
                const b = 'BonusBattles_base_1b',
                    g = 'BonusBattles_light_51',
                    E = 'BonusBattles_divider_52',
                    A = 'BonusBattles_divider__right_08',
                    C = 'BonusBattles_icon_2c',
                    p = 'BonusBattles_amount_a2',
                    F = { tooltipId: m.T3 },
                    B = (0, i.memo)((e) => {
                        const t = e.amount,
                            u = d.Z5.getNumberFormat(t, d.B3.INTEGRAL),
                            a = _()(E, A);
                        return s().createElement(
                            c.t,
                            { args: F },
                            s().createElement(
                                'div',
                                { className: b },
                                s().createElement('div', { className: g }),
                                s().createElement('div', { className: E }),
                                s().createElement('div', { className: C }),
                                s().createElement('div', { className: p }, u),
                                s().createElement('div', { className: a }),
                            ),
                        );
                    });
                var D = u(6373),
                    h = u(3649);
                let f, v;
                !(function (e) {
                    (e.ExtraLarge = 'extraLarge'),
                        (e.Large = 'large'),
                        (e.Medium = 'medium'),
                        (e.SMedium = 'smedium'),
                        (e.Small = 'small'),
                        (e.ExtraSmall = 'extraSmall'),
                        (e.Tiny = 'tiny');
                })(f || (f = {})),
                    (function (e) {
                        (e.Large = 'large'), (e.Medium = 'medium'), (e.Small = 'small');
                    })(v || (v = {}));
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
                    w = { [v.Large]: '80x110', [v.Medium]: '58x80', [v.Small]: '42x56' },
                    N = (0, i.memo)((e) => {
                        const t = e.isInactive,
                            u = void 0 !== t && t,
                            a = e.isQualification,
                            n = e.divisionID,
                            r = e.rankName,
                            o = e.rankID,
                            l = e.isUnburnable,
                            d = e.shieldHP,
                            b = e.size,
                            g = void 0 === b ? v.Medium : b,
                            E = !a && o > 0,
                            A = (0, i.useMemo)(() => {
                                const e = R.images.gui.maps.icons.rankedBattles,
                                    t = w[g];
                                let u;
                                return (
                                    (u = a
                                        ? e.divisions.$dyn(`c_${t}`).$num(n)
                                        : e.ranks.$dyn(`c_${t}`).$dyn(`rank${n}_${r}`)),
                                    { backgroundImage: `url(${u})` }
                                );
                            }, [n, r, a, g]),
                            C = (e) => [x[e], x[`${e}__${g}`]],
                            p = _()(x.icon, u && x.icon__next, ...C('icon')),
                            F = _()(...C('frame'), ...C('unburnable')),
                            B = _()(...C('frame'), ...C('shield')),
                            D = _()(...C('hp'));
                        return s().createElement(
                            c.t,
                            { isEnabled: E, args: { rankID: o, tooltipId: m.MS } },
                            s().createElement(
                                'div',
                                { className: x.base },
                                s().createElement('div', { className: p, style: A }),
                                l && s().createElement('div', { className: F }),
                                d > 0 &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: B }),
                                        s().createElement(
                                            'div',
                                            { className: D },
                                            s().createElement('div', { className: x.hpValue }, d),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    S = {
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
                        (k = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        k.apply(null, arguments)
                    );
                }
                const y = { tooltipId: m.u6 },
                    T = (e) => {
                        const t = e.rankLeft,
                            u = void 0 === t ? void 0 : t,
                            a = e.rankRight,
                            n = e.steps,
                            r = e.stepsTotal,
                            o = e.qualBattles,
                            l = e.qualTotalBattles,
                            m = e.size,
                            d = r > 0 && !a.isQualification,
                            b = void 0 !== u || d,
                            g = ![f.ExtraLarge, f.Medium].includes(m),
                            E = (0, i.useMemo)(
                                () =>
                                    [f.Medium, f.SMedium].includes(m)
                                        ? v.Medium
                                        : [f.Small, f.ExtraSmall].includes(m)
                                          ? v.Small
                                          : v.Large,
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
                                S.steps,
                                g && S.steps__small,
                                m === f.Medium && S.steps__wide,
                                void 0 === u && S.steps__side,
                            );
                        return s().createElement(
                            'div',
                            { className: _()(S.base, S[`base__${m}`]) },
                            u && s().createElement(N, k({}, u, { size: E })),
                            d &&
                                s().createElement(
                                    c.t,
                                    { args: y },
                                    s().createElement(
                                        'div',
                                        { className: C },
                                        [...Array(r)].map((e, t) => {
                                            return s().createElement('div', {
                                                key: `step_${t}`,
                                                className:
                                                    ((u = t < n),
                                                    _()(S.step, g && S.step__small, !u && S.step__notReceived)),
                                            });
                                            var u;
                                        }),
                                    ),
                                ),
                            s().createElement(
                                D.i,
                                A,
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement(N, k({}, a, { size: E, isInactive: b })),
                                ),
                            ),
                        );
                    },
                    L = {
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
                let W, P;
                !(function (e) {
                    (e.Efficiency = 'efficiency'), (e.Position = 'position');
                })(W || (W = {})),
                    (function (e) {
                        (e.Large = 'large'), (e.Medium = 'medium'), (e.Small = 'small');
                    })(P || (P = {}));
                const M = { [W.Efficiency]: m.wm, [W.Position]: m.q_ },
                    I = (0, i.memo)(
                        ({
                            type: e,
                            value: t,
                            valueDiff: u = 0,
                            isUnavailable: a = !1,
                            isPercent: n = !1,
                            size: r = P.Large,
                        }) => {
                            const i = (e) =>
                                    a
                                        ? '- -'
                                        : n
                                          ? d.Z5.getRealFormat(100 * e, d.Gr.WO_ZERO_DIGITS) + '%'
                                          : d.Z5.getRealFormat(e, d.Gr.WO_ZERO_DIGITS),
                                o = i(t),
                                l = i(u);
                            return s().createElement(
                                c.t,
                                { args: { tooltipId: M[e] } },
                                s().createElement(
                                    'div',
                                    { className: _()(L.base, L[`base__${r}`]) },
                                    s().createElement('div', {
                                        className: _()(L.icon, L[`icon__${e}`], L[`icon__${e}__${r}`]),
                                    }),
                                    s().createElement('div', { className: _()(L.value, L[`value__${r}`]) }, o),
                                    0 !== u &&
                                        !a &&
                                        s().createElement(
                                            'div',
                                            { className: _()(L.delta, L[`delta__${r}`], u < 0 && L.delta__minus) },
                                            s().createElement('div', {
                                                className: _()(L.arrow, u < 0 && L.arrow__minus),
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
                    $ = { [v.Large]: '130x130', [v.Medium]: '100x100', [v.Small]: '64x64' },
                    H = { tooltipId: m._Y },
                    z = (0, i.memo)((e) => {
                        const t = e.leagueID,
                            u = e.efficiency,
                            a = e.efficiencyDiff,
                            n = e.position,
                            r = e.isEfficiencyUnavailable,
                            o = void 0 !== r && r,
                            l = e.isPositionUnavailable,
                            m = void 0 !== l && l,
                            d = e.size,
                            b = (0, i.useMemo)(
                                () =>
                                    [f.Medium, f.SMedium].includes(d)
                                        ? v.Medium
                                        : [f.Small, f.ExtraSmall, f.Tiny].includes(d)
                                          ? v.Small
                                          : v.Large,
                                [d],
                            ),
                            g = (0, i.useMemo)(
                                () =>
                                    [f.Medium, f.ExtraLarge].includes(d) ? P.Large : d === f.Tiny ? P.Small : P.Medium,
                                [d],
                            ),
                            E = (0, i.useMemo)(() => {
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
                                type: W.Efficiency,
                                value: u,
                                valueDiff: a,
                                isUnavailable: o,
                                isPercent: !0,
                                size: g,
                            }),
                            s().createElement(
                                c.t,
                                { args: H },
                                s().createElement('div', { className: O.icon, style: E }),
                            ),
                            s().createElement(I, {
                                type: W.Position,
                                value: n,
                                isUnavailable: m,
                                isPercent: !1,
                                size: g,
                            }),
                        );
                    }),
                    j = {
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
                    U = ({
                        size: e,
                        rankLeft: t,
                        rankRight: u,
                        hasLeftRank: a,
                        steps: c,
                        stepsTotal: m,
                        leagueID: d,
                        efficiency: b,
                        efficiencyDiff: g,
                        position: E,
                        isEfficiencyUnavailable: A,
                        isPositionUnavailable: C,
                        qualBattles: p,
                        qualTotalBattles: F,
                        bonusBattles: D,
                    }) => {
                        const h = (0, i.useContext)(n.YN),
                            v = h.extraSmall,
                            x = h.small,
                            w = h.medium,
                            N = ![l.Id.B5, l.Id.B6].includes(e),
                            S = d > -1,
                            k = F > 0 && u.isQualification && N,
                            y = D > 0,
                            L = (0, r.Z)((0, l.Hp)('qualBattles', 'ranks', 'ranks__qual', 'bonus'), j),
                            W = (0, i.useMemo)(
                                () =>
                                    x || v
                                        ? S && e === l.Id.B4
                                            ? f.Tiny
                                            : f.ExtraSmall
                                        : w
                                          ? e === l.Id.B1
                                              ? f.Large
                                              : e === l.Id.B2
                                                ? f.SMedium
                                                : f.Small
                                          : e === l.Id.B4
                                            ? f.Small
                                            : e === l.Id.B3
                                              ? f.Medium
                                              : f.ExtraLarge,
                                [S, e, v, x, w],
                            ),
                            P = _()(j.ranks, L[`ranks__${e}`], k && L[`ranks__qual__${e}`]);
                        return s().createElement(
                            'div',
                            { className: j.base },
                            N &&
                                s().createElement(
                                    'div',
                                    { className: P },
                                    S
                                        ? s().createElement(z, {
                                              leagueID: d,
                                              efficiency: b,
                                              efficiencyDiff: g,
                                              position: E,
                                              isEfficiencyUnavailable: A,
                                              isPositionUnavailable: C,
                                              size: W,
                                          })
                                        : s().createElement(T, {
                                              rankLeft: a ? t : void 0,
                                              rankRight: u,
                                              steps: c,
                                              stepsTotal: m,
                                              qualBattles: p,
                                              qualTotalBattles: F,
                                              size: W,
                                          }),
                                ),
                            k &&
                                s().createElement(
                                    'div',
                                    { className: _()(j.qualBattles, L[`qualBattles__${e}`]) },
                                    s().createElement(o.B, {
                                        text: R.strings.mode_selector.ranked.widget.qualBattles(),
                                        binding: { current: p, max: F },
                                    }),
                                ),
                            y &&
                                s().createElement(
                                    'div',
                                    { className: _()(j.bonus, L[`bonus__${e}`]) },
                                    s().createElement(B, { amount: D }),
                                ),
                        );
                    };
            },
            2646: (e, t, u) => {
                'use strict';
                u.d(t, {
                    $b: () => g,
                    D3: () => _,
                    GN: () => c,
                    I3: () => b,
                    MS: () => r,
                    T3: () => i,
                    TR: () => d,
                    _Y: () => s,
                    hg: () => E,
                    p5: () => a,
                    q_: () => l,
                    u6: () => n,
                    wm: () => o,
                    zD: () => m,
                });
                const a = 'disabledTooltip',
                    _ = 'rankedCalendarDayInfoExtended',
                    n = 'rankedStep',
                    r = 'rankedBattlesRank',
                    i = 'rankedBattlesBonus',
                    s = 'rankedBattlesLeague',
                    o = 'rankedBattlesEfficiency',
                    l = 'rankedBattlesPosition',
                    c = 'calendarTooltip',
                    m = 'mapboxCalendar',
                    d = 'epicBattleCalendarTooltip',
                    b = 'epicBattleWidgetInfo',
                    g = 'funRandomModeSelectorCalendarDay',
                    E = 'comp7CalendarDayExtendedInfo';
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
                    for (var [t, u, a] = deferred[s], n = !0, r = 0; r < t.length; r++)
                        (!1 & a || _ >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[r]))
                            ? t.splice(r--, 1)
                            : ((n = !1), a < _ && (_ = a));
                    if (n) {
                        deferred.splice(s--, 1);
                        var i = u();
                        void 0 !== i && (e = i);
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
            var e = { 261: 0, 588: 0, 13: 0, 153: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var a,
                        _,
                        [n, r, i] = u,
                        s = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (a in r) __webpack_require__.o(r, a) && (__webpack_require__.m[a] = r[a]);
                        if (i) var o = i(__webpack_require__);
                    }
                    for (t && t(u); s < n.length; s++)
                        (_ = n[s]), __webpack_require__.o(e, _) && e[_] && e[_][0](), (e[_] = 0);
                    return __webpack_require__.O(o);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [705], () => __webpack_require__(7388));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
