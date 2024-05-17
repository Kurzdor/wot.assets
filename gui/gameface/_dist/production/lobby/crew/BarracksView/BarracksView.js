(() => {
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7727),
                    s = u(6179),
                    o = u.n(s),
                    i = u(6880),
                    l = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: c,
                    mixClass: d,
                    soundHover: m,
                    soundClick: _,
                    onMouseEnter: E,
                    onMouseMove: g,
                    onMouseDown: p,
                    onMouseUp: h,
                    onMouseLeave: v,
                    onClick: A,
                }) => {
                    const b = (0, s.useRef)(null),
                        f = (0, s.useState)(u),
                        F = f[0],
                        C = f[1],
                        D = (0, s.useState)(!1),
                        B = D[0],
                        w = D[1],
                        y = (0, s.useState)(!1),
                        k = y[0],
                        T = y[1],
                        S = (0, s.useCallback)(() => {
                            c || (b.current && (b.current.focus(), C(!0)));
                        }, [c]),
                        N = (0, s.useCallback)(
                            (e) => {
                                F && null !== b.current && !b.current.contains(e.target) && C(!1);
                            },
                            [F],
                        ),
                        x = (0, s.useCallback)(
                            (e) => {
                                c || (A && A(e));
                            },
                            [c, A],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                c || (null !== m && (0, r.G)(m), E && E(e), T(!0));
                            },
                            [c, m, E],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                g && g(e);
                            },
                            [g],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                c || (h && h(e), w(!1));
                            },
                            [c, h],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, r.G)(_), p && p(e), u && S(), w(!0));
                            },
                            [c, _, p, S, u],
                        ),
                        H = (0, s.useCallback)(
                            (e) => {
                                c || (v && v(e), w(!1));
                            },
                            [c, v],
                        ),
                        P = a()(
                            i.Z.base,
                            i.Z[`base__${n}`],
                            {
                                [i.Z.base__disabled]: c,
                                [i.Z[`base__${t}`]]: t,
                                [i.Z.base__focus]: F,
                                [i.Z.base__highlightActive]: B,
                                [i.Z.base__firstHover]: k,
                            },
                            d,
                        ),
                        W = a()(i.Z.state, i.Z.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', N),
                                () => {
                                    document.removeEventListener('mousedown', N);
                                }
                            ),
                            [N],
                        ),
                        (0, s.useEffect)(() => {
                            C(u);
                        }, [u]),
                        o().createElement(
                            'div',
                            {
                                ref: b,
                                className: P,
                                onMouseEnter: L,
                                onMouseMove: I,
                                onMouseUp: M,
                                onMouseDown: O,
                                onMouseLeave: H,
                                onClick: x,
                            },
                            n !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: i.Z.back }),
                                    o().createElement('span', { className: i.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: W },
                                o().createElement('span', { className: i.Z.stateDisabled }),
                                o().createElement('span', { className: i.Z.stateHighlightHover }),
                                o().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = (0, s.memo)(c);
            },
            2106: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { A: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    s = u.n(r),
                    o = u(8055);
                const i = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        u = e.value,
                        n = e.isEmpty,
                        r = e.fadeInAnimation,
                        c = e.hide,
                        d = e.maximumNumber,
                        m = e.className,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, i);
                    const E = n ? null : u,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const p = E && !g && E > d,
                        h = a()(
                            o.Z.base,
                            o.Z[`base__${t}`],
                            r && o.Z.base__animated,
                            c && o.Z.base__hidden,
                            !E && o.Z.base__pattern,
                            n && o.Z.base__empty,
                            m,
                        );
                    return s().createElement(
                        'div',
                        l({ className: h }, _),
                        s().createElement('div', { className: o.Z.bg }),
                        s().createElement('div', { className: o.Z.pattern }),
                        s().createElement(
                            'div',
                            { className: a()(o.Z.value, g && o.Z.value__text) },
                            p ? d : E,
                            p && s().createElement('span', { className: o.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            1037: (e, t, u) => {
                'use strict';
                u.d(t, { IC: () => n });
                var n,
                    a = u(6483),
                    r = u.n(a),
                    s = u(6373),
                    o = u(1856),
                    i = u(3138),
                    l = u(2039),
                    c = u(5099),
                    d = u(7727),
                    m = u(9916),
                    _ = u(6179),
                    E = u.n(_),
                    g = u(4769);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(n || (n = {}));
                const p = ['__left', '__right', '__top', '__bottom'];
                (0, _.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: u, customStyles: n = {} }, a) => {
                        const h = (0, _.useRef)(null),
                            v = (0, _.useRef)(null),
                            A = (0, _.useRef)(null),
                            b = (0, _.useState)(window.decorator && window.decorator.directionType),
                            f = b[0],
                            F = b[1],
                            C = (0, _.useCallback)(() => {
                                d.$.playClick(), i.O.view.sendEvent.close();
                            }, []),
                            D = (0, _.useCallback)(() => {
                                d.$.playHighlight();
                            }, []),
                            B = r()(g.Z.arrow, g.Z[`arrow${p[f]}`]);
                        (0, l.b)(
                            () => (
                                i.O.client.events.mouse.enableOutside(),
                                i.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (u ? u() : i.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const w = (0, _.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === h.current || t === A.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const n = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = i.O.client.getMouseGlobalPosition(),
                                            t = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                            u =
                                                e.x < n.boundX ||
                                                e.x > n.boundX + n.boundWidth ||
                                                e.y > n.boundY + n.boundHeight ||
                                                e.y < n.boundY;
                                        if (t && !u) return;
                                    }
                                    u ? u() : i.O.view.sendEvent.close('popover');
                                },
                                [h, A, u],
                            ),
                            y = (0, _.useCallback)(
                                () => (
                                    i.O.view.freezeTextureBeforeResize(),
                                    (0, o.v)(() => {
                                        if (v.current) {
                                            const e = v.current.scrollWidth,
                                                t = v.current.scrollHeight;
                                            i.O.view.resize(e, t), F(window.decorator.directionType);
                                        }
                                    })
                                ),
                                [],
                            );
                        return (
                            (0, _.useImperativeHandle)(a, () => ({ updateSize: y })),
                            (0, l.b)(() => {
                                i.O.view.setInputPaddingsRem(58);
                            }),
                            (0, _.useEffect)(() => {
                                document.addEventListener('mousedown', w, { capture: !0 });
                                const e = (0, c.B)((0, m.Eu)());
                                return (
                                    !t && e.promise.then(() => y()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', w);
                                    }
                                );
                            }, [y, w, t]),
                            E().createElement(
                                'div',
                                { className: g.Z.base, ref: v },
                                E().createElement(
                                    'div',
                                    { className: g.Z.decorator },
                                    E().createElement(
                                        'div',
                                        { className: g.Z.content, ref: h },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            E().createElement(
                                                s.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                E().createElement('div', {
                                                    className: g.Z.closeBtn,
                                                    onClick: C,
                                                    onMouseEnter: D,
                                                    ref: A,
                                                }),
                                            ),
                                    ),
                                    E().createElement('div', { className: B, style: n.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => l });
                var n = u(1037),
                    a = u(9916),
                    r = u(6179),
                    s = u.n(r);
                const o = [
                    'contentId',
                    'decoratorId',
                    'direction',
                    'targetId',
                    'args',
                    'onClick',
                    'children',
                    'isEnabled',
                ];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.contentId,
                        u = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? n.IC.Top : l,
                        d = e.targetId,
                        m = e.args,
                        _ = e.onClick,
                        E = e.children,
                        g = e.isEnabled,
                        p = void 0 === g || g,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, o);
                    const v = (0, r.useRef)(null),
                        A = (0, r.useCallback)(() => {
                            if ((0, a.wU)()) return (0, a.SW)();
                            v.current && (0, a.P3)(t, c, v.current, u, d, m);
                        }, [t, c, m, u, d]);
                    return s().createElement(
                        'div',
                        i(
                            {
                                ref: v,
                                onMouseDown:
                                    ((b = E.props.onClick),
                                    (e) => {
                                        p && (A(), _ && _(e), b && b(e));
                                    }),
                            },
                            h,
                        ),
                        E,
                    );
                    var b;
                };
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => i });
                var n = u(6179),
                    a = u.n(n),
                    r = u(2056);
                const s = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, s);
                    return a().createElement(
                        r.u,
                        o(
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
                'use strict';
                u.d(t, { l: () => l });
                var n = u(6179),
                    a = u.n(n),
                    r = u(7078),
                    s = u(6373),
                    o = u(2056);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(s.i, t, n);
                    const l = t.contentId;
                    return l ? a().createElement(o.u, i({}, t, { contentId: l }), n) : a().createElement(r.t, t, n);
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => l });
                var n = u(2056),
                    a = u(6179),
                    r = u.n(a);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            u = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, s);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, m, { body: u, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, u, l, c, m]);
                        return r().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((g = null == m ? void 0 : m.hasHtmlContent),
                                        g ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                _,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => l });
                var n = u(7902),
                    a = u(9916),
                    r = u(6179);
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
                function o(e) {
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
                const i = (e, t, u = {}, n = 0) => {
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
                            d = e.onMouseDown,
                            m = e.onClick,
                            _ = e.ignoreShowDelay,
                            E = void 0 !== _ && _,
                            g = e.ignoreMouseClick,
                            p = void 0 !== g && g,
                            h = e.decoratorId,
                            v = void 0 === h ? 0 : h,
                            A = e.isEnabled,
                            b = void 0 === A || A,
                            f = e.targetId,
                            F = void 0 === f ? 0 : f,
                            C = e.onShow,
                            D = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, s);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => F || (0, n.F)().resId, [F]),
                            k = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(u, v, { isMouseEvent: !0, on: !0, arguments: o(a) }, y),
                                    C && C(),
                                    (w.current.isVisible = !0));
                            }, [u, v, a, y, C]),
                            T = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(u, v, { on: !1 }, y),
                                        w.current.isVisible && D && D(),
                                        (w.current.isVisible = !1);
                                }
                            }, [u, v, y, D]),
                            S = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === b && T();
                            }, [b, T]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        window.removeEventListener('mouseleave', T), T();
                                    }
                                ),
                                [T],
                            );
                        return b
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((N = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(k, E ? 100 : 400)),
                                                      l && l(e),
                                                      N && N(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              T(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === p && T(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === p && T(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var N;
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
            1856: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { U: () => o });
                var n = u(3138);
                function a(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return r(e, t);
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
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: u = s, context: r = 'model' } = {}) {
                    const o = new Map();
                    function i(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = o.get(t);
                                void 0 !== u && u(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = u(t),
                            a = r.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, a);
                    };
                    return {
                        subscribe: (u, a) => {
                            const s = 'string' == typeof a ? `${r}.${a}` : r,
                                i = n.O.view.addModelObserver(s, t, !0);
                            return o.set(i, u), e && u(l(a)), i;
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
                            for (var e, u = a(o.keys()); !(e = u()).done; ) {
                                i(e.value, t);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q: () => i });
                var n = u(4598),
                    a = u(9174),
                    r = u(6179),
                    s = u.n(r),
                    o = u(8246);
                const i = () => (e, t) => {
                    const u = (0, r.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, r.useRef)([]),
                                _ = (u, r, s) => {
                                    var i;
                                    const l = o.U(r),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === u ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        s = a.LO.box(r, { equals: n.jv });
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
                                                    const r = null != t ? t : d(e),
                                                        s = a.LO.box(r, { equals: n.jv });
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
                                                    const n = d(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = a.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            s = Object.entries(r),
                                                            o = s.reduce(
                                                                (e, [t, u]) => ((e[u] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        s.forEach(([t, u]) => {
                                                                            o[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: _,
                                        }),
                                        g = { mode: u, model: E, externalModel: c, cleanup: _ };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && s ? s.controls(g) : t(g),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                g = (0, r.useState)(i),
                                p = g[0],
                                h = g[1],
                                v = (0, r.useState)(() => _(i, l, d)),
                                A = v[0],
                                b = v[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? b(_(p, l, d)) : (E.current = !0);
                                }, [d, p, l]),
                                (0, r.useEffect)(() => {
                                    h(i);
                                }, [i]),
                                (0, r.useEffect)(
                                    () => () => {
                                        A.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [A],
                                ),
                                s().createElement(u.Provider, { value: A }, c)
                            );
                        },
                        () => (0, r.useContext)(u),
                    ];
                };
            },
            7044: (e, t, u) => {
                'use strict';
                u.d(t, { f8: () => l, s_: () => r, wB: () => c, yR: () => s });
                var n = u(3649),
                    a = (u(9916), u(8613));
                const r = 1e3,
                    s = 60,
                    o = 60 * s,
                    i = 24 * o;
                Date.now(), a.Ew.getRegionalDateTime, a.Ew.getFormattedDateTime;
                function l(e = 0) {
                    let t = e;
                    const u = Math.trunc(t / i);
                    t -= u * i;
                    const n = Math.trunc(t / o);
                    t -= n * o;
                    const a = Math.trunc(t / s);
                    return (t -= a * s), { days: u, hours: n, minutes: a, seconds: t };
                }
                const c = (e, t = !0) =>
                    e.days > 7 && t
                        ? (0, n.WU)(R.strings.common.duration.days(), { days: e.days })
                        : e.days >= 1
                          ? 0 === e.hours
                              ? (0, n.WU)(R.strings.common.duration.days(), { days: e.days })
                              : `${(0, n.WU)(R.strings.common.duration.days(), { days: e.days })} ${(0, n.WU)(R.strings.common.duration.hours(), { hours: e.hours })}`
                          : e.hours >= 1
                            ? 0 === e.minutes
                                ? (0, n.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                : `${(0, n.WU)(R.strings.common.duration.hours(), { hours: e.hours })} ${(0, n.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : (0, n.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 });
            },
            527: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, { mouse: () => c, off: () => i, on: () => o, onResize: () => r, onScaleUpdated: () => s });
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
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
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${t}`,
                                        s = l[t]((e) => u([e, 'outside']));
                                    function o(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, o),
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
                    return Object.assign({}, r, {
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
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => s,
                    });
                var n = u(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2472: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { O: () => a });
                var n = u(5959);
                const a = { view: u(7641), client: n };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => B,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => D,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => F,
                        isFocused: () => b,
                        pxToRem: () => h,
                        remToPx: () => v,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => A,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var n = u(3722),
                    a = u(6112),
                    r = u(6538),
                    s = u(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
                    return viewEnv.remToPx(e);
                }
                function A(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function F() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function D() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(a.W).reduce(
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
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    s = 32,
                    o = 64,
                    i = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((a = r),
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
                    l = {
                        close(e) {
                            i('popover' === e ? a : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                'use strict';
                u.d(t, { jv: () => n });
                function n() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, u) => {
                'use strict';
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
            2344: (e, t, u) => {
                'use strict';
                u.d(t, { au: () => a });
                u(2790);
                var n = u(3469);
                u(2133), u(579), u(5360), u(9056);
                const a = n.Z;
            },
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(6179);
                const a = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3469: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => s });
                var n = u(7044),
                    a = u(6179);
                const r = () => {},
                    s = (e = 0, t, u = 0, s = r) => {
                        const o = (0, a.useState)(e),
                            i = o[0],
                            l = o[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const a = Date.now(),
                                        r = t || (e > 2 * n.yR ? n.yR : 1),
                                        o = setInterval(() => {
                                            const t = e - Math.floor((Date.now() - a) / n.s_);
                                            null !== u && t <= u ? (l(u), s && s(), clearInterval(o)) : l(t);
                                        }, r * n.s_);
                                    return () => {
                                        clearInterval(o);
                                    };
                                }
                            }, [e, t, u, s]),
                            i
                        );
                    };
            },
            5332: (e, t, u) => {
                'use strict';
                u.d(t, { N: () => r });
                var n = u(4483),
                    a = u(6179);
                function r(e, t, u, r = !1) {
                    const s = (0, a.useMemo)(() => (0, n.Z)(u, r, e), t);
                    return (0, a.useEffect)(() => s.cancel, [s]), s;
                }
            },
            2133: (e, t, u) => {
                'use strict';
                u(6179);
            },
            5360: (e, t, u) => {
                'use strict';
                u(6536);
                var n = u(9916);
                u(6179);
                n.Sw.instance;
                let a;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(a || (a = {}));
            },
            9056: (e, t, u) => {
                'use strict';
                var n = u(9916);
                u(6179);
                n.Sw.instance;
            },
            2039: (e, t, u) => {
                'use strict';
                u.d(t, { b: () => a });
                var n = u(6179);
                const a = (e) => {
                    (0, n.useEffect)(e, []);
                };
            },
            2790: (e, t, u) => {
                'use strict';
                u(6179);
            },
            579: (e, t, u) => {
                'use strict';
                u(3138), u(6179);
            },
            5521: (e, t, u) => {
                'use strict';
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
                'use strict';
                function n(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                u.d(t, { U2: () => n, UI: () => a });
                function a(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
            },
            5099: (e, t, u) => {
                'use strict';
                u.d(t, { B: () => n });
                const n = (e) => {
                    let t = !1;
                    return {
                        promise: new Promise((u, n) => {
                            e.then((e) => !t && u(e)).catch((e) => !t && n(e));
                        }),
                        cancel() {
                            t = !0;
                        },
                    };
                };
            },
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { HG: () => s });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const r = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    s = (e) =>
                        r
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) (t += n[u]), (e -= a[u]);
                                  return t;
                              })(e);
            },
            7727: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e);
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
                'use strict';
                u.d(t, { BN: () => r, WU: () => a, dL: () => o, e: () => s });
                u(1281);
                let n;
                function a(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                function s(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(n || (n = {}));
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
                const o = (e) => a(R.strings.common.percentValue(), { value: e });
            },
            4483: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(5139);
                function a(e, t, u) {
                    return void 0 === u ? (0, n.Z)(e, t, !1) : (0, n.Z)(e, u, !1 !== t);
                }
            },
            5139: (e, t, u) => {
                'use strict';
                function n(e, t, u, n) {
                    let a,
                        r = !1,
                        s = 0;
                    function o() {
                        a && clearTimeout(a);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - s;
                        function d() {
                            (s = Date.now()), u.apply(l, i);
                        }
                        r ||
                            (n && !a && d(),
                            o(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== t &&
                                  (a = setTimeout(
                                      n
                                          ? function () {
                                                a = void 0;
                                            }
                                          : d,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                        (i.cancel = function () {
                            o(), (r = !0);
                        }),
                        i
                    );
                }
                u.d(t, { Z: () => n });
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
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
                        const r = n.O.view.addModelObserver(e, u, a);
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
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
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
                    B3: () => i,
                    Z5: () => s.Z5,
                    B0: () => o,
                    c9: () => A,
                    wU: () => C,
                    ry: () => h,
                    Eu: () => v,
                    SW: () => f,
                    P3: () => F,
                });
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
                var r = u(1358);
                var s = u(8613);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(5521),
                    _ = u(3138);
                const E = ['args'];
                function g(e, t, u, n, a, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(n, a);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                        var r = e.apply(t, u);
                                        function s(e) {
                                            g(r, n, a, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(r, n, a, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    A = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    b = () => A(o.CLOSE),
                    f = () => A(o.POP_OVER, { on: !1 }),
                    F = (e, t, u, n, a = R.invalid('resId'), r) => {
                        const s = _.O.view.getViewGlobalPosition(),
                            i = u.getBoundingClientRect(),
                            l = i.x,
                            c = i.y,
                            d = i.width,
                            m = i.height,
                            E = {
                                x: _.O.view.pxToRem(l) + s.x,
                                y: _.O.view.pxToRem(c) + s.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(m),
                            };
                        A(o.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: a,
                            direction: t,
                            bbox: p(E),
                            on: !0,
                            args: r,
                        });
                    },
                    C = () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                    D = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var B = u(7572);
                const w = a.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => A(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: f,
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            A(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: F,
                        addEscapeListener: (e) => {
                            const t = (t) => D(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, b);
                        },
                        handleViewEvent: A,
                        onBindingsReady: h,
                        onLayoutReady: v,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: C,
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
                        ClickOutsideManager: w,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => n, cy: () => a });
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
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            2713: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => ou,
                        Bar: () => au,
                        DefaultScroll: () => su,
                        Direction: () => $t,
                        defaultSettings: () => zt,
                        useHorizontalScrollApi: () => Ut,
                    });
                var a = {};
                u.r(a), u.d(a, { Area: () => Bu, Bar: () => Fu, Default: () => Du, useVerticalScrollApi: () => iu });
                var r = u(6179),
                    s = u.n(r);
                const o = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var i = u(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, t, u) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
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
                !(function (e) {
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
                })(c || (c = {}));
                const m = i.O.client.getSize('rem'),
                    _ = m.width,
                    E = m.height,
                    g = Object.assign({ width: _, height: E }, d(_, E, l)),
                    p = (0, r.createContext)(g),
                    h = ['children'];
                const v = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, h);
                    const n = (0, r.useContext)(p),
                        a = n.extraLarge,
                        s = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        m = n.largeWidth,
                        _ = n.mediumWidth,
                        E = n.smallWidth,
                        g = n.extraSmallWidth,
                        v = n.extraLargeHeight,
                        A = n.largeHeight,
                        b = n.mediumHeight,
                        f = n.smallHeight,
                        F = n.extraSmallHeight,
                        C = { extraLarge: v, large: A, medium: b, small: f, extraSmall: F };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && a) return t;
                        if (u.large && s) return t;
                        if (u.medium && i) return t;
                        if (u.small && l) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && d) return o(t, u, C);
                        if (u.largeWidth && m) return o(t, u, C);
                        if (u.mediumWidth && _) return o(t, u, C);
                        if (u.smallWidth && E) return o(t, u, C);
                        if (u.extraSmallWidth && g) return o(t, u, C);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && v) return t;
                            if (u.largeHeight && A) return t;
                            if (u.mediumHeight && b) return t;
                            if (u.smallHeight && f) return t;
                            if (u.extraSmallHeight && F) return t;
                        }
                    }
                    return null;
                };
                v.defaultProps = {
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
                (0, r.memo)(v);
                var A = u(6536);
                const b = ({ children: e }) => {
                    const t = (0, r.useContext)(p),
                        u = (0, r.useState)(t),
                        n = u[0],
                        a = u[1],
                        o = (0, r.useCallback)((e, t) => {
                            const u = i.O.view.pxToRem(e),
                                n = i.O.view.pxToRem(t);
                            a(Object.assign({ width: u, height: n }, d(u, n, l)));
                        }, []),
                        c = (0, r.useCallback)(() => {
                            const e = i.O.client.getSize('px');
                            o(e.width, e.height);
                        }, [o]);
                    (0, A.Z)(() => {
                        i.O.client.events.on('clientResized', o), i.O.client.events.on('self.onScaleUpdated', c);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                i.O.client.events.off('clientResized', o),
                                    i.O.client.events.off('self.onScaleUpdated', c);
                            },
                            [o, c],
                        );
                    const m = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                    return s().createElement(p.Provider, { value: m }, e);
                };
                var f = u(6483),
                    F = u.n(f),
                    C = u(926),
                    D = u.n(C);
                let B, w, y;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(B || (B = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(y || (y = {}));
                const k = () => {
                        const e = (0, r.useContext)(p),
                            t = e.width,
                            u = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return B.ExtraLarge;
                                    case e.large:
                                        return B.Large;
                                    case e.medium:
                                        return B.Medium;
                                    case e.small:
                                        return B.Small;
                                    case e.extraSmall:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case e.largeWidth:
                                        return w.Large;
                                    case e.mediumWidth:
                                        return w.Medium;
                                    case e.smallWidth:
                                        return w.Small;
                                    case e.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return y.ExtraLarge;
                                    case e.largeHeight:
                                        return y.Large;
                                    case e.mediumHeight:
                                        return y.Medium;
                                    case e.smallHeight:
                                        return y.Small;
                                    case e.extraSmallHeight:
                                        return y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: s, remScreenWidth: t, remScreenHeight: u };
                    },
                    T = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const N = {
                        [w.ExtraSmall]: '',
                        [w.Small]: D().SMALL_WIDTH,
                        [w.Medium]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH}`,
                        [w.Large]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH} ${D().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [y.ExtraSmall]: '',
                        [y.Small]: D().SMALL_HEIGHT,
                        [y.Medium]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT}`,
                        [y.Large]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT} ${D().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [B.ExtraSmall]: '',
                        [B.Small]: D().SMALL,
                        [B.Medium]: `${D().SMALL} ${D().MEDIUM}`,
                        [B.Large]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE}`,
                        [B.ExtraLarge]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE} ${D().EXTRA_LARGE}`,
                    },
                    I = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, T);
                        const a = k(),
                            r = a.mediaWidth,
                            o = a.mediaHeight,
                            i = a.mediaSize;
                        return s().createElement('div', S({ className: F()(u, N[r], x[o], L[i]) }, n), t);
                    },
                    M = ['children'];
                const O = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, M);
                    return s().createElement(b, null, s().createElement(I, u, t));
                };
                var H = u(493),
                    P = u.n(H),
                    W = u(1037),
                    G = u(5521),
                    $ = u(9916);
                const z = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function V(e = G.n.NONE, t = z, u = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== G.n.NONE)
                            return (
                                window.addEventListener('keydown', a, u),
                                () => {
                                    window.removeEventListener('keydown', a, u);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), t(a), u && a.stopPropagation();
                            }
                        }
                    }, [t, e, u, n]);
                }
                var U = u(3403),
                    j = u(536),
                    Z = u(5801),
                    q = u(3215),
                    Y = u(9480),
                    K = u(3946);
                const X = (e) => ({ tankmanID: e }),
                    Q = (e) => ({ recruitID: e }),
                    J = (0, q.q)()(
                        ({ observableModel: e }) => {
                            const t = e.primitives([
                                    'isBerthsOnSale',
                                    'hasFilters',
                                    'itemsAmount',
                                    'itemsOffset',
                                    'isConversionBannerVisible',
                                ]),
                                u = e.array('tankmanList'),
                                n = (0, K.Om)((e) => {
                                    const n = e - t.itemsOffset.get(),
                                        a = u.get();
                                    if (n >= 0 && n < a.length) return Y.U2(a, n);
                                });
                            return Object.assign({ tankmanList: u, berthsAmount: e.object('berthsAmount') }, t, {
                                computes: { getItem: n },
                            });
                        },
                        ({ externalModel: e }) => ({
                            buyBerth: e.createCallbackNoArgs('onBuyBerth'),
                            selectTankman: e.createCallback(X, 'onTankmanSelected'),
                            recruitTankman: e.createCallback(Q, 'onTankmanRecruit'),
                            dismissTankman: e.createCallback(X, 'onTankmanDismiss'),
                            playRecruitVoiceover: e.createCallback(Q, 'onPlayTankmanVoiceover'),
                            restoreTankman: e.createCallback(X, 'onTankmanRestore'),
                            showHangar: e.createCallbackNoArgs('showHangar'),
                            resetFilters: e.createCallbackNoArgs('onResetFilters'),
                            loadCards: e.createCallback((e, t) => ({ limit: e, offset: t }), 'onLoadCards'),
                        }),
                    ),
                    ee = J[0],
                    te = J[1];
                var ue = u(2106),
                    ne = u(3457),
                    ae = u(6373),
                    re = u(8018);
                const se = 'WarningText_base_13',
                    oe = 'WarningText_icon_5d',
                    ie = 'WarningText_label_c6',
                    le = s().memo(function ({ label: e }) {
                        return s().createElement(
                            'div',
                            { className: se },
                            s().createElement('div', { className: oe }),
                            s().createElement('div', { className: ie }, e),
                        );
                    }),
                    ce = 'ListEmptyState_base_ae',
                    de = 'ListEmptyState_content_1e',
                    me = 'ListEmptyState_shadow_ae',
                    _e = 'ListEmptyState_buttonWrapper_78',
                    Ee = 'ListEmptyState_button_f1',
                    ge = s().memo(function ({
                        warningText: e,
                        buttonType: t = ne.L$.secondary,
                        tooltipArgs: u = re.Xd,
                        isBtnDisabled: n = !1,
                        className: a,
                        onClick: r,
                        children: o,
                    }) {
                        return s().createElement(
                            'div',
                            { className: F()(ce, a) },
                            s().createElement(
                                'div',
                                { className: de },
                                s().createElement('div', { className: me }),
                                s().createElement(le, { label: e }),
                                o &&
                                    s().createElement(
                                        'div',
                                        { className: _e },
                                        s().createElement(
                                            ae.i,
                                            u,
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(
                                                    ne.u5,
                                                    {
                                                        size: ne.qE.small,
                                                        type: t,
                                                        disabled: n,
                                                        onClick: r,
                                                        mixClass: Ee,
                                                    },
                                                    o,
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    });
                var pe = u(7078);
                let he, ve, Ae, be, fe;
                !(function (e) {
                    (e.Any = 'any'),
                        (e.Commander = 'commander'),
                        (e.Radioman = 'radioman'),
                        (e.Driver = 'driver'),
                        (e.Gunner = 'gunner'),
                        (e.Loader = 'loader');
                })(he || (he = {})),
                    (function (e) {
                        (e.InBarracks = 'in_barracks'), (e.InTank = 'in_tank'), (e.Dismissed = 'dismissed');
                    })(ve || (ve = {})),
                    (function (e) {
                        (e.Tankman = 'tankman'), (e.Recruit = 'recruit'), (e.Dismissed = 'dismissed');
                    })(Ae || (Ae = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled');
                    })(be || (be = {})),
                    (function (e) {
                        (e.IsLockCrew = 'isLockCrew'), (e.TankmanHasRole = 'tankmanHasRole');
                    })(fe || (fe = {}));
                var Fe = u(7727),
                    Ce = u(4585),
                    De = u(3649);
                const Be = {
                    base: 'TankmanIcon_base_f9',
                    base__big: 'TankmanIcon_base__big_98',
                    base__small: 'TankmanIcon_base__small_b2',
                    base__barracks: 'TankmanIcon_base__barracks_62',
                    base__special: 'TankmanIcon_base__special_3f',
                    base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                };
                let we;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(we || (we = {}));
                const ye = ({ name: e, size: t = we.c100x60, classMix: u, isSkin: n = !1 }) => {
                    const a = (0, r.useMemo)(() => {
                        try {
                            let u = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                            n && (u = u.$dyn('crewSkins'));
                            const a = u.$dyn((0, De.BN)(e));
                            if (!a) throw Error;
                            return { backgroundImage: `url(${a})` };
                        } catch (t) {
                            console.error('Cant find resource in TankmanIcon: ', e);
                        }
                    }, [e, t, n]);
                    return s().createElement('div', { style: a, className: F()(Be.base, Be[`base__${t}`], u) });
                };
                var ke = u(9690);
                const Te = (e, t) => e.split(',').includes(t),
                    Se = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
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
                let Ne, xe;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(Ne || (Ne = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(xe || (xe = {}));
                const Le = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: u,
                        vehicleType: n,
                        vehicleLvl: a,
                        tags: r = '',
                        size: o = Ne.extraSmall,
                        type: i = xe.colored,
                        className: l,
                        classNames: c,
                        isShortName: d = !1,
                    }) => {
                        const m = `${(0, De.BN)(n)}${e ? '_elite' : ''}`,
                            _ = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return s().createElement(
                            'div',
                            {
                                className: F()(
                                    Se.base,
                                    Se[`base__size${(0, De.e)(o)}`],
                                    Se[`base__type${(0, De.e)(i)}`],
                                    l,
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: F()(Se.level, null == c ? void 0 : c.level) },
                                (0, ke.HG)(a),
                            ),
                            s().createElement('div', {
                                className: F()(
                                    Se.type,
                                    e && Se[`type__elite${(0, De.e)(o)}`],
                                    Se[`type__${o}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: { backgroundImage: `url(${_})` },
                            }),
                            Te(r, 'premiumIGR') && s().createElement('div', { className: Se.premiumIGR }),
                            s().createElement(
                                'div',
                                { className: F()(Se.name, null == c ? void 0 : c.name) },
                                d ? u : t,
                            ),
                        );
                    },
                    Ie = 'Content_base_48',
                    Re = 'Content_name_7b',
                    Me = 'Content_specializationInfo_ac',
                    Oe = 'Content_recruitLabel_17';
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const Pe = ({ fullUserName: e, isRecruit: t, tankmanVehicleInfo: u, className: n }) =>
                    s().createElement(
                        'div',
                        { className: F()(Ie, n) },
                        s().createElement('div', { className: Re }, e),
                        s().createElement(
                            'div',
                            { className: Me },
                            t
                                ? s().createElement('div', { className: Oe }, R.strings.crew.tankman.recruit())
                                : s().createElement(Le, He({}, u, { type: xe.whiteSpanish, isShortName: !0 })),
                        ),
                    );
                var We = u(7044);
                const Ge = (0, r.memo)(({ duration: e }) => {
                    const t =
                        e >= 0
                            ? (u = (0, We.f8)(e)).days > 0
                                ? (0, De.WU)(R.strings.common.duration.days(), { days: u.days })
                                : u.hours > 0
                                  ? (0, De.WU)(R.strings.common.duration.hours(), { hours: u.hours })
                                  : u.minutes > 0
                                    ? (0, De.WU)(R.strings.common.duration.minutes(), { minutes: u.minutes })
                                    : (0, De.WU)(R.strings.common.duration.seconds(), { seconds: u.seconds })
                            : R.strings.common.duration.unlimited();
                    var u;
                    return s().createElement('span', null, t);
                });
                var $e = u(2344);
                const ze = 'DismissedCountdown_base_12',
                    Ve = 'DismissedCountdown_icon_e6',
                    Ue = 'DismissedCountdown_label_92',
                    je = s().memo(function ({ duration: e, className: t }) {
                        const u = (0, $e.au)(e, 1);
                        return s().createElement(
                            'div',
                            { className: F()(ze, t) },
                            s().createElement('div', { className: Ve }),
                            s().createElement('div', { className: Ue }, s().createElement(Ge, { duration: u })),
                        );
                    }),
                    Ze = 'Location_base_4d',
                    qe = 'Location_duration_5d',
                    Ye = 'Location_icon_eb',
                    Ke = s().memo(function ({ location: e, className: t, timeToDismiss: u }) {
                        return s().createElement(
                            'div',
                            { className: F()(Ze, t) },
                            e === ve.Dismissed && s().createElement(je, { className: qe, duration: u }),
                            e !== ve.InBarracks &&
                                s().createElement('div', {
                                    className: Ye,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.tankmen.card.location.${e})`,
                                    },
                                }),
                        );
                    });
                let Xe, Qe;
                !(function (e) {
                    (e.Default = 'default'), (e.Selected = 'selected'), (e.InBattle = 'in_battle');
                })(Xe || (Xe = {})),
                    (function (e) {
                        (e.White = 'white'), (e.Red = 'red');
                    })(Qe || (Qe = {}));
                const Je = 'Role_base_68',
                    et = s().memo(function ({ role: e, className: t, roleIconColor: u = Qe.White }) {
                        return s().createElement('div', {
                            className: F()(Je, t),
                            style: { backgroundImage: `url(R.images.gui.maps.icons.tankmen.roles.opaque.${u}.${e})` },
                        });
                    });
                var tt = u(771);
                const ut = (e, t) => {
                        const u = [];
                        for (let n = 0; n < e; n++) u.push(t(n));
                        return u;
                    },
                    nt = 'EfficiencyIndicator_base_34',
                    at = 'EfficiencyIndicator_percent_6b',
                    rt = 'EfficiencyIndicator_percent__full_30',
                    st = 'EfficiencyIndicator_icon_da',
                    ot = (0, r.memo)(({ efficiencyValue: e, tankmanID: t = tt.y$, className: u }) => {
                        const n = e === tt.sU,
                            a = n
                                ? { tooltipId: 'crewSkillUntrained' }
                                : { tooltipId: 'skillsEfficiency', tankmanID: t };
                        return s().createElement(
                            pe.t,
                            {
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                args: a,
                                isEnabled: t !== tt.y$,
                            },
                            s().createElement(
                                'div',
                                { className: F()(nt, u) },
                                n
                                    ? s().createElement('div', { className: st })
                                    : s().createElement(
                                          'div',
                                          { className: F()(at, e === tt.yb && rt) },
                                          (0, De.dL)($.Z5.getNumberFormat(100 * e, $.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    });
                let it;
                !(function (e) {
                    (e.New = 'new'),
                        (e.Learned = 'learned'),
                        (e.Learning = 'learning'),
                        (e.Irrelevant = 'irrelevant'),
                        (e.Possible = 'possible');
                })(it || (it = {}));
                const lt = {
                    base: 'SkillIcon_base_43',
                    base__small: 'SkillIcon_base__small_d0',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let ct;
                !(function (e) {
                    (e.c14x14 = 'small'),
                        (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c180x135 = 'dialogs');
                })(ct || (ct = {}));
                const dt = s().memo(function ({ iconName: e, size: t = ct.c24x24, className: u }) {
                        var n;
                        return s().createElement('div', {
                            style: {
                                backgroundImage: `url(${null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e)})`,
                            },
                            className: F()(lt.base, lt[`base__${t}`], u),
                        });
                    }),
                    mt = {
                        base: 'TankmanSkill_base_84',
                        base__big: 'TankmanSkill_base__big_a0',
                        background: 'TankmanSkill_background_e5',
                        background__grey: 'TankmanSkill_background__grey_49',
                        background__lightYellow: 'TankmanSkill_background__lightYellow_9f',
                        background__yellow: 'TankmanSkill_background__yellow_e2',
                        background__red: 'TankmanSkill_background__red_ca',
                        container: 'TankmanSkill_container_84',
                        disabledIcon: 'TankmanSkill_disabledIcon_25',
                        disabled: 'TankmanSkill_disabled_ba',
                    };
                let _t;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(_t || (_t = {}));
                const Et = { [_t.Big]: ct.c22x22, [_t.Small]: ct.c14x14 };
                var gt;
                !(function (e) {
                    (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                })(gt || (gt = {}));
                const pt = (e, t, u) =>
                        e === it.Possible || e === it.New
                            ? gt.LightYellow
                            : e === it.Irrelevant
                              ? gt.Grey
                              : t === tt.sU
                                ? e === it.Learning
                                    ? gt.Yellow
                                    : gt.Grey
                                : t < tt.yb
                                  ? u
                                      ? gt.Grey
                                      : gt.Red
                                  : e === it.Learning
                                    ? gt.Yellow
                                    : gt.Grey,
                    ht = s().memo(function ({
                        icon: e,
                        type: t,
                        size: u,
                        efficiency: n = tt.yb,
                        hasInstruction: a = !1,
                    }) {
                        const r = (!a && n === tt.sU) || t === it.Irrelevant;
                        return s().createElement(
                            'div',
                            { className: F()(mt.base, mt[`base__${u}`]) },
                            s().createElement('div', {
                                className: F()(mt.background, mt[`background__${pt(t, n, a)}`]),
                            }),
                            e &&
                                s().createElement(
                                    'div',
                                    { className: mt.container },
                                    s().createElement(dt, {
                                        iconName: e,
                                        size: Et[u],
                                        className: F()(r && mt.disabledIcon),
                                    }),
                                    r && s().createElement('div', { className: mt.disabled }),
                                ),
                        );
                    }),
                    vt = 'Skill_base_a9',
                    At = 'Skill_skillLevel_85',
                    bt = ({ icon: e, type: t, isLevelVisible: u, skillLevel: n, efficiency: a, className: r }) =>
                        s().createElement(
                            'div',
                            { className: F()(vt, r) },
                            s().createElement(ht, { icon: e, size: _t.Big, type: t, efficiency: a }),
                            u && s().createElement('div', { className: At }, (0, De.dL)(n)),
                        ),
                    ft = {
                        base: 'Skills_base_d8',
                        skillsEfficiencyWrapper: 'Skills_skillsEfficiencyWrapper_13',
                        skillsEfficiencyWrapper__singleRow: 'Skills_skillsEfficiencyWrapper__singleRow_c9',
                        skillsEfficiency: 'Skills_skillsEfficiency_10',
                        skillsList: 'Skills_skillsList_85',
                        skillsRow: 'Skills_skillsRow_e6',
                        skill: 'Skills_skill_8e',
                        skill__last: 'Skills_skill__last_8c',
                        skill__collapsed: 'Skills_skill__collapsed_b9',
                        skill__extraCollapsed: 'Skills_skill__extraCollapsed_8a',
                    };
                let Ft;
                !(function (e) {
                    (e.Default = 'default'), (e.Collapsed = 'collapsed'), (e.ExtraCollapsed = 'extraCollapsed');
                })(Ft || (Ft = {}));
                const Ct = ({ lastSkillLevel: e, efficiencyValue: t, skills: u, className: n }) => {
                        const a = (0, re.Y4)(t),
                            r = a !== re.H$.Normal,
                            o = e < 100 && e !== tt.Lv,
                            i = ((e, t, u) => {
                                const n = e ? 8 : 9;
                                let a = Ft.Default,
                                    r = 2,
                                    s = t;
                                return (
                                    t <= n
                                        ? (r = 1)
                                        : t > n && t <= 2 * n
                                          ? (s = n)
                                          : ((s = 14), (a = e && u && t >= 27 ? Ft.ExtraCollapsed : Ft.Collapsed)),
                                    [r, s, a]
                                );
                            })(r, u.length, o),
                            l = i[0],
                            c = i[1],
                            d = i[2];
                        return s().createElement(
                            'div',
                            { className: F()(ft.base, n) },
                            r &&
                                s().createElement(
                                    'div',
                                    {
                                        className: F()(
                                            ft.skillsEfficiencyWrapper,
                                            1 === l && ft.skillsEfficiencyWrapper__singleRow,
                                        ),
                                    },
                                    s().createElement(ot, { efficiencyValue: t, className: ft.skillsEfficiency }),
                                ),
                            s().createElement(
                                'div',
                                { className: ft.skillsList },
                                ut(l, (n) =>
                                    s().createElement(
                                        'div',
                                        { key: n, className: ft.skillsRow },
                                        ut(Math.min(c, u.length - n * c), (r) => {
                                            const i = r + n * c,
                                                l = i + 1 === u.length,
                                                m = i + 1 === c * (n + 1) || l,
                                                _ = Y.U2(u, i);
                                            return s().createElement(bt, {
                                                key: i,
                                                type: _.type,
                                                icon: _.icon,
                                                isLevelVisible: l && o && a !== re.H$.Low,
                                                className: F()(ft.skill, ft[`skill__${d}`], m && ft.skill__last),
                                                skillLevel: e,
                                                efficiency: t,
                                            });
                                        }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Dt = 'ThemeHelper_base_39',
                    Bt = 'ThemeHelper_disabledContent_20',
                    wt = 'ThemeHelper_disabledIcon_95',
                    yt = 'ThemeHelper_disabledTitle_57',
                    kt = s().memo(function ({ isDisabled: e, className: t, disableReason: u, disableIcon: n }) {
                        return s().createElement(
                            'div',
                            { className: F()(Dt, t) },
                            e &&
                                s().createElement(
                                    'div',
                                    { className: Bt },
                                    n &&
                                        s().createElement('div', {
                                            className: wt,
                                            style: { backgroundImage: `url(${n})` },
                                        }),
                                    s().createElement('div', { className: yt }, u),
                                ),
                        );
                    }),
                    Tt = {
                        base: 'TankmanCard_base_dd',
                        base__hovered: 'TankmanCard_base__hovered_96',
                        base__selected: 'TankmanCard_base__selected_24',
                        base__disabled: 'TankmanCard_base__disabled_1f',
                        themeHelper: 'TankmanCard_themeHelper_78',
                        locationIcon: 'TankmanCard_locationIcon_26',
                        crewRole: 'TankmanCard_crewRole_2e',
                        iconWrapper: 'TankmanCard_iconWrapper_a3',
                        base__isCollapsedOnHover: 'TankmanCard_base__isCollapsedOnHover_5e',
                        flag: 'TankmanCard_flag_78',
                        icon: 'TankmanCard_icon_a5',
                        separatorWrapper: 'TankmanCard_separatorWrapper_fe',
                        separator: 'TankmanCard_separator_73',
                        separator__top: 'TankmanCard_separator__top_72',
                        content: 'TankmanCard_content_0c',
                        skills: 'TankmanCard_skills_ef',
                        helperLayer: 'TankmanCard_helperLayer_09',
                        helperLayer__error: 'TankmanCard_helperLayer__error_2a',
                    },
                    St = ({
                        tankman: e,
                        isCollapsedOnHover: t = !1,
                        isTooltipEnabled: u = !0,
                        className: n,
                        onClick: a,
                        onMouseDown: o,
                        children: i,
                    }) => {
                        var l, c;
                        const d = e.tankmanKind === Ae.Recruit,
                            m = e.cardState === be.Selected,
                            _ = e.cardState === be.Disabled,
                            E = (0, Ce.o)(!1, []),
                            g = E.isHovered,
                            p = E.handleMouseEnter,
                            h = E.handleMouseLeave,
                            v = (0, r.useMemo)(() => {
                                if (e.recruitGlowImage && d) return { backgroundImage: `url(${e.recruitGlowImage})` };
                            }, [e.recruitGlowImage, d]);
                        return (
                            (0, r.useEffect)(() => {
                                !g || m || _ || (Fe.$.playHighlight(), t && (0, Fe.G)(re.gO.SHOP_INFO));
                            }, [g, m, _, t]),
                            s().createElement(
                                'div',
                                {
                                    className: F()(
                                        Tt.base,
                                        n,
                                        g && Tt.base__hovered,
                                        t && !_ && Tt.base__isCollapsedOnHover,
                                        Tt[`base__${e.cardState}`],
                                    ),
                                    onMouseEnter: () => {
                                        p();
                                    },
                                    onMouseLeave: h,
                                    onMouseDown: o,
                                },
                                s().createElement(kt, {
                                    isDisabled: _,
                                    disableReason: null != (l = e.disableReason) ? l : void 0,
                                    disableIcon: null != (c = e.disableIcon) ? c : void 0,
                                    className: Tt.themeHelper,
                                }),
                                e.role !== he.Any &&
                                    s().createElement(et, {
                                        role: e.role,
                                        roleIconColor: e.hasRolePenalty ? Qe.Red : Qe.White,
                                        className: Tt.crewRole,
                                    }),
                                s().createElement(Ke, {
                                    className: Tt.locationIcon,
                                    location: e.location,
                                    timeToDismiss: e.timeToDismiss,
                                }),
                                s().createElement(
                                    'div',
                                    { className: Tt.iconWrapper, style: v },
                                    e.nation &&
                                        s().createElement('div', {
                                            className: Tt.flag,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.tankmen.card.nations.${e.nation})`,
                                            },
                                        }),
                                    s().createElement(ye, {
                                        name: e.iconName,
                                        size: we.c158x118,
                                        classMix: Tt.icon,
                                        isSkin: e.isInSkin,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Tt.separatorWrapper },
                                    s().createElement('div', { className: F()(Tt.separator, Tt.separator__top) }),
                                    s().createElement('div', { className: Tt.separator }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Tt.content },
                                    s().createElement(Pe, {
                                        fullUserName: e.fullUserName,
                                        isRecruit: d,
                                        tankmanVehicleInfo: e.tankmanVehicleInfo,
                                    }),
                                    s().createElement(Ct, {
                                        skills: e.skills,
                                        lastSkillLevel: e.lastSkillLevel,
                                        efficiencyValue: e.skillsEfficiency,
                                        className: Tt.skills,
                                    }),
                                ),
                                s().createElement(
                                    pe.t,
                                    {
                                        args: {
                                            tooltipId: d ? 'tankmanNotRecruited' : 'tankman',
                                            targetId: d ? e.recruitID : e.tankmanID,
                                        },
                                        isEnabled: u,
                                        ignoreShowDelay: !1,
                                    },
                                    s().createElement('div', {
                                        className: F()(
                                            Tt.helperLayer,
                                            (0, re.Y4)(e.skillsEfficiency) === re.H$.Untrained &&
                                                !m &&
                                                Tt.helperLayer__error,
                                        ),
                                        onClick: () => {
                                            _ || m || !a || (a(), Fe.$.playClick());
                                        },
                                    }),
                                ),
                                !_ && (null == i ? void 0 : i(g)),
                            )
                        );
                    };
                var Nt = u(1856);
                const xt = (e, t, u) => (u < e ? e : u > t ? t : u),
                    Lt = [];
                function It(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), Lt)
                    );
                }
                function Rt(e, t, u = []) {
                    const n = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, r.useEffect)(() => a, [a]);
                    const s = (null != u ? u : []).concat([t]);
                    return [
                        (0, r.useCallback)((u) => {
                            (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, s),
                        a,
                    ];
                }
                function Mt(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ot(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Ot(e, t);
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
                function Ot(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const Ht = () => {
                    const e = (0, r.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        u = (e, u) => {
                            t(e).set(u, u);
                        },
                        n = (e, u) => {
                            t(e).delete(u);
                        },
                        a = (e, ...u) => {
                            for (var n, a = Mt(t(e).values()); !(n = a()).done; ) {
                                (0, n.value)(...u);
                            }
                        };
                    return (0, r.useMemo)(() => ({ on: u, off: n, trigger: a }), []);
                };
                var Pt = u(5139);
                function Wt(e, t, u) {
                    const n = (0, r.useMemo)(() => (0, Pt.Z)(u, e), t);
                    return (0, r.useEffect)(() => n.cancel, [n]), n;
                }
                var Gt = u(7030);
                let $t;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })($t || ($t = {}));
                const zt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Vt = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, u) => {
                            const n = t(e),
                                a = n[0],
                                r = n[1];
                            return r <= a ? 0 : xt(a, r, u);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? zt : c,
                                m = (0, r.useRef)(null),
                                _ = (0, r.useRef)(null),
                                E = Ht(),
                                g = Wt(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, Gt.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (u(t, e), E.trigger('change', e), s && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                h = p[0],
                                v = p[1],
                                A = (0, r.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const a = h.scrollPosition.get(),
                                            r = (null != (n = h.scrollPosition.goal) ? n : 0) - a;
                                        return o(e, t * u + r + a);
                                    },
                                    [h.scrollPosition],
                                ),
                                b = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            v.start({
                                                scrollPosition: o(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: d.animationConfig,
                                                from: { scrollPosition: o(n, h.scrollPosition.get()) },
                                            });
                                    },
                                    [v, d.animationConfig, h.scrollPosition],
                                ),
                                f = (0, r.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            u = _.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return a(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, d.step),
                                            r = A(t, e, n);
                                        b(r);
                                    },
                                    [b, A, d.step],
                                ),
                                F = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && f(n(e)),
                                            m.current && E.trigger('mouseWheel', e, h.scrollPosition, t(m.current));
                                    },
                                    [h.scrollPosition, f, E],
                                ),
                                C = ((e, t = []) => {
                                    const u = (0, r.useRef)(),
                                        n = (0, r.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        (0, Nt.v)(() => {
                                            const e = m.current;
                                            e &&
                                                (b(o(e, h.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [b, h.scrollPosition.goal],
                                ),
                                D = It(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = o(e, h.scrollPosition.goal);
                                    t !== h.scrollPosition.goal && b(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', C),
                                    () => {
                                        window.removeEventListener('resize', C);
                                    }
                                ),
                                [C],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? a(_.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: F,
                                    applyScroll: b,
                                    applyStepTo: f,
                                    contentRef: m,
                                    wrapperRef: _,
                                    scrollPosition: v,
                                    animationScroll: h,
                                    recalculateContent: D,
                                    events: { on: E.on, off: E.off },
                                }),
                                [h.scrollPosition, b, f, E.off, E.on, D, F, v, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Ut = Vt({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? $t.Next : $t.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    jt = 'HorizontalBar_base_49',
                    Zt = 'HorizontalBar_base__nonActive_82',
                    qt = 'HorizontalBar_leftButton_5f',
                    Yt = 'HorizontalBar_rightButton_03',
                    Kt = 'HorizontalBar_track_0d',
                    Xt = 'HorizontalBar_thumb_fd',
                    Qt = 'HorizontalBar_rail_32',
                    Jt = 'disable',
                    eu = { pending: !1, offset: 0 },
                    tu = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    uu = () => {},
                    nu = (e, t) => Math.max(20, e.offsetWidth * t),
                    au = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = tu, onDrag: n = uu }) => {
                        const a = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, r.useState)(eu),
                            E = _[0],
                            g = _[1],
                            p = (0, r.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            h = () => {
                                const t = c.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    i = xt(0, 1, r / (a - n)),
                                    m = (t.offsetWidth - nu(t, s)) * i;
                                (u.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return o.current.classList.add(Jt), void l.current.classList.remove(Jt);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(Jt), void l.current.classList.add(Jt);
                                            var t, u;
                                            o.current.classList.remove(Jt), l.current.classList.remove(Jt);
                                        }
                                    })(m);
                            },
                            v = It(() => {
                                (() => {
                                    const t = d.current,
                                        u = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && u)) return;
                                    const s = Math.min(1, n / r);
                                    (t.style.width = `${nu(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        a.current &&
                                            (1 === s ? a.current.classList.add(Zt) : a.current.classList.remove(Zt));
                                })(),
                                    h();
                            });
                        (0, r.useEffect)(() => (0, Nt.v)(v)),
                            (0, r.useEffect)(
                                () =>
                                    (0, Nt.v)(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let u = uu;
                                        const n = () => {
                                            u(), (u = (0, Nt.v)(v));
                                        };
                                        return (
                                            e.events.on('recalculateContent', v),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', v),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const t = i.O.client.events.mouse.move(([t, u]) => {
                                        var a;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const o = c.current,
                                            i = d.current;
                                        if (!o || !i) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - E.offset - o.getBoundingClientRect().x,
                                            m = (l / o.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: m });
                                    }),
                                    u = i.O.client.events.mouse.up(() => {
                                        t(), p(eu);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, n, p]);
                        const A = Rt((t) => e.applyStepTo(t), m, [e]),
                            b = A[0],
                            f = A[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Jt) || (0, Fe.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: F()(jt, t.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: F()(qt, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Jt) ||
                                        0 !== e.button ||
                                        ((0, Fe.G)('play'), b($t.Next));
                                },
                                onMouseUp: f,
                                ref: o,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: F()(Kt, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if (((0, Fe.G)('play'), t.target === n))
                                                p({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = d.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? $t.Prev : $t.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: d, className: F()(Xt, t.thumb) }),
                                s().createElement('div', { className: F()(Qt, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: F()(Yt, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Jt) ||
                                        0 !== e.button ||
                                        ((0, Fe.G)('play'), b($t.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    ru = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    su = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: F()(ru.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: F()(ru.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(ru.defaultScrollArea, a) },
                                s().createElement(ou, { className: i, api: m, classNames: o }, e),
                            ),
                            s().createElement(au, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    ou = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, r.useEffect)(() => (0, Nt.v)(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: F()(ru.base, t) },
                            s().createElement(
                                'div',
                                {
                                    className: F()(ru.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: F()(ru.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (ou.Bar = au), (ou.Default = su);
                const iu = Vt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? $t.Next : $t.Prev),
                    }),
                    lu = 'VerticalBar_base_f3',
                    cu = 'VerticalBar_base__nonActive_42',
                    du = 'VerticalBar_topButton_d7',
                    mu = 'VerticalBar_bottomButton_06',
                    _u = 'VerticalBar_track_df',
                    Eu = 'VerticalBar_thumb_32',
                    gu = 'VerticalBar_rail_43',
                    pu = 'disable',
                    hu = () => {},
                    vu = { pending: !1, offset: 0 },
                    Au = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    bu = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    fu = (e, t) => Math.max(20, e.offsetHeight * t),
                    Fu = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Au, onDrag: n = hu }) => {
                        const a = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, r.useState)(vu),
                            E = _[0],
                            g = _[1],
                            p = (0, r.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            h = It(() => {
                                const t = d.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && u)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${fu(u, s)}px`),
                                    (t.style.display = 'flex'),
                                    a.current &&
                                        (1 === s ? a.current.classList.add(cu) : a.current.classList.remove(cu)),
                                    s
                                );
                            }),
                            v = It(() => {
                                const t = c.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    i = xt(0, 1, r / (a - n)),
                                    m = (t.offsetHeight - fu(t, s)) * i;
                                (u.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return o.current.classList.add(pu), void l.current.classList.remove(pu);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(pu), void l.current.classList.add(pu);
                                            var t, u;
                                            o.current.classList.remove(pu), l.current.classList.remove(pu);
                                        }
                                    })(m);
                            }),
                            A = It(() => {
                                bu(e, () => {
                                    h(), v();
                                });
                            });
                        (0, r.useEffect)(() => (0, Nt.v)(A)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    bu(e, () => {
                                        v();
                                    });
                                };
                                let u = hu;
                                const n = () => {
                                    u(), (u = (0, Nt.v)(A));
                                };
                                return (
                                    e.events.on('recalculateContent', A),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', A),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const t = i.O.client.events.mouse.up(() => {
                                        p(vu);
                                    }),
                                    u = i.O.client.events.mouse.move(([t]) => {
                                        bu(e, (u) => {
                                            const a = c.current,
                                                r = d.current,
                                                s = e.getContainerSize();
                                            if (!a || !r || !s) return;
                                            const o = t.screenY - E.offset - a.getBoundingClientRect().y,
                                                i = (o / a.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, n, p]);
                        const b = Rt((t) => e.applyStepTo(t), m, [e]),
                            f = b[0],
                            C = b[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const D = (e) => {
                            e.target.classList.contains(pu) || (0, Fe.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: F()(lu, t.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: F()(du, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pu) ||
                                        0 !== e.button ||
                                        ((0, Fe.G)('play'), f($t.Next));
                                },
                                ref: o,
                                onMouseEnter: D,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: F()(_u, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if (((0, Fe.G)('play'), t.target === n))
                                                p({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        bu(e, (n) => {
                                                            if (!n) return;
                                                            const a = u(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? $t.Prev : $t.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                s().createElement('div', { ref: d, className: F()(Eu, t.thumb) }),
                                s().createElement('div', { className: F()(gu, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: F()(mu, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pu) ||
                                        0 !== e.button ||
                                        ((0, Fe.G)('play'), f($t.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Cu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Du = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: F()(Cu.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: F()(Cu.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(Cu.area, a) },
                                s().createElement(Bu, { className: o, classNames: i, api: m }, e),
                            ),
                            s().createElement(Fu, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Bu = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, r.useEffect)(() => (0, Nt.v)(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: F()(Cu.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(Cu.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                Bu.Default = Du;
                const wu = { Vertical: a, Horizontal: n },
                    yu = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: u,
                        paddingBottom: n,
                        amount: a,
                        itemsAmountPerRow: r,
                        visibleRowsAmount: s,
                    }) => {
                        const o = Math.ceil(a / r) * t,
                            i = s * t,
                            l = e * t;
                        return { paddingTop: `${l + u}rem`, paddingBottom: `${Math.max(o - l - i, 0) + n}rem` };
                    },
                    ku = (e) => {
                        const t = e.className,
                            u = e.children,
                            n = e.itemsAmountPerRow,
                            a = e.visibleRowsAmount,
                            r = e.startRowIndex,
                            o = e.amount,
                            i = r * n,
                            l = Math.min(a * n, o - i);
                        return s().createElement(
                            'div',
                            { className: t, style: yu(e) },
                            ut(l, (e) => u(i + e)),
                        );
                    },
                    Tu = 'VirtualGrid_base_52',
                    Su = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: u,
                        children: n,
                        api: a,
                        classNames: o,
                        preloadedRows: l = 1,
                        paddingTop: c = 0,
                        paddingBottom: d = 0,
                    }) => {
                        const m = a.scrollApi,
                            _ = (0, r.useRef)(0),
                            E = (0, r.useState)(0),
                            g = E[0],
                            p = E[1],
                            h = (0, r.useState)(null),
                            v = h[0],
                            A = h[1],
                            b = (0, r.useState)(null),
                            f = b[0],
                            C = b[1];
                        return (
                            (0, r.useEffect)(() => {
                                const t = (t) => {
                                    if (!v) return;
                                    const n = Math.floor((i.O.view.pxToRem(t.value.scrollPosition) - c) / u),
                                        r = Math.ceil(e / v),
                                        s = Math.max(0, Math.min(n - l, r));
                                    p(s), a.startRowIndexChanged(s);
                                };
                                return m.events.on('change', t), () => m.events.off('change', t);
                            }, [a, m, u, c, v, e, l]),
                            (0, r.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                n = m.contentRef.current.getBoundingClientRect(),
                                                r =
                                                    i.O.view.pxToRem(n.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                s = Math.floor(r / t),
                                                o = Math.ceil(i.O.view.pxToRem(n.height) / u) + 2 * l;
                                            (_.current = s), A(s), C(o), a.layoutCalculated(s, o);
                                        }
                                    },
                                    n = () => {
                                        const t = _.current;
                                        e(), a.scrollToIndex(g * t);
                                    };
                                return (
                                    m.events.on('recalculateContent', e),
                                    m.events.on('resizeHandled', n),
                                    () => {
                                        m.events.off('recalculateContent', e), m.events.off('resizeHandled', n);
                                    }
                                );
                            }, [a, m, u, t, l, g]),
                            (0, r.useEffect)(() => {
                                const e = (e, t = !0) => {
                                    v && m.applyScroll(Math.floor((e + 1) / v) * u + c, { immediate: t });
                                };
                                return a.events.on('scrollToIndex', e), () => a.events.off('scrollToIndex', e);
                            }, [a, u, v, c, m]),
                            s().createElement(
                                wu.Vertical.Default,
                                {
                                    api: m,
                                    className: null == o ? void 0 : o.scroll,
                                    areaClassName: null == o ? void 0 : o.areaClassName,
                                    scrollClassName: null == o ? void 0 : o.scrollClassName,
                                    scrollClassNames: {
                                        content: null == o ? void 0 : o.content,
                                        wrapper: null == o ? void 0 : o.wrapper,
                                    },
                                },
                                null !== v &&
                                    null !== f &&
                                    s().createElement(
                                        ku,
                                        {
                                            className: F()(Tu, null == o ? void 0 : o.inner),
                                            paddingBottom: d,
                                            paddingTop: c,
                                            amount: e,
                                            itemsAmountPerRow: v,
                                            visibleRowsAmount: f,
                                            startRowIndex: g,
                                            cellHeight: u,
                                        },
                                        n,
                                    ),
                            )
                        );
                    },
                    Nu = 'VirtualGridWithFade_scrollAreaFade_94',
                    xu = ['api', 'children', 'classNames'];
                function Lu() {
                    return (
                        (Lu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Lu.apply(this, arguments)
                    );
                }
                const Iu = (e) => {
                        let t = e.api,
                            u = e.children,
                            n = e.classNames,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, xu);
                        const o = (0, r.useState)(!0),
                            i = o[0],
                            l = o[1],
                            c = t.scrollApi;
                        return (
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    const e = c.getBounds()[1];
                                    l(Math.abs(e - c.animationScroll.scrollPosition.goal) > 0.1);
                                };
                                return (
                                    c.events.on('change', e),
                                    c.events.on('recalculateContent', e),
                                    () => {
                                        c.events.off('change', e), c.events.off('recalculateContent', e);
                                    }
                                );
                            }, [c]),
                            s().createElement(
                                Su,
                                Lu(
                                    {
                                        api: t,
                                        classNames: Object.assign({}, n, {
                                            scrollClassName: F()(null == n ? void 0 : n.scrollClassName, i && Nu),
                                        }),
                                    },
                                    a,
                                ),
                                u,
                            )
                        );
                    },
                    Ru = 'TankmanVirtualList_grid_41',
                    Mu = ({
                        amount: e,
                        paddingTop: t = 11,
                        paddingBottom: u = 11,
                        api: n,
                        classNames: a,
                        children: r,
                    }) =>
                        s().createElement(
                            Iu,
                            {
                                amount: e,
                                classNames: Object.assign({}, a, { content: F()(Ru, null == a ? void 0 : a.content) }),
                                cellWidth: 318,
                                cellHeight: 265,
                                paddingTop: t,
                                paddingBottom: u,
                                api: n,
                            },
                            r,
                        );
                var Ou = u(5332);
                let Hu;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Hu || (Hu = {}));
                const Pu = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: n = 0,
                        args: a,
                        isEnabled: s = !0,
                        onMouseDown: o,
                    }) => {
                        const i = (0, r.useCallback)(() => {
                                (0, $.c9)($.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: a,
                                }),
                                    Fe.$.playYes();
                            }, [a, t, u, n]),
                            l = (0, r.useCallback)(() => {
                                (0, $.c9)($.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, n]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    o && o(e), ((e) => e.button === Hu.RIGHT)(e) && i();
                                },
                                [o, i],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Wu = ['children'];
                function Gu() {
                    return (
                        (Gu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Gu.apply(this, arguments)
                    );
                }
                const $u = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, Wu);
                    return s().createElement(
                        Pu,
                        Gu({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                let zu, Vu, Uu, ju, Zu, qu, Yu, Ku;
                !(function (e) {
                    (e.Viewed = 'viewed'), (e.Click = 'click');
                })(zu || (zu = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.PersonalFile = 'personal_file_view'),
                            (e.PersonalData = 'personal_data_view'),
                            (e.ServiceRecord = 'service_record_view'),
                            (e.Barracks = 'barracks_view'),
                            (e.MemberChange = 'member_change_view'),
                            (e.QuickTraining = 'quick_training_view'),
                            (e.TankChange = 'tank_change_view');
                    })(Vu || (Vu = {})),
                    (function (e) {
                        (e.DocumentChange = 'document_change_dialog'), (e.RetrainSingle = 'retrain_single_dialog');
                    })(Uu || (Uu = {})),
                    (function (e) {
                        e.PremiumTooltip = 'personal_file_view_premium_tooltip';
                    })(ju || (ju = {})),
                    (function (e) {
                        (e.ChangeButtonTooltip = 'crew_widget_change_button_tooltip'),
                            (e.SlotContextMenu = 'crew_widget_slot_context_menu'),
                            (e.CrewOperationsButton = 'crew_widget_crew_operations_button');
                    })(Zu || (Zu = {})),
                    (function (e) {
                        (e.FirstnameSelect = 'document_change_dialog_firstname_select'),
                            (e.Firstname = 'document_change_dialog_firstname'),
                            (e.LastnameSelect = 'document_change_dialog_lastname_select'),
                            (e.Lastname = 'document_change_dialog_lastname');
                    })(qu || (qu = {})),
                    (function (e) {
                        (e.Checkbox = 'retrain_single_dialog_checkbox'),
                            (e.RoleButton = 'retrain_single_dialog_role_button');
                    })(Yu || (Yu = {})),
                    (function (e) {
                        e.CardContextMenu = 'barracks_view_card_context_menu';
                    })(Ku || (Ku = {}));
                R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                    Vu.PersonalFile,
                    R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                    Vu.PersonalData,
                    R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    Vu.ServiceRecord,
                    R.views.lobby.crew.BarracksView('resId'),
                    Vu.Barracks,
                    R.views.lobby.crew.HangarCrewWidget('resId'),
                    Vu.Hangar,
                    R.views.lobby.crew.MemberChangeView('resId'),
                    Vu.MemberChange,
                    R.views.lobby.crew.TankChangeView('resId'),
                    Vu.TankChange,
                    R.views.lobby.crew.QuickTrainingView('resId'),
                    Vu.QuickTraining;
                let Xu;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(Xu || (Xu = {}));
                let Qu;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(Qu || (Qu = {}));
                const Ju = 'metrics',
                    en = ({ partnerID: e, item: t, parentScreen: u, itemState: n, info: a }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: u || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    tn = (e, t) => {
                        const u = (0, r.useCallback)(
                            (u, n = Xu.Info, a) => {
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
                    },
                    un = (e, t) => {
                        const u = ((e) => {
                                const t = tn(e, Ju),
                                    u = (0, r.useCallback)(
                                        (e) => {
                                            t(e.action, e.logLevel, en(e));
                                        },
                                        [t],
                                    );
                                return (e) => u(e);
                            })('crew'),
                            n = Wt(() => u({ action: zu.Click, parentScreen: e, item: t }), [e, t], 2e3);
                        return (e) => {
                            e.button === Hu.RIGHT && n();
                        };
                    },
                    nn = 'Actions_base_07',
                    an = ({ className: e, children: t }) => s().createElement('div', { className: F()(nn, e) }, t);
                var rn = u(3415);
                const sn = 'MainActionButton_base_07',
                    on = 'MainActionButton_base__visible_43',
                    ln = ['children', 'isVisible', 'tooltipArgs'];
                function cn() {
                    return (
                        (cn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        cn.apply(this, arguments)
                    );
                }
                const dn = (e) => {
                        let t = e.children,
                            u = e.isVisible,
                            n = e.tooltipArgs,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, ln);
                        return s().createElement(
                            rn.l,
                            { tooltipArgs: n },
                            s().createElement(ne.u5, cn({ size: ne.qE.small, mixClass: F()(sn, u && on) }, a), t),
                        );
                    },
                    mn = { base: 'VoiceOverButton_base_a3', soundIcon: 'VoiceOverButton_soundIcon_8a' },
                    _n = ({ onClick: e }) =>
                        s().createElement(
                            ae.i,
                            {
                                header: R.strings.crew.tankman.action.voiceover.tooltip.title(),
                                body: R.strings.crew.tankman.action.voiceover.tooltip.body(),
                            },
                            s().createElement(
                                ne.u5,
                                {
                                    size: ne.qE.small,
                                    mixClass: F()(mn.base, mn.base__visible),
                                    type: ne.L$.secondary,
                                    onClick: e,
                                },
                                s().createElement('div', { className: mn.soundIcon }),
                            ),
                        ),
                    En = ({ className: e }) => s().createElement('div', { className: F()(Tt.base, e) }),
                    gn = 'BarracksTankmanCard_base_15',
                    pn = R.strings.crew.tankman.action,
                    hn = { body: pn.dismiss.tooltip.available.body() },
                    vn = {
                        body: pn.dismiss.tooltip.unavailable.body(),
                        header: pn.dismiss.tooltip.unavailable.title(),
                    },
                    An = { body: pn.restore.tooltip.body() },
                    bn = pn.dismiss.title(),
                    fn = pn.restore.title(),
                    Fn = pn.recruit.title(),
                    Cn = { body: R.strings.crew.tankmanList.tooltip.recruit.body() },
                    Dn = (0, U.Pi)(({ index: e, onLazyLoad: t }) => {
                        const u = te(),
                            n = u.model,
                            a = u.controls,
                            o = un(Vu.Barracks, Ku.CardContextMenu),
                            i = n.computes.getItem(e);
                        (0, r.useEffect)(() => {
                            i || t();
                        }, [t, i]);
                        const l = (0, r.useCallback)(
                                (e) => {
                                    i &&
                                        (i.tankmanKind === Ae.Recruit
                                            ? a.recruitTankman(i.recruitID)
                                            : i.location === ve.Dismissed
                                              ? a.restoreTankman(i.tankmanID)
                                              : e(i.tankmanID));
                                },
                                [a, i],
                            ),
                            c = (0, r.useCallback)(() => {
                                l(a.dismissTankman);
                            }, [l, a]),
                            d = (0, r.useCallback)(() => {
                                l(a.selectTankman);
                            }, [l, a]),
                            m = (0, r.useCallback)(() => {
                                i && a.playRecruitVoiceover(i.recruitID);
                            }, [a, i]);
                        if (!i) return s().createElement(En, { className: gn });
                        const _ = i.tankmanID,
                            E = i.location,
                            g = i.tankmanKind === Ae.Recruit,
                            p = ((e, t, u) => {
                                const n = t ? vn : hn;
                                switch (e) {
                                    case ve.InBarracks:
                                        return [u ? Fn : bn, u ? Cn : n];
                                    case ve.InTank:
                                        return [bn, n];
                                    case ve.Dismissed:
                                    default:
                                        return [fn, An];
                                }
                            })(E, i.isMainActionDisabled, g),
                            h = p[0],
                            v = p[1];
                        return s().createElement(
                            $u,
                            {
                                isEnabled: !g && E !== ve.Dismissed && i.cardState !== be.Disabled,
                                args: { type: 'crewTankman', tankmanID: _ },
                                onMouseDown: o,
                            },
                            s().createElement(
                                St,
                                { isCollapsedOnHover: !0, className: gn, onClick: d, tankman: i },
                                (e) =>
                                    s().createElement(
                                        an,
                                        null,
                                        s().createElement(
                                            dn,
                                            {
                                                tooltipArgs: v,
                                                isVisible: e,
                                                onClick: c,
                                                disabled: i.isMainActionDisabled,
                                            },
                                            h,
                                        ),
                                        i.hasVoiceover && g && s().createElement(_n, { onClick: m }),
                                    ),
                            ),
                        );
                    }),
                    Bn = 'BarracksTankmanList_base_d7',
                    wn = 'BarracksTankmanList_gridWrapper_0b',
                    yn = 'BarracksTankmanList_emptyState_1c',
                    kn = R.strings.crew.tankmanList.emptyState,
                    Tn = (e) => (e ? re.Xd : { body: R.strings.crew.tankmanList.tooltip.recruit.body() }),
                    Sn = (0, U.Pi)(() => {
                        const e = te(),
                            t = e.model,
                            u = e.controls,
                            n = (() => {
                                const e = wu.Vertical.useVerticalScrollApi(),
                                    t = Ht(),
                                    u = (0, r.useCallback)((e, u = !0) => t.trigger('scrollToIndex', e, u), [t]),
                                    n = (0, r.useCallback)((e, u) => t.trigger('layoutCalculated', e, u), [t]),
                                    a = (0, r.useCallback)((e) => t.trigger('startRowIndexChanged', e), [t]);
                                return (0, r.useMemo)(
                                    () => ({
                                        scrollToIndex: u,
                                        layoutCalculated: n,
                                        startRowIndexChanged: a,
                                        scrollApi: e,
                                        events: { off: t.off, on: t.on },
                                    }),
                                    [u, n, a, e, t.off, t.on],
                                );
                            })(),
                            a = t.hasFilters.get(),
                            o = t.itemsAmount.get(),
                            i = ((e, t) => {
                                const u = (0, r.useRef)([0, 0]),
                                    n = (0, r.useRef)(0),
                                    a = (0, r.useRef)([0, !0]);
                                return (
                                    (0, r.useEffect)(() => {
                                        const e = (e, t) => {
                                                u.current = [e, t];
                                            },
                                            r = (e) => {
                                                n.current = e;
                                            },
                                            s = (e) => {
                                                const t = a.current[0];
                                                a.current = [e.value.scrollPosition, t < e.value.scrollPosition];
                                            };
                                        return (
                                            t.scrollApi.events.on('change', s),
                                            t.events.on('layoutCalculated', e),
                                            t.events.on('startRowIndexChanged', r),
                                            () => {
                                                t.scrollApi.events.off('change', s),
                                                    t.events.off('layoutCalculated', e),
                                                    t.events.off('startRowIndexChanged', r);
                                            }
                                        );
                                    }, [t]),
                                    (0, Ou.N)(
                                        () => {
                                            const t = u.current,
                                                r = t[0],
                                                s = t[1],
                                                o = n.current * r,
                                                i = r * s;
                                            e(2 * i, a.current[1] ? o : Math.max(o - 1 * i, 0));
                                        },
                                        [],
                                        10,
                                    )
                                );
                            })(u.loadCards, n);
                        return s().createElement(
                            'div',
                            { className: Bn },
                            o > 0
                                ? s().createElement(
                                      'div',
                                      { className: wn },
                                      s().createElement(Mu, { amount: o, api: n }, (e) =>
                                          s().createElement(Dn, { key: e, index: e, onLazyLoad: i }),
                                      ),
                                  )
                                : s().createElement(
                                      ge,
                                      {
                                          warningText: a ? kn.noFilteredItems() : kn.noItems(),
                                          buttonType: a ? ue.L.secondary : ue.L.primary,
                                          tooltipArgs: Tn(a),
                                          onClick: u.resetFilters,
                                          className: yn,
                                      },
                                      !!a && kn.button.resetFilers(),
                                  ),
                        );
                    }),
                    Nn = 'ButtonWithDiscountIndicator_base_6c',
                    xn = 'ButtonWithDiscountIndicator_discountIndicator_a5',
                    Ln = 'ButtonWithDiscountIndicator_discountIndicator__small_d6',
                    In = ['hasDiscount', 'className', 'children', 'wrapperId', 'isSmall'];
                const Rn = s().memo(function (e) {
                        let t = e.hasDiscount,
                            u = e.className,
                            n = e.children,
                            a = e.wrapperId,
                            r = e.isSmall,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, In);
                        return s().createElement(
                            'div',
                            { id: a, className: F()(Nn, u) },
                            s().createElement(ne.u5, o, n),
                            t && s().createElement('div', { className: F()(xn, r && Ln) }),
                        );
                    }),
                    Mn = {
                        base: 'ListHeader_base_ad',
                        title: 'ListHeader_title_a8',
                        base__memberChange: 'ListHeader_base__memberChange_c2',
                        base__tankChange: 'ListHeader_base__tankChange_fb',
                        base__personalData: 'ListHeader_base__personalData_aa',
                    };
                let On;
                !(function (e) {
                    (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(On || (On = {}));
                const Hn = ({ title: e, theme: t = On.Barracks, className: u, children: n }) =>
                    s().createElement(
                        'div',
                        { className: F()(Mn.base, Mn[`base__${t}`], u) },
                        s().createElement('div', { className: Mn.title }, e),
                        n,
                    );
                var Pn = u(9197);
                const Wn = 'Header_base_4b',
                    Gn = 'Header_berthsAmount_12',
                    $n = 'Header_button_f1';
                function zn() {
                    return (
                        (zn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        zn.apply(this, arguments)
                    );
                }
                const Vn = (e) =>
                        e
                            ? { contentId: R.views.lobby.crew.tooltips.BunksConfirmDiscountTooltip('resId') }
                            : {
                                  header: R.strings.crew.barracks.tooltip.enlarge.header(),
                                  body: R.strings.crew.barracks.tooltip.enlarge.body(),
                              },
                    Un = (0, U.Pi)(() => {
                        const e = te(),
                            t = e.model,
                            u = e.controls,
                            n = t.isBerthsOnSale.get();
                        return s().createElement(
                            Hn,
                            { title: R.strings.crew.barracks.title() },
                            s().createElement(
                                'div',
                                { className: Wn },
                                s().createElement(
                                    Pn.C,
                                    zn({ title: R.strings.crew.barracks.bunks.title() }, t.berthsAmount.get(), {
                                        className: Gn,
                                    }),
                                ),
                                s().createElement(
                                    rn.l,
                                    { tooltipArgs: Vn(n) },
                                    s().createElement(
                                        Rn,
                                        {
                                            size: ne.qE.small,
                                            type: ne.L$.ghost,
                                            mixClass: $n,
                                            onClick: u.buyBerth,
                                            disabled: !1,
                                            hasDiscount: n,
                                        },
                                        R.strings.crew.barracks.action.enlarge(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    jn = 'BarracksApp_base_b7',
                    Zn = 'BarracksApp_content_a3',
                    qn = 'BarracksApp_content__withBanner_3d',
                    Yn = 'BarracksApp_conversionBanner_b4',
                    Kn = (0, U.Pi)(() => {
                        const e = te(),
                            t = e.controls,
                            u = e.model,
                            n = k().mediaSize,
                            a = u.isConversionBannerVisible.get();
                        var r;
                        return (
                            (r = t.showHangar),
                            V(G.n.ESCAPE, r),
                            s().createElement(
                                'div',
                                { className: jn },
                                s().createElement(
                                    'div',
                                    { className: F()(Zn, a && qn) },
                                    s().createElement(Un, null),
                                    s().createElement(Z.p, { popoverDirection: n < B.Large ? W.IC.Left : W.IC.Bottom }),
                                    s().createElement(Sn, null),
                                ),
                                a && s().createElement(j.y, { className: Yn }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    P().render(
                        s().createElement(ee, null, s().createElement(O, null, s().createElement(Kn, null))),
                        document.getElementById('root'),
                    );
                });
            },
            9367: (e, t, u) => {
                'use strict';
                u.d(t, { Q: () => d });
                var n = u(6483),
                    a = u.n(n),
                    r = u(9987),
                    s = u(6179),
                    o = u.n(s);
                const i = 'AlertCounter_base_f3',
                    l = 'AlertCounter_counter_da',
                    c = 'AlertCounter_label_18',
                    d = ({ value: e, className: t }) =>
                        o().createElement(
                            'div',
                            { className: a()(i, t) },
                            o().createElement(r.A, { value: e, className: l }),
                            !e && o().createElement('div', { className: c }, R.strings.crew.common.exclamationMark()),
                        );
            },
            9197: (e, t, u) => {
                'use strict';
                u.d(t, { C: () => h });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    s = u.n(r);
                const o = 'NumberRange_base_5e',
                    i = 'NumberRange_base__animation_79',
                    l = 'NumberRange_from_70',
                    c = 'NumberRange_from__red_f8',
                    d = 'NumberRange_separator_c0',
                    m = s().memo(function ({ from: e, to: t, className: u }) {
                        return s().createElement(
                            'div',
                            { className: a()(o, e <= 0 && i, u) },
                            s().createElement('div', { className: a()(l, e <= 0 && t > 0 && c) }, e),
                            e !== t &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: d }, '/'),
                                    s().createElement('div', null, t),
                                ),
                        );
                    }),
                    _ = 'NumberRangeWithLabel_base_2b',
                    E = 'NumberRangeWithLabel_title_94',
                    g = 'NumberRangeWithLabel_counter_00',
                    p = 'NumberRangeWithLabel_counterGlow_1f',
                    h = ({ title: e, isGlowVisible: t = !1, className: u, classNames: n, from: o, to: i }) => {
                        const l = (0, r.useMemo)(
                            () => ({
                                left: o !== i ? 7 * String(o).length + 4 : Math.round((7 * String(o).length) / 2),
                            }),
                            [o, i],
                        );
                        return s().createElement(
                            'div',
                            { className: a()(_, u) },
                            s().createElement('div', { className: E }, e),
                            s().createElement(
                                'div',
                                { className: g },
                                s().createElement(m, { from: o, to: i }),
                                t &&
                                    s().createElement('div', {
                                        style: l,
                                        className: a()(p, null == n ? void 0 : n.counterGlow),
                                    }),
                            ),
                        );
                    };
            },
            9631: (e, t, u) => {
                'use strict';
                u.d(t, { C: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3457),
                    s = u(2106),
                    o = u(9987),
                    i = u(6179),
                    l = u.n(i),
                    c = u(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const _ = l().memo(function (e) {
                    let t = e.isActive,
                        u = e.counter,
                        n = e.className,
                        i = e.children,
                        _ = e.type,
                        E = void 0 === _ ? s.L.secondary : _,
                        g = e.size,
                        p = void 0 === g ? s.q.small : g,
                        h = e.hasIndicator,
                        v = void 0 === h || h,
                        A = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, d);
                    return l().createElement(
                        'div',
                        { className: a()(c.Z.base, n, t && c.Z.base__active) },
                        l().createElement(r.u5, m({ type: E, size: p, mixClass: c.Z.button }, A), i),
                        l().createElement('div', { className: c.Z.overlay }),
                        v && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(u) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(o.A, { value: u, size: 'small' }),
                            ),
                    );
                });
            },
            4585: (e, t, u) => {
                'use strict';
                u.d(t, { o: () => r });
                var n = u(5332),
                    a = u(6179);
                const r = (e, t, u = 150) => {
                    const r = (0, a.useState)(e),
                        s = r[0],
                        o = r[1],
                        i = (0, n.N)((e) => o(e), t, u);
                    return {
                        isHovered: s,
                        handleMouseEnter: (0, a.useCallback)(() => i(!0), [i]),
                        handleMouseLeave: (0, a.useCallback)(() => i(!1), [i]),
                    };
                };
            },
            8018: (e, t, u) => {
                'use strict';
                u.d(t, { H$: () => o, Xd: () => r, Y4: () => i, gO: () => s });
                var n = u(771);
                u(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let a;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(a || (a = {}));
                const r = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let s;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(s || (s = {}));
                let o;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(o || (o = {}));
                const i = (e) => (e === n.sU ? o.Untrained : e < n.yb ? o.Low : o.Normal);
            },
            536: (e, t, u) => {
                'use strict';
                u.d(t, { y: () => $ });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    o = u(3457);
                let i, l;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(i || (i = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(l || (l = {}));
                var c = u(7044),
                    d = u(2344),
                    m = u(3138);
                var _ = u(3649);
                const E = 'Countdown_base_fe',
                    g = 'Countdown_icon_8b',
                    p = 'Countdown_description_8d',
                    h = (e) => e.toString().padStart(2, '0'),
                    v = R.images.gui.maps.icons.components.countdown,
                    A = (e, t) => {
                        const u = 2 === t ? v.big : v;
                        switch (e) {
                            case i.Timer:
                                return u.clock();
                            case i.Countdown:
                                return u.hourglass();
                            case i.Cooldown:
                                return u.lock();
                        }
                    },
                    b = (0, n.memo)(
                        ({
                            duration: e,
                            icon: t = i.Timer,
                            style: u = l.Description,
                            onTimeReached: r,
                            className: o = '',
                            classNames: v = {},
                        }) => {
                            const b = u !== l.Description ? 1 : void 0,
                                f = (0, d.au)(e, b),
                                F = (() => {
                                    const e = (0, n.useState)(m.O.view.getScale()),
                                        t = e[0],
                                        u = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                u(m.O.view.getScale());
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
                            r && r[f] && r[f]();
                            const C = ((e, t) => {
                                switch (t) {
                                    case l.Description:
                                        return (0, c.wB)(e);
                                    case l.Short:
                                        return `${h(e.minutes)}:${h(e.seconds)}`;
                                    case l.Long:
                                        return `${h(e.hours)}:${h(e.minutes)}:${h(e.seconds)}`;
                                    case l.Extended:
                                        return `${(0, _.WU)(R.strings.common.duration.days(), { days: e.days })} | ${h(e.hours)}:${h(e.minutes)}:${h(e.seconds)}`;
                                }
                            })((0, c.f8)(f), u);
                            return a().createElement(
                                'div',
                                { className: s()(E, o) },
                                t !== i.None &&
                                    a().createElement('div', {
                                        className: s()(g, v.icon),
                                        style: { backgroundImage: `url('${A(t, F)}')` },
                                    }),
                                a().createElement('div', { className: s()(p, v.text) }, C),
                            );
                        },
                    );
                var f = u(6373),
                    F = u(7727),
                    C = u(3403),
                    D = u(4585);
                const B = (0, u(3215).q)()(
                        ({ observableModel: e }) => Object.assign({}, e.primitives(['secondsLeft', 'isDisabled'])),
                        ({ externalModel: e }) => ({ startConversion: e.createCallbackNoArgs('onStartConversion') }),
                    ),
                    w = B[0],
                    y = B[1],
                    k = 'ConversionBannerWidgetApp_base_08',
                    T = 'ConversionBannerWidgetApp_base__disabled_79',
                    S = 'ConversionBannerWidgetApp_background_c7',
                    N = 'ConversionBannerWidgetApp_base__hovered_e9',
                    x = 'ConversionBannerWidgetApp_backgroundImage_96',
                    L = 'ConversionBannerWidgetApp_fullSize_7f',
                    I = 'ConversionBannerWidgetApp_button_fc',
                    M = 'ConversionBannerWidgetApp_buttonGlow_57',
                    O = 'ConversionBannerWidgetApp_buttonText_70',
                    H = 'ConversionBannerWidgetApp_text_63',
                    P = 'ConversionBannerWidgetApp_countdown_f9',
                    W = (0, C.Pi)(({ className: e }) => {
                        const t = y(),
                            u = t.model,
                            r = t.controls,
                            c = u.isDisabled.get(),
                            d = (0, D.o)(!1, [], 0),
                            m = d.isHovered,
                            _ = d.handleMouseEnter,
                            E = d.handleMouseLeave;
                        (0, n.useEffect)(() => {
                            m && !c && F.$.playHighlight();
                        }, [m, c]);
                        return a().createElement(
                            'div',
                            { className: s()(k, m && N, c && T, e), onMouseEnter: c ? void 0 : _, onMouseLeave: E },
                            a().createElement('div', { className: S }, a().createElement('div', { className: x })),
                            a().createElement('div', { className: H }, R.strings.crew.conversionBanner.infoText()),
                            a().createElement(b, {
                                className: P,
                                duration: u.secondsLeft.get(),
                                icon: i.Timer,
                                style: l.Extended,
                            }),
                            a().createElement('div', {
                                className: L,
                                onClick: () => {
                                    c || (F.$.playClick(), r.startConversion());
                                },
                            }),
                            a().createElement(
                                f.i,
                                {
                                    body: c
                                        ? R.strings.crew.conversionBanner.button.tooltip.disabled.body()
                                        : R.strings.crew.conversionBanner.button.tooltip.enabled.body(),
                                    header: c ? R.strings.crew.conversionBanner.button.tooltip.disabled.title() : '',
                                },
                                a().createElement(
                                    'div',
                                    null,
                                    a().createElement(
                                        o.u5,
                                        { mixClass: I, disabled: c, onClick: r.startConversion },
                                        !c && a().createElement('div', { className: M }),
                                        a().createElement(
                                            'div',
                                            { className: O },
                                            R.strings.crew.conversionBanner.button.label(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    G = { rootId: R.views.lobby.crew.widgets.ConversionBannerWidget('resId') },
                    $ = (0, n.memo)((e) => a().createElement(w, { options: G }, a().createElement(W, e)));
            },
            5801: (e, t, u) => {
                'use strict';
                u.d(t, { p: () => Ne });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    o = u(2106),
                    i = u(6373);
                let l;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(l || (l = {}));
                var c = u(3403),
                    d = u(3415),
                    m = u(9480),
                    _ = u(9631);
                const E = 'FilterTitle_base_a7',
                    g = 'FilterTitle_label_05',
                    p = 'FilterTitle_discount_42',
                    h = 'FilterTitle_discountIcon_30',
                    v = ({ label: e, hasDiscount: t, className: u }) =>
                        a().createElement(
                            'div',
                            { className: s()(E, u) },
                            a().createElement('div', { className: g }, e),
                            t && a().createElement('div', { className: p }, a().createElement('div', { className: h })),
                        );
                let A;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Nation = 'nation'),
                        (e.Location = 'location'),
                        (e.TankmanRole = 'tankmanRole'),
                        (e.TankmanKind = 'tankmanKind'),
                        (e.VehicleGrade = 'vehicleGrade'),
                        (e.VehicleTier = 'vehicleTier'),
                        (e.VehicleType = 'vehicleType'),
                        (e.PersonalDataType = 'personalDataType'),
                        (e.VehicleCD = 'vehicle');
                })(A || (A = {}));
                var b = u(3649);
                const f = 'ToggleIcon_base_59',
                    F = 'ToggleIcon_base__small_3e',
                    C = 'ToggleIcon_icon_e7',
                    D = a().memo(function ({ icon: e, isSmall: t = !1, classNames: u }) {
                        return a().createElement(
                            'div',
                            { className: s()(f, t && F) },
                            a().createElement('div', {
                                className: s()(C, null == u ? void 0 : u.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var B = u(9690);
                const w = 'VehicleTier_base_9c',
                    y = 'VehicleTier_base__small_fc',
                    k = ({ level: e, isSmall: t = !1 }) =>
                        a().createElement('div', { className: s()(w, t && y) }, (0, B.HG)(e)),
                    T = {
                        icon__vehicleType: 'ToggleButtonIcon_icon__vehicleType_83',
                        icon__nation: 'ToggleButtonIcon_icon__nation_c1',
                        icon__vehicleGradePrimary: 'ToggleButtonIcon_icon__vehicleGradePrimary_d6',
                        icon__tankmanRole: 'ToggleButtonIcon_icon__tankmanRole_4b',
                        icon__selected: 'ToggleButtonIcon_icon__selected_ca',
                        icon__tankmanKind: 'ToggleButtonIcon_icon__tankmanKind_5e',
                        icon__vehicleGradeElite: 'ToggleButtonIcon_icon__vehicleGradeElite_26',
                        icon__locationRecruit: 'ToggleButtonIcon_icon__locationRecruit_3b',
                        icon__locationTankman: 'ToggleButtonIcon_icon__locationTankman_f6',
                        icon__personalDataType: 'ToggleButtonIcon_icon__personalDataType_a8',
                        icon__tankmanKindDismissed: 'ToggleButtonIcon_icon__tankmanKindDismissed_86',
                        icon__vehicleGradePremium: 'ToggleButtonIcon_icon__vehicleGradePremium_11',
                    },
                    S = ({ id: e, icon: t, type: u, isSmall: n = !0, isSelected: r = !1 }) =>
                        u === A.VehicleTier
                            ? a().createElement(k, { isSmall: n, level: Number(e) })
                            : a().createElement(D, {
                                  icon: t,
                                  isSmall: n,
                                  classNames: {
                                      icon: s()(T[`icon__${u}`], T[`icon__${u}${(0, b.e)(e)}`], r && T.icon__selected),
                                  },
                              }),
                    N = {
                        base: 'FilterToggleGroup_base_69',
                        title: 'FilterToggleGroup_title_65',
                        content: 'FilterToggleGroup_content_80',
                        toggle: 'FilterToggleGroup_toggle_d4',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_11',
                    };
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                let L;
                !(function (e) {
                    (e.Default = 'default'), (e.InPopup = 'inPopup');
                })(L || (L = {}));
                const I = ({ header: e, body: t, contentId: u, targetId: n }) =>
                        u
                            ? { contentId: u, targetId: n }
                            : t || e
                              ? { header: null != e ? e : void 0, body: null != t ? t : void 0 }
                              : void 0,
                    M = ({
                        id: e,
                        type: t,
                        label: u,
                        hasDiscount: n,
                        filters: r,
                        onClick: o,
                        className: i,
                        toggleProps: l,
                        theme: c = L.Default,
                    }) => {
                        const E = c === L.InPopup;
                        return a().createElement(
                            'div',
                            { className: s()(N.base, N[`base__${c}`], i) },
                            E && a().createElement(v, { className: N.title, label: u, hasDiscount: n }),
                            a().createElement(
                                'div',
                                { className: N.content },
                                m.UI(r, ({ id: u, isSelected: n, tooltip: r, icon: i, counter: c }) =>
                                    a().createElement(
                                        d.l,
                                        { key: u, tooltipArgs: I(r), className: N.toggle },
                                        a().createElement(
                                            _.C,
                                            x({}, l, {
                                                className: s()(N.toggle, null == l ? void 0 : l.className),
                                                isActive: n,
                                                onClick: () => (null == o ? void 0 : o(e, u)),
                                                counter: c,
                                            }),
                                            a().createElement(S, {
                                                id: u,
                                                icon: i,
                                                type: t,
                                                isSmall: E,
                                                isSelected: n,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    };
                var O = u(9197);
                const H = (0, u(3215).q)()(
                        ({ observableModel: e }) =>
                            Object.assign(
                                {},
                                e.primitives([
                                    'isSearchEnabled',
                                    'searchString',
                                    'searchPlaceholder',
                                    'searchTooltipHeader',
                                    'searchTooltipBody',
                                    'isPopoverEnabled',
                                    'isPopoverHighlighted',
                                    'hasAppliedFilters',
                                    'panelType',
                                    'title',
                                    'popoverTooltipHeader',
                                    'popoverTooltipBody',
                                    'hasDiscountAlert',
                                ]),
                                {
                                    amountInfo: e.object('amountInfo'),
                                    filter: e.object('filter'),
                                    filters: e.array('filter.filters'),
                                },
                            ),
                        ({ externalModel: e }) => ({
                            search: e.createCallback((e) => ({ value: e }), 'onSearch'),
                            updateFilter: e.createCallback((e, t) => ({ groupID: e, toggleID: t }), 'onUpdateFilter'),
                            resetFilter: e.createCallbackNoArgs('onResetFilter'),
                        }),
                    ),
                    P = H[0],
                    W = H[1];
                var G = u(3457),
                    $ = u(3616),
                    z = u(1037),
                    V = u(9367);
                const U = 'PopupButton_base_7c',
                    j = 'PopupButton_popupButtonLabel_ed',
                    Z = 'PopupButton_buttonIconWrapper_d7',
                    q = 'PopupButton_buttonIcon_e0',
                    Y = 'PopupButton_buttonIcon__isHighlighted_84',
                    K = 'PopupButton_discountAlert_c8',
                    X = ({ isHighlighted: e, hasDiscountAlert: t, popoverDirection: u = z.IC.Bottom }) =>
                        a().createElement(
                            'div',
                            { className: U },
                            a().createElement('div', { className: j }, R.strings.crew.filter.popup.button.title()),
                            a().createElement(
                                $.Z,
                                {
                                    contentId: R.views.lobby.crew.popovers.FilterPopoverView('resId'),
                                    targetId: R.views.lobby.crew.widgets.FilterPanelWidget('resId'),
                                    direction: u,
                                },
                                a().createElement(
                                    'div',
                                    { id: 'popup_btn', className: Z },
                                    a().createElement(
                                        _.C,
                                        { type: G.L$.ghost, size: G.qE.small, isActive: e, hasIndicator: !1 },
                                        a().createElement('div', { className: s()(q, e && Y) }),
                                    ),
                                    t && a().createElement(V.Q, { className: K }),
                                ),
                            ),
                        );
                var Q = u(8018);
                const J = 'ResetButton_base_58',
                    ee = 'ResetButton_button_a5',
                    te = 'ResetButton_icon_4a',
                    ue = ({ onClick: e }) =>
                        a().createElement(
                            'div',
                            { className: J },
                            a().createElement(
                                i.i,
                                Q.Xd,
                                a().createElement(
                                    G.u5,
                                    { mixClass: ee, onClick: e, type: G.L$.ghost, size: G.qE.small },
                                    a().createElement('div', { className: te }),
                                ),
                            ),
                        ),
                    ne = 'default',
                    ae = 'search',
                    re = 'email',
                    se = 'password',
                    oe = 'normal',
                    ie = 'disabled',
                    le = 'alert',
                    ce = 'error',
                    de = 'medium',
                    me = {
                        [ne]: '',
                        [re]: R.strings.common.input.placeholder.email(),
                        [ae]: R.strings.common.input.placeholder.search(),
                        [se]: R.strings.common.input.placeholder.password(),
                    },
                    _e = { [ne]: 'text', [re]: 'text', [ae]: 'text', [se]: 'password' },
                    Ee = { [ne]: '', [re]: 'Invalid email', [ae]: '', [se]: '' },
                    ge = R.images.gui.maps.icons.components.input;
                function pe(e, t) {
                    return (
                        t !== re ||
                        (function (e) {
                            const t = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(t);
                        })(e)
                    );
                }
                var he = u(7727);
                const ve = {
                        base: 'InputControl_base_68',
                        base__focused: 'InputControl_base__focused_aa',
                        base__alert: 'InputControl_base__alert_22',
                        base__error: 'InputControl_base__error_ff',
                        base__done: 'InputControl_base__done_a7',
                        base__disabled: 'InputControl_base__disabled_f8',
                        input: 'InputControl_input_93',
                        base__small: 'InputControl_base__small_85',
                        base__medium: 'InputControl_base__medium_a2',
                        base__large: 'InputControl_base__large_32',
                        base__withIcon: 'InputControl_base__withIcon_9e',
                        input__search: 'InputControl_input__search_85',
                        disabled: 'InputControl_disabled_78',
                        placeholder: 'InputControl_placeholder_e3',
                        placeholder__search: 'InputControl_placeholder__search_d5',
                        icon: 'InputControl_icon_13',
                        icon__search: 'InputControl_icon__search_57',
                        clear: 'InputControl_clear_bb',
                    },
                    Ae = a().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: u = ne,
                            size: r = de,
                            variant: o = oe,
                            placeholder: i = '',
                            highlighted: l,
                            withClear: c,
                            selectOnFocus: d = !0,
                            maxLength: m,
                            iconSource: _,
                            classMix: E,
                            onMouseEnter: g,
                            onMouseLeave: p,
                            onMouseDown: h,
                            onMouseUp: v,
                            onClick: A,
                            onChange: b,
                            onClear: f,
                            onFocus: F,
                            onBlur: C,
                        }) => {
                            const D = (0, n.useState)(!1),
                                B = D[0],
                                w = D[1],
                                y = (0, n.useRef)(null),
                                k = (0, n.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                T = o !== ie,
                                S = (0, n.useCallback)(
                                    (e) => {
                                        T && (w(!0), F && F(e));
                                    },
                                    [T, F],
                                ),
                                N = (0, n.useCallback)(
                                    (e) => {
                                        T && !k.current.mouseOver && (w(!1), C && C(e));
                                    },
                                    [T, C],
                                );
                            (0, n.useEffect)(() => {
                                T && B && d && y.current && y.current.select();
                            }, [d, B, T]);
                            const x = (0, n.useCallback)(
                                    (e) => {
                                        T && b && b(e.target.value);
                                    },
                                    [T, b],
                                ),
                                L = (0, n.useCallback)(
                                    (e) => {
                                        T && ((k.current.mouseOver = !0), g && g(e));
                                    },
                                    [T, g],
                                ),
                                I = (0, n.useCallback)(
                                    (e) => {
                                        T &&
                                            y.current &&
                                            (k.current.mouseDown && y.current.focus(),
                                            (k.current.mouseOver = !1),
                                            p && p(e));
                                    },
                                    [T, p],
                                ),
                                R = (0, n.useCallback)(
                                    (e) => {
                                        T && ((k.current.mouseDown = !0), h && h(e));
                                    },
                                    [T, h],
                                ),
                                M = (0, n.useCallback)(
                                    (e) => {
                                        T && ((k.current.mouseDown = !1), v && v(e));
                                    },
                                    [T, v],
                                ),
                                O = (0, n.useCallback)(
                                    (e) => {
                                        if (T && y.current) {
                                            (!B || (B && e.target !== y.current)) && y.current.focus(), A && A(e);
                                        }
                                    },
                                    [B, T, A],
                                ),
                                H = i || me[u],
                                P = Boolean(_),
                                W = s()(
                                    ve.base,
                                    ve[`base__${r}`],
                                    l && ve[`base__${o}`],
                                    B && ve.base__focused,
                                    P && ve.base__withIcon,
                                    E,
                                ),
                                G = (0, n.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                $ = s()(ve.input, ve[`input__${u}`]),
                                z = s()(ve.icon, ve[`icon__${u}`]),
                                V = s()(ve.placeholder, ve[`placeholder__${u}`]);
                            return a().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: L,
                                    onMouseDown: R,
                                    onMouseUp: M,
                                    onMouseLeave: I,
                                    onClick: O,
                                },
                                !T && a().createElement('div', { className: ve.disabled }),
                                G && a().createElement('div', { style: G, className: z }),
                                a().createElement('input', {
                                    ref: y,
                                    className: $,
                                    type: _e[u],
                                    value: t,
                                    onChange: x,
                                    disabled: !T,
                                    onFocus: S,
                                    onBlur: N,
                                    maxLength: m,
                                }),
                                H && !t && !B && a().createElement('div', { className: V }, H),
                                c &&
                                    a().createElement('div', {
                                        className: ve.clear,
                                        onClick: (e) => {
                                            he.$.playClick(), f && f(e);
                                        },
                                        onMouseEnter: he.$.playHighlight,
                                    }),
                            );
                        },
                    ),
                    be = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    fe = ({ variant: e, show: t = !0, helperText: u, helperIcon: r, classMix: o }) => {
                        const i = (0, n.useMemo)(() => {
                                const t =
                                    r ||
                                    (function (e) {
                                        return e === le ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [r, e]),
                            l = s()(be.base, t && be.base__shown),
                            c = s()(be.message, be[`message__${e}`], o);
                        return a().createElement(
                            'div',
                            { className: l },
                            i && a().createElement('div', { className: be.icon, style: i }),
                            a().createElement('div', { className: c }, u),
                        );
                    },
                    Fe = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    Ce = [
                        'componentId',
                        'type',
                        'variant',
                        'size',
                        'value',
                        'tooltipArgs',
                        'helperText',
                        'isValidated',
                        'showHelper',
                        'error',
                        'options',
                        'onFocus',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onChange',
                        'classMix',
                        'controlClassMix',
                        'helperClassMix',
                    ];
                function De() {
                    return (
                        (De =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        De.apply(this, arguments)
                    );
                }
                const Be = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    we = (e) => {
                        let t = e.componentId,
                            u = e.type,
                            r = void 0 === u ? ne : u,
                            o = e.variant,
                            i = void 0 === o ? oe : o,
                            l = e.size,
                            c = void 0 === l ? de : l,
                            m = e.value,
                            _ = e.tooltipArgs,
                            E = e.helperText,
                            g = void 0 === E ? '' : E,
                            p = e.isValidated,
                            h = void 0 === p || p,
                            v = e.showHelper,
                            A = void 0 === v || v,
                            b = e.error,
                            f = e.options,
                            F = e.onFocus,
                            C = e.onMouseEnter,
                            D = e.onMouseLeave,
                            B = e.onMouseUp,
                            w = e.onMouseDown,
                            y = e.onChange,
                            k = e.classMix,
                            T = e.controlClassMix,
                            S = e.helperClassMix,
                            N = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Ce);
                        const x = (0, n.useState)(m),
                            L = x[0],
                            I = x[1],
                            R = (0, n.useState)(h),
                            M = R[0],
                            O = R[1],
                            H = (0, n.useMemo)(() => Object.assign({}, Be, f), [f]),
                            P = (0, n.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: m, type: r }),
                            W = (0, n.useCallback)((e) => {
                                e !== P.current.value &&
                                    ((P.current.value = e), (P.current.isChangeHandled = !1), I(e));
                            }, []),
                            G = (0, n.useCallback)(
                                (e) => {
                                    let t = !0;
                                    H.performChangeValidation &&
                                        (t = H.changesValidator ? H.changesValidator(e) : pe(e, P.current.type)),
                                        y && y(e, t);
                                },
                                [y, H],
                            ),
                            $ = (0, n.useCallback)(() => {
                                P.current.debounceTimeout &&
                                    (window.clearTimeout(P.current.debounceTimeout), (P.current.debounceTimeout = 0));
                            }, []),
                            z = (0, n.useCallback)(() => W(''), [W]);
                        (0, n.useEffect)(() => () => $(), [$]);
                        const V = (0, n.useCallback)(
                            (e) => {
                                $(),
                                    H.debounceTime
                                        ? (P.current.debounceTimeout = window.setTimeout(() => {
                                              G(e);
                                          }, H.debounceTime))
                                        : G(e);
                            },
                            [G, $, H.debounceTime],
                        );
                        (0, n.useEffect)(() => {
                            P.current.isChangeHandled ||
                                P.current.value !== L ||
                                (V(P.current.value), (P.current.isChangeHandled = !0));
                        }, [L, V]),
                            (0, n.useEffect)(() => {
                                P.current.isChangeHandled && m !== P.current.value && ((P.current.value = m), I(m)),
                                    (P.current.type = r);
                            }, [m, r]),
                            (0, n.useEffect)(() => {
                                O(h);
                            }, [h, i]);
                        const U = (0, n.useCallback)((e) => C && C(e), [C]),
                            j = (0, n.useCallback)(
                                (e) => {
                                    H.disableHighlightOnFocus && M && O(!1), F && F(e);
                                },
                                [M, F, H.disableHighlightOnFocus],
                            ),
                            Z = (0, n.useCallback)((e) => B && B(e), [B]),
                            q = (0, n.useCallback)((e) => w && w(e), [w]),
                            Y = (0, n.useCallback)((e) => D && D(e), [D]),
                            K = (0, n.useMemo)(
                                () =>
                                    H.withTypeIcon
                                        ? (function (e, t) {
                                              return e === ae ? ge.$dyn(`search_${t}`) : '';
                                          })(r, c)
                                        : '',
                                [r, c, H.withTypeIcon],
                            ),
                            X = g || Ee[r],
                            Q = Boolean(L),
                            J = b ? ce : i,
                            ee = Boolean(b) || M,
                            te = (0, n.useMemo)(
                                () => ('boolean' == typeof H.withClear ? Q && H.withClear : Q && r === ae),
                                [r, Q, H],
                            ),
                            ue = s()(Fe.base, Fe[`base__${c}`], Fe[`base__${i}`], k);
                        return a().createElement(
                            'div',
                            { id: t, className: ue, onMouseEnter: U, onMouseDown: q, onMouseUp: Z, onMouseLeave: Y },
                            a().createElement(
                                d.l,
                                { tooltipArgs: _ },
                                a().createElement(
                                    Ae,
                                    De(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: K,
                                            size: c,
                                            type: r,
                                            variant: J,
                                            value: L,
                                            withClear: te,
                                            highlighted: ee,
                                            selectOnFocus: H.selectOnFocus,
                                            maxLength: H.maxLength,
                                            classMix: T,
                                            onFocus: j,
                                            onChange: W,
                                            onClear: z,
                                        },
                                        N,
                                    ),
                                ),
                            ),
                            X &&
                                a().createElement(
                                    'div',
                                    { className: Fe.helper },
                                    a().createElement(fe, {
                                        variant: J,
                                        show: A && (H.isPermanentHelper || ee),
                                        helperText: b || X,
                                        helperIcon: H.helperIconSource,
                                        classMix: S,
                                    }),
                                ),
                        );
                    },
                    ye = ({ value: e, placeholder: t, tooltipHeader: u, onChange: n, className: r, tooltipBody: s }) =>
                        a().createElement(
                            i.i,
                            { header: null != u ? u : void 0, body: s, isEnabled: Boolean(u || s) },
                            a().createElement(we, {
                                type: ae,
                                placeholder: null != t ? t : void 0,
                                value: e,
                                classMix: r,
                                onChange: n,
                            }),
                        ),
                    ke = {
                        base: 'FilterPanelWidgetApp_base_1c',
                        titleWrapper: 'FilterPanelWidgetApp_titleWrapper_1b',
                        title: 'FilterPanelWidgetApp_title_ad',
                        filters: 'FilterPanelWidgetApp_filters_0d',
                        counterGlow: 'FilterPanelWidgetApp_counterGlow_df',
                        separator: 'FilterPanelWidgetApp_separator_9e',
                        filterLabel: 'FilterPanelWidgetApp_filterLabel_5b',
                        base__tankChange: 'FilterPanelWidgetApp_base__tankChange_ff',
                        base__memberChange: 'FilterPanelWidgetApp_base__memberChange_18',
                        popupButtonWrapper: 'FilterPanelWidgetApp_popupButtonWrapper_4c',
                        base__personalData: 'FilterPanelWidgetApp_base__personalData_1d',
                        search: 'FilterPanelWidgetApp_search_0e',
                    },
                    Te = (0, c.Pi)(({ popoverDirection: e }) => {
                        const t = W(),
                            u = t.model,
                            n = t.controls,
                            r = u.amountInfo.get(),
                            c = r.from,
                            d = r.to,
                            m = u.panelType.get(),
                            _ = u.filter.get(),
                            E = u.hasAppliedFilters.get(),
                            g = E || (0 === c && 0 === d),
                            p = u.popoverTooltipHeader.get(),
                            h = u.popoverTooltipBody.get();
                        return a().createElement(
                            'div',
                            { className: s()(ke.base, ke[`base__${m}`]) },
                            a().createElement(
                                'div',
                                { className: ke.titleWrapper },
                                a().createElement(O.C, {
                                    title: u.title.get(),
                                    isGlowVisible: g,
                                    from: c,
                                    to: d,
                                    className: ke.title,
                                    classNames: { counterGlow: ke.counterGlow },
                                }),
                                E && a().createElement(ue, { onClick: n.resetFilter }),
                            ),
                            a().createElement(
                                'div',
                                { className: ke.filters },
                                u.isSearchEnabled.get() &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(ye, {
                                            value: u.searchString.get(),
                                            onChange: n.search,
                                            className: ke.search,
                                            placeholder: u.searchPlaceholder.get(),
                                            tooltipHeader: u.searchTooltipHeader.get(),
                                            tooltipBody: u.searchTooltipBody.get(),
                                        }),
                                        m === l.Barracks && a().createElement('div', { className: ke.separator }),
                                    ),
                                _.label && a().createElement('div', { className: ke.filterLabel }, _.label),
                                a().createElement(M, {
                                    id: _.id,
                                    label: _.label,
                                    type: _.type,
                                    hasDiscount: _.hasDiscount,
                                    filters: u.filters.get(),
                                    toggleProps: { type: o.L.ghost },
                                    onClick: n.updateFilter,
                                }),
                                u.isPopoverEnabled.get() &&
                                    a().createElement(
                                        i.i,
                                        {
                                            header: null != p ? p : void 0,
                                            body: null != h ? h : void 0,
                                            isEnabled: Boolean(p || h),
                                        },
                                        a().createElement(
                                            'div',
                                            { className: ke.popupButtonWrapper },
                                            a().createElement(X, {
                                                isHighlighted: u.isPopoverHighlighted.get(),
                                                hasDiscountAlert: u.hasDiscountAlert.get(),
                                                popoverDirection: e,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Se = { rootId: R.views.lobby.crew.widgets.FilterPanelWidget('resId') },
                    Ne = a().memo(function ({ popoverDirection: e }) {
                        return a().createElement(P, { options: Se }, a().createElement(Te, { popoverDirection: e }));
                    });
            },
            771: (e, t, u) => {
                'use strict';
                u.d(t, { Lv: () => n, sU: () => a, y$: () => s, yb: () => r });
                const n = -1,
                    a = -1,
                    r = 1,
                    s = -1;
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
            6880: (e, t, u) => {
                'use strict';
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
                    base__firstHover: 'CButton_base__firstHover_d5',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
            },
            8055: (e, t, u) => {
                'use strict';
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
            4769: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
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
            },
            4723: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'ToggleButton_base_09',
                    overlay: 'ToggleButton_overlay_76',
                    base__active: 'ToggleButton_base__active_05',
                    button: 'ToggleButton_button_14',
                    indicator: 'ToggleButton_indicator_c2',
                    counter: 'ToggleButton_counter_86',
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
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, n] = deferred[i], r = !0, s = 0; s < t.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var o = u();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, u, n];
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
        (__webpack_require__.j = 625),
        (() => {
            var e = { 625: 0, 623: 0, 595: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, s, o] = u,
                        i = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(u); i < r.length; i++)
                        (a = r[i]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(2713));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
