(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var a = n(6483),
                    r = n.n(a),
                    u = n(7727),
                    s = n(6179),
                    o = n.n(s),
                    i = n(6880),
                    l = n(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: c,
                    mixClass: d,
                    soundHover: m,
                    soundClick: _,
                    onMouseEnter: E,
                    onMouseMove: g,
                    onMouseDown: p,
                    onMouseUp: h,
                    onMouseLeave: b,
                    onClick: f,
                }) => {
                    const v = (0, s.useRef)(null),
                        A = (0, s.useState)(n),
                        F = A[0],
                        C = A[1],
                        D = (0, s.useState)(!1),
                        w = D[0],
                        B = D[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                F && null !== v.current && !v.current.contains(e.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [F]),
                        (0, s.useEffect)(() => {
                            C(n);
                        }, [n]),
                        o().createElement(
                            'div',
                            {
                                ref: v,
                                className: r()(
                                    i.Z.base,
                                    i.Z[`base__${a}`],
                                    c && i.Z.base__disabled,
                                    t && i.Z[`base__${t}`],
                                    F && i.Z.base__focus,
                                    w && i.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== m && (0, u.G)(m), E && E(e));
                                },
                                onMouseMove: function (e) {
                                    g && g(e);
                                },
                                onMouseUp: function (e) {
                                    c || (h && h(e), B(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== _ && (0, u.G)(_),
                                        p && p(e),
                                        n && (c || (v.current && (v.current.focus(), C(!0)))),
                                        B(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (b && b(e), B(!1));
                                },
                                onClick: function (e) {
                                    c || (f && f(e));
                                },
                            },
                            a !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: i.Z.back }),
                                    o().createElement('span', { className: i.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: r()(i.Z.state, i.Z.state__default) },
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
                const d = c;
            },
            2106: (e, t, n) => {
                'use strict';
                let a, r;
                n.d(t, { L: () => a, q: () => r }),
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
                    })(r || (r = {}));
            },
            9987: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => c });
                var a = n(6483),
                    r = n.n(a),
                    u = n(6179),
                    s = n.n(u),
                    o = n(8055);
                const i = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        u = e.fadeInAnimation,
                        c = e.hide,
                        d = e.maximumNumber,
                        m = e.className,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, i);
                    const E = a ? null : n,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const p = E && !g && E > d,
                        h = r()(
                            o.Z.base,
                            o.Z[`base__${t}`],
                            u && o.Z.base__animated,
                            c && o.Z.base__hidden,
                            !E && o.Z.base__pattern,
                            a && o.Z.base__empty,
                            m,
                        );
                    return s().createElement(
                        'div',
                        l({ className: h }, _),
                        s().createElement('div', { className: o.Z.bg }),
                        s().createElement('div', { className: o.Z.pattern }),
                        s().createElement(
                            'div',
                            { className: r()(o.Z.value, g && o.Z.value__text) },
                            p ? d : E,
                            p && s().createElement('span', { className: o.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            1037: (e, t, n) => {
                'use strict';
                n.d(t, { IC: () => a });
                var a,
                    r = n(6483),
                    u = n.n(r),
                    s = n(6373),
                    o = n(3138),
                    i = n(2039),
                    l = n(5099),
                    c = n(7727),
                    d = n(9916),
                    m = n(6179),
                    _ = n.n(m),
                    E = n(4769),
                    g = n(8475);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(a || (a = {}));
                const p = ['__left', '__right', '__top', '__bottom'];
                (0, m.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: a = {} }, r) => {
                        const h = (0, m.useRef)(null),
                            b = (0, m.useRef)(null),
                            f = (0, m.useRef)(null),
                            v = (0, m.useState)(window.decorator && window.decorator.directionType),
                            A = v[0],
                            F = v[1],
                            C = (0, m.useCallback)(() => {
                                c.$.playClick(), o.O.view.sendEvent.close();
                            }, []),
                            D = (0, m.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            w = u()(E.Z.arrow, E.Z[`arrow${p[A]}`]);
                        (0, i.b)(
                            () => (
                                o.O.client.events.mouse.enableOutside(),
                                o.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (n ? n() : o.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const B = (0, m.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === h.current || t === f.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const a = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = o.O.client.getMouseGlobalPosition(),
                                            t = ![a.boundX, a.boundY, a.boundWidth, a.boundHeight].includes(void 0),
                                            n =
                                                e.x < a.boundX ||
                                                e.x > a.boundX + a.boundWidth ||
                                                e.y > a.boundY + a.boundHeight ||
                                                e.y < a.boundY;
                                        if (t && !n) return;
                                    }
                                    n ? n() : o.O.view.sendEvent.close('popover');
                                },
                                [h, f, n],
                            ),
                            y = (0, g.w)(),
                            k = (0, m.useCallback)(() => {
                                const e = b.current;
                                if (e)
                                    return (
                                        o.O.view.freezeTextureBeforeResize(),
                                        y.run(() => {
                                            const t = e.scrollWidth,
                                                n = e.scrollHeight;
                                            o.O.view.resize(t, n), F(window.decorator.directionType);
                                        })
                                    );
                            }, [y]);
                        return (
                            (0, m.useImperativeHandle)(r, () => ({ updateSize: k })),
                            (0, i.b)(() => {
                                o.O.view.setInputPaddingsRem(58);
                            }),
                            (0, m.useEffect)(() => {
                                document.addEventListener('mousedown', B, { capture: !0 });
                                const e = (0, l.B)((0, d.Eu)());
                                return (
                                    !t && e.promise.then(() => k()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', B);
                                    }
                                );
                            }, [k, B, t]),
                            _().createElement(
                                'div',
                                { className: E.Z.base, ref: b },
                                _().createElement(
                                    'div',
                                    { className: E.Z.decorator },
                                    _().createElement(
                                        'div',
                                        { className: E.Z.content, ref: h },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            _().createElement(
                                                s.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                _().createElement('div', {
                                                    className: E.Z.closeBtn,
                                                    onClick: C,
                                                    onMouseEnter: D,
                                                    ref: f,
                                                }),
                                            ),
                                    ),
                                    _().createElement('div', { className: w, style: a.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => l });
                var a = n(1037),
                    r = n(9916),
                    u = n(6179),
                    s = n.n(u);
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
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.contentId,
                        n = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? a.IC.Top : l,
                        d = e.targetId,
                        m = e.args,
                        _ = e.onClick,
                        E = e.children,
                        g = e.isEnabled,
                        p = void 0 === g || g,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, o);
                    const b = (0, u.useRef)(null),
                        f = (0, u.useCallback)(() => {
                            if ((0, r.wU)()) return (0, r.SW)();
                            b.current && (0, r.P3)(t, c, b.current, n, d, m);
                        }, [t, c, m, n, d]);
                    return s().createElement(
                        'div',
                        i(
                            {
                                ref: b,
                                onMouseDown:
                                    ((v = E.props.onClick),
                                    (e) => {
                                        p && (f(), _ && _(e), v && v(e));
                                    }),
                            },
                            h,
                        ),
                        E,
                    );
                    var v;
                };
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => i });
                var a = n(6179),
                    r = n.n(a),
                    u = n(2056);
                const s = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, s);
                    return r().createElement(
                        u.u,
                        o(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                };
            },
            3415: (e, t, n) => {
                'use strict';
                n.d(t, { l: () => l });
                var a = n(6179),
                    r = n.n(a),
                    u = n(7078),
                    s = n(6373),
                    o = n(2056);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: n }) => {
                    if (!t) return e;
                    const a = r().createElement('div', { className: n }, e);
                    if (t.header || t.body) return r().createElement(s.i, t, a);
                    const l = t.contentId;
                    return l ? r().createElement(o.u, i({}, t, { contentId: l }), a) : r().createElement(u.t, t, a);
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => l });
                var a = n(2056),
                    r = n(6179),
                    u = n.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            n = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, s);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, m, { body: n, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, n, l, c, m]);
                        return u().createElement(
                            a.u,
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
            2056: (e, t, n) => {
                'use strict';
                n.d(t, { u: () => l });
                var a = n(7902),
                    r = n(9916),
                    u = n(6179);
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
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const i = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onClick,
                            _ = e.ignoreShowDelay,
                            E = void 0 !== _ && _,
                            g = e.ignoreMouseClick,
                            p = void 0 !== g && g,
                            h = e.decoratorId,
                            b = void 0 === h ? 0 : h,
                            f = e.isEnabled,
                            v = void 0 === f || f,
                            A = e.targetId,
                            F = void 0 === A ? 0 : A,
                            C = e.onShow,
                            D = e.onHide,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, s);
                        const B = (0, u.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, u.useMemo)(() => F || (0, a.F)().resId, [F]),
                            k = (0, u.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (i(n, b, { isMouseEvent: !0, on: !0, arguments: o(r) }, y),
                                    C && C(),
                                    (B.current.isVisible = !0));
                            }, [n, b, r, y, C]),
                            S = (0, u.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        i(n, b, { on: !1 }, y),
                                        B.current.isVisible && D && D(),
                                        (B.current.isVisible = !1);
                                }
                            }, [n, b, y, D]),
                            x = (0, u.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, u.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, u.useEffect)(() => {
                                !1 === v && S();
                            }, [v, S]),
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return v
                            ? (0, u.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(k, E ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === p && S(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === p && S(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : t;
                        var T;
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
            8246: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => o });
                var a = n(3138);
                function r(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return u(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: n = s, context: u = 'model' } = {}) {
                    const o = new Map();
                    function i(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = o.get(t);
                                void 0 !== n && n(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const a = n(t),
                            r = u.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, r);
                    };
                    return {
                        subscribe: (n, r) => {
                            const s = 'string' == typeof r ? `${u}.${r}` : u,
                                i = a.O.view.addModelObserver(s, t, !0);
                            return o.set(i, n), e && n(l(r)), i;
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const n = l(t);
                            return (...t) => {
                                n(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, n = r(o.keys()); !(e = n()).done; ) {
                                i(e.value, t);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, n) => {
                'use strict';
                n.d(t, { q: () => i });
                var a = n(4598),
                    r = n(9174),
                    u = n(6179),
                    s = n.n(u),
                    o = n(8246);
                const i = () => (e, t) => {
                    const n = (0, u.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, u.useRef)([]),
                                _ = (n, u, s) => {
                                    var i;
                                    const l = o.U(u),
                                        c =
                                            'real' === n
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === n ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        E = e({
                                            mode: n,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const u = null != t ? t : d(e),
                                                        s = r.LO.box(u, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const u = null != t ? t : d(e),
                                                        s = r.LO.box(u, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = d(t);
                                                    if (Array.isArray(e)) {
                                                        const u = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            u[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            u
                                                        );
                                                    }
                                                    {
                                                        const u = e,
                                                            s = Object.entries(u),
                                                            o = s.reduce(
                                                                (e, [t, n]) => ((e[n] = r.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        s.forEach(([t, n]) => {
                                                                            o[n].set(e[t]);
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
                                        g = { mode: n, model: E, externalModel: c, cleanup: _ };
                                    return {
                                        model: E,
                                        controls: 'mocks' === n && s ? s.controls(g) : t(g),
                                        externalModel: c,
                                        mode: n,
                                    };
                                },
                                E = (0, u.useRef)(!1),
                                g = (0, u.useState)(i),
                                p = g[0],
                                h = g[1],
                                b = (0, u.useState)(() => _(i, l, d)),
                                f = b[0],
                                v = b[1];
                            return (
                                (0, u.useEffect)(() => {
                                    E.current ? v(_(p, l, d)) : (E.current = !0);
                                }, [d, p, l]),
                                (0, u.useEffect)(() => {
                                    h(i);
                                }, [i]),
                                (0, u.useEffect)(
                                    () => () => {
                                        f.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [f],
                                ),
                                s().createElement(n.Provider, { value: f }, c)
                            );
                        },
                        () => (0, u.useContext)(n),
                    ];
                };
            },
            7044: (e, t, n) => {
                'use strict';
                n.d(t, { f8: () => l, s_: () => u, wB: () => c, yR: () => s });
                var a = n(3649),
                    r = (n(9916), n(8613));
                const u = 1e3,
                    s = 60,
                    o = 60 * s,
                    i = 24 * o;
                Date.now(), r.Ew.getRegionalDateTime, r.Ew.getFormattedDateTime;
                function l(e = 0) {
                    let t = e;
                    const n = Math.trunc(t / i);
                    t -= n * i;
                    const a = Math.trunc(t / o);
                    t -= a * o;
                    const r = Math.trunc(t / s);
                    return (t -= r * s), { days: n, hours: a, minutes: r, seconds: t };
                }
                const c = (e, t = !0) =>
                    e.days > 7 && t
                        ? (0, a.WU)(R.strings.common.duration.days(), { days: e.days })
                        : e.days >= 1
                          ? 0 === e.hours
                              ? (0, a.WU)(R.strings.common.duration.days(), { days: e.days })
                              : `${(0, a.WU)(R.strings.common.duration.days(), { days: e.days })} ${(0, a.WU)(R.strings.common.duration.hours(), { hours: e.hours })}`
                          : e.hours >= 1
                            ? 0 === e.minutes
                                ? (0, a.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                : `${(0, a.WU)(R.strings.common.duration.hours(), { hours: e.hours })} ${(0, a.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : (0, a.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 });
            },
            527: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, { mouse: () => c, off: () => i, on: () => o, onResize: () => u, onScaleUpdated: () => s });
                var a = n(2472),
                    r = n(1176);
                const u = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, r.R)(!1);
                    }
                    const u = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const u = `mouse${t}`,
                                        s = l[t]((e) => n([e, 'outside']));
                                    function o(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(u, o),
                                        a(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(u, o),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, u, {
                        disable() {
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
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
            5959: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => s,
                        getSize: () => u,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var a = n(527),
                    r = n(2493);
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2493: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => r, G: () => a });
            },
            2472: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => u });
                var a = n(5959),
                    r = n(514);
                const u = { view: n(7641), client: a, sound: r.ZP };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => s });
                var a = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    u = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    s = { play: Object.assign({}, u, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => a });
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => r });
                var a = n(2472);
                const r = {
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
            7641: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => u.U,
                        extraSize: () => B,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => D,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => F,
                        isFocused: () => v,
                        pxToRem: () => h,
                        remToPx: () => b,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var a = n(3722),
                    r = n(6112),
                    u = n(6538),
                    s = n(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function c(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
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
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function A() {
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
                const w = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    B = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : u.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => l });
                const a = ['args'];
                const r = 2,
                    u = 16,
                    s = 32,
                    o = 64,
                    i = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, a);
                            return void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((r = u),
                                              Object.entries(r).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? r : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(u, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, n) => {
                'use strict';
                n.d(t, { jv: () => a });
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => a });
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        a = R.invalid('resId');
                    return (
                        t &&
                            ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (a = window.subViews[n].id)),
                        { caller: n, stack: t, resId: a }
                    );
                };
            },
            2344: (e, t, n) => {
                'use strict';
                n.d(t, { D9: () => u, au: () => s });
                var a = n(2790),
                    r = n(3469);
                n(2133), n(579), n(5360), n(9056);
                const u = a.Z,
                    s = r.Z;
            },
            6536: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(6179);
                const r = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3469: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => s });
                var a = n(7044),
                    r = n(6179);
                const u = () => {},
                    s = (e = 0, t, n = 0, s = u) => {
                        const o = (0, r.useState)(e),
                            i = o[0],
                            l = o[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const r = Date.now(),
                                        u = t || (e > 2 * a.yR ? a.yR : 1),
                                        o = setInterval(() => {
                                            const t = e - Math.floor((Date.now() - r) / a.s_);
                                            null !== n && t <= n ? (l(n), s && s(), clearInterval(o)) : l(t);
                                        }, u * a.s_);
                                    return () => {
                                        clearInterval(o);
                                    };
                                }
                            }, [e, t, n, s]),
                            i
                        );
                    };
            },
            5332: (e, t, n) => {
                'use strict';
                n.d(t, { N: () => u });
                var a = n(4483),
                    r = n(6179);
                function u(e, t, n, u = !1) {
                    const s = (0, r.useMemo)(() => (0, a.Z)(n, u, e), t);
                    return (0, r.useEffect)(() => s.cancel, [s]), s;
                }
            },
            2133: (e, t, n) => {
                'use strict';
                n(6179);
            },
            5360: (e, t, n) => {
                'use strict';
                n(6536);
                var a = n(9916);
                n(6179);
                a.Sw.instance;
                let r;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(r || (r = {}));
            },
            9056: (e, t, n) => {
                'use strict';
                var a = n(9916);
                n(6179);
                a.Sw.instance;
            },
            2039: (e, t, n) => {
                'use strict';
                n.d(t, { b: () => r, k: () => u });
                var a = n(6179);
                const r = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    u = (e) => {
                        (0, a.useEffect)(() => e, []);
                    };
            },
            2790: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(6179);
                const r = (e, t) => {
                    const n = (0, a.useRef)();
                    return (
                        (0, a.useEffect)(() => {
                            (t && !t(e)) || (n.current = e);
                        }, [t, e]),
                        n.current
                    );
                };
            },
            3112: (e, t, n) => {
                'use strict';
                n.d(t, { V: () => u });
                var a = n(6179),
                    r = n(3138);
                const u = () => {
                    const e = (0, a.useState)(r.O.view.getScale()),
                        t = e[0],
                        n = e[1];
                    return (
                        (0, a.useEffect)(() => {
                            const e = () => {
                                n(r.O.view.getScale());
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
                };
            },
            579: (e, t, n) => {
                'use strict';
                n(3138), n(6179);
            },
            8475: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => u });
                var a = n(6179),
                    r = n(2039);
                function u() {
                    const e = (0, a.useRef)(0);
                    return (
                        (0, r.k)(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, a.useMemo)(
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
            },
            5521: (e, t, n) => {
                'use strict';
                let a, r;
                n.d(t, { n: () => a }),
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
                    })(r || (r = {}));
            },
            9480: (e, t, n) => {
                'use strict';
                function a(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                n.d(t, { U2: () => a, UI: () => u, dF: () => o, lN: () => s });
                function r(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function u(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function s(e) {
                    if (0 !== e.length) return a(e, e.length - 1);
                }
                function o(e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        const a = r(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
            },
            5099: (e, t, n) => {
                'use strict';
                n.d(t, { B: () => a });
                const a = (e) => {
                    let t = !1;
                    return {
                        promise: new Promise((n, a) => {
                            e.then((e) => !t && n(e)).catch((e) => !t && a(e));
                        }),
                        cancel() {
                            t = !0;
                        },
                    };
                };
            },
            9690: (e, t, n) => {
                'use strict';
                n.d(t, { HG: () => s });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const u = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    s = (e) =>
                        u
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = r.length - 1; n >= 0; n--) for (; e >= r[n]; ) (t += a[n]), (e -= r[n]);
                                  return t;
                              })(e);
            },
            7727: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                n.d(t, { $: () => r, G: () => a });
                const r = {
                    playHighlight() {
                        a('highlight');
                    },
                    playClick() {
                        a('play');
                    },
                    playYes() {
                        a('yes1');
                    },
                };
            },
            3649: (e, t, n) => {
                'use strict';
                n.d(t, { BN: () => u, Eg: () => i, WU: () => r, dL: () => l, e: () => s, z4: () => o });
                n(1281);
                let a;
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function u(e) {
                    return e.replace(/-/g, '_');
                }
                function s(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                const o = (e) => e.replace(/&nbsp;/g, ' '),
                    i = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    l =
                        ((() => {
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
                        })(),
                        (e) => r(R.strings.common.percentValue(), { value: e }));
            },
            4483: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(5139);
                function r(e, t, n) {
                    return void 0 === n ? (0, a.Z)(e, t, !1) : (0, a.Z)(e, n, !1 !== t);
                }
            },
            5139: (e, t, n) => {
                'use strict';
                function a(e, t, n, a) {
                    let r,
                        u = !1,
                        s = 0;
                    function o() {
                        r && clearTimeout(r);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - s;
                        function d() {
                            (s = Date.now()), n.apply(l, i);
                        }
                        u ||
                            (a && !r && d(),
                            o(),
                            void 0 === a && c > e
                                ? d()
                                : !0 !== t &&
                                  (r = setTimeout(
                                      a
                                          ? function () {
                                                r = void 0;
                                            }
                                          : d,
                                      void 0 === a ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                        (i.cancel = function () {
                            o(), (u = !0);
                        }),
                        i
                    );
                }
                n.d(t, { Z: () => a });
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => u });
                var a = n(3138);
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
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const u = a.O.view.addModelObserver(e, n, r);
                        return (
                            u > 0
                                ? ((this._callbacks[u] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(u) : (this._views[n] = [u])))
                                : console.error("Can't add callback for model:", e),
                            u
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const u = r;
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
            9916: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Sw: () => u.Z,
                    B3: () => i,
                    Z5: () => s.Z5,
                    B0: () => o,
                    c9: () => f,
                    wU: () => C,
                    ry: () => h,
                    Eu: () => b,
                    SW: () => A,
                    P3: () => F,
                });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
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
                        const n = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
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
                const r = a;
                var u = n(1358);
                var s = n(8613);
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
                var m = n(5521),
                    _ = n(3138);
                const E = ['args'];
                function g(e, t, n, a, r, u, s) {
                    try {
                        var o = e[u](s),
                            i = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, r);
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
                                        n = arguments;
                                    return new Promise(function (a, r) {
                                        var u = e.apply(t, n);
                                        function s(e) {
                                            g(u, a, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(u, a, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    f = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, E);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, u, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, u));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    v = () => f(o.CLOSE),
                    A = () => f(o.POP_OVER, { on: !1 }),
                    F = (e, t, n, a, r = R.invalid('resId'), u) => {
                        const s = _.O.view.getViewGlobalPosition(),
                            i = n.getBoundingClientRect(),
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
                        f(o.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: p(E),
                            on: !0,
                            args: u,
                        });
                    },
                    C = () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                    D = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var w = n(7572);
                const B = r.instance,
                    y = {
                        DataTracker: u.Z,
                        ViewModel: w.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => f(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: A,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            f(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: F,
                        addEscapeListener: (e) => {
                            const t = (t) => D(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, v);
                        },
                        handleViewEvent: f,
                        onBindingsReady: h,
                        onLayoutReady: b,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: C,
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const r = Object.prototype.toString.call(t[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < r.length; t++) n[a].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Ew: () => u, Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    },
                    u = {
                        getRegionalDateTime: (e, t, n = !0) => regionalDateTime.getRegionalDateTime(e, t, n),
                        getFormattedDateTime: (e, t, n = !0) => regionalDateTime.getFormattedDateTime(e, t, n),
                    };
            },
            1614: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => Aa,
                        Bar: () => ba,
                        DefaultScroll: () => va,
                        Direction: () => na,
                        defaultSettings: () => aa,
                        useHorizontalScrollApi: () => ua,
                    });
                var r = {};
                n.r(r), n.d(r, { Area: () => Wa, Bar: () => Oa, Default: () => Pa, useVerticalScrollApi: () => Fa });
                var u = n(6179),
                    s = n.n(u);
                const o = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var i = n(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, t, n) {
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
                        })(e, n),
                        r = (function (e, t) {
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
                        })(t, n),
                        u = Math.min(a, r);
                    return {
                        extraLarge: u === n.extraLarge.weight,
                        large: u === n.large.weight,
                        medium: u === n.medium.weight,
                        small: u === n.small.weight,
                        extraSmall: u === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: r === n.extraLarge.weight,
                        largeHeight: r === n.large.weight,
                        mediumHeight: r === n.medium.weight,
                        smallHeight: r === n.small.weight,
                        extraSmallHeight: r === n.extraSmall.weight,
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
                    p = (0, u.createContext)(g),
                    h = ['children'];
                const b = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, h);
                    const a = (0, u.useContext)(p),
                        r = a.extraLarge,
                        s = a.large,
                        i = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        d = a.extraLargeWidth,
                        m = a.largeWidth,
                        _ = a.mediumWidth,
                        E = a.smallWidth,
                        g = a.extraSmallWidth,
                        b = a.extraLargeHeight,
                        f = a.largeHeight,
                        v = a.mediumHeight,
                        A = a.smallHeight,
                        F = a.extraSmallHeight,
                        C = { extraLarge: b, large: f, medium: v, small: A, extraSmall: F };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && r) return t;
                        if (n.large && s) return t;
                        if (n.medium && i) return t;
                        if (n.small && l) return t;
                        if (n.extraSmall && c) return t;
                    } else {
                        if (n.extraLargeWidth && d) return o(t, n, C);
                        if (n.largeWidth && m) return o(t, n, C);
                        if (n.mediumWidth && _) return o(t, n, C);
                        if (n.smallWidth && E) return o(t, n, C);
                        if (n.extraSmallWidth && g) return o(t, n, C);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && b) return t;
                            if (n.largeHeight && f) return t;
                            if (n.mediumHeight && v) return t;
                            if (n.smallHeight && A) return t;
                            if (n.extraSmallHeight && F) return t;
                        }
                    }
                    return null;
                };
                b.defaultProps = {
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
                (0, u.memo)(b);
                var f = n(6536);
                const v = ({ children: e }) => {
                    const t = (0, u.useContext)(p),
                        n = (0, u.useState)(t),
                        a = n[0],
                        r = n[1],
                        o = (0, u.useCallback)((e, t) => {
                            const n = i.O.view.pxToRem(e),
                                a = i.O.view.pxToRem(t);
                            r(Object.assign({ width: n, height: a }, d(n, a, l)));
                        }, []),
                        c = (0, u.useCallback)(() => {
                            const e = i.O.client.getSize('px');
                            o(e.width, e.height);
                        }, [o]);
                    (0, f.Z)(() => {
                        i.O.client.events.on('clientResized', o), i.O.client.events.on('self.onScaleUpdated', c);
                    }),
                        (0, u.useEffect)(
                            () => () => {
                                i.O.client.events.off('clientResized', o),
                                    i.O.client.events.off('self.onScaleUpdated', c);
                            },
                            [o, c],
                        );
                    const m = (0, u.useMemo)(() => Object.assign({}, a), [a]);
                    return s().createElement(p.Provider, { value: m }, e);
                };
                var A = n(6483),
                    F = n.n(A),
                    C = n(926),
                    D = n.n(C);
                let w, B, y;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(w || (w = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(B || (B = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(y || (y = {}));
                const k = () => {
                        const e = (0, u.useContext)(p),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return w.ExtraLarge;
                                    case e.large:
                                        return w.Large;
                                    case e.medium:
                                        return w.Medium;
                                    case e.small:
                                        return w.Small;
                                    case e.extraSmall:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return B.ExtraLarge;
                                    case e.largeWidth:
                                        return B.Large;
                                    case e.mediumWidth:
                                        return B.Medium;
                                    case e.smallWidth:
                                        return B.Small;
                                    case e.extraSmallWidth:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
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
                        return { mediaSize: a, mediaWidth: r, mediaHeight: s, remScreenWidth: t, remScreenHeight: n };
                    },
                    S = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const T = {
                        [B.ExtraSmall]: '',
                        [B.Small]: D().SMALL_WIDTH,
                        [B.Medium]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH}`,
                        [B.Large]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH} ${D().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [y.ExtraSmall]: '',
                        [y.Small]: D().SMALL_HEIGHT,
                        [y.Medium]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT}`,
                        [y.Large]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT} ${D().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [w.ExtraSmall]: '',
                        [w.Small]: D().SMALL,
                        [w.Medium]: `${D().SMALL} ${D().MEDIUM}`,
                        [w.Large]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE}`,
                        [w.ExtraLarge]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE} ${D().EXTRA_LARGE}`,
                    },
                    I = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, S);
                        const r = k(),
                            u = r.mediaWidth,
                            o = r.mediaHeight,
                            i = r.mediaSize;
                        return s().createElement('div', x({ className: F()(n, T[u], N[o], L[i]) }, a), t);
                    },
                    O = ['children'];
                const M = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, O);
                    return s().createElement(v, null, s().createElement(I, n, t));
                };
                var P = n(493),
                    W = n.n(P),
                    H = n(1037),
                    j = n(5521),
                    $ = n(9916);
                const z = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function G(e = j.n.NONE, t = z, n = !1, a = !1) {
                    (0, u.useEffect)(() => {
                        if (e !== j.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                var U = n(3403),
                    V = n(5801),
                    Z = n(3880),
                    q = n(3215),
                    Y = n(9480),
                    K = n(3946);
                const X = (e) => ({ tankmanID: e }),
                    Q = (e) => ({ recruitID: e }),
                    J = (0, q.q)()(
                        ({ observableModel: e }) => {
                            const t = e.primitives([
                                    'isBerthsOnSale',
                                    'hasFilters',
                                    'itemsAmount',
                                    'itemsOffset',
                                    'isBannerVisible',
                                ]),
                                n = e.array('tankmanList'),
                                a = (0, K.Om)((e) => {
                                    const a = e - t.itemsOffset.get(),
                                        r = n.get();
                                    if (a >= 0 && a < r.length) return Y.U2(r, a);
                                });
                            return Object.assign({ tankmanList: n, berthsAmount: e.object('berthsAmount') }, t, {
                                computes: { getItem: a },
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
                var ne = n(2106),
                    ae = n(3457),
                    re = n(6373),
                    ue = n(8018);
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
                        buttonType: t = ae.L$.secondary,
                        tooltipArgs: n = ue.Xd,
                        isBtnDisabled: a = !1,
                        className: r,
                        onClick: u,
                        children: o,
                    }) {
                        return s().createElement(
                            'div',
                            { className: F()(ce, r) },
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
                                            re.i,
                                            n,
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(
                                                    ae.u5,
                                                    {
                                                        size: ae.qE.small,
                                                        type: t,
                                                        disabled: a,
                                                        onClick: u,
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
                var pe = n(7078);
                let he, be, fe, ve, Ae;
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
                    })(be || (be = {})),
                    (function (e) {
                        (e.Tankman = 'tankman'), (e.Recruit = 'recruit'), (e.Dismissed = 'dismissed');
                    })(fe || (fe = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled');
                    })(ve || (ve = {})),
                    (function (e) {
                        (e.IsLockCrew = 'isLockCrew'), (e.TankmanHasRole = 'tankmanHasRole');
                    })(Ae || (Ae = {}));
                var Fe = n(9690),
                    Ce = n(3649);
                const De = (e, t) => e.split(',').includes(t),
                    we = {
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
                let Be, ye;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(Be || (Be = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(ye || (ye = {}));
                const ke = ({
                    isElite: e,
                    vehicleName: t,
                    vehicleShortName: n,
                    vehicleType: a,
                    vehicleLvl: r,
                    tags: u = '',
                    size: o = Be.extraSmall,
                    type: i = ye.colored,
                    className: l,
                    classNames: c,
                    isShortName: d = !1,
                }) => {
                    const m = `${(0, Ce.BN)(a)}${e ? '_elite' : ''}`,
                        _ = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                    return s().createElement(
                        'div',
                        {
                            className: F()(
                                we.base,
                                we[`base__size${(0, Ce.e)(o)}`],
                                we[`base__type${(0, Ce.e)(i)}`],
                                l,
                            ),
                        },
                        s().createElement(
                            'div',
                            { className: F()(we.level, null == c ? void 0 : c.level) },
                            (0, Fe.HG)(r),
                        ),
                        s().createElement('div', {
                            className: F()(
                                we.type,
                                e && we[`type__elite${(0, Ce.e)(o)}`],
                                we[`type__${o}`],
                                null == c ? void 0 : c.typeIcon,
                            ),
                            style: a ? { backgroundImage: `url(${_})` } : void 0,
                        }),
                        De(u, 'premiumIGR') && s().createElement('div', { className: we.premiumIGR }),
                        s().createElement('div', { className: F()(we.name, null == c ? void 0 : c.name) }, d ? n : t),
                    );
                };
                var Se = n(771);
                const xe = {
                    base: 'EfficiencyIndicator_base_34',
                    base__big: 'EfficiencyIndicator_base__big_a1',
                    base__large: 'EfficiencyIndicator_base__large_dc',
                    base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
                let Te;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large');
                })(Te || (Te = {}));
                const Ne = (0, u.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: t = Se.y$,
                        className: n,
                        targetId: a = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: r = Te.Normal,
                    }) => {
                        const u = e === Se.sU,
                            o = u
                                ? { tooltipId: 'crewSkillUntrained' }
                                : { tooltipId: 'skillsEfficiency', skillEfficiency: e, tankmanID: t };
                        return s().createElement(
                            pe.t,
                            { targetId: a, args: o, isEnabled: t !== Se.y$ },
                            s().createElement(
                                'div',
                                { className: F()(xe.base, xe[`base__${r}`], u && xe.base__untrained, n) },
                                u
                                    ? s().createElement('div', { className: xe.icon })
                                    : s().createElement(
                                          'div',
                                          { className: F()(xe.percent, e === Se.yb && xe.percent__full) },
                                          (0, Ce.dL)($.Z5.getNumberFormat(100 * e, $.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                );
                var Le = n(7030);
                const Ie = s().memo(function ({ blinkStyle: e, isEnabled: t, children: n }) {
                    return s().createElement(Le.animated.div, { style: t && e ? e : void 0 }, n);
                });
                var Re = n(2344);
                const Oe = (e, t) => {
                        const n = [];
                        for (let a = 0; a < e; a++) n.push(t(a));
                        return n;
                    },
                    Me = 'AcceleratedTrainingIcon_base_4f',
                    Pe = 'AcceleratedTrainingIcon_icon_45',
                    We = (0, u.memo)(({ classMix: e, targetId: t }) =>
                        s().createElement(
                            re.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                                targetId: t,
                            },
                            s().createElement(
                                'div',
                                { className: F()(Me, e) },
                                s().createElement('div', { className: Pe }),
                            ),
                        ),
                    );
                let He, je, $e, ze, Ge, Ue, Ve;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Default = 'default'),
                        (e.Overlap = 'overlap'),
                        (e.ExtraOverlap = 'extraOverlap');
                })(He || (He = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp');
                    })(je || (je = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.NoMargins = 'noMargins'),
                            (e.ReducedMargins = 'reducedMargins'),
                            (e.OnlyLearningOverlap = 'onlyLearningOverlap'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap'),
                            (e.ExtraOverlapWithLevel = 'extraOverlapWithLevel'),
                            (e.ExtraOverlapWithEfficiency = 'extraOverlapWithEfficiency'),
                            (e.ExtraOverlapWithLevelAndEfficiency = 'extraOverlapWithLevelAndEfficiency');
                    })($e || ($e = {})),
                    (function (e) {
                        (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                    })(ze || (ze = {})),
                    (function (e) {
                        (e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44');
                    })(Ge || (Ge = {})),
                    (function (e) {
                        (e.Major = 'major'), (e.Bonus = 'bonus');
                    })(Ue || (Ue = {})),
                    (function (e) {
                        (e.Learned = 'learned'), (e.Learning = 'learning');
                    })(Ve || (Ve = {}));
                const Ze = (e) => (e.level < Se.I ? Ve.Learning : Ve.Learned),
                    qe = (e) => Y.dF(e, (e) => e.level === Se.I),
                    Ye = ({ name: e, level: t, customName: n, skillType: a, skillIndex: r, tooltipData: u }) => {
                        const s = { targetId: u.targetId, isEnabled: u.isEnabled };
                        return e === Se.jw
                            ? a === Ue.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: u.tankmanID, skillIndex: r }, u.args),
                                      },
                                      s,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      s,
                                  )
                            : Object.assign(
                                  {
                                      contentId:
                                          R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                              'resId',
                                          ),
                                      args: Object.assign(
                                          {
                                              tooltipId: 'crewPerkGf',
                                              tankmanID: u.tankmanID,
                                              skillName: e,
                                              isBonus: a === Ue.Bonus,
                                              level: t,
                                              customName: n,
                                          },
                                          u.args,
                                      ),
                                  },
                                  s,
                              );
                    },
                    Ke = (e, t) => (e === Ge.c44x44 ? Te.Large : t ? Te.Big : Te.Normal),
                    Xe = (e, t) => {
                        const n = Y.U2(e, t);
                        return null == n ? void 0 : n.name;
                    },
                    Qe = (e, t) => {
                        const n = Y.U2(e, t);
                        return null == n ? void 0 : n.level;
                    },
                    Je = 33,
                    et = 0,
                    tt = !0,
                    nt = 'play';
                const at = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const ut = (0, u.memo)(function (e) {
                        let t = e.width,
                            n = e.height,
                            a = e.getImageSource,
                            r = e.frameCount,
                            o = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? Je : i,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? et : c,
                            m = e.lastFrameIndex,
                            _ = void 0 === m ? r - 1 : m,
                            E = e.loop,
                            g = void 0 === E ? tt : E,
                            p = e.state,
                            h = void 0 === p ? nt : p,
                            b = e.onAnimationDone,
                            f = e.onAnimationComplete,
                            v = e.poster,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, at);
                        const F = (0, u.useRef)(null);
                        return (
                            (0, u.useEffect)(() => {
                                const e = F.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    n = (n) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(n.img, -n.x, -n.y);
                                    };
                                switch (h) {
                                    case 'play':
                                        return (function () {
                                            const e = it(d, _, a),
                                                t = st(d, _),
                                                r = window.setInterval(() => {
                                                    const a = t(),
                                                        u = e.get(a);
                                                    u
                                                        ? (null == o || o(a, u),
                                                          n(u),
                                                          a === _ &&
                                                              (null == f || f(),
                                                              g || (null == b || b(), window.clearInterval(r))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(r);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && v ? { path: v, x: 0, y: 0 } : a(d),
                                                t = new Image();
                                            t.src = e.path;
                                            const r = () => n(ot(e, t));
                                            return (
                                                t.addEventListener('load', r), () => t.removeEventListener('load', r)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, a, d, _, g, o, f, b, v, h]),
                            s().createElement('canvas', rt({}, A, { width: t, height: n, ref: F }))
                        );
                    }),
                    st = (e, t) => {
                        let n = e;
                        return () => {
                            const a = n;
                            return (n += 1), n > t && (n = e), a;
                        };
                    },
                    ot = (e, t) => Object.assign({}, e, { img: t }),
                    it = (e, t, n) => {
                        const a = new Map(),
                            r = {};
                        for (let u = e; u <= t; u++) {
                            const e = n(u),
                                t = r[e.path];
                            if (t) a.set(u, ot(e, t));
                            else {
                                const t = new Image();
                                (r[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${u})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(u, ot(e, t));
                            }
                        }
                        return a;
                    };
                function lt(e) {
                    const t = e.chunk,
                        n = t.rows * t.columns;
                    return (a) => {
                        const r = a % n,
                            u = (r % t.columns) * e.width,
                            s = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / n)), x: u, y: s };
                    };
                }
                function ct(e) {
                    return (t) => `${e}${t}`;
                }
                var dt = n(3112);
                const mt = [
                    'width',
                    'height',
                    'getSrcByFrame',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'loop',
                    'state',
                    'onAnimationComplete',
                    'revers',
                ];
                function _t() {
                    return (
                        (_t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        _t.apply(this, arguments)
                    );
                }
                let Et;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(Et || (Et = {}));
                const gt = (e, t, n) => {
                        const a = new Image();
                        (a.src = n(t)), e.push(a);
                    },
                    pt =
                        ((0, u.memo)((e) => {
                            let t = e.width,
                                n = e.height,
                                a = e.getSrcByFrame,
                                r = e.frameCount,
                                o = e.onAnimate,
                                i = void 0 === o ? () => {} : o,
                                l = e.frameTime,
                                c = void 0 === l ? 33 : l,
                                d = e.initialFrameIndex,
                                m = void 0 === d ? 0 : d,
                                _ = e.loop,
                                E = void 0 === _ || _,
                                g = e.state,
                                p = void 0 === g ? Et.Play : g,
                                h = e.onAnimationComplete,
                                b = void 0 === h ? () => {} : h,
                                f = e.revers,
                                v = void 0 !== f && f,
                                A = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(e, mt);
                            const F = (0, u.useRef)(null);
                            return (
                                (0, u.useEffect)(() => {
                                    const e = F.current;
                                    if (!e) return;
                                    const u = r - 1,
                                        s = e.getContext('2d'),
                                        o = (a) => {
                                            s.clearRect(0, 0, e.width, e.height), s.drawImage(a, 0, 0, t, n);
                                        };
                                    if ('stop' === p) {
                                        const e = a(0),
                                            t = new Image();
                                        t.src = e;
                                        const n = () => o(t);
                                        return t.addEventListener('load', n), () => t.removeEventListener('load', n);
                                    }
                                    const l = ((e, t, n) => {
                                            const a = [];
                                            if (n) for (let n = e; n >= 0; n--) gt(a, n, t);
                                            else for (let n = 0; n < e; n++) gt(a, n, t);
                                            return a;
                                        })(r, a, v),
                                        d = ((e, t = 0) => {
                                            let n = t;
                                            return () => {
                                                const t = n;
                                                return (n += 1), n > e && (n = 0), t;
                                            };
                                        })(u, m),
                                        _ = setInterval(() => {
                                            const e = d(),
                                                t = l[e];
                                            o(l[e]), i(e, t), e === u && (b(), E || clearInterval(_));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [r, c, a, n, m, E, i, b, p, t, v]),
                                s().createElement('canvas', _t({}, A, { width: t, height: n, ref: F }))
                            );
                        }),
                        (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2)),
                    ht = (e) => -(Math.cos(Math.PI * e) - 1) / 2,
                    bt = {
                        base: 'AnimatedLostSkill_base_55',
                        base__c_24x24: 'AnimatedLostSkill_base__c_24x24_d5',
                        base__c_44x44: 'AnimatedLostSkill_base__c_44x44_72',
                        icon: 'AnimatedLostSkill_icon_d4',
                    },
                    ft = s().memo(function ({ type: e, index: t, totalAmount: n, className: a, size: r }) {
                        const o = (0, u.useState)(Et.Stop),
                            l = o[0],
                            c = o[1],
                            d = (0, dt.V)(),
                            m =
                                r === Ge.c44x44
                                    ? ((e) => ({
                                          width: 96,
                                          height: 96,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 2, columns: 21 },
                                          getChunkPath: ct(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_big_${e}_`,
                                          ),
                                      }))(e)
                                    : ((e) => ({
                                          width: 64,
                                          height: 64,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 1, columns: 24 },
                                          getChunkPath: ct(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_small_${e}_`,
                                          ),
                                      }))(e),
                            _ = lt(m),
                            E = r === Ge.c44x44 ? 60 : 36,
                            g = (0, Le.useSpring)(
                                () => ({
                                    from: { x: 0 },
                                    to: { x: i.O.view.remToPx(E) },
                                    config: { duration: 300, easing: pt },
                                    delay: 600 - 100 * t,
                                }),
                                [t, E, d],
                            )[0];
                        return (
                            (0, u.useEffect)(() => {
                                const e = setTimeout(() => c(Et.Play), 100 * (n - 1) - 100 * t);
                                return () => clearTimeout(e);
                            }, [t, n]),
                            s().createElement(
                                re.i,
                                { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                                s().createElement(
                                    Le.animated.div,
                                    { style: g, className: F()(bt.base, bt[`base__${r}`], a) },
                                    s().createElement(
                                        'div',
                                        { className: bt.icon },
                                        s().createElement(ut, {
                                            width: m.width,
                                            height: m.height,
                                            frameCount: m.frameCount,
                                            getImageSource: _,
                                            loop: !1,
                                            state: l,
                                            style: { transform: `scale(${d})` },
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    vt = 'AnimatedNewSkill_base_0f';
                function At(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ft(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Ft(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ft(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const Ct = new Map();
                let Dt = null;
                const wt = () => {
                        Ct.size
                            ? Dt ||
                              (Dt = window.setInterval(() => {
                                  for (var e, t = At(Ct.values()); !(e = t()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : Dt && (clearInterval(Dt), (Dt = null));
                    },
                    Bt = ({ type: e, state: t }) => {
                        const n = ((e, t) => ({
                                width: 24,
                                height: 24,
                                frameCount: 42,
                                chunk: { count: 1, columns: 42, rows: 1 },
                                getChunkPath: ct(`R.images.gui.maps.icons.sequence.new_skill.${e}_${t}_`),
                            }))(e, t),
                            a = lt(n),
                            r = (0, u.useState)(Et.Stop),
                            o = r[0],
                            i = r[1];
                        return (
                            (0, u.useEffect)(() => {
                                const e = () => {
                                    i(Et.Play);
                                };
                                var t;
                                return (
                                    (t = e),
                                    Ct.set(t, t),
                                    wt(),
                                    () =>
                                        ((e) => {
                                            Ct.delete(e), wt();
                                        })(e)
                                );
                            }, []),
                            s().createElement(ut, {
                                width: n.width,
                                height: n.height,
                                frameCount: n.frameCount,
                                getImageSource: a,
                                loop: !1,
                                state: o,
                                onAnimationDone: () => {
                                    i(Et.Stop);
                                },
                                className: vt,
                            })
                        );
                    },
                    yt = ({ size: e, children: t, className: n }) => {
                        const a = (0, dt.V)(),
                            r = e === Ge.c44x44 ? 48 : 26,
                            u = (0, Le.useSpring)({
                                from: { opacity: 0, marginRight: -r * a },
                                to: [{ marginRight: 0 }, { opacity: 1 }],
                                config: { duration: 400, easing: ht },
                                delay: 800,
                            });
                        return s().createElement(Le.animated.div, { style: u, className: n }, t);
                    },
                    kt = s().memo(function ({ isEnabled: e, className: t, children: n }) {
                        const a = (0, Le.useSpring)(() => ({ from: { scale: 1 } })),
                            r = a[0],
                            o = a[1];
                        return (
                            (0, u.useEffect)(() => {
                                e &&
                                    o.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: ht },
                                    });
                            }, [e, o]),
                            s().createElement(Le.animated.div, { style: e ? r : void 0, className: t }, n)
                        );
                    });
                let St;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale');
                })(St || (St = {}));
                const xt = s().memo(function ({
                        size: e,
                        skillsSignature: t,
                        animationType: n,
                        className: a,
                        children: r,
                    }) {
                        return n === St.Scale
                            ? s().createElement(kt, { isEnabled: !0, className: a }, r)
                            : n === St.FadeIn
                              ? s().createElement(yt, { size: e, key: t, className: a }, r)
                              : s().createElement('div', { className: a }, r);
                    }),
                    Tt = s().memo(function ({ size: e, className: t, children: n }) {
                        const a = e === Ge.c44x44 ? 48 : 26,
                            r = (0, dt.V)(),
                            u = (0, Le.useSpring)(
                                () => ({
                                    from: { opacity: 1, marginRight: 0 },
                                    to: [{ opacity: 0 }, { marginRight: -a * r }],
                                    config: { duration: 400, easing: ht },
                                }),
                                [r, a],
                            )[0];
                        return s().createElement(Le.animated.div, { style: u, className: t }, n);
                    });
                var Nt = n(3415);
                const Lt = ['className', 'children'];
                const It = (e) => {
                        let t = e.className,
                            n = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Lt);
                        return s().createElement(Nt.l, { tooltipArgs: Ye(a), className: t }, n);
                    },
                    Rt = {
                        base: 'SkillIcon_base_43',
                        base__c_22x22: 'SkillIcon_base__c_22x22_14',
                        base__medium: 'SkillIcon_base__medium_d0',
                        base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                        base__big: 'SkillIcon_base__big_ae',
                        base__c_80x80: 'SkillIcon_base__c_80x80_79',
                        base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                        base__dialogs: 'SkillIcon_base__dialogs_e5',
                    };
                let Ot;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(Ot || (Ot = {}));
                const Mt = s().memo(function ({ iconName: e, size: t = Ot.c24x24, className: n }) {
                        var a;
                        const r = null == (a = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : a.$dyn(e);
                        return s().createElement('div', {
                            style: null !== r ? { backgroundImage: `url(${r})` } : void 0,
                            className: F()(Rt.base, Rt[`base__${t}`], n),
                        });
                    }),
                    Pt = {
                        base: 'Skill_base_1f',
                        base__c_24x24: 'Skill_base__c_24x24_29',
                        base__c_44x44: 'Skill_base__c_44x44_5a',
                        background: 'Skill_background_02',
                        base__borderLightYellow: 'Skill_base__borderLightYellow_09',
                        base__borderYellow: 'Skill_base__borderYellow_3e',
                        base__borderRed: 'Skill_base__borderRed_d2',
                        base__typeBonus: 'Skill_base__typeBonus_23',
                        base__disabled: 'Skill_base__disabled_85',
                        newSkillHighLight: 'Skill_newSkillHighLight_44',
                        icon: 'Skill_icon_b0',
                        disabledOverlay: 'Skill_disabledOverlay_3b',
                    },
                    Wt = { [Ge.c24x24]: Ot.c22x22, [Ge.c44x44]: Ot.c52x52 },
                    Ht = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: n,
                        type: a,
                        icon: r,
                        name: u,
                        skillState: o,
                        hasInstruction: i,
                        className: l,
                    }) => {
                        const c = ((e, t, n, a, r = ue.H$.Normal) =>
                                e === Se.jw
                                    ? ze.LightYellow
                                    : r === ue.H$.Untrained || a
                                      ? t === Ve.Learning
                                          ? ze.Yellow
                                          : ze.Grey
                                      : r === ue.H$.Low
                                        ? n
                                            ? ze.Grey
                                            : ze.Red
                                        : t === Ve.Learning
                                          ? ze.Yellow
                                          : ze.Grey)(u, o, i, t, n),
                            d = (!i && n === ue.H$.Untrained) || t,
                            m = r === Se.jw;
                        return s().createElement(
                            'div',
                            {
                                className: F()(
                                    Pt.base,
                                    Pt[`base__type${(0, Ce.e)(a)}`],
                                    Pt[`base__state${(0, Ce.e)(o)}`],
                                    Pt[`base__border${(0, Ce.e)(c)}`],
                                    Pt[`base__${e}`],
                                    d && Pt.base__disabled,
                                    l,
                                ),
                            },
                            s().createElement('div', {
                                className: Pt.background,
                                style:
                                    a === Ue.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${c}')`,
                                          }
                                        : void 0,
                            }),
                            m && o === Ve.Learned && s().createElement('div', { className: Pt.newSkillHighLight }),
                            s().createElement(Mt, { iconName: r, size: Wt[e], className: Pt.icon }),
                            d && s().createElement('div', { className: Pt.disabledOverlay }),
                        );
                    };
                function jt() {
                    return (
                        (jt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        jt.apply(this, arguments)
                    );
                }
                const $t = (e, t) => (e ? St.Scale : t ? St.FadeIn : St.None),
                    zt = ({
                        index: e,
                        skill: t,
                        previousSkill: n,
                        skillState: a,
                        skillType: r,
                        size: u,
                        efficiencyState: o,
                        tooltipData: i,
                        skillsSignature: l,
                        blinkStyle: c,
                        isNewSkillAnimated: d = !1,
                        skillAnimationType: m = je.None,
                        className: _,
                    }) => {
                        const E = m === je.Blink || m === je.SlideOutAndBlink,
                            g = m === je.SlideOutAndBlink || m === je.SlideOut,
                            p = m === je.FadeIn,
                            h = {
                                skillIndex: e,
                                name: t.name,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: i,
                                skillType: r,
                            };
                        return d && t.name === Se.jw && u === Ge.c24x24
                            ? s().createElement(
                                  It,
                                  jt({}, h, { className: _ }),
                                  s().createElement(Bt, { type: r, state: a }),
                              )
                            : s().createElement(
                                  s().Fragment,
                                  null,
                                  n &&
                                      g &&
                                      s().createElement(
                                          Tt,
                                          { size: u, className: _, key: n.name },
                                          s().createElement(
                                              Ie,
                                              { blinkStyle: c, isEnabled: E },
                                              s().createElement(
                                                  Ht,
                                                  jt({ size: u, type: r, efficiencyState: o, skillState: a }, n),
                                              ),
                                          ),
                                      ),
                                  s().createElement(
                                      xt,
                                      {
                                          size: u,
                                          skillsSignature: l,
                                          className: _,
                                          animationType: $t(m === je.ScaleUp, p),
                                      },
                                      s().createElement(
                                          It,
                                          h,
                                          s().createElement(
                                              Ie,
                                              { blinkStyle: c, isEnabled: E },
                                              s().createElement(
                                                  Ht,
                                                  jt({ size: u, type: r, efficiencyState: o, skillState: a }, t),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    },
                    Gt = {
                        base: 'LostLevelAnimation_base_f6',
                        level: 'LostLevelAnimation_level_f0',
                        level__skillLost: 'LostLevelAnimation_level__skillLost_a2',
                        level__skillBlur: 'LostLevelAnimation_level__skillBlur_24',
                        base__c_24x24: 'LostLevelAnimation_base__c_24x24_1c',
                        base__c_44x44: 'LostLevelAnimation_base__c_44x44_44',
                    },
                    Ut = s().memo(function ({ size: e, level: t, withSlideOut: n = !0 }) {
                        const a = (0, Le.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                            r = (0, Le.useSpring)(() => ({
                                from: { x: i.O.view.remToPx(-5), opacity: 0 },
                                to: { x: 0, opacity: 1 },
                                config: { duration: 300, easing: pt },
                                delay: 700,
                            }))[0],
                            u = (0, Le.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [{ opacity: 1 }, { opacity: 0 }],
                                    config: { duration: 150, easing: pt },
                                }),
                                [t],
                            )[0];
                        return s().createElement(
                            'div',
                            { className: F()(Gt.base, Gt[`base__${e}`]) },
                            s().createElement(
                                Le.animated.div,
                                { style: n ? r : void 0, className: F()(Gt.level, Gt.level__skillLost) },
                                a.val.to((e) => (0, Ce.dL)(Math.floor(e))),
                            ),
                            s().createElement(
                                Le.animated.div,
                                {
                                    style: n ? Object.assign({}, r, u) : u,
                                    className: F()(Gt.level, Gt.level__skillBlur),
                                },
                                a.val.to((e) => (0, Ce.dL)(Math.floor(e))),
                            ),
                        );
                    }),
                    Vt = 'SkillLevel_base_d2',
                    Zt = 'SkillLevel_base__highlighted_e3',
                    qt = ({ skillLevel: e, isHighlighted: t = !1, className: n }) =>
                        s().createElement(
                            'div',
                            { className: F()(Vt, t && Zt, n) },
                            (0, Ce.dL)(
                                e > 0 && e < 0.01
                                    ? 0.01
                                    : ((e, t = 2) => {
                                          const n = Math.pow(10, t);
                                          return e % 1 > 0 ? Math.round(e * n) / n : e;
                                      })(e),
                            ),
                        ),
                    Yt = ({
                        skillsAmountDiff: e,
                        size: t,
                        skillType: n,
                        wasLearned: a,
                        isAllMajorSkillsLearned: r,
                        skill: u,
                        possibleSkill: o,
                        blinkStyle: i,
                        className: l,
                    }) => {
                        const c = o || u,
                            d = void 0 !== u && void 0 !== o ? o.level - u.level : 0,
                            m = e > 0,
                            _ = e < 0 || d > 0;
                        return !c ||
                            (c.level === Se.I && 0 === d) ||
                            ((null == o ? void 0 : o.level) === Se.I && n === Ue.Bonus && d > 0 && !r)
                            ? null
                            : m || (d < 0 && 0 === e)
                              ? s().createElement(Ut, { size: t, level: c.level, withSlideOut: m })
                              : s().createElement(
                                    kt,
                                    { isEnabled: Boolean(a) },
                                    s().createElement(
                                        Ie,
                                        { blinkStyle: i, isEnabled: _ },
                                        s().createElement(qt, { skillLevel: c.level, isHighlighted: _, className: l }),
                                    ),
                                );
                    },
                    Kt = {
                        base: 'Row_base_bb',
                        skill: 'Row_skill_fb',
                        base__c_44x44: 'Row_base__c_44x44_4f',
                        base__c_24x24: 'Row_base__c_24x24_16',
                        base__collapseNoMargins: 'Row_base__collapseNoMargins_13',
                        base__collapseOverlap: 'Row_base__collapseOverlap_2c',
                        base__collapseReducedMargins: 'Row_base__collapseReducedMargins_3b',
                        skill__last: 'Row_skill__last_0a',
                        skill__lastLearnedSkill: 'Row_skill__lastLearnedSkill_6c',
                        base__collapseOnlyLearningOverlap: 'Row_base__collapseOnlyLearningOverlap_19',
                        skill__stateLearning: 'Row_skill__stateLearning_5d',
                        base__collapseExtraOverlap: 'Row_base__collapseExtraOverlap_10',
                        base__collapseExtraOverlapWithLevel: 'Row_base__collapseExtraOverlapWithLevel_90',
                        base__collapseExtraOverlapWithEfficiency: 'Row_base__collapseExtraOverlapWithEfficiency_90',
                        base__collapseExtraOverlapWithLevelAndEfficiency:
                            'Row_base__collapseExtraOverlapWithLevelAndEfficiency_4e',
                        level: 'Row_level_56',
                        acceleratedTrainingIcon: 'Row_acceleratedTrainingIcon_c7',
                        lostSkill: 'Row_lostSkill_32',
                    },
                    Xt = ({
                        skills: e,
                        skillType: t = Ue.Major,
                        possibleSkills: n,
                        isAcceleratedTrainingVisible: a = !1,
                        collapseLayout: r = $e.None,
                        efficiencyState: u,
                        size: o,
                        tooltipData: i,
                        blinkStyle: l,
                        isSkillsEfficiencyLearning: c = !1,
                        isAllMajorSkillsLearned: d = !1,
                        isNewSkillAnimated: m = !1,
                        className: _,
                    }) => {
                        const E = void 0 === n ? e : n,
                            g = (0, Re.D9)(e),
                            p = (0, Re.D9)(E),
                            h = g && Y.lN(g),
                            b = Y.lN(e),
                            f = qe(E),
                            v = Y.lN(E),
                            A = n ? e.length - n.length : 0,
                            C = u !== ue.H$.Low || c,
                            D = ((e) => Y.UI(e, (e) => e.name).join())(E);
                        return s().createElement(
                            'div',
                            { className: F()(Kt.base, Kt[`base__${o}`], Kt[`base__collapse${(0, Ce.e)(r)}`], _) },
                            ((e, t, n, a, r) => {
                                if (!a || !t) return Y.UI(n, (e, t) => r(e, je.None, t));
                                const u = new Map(Y.UI(t, ({ name: e, level: t }) => [e, t])),
                                    s = new Map(Y.UI(e, ({ name: e, level: t }) => [e, t]));
                                let o = !1;
                                return Y.UI(n, (i, l) => {
                                    const c = i.name,
                                        d = i.level,
                                        m = c === Se.jw,
                                        _ = Xe(e, l),
                                        E = m ? Qe(e, l) : s.get(c),
                                        g = m ? Qe(t, l) : u.get(c),
                                        p = Xe(n, l - 1),
                                        h = Xe(a, l),
                                        b = Xe(a, l + 1);
                                    let f = je.None;
                                    return (
                                        o || c !== b || p === h || m || _ !== Se.jw
                                            ? m && l === n.length - 1 && o
                                                ? (f = je.FadeIn)
                                                : (!m && !s.has(c)) || (void 0 === _ && m) || (E !== d && d === Se.I)
                                                  ? (f = je.Blink)
                                                  : g !== E && (f = je.ScaleUp)
                                            : ((o = !0), (f = s.has(c) ? je.SlideOut : je.SlideOutAndBlink)),
                                        r(i, f, l)
                                    );
                                });
                            })(e, g, E, p, (e, n, a) => {
                                const r = Ze(e);
                                return s().createElement(zt, {
                                    key: a,
                                    index: a,
                                    skill: e,
                                    skillState: r,
                                    skillType: t,
                                    previousSkill: p && Y.U2(p, a),
                                    skillAnimationType: n,
                                    size: o,
                                    skillsSignature: D,
                                    efficiencyState: u,
                                    tooltipData: i,
                                    blinkStyle: l,
                                    isNewSkillAnimated: m,
                                    className: F()(
                                        Kt.skill,
                                        Kt[`skill__state${(0, Ce.e)(r)}`],
                                        e === v && Kt.skill__last,
                                        e === f && Kt.skill__lastLearnedSkill,
                                    ),
                                });
                            }),
                            C &&
                                s().createElement(Yt, {
                                    skillsAmountDiff: A,
                                    size: o,
                                    wasLearned: h && b && h.level !== b.level,
                                    skillType: t,
                                    isAllMajorSkillsLearned: d,
                                    skill: b,
                                    possibleSkill: v,
                                    blinkStyle: l,
                                    className: Kt.level,
                                }),
                            a &&
                                s().createElement(We, {
                                    classMix: Kt.acceleratedTrainingIcon,
                                    targetId: null == i ? void 0 : i.targetId,
                                }),
                            A > 0 &&
                                Oe(A, (e) =>
                                    s().createElement(ft, {
                                        key: e,
                                        index: e,
                                        totalAmount: A,
                                        type: t,
                                        className: Kt.lostSkill,
                                        size: o,
                                    }),
                                ),
                        );
                    };
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                const Jt = ({
                        skills: e,
                        collapseLayout: t = $e.None,
                        skillType: n = Ue.Major,
                        efficiencyState: a,
                        size: r,
                        tooltipData: u,
                        className: o,
                        isAcceleratedTrainingVisible: i,
                    }) => {
                        const l = Y.lN(e),
                            c = qe(e),
                            d = a !== ue.H$.Low && (null == l ? void 0 : l.level) !== Se.I;
                        return s().createElement(
                            'div',
                            { className: F()(Kt.base, Kt[`base__${r}`], Kt[`base__collapse${(0, Ce.e)(t)}`], o) },
                            Y.UI(e, (e, t) => {
                                const o = Ze(e);
                                return s().createElement(
                                    It,
                                    {
                                        key: t,
                                        skillIndex: t,
                                        name: e.name,
                                        customName: e.customName,
                                        level: e.level,
                                        tooltipData: u,
                                        skillType: n,
                                        className: F()(
                                            Kt.skill,
                                            Kt[`skill__state${(0, Ce.e)(o)}`],
                                            e === l && Kt.skill__last,
                                            e === c && Kt.skill__lastLearnedSkill,
                                        ),
                                    },
                                    s().createElement(
                                        Ht,
                                        Qt({ size: r, type: n, efficiencyState: a, skillState: o }, e),
                                    ),
                                );
                            }),
                            d && l && s().createElement(qt, { skillLevel: l.level, className: Kt.level }),
                            i &&
                                s().createElement(We, {
                                    classMix: Kt.acceleratedTrainingIcon,
                                    targetId: null == u ? void 0 : u.targetId,
                                }),
                        );
                    },
                    en = {
                        base: 'Skills_base_ec',
                        efficiency: 'Skills_efficiency_d0',
                        base__c_44x44: 'Skills_base__c_44x44_c0',
                        rows: 'Skills_rows_e8',
                        bonusRow: 'Skills_bonusRow_4a',
                    };
                function tn() {
                    return (
                        (tn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        tn.apply(this, arguments)
                    );
                }
                const nn = ({
                        data: e,
                        dataToCompare: t,
                        classes: n,
                        tankmanID: a = Se.y$,
                        size: r = Ge.c24x24,
                        collapseType: u = He.None,
                        isSkillTooltipEnabled: o = !1,
                        isAcceleratedTrainingVisible: i = !1,
                        isNewSkillAnimated: l = !1,
                        isEfficiencyVisible: c = !1,
                        isBonusSkillsVisible: d = !0,
                        tooltipsTargetId: m = R.invalid('resId'),
                        tooltipArgs: _,
                        blinkStyle: E,
                        children: g,
                    }) => {
                        const p = e.majorSkills,
                            h = e.bonusSkills,
                            b = e.skillsEfficiency,
                            f = (null == t ? void 0 : t.skillsEfficiency) || b,
                            v = (0, ue.Y4)(b),
                            A = void 0 !== t && t.skillsEfficiency !== b,
                            C = v !== ue.H$.Normal || c || A,
                            D = null == t ? void 0 : t.majorSkills,
                            w = null == t ? void 0 : t.bonusSkills,
                            B = w || h,
                            y = Y.lN(B),
                            k = d && B.length > 0,
                            S = l || void 0 !== t,
                            x = (null == D ? void 0 : D.length) === Se.GT,
                            T = ((e, t, n, a) => {
                                if (t !== Se.vA) return $e.None;
                                switch (e) {
                                    case He.Default:
                                        if (n && a) return $e.NoMargins;
                                        break;
                                    case He.Overlap:
                                        if (n) return a ? $e.Overlap : $e.ReducedMargins;
                                        if (a) return $e.OnlyLearningOverlap;
                                        break;
                                    case He.ExtraOverlap:
                                        return n && a
                                            ? $e.ExtraOverlapWithLevelAndEfficiency
                                            : n
                                              ? $e.ExtraOverlapWithEfficiency
                                              : a
                                                ? $e.ExtraOverlapWithLevel
                                                : $e.ExtraOverlap;
                                }
                                return $e.None;
                            })(u, B.length, C, v !== ue.H$.Low && void 0 !== y && y.level < Se.I),
                            N = {
                                size: r,
                                efficiencyState: v,
                                tooltipData: { targetId: m, isEnabled: o, tankmanID: a, args: _ },
                            };
                        return s().createElement(
                            'div',
                            { className: F()(en.base, en[`base__${r}`], null == n ? void 0 : n.base) },
                            C &&
                                s().createElement(
                                    Ie,
                                    { blinkStyle: E, isEnabled: A && S },
                                    s().createElement(Ne, {
                                        efficiencyValue: f,
                                        tankmanID: a,
                                        className: en.efficiency,
                                        size: Ke(r, k),
                                        targetId: m,
                                    }),
                                ),
                            g,
                            s().createElement(
                                'div',
                                { className: en.rows },
                                S
                                    ? s().createElement(
                                          s().Fragment,
                                          null,
                                          s().createElement(
                                              Xt,
                                              tn(
                                                  {
                                                      skills: p,
                                                      possibleSkills: D,
                                                      blinkStyle: E,
                                                      isAcceleratedTrainingVisible: i,
                                                      isNewSkillAnimated: l,
                                                      isSkillsEfficiencyLearning: A,
                                                  },
                                                  N,
                                              ),
                                          ),
                                          k &&
                                              s().createElement(
                                                  Xt,
                                                  tn(
                                                      {
                                                          skills: h,
                                                          skillType: Ue.Bonus,
                                                          possibleSkills: w,
                                                          className: en.bonusRow,
                                                          collapseLayout: T,
                                                          blinkStyle: E,
                                                          isNewSkillAnimated: l,
                                                          isAllMajorSkillsLearned: x,
                                                      },
                                                      N,
                                                  ),
                                              ),
                                      )
                                    : s().createElement(
                                          s().Fragment,
                                          null,
                                          s().createElement(Jt, tn({ skills: p, isAcceleratedTrainingVisible: i }, N)),
                                          k &&
                                              s().createElement(
                                                  Jt,
                                                  tn(
                                                      {
                                                          skills: h,
                                                          skillType: Ue.Bonus,
                                                          className: en.bonusRow,
                                                          collapseLayout: T,
                                                      },
                                                      N,
                                                  ),
                                              ),
                                      ),
                            ),
                        );
                    },
                    an = 'Content_base_48',
                    rn = 'Content_base__disabled_e3',
                    un = 'Content_content_cb',
                    sn = 'Content_name_7b',
                    on = 'Content_name__postProgression_f9',
                    ln = 'Content_specializationInfo_ac',
                    cn = 'Content_recruitLabel_17';
                function dn() {
                    return (
                        (dn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        dn.apply(this, arguments)
                    );
                }
                const mn = s().memo(({ tankman: e, isRecruit: t, isDisabled: n = !1, withBonusSkills: a = !1 }) =>
                        s().createElement(
                            'div',
                            { className: F()(an, n && rn) },
                            s().createElement(
                                'div',
                                { className: un },
                                s().createElement(
                                    'div',
                                    { className: F()(sn, e.hasPostProgression && on) },
                                    e.fullUserName,
                                ),
                                s().createElement(
                                    'div',
                                    { className: ln },
                                    t
                                        ? s().createElement('div', { className: cn }, R.strings.crew.tankman.recruit())
                                        : s().createElement(
                                              ke,
                                              dn({}, e.tankmanVehicleInfo, { type: ye.whiteSpanish, isShortName: !0 }),
                                          ),
                                ),
                            ),
                            s().createElement(nn, {
                                data: e.skills,
                                collapseType: He.Overlap,
                                isBonusSkillsVisible: a,
                            }),
                        ),
                    ),
                    _n = 'DisabledLayer_base_1b',
                    En = 'DisabledLayer_disabledContent_81',
                    gn = 'DisabledLayer_disabledIcon_21',
                    pn = 'DisabledLayer_disabledTitle_a4',
                    hn = s().memo(({ disableReason: e, disableIcon: t, className: n }) =>
                        s().createElement(
                            'div',
                            { className: F()(_n, n) },
                            s().createElement(
                                'div',
                                { className: En },
                                t &&
                                    s().createElement('div', {
                                        className: gn,
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                s().createElement('div', { className: pn }, e),
                            ),
                        ),
                    ),
                    bn = {
                        base: 'FlagIcon_base_25',
                        base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                        base__c_240x118: 'FlagIcon_base__c_240x118_92',
                        base__c_155x31: 'FlagIcon_base__c_155x31_41',
                    };
                let fn;
                !(function (e) {
                    (e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118'), (e.c155x31 = 'c_155x31');
                })(fn || (fn = {}));
                const vn = {
                        [fn.c1080x454]: R.images.gui.maps.icons.crew.flags,
                        [fn.c240x118]: R.images.gui.maps.icons.tankmen.card.nations,
                        [fn.c155x31]: R.images.gui.maps.icons.nations.c_155x31,
                    },
                    An = s().memo(({ nation: e, size: t, className: n }) =>
                        s().createElement('div', {
                            className: F()(bn.base, bn[`base__${t}`], n),
                            style: { backgroundImage: `url('${vn[t].$dyn(e)}')` },
                        }),
                    ),
                    Fn = {
                        base: 'TankmanIcon_base_f9',
                        base__big: 'TankmanIcon_base__big_98',
                        base__small: 'TankmanIcon_base__small_b2',
                        base__barracks: 'TankmanIcon_base__barracks_62',
                        base__special: 'TankmanIcon_base__special_3f',
                        base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                    };
                let Cn;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(Cn || (Cn = {}));
                const Dn = ({ name: e, size: t = Cn.c100x60, classMix: n, isSkin: a = !1 }) => {
                        const r = (0, u.useMemo)(() => {
                            try {
                                let n = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                                a && (n = n.$dyn('crewSkins'));
                                const r = n.$dyn((0, Ce.BN)(e));
                                if (!r) throw Error;
                                return { backgroundImage: `url(${r})` };
                            } catch (t) {
                                console.error('Cant find resource in TankmanIcon: ', e);
                            }
                        }, [e, t, a]);
                        return s().createElement('div', { style: r, className: F()(Fn.base, Fn[`base__${t}`], n) });
                    },
                    wn = 'Icon_base_93',
                    Bn = 'Icon_base__disabled_54',
                    yn = 'Icon_flag_ac',
                    kn = (e, t) => {
                        if (e && t) return { backgroundImage: `url(${e})` };
                    },
                    Sn = s().memo(
                        ({
                            nation: e,
                            tankmanIcon: t,
                            recruitGlowImage: n,
                            isTankmanInSkin: a,
                            isRecruit: r,
                            isDisabled: u,
                            className: o,
                            children: i,
                        }) =>
                            s().createElement(
                                'div',
                                { className: F()(wn, u && Bn, o), style: kn(n, r) },
                                '' !== e && s().createElement(An, { nation: e, size: fn.c240x118, className: yn }),
                                s().createElement(Dn, { name: t, size: Cn.c158x118, isSkin: a }),
                                i,
                            ),
                    );
                var xn = n(7044);
                const Tn = (0, u.memo)(({ duration: e }) => {
                        const t =
                            e >= 0
                                ? (n = (0, xn.f8)(e)).days > 0
                                    ? (0, Ce.WU)(R.strings.common.duration.days(), { days: n.days })
                                    : n.hours > 0
                                      ? (0, Ce.WU)(R.strings.common.duration.hours(), { hours: n.hours })
                                      : n.minutes > 0
                                        ? (0, Ce.WU)(R.strings.common.duration.minutes(), { minutes: n.minutes })
                                        : (0, Ce.WU)(R.strings.common.duration.seconds(), { seconds: n.seconds })
                                : R.strings.common.duration.unlimited();
                        var n;
                        return s().createElement('span', null, t);
                    }),
                    Nn = 'DismissedCountdown_base_12',
                    Ln = 'DismissedCountdown_icon_e6',
                    In = 'DismissedCountdown_label_92',
                    Rn = s().memo(({ duration: e }) =>
                        s().createElement(
                            'div',
                            { className: Nn },
                            s().createElement('div', { className: Ln }),
                            s().createElement(
                                'div',
                                { className: In },
                                s().createElement(Tn, { duration: (0, Re.au)(e, 1) }),
                            ),
                        ),
                    ),
                    On = 'Location_base_4d',
                    Mn = 'Location_icon_eb',
                    Pn = s().memo(({ location: e, timeToDismiss: t, className: n }) =>
                        s().createElement(
                            'div',
                            { className: F()(On, n) },
                            e === be.Dismissed && s().createElement(Rn, { duration: t }),
                            e !== be.InBarracks &&
                                s().createElement('div', {
                                    className: Mn,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.tankmen.card.location.${e})`,
                                    },
                                }),
                        ),
                    ),
                    Wn = 'Role_base_68',
                    Hn = 'Role_base__disabled_8c';
                var jn;
                !(function (e) {
                    (e.White = 'white'), (e.Red = 'red');
                })(jn || (jn = {}));
                const $n = s().memo(({ role: e, withPenalty: t, className: n, isDisabled: a = !1 }) =>
                        e !== he.Any
                            ? s().createElement('div', {
                                  className: F()(Wn, a && Hn, n),
                                  style: {
                                      backgroundImage: `url(R.images.gui.maps.icons.tankmen.roles.opaque.${t ? jn.Red : jn.White}.${e})`,
                                  },
                              })
                            : null,
                    ),
                    zn = {
                        base: 'TankmanCard_base_dd',
                        base__default: 'TankmanCard_base__default_72',
                        base__disabled: 'TankmanCard_base__disabled_1f',
                        icon: 'TankmanCard_icon_a5',
                        disabledLayer: 'TankmanCard_disabledLayer_25',
                        role: 'TankmanCard_role_02',
                        location: 'TankmanCard_location_3f',
                        separatorWrapper: 'TankmanCard_separatorWrapper_fe',
                        separator: 'TankmanCard_separator_73',
                        separator__top: 'TankmanCard_separator__top_72',
                        actions: 'TankmanCard_actions_b5',
                    },
                    Gn = (0, u.memo)(
                        ({
                            tankman: e,
                            Icon: t = Sn,
                            actions: n,
                            isTooltipEnabled: a = !0,
                            withBonusSkills: r = !1,
                            className: u,
                            classNames: o,
                            onHover: i,
                            onMouseDown: l,
                            onClick: c,
                        }) => {
                            const d = e.tankmanKind === fe.Recruit,
                                m = e.cardState === ve.Disabled;
                            return s().createElement(
                                pe.t,
                                {
                                    args: {
                                        tooltipId: d ? 'tankmanNotRecruited' : 'tankman',
                                        targetId: d ? e.recruitID : e.tankmanID,
                                    },
                                    isEnabled: a,
                                    ignoreShowDelay: !1,
                                },
                                s().createElement(
                                    'div',
                                    {
                                        className: F()(zn.base, zn[`base__${e.cardState}`], u),
                                        onMouseEnter: i,
                                        onMouseDown: l,
                                        onClick: c,
                                    },
                                    m &&
                                        s().createElement(hn, {
                                            disableReason: e.disableReason,
                                            disableIcon: e.disableIcon,
                                            className: zn.disabledLayer,
                                        }),
                                    s().createElement($n, {
                                        isDisabled: m,
                                        role: e.role,
                                        withPenalty: e.hasRolePenalty,
                                        className: zn.role,
                                    }),
                                    s().createElement(Pn, {
                                        location: e.location,
                                        timeToDismiss: e.timeToDismiss,
                                        className: zn.location,
                                    }),
                                    s().createElement(t, {
                                        nation: e.nation,
                                        tankmanIcon: e.iconName,
                                        recruitGlowImage: e.recruitGlowImage,
                                        isTankmanInSkin: e.isInSkin,
                                        isRecruit: d,
                                        isDisabled: m,
                                        className: F()(zn.icon, null == o ? void 0 : o.icon),
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: F()(zn.separatorWrapper, null == o ? void 0 : o.separator) },
                                        s().createElement('div', { className: F()(zn.separator, zn.separator__top) }),
                                        s().createElement('div', { className: zn.separator }),
                                    ),
                                    s().createElement(mn, {
                                        tankman: e,
                                        isRecruit: d,
                                        isDisabled: m,
                                        withBonusSkills: r,
                                    }),
                                    !m && n && s().createElement('div', { className: F()(zn.actions) }, n),
                                ),
                            );
                        },
                    ),
                    Un = (e) => {
                        let t,
                            n = null;
                        return (
                            (n = requestAnimationFrame(() => {
                                n = requestAnimationFrame(() => {
                                    (n = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                            }
                        );
                    },
                    Vn = (e, t, n) => (n < e ? e : n > t ? t : n),
                    Zn = [];
                function qn(e) {
                    const t = (0, u.useRef)(e);
                    return (
                        (0, u.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, u.useCallback)((...e) => (0, t.current)(...e), Zn)
                    );
                }
                function Yn(e, t, n = []) {
                    const a = (0, u.useRef)(0),
                        r = (0, u.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, u.useEffect)(() => r, [r]);
                    const s = (null != n ? n : []).concat([t]);
                    return [
                        (0, u.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, s),
                        r,
                    ];
                }
                var Kn = n(7727);
                function Xn(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Qn(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Qn(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Qn(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const Jn = () => {
                    const e = (0, u.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        n = (e, n) => {
                            t(e).set(n, n);
                        },
                        a = (e, n) => {
                            t(e).delete(n);
                        },
                        r = (e, ...n) => {
                            for (var a, r = Xn(t(e).values()); !(a = r()).done; ) {
                                (0, a.value)(...n);
                            }
                        };
                    return (0, u.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                };
                var ea = n(5139);
                function ta(e, t, n) {
                    const a = (0, u.useMemo)(() => (0, ea.Z)(n, e), t);
                    return (0, u.useEffect)(() => a.cancel, [a]), a;
                }
                let na;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(na || (na = {}));
                const aa = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ra = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                u = a[1];
                            return u <= r ? 0 : Vn(r, u, n);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? aa : c,
                                m = (0, u.useRef)(null),
                                _ = (0, u.useRef)(null),
                                E = Jn(),
                                g = ta(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, Le.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (n(t, e), E.trigger('change', e), s && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                h = p[0],
                                b = p[1],
                                f = (0, u.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = h.scrollPosition.get(),
                                            u = (null != (a = h.scrollPosition.goal) ? a : 0) - r;
                                        return o(e, t * n + u + r);
                                    },
                                    [h.scrollPosition],
                                ),
                                v = (0, u.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = m.current;
                                        a &&
                                            b.start({
                                                scrollPosition: o(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: d.animationConfig,
                                                from: { scrollPosition: o(a, h.scrollPosition.get()) },
                                            });
                                    },
                                    [b, d.animationConfig, h.scrollPosition],
                                ),
                                A = (0, u.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            n = _.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, d.step),
                                            u = f(t, e, a);
                                        v(u);
                                    },
                                    [v, f, d.step],
                                ),
                                F = (0, u.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && A(a(e)),
                                            m.current && E.trigger('mouseWheel', e, h.scrollPosition, t(m.current));
                                    },
                                    [h.scrollPosition, A, E],
                                ),
                                C = ((e, t = []) => {
                                    const n = (0, u.useRef)(),
                                        a = (0, u.useCallback)((...t) => {
                                            n.current && n.current(), (n.current = e(...t));
                                        }, t);
                                    return (
                                        (0, u.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        Un(() => {
                                            const e = m.current;
                                            e &&
                                                (v(o(e, h.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [v, h.scrollPosition.goal],
                                ),
                                D = qn(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = o(e, h.scrollPosition.goal);
                                    t !== h.scrollPosition.goal && v(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('resize', C),
                                    () => {
                                        window.removeEventListener('resize', C);
                                    }
                                ),
                                [C],
                            );
                            return (0, u.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: F,
                                    applyScroll: v,
                                    applyStepTo: A,
                                    contentRef: m,
                                    wrapperRef: _,
                                    scrollPosition: b,
                                    animationScroll: h,
                                    recalculateContent: D,
                                    events: { on: E.on, off: E.off },
                                }),
                                [h.scrollPosition, v, A, E.off, E.on, D, F, b, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    ua = ra({
                        getBounds: (e) => {
                            var t, n;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? na.Next : na.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    sa = 'HorizontalBar_base_49',
                    oa = 'HorizontalBar_base__nonActive_82',
                    ia = 'HorizontalBar_leftButton_5f',
                    la = 'HorizontalBar_rightButton_03',
                    ca = 'HorizontalBar_track_0d',
                    da = 'HorizontalBar_thumb_fd',
                    ma = 'HorizontalBar_rail_32',
                    _a = 'disable',
                    Ea = { pending: !1, offset: 0 },
                    ga = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    pa = () => {},
                    ha = (e, t) => Math.max(20, e.offsetWidth * t),
                    ba = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = ga, onDrag: a = pa }) => {
                        const r = (0, u.useRef)(null),
                            o = (0, u.useRef)(null),
                            l = (0, u.useRef)(null),
                            c = (0, u.useRef)(null),
                            d = (0, u.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, u.useState)(Ea),
                            E = _[0],
                            g = _[1],
                            p = (0, u.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            h = () => {
                                const t = c.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / r),
                                    i = Vn(0, 1, u / (r - a)),
                                    m = (t.offsetWidth - ha(t, s)) * i;
                                (n.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return o.current.classList.add(_a), void l.current.classList.remove(_a);
                                            if (
                                                ((t = c.current),
                                                (n = d.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(_a), void l.current.classList.add(_a);
                                            var t, n;
                                            o.current.classList.remove(_a), l.current.classList.remove(_a);
                                        }
                                    })(m);
                            },
                            b = qn(() => {
                                (() => {
                                    const t = d.current,
                                        n = c.current,
                                        a = e.getWrapperSize(),
                                        u = e.getContainerSize();
                                    if (!(u && t && a && n)) return;
                                    const s = Math.min(1, a / u);
                                    (t.style.width = `${ha(n, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(oa) : r.current.classList.remove(oa));
                                })(),
                                    h();
                            });
                        (0, u.useEffect)(() => Un(b)),
                            (0, u.useEffect)(
                                () =>
                                    Un(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let n = pa;
                                        const a = () => {
                                            n(), (n = Un(b));
                                        };
                                        return (
                                            e.events.on('recalculateContent', b),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', b),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, u.useEffect)(() => {
                                if (!E.pending) return;
                                const t = i.O.client.events.mouse.move(([t, n]) => {
                                        var r;
                                        const u = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!u || !s) return;
                                        const o = c.current,
                                            i = d.current;
                                        if (!o || !i) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const l = t.clientX - E.offset - o.getBoundingClientRect().x,
                                            m = (l / o.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(u, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: m });
                                    }),
                                    n = i.O.client.events.mouse.up(() => {
                                        t(), p(Ea);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, E.offset, E.pending, a, p]);
                        const f = Yn((t) => e.applyStepTo(t), m, [e]),
                            v = f[0],
                            A = f[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const C = (e) => {
                            e.target.classList.contains(_a) || (0, Kn.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: F()(sa, t.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: F()(ia, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_a) ||
                                        0 !== e.button ||
                                        ((0, Kn.G)('play'), v(na.Next));
                                },
                                onMouseUp: A,
                                ref: o,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: F()(ca, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, Kn.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = d.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const u = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + u * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? na.Prev : na.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: d, className: F()(da, t.thumb) }),
                                s().createElement('div', { className: F()(ma, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: F()(la, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_a) ||
                                        0 !== e.button ||
                                        ((0, Kn.G)('play'), v(na.Prev));
                                },
                                onMouseUp: A,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    fa = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    va = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, u.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: F()(fa.base, e.base) });
                            }, [a]),
                            m = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: F()(fa.defaultScroll, n), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(fa.defaultScrollArea, r) },
                                s().createElement(Aa, { className: i, api: m, classNames: o }, e),
                            ),
                            s().createElement(ba, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Aa = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, u.useEffect)(() => Un(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: F()(fa.base, t) },
                            s().createElement(
                                'div',
                                {
                                    className: F()(fa.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: F()(fa.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (Aa.Bar = ba), (Aa.Default = va);
                const Fa = ra({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? na.Next : na.Prev),
                    }),
                    Ca = 'VerticalBar_base_f3',
                    Da = 'VerticalBar_base__nonActive_42',
                    wa = 'VerticalBar_topButton_d7',
                    Ba = 'VerticalBar_bottomButton_06',
                    ya = 'VerticalBar_track_df',
                    ka = 'VerticalBar_thumb_32',
                    Sa = 'VerticalBar_rail_43',
                    xa = 'disable',
                    Ta = () => {},
                    Na = { pending: !1, offset: 0 },
                    La = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ia = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Ra = (e, t) => Math.max(20, e.offsetHeight * t),
                    Oa = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = La, onDrag: a = Ta }) => {
                        const r = (0, u.useRef)(null),
                            o = (0, u.useRef)(null),
                            l = (0, u.useRef)(null),
                            c = (0, u.useRef)(null),
                            d = (0, u.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, u.useState)(Na),
                            E = _[0],
                            g = _[1],
                            p = (0, u.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            h = qn(() => {
                                const t = d.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const s = Math.min(1, a / u);
                                return (
                                    (t.style.height = `${Ra(n, s)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(Da) : r.current.classList.remove(Da)),
                                    s
                                );
                            }),
                            b = qn(() => {
                                const t = c.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / r),
                                    i = Vn(0, 1, u / (r - a)),
                                    m = (t.offsetHeight - Ra(t, s)) * i;
                                (n.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return o.current.classList.add(xa), void l.current.classList.remove(xa);
                                            if (
                                                ((t = c.current),
                                                (n = d.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(xa), void l.current.classList.add(xa);
                                            var t, n;
                                            o.current.classList.remove(xa), l.current.classList.remove(xa);
                                        }
                                    })(m);
                            }),
                            f = qn(() => {
                                Ia(e, () => {
                                    h(), b();
                                });
                            });
                        (0, u.useEffect)(() => Un(f)),
                            (0, u.useEffect)(() => {
                                const t = () => {
                                    Ia(e, () => {
                                        b();
                                    });
                                };
                                let n = Ta;
                                const a = () => {
                                    n(), (n = Un(f));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, u.useEffect)(() => {
                                if (!E.pending) return;
                                const t = i.O.client.events.mouse.up(() => {
                                        p(Na);
                                    }),
                                    n = i.O.client.events.mouse.move(([t]) => {
                                        Ia(e, (n) => {
                                            const r = c.current,
                                                u = d.current,
                                                s = e.getContainerSize();
                                            if (!r || !u || !s) return;
                                            const o = t.screenY - E.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: u, thumbOffset: o, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, E.offset, E.pending, a, p]);
                        const v = Yn((t) => e.applyStepTo(t), m, [e]),
                            A = v[0],
                            C = v[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const D = (e) => {
                            e.target.classList.contains(xa) || (0, Kn.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: F()(Ca, t.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: F()(wa, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xa) ||
                                        0 !== e.button ||
                                        ((0, Kn.G)('play'), A(na.Next));
                                },
                                ref: o,
                                onMouseEnter: D,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: F()(ya, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, Kn.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        Ia(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                u = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(u);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? na.Prev : na.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                s().createElement('div', { ref: d, className: F()(ka, t.thumb) }),
                                s().createElement('div', { className: F()(Sa, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: F()(Ba, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xa) ||
                                        0 !== e.button ||
                                        ((0, Kn.G)('play'), A(na.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Ma = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Pa = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, u.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: F()(Ma.base, e.base) });
                            }, [a]),
                            m = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: F()(Ma.defaultScroll, n), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(Ma.area, r) },
                                s().createElement(Wa, { className: o, classNames: i, api: m }, e),
                            ),
                            s().createElement(Oa, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Wa = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, u.useEffect)(() => Un(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: F()(Ma.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(Ma.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                Wa.Default = Pa;
                const Ha = { Vertical: r, Horizontal: a },
                    ja = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: n,
                        paddingBottom: a,
                        amount: r,
                        itemsAmountPerRow: u,
                        visibleRowsAmount: s,
                    }) => {
                        const o = Math.ceil(r / u) * t,
                            i = s * t,
                            l = e * t;
                        return { paddingTop: `${l + n}rem`, paddingBottom: `${Math.max(o - l - i, 0) + a}rem` };
                    },
                    $a = (e) => {
                        const t = e.className,
                            n = e.children,
                            a = e.itemsAmountPerRow,
                            r = e.visibleRowsAmount,
                            u = e.startRowIndex,
                            o = e.amount,
                            i = u * a,
                            l = Math.min(r * a, o - i);
                        return s().createElement(
                            'div',
                            { className: t, style: ja(e) },
                            Oe(l, (e) => n(i + e)),
                        );
                    },
                    za = 'VirtualGrid_base_52',
                    Ga = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: n,
                        children: a,
                        api: r,
                        classNames: o,
                        preloadedRows: l = 1,
                        paddingTop: c = 0,
                        paddingBottom: d = 0,
                    }) => {
                        const m = r.scrollApi,
                            _ = (0, u.useRef)(0),
                            E = (0, u.useState)(0),
                            g = E[0],
                            p = E[1],
                            h = (0, u.useState)(null),
                            b = h[0],
                            f = h[1],
                            v = (0, u.useState)(null),
                            A = v[0],
                            C = v[1];
                        return (
                            (0, u.useEffect)(() => {
                                const t = (t) => {
                                    if (!b) return;
                                    const a = Math.floor((i.O.view.pxToRem(t.value.scrollPosition) - c) / n + 1),
                                        u = Math.ceil(e / b),
                                        s = Math.max(0, Math.min(a - l, u));
                                    p(s), r.startRowIndexChanged(s);
                                };
                                return m.events.on('change', t), () => m.events.off('change', t);
                            }, [r, m, n, c, b, e, l]),
                            (0, u.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                a = m.contentRef.current.getBoundingClientRect(),
                                                u =
                                                    i.O.view.pxToRem(a.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                s = Math.floor(u / t),
                                                o = Math.ceil(i.O.view.pxToRem(a.height) / n) + 2 * l;
                                            (_.current = s), f(s), C(o), r.layoutCalculated(s, o);
                                        }
                                    },
                                    a = () => {
                                        const t = _.current;
                                        e(), r.scrollToIndex(g * t);
                                    };
                                return (
                                    m.events.on('recalculateContent', e),
                                    m.events.on('resizeHandled', a),
                                    () => {
                                        m.events.off('recalculateContent', e), m.events.off('resizeHandled', a);
                                    }
                                );
                            }, [r, m, n, t, l, g]),
                            (0, u.useEffect)(() => {
                                const e = (e, t = !0) => {
                                    b && m.applyScroll(Math.floor(e / b) * n + c, { immediate: t });
                                };
                                return r.events.on('scrollToIndex', e), () => r.events.off('scrollToIndex', e);
                            }, [r, n, b, c, m]),
                            s().createElement(
                                Ha.Vertical.Default,
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
                                null !== b &&
                                    null !== A &&
                                    s().createElement(
                                        $a,
                                        {
                                            className: F()(za, null == o ? void 0 : o.inner),
                                            paddingBottom: d,
                                            paddingTop: c,
                                            amount: e,
                                            itemsAmountPerRow: b,
                                            visibleRowsAmount: A,
                                            startRowIndex: g,
                                            cellHeight: n,
                                        },
                                        a,
                                    ),
                            )
                        );
                    },
                    Ua = 'VirtualGridWithFade_scrollAreaFade_94',
                    Va = ['api', 'children', 'classNames'];
                function Za() {
                    return (
                        (Za =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Za.apply(this, arguments)
                    );
                }
                const qa = (e) => {
                        let t = e.api,
                            n = e.children,
                            a = e.classNames,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Va);
                        const o = (0, u.useState)(!0),
                            i = o[0],
                            l = o[1],
                            c = t.scrollApi;
                        return (
                            (0, u.useEffect)(() => {
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
                                Ga,
                                Za(
                                    {
                                        api: t,
                                        classNames: Object.assign({}, a, {
                                            scrollClassName: F()(null == a ? void 0 : a.scrollClassName, i && Ua),
                                        }),
                                    },
                                    r,
                                ),
                                n,
                            )
                        );
                    },
                    Ya = 'TankmanVirtualList_grid_41',
                    Ka = ({
                        amount: e,
                        paddingTop: t = 11,
                        paddingBottom: n = 11,
                        api: a,
                        classNames: r,
                        children: u,
                    }) =>
                        s().createElement(
                            qa,
                            {
                                amount: e,
                                classNames: Object.assign({}, r, { content: F()(Ya, null == r ? void 0 : r.content) }),
                                cellWidth: 318,
                                cellHeight: 265,
                                paddingTop: t,
                                paddingBottom: n,
                                api: a,
                            },
                            u,
                        );
                var Xa = n(5332);
                let Qa;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Qa || (Qa = {}));
                const Ja = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: r,
                        isEnabled: s = !0,
                        onMouseDown: o,
                    }) => {
                        const i = (0, u.useCallback)(() => {
                                (0, $.c9)($.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    Kn.$.playYes();
                            }, [r, t, n, a]),
                            l = (0, u.useCallback)(() => {
                                (0, $.c9)($.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, u.useCallback)(
                                (e) => {
                                    o && o(e), ((e) => e.button === Qa.RIGHT)(e) && i();
                                },
                                [o, i],
                            );
                        return (
                            (0, u.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, u.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    er = ['children'];
                function tr() {
                    return (
                        (tr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        tr.apply(this, arguments)
                    );
                }
                const nr = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, er);
                    return s().createElement(
                        Ja,
                        tr({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                let ar, rr, ur, sr, or, ir, lr, cr;
                !(function (e) {
                    (e.Viewed = 'viewed'), (e.Click = 'click');
                })(ar || (ar = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.PersonalFile = 'personal_file_view'),
                            (e.PersonalData = 'personal_data_view'),
                            (e.ServiceRecord = 'service_record_view'),
                            (e.Barracks = 'barracks_view'),
                            (e.MemberChange = 'member_change_view'),
                            (e.QuickTraining = 'quick_training_view'),
                            (e.TankChange = 'tank_change_view');
                    })(rr || (rr = {})),
                    (function (e) {
                        (e.DocumentChange = 'document_change_dialog'), (e.RetrainSingle = 'retrain_single_dialog');
                    })(ur || (ur = {})),
                    (function (e) {
                        e.PremiumTooltip = 'personal_file_view_premium_tooltip';
                    })(sr || (sr = {})),
                    (function (e) {
                        (e.ChangeButtonTooltip = 'crew_widget_change_button_tooltip'),
                            (e.SlotContextMenu = 'crew_widget_slot_context_menu'),
                            (e.CrewOperationsButton = 'crew_widget_crew_operations_button');
                    })(or || (or = {})),
                    (function (e) {
                        (e.FirstnameSelect = 'document_change_dialog_firstname_select'),
                            (e.Firstname = 'document_change_dialog_firstname'),
                            (e.LastnameSelect = 'document_change_dialog_lastname_select'),
                            (e.Lastname = 'document_change_dialog_lastname');
                    })(ir || (ir = {})),
                    (function (e) {
                        (e.Checkbox = 'retrain_single_dialog_checkbox'),
                            (e.RoleButton = 'retrain_single_dialog_role_button');
                    })(lr || (lr = {})),
                    (function (e) {
                        e.CardContextMenu = 'barracks_view_card_context_menu';
                    })(cr || (cr = {}));
                R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                    rr.PersonalFile,
                    R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                    rr.PersonalData,
                    R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    rr.ServiceRecord,
                    R.views.lobby.crew.BarracksView('resId'),
                    rr.Barracks,
                    R.views.lobby.crew.HangarCrewWidget('resId'),
                    rr.Hangar,
                    R.views.lobby.crew.MemberChangeView('resId'),
                    rr.MemberChange,
                    R.views.lobby.crew.TankChangeView('resId'),
                    rr.TankChange,
                    R.views.lobby.crew.QuickTrainingView('resId'),
                    rr.QuickTraining;
                let dr;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(dr || (dr = {}));
                let mr;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(mr || (mr = {}));
                const _r = 'metrics',
                    Er = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: r || null,
                    }),
                    gr = (e, t) => {
                        const n = (0, u.useCallback)(
                            (n, a = dr.Info, r) => {
                                r || (r = {}),
                                    Object.keys(r).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: n,
                                            logLevel: a,
                                            params: JSON.stringify(r),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, a) => n(e, t, a);
                    },
                    pr = (e, t) => {
                        const n = ((e) => {
                                const t = gr(e, _r),
                                    n = (0, u.useCallback)(
                                        (e) => {
                                            t(e.action, e.logLevel, Er(e));
                                        },
                                        [t],
                                    );
                                return (e) => n(e);
                            })('crew'),
                            a = ta(() => n({ action: ar.Click, parentScreen: e, item: t }), [e, t], 2e3);
                        return (e) => {
                            e.button === Qa.RIGHT && a();
                        };
                    },
                    hr = 'MainActionButton_base_98',
                    br = ['tooltipArgs', 'className', 'children', 'onClick'];
                function fr() {
                    return (
                        (fr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        fr.apply(this, arguments)
                    );
                }
                const vr = s().memo((e) => {
                        let t = e.tooltipArgs,
                            n = e.className,
                            a = e.children,
                            r = e.onClick,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, br);
                        return s().createElement(
                            Nt.l,
                            { tooltipArgs: t },
                            s().createElement(
                                ae.u5,
                                fr(
                                    {
                                        size: ae.qE.small,
                                        mixClass: F()(hr, n),
                                        onClick: (e) => {
                                            r && (e.stopPropagation(), r(e));
                                        },
                                    },
                                    u,
                                ),
                                a,
                            ),
                        );
                    }),
                    Ar = 'VoiceOverButton_base_f9',
                    Fr = 'VoiceOverButton_soundIcon_c9',
                    Cr = s().memo(({ onClick: e }) =>
                        s().createElement(
                            re.i,
                            {
                                header: R.strings.crew.tankman.action.voiceover.tooltip.title(),
                                body: R.strings.crew.tankman.action.voiceover.tooltip.body(),
                            },
                            s().createElement(
                                ae.u5,
                                {
                                    size: ae.qE.small,
                                    mixClass: Ar,
                                    type: ae.L$.secondary,
                                    onClick: (t) => {
                                        e && (t.stopPropagation(), e(t));
                                    },
                                },
                                s().createElement('div', { className: Fr }),
                            ),
                        ),
                    ),
                    Dr = ({ className: e }) => s().createElement('div', { className: F()(zn.base, e) }),
                    wr = {
                        base: 'BarracksTankmanCard_base_15',
                        base__default: 'BarracksTankmanCard_base__default_de',
                        separator: 'BarracksTankmanCard_separator_20',
                        icon: 'BarracksTankmanCard_icon_43',
                        actionBtn: 'BarracksTankmanCard_actionBtn_a6',
                    },
                    Br = R.strings.crew.tankman.action,
                    yr = { body: Br.dismiss.tooltip.available.body() },
                    kr = {
                        body: Br.dismiss.tooltip.unavailable.body(),
                        header: Br.dismiss.tooltip.unavailable.title(),
                    },
                    Sr = { body: Br.restore.tooltip.body() },
                    xr = Br.dismiss.title(),
                    Tr = Br.restore.title(),
                    Nr = Br.recruit.title(),
                    Lr = { body: R.strings.crew.tankmanList.tooltip.recruit.body() },
                    Ir = (e) => () => {
                        e || (Kn.$.playHighlight(), (0, Kn.G)(ue.gO.SHOP_INFO));
                    },
                    Rr = (0, U.Pi)(({ index: e, onLazyLoad: t }) => {
                        const n = te(),
                            a = n.model,
                            r = n.controls,
                            o = pr(rr.Barracks, cr.CardContextMenu),
                            i = a.computes.getItem(e);
                        if (
                            ((0, u.useEffect)(() => {
                                i || t();
                            }, [t, i]),
                            !i)
                        )
                            return s().createElement(Dr, { className: wr.base });
                        const l = i.location,
                            c = i.tankmanKind === fe.Recruit,
                            d = i.cardState === ve.Disabled,
                            m = (e) => {
                                i &&
                                    (i.tankmanKind === fe.Recruit
                                        ? r.recruitTankman(i.recruitID)
                                        : i.location === be.Dismissed
                                          ? r.restoreTankman(i.tankmanID)
                                          : e(i.tankmanID));
                            },
                            _ = ((e, t, n) => {
                                const a = t ? kr : yr;
                                switch (e) {
                                    case be.InBarracks:
                                        return [n ? Nr : xr, n ? Lr : a];
                                    case be.InTank:
                                        return [xr, a];
                                    case be.Dismissed:
                                    default:
                                        return [Tr, Sr];
                                }
                            })(l, i.isMainActionDisabled, c),
                            E = _[0],
                            g = _[1];
                        return s().createElement(
                            nr,
                            {
                                isEnabled: !c && l !== be.Dismissed && i.cardState !== ve.Disabled,
                                args: { type: 'crewTankman', tankmanID: i.tankmanID },
                                onMouseDown: o,
                            },
                            s().createElement(Gn, {
                                tankman: i,
                                className: F()(wr.base, wr[`base__${i.cardState}`]),
                                classNames: { icon: wr.icon, separator: wr.separator },
                                actions: s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        vr,
                                        {
                                            tooltipArgs: g,
                                            onClick: () => m(r.dismissTankman),
                                            disabled: i.isMainActionDisabled,
                                            className: wr.actionBtn,
                                        },
                                        E,
                                    ),
                                    i.hasVoiceover &&
                                        c &&
                                        s().createElement(Cr, {
                                            onClick: () => i && r.playRecruitVoiceover(i.recruitID),
                                        }),
                                ),
                                onHover: Ir(d),
                                onClick: () => !d && m(r.selectTankman),
                            }),
                        );
                    }),
                    Or = 'BarracksTankmanList_base_d7',
                    Mr = 'BarracksTankmanList_gridWrapper_0b',
                    Pr = 'BarracksTankmanList_emptyState_1c',
                    Wr = R.strings.crew.tankmanList.emptyState,
                    Hr = (e) => (e ? ue.Xd : { body: R.strings.crew.tankmanList.tooltip.recruit.body() }),
                    jr = (0, U.Pi)(() => {
                        const e = te(),
                            t = e.model,
                            n = e.controls,
                            a = (() => {
                                const e = Ha.Vertical.useVerticalScrollApi(),
                                    t = Jn(),
                                    n = (0, u.useCallback)((e, n = !0) => t.trigger('scrollToIndex', e, n), [t]),
                                    a = (0, u.useCallback)((e, n) => t.trigger('layoutCalculated', e, n), [t]),
                                    r = (0, u.useCallback)((e) => t.trigger('startRowIndexChanged', e), [t]);
                                return (0, u.useMemo)(
                                    () => ({
                                        scrollToIndex: n,
                                        layoutCalculated: a,
                                        startRowIndexChanged: r,
                                        scrollApi: e,
                                        events: { off: t.off, on: t.on },
                                    }),
                                    [n, a, r, e, t.off, t.on],
                                );
                            })(),
                            r = t.hasFilters.get(),
                            o = t.itemsAmount.get(),
                            i = ((e, t) => {
                                const n = (0, u.useRef)([0, 0]),
                                    a = (0, u.useRef)(0),
                                    r = (0, u.useRef)([0, !0]);
                                return (
                                    (0, u.useEffect)(() => {
                                        const e = (e, t) => {
                                                n.current = [e, t];
                                            },
                                            u = (e) => {
                                                a.current = e;
                                            },
                                            s = (e) => {
                                                const t = r.current[0];
                                                r.current = [e.value.scrollPosition, t < e.value.scrollPosition];
                                            };
                                        return (
                                            t.scrollApi.events.on('change', s),
                                            t.events.on('layoutCalculated', e),
                                            t.events.on('startRowIndexChanged', u),
                                            () => {
                                                t.scrollApi.events.off('change', s),
                                                    t.events.off('layoutCalculated', e),
                                                    t.events.off('startRowIndexChanged', u);
                                            }
                                        );
                                    }, [t]),
                                    (0, Xa.N)(
                                        () => {
                                            const t = n.current,
                                                u = t[0],
                                                s = t[1],
                                                o = a.current * u,
                                                i = u * s;
                                            e(2 * i, r.current[1] ? o : Math.max(o - 1 * i, 0));
                                        },
                                        [],
                                        10,
                                    )
                                );
                            })(n.loadCards, a);
                        return s().createElement(
                            'div',
                            { className: Or },
                            o > 0
                                ? s().createElement(
                                      'div',
                                      { className: Mr },
                                      s().createElement(Ka, { amount: o, api: a }, (e) =>
                                          s().createElement(Rr, { key: e, index: e, onLazyLoad: i }),
                                      ),
                                  )
                                : s().createElement(
                                      ge,
                                      {
                                          warningText: r ? Wr.noFilteredItems() : Wr.noItems(),
                                          buttonType: r ? ne.L.secondary : ne.L.primary,
                                          tooltipArgs: Hr(r),
                                          onClick: n.resetFilters,
                                          className: Pr,
                                      },
                                      !!r && Wr.button.resetFilers(),
                                  ),
                        );
                    }),
                    $r = 'ButtonWithDiscountIndicator_base_6c',
                    zr = 'ButtonWithDiscountIndicator_discountIndicator_a5',
                    Gr = 'ButtonWithDiscountIndicator_discountIndicator__small_d6',
                    Ur = ['hasDiscount', 'className', 'children', 'wrapperId', 'isSmall'];
                const Vr = s().memo(function (e) {
                        let t = e.hasDiscount,
                            n = e.className,
                            a = e.children,
                            r = e.wrapperId,
                            u = e.isSmall,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Ur);
                        return s().createElement(
                            'div',
                            { id: r, className: F()($r, n) },
                            s().createElement(ae.u5, o, a),
                            t && s().createElement('div', { className: F()(zr, u && Gr) }),
                        );
                    }),
                    Zr = {
                        base: 'ListHeader_base_ad',
                        title: 'ListHeader_title_a8',
                        base__memberChange: 'ListHeader_base__memberChange_c2',
                        base__tankChange: 'ListHeader_base__tankChange_fb',
                        base__personalData: 'ListHeader_base__personalData_aa',
                    };
                let qr;
                !(function (e) {
                    (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(qr || (qr = {}));
                const Yr = ({ title: e, theme: t = qr.Barracks, className: n, children: a }) =>
                    s().createElement(
                        'div',
                        { className: F()(Zr.base, Zr[`base__${t}`], n) },
                        s().createElement('div', { className: Zr.title }, e),
                        a,
                    );
                var Kr = n(9197);
                const Xr = 'Header_base_4b',
                    Qr = 'Header_berthsAmount_12',
                    Jr = 'Header_button_f1';
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                const tu = (e) =>
                        e
                            ? { contentId: R.views.lobby.crew.tooltips.BunksConfirmDiscountTooltip('resId') }
                            : {
                                  header: R.strings.crew.barracks.tooltip.enlarge.header(),
                                  body: R.strings.crew.barracks.tooltip.enlarge.body(),
                              },
                    nu = (0, U.Pi)(() => {
                        const e = te(),
                            t = e.model,
                            n = e.controls,
                            a = t.isBerthsOnSale.get();
                        return s().createElement(
                            Yr,
                            { title: R.strings.crew.barracks.title() },
                            s().createElement(
                                'div',
                                { className: Xr },
                                s().createElement(
                                    Kr.C,
                                    eu({ title: R.strings.crew.barracks.bunks.title() }, t.berthsAmount.get(), {
                                        className: Qr,
                                    }),
                                ),
                                s().createElement(
                                    Nt.l,
                                    { tooltipArgs: tu(a) },
                                    s().createElement(
                                        Vr,
                                        {
                                            size: ae.qE.small,
                                            type: ae.L$.ghost,
                                            mixClass: Jr,
                                            onClick: n.buyBerth,
                                            disabled: !1,
                                            hasDiscount: a,
                                        },
                                        R.strings.crew.barracks.action.enlarge(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    au = 'BarracksApp_base_b7',
                    ru = 'BarracksApp_content_a3',
                    uu = 'BarracksApp_content__withBanner_3d',
                    su = 'BarracksApp_conversionBanner_b4',
                    ou = (0, U.Pi)(() => {
                        const e = te(),
                            t = e.controls,
                            n = e.model,
                            a = k().mediaSize,
                            r = n.isBannerVisible.get();
                        var u;
                        return (
                            (u = t.showHangar),
                            G(j.n.ESCAPE, u),
                            s().createElement(
                                'div',
                                { className: au },
                                s().createElement(
                                    'div',
                                    { className: F()(ru, r && uu) },
                                    s().createElement(nu, null),
                                    s().createElement(V.p, { popoverDirection: a < w.Large ? H.IC.Left : H.IC.Bottom }),
                                    s().createElement(jr, null),
                                ),
                                r && s().createElement(Z.d, { className: su }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    W().render(
                        s().createElement(ee, null, s().createElement(M, null, s().createElement(ou, null))),
                        document.getElementById('root'),
                    );
                });
            },
            9367: (e, t, n) => {
                'use strict';
                n.d(t, { Q: () => d });
                var a = n(6483),
                    r = n.n(a),
                    u = n(9987),
                    s = n(6179),
                    o = n.n(s);
                const i = 'AlertCounter_base_f3',
                    l = 'AlertCounter_counter_da',
                    c = 'AlertCounter_label_18',
                    d = ({ value: e, className: t }) =>
                        o().createElement(
                            'div',
                            { className: r()(i, t) },
                            o().createElement(u.A, { value: e, className: l }),
                            !e && o().createElement('div', { className: c }, R.strings.crew.common.exclamationMark()),
                        );
            },
            9197: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => h });
                var a = n(6483),
                    r = n.n(a),
                    u = n(6179),
                    s = n.n(u);
                const o = 'NumberRange_base_5e',
                    i = 'NumberRange_base__animation_79',
                    l = 'NumberRange_from_70',
                    c = 'NumberRange_from__red_f8',
                    d = 'NumberRange_separator_c0',
                    m = s().memo(function ({ from: e, to: t, className: n }) {
                        return s().createElement(
                            'div',
                            { className: r()(o, e <= 0 && i, n) },
                            s().createElement('div', { className: r()(l, e <= 0 && t > 0 && c) }, e),
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
                    h = ({ title: e, isGlowVisible: t = !1, className: n, classNames: a, from: o, to: i }) => {
                        const l = (0, u.useMemo)(
                            () => ({
                                left: o !== i ? 7 * String(o).length + 4 : Math.round((7 * String(o).length) / 2),
                            }),
                            [o, i],
                        );
                        return s().createElement(
                            'div',
                            { className: r()(_, n) },
                            s().createElement('div', { className: E }, e),
                            s().createElement(
                                'div',
                                { className: g },
                                s().createElement(m, { from: o, to: i }),
                                t &&
                                    s().createElement('div', {
                                        style: l,
                                        className: r()(p, null == a ? void 0 : a.counterGlow),
                                    }),
                            ),
                        );
                    };
            },
            9631: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    u = n(3457),
                    s = n(2106),
                    o = n(9987),
                    i = n(6179),
                    l = n.n(i),
                    c = n(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const _ = l().memo(function (e) {
                    let t = e.isActive,
                        n = e.counter,
                        a = e.className,
                        i = e.children,
                        _ = e.type,
                        E = void 0 === _ ? s.L.secondary : _,
                        g = e.size,
                        p = void 0 === g ? s.q.small : g,
                        h = e.hasIndicator,
                        b = void 0 === h || h,
                        f = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, d);
                    return l().createElement(
                        'div',
                        { className: r()(c.Z.base, a, t && c.Z.base__active) },
                        l().createElement(u.u5, m({ type: E, size: p, mixClass: c.Z.button }, f), i),
                        l().createElement('div', { className: c.Z.overlay }),
                        b && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(n) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(o.A, { value: n, size: 'small' }),
                            ),
                    );
                });
            },
            8018: (e, t, n) => {
                'use strict';
                n.d(t, { H$: () => o, Xd: () => u, Y4: () => i, gO: () => s });
                var a = n(771);
                n(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let r;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(r || (r = {}));
                const u = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let s;
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
                })(s || (s = {}));
                let o;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(o || (o = {}));
                const i = (e) => (e === a.sU ? o.Untrained : e < a.yb ? o.Low : o.Normal);
            },
            3880: (e, t, n) => {
                'use strict';
                n.d(t, { d: () => he });
                var a = n(6179),
                    r = n.n(a),
                    u = n(6483),
                    s = n.n(u),
                    o = n(3457);
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
                var c = n(7044),
                    d = n(2344),
                    m = n(3112),
                    _ = n(3649);
                const E = 'Countdown_base_fe',
                    g = 'Countdown_icon_8b',
                    p = 'Countdown_description_8d',
                    h = (e) => e.toString().padStart(2, '0'),
                    b = R.images.gui.maps.icons.components.countdown,
                    f = (e, t) => {
                        const n = 2 === t ? b.big : b;
                        switch (e) {
                            case i.Timer:
                                return n.clock();
                            case i.Countdown:
                                return n.hourglass();
                            case i.Cooldown:
                                return n.lock();
                        }
                    },
                    v = (0, a.memo)(
                        ({
                            duration: e,
                            icon: t = i.Timer,
                            style: n = l.Description,
                            onTimeReached: a,
                            className: u = '',
                            classNames: o = {},
                        }) => {
                            const b = n !== l.Description ? 1 : void 0,
                                v = (0, d.au)(e, b),
                                A = (0, m.V)();
                            a && a[v] && a[v]();
                            const F = ((e, t) => {
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
                            })((0, c.f8)(v), n);
                            return r().createElement(
                                'div',
                                { className: s()(E, u) },
                                t !== i.None &&
                                    r().createElement('div', {
                                        className: s()(g, o.icon),
                                        style: { backgroundImage: `url('${f(t, A)}')` },
                                    }),
                                r().createElement('div', { className: s()(p, o.text) }, F),
                            );
                        },
                    );
                var A = n(6373),
                    F = n(3403),
                    C = n(3415),
                    D = n(8045);
                const w = {
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
                let B, y, k;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(B || (B = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(y || (y = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(k || (k = {}));
                const S = { [k.NBSP]: B.NoBreakSymbol, [k.ZWNBSP]: B.NoBreakSymbol, [k.NEW_LINE]: B.LineBreak },
                    x = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    T = {
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
                    N = 'renderers_noBreakWrapper_10',
                    L = 'renderers_lineBreak_b5',
                    I = 'renderers_newLine_bd',
                    O = 'renderers_word_f3',
                    M = (e) => ({ color: `#${e}` }),
                    P = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? T[a]
                                ? r().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: s()(O, T[a]) },
                                      e,
                                  )
                                : r().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: O, style: M(a) },
                                      e,
                                  )
                            : r().createElement('span', { key: n, 'data-block-type': t.blockType, className: O }, e);
                    },
                    W = {
                        [B.Word]: P,
                        [B.NoBreakSymbol]: P,
                        [B.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            r().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => r().createElement(r().Fragment, { key: n }, e)),
                            ),
                        [B.LineBreak]: ({ key: e }) =>
                            r().createElement('span', { key: e, 'data-block-type': B.LineBreak, className: L }),
                        [B.NewLine]: ({ elementList: e, key: t }) =>
                            r().createElement('span', { key: t, 'data-block-type': B.NewLine, className: I }, e),
                        [B.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            r().createElement('span', { key: t, 'data-block-type': B.NoBreakWrapper, className: N }, e),
                    },
                    H = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((r, u) => {
                                const s = `${n}_${u}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        n = H(e, W[t], s);
                                    a.push(...n);
                                } else a.push(t({ elementList: [r], textBlock: e, key: s }));
                            }),
                            a
                        );
                    },
                    j = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            a = e.blockType,
                                            r = W[a],
                                            u = H(e, r, t);
                                        return (
                                            a === B.NoBreakWrapper
                                                ? n.push(r({ elementList: u, textBlock: e, key: `${t}` }))
                                                : n.push(...u),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    },
                    $ = (e, t, n, a) => {
                        let r = t.exec(e),
                            u = 0;
                        for (; r; ) u !== r.index && n(e.slice(u, r.index)), a(r), (u = t.lastIndex), (r = t.exec(e));
                        u !== e.length && n(e.slice(u));
                    },
                    z = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    G = (e) => {
                        const t = [];
                        return (
                            $(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var n;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((n = e), n.match(z) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    U = x
                        ? (e) => {
                              const t = [];
                              return (
                                  $(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...G(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const n = /[\s\u002d]/g;
                              let a = n.exec(e);
                              if (!a) return [e];
                              const r = [];
                              let u = 0;
                              for (; a; ) {
                                  const s = t.justifyContent === y.FlexEnd ? a.index : n.lastIndex;
                                  r.push(e.slice(u, s)), (u = s), (a = n.exec(e));
                              }
                              return u !== e.length && r.push(e.slice(u)), r;
                          },
                    V = (e, t = '', n) => {
                        const a = [];
                        return (
                            $(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: B.Word, colorTag: t, childList: U(e, n) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = S[n.charAt(0)];
                                    r === B.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: B.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: B.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : a.push({ blockType: r, colorTag: t, childList: [n] });
                                },
                            ),
                            a
                        );
                    },
                    Z = (e, t, n = '', a) => {
                        const r = [];
                        return (
                            $(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...V(e, n, a));
                                },
                                (e) => {
                                    const u = e[1],
                                        s = void 0 === t[u] ? e[0] : t[u];
                                    'string' == typeof s || 'number' == typeof s
                                        ? r.push(...V(String(s), n, a))
                                        : r.push({ blockType: B.Binding, colorTag: n, childList: [s] });
                                },
                            ),
                            r
                        );
                    },
                    q = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === B.NoBreakWrapper) e.childList.push(a), n.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && n.push(e),
                                n.push({ blockType: B.NoBreakWrapper, colorTag: '', childList: [t, a] });
                        }
                        return t.childList.length > 0 && n.push(t), n;
                    },
                    Y = (e, t = {}, n) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === B.NoBreakSymbol
                                        ? ((n = !0), t.push(...q(t.pop(), e)))
                                        : (n ? t.push(...q(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, n) => {
                                const a = [];
                                return (
                                    $(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...Z(e, t, '', n));
                                        },
                                        (e) => {
                                            a.push(...Z(e[2] + e[3], t, e[1], n));
                                        },
                                    ),
                                    a
                                );
                            })((0, _.Eg)((0, _.z4)(e)), t, n),
                        );
                        return j(a);
                    },
                    K = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    X = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Q = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = X(e, t),
                            r = e.textContent.length,
                            u = e.offsetWidth / r,
                            s = Math.ceil(a / u);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / u);
                            return a >= n ? [!0, n + s] : [!1, a];
                        }
                        const o = Math.max(n + s, 0);
                        return r < o ? [!1, 0] : [!0, o];
                    },
                    J = (e, t, n, a, u, s) => {
                        let o = -1,
                            i = null;
                        for (let l = n; l >= 0; l--) {
                            const n = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === B.LineBreak || c === B.NewLine || c === B.Binding) continue;
                            const d = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = Q(n, a, u),
                                    c = e[0],
                                    m = e[1];
                                if (!c) {
                                    m > 0 && (u -= m);
                                    continue;
                                }
                                const _ = d.slice(0, d.length - m) + s,
                                    E = t[l];
                                (i = r().cloneElement(E, E.props, _)), (o = l);
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[l],
                                    m = c.props.children,
                                    _ = J(e, m, e.length - 1, a, u, s),
                                    E = _[0],
                                    g = _[1];
                                if (!(E < 0)) {
                                    const e = m.slice(0, E);
                                    (i = r().cloneElement(c, c.props, e, g)), (o = l);
                                    break;
                                }
                                u -= d.length;
                            }
                        }
                        return [o, i];
                    },
                    ee = (e, t, n, a = '...') => {
                        const r = [...t],
                            u = e.current;
                        if (!u) return [r, !1];
                        const s = n.height,
                            o = n.width,
                            i = u.lastElementChild;
                        if (!K(i, s) && X(i, o) <= 0) return [r, !1];
                        const l = u.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const r = n + Math.ceil(0.5 * (a - n));
                                    K(e[r], t) ? (a = r - 1) : (n = r + 1);
                                }
                                return n - 1;
                            })(l, s);
                        if (c < 0) return [r, !1];
                        const d = J(l, r, c, o, a.length, a),
                            m = d[0],
                            _ = d[1];
                        return _ && (r.splice(m, 1, _), r.splice(m + 1)), [r, !0];
                    },
                    te = r().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: u,
                            isTooltipEnable: o = !1,
                            isTruncationAvailable: i = !1,
                            customTooltipArgs: l,
                            targetId: c,
                            justifyContent: d = y.FlexStart,
                            alignContent: m = y.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const E = (0, a.useRef)(null),
                                g = (0, a.useRef)({ height: 0, width: 0 }),
                                p = (0, a.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                h = p[0],
                                b = p[1],
                                f = (0, a.useMemo)(() => Y(e, u, { justifyContent: d }), [u, d, e]),
                                v = (0, a.useMemo)(() => {
                                    if (
                                        o &&
                                        h.isTruncated &&
                                        (!u || !Object.values(u).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, l, {
                                                stringifyKwargs: u ? JSON.stringify(u) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: c,
                                        };
                                }, [u, o, c, e, l, h.isTruncated]),
                                A = (0, a.useCallback)(
                                    (e) => {
                                        (g.current.width = e.contentRect.width),
                                            (g.current.height = e.contentRect.height);
                                        const t = ee(E, f, g.current, _),
                                            a = t[0],
                                            r = t[1];
                                        b({ elementList: a, isTruncated: r, isTruncateFinished: !0 }), n && n(r);
                                    },
                                    [n, _, f],
                                ),
                                F = (0, a.useMemo)(() => ({ justifyContent: d, alignContent: m }), [m, d]);
                            return (
                                ((e, t, n = !0) => {
                                    const r = (0, a.useCallback)(
                                        (e) => {
                                            const n = e[0];
                                            t && t(n);
                                        },
                                        [t],
                                    );
                                    (0, a.useEffect)(() => {
                                        if (!e.current || !n) return;
                                        const t = new D.Z((e) => r(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [r, n, e]);
                                })(E, A, i),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            w.base,
                                            t,
                                            w.base__zeroPadding,
                                            i && w.base__isTruncationAvailable,
                                        ),
                                        style: F,
                                    },
                                    r().createElement('div', { className: w.unTruncated, ref: E }, f),
                                    r().createElement(
                                        C.l,
                                        {
                                            tooltipArgs: v,
                                            className: s()(
                                                w.tooltip,
                                                w[`tooltip__justify-${d}`],
                                                w[`tooltip__align-${m}`],
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    w.truncated,
                                                    !h.isTruncateFinished && i && w.truncated__hide,
                                                ),
                                                style: F,
                                            },
                                            h.isTruncateFinished && i ? h.elementList : f,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var ne = n(5332);
                const ae = (0, n(3215).q)()(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['secondsLeft', 'isFillDisabled', 'isResetDisabled'])),
                        ({ externalModel: e }) => ({
                            fill: e.createCallbackNoArgs('onFill'),
                            reset: e.createCallbackNoArgs('onReset'),
                        }),
                    ),
                    re = ae[0],
                    ue = ae[1],
                    se = 'CrewBannerWidgetApp_base_d8',
                    oe = 'CrewBannerWidgetApp_background_08',
                    ie = 'CrewBannerWidgetApp_base__hovered_d3',
                    le = 'CrewBannerWidgetApp_backgroundImage_4d',
                    ce = 'CrewBannerWidgetApp_text_75',
                    de = 'CrewBannerWidgetApp_countdown_43',
                    me = 'CrewBannerWidgetApp_button_7b',
                    _e = 'CrewBannerWidgetApp_buttonText_13',
                    Ee = R.strings.crew.crewBanner,
                    ge = (0, F.Pi)(({ className: e }) => {
                        const t = ue(),
                            n = t.model,
                            u = t.controls,
                            c = n.isFillDisabled.get(),
                            d = n.isResetDisabled.get(),
                            m = ((e, t, n = 150) => {
                                const r = (0, a.useState)(e),
                                    u = r[0],
                                    s = r[1],
                                    o = (0, ne.N)((e) => s(e), t, n);
                                return {
                                    isHovered: u,
                                    handleMouseEnter: (0, a.useCallback)(() => o(!0), [o]),
                                    handleMouseLeave: (0, a.useCallback)(() => o(!1), [o]),
                                };
                            })(!1, [], 0),
                            _ = m.isHovered,
                            E = m.handleMouseEnter,
                            g = m.handleMouseLeave;
                        return r().createElement(
                            'div',
                            { className: s()(se, _ && ie, e), onMouseEnter: c && d ? void 0 : E, onMouseLeave: g },
                            r().createElement('div', { className: oe }, r().createElement('div', { className: le })),
                            r().createElement(te, { text: Ee.infoText(), classMix: ce, justifyContent: y.FlexEnd }),
                            r().createElement(v, {
                                className: de,
                                duration: n.secondsLeft.get(),
                                icon: i.Timer,
                                style: l.Extended,
                            }),
                            r().createElement(
                                A.i,
                                {
                                    ignoreMouseClick: !0,
                                    header: c
                                        ? Ee.button.fill.tooltip.disable.header()
                                        : Ee.button.fill.tooltip.enable.header(),
                                    body: c
                                        ? Ee.button.fill.tooltip.disable.body()
                                        : Ee.button.fill.tooltip.enable.body(),
                                },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement(
                                        o.u5,
                                        { mixClass: me, disabled: c, onClick: u.fill },
                                        r().createElement('div', { className: _e }, Ee.button.fill.label()),
                                    ),
                                ),
                            ),
                            r().createElement(
                                A.i,
                                {
                                    ignoreMouseClick: !0,
                                    header: d
                                        ? Ee.button.reset.tooltip.disable.header()
                                        : Ee.button.reset.tooltip.enable.header(),
                                    body: d
                                        ? Ee.button.reset.tooltip.disable.body()
                                        : Ee.button.reset.tooltip.enable.body(),
                                },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement(
                                        o.u5,
                                        { mixClass: me, disabled: d, type: o.L$.secondary, onClick: u.reset },
                                        r().createElement('div', { className: _e }, Ee.button.reset.label()),
                                    ),
                                ),
                            ),
                        );
                    }),
                    pe = { rootId: R.views.lobby.crew.widgets.CrewBannerWidget('resId') },
                    he = (0, a.memo)((e) => r().createElement(re, { options: pe }, r().createElement(ge, e)));
            },
            5801: (e, t, n) => {
                'use strict';
                n.d(t, { p: () => Te });
                var a = n(6179),
                    r = n.n(a),
                    u = n(6483),
                    s = n.n(u),
                    o = n(2106),
                    i = n(6373);
                let l;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(l || (l = {}));
                var c = n(3403),
                    d = n(3415),
                    m = n(9480),
                    _ = n(9631);
                const E = 'FilterTitle_base_a7',
                    g = 'FilterTitle_label_05',
                    p = 'FilterTitle_discount_42',
                    h = 'FilterTitle_discountIcon_30',
                    b = ({ label: e, hasDiscount: t, className: n }) =>
                        r().createElement(
                            'div',
                            { className: s()(E, n) },
                            r().createElement('div', { className: g }, e),
                            t && r().createElement('div', { className: p }, r().createElement('div', { className: h })),
                        );
                let f;
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
                })(f || (f = {}));
                var v = n(3649);
                const A = 'ToggleIcon_base_59',
                    F = 'ToggleIcon_base__small_3e',
                    C = 'ToggleIcon_icon_e7',
                    D = r().memo(function ({ icon: e, isSmall: t = !1, classNames: n }) {
                        return r().createElement(
                            'div',
                            { className: s()(A, t && F) },
                            r().createElement('div', {
                                className: s()(C, null == n ? void 0 : n.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var w = n(9690);
                const B = 'VehicleTier_base_9c',
                    y = 'VehicleTier_base__small_fc',
                    k = ({ level: e, isSmall: t = !1 }) =>
                        r().createElement('div', { className: s()(B, t && y) }, (0, w.HG)(e)),
                    S = {
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
                    x = ({ id: e, icon: t, type: n, isSmall: a = !0, isSelected: u = !1 }) =>
                        n === f.VehicleTier
                            ? r().createElement(k, { isSmall: a, level: Number(e) })
                            : r().createElement(D, {
                                  icon: t,
                                  isSmall: a,
                                  classNames: {
                                      icon: s()(S[`icon__${n}`], S[`icon__${n}${(0, v.e)(e)}`], u && S.icon__selected),
                                  },
                              }),
                    T = {
                        base: 'FilterToggleGroup_base_69',
                        title: 'FilterToggleGroup_title_65',
                        content: 'FilterToggleGroup_content_80',
                        toggle: 'FilterToggleGroup_toggle_d4',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_11',
                    };
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                let L;
                !(function (e) {
                    (e.Default = 'default'), (e.InPopup = 'inPopup');
                })(L || (L = {}));
                const I = ({ header: e, body: t, contentId: n, targetId: a }) =>
                        n
                            ? { contentId: n, targetId: a }
                            : t || e
                              ? { header: null != e ? e : void 0, body: null != t ? t : void 0 }
                              : void 0,
                    O = ({
                        id: e,
                        type: t,
                        label: n,
                        hasDiscount: a,
                        filters: u,
                        onClick: o,
                        className: i,
                        toggleProps: l,
                        theme: c = L.Default,
                    }) => {
                        const E = c === L.InPopup;
                        return r().createElement(
                            'div',
                            { className: s()(T.base, T[`base__${c}`], i) },
                            E && r().createElement(b, { className: T.title, label: n, hasDiscount: a }),
                            r().createElement(
                                'div',
                                { className: T.content },
                                m.UI(u, ({ id: n, isSelected: a, tooltip: u, icon: i, counter: c }) =>
                                    r().createElement(
                                        d.l,
                                        { key: n, tooltipArgs: I(u), className: T.toggle },
                                        r().createElement(
                                            _.C,
                                            N({}, l, {
                                                className: s()(T.toggle, null == l ? void 0 : l.className),
                                                isActive: a,
                                                onClick: () => (null == o ? void 0 : o(e, n)),
                                                counter: c,
                                            }),
                                            r().createElement(x, {
                                                id: n,
                                                icon: i,
                                                type: t,
                                                isSmall: E,
                                                isSelected: a,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    };
                var M = n(9197);
                const P = (0, n(3215).q)()(
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
                    W = P[0],
                    H = P[1];
                var j = n(3457),
                    $ = n(3616),
                    z = n(1037),
                    G = n(9367);
                const U = 'PopupButton_base_7c',
                    V = 'PopupButton_popupButtonLabel_ed',
                    Z = 'PopupButton_buttonIconWrapper_d7',
                    q = 'PopupButton_buttonIcon_e0',
                    Y = 'PopupButton_buttonIcon__isHighlighted_84',
                    K = 'PopupButton_discountAlert_c8',
                    X = ({ isHighlighted: e, hasDiscountAlert: t, popoverDirection: n = z.IC.Bottom }) =>
                        r().createElement(
                            'div',
                            { className: U },
                            r().createElement('div', { className: V }, R.strings.crew.filter.popup.button.title()),
                            r().createElement(
                                $.Z,
                                {
                                    contentId: R.views.lobby.crew.popovers.FilterPopoverView('resId'),
                                    targetId: R.views.lobby.crew.widgets.FilterPanelWidget('resId'),
                                    direction: n,
                                },
                                r().createElement(
                                    'div',
                                    { id: 'popup_btn', className: Z },
                                    r().createElement(
                                        _.C,
                                        { type: j.L$.ghost, size: j.qE.small, isActive: e, hasIndicator: !1 },
                                        r().createElement('div', { className: s()(q, e && Y) }),
                                    ),
                                    t && r().createElement(G.Q, { className: K }),
                                ),
                            ),
                        );
                var Q = n(8018);
                const J = 'ResetButton_base_58',
                    ee = 'ResetButton_button_a5',
                    te = 'ResetButton_icon_4a',
                    ne = ({ onClick: e }) =>
                        r().createElement(
                            'div',
                            { className: J },
                            r().createElement(
                                i.i,
                                Q.Xd,
                                r().createElement(
                                    j.u5,
                                    { mixClass: ee, onClick: e, type: j.L$.ghost, size: j.qE.small },
                                    r().createElement('div', { className: te }),
                                ),
                            ),
                        ),
                    ae = 'default',
                    re = 'search',
                    ue = 'email',
                    se = 'password',
                    oe = 'normal',
                    ie = 'disabled',
                    le = 'alert',
                    ce = 'error',
                    de = 'medium',
                    me = {
                        [ae]: '',
                        [ue]: R.strings.common.input.placeholder.email(),
                        [re]: R.strings.common.input.placeholder.search(),
                        [se]: R.strings.common.input.placeholder.password(),
                    },
                    _e = { [ae]: 'text', [ue]: 'text', [re]: 'text', [se]: 'password' },
                    Ee = { [ae]: '', [ue]: 'Invalid email', [re]: '', [se]: '' },
                    ge = R.images.gui.maps.icons.components.input;
                function pe(e, t) {
                    return (
                        t !== ue ||
                        (function (e) {
                            const t = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(t);
                        })(e)
                    );
                }
                var he = n(7727);
                const be = {
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
                    fe = r().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: n = ae,
                            size: u = de,
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
                            onMouseUp: b,
                            onClick: f,
                            onChange: v,
                            onClear: A,
                            onFocus: F,
                            onBlur: C,
                        }) => {
                            const D = (0, a.useState)(!1),
                                w = D[0],
                                B = D[1],
                                y = (0, a.useRef)(null),
                                k = (0, a.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                S = o !== ie,
                                x = (0, a.useCallback)(
                                    (e) => {
                                        S && (B(!0), F && F(e));
                                    },
                                    [S, F],
                                ),
                                T = (0, a.useCallback)(
                                    (e) => {
                                        S && !k.current.mouseOver && (B(!1), C && C(e));
                                    },
                                    [S, C],
                                );
                            (0, a.useEffect)(() => {
                                S && w && d && y.current && y.current.select();
                            }, [d, w, S]);
                            const N = (0, a.useCallback)(
                                    (e) => {
                                        S && v && v(e.target.value);
                                    },
                                    [S, v],
                                ),
                                L = (0, a.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseOver = !0), g && g(e));
                                    },
                                    [S, g],
                                ),
                                I = (0, a.useCallback)(
                                    (e) => {
                                        S &&
                                            y.current &&
                                            (k.current.mouseDown && y.current.focus(),
                                            (k.current.mouseOver = !1),
                                            p && p(e));
                                    },
                                    [S, p],
                                ),
                                R = (0, a.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseDown = !0), h && h(e));
                                    },
                                    [S, h],
                                ),
                                O = (0, a.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseDown = !1), b && b(e));
                                    },
                                    [S, b],
                                ),
                                M = (0, a.useCallback)(
                                    (e) => {
                                        if (S && y.current) {
                                            (!w || (w && e.target !== y.current)) && y.current.focus(), f && f(e);
                                        }
                                    },
                                    [w, S, f],
                                ),
                                P = i || me[n],
                                W = Boolean(_),
                                H = s()(
                                    be.base,
                                    be[`base__${u}`],
                                    l && be[`base__${o}`],
                                    w && be.base__focused,
                                    W && be.base__withIcon,
                                    E,
                                ),
                                j = (0, a.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                $ = s()(be.input, be[`input__${n}`]),
                                z = s()(be.icon, be[`icon__${n}`]),
                                G = s()(be.placeholder, be[`placeholder__${n}`]);
                            return r().createElement(
                                'div',
                                {
                                    id: e,
                                    className: H,
                                    onMouseEnter: L,
                                    onMouseDown: R,
                                    onMouseUp: O,
                                    onMouseLeave: I,
                                    onClick: M,
                                },
                                !S && r().createElement('div', { className: be.disabled }),
                                j && r().createElement('div', { style: j, className: z }),
                                r().createElement('input', {
                                    ref: y,
                                    className: $,
                                    type: _e[n],
                                    value: t,
                                    onChange: N,
                                    disabled: !S,
                                    onFocus: x,
                                    onBlur: T,
                                    maxLength: m,
                                }),
                                P && !t && !w && r().createElement('div', { className: G }, P),
                                c &&
                                    r().createElement('div', {
                                        className: be.clear,
                                        onClick: (e) => {
                                            he.$.playClick(), A && A(e);
                                        },
                                        onMouseEnter: he.$.playHighlight,
                                    }),
                            );
                        },
                    ),
                    ve = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    Ae = ({ variant: e, show: t = !0, helperText: n, helperIcon: u, classMix: o }) => {
                        const i = (0, a.useMemo)(() => {
                                const t =
                                    u ||
                                    (function (e) {
                                        return e === le ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [u, e]),
                            l = s()(ve.base, t && ve.base__shown),
                            c = s()(ve.message, ve[`message__${e}`], o);
                        return r().createElement(
                            'div',
                            { className: l },
                            i && r().createElement('div', { className: ve.icon, style: i }),
                            r().createElement('div', { className: c }, n),
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
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        De.apply(this, arguments)
                    );
                }
                const we = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    Be = (e) => {
                        let t = e.componentId,
                            n = e.type,
                            u = void 0 === n ? ae : n,
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
                            b = e.showHelper,
                            f = void 0 === b || b,
                            v = e.error,
                            A = e.options,
                            F = e.onFocus,
                            C = e.onMouseEnter,
                            D = e.onMouseLeave,
                            w = e.onMouseUp,
                            B = e.onMouseDown,
                            y = e.onChange,
                            k = e.classMix,
                            S = e.controlClassMix,
                            x = e.helperClassMix,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Ce);
                        const N = (0, a.useState)(m),
                            L = N[0],
                            I = N[1],
                            R = (0, a.useState)(h),
                            O = R[0],
                            M = R[1],
                            P = (0, a.useMemo)(() => Object.assign({}, we, A), [A]),
                            W = (0, a.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: m, type: u }),
                            H = (0, a.useCallback)((e) => {
                                e !== W.current.value &&
                                    ((W.current.value = e), (W.current.isChangeHandled = !1), I(e));
                            }, []),
                            j = (0, a.useCallback)(
                                (e) => {
                                    let t = !0;
                                    P.performChangeValidation &&
                                        (t = P.changesValidator ? P.changesValidator(e) : pe(e, W.current.type)),
                                        y && y(e, t);
                                },
                                [y, P],
                            ),
                            $ = (0, a.useCallback)(() => {
                                W.current.debounceTimeout &&
                                    (window.clearTimeout(W.current.debounceTimeout), (W.current.debounceTimeout = 0));
                            }, []),
                            z = (0, a.useCallback)(() => H(''), [H]);
                        (0, a.useEffect)(() => () => $(), [$]);
                        const G = (0, a.useCallback)(
                            (e) => {
                                $(),
                                    P.debounceTime
                                        ? (W.current.debounceTimeout = window.setTimeout(() => {
                                              j(e);
                                          }, P.debounceTime))
                                        : j(e);
                            },
                            [j, $, P.debounceTime],
                        );
                        (0, a.useEffect)(() => {
                            W.current.isChangeHandled ||
                                W.current.value !== L ||
                                (G(W.current.value), (W.current.isChangeHandled = !0));
                        }, [L, G]),
                            (0, a.useEffect)(() => {
                                W.current.isChangeHandled && m !== W.current.value && ((W.current.value = m), I(m)),
                                    (W.current.type = u);
                            }, [m, u]),
                            (0, a.useEffect)(() => {
                                M(h);
                            }, [h, i]);
                        const U = (0, a.useCallback)((e) => C && C(e), [C]),
                            V = (0, a.useCallback)(
                                (e) => {
                                    P.disableHighlightOnFocus && O && M(!1), F && F(e);
                                },
                                [O, F, P.disableHighlightOnFocus],
                            ),
                            Z = (0, a.useCallback)((e) => w && w(e), [w]),
                            q = (0, a.useCallback)((e) => B && B(e), [B]),
                            Y = (0, a.useCallback)((e) => D && D(e), [D]),
                            K = (0, a.useMemo)(
                                () =>
                                    P.withTypeIcon
                                        ? (function (e, t) {
                                              return e === re ? ge.$dyn(`search_${t}`) : '';
                                          })(u, c)
                                        : '',
                                [u, c, P.withTypeIcon],
                            ),
                            X = g || Ee[u],
                            Q = Boolean(L),
                            J = v ? ce : i,
                            ee = Boolean(v) || O,
                            te = (0, a.useMemo)(
                                () => ('boolean' == typeof P.withClear ? Q && P.withClear : Q && u === re),
                                [u, Q, P],
                            ),
                            ne = s()(Fe.base, Fe[`base__${c}`], Fe[`base__${i}`], k);
                        return r().createElement(
                            'div',
                            { id: t, className: ne, onMouseEnter: U, onMouseDown: q, onMouseUp: Z, onMouseLeave: Y },
                            r().createElement(
                                d.l,
                                { tooltipArgs: _ },
                                r().createElement(
                                    fe,
                                    De(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: K,
                                            size: c,
                                            type: u,
                                            variant: J,
                                            value: L,
                                            withClear: te,
                                            highlighted: ee,
                                            selectOnFocus: P.selectOnFocus,
                                            maxLength: P.maxLength,
                                            classMix: S,
                                            onFocus: V,
                                            onChange: H,
                                            onClear: z,
                                        },
                                        T,
                                    ),
                                ),
                            ),
                            X &&
                                r().createElement(
                                    'div',
                                    { className: Fe.helper },
                                    r().createElement(Ae, {
                                        variant: J,
                                        show: f && (P.isPermanentHelper || ee),
                                        helperText: v || X,
                                        helperIcon: P.helperIconSource,
                                        classMix: x,
                                    }),
                                ),
                        );
                    },
                    ye = ({ value: e, placeholder: t, tooltipHeader: n, onChange: a, className: u, tooltipBody: s }) =>
                        r().createElement(
                            i.i,
                            { header: null != n ? n : void 0, body: s, isEnabled: Boolean(n || s) },
                            r().createElement(Be, {
                                type: re,
                                placeholder: null != t ? t : void 0,
                                value: e,
                                classMix: u,
                                onChange: a,
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
                    Se = (0, c.Pi)(({ popoverDirection: e }) => {
                        const t = H(),
                            n = t.model,
                            a = t.controls,
                            u = n.amountInfo.get(),
                            c = u.from,
                            d = u.to,
                            m = n.panelType.get(),
                            _ = n.filter.get(),
                            E = n.hasAppliedFilters.get(),
                            g = E || (0 === c && 0 === d),
                            p = n.popoverTooltipHeader.get(),
                            h = n.popoverTooltipBody.get();
                        return r().createElement(
                            'div',
                            { className: s()(ke.base, ke[`base__${m}`]) },
                            r().createElement(
                                'div',
                                { className: ke.titleWrapper },
                                r().createElement(M.C, {
                                    title: n.title.get(),
                                    isGlowVisible: g,
                                    from: c,
                                    to: d,
                                    className: ke.title,
                                    classNames: { counterGlow: ke.counterGlow },
                                }),
                                E && r().createElement(ne, { onClick: a.resetFilter }),
                            ),
                            r().createElement(
                                'div',
                                { className: ke.filters },
                                n.isSearchEnabled.get() &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(ye, {
                                            value: n.searchString.get(),
                                            onChange: a.search,
                                            className: ke.search,
                                            placeholder: n.searchPlaceholder.get(),
                                            tooltipHeader: n.searchTooltipHeader.get(),
                                            tooltipBody: n.searchTooltipBody.get(),
                                        }),
                                        m === l.Barracks && r().createElement('div', { className: ke.separator }),
                                    ),
                                _.label && r().createElement('div', { className: ke.filterLabel }, _.label),
                                r().createElement(O, {
                                    id: _.id,
                                    label: _.label,
                                    type: _.type,
                                    hasDiscount: _.hasDiscount,
                                    filters: n.filters.get(),
                                    toggleProps: { type: o.L.ghost },
                                    onClick: a.updateFilter,
                                }),
                                n.isPopoverEnabled.get() &&
                                    r().createElement(
                                        i.i,
                                        {
                                            header: null != p ? p : void 0,
                                            body: null != h ? h : void 0,
                                            isEnabled: Boolean(p || h),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: ke.popupButtonWrapper },
                                            r().createElement(X, {
                                                isHighlighted: n.isPopoverHighlighted.get(),
                                                hasDiscountAlert: n.hasDiscountAlert.get(),
                                                popoverDirection: e,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    xe = { rootId: R.views.lobby.crew.widgets.FilterPanelWidget('resId') },
                    Te = r().memo(function ({ popoverDirection: e }) {
                        return r().createElement(W, { options: xe }, r().createElement(Se, { popoverDirection: e }));
                    });
            },
            771: (e, t, n) => {
                'use strict';
                n.d(t, { GT: () => i, I: () => u, jw: () => s, sU: () => a, vA: () => o, y$: () => l, yb: () => r });
                const a = -1,
                    r = 1,
                    u = 100,
                    s = 'new_skill',
                    o = 9,
                    i = 6,
                    l = -1;
                let c;
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
                })(c || (c = {}));
            },
            6880: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
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
            8055: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            4769: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            4723: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, n, a] = deferred[i], u = !0, s = 0; s < t.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((u = !1), a < r && (r = a));
                    if (u) {
                        deferred.splice(i--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, n, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (__webpack_require__.j = 1625),
        (() => {
            var e = { 1625: 0, 1912: 0, 3595: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        r,
                        [u, s, o] = n,
                        i = 0;
                    if (u.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(n); i < u.length; i++)
                        (r = u[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(1614));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
