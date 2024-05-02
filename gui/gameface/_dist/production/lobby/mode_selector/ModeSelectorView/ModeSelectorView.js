(() => {
    var __webpack_modules__ = {
            4090: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => l });
                var u = a(6483),
                    _ = a.n(u),
                    r = a(6179),
                    n = a.n(r);
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
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.size,
                        a = e.value,
                        u = e.isEmpty,
                        r = e.fadeInAnimation,
                        l = e.hide,
                        c = e.maximumNumber,
                        m = e.className,
                        d = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                _ = {},
                                r = Object.keys(e);
                            for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                            return _;
                        })(e, s);
                    const b = u ? null : a,
                        g = 'string' == typeof b;
                    if ((b && !g && b < 0) || 0 === b) return null;
                    const E = b && !g && b > c,
                        C = _()(
                            i.base,
                            i[`base__${t}`],
                            r && i.base__animated,
                            l && i.base__hidden,
                            !b && i.base__pattern,
                            u && i.base__empty,
                            m,
                        );
                    return n().createElement(
                        'div',
                        o({ className: C }, d),
                        n().createElement('div', { className: i.bg }),
                        n().createElement('div', { className: i.pattern }),
                        n().createElement(
                            'div',
                            { className: _()(i.value, g && i.value__text) },
                            E ? c : b,
                            E && n().createElement('span', { className: i.plus }, '+'),
                        ),
                    );
                };
                l.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            280: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => o });
                var u = a(6483),
                    _ = a.n(u),
                    r = a(3649),
                    n = a(6179),
                    i = a.n(n),
                    s = a(5287);
                const o = ({
                    binding: e,
                    text: t = '',
                    classMix: a,
                    alignment: u = r.v2.left,
                    formatWithBrackets: o,
                }) => {
                    if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                    const l = o && e ? (0, r.WU)(t, e) : t;
                    return i().createElement(
                        n.Fragment,
                        null,
                        l.split('\n').map((t, o) =>
                            i().createElement(
                                'div',
                                { className: _()(s.Z.base, a), key: `${t}-${o}` },
                                (0, r.Uw)(t, u, e).map((e, t) =>
                                    i().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            3495: (e, t, a) => {
                'use strict';
                a.d(t, { Y: () => c });
                var u = a(3138),
                    _ = a(6179),
                    r = a(1043),
                    n = a(5262);
                const i = u.O.client.getSize('rem'),
                    s = i.width,
                    o = i.height,
                    l = Object.assign({ width: s, height: o }, (0, n.T)(s, o, r.j)),
                    c = (0, _.createContext)(l);
            },
            1039: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => l });
                var u = a(3138),
                    _ = a(6536),
                    r = a(6179),
                    n = a.n(r),
                    i = a(3495),
                    s = a(1043),
                    o = a(5262);
                const l = ({ children: e }) => {
                    const t = (0, r.useContext)(i.Y),
                        a = (0, r.useState)(t),
                        l = a[0],
                        c = a[1],
                        m = (0, r.useCallback)((e, t) => {
                            const a = u.O.view.pxToRem(e),
                                _ = u.O.view.pxToRem(t);
                            c(Object.assign({ width: a, height: _ }, (0, o.T)(a, _, s.j)));
                        }, []),
                        d = (0, r.useCallback)(() => {
                            const e = u.O.client.getSize('px');
                            m(e.width, e.height);
                        }, [m]);
                    (0, _.Z)(() => {
                        u.O.client.events.on('clientResized', m), u.O.client.events.on('self.onScaleUpdated', d);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                u.O.client.events.off('clientResized', m),
                                    u.O.client.events.off('self.onScaleUpdated', d);
                            },
                            [m, d],
                        );
                    const b = (0, r.useMemo)(() => Object.assign({}, l), [l]);
                    return n().createElement(i.Y.Provider, { value: b }, e);
                };
            },
            6010: (e, t, a) => {
                'use strict';
                var u = a(6179),
                    _ = a(7382),
                    r = a(3495);
                const n = ['children'];
                const i = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                _ = {},
                                r = Object.keys(e);
                            for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                            return _;
                        })(e, n);
                    const i = (0, u.useContext)(r.Y),
                        s = i.extraLarge,
                        o = i.large,
                        l = i.medium,
                        c = i.small,
                        m = i.extraSmall,
                        d = i.extraLargeWidth,
                        b = i.largeWidth,
                        g = i.mediumWidth,
                        E = i.smallWidth,
                        C = i.extraSmallWidth,
                        A = i.extraLargeHeight,
                        F = i.largeHeight,
                        p = i.mediumHeight,
                        B = i.smallHeight,
                        D = i.extraSmallHeight,
                        v = { extraLarge: A, large: F, medium: p, small: B, extraSmall: D };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && s) return t;
                        if (a.large && o) return t;
                        if (a.medium && l) return t;
                        if (a.small && c) return t;
                        if (a.extraSmall && m) return t;
                    } else {
                        if (a.extraLargeWidth && d) return (0, _.H)(t, a, v);
                        if (a.largeWidth && b) return (0, _.H)(t, a, v);
                        if (a.mediumWidth && g) return (0, _.H)(t, a, v);
                        if (a.smallWidth && E) return (0, _.H)(t, a, v);
                        if (a.extraSmallWidth && C) return (0, _.H)(t, a, v);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && A) return t;
                            if (a.largeHeight && F) return t;
                            if (a.mediumHeight && p) return t;
                            if (a.smallHeight && B) return t;
                            if (a.extraSmallHeight && D) return t;
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
                (0, u.memo)(i);
            },
            7382: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => u });
                const u = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, a) => {
                'use strict';
                a.d(t, { YN: () => _.Y, ZN: () => u.Z });
                a(6010);
                var u = a(1039),
                    _ = a(3495);
            },
            1043: (e, t, a) => {
                'use strict';
                a.d(t, { j: () => u });
                const u = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, a) => {
                'use strict';
                var u;
                function _(e, t, a) {
                    const u = (function (e, t) {
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
                        })(e, a),
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
                        })(t, a),
                        r = Math.min(u, _);
                    return {
                        extraLarge: r === a.extraLarge.weight,
                        large: r === a.large.weight,
                        medium: r === a.medium.weight,
                        small: r === a.small.weight,
                        extraSmall: r === a.extraSmall.weight,
                        extraLargeWidth: u === a.extraLarge.weight,
                        largeWidth: u === a.large.weight,
                        mediumWidth: u === a.medium.weight,
                        smallWidth: u === a.small.weight,
                        extraSmallWidth: u === a.extraSmall.weight,
                        extraLargeHeight: _ === a.extraLarge.weight,
                        largeHeight: _ === a.large.weight,
                        mediumHeight: _ === a.medium.weight,
                        smallHeight: _ === a.small.weight,
                        extraSmallHeight: _ === a.extraSmall.weight,
                    };
                }
                a.d(t, { T: () => _, u: () => u }),
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
                    })(u || (u = {}));
            },
            7078: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => s });
                var u = a(6179),
                    _ = a.n(u),
                    r = a(2056);
                const n = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const s = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                _ = {},
                                r = Object.keys(e);
                            for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                            return _;
                        })(e, n);
                    return _().createElement(
                        r.u,
                        i(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            a,
                        ),
                        t,
                    );
                };
            },
            6373: (e, t, a) => {
                'use strict';
                a.d(t, { i: () => o });
                var u = a(2056),
                    _ = a(6179),
                    r = a.n(_);
                const n = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    o = (e) => {
                        let t = e.children,
                            a = e.body,
                            o = e.header,
                            l = e.note,
                            c = e.alert,
                            m = e.args,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    _ = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                                return _;
                            })(e, n);
                        const b = (0, _.useMemo)(() => {
                            const e = Object.assign({}, m, { body: a, header: o, note: l, alert: c });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [c, a, o, l, m]);
                        return r().createElement(
                            u.u,
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
            2056: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => o });
                var u = a(7902),
                    _ = a(9916),
                    r = a(6179);
                const n = [
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
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const s = (e, t, a = {}, u = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: _.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: u,
                                },
                                a,
                            ),
                        );
                    },
                    o = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            _ = e.args,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onClick,
                            d = e.ignoreShowDelay,
                            b = void 0 !== d && d,
                            g = e.ignoreMouseClick,
                            E = void 0 !== g && g,
                            C = e.decoratorId,
                            A = void 0 === C ? 0 : C,
                            F = e.isEnabled,
                            p = void 0 === F || F,
                            B = e.targetId,
                            D = void 0 === B ? 0 : B,
                            v = e.onShow,
                            h = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    _ = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                                return _;
                            })(e, n);
                        const x = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, r.useMemo)(() => D || (0, u.F)().resId, [D]),
                            S = (0, r.useCallback)(() => {
                                (x.current.isVisible && x.current.timeoutId) ||
                                    (s(a, A, { isMouseEvent: !0, on: !0, arguments: i(_) }, w),
                                    v && v(),
                                    (x.current.isVisible = !0));
                            }, [a, A, _, w, v]),
                            k = (0, r.useCallback)(() => {
                                if (x.current.isVisible || x.current.timeoutId) {
                                    const e = x.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (x.current.timeoutId = 0)),
                                        s(a, A, { on: !1 }, w),
                                        x.current.isVisible && h && h(),
                                        (x.current.isVisible = !1);
                                }
                            }, [a, A, w, h]),
                            N = (0, r.useCallback)((e) => {
                                x.current.isVisible &&
                                    ((x.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (x.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(x.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = x.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', N, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', N, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === p && k();
                            }, [p, k]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return p
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
                                              k(), null == l || l(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === E && k(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === E && k(), null == c || c(t), null == e || e(t);
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
            527: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, { mouse: () => l, off: () => s, on: () => i, onResize: () => r, onScaleUpdated: () => n });
                var u = a(2472),
                    _ = a(1176);
                const r = (0, u.E)('clientResized'),
                    n = (0, u.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
                    o = { down: (0, u.E)('mousedown'), up: (0, u.E)('mouseup'), move: (0, u.E)('mousemove') };
                const l = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, _.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, _.R)(!0);
                    }
                    function u() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, _.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let _ = !0;
                                    const r = `mouse${t}`,
                                        n = o[t]((e) => a([e, 'outside']));
                                    function i(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        u(),
                                        () => {
                                            _ &&
                                                (n(),
                                                window.removeEventListener(r, i),
                                                (e.listeners -= 1),
                                                u(),
                                                (_ = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), u();
                        },
                        enable() {
                            (e.enabled = !0), u();
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
            5959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => u,
                        getMouseGlobalPosition: () => r,
                        getSize: () => _,
                        graphicsQuality: () => n,
                    });
                var u = a(527);
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const n = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, a) => {
                'use strict';
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => u });
            },
            2472: (e, t, a) => {
                'use strict';
                function u(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => u });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => _ });
                var u = a(5959);
                const _ = { view: a(7641), client: u };
            },
            3722: (e, t, a) => {
                'use strict';
                function u(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function _(e, t, a) {
                    return `url(${u(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => _, getTextureUrl: () => u });
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => u });
                const u = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => _ });
                var u = a(2472);
                const _ = {
                    onTextureFrozen: (0, u.E)('self.onTextureFrozen'),
                    onTextureReady: (0, u.E)('self.onTextureReady'),
                    onDomBuilt: (0, u.E)('self.onDomBuilt'),
                    onLoaded: (0, u.E)('self.onLoaded'),
                    onDisplayChanged: (0, u.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, u.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, u.E)('children.onAdded'),
                        onLoaded: (0, u.E)('children.onLoaded'),
                        onRemoved: (0, u.E)('children.onRemoved'),
                        onAttached: (0, u.E)('children.onAttached'),
                        onTextureReady: (0, u.E)('children.onTextureReady'),
                        onRequestPosition: (0, u.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => l,
                        addPreloadTexture: () => i,
                        children: () => u,
                        displayStatus: () => _.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => o,
                        getDisplayStatus: () => h,
                        getScale: () => E,
                        getSize: () => m,
                        getViewGlobalPosition: () => b,
                        isEventHandled: () => D,
                        isFocused: () => p,
                        pxToRem: () => C,
                        remToPx: () => A,
                        resize: () => d,
                        sendEvent: () => n.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => w,
                    });
                var u = a(3722),
                    _ = a(6112),
                    r = a(6538),
                    n = a(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function o(e, t, a, u = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, u);
                }
                function l(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function b(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: A(t.x), y: A(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function A(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function h() {
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
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => o });
                const u = ['args'];
                const _ = 2,
                    r = 16,
                    n = 32,
                    i = 64,
                    s = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        _ = {},
                                        r = Object.keys(e);
                                    for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                                    return _;
                                })(t, u);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, n, {
                                          arguments:
                                              ((_ = r),
                                              Object.entries(_).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var _;
                    },
                    o = {
                        close(e) {
                            s('popover' === e ? _ : n);
                        },
                        minimize() {
                            s(i);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            7902: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => u });
                const u = (e = 1) => {
                    const t = new Error().stack;
                    let a,
                        u = R.invalid('resId');
                    return (
                        t &&
                            ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== a &&
                                window.subViews[a] &&
                                (u = window.subViews[a].id)),
                        { caller: a, stack: t, resId: u }
                    );
                };
            },
            6536: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => _ });
                var u = a(6179);
                const _ = (e) => {
                    const t = (0, u.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            9924: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => o });
                var u = a(6483),
                    _ = a.n(u),
                    r = a(7739),
                    n = a(5262),
                    i = a(6179),
                    s = a(3649);
                function o(e, t, a) {
                    const u = (0, i.useContext)(r.YN);
                    let o = Object.entries(u).filter(([e, t]) => !0 === t && e in n.u);
                    return (
                        a && (o = o.filter((e) => a.includes(e[0]))),
                        e.reduce((e, a) => {
                            const u = o.map((e) =>
                                _()(t[((e, t) => e + '__' + t)(a, e[0])], t[((e, t) => e + (0, s.e)(t))(a, e[0])]),
                            );
                            return (e[a] = _()(t[a], ...u)), e;
                        }, {})
                    );
                }
            },
            5521: (e, t, a) => {
                'use strict';
                let u, _;
                a.d(t, { n: () => u }),
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
                    })(u || (u = {})),
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
            3649: (e, t, a) => {
                'use strict';
                a.d(t, { Uw: () => g, WU: () => r, e: () => i, uF: () => n, v2: () => _, z4: () => s });
                var u = a(1281);
                let _;
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function n(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function i(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(_ || (_ = {}));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    l = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    c = (e, t, a = _.left) => e.split(t).reduce(a === _.left ? o : l, []),
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
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (d.includes(a)) return m(e);
                        if ('ja' === a) {
                            return (0, u.D4)()
                                .parse(e)
                                .map((e) => s(e));
                        }
                        return ((e, t = _.left) => {
                            let a = [];
                            const u =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = s(e);
                            return c(r, /( )/, t).forEach((e) => (a = a.concat(c(e, u, _.left)))), a;
                        })(e, t);
                    },
                    g = (e, t, a) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : b(e, t)));
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                var u = a(3138);
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
                    addCallback(e, t, a = 0, _ = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = u.O.view.addModelObserver(e, a, _);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(r) : (this._views[a] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const u = this._callbacks[a];
                            void 0 !== u && u(e, t);
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
            9916: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Sw: () => r.Z,
                    B3: () => s,
                    Gr: () => o,
                    Z5: () => n.Z5,
                    B0: () => i,
                    wU: () => v,
                    ry: () => C,
                    Eu: () => A,
                    Sy: () => p,
                    SW: () => B,
                    P3: () => D,
                });
                class u {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let u = e.target;
                                    do {
                                        if (u === t) return;
                                        u = u.parentNode;
                                    } while (u);
                                    a();
                                });
                            });
                    }
                    static get instance() {
                        return u.__instance || (u.__instance = new u()), u.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const a = e,
                            u = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== u)),
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
                u.__instance = void 0;
                const _ = u;
                var r = a(1358);
                var n = a(8613);
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
                var m = a(5521),
                    d = a(3138);
                const b = ['args'];
                function g(e, t, a, u, _, r, n) {
                    try {
                        var i = e[r](n),
                            s = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(s) : Promise.resolve(s).then(u, _);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                        a = arguments;
                                    return new Promise(function (u, _) {
                                        var r = e.apply(t, a);
                                        function n(e) {
                                            g(r, u, _, n, i, 'next', e);
                                        }
                                        function i(e) {
                                            g(r, u, _, n, i, 'throw', e);
                                        }
                                        n(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    A = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    F = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const _ = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        _ = {},
                                        r = Object.keys(e);
                                    for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                                    return _;
                                })(t, b);
                            void 0 !== _
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, r, {
                                          arguments:
                                              ((u = _),
                                              Object.entries(u).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var u;
                    },
                    p = () => F(i.CLOSE),
                    B = () => F(i.POP_OVER, { on: !1 }),
                    D = (e, t, a, u, _ = R.invalid('resId'), r) => {
                        const n = d.O.view.getViewGlobalPosition(),
                            s = a.getBoundingClientRect(),
                            o = s.x,
                            l = s.y,
                            c = s.width,
                            m = s.height,
                            b = {
                                x: d.O.view.pxToRem(o) + n.x,
                                y: d.O.view.pxToRem(l) + n.y,
                                width: d.O.view.pxToRem(c),
                                height: d.O.view.pxToRem(m),
                            };
                        F(i.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: u || R.invalid('resId'),
                            targetID: _,
                            direction: t,
                            bbox: E(b),
                            on: !0,
                            args: r,
                        });
                    },
                    v = () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                    h = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var f = a(7572);
                const x = _.instance,
                    w = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: o,
                        TimeFormatType: l,
                        DateFormatType: c,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => F(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: B,
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            F(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: D,
                        addEscapeListener: (e) => {
                            const t = (t) => h(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, p);
                        },
                        handleViewEvent: F,
                        onBindingsReady: C,
                        onLayoutReady: A,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: v,
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const u in t)
                                if (Object.prototype.hasOwnProperty.call(t, u)) {
                                    const _ = Object.prototype.toString.call(t[u]);
                                    if (_.startsWith('[object CoherentArrayProxy]')) {
                                        const _ = t[u];
                                        a[u] = [];
                                        for (let t = 0; t < _.length; t++) a[u].push({ value: e(_[t].value) });
                                    } else
                                        _.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[u] = e(t[u]))
                                            : (a[u] = t[u]);
                                }
                            return a;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: n.Z5,
                        UserLocale: n.cy,
                    };
                window.ViewEnvHelper = w;
            },
            8613: (e, t, a) => {
                'use strict';
                a.d(t, { Ew: () => r, Z5: () => u, cy: () => _ });
                const u = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    _ = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    },
                    r = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            9366: (e, t, a) => {
                'use strict';
                var u = a(3138),
                    _ = a(7739),
                    r = a(6179),
                    n = a.n(r),
                    i = a(6483),
                    s = a.n(i),
                    o = a(926),
                    l = a.n(o),
                    c = a(1043);
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
                        const e = (0, r.useContext)(_.YN),
                            t = e.width,
                            a = e.height,
                            u = ((e) => {
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
                            n = ((e) => {
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
                        return { mediaSize: u, mediaWidth: n, mediaHeight: i, remScreenWidth: t, remScreenHeight: a };
                    },
                    E = ['children', 'className'];
                function C() {
                    return (
                        (C =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        C.apply(this, arguments)
                    );
                }
                const A = {
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
                    p = {
                        [m.ExtraSmall]: '',
                        [m.Small]: l().SMALL,
                        [m.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [m.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [m.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    B = (e) => {
                        let t = e.children,
                            a = e.className,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    _ = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                                return _;
                            })(e, E);
                        const _ = g(),
                            r = _.mediaWidth,
                            i = _.mediaHeight,
                            o = _.mediaSize;
                        return n().createElement('div', C({ className: s()(a, A[r], F[i], p[o]) }, u), t);
                    },
                    D = ['children'];
                const v = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                _ = {},
                                r = Object.keys(e);
                            for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                            return _;
                        })(e, D);
                    return n().createElement(_.ZN, null, n().createElement(B, a, t));
                };
                var h = a(493),
                    f = a.n(h);
                function x(e) {
                    engine.call('PlaySound', e);
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
                let k, N;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(k || (k = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(N || (N = {}));
                const y = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: u,
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
                    const C = (0, r.useRef)(null),
                        A = (0, r.useState)(a),
                        F = A[0],
                        p = A[1],
                        B = (0, r.useState)(!1),
                        D = B[0],
                        v = B[1],
                        h = (0, r.useState)(!1),
                        f = h[0],
                        w = h[1],
                        N = (0, r.useCallback)(() => {
                            _ || (C.current && (C.current.focus(), p(!0)));
                        }, [_]),
                        y = (0, r.useCallback)(
                            (e) => {
                                F && null !== C.current && !C.current.contains(e.target) && p(!1);
                            },
                            [F],
                        ),
                        T = (0, r.useCallback)(
                            (e) => {
                                _ || (E && E(e));
                            },
                            [_, E],
                        ),
                        W = (0, r.useCallback)(
                            (e) => {
                                _ || (null !== o && x(o), c && c(e), w(!0));
                            },
                            [_, o, c],
                        ),
                        L = (0, r.useCallback)(
                            (e) => {
                                m && m(e);
                            },
                            [m],
                        ),
                        M = (0, r.useCallback)(
                            (e) => {
                                _ || (b && b(e), v(!1));
                            },
                            [_, b],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                _ || (null !== l && x(l), d && d(e), a && N(), v(!0));
                            },
                            [_, l, d, N, a],
                        ),
                        I = (0, r.useCallback)(
                            (e) => {
                                _ || (g && g(e), v(!1));
                            },
                            [_, g],
                        ),
                        O = s()(
                            S.base,
                            S[`base__${u}`],
                            {
                                [S.base__disabled]: _,
                                [S[`base__${t}`]]: t,
                                [S.base__focus]: F,
                                [S.base__highlightActive]: D,
                                [S.base__firstHover]: f,
                            },
                            i,
                        ),
                        $ = s()(S.state, S.state__default);
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
                            p(a);
                        }, [a]),
                        n().createElement(
                            'div',
                            {
                                ref: C,
                                className: O,
                                onMouseEnter: W,
                                onMouseMove: L,
                                onMouseUp: M,
                                onMouseDown: P,
                                onMouseLeave: I,
                                onClick: T,
                            },
                            u !== k.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: S.back }),
                                    n().createElement('span', { className: S.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: $ },
                                n().createElement('span', { className: S.stateDisabled }),
                                n().createElement('span', { className: S.stateHighlightHover }),
                                n().createElement('span', { className: S.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: S.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                y.defaultProps = { type: k.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const T = (0, r.memo)(y),
                    W = {
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
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                class P extends n().PureComponent {
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
                            a = e.onClick,
                            u = e.goto,
                            _ = e.side,
                            r = e.type,
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
                                    var a,
                                        u,
                                        _ = {},
                                        r = Object.keys(e);
                                    for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                                    return _;
                                })(e, L)),
                            b = s()(W.base, W[`base__${r}`], W[`base__${_}`], null == i ? void 0 : i.base),
                            g = s()(W.icon, W[`icon__${r}`], W[`icon__${_}`], null == i ? void 0 : i.icon),
                            E = s()(W.glow, null == i ? void 0 : i.glow),
                            C = s()(W.caption, W[`caption__${r}`], null == i ? void 0 : i.caption),
                            A = s()(W.goto, null == i ? void 0 : i.goto);
                        return n().createElement(
                            'div',
                            M(
                                {
                                    className: b,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                d,
                            ),
                            'info' !== r && n().createElement('div', { className: W.shine }),
                            n().createElement('div', { className: g }, n().createElement('div', { className: E })),
                            n().createElement('div', { className: C }, t),
                            u && n().createElement('div', { className: A }, u),
                        );
                    }
                }
                P.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var I = a(6373);
                var O = a(3649),
                    $ = a(9916),
                    H = a(8613);
                const z = 60,
                    V = 3600,
                    j = 86400;
                Date.now(), H.Ew.getRegionalDateTime, H.Ew.getFormattedDateTime;
                const U = () => {},
                    q = (e = 0, t, a = 0, u = U) => {
                        const _ = (0, r.useState)(e),
                            n = _[0],
                            i = _[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e > 0) {
                                    i(e);
                                    const _ = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - _) / 1e3);
                                                null !== a && t <= a ? (i(a), u && u(), clearInterval(r)) : i(t);
                                            },
                                            1e3 * (t || (e > 120 ? z : 1)),
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, t, a, u]),
                            n
                        );
                    };
                var G = a(7902);
                const Z = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var Y = a(6536);
                const K = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    X = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    Q = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, a) => {
                                const u = Z(`${e}.${a}`, window);
                                return K(u) ? t(e, a, u) : `${e}.${a}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    J = (e) => {
                        const t = ((e) => {
                                const t = (0, G.F)(),
                                    a = t.caller,
                                    u = t.resId,
                                    _ = window.__feature && window.__feature !== a && a ? `subViews.${a}` : '';
                                return { modelPrefix: _, modelPath: X(_, e || ''), resId: u };
                            })(),
                            a = t.modelPrefix,
                            u = e.split('.');
                        if (u.length > 0) {
                            const e = [u[0]];
                            return (
                                u.reduce((t, u) => {
                                    const _ = Z(X(a, `${t}.${u}`), window);
                                    return K(_) ? (e.push(_.id), `${t}.${u}.value`) : (e.push(u), `${t}.${u}`);
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
                const ae = (e = 'model', t = te.Deep) => {
                        const a = (0, r.useState)(0),
                            u = (a[0], a[1]),
                            _ = (0, r.useMemo)(() => (0, G.F)(), []),
                            n = _.caller,
                            i = _.resId,
                            s = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== n ? `subViews.${n}.${e}` : e),
                                [n, e],
                            ),
                            o = (0, r.useState)(() =>
                                ((e) => {
                                    const t = Z(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return K(t) ? t.value : t;
                                })(Q(s)),
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
                                    const a = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === te.Deep
                                                ? (e === l && u((e) => e + 1), c(e))
                                                : c(Object.assign([], e));
                                        },
                                        _ = J(e);
                                    m.current = ee.addCallback(_, a, i, t === te.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (t !== te.None)
                                    return () => {
                                        ee.removeCallback(m.current, i);
                                    };
                            }, [i, t]),
                            l
                        );
                    },
                    ue = ($.Sw.instance, q);
                var _e = a(5521);
                const re = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ne(e = _e.n.NONE, t = re, a = !1, _ = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== _e.n.NONE)
                            return (
                                window.addEventListener('keydown', r, a),
                                () => {
                                    window.removeEventListener('keydown', r, a);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!_ && u.O.view.isEventHandled()) return;
                                u.O.view.setEventHandled(), t(r), a && r.stopPropagation();
                            }
                        }
                    }, [t, e, a, _]);
                }
                function ie() {
                    !(function (e = _e.n.ESCAPE) {
                        ne(e, $.Sy, !0);
                    })(_e.n.ESCAPE);
                }
                var se = a(9924),
                    oe = a(3486);
                let le;
                !(function (e) {
                    (e.DISABLED = 'disabled'), (e.ACTIVE = 'active');
                })(le || (le = {}));
                var ce = a(2646),
                    me = a(4194),
                    de = a(7663),
                    be = a(5611);
                let ge;
                !(function (e) {
                    (e[(e.NONE = 0)] = 'NONE'), (e[(e.STATIC = 1)] = 'STATIC'), (e[(e.NEW = 2)] = 'NEW');
                })(ge || (ge = {}));
                var Ee = a(8188),
                    Ce = a(9930),
                    Ae = a(4090),
                    Fe = a(7078);
                const pe = {
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
                    Be = ({
                        index: e,
                        size: t,
                        isSelected: a,
                        isDisabled: u,
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
                        isNotStarted: C,
                    }) => {
                        const A = (0, Ce.O)(),
                            F = (0, r.useCallback)(() => {
                                m({ index: e, size: t, cardMediaSize: A }), w.playClick();
                            }, [m, e, t, A]),
                            p = (0, r.useCallback)(
                                (t) => {
                                    t.stopPropagation(), w.playYes(), d({ index: e });
                                },
                                [d, e],
                            ),
                            B = (0, Ce.B)(c),
                            D = B[0],
                            v = B[1],
                            h = (0, r.useCallback)(() => {
                                x(
                                    [oe.Id.B4, oe.Id.B5, oe.Id.B6].includes(t)
                                        ? 'ev_mode_selector_hover_simple'
                                        : 'ev_mode_selector_hover',
                                ),
                                    v(!0);
                            }, [v, t]),
                            f = (0, r.useCallback)(() => {
                                v(!1);
                            }, [v]),
                            S = (0, se.Z)(['info', 'check', 'checkBackground'], pe),
                            k = A !== oe.Cg.Big;
                        let N;
                        const y = b(o);
                        if (null !== y) {
                            const e = y.$dyn(`bg_${t}_${A}`);
                            null !== e && (N = { backgroundImage: `url(${e})` });
                            const a = y.$dyn(`bg_${t}`);
                            null !== a && (N = { backgroundImage: `url(${a})`, backgroundSize: 'cover' });
                        }
                        const T = i && (D || a);
                        return n().createElement(
                            Fe.t,
                            { isEnabled: u, args: { index: e, modeName: E, tooltipId: ce.p5 } },
                            n().createElement(
                                'div',
                                null,
                                n().createElement(
                                    'div',
                                    {
                                        id: g,
                                        className: s()(pe.base, u && pe.base__disabled, C && pe.base__isNotStarted),
                                        onClick: F,
                                        onMouseEnter: h,
                                        onMouseLeave: f,
                                    },
                                    n().createElement(
                                        'div',
                                        { className: pe.mask },
                                        n().createElement('div', {
                                            className: s()(
                                                pe.background,
                                                void 0 === N && pe.background__empty,
                                                D && !C && pe.background__anim,
                                            ),
                                            style: N,
                                        }),
                                    ),
                                    n().createElement('div', { className: pe.border }),
                                    a &&
                                        n().createElement(
                                            n().Fragment,
                                            null,
                                            n().createElement('div', { className: pe.selection }),
                                            n().createElement('div', {
                                                className: s()(pe.animBg, t === oe.Id.B0 && pe.animBg__wide),
                                            }),
                                            n().createElement('div', { className: S.checkBackground }),
                                            n().createElement('div', { className: S.check }),
                                        ),
                                    n().createElement('div', { className: s()(pe.hover, D && !C && pe.hover__anim) }),
                                    n().createElement('div', { className: pe.children }, l),
                                    _ &&
                                        !u &&
                                        n().createElement(
                                            'div',
                                            { className: pe.novelty },
                                            n().createElement(Ae.A, {
                                                value: R.strings.mode_selector.novelty(),
                                                size: k ? 'small' : 'big',
                                            }),
                                        ),
                                    n().createElement('div', {
                                        className: s()(pe.infoCorner, T && pe.infoCorner__anim),
                                    }),
                                    n().createElement(
                                        I.i,
                                        { body: R.strings.tooltips.mode_selector.info.body(), isEnabled: T },
                                        n().createElement('div', {
                                            className: s()(S.info, T && pe.info__anim),
                                            onClick: p,
                                        }),
                                    ),
                                    u && n().createElement('div', { className: pe.disabling }),
                                ),
                            ),
                        );
                    },
                    De = 'TimeLeft_base_cf',
                    ve = 'TimeLeft_base__small_7c',
                    he = 'TimeLeft_icon_5d',
                    fe = ({ index: e, text: t, isSmall: a = !1, classMix: u, tooltipId: _, modeName: r = '' }) =>
                        n().createElement(
                            Fe.t,
                            { args: _ ? { tooltipId: _, modeName: r } : { tooltipId: ce.GN, index: e } },
                            n().createElement(
                                'div',
                                { className: s()(De, a && ve, u) },
                                n().createElement('div', { className: he }),
                                t,
                            ),
                        );
                var xe = a(2056);
                const we = {
                        base: 'BattlePassIcon_base_bf',
                        bpIcon: 'BattlePassIcon_bpIcon_18',
                        bpIcon__extraLarge: 'BattlePassIcon_bpIcon__extraLarge_b3',
                        bpIcon__large: 'BattlePassIcon_bpIcon__large_c2',
                        bpAnim: 'BattlePassIcon_bpAnim_01',
                        bpAnim__extraLarge: 'BattlePassIcon_bpAnim__extraLarge_38',
                        bpAnim__large: 'BattlePassIcon_bpAnim__large_1e',
                    },
                    Se = ({ modeName: e, isDisabled: t, battlePassState: a }) => {
                        const u = (0, se.Z)([...(0, oe.Hp)('bpIcon', 'bpAnim')], we);
                        return (
                            (0, r.useEffect)(() => {
                                a !== ge.NEW || t || x('ev_mode_selector_bp_points_icon_appear');
                            }, [a, t]),
                            a === ge.NONE || t
                                ? null
                                : n().createElement(
                                      'div',
                                      { className: we.base },
                                      n().createElement(
                                          xe.u,
                                          {
                                              contentId:
                                                  R.views.lobby.mode_selector.tooltips.SimplyFormatTooltip('resId'),
                                              args: { modeName: e },
                                              ignoreShowDelay: !0,
                                          },
                                          n().createElement('div', { className: u.bpIcon }),
                                      ),
                                      a === ge.NEW && n().createElement('div', { className: u.bpAnim }),
                                  )
                        );
                    };
                var ke = a(280);
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const ye = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const u = n().createElement('div', { className: a }, e);
                        if (t.header || t.body) return n().createElement(I.i, t, u);
                        const _ = t.contentId;
                        return _
                            ? n().createElement(xe.u, Ne({}, t, { contentId: _ }), u)
                            : n().createElement(Fe.t, t, u);
                    },
                    Te = {
                        base: 'Reward_base_80',
                        header: 'Reward_header_7c',
                        vehicleType: 'Reward_vehicleType_fa',
                        icon: 'Reward_icon_93',
                        base__small: 'Reward_base__small_cb',
                        'base__small-b0': 'Reward_base__small-b0_c5',
                        'base__small-b1': 'Reward_base__small-b1_16',
                        'base__count-3': 'Reward_base__count-3_65',
                        base__medium: 'Reward_base__medium_ce',
                        'base__medium-b1': 'Reward_base__medium-b1_3f',
                        name: 'Reward_name_17',
                    },
                    We = R.images.gui.maps.icons.mode_selector.rewards,
                    Le = R.images.gui.maps.icons.vehicleTypes,
                    Re = ['small', 'small-b0', 'small-b1', 'medium'],
                    Me = [oe.Id.B0, oe.Id.B1],
                    Pe = ({
                        mediaSize: e,
                        cardSize: t,
                        iconName: a,
                        name: u,
                        description: _,
                        tooltipID: i,
                        vehicleLevel: o,
                        vehicleType: l,
                        rewardsCount: c,
                    }) => {
                        const m = `${e}${Me.includes(t) ? `-${t}` : ''}`,
                            d = (0, r.useMemo)(() => {
                                const e = Re.includes(m) ? 'c_48x48' : 'c_64x64';
                                return { backgroundImage: `url(${We.$dyn(e).$dyn(a)})` };
                            }, [m, a]);
                        return n().createElement(
                            ye,
                            {
                                tooltipArgs: {
                                    args: { tooltipId: i },
                                    tooltipId: i,
                                    body: i ? '' : _,
                                    header: i ? '' : u,
                                    ignoreShowDelay: !0,
                                },
                            },
                            n().createElement(
                                'div',
                                { className: s()(Te.base, Te[`base__${m}`], Te[`base__count-${c}`]) },
                                n().createElement(
                                    'div',
                                    { className: Te.header },
                                    n().createElement('div', {
                                        className: Te.vehicleType,
                                        style: l ? { backgroundImage: `url(${Le.$dyn(l)})` } : void 0,
                                    }),
                                    n().createElement('div', null, o),
                                ),
                                n().createElement('div', { className: Te.icon, style: d }),
                                u && n().createElement(ke.z, { text: u, classMix: Te.name }),
                            ),
                        );
                    },
                    Ie = {
                        base: 'Rewards_base_c8',
                        base__extraSmall: 'Rewards_base__extraSmall_9b',
                        base__small: 'Rewards_base__small_78',
                        base__medium: 'Rewards_base__medium_75',
                    };
                function Oe() {
                    return (
                        (Oe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Oe.apply(this, arguments)
                    );
                }
                const $e = ({ size: e, rewardsList: t }) => {
                        const a = (0, Ce.O)(),
                            u = (0, se.Z)(['base'], Ie);
                        return n().createElement(
                            'div',
                            { className: u.base },
                            t &&
                                t.map(
                                    (u) =>
                                        u &&
                                        u.value &&
                                        n().createElement(
                                            Pe,
                                            Oe(
                                                {
                                                    key: u.value.iconName,
                                                    mediaSize: a,
                                                    cardSize: e,
                                                    rewardsCount: t.length,
                                                },
                                                u.value,
                                            ),
                                        ),
                                ),
                        );
                    },
                    He = {
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
                        icon__anim__b0: 'NormalCard_icon__anim__b0_e3',
                        icon__anim__b1: 'NormalCard_icon__anim__b1_04',
                        icon__anim__b2: 'NormalCard_icon__anim__b2_19',
                        icon__anim__b3: 'NormalCard_icon__anim__b3_e8',
                        icon__static__b0: 'NormalCard_icon__static__b0_3c',
                        icon__static__b1: 'NormalCard_icon__static__b1_36',
                        icon__static__b2: 'NormalCard_icon__static__b2_13',
                        icon__static__b3: 'NormalCard_icon__static__b3_6d',
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
                        icon__static__b2__medium: 'NormalCard_icon__static__b2__medium_92',
                        icon__anim__b2__medium: 'NormalCard_icon__anim__b2__medium_da',
                        icon__static__b2__extraLarge: 'NormalCard_icon__static__b2__extraLarge_99',
                        icon__static__b2__large: 'NormalCard_icon__static__b2__large_e3',
                        icon__anim__b2__extraLarge: 'NormalCard_icon__anim__b2__extraLarge_8e',
                        icon__anim__b2__large: 'NormalCard_icon__anim__b2__large_94',
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
                var ze = a(8668);
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
                    'classNames',
                    'resourceFolderGetter',
                ];
                function je() {
                    return (
                        (je =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        je.apply(this, arguments)
                    );
                }
                const Ue = (e) => {
                        let t = e.name,
                            a = e.eventName,
                            u = e.statusNotActive,
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
                            C = e.rewardList,
                            A = e.statusActive,
                            F = e.divider,
                            p = void 0 === F ? ' ' : F,
                            B = e.belowStatusComponent,
                            D = e.nameSuffixComponent,
                            v = e.forceShowIcon,
                            h = void 0 !== v && v,
                            f = e.hideStatus,
                            x = void 0 !== f && f,
                            w = e.noWidgetSizes,
                            S = void 0 === w ? [oe.Id.B5, oe.Id.B6] : w,
                            k = e.classNames,
                            N = e.resourceFolderGetter,
                            y = void 0 === N ? oe.d6 : N,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    _ = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                                return _;
                            })(e, Ve);
                        const W = (0, Ce.O)(),
                            L = (0, se.Z)(
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
                                He,
                            ),
                            M = ae('model', te.None),
                            P = M.onItemClicked,
                            I = M.onInfoClicked,
                            $ = T.resourcesFolderName,
                            H = T.size,
                            z = T.isSelected,
                            V = T.showWidget,
                            j = T.isNew,
                            U = T.modeName,
                            q = T.index,
                            G = (0, Ce.B)(l),
                            Z = G[0],
                            Y = G[1],
                            K = (0, r.useMemo)(() => ze.S4[H][W], [H, W]),
                            X = (0, r.useMemo)(() => {
                                const e = y($);
                                if (null !== e) {
                                    const t = e.$dyn(`icon_${K}`);
                                    if (void 0 !== t) return { backgroundImage: `url(${t})` };
                                }
                            }, [y, $, K]),
                            Q = V || z,
                            J = ze.Hi.includes(H),
                            ee = H === oe.Id.B1,
                            ue = H === oe.Id.B2,
                            _e = H === oe.Id.B3,
                            re = ze.u_.includes(H),
                            ne = !S.includes(H) && V && d,
                            ie = Q && !J,
                            le = Z && !J && !Q,
                            ce = Z || (z && A),
                            me = W !== oe.Cg.Big,
                            de = C && C.length > 0 && !u && re,
                            be = (0, r.useMemo)(
                                () =>
                                    g
                                        ? R.strings.ranked_battles.rankedBattlesUnreachableView.subtitleText()
                                        : A || a || void 0,
                                [g, A, a],
                            ),
                            ge = (0, r.useMemo)(
                                () => (re || _e ? u || '' : void 0 === u ? '' : u.replace('\n', ' ')),
                                [re, u, _e],
                            );
                        let Ae = '';
                        ee && _ === be ? i && (Ae = (0, O.z4)(i)) : (Ae = (0, O.z4)(_ + p + i));
                        const Fe = s()(
                                He.icon,
                                He[`icon__${K}`],
                                L[`icon__${H}`],
                                !J && He.icon__animPrepare,
                                ie && L[`icon__static__${H}`],
                                le && L[`icon__anim__${H}`],
                            ),
                            pe = s()(He.mask, L[`mask__${H}`], ie && He.mask__static, le && He.mask__anim),
                            De = s()(
                                L.subtitle,
                                L[`subtitle__${H}`],
                                (a || !J) && He.subtitle__normal,
                                !re && He.subtitle__noReward,
                                A && J && He.subtitle__statusActive,
                                A && Q && He.subtitle__staticPrepare,
                                ce && He.subtitle__anim,
                                g && He.subtitle__disable,
                                null == k ? void 0 : k.subtitle,
                            ),
                            ve = s()(
                                He.statusDescription,
                                ue && He.statusDescription__position,
                                re && He.statusDescription__color,
                            ),
                            he = s()(L.footer, (Z || z) && !V && _e && He.footer__anim, null == k ? void 0 : k.footer),
                            xe = s()(L.formatText, L[`formatText__${H}`]),
                            we = s()(He.darken, V && He.darken__show),
                            ke = s()(
                                He.widgetOverlay,
                                !ne && He.widgetOverlay__hide,
                                null == k ? void 0 : k.widgetOverlay,
                            );
                        return n().createElement(
                            'div',
                            { className: s()(L.base, L[`base__${H}`]) },
                            n().createElement(
                                Be,
                                je({ onHoverChanged: Y, isDisabled: g }, T, {
                                    onItemClicked: P,
                                    onInfoClicked: I,
                                    resourceFolderGetter: y,
                                }),
                                de && n().createElement($e, { size: H, rewardsList: C }),
                                u &&
                                    n().createElement(
                                        'div',
                                        { className: s()(L.statusNotActive, L[`statusNotActive__${H}`]) },
                                        n().createElement(Ee.B, { text: ge, classMix: xe }),
                                    ),
                                n().createElement('div', { className: we }),
                                d && n().createElement('div', { className: ke }, d),
                                o,
                                (!ne || h) &&
                                    n().createElement(
                                        'div',
                                        { className: pe },
                                        n().createElement('div', { className: Fe, style: X }),
                                    ),
                                n().createElement('div', { className: s()(He.name, L.name, L[`name__${H}`]) }, t, D),
                                n().createElement(
                                    'div',
                                    { className: De },
                                    !x && (!ue || g) && n().createElement(Ee.B, { classMix: xe, text: be || '' }),
                                    Ae &&
                                        re &&
                                        !g &&
                                        (!ne || re) &&
                                        n().createElement(
                                            'div',
                                            { className: ve },
                                            n().createElement(Ee.B, { classMix: xe, text: Ae }),
                                        ),
                                    n().createElement(
                                        'div',
                                        { className: s()(He.belowStatus, null == k ? void 0 : k.belowStatus) },
                                        B,
                                    ),
                                ),
                                i &&
                                    n().createElement(
                                        'div',
                                        { className: he },
                                        n().createElement(Ee.B, { classMix: xe, text: (0, O.z4)(i) }),
                                    ),
                                E &&
                                    !j &&
                                    n().createElement(fe, {
                                        index: q,
                                        text: E,
                                        isSmall: me,
                                        classMix: s()(He.timeLeft, me && He.timeLeft__small),
                                        tooltipId: m,
                                        modeName: U,
                                    }),
                                n().createElement(Se, { modeName: U, isDisabled: g, battlePassState: b }),
                            ),
                        );
                    },
                    qe = { widgetOverlay: 'Card_widgetOverlay_a5', belowStatus: 'Card_belowStatus_b6' },
                    Ge = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Ze, Ye;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Ze || (Ze = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Ye || (Ye = {}));
                const Ke = ({ size: e = Ze.Default }) => {
                        const t = s()(Ge.background, Ge[`background__${e}`]);
                        return n().createElement('div', { className: t });
                    },
                    Xe = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Qe = ({ size: e }) => {
                        const t = s()(Xe.base, Xe[`base__${e}`]);
                        return n().createElement('div', { className: t });
                    },
                    Je = {
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
                    et = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: a, baseStyles: u, isComplete: _, withoutBounce: r }) => {
                            const i = s()(
                                    Je.base,
                                    Je[`base__${e}`],
                                    a && Je.base__disabled,
                                    _ && Je.base__finished,
                                    r && Je.base__withoutBounce,
                                ),
                                o = !a && !_;
                            return n().createElement(
                                'div',
                                { className: i, style: u, ref: t },
                                n().createElement('div', { className: Je.pattern }),
                                n().createElement('div', { className: Je.gradient }),
                                o && n().createElement(Qe, { size: e }),
                            );
                        },
                    ),
                    tt = ({ size: e, value: t, lineRef: a, disabled: u, onComplete: _ }) => {
                        const i = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            s = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                s && _ && _();
                            }, [s, _]),
                            n().createElement(et, { size: e, disabled: u, baseStyles: i, isComplete: s, lineRef: a })
                        );
                    },
                    at = (e, t) => {
                        let a;
                        const u = setTimeout(() => {
                            a = e();
                        }, t);
                        return () => {
                            'function' == typeof a && a(), clearTimeout(u);
                        };
                    };
                let ut, _t;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(ut || (ut = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(_t || (_t = {}));
                const rt = 'ProgressBarDeltaSimple_base_6c',
                    nt = 'ProgressBarDeltaSimple_delta_99',
                    it = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: u,
                            size: _,
                            to: i,
                            onEndAnimation: s,
                            onChangeAnimationState: o,
                        }) => {
                            const l = i < u,
                                c = (0, r.useState)(_t.Idle),
                                m = c[0],
                                d = c[1],
                                b = m === _t.In,
                                g = m === _t.End,
                                E = m === _t.Idle,
                                C = (0, r.useCallback)(
                                    (e) => {
                                        d(e), o && o(e);
                                    },
                                    [o],
                                );
                            (0, r.useEffect)(() => {
                                if (E && !a) {
                                    return at(() => {
                                        C(_t.In);
                                    }, t);
                                }
                            }, [C, a, E, t]),
                                (0, r.useEffect)(() => {
                                    if (b) {
                                        return at(() => {
                                            s && s(), C(_t.End);
                                        }, e + t);
                                    }
                                }, [C, b, s, t, e]);
                            const A = (0, r.useMemo)(
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
                                p = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(u - i)}%`, left: `${l ? i : u}%` }),
                                    [u, l, i],
                                );
                            return g
                                ? null
                                : n().createElement(
                                      'div',
                                      { className: rt, style: p },
                                      n().createElement(
                                          'div',
                                          { style: E ? A : F, className: nt },
                                          n().createElement(Qe, { size: _ }),
                                      ),
                                  );
                        },
                    ),
                    st = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: u,
                            disabled: _,
                            isComplete: i,
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
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(et, {
                                    size: t,
                                    lineRef: u,
                                    disabled: _,
                                    isComplete: i,
                                    baseStyles: c,
                                }),
                                a >= 0 &&
                                    n().createElement(it, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: a,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: o,
                                        onEndAnimation: l,
                                    }),
                            );
                        },
                    ),
                    ot = 'ProgressBarDeltaGrow_base_7e',
                    lt = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    ct = 'ProgressBarDeltaGrow_glow_68',
                    mt = (e) => (e ? { left: 0 } : { right: 0 }),
                    dt = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    bt = (e) => ({ transitionDuration: `${e}ms` }),
                    gt = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: u,
                            size: _,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = i < u,
                                d = (0, r.useState)(ut.Idle),
                                b = d[0],
                                g = d[1],
                                E = b === ut.End,
                                C = b === ut.Idle,
                                A = b === ut.Grow,
                                F = b === ut.Shrink,
                                p = (0, r.useCallback)(
                                    (e) => {
                                        g(e), l && l(e);
                                    },
                                    [l],
                                ),
                                B = (0, r.useCallback)(
                                    (e, t) =>
                                        at(() => {
                                            p(e);
                                        }, t),
                                    [p],
                                );
                            (0, r.useEffect)(() => {
                                if (!a)
                                    return C
                                        ? B(ut.Grow, t)
                                        : A
                                          ? B(ut.Shrink, e)
                                          : F
                                            ? B(ut.End, e)
                                            : void (E && o && o());
                            }, [B, a, E, A, C, F, o, t, e]);
                            const D = (0, r.useMemo)(() => Object.assign({ width: '100%' }, bt(e), mt(m)), [m, e]),
                                v = (0, r.useMemo)(() => Object.assign({ width: '0%' }, bt(e), mt(m)), [m, e]),
                                h = (0, r.useMemo)(() => Object.assign({ width: '0%' }, dt(m, u), bt(e)), [u, m, e]),
                                f = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - u)}%` }, dt(m, u), bt(e)),
                                    [u, m, i, e],
                                );
                            if (E) return null;
                            const x = s()(ot, c, m && 0 === i && lt);
                            return n().createElement(
                                'div',
                                { style: C ? h : f, className: x },
                                n().createElement(
                                    'div',
                                    { style: F ? v : D, className: ct },
                                    n().createElement(Qe, { size: _ }),
                                ),
                            );
                        },
                    ),
                    Et = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: u,
                            disabled: _,
                            isComplete: i,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = e < a,
                                m = (0, r.useState)(!1),
                                d = m[0],
                                b = m[1],
                                g = (0, r.useCallback)(
                                    (e) => {
                                        e === ut.Shrink && b(!0), l && l(e);
                                    },
                                    [l],
                                ),
                                E = (0, r.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                                C = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, e],
                                );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(et, {
                                    size: t,
                                    lineRef: u,
                                    disabled: _,
                                    isComplete: i,
                                    withoutBounce: c && 0 === e,
                                    baseStyles: d ? C : E,
                                }),
                                a >= 0 &&
                                    n().createElement(gt, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: s.freezed,
                                        onEndAnimation: o,
                                        from: a,
                                        size: t,
                                        to: e,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    Ct = ['onComplete', 'onEndAnimation'];
                function At() {
                    return (
                        (At =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        At.apply(this, arguments)
                    );
                }
                const Ft = (0, r.memo)((e) => {
                        let t = e.onComplete,
                            a = e.onEndAnimation,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    _ = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                                return _;
                            })(e, Ct);
                        const _ = (0, r.useState)(!1),
                            i = _[0],
                            s = _[1],
                            o = (0, r.useCallback)(() => {
                                const e = 100 === u.to;
                                e !== i && s(e), e && t && t(), a && a();
                            }, [i, t, a, u.to]);
                        switch (u.animationSettings.type) {
                            case Ye.Simple:
                                return n().createElement(st, At({}, u, { onEndAnimation: o, isComplete: i }));
                            case Ye.Growing:
                                return n().createElement(Et, At({}, u, { onEndAnimation: o, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    pt = ['onEndAnimation'];
                function Bt() {
                    return (
                        (Bt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Bt.apply(this, arguments)
                    );
                }
                const Dt = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                _ = {},
                                r = Object.keys(e);
                            for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                            return _;
                        })(e, pt);
                    const u = (0, r.useRef)({}),
                        _ = (0, r.useCallback)(() => {
                            (u.current.from = void 0), t && t();
                        }, [t]),
                        i = 'number' == typeof u.current.from ? u.current.from : a.from;
                    return (
                        (u.current.from = i),
                        n().createElement(Ft, Bt({}, a, { onEndAnimation: _, key: `${i}-${a.to}`, from: i }))
                    );
                });
                function vt() {
                    return (
                        (vt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        vt.apply(this, arguments)
                    );
                }
                const ht = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: a,
                            disabled: u,
                            deltaFrom: _,
                            animationSettings: r,
                            onEndAnimation: i,
                            onChangeAnimationState: s,
                            onComplete: o,
                        }) => {
                            if (_ === t)
                                return n().createElement(tt, {
                                    key: `${_}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: a,
                                    disabled: u,
                                    onComplete: o,
                                });
                            const l = {
                                from: _,
                                to: t,
                                size: e,
                                lineRef: a,
                                disabled: u,
                                animationSettings: r,
                                onComplete: o,
                                onEndAnimation: i,
                                onChangeAnimationState: s,
                            };
                            return r.withStack
                                ? n().createElement(Dt, l)
                                : n().createElement(Ft, vt({ key: `${_}-${t}` }, l));
                        },
                    ),
                    ft = (e) => ({
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
                    xt = {
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
                    wt = (e, t, a) => (a < e ? e : a > t ? t : a),
                    St = (e, t, a) => {
                        if ('number' == typeof a) {
                            return (wt(0, t, a) / t) * 100;
                        }
                        return e;
                    },
                    kt = xt,
                    Nt = {
                        freezed: !1,
                        withStack: !1,
                        type: Ye.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    yt = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = kt,
                            size: a = Ze.Default,
                            animationSettings: u = Nt,
                            disabled: _ = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: m,
                            onEndAnimation: d,
                            onComplete: b,
                        }) => {
                            const g = ((e, t, a) =>
                                (0, r.useMemo)(() => {
                                    const u = (wt(0, t, e) / t) * 100;
                                    return { value: u, deltaFrom: St(u, t, a) };
                                }, [a, t, e]))(o, e, l);
                            return n().createElement(
                                'div',
                                { className: s()(Ge.base, Ge[`base__${a}`]), style: ft(t) },
                                !i && n().createElement(Ke, { size: a }),
                                n().createElement(ht, {
                                    size: a,
                                    lineRef: c,
                                    disabled: _,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    animationSettings: u,
                                    onEndAnimation: d,
                                    onChangeAnimationState: m,
                                    onComplete: b,
                                }),
                            );
                        },
                    ),
                    Tt = {
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
                    Wt = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Lt = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Rt = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Mt = (0, r.memo)(({ text: e, binding: t, classMix: a }) => {
                        const u = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            _ = (0, r.useMemo)(() => t || {}, [t]);
                        let i = Wt.exec(e),
                            s = e,
                            o = 0;
                        for (; i; ) {
                            const a = i[0],
                                r = Lt.exec(a),
                                l = Rt.exec(a),
                                c = i[1];
                            if (r && l) {
                                const e = r[0],
                                    i = e + o++ + e;
                                (s = s.replace(a, `%(${i})`)),
                                    (_[i] = Tt[e]
                                        ? n().createElement(
                                              'span',
                                              { className: Tt[e] },
                                              n().createElement(ke.z, { text: c, binding: t }),
                                          )
                                        : n().createElement(
                                              'span',
                                              { style: u(e) },
                                              n().createElement(ke.z, { text: c, binding: t }),
                                          ));
                            }
                            i = Wt.exec(e);
                        }
                        return n().createElement(ke.z, { text: s, classMix: a, binding: _ });
                    }),
                    Pt = {
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
                        type: Ye.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    $t = ({ status: e = le.ACTIVE, currentStage: t, stageCurrentPoints: a, stageMaximumPoints: u }) =>
                        n().createElement(
                            'div',
                            { className: s()(Pt.base, Pt[`base__${e}`]) },
                            n().createElement(
                                'div',
                                { className: Pt.contentWrapper },
                                a !== u &&
                                    e === le.ACTIVE &&
                                    n().createElement(
                                        'div',
                                        { className: Pt.progress },
                                        n().createElement(
                                            'div',
                                            { className: Pt.currentStage },
                                            It.currentStage(),
                                            n().createElement('span', null, t),
                                        ),
                                        n().createElement(yt, {
                                            size: Ze.Small,
                                            value: a,
                                            maxValue: u,
                                            animationSettings: Ot,
                                            deltaFrom: a,
                                        }),
                                        n().createElement(
                                            'div',
                                            { className: Pt.progressValue },
                                            n().createElement(Mt, { text: It.steps(), binding: { done: a, total: u } }),
                                            n().createElement('div', { className: Pt.progressValueIcon }),
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
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Ht.apply(this, arguments)
                    );
                }
                const zt = (e) => {
                    const t = e.statusNotActive,
                        a = e.battlePassState,
                        u = e.size,
                        _ = e.widget,
                        r = e.showWidget,
                        i = u === oe.Id.B1 && r;
                    return n().createElement(
                        'div',
                        { className: qe[`base__${u}`] },
                        n().createElement(
                            Ue,
                            Ht(
                                {
                                    belowStatusComponent: i && n().createElement($t, _),
                                    classNames: { belowStatus: qe.belowStatus },
                                },
                                e,
                                { battlePassState: t ? ge.NONE : a },
                            ),
                        ),
                    );
                };
                let Vt, jt;
                !(function (e) {
                    (e[(e.A = 1)] = 'A'),
                        (e[(e.B = 2)] = 'B'),
                        (e[(e.C = 3)] = 'C'),
                        (e[(e.D = 4)] = 'D'),
                        (e[(e.E = 5)] = 'E');
                })(Vt || (Vt = {})),
                    (function (e) {
                        (e[(e.Achieved = 0)] = 'Achieved'),
                            (e[(e.Current = 1)] = 'Current'),
                            (e[(e.Inactive = 2)] = 'Inactive');
                    })(jt || (jt = {}));
                const Ut = R.strings.comp7.division,
                    qt = { [Vt.A]: 'A', [Vt.B]: 'B', [Vt.C]: 'C', [Vt.D]: 'D', [Vt.E]: 'E' },
                    Gt = (e) => Ut.$dyn(qt[e]);
                let Zt;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(Zt || (Zt = {}));
                const Yt = {
                        [Zt.First]: 'first',
                        [Zt.Second]: 'second',
                        [Zt.Third]: 'third',
                        [Zt.Fourth]: 'fourth',
                        [Zt.Fifth]: 'fifth',
                        [Zt.Sixth]: 'sixth',
                    },
                    Kt = (e) => ((e, t) => `${e.$dyn(Yt[t])}`)(R.strings.comp7.rank, e),
                    Xt = [Zt.First, Zt.Second, Zt.Third, Zt.Fourth],
                    Qt = (e) => Xt.includes(e),
                    Jt = {
                        widget: 'Comp7BattleCard_widget_3b',
                        base__b0: 'Comp7BattleCard_base__b0_91',
                        base__b1: 'Comp7BattleCard_base__b1_30',
                        base__b2: 'Comp7BattleCard_base__b2_da',
                        belowStatus: 'Comp7BattleCard_belowStatus_48',
                    },
                    ea = 'QualificationCounter_base_fb',
                    ta = 'QualificationCounter_dash_e2',
                    aa = 'QualificationCounter_dash__right_3e',
                    ua = 'QualificationCounter_iconContainer_c3',
                    _a = 'QualificationCounter_battleIcon_2e',
                    ra = 'QualificationCounter_score_3b',
                    na = ({ battlesCount: e, maxBattlesCount: t, className: a }) =>
                        n().createElement(
                            'div',
                            { className: s()(ea, a) },
                            n().createElement('div', { className: ta }),
                            n().createElement(Mt, {
                                text: R.strings.comp7.qualification.battlesCounter(),
                                binding: {
                                    battleIcon: n().createElement(
                                        'div',
                                        { className: ua },
                                        n().createElement('div', { className: _a }),
                                    ),
                                    battlesCount: e,
                                    maxBattlesCount: t,
                                },
                                classMix: ra,
                            }),
                            n().createElement('div', { className: s()(ta, aa) }),
                        ),
                    ia = (e) => {
                        let t,
                            a = null;
                        return (
                            (a = requestAnimationFrame(() => {
                                a = requestAnimationFrame(() => {
                                    (a = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== a && cancelAnimationFrame(a);
                            }
                        );
                    };
                var sa = a(3403),
                    oa = a(7030);
                const la = {
                        [Zt.First]: 'first',
                        [Zt.Second]: 'second',
                        [Zt.Third]: 'third',
                        [Zt.Fourth]: 'fourth',
                        [Zt.Fifth]: 'fifth',
                        [Zt.Sixth]: 'sixth',
                    },
                    ca = (e) => la[e];
                let ma;
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
                })(ma || (ma = {}));
                const da = 'RankEmblem_base_ec',
                    ba = ({ rank: e, size: t, division: a, seasonName: u, className: _ }) => {
                        const i = (0, r.useMemo)(() => {
                            const _ = R.images.gui.maps.icons.comp7.ranks.$dyn(u).$num(t),
                                r = Qt(e) && void 0 !== a ? `_${Gt(a)}` : '';
                            return { backgroundImage: `url(${_.$dyn(`${ca(e)}${r}`)})`, '--imageSize': `${t}rem` };
                        }, [u, t, e, a]);
                        return n().createElement('div', { className: s()(da, _), style: i });
                    },
                    ga = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 100, config: { duration: 300 } };
                function Ea() {
                    return !1;
                }
                console.log;
                var Ca = a(9174);
                function Aa(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Fa(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return Fa(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var u = 0;
                        return function () {
                            return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Fa(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, u = new Array(t); a < t; a++) u[a] = e[a];
                    return u;
                }
                const pa = (e) => (0 === e ? window : window.subViews.get(e));
                const Ba = ((e, t) => {
                        const a = (0, r.createContext)({});
                        return [
                            function ({ mode: _ = 'real', options: i, children: s, mocks: o }) {
                                const l = (0, r.useRef)([]),
                                    c = (a, _, r) => {
                                        var n;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = pa,
                                                context: _ = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, a) => {
                                                        a.forEach((t) => {
                                                            const a = r.get(t);
                                                            void 0 !== a && a(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const u = a(t),
                                                        r = _.split('.').reduce((e, t) => e[t], u);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (a, n) => {
                                                        const s = 'string' == typeof n ? `${_}.${n}` : _,
                                                            o = u.O.view.addModelObserver(s, t, !0);
                                                        return r.set(o, a), e && a(i(n)), o;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const a = i(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, a = Aa(r.keys()); !(e = a()).done; ) n(e.value, t);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(_),
                                            s =
                                                'real' === a
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === a ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            c = (e) => l.current.push(e),
                                            m = e({
                                                mode: a,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const u = null != t ? t : o(e),
                                                            _ = Ca.LO.box(u, { equals: Ea });
                                                        return (
                                                            'real' === a &&
                                                                s.subscribe(
                                                                    (0, Ca.aD)((e) => _.set(e)),
                                                                    e,
                                                                ),
                                                            _
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const u = null != t ? t : o(e),
                                                            _ = Ca.LO.box(u, { equals: Ea });
                                                        return (
                                                            'real' === a &&
                                                                s.subscribe(
                                                                    (0, Ca.aD)((e) => _.set(e)),
                                                                    e,
                                                                ),
                                                            _
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const u = o(t);
                                                        if (Array.isArray(e)) {
                                                            const _ = e.reduce(
                                                                (e, t) => ((e[t] = Ca.LO.box(u[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    s.subscribe(
                                                                        (0, Ca.aD)((t) => {
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
                                                                r = Object.entries(_),
                                                                n = r.reduce(
                                                                    (e, [t, a]) => ((e[a] = Ca.LO.box(u[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    s.subscribe(
                                                                        (0, Ca.aD)((e) => {
                                                                            r.forEach(([t, a]) => {
                                                                                n[a].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            d = { mode: a, model: m, externalModel: s, cleanup: c };
                                        return {
                                            model: m,
                                            controls: 'mocks' === a && r ? r.controls(d) : t(d),
                                            externalModel: s,
                                            mode: a,
                                        };
                                    },
                                    m = (0, r.useRef)(!1),
                                    d = (0, r.useState)(_),
                                    b = d[0],
                                    g = d[1],
                                    E = (0, r.useState)(() => c(_, i, o)),
                                    C = E[0],
                                    A = E[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        m.current ? A(c(b, i, o)) : (m.current = !0);
                                    }, [o, b, i]),
                                    (0, r.useEffect)(() => {
                                        g(_);
                                    }, [_]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            C.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [C],
                                    ),
                                    n().createElement(a.Provider, { value: C }, s)
                                );
                            },
                            () => (0, r.useContext)(a),
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
                    Da = (Ba[0], Ba[1]),
                    va = 'Progress_base_2e',
                    ha = 'Progress_progress_32',
                    fa = 'Progress_status_95',
                    xa = 'Progress_statusPoints_73',
                    wa = 'Progress_points_a7',
                    Sa = 'Progress_dash_32',
                    ka = 'Progress_dash__right_fb',
                    Na = 'Progress_score_c0',
                    ya = ({ rank: e, currentScore: t, prevScore: a, divisionInfo: u, className: _ }) =>
                        Qt(e)
                            ? n().createElement(
                                  'div',
                                  { className: s()(va, _) },
                                  n().createElement(
                                      'div',
                                      { className: ha },
                                      n().createElement(yt, {
                                          size: Ze.Small,
                                          value: t - u.from,
                                          maxValue: u.to - u.from,
                                          deltaFrom: a - u.from,
                                      }),
                                  ),
                                  n().createElement(
                                      'div',
                                      { className: fa },
                                      n().createElement(ke.z, {
                                          text: R.strings.comp7.mainWidget.status(),
                                          binding: {
                                              score: n().createElement('span', { className: xa }, t),
                                              scoreToNextDivision: u.to,
                                          },
                                      }),
                                  ),
                              )
                            : n().createElement(
                                  'div',
                                  { className: wa },
                                  n().createElement('div', { className: Sa }),
                                  n().createElement('div', { className: Na }, t),
                                  n().createElement('div', { className: s()(Sa, ka) }),
                              ),
                    Ta = R.strings.comp7.qualification,
                    Wa = { hasHtmlContent: !0 },
                    La = ({ maxBattlesCount: e, children: t }) =>
                        n().createElement(
                            I.i,
                            {
                                header: Ta.conditionTooltip.header(),
                                body: (0, O.uF)(Ta.conditionTooltip.body(e), { maxBattlesCount: e }),
                                args: Wa,
                            },
                            n().createElement('div', null, t),
                        ),
                    Ra = ({ size: e, seasonName: t, className: a }) => {
                        const u = R.images.gui.maps.icons.comp7.ranks.$dyn(t).$num(e);
                        return n().createElement('div', {
                            className: s()(da, a),
                            style: { backgroundImage: `url(${u.$dyn('qualification')})`, '--imageSize': `${e}rem` },
                        });
                    },
                    Ma = 'Qualification_base_46',
                    Pa = 'Qualification_ratingCalculation_8f',
                    Ia = 'Qualification_timer_78',
                    Oa = R.strings.comp7.mainWidget,
                    $a = (0, sa.Pi)(({ seasonName: e, classNames: t }) => {
                        const a = Da(),
                            u = a.model,
                            _ = a.controls,
                            r = u.root.get().isEnabled,
                            i = u.qualification.battlesCount.get(),
                            s = u.qualification.maxBattlesCount.get(),
                            o = u.qualification.isRatingCalculation.get();
                        return n().createElement(
                            'div',
                            { className: Ma },
                            n().createElement(
                                'div',
                                { className: null == t ? void 0 : t.content },
                                n().createElement(
                                    xe.u,
                                    {
                                        contentId: R.views.lobby.comp7.tooltips.MainWidgetTooltip('resId'),
                                        isEnabled: r,
                                    },
                                    n().createElement(
                                        'div',
                                        {
                                            className: null == t ? void 0 : t.emblemContainer,
                                            onClick: r ? _.onOpenMeta : void 0,
                                            onMouseDown: r ? w.playClick : void 0,
                                            onMouseEnter: w.playHighlight,
                                        },
                                        n().createElement(Ra, {
                                            size: ma.x150,
                                            seasonName: e,
                                            className: null == t ? void 0 : t.emblem,
                                        }),
                                    ),
                                ),
                                n().createElement(
                                    La,
                                    { maxBattlesCount: s },
                                    n().createElement(na, { battlesCount: i, maxBattlesCount: s }),
                                ),
                            ),
                            o &&
                                n().createElement(
                                    I.i,
                                    { body: R.strings.comp7.qualification.ratingCalculationTooltip() },
                                    n().createElement(
                                        'div',
                                        null,
                                        n().createElement(ke.z, {
                                            text: Oa.ratingCalculation(),
                                            classMix: Pa,
                                            binding: { timer: n().createElement('div', { className: Ia }) },
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Ha = 'Warning_base_a5',
                    za = 'Warning_lighting_e0',
                    Va = 'Warning_value_1e',
                    ja = 'Warning_base__text_08',
                    Ua = 'Warning_timer_fe',
                    qa = ({ rankInactivityCount: e, warningText: t, className: a }) => {
                        const u = 0 === e;
                        return n().createElement(
                            'div',
                            { className: s()(Ha, u && ja, a) },
                            !u && n().createElement('div', { className: za }),
                            n().createElement('div', { className: Va }, u ? t : e),
                            n().createElement(
                                'div',
                                { className: Ua },
                                u && n().createElement('div', { className: za }),
                            ),
                        );
                    },
                    Ga = 'App_base_de',
                    Za = 'App_content_da',
                    Ya = 'App_emblemContainer_dc',
                    Ka = 'App_base__unavailable_e1',
                    Xa = 'App_emblem_90',
                    Qa = 'App_progression_e6',
                    Ja = 'App_warning_f8',
                    eu = R.strings.comp7.scoreTooltip,
                    tu = { content: Za, emblemContainer: Ya, emblem: Xa },
                    au =
                        ((0, sa.Pi)(() => {
                            const e = Da(),
                                t = e.model,
                                a = e.controls,
                                _ = t.root.get(),
                                i = _.hasRankInactivityWarning,
                                o = _.rankInactivityCount,
                                l = _.isEnabled,
                                c = _.rank,
                                m = _.currentScore,
                                d = _.prevScore,
                                b = _.seasonName,
                                E = t.divisionInfo.get(),
                                C = (0, r.useRef)(null),
                                A = g().mediaSize,
                                F = (0, oa.useSpring)(ga);
                            return (
                                (0, r.useEffect)(
                                    () =>
                                        ia(() => {
                                            if (null != C && C.current) {
                                                const e = C.current.getBoundingClientRect(),
                                                    t = e.width,
                                                    a = e.height;
                                                viewEnv.setInputArea(0, 0, u.O.view.pxToRem(t), u.O.view.pxToRem(a));
                                            }
                                        }),
                                    [A, i],
                                ),
                                n().createElement(
                                    oa.animated.div,
                                    { className: s()(Ga, !l && Ka), ref: C, style: F },
                                    t.qualification.isActive.get()
                                        ? n().createElement($a, { seasonName: b, classNames: tu })
                                        : n().createElement(
                                              n().Fragment,
                                              null,
                                              n().createElement(
                                                  'div',
                                                  { className: Za },
                                                  n().createElement(
                                                      xe.u,
                                                      {
                                                          contentId:
                                                              R.views.lobby.comp7.tooltips.MainWidgetTooltip('resId'),
                                                          isEnabled: l,
                                                      },
                                                      n().createElement(
                                                          'div',
                                                          {
                                                              className: Ya,
                                                              onClick: l ? a.onOpenMeta : void 0,
                                                              onMouseDown: l ? w.playClick : void 0,
                                                              onMouseEnter: w.playHighlight,
                                                          },
                                                          n().createElement(ba, {
                                                              rank: c,
                                                              size: ma.x150,
                                                              seasonName: b,
                                                              className: Xa,
                                                              division: l ? E.name : void 0,
                                                          }),
                                                      ),
                                                  ),
                                                  l &&
                                                      n().createElement(
                                                          I.i,
                                                          { header: eu.header(), body: eu.body() },
                                                          n().createElement(
                                                              'div',
                                                              null,
                                                              n().createElement(ya, {
                                                                  rank: c,
                                                                  currentScore: m,
                                                                  prevScore: d,
                                                                  divisionInfo: E,
                                                                  className: Qa,
                                                              }),
                                                          ),
                                                      ),
                                              ),
                                              l &&
                                                  i &&
                                                  n().createElement(
                                                      xe.u,
                                                      {
                                                          contentId:
                                                              R.views.lobby.comp7.tooltips.RankInactivityTooltip(
                                                                  'resId',
                                                              ),
                                                          ignoreShowDelay: !0,
                                                      },
                                                      n().createElement(
                                                          'div',
                                                          null,
                                                          n().createElement(qa, {
                                                              rankInactivityCount: o,
                                                              warningText: R.strings.comp7.mainWidget.warning(),
                                                              className: Ja,
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
                    uu = R.strings.comp7.scoreTooltip,
                    _u = ({
                        rankInactivityCount: e,
                        hasRankInactivityWarning: t,
                        rank: a,
                        currentScore: u,
                        prevScore: _,
                        divisionInfo: r,
                        size: i,
                        qualificationModel: o,
                    }) =>
                        n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(
                                'div',
                                { className: au.base },
                                o.isActive
                                    ? n().createElement(
                                          'div',
                                          { className: s()(au.battlesCounter, au[`battlesCounter__${i}`]) },
                                          n().createElement(na, {
                                              battlesCount: o.battlesCount,
                                              maxBattlesCount: o.maxBattlesCount,
                                          }),
                                      )
                                    : n().createElement(
                                          I.i,
                                          { header: uu.header(), body: uu.body() },
                                          n().createElement(ya, {
                                              rank: a,
                                              currentScore: u,
                                              prevScore: _,
                                              divisionInfo: r,
                                              className: au.progress,
                                          }),
                                      ),
                            ),
                            t &&
                                n().createElement(
                                    xe.u,
                                    {
                                        contentId: R.views.lobby.comp7.tooltips.RankInactivityTooltip('resId'),
                                        ignoreShowDelay: !0,
                                    },
                                    n().createElement(
                                        'div',
                                        null,
                                        n().createElement(qa, {
                                            rankInactivityCount: e,
                                            warningText: R.strings.mode_selector.mode.comp7.warning(),
                                            className: au.warning,
                                        }),
                                    ),
                                ),
                        ),
                    ru = ({ widget: e, className: t }) => {
                        const a = g().mediaSize < m.Medium,
                            u = e.qualificationModel.isActive;
                        return n().createElement(
                            xe.u,
                            { contentId: R.views.lobby.comp7.tooltips.MainWidgetTooltip('resId') },
                            n().createElement(
                                'div',
                                { onMouseEnter: w.playHighlight },
                                u
                                    ? n().createElement(Ra, {
                                          size: a ? ma.x64 : ma.x150,
                                          seasonName: e.seasonName,
                                          className: t,
                                      })
                                    : n().createElement(ba, {
                                          seasonName: e.seasonName,
                                          rank: e.rank,
                                          division: a ? void 0 : e.divisionInfo.name,
                                          size: a ? ma.x64 : ma.x150,
                                          className: t,
                                      }),
                            ),
                        );
                    },
                    nu = ['size', 'description', 'showWidget', 'widget'];
                function iu() {
                    return (
                        (iu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        iu.apply(this, arguments)
                    );
                }
                const su = R.strings.mode_selector.mode.comp7.widgetDescription,
                    ou = [oe.Id.B0, oe.Id.B1],
                    lu = (e) => {
                        if (e.qualificationModel.isActive) {
                            const t = e.qualificationModel.maxBattlesCount;
                            return (0, O.uF)(su.qualification(t), { maxBattlesCount: t });
                        }
                        const t = Kt(e.rank);
                        return Qt(e.rank)
                            ? (0, O.uF)(su.status(), {
                                  rank: t,
                                  division: ((a = e.divisionInfo.name), (0, O.uF)(Ut.text(), { division: Gt(a) })),
                              })
                            : t;
                        var a;
                    },
                    cu = R.images.gui.maps.icons.mode_selector.mode.comp7,
                    mu = (e) => {
                        let t = e.size,
                            a = e.description,
                            u = e.showWidget,
                            _ = e.widget,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    _ = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                                return _;
                            })(e, nu);
                        const i = _ && _.isEnabled,
                            s = u && i && ou.includes(t);
                        return n().createElement(
                            'div',
                            { className: Jt[`base__${t}`] },
                            n().createElement(
                                Ue,
                                iu(
                                    {
                                        widgetComponent:
                                            i && n().createElement(ru, { widget: _, className: Jt.widget }),
                                        showWidget: u,
                                        size: t,
                                        belowStatusComponent: s && n().createElement(_u, iu({}, _, { size: t })),
                                        description: u && i ? lu(_) : a,
                                        classNames: { belowStatus: Jt.belowStatus },
                                    },
                                    r,
                                    { resourceFolderGetter: () => (_ ? cu.$dyn(_.seasonName) : null) },
                                ),
                            ),
                        );
                    };
                var du = a(9459);
                let bu, gu;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(bu || (bu = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(gu || (gu = {}));
                const Eu = 'Countdown_base_fe',
                    Cu = 'Countdown_icon_8b',
                    Au = 'Countdown_description_8d',
                    Fu = (e) => e.toString().padStart(2, '0'),
                    pu = (e, t) => {
                        switch (t) {
                            case gu.Description:
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
                            case gu.Short:
                                return `${Fu(e.minutes)}:${Fu(e.seconds)}`;
                            case gu.Long:
                                return `${Fu(e.hours)}:${Fu(e.minutes)}:${Fu(e.seconds)}`;
                            case gu.Extended:
                                return `${(0, O.WU)(R.strings.common.duration.days(), { days: e.days })} | ${Fu(e.hours)}:${Fu(e.minutes)}:${Fu(e.seconds)}`;
                        }
                    },
                    Bu = R.images.gui.maps.icons.components.countdown,
                    Du = (e, t) => {
                        const a = 2 === t ? Bu.big : Bu;
                        switch (e) {
                            case bu.Timer:
                                return a.clock();
                            case bu.Countdown:
                                return a.hourglass();
                            case bu.Cooldown:
                                return a.lock();
                        }
                    },
                    vu = (0, r.memo)(
                        ({
                            duration: e,
                            icon: t = bu.Timer,
                            style: a = gu.Description,
                            onTimeReached: _,
                            className: i = '',
                            classNames: o = {},
                        }) => {
                            const l = a !== gu.Description ? 1 : void 0,
                                c = ue(e, l),
                                m = (() => {
                                    const e = (0, r.useState)(u.O.view.getScale()),
                                        t = e[0],
                                        a = e[1];
                                    return (
                                        (0, r.useEffect)(() => {
                                            const e = () => {
                                                a(u.O.view.getScale());
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
                            const d = pu(
                                (function (e = 0) {
                                    let t = e;
                                    const a = Math.trunc(t / j);
                                    t -= a * j;
                                    const u = Math.trunc(t / V);
                                    t -= u * V;
                                    const _ = Math.trunc(t / z);
                                    return (t -= _ * z), { days: a, hours: u, minutes: _, seconds: t };
                                })(c),
                                a,
                            );
                            return n().createElement(
                                'div',
                                { className: s()(Eu, i) },
                                t !== bu.None &&
                                    n().createElement('div', {
                                        className: s()(Cu, o.icon),
                                        style: { backgroundImage: `url('${Du(t, m)}')` },
                                    }),
                                n().createElement('div', { className: s()(Au, o.text) }, d),
                            );
                        },
                    );
                let hu;
                !(function (e) {
                    (e.DISABLED = 'disabled'), (e.ACTIVE = 'active'), (e.RESETTABLE = 'resettable');
                })(hu || (hu = {}));
                const fu = {
                    base: 'Progression_base_4f',
                    title: 'Progression_title_d7',
                    base__resettable: 'Progression_base__resettable_e1',
                    base__disabled: 'Progression_base__disabled_bf',
                    contentWrapper: 'Progression_contentWrapper_24',
                    progress: 'Progression_progress_4f',
                    progressValue: 'Progression_progressValue_1a',
                    countdown: 'Progression_countdown_5b',
                };
                var xu = a(9762),
                    wu = a(6457);
                let Su, ku;
                !(function (e) {
                    (e.Init = 'init'),
                        (e.Active = 'active'),
                        (e.NonActive = 'nonActive'),
                        (e.UpdateState = 'updateState');
                })(Su || (Su = {})),
                    (function (e) {
                        (e.CheckDataUpdate = 'checkDataUpdate'),
                            (e.UpdateStageData = 'updateStageData'),
                            (e.SwitchState = 'switchState');
                    })(ku || (ku = {}));
                const Nu = (e) => e === hu.ACTIVE,
                    yu = (e) => Nu(e.status),
                    Tu = (e) => !Nu(e.status),
                    Wu = (e, t) => e.status !== t.status && Lu(e, t),
                    Lu = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints === e.currentPoints &&
                        t.maximumPoints === e.maximumPoints &&
                        0 === e.earnedPoints,
                    Ru = (e, t) =>
                        Nu(t.status) &&
                        ((1 === t.stage && 0 === t.currentPoints) ||
                            (t.stage === e.stage && e.maximumPoints !== t.maximumPoints)),
                    Mu = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints === e.currentPoints &&
                        t.maximumPoints === e.maximumPoints &&
                        0 !== e.earnedPoints,
                    Pu = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints !== e.currentPoints &&
                        t.maximumPoints === e.maximumPoints,
                    Iu = (e, t) => t.stage > e.stage && e.currentPoints < e.maximumPoints,
                    Ou = (e, t) => t.stage > e.stage && e.currentPoints === e.maximumPoints,
                    $u = (e, t) => t.stage < e.stage && e.currentPoints > 0,
                    Hu = (e, t) => t.stage < e.stage && 0 === e.currentPoints,
                    zu = (e, t) => e.status !== t.status && Nu(t.status),
                    Vu = (e) => {
                        e.isSoundEnabled && 0 !== e.earnedPoints && x('ev_fep_progress_bar');
                    },
                    ju = R.strings.fun_random.modes,
                    Uu = R.strings.fun_random.modeSelector.progression,
                    qu = {
                        freezed: !1,
                        withStack: !1,
                        type: Ye.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    Gu = ({
                        status: e,
                        currentStage: t,
                        resetTimer: a,
                        stageCurrentPoints: u,
                        stageMaximumPoints: _,
                        conditionText: i,
                        isContentVisible: o,
                        assetsPointer: l,
                    }) => {
                        const c = n().useMemo(() => {
                                return (
                                    (a = 'fun-card-fsm'),
                                    (r = {
                                        status: e,
                                        stage: t,
                                        currentPoints: u,
                                        maximumPoints: _,
                                        earnedPoints: 0,
                                        isSoundEnabled: o,
                                    }),
                                    (n = 300),
                                    (0, xu.C)(
                                        {
                                            preserveActionOrder: !0,
                                            id: a,
                                            initial: Su.Init,
                                            context: r,
                                            states: {
                                                [Su.Init]: { always: { target: Su.UpdateState } },
                                                [Su.UpdateState]: {
                                                    always: [
                                                        { target: Su.Active, cond: yu },
                                                        { target: Su.NonActive, cond: Tu },
                                                    ],
                                                },
                                                [Su.Active]: {
                                                    on: {
                                                        [ku.CheckDataUpdate]: [
                                                            {
                                                                target: Su.Active,
                                                                actions: [
                                                                    (0, wu.lW)((e, t) => ({
                                                                        type: ku.SwitchState,
                                                                        status: t.status,
                                                                    })),
                                                                ],
                                                                cond: Wu,
                                                            },
                                                            { target: Su.Active, cond: Lu },
                                                            {
                                                                target: Su.UpdateState,
                                                                actions: [
                                                                    (0, wu.f0)({
                                                                        status: (e, t) => t.status,
                                                                        stage: (e, t) => t.stage,
                                                                        currentPoints: (e, t) => t.currentPoints,
                                                                        maximumPoints: (e, t) => t.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    }),
                                                                ],
                                                                cond: Ru,
                                                            },
                                                            {
                                                                target: Su.Active,
                                                                actions: [
                                                                    (0, wu.lW)((e) => ({
                                                                        type: ku.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.maximumPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: e.maximumPoints - e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: Iu,
                                                            },
                                                            {
                                                                target: Su.Active,
                                                                actions: [
                                                                    (0, wu.lW)((e, t) => ({
                                                                        type: ku.UpdateStageData,
                                                                        stage: t.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: t.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    (0, wu.lW)(
                                                                        (e, t) => ({
                                                                            type: ku.UpdateStageData,
                                                                            stage: t.stage,
                                                                            currentPoints: t.currentPoints,
                                                                            maximumPoints: t.maximumPoints,
                                                                            earnedPoints: t.currentPoints,
                                                                        }),
                                                                        { delay: n },
                                                                    ),
                                                                ],
                                                                cond: Ou,
                                                            },
                                                            {
                                                                target: Su.Active,
                                                                actions: [
                                                                    (0, wu.lW)((e, t) => ({
                                                                        type: ku.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: t.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: t.currentPoints - e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: Pu,
                                                            },
                                                            {
                                                                target: Su.Active,
                                                                actions: [
                                                                    (0, wu.lW)((e) => ({
                                                                        type: ku.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    (0, wu.lW)((e, t) => ({
                                                                        type: ku.SwitchState,
                                                                        status: t.status,
                                                                    })),
                                                                ],
                                                                cond: Mu,
                                                            },
                                                            {
                                                                target: Su.Active,
                                                                actions: [
                                                                    (0, wu.lW)((e) => ({
                                                                        type: ku.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: -e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: $u,
                                                            },
                                                            {
                                                                target: Su.Active,
                                                                actions: [
                                                                    (0, wu.lW)((e, t) => ({
                                                                        type: ku.UpdateStageData,
                                                                        stage: t.stage,
                                                                        currentPoints: t.currentPoints,
                                                                        maximumPoints: t.maximumPoints,
                                                                        earnedPoints: t.currentPoints - t.maximumPoints,
                                                                    })),
                                                                ],
                                                                cond: Hu,
                                                            },
                                                        ],
                                                        [ku.UpdateStageData]: {
                                                            target: Su.Active,
                                                            actions: [
                                                                (0, wu.f0)({
                                                                    stage: (e, t) => t.stage,
                                                                    currentPoints: (e, t) => t.currentPoints,
                                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                                    earnedPoints: (e, t) => t.earnedPoints,
                                                                }),
                                                                Vu,
                                                            ],
                                                        },
                                                        [ku.SwitchState]: {
                                                            target: Su.UpdateState,
                                                            actions: (0, wu.f0)({ status: (e, t) => t.status }),
                                                        },
                                                    },
                                                },
                                                [Su.NonActive]: {
                                                    on: {
                                                        [ku.CheckDataUpdate]: {
                                                            target: Su.UpdateState,
                                                            actions: [
                                                                (0, wu.f0)({
                                                                    status: (e, t) => t.status,
                                                                    stage: (e, t) => t.stage,
                                                                    currentPoints: (e, t) => t.currentPoints,
                                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                                    earnedPoints: 0,
                                                                }),
                                                            ],
                                                            cond: zu,
                                                        },
                                                        [ku.SwitchState]: {
                                                            target: Su.UpdateState,
                                                            actions: (0, wu.f0)({ status: (e, t) => t.status }),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            guards: {
                                                hasActiveStatus: yu,
                                                hasNonActiveStatus: Tu,
                                                isStatusUpdate: Wu,
                                                isNoUpdate: Lu,
                                                isTaskSwitchingUpdate: Ru,
                                                isUpdateCurrentStageWithZeroEarnPoints: Mu,
                                                isUpdateCurrentStageWithCurrentPoints: Pu,
                                                isUpdateToNextStageWithoutFillMax: Ou,
                                                isUpdateToNextStageWithFillMax: Iu,
                                                isUpdateToPrevStageWithReset: $u,
                                                isUpdateToPrevStageWithoutReset: Hu,
                                                isUpdateWithActiveSwitch: zu,
                                            },
                                        },
                                    )
                                );
                                var a, r, n;
                            }, []),
                            m = (0, du.eO)(c),
                            d = m[0],
                            b = m[1],
                            g = (0, r.useMemo)(() => {
                                var e;
                                return (null != (e = ju.$dyn(l)) ? e : ju.undefined).mode_selector.progression;
                            }, [l]),
                            E = d.context.status === hu.ACTIVE,
                            C = d.context.status === hu.RESETTABLE,
                            A = Uu.$dyn(d.context.currentPoints > 0 ? 'steps' : 'stepsNoProgress'),
                            F = g.resettable(),
                            p = C ? F : i;
                        (0, r.useEffect)(() => {
                            b({ type: ku.CheckDataUpdate, status: e, stage: t, currentPoints: u, maximumPoints: _ });
                        }, [e, u, _, t, b]);
                        const B = (0, r.useCallback)(() => {
                            b({ type: ku.CheckDataUpdate, status: e, stage: t, currentPoints: u, maximumPoints: _ });
                        }, [u, _, t, e, b]);
                        return n().createElement(
                            xe.u,
                            {
                                contentId: R.views.fun_random.lobby.tooltips.FunRandomProgressionTooltipView('resId'),
                                isEnabled: E,
                            },
                            n().createElement(
                                'div',
                                { className: s()(fu.base, fu[`base__${d.context.status}`]) },
                                n().createElement('div', { className: fu.title }, p),
                                n().createElement(
                                    'div',
                                    { className: fu.contentWrapper },
                                    n().createElement(
                                        'div',
                                        { className: fu.progress },
                                        n().createElement(
                                            'div',
                                            { className: fu.progressValue },
                                            n().createElement(Mt, {
                                                text: A,
                                                binding: {
                                                    done: d.context.currentPoints,
                                                    total: d.context.maximumPoints,
                                                },
                                            }),
                                        ),
                                        n().createElement(yt, {
                                            size: Ze.Small,
                                            value: d.context.currentPoints,
                                            maxValue: d.context.maximumPoints,
                                            animationSettings: qu,
                                            deltaFrom: d.context.currentPoints - d.context.earnedPoints,
                                            onEndAnimation: B,
                                        }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: fu.countdown },
                                        n().createElement(vu, { duration: a, style: gu.Description }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Zu = {
                        widgetOverlay: 'FunRandomCard_widgetOverlay_f2',
                        subtitle: 'FunRandomCard_subtitle_d0',
                        belowStatus: 'FunRandomCard_belowStatus_03',
                        belowStatus__hidden: 'FunRandomCard_belowStatus__hidden_ad',
                    },
                    Yu = ['size', 'showWidget', 'widget', 'isContentVisible', 'resourcesFolderName'];
                function Ku() {
                    return (
                        (Ku =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Ku.apply(this, arguments)
                    );
                }
                const Xu = R.images.fun_random.gui.maps.icons.feature.asset_packs.modes,
                    Qu = (e) => {
                        let t = e.size,
                            a = e.showWidget,
                            u = e.widget,
                            _ = e.isContentVisible,
                            r = e.resourcesFolderName,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    _ = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                                return _;
                            })(e, Yu);
                        const o = t === oe.Id.B1 && a;
                        return n().createElement(
                            'div',
                            { className: Zu[`base__${t}`] },
                            n().createElement(
                                Ue,
                                Ku(
                                    {
                                        showWidget: a,
                                        size: t,
                                        belowStatusComponent:
                                            o &&
                                            n().createElement(Gu, Ku({}, u, { isContentVisible: _, assetsPointer: r })),
                                        classNames: {
                                            belowStatus: s()(Zu.belowStatus, !o && Zu.belowStatus__hidden),
                                            subtitle: Zu.subtitle,
                                        },
                                        resourcesFolderName: r,
                                    },
                                    i,
                                    {
                                        resourceFolderGetter: (e) => {
                                            var t;
                                            return (null != (t = Xu.$dyn(e)) ? t : Xu.undefined).mode_selector;
                                        },
                                    },
                                ),
                            ),
                        );
                    },
                    Ju = (e) => {
                        (0, r.useEffect)(e, []);
                    },
                    e_ = {
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
                var t_;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(t_ || (t_ = {}));
                const a_ = ['__left', '__right', '__top', '__bottom'],
                    u_ =
                        ((0, r.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: a, customStyles: _ = {} }, i) => {
                                const o = (0, r.useRef)(null),
                                    l = (0, r.useRef)(null),
                                    c = (0, r.useRef)(null),
                                    m = (0, r.useState)(window.decorator && window.decorator.directionType),
                                    d = m[0],
                                    b = m[1],
                                    g = (0, r.useCallback)(() => {
                                        w.playClick(), u.O.view.sendEvent.close();
                                    }, []),
                                    E = (0, r.useCallback)(() => {
                                        w.playHighlight();
                                    }, []),
                                    C = s()(e_.arrow, e_[`arrow${a_[d]}`]);
                                Ju(
                                    () => (
                                        u.O.client.events.mouse.enableOutside(),
                                        u.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (a ? a() : u.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const A = (0, r.useCallback)(
                                        (e) => {
                                            let t = e.target;
                                            do {
                                                if (t === o.current || t === c.current) return;
                                                t = t.parentNode;
                                            } while (t);
                                            const _ = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = u.O.client.getMouseGlobalPosition(),
                                                    t = ![_.boundX, _.boundY, _.boundWidth, _.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    a =
                                                        e.x < _.boundX ||
                                                        e.x > _.boundX + _.boundWidth ||
                                                        e.y > _.boundY + _.boundHeight ||
                                                        e.y < _.boundY;
                                                if (t && !a) return;
                                            }
                                            a ? a() : u.O.view.sendEvent.close('popover');
                                        },
                                        [o, c, a],
                                    ),
                                    F = (0, r.useCallback)(
                                        () => (
                                            u.O.view.freezeTextureBeforeResize(),
                                            ia(() => {
                                                if (l.current) {
                                                    const e = l.current.scrollWidth,
                                                        t = l.current.scrollHeight;
                                                    u.O.view.resize(e, t), b(window.decorator.directionType);
                                                }
                                            })
                                        ),
                                        [],
                                    );
                                return (
                                    (0, r.useImperativeHandle)(i, () => ({ updateSize: F })),
                                    Ju(() => {
                                        u.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, r.useEffect)(() => {
                                        document.addEventListener('mousedown', A, { capture: !0 });
                                        const e = ((e) => {
                                            let t = !1;
                                            return {
                                                promise: new Promise((a, u) => {
                                                    e.then((e) => !t && a(e)).catch((e) => !t && u(e));
                                                }),
                                                cancel() {
                                                    t = !0;
                                                },
                                            };
                                        })((0, $.Eu)());
                                        return (
                                            !t && e.promise.then(() => F()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', A);
                                            }
                                        );
                                    }, [F, A, t]),
                                    n().createElement(
                                        'div',
                                        { className: e_.base, ref: l },
                                        n().createElement(
                                            'div',
                                            { className: e_.decorator },
                                            n().createElement(
                                                'div',
                                                { className: e_.content, ref: o },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    n().createElement(
                                                        I.i,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        n().createElement('div', {
                                                            className: e_.closeBtn,
                                                            onClick: g,
                                                            onMouseEnter: E,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            n().createElement('div', { className: C, style: _.arrow }),
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
                function __() {
                    return (
                        (__ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        __.apply(this, arguments)
                    );
                }
                const r_ = (e) => {
                        let t = e.contentId,
                            a = e.decoratorId,
                            u = e.direction,
                            _ = void 0 === u ? t_.Top : u,
                            i = e.targetId,
                            s = e.args,
                            o = e.onClick,
                            l = e.children,
                            c = e.isEnabled,
                            m = void 0 === c || c,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    _ = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                                return _;
                            })(e, u_);
                        const b = (0, r.useRef)(null),
                            g = (0, r.useCallback)(() => {
                                if ((0, $.wU)()) return (0, $.SW)();
                                b.current && (0, $.P3)(t, _, b.current, a, i, s);
                            }, [t, _, s, a, i]);
                        return n().createElement(
                            'div',
                            __(
                                {
                                    ref: b,
                                    onClick:
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
                    n_ = 'ToggleButton_base_d9',
                    i_ = 'ToggleButton_content_ee',
                    s_ = 'ToggleButton_overlay_d9',
                    o_ = 'ToggleButton_base__active_6e',
                    l_ = 'ToggleButton_indicator_c5',
                    c_ = ['active', 'className', 'children', 'size', 'showIndicator'];
                function m_() {
                    return (
                        (m_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        m_.apply(this, arguments)
                    );
                }
                const d_ = (e) => {
                        let t = e.active,
                            a = e.className,
                            u = e.children,
                            _ = e.size,
                            r = void 0 === _ ? N.small : _,
                            i = e.showIndicator,
                            o = void 0 === i || i,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    _ = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                                return _;
                            })(e, c_);
                        return n().createElement(
                            'div',
                            { className: s()(n_, a, t && o_) },
                            n().createElement(
                                T,
                                m_({ type: 'secondary', size: r }, l),
                                n().createElement('div', { className: i_ }, u),
                            ),
                            o && n().createElement('div', { className: l_ }),
                            n().createElement('div', { className: s_ }),
                        );
                    },
                    b_ =
                        ((0, r.memo)(d_),
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
                    g_ = R.strings.mode_selector.mode.random,
                    E_ = (0, r.memo)(
                        ({
                            contentId: e,
                            handleSettingsClick: t,
                            body: a,
                            showBigSettingsButton: u,
                            isShowButton: _,
                            isSettingsActive: r,
                            withBubble: i,
                        }) => {
                            const o = (0, se.Z)(['base', 'toggle', 'base__bigButton'], b_);
                            return n().createElement(
                                'div',
                                { className: s()(o.base, u && o.base__bigButton, _ && b_.base__anim), onClick: t },
                                n().createElement(
                                    r_,
                                    { contentId: e, direction: u ? t_.Top : t_.Right },
                                    n().createElement(
                                        I.i,
                                        { body: a, isEnabled: _ },
                                        n().createElement(
                                            d_,
                                            {
                                                type: k.ghost,
                                                size: N.medium,
                                                active: r,
                                                showIndicator: !1,
                                                mixClass: s()(o.toggle, !u && b_.toggle__shortBtn),
                                            },
                                            n().createElement(
                                                'div',
                                                { className: b_.settingsLabel },
                                                n().createElement('div', {
                                                    className: s()(b_.icon, !u && b_.icon__shortBtn),
                                                }),
                                                u && g_.setup(),
                                            ),
                                        ),
                                    ),
                                ),
                                Boolean(i) && n().createElement('div', { className: b_.bubble }),
                            );
                        },
                    ),
                    C_ = ['isSelected', 'onHoverChanged', 'isSettingsActive', 'withSettingsNotification'];
                function A_() {
                    return (
                        (A_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        A_.apply(this, arguments)
                    );
                }
                const F_ = (e) => {
                    let t = e.isSelected,
                        a = e.onHoverChanged,
                        u = e.isSettingsActive,
                        _ = e.withSettingsNotification,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                _ = {},
                                r = Object.keys(e);
                            for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                            return _;
                        })(e, C_);
                    const s = (0, r.useCallback)((e) => {
                            e.stopPropagation();
                        }, []),
                        o = (0, Ce.B)(a),
                        l = o[0],
                        c = o[1],
                        m = [oe.Id.B0, oe.Id.B1].includes(i.size),
                        d = l || t || u;
                    return n().createElement(
                        Ue,
                        A_(
                            {
                                id: 'mode-selector-random-battle',
                                isSelected: t,
                                onHoverChanged: c,
                                belowStatusComponent: n().createElement(E_, {
                                    contentId: R.views.lobby.mode_selector.popovers.RandomBattlePopover('resId'),
                                    handleSettingsClick: s,
                                    body: R.strings.tooltips.mode_selector.popover.body(),
                                    showBigSettingsButton: m,
                                    isShowButton: d,
                                    isSettingsActive: u,
                                    withBubble: _,
                                }),
                            },
                            i,
                        ),
                    );
                };
                function p_() {
                    return (
                        (p_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        p_.apply(this, arguments)
                    );
                }
                const B_ = [oe.Id.B5, oe.Id.B6],
                    D_ = [oe.Id.B4, oe.Id.B5, oe.Id.B6],
                    v_ = [],
                    h_ = (e) => {
                        let t = p_({}, e);
                        return n().createElement(
                            Ue,
                            p_(
                                {
                                    calendarTooltip: ce.D3,
                                    forceShowIcon: t.showWidget && B_.includes(t.size),
                                    hideStatus: t.showWidget && D_.includes(t.size),
                                    noWidgetSizes: v_,
                                },
                                t,
                            ),
                        );
                    };
                let f_;
                !(function (e) {
                    (e.LowRisk = 'lowRisk'), (e.MediumRisk = 'mediumRisk'), (e.HighRisk = 'highRisk');
                })(f_ || (f_ = {}));
                const x_ = {
                        base: 'Progression_base_5f',
                        base__extraSmall: 'Progression_base__extraSmall_77',
                        base__small: 'Progression_base__small_a4',
                        base__medium: 'Progression_base__medium_8d',
                        base__extraLarge: 'Progression_base__extraLarge_28',
                        base__large: 'Progression_base__large_09',
                        contentWrapper: 'Progression_contentWrapper_ed',
                        progress: 'Progression_progress_85',
                        progressValue: 'Progression_progressValue_c5',
                        currentAmount: 'Progression_currentAmount_e9',
                        textCollection: 'Progression_textCollection_7c',
                        textCollection__extraSmall: 'Progression_textCollection__extraSmall_2e',
                        textCollection__small: 'Progression_textCollection__small_e4',
                        textCollection__medium: 'Progression_textCollection__medium_b8',
                        textCollection__extraLarge: 'Progression_textCollection__extraLarge_74',
                        textCollection__large: 'Progression_textCollection__large_00',
                    },
                    w_ = ({ totalCount: e, currentProgress: t, size: a }) => {
                        const u = a === oe.Id.B1,
                            _ = (0, se.Z)(['base', 'textCollection', 'progress'], x_),
                            i = t && e ? (100 * t) / e : 0,
                            s = (0, r.useMemo)(
                                () => ({
                                    current: n().createElement('span', { className: x_.currentAmount }, t),
                                    total: e,
                                }),
                                [t, e],
                            );
                        return n().createElement(
                            'div',
                            { className: _.base },
                            n().createElement(
                                'div',
                                { className: x_.contentWrapper },
                                u &&
                                    n().createElement(
                                        'div',
                                        { className: _.progress },
                                        n().createElement(
                                            'div',
                                            { className: x_.progressValue },
                                            n().createElement(ke.z, {
                                                classMix: _.textCollection,
                                                text: R.strings.mode_selector.mode.cosmic_event.progression(),
                                                binding: s,
                                            }),
                                        ),
                                        n().createElement(yt, { size: Ze.Small, value: i, theme: xt }),
                                    ),
                            ),
                        );
                    },
                    S_ = {
                        base: 'Suspended_base_26',
                        base__b1: 'Suspended_base__b1_f0',
                        base__b1__extraSmall: 'Suspended_base__b1__extraSmall_74',
                        base__b1__small: 'Suspended_base__b1__small_fe',
                        base__b1__medium: 'Suspended_base__b1__medium_ed',
                        base__b1__extraLarge: 'Suspended_base__b1__extraLarge_2f',
                        base__b1__large: 'Suspended_base__b1__large_73',
                        base__b2: 'Suspended_base__b2_40',
                        base__b2__medium: 'Suspended_base__b2__medium_18',
                        base__b2__extraLarge: 'Suspended_base__b2__extraLarge_d5',
                        base__b2__large: 'Suspended_base__b2__large_6f',
                        textContainer: 'Suspended_textContainer_99',
                        textContainer__extraSmall: 'Suspended_textContainer__extraSmall_15',
                        textContainer__small: 'Suspended_textContainer__small_00',
                        textContainer__medium: 'Suspended_textContainer__medium_62',
                        textContainer__extraLarge: 'Suspended_textContainer__extraLarge_40',
                        textContainer__large: 'Suspended_textContainer__large_42',
                        textContainer__b2: 'Suspended_textContainer__b2_00',
                        textContainer__b2__extraSmall: 'Suspended_textContainer__b2__extraSmall_d6',
                        textContainer__b2__small: 'Suspended_textContainer__b2__small_d1',
                        textContainer__b2__medium: 'Suspended_textContainer__b2__medium_11',
                        textContainer__b2__extraLarge: 'Suspended_textContainer__b2__extraLarge_64',
                        textContainer__b2__large: 'Suspended_textContainer__b2__large_8f',
                        locked: 'Suspended_locked_de',
                        locked__extraSmall: 'Suspended_locked__extraSmall_8d',
                        locked__small: 'Suspended_locked__small_ad',
                        locked__medium: 'Suspended_locked__medium_0b',
                        locked__extraLarge: 'Suspended_locked__extraLarge_be',
                        locked__large: 'Suspended_locked__large_19',
                        lockBase: 'Suspended_lockBase_38',
                        lockBase__b1__extraSmall: 'Suspended_lockBase__b1__extraSmall_17',
                        lockBase__b1__small: 'Suspended_lockBase__b1__small_88',
                        lockBase__b1__medium: 'Suspended_lockBase__b1__medium_9c',
                        lockBase__b1__extraLarge: 'Suspended_lockBase__b1__extraLarge_39',
                        lockBase__b1__large: 'Suspended_lockBase__b1__large_34',
                        lockBase__b2: 'Suspended_lockBase__b2_78',
                        lockBase__b2__extraSmall: 'Suspended_lockBase__b2__extraSmall_fd',
                        lockBase__b2__small: 'Suspended_lockBase__b2__small_7a',
                        lockBase__b2__medium: 'Suspended_lockBase__b2__medium_04',
                        lockBase__b2__extraLarge: 'Suspended_lockBase__b2__extraLarge_32',
                        lockBase__b2__large: 'Suspended_lockBase__b2__large_2a',
                        textContent: 'Suspended_textContent_93',
                        textContent__extraSmall: 'Suspended_textContent__extraSmall_77',
                        textContent__small: 'Suspended_textContent__small_49',
                        textContent__medium: 'Suspended_textContent__medium_18',
                        textContent__extraLarge: 'Suspended_textContent__extraLarge_c2',
                        textContent__large: 'Suspended_textContent__large_0e',
                        primeTimeValue: 'Suspended_primeTimeValue_79',
                        primeTimeValue__extraSmall: 'Suspended_primeTimeValue__extraSmall_d5',
                        primeTimeValue__small: 'Suspended_primeTimeValue__small_93',
                        primeTimeValue__medium: 'Suspended_primeTimeValue__medium_a8',
                        primeTimeValue__extraLarge: 'Suspended_primeTimeValue__extraLarge_0f',
                        primeTimeValue__large: 'Suspended_primeTimeValue__large_81',
                    },
                    k_ = ({ size: e }) => {
                        const t = (0, se.Z)(
                                [
                                    ...(0, oe.Hp)('base', 'textContainer', 'lockBase'),
                                    'textContent',
                                    'primeTimeValue',
                                    'locked',
                                ],
                                S_,
                            ),
                            a = s()(t.base, t[`base__${e}`]),
                            u = s()(t.textContainer, t[`textContainer__${e}`]),
                            _ = s()(t.lockBase, t[`lockBase__${e}`]);
                        return n().createElement(
                            'div',
                            { className: a },
                            n().createElement(
                                'div',
                                { className: u },
                                n().createElement(
                                    'div',
                                    { className: t.textContent },
                                    R.strings.mode_selector.mode.cosmic_event.notStarted(),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: _ },
                                n().createElement('div', { className: t.locked }),
                                n().createElement(ke.z, {
                                    classMix: t.primeTimeValue,
                                    text: R.strings.mode_selector.mode.cosmic_event.primeTime(),
                                }),
                            ),
                        );
                    },
                    N_ = 'CosmicCard_performance_a2',
                    y_ = 'CosmicCard_performance__red_e7',
                    T_ = 'CosmicCard_performance_icon_b6',
                    W_ = ['showWidget', 'size', 'widget', 'isSuspended', 'performanceRisk'];
                function L_() {
                    return (
                        (L_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        L_.apply(this, arguments)
                    );
                }
                const R_ = (0, r.memo)((e) => {
                        let t = e.showWidget,
                            a = e.size,
                            u = e.widget,
                            _ = e.isSuspended,
                            r = e.performanceRisk,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    _ = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                                return _;
                            })(e, W_);
                        const o = a === oe.Id.B1 && t,
                            l = !!_ || t,
                            c = n().createElement(
                                Ue,
                                L_(
                                    {
                                        showWidget: l,
                                        size: a,
                                        isNotStarted: _,
                                        belowStatusComponent: n().createElement(
                                            n().Fragment,
                                            null,
                                            (!_ && o && n().createElement(w_, L_({}, u, { size: a }))) ||
                                                (_ && n().createElement(k_, { size: a })),
                                            r === f_.MediumRisk &&
                                                n().createElement(
                                                    I.i,
                                                    {
                                                        header: R.strings.mode_selector.mode.cosmic_event.performance.reduced.title(),
                                                        body: R.strings.mode_selector.mode.cosmic_event.performance.reduced.text(),
                                                    },
                                                    n().createElement(
                                                        'div',
                                                        null,
                                                        n().createElement(ke.z, {
                                                            classMix: N_,
                                                            text: `%(icon)s ${R.strings.mode_selector.mode.cosmic_event.performance.reduced.title()}`,
                                                            binding: {
                                                                icon: n().createElement('img', {
                                                                    className: T_,
                                                                    src: R.images.gui.maps.icons.library.alertIcon(),
                                                                }),
                                                            },
                                                        }),
                                                    ),
                                                ),
                                            r === f_.HighRisk &&
                                                n().createElement(
                                                    I.i,
                                                    {
                                                        header: R.strings.mode_selector.mode.cosmic_event.performance.low.title(),
                                                        body: R.strings.mode_selector.mode.cosmic_event.performance.low.text(),
                                                    },
                                                    n().createElement(
                                                        'div',
                                                        null,
                                                        n().createElement(ke.z, {
                                                            classMix: s()(N_, y_),
                                                            text: `%(icon)s ${R.strings.mode_selector.mode.cosmic_event.performance.low.title()}`,
                                                            binding: {
                                                                icon: n().createElement('img', {
                                                                    className: T_,
                                                                    src: R.images.gui.maps.icons.library.CancelIcon_1(),
                                                                }),
                                                            },
                                                        }),
                                                    ),
                                                ),
                                        ),
                                    },
                                    i,
                                ),
                            );
                        return _
                            ? n().createElement(
                                  I.i,
                                  {
                                      body: R.strings.cosmic_messenger.serviceChannelMessages.cosmicEventSuspendedMessage.body(),
                                  },
                                  n().createElement('div', null, c),
                              )
                            : c;
                    }),
                    M_ = ['type', 'widget', 'isContentVisible'];
                function P_() {
                    return (
                        (P_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        P_.apply(this, arguments)
                    );
                }
                const I_ = [oe.Id.B6],
                    O_ = (e) => {
                        let t = e.type,
                            a = e.widget,
                            u = e.isContentVisible,
                            _ = void 0 === u || u,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    _ = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) (a = r[u]), t.indexOf(a) >= 0 || (_[a] = e[a]);
                                return _;
                            })(e, M_);
                        const i = r.size;
                        switch (t) {
                            case 1:
                                return n().createElement(F_, r);
                            case 2: {
                                const e = a && a.isEnabled && n().createElement(be.n, P_({ size: i }, a));
                                return n().createElement(h_, P_({ widgetComponent: e }, r));
                            }
                            case 3:
                                return n().createElement(Ue, P_({ calendarTooltip: ce.zD }, r));
                            case 4: {
                                const e =
                                    a &&
                                    a.isEnabled &&
                                    n().createElement(de.Gg, P_({ size: i, conditions: r.conditions }, a));
                                return n().createElement(
                                    Ue,
                                    P_(
                                        {
                                            calendarTooltip: ce.TR,
                                            widgetComponent: e,
                                            noWidgetSizes: I_,
                                            divider: '\n',
                                        },
                                        r,
                                    ),
                                );
                            }
                            case 5: {
                                const e = a,
                                    t = e.status,
                                    u = e.stageCurrentPoints,
                                    _ = e.stageMaximumPoints,
                                    s =
                                        a &&
                                        t === le.ACTIVE &&
                                        n().createElement(me.$, { size: i, isCompletedProgression: u === _ });
                                return n().createElement(zt, P_({ widgetComponent: s, widget: a, divider: '\n' }, r));
                            }
                            case 6:
                                return n().createElement(
                                    Qu,
                                    P_({ calendarTooltip: ce.$b, widget: a, isContentVisible: _, divider: '\n' }, r),
                                );
                            case 7:
                                return n().createElement(mu, P_({ calendarTooltip: ce.hg, widget: a }, r));
                            case 8:
                                return n().createElement(R_, P_({ widget: a }, r));
                            default:
                                return n().createElement(Ue, r);
                        }
                    },
                    $_ = 'Column_base_41';
                function H_() {
                    return (
                        (H_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        H_.apply(this, arguments)
                    );
                }
                const z_ = ({ items: e, showWidgets: t, canBeWide: a = !1, isContentVisible: u = !0 }) => {
                        const _ = (0, oe.SH)(e.length, a);
                        return n().createElement(
                            'div',
                            { className: $_ },
                            e
                                .sort((e, t) => e.priority - t.priority)
                                .map((e) =>
                                    n().createElement(
                                        O_,
                                        H_({ key: `item_${e.index}` }, e, {
                                            size: _,
                                            showWidget: t,
                                            isContentVisible: u,
                                        }),
                                    ),
                                ),
                        );
                    },
                    V_ = {
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
                    j_ = () => {
                        const e = ae(),
                            t = e.isMapSelectionVisible,
                            a = e.isMapSelectionEnabled,
                            u = e.onShowMapSelectionClicked,
                            _ = e.onShowWidgetsClicked,
                            i = e.areWidgetsVisible,
                            o = e.isContentVisible,
                            l = ae('model.cardList'),
                            c = (0, r.useState)(!1),
                            m = c[0],
                            d = c[1],
                            b = (0, r.useRef)(!0),
                            g = i === !m,
                            E = (0, se.Z)(['closeButton', 'title', 'items', 'selectMapTitle'], V_),
                            C = {};
                        l.forEach(({ value: e }) => {
                            const t = e.column;
                            t in C || (C[t] = new Array()), C[t].push(e);
                        });
                        const A = Object.keys(C)
                                .sort((e, t) => parseInt(e) - parseInt(t))
                                .map((e) => C[e]),
                            F = (0, r.useCallback)(() => {
                                (0, $.Sy)();
                            }, []),
                            p = (0, r.useCallback)(() => {
                                u();
                            }, [u]),
                            B = (0, r.useCallback)(() => {
                                _();
                            }, [_]),
                            D = (0, r.useCallback)(() => {
                                b.current = !0;
                            }, []),
                            v = (0, r.useCallback)(() => {
                                (b.current = !1), !i && m && d(!1);
                            }, [i, m]);
                        ie(),
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
                        const h = (0, r.useRef)(null);
                        return (
                            (0, r.useEffect)(() => {
                                h.current &&
                                    (o
                                        ? (h.current.classList.remove(V_.base__hide),
                                          h.current.classList.add(V_.base__show))
                                        : (h.current.classList.remove(V_.base__show),
                                          h.current.classList.add(V_.base__hide)));
                            }, [o]),
                            n().createElement(
                                'div',
                                { className: V_.base, ref: h },
                                n().createElement(
                                    'div',
                                    { className: V_.placeholder, onMouseOver: D, onMouseLeave: v },
                                    n().createElement(
                                        'div',
                                        { className: E.closeButton },
                                        n().createElement(P, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: F,
                                        }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: V_.centerBlock },
                                        n().createElement(
                                            'div',
                                            { className: E.title },
                                            R.strings.mode_selector.title(),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: s()(V_.selectMap, !t && V_.selectMap__empty) },
                                            n().createElement(
                                                'div',
                                                { className: E.selectMapTitle },
                                                R.strings.mode_selector.selectMap(),
                                            ),
                                            n().createElement(
                                                T,
                                                {
                                                    size: N.small,
                                                    type: k.primary,
                                                    mixClass: V_.selectMapButton,
                                                    onClick: p,
                                                    disabled: !a,
                                                },
                                                n().createElement(
                                                    'div',
                                                    { className: V_.buttonText },
                                                    R.strings.mode_selector.button.select(),
                                                ),
                                            ),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: V_.items },
                                            A.map((e, t) =>
                                                n().createElement(z_, {
                                                    key: `column_${t}`,
                                                    items: e,
                                                    showWidgets: g,
                                                    canBeWide: 0 === t && A.length <= 3,
                                                    isContentVisible: o,
                                                }),
                                            ),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: V_.toggleButtonContainer },
                                            o &&
                                                n().createElement(
                                                    I.i,
                                                    { body: R.strings.tooltips.mode_selector.progressionBtn.body() },
                                                    n().createElement(
                                                        'div',
                                                        { id: 'mode-selector-widgets-btn' },
                                                        n().createElement(
                                                            d_,
                                                            {
                                                                size: N.small,
                                                                type: k.secondary,
                                                                onClick: B,
                                                                active: g,
                                                                mixClass: V_.toggleButton,
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
                u.O.view.extraSize.set(0, 0),
                    u.O.view.whenTutorialReady.then(() => {
                        f().render(
                            n().createElement(v, null, n().createElement(j_, null)),
                            document.getElementById('root'),
                        );
                    });
            },
            8668: (e, t, a) => {
                'use strict';
                a.d(t, { Hi: () => r, Jh: () => _, S4: () => i, u_: () => n });
                var u = a(3486);
                let _;
                !(function (e) {
                    (e.Huge = 'huge'), (e.Big = 'big'), (e.Medium = 'medium'), (e.Small = 'small');
                })(_ || (_ = {}));
                const r = [u.Id.B4, u.Id.B5, u.Id.B6],
                    n = [u.Id.B0, u.Id.B1, u.Id.B2],
                    i = {
                        [u.Id.B0]: { [u.Cg.Big]: _.Huge, [u.Cg.Medium]: _.Huge, [u.Cg.Small]: _.Big },
                        [u.Id.B1]: { [u.Cg.Big]: _.Huge, [u.Cg.Medium]: _.Huge, [u.Cg.Small]: _.Big },
                        [u.Id.B2]: { [u.Cg.Big]: _.Huge, [u.Cg.Medium]: _.Huge, [u.Cg.Small]: _.Big },
                        [u.Id.B3]: { [u.Cg.Big]: _.Huge, [u.Cg.Medium]: _.Big, [u.Cg.Small]: _.Big },
                        [u.Id.B4]: { [u.Cg.Big]: _.Big, [u.Cg.Medium]: _.Big, [u.Cg.Small]: _.Medium },
                        [u.Id.B5]: { [u.Cg.Big]: _.Medium, [u.Cg.Medium]: _.Medium, [u.Cg.Small]: _.Small },
                        [u.Id.B6]: { [u.Cg.Big]: _.Medium, [u.Cg.Medium]: _.Small, [u.Cg.Small]: _.Small },
                    };
            },
            8188: (e, t, a) => {
                'use strict';
                a.d(t, { B: () => l });
                var u = a(280),
                    _ = a(6179),
                    r = a.n(_),
                    n = a(8487);
                const i = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    s = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    o = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    l = ({ text: e, binding: t, classMix: a }) => {
                        const l = (0, _.useCallback)((e) => ({ color: `#${e}` }), []),
                            c = t || {};
                        let m = i.exec(e),
                            d = e;
                        for (; m; ) {
                            const a = m[0],
                                _ = s.exec(a),
                                b = o.exec(a),
                                g = m[1];
                            if (_ && b) {
                                const e = _[0],
                                    i = e + b[0].length + e;
                                (d = d.replace(a, `%(${i})`)),
                                    (c[i] = n.Z[e]
                                        ? r().createElement(
                                              'span',
                                              { className: n.Z[e] },
                                              r().createElement(u.z, { text: g, binding: t }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: l(e) },
                                              r().createElement(u.z, { text: g, binding: t }),
                                          ));
                            }
                            m = i.exec(e);
                        }
                        return r().createElement(u.z, { text: d, classMix: a, binding: c });
                    };
            },
            9930: (e, t, a) => {
                'use strict';
                a.d(t, { B: () => n, O: () => i });
                var u = a(7739),
                    _ = a(6179),
                    r = a(3486);
                const n = (e) => {
                        const t = (0, _.useState)(!1),
                            a = t[0],
                            u = t[1],
                            r = (0, _.useCallback)(
                                (t) => {
                                    u(t), e && e(t);
                                },
                                [e],
                            );
                        return [a, r];
                    },
                    i = () => {
                        const e = (0, _.useContext)(u.YN),
                            t = e.extraSmall,
                            a = e.small,
                            n = e.medium;
                        return (0, _.useMemo)(() => {
                            switch (!0) {
                                case a:
                                case t:
                                    return r.Cg.Small;
                                case n:
                                    return r.Cg.Medium;
                                default:
                                    return r.Cg.Big;
                            }
                        }, [t, n, a]);
                    };
            },
            3486: (e, t, a) => {
                'use strict';
                a.d(t, { Cg: () => r, Hp: () => s, Id: () => _, SH: () => n, d6: () => u });
                const u = (e) => (e ? R.images.gui.maps.icons.mode_selector.mode.$dyn(e) : null);
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
                const n = (e, t = !1) => (t && 1 === e ? _.B0 : `b${Math.min(Math.max(Math.floor(e), 0), 6)}`),
                    i = {},
                    s = (...e) => {
                        let t = [];
                        for (var a = 0, u = e; a < u.length; a++) {
                            const e = u[a];
                            if (e in i) t = t.concat(i[e]);
                            else {
                                const a = [e];
                                for (let t = 0; t <= 6; t++) a.push(`${e}__${n(t)}`);
                                (i[e] = a), (t = t.concat(i[e]));
                            }
                        }
                        return t;
                    };
            },
            4194: (e, t, a) => {
                'use strict';
                a.d(t, { $: () => b });
                var u = a(6483),
                    _ = a.n(u),
                    r = a(9924),
                    n = a(6179),
                    i = a.n(n),
                    s = a(8668),
                    o = a(9930),
                    l = a(3486);
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
                        const a = (0, o.O)(),
                            u = (0, r.Z)([...(0, l.Hp)('icon')], c),
                            n = s.S4[e][a],
                            b = d.$dyn(`c_${m[n]}`).$dyn(t ? 'bg1' : 'bg2'),
                            g = _()(c.icon, c[`icon__${n}`], u[`icon__${e}`]);
                        return i().createElement(
                            'div',
                            { className: c.base },
                            i().createElement('div', { className: g, style: { backgroundImage: `url(${b})` } }),
                        );
                    };
            },
            7663: (e, t, a) => {
                'use strict';
                a.d(t, { Gg: () => B });
                var u = a(6483),
                    _ = a.n(u),
                    r = a(7078),
                    n = a(2646),
                    i = a(9924),
                    s = a(3649),
                    o = a(6179),
                    l = a.n(o),
                    c = a(4090),
                    m = a(8188),
                    d = a(8668),
                    b = a(9930),
                    g = a(3486);
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
                let C;
                !(function (e) {
                    (e.Icon1 = 'bg0'),
                        (e.Icon2 = 'bg1'),
                        (e.Icon3 = 'bg2'),
                        (e.Icon4 = 'bg3'),
                        (e.Icon5 = 'bg4'),
                        (e.Icon6 = 'bg5');
                })(C || (C = {}));
                const A = {
                        [d.Jh.Huge]: '130x130',
                        [d.Jh.Big]: '72x72',
                        [d.Jh.Medium]: '64x64',
                        [d.Jh.Small]: '40x40',
                    },
                    F = {
                        [C.Icon1]: [0],
                        [C.Icon2]: [1, 2, 3, 4],
                        [C.Icon3]: [5, 6, 7, 8, 9],
                        [C.Icon4]: [10, 11, 12, 13, 14],
                        [C.Icon5]: [15, 16, 17, 18, 19],
                        [C.Icon6]: [20],
                    },
                    p = [g.Id.B0, g.Id.B1, g.Id.B2],
                    B = ({ size: e, level: t, conditions: a, restRewards: u }) => {
                        const B = (0, b.O)(),
                            D = (0, i.Z)([...(0, g.Hp)('icon', 'level', 'subtitle')], E),
                            v = (0, o.useMemo)(() => d.S4[e][B], [e, B]),
                            h = (0, o.useMemo)(
                                () => ((e) => Object.keys(F).find((t) => F[t].includes(e)) || C.Icon1)(t),
                                [t],
                            ),
                            f = (0, o.useMemo)(() => ({ tooltipId: n.I3 }), []),
                            x = (0, o.useMemo)(() => {
                                const e = R.images.gui.maps.icons.epicBattles.metaLvls;
                                if (null !== e) {
                                    const t = e.$dyn(`c_${A[v]}`);
                                    if (void 0 !== t && void 0 !== h) return { backgroundImage: `url(${t.$dyn(h)})` };
                                }
                            }, [h, v]),
                            w = _()(E.icon, E[`icon__${h}`], E[`icon__${v}`], D[`icon__${e}`]);
                        return l().createElement(
                            'div',
                            { className: E.base },
                            l().createElement(
                                r.t,
                                { args: f },
                                l().createElement(
                                    'div',
                                    { className: w, style: x },
                                    u > 0 &&
                                        l().createElement(
                                            'div',
                                            { className: _()(E.counter, E[`counter__${v}`]) },
                                            l().createElement(c.A, { size: 'normal', value: u }),
                                        ),
                                    t > 0 && l().createElement('div', { className: _()(E.level, D[`level__${e}`]) }, t),
                                ),
                            ),
                            a &&
                                !p.includes(e) &&
                                l().createElement(m.B, {
                                    classMix: _()(D.subtitle, D[`subtitle__${e}`]),
                                    text: (0, s.z4)(a),
                                }),
                        );
                    };
            },
            5611: (e, t, a) => {
                'use strict';
                a.d(t, { n: () => j });
                var u = a(6483),
                    _ = a.n(u),
                    r = a(7739),
                    n = a(9924),
                    i = a(6179),
                    s = a.n(i),
                    o = a(8188),
                    l = a(3486),
                    c = a(7078),
                    m = a(2646),
                    d = a(9916);
                const b = 'BonusBattles_base_1b',
                    g = 'BonusBattles_light_51',
                    E = 'BonusBattles_divider_52',
                    C = 'BonusBattles_divider__right_08',
                    A = 'BonusBattles_icon_2c',
                    F = 'BonusBattles_amount_a2',
                    p = { tooltipId: m.T3 },
                    B = (0, i.memo)((e) => {
                        const t = e.amount,
                            a = d.Z5.getNumberFormat(t, d.B3.INTEGRAL),
                            u = _()(E, C);
                        return s().createElement(
                            c.t,
                            { args: p },
                            s().createElement(
                                'div',
                                { className: b },
                                s().createElement('div', { className: g }),
                                s().createElement('div', { className: E }),
                                s().createElement('div', { className: A }),
                                s().createElement('div', { className: F }, a),
                                s().createElement('div', { className: u }),
                            ),
                        );
                    });
                var D = a(6373),
                    v = a(3649);
                let h, f;
                !(function (e) {
                    (e.ExtraLarge = 'extraLarge'),
                        (e.Large = 'large'),
                        (e.Medium = 'medium'),
                        (e.SMedium = 'smedium'),
                        (e.Small = 'small'),
                        (e.ExtraSmall = 'extraSmall'),
                        (e.Tiny = 'tiny');
                })(h || (h = {})),
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
                    S = (0, i.memo)((e) => {
                        const t = e.isInactive,
                            a = void 0 !== t && t,
                            u = e.isQualification,
                            r = e.divisionID,
                            n = e.rankName,
                            o = e.rankID,
                            l = e.isUnburnable,
                            d = e.shieldHP,
                            b = e.size,
                            g = void 0 === b ? f.Medium : b,
                            E = !u && o > 0,
                            C = (0, i.useMemo)(() => {
                                const e = R.images.gui.maps.icons.rankedBattles,
                                    t = w[g];
                                let a;
                                return (
                                    (a = u
                                        ? e.divisions.$dyn(`c_${t}`).$num(r)
                                        : e.ranks.$dyn(`c_${t}`).$dyn(`rank${r}_${n}`)),
                                    { backgroundImage: `url(${a})` }
                                );
                            }, [r, n, u, g]),
                            A = (e) => [x[e], x[`${e}__${g}`]],
                            F = _()(x.icon, a && x.icon__next, ...A('icon')),
                            p = _()(...A('frame'), ...A('unburnable')),
                            B = _()(...A('frame'), ...A('shield')),
                            D = _()(...A('hp'));
                        return s().createElement(
                            c.t,
                            { isEnabled: E, args: { rankID: o, tooltipId: m.MS } },
                            s().createElement(
                                'div',
                                { className: x.base },
                                s().createElement('div', { className: F, style: C }),
                                l && s().createElement('div', { className: p }),
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
                    k = {
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
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                const y = { tooltipId: m.u6 },
                    T = (e) => {
                        const t = e.rankLeft,
                            a = void 0 === t ? void 0 : t,
                            u = e.rankRight,
                            r = e.steps,
                            n = e.stepsTotal,
                            o = e.qualBattles,
                            l = e.qualTotalBattles,
                            m = e.size,
                            d = n > 0 && !u.isQualification,
                            b = void 0 !== a || d,
                            g = ![h.ExtraLarge, h.Medium].includes(m),
                            E = (0, i.useMemo)(
                                () =>
                                    [h.Medium, h.SMedium].includes(m)
                                        ? f.Medium
                                        : [h.Small, h.ExtraSmall].includes(m)
                                          ? f.Small
                                          : f.Large,
                                [m],
                            ),
                            C = () => ({
                                header: (0, v.uF)(R.strings.tooltips.mode_selector.ranked.qualification.header(), {
                                    current: o,
                                    max: l,
                                }),
                                body: R.strings.tooltips.mode_selector.ranked.qualification.description(),
                                isEnabled: u.isQualification,
                            }),
                            A = _()(
                                k.steps,
                                g && k.steps__small,
                                m === h.Medium && k.steps__wide,
                                void 0 === a && k.steps__side,
                            );
                        return s().createElement(
                            'div',
                            { className: _()(k.base, k[`base__${m}`]) },
                            a && s().createElement(S, N({}, a, { size: E })),
                            d &&
                                s().createElement(
                                    c.t,
                                    { args: y },
                                    s().createElement(
                                        'div',
                                        { className: A },
                                        [...Array(n)].map((e, t) => {
                                            return s().createElement('div', {
                                                key: `step_${t}`,
                                                className:
                                                    ((a = t < r),
                                                    _()(k.step, g && k.step__small, !a && k.step__notReceived)),
                                            });
                                            var a;
                                        }),
                                    ),
                                ),
                            s().createElement(
                                D.i,
                                C,
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement(S, N({}, u, { size: E, isInactive: b })),
                                ),
                            ),
                        );
                    },
                    W = {
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
                let L, M;
                !(function (e) {
                    (e.Efficiency = 'efficiency'), (e.Position = 'position');
                })(L || (L = {})),
                    (function (e) {
                        (e.Large = 'large'), (e.Medium = 'medium'), (e.Small = 'small');
                    })(M || (M = {}));
                const P = { [L.Efficiency]: m.wm, [L.Position]: m.q_ },
                    I = (0, i.memo)(
                        ({
                            type: e,
                            value: t,
                            valueDiff: a = 0,
                            isUnavailable: u = !1,
                            isPercent: r = !1,
                            size: n = M.Large,
                        }) => {
                            const i = (e) =>
                                    u
                                        ? '- -'
                                        : r
                                          ? d.Z5.getRealFormat(100 * e, d.Gr.WO_ZERO_DIGITS) + '%'
                                          : d.Z5.getRealFormat(e, d.Gr.WO_ZERO_DIGITS),
                                o = i(t),
                                l = i(a);
                            return s().createElement(
                                c.t,
                                { args: { tooltipId: P[e] } },
                                s().createElement(
                                    'div',
                                    { className: _()(W.base, W[`base__${n}`]) },
                                    s().createElement('div', {
                                        className: _()(W.icon, W[`icon__${e}`], W[`icon__${e}__${n}`]),
                                    }),
                                    s().createElement('div', { className: _()(W.value, W[`value__${n}`]) }, o),
                                    0 !== a &&
                                        !u &&
                                        s().createElement(
                                            'div',
                                            { className: _()(W.delta, W[`delta__${n}`], a < 0 && W.delta__minus) },
                                            s().createElement('div', {
                                                className: _()(W.arrow, a < 0 && W.arrow__minus),
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
                    z = (0, i.memo)((e) => {
                        const t = e.leagueID,
                            a = e.efficiency,
                            u = e.efficiencyDiff,
                            r = e.position,
                            n = e.isEfficiencyUnavailable,
                            o = void 0 !== n && n,
                            l = e.isPositionUnavailable,
                            m = void 0 !== l && l,
                            d = e.size,
                            b = (0, i.useMemo)(
                                () =>
                                    [h.Medium, h.SMedium].includes(d)
                                        ? f.Medium
                                        : [h.Small, h.ExtraSmall, h.Tiny].includes(d)
                                          ? f.Small
                                          : f.Large,
                                [d],
                            ),
                            g = (0, i.useMemo)(
                                () =>
                                    [h.Medium, h.ExtraLarge].includes(d) ? M.Large : d === h.Tiny ? M.Small : M.Medium,
                                [d],
                            ),
                            E = (0, i.useMemo)(() => {
                                const e = R.images.gui.maps.icons.rankedBattles.league,
                                    a = $[b],
                                    u = e.$dyn(`c_${a}`);
                                if (u) {
                                    return { backgroundImage: `url(${u.$num(t)})` };
                                }
                            }, [t, b]);
                        return s().createElement(
                            'div',
                            { className: _()(O.base, O[`base__${d}`]) },
                            s().createElement(I, {
                                type: L.Efficiency,
                                value: a,
                                valueDiff: u,
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
                                type: L.Position,
                                value: r,
                                isUnavailable: m,
                                isPercent: !1,
                                size: g,
                            }),
                        );
                    }),
                    V = {
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
                    j = ({
                        size: e,
                        rankLeft: t,
                        rankRight: a,
                        hasLeftRank: u,
                        steps: c,
                        stepsTotal: m,
                        leagueID: d,
                        efficiency: b,
                        efficiencyDiff: g,
                        position: E,
                        isEfficiencyUnavailable: C,
                        isPositionUnavailable: A,
                        qualBattles: F,
                        qualTotalBattles: p,
                        bonusBattles: D,
                    }) => {
                        const v = (0, i.useContext)(r.YN),
                            f = v.extraSmall,
                            x = v.small,
                            w = v.medium,
                            S = ![l.Id.B5, l.Id.B6].includes(e),
                            k = d > -1,
                            N = p > 0 && a.isQualification && S,
                            y = D > 0,
                            W = (0, n.Z)((0, l.Hp)('qualBattles', 'ranks', 'ranks__qual', 'bonus'), V),
                            L = (0, i.useMemo)(
                                () =>
                                    x || f
                                        ? k && e === l.Id.B4
                                            ? h.Tiny
                                            : h.ExtraSmall
                                        : w
                                          ? e === l.Id.B1
                                              ? h.Large
                                              : e === l.Id.B2
                                                ? h.SMedium
                                                : h.Small
                                          : e === l.Id.B4
                                            ? h.Small
                                            : e === l.Id.B3
                                              ? h.Medium
                                              : h.ExtraLarge,
                                [k, e, f, x, w],
                            ),
                            M = _()(V.ranks, W[`ranks__${e}`], N && W[`ranks__qual__${e}`]);
                        return s().createElement(
                            'div',
                            { className: V.base },
                            S &&
                                s().createElement(
                                    'div',
                                    { className: M },
                                    k
                                        ? s().createElement(z, {
                                              leagueID: d,
                                              efficiency: b,
                                              efficiencyDiff: g,
                                              position: E,
                                              isEfficiencyUnavailable: C,
                                              isPositionUnavailable: A,
                                              size: L,
                                          })
                                        : s().createElement(T, {
                                              rankLeft: u ? t : void 0,
                                              rankRight: a,
                                              steps: c,
                                              stepsTotal: m,
                                              qualBattles: F,
                                              qualTotalBattles: p,
                                              size: L,
                                          }),
                                ),
                            N &&
                                s().createElement(
                                    'div',
                                    { className: _()(V.qualBattles, W[`qualBattles__${e}`]) },
                                    s().createElement(o.B, {
                                        text: R.strings.mode_selector.ranked.widget.qualBattles(),
                                        binding: { current: F, max: p },
                                    }),
                                ),
                            y &&
                                s().createElement(
                                    'div',
                                    { className: _()(V.bonus, W[`bonus__${e}`]) },
                                    s().createElement(B, { amount: D }),
                                ),
                        );
                    };
            },
            2646: (e, t, a) => {
                'use strict';
                a.d(t, {
                    $b: () => g,
                    D3: () => _,
                    GN: () => c,
                    I3: () => b,
                    MS: () => n,
                    T3: () => i,
                    TR: () => d,
                    _Y: () => s,
                    hg: () => E,
                    p5: () => u,
                    q_: () => l,
                    u6: () => r,
                    wm: () => o,
                    zD: () => m,
                });
                const u = 'disabledTooltip',
                    _ = 'rankedCalendarDayInfoExtended',
                    r = 'rankedStep',
                    n = 'rankedBattlesRank',
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
            5287: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = { base: 'FormatText_base_d0' };
            },
            8487: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
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
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, u) => {
            if (!t) {
                var _ = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, a, u] = deferred[s], r = !0, n = 0; n < t.length; n++)
                        (!1 & u || _ >= u) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[n]))
                            ? t.splice(n--, 1)
                            : ((r = !1), u < _ && (_ = u));
                    if (r) {
                        deferred.splice(s--, 1);
                        var i = a();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            u = u || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > u; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, a, u];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
            var t = (t, a) => {
                    var u,
                        _,
                        [r, n, i] = a,
                        s = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (u in n) __webpack_require__.o(n, u) && (__webpack_require__.m[u] = n[u]);
                        if (i) var o = i(__webpack_require__);
                    }
                    for (t && t(a); s < r.length; s++)
                        (_ = r[s]), __webpack_require__.o(e, _) && e[_] && e[_][0](), (e[_] = 0);
                    return __webpack_require__.O(o);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [705], () => __webpack_require__(9366));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
