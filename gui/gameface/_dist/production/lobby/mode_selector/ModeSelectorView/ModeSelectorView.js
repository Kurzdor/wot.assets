(() => {
    var __webpack_modules__ = {
            4090: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => l });
                var a = u(6483),
                    _ = u.n(a),
                    r = u(6179),
                    n = u.n(r);
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
                        g = 'string' == typeof b;
                    if ((b && !g && b < 0) || 0 === b) return null;
                    const E = b && !g && b > c,
                        A = _()(
                            i.base,
                            i[`base__${t}`],
                            r && i.base__animated,
                            l && i.base__hidden,
                            !b && i.base__pattern,
                            a && i.base__empty,
                            m,
                        );
                    return n().createElement(
                        'div',
                        o({ className: A }, d),
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
            280: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => o });
                var a = u(6179),
                    _ = u.n(a),
                    r = u(6483),
                    n = u.n(r),
                    i = u(3649),
                    s = u(5287);
                const o = ({ binding: e, text: t = '', classMix: u, alignment: r = i.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : _().createElement(
                              a.Fragment,
                              null,
                              t.split('\n').map((t, o) =>
                                  _().createElement(
                                      'div',
                                      { className: n()(s.Z.base, u), key: `${t}-${o}` },
                                      (0, i.Uw)(t, r, e).map((e, t) =>
                                          _().createElement(a.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => c });
                var a = u(3138),
                    _ = u(6179),
                    r = u(1043),
                    n = u(5262);
                const i = a.O.client.getSize('rem'),
                    s = i.width,
                    o = i.height,
                    l = Object.assign({ width: s, height: o }, (0, n.T)(s, o, r.j)),
                    c = (0, _.createContext)(l);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => l });
                var a = u(6179),
                    _ = u.n(a),
                    r = u(6536),
                    n = u(3495),
                    i = u(1043),
                    s = u(5262),
                    o = u(3138);
                const l = (0, a.memo)(({ children: e }) => {
                    const t = (0, a.useContext)(n.Y),
                        u = (0, a.useState)(t),
                        l = u[0],
                        c = u[1],
                        m = (0, a.useCallback)((e, t) => {
                            const u = o.O.view.pxToRem(e),
                                a = o.O.view.pxToRem(t);
                            c(Object.assign({ width: u, height: a }, (0, s.T)(u, a, i.j)));
                        }, []);
                    (0, r.Z)(() => {
                        engine.on('clientResized', m);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', m), [m]);
                    const d = (0, a.useMemo)(() => Object.assign({}, l), [l]);
                    return _().createElement(n.Y.Provider, { value: d }, e);
                });
            },
            6010: (e, t, u) => {
                'use strict';
                var a = u(6179),
                    _ = u(7382),
                    r = u(3495);
                const n = ['children'];
                const i = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                _ = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                            return _;
                        })(e, n);
                    const i = (0, a.useContext)(r.Y),
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
                        F = i.largeHeight,
                        p = i.mediumHeight,
                        B = i.smallHeight,
                        D = i.extraSmallHeight,
                        h = { extraLarge: C, large: F, medium: p, small: B, extraSmall: D };
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
                            if (u.largeHeight && F) return t;
                            if (u.mediumHeight && p) return t;
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
                const n = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
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
                            u,
                        ),
                        t,
                    );
                };
            },
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => o });
                var a = u(7902),
                    _ = u(4179),
                    r = u(6179);
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
                            F = e.isEnabled,
                            p = void 0 === F || F,
                            B = e.targetId,
                            D = void 0 === B ? 0 : B,
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
                            })(e, n);
                        const x = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, r.useMemo)(() => D || (0, a.F)().resId, [D]),
                            S = (0, r.useCallback)(() => {
                                (x.current.isVisible && x.current.timeoutId) ||
                                    (s(u, C, { isMouseEvent: !0, on: !0, arguments: i(_) }, w),
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
                                !1 === p && N();
                            }, [p, N]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', N),
                                    () => {
                                        window.removeEventListener('mouseleave', N), N();
                                    }
                                ),
                                [N],
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
                                              N(), null == l || l(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === E && N(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === E && N(), null == c || c(t), null == e || e(t);
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
                u.r(t), u.d(t, { mouse: () => i, onResize: () => r });
                var a = u(2472),
                    _ = u(1176);
                const r = (0, a.E)('clientResized'),
                    n = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const i = (function () {
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
                                        i = n[t]((e) => u([e, 'outside']));
                                    function s(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        a(),
                                        () => {
                                            _ &&
                                                (i(),
                                                window.removeEventListener(r, s),
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
                        getMouseGlobalPosition: () => r,
                        getSize: () => _,
                        graphicsQuality: () => n,
                    });
                var a = u(527);
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
            1176: (e, t, u) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => a });
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
                u.d(t, { O: () => _ });
                var a = u(5959);
                const _ = { view: u(7641), client: a };
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
                        addPreloadTexture: () => i,
                        children: () => a,
                        displayStatus: () => _.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => h,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => o,
                        getDisplayStatus: () => v,
                        getScale: () => E,
                        getSize: () => m,
                        getViewGlobalPosition: () => b,
                        isEventHandled: () => D,
                        isFocused: () => p,
                        pxToRem: () => A,
                        remToPx: () => C,
                        resize: () => d,
                        sendEvent: () => n.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => w,
                    });
                var a = u(3722),
                    _ = u(6112),
                    r = u(6538),
                    n = u(8566);
                function i(e) {
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
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
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
                function p() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function D() {
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
                    n = 32,
                    i = 64,
                    s = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                n = (function (e, t) {
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
                                      Object.assign({ __Type: u, type: e }, n, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
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
                    n = u(5262),
                    i = u(6179),
                    s = u(3649);
                function o(e, t, u) {
                    const a = (0, i.useContext)(r.YN);
                    let o = Object.entries(a).filter(([e, t]) => !0 === t && e in n.u);
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
                    })(_ || (_ = {}));
            },
            3649: (e, t, u) => {
                'use strict';
                let a;
                function _(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function n(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                u.d(t, { Uw: () => b, WU: () => _, e: () => n, uF: () => r, v2: () => a, z4: () => i }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(a || (a = {}));
                const i = (e) => e.replace(/&nbsp;/g, ' '),
                    s = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    o = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    l = (e, t, u = a.left) => e.split(t).reduce(u === a.left ? s : o, []),
                    c = (() => {
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
                    m = ['zh_cn', 'zh_sg', 'zh_tw'],
                    d = (e, t = a.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return m.includes(u)
                            ? c(e)
                            : ((e, t = a.left) => {
                                  let u = [];
                                  const _ =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = i(e);
                                  return l(r, /( )/, t).forEach((e) => (u = u.concat(l(e, _, a.left)))), u;
                              })(e, t);
                    },
                    b = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : d(e, t)));
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
            4179: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Sw: () => r.Z,
                    B3: () => o,
                    Gr: () => l,
                    Z5: () => n,
                    B0: () => s,
                    wU: () => v,
                    ry: () => C,
                    Eu: () => F,
                    Sy: () => B,
                    SW: () => D,
                    P3: () => h,
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
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = u(5521),
                    b = u(3138);
                const g = ['args'];
                function E(e, t, u, a, _, r, n) {
                    try {
                        var i = e[r](n),
                            s = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(s) : Promise.resolve(s).then(a, _);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        u = arguments;
                                    return new Promise(function (a, _) {
                                        var r = e.apply(t, u);
                                        function n(e) {
                                            E(r, a, _, n, i, 'next', e);
                                        }
                                        function i(e) {
                                            E(r, a, _, n, i, 'throw', e);
                                        }
                                        n(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    F = () =>
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
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        _ = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                    return _;
                                })(t, g);
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
                    B = () => p(s.CLOSE),
                    D = () => p(s.POP_OVER, { on: !1 }),
                    h = (e, t, u, a, _ = R.invalid('resId'), r) => {
                        const n = b.O.view.getViewGlobalPosition(),
                            i = u.getBoundingClientRect(),
                            o = i.x,
                            l = i.y,
                            c = i.width,
                            m = i.height,
                            d = {
                                x: b.O.view.pxToRem(o) + n.x,
                                y: b.O.view.pxToRem(l) + n.y,
                                width: b.O.view.pxToRem(c),
                                height: b.O.view.pxToRem(m),
                            };
                        p(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: _,
                            direction: t,
                            bbox: A(d),
                            on: !0,
                            args: r,
                        });
                    },
                    v = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    f = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var x = u(7572);
                const w = _.instance,
                    S = {
                        DataTracker: r.Z,
                        ViewModel: x.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: m,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => p(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: D,
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: h,
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, B);
                        },
                        handleViewEvent: p,
                        onBindingsReady: C,
                        onLayoutReady: F,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: v,
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
                        ClickOutsideManager: w,
                        SystemLocale: n,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = S;
            },
            9285: (e, t, u) => {
                'use strict';
                var a = u(3138),
                    _ = u(7739),
                    r = u(6179),
                    n = u.n(r),
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
                        return { mediaSize: a, mediaWidth: n, mediaHeight: i, remScreenWidth: t, remScreenHeight: u };
                    },
                    E = ['children', 'className'];
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
                    p = {
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
                            })(e, E);
                        const _ = g(),
                            r = _.mediaWidth,
                            i = _.mediaHeight,
                            o = _.mediaSize;
                        return n().createElement('div', A({ className: s()(u, C[r], F[i], p[o]) }, a), t);
                    },
                    D = ['children'];
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
                        })(e, D);
                    return n().createElement(_.ZN, null, n().createElement(B, u, t));
                };
                var v = u(493),
                    f = u.n(v);
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
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
                    const A = (0, r.useRef)(null),
                        C = (0, r.useState)(u),
                        F = C[0],
                        p = C[1],
                        B = (0, r.useState)(!1),
                        D = B[0],
                        h = B[1],
                        v = (0, r.useState)(!1),
                        f = v[0],
                        w = v[1],
                        k = (0, r.useCallback)(() => {
                            _ || (A.current && (A.current.focus(), p(!0)));
                        }, [_]),
                        y = (0, r.useCallback)(
                            (e) => {
                                F && null !== A.current && !A.current.contains(e.target) && p(!1);
                            },
                            [F],
                        ),
                        T = (0, r.useCallback)(
                            (e) => {
                                _ || (E && E(e));
                            },
                            [_, E],
                        ),
                        L = (0, r.useCallback)(
                            (e) => {
                                _ || (null !== o && x(o), c && c(e), w(!0));
                            },
                            [_, o, c],
                        ),
                        W = (0, r.useCallback)(
                            (e) => {
                                m && m(e);
                            },
                            [m],
                        ),
                        M = (0, r.useCallback)(
                            (e) => {
                                _ || (b && b(e), h(!1));
                            },
                            [_, b],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                _ || (null !== l && x(l), d && d(e), u && k(), h(!0));
                            },
                            [_, l, d, k, u],
                        ),
                        I = (0, r.useCallback)(
                            (e) => {
                                _ || (g && g(e), h(!1));
                            },
                            [_, g],
                        ),
                        O = s()(
                            S.base,
                            S[`base__${a}`],
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
                            p(u);
                        }, [u]),
                        n().createElement(
                            'div',
                            {
                                ref: A,
                                className: O,
                                onMouseEnter: L,
                                onMouseMove: W,
                                onMouseUp: M,
                                onMouseDown: P,
                                onMouseLeave: I,
                                onClick: T,
                            },
                            a !== N.ghost &&
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
                y.defaultProps = { type: N.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const T = (0, r.memo)(y),
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
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
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
                            u = e.onClick,
                            a = e.goto,
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
                                    var u,
                                        a,
                                        _ = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                    return _;
                                })(e, W)),
                            b = s()(L.base, L[`base__${r}`], L[`base__${_}`], null == i ? void 0 : i.base),
                            g = s()(L.icon, L[`icon__${r}`], L[`icon__${_}`], null == i ? void 0 : i.icon),
                            E = s()(L.glow, null == i ? void 0 : i.glow),
                            A = s()(L.caption, L[`caption__${r}`], null == i ? void 0 : i.caption),
                            C = s()(L.goto, null == i ? void 0 : i.goto);
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
                                    onClick: u,
                                },
                                d,
                            ),
                            'info' !== r && n().createElement('div', { className: L.shine }),
                            n().createElement('div', { className: g }, n().createElement('div', { className: E })),
                            n().createElement('div', { className: A }, t),
                            a && n().createElement('div', { className: C }, a),
                        );
                    }
                }
                P.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var I = u(2056);
                const O = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function $() {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                }
                const H = R.views.common.tooltip_window.simple_tooltip_content,
                    z = (e) => {
                        let t = e.children,
                            u = e.body,
                            a = e.header,
                            _ = e.note,
                            i = e.alert,
                            s = e.args,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, O);
                        const l = (0, r.useMemo)(() => {
                            const e = Object.assign({}, s, { body: u, header: a, note: _, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, u, a, _, s]);
                        return n().createElement(
                            I.u,
                            $(
                                {
                                    contentId:
                                        ((c = null == s ? void 0 : s.hasHtmlContent),
                                        c ? H.SimpleTooltipHtmlContent('resId') : H.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                o,
                            ),
                            t,
                        );
                        var c;
                    };
                var U = u(3649);
                let j;
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
                })(j || (j = {}));
                var V = u(4179);
                const q = 60,
                    G = 3600,
                    Y = 86400;
                Date.now();
                const Z = () => {},
                    K = (e = 0, t, u = 0, a = Z) => {
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
                                                null !== u && t <= u ? (i(u), a && a(), clearInterval(r)) : i(t);
                                            },
                                            1e3 * (t || (e > 120 ? q : 1)),
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, t, u, a]),
                            n
                        );
                    };
                var X = u(7902);
                const Q = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var J = u(6536);
                const ee = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    te = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    ue = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const a = Q(`${e}.${u}`, window);
                                return ee(a) ? t(e, u, a) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    ae = (e) => {
                        const t = ((e) => {
                                const t = (0, X.F)(),
                                    u = t.caller,
                                    a = t.resId,
                                    _ = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: _, modelPath: te(_, e || ''), resId: a };
                            })(),
                            u = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const _ = Q(te(u, `${t}.${a}`), window);
                                    return ee(_) ? (e.push(_.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    _e = V.Sw.instance;
                let re;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(re || (re = {}));
                const ne = (e = 'model', t = re.Deep) => {
                        const u = (0, r.useState)(0),
                            a = (u[0], u[1]),
                            _ = (0, r.useMemo)(() => (0, X.F)(), []),
                            n = _.caller,
                            i = _.resId,
                            s = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== n ? `subViews.${n}.${e}` : e),
                                [n, e],
                            ),
                            o = (0, r.useState)(() =>
                                ((e) => {
                                    const t = Q(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return ee(t) ? t.value : t;
                                })(ue(s)),
                            ),
                            l = o[0],
                            c = o[1],
                            m = (0, r.useRef)(-1);
                        return (
                            (0, J.Z)(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? re.Deep : re.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== re.None)
                                ) {
                                    const u = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === re.Deep
                                                ? (e === l && a((e) => e + 1), c(e))
                                                : c(Object.assign([], e));
                                        },
                                        _ = ae(e);
                                    m.current = _e.addCallback(_, u, i, t === re.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (t !== re.None)
                                    return () => {
                                        _e.removeCallback(m.current, i);
                                    };
                            }, [i, t]),
                            l
                        );
                    },
                    ie = (V.Sw.instance, K);
                var se = u(5521);
                const oe = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function le(e = se.n.NONE, t = oe, u = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== se.n.NONE)
                            return (
                                window.addEventListener('keydown', _, u),
                                () => {
                                    window.removeEventListener('keydown', _, u);
                                }
                            );
                        function _(_) {
                            if (_.keyCode === e) {
                                if (a.O.view.isEventHandled()) return;
                                a.O.view.setEventHandled(), t(_), u && _.stopPropagation();
                            }
                        }
                    }, [t, e, u]);
                }
                function ce() {
                    !(function (e = se.n.ESCAPE) {
                        le(e, V.Sy, !0);
                    })(se.n.ESCAPE);
                }
                var me = u(9924),
                    de = u(3486);
                let be;
                !(function (e) {
                    (e.DISABLED = 'disabled'), (e.ACTIVE = 'active');
                })(be || (be = {}));
                var ge = u(2646),
                    Ee = u(4194),
                    Ae = u(7663),
                    Ce = u(5611),
                    Fe = u(280),
                    pe = u(8188),
                    Be = u(9930),
                    De = u(4090),
                    he = u(7078);
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
                        const C = (0, Be.O)(),
                            F = (0, r.useCallback)(() => {
                                m({ index: e, size: t, cardMediaSize: C }), w.playClick();
                            }, [m, e, t, C]),
                            p = (0, r.useCallback)(
                                (t) => {
                                    t.stopPropagation(), w.playYes(), d({ index: e });
                                },
                                [d, e],
                            ),
                            B = (0, Be.B)(c),
                            D = B[0],
                            h = B[1],
                            v = (0, r.useCallback)(() => {
                                x(
                                    [de.Id.B4, de.Id.B5, de.Id.B6].includes(t)
                                        ? 'ev_mode_selector_hover_simple'
                                        : 'ev_mode_selector_hover',
                                ),
                                    h(!0);
                            }, [h, t]),
                            f = (0, r.useCallback)(() => {
                                h(!1);
                            }, [h]),
                            S = (0, me.Z)(['info', 'check', 'checkBackground'], ve),
                            N = C !== de.Cg.Big;
                        let k;
                        const y = b(o);
                        if (null !== y) {
                            const e = y.$dyn(`bg_${t}_${C}`);
                            null !== e && (k = { backgroundImage: `url(${e})` });
                            const u = y.$dyn(`bg_${t}`);
                            null !== u && (k = { backgroundImage: `url(${u})`, backgroundSize: 'cover' });
                        }
                        const T = i && (D || u);
                        return n().createElement(
                            he.t,
                            { isEnabled: a, args: { index: e, modeName: E, tooltipId: ge.p5 } },
                            n().createElement(
                                'div',
                                null,
                                n().createElement(
                                    'div',
                                    {
                                        id: g,
                                        className: s()(ve.base, a && ve.base__disabled, A && ve.base__isNotStarted),
                                        onClick: F,
                                        onMouseEnter: v,
                                        onMouseLeave: f,
                                    },
                                    n().createElement(
                                        'div',
                                        { className: ve.mask },
                                        n().createElement('div', {
                                            className: s()(
                                                ve.background,
                                                void 0 === k && ve.background__empty,
                                                D && !A && ve.background__anim,
                                            ),
                                            style: k,
                                        }),
                                    ),
                                    n().createElement('div', { className: ve.border }),
                                    u &&
                                        n().createElement(
                                            n().Fragment,
                                            null,
                                            n().createElement('div', { className: ve.selection }),
                                            n().createElement('div', {
                                                className: s()(ve.animBg, t === de.Id.B0 && ve.animBg__wide),
                                            }),
                                            n().createElement('div', { className: S.checkBackground }),
                                            n().createElement('div', { className: S.check }),
                                        ),
                                    n().createElement('div', { className: s()(ve.hover, D && !A && ve.hover__anim) }),
                                    n().createElement('div', { className: ve.children }, l),
                                    _ &&
                                        !a &&
                                        n().createElement(
                                            'div',
                                            { className: ve.novelty },
                                            n().createElement(De.A, {
                                                value: R.strings.mode_selector.novelty(),
                                                size: N ? 'small' : 'big',
                                            }),
                                        ),
                                    n().createElement('div', {
                                        className: s()(ve.infoCorner, T && ve.infoCorner__anim),
                                    }),
                                    n().createElement(
                                        z,
                                        { body: R.strings.tooltips.mode_selector.info.body(), isEnabled: T },
                                        n().createElement('div', {
                                            className: s()(S.info, T && ve.info__anim),
                                            onClick: p,
                                        }),
                                    ),
                                    a && n().createElement('div', { className: ve.disabling }),
                                ),
                            ),
                        );
                    },
                    xe = 'TimeLeft_base_cf',
                    we = 'TimeLeft_base__small_7c',
                    Se = 'TimeLeft_icon_5d',
                    Ne = ({ index: e, text: t, isSmall: u = !1, classMix: a, tooltipId: _, modeName: r = '' }) =>
                        n().createElement(
                            he.t,
                            { args: _ ? { tooltipId: _, modeName: r } : { tooltipId: ge.GN, index: e } },
                            n().createElement(
                                'div',
                                { className: s()(xe, u && we, a) },
                                n().createElement('div', { className: Se }),
                                t,
                            ),
                        );
                let ke;
                !(function (e) {
                    (e[(e.NONE = 0)] = 'NONE'), (e[(e.STATIC = 1)] = 'STATIC'), (e[(e.NEW = 2)] = 'NEW');
                })(ke || (ke = {}));
                const ye = {
                        base: 'BattlePassIcon_base_bf',
                        bpIcon: 'BattlePassIcon_bpIcon_18',
                        bpIcon__extraLarge: 'BattlePassIcon_bpIcon__extraLarge_b3',
                        bpIcon__large: 'BattlePassIcon_bpIcon__large_c2',
                        bpAnim: 'BattlePassIcon_bpAnim_01',
                        bpAnim__extraLarge: 'BattlePassIcon_bpAnim__extraLarge_38',
                        bpAnim__large: 'BattlePassIcon_bpAnim__large_1e',
                    },
                    Te = ({ modeName: e, isDisabled: t, battlePassState: u }) => {
                        const a = (0, me.Z)([...(0, de.Hp)('bpIcon', 'bpAnim')], ye);
                        return (
                            (0, r.useEffect)(() => {
                                u !== ke.NEW || t || x('ev_mode_selector_bp_points_icon_appear');
                            }, [u, t]),
                            u === ke.NONE || t
                                ? null
                                : n().createElement(
                                      'div',
                                      { className: ye.base },
                                      n().createElement(
                                          I.u,
                                          {
                                              contentId:
                                                  R.views.lobby.mode_selector.tooltips.SimplyFormatTooltip('resId'),
                                              args: { modeName: e },
                                              ignoreShowDelay: !0,
                                          },
                                          n().createElement('div', { className: a.bpIcon }),
                                      ),
                                      u === ke.NEW && n().createElement('div', { className: a.bpAnim }),
                                  )
                        );
                    };
                function Le() {
                    return (
                        (Le =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Le.apply(this, arguments)
                    );
                }
                const We = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const a = n().createElement('div', { className: u }, e);
                        if (t.header || t.body) return n().createElement(z, t, a);
                        const _ = t.contentId,
                            r = t.args,
                            i = null == r ? void 0 : r.contentId;
                        return _ || i
                            ? n().createElement(I.u, Le({}, t, { contentId: _ || i }), a)
                            : n().createElement(he.t, t, a);
                    },
                    Re = {
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
                    Me = R.images.gui.maps.icons.mode_selector.rewards,
                    Pe = R.images.gui.maps.icons.vehicleTypes,
                    Ie = ['small', 'small-b0', 'small-b1', 'medium'],
                    Oe = [de.Id.B0, de.Id.B1],
                    $e = ({
                        mediaSize: e,
                        cardSize: t,
                        iconName: u,
                        name: a,
                        description: _,
                        tooltipID: i,
                        vehicleLevel: o,
                        vehicleType: l,
                    }) => {
                        const c = `${e}${Oe.includes(t) ? `-${t}` : ''}`,
                            m = (0, r.useMemo)(() => {
                                const e = Ie.includes(c) ? 'c_48x48' : 'c_64x64';
                                return { backgroundImage: `url(${Me.$dyn(e).$dyn(u)})` };
                            }, [c, u]);
                        return n().createElement(
                            We,
                            {
                                tooltipArgs: {
                                    args: { tooltipId: i },
                                    body: i ? '' : _,
                                    header: i ? '' : a,
                                    ignoreShowDelay: !0,
                                },
                            },
                            n().createElement(
                                'div',
                                { className: s()(Re.base, Re[`base__${c}`]) },
                                n().createElement(
                                    'div',
                                    { className: Re.header },
                                    n().createElement('div', {
                                        className: Re.vehicleType,
                                        style: l ? { backgroundImage: `url(${Pe.$dyn(l)})` } : void 0,
                                    }),
                                    n().createElement('div', null, o),
                                ),
                                n().createElement('div', { className: Re.icon, style: m }),
                                a && n().createElement(Fe.z, { text: a, classMix: Re.name }),
                            ),
                        );
                    },
                    He = {
                        base: 'Rewards_base_c8',
                        base__extraSmall: 'Rewards_base__extraSmall_9b',
                        base__small: 'Rewards_base__small_78',
                        base__medium: 'Rewards_base__medium_75',
                    };
                function ze() {
                    return (
                        (ze =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ze.apply(this, arguments)
                    );
                }
                const Ue = ({ size: e, rewardsList: t }) => {
                        const u = (0, Be.O)(),
                            a = (0, me.Z)(['base'], He);
                        return n().createElement(
                            'div',
                            { className: a.base },
                            t &&
                                t.map(
                                    (t) =>
                                        t &&
                                        t.value &&
                                        n().createElement(
                                            $e,
                                            ze({ key: t.value.iconName, mediaSize: u, cardSize: e }, t.value),
                                        ),
                                ),
                        );
                    },
                    je = {
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
                var Ve = u(8668);
                const qe = [
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
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const Ye = (e) => {
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
                            F = e.divider,
                            p = void 0 === F ? ' ' : F,
                            B = e.belowStatusComponent,
                            D = e.nameSuffixComponent,
                            h = e.forceShowIcon,
                            v = void 0 !== h && h,
                            f = e.hideStatus,
                            x = void 0 !== f && f,
                            w = e.noWidgetSizes,
                            S = void 0 === w ? [de.Id.B5, de.Id.B6] : w,
                            N = e.classNames,
                            k = e.resourceFolderGetter,
                            y = void 0 === k ? de.d6 : k,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, qe);
                        const L = (0, Be.O)(),
                            W = (0, me.Z)(
                                [
                                    ...(0, de.Hp)(
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
                                je,
                            ),
                            M = ne('model', re.None),
                            P = M.onItemClicked,
                            I = M.onInfoClicked,
                            O = T.resourcesFolderName,
                            $ = T.size,
                            H = T.isSelected,
                            z = T.showWidget,
                            j = T.isNew,
                            V = T.modeName,
                            q = T.index,
                            G = (0, Be.B)(l),
                            Y = G[0],
                            Z = G[1],
                            K = (0, r.useMemo)(() => Ve.S4[$][L], [$, L]),
                            X = (0, r.useMemo)(() => {
                                const e = y(O);
                                if (null !== e) {
                                    const t = e.$dyn(`icon_${K}`);
                                    if (void 0 !== t) return { backgroundImage: `url(${t})` };
                                }
                            }, [y, O, K]),
                            Q = z || H,
                            J = Ve.Hi.includes($),
                            ee = $ === de.Id.B1,
                            te = $ === de.Id.B2,
                            ue = $ === de.Id.B3,
                            ae = Ve.u_.includes($),
                            _e = !S.includes($) && z && d,
                            ie = Q && !J,
                            se = Y && !J && !Q,
                            oe = Y || (H && C),
                            le = L !== de.Cg.Big,
                            ce = A && A.length > 0 && !a && ae,
                            be = (0, r.useMemo)(
                                () =>
                                    g
                                        ? R.strings.ranked_battles.rankedBattlesUnreachableView.subtitleText()
                                        : C || u || void 0,
                                [g, C, u],
                            ),
                            ge = (0, r.useMemo)(
                                () => (ae || ue ? a || '' : void 0 === a ? '' : a.replace('\n', ' ')),
                                [ae, a, ue],
                            );
                        let Ee = '';
                        ee && _ === be ? i && (Ee = (0, U.z4)(i)) : (Ee = (0, U.z4)(_ + p + i));
                        const Ae = s()(
                                je.icon,
                                je[`icon__${K}`],
                                W[`icon__${$}`],
                                !J && je.icon__animPrepare,
                                ie && W[`icon__static__${$}`],
                                se && W[`icon__anim__${$}`],
                            ),
                            Ce = s()(je.mask, W[`mask__${$}`], ie && je.mask__static, se && je.mask__anim),
                            Fe = s()(
                                W.subtitle,
                                W[`subtitle__${$}`],
                                (u || !J) && je.subtitle__normal,
                                !ae && je.subtitle__noReward,
                                C && J && je.subtitle__statusActive,
                                C && Q && je.subtitle__staticPrepare,
                                oe && je.subtitle__anim,
                                g && je.subtitle__disable,
                                null == N ? void 0 : N.subtitle,
                            ),
                            De = s()(
                                je.statusDescription,
                                te && je.statusDescription__position,
                                ae && je.statusDescription__color,
                            ),
                            he = s()(W.footer, (Y || H) && !z && ue && je.footer__anim, null == N ? void 0 : N.footer),
                            ve = s()(W.formatText, W[`formatText__${$}`]),
                            xe = s()(je.darken, z && je.darken__show),
                            we = s()(
                                je.widgetOverlay,
                                !_e && je.widgetOverlay__hide,
                                null == N ? void 0 : N.widgetOverlay,
                            );
                        return n().createElement(
                            'div',
                            { className: s()(W.base, W[`base__${$}`]) },
                            n().createElement(
                                fe,
                                Ge({ onHoverChanged: Z, isDisabled: g }, T, {
                                    onItemClicked: P,
                                    onInfoClicked: I,
                                    resourceFolderGetter: y,
                                }),
                                ce && n().createElement(Ue, { size: $, rewardsList: A }),
                                a &&
                                    n().createElement(
                                        'div',
                                        { className: s()(W.statusNotActive, W[`statusNotActive__${$}`]) },
                                        n().createElement(pe.B, { text: ge, classMix: ve }),
                                    ),
                                n().createElement('div', { className: xe }),
                                d && n().createElement('div', { className: we }, d),
                                o,
                                (!_e || v) &&
                                    n().createElement(
                                        'div',
                                        { className: Ce },
                                        n().createElement('div', { className: Ae, style: X }),
                                    ),
                                n().createElement(
                                    'div',
                                    { className: s()(je.name, W.name, W[`name__${$}`], null == N ? void 0 : N.name) },
                                    t,
                                    D,
                                ),
                                n().createElement(
                                    'div',
                                    { className: Fe },
                                    !x && (!te || g) && n().createElement(pe.B, { classMix: ve, text: be || '' }),
                                    Ee &&
                                        ae &&
                                        !g &&
                                        (!_e || ae) &&
                                        n().createElement(
                                            'div',
                                            { className: De },
                                            n().createElement(pe.B, { classMix: ve, text: Ee }),
                                        ),
                                    n().createElement(
                                        'div',
                                        { className: s()(je.belowStatus, null == N ? void 0 : N.belowStatus) },
                                        B,
                                    ),
                                ),
                                i &&
                                    n().createElement(
                                        'div',
                                        { className: he },
                                        n().createElement(pe.B, { classMix: ve, text: (0, U.z4)(i) }),
                                    ),
                                E &&
                                    !j &&
                                    n().createElement(Ne, {
                                        index: q,
                                        text: E,
                                        isSmall: le,
                                        classMix: s()(je.timeLeft, le && je.timeLeft__small),
                                        tooltipId: m,
                                        modeName: V,
                                    }),
                                n().createElement(Te, { modeName: V, isDisabled: g, battlePassState: b }),
                            ),
                        );
                    },
                    Ze = {
                        widgetOverlay: 'Card_widgetOverlay_a5',
                        belowStatus: 'Card_belowStatus_b6',
                        base__b1: 'Card_base__b1_6f',
                        subtitle: 'Card_subtitle_4a',
                        base__b2: 'Card_base__b2_53',
                        name: 'Card_name_d9',
                    },
                    Ke = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Xe, Qe;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(Xe || (Xe = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Qe || (Qe = {}));
                const Je = ({ size: e = Xe.Default }) =>
                        n().createElement('div', { className: s()(Ke.background, Ke[`background__${e}`]) }),
                    et = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    tt = ({ size: e }) => {
                        const t = s()(et.base, et[`base__${e}`]);
                        return n().createElement('div', { className: t });
                    },
                    ut = {
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
                    at = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: _, withoutBounce: r }) => {
                            const i = s()(
                                    ut.base,
                                    ut[`base__${e}`],
                                    u && ut.base__disabled,
                                    _ && ut.base__finished,
                                    r && ut.base__withoutBounce,
                                ),
                                o = !u && !_;
                            return n().createElement(
                                'div',
                                { className: i, style: a, ref: t },
                                n().createElement('div', { className: ut.pattern }),
                                n().createElement('div', { className: ut.gradient }),
                                o && n().createElement(tt, { size: e }),
                            );
                        },
                    ),
                    _t = ({ size: e, value: t, lineRef: u, disabled: a, onComplete: _ }) => {
                        const i = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            s = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                s && _ && _();
                            }, [s, _]),
                            n().createElement(at, { size: e, disabled: a, baseStyles: i, isComplete: s, lineRef: u })
                        );
                    },
                    rt = (e, t) => {
                        let u;
                        const a = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            'function' == typeof u && u(), clearTimeout(a);
                        };
                    };
                let nt, it;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(nt || (nt = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(it || (it = {}));
                const st = 'ProgressBarDeltaSimple_base_6c',
                    ot = 'ProgressBarDeltaSimple_delta_99',
                    lt = (0, r.memo)(
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
                                c = (0, r.useState)(it.Idle),
                                m = c[0],
                                d = c[1],
                                b = m === it.In,
                                g = m === it.End,
                                E = m === it.Idle,
                                A = (0, r.useCallback)(
                                    (e) => {
                                        d(e), o && o(e);
                                    },
                                    [o],
                                );
                            (0, r.useEffect)(() => {
                                if (E && !u) {
                                    return rt(() => {
                                        A(it.In);
                                    }, t);
                                }
                            }, [A, u, E, t]),
                                (0, r.useEffect)(() => {
                                    if (b) {
                                        return rt(() => {
                                            s && s(), A(it.End);
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
                                p = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(a - i)}%`, left: `${l ? i : a}%` }),
                                    [a, l, i],
                                );
                            return g
                                ? null
                                : n().createElement(
                                      'div',
                                      { className: st, style: p },
                                      n().createElement(
                                          'div',
                                          { style: E ? C : F, className: ot },
                                          n().createElement(tt, { size: _ }),
                                      ),
                                  );
                        },
                    ),
                    ct = (0, r.memo)(
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
                                n().createElement(at, {
                                    size: t,
                                    lineRef: a,
                                    disabled: _,
                                    isComplete: i,
                                    baseStyles: c,
                                }),
                                u >= 0 &&
                                    n().createElement(lt, {
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
                    mt = 'ProgressBarDeltaGrow_base_7e',
                    dt = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    bt = 'ProgressBarDeltaGrow_glow_68',
                    gt = (e) => (e ? { left: 0 } : { right: 0 }),
                    Et = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    At = (e) => ({ transitionDuration: `${e}ms` }),
                    Ct = (0, r.memo)(
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
                                d = (0, r.useState)(nt.Idle),
                                b = d[0],
                                g = d[1],
                                E = b === nt.End,
                                A = b === nt.Idle,
                                C = b === nt.Grow,
                                F = b === nt.Shrink,
                                p = (0, r.useCallback)(
                                    (e) => {
                                        g(e), l && l(e);
                                    },
                                    [l],
                                ),
                                B = (0, r.useCallback)(
                                    (e, t) =>
                                        rt(() => {
                                            p(e);
                                        }, t),
                                    [p],
                                );
                            (0, r.useEffect)(() => {
                                if (!u)
                                    return A
                                        ? B(nt.Grow, t)
                                        : C
                                          ? B(nt.Shrink, e)
                                          : F
                                            ? B(nt.End, e)
                                            : void (E && o && o());
                            }, [B, u, E, C, A, F, o, t, e]);
                            const D = (0, r.useMemo)(() => Object.assign({ width: '100%' }, At(e), gt(m)), [m, e]),
                                h = (0, r.useMemo)(() => Object.assign({ width: '0%' }, At(e), gt(m)), [m, e]),
                                v = (0, r.useMemo)(() => Object.assign({ width: '0%' }, Et(m, a), At(e)), [a, m, e]),
                                f = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - a)}%` }, Et(m, a), At(e)),
                                    [a, m, i, e],
                                );
                            if (E) return null;
                            const x = s()(mt, c, m && 0 === i && dt);
                            return n().createElement(
                                'div',
                                { style: A ? v : f, className: x },
                                n().createElement(
                                    'div',
                                    { style: F ? h : D, className: bt },
                                    n().createElement(tt, { size: _ }),
                                ),
                            );
                        },
                    ),
                    Ft = (0, r.memo)(
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
                                m = (0, r.useState)(!1),
                                d = m[0],
                                b = m[1],
                                g = (0, r.useCallback)(
                                    (e) => {
                                        e === nt.Shrink && b(!0), l && l(e);
                                    },
                                    [l],
                                ),
                                E = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                A = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, e],
                                );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(at, {
                                    size: t,
                                    lineRef: a,
                                    disabled: _,
                                    isComplete: i,
                                    withoutBounce: c && 0 === e,
                                    baseStyles: d ? A : E,
                                }),
                                u >= 0 &&
                                    n().createElement(Ct, {
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
                    pt = ['onComplete', 'onEndAnimation'];
                function Bt() {
                    return (
                        (Bt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Bt.apply(this, arguments)
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
                            })(e, pt);
                        const _ = (0, r.useState)(!1),
                            i = _[0],
                            s = _[1],
                            o = (0, r.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== i && s(e), e && t && t(), u && u();
                            }, [i, t, u, a.to]);
                        switch (a.animationSettings.type) {
                            case Qe.Simple:
                                return n().createElement(ct, Bt({}, a, { onEndAnimation: o, isComplete: i }));
                            case Qe.Growing:
                                return n().createElement(Ft, Bt({}, a, { onEndAnimation: o, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    ht = ['onEndAnimation'];
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
                const ft = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                _ = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                            return _;
                        })(e, ht);
                    const a = (0, r.useRef)({}),
                        _ = (0, r.useCallback)(() => {
                            (a.current.from = void 0), t && t();
                        }, [t]),
                        i = 'number' == typeof a.current.from ? a.current.from : u.from;
                    return (
                        (a.current.from = i),
                        n().createElement(Dt, vt({}, u, { onEndAnimation: _, key: `${i}-${u.to}`, from: i }))
                    );
                });
                function xt() {
                    return (
                        (xt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        xt.apply(this, arguments)
                    );
                }
                const wt = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: a,
                            deltaFrom: _,
                            animationSettings: r,
                            onEndAnimation: i,
                            onChangeAnimationState: s,
                            onComplete: o,
                        }) => {
                            if (_ === t)
                                return n().createElement(_t, {
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
                                onEndAnimation: i,
                                onChangeAnimationState: s,
                            };
                            return r.withStack
                                ? n().createElement(ft, l)
                                : n().createElement(Dt, xt({ key: `${_}-${t}` }, l));
                        },
                    ),
                    St = (e) => ({
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
                    kt = (e, t, u) => (u < e ? e : u > t ? t : u),
                    yt = (e, t, u) => {
                        if ('number' == typeof u) {
                            return (kt(0, t, u) / t) * 100;
                        }
                        return e;
                    },
                    Tt = Nt,
                    Lt = {
                        freezed: !1,
                        withStack: !1,
                        type: Qe.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Wt = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Tt,
                            size: u = Xe.Default,
                            animationSettings: a = Lt,
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
                                (0, r.useMemo)(() => {
                                    const a = (kt(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: yt(a, t, u) };
                                }, [u, t, e]))(o, e, l);
                            return n().createElement(
                                'div',
                                { className: s()(Ke.base, Ke[`base__${u}`]), style: St(t) },
                                !i && n().createElement(Je, { size: u }),
                                n().createElement(wt, {
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
                    Rt = {
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
                    Mt = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Pt = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    It = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Ot = (0, r.memo)(({ text: e, binding: t, classMix: u }) => {
                        const a = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            _ = (0, r.useMemo)(() => t || {}, [t]);
                        let i = Mt.exec(e),
                            s = e,
                            o = 0;
                        for (; i; ) {
                            const u = i[0],
                                r = Pt.exec(u),
                                l = It.exec(u),
                                c = i[1];
                            if (r && l) {
                                const e = r[0],
                                    i = e + o++ + e;
                                (s = s.replace(u, `%(${i})`)),
                                    (_[i] = Rt[e]
                                        ? n().createElement(
                                              'span',
                                              { className: Rt[e] },
                                              n().createElement(Fe.z, { text: c, binding: t }),
                                          )
                                        : n().createElement(
                                              'span',
                                              { style: a(e) },
                                              n().createElement(Fe.z, { text: c, binding: t }),
                                          ));
                            }
                            i = Mt.exec(e);
                        }
                        return n().createElement(Fe.z, { text: s, classMix: u, binding: _ });
                    }),
                    $t = {
                        base: 'Progression_base_94',
                        title: 'Progression_title_81',
                        contentWrapper: 'Progression_contentWrapper_3a',
                        progress: 'Progression_progress_7b',
                        currentStage: 'Progression_currentStage_67',
                        progressValue: 'Progression_progressValue_f7',
                        progressValueIcon: 'Progression_progressValueIcon_e9',
                    },
                    Ht = R.strings.mode_selector.mode.battleRoyale.progression,
                    zt = {
                        freezed: !1,
                        withStack: !1,
                        type: Qe.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    Ut = ({ status: e = be.ACTIVE, currentStage: t, stageCurrentPoints: u, stageMaximumPoints: a }) =>
                        n().createElement(
                            'div',
                            { className: s()($t.base, $t[`base__${e}`]) },
                            n().createElement(
                                'div',
                                { className: $t.contentWrapper },
                                u !== a &&
                                    e === be.ACTIVE &&
                                    n().createElement(
                                        'div',
                                        { className: $t.progress },
                                        n().createElement(
                                            'div',
                                            { className: $t.currentStage },
                                            Ht.currentStage(),
                                            n().createElement('span', null, t),
                                        ),
                                        n().createElement(Wt, {
                                            size: Xe.Small,
                                            value: u,
                                            maxValue: a,
                                            animationSettings: zt,
                                            deltaFrom: u,
                                        }),
                                        n().createElement(
                                            'div',
                                            { className: $t.progressValue },
                                            n().createElement(Ot, { text: Ht.steps(), binding: { done: u, total: a } }),
                                            n().createElement('div', { className: $t.progressValueIcon }),
                                        ),
                                    ),
                            ),
                        ),
                    jt = ['size', 'showWidget', 'widget', 'name'];
                function Vt() {
                    return (
                        (Vt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Vt.apply(this, arguments)
                    );
                }
                const qt = (e) => {
                    let t = e.size,
                        u = e.showWidget,
                        a = e.widget,
                        _ = e.name,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                _ = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                            return _;
                        })(e, jt);
                    const i = t === de.Id.B1 && u;
                    return n().createElement(
                        'div',
                        { className: Ze[`base__${t}`] },
                        n().createElement(
                            Ye,
                            Vt(
                                {
                                    showWidget: u,
                                    size: t,
                                    belowStatusComponent: i && n().createElement(Ut, a),
                                    classNames: { belowStatus: Ze.belowStatus, subtitle: Ze.subtitle, name: Ze.name },
                                },
                                r,
                                { name: n().createElement(Fe.z, { text: _ }) },
                            ),
                        ),
                    );
                };
                let Gt, Yt;
                !(function (e) {
                    (e[(e.A = 1)] = 'A'),
                        (e[(e.B = 2)] = 'B'),
                        (e[(e.C = 3)] = 'C'),
                        (e[(e.D = 4)] = 'D'),
                        (e[(e.E = 5)] = 'E');
                })(Gt || (Gt = {})),
                    (function (e) {
                        (e[(e.Achieved = 0)] = 'Achieved'),
                            (e[(e.Current = 1)] = 'Current'),
                            (e[(e.Inactive = 2)] = 'Inactive');
                    })(Yt || (Yt = {}));
                const Zt = R.strings.comp7.division,
                    Kt = { [Gt.A]: 'A', [Gt.B]: 'B', [Gt.C]: 'C', [Gt.D]: 'D', [Gt.E]: 'E' },
                    Xt = (e) => Zt.$dyn(Kt[e]);
                let Qt;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(Qt || (Qt = {}));
                const Jt = {
                        [Qt.First]: 'first',
                        [Qt.Second]: 'second',
                        [Qt.Third]: 'third',
                        [Qt.Fourth]: 'fourth',
                        [Qt.Fifth]: 'fifth',
                        [Qt.Sixth]: 'sixth',
                    },
                    eu = (e) => ((e, t) => `${e.$dyn(Jt[t])}`)(R.strings.comp7.rank, e),
                    tu = [Qt.First, Qt.Second, Qt.Third, Qt.Fourth],
                    uu = (e) => tu.includes(e),
                    au = {
                        widget: 'Comp7BattleCard_widget_3b',
                        base__b0: 'Comp7BattleCard_base__b0_91',
                        base__b1: 'Comp7BattleCard_base__b1_30',
                        base__b2: 'Comp7BattleCard_base__b2_da',
                        belowStatus: 'Comp7BattleCard_belowStatus_48',
                    },
                    _u = 'QualificationCounter_base_fb',
                    ru = 'QualificationCounter_dash_e2',
                    nu = 'QualificationCounter_dash__right_3e',
                    iu = 'QualificationCounter_iconContainer_c3',
                    su = 'QualificationCounter_battleIcon_2e',
                    ou = 'QualificationCounter_score_3b',
                    lu = ({ battlesCount: e, maxBattlesCount: t, className: u }) =>
                        n().createElement(
                            'div',
                            { className: s()(_u, u) },
                            n().createElement('div', { className: ru }),
                            n().createElement(Ot, {
                                text: R.strings.comp7.qualification.battlesCounter(),
                                binding: {
                                    battleIcon: n().createElement(
                                        'div',
                                        { className: iu },
                                        n().createElement('div', { className: su }),
                                    ),
                                    battlesCount: e,
                                    maxBattlesCount: t,
                                },
                                classMix: ou,
                            }),
                            n().createElement('div', { className: s()(ru, nu) }),
                        ),
                    cu = (e) => {
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
                var mu = u(3403),
                    du = u(7030);
                const bu = {
                        [Qt.First]: 'first',
                        [Qt.Second]: 'second',
                        [Qt.Third]: 'third',
                        [Qt.Fourth]: 'fourth',
                        [Qt.Fifth]: 'fifth',
                        [Qt.Sixth]: 'sixth',
                    },
                    gu = (e) => bu[e],
                    Eu = 'RankEmblem_base_ec';
                let Au;
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
                })(Au || (Au = {}));
                const Cu = ({ rank: e, size: t, division: u, className: a }) => {
                        const _ = (0, r.useMemo)(() => {
                            const a = R.images.gui.maps.icons.comp7.ranks.$num(t),
                                _ = uu(e) && void 0 !== u ? `_${Xt(u)}` : '';
                            return { backgroundImage: `url(${a.$dyn(`${gu(e)}${_}`)})`, '--imageSize': `${t}rem` };
                        }, [e, t, u]);
                        return n().createElement('div', { className: s()(Eu, a), style: _ });
                    },
                    Fu = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 100, config: { duration: 300 } };
                function pu() {
                    return !1;
                }
                console.log;
                var Bu = u(9174);
                function Du(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return hu(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return hu(e, t);
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
                function hu(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const vu = (e) => (0 === e ? window : window.subViews.get(e));
                const fu = ((e, t) => {
                        const u = (0, r.createContext)({});
                        return [
                            function ({ mode: _ = 'real', options: i, children: s, mocks: o }) {
                                const l = (0, r.useRef)([]),
                                    c = (u, _, r) => {
                                        var n;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = vu,
                                                context: _ = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, t = 0) {
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
                                                const i = (e) => {
                                                    const a = u(t),
                                                        r = _.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, n) => {
                                                        const s = 'string' == typeof n ? `${_}.${n}` : _,
                                                            o = a.O.view.addModelObserver(s, t, !0);
                                                        return r.set(o, u), e && u(i(n)), o;
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
                                                        for (var e, u = Du(r.keys()); !(e = u()).done; ) n(e.value, t);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(_),
                                            s =
                                                'real' === u
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === u ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            c = (e) => l.current.push(e),
                                            m = e({
                                                mode: u,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : o(e),
                                                            _ = Bu.LO.box(a, { equals: pu });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, Bu.aD)((e) => _.set(e)),
                                                                    e,
                                                                ),
                                                            _
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : o(e),
                                                            _ = Bu.LO.box(a, { equals: pu });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, Bu.aD)((e) => _.set(e)),
                                                                    e,
                                                                ),
                                                            _
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = o(t);
                                                        if (Array.isArray(e)) {
                                                            const _ = e.reduce(
                                                                (e, t) => ((e[t] = Bu.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, Bu.aD)((t) => {
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
                                                                    (e, [t, u]) => ((e[u] = Bu.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, Bu.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                n[u].set(e[t]);
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
                                            d = { mode: u, model: m, externalModel: s, cleanup: c };
                                        return {
                                            model: m,
                                            controls: 'mocks' === u && r ? r.controls(d) : t(d),
                                            externalModel: s,
                                            mode: u,
                                        };
                                    },
                                    m = (0, r.useRef)(!1),
                                    d = (0, r.useState)(_),
                                    b = d[0],
                                    g = d[1],
                                    E = (0, r.useState)(() => c(_, i, o)),
                                    A = E[0],
                                    C = E[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        m.current ? C(c(b, i, o)) : (m.current = !0);
                                    }, [o, b, i]),
                                    (0, r.useEffect)(() => {
                                        g(_);
                                    }, [_]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            A.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [A],
                                    ),
                                    n().createElement(u.Provider, { value: A }, s)
                                );
                            },
                            () => (0, r.useContext)(u),
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
                    xu = (fu[0], fu[1]),
                    wu = 'Progress_base_2e',
                    Su = 'Progress_progress_32',
                    Nu = 'Progress_status_95',
                    ku = 'Progress_statusPoints_73',
                    yu = 'Progress_points_a7',
                    Tu = 'Progress_dash_32',
                    Lu = 'Progress_dash__right_fb',
                    Wu = 'Progress_score_c0',
                    Ru = ({ rank: e, currentScore: t, prevScore: u, divisionInfo: a, className: _ }) =>
                        uu(e)
                            ? n().createElement(
                                  'div',
                                  { className: s()(wu, _) },
                                  n().createElement(
                                      'div',
                                      { className: Su },
                                      n().createElement(Wt, {
                                          size: Xe.Small,
                                          value: t - a.from,
                                          maxValue: a.to - a.from,
                                          deltaFrom: u - a.from,
                                      }),
                                  ),
                                  n().createElement(
                                      'div',
                                      { className: Nu },
                                      n().createElement(Fe.z, {
                                          text: R.strings.comp7.mainWidget.status(),
                                          binding: {
                                              score: n().createElement('span', { className: ku }, t),
                                              scoreToNextDivision: a.to,
                                          },
                                      }),
                                  ),
                              )
                            : n().createElement(
                                  'div',
                                  { className: yu },
                                  n().createElement('div', { className: Tu }),
                                  n().createElement('div', { className: Wu }, t),
                                  n().createElement('div', { className: s()(Tu, Lu) }),
                              ),
                    Mu = R.strings.comp7.qualification,
                    Pu = { hasHtmlContent: !0 },
                    Iu = ({ maxBattlesCount: e, children: t }) =>
                        n().createElement(
                            z,
                            {
                                header: Mu.conditionTooltip.header(),
                                body: (0, U.uF)(Mu.conditionTooltip.body(e), { maxBattlesCount: e }),
                                args: Pu,
                            },
                            n().createElement('div', null, t),
                        ),
                    Ou = 'Qualification_base_46',
                    $u = 'Qualification_qualificationEmblem_01',
                    Hu = 'Qualification_ratingCalculation_8f',
                    zu = 'Qualification_timer_78',
                    Uu = R.strings.comp7.mainWidget,
                    ju = (0, mu.Pi)(({ classNames: e }) => {
                        const t = xu(),
                            u = t.model,
                            a = t.controls,
                            _ = u.root.get().isEnabled,
                            r = u.qualification.battlesCount.get(),
                            i = u.qualification.maxBattlesCount.get(),
                            o = u.qualification.isRatingCalculation.get();
                        return n().createElement(
                            'div',
                            { className: Ou },
                            n().createElement(
                                'div',
                                { className: null == e ? void 0 : e.content },
                                n().createElement(
                                    I.u,
                                    {
                                        contentId: R.views.lobby.comp7.tooltips.MainWidgetTooltip('resId'),
                                        isEnabled: _,
                                    },
                                    n().createElement(
                                        'div',
                                        {
                                            className: null == e ? void 0 : e.emblemContainer,
                                            onClick: _ ? a.onOpenMeta : void 0,
                                            onMouseDown: _ ? w.playClick : void 0,
                                            onMouseEnter: w.playHighlight,
                                        },
                                        n().createElement('div', { className: s()(null == e ? void 0 : e.emblem, $u) }),
                                    ),
                                ),
                                n().createElement(
                                    Iu,
                                    { maxBattlesCount: i },
                                    n().createElement(lu, { battlesCount: r, maxBattlesCount: i }),
                                ),
                            ),
                            o &&
                                n().createElement(
                                    z,
                                    { body: R.strings.comp7.qualification.ratingCalculationTooltip() },
                                    n().createElement(
                                        'div',
                                        null,
                                        n().createElement(Fe.z, {
                                            text: Uu.ratingCalculation(),
                                            classMix: Hu,
                                            binding: { timer: n().createElement('div', { className: zu }) },
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Vu = 'Warning_base_a5',
                    qu = 'Warning_lighting_e0',
                    Gu = 'Warning_value_1e',
                    Yu = 'Warning_base__text_08',
                    Zu = 'Warning_timer_fe',
                    Ku = ({ rankInactivityCount: e, warningText: t, className: u }) => {
                        const a = 0 === e;
                        return n().createElement(
                            'div',
                            { className: s()(Vu, a && Yu, u) },
                            !a && n().createElement('div', { className: qu }),
                            n().createElement('div', { className: Gu }, a ? t : e),
                            n().createElement(
                                'div',
                                { className: Zu },
                                a && n().createElement('div', { className: qu }),
                            ),
                        );
                    },
                    Xu = 'App_base_de',
                    Qu = 'App_content_da',
                    Ju = 'App_emblemContainer_dc',
                    ea = 'App_base__unavailable_e1',
                    ta = 'App_emblem_90',
                    ua = 'App_progression_e6',
                    aa = 'App_warning_f8',
                    _a = R.strings.comp7.scoreTooltip,
                    ra = { content: Qu, emblemContainer: Ju, emblem: ta },
                    na =
                        ((0, mu.Pi)(() => {
                            const e = xu(),
                                t = e.model,
                                u = e.controls,
                                a = t.root.get(),
                                _ = a.hasRankInactivityWarning,
                                i = a.rankInactivityCount,
                                o = a.isEnabled,
                                l = a.rank,
                                c = a.currentScore,
                                m = a.prevScore,
                                d = t.divisionInfo.get(),
                                b = (0, r.useRef)(null),
                                E = g().mediaSize,
                                A = (0, du.useSpring)(Fu);
                            return (
                                (0, r.useEffect)(
                                    () =>
                                        cu(() => {
                                            if (null != b && b.current) {
                                                const e = b.current.getBoundingClientRect();
                                                viewEnv.setInputArea(
                                                    viewEnv.pxToRem(e.x),
                                                    viewEnv.pxToRem(e.y),
                                                    viewEnv.pxToRem(e.width),
                                                    viewEnv.pxToRem(e.height),
                                                );
                                            }
                                        }),
                                    [E, _],
                                ),
                                n().createElement(
                                    du.animated.div,
                                    { className: s()(Xu, !o && ea), ref: b, style: A },
                                    t.qualification.isActive.get()
                                        ? n().createElement(ju, { classNames: ra })
                                        : n().createElement(
                                              n().Fragment,
                                              null,
                                              n().createElement(
                                                  'div',
                                                  { className: Qu },
                                                  n().createElement(
                                                      I.u,
                                                      {
                                                          contentId:
                                                              R.views.lobby.comp7.tooltips.MainWidgetTooltip('resId'),
                                                          isEnabled: o,
                                                      },
                                                      n().createElement(
                                                          'div',
                                                          {
                                                              className: Ju,
                                                              onClick: o ? u.onOpenMeta : void 0,
                                                              onMouseDown: o ? w.playClick : void 0,
                                                              onMouseEnter: w.playHighlight,
                                                          },
                                                          n().createElement(Cu, {
                                                              rank: l,
                                                              size: Au.x150,
                                                              className: ta,
                                                              division: o ? d.name : void 0,
                                                          }),
                                                      ),
                                                  ),
                                                  o &&
                                                      n().createElement(
                                                          z,
                                                          { header: _a.header(), body: _a.body() },
                                                          n().createElement(
                                                              'div',
                                                              null,
                                                              n().createElement(Ru, {
                                                                  rank: l,
                                                                  currentScore: c,
                                                                  prevScore: m,
                                                                  divisionInfo: d,
                                                                  className: ua,
                                                              }),
                                                          ),
                                                      ),
                                              ),
                                              o &&
                                                  _ &&
                                                  n().createElement(
                                                      I.u,
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
                                                          n().createElement(Ku, {
                                                              rankInactivityCount: i,
                                                              warningText: R.strings.comp7.mainWidget.warning(),
                                                              className: aa,
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
                    ia = R.strings.comp7.scoreTooltip,
                    sa = ({
                        rankInactivityCount: e,
                        hasRankInactivityWarning: t,
                        rank: u,
                        currentScore: a,
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
                                { className: na.base },
                                o.isActive
                                    ? n().createElement(
                                          'div',
                                          { className: s()(na.battlesCounter, na[`battlesCounter__${i}`]) },
                                          n().createElement(lu, {
                                              battlesCount: o.battlesCount,
                                              maxBattlesCount: o.maxBattlesCount,
                                          }),
                                      )
                                    : n().createElement(
                                          z,
                                          { header: ia.header(), body: ia.body() },
                                          n().createElement(Ru, {
                                              rank: u,
                                              currentScore: a,
                                              prevScore: _,
                                              divisionInfo: r,
                                              className: na.progress,
                                          }),
                                      ),
                            ),
                            t &&
                                n().createElement(
                                    I.u,
                                    {
                                        contentId: R.views.lobby.comp7.tooltips.RankInactivityTooltip('resId'),
                                        ignoreShowDelay: !0,
                                    },
                                    n().createElement(
                                        'div',
                                        null,
                                        n().createElement(Ku, {
                                            rankInactivityCount: e,
                                            warningText: R.strings.mode_selector.mode.comp7.warning(),
                                            className: na.warning,
                                        }),
                                    ),
                                ),
                        ),
                    oa = 'Widget_qualificationEmblem_d8',
                    la = 'Widget_qualificationEmblem__x64_5d',
                    ca = 'Widget_qualificationEmblem__x150_f1',
                    ma = ({ widget: e, className: t }) => {
                        const u = g().mediaSize < m.Medium,
                            a = e.qualificationModel.isActive;
                        return n().createElement(
                            I.u,
                            { contentId: R.views.lobby.comp7.tooltips.MainWidgetTooltip('resId') },
                            n().createElement(
                                'div',
                                { onMouseEnter: w.playHighlight },
                                a
                                    ? n().createElement('div', { className: s()(oa, u ? la : ca, t) })
                                    : n().createElement(Cu, {
                                          rank: e.rank,
                                          division: u ? void 0 : e.divisionInfo.name,
                                          size: u ? Au.x64 : Au.x150,
                                          className: t,
                                      }),
                            ),
                        );
                    },
                    da = ['size', 'description', 'showWidget', 'widget'];
                function ba() {
                    return (
                        (ba =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ba.apply(this, arguments)
                    );
                }
                const ga = R.strings.mode_selector.mode.comp7.widgetDescription,
                    Ea = [de.Id.B0, de.Id.B1],
                    Aa = (e) => {
                        if (e.qualificationModel.isActive) {
                            const t = e.qualificationModel.maxBattlesCount;
                            return (0, U.uF)(ga.qualification(t), { maxBattlesCount: t });
                        }
                        const t = eu(e.rank);
                        return uu(e.rank)
                            ? (0, U.uF)(ga.status(), {
                                  rank: t,
                                  division: ((u = e.divisionInfo.name), (0, U.uF)(Zt.text(), { division: Xt(u) })),
                              })
                            : t;
                        var u;
                    },
                    Ca = (e) => {
                        let t = e.size,
                            u = e.description,
                            a = e.showWidget,
                            _ = e.widget,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, da);
                        const i = _ && _.isEnabled,
                            s = a && i && Ea.includes(t);
                        return n().createElement(
                            'div',
                            { className: au[`base__${t}`] },
                            n().createElement(
                                Ye,
                                ba(
                                    {
                                        widgetComponent:
                                            i && n().createElement(ma, { widget: _, className: au.widget }),
                                        showWidget: a,
                                        size: t,
                                        belowStatusComponent: s && n().createElement(sa, ba({}, _, { size: t })),
                                        description: a && i ? Aa(_) : u,
                                        classNames: { belowStatus: au.belowStatus },
                                    },
                                    r,
                                ),
                            ),
                        );
                    };
                var Fa = u(9459);
                let pa, Ba;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(pa || (pa = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(Ba || (Ba = {}));
                const Da = 'Countdown_base_fe',
                    ha = 'Countdown_icon_8b',
                    va = 'Countdown_description_8d',
                    fa = (e) => e.toString().padStart(2, '0'),
                    xa = (e, t) => {
                        switch (t) {
                            case Ba.Description:
                                return ((e, t = !0) =>
                                    e.days > 7 && t
                                        ? (0, U.WU)(R.strings.common.duration.days(), { days: e.days })
                                        : e.days >= 1
                                          ? 0 === e.hours
                                              ? (0, U.WU)(R.strings.common.duration.days(), { days: e.days })
                                              : `${(0, U.WU)(R.strings.common.duration.days(), { days: e.days })} ${(0, U.WU)(R.strings.common.duration.hours(), { hours: e.hours })}`
                                          : e.hours >= 1
                                            ? 0 === e.minutes
                                                ? (0, U.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                                : `${(0, U.WU)(R.strings.common.duration.hours(), { hours: e.hours })} ${(0, U.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                            : (0, U.WU)(R.strings.common.duration.minutes(), {
                                                  minutes: e.minutes || 1,
                                              }))(e);
                            case Ba.Short:
                                return `${fa(e.minutes)}:${fa(e.seconds)}`;
                            case Ba.Long:
                                return `${fa(e.hours)}:${fa(e.minutes)}:${fa(e.seconds)}`;
                            case Ba.Extended:
                                return `${(0, U.WU)(R.strings.common.duration.days(), { days: e.days })} | ${fa(e.hours)}:${fa(e.minutes)}:${fa(e.seconds)}`;
                        }
                    },
                    wa = R.images.gui.maps.icons.components.countdown,
                    Sa = (e, t) => {
                        const u = 2 === t ? wa.big : wa;
                        switch (e) {
                            case pa.Timer:
                                return u.clock();
                            case pa.Countdown:
                                return u.hourglass();
                            case pa.Cooldown:
                                return u.lock();
                        }
                    },
                    Na = (0, r.memo)(
                        ({
                            duration: e,
                            icon: t = pa.Timer,
                            style: u = Ba.Description,
                            onTimeReached: _,
                            className: i = '',
                            classNames: o = {},
                            labelFormat: l = '',
                        }) => {
                            const c = u !== Ba.Description ? 1 : void 0,
                                m = ie(e, c),
                                d = (() => {
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
                            _ && _[m] && _[m]();
                            const b = xa(
                                (function (e = 0) {
                                    let t = e;
                                    const u = Math.trunc(t / Y);
                                    t -= u * Y;
                                    const a = Math.trunc(t / G);
                                    t -= a * G;
                                    const _ = Math.trunc(t / q);
                                    return (t -= _ * q), { days: u, hours: a, minutes: _, seconds: t };
                                })(m),
                                u,
                            );
                            return n().createElement(
                                'div',
                                { className: s()(Da, i) },
                                t !== pa.None &&
                                    n().createElement('div', {
                                        className: s()(ha, o.icon),
                                        style: { backgroundImage: `url('${Sa(t, d)}')` },
                                    }),
                                l
                                    ? n().createElement(
                                          'div',
                                          { className: s()(va, o.text) },
                                          n().createElement(Fe.z, { text: l, binding: { timerText: b } }),
                                      )
                                    : n().createElement('div', { className: s()(va, o.text) }, b),
                            );
                        },
                    );
                let ka;
                !(function (e) {
                    (e.DISABLED = 'disabled'), (e.ACTIVE = 'active'), (e.RESETTABLE = 'resettable');
                })(ka || (ka = {}));
                const ya = {
                    base: 'Progression_base_4f',
                    title: 'Progression_title_d7',
                    base__resettable: 'Progression_base__resettable_e1',
                    base__disabled: 'Progression_base__disabled_bf',
                    contentWrapper: 'Progression_contentWrapper_24',
                    progress: 'Progression_progress_4f',
                    progressValue: 'Progression_progressValue_1a',
                    countdown: 'Progression_countdown_5b',
                };
                var Ta = u(9762),
                    La = u(6457);
                let Wa, Ra;
                !(function (e) {
                    (e.Init = 'init'),
                        (e.Active = 'active'),
                        (e.NonActive = 'nonActive'),
                        (e.UpdateState = 'updateState');
                })(Wa || (Wa = {})),
                    (function (e) {
                        (e.CheckDataUpdate = 'checkDataUpdate'),
                            (e.UpdateStageData = 'updateStageData'),
                            (e.SwitchState = 'switchState');
                    })(Ra || (Ra = {}));
                const Ma = (e) => e === ka.ACTIVE,
                    Pa = (e) => Ma(e.status),
                    Ia = (e) => !Ma(e.status),
                    Oa = (e, t) => e.status !== t.status && $a(e, t),
                    $a = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints === e.currentPoints &&
                        t.maximumPoints === e.maximumPoints &&
                        0 === e.earnedPoints,
                    Ha = (e, t) =>
                        Ma(t.status) &&
                        ((1 === t.stage && 0 === t.currentPoints) ||
                            (t.stage === e.stage && e.maximumPoints !== t.maximumPoints)),
                    za = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints === e.currentPoints &&
                        t.maximumPoints === e.maximumPoints &&
                        0 !== e.earnedPoints,
                    Ua = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints !== e.currentPoints &&
                        t.maximumPoints === e.maximumPoints,
                    ja = (e, t) => t.stage > e.stage && e.currentPoints < e.maximumPoints,
                    Va = (e, t) => t.stage > e.stage && e.currentPoints === e.maximumPoints,
                    qa = (e, t) => t.stage < e.stage && e.currentPoints > 0,
                    Ga = (e, t) => t.stage < e.stage && 0 === e.currentPoints,
                    Ya = (e, t) => e.status !== t.status && Ma(t.status),
                    Za = (e) => {
                        e.isSoundEnabled && 0 !== e.earnedPoints && x('ev_fep_progress_bar');
                    },
                    Ka = R.strings.fun_random.modes,
                    Xa = R.strings.fun_random.modeSelector.progression,
                    Qa = {
                        freezed: !1,
                        withStack: !1,
                        type: Qe.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    Ja = ({
                        status: e,
                        currentStage: t,
                        resetTimer: u,
                        stageCurrentPoints: a,
                        stageMaximumPoints: _,
                        conditionText: i,
                        isContentVisible: o,
                        assetsPointer: l,
                    }) => {
                        const c = n().useMemo(() => {
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
                                    (n = 300),
                                    (0, Ta.C)(
                                        {
                                            preserveActionOrder: !0,
                                            id: u,
                                            initial: Wa.Init,
                                            context: r,
                                            states: {
                                                [Wa.Init]: { always: { target: Wa.UpdateState } },
                                                [Wa.UpdateState]: {
                                                    always: [
                                                        { target: Wa.Active, cond: Pa },
                                                        { target: Wa.NonActive, cond: Ia },
                                                    ],
                                                },
                                                [Wa.Active]: {
                                                    on: {
                                                        [Ra.CheckDataUpdate]: [
                                                            {
                                                                target: Wa.Active,
                                                                actions: [
                                                                    (0, La.lW)((e, t) => ({
                                                                        type: Ra.SwitchState,
                                                                        status: t.status,
                                                                    })),
                                                                ],
                                                                cond: Oa,
                                                            },
                                                            { target: Wa.Active, cond: $a },
                                                            {
                                                                target: Wa.UpdateState,
                                                                actions: [
                                                                    (0, La.f0)({
                                                                        status: (e, t) => t.status,
                                                                        stage: (e, t) => t.stage,
                                                                        currentPoints: (e, t) => t.currentPoints,
                                                                        maximumPoints: (e, t) => t.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    }),
                                                                ],
                                                                cond: Ha,
                                                            },
                                                            {
                                                                target: Wa.Active,
                                                                actions: [
                                                                    (0, La.lW)((e) => ({
                                                                        type: Ra.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.maximumPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: e.maximumPoints - e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: ja,
                                                            },
                                                            {
                                                                target: Wa.Active,
                                                                actions: [
                                                                    (0, La.lW)((e, t) => ({
                                                                        type: Ra.UpdateStageData,
                                                                        stage: t.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: t.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    (0, La.lW)(
                                                                        (e, t) => ({
                                                                            type: Ra.UpdateStageData,
                                                                            stage: t.stage,
                                                                            currentPoints: t.currentPoints,
                                                                            maximumPoints: t.maximumPoints,
                                                                            earnedPoints: t.currentPoints,
                                                                        }),
                                                                        { delay: n },
                                                                    ),
                                                                ],
                                                                cond: Va,
                                                            },
                                                            {
                                                                target: Wa.Active,
                                                                actions: [
                                                                    (0, La.lW)((e, t) => ({
                                                                        type: Ra.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: t.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: t.currentPoints - e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: Ua,
                                                            },
                                                            {
                                                                target: Wa.Active,
                                                                actions: [
                                                                    (0, La.lW)((e) => ({
                                                                        type: Ra.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    (0, La.lW)((e, t) => ({
                                                                        type: Ra.SwitchState,
                                                                        status: t.status,
                                                                    })),
                                                                ],
                                                                cond: za,
                                                            },
                                                            {
                                                                target: Wa.Active,
                                                                actions: [
                                                                    (0, La.lW)((e) => ({
                                                                        type: Ra.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: -e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: qa,
                                                            },
                                                            {
                                                                target: Wa.Active,
                                                                actions: [
                                                                    (0, La.lW)((e, t) => ({
                                                                        type: Ra.UpdateStageData,
                                                                        stage: t.stage,
                                                                        currentPoints: t.currentPoints,
                                                                        maximumPoints: t.maximumPoints,
                                                                        earnedPoints: t.currentPoints - t.maximumPoints,
                                                                    })),
                                                                ],
                                                                cond: Ga,
                                                            },
                                                        ],
                                                        [Ra.UpdateStageData]: {
                                                            target: Wa.Active,
                                                            actions: [
                                                                (0, La.f0)({
                                                                    stage: (e, t) => t.stage,
                                                                    currentPoints: (e, t) => t.currentPoints,
                                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                                    earnedPoints: (e, t) => t.earnedPoints,
                                                                }),
                                                                Za,
                                                            ],
                                                        },
                                                        [Ra.SwitchState]: {
                                                            target: Wa.UpdateState,
                                                            actions: (0, La.f0)({ status: (e, t) => t.status }),
                                                        },
                                                    },
                                                },
                                                [Wa.NonActive]: {
                                                    on: {
                                                        [Ra.CheckDataUpdate]: {
                                                            target: Wa.UpdateState,
                                                            actions: [
                                                                (0, La.f0)({
                                                                    status: (e, t) => t.status,
                                                                    stage: (e, t) => t.stage,
                                                                    currentPoints: (e, t) => t.currentPoints,
                                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                                    earnedPoints: 0,
                                                                }),
                                                            ],
                                                            cond: Ya,
                                                        },
                                                        [Ra.SwitchState]: {
                                                            target: Wa.UpdateState,
                                                            actions: (0, La.f0)({ status: (e, t) => t.status }),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            guards: {
                                                hasActiveStatus: Pa,
                                                hasNonActiveStatus: Ia,
                                                isStatusUpdate: Oa,
                                                isNoUpdate: $a,
                                                isTaskSwitchingUpdate: Ha,
                                                isUpdateCurrentStageWithZeroEarnPoints: za,
                                                isUpdateCurrentStageWithCurrentPoints: Ua,
                                                isUpdateToNextStageWithoutFillMax: Va,
                                                isUpdateToNextStageWithFillMax: ja,
                                                isUpdateToPrevStageWithReset: qa,
                                                isUpdateToPrevStageWithoutReset: Ga,
                                                isUpdateWithActiveSwitch: Ya,
                                            },
                                        },
                                    )
                                );
                                var u, r, n;
                            }, []),
                            m = (0, Fa.eO)(c),
                            d = m[0],
                            b = m[1],
                            g = (0, r.useMemo)(() => {
                                var e;
                                return (null != (e = Ka.$dyn(l)) ? e : Ka.undefined).mode_selector.progression;
                            }, [l]),
                            E = d.context.status === ka.ACTIVE,
                            A = d.context.status === ka.RESETTABLE,
                            C = Xa.$dyn(d.context.currentPoints > 0 ? 'steps' : 'stepsNoProgress'),
                            F = g.resettable(),
                            p = A ? F : i;
                        (0, r.useEffect)(() => {
                            b({ type: Ra.CheckDataUpdate, status: e, stage: t, currentPoints: a, maximumPoints: _ });
                        }, [e, a, _, t, b]);
                        const B = (0, r.useCallback)(() => {
                            b({ type: Ra.CheckDataUpdate, status: e, stage: t, currentPoints: a, maximumPoints: _ });
                        }, [a, _, t, e, b]);
                        return n().createElement(
                            I.u,
                            {
                                contentId: R.views.fun_random.lobby.tooltips.FunRandomProgressionTooltipView('resId'),
                                isEnabled: E,
                            },
                            n().createElement(
                                'div',
                                { className: s()(ya.base, ya[`base__${d.context.status}`]) },
                                n().createElement('div', { className: ya.title }, p),
                                n().createElement(
                                    'div',
                                    { className: ya.contentWrapper },
                                    n().createElement(
                                        'div',
                                        { className: ya.progress },
                                        n().createElement(
                                            'div',
                                            { className: ya.progressValue },
                                            n().createElement(Ot, {
                                                text: C,
                                                binding: {
                                                    done: d.context.currentPoints,
                                                    total: d.context.maximumPoints,
                                                },
                                            }),
                                        ),
                                        n().createElement(Wt, {
                                            size: Xe.Small,
                                            value: d.context.currentPoints,
                                            maxValue: d.context.maximumPoints,
                                            animationSettings: Qa,
                                            deltaFrom: d.context.currentPoints - d.context.earnedPoints,
                                            onEndAnimation: B,
                                        }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: ya.countdown },
                                        n().createElement(Na, { duration: u, style: Ba.Description }),
                                    ),
                                ),
                            ),
                        );
                    },
                    e_ = {
                        widgetOverlay: 'FunRandomCard_widgetOverlay_f2',
                        subtitle: 'FunRandomCard_subtitle_d0',
                        belowStatus: 'FunRandomCard_belowStatus_03',
                    },
                    t_ = ['size', 'showWidget', 'widget', 'isContentVisible', 'resourcesFolderName'];
                function u_() {
                    return (
                        (u_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        u_.apply(this, arguments)
                    );
                }
                const a_ = R.images.fun_random.gui.maps.icons.feature.asset_packs.modes,
                    __ = (e) => {
                        let t = e.size,
                            u = e.showWidget,
                            a = e.widget,
                            _ = e.isContentVisible,
                            r = e.resourcesFolderName,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, t_);
                        const s = t === de.Id.B1 && u;
                        return n().createElement(
                            'div',
                            { className: e_[`base__${t}`] },
                            n().createElement(
                                Ye,
                                u_(
                                    {
                                        showWidget: u,
                                        size: t,
                                        belowStatusComponent:
                                            s &&
                                            n().createElement(Ja, u_({}, a, { isContentVisible: _, assetsPointer: r })),
                                        classNames: { belowStatus: e_.belowStatus, subtitle: e_.subtitle },
                                        resourcesFolderName: r,
                                    },
                                    i,
                                    {
                                        resourceFolderGetter: (e) => {
                                            var t;
                                            return (null != (t = a_.$dyn(e)) ? t : a_.undefined).mode_selector;
                                        },
                                    },
                                ),
                            ),
                        );
                    },
                    r_ = 'display',
                    n_ = (e) => {
                        (0, r.useEffect)(e, []);
                    },
                    i_ = {
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
                var s_;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(s_ || (s_ = {}));
                const o_ = ['__left', '__right', '__top', '__bottom'],
                    l_ =
                        ((0, r.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: u, customStyles: _ = {} }, i) => {
                                const o = (0, r.useRef)(null),
                                    l = (0, r.useRef)(null),
                                    c = (0, r.useRef)(null),
                                    m = (0, r.useState)(window.decorator && window.decorator.directionType),
                                    d = m[0],
                                    b = m[1],
                                    g = (0, r.useCallback)(() => {
                                        w.playClick(), a.O.view.sendEvent.close();
                                    }, []),
                                    E = (0, r.useCallback)(() => {
                                        w.playHighlight();
                                    }, []),
                                    A = s()(i_.arrow, i_[`arrow${o_[d]}`]);
                                n_(
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
                                    F = (0, r.useCallback)(
                                        () => (
                                            a.O.view.freezeTextureBeforeResize(),
                                            cu(() => {
                                                if (l.current) {
                                                    const e = l.current.scrollWidth,
                                                        t = l.current.scrollHeight;
                                                    a.O.view.resize(e, t), b(window.decorator.directionType);
                                                }
                                            })
                                        ),
                                        [],
                                    );
                                return (
                                    (0, r.useImperativeHandle)(i, () => ({ updateSize: F })),
                                    n_(() => {
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
                                        })((0, V.Eu)());
                                        return (
                                            !t && e.promise.then(() => F()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', C);
                                            }
                                        );
                                    }, [F, C, t]),
                                    n().createElement(
                                        'div',
                                        { className: i_.base, ref: l },
                                        n().createElement(
                                            'div',
                                            { className: i_.decorator },
                                            n().createElement(
                                                'div',
                                                { className: i_.content, ref: o },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    n().createElement(
                                                        z,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        n().createElement('div', {
                                                            className: i_.closeBtn,
                                                            onClick: g,
                                                            onMouseEnter: E,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            n().createElement('div', { className: A, style: _.arrow }),
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
                function c_() {
                    return (
                        (c_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        c_.apply(this, arguments)
                    );
                }
                const m_ = (e) => {
                        let t = e.contentId,
                            u = e.decoratorId,
                            a = e.direction,
                            _ = void 0 === a ? s_.Top : a,
                            i = e.targetId,
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
                            })(e, l_);
                        const b = (0, r.useRef)(null),
                            g = (0, r.useCallback)(() => {
                                if ((0, V.wU)()) return (0, V.SW)();
                                b.current && (0, V.P3)(t, _, b.current, u, i, s);
                            }, [t, _, s, u, i]);
                        return n().createElement(
                            'div',
                            c_(
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
                    d_ = 'ToggleButton_base_d9',
                    b_ = 'ToggleButton_content_ee',
                    g_ = 'ToggleButton_overlay_d9',
                    E_ = 'ToggleButton_base__active_6e',
                    A_ = 'ToggleButton_indicator_c5',
                    C_ = ['active', 'className', 'children', 'size', 'showIndicator'];
                function F_() {
                    return (
                        (F_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        F_.apply(this, arguments)
                    );
                }
                const p_ = (e) => {
                        let t = e.active,
                            u = e.className,
                            a = e.children,
                            _ = e.size,
                            r = void 0 === _ ? k.small : _,
                            i = e.showIndicator,
                            o = void 0 === i || i,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, C_);
                        return n().createElement(
                            'div',
                            { className: s()(d_, u, t && E_) },
                            n().createElement(
                                T,
                                F_({ type: 'secondary', size: r }, l),
                                n().createElement('div', { className: b_ }, a),
                            ),
                            o && n().createElement('div', { className: A_ }),
                            n().createElement('div', { className: g_ }),
                        );
                    },
                    B_ =
                        ((0, r.memo)(p_),
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
                    D_ = R.strings.mode_selector.mode.random,
                    h_ = (0, r.memo)(
                        ({
                            contentId: e,
                            handleSettingsClick: t,
                            body: u,
                            showBigSettingsButton: a,
                            isShowButton: _,
                            isSettingsActive: r,
                            withBubble: i,
                        }) => {
                            const o = (0, me.Z)(['base', 'toggle', 'base__bigButton'], B_);
                            return n().createElement(
                                'div',
                                { className: s()(o.base, a && o.base__bigButton, _ && B_.base__anim), onClick: t },
                                n().createElement(
                                    m_,
                                    { contentId: e, direction: a ? s_.Top : s_.Right },
                                    n().createElement(
                                        z,
                                        { body: u, isEnabled: _ },
                                        n().createElement(
                                            p_,
                                            {
                                                type: N.ghost,
                                                size: k.medium,
                                                active: r,
                                                showIndicator: !1,
                                                mixClass: s()(o.toggle, !a && B_.toggle__shortBtn),
                                            },
                                            n().createElement(
                                                'div',
                                                { className: B_.settingsLabel },
                                                n().createElement('div', {
                                                    className: s()(B_.icon, !a && B_.icon__shortBtn),
                                                }),
                                                a && D_.setup(),
                                            ),
                                        ),
                                    ),
                                ),
                                Boolean(i) && n().createElement('div', { className: B_.bubble }),
                            );
                        },
                    ),
                    v_ = ['isSelected', 'onHoverChanged', 'isSettingsActive', 'withSettingsNotification', 'state'];
                function f_() {
                    return (
                        (f_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        f_.apply(this, arguments)
                    );
                }
                const x_ = (e) => {
                    let t = e.isSelected,
                        u = e.onHoverChanged,
                        a = e.isSettingsActive,
                        _ = e.withSettingsNotification,
                        i = e.state,
                        s = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                _ = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                            return _;
                        })(e, v_);
                    const o = (0, r.useCallback)((e) => {
                            e.stopPropagation();
                        }, []),
                        l = (0, Be.B)(u),
                        c = l[0],
                        m = l[1],
                        d = [de.Id.B0, de.Id.B1].includes(s.size),
                        b = (c || t || a) && !(1 === i),
                        g = ((e, t) => {
                            const u = ne('tutorialModel.effects.items').filter((u) => {
                                if (!u) return !1;
                                const a = u.value,
                                    _ = window.__featureId.toString();
                                return a.componentId === e && a.type === t && a.viewId === _;
                            });
                            if (0 === u.length) return null;
                            const a = Object.assign({}, u[0].value);
                            return {
                                effect: a,
                                completeEffect: () => {
                                    tutorialModel.onEffectCompleted({
                                        componentId: e,
                                        viewId: window.__featureId.toFixed(0),
                                        effectType: t,
                                        effectBuilder: a.builder,
                                    }),
                                        t === r_ && window.tutorialApi && window.tutorialApi.updateComponents();
                                },
                            };
                        })('RandomBattleModeGameface', r_);
                    return (
                        (0, r.useEffect)(
                            () =>
                                cu(() => {
                                    null !== g && g.completeEffect();
                                }),
                            [g],
                        ),
                        n().createElement(
                            Ye,
                            f_(
                                {
                                    id: 'mode-selector-random-battle',
                                    isSelected: t,
                                    onHoverChanged: m,
                                    state: i,
                                    belowStatusComponent: n().createElement(h_, {
                                        contentId: R.views.lobby.mode_selector.popovers.RandomBattlePopover('resId'),
                                        handleSettingsClick: o,
                                        body: R.strings.tooltips.mode_selector.popover.body(),
                                        showBigSettingsButton: d,
                                        isShowButton: b,
                                        isSettingsActive: a,
                                        withBubble: _,
                                    }),
                                },
                                s,
                            ),
                        )
                    );
                };
                function w_() {
                    return (
                        (w_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        w_.apply(this, arguments)
                    );
                }
                const S_ = [de.Id.B5, de.Id.B6],
                    N_ = [de.Id.B4, de.Id.B5, de.Id.B6],
                    k_ = [],
                    y_ = (e) => {
                        let t = w_({}, e);
                        return n().createElement(
                            Ye,
                            w_(
                                {
                                    calendarTooltip: ge.D3,
                                    forceShowIcon: t.showWidget && S_.includes(t.size),
                                    hideStatus: t.showWidget && N_.includes(t.size),
                                    noWidgetSizes: k_,
                                },
                                t,
                            ),
                        );
                    },
                    T_ = {
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
                    L_ = ({ totalCount: e, currentProgress: t, size: u }) => {
                        const a = u === de.Id.B1,
                            _ = (0, me.Z)(['base', 'textCollection', 'progress'], T_),
                            i = t && e ? (100 * t) / e : 0,
                            s = (0, r.useMemo)(
                                () => ({
                                    current: n().createElement('span', { className: T_.currentAmount }, t),
                                    total: e,
                                }),
                                [t, e],
                            );
                        return n().createElement(
                            'div',
                            { className: _.base },
                            n().createElement(
                                'div',
                                { className: T_.contentWrapper },
                                a &&
                                    n().createElement(
                                        'div',
                                        { className: _.progress },
                                        n().createElement(
                                            'div',
                                            { className: T_.progressValue },
                                            n().createElement(Fe.z, {
                                                classMix: _.textCollection,
                                                text: R.strings.mode_selector.mode.cosmic_event.progression(),
                                                binding: s,
                                            }),
                                        ),
                                        n().createElement(Wt, { size: Xe.Small, value: i, theme: Nt }),
                                    ),
                            ),
                        );
                    },
                    W_ = {
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
                        base__b3: 'Suspended_base__b3_a7',
                        base__b3__medium: 'Suspended_base__b3__medium_5a',
                        base__b3__extraLarge: 'Suspended_base__b3__extraLarge_ea',
                        base__b3__large: 'Suspended_base__b3__large_22',
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
                    R_ = ({ size: e }) => {
                        const t = (0, me.Z)(
                                [
                                    ...(0, de.Hp)('base', 'textContainer', 'lockBase'),
                                    'textContent',
                                    'primeTimeValue',
                                    'locked',
                                ],
                                W_,
                            ),
                            u = s()(t.base, t[`base__${e}`]),
                            a = s()(t.textContainer, t[`textContainer__${e}`]),
                            _ = s()(t.lockBase, t[`lockBase__${e}`]);
                        return n().createElement(
                            'div',
                            { className: u },
                            n().createElement(
                                'div',
                                { className: a },
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
                                n().createElement(Fe.z, {
                                    classMix: t.primeTimeValue,
                                    text: R.strings.mode_selector.mode.cosmic_event.primeTime(),
                                }),
                            ),
                        );
                    },
                    M_ = ['showWidget', 'size', 'widget', 'isSuspended'];
                function P_() {
                    return (
                        (P_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        P_.apply(this, arguments)
                    );
                }
                const I_ = R.strings.mode_selector.mode.cosmic_event.description(),
                    O_ = (0, r.memo)((e) => {
                        let t = e.showWidget,
                            u = e.size,
                            a = e.widget,
                            _ = e.isSuspended,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, M_);
                        const i = u === de.Id.B1 && t,
                            s = !!_ || t,
                            o = _ ? '' : I_;
                        return n().createElement(
                            Ye,
                            P_(
                                {
                                    showWidget: s,
                                    size: u,
                                    isNotStarted: _,
                                    belowStatusComponent:
                                        (!_ && i && n().createElement(L_, P_({}, a, { size: u }))) ||
                                        (_ && n().createElement(R_, { size: u })),
                                },
                                r,
                                { statusActive: o },
                            ),
                        );
                    });
                let $_;
                !(function (e) {
                    (e.LowRisk = 'lowRisk'), (e.MediumRisk = 'mediumRisk'), (e.HighRisk = 'highRisk');
                })($_ || ($_ = {}));
                const H_ = {
                        base: 'Performance_base_32',
                        text: 'Performance_text_ca',
                        text__mediumRisk: 'Performance_text__mediumRisk_5a',
                        text__highRisk: 'Performance_text__highRisk_a7',
                        icon: 'Performance_icon_e9',
                        icon__mediumRisk: 'Performance_icon__mediumRisk_eb',
                        icon__highRisk: 'Performance_icon__highRisk_ab',
                    },
                    z_ = R.strings.hb_mode_selector.mode.historicalBattles.performance,
                    U_ = (0, r.memo)(({ performanceRisk: e }) => {
                        const t = s()(H_.text, H_[`text__${e}`]),
                            u = (0, r.useMemo)(() => {
                                const t = s()(H_.icon, H_[`icon__${e}`]);
                                return { icon: n().createElement('div', { className: t }) };
                            }, [e]),
                            a = (0, r.useMemo)(() => ({ header: z_.$dyn(e), body: z_.description.$dyn(e) }), [e]),
                            _ = '%(icon)' + z_.$dyn(e);
                        return e === $_.LowRisk
                            ? null
                            : n().createElement(
                                  z,
                                  a,
                                  n().createElement(
                                      'div',
                                      { className: H_.base },
                                      n().createElement(Fe.z, { classMix: t, text: _, binding: u }),
                                  ),
                              );
                    }),
                    j_ = ['performanceRisk'];
                function V_() {
                    return (
                        (V_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        V_.apply(this, arguments)
                    );
                }
                const q_ = R.strings.hb_mode_selector.mode.historicalBattles.description(),
                    G_ = (e) => {
                        let t = e.performanceRisk,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    _ = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (_[u] = e[u]);
                                return _;
                            })(e, j_);
                        const a = !u.showWidget && [de.Id.B0, de.Id.B1].includes(u.size);
                        return n().createElement(
                            Ye,
                            V_({ belowStatusComponent: a && n().createElement(U_, { performanceRisk: t }) }, u, {
                                description: q_,
                            }),
                        );
                    },
                    Y_ = ['type', 'widget', 'isContentVisible'];
                function Z_() {
                    return (
                        (Z_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Z_.apply(this, arguments)
                    );
                }
                const K_ = [de.Id.B6],
                    X_ = (e) => {
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
                            })(e, Y_);
                        const i = r.size;
                        switch (t) {
                            case 1:
                                return n().createElement(x_, r);
                            case 2: {
                                const e = u && u.isEnabled && n().createElement(Ce.n, Z_({ size: i }, u));
                                return n().createElement(y_, Z_({ widgetComponent: e }, r));
                            }
                            case 3:
                                return n().createElement(Ye, Z_({ calendarTooltip: ge.zD }, r));
                            case 4: {
                                const e =
                                    u &&
                                    u.isEnabled &&
                                    n().createElement(Ae.Gg, Z_({ size: i, conditions: r.conditions }, u));
                                return n().createElement(
                                    Ye,
                                    Z_(
                                        {
                                            calendarTooltip: ge.TR,
                                            widgetComponent: e,
                                            noWidgetSizes: K_,
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
                                        t === be.ACTIVE &&
                                        n().createElement(Ee.$, { size: i, isCompletedProgression: a === _ });
                                return n().createElement(qt, Z_({ widgetComponent: s, widget: u, divider: '\n' }, r));
                            }
                            case 6:
                                return n().createElement(
                                    __,
                                    Z_({ calendarTooltip: ge.$b, widget: u, isContentVisible: _, divider: '\n' }, r),
                                );
                            case 7:
                                return n().createElement(Ca, Z_({ calendarTooltip: ge.hg, widget: u }, r));
                            case 9:
                                return n().createElement(O_, Z_({ widget: u }, r));
                            case 10:
                                return n().createElement(G_, Z_({ calendarTooltip: ge.vw }, r));
                            default:
                                return n().createElement(Ye, r);
                        }
                    },
                    Q_ = 'Column_base_41';
                function J_() {
                    return (
                        (J_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        J_.apply(this, arguments)
                    );
                }
                const er = ({ items: e, showWidgets: t, state: u, canBeWide: a = !1, isContentVisible: _ = !0 }) => {
                        const r = (0, de.SH)(e.length, a);
                        return n().createElement(
                            'div',
                            { className: Q_ },
                            e
                                .sort((e, t) => e.priority - t.priority)
                                .map((e) =>
                                    n().createElement(
                                        X_,
                                        J_({ key: `item_${e.index}` }, e, {
                                            size: r,
                                            showWidget: t,
                                            state: u,
                                            isContentVisible: _,
                                        }),
                                    ),
                                ),
                        );
                    },
                    tr = {
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
                    ur = () => {
                        const e = ne(),
                            t = e.isMapSelectionVisible,
                            u = e.isMapSelectionEnabled,
                            a = e.onShowMapSelectionClicked,
                            _ = e.onShowWidgetsClicked,
                            i = e.areWidgetsVisible,
                            o = e.state,
                            l = e.isContentVisible,
                            c = ne('model.cardList'),
                            m = (0, r.useState)(!1),
                            d = m[0],
                            b = m[1],
                            g = (0, r.useRef)(!0),
                            E = 1 !== o,
                            A = E && i === !d,
                            C = (0, me.Z)(['closeButton', 'title', 'items', 'selectMapTitle'], tr),
                            F = {};
                        c.forEach(({ value: e }) => {
                            const t = e.column;
                            t in F || (F[t] = new Array()), F[t].push(e);
                        });
                        const p = Object.keys(F)
                                .sort((e, t) => parseInt(e) - parseInt(t))
                                .map((e) => F[e]),
                            B = (0, r.useCallback)(() => {
                                (0, V.Sy)();
                            }, []),
                            D = (0, r.useCallback)(() => {
                                a();
                            }, [a]),
                            h = (0, r.useCallback)(() => {
                                _();
                            }, [_]),
                            v = (0, r.useCallback)(() => {
                                g.current = !0;
                            }, []),
                            f = (0, r.useCallback)(() => {
                                (g.current = !1), !i && d && b(!1);
                            }, [i, d]);
                        ce(),
                            (0, r.useEffect)(() => {
                                function e(e) {
                                    g.current && b(e.altKey);
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
                        const x = (0, r.useRef)(null);
                        return (
                            (0, r.useEffect)(() => {
                                x.current &&
                                    (l
                                        ? (x.current.classList.remove(tr.base__hide),
                                          x.current.classList.add(tr.base__show))
                                        : (x.current.classList.remove(tr.base__show),
                                          x.current.classList.add(tr.base__hide)));
                            }, [l]),
                            n().createElement(
                                'div',
                                { className: tr.base, ref: x },
                                n().createElement(
                                    'div',
                                    { className: tr.placeholder, onMouseOver: v, onMouseLeave: f },
                                    n().createElement(
                                        'div',
                                        { className: C.closeButton },
                                        n().createElement(P, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: B,
                                        }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: tr.centerBlock },
                                        n().createElement(
                                            'div',
                                            { className: C.title },
                                            R.strings.mode_selector.title(),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: s()(tr.selectMap, !t && tr.selectMap__empty) },
                                            n().createElement(
                                                'div',
                                                { className: C.selectMapTitle },
                                                R.strings.mode_selector.selectMap(),
                                            ),
                                            n().createElement(
                                                T,
                                                {
                                                    size: k.small,
                                                    type: N.primary,
                                                    mixClass: tr.selectMapButton,
                                                    onClick: D,
                                                    disabled: !u,
                                                },
                                                n().createElement(
                                                    'div',
                                                    { className: tr.buttonText },
                                                    R.strings.mode_selector.button.select(),
                                                ),
                                            ),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: tr.items },
                                            p.map((e, t) =>
                                                n().createElement(er, {
                                                    key: `column_${t}`,
                                                    items: e,
                                                    showWidgets: A,
                                                    state: o,
                                                    canBeWide: 0 === t && p.length <= 3,
                                                    isContentVisible: l,
                                                }),
                                            ),
                                        ),
                                        E &&
                                            n().createElement(
                                                'div',
                                                { className: tr.toggleButtonContainer },
                                                l &&
                                                    n().createElement(
                                                        z,
                                                        {
                                                            body: R.strings.tooltips.mode_selector.progressionBtn.body(),
                                                        },
                                                        n().createElement(
                                                            'div',
                                                            { id: 'mode-selector-widgets-btn' },
                                                            n().createElement(
                                                                p_,
                                                                {
                                                                    size: k.small,
                                                                    type: N.secondary,
                                                                    onClick: h,
                                                                    active: A,
                                                                    mixClass: tr.toggleButton,
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
                            n().createElement(h, null, n().createElement(ur, null)),
                            document.getElementById('root'),
                        );
                    });
            },
            8668: (e, t, u) => {
                'use strict';
                u.d(t, { Hi: () => r, Jh: () => _, S4: () => i, u_: () => n });
                var a = u(3486);
                let _;
                !(function (e) {
                    (e.Huge = 'huge'), (e.Big = 'big'), (e.Medium = 'medium'), (e.Small = 'small');
                })(_ || (_ = {}));
                const r = [a.Id.B4, a.Id.B5, a.Id.B6],
                    n = [a.Id.B0, a.Id.B1, a.Id.B2],
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
                    r = u.n(_),
                    n = u(8487);
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
                                    (c[i] = n.Z[e]
                                        ? r().createElement(
                                              'span',
                                              { className: n.Z[e] },
                                              r().createElement(a.z, { text: g, binding: t }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: l(e) },
                                              r().createElement(a.z, { text: g, binding: t }),
                                          ));
                            }
                            m = i.exec(e);
                        }
                        return r().createElement(a.z, { text: d, classMix: u, binding: c });
                    };
            },
            9930: (e, t, u) => {
                'use strict';
                u.d(t, { B: () => n, O: () => i });
                var a = u(7739),
                    _ = u(6179),
                    r = u(3486);
                const n = (e) => {
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
                    i = () => {
                        const e = (0, _.useContext)(a.YN),
                            t = e.extraSmall,
                            u = e.small,
                            n = e.medium;
                        return (0, _.useMemo)(() => {
                            switch (!0) {
                                case u:
                                case t:
                                    return r.Cg.Small;
                                case n:
                                    return r.Cg.Medium;
                                default:
                                    return r.Cg.Big;
                            }
                        }, [t, n, u]);
                    };
            },
            3486: (e, t, u) => {
                'use strict';
                u.d(t, { Cg: () => r, Hp: () => s, Id: () => _, SH: () => n, d6: () => a });
                const a = (e) => R.images.gui.maps.icons.mode_selector.mode.$dyn(e);
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
                        for (var u = 0, a = e; u < a.length; u++) {
                            const e = a[u];
                            if (e in i) t = t.concat(i[e]);
                            else {
                                const u = [e];
                                for (let t = 0; t <= 6; t++) u.push(`${e}__${n(t)}`);
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
                    r = u(9924),
                    n = u(6179),
                    i = u.n(n),
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
                            n = s.S4[e][u],
                            b = d.$dyn(`c_${m[n]}`).$dyn(t ? 'bg1' : 'bg2'),
                            g = _()(c.icon, c[`icon__${n}`], a[`icon__${e}`]);
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
                    r = u(7078),
                    n = u(2646),
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
                    F = {
                        [A.Icon1]: [0],
                        [A.Icon2]: [1, 2, 3, 4],
                        [A.Icon3]: [5, 6, 7, 8, 9],
                        [A.Icon4]: [10, 11, 12, 13, 14],
                        [A.Icon5]: [15, 16, 17, 18, 19],
                        [A.Icon6]: [20],
                    },
                    p = [g.Id.B0, g.Id.B1, g.Id.B2],
                    B = ({ size: e, level: t, conditions: u, restRewards: a }) => {
                        const B = (0, b.O)(),
                            D = (0, i.Z)([...(0, g.Hp)('icon', 'level', 'subtitle')], E),
                            h = (0, o.useMemo)(() => d.S4[e][B], [e, B]),
                            v = (0, o.useMemo)(
                                () => ((e) => Object.keys(F).find((t) => F[t].includes(e)) || A.Icon1)(t),
                                [t],
                            ),
                            f = (0, o.useMemo)(() => ({ tooltipId: n.I3 }), []),
                            x = (0, o.useMemo)(() => {
                                const e = R.images.gui.maps.icons.epicBattles.metaLvls;
                                if (null !== e) {
                                    const t = e.$dyn(`c_${C[h]}`);
                                    if (void 0 !== t && void 0 !== v) return { backgroundImage: `url(${t.$dyn(v)})` };
                                }
                            }, [v, h]),
                            w = _()(E.icon, E[`icon__${v}`], E[`icon__${h}`], D[`icon__${e}`]);
                        return l().createElement(
                            'div',
                            { className: E.base },
                            l().createElement(
                                r.t,
                                { args: f },
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
                                !p.includes(e) &&
                                l().createElement(m.B, {
                                    classMix: _()(D.subtitle, D[`subtitle__${e}`]),
                                    text: (0, s.z4)(u),
                                }),
                        );
                    };
            },
            5611: (e, t, u) => {
                'use strict';
                u.d(t, { n: () => z });
                var a = u(6483),
                    _ = u.n(a),
                    r = u(7739),
                    n = u(9924),
                    i = u(6179),
                    s = u.n(i),
                    o = u(8188),
                    l = u(3486),
                    c = u(7078),
                    m = u(2646),
                    d = u(4179);
                const b = 'BonusBattles_base_1b',
                    g = 'BonusBattles_light_51',
                    E = 'BonusBattles_divider_52',
                    A = 'BonusBattles_divider__right_08',
                    C = 'BonusBattles_icon_2c',
                    F = 'BonusBattles_amount_a2',
                    p = { tooltipId: m.T3 },
                    B = (0, i.memo)((e) => {
                        const t = e.amount,
                            u = d.Z5.getNumberFormat(t, d.B3.INTEGRAL),
                            a = _()(E, A);
                        return s().createElement(
                            c.t,
                            { args: p },
                            s().createElement(
                                'div',
                                { className: b },
                                s().createElement('div', { className: g }),
                                s().createElement('div', { className: E }),
                                s().createElement('div', { className: C }),
                                s().createElement('div', { className: F }, u),
                                s().createElement('div', { className: a }),
                            ),
                        );
                    });
                let D, h;
                !(function (e) {
                    (e.ExtraLarge = 'extraLarge'),
                        (e.Large = 'large'),
                        (e.Medium = 'medium'),
                        (e.SMedium = 'smedium'),
                        (e.Small = 'small'),
                        (e.ExtraSmall = 'extraSmall'),
                        (e.Tiny = 'tiny');
                })(D || (D = {})),
                    (function (e) {
                        (e.Large = 'large'), (e.Medium = 'medium'), (e.Small = 'small');
                    })(h || (h = {}));
                const v = {
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
                    f = { [h.Large]: '80x110', [h.Medium]: '58x80', [h.Small]: '42x56' },
                    x = (0, i.memo)((e) => {
                        const t = e.isInactive,
                            u = void 0 !== t && t,
                            a = e.isQualification,
                            r = e.divisionID,
                            n = e.rankName,
                            o = e.rankID,
                            l = e.isUnburnable,
                            d = e.shieldHP,
                            b = e.size,
                            g = void 0 === b ? h.Medium : b,
                            E = !a && o > 0,
                            A = (0, i.useMemo)(() => {
                                const e = R.images.gui.maps.icons.rankedBattles,
                                    t = f[g];
                                let u;
                                return (
                                    (u = a
                                        ? e.divisions.$dyn(`c_${t}`).$num(r)
                                        : e.ranks.$dyn(`c_${t}`).$dyn(`rank${r}_${n}`)),
                                    { backgroundImage: `url(${u})` }
                                );
                            }, [r, n, a, g]),
                            C = (e) => [v[e], v[`${e}__${g}`]],
                            F = _()(v.icon, u && v.icon__next, ...C('icon')),
                            p = _()(...C('frame'), ...C('unburnable')),
                            B = _()(...C('frame'), ...C('shield')),
                            D = _()(...C('hp'));
                        return s().createElement(
                            c.t,
                            { isEnabled: E, args: { rankID: o, tooltipId: m.MS } },
                            s().createElement(
                                'div',
                                { className: v.base },
                                s().createElement('div', { className: F, style: A }),
                                l && s().createElement('div', { className: p }),
                                d > 0 &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: B }),
                                        s().createElement(
                                            'div',
                                            { className: D },
                                            s().createElement('div', { className: v.hpValue }, d),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    w = {
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
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const N = { tooltipId: m.u6 },
                    k = (e) => {
                        const t = e.rankLeft,
                            u = void 0 === t ? void 0 : t,
                            a = e.rankRight,
                            r = e.steps,
                            n = e.stepsTotal,
                            o = e.size,
                            l = n > 0 && !a.isQualification,
                            m = void 0 !== u || l,
                            d = ![D.ExtraLarge, D.Medium].includes(o),
                            b = (0, i.useMemo)(
                                () =>
                                    [D.Medium, D.SMedium].includes(o)
                                        ? h.Medium
                                        : [D.Small, D.ExtraSmall].includes(o)
                                          ? h.Small
                                          : h.Large,
                                [o],
                            ),
                            g = _()(
                                w.steps,
                                d && w.steps__small,
                                o === D.Medium && w.steps__wide,
                                void 0 === u && w.steps__side,
                            );
                        return s().createElement(
                            'div',
                            { className: _()(w.base, w[`base__${o}`]) },
                            u && s().createElement(x, S({}, u, { size: b })),
                            l &&
                                s().createElement(
                                    c.t,
                                    { args: N },
                                    s().createElement(
                                        'div',
                                        { className: g },
                                        [...Array(n)].map((e, t) => {
                                            return s().createElement('div', {
                                                key: `step_${t}`,
                                                className:
                                                    ((u = t < r),
                                                    _()(w.step, d && w.step__small, !u && w.step__notReceived)),
                                            });
                                            var u;
                                        }),
                                    ),
                                ),
                            s().createElement(x, S({}, a, { size: b, isInactive: m })),
                        );
                    },
                    y = {
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
                let T, L;
                !(function (e) {
                    (e.Efficiency = 'efficiency'), (e.Position = 'position');
                })(T || (T = {})),
                    (function (e) {
                        (e.Large = 'large'), (e.Medium = 'medium'), (e.Small = 'small');
                    })(L || (L = {}));
                const W = { [T.Efficiency]: m.wm, [T.Position]: m.q_ },
                    M = (0, i.memo)(
                        ({
                            type: e,
                            value: t,
                            valueDiff: u = 0,
                            isUnavailable: a = !1,
                            isPercent: r = !1,
                            size: n = L.Large,
                        }) => {
                            const i = (e) =>
                                    a
                                        ? '- -'
                                        : r
                                          ? d.Z5.getRealFormat(100 * e, d.Gr.WO_ZERO_DIGITS) + '%'
                                          : d.Z5.getRealFormat(e, d.Gr.WO_ZERO_DIGITS),
                                o = i(t),
                                l = i(u);
                            return s().createElement(
                                c.t,
                                { args: { tooltipId: W[e] } },
                                s().createElement(
                                    'div',
                                    { className: _()(y.base, y[`base__${n}`]) },
                                    s().createElement('div', {
                                        className: _()(y.icon, y[`icon__${e}`], y[`icon__${e}__${n}`]),
                                    }),
                                    s().createElement('div', { className: _()(y.value, y[`value__${n}`]) }, o),
                                    0 !== u &&
                                        !a &&
                                        s().createElement(
                                            'div',
                                            { className: _()(y.delta, y[`delta__${n}`], u < 0 && y.delta__minus) },
                                            s().createElement('div', {
                                                className: _()(y.arrow, u < 0 && y.arrow__minus),
                                            }),
                                            l,
                                        ),
                                ),
                            );
                        },
                    ),
                    P = {
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
                    I = { [h.Large]: '130x130', [h.Medium]: '100x100', [h.Small]: '64x64' },
                    O = { tooltipId: m._Y },
                    $ = (0, i.memo)((e) => {
                        const t = e.leagueID,
                            u = e.efficiency,
                            a = e.efficiencyDiff,
                            r = (e.position, e.isEfficiencyUnavailable),
                            n = void 0 !== r && r,
                            o = (e.isPositionUnavailable, e.size),
                            l = (0, i.useMemo)(
                                () =>
                                    [D.Medium, D.SMedium].includes(o)
                                        ? h.Medium
                                        : [D.Small, D.ExtraSmall, D.Tiny].includes(o)
                                          ? h.Small
                                          : h.Large,
                                [o],
                            ),
                            m = (0, i.useMemo)(
                                () =>
                                    [D.Medium, D.ExtraLarge].includes(o) ? L.Large : o === D.Tiny ? L.Small : L.Medium,
                                [o],
                            ),
                            d = (0, i.useMemo)(() => {
                                const e = R.images.gui.maps.icons.rankedBattles.league,
                                    u = I[l],
                                    a = e.$dyn(`c_${u}`);
                                if (a) {
                                    return { backgroundImage: `url(${a.$num(t)})` };
                                }
                            }, [t, l]);
                        return s().createElement(
                            'div',
                            { className: _()(P.base, P[`base__${o}`]) },
                            s().createElement(M, {
                                type: T.Efficiency,
                                value: u,
                                valueDiff: a,
                                isUnavailable: n,
                                isPercent: !0,
                                size: m,
                            }),
                            s().createElement(
                                c.t,
                                { args: O },
                                s().createElement('div', { className: P.icon, style: d }),
                            ),
                            !1,
                        );
                    }),
                    H = {
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
                    z = ({
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
                        qualBattles: F,
                        qualTotalBattles: p,
                        bonusBattles: h,
                    }) => {
                        const v = (0, i.useContext)(r.YN),
                            f = v.extraSmall,
                            x = v.small,
                            w = v.medium,
                            S = ![l.Id.B5, l.Id.B6].includes(e),
                            N = d > -1,
                            y = p > 0 && u.isQualification && S,
                            T = h > 0,
                            L = (0, n.Z)((0, l.Hp)('qualBattles', 'ranks', 'ranks__qual', 'bonus'), H),
                            W = (0, i.useMemo)(
                                () =>
                                    x || f
                                        ? N && e === l.Id.B4
                                            ? D.Tiny
                                            : D.ExtraSmall
                                        : w
                                          ? e === l.Id.B1
                                              ? D.Large
                                              : e === l.Id.B2
                                                ? D.SMedium
                                                : D.Small
                                          : e === l.Id.B4
                                            ? D.Small
                                            : e === l.Id.B3
                                              ? D.Medium
                                              : D.ExtraLarge,
                                [N, e, f, x, w],
                            ),
                            M = _()(H.ranks, L[`ranks__${e}`], y && L[`ranks__qual__${e}`]);
                        return s().createElement(
                            'div',
                            { className: H.base },
                            S &&
                                s().createElement(
                                    'div',
                                    { className: M },
                                    N
                                        ? s().createElement($, {
                                              leagueID: d,
                                              efficiency: b,
                                              efficiencyDiff: g,
                                              position: E,
                                              isEfficiencyUnavailable: A,
                                              isPositionUnavailable: C,
                                              size: W,
                                          })
                                        : s().createElement(k, {
                                              rankLeft: a ? t : void 0,
                                              rankRight: u,
                                              steps: c,
                                              stepsTotal: m,
                                              qualBattles: F,
                                              qualTotalBattles: p,
                                              size: W,
                                          }),
                                ),
                            y &&
                                s().createElement(
                                    'div',
                                    { className: _()(H.qualBattles, L[`qualBattles__${e}`]) },
                                    s().createElement(o.B, {
                                        text: R.strings.mode_selector.ranked.widget.qualBattles(),
                                        binding: { current: F, max: p },
                                    }),
                                ),
                            T &&
                                s().createElement(
                                    'div',
                                    { className: _()(H.bonus, L[`bonus__${e}`]) },
                                    s().createElement(B, { amount: h }),
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
                    MS: () => n,
                    T3: () => i,
                    TR: () => d,
                    _Y: () => s,
                    hg: () => E,
                    p5: () => a,
                    q_: () => l,
                    u6: () => r,
                    vw: () => A,
                    wm: () => o,
                    zD: () => m,
                });
                const a = 'disabledTooltip',
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
                    E = 'comp7CalendarDayExtendedInfo',
                    A = 'HBCalendarTooltip';
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
                    for (var [t, u, a] = deferred[s], r = !0, n = 0; n < t.length; n++)
                        (!1 & a || _ >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[n]))
                            ? t.splice(n--, 1)
                            : ((r = !1), a < _ && (_ = a));
                    if (r) {
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
                        [r, n, i] = u,
                        s = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in n) __webpack_require__.o(n, a) && (__webpack_require__.m[a] = n[a]);
                        if (i) var o = i(__webpack_require__);
                    }
                    for (t && t(u); s < r.length; s++)
                        (_ = r[s]), __webpack_require__.o(e, _) && e[_] && e[_][0](), (e[_] = 0);
                    return __webpack_require__.O(o);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [705], () => __webpack_require__(9285));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
