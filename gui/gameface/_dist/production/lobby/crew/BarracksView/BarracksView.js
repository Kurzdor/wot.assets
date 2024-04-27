(() => {
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7727),
                    o = u(6179),
                    s = u.n(o),
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
                    onMouseDown: A,
                    onMouseUp: p,
                    onMouseLeave: h,
                    onClick: v,
                }) => {
                    const F = (0, o.useRef)(null),
                        b = (0, o.useState)(u),
                        f = b[0],
                        C = b[1],
                        D = (0, o.useState)(!1),
                        B = D[0],
                        w = D[1],
                        y = (0, o.useState)(!1),
                        k = y[0],
                        T = y[1],
                        S = (0, o.useCallback)(() => {
                            c || (F.current && (F.current.focus(), C(!0)));
                        }, [c]),
                        N = (0, o.useCallback)(
                            (e) => {
                                f && null !== F.current && !F.current.contains(e.target) && C(!1);
                            },
                            [f],
                        ),
                        L = (0, o.useCallback)(
                            (e) => {
                                c || (v && v(e));
                            },
                            [c, v],
                        ),
                        M = (0, o.useCallback)(
                            (e) => {
                                c || (null !== m && (0, r.G)(m), E && E(e), T(!0));
                            },
                            [c, m, E],
                        ),
                        I = (0, o.useCallback)(
                            (e) => {
                                g && g(e);
                            },
                            [g],
                        ),
                        x = (0, o.useCallback)(
                            (e) => {
                                c || (p && p(e), w(!1));
                            },
                            [c, p],
                        ),
                        O = (0, o.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, r.G)(_), A && A(e), u && S(), w(!0));
                            },
                            [c, _, A, S, u],
                        ),
                        P = (0, o.useCallback)(
                            (e) => {
                                c || (h && h(e), w(!1));
                            },
                            [c, h],
                        ),
                        H = a()(
                            i.Z.base,
                            i.Z[`base__${n}`],
                            {
                                [i.Z.base__disabled]: c,
                                [i.Z[`base__${t}`]]: t,
                                [i.Z.base__focus]: f,
                                [i.Z.base__highlightActive]: B,
                                [i.Z.base__firstHover]: k,
                            },
                            d,
                        ),
                        W = a()(i.Z.state, i.Z.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', N),
                                () => {
                                    document.removeEventListener('mousedown', N);
                                }
                            ),
                            [N],
                        ),
                        (0, o.useEffect)(() => {
                            C(u);
                        }, [u]),
                        s().createElement(
                            'div',
                            {
                                ref: F,
                                className: H,
                                onMouseEnter: M,
                                onMouseMove: I,
                                onMouseUp: x,
                                onMouseDown: O,
                                onMouseLeave: P,
                                onClick: L,
                            },
                            n !== l.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: i.Z.back }),
                                    s().createElement('span', { className: i.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: W },
                                s().createElement('span', { className: i.Z.stateDisabled }),
                                s().createElement('span', { className: i.Z.stateHighlightHover }),
                                s().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = (0, o.memo)(c);
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(a || (a = {}));
            },
            9987: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    o = u.n(r),
                    s = u(8055);
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
                    const A = E && !g && E > d,
                        p = a()(
                            s.Z.base,
                            s.Z[`base__${t}`],
                            r && s.Z.base__animated,
                            c && s.Z.base__hidden,
                            !E && s.Z.base__pattern,
                            n && s.Z.base__empty,
                            m,
                        );
                    return o().createElement(
                        'div',
                        l({ className: p }, _),
                        o().createElement('div', { className: s.Z.bg }),
                        o().createElement('div', { className: s.Z.pattern }),
                        o().createElement(
                            'div',
                            { className: a()(s.Z.value, g && s.Z.value__text) },
                            A ? d : E,
                            A && o().createElement('span', { className: s.Z.plus }, '+'),
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
                    o = u(6373),
                    s = u(1856),
                    i = u(3138),
                    l = u(2039),
                    c = u(5099),
                    d = u(7727),
                    m = u(4179),
                    _ = u(6179),
                    E = u.n(_),
                    g = u(4769);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(n || (n = {}));
                const A = ['__left', '__right', '__top', '__bottom'];
                (0, _.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: u, customStyles: n = {} }, a) => {
                        const p = (0, _.useRef)(null),
                            h = (0, _.useRef)(null),
                            v = (0, _.useRef)(null),
                            F = (0, _.useState)(window.decorator && window.decorator.directionType),
                            b = F[0],
                            f = F[1],
                            C = (0, _.useCallback)(() => {
                                d.$.playClick(), i.O.view.sendEvent.close();
                            }, []),
                            D = (0, _.useCallback)(() => {
                                d.$.playHighlight();
                            }, []),
                            B = r()(g.Z.arrow, g.Z[`arrow${A[b]}`]);
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
                                        if (t === p.current || t === v.current) return;
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
                                [p, v, u],
                            ),
                            y = (0, _.useCallback)(
                                () => (
                                    i.O.view.freezeTextureBeforeResize(),
                                    (0, s.v)(() => {
                                        if (h.current) {
                                            const e = h.current.scrollWidth,
                                                t = h.current.scrollHeight;
                                            i.O.view.resize(e, t), f(window.decorator.directionType);
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
                                { className: g.Z.base, ref: h },
                                E().createElement(
                                    'div',
                                    { className: g.Z.decorator },
                                    E().createElement(
                                        'div',
                                        { className: g.Z.content, ref: p },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            E().createElement(
                                                o.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                E().createElement('div', {
                                                    className: g.Z.closeBtn,
                                                    onClick: C,
                                                    onMouseEnter: D,
                                                    ref: v,
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
                    a = u(4179),
                    r = u(6179),
                    o = u.n(r);
                const s = [
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
                        A = void 0 === g || g,
                        p = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, s);
                    const h = (0, r.useRef)(null),
                        v = (0, r.useCallback)(() => {
                            if ((0, a.wU)()) return (0, a.SW)();
                            h.current && (0, a.P3)(t, c, h.current, u, d, m);
                        }, [t, c, m, u, d]);
                    return o().createElement(
                        'div',
                        i(
                            {
                                ref: h,
                                onClick:
                                    ((F = E.props.onClick),
                                    (e) => {
                                        A && (v(), _ && _(e), F && F(e));
                                    }),
                            },
                            p,
                        ),
                        E,
                    );
                    var F;
                };
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => i });
                var n = u(6179),
                    a = u.n(n),
                    r = u(2056);
                const o = ['children'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
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
                        })(e, o);
                    return a().createElement(
                        r.u,
                        s(
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
                    o = u(6373),
                    s = u(2056);
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
                    if (t.header || t.body) return a().createElement(o.i, t, n);
                    const l = t.contentId,
                        c = t.args,
                        d = null == c ? void 0 : c.contentId;
                    return l || d
                        ? a().createElement(s.u, i({}, t, { contentId: l || d }), n)
                        : a().createElement(r.t, t, n);
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => l });
                var n = u(2056),
                    a = u(6179),
                    r = u.n(a);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
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
                            })(e, o);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, m, { body: u, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, u, l, c, m]);
                        return r().createElement(
                            n.u,
                            s(
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
                    a = u(4179),
                    r = u(6179);
                const o = [
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
                function s(e) {
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
                            A = void 0 !== g && g,
                            p = e.decoratorId,
                            h = void 0 === p ? 0 : p,
                            v = e.isEnabled,
                            F = void 0 === v || v,
                            b = e.targetId,
                            f = void 0 === b ? 0 : b,
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
                            })(e, o);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => f || (0, n.F)().resId, [f]),
                            k = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(u, h, { isMouseEvent: !0, on: !0, arguments: s(a) }, y),
                                    C && C(),
                                    (w.current.isVisible = !0));
                            }, [u, h, a, y, C]),
                            T = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(u, h, { on: !1 }, y),
                                        w.current.isVisible && D && D(),
                                        (w.current.isVisible = !1);
                                }
                            }, [u, h, y, D]),
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
                                !1 === F && T();
                            }, [F, T]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        window.removeEventListener('mouseleave', T), T();
                                    }
                                ),
                                [T],
                            );
                        return F
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
                                              !1 === A && T(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === A && T(), null == d || d(t), null == e || e(t);
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
                u.d(t, { U: () => s });
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
                const o = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: u = o, context: r = 'model' } = {}) {
                    const s = new Map();
                    function i(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = s.get(t);
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
                            const o = 'string' == typeof a ? `${r}.${a}` : r,
                                i = n.O.view.addModelObserver(o, t, !0);
                            return s.set(i, u), e && u(l(a)), i;
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
                            for (var e, u = a(s.keys()); !(e = u()).done; ) {
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
                    o = u.n(r),
                    s = u(8246);
                const i = () => (e, t) => {
                    const u = (0, r.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, r.useRef)([]),
                                _ = (u, r, o) => {
                                    var i;
                                    const l = s.U(r),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == o ? void 0 : o.getter) ? i : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === u ? (null == o ? void 0 : o.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        o = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        o = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
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
                                                            o = Object.entries(r),
                                                            s = o.reduce(
                                                                (e, [t, u]) => ((e[u] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        o.forEach(([t, u]) => {
                                                                            s[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: _,
                                        }),
                                        g = { mode: u, model: E, externalModel: c, cleanup: _ };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && o ? o.controls(g) : t(g),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                g = (0, r.useState)(i),
                                A = g[0],
                                p = g[1],
                                h = (0, r.useState)(() => _(i, l, d)),
                                v = h[0],
                                F = h[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? F(_(A, l, d)) : (E.current = !0);
                                }, [d, A, l]),
                                (0, r.useEffect)(() => {
                                    p(i);
                                }, [i]),
                                (0, r.useEffect)(
                                    () => () => {
                                        v.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [v],
                                ),
                                o().createElement(u.Provider, { value: v }, c)
                            );
                        },
                        () => (0, r.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
                'use strict';
                u.r(t), u.d(t, { mouse: () => s, onResize: () => r });
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const s = (function () {
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
                                        s = o[t]((e) => u([e, 'outside']));
                                    function i(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, i),
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
                        graphicsQuality: () => o,
                    });
                var n = u(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
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
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => B,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => D,
                        getScale: () => A,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => f,
                        isFocused: () => F,
                        pxToRem: () => p,
                        remToPx: () => h,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var n = u(3722),
                    a = u(6112),
                    r = u(6538),
                    o = u(8566);
                function s(e) {
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
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function F() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function f() {
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
                    o = 32,
                    s = 64,
                    i = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
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
                                      Object.assign({ __Type: u, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? a : o);
                        },
                        minimize() {
                            i(s);
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
            2039: (e, t, u) => {
                'use strict';
                u.d(t, { b: () => a });
                var n = u(6179);
                const a = (e) => {
                    (0, n.useEffect)(e, []);
                };
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
                u.d(t, { U2: () => n, UI: () => a, vk: () => r });
                function a(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function r(e) {
                    return e.length - 1;
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
                u.d(t, { HG: () => o });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const r = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) =>
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
                let n;
                function a(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function o(e) {
                    return e.replace(/-/g, '_');
                }
                function s(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                u.d(t, { BN: () => o, WU: () => a, e: () => s, uF: () => r }),
                    (function (e) {
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
                    B0: () => i,
                    c9: () => F,
                    wU: () => D,
                    ry: () => h,
                    Eu: () => v,
                    SW: () => f,
                    P3: () => C,
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
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(5521),
                    E = u(3138);
                const g = ['args'];
                function A(e, t, u, n, a, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(n, a);
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
                                        function o(e) {
                                            A(r, n, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(r, n, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
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
                    F = (e, t) => {
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
                                })(t, g);
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
                    b = () => F(i.CLOSE),
                    f = () => F(i.POP_OVER, { on: !1 }),
                    C = (e, t, u, n, a = R.invalid('resId'), r) => {
                        const o = E.O.view.getViewGlobalPosition(),
                            s = u.getBoundingClientRect(),
                            l = s.x,
                            c = s.y,
                            d = s.width,
                            m = s.height,
                            _ = {
                                x: E.O.view.pxToRem(l) + o.x,
                                y: E.O.view.pxToRem(c) + o.y,
                                width: E.O.view.pxToRem(d),
                                height: E.O.view.pxToRem(m),
                            };
                        F(i.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: a,
                            direction: t,
                            bbox: p(_),
                            on: !0,
                            args: r,
                        });
                    },
                    D = () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                    B = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var w = u(7572);
                const y = a.instance,
                    k = {
                        DataTracker: r.Z,
                        ViewModel: w.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => F(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: f,
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            F(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: C,
                        addEscapeListener: (e) => {
                            const t = (t) => B(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, b);
                        },
                        handleViewEvent: F,
                        onBindingsReady: h,
                        onLayoutReady: v,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: D,
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
                        ClickOutsideManager: y,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = k;
            },
            2900: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => Xt,
                        Bar: () => qt,
                        DefaultScroll: () => Yt,
                        Direction: () => Lt,
                        defaultSettings: () => Mt,
                        useHorizontalScrollApi: () => xt,
                    });
                var a = {};
                u.r(a), u.d(a, { Area: () => gu, Bar: () => mu, Default: () => Eu, useVerticalScrollApi: () => Qt });
                var r = u(6179),
                    o = u.n(r);
                const s = (e, t, u) =>
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
                    A = (0, r.createContext)(g),
                    p = ['children'];
                const h = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, p);
                    const n = (0, r.useContext)(A),
                        a = n.extraLarge,
                        o = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        m = n.largeWidth,
                        _ = n.mediumWidth,
                        E = n.smallWidth,
                        g = n.extraSmallWidth,
                        h = n.extraLargeHeight,
                        v = n.largeHeight,
                        F = n.mediumHeight,
                        b = n.smallHeight,
                        f = n.extraSmallHeight,
                        C = { extraLarge: h, large: v, medium: F, small: b, extraSmall: f };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && a) return t;
                        if (u.large && o) return t;
                        if (u.medium && i) return t;
                        if (u.small && l) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && d) return s(t, u, C);
                        if (u.largeWidth && m) return s(t, u, C);
                        if (u.mediumWidth && _) return s(t, u, C);
                        if (u.smallWidth && E) return s(t, u, C);
                        if (u.extraSmallWidth && g) return s(t, u, C);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && h) return t;
                            if (u.largeHeight && v) return t;
                            if (u.mediumHeight && F) return t;
                            if (u.smallHeight && b) return t;
                            if (u.extraSmallHeight && f) return t;
                        }
                    }
                    return null;
                };
                h.defaultProps = {
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
                (0, r.memo)(h);
                const v = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    F = (0, r.memo)(({ children: e }) => {
                        const t = (0, r.useContext)(A),
                            u = (0, r.useState)(t),
                            n = u[0],
                            a = u[1],
                            s = (0, r.useCallback)((e, t) => {
                                const u = i.O.view.pxToRem(e),
                                    n = i.O.view.pxToRem(t);
                                a(Object.assign({ width: u, height: n }, d(u, n, l)));
                            }, []);
                        v(() => {
                            engine.on('clientResized', s);
                        }),
                            (0, r.useEffect)(() => () => engine.off('clientResized', s), [s]);
                        const c = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return o().createElement(A.Provider, { value: c }, e);
                    });
                var b = u(6483),
                    f = u.n(b),
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
                        const e = (0, r.useContext)(A),
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
                            o = ((e) => {
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
                        return { mediaSize: n, mediaWidth: a, mediaHeight: o, remScreenWidth: t, remScreenHeight: u };
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
                    L = {
                        [y.ExtraSmall]: '',
                        [y.Small]: D().SMALL_HEIGHT,
                        [y.Medium]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT}`,
                        [y.Large]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT} ${D().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
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
                            s = a.mediaHeight,
                            i = a.mediaSize;
                        return o().createElement('div', S({ className: f()(u, N[r], L[s], M[i]) }, n), t);
                    },
                    x = ['children'];
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
                        })(e, x);
                    return o().createElement(F, null, o().createElement(I, u, t));
                };
                var P = u(493),
                    H = u.n(P),
                    W = u(1037),
                    z = u(5521),
                    U = u(4179);
                const G = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function V(e = z.n.NONE, t = G, u = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== z.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), t(n), u && n.stopPropagation();
                            }
                        }
                    }, [t, e, u]);
                }
                var $ = u(3403),
                    j = u(5801),
                    Z = u(3215),
                    q = u(9480),
                    K = u(3946);
                const Y = (e) => ({ tankmanID: e }),
                    X = (e) => ({ recruitID: e }),
                    Q = (0, Z.q)()(
                        ({ observableModel: e }) => {
                            const t = e.primitives(['isBerthsOnSale', 'hasFilters', 'itemsAmount', 'itemsOffset']),
                                u = e.array('tankmanList'),
                                n = (0, K.Om)((e) => {
                                    const n = e - t.itemsOffset.get(),
                                        a = u.get();
                                    if (n >= 0 && n < a.length) return q.U2(a, n);
                                });
                            return Object.assign({ tankmanList: u, berthsAmount: e.object('berthsAmount') }, t, {
                                computes: { getItem: n },
                            });
                        },
                        ({ externalModel: e }) => ({
                            buyBerth: e.createCallbackNoArgs('onBuyBerth'),
                            selectTankman: e.createCallback(Y, 'onTankmanSelected'),
                            recruitTankman: e.createCallback(X, 'onTankmanRecruit'),
                            dismissTankman: e.createCallback(Y, 'onTankmanDismiss'),
                            playRecruitVoiceover: e.createCallback(X, 'onPlayTankmanVoiceover'),
                            restoreTankman: e.createCallback(Y, 'onTankmanRestore'),
                            showHangar: e.createCallbackNoArgs('showHangar'),
                            resetFilters: e.createCallbackNoArgs('onResetFilters'),
                            loadCards: e.createCallback((e, t) => ({ limit: e, offset: t }), 'onLoadCards'),
                        }),
                    ),
                    J = Q[0],
                    ee = Q[1];
                var te = u(2106),
                    ue = u(3457),
                    ne = u(6373),
                    ae = u(8018);
                const re = 'WarningText_base_13',
                    oe = 'WarningText_icon_5d',
                    se = 'WarningText_label_c6',
                    ie = o().memo(function ({ label: e }) {
                        return o().createElement(
                            'div',
                            { className: re },
                            o().createElement('div', { className: oe }),
                            o().createElement('div', { className: se }, e),
                        );
                    }),
                    le = 'ListEmptyState_base_ae',
                    ce = 'ListEmptyState_content_1e',
                    de = 'ListEmptyState_shadow_ae',
                    me = 'ListEmptyState_buttonWrapper_78',
                    _e = 'ListEmptyState_button_f1',
                    Ee = o().memo(function ({
                        warningText: e,
                        buttonType: t = ue.L$.secondary,
                        tooltipArgs: u = ae.Xd,
                        className: n,
                        onClick: a,
                        children: r,
                    }) {
                        return o().createElement(
                            'div',
                            { className: f()(le, n) },
                            o().createElement(
                                'div',
                                { className: ce },
                                o().createElement('div', { className: de }),
                                o().createElement(ie, { label: e }),
                                r &&
                                    o().createElement(
                                        'div',
                                        { className: me },
                                        o().createElement(
                                            ne.i,
                                            u,
                                            o().createElement(
                                                ue.u5,
                                                { size: ue.qE.small, type: t, onClick: a, mixClass: _e },
                                                r,
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    });
                var ge = u(7078);
                let Ae, pe, he, ve, Fe;
                !(function (e) {
                    (e.Any = 'any'),
                        (e.Commander = 'commander'),
                        (e.Radioman = 'radioman'),
                        (e.Driver = 'driver'),
                        (e.Gunner = 'gunner'),
                        (e.Loader = 'loader');
                })(Ae || (Ae = {})),
                    (function (e) {
                        (e.InBarracks = 'in_barracks'), (e.InTank = 'in_tank'), (e.Dismissed = 'dismissed');
                    })(pe || (pe = {})),
                    (function (e) {
                        (e.Tankman = 'tankman'), (e.Recruit = 'recruit'), (e.Dismissed = 'dismissed');
                    })(he || (he = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled');
                    })(ve || (ve = {})),
                    (function (e) {
                        (e.IsLockCrew = 'isLockCrew'), (e.TankmanHasRole = 'tankmanHasRole');
                    })(Fe || (Fe = {}));
                var be = u(7727);
                function fe(e, t, u, n) {
                    let a,
                        r = !1,
                        o = 0;
                    function s() {
                        a && clearTimeout(a);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - o;
                        function d() {
                            (o = Date.now()), u.apply(l, i);
                        }
                        r ||
                            (n && !a && d(),
                            s(),
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
                            s(), (r = !0);
                        }),
                        i
                    );
                }
                function Ce(e, t, u) {
                    const n = (0, r.useMemo)(
                        () =>
                            (function (e, t, u) {
                                return void 0 === u ? fe(e, t, !1) : fe(e, u, !1 !== t);
                            })(u, e),
                        t,
                    );
                    return (0, r.useEffect)(() => n.cancel, [n]), n;
                }
                var De = u(3649);
                const Be = {
                    base: 'TankmanIcon_base_f9',
                    base__big: 'TankmanIcon_base__big_98',
                    base__small: 'TankmanIcon_base__small_b2',
                    base__barracks: 'TankmanIcon_base__barracks_62',
                    base__special: 'TankmanIcon_base__special_3f',
                    base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                    innerShadow: 'TankmanIcon_innerShadow_c6',
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
                        }, [e, t, n]),
                        s = t === we.c204x256;
                    return o().createElement(
                        'div',
                        { style: a, className: f()(Be.base, Be[`base__${t}`], u) },
                        s && o().createElement('div', { className: Be.innerShadow }),
                    );
                };
                var ke = u(9690);
                const Te = {
                    base: 'TankName_base_f1',
                    base__sizeMedium: 'TankName_base__sizeMedium_3a',
                    base__sizBig: 'TankName_base__sizBig_a9',
                    base__typeWhite: 'TankName_base__typeWhite_32',
                    base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                    base__typeColored: 'TankName_base__typeColored_bc',
                    level: 'TankName_level_bb',
                    type: 'TankName_type_3c',
                    type__elite: 'TankName_type__elite_cc',
                    base__sizeBig: 'TankName_base__sizeBig_2b',
                    name: 'TankName_name_56',
                    base__tagPremiumIGR: 'TankName_base__tagPremiumIGR_26',
                    premiumIGR: 'TankName_premiumIGR_25',
                };
                let Se, Ne;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(Se || (Se = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(Ne || (Ne = {}));
                const Le = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: u,
                        vehicleType: n,
                        vehicleLvl: a,
                        tags: r,
                        isPremiumIGR: s,
                        size: i = Se.extraSmall,
                        type: l = Ne.colored,
                        className: c,
                        classNames: d,
                        isShortName: m = !1,
                    }) => {
                        const _ = `${(0, De.BN)(n)}${e ? '_elite' : ''}`,
                            E = R.images.gui.maps.icons.vehicleTypes.big.$dyn(_);
                        return o().createElement(
                            'div',
                            {
                                className: f()(
                                    Te.base,
                                    Te[`base__size${(0, De.e)(i)}`],
                                    Te[`base__type${(0, De.e)(l)}`],
                                    r && q.UI(r, (e) => Te[`base__tag${(0, De.e)(e)}`]),
                                    c,
                                ),
                            },
                            o().createElement(
                                'div',
                                { className: f()(Te.level, null == d ? void 0 : d.level) },
                                (0, ke.HG)(a),
                            ),
                            o().createElement('div', {
                                className: f()(Te.type, e && Te.type__elite, null == d ? void 0 : d.typeIcon),
                                style: { backgroundImage: `url(${E})` },
                            }),
                            s && o().createElement('div', { className: Te.premiumIGR }),
                            o().createElement(
                                'div',
                                { className: f()(Te.name, null == d ? void 0 : d.name) },
                                m ? u : t,
                            ),
                        );
                    },
                    Me = 'Content_base_48',
                    Ie = 'Content_name_7b',
                    xe = 'Content_specializationInfo_ac',
                    Re = 'Content_recruitLabel_17',
                    Oe = 'Content_levelPercentage_f1',
                    Pe = 'Content_levelPercentage__red_c9';
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
                const We = ({
                    fullUserName: e,
                    isRecruit: t,
                    tankmanVehicleInfo: u,
                    specializationLevel: n,
                    hasSpecializationLevelPenalty: a,
                    className: s,
                }) => {
                    const i = (0, r.useMemo)(() => (0, ae.T3)(Math.floor(n)), [n]);
                    return o().createElement(
                        'div',
                        { className: f()(Me, s) },
                        o().createElement('div', { className: Ie }, e),
                        o().createElement(
                            'div',
                            { className: xe },
                            t
                                ? o().createElement('div', { className: Re }, R.strings.crew.tankman.recruit())
                                : o().createElement(
                                      o().Fragment,
                                      null,
                                      o().createElement(Le, He({}, u, { type: Ne.whiteSpanish, isShortName: !0 })),
                                      o().createElement('div', { className: f()(Oe, a && Pe) }, `(${i})`),
                                  ),
                        ),
                    );
                };
                let ze;
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
                })(ze || (ze = {}));
                const Ue = 60,
                    Ge = 3600,
                    Ve = 86400;
                Date.now();
                const $e = (0, r.memo)(({ duration: e }) => {
                        const t =
                            e >= 0
                                ? (u = (function (e = 0) {
                                      let t = e;
                                      const u = Math.trunc(t / Ve);
                                      t -= u * Ve;
                                      const n = Math.trunc(t / Ge);
                                      t -= n * Ge;
                                      const a = Math.trunc(t / Ue);
                                      return (t -= a * Ue), { days: u, hours: n, minutes: a, seconds: t };
                                  })(e)).days > 0
                                    ? (0, De.WU)(R.strings.common.duration.days(), { days: u.days })
                                    : u.hours > 0
                                      ? (0, De.WU)(R.strings.common.duration.hours(), { hours: u.hours })
                                      : u.minutes > 0
                                        ? (0, De.WU)(R.strings.common.duration.minutes(), { minutes: u.minutes })
                                        : (0, De.WU)(R.strings.common.duration.seconds(), { seconds: u.seconds })
                                : R.strings.common.duration.unlimited();
                        var u;
                        return o().createElement('span', null, t);
                    }),
                    je = () => {},
                    Ze = (e = 0, t, u = 0, n = je) => {
                        const a = (0, r.useState)(e),
                            o = a[0],
                            s = a[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e > 0) {
                                    s(e);
                                    const a = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - a) / 1e3);
                                                null !== u && t <= u ? (s(u), n && n(), clearInterval(r)) : s(t);
                                            },
                                            1e3 * (t || (e > 120 ? Ue : 1)),
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, t, u, n]),
                            o
                        );
                    };
                U.Sw.instance;
                let qe;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(qe || (qe = {}));
                U.Sw.instance;
                const Ke = Ze,
                    Ye = o().memo(function ({ duration: e, className: t }) {
                        const u = Ke(e, 1);
                        return o().createElement('div', { className: t }, o().createElement($e, { duration: u }));
                    }),
                    Xe = 'Location_base_4d',
                    Qe = 'Location_duration_5d',
                    Je = 'Location_icon_eb',
                    et = o().memo(function ({ location: e, className: t, timeToDismiss: u }) {
                        return o().createElement(
                            'div',
                            { className: f()(Xe, t) },
                            e === pe.Dismissed && o().createElement(Ye, { className: Qe, duration: u }),
                            o().createElement('div', {
                                className: Je,
                                style: { backgroundImage: `url(R.images.gui.maps.icons.tankmen.card.location.${e})` },
                            }),
                        );
                    });
                let tt, ut;
                !(function (e) {
                    (e.Default = 'default'), (e.Selected = 'selected'), (e.InBattle = 'in_battle');
                })(tt || (tt = {})),
                    (function (e) {
                        (e.White = 'white'), (e.Red = 'red');
                    })(ut || (ut = {}));
                const nt = 'Role_base_68',
                    at = o().memo(function ({ role: e, className: t, roleIconColor: u = ut.White }) {
                        return o().createElement('div', {
                            className: f()(nt, t),
                            style: { backgroundImage: `url(R.images.gui.maps.icons.tankmen.roles.opaque.${u}.${e})` },
                        });
                    });
                let rt;
                !(function (e) {
                    (e.New = 'new'),
                        (e.Learned = 'learned'),
                        (e.Learning = 'learning'),
                        (e.Irrelevant = 'irrelevant'),
                        (e.Possible = 'possible');
                })(rt || (rt = {}));
                const ot = {
                    base: 'TankmanSkill_base_84',
                    base__big: 'TankmanSkill_base__big_a0',
                    bg: 'TankmanSkill_bg_f9',
                    icon: 'TankmanSkill_icon_1b',
                    icon__irrelevant: 'TankmanSkill_icon__irrelevant_50',
                };
                let st;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(st || (st = {}));
                const it = o().memo(function ({ icon: e, type: t, size: u }) {
                        const n = (0, r.useMemo)(() => {
                                let e;
                                return (
                                    (e =
                                        t === rt.Possible || t === rt.New
                                            ? R.images.gui.maps.icons.tankmen.skills.medium.new_skill()
                                            : R.images.gui.maps.icons.crew.$dyn(`${t}SkillFrame_${u}`)),
                                    { backgroundImage: `url(${e})` }
                                );
                            }, [t, u]),
                            a = (0, r.useMemo)(() => {
                                if (!e) return null;
                                return {
                                    backgroundImage: `url(${R.images.gui.maps.icons.tankmen.skills.$dyn(u === st.Big ? 'c_22x22' : 'small').$dyn(e)})`,
                                };
                            }, [e, u]);
                        return o().createElement(
                            'div',
                            { className: f()(ot.base, ot[`base__${u}`]) },
                            o().createElement('div', { className: ot.bg, style: n }),
                            a && o().createElement('div', { className: f()(ot.icon, ot[`icon__${t}`]), style: a }),
                        );
                    }),
                    lt = {
                        base: 'Skill_base_a9',
                        base__double: 'Skill_base__double_7a',
                        base__collapsed: 'Skill_base__collapsed_6e',
                        skillLevel: 'Skill_skillLevel_85',
                    };
                let ct;
                !(function (e) {
                    (e.Default = 'default'), (e.Double = 'double'), (e.Collapsed = 'collapsed');
                })(ct || (ct = {}));
                const dt = ({ icon: e, type: t, isLevelVisible: u, skillLevel: n, theme: a }) =>
                        o().createElement(
                            'div',
                            {
                                className: f()(
                                    lt.base,
                                    lt[`base__${a}`],
                                    u && lt.base__hasSkillLevel,
                                    'new_skill' === e && lt.base__isNewSkill,
                                ),
                            },
                            o().createElement(it, { icon: e, size: st.Big, type: t }),
                            u && o().createElement('div', { className: lt.skillLevel }, (0, ae.T3)(n)),
                        ),
                    mt = 'Skills_base_d8';
                function _t() {
                    return (
                        (_t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        _t.apply(this, arguments)
                    );
                }
                const Et = ({ skills: e, lastSkillLevel: t, className: u }) => {
                        const n = q.vk(e);
                        return o().createElement(
                            'div',
                            { className: f()(mt, u) },
                            q.UI(e, (u, a) => {
                                const r = a === n,
                                    s = r && e.length < 28 && t < 100 && -1 !== t,
                                    i = ((e, t, u, n) =>
                                        t && u
                                            ? ct.Double
                                            : n > 18
                                              ? 13 === e || t
                                                  ? ct.Default
                                                  : ct.Collapsed
                                              : n > 9 && 8 === e
                                                ? ct.Double
                                                : ct.Default)(a, r, s, e.length);
                                return o().createElement(
                                    dt,
                                    _t({ key: a, theme: i, isLevelVisible: s, skillLevel: t }, u),
                                );
                            }),
                        );
                    },
                    gt = 'ThemeHelper_base_39',
                    At = 'ThemeHelper_disabledContent_20',
                    pt = 'ThemeHelper_disabledIcon_95',
                    ht = 'ThemeHelper_disabledTitle_57',
                    vt = o().memo(function ({ isDisabled: e, className: t, disableReason: u, disableIcon: n }) {
                        return o().createElement(
                            'div',
                            { className: f()(gt, t) },
                            e &&
                                o().createElement(
                                    'div',
                                    { className: At },
                                    n &&
                                        o().createElement('div', {
                                            className: pt,
                                            style: { backgroundImage: `url(${n})` },
                                        }),
                                    o().createElement('div', { className: ht }, u),
                                ),
                        );
                    }),
                    Ft = {
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
                    },
                    bt = ({
                        tankmanID: e,
                        recruitID: t,
                        nation: u,
                        skills: n,
                        lastSkillLevel: a,
                        specializationLevel: s,
                        role: i,
                        fullUserName: l,
                        iconName: c,
                        tankmanVehicleInfo: d,
                        className: m,
                        location: _,
                        tankmanKind: E,
                        onClick: g,
                        onMouseDown: A,
                        timeToDismiss: p,
                        recruitGlowImage: h,
                        isInSkin: v,
                        disableReason: F,
                        disableIcon: b,
                        cardState: C = ve.Default,
                        isCollapsedOnHover: D = !1,
                        isTooltipEnabled: B = !0,
                        hasSpecializationLevelPenalty: w = !1,
                        hasRolePenalty: y = !1,
                        children: k,
                    }) => {
                        const T = E === he.Recruit,
                            S = C === ve.Selected,
                            N = C === ve.Disabled,
                            L = ((e, t, u = 150) => {
                                const n = (0, r.useState)(e),
                                    a = n[0],
                                    o = n[1],
                                    s = Ce((e) => o(e), t, u);
                                return {
                                    isHovered: a,
                                    handleMouseEnter: (0, r.useCallback)(() => s(!0), [s]),
                                    handleMouseLeave: (0, r.useCallback)(() => s(!1), [s]),
                                };
                            })(!1, []),
                            M = L.isHovered,
                            I = L.handleMouseEnter,
                            x = L.handleMouseLeave,
                            R = (0, r.useMemo)(() => {
                                if (h && T) return { backgroundImage: `url(${h})` };
                            }, [h, T]);
                        return (
                            (0, r.useEffect)(() => {
                                !M || S || N || (be.$.playHighlight(), D && (0, be.G)(ae.gO.SHOP_INFO));
                            }, [M, S, N, D]),
                            o().createElement(
                                'div',
                                {
                                    className: f()(
                                        Ft.base,
                                        m,
                                        M && Ft.base__hovered,
                                        D && !N && Ft.base__isCollapsedOnHover,
                                        Ft[`base__${C}`],
                                    ),
                                    onMouseEnter: () => {
                                        I();
                                    },
                                    onMouseLeave: x,
                                    onMouseDown: A,
                                },
                                o().createElement(vt, {
                                    isDisabled: N,
                                    disableReason: null != F ? F : void 0,
                                    disableIcon: null != b ? b : void 0,
                                    className: Ft.themeHelper,
                                }),
                                i !== Ae.Any &&
                                    o().createElement(at, {
                                        role: i,
                                        roleIconColor: y ? ut.Red : ut.White,
                                        className: Ft.crewRole,
                                    }),
                                o().createElement(et, { className: Ft.locationIcon, location: _, timeToDismiss: p }),
                                o().createElement(
                                    'div',
                                    { className: Ft.iconWrapper, style: R },
                                    u &&
                                        o().createElement('div', {
                                            className: Ft.flag,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.tankmen.card.nations.${u})`,
                                            },
                                        }),
                                    o().createElement(ye, { name: c, size: we.c158x118, classMix: Ft.icon, isSkin: v }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Ft.separatorWrapper },
                                    o().createElement('div', { className: f()(Ft.separator, Ft.separator__top) }),
                                    o().createElement('div', { className: Ft.separator }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Ft.content },
                                    o().createElement(We, {
                                        fullUserName: l,
                                        isRecruit: T,
                                        tankmanVehicleInfo: d,
                                        specializationLevel: s,
                                        hasSpecializationLevelPenalty: w,
                                    }),
                                    o().createElement(Et, { skills: n, lastSkillLevel: a, className: Ft.skills }),
                                ),
                                o().createElement(
                                    ge.t,
                                    {
                                        args: { tooltipId: T ? 'tankmanNotRecruited' : 'tankman', targetId: T ? t : e },
                                        isEnabled: B,
                                        ignoreShowDelay: !1,
                                    },
                                    o().createElement('div', {
                                        className: Ft.helperLayer,
                                        onClick: () => {
                                            N || S || !g || (g(), be.$.playClick());
                                        },
                                    }),
                                ),
                                !N && (null == k ? void 0 : k(M)),
                            )
                        );
                    };
                var ft = u(1856);
                const Ct = (e, t, u) => (u < e ? e : u > t ? t : u),
                    Dt = [];
                function Bt(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), Dt)
                    );
                }
                function wt(e, t, u = []) {
                    const n = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, r.useEffect)(() => a, [a]);
                    const o = (null != u ? u : []).concat([t]);
                    return [
                        (0, r.useCallback)((u) => {
                            (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, o),
                        a,
                    ];
                }
                function yt(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return kt(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return kt(e, t);
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
                function kt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const Tt = () => {
                    const e = (0, r.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        u = (e, u) => {
                            t(e).set(u, u);
                        },
                        n = (e, u) => {
                            t(e).delete(u);
                        },
                        a = (e, ...u) => {
                            for (var n, a = yt(t(e).values()); !(n = a()).done; ) {
                                (0, n.value)(...u);
                            }
                        };
                    return (0, r.useMemo)(() => ({ on: u, off: n, trigger: a }), []);
                };
                function St(e, t, u) {
                    const n = (0, r.useMemo)(() => fe(u, e), t);
                    return (0, r.useEffect)(() => n.cancel, [n]), n;
                }
                var Nt = u(7030);
                let Lt;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Lt || (Lt = {}));
                const Mt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    It = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const s = (e, u) => {
                            const n = t(e),
                                a = n[0],
                                r = n[1];
                            return Ct(a, r, u);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? Mt : c,
                                m = (0, r.useRef)(null),
                                _ = (0, r.useRef)(null),
                                E = Tt(),
                                g = St(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, Nt.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (u(t, e), E.trigger('change', e), o && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                p = A[0],
                                h = A[1],
                                v = (0, r.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const a = p.scrollPosition.get(),
                                            r = (null != (n = p.scrollPosition.goal) ? n : 0) - a;
                                        return s(e, t * u + r + a);
                                    },
                                    [p.scrollPosition],
                                ),
                                F = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            h.start({
                                                scrollPosition: s(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: d.animationConfig,
                                                from: { scrollPosition: s(n, p.scrollPosition.get()) },
                                            });
                                    },
                                    [h, d.animationConfig, p.scrollPosition],
                                ),
                                b = (0, r.useCallback)(
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
                                            r = v(t, e, n);
                                        F(r);
                                    },
                                    [F, v, d.step],
                                ),
                                f = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && b(n(e)),
                                            m.current && E.trigger('mouseWheel', e, p.scrollPosition, t(m.current));
                                    },
                                    [p.scrollPosition, b, E],
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
                                        (0, ft.v)(() => {
                                            const e = m.current;
                                            e &&
                                                (F(s(e, p.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [F, p.scrollPosition.goal],
                                ),
                                D = Bt(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = s(e, p.scrollPosition.goal);
                                    t !== p.scrollPosition.goal && F(t, { immediate: !0 }),
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
                                    clampPosition: s,
                                    handleMouseWheel: f,
                                    applyScroll: F,
                                    applyStepTo: b,
                                    contentRef: m,
                                    wrapperRef: _,
                                    scrollPosition: h,
                                    animationScroll: p,
                                    recalculateContent: D,
                                    events: { on: E.on, off: E.off },
                                }),
                                [p.scrollPosition, F, b, E.off, E.on, D, f, h, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    xt = It({
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
                        getDirection: (e) => (e.deltaY > 1 ? Lt.Next : Lt.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Rt = 'HorizontalBar_base_49',
                    Ot = 'HorizontalBar_base__nonActive_82',
                    Pt = 'HorizontalBar_leftButton_5f',
                    Ht = 'HorizontalBar_rightButton_03',
                    Wt = 'HorizontalBar_track_0d',
                    zt = 'HorizontalBar_thumb_fd',
                    Ut = 'HorizontalBar_rail_32',
                    Gt = 'disable',
                    Vt = { pending: !1, offset: 0 },
                    $t = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    jt = () => {},
                    Zt = (e, t) => Math.max(20, e.offsetWidth * t),
                    qt = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = $t, onDrag: n = jt }) => {
                        const a = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, r.useState)(Vt),
                            _ = m[0],
                            E = m[1],
                            g = (0, r.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            A = () => {
                                const t = l.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / a),
                                    d = Ct(0, 1, r / (a - n)),
                                    m = (t.offsetWidth - Zt(t, o)) * d;
                                (u.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Gt), void i.current.classList.remove(Gt);
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(Gt), void i.current.classList.add(Gt);
                                            var t, u;
                                            s.current.classList.remove(Gt), i.current.classList.remove(Gt);
                                        }
                                    })(m);
                            },
                            p = Bt(() => {
                                (() => {
                                    const t = c.current,
                                        u = l.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && u)) return;
                                    const o = Math.min(1, n / r);
                                    (t.style.width = `${Zt(u, o)}px`),
                                        (t.style.display = 'flex'),
                                        a.current &&
                                            (1 === o ? a.current.classList.add(Ot) : a.current.classList.remove(Ot));
                                })(),
                                    A();
                            });
                        (0, r.useEffect)(() => (0, ft.v)(p)),
                            (0, r.useEffect)(
                                () =>
                                    (0, ft.v)(() => {
                                        const t = () => {
                                            A();
                                        };
                                        let u = jt;
                                        const n = () => {
                                            u(), (u = (0, ft.v)(p));
                                        };
                                        return (
                                            e.events.on('recalculateContent', p),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', p),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!_.pending) return;
                                const t = (t) => {
                                        var u;
                                        const a = e.contentRef.current;
                                        if (!a) return;
                                        const r = l.current,
                                            o = c.current;
                                        if (!a || !r || !o) return;
                                        const s = t.screenX - _.offset - r.getBoundingClientRect().x,
                                            i = (s / r.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: i });
                                    },
                                    u = () => {
                                        window.removeEventListener('mousemove', t), g(Vt);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u);
                                    }
                                );
                            }, [e, _.offset, _.pending, n, g]);
                        const h = wt((t) => e.applyStepTo(t), d, [e]),
                            v = h[0],
                            F = h[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', F, !0),
                                () => document.removeEventListener('mouseup', F, !0)
                            ),
                            [F],
                        );
                        const b = (e) => {
                            e.target.classList.contains(Gt) || (0, be.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: f()(Rt, t.base), ref: a, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: f()(Pt, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Gt) ||
                                        0 !== e.button ||
                                        ((0, be.G)('play'), v(Lt.Next));
                                },
                                onMouseUp: F,
                                ref: s,
                                onMouseEnter: b,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: f()(Wt, t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        if (n && 0 === t.button)
                                            if (((0, be.G)('play'), t.target === n))
                                                g({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = c.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? Lt.Prev : Lt.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: b,
                                },
                                o().createElement('div', { ref: c, className: f()(zt, t.thumb) }),
                                o().createElement('div', { className: f()(Ut, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: f()(Ht, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Gt) ||
                                        0 !== e.button ||
                                        ((0, be.G)('play'), v(Lt.Prev));
                                },
                                onMouseUp: F,
                                ref: i,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    Kt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Yt = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: f()(Kt.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: f()(Kt.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: f()(Kt.defaultScrollArea, a) },
                                o().createElement(Xt, { className: i, api: m, classNames: s }, e),
                            ),
                            o().createElement(qt, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Xt = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, r.useEffect)(() => (0, ft.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: f()(Kt.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: f()(Kt.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: f()(Kt.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (Xt.Bar = qt),
                    (Xt.Default = Yt),
                    (Xt.SeniorityAwards = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, r.useEffect)(() => (0, ft.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: f()(Kt.base, t) },
                            o().createElement(
                                'div',
                                { className: f()(Kt.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: f()(Kt.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    ));
                const Qt = It({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Lt.Next : Lt.Prev),
                    }),
                    Jt = 'VerticalBar_base_f3',
                    eu = 'VerticalBar_base__nonActive_42',
                    tu = 'VerticalBar_topButton_d7',
                    uu = 'VerticalBar_bottomButton_06',
                    nu = 'VerticalBar_track_df',
                    au = 'VerticalBar_thumb_32',
                    ru = 'VerticalBar_rail_43',
                    ou = 'disable',
                    su = () => {},
                    iu = { pending: !1, offset: 0 },
                    lu = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    cu = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    du = (e, t) => Math.max(20, e.offsetHeight * t),
                    mu = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = lu, onDrag: n = su }) => {
                        const a = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, r.useState)(iu),
                            _ = m[0],
                            E = m[1],
                            g = (0, r.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            A = Bt(() => {
                                const t = c.current,
                                    u = l.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && u)) return;
                                const o = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${du(u, o)}px`),
                                    t.classList.add(au),
                                    a.current &&
                                        (1 === o ? a.current.classList.add(eu) : a.current.classList.remove(eu)),
                                    o
                                );
                            }),
                            p = Bt(() => {
                                const t = l.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / a),
                                    d = Ct(0, 1, r / (a - n)),
                                    m = (t.offsetHeight - du(t, o)) * d;
                                (u.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return s.current.classList.add(ou), void i.current.classList.remove(ou);
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(ou), void i.current.classList.add(ou);
                                            var t, u;
                                            s.current.classList.remove(ou), i.current.classList.remove(ou);
                                        }
                                    })(m);
                            }),
                            h = Bt(() => {
                                cu(e, () => {
                                    A(), p();
                                });
                            });
                        (0, r.useEffect)(() => (0, ft.v)(h)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    cu(e, () => {
                                        p();
                                    });
                                };
                                let u = su;
                                const n = () => {
                                    u(), (u = (0, ft.v)(h));
                                };
                                return (
                                    e.events.on('recalculateContent', h),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', h),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!_.pending) return;
                                const t = (t) => {
                                        cu(e, (u) => {
                                            const a = l.current,
                                                r = c.current,
                                                o = e.getContainerSize();
                                            if (!a || !r || !o) return;
                                            const s = t.screenY - _.offset - a.getBoundingClientRect().y,
                                                i = (s / a.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: s, contentOffset: i });
                                        });
                                    },
                                    u = () => {
                                        window.removeEventListener('mousemove', t), g(iu);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u);
                                    }
                                );
                            }, [e, _.offset, _.pending, n, g]);
                        const v = wt((t) => e.applyStepTo(t), d, [e]),
                            F = v[0],
                            b = v[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const C = (e) => {
                            e.target.classList.contains(ou) || (0, be.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: f()(Jt, t.base), ref: a, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: f()(tu, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ou) ||
                                        0 !== e.button ||
                                        ((0, be.G)('play'), F(Lt.Next));
                                },
                                ref: s,
                                onMouseEnter: C,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: f()(nu, t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        if (n && 0 === t.button)
                                            if (((0, be.G)('play'), t.target === n))
                                                g({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        cu(e, (n) => {
                                                            if (!n) return;
                                                            const a = u(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? Lt.Prev : Lt.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: C,
                                },
                                o().createElement('div', { ref: c, className: t.thumb }),
                                o().createElement('div', { className: f()(ru, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: f()(uu, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ou) ||
                                        0 !== e.button ||
                                        ((0, be.G)('play'), F(Lt.Prev));
                                },
                                onMouseUp: b,
                                ref: i,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    _u = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Eu = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: f()(_u.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: f()(_u.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: f()(_u.area, a) },
                                o().createElement(gu, { className: s, classNames: i, api: m }, e),
                            ),
                            o().createElement(mu, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    gu = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, r.useEffect)(() => (0, ft.v)(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: f()(_u.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: f()(_u.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                gu.Default = Eu;
                const Au = { Vertical: a, Horizontal: n },
                    pu = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: u,
                        paddingBottom: n,
                        amount: a,
                        itemsAmountPerRow: r,
                        visibleRowsAmount: o,
                    }) => {
                        const s = Math.ceil(a / r) * t,
                            i = o * t,
                            l = e * t;
                        return { paddingTop: `${l + u}rem`, paddingBottom: `${Math.max(s - l - i, 0) + n}rem` };
                    },
                    hu = (e) => {
                        const t = e.className,
                            u = e.children,
                            n = e.itemsAmountPerRow,
                            a = e.visibleRowsAmount,
                            r = e.startRowIndex,
                            s = e.amount,
                            i = r * n,
                            l = Math.min(a * n, s - i);
                        return o().createElement(
                            'div',
                            { className: t, style: pu(e) },
                            ((e, t) => {
                                const u = [];
                                for (let n = 0; n < e; n++) u.push(t(n));
                                return u;
                            })(l, (e) => u(i + e)),
                        );
                    },
                    vu = 'VirtualGrid_base_52',
                    Fu = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: u,
                        children: n,
                        api: a,
                        classNames: s,
                        preloadedRows: l = 1,
                        paddingTop: c = 0,
                        paddingBottom: d = 0,
                    }) => {
                        const m = a.scrollApi,
                            _ = (0, r.useRef)(0),
                            E = (0, r.useState)(0),
                            g = E[0],
                            A = E[1],
                            p = (0, r.useState)(null),
                            h = p[0],
                            v = p[1],
                            F = (0, r.useState)(null),
                            b = F[0],
                            C = F[1];
                        return (
                            (0, r.useEffect)(() => {
                                const t = (t) => {
                                    if (!h) return;
                                    const n = Math.floor((i.O.view.pxToRem(t.value.scrollPosition) - c) / u),
                                        r = Math.ceil(e / h),
                                        o = Math.max(0, Math.min(n - l, r));
                                    A(o), a.startRowIndexChanged(o);
                                };
                                return m.events.on('change', t), () => m.events.off('change', t);
                            }, [a, m, u, c, h, e, l]),
                            (0, r.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                n = m.contentRef.current.getBoundingClientRect(),
                                                r =
                                                    i.O.view.pxToRem(n.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                o = Math.floor(r / t),
                                                s = Math.ceil(i.O.view.pxToRem(n.height) / u) + 2 * l;
                                            (_.current = o), v(o), C(s), a.layoutCalculated(o, s);
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
                                    h && m.applyScroll(Math.floor((e + 1) / h) * u + c, { immediate: t });
                                };
                                return a.events.on('scrollToIndex', e), () => a.events.off('scrollToIndex', e);
                            }, [a, u, h, c, m]),
                            o().createElement(
                                Au.Vertical.Default,
                                {
                                    api: m,
                                    className: null == s ? void 0 : s.scroll,
                                    areaClassName: null == s ? void 0 : s.areaClassName,
                                    scrollClassName: null == s ? void 0 : s.scrollClassName,
                                    scrollClassNames: {
                                        content: null == s ? void 0 : s.content,
                                        wrapper: null == s ? void 0 : s.wrapper,
                                    },
                                },
                                null !== h &&
                                    null !== b &&
                                    o().createElement(
                                        hu,
                                        {
                                            className: f()(vu, null == s ? void 0 : s.inner),
                                            paddingBottom: d,
                                            paddingTop: c,
                                            amount: e,
                                            itemsAmountPerRow: h,
                                            visibleRowsAmount: b,
                                            startRowIndex: g,
                                            cellHeight: u,
                                        },
                                        n,
                                    ),
                            )
                        );
                    },
                    bu = 'VirtualGridWithFade_scrollAreaFade_94',
                    fu = ['api', 'children', 'classNames'];
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                const Du = (e) => {
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
                            })(e, fu);
                        const s = (0, r.useState)(!0),
                            i = s[0],
                            l = s[1],
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
                            o().createElement(
                                Fu,
                                Cu(
                                    {
                                        api: t,
                                        classNames: Object.assign({}, n, {
                                            scrollClassName: f()(null == n ? void 0 : n.scrollClassName, i && bu),
                                        }),
                                    },
                                    a,
                                ),
                                u,
                            )
                        );
                    },
                    Bu = 'TankmanVirtualList_grid_41',
                    wu = ({ amount: e, paddingTop: t = 11, paddingBottom: u = 11, api: n, children: a }) =>
                        o().createElement(
                            Du,
                            {
                                amount: e,
                                classNames: { content: Bu },
                                cellWidth: 318,
                                cellHeight: 265,
                                paddingTop: t,
                                paddingBottom: u,
                                api: n,
                            },
                            a,
                        );
                let yu;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(yu || (yu = {}));
                const ku = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: n = 0,
                        args: a,
                        isEnabled: o = !0,
                        onMouseDown: s,
                    }) => {
                        const i = (0, r.useCallback)(() => {
                                (0, U.c9)(U.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: a,
                                }),
                                    be.$.playYes();
                            }, [a, t, u, n]),
                            l = (0, r.useCallback)(() => {
                                (0, U.c9)(U.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, n]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    s && s(e), ((e) => e.button === yu.RIGHT)(e) && i();
                                },
                                [s, i],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === o && l();
                            }, [o, l]),
                            o ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Tu = ['children'];
                function Su() {
                    return (
                        (Su =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Su.apply(this, arguments)
                    );
                }
                const Nu = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, Tu);
                    return o().createElement(
                        ku,
                        Su({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                let Lu, Mu, Iu, xu, Ru, Ou, Pu;
                !(function (e) {
                    (e.Viewed = 'viewed'), (e.Click = 'click');
                })(Lu || (Lu = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.PersonalFile = 'personal_file_view'),
                            (e.PersonalData = 'personal_data_view'),
                            (e.ServiceRecord = 'service_record_view'),
                            (e.Barracks = 'barracks_view'),
                            (e.MemberChange = 'member_change_view'),
                            (e.QuickTraining = 'quick_training_view'),
                            (e.TankChange = 'tank_change_view');
                    })(Mu || (Mu = {})),
                    (function (e) {
                        e.DocumentChange = 'document_change_dialog';
                    })(Iu || (Iu = {})),
                    (function (e) {
                        (e.PremiumTooltip = 'personal_file_view_premium_tooltip'),
                            (e.MstlTooltip = 'personal_file_view_mstl_tooltip');
                    })(xu || (xu = {})),
                    (function (e) {
                        (e.ChangeButtonTooltip = 'crew_widget_change_button_tooltip'),
                            (e.MstlTooltip = 'crew_widget_mstl_tooltip'),
                            (e.SlotContextMenu = 'crew_widget_slot_context_menu'),
                            (e.CrewOperationsButton = 'crew_widget_crew_operations_button');
                    })(Ru || (Ru = {})),
                    (function (e) {
                        (e.FirstnameSelect = 'document_change_dialog_firstname_select'),
                            (e.Firstname = 'document_change_dialog_firstname'),
                            (e.LastnameSelect = 'document_change_dialog_lastname_select'),
                            (e.Lastname = 'document_change_dialog_lastname');
                    })(Ou || (Ou = {})),
                    (function (e) {
                        e.CardContextMenu = 'barracks_view_card_context_menu';
                    })(Pu || (Pu = {}));
                R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                    Mu.PersonalFile,
                    R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                    Mu.PersonalData,
                    R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    Mu.ServiceRecord,
                    R.views.lobby.crew.BarracksView('resId'),
                    Mu.Barracks,
                    R.views.lobby.crew.HangarCrewWidget('resId'),
                    Mu.Hangar,
                    R.views.lobby.crew.MemberChangeView('resId'),
                    Mu.MemberChange,
                    R.views.lobby.crew.TankChangeView('resId'),
                    Mu.TankChange,
                    R.views.lobby.crew.QuickTrainingView('resId'),
                    Mu.QuickTraining;
                let Hu;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(Hu || (Hu = {}));
                let Wu;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(Wu || (Wu = {}));
                const zu = 'metrics',
                    Uu = ({ partnerID: e, item: t, parentScreen: u, itemState: n, info: a }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: u || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    Gu = (e, t) => {
                        const u = (0, r.useCallback)(
                            (u, n = Hu.Info, a) => {
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
                    Vu = (e, t) => {
                        const u = ((e) => {
                                const t = Gu(e, zu),
                                    u = (0, r.useCallback)(
                                        (e) => {
                                            t(e.action, e.logLevel, Uu(e));
                                        },
                                        [t],
                                    );
                                return (e) => u(e);
                            })('crew'),
                            n = St(() => u({ action: Lu.Click, parentScreen: e, item: t }), [e, t], 2e3);
                        return (e) => {
                            e.button === yu.RIGHT && n();
                        };
                    },
                    $u = 'Actions_base_07',
                    ju = ({ className: e, children: t }) => o().createElement('div', { className: f()($u, e) }, t);
                var Zu = u(3415);
                const qu = 'MainActionButton_base_07',
                    Ku = 'MainActionButton_base__visible_43',
                    Yu = ['children', 'isVisible', 'tooltipArgs'];
                function Xu() {
                    return (
                        (Xu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                const Qu = (e) => {
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
                            })(e, Yu);
                        return o().createElement(
                            Zu.l,
                            { tooltipArgs: n },
                            o().createElement(ue.u5, Xu({ size: ue.qE.small, mixClass: f()(qu, u && Ku) }, a), t),
                        );
                    },
                    Ju = { base: 'VoiceOverButton_base_a3', soundIcon: 'VoiceOverButton_soundIcon_8a' },
                    en = ({ onClick: e }) =>
                        o().createElement(
                            ne.i,
                            {
                                header: R.strings.crew.tankman.action.voiceover.tooltip.title(),
                                body: R.strings.crew.tankman.action.voiceover.tooltip.body(),
                            },
                            o().createElement(
                                ue.u5,
                                {
                                    size: ue.qE.small,
                                    mixClass: f()(Ju.base, Ju.base__visible),
                                    type: ue.L$.secondary,
                                    onClick: e,
                                },
                                o().createElement('div', { className: Ju.soundIcon }),
                            ),
                        ),
                    tn = ({ className: e }) => o().createElement('div', { className: f()(Ft.base, e) }),
                    un = 'BarracksTankmanCard_base_15';
                function nn() {
                    return (
                        (nn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        nn.apply(this, arguments)
                    );
                }
                const an = R.strings.crew.tankman.action,
                    rn = { body: an.dismiss.tooltip.available.body() },
                    on = {
                        body: an.dismiss.tooltip.unavailable.body(),
                        header: an.dismiss.tooltip.unavailable.title(),
                    },
                    sn = { body: an.restore.tooltip.body() },
                    ln = an.dismiss.title(),
                    cn = an.restore.title(),
                    dn = an.recruit.title(),
                    mn = { body: R.strings.crew.tankmanList.tooltip.recruit.body() },
                    _n = (0, $.Pi)(({ index: e, onLazyLoad: t }) => {
                        const u = ee(),
                            n = u.model,
                            a = u.controls,
                            s = Vu(Mu.Barracks, Pu.CardContextMenu),
                            i = n.computes.getItem(e);
                        (0, r.useEffect)(() => {
                            i || t();
                        }, [t, i]);
                        const l = (0, r.useCallback)(
                                (e) => {
                                    i &&
                                        (i.tankmanKind === he.Recruit
                                            ? a.recruitTankman(i.recruitID)
                                            : i.location === pe.Dismissed
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
                        if (!i) return o().createElement(tn, { className: un });
                        const _ = i.tankmanID,
                            E = i.location,
                            g = i.tankmanKind === he.Recruit,
                            A = ((e, t, u) => {
                                const n = t ? on : rn;
                                switch (e) {
                                    case pe.InBarracks:
                                        return [u ? dn : ln, u ? mn : n];
                                    case pe.InTank:
                                        return [ln, n];
                                    case pe.Dismissed:
                                    default:
                                        return [cn, sn];
                                }
                            })(E, i.isMainActionDisabled, g),
                            p = A[0],
                            h = A[1];
                        return o().createElement(
                            Nu,
                            {
                                isEnabled: !g && E !== pe.Dismissed && i.cardState !== ve.Disabled,
                                args: { type: 'crewTankman', tankmanID: _ },
                                onMouseDown: s,
                            },
                            o().createElement(
                                bt,
                                nn({ key: e }, i, { className: un, onClick: d, isCollapsedOnHover: !0 }),
                                (e) =>
                                    o().createElement(
                                        ju,
                                        null,
                                        o().createElement(
                                            Qu,
                                            {
                                                tooltipArgs: h,
                                                isVisible: e,
                                                onClick: c,
                                                disabled: i.isMainActionDisabled,
                                            },
                                            p,
                                        ),
                                        i.hasVoiceover && g && o().createElement(en, { onClick: m }),
                                    ),
                            ),
                        );
                    }),
                    En = 'BarracksTankmanList_base_d7',
                    gn = 'BarracksTankmanList_gridWrapper_0b',
                    An = 'BarracksTankmanList_emptyState_1c',
                    pn = R.strings.crew.tankmanList.emptyState,
                    hn = (e) => (e ? ae.Xd : { body: R.strings.crew.tankmanList.tooltip.recruit.body() }),
                    vn = (0, $.Pi)(() => {
                        const e = ee(),
                            t = e.model,
                            u = e.controls,
                            n = (() => {
                                const e = Au.Vertical.useVerticalScrollApi(),
                                    t = Tt(),
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
                            s = t.itemsAmount.get(),
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
                                            o = (e) => {
                                                const t = a.current[0];
                                                a.current = [e.value.scrollPosition, t < e.value.scrollPosition];
                                            };
                                        return (
                                            t.scrollApi.events.on('change', o),
                                            t.events.on('layoutCalculated', e),
                                            t.events.on('startRowIndexChanged', r),
                                            () => {
                                                t.scrollApi.events.off('change', o),
                                                    t.events.off('layoutCalculated', e),
                                                    t.events.off('startRowIndexChanged', r);
                                            }
                                        );
                                    }, [t]),
                                    Ce(
                                        () => {
                                            const t = u.current,
                                                r = t[0],
                                                o = t[1],
                                                s = n.current * r,
                                                i = r * o;
                                            e(2 * i, a.current[1] ? s : Math.max(s - 1 * i, 0));
                                        },
                                        [],
                                        10,
                                    )
                                );
                            })(u.loadCards, n);
                        return o().createElement(
                            'div',
                            { className: En },
                            s > 0
                                ? o().createElement(
                                      'div',
                                      { className: gn },
                                      o().createElement(wu, { amount: s, api: n }, (e) =>
                                          o().createElement(_n, { key: e, index: e, onLazyLoad: i }),
                                      ),
                                  )
                                : o().createElement(
                                      Ee,
                                      {
                                          warningText: a ? pn.noFilteredItems() : pn.noItems(),
                                          buttonType: a ? te.L.secondary : te.L.primary,
                                          tooltipArgs: hn(a),
                                          onClick: u.resetFilters,
                                          className: An,
                                      },
                                      !!a && pn.button.resetFilers(),
                                  ),
                        );
                    }),
                    Fn = 'ButtonWithDiscountIndicator_base_6c',
                    bn = 'ButtonWithDiscountIndicator_discountIndicator_a5',
                    fn = 'ButtonWithDiscountIndicator_discountIndicator__small_d6',
                    Cn = ['hasDiscount', 'className', 'children', 'wrapperId', 'isSmall'];
                const Dn = o().memo(function (e) {
                        let t = e.hasDiscount,
                            u = e.className,
                            n = e.children,
                            a = e.wrapperId,
                            r = e.isSmall,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Cn);
                        return o().createElement(
                            'div',
                            { id: a, className: f()(Fn, u) },
                            o().createElement(ue.u5, s, n),
                            t && o().createElement('div', { className: f()(bn, r && fn) }),
                        );
                    }),
                    Bn = {
                        base: 'ListHeader_base_ad',
                        title: 'ListHeader_title_a8',
                        base__memberChange: 'ListHeader_base__memberChange_c2',
                        base__tankChange: 'ListHeader_base__tankChange_fb',
                        base__personalData: 'ListHeader_base__personalData_aa',
                    };
                let wn;
                !(function (e) {
                    (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(wn || (wn = {}));
                const yn = ({ title: e, theme: t = wn.Barracks, className: u, children: n }) =>
                    o().createElement(
                        'div',
                        { className: f()(Bn.base, Bn[`base__${t}`], u) },
                        o().createElement('div', { className: Bn.title }, e),
                        n,
                    );
                var kn = u(9197);
                const Tn = 'Header_base_4b',
                    Sn = 'Header_berthsAmount_12',
                    Nn = 'Header_button_f1';
                function Ln() {
                    return (
                        (Ln =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ln.apply(this, arguments)
                    );
                }
                const Mn = (e) =>
                        e
                            ? { contentId: R.views.lobby.crew.tooltips.BunksConfirmDiscountTooltip('resId') }
                            : {
                                  header: R.strings.crew.barracks.tooltip.enlarge.header(),
                                  body: R.strings.crew.barracks.tooltip.enlarge.body(),
                              },
                    In = (0, $.Pi)(() => {
                        const e = ee(),
                            t = e.model,
                            u = e.controls,
                            n = t.isBerthsOnSale.get();
                        return o().createElement(
                            yn,
                            { title: R.strings.crew.barracks.title() },
                            o().createElement(
                                'div',
                                { className: Tn },
                                o().createElement(
                                    kn.C,
                                    Ln({ title: R.strings.crew.barracks.bunks.title() }, t.berthsAmount.get(), {
                                        className: Sn,
                                    }),
                                ),
                                o().createElement(
                                    Zu.l,
                                    { tooltipArgs: Mn(n) },
                                    o().createElement(
                                        Dn,
                                        {
                                            size: ue.qE.small,
                                            type: ue.L$.ghost,
                                            mixClass: Nn,
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
                    xn = 'BarracksApp_base_b7',
                    Rn = 'BarracksApp_content_a3',
                    On = (0, $.Pi)(() => {
                        const e = ee().controls,
                            t = k().mediaSize;
                        var u;
                        return (
                            (u = e.showHangar),
                            V(z.n.ESCAPE, u),
                            o().createElement(
                                'div',
                                { className: xn },
                                o().createElement(
                                    'div',
                                    { className: Rn },
                                    o().createElement(In, null),
                                    o().createElement(j.p, { popoverDirection: t < B.Large ? W.IC.Left : W.IC.Bottom }),
                                    o().createElement(vn, null),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        o().createElement(J, null, o().createElement(O, null, o().createElement(On, null))),
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
                    o = u(6179),
                    s = u.n(o);
                const i = 'AlertCounter_base_f3',
                    l = 'AlertCounter_counter_da',
                    c = 'AlertCounter_label_18',
                    d = ({ value: e, className: t }) =>
                        s().createElement(
                            'div',
                            { className: a()(i, t) },
                            s().createElement(r.A, { value: e, className: l }),
                            !e && s().createElement('div', { className: c }, R.strings.crew.common.exclamationMark()),
                        );
            },
            9197: (e, t, u) => {
                'use strict';
                u.d(t, { C: () => p });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    o = u.n(r);
                const s = 'NumberRange_base_5e',
                    i = 'NumberRange_base__animation_79',
                    l = 'NumberRange_from_70',
                    c = 'NumberRange_from__red_f8',
                    d = 'NumberRange_separator_c0',
                    m = o().memo(function ({ from: e, to: t, className: u }) {
                        return o().createElement(
                            'div',
                            { className: a()(s, 0 === e && i, u) },
                            o().createElement('div', { className: a()(l, 0 === e && t > 0 && c) }, e),
                            e !== t &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: d }, '/'),
                                    o().createElement('div', null, t),
                                ),
                        );
                    }),
                    _ = 'NumberRangeWithLabel_base_2b',
                    E = 'NumberRangeWithLabel_title_94',
                    g = 'NumberRangeWithLabel_counter_00',
                    A = 'NumberRangeWithLabel_counterGlow_1f',
                    p = ({ title: e, isGlowVisible: t = !1, className: u, classNames: n, from: s, to: i }) => {
                        const l = (0, r.useMemo)(
                            () => ({
                                left: s !== i ? 7 * String(s).length + 4 : Math.round((7 * String(s).length) / 2),
                            }),
                            [s, i],
                        );
                        return o().createElement(
                            'div',
                            { className: a()(_, u) },
                            o().createElement('div', { className: E }, e),
                            o().createElement(
                                'div',
                                { className: g },
                                o().createElement(m, { from: s, to: i }),
                                t &&
                                    o().createElement('div', {
                                        style: l,
                                        className: a()(A, null == n ? void 0 : n.counterGlow),
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
                    o = u(2106),
                    s = u(9987),
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
                        E = void 0 === _ ? o.L.secondary : _,
                        g = e.size,
                        A = void 0 === g ? o.q.small : g,
                        p = e.hasIndicator,
                        h = void 0 === p || p,
                        v = (function (e, t) {
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
                        l().createElement(r.u5, m({ type: E, size: A, mixClass: c.Z.button }, v), i),
                        l().createElement('div', { className: c.Z.overlay }),
                        h && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(u) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(s.A, { value: u, size: 'small' }),
                            ),
                    );
                });
            },
            8018: (e, t, u) => {
                'use strict';
                u.d(t, { T3: () => r, Xd: () => s, gO: () => i });
                var n = u(3649);
                const a = R.strings.common.percentValue(),
                    r = (e) => (0, n.uF)(a, { value: e });
                let o;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(o || (o = {}));
                const s = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let i;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(i || (i = {}));
            },
            5801: (e, t, u) => {
                'use strict';
                u.d(t, { p: () => Se });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    o = u.n(r),
                    s = u(2106),
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
                    A = 'FilterTitle_discount_42',
                    p = 'FilterTitle_discountIcon_30',
                    h = ({ label: e, hasDiscount: t, className: u }) =>
                        a().createElement(
                            'div',
                            { className: o()(E, u) },
                            a().createElement('div', { className: g }, e),
                            t && a().createElement('div', { className: A }, a().createElement('div', { className: p })),
                        );
                let v;
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
                })(v || (v = {}));
                var F = u(3649);
                const b = 'ToggleIcon_base_59',
                    f = 'ToggleIcon_base__small_3e',
                    C = 'ToggleIcon_icon_e7',
                    D = a().memo(function ({ icon: e, isSmall: t = !1, classNames: u }) {
                        return a().createElement(
                            'div',
                            { className: o()(b, t && f) },
                            a().createElement('div', {
                                className: o()(C, null == u ? void 0 : u.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var B = u(9690);
                const w = 'VehicleTier_base_9c',
                    y = 'VehicleTier_base__small_fc',
                    k = ({ level: e, isSmall: t = !1 }) =>
                        a().createElement('div', { className: o()(w, t && y) }, (0, B.HG)(e)),
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
                        u === v.VehicleTier
                            ? a().createElement(k, { isSmall: n, level: Number(e) })
                            : a().createElement(D, {
                                  icon: t,
                                  isSmall: n,
                                  classNames: {
                                      icon: o()(T[`icon__${u}`], T[`icon__${u}${(0, F.e)(e)}`], r && T.icon__selected),
                                  },
                              }),
                    N = {
                        base: 'FilterToggleGroup_base_69',
                        title: 'FilterToggleGroup_title_65',
                        content: 'FilterToggleGroup_content_80',
                        toggle: 'FilterToggleGroup_toggle_d4',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_11',
                    };
                function L() {
                    return (
                        (L =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        L.apply(this, arguments)
                    );
                }
                let M;
                !(function (e) {
                    (e.Default = 'default'), (e.InPopup = 'inPopup');
                })(M || (M = {}));
                const I = ({ header: e, body: t, contentId: u, targetId: n }) =>
                        u
                            ? { contentId: u, targetId: n }
                            : t || e
                              ? { header: null != e ? e : void 0, body: null != t ? t : void 0 }
                              : void 0,
                    x = ({
                        id: e,
                        type: t,
                        label: u,
                        hasDiscount: n,
                        filters: r,
                        onClick: s,
                        className: i,
                        toggleProps: l,
                        theme: c = M.Default,
                    }) => {
                        const E = c === M.InPopup;
                        return a().createElement(
                            'div',
                            { className: o()(N.base, N[`base__${c}`], i) },
                            E && a().createElement(h, { className: N.title, label: u, hasDiscount: n }),
                            a().createElement(
                                'div',
                                { className: N.content },
                                m.UI(r, ({ id: u, isSelected: n, tooltip: r, icon: i, counter: c }) =>
                                    a().createElement(
                                        d.l,
                                        { key: u, tooltipArgs: I(r), className: N.toggle },
                                        a().createElement(
                                            _.C,
                                            L({}, l, {
                                                className: o()(N.toggle, null == l ? void 0 : l.className),
                                                isActive: n,
                                                onClick: () => (null == s ? void 0 : s(e, u)),
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
                const P = (0, u(3215).q)()(
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
                    H = P[0],
                    W = P[1];
                var z = u(3457),
                    U = u(3616),
                    G = u(1037),
                    V = u(9367);
                const $ = 'PopupButton_base_7c',
                    j = 'PopupButton_popupButtonLabel_ed',
                    Z = 'PopupButton_buttonIconWrapper_d7',
                    q = 'PopupButton_buttonIcon_e0',
                    K = 'PopupButton_buttonIcon__isHighlighted_84',
                    Y = 'PopupButton_discountAlert_c8',
                    X = ({ isHighlighted: e, hasDiscountAlert: t, popoverDirection: u = G.IC.Bottom }) =>
                        a().createElement(
                            'div',
                            { className: $ },
                            a().createElement('div', { className: j }, R.strings.crew.filter.popup.button.title()),
                            a().createElement(
                                U.Z,
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
                                        { type: z.L$.ghost, size: z.qE.small, isActive: e, hasIndicator: !1 },
                                        a().createElement('div', { className: o()(q, e && K) }),
                                    ),
                                    t && a().createElement(V.Q, { className: Y }),
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
                                    z.u5,
                                    { mixClass: ee, onClick: e, type: z.L$.ghost, size: z.qE.small },
                                    a().createElement('div', { className: te }),
                                ),
                            ),
                        ),
                    ne = 'default',
                    ae = 'search',
                    re = 'email',
                    oe = 'password',
                    se = 'normal',
                    ie = 'disabled',
                    le = 'alert',
                    ce = 'error',
                    de = 'medium',
                    me = {
                        [ne]: '',
                        [re]: R.strings.common.input.placeholder.email(),
                        [ae]: R.strings.common.input.placeholder.search(),
                        [oe]: R.strings.common.input.placeholder.password(),
                    },
                    _e = { [ne]: 'text', [re]: 'text', [ae]: 'text', [oe]: 'password' },
                    Ee = { [ne]: '', [re]: 'Invalid email', [ae]: '', [oe]: '' },
                    ge = R.images.gui.maps.icons.components.input;
                function Ae(e, t) {
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
                var pe = u(7727);
                const he = {
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
                    ve = a().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: u = ne,
                            size: r = de,
                            variant: s = se,
                            placeholder: i = '',
                            highlighted: l,
                            withClear: c,
                            selectOnFocus: d = !0,
                            maxLength: m,
                            iconSource: _,
                            classMix: E,
                            onMouseEnter: g,
                            onMouseLeave: A,
                            onMouseDown: p,
                            onMouseUp: h,
                            onClick: v,
                            onChange: F,
                            onClear: b,
                            onFocus: f,
                            onBlur: C,
                        }) => {
                            const D = (0, n.useState)(!1),
                                B = D[0],
                                w = D[1],
                                y = (0, n.useRef)(null),
                                k = (0, n.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                T = s !== ie,
                                S = (0, n.useCallback)(
                                    (e) => {
                                        T && (w(!0), f && f(e));
                                    },
                                    [T, f],
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
                            const L = (0, n.useCallback)(
                                    (e) => {
                                        T && F && F(e.target.value);
                                    },
                                    [T, F],
                                ),
                                M = (0, n.useCallback)(
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
                                            A && A(e));
                                    },
                                    [T, A],
                                ),
                                x = (0, n.useCallback)(
                                    (e) => {
                                        T && ((k.current.mouseDown = !0), p && p(e));
                                    },
                                    [T, p],
                                ),
                                R = (0, n.useCallback)(
                                    (e) => {
                                        T && ((k.current.mouseDown = !1), h && h(e));
                                    },
                                    [T, h],
                                ),
                                O = (0, n.useCallback)(
                                    (e) => {
                                        if (T && y.current) {
                                            (!B || (B && e.target !== y.current)) && y.current.focus(), v && v(e);
                                        }
                                    },
                                    [B, T, v],
                                ),
                                P = i || me[u],
                                H = Boolean(_),
                                W = o()(
                                    he.base,
                                    he[`base__${r}`],
                                    l && he[`base__${s}`],
                                    B && he.base__focused,
                                    H && he.base__withIcon,
                                    E,
                                ),
                                z = (0, n.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                U = o()(he.input, he[`input__${u}`]),
                                G = o()(he.icon, he[`icon__${u}`]),
                                V = o()(he.placeholder, he[`placeholder__${u}`]);
                            return a().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: M,
                                    onMouseDown: x,
                                    onMouseUp: R,
                                    onMouseLeave: I,
                                    onClick: O,
                                },
                                !T && a().createElement('div', { className: he.disabled }),
                                z && a().createElement('div', { style: z, className: G }),
                                a().createElement('input', {
                                    ref: y,
                                    className: U,
                                    type: _e[u],
                                    value: t,
                                    onChange: L,
                                    disabled: !T,
                                    onFocus: S,
                                    onBlur: N,
                                    maxLength: m,
                                }),
                                P && !t && !B && a().createElement('div', { className: V }, P),
                                c &&
                                    a().createElement('div', {
                                        className: he.clear,
                                        onClick: (e) => {
                                            pe.$.playClick(), b && b(e);
                                        },
                                        onMouseEnter: pe.$.playHighlight,
                                    }),
                            );
                        },
                    ),
                    Fe = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    be = ({ variant: e, show: t = !0, helperText: u, helperIcon: r, classMix: s }) => {
                        const i = (0, n.useMemo)(() => {
                                const t =
                                    r ||
                                    (function (e) {
                                        return e === le ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [r, e]),
                            l = o()(Fe.base, t && Fe.base__shown),
                            c = o()(Fe.message, Fe[`message__${e}`], s);
                        return a().createElement(
                            'div',
                            { className: l },
                            i && a().createElement('div', { className: Fe.icon, style: i }),
                            a().createElement('div', { className: c }, u),
                        );
                    },
                    fe = {
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
                            s = e.variant,
                            i = void 0 === s ? se : s,
                            l = e.size,
                            c = void 0 === l ? de : l,
                            m = e.value,
                            _ = e.tooltipArgs,
                            E = e.helperText,
                            g = void 0 === E ? '' : E,
                            A = e.isValidated,
                            p = void 0 === A || A,
                            h = e.showHelper,
                            v = void 0 === h || h,
                            F = e.error,
                            b = e.options,
                            f = e.onFocus,
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
                        const L = (0, n.useState)(m),
                            M = L[0],
                            I = L[1],
                            x = (0, n.useState)(p),
                            R = x[0],
                            O = x[1],
                            P = (0, n.useMemo)(() => Object.assign({}, Be, b), [b]),
                            H = (0, n.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: m, type: r }),
                            W = (0, n.useCallback)((e) => {
                                e !== H.current.value &&
                                    ((H.current.value = e), (H.current.isChangeHandled = !1), I(e));
                            }, []),
                            z = (0, n.useCallback)(
                                (e) => {
                                    let t = !0;
                                    P.performChangeValidation &&
                                        (t = P.changesValidator ? P.changesValidator(e) : Ae(e, H.current.type)),
                                        y && y(e, t);
                                },
                                [y, P],
                            ),
                            U = (0, n.useCallback)(() => {
                                H.current.debounceTimeout &&
                                    (window.clearTimeout(H.current.debounceTimeout), (H.current.debounceTimeout = 0));
                            }, []),
                            G = (0, n.useCallback)(() => W(''), [W]);
                        (0, n.useEffect)(() => () => U(), [U]);
                        const V = (0, n.useCallback)(
                            (e) => {
                                U(),
                                    P.debounceTime
                                        ? (H.current.debounceTimeout = window.setTimeout(() => {
                                              z(e);
                                          }, P.debounceTime))
                                        : z(e);
                            },
                            [z, U, P.debounceTime],
                        );
                        (0, n.useEffect)(() => {
                            H.current.isChangeHandled ||
                                H.current.value !== M ||
                                (V(H.current.value), (H.current.isChangeHandled = !0));
                        }, [M, V]),
                            (0, n.useEffect)(() => {
                                H.current.isChangeHandled && m !== H.current.value && ((H.current.value = m), I(m)),
                                    (H.current.type = r);
                            }, [m, r]),
                            (0, n.useEffect)(() => {
                                O(p);
                            }, [p, i]);
                        const $ = (0, n.useCallback)((e) => C && C(e), [C]),
                            j = (0, n.useCallback)(
                                (e) => {
                                    P.disableHighlightOnFocus && R && O(!1), f && f(e);
                                },
                                [R, f, P.disableHighlightOnFocus],
                            ),
                            Z = (0, n.useCallback)((e) => B && B(e), [B]),
                            q = (0, n.useCallback)((e) => w && w(e), [w]),
                            K = (0, n.useCallback)((e) => D && D(e), [D]),
                            Y = (0, n.useMemo)(
                                () =>
                                    P.withTypeIcon
                                        ? (function (e, t) {
                                              return e === ae ? ge.$dyn(`search_${t}`) : '';
                                          })(r, c)
                                        : '',
                                [r, c, P.withTypeIcon],
                            ),
                            X = g || Ee[r],
                            Q = Boolean(M),
                            J = F ? ce : i,
                            ee = Boolean(F) || R,
                            te = (0, n.useMemo)(
                                () => ('boolean' == typeof P.withClear ? Q && P.withClear : Q && r === ae),
                                [r, Q, P],
                            ),
                            ue = o()(fe.base, fe[`base__${c}`], fe[`base__${i}`], k);
                        return a().createElement(
                            'div',
                            { id: t, className: ue, onMouseEnter: $, onMouseDown: q, onMouseUp: Z, onMouseLeave: K },
                            a().createElement(
                                d.l,
                                { tooltipArgs: _ },
                                a().createElement(
                                    ve,
                                    De(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: Y,
                                            size: c,
                                            type: r,
                                            variant: J,
                                            value: M,
                                            withClear: te,
                                            highlighted: ee,
                                            selectOnFocus: P.selectOnFocus,
                                            maxLength: P.maxLength,
                                            classMix: T,
                                            onFocus: j,
                                            onChange: W,
                                            onClear: G,
                                        },
                                        N,
                                    ),
                                ),
                            ),
                            X &&
                                a().createElement(
                                    'div',
                                    { className: fe.helper },
                                    a().createElement(be, {
                                        variant: J,
                                        show: v && (P.isPermanentHelper || ee),
                                        helperText: F || X,
                                        helperIcon: P.helperIconSource,
                                        classMix: S,
                                    }),
                                ),
                        );
                    },
                    ye = ({ value: e, placeholder: t, tooltipHeader: u, onChange: n, className: r, tooltipBody: o }) =>
                        a().createElement(
                            i.i,
                            { header: null != u ? u : void 0, body: o, isEnabled: Boolean(u || o) },
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
                            A = u.popoverTooltipHeader.get(),
                            p = u.popoverTooltipBody.get();
                        return a().createElement(
                            'div',
                            { className: o()(ke.base, ke[`base__${m}`]) },
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
                                a().createElement(x, {
                                    id: _.id,
                                    label: _.label,
                                    type: _.type,
                                    hasDiscount: _.hasDiscount,
                                    filters: u.filters.get(),
                                    toggleProps: { type: s.L.ghost },
                                    onClick: n.updateFilter,
                                }),
                                u.isPopoverEnabled.get() &&
                                    a().createElement(
                                        i.i,
                                        {
                                            header: null != A ? A : void 0,
                                            body: null != p ? p : void 0,
                                            isEnabled: Boolean(A || p),
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
                    Se = ({ popoverDirection: e }) =>
                        a().createElement(
                            H,
                            { options: { rootId: R.views.lobby.crew.widgets.FilterPanelWidget('resId') } },
                            a().createElement(Te, { popoverDirection: e }),
                        );
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
                    for (var [t, u, n] = deferred[i], r = !0, o = 0; o < t.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
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
            var e = { 625: 0, 595: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, o, s] = u,
                        i = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(u); i < r.length; i++)
                        (a = r[i]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(2900));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
