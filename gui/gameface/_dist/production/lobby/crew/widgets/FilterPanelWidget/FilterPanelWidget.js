(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var n = t(6483),
                    o = t.n(n),
                    r = t(7727),
                    a = t(6179),
                    i = t.n(a),
                    s = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: c,
                    mixClass: _,
                    soundHover: E,
                    soundClick: d,
                    onMouseEnter: A,
                    onMouseMove: F,
                    onMouseDown: D,
                    onMouseUp: C,
                    onMouseLeave: m,
                    onClick: B,
                }) => {
                    const p = (0, a.useRef)(null),
                        v = (0, a.useState)(t),
                        b = v[0],
                        g = v[1],
                        h = (0, a.useState)(!1),
                        f = h[0],
                        w = h[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                b && null !== p.current && !p.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [b]),
                        (0, a.useEffect)(() => {
                            g(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: p,
                                className: o()(
                                    s.Z.base,
                                    s.Z[`base__${n}`],
                                    c && s.Z.base__disabled,
                                    u && s.Z[`base__${u}`],
                                    b && s.Z.base__focus,
                                    f && s.Z.base__highlightActive,
                                    _,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== E && (0, r.G)(E), A && A(e));
                                },
                                onMouseMove: function (e) {
                                    F && F(e);
                                },
                                onMouseUp: function (e) {
                                    c || (C && C(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== d && (0, r.G)(d),
                                        D && D(e),
                                        t && (c || (p.current && (p.current.focus(), g(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (m && m(e), w(!1));
                                },
                                onClick: function (e) {
                                    c || (B && B(e));
                                },
                            },
                            n !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: s.Z.back }),
                                    i().createElement('span', { className: s.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: o()(s.Z.state, s.Z.state__default) },
                                i().createElement('span', { className: s.Z.stateDisabled }),
                                i().createElement('span', { className: s.Z.stateHighlightHover }),
                                i().createElement('span', { className: s.Z.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: s.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _ = c;
            },
            2106: (e, u, t) => {
                let n, o;
                t.d(u, { L: () => n, q: () => o }),
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
                    })(o || (o = {}));
            },
            9987: (e, u, t) => {
                t.d(u, { A: () => c });
                var n = t(6483),
                    o = t.n(n),
                    r = t(6179),
                    a = t.n(r),
                    i = t(8055);
                const s = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        l.apply(null, arguments)
                    );
                }
                const c = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        r = e.fadeInAnimation,
                        c = e.hide,
                        _ = e.maximumNumber,
                        E = e.className,
                        d = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, s);
                    const A = n ? null : t,
                        F = 'string' == typeof A;
                    if ((A && !F && A < 0) || 0 === A) return null;
                    const D = A && !F && A > _,
                        C = o()(
                            i.Z.base,
                            i.Z[`base__${u}`],
                            r && i.Z.base__animated,
                            c && i.Z.base__hidden,
                            !A && i.Z.base__pattern,
                            n && i.Z.base__empty,
                            E,
                        );
                    return a().createElement(
                        'div',
                        l({ className: C }, d),
                        a().createElement('div', { className: i.Z.bg }),
                        a().createElement('div', { className: i.Z.pattern }),
                        a().createElement(
                            'div',
                            { className: o()(i.Z.value, F && i.Z.value__text) },
                            D ? _ : A,
                            D && a().createElement('span', { className: i.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            1037: (e, u, t) => {
                t.d(u, { IC: () => n });
                var n,
                    o = t(6483),
                    r = t.n(o),
                    a = t(6373),
                    i = t(3138),
                    s = t(2039),
                    l = t(5099),
                    c = t(7727),
                    _ = t(9916),
                    E = t(6179),
                    d = t.n(E),
                    A = t(4769),
                    F = t(8475);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(n || (n = {}));
                const D = ['__left', '__right', '__top', '__bottom'];
                (0, E.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: n = {} }, o) => {
                        const C = (0, E.useRef)(null),
                            m = (0, E.useRef)(null),
                            B = (0, E.useRef)(null),
                            p = (0, E.useState)(window.decorator && window.decorator.directionType),
                            v = p[0],
                            b = p[1],
                            g = (0, E.useCallback)(() => {
                                c.$.playClick(), i.O.view.sendEvent.close();
                            }, []),
                            h = (0, E.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            f = r()(A.Z.arrow, A.Z[`arrow${D[v]}`]);
                        (0, s.b)(
                            () => (
                                i.O.client.events.mouse.enableOutside(),
                                i.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (t ? t() : i.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const w = (0, E.useCallback)(
                                (e) => {
                                    let u = e.target;
                                    do {
                                        if (u === C.current || u === B.current) return;
                                        u = u.parentNode;
                                    } while (u);
                                    const n = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = i.O.client.getMouseGlobalPosition(),
                                            u = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                            t =
                                                e.x < n.boundX ||
                                                e.x > n.boundX + n.boundWidth ||
                                                e.y > n.boundY + n.boundHeight ||
                                                e.y < n.boundY;
                                        if (u && !t) return;
                                    }
                                    t ? t() : i.O.view.sendEvent.close('popover');
                                },
                                [C, B, t],
                            ),
                            y = (0, F.w)(),
                            T = (0, E.useCallback)(() => {
                                const e = m.current;
                                if (e)
                                    return (
                                        i.O.view.freezeTextureBeforeResize(),
                                        y.run(() => {
                                            const u = e.scrollWidth,
                                                t = e.scrollHeight;
                                            i.O.view.resize(u, t), b(window.decorator.directionType);
                                        })
                                    );
                            }, [y]);
                        return (
                            (0, E.useImperativeHandle)(o, () => ({ updateSize: T })),
                            (0, s.b)(() => {
                                i.O.view.setInputPaddingsRem(58);
                            }),
                            (0, E.useEffect)(() => {
                                document.addEventListener('mousedown', w, { capture: !0 });
                                const e = (0, l.B)((0, _.Eu)());
                                return (
                                    !u && e.promise.then(() => T()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', w);
                                    }
                                );
                            }, [T, w, u]),
                            d().createElement(
                                'div',
                                { className: A.Z.base, ref: m },
                                d().createElement(
                                    'div',
                                    { className: A.Z.decorator },
                                    d().createElement(
                                        'div',
                                        { className: A.Z.content, ref: C },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            d().createElement(
                                                a.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                d().createElement('div', {
                                                    className: A.Z.closeBtn,
                                                    onClick: g,
                                                    onMouseEnter: h,
                                                    ref: B,
                                                }),
                                            ),
                                    ),
                                    d().createElement('div', { className: f, style: n.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, u, t) => {
                t.d(u, { Z: () => l });
                var n = t(1037),
                    o = t(9916),
                    r = t(6179),
                    a = t.n(r);
                const i = [
                    'contentId',
                    'decoratorId',
                    'direction',
                    'targetId',
                    'args',
                    'onClick',
                    'children',
                    'isEnabled',
                ];
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
                const l = (e) => {
                    let u = e.contentId,
                        t = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? n.IC.Top : l,
                        _ = e.targetId,
                        E = e.args,
                        d = e.onClick,
                        A = e.children,
                        F = e.isEnabled,
                        D = void 0 === F || F,
                        C = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, i);
                    const m = (0, r.useRef)(null),
                        B = (0, r.useCallback)(() => {
                            if ((0, o.wU)()) return (0, o.SW)();
                            m.current && (0, o.P3)(u, c, m.current, t, _, E);
                        }, [u, c, E, t, _]);
                    return a().createElement(
                        'div',
                        s(
                            {
                                ref: m,
                                onMouseDown:
                                    ((p = A.props.onClick),
                                    (e) => {
                                        D && (B(), d && d(e), p && p(e));
                                    }),
                            },
                            C,
                        ),
                        A,
                    );
                    var p;
                };
            },
            7078: (e, u, t) => {
                t.d(u, { t: () => s });
                var n = t(6179),
                    o = t.n(n),
                    r = t(2056);
                const a = ['children'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
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
                        })(e, a);
                    return o().createElement(
                        r.u,
                        i(
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
                t.d(u, { l: () => l });
                var n = t(6179),
                    o = t.n(n),
                    r = t(7078),
                    a = t(6373),
                    i = t(2056);
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
                    const n = o().createElement('div', { className: t }, e);
                    if (u.header || u.body) return o().createElement(a.i, u, n);
                    const l = u.contentId;
                    return l ? o().createElement(i.u, s({}, u, { contentId: l }), n) : o().createElement(r.t, u, n);
                };
            },
            6373: (e, u, t) => {
                t.d(u, { i: () => l });
                var n = t(2056),
                    o = t(6179),
                    r = t.n(o);
                const a = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
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
                            })(e, a);
                        const A = (0, o.useMemo)(() => {
                            const e = Object.assign({}, E, { body: t, header: l, note: c, alert: _ });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [_, t, l, c, E]);
                        return r().createElement(
                            n.u,
                            i(
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
                t.d(u, { u: () => l });
                var n = t(7902),
                    o = t(9916),
                    r = t(6179);
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
                function i(e) {
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
                                    type: o.B0.TOOLTIP,
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
                            o = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            E = e.onClick,
                            d = e.ignoreShowDelay,
                            A = void 0 !== d && d,
                            F = e.ignoreMouseClick,
                            D = void 0 !== F && F,
                            C = e.decoratorId,
                            m = void 0 === C ? 0 : C,
                            B = e.isEnabled,
                            p = void 0 === B || B,
                            v = e.targetId,
                            b = void 0 === v ? 0 : v,
                            g = e.onShow,
                            h = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, a);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => b || (0, n.F)().resId, [b]),
                            T = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(t, m, { isMouseEvent: !0, on: !0, arguments: i(o) }, y),
                                    g && g(),
                                    (w.current.isVisible = !0));
                            }, [t, m, o, y, g]),
                            O = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        s(t, m, { on: !1 }, y),
                                        w.current.isVisible && h && h(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, m, y, h]),
                            P = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && O();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', P, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', P, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === p && O();
                            }, [p, O]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', O),
                                    () => {
                                        window.removeEventListener('mouseleave', O), O();
                                    }
                                ),
                                [O],
                            );
                        return p
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(T, A ? 100 : 400)),
                                                      l && l(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              O(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === D && O(), null == E || E(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === D && O(), null == _ || _(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : u;
                        var k;
                    };
            },
            8246: (e, u, t) => {
                t.d(u, { U: () => i });
                var n = t(3138);
                function o(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return r(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? r(e, u)
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
                function r(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const a = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: u = 0, getRoot: t = a, context: r = 'model' } = {}) {
                    const i = new Map();
                    function s(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = i.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = t(u),
                            o = r.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? o
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, o);
                    };
                    return {
                        subscribe: (t, o) => {
                            const a = 'string' == typeof o ? `${r}.${o}` : r,
                                s = n.O.view.addModelObserver(a, u, !0);
                            return i.set(s, t), e && t(l(o)), s;
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
                            for (var e, t = o(i.keys()); !(e = t()).done; ) {
                                s(e.value, u);
                            }
                        },
                        unsubscribe: s,
                    };
                }
            },
            3215: (e, u, t) => {
                t.d(u, { q: () => s });
                var n = t(4598),
                    o = t(9174),
                    r = t(6179),
                    a = t.n(r),
                    i = t(8246);
                const s = () => (e, u) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: _ }) {
                            const E = (0, r.useRef)([]),
                                d = (t, r, a) => {
                                    var s;
                                    const l = i.U(r),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == a ? void 0 : a.getter) ? s : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === t ? (null == a ? void 0 : a.getter(e)) : c.readByPath(e),
                                        d = (e) => E.current.push(e),
                                        A = e({
                                            mode: t,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const r = null != u ? u : _(e),
                                                        a = o.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, o.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const r = null != u ? u : _(e),
                                                        a = o.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, o.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = _(u);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, u) => ((e[u] = o.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, o.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            a = Object.entries(r),
                                                            i = a.reduce(
                                                                (e, [u, t]) => ((e[t] = o.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, o.aD)((e) => {
                                                                        a.forEach(([u, t]) => {
                                                                            i[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: d,
                                        }),
                                        F = { mode: t, model: A, externalModel: c, cleanup: d };
                                    return {
                                        model: A,
                                        controls: 'mocks' === t && a ? a.controls(F) : u(F),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                A = (0, r.useRef)(!1),
                                F = (0, r.useState)(s),
                                D = F[0],
                                C = F[1],
                                m = (0, r.useState)(() => d(s, l, _)),
                                B = m[0],
                                p = m[1];
                            return (
                                (0, r.useEffect)(() => {
                                    A.current ? p(d(D, l, _)) : (A.current = !0);
                                }, [_, D, l]),
                                (0, r.useEffect)(() => {
                                    C(s);
                                }, [s]),
                                (0, r.useEffect)(
                                    () => () => {
                                        B.externalModel.dispose(), E.current.forEach((e) => e());
                                    },
                                    [B],
                                ),
                                a().createElement(t.Provider, { value: B }, c)
                            );
                        },
                        () => (0, r.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => s, on: () => i, onResize: () => r, onScaleUpdated: () => a });
                var n = t(2472),
                    o = t(1176);
                const r = (0, n.E)('clientResized'),
                    a = (0, n.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, o.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, o.R)(!0);
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
                            : (0, o.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const r = `mouse${u}`,
                                        a = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        n(),
                                        () => {
                                            o &&
                                                (a(),
                                                window.removeEventListener(r, i),
                                                (e.listeners -= 1),
                                                n(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
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
                            e.enabled && (0, o.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, o.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => o.G,
                        setRTPC: () => o.E,
                    });
                var n = t(527),
                    o = t(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function o(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => o, G: () => n });
            },
            2472: (e, u, t) => {
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
                t.d(u, { O: () => r });
                var n = t(5959),
                    o = t(514);
                const r = { view: t(7641), client: n, sound: o.ZP };
            },
            514: (e, u, t) => {
                t.d(u, { ZP: () => a });
                var n = t(5959);
                const o = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(o).reduce((e, u) => ((e[u] = () => (0, n.playSound)(o[u])), e), {}),
                    a = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function o(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => o, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                t.d(u, { U: () => o });
                var n = t(2472);
                const o = {
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
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => o.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => h,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getScale: () => C,
                        getSize: () => d,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => g,
                        isFocused: () => v,
                        pxToRem: () => m,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => T,
                    });
                var n = t(3722),
                    o = t(6112),
                    r = t(6538),
                    a = t(8566);
                const i = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, i);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function _(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, i);
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
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function C() {
                    return viewEnv.getScale();
                }
                function m(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function g() {
                    return viewEnv.isEventHandled();
                }
                function h() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(o.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === o.W[u]), e),
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
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => l });
                const n = ['args'];
                const o = 2,
                    r = 16,
                    a = 32,
                    i = 64,
                    s = (e, u) => {
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
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var o;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? o : a);
                        },
                        minimize() {
                            s(i);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                t.d(u, { jv: () => n });
                function n() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
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
            2039: (e, u, t) => {
                t.d(u, { b: () => o, k: () => r });
                var n = t(6179);
                const o = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    r = (e) => {
                        (0, n.useEffect)(() => e, []);
                    };
            },
            8475: (e, u, t) => {
                t.d(u, { w: () => a });
                var n = t(6179),
                    o = t(2039);
                const r = 0;
                function a() {
                    const e = (0, n.useRef)(r);
                    return (
                        (0, o.k)(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (u) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                u(), (e.current = r);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = r);
                                },
                                get isRunning() {
                                    return e.current !== r;
                                },
                            }),
                            [],
                        )
                    );
                }
            },
            5521: (e, u, t) => {
                let n, o;
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
                    })(o || (o = {}));
            },
            9480: (e, u, t) => {
                t.d(u, { UI: () => n });
                function n(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
            },
            5099: (e, u, t) => {
                t.d(u, { B: () => n });
                const n = (e) => {
                    let u = !1;
                    return {
                        promise: new Promise((t, n) => {
                            e.then((e) => !u && t(e)).catch((e) => !u && n(e));
                        }),
                        cancel() {
                            u = !0;
                        },
                    };
                };
            },
            9690: (e, u, t) => {
                t.d(u, { HG: () => a });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    o = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const r = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    a = (e) =>
                        r
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = o.length - 1; t >= 0; t--) for (; e >= o[t]; ) (u += n[t]), (e -= o[t]);
                                  return u;
                              })(e);
            },
            7727: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { $: () => o, G: () => n });
                const o = {
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
            3649: (e, u, t) => {
                t.d(u, { e: () => o });
                t(1281);
                let n;
                function o(e) {
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
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => r });
                var n = t(3138);
                class o {
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
                        return window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, o);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                o.__instance = void 0;
                const r = o;
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
                t.d(u, { B0: () => i, wU: () => g, ry: () => C, Eu: () => m, SW: () => v, P3: () => b });
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
                const o = n;
                var r = t(1358);
                var a = t(8613);
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
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    d = t(3138);
                const A = ['args'];
                function F(e, u, t, n, o, r, a) {
                    try {
                        var i = e[r](a),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(n, o);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                    return new Promise(function (n, o) {
                                        var r = e.apply(u, t);
                                        function a(e) {
                                            F(r, n, o, a, i, 'next', e);
                                        }
                                        function i(e) {
                                            F(r, n, o, a, i, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    m = () =>
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
                            const o = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, A);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    p = () => B(i.CLOSE),
                    v = () => B(i.POP_OVER, { on: !1 }),
                    b = (e, u, t, n, o = R.invalid('resId'), r) => {
                        const a = d.O.view.getViewGlobalPosition(),
                            s = t.getBoundingClientRect(),
                            l = s.x,
                            c = s.y,
                            _ = s.width,
                            E = s.height,
                            A = {
                                x: d.O.view.pxToRem(l) + a.x,
                                y: d.O.view.pxToRem(c) + a.y,
                                width: d.O.view.pxToRem(_),
                                height: d.O.view.pxToRem(E),
                            };
                        B(i.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: o,
                            direction: u,
                            bbox: D(A),
                            on: !0,
                            args: r,
                        });
                    },
                    g = () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                    h = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var f = t(7572);
                const w = o.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => B(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: v,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: b,
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, p);
                        },
                        handleViewEvent: B,
                        onBindingsReady: C,
                        onLayoutReady: m,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: g,
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const o = Object.prototype.toString.call(u[n]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < o.length; u++) t[n].push({ value: e(o[u].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, u, t) => {
                t.d(u, { Z5: () => n, cy: () => o });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            9367: (e, u, t) => {
                t.d(u, { Q: () => _ });
                var n = t(6483),
                    o = t.n(n),
                    r = t(9987),
                    a = t(6179),
                    i = t.n(a);
                const s = 'AlertCounter_base_f3',
                    l = 'AlertCounter_counter_da',
                    c = 'AlertCounter_label_18',
                    _ = ({ value: e, className: u }) =>
                        i().createElement(
                            'div',
                            { className: o()(s, u) },
                            i().createElement(r.A, { value: e, className: l }),
                            !e && i().createElement('div', { className: c }, R.strings.crew.common.exclamationMark()),
                        );
            },
            9197: (e, u, t) => {
                t.d(u, { C: () => C });
                var n = t(6483),
                    o = t.n(n),
                    r = t(6179),
                    a = t.n(r);
                const i = 'NumberRange_base_5e',
                    s = 'NumberRange_base__animation_79',
                    l = 'NumberRange_from_70',
                    c = 'NumberRange_from__red_f8',
                    _ = 'NumberRange_separator_c0',
                    E = a().memo(function ({ from: e, to: u, className: t }) {
                        return a().createElement(
                            'div',
                            { className: o()(i, e <= 0 && s, t) },
                            a().createElement('div', { className: o()(l, e <= 0 && u > 0 && c) }, e),
                            e !== u &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: _ }, '/'),
                                    a().createElement('div', null, u),
                                ),
                        );
                    }),
                    d = 'NumberRangeWithLabel_base_2b',
                    A = 'NumberRangeWithLabel_title_94',
                    F = 'NumberRangeWithLabel_counter_00',
                    D = 'NumberRangeWithLabel_counterGlow_1f',
                    C = ({ title: e, isGlowVisible: u = !1, className: t, classNames: n, from: i, to: s }) => {
                        const l = (0, r.useMemo)(
                            () => ({
                                left: i !== s ? 7 * String(i).length + 4 : Math.round((7 * String(i).length) / 2),
                            }),
                            [i, s],
                        );
                        return a().createElement(
                            'div',
                            { className: o()(d, t) },
                            a().createElement('div', { className: A }, e),
                            a().createElement(
                                'div',
                                { className: F },
                                a().createElement(E, { from: i, to: s }),
                                u &&
                                    a().createElement('div', {
                                        style: l,
                                        className: o()(D, null == n ? void 0 : n.counterGlow),
                                    }),
                            ),
                        );
                    };
            },
            9631: (e, u, t) => {
                t.d(u, { C: () => d });
                var n = t(6483),
                    o = t.n(n),
                    r = t(3457),
                    a = t(2106),
                    i = t(9987),
                    s = t(6179),
                    l = t.n(s),
                    c = t(4723);
                const _ = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
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
                const d = l().memo(function (e) {
                    let u = e.isActive,
                        t = e.counter,
                        n = e.className,
                        s = e.children,
                        d = e.type,
                        A = void 0 === d ? a.L.secondary : d,
                        F = e.size,
                        D = void 0 === F ? a.q.small : F,
                        C = e.hasIndicator,
                        m = void 0 === C || C,
                        B = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, _);
                    return l().createElement(
                        'div',
                        { className: o()(c.Z.base, n, u && c.Z.base__active) },
                        l().createElement(r.u5, E({ type: A, size: D, mixClass: c.Z.button }, B), s),
                        l().createElement('div', { className: c.Z.overlay }),
                        m && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(t) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(i.A, { value: t, size: 'small' }),
                            ),
                    );
                });
            },
            8018: (e, u, t) => {
                t.d(u, { Xd: () => o });
                t(771), t(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let n;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(n || (n = {}));
                const o = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let r;
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
                })(r || (r = {}));
                let a;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(a || (a = {}));
            },
            5801: (e, u, t) => {
                var n = t(6179),
                    o = t.n(n),
                    r = t(6483),
                    a = t.n(r),
                    i = t(2106),
                    s = t(6373);
                let l;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(l || (l = {}));
                var c = t(3403),
                    _ = t(3415),
                    E = t(9480),
                    d = t(9631);
                const A = 'FilterTitle_base_a7',
                    F = 'FilterTitle_label_05',
                    D = 'FilterTitle_discount_42',
                    C = 'FilterTitle_discountIcon_30',
                    m = ({ label: e, hasDiscount: u, className: t }) =>
                        o().createElement(
                            'div',
                            { className: a()(A, t) },
                            o().createElement('div', { className: F }, e),
                            u && o().createElement('div', { className: D }, o().createElement('div', { className: C })),
                        );
                let B;
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
                })(B || (B = {}));
                var p = t(3649);
                const v = 'ToggleIcon_base_59',
                    b = 'ToggleIcon_base__small_3e',
                    g = 'ToggleIcon_icon_e7',
                    h = o().memo(function ({ icon: e, isSmall: u = !1, classNames: t }) {
                        return o().createElement(
                            'div',
                            { className: a()(v, u && b) },
                            o().createElement('div', {
                                className: a()(g, null == t ? void 0 : t.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var f = t(9690);
                const w = 'VehicleTier_base_9c',
                    y = 'VehicleTier_base__small_fc',
                    T = ({ level: e, isSmall: u = !1 }) =>
                        o().createElement('div', { className: a()(w, u && y) }, (0, f.HG)(e)),
                    O = {
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
                    P = ({ id: e, icon: u, type: t, isSmall: n = !0, isSelected: r = !1 }) =>
                        t === B.VehicleTier
                            ? o().createElement(T, { isSmall: n, level: Number(e) })
                            : o().createElement(h, {
                                  icon: u,
                                  isSmall: n,
                                  classNames: {
                                      icon: a()(O[`icon__${t}`], O[`icon__${t}${(0, p.e)(e)}`], r && O.icon__selected),
                                  },
                              }),
                    k = {
                        base: 'FilterToggleGroup_base_69',
                        title: 'FilterToggleGroup_title_65',
                        content: 'FilterToggleGroup_content_80',
                        toggle: 'FilterToggleGroup_toggle_d4',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_11',
                    };
                function I() {
                    return (
                        (I = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        I.apply(null, arguments)
                    );
                }
                let M;
                !(function (e) {
                    (e.Default = 'default'), (e.InPopup = 'inPopup');
                })(M || (M = {}));
                const N = ({ header: e, body: u, contentId: t, targetId: n }) =>
                        t
                            ? { contentId: t, targetId: n }
                            : u || e
                              ? { header: null != e ? e : void 0, body: null != u ? u : void 0 }
                              : void 0,
                    S = ({
                        id: e,
                        type: u,
                        label: t,
                        hasDiscount: n,
                        filters: r,
                        onClick: i,
                        className: s,
                        toggleProps: l,
                        theme: c = M.Default,
                    }) => {
                        const A = c === M.InPopup;
                        return o().createElement(
                            'div',
                            { className: a()(k.base, k[`base__${c}`], s) },
                            A && o().createElement(m, { className: k.title, label: t, hasDiscount: n }),
                            o().createElement(
                                'div',
                                { className: k.content },
                                E.UI(r, ({ id: t, isSelected: n, tooltip: r, icon: s, counter: c }) =>
                                    o().createElement(
                                        _.l,
                                        { key: t, tooltipArgs: N(r), className: k.toggle },
                                        o().createElement(
                                            d.C,
                                            I({}, l, {
                                                className: a()(k.toggle, null == l ? void 0 : l.className),
                                                isActive: n,
                                                onClick: () => (null == i ? void 0 : i(e, t)),
                                                counter: c,
                                            }),
                                            o().createElement(P, {
                                                id: t,
                                                icon: s,
                                                type: u,
                                                isSmall: A,
                                                isSelected: n,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    };
                var x = t(9197);
                const L = (0, t(3215).q)()(
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
                            updateFilter: e.createCallback((e, u) => ({ groupID: e, toggleID: u }), 'onUpdateFilter'),
                            resetFilter: e.createCallbackNoArgs('onResetFilter'),
                        }),
                    ),
                    W = L[0],
                    H = L[1];
                var G = t(3457),
                    V = t(3616),
                    U = t(1037),
                    j = t(9367);
                const Z = 'PopupButton_base_7c',
                    z = 'PopupButton_popupButtonLabel_ed',
                    q = 'PopupButton_buttonIconWrapper_d7',
                    K = 'PopupButton_buttonIcon_e0',
                    $ = 'PopupButton_buttonIcon__isHighlighted_84',
                    Y = 'PopupButton_discountAlert_c8',
                    X = ({ isHighlighted: e, hasDiscountAlert: u, popoverDirection: t = U.IC.Bottom }) =>
                        o().createElement(
                            'div',
                            { className: Z },
                            o().createElement('div', { className: z }, R.strings.crew.filter.popup.button.title()),
                            o().createElement(
                                V.Z,
                                {
                                    contentId: R.views.lobby.crew.popovers.FilterPopoverView('resId'),
                                    targetId: R.views.lobby.crew.widgets.FilterPanelWidget('resId'),
                                    direction: t,
                                },
                                o().createElement(
                                    'div',
                                    { id: 'popup_btn', className: q },
                                    o().createElement(
                                        d.C,
                                        { type: G.L$.ghost, size: G.qE.small, isActive: e, hasIndicator: !1 },
                                        o().createElement('div', { className: a()(K, e && $) }),
                                    ),
                                    u && o().createElement(j.Q, { className: Y }),
                                ),
                            ),
                        );
                var Q = t(8018);
                const J = 'ResetButton_base_58',
                    ee = 'ResetButton_button_a5',
                    ue = 'ResetButton_icon_4a',
                    te = ({ onClick: e }) =>
                        o().createElement(
                            'div',
                            { className: J },
                            o().createElement(
                                s.i,
                                Q.Xd,
                                o().createElement(
                                    G.u5,
                                    { mixClass: ee, onClick: e, type: G.L$.ghost, size: G.qE.small },
                                    o().createElement('div', { className: ue }),
                                ),
                            ),
                        ),
                    ne = 'default',
                    oe = 'search',
                    re = 'email',
                    ae = 'password',
                    ie = 'normal',
                    se = 'disabled',
                    le = 'alert',
                    ce = 'error',
                    _e = 'medium',
                    Ee = {
                        [ne]: '',
                        [re]: R.strings.common.input.placeholder.email(),
                        [oe]: R.strings.common.input.placeholder.search(),
                        [ae]: R.strings.common.input.placeholder.password(),
                    },
                    de = { [ne]: 'text', [re]: 'text', [oe]: 'text', [ae]: 'password' },
                    Ae = { [ne]: '', [re]: 'Invalid email', [oe]: '', [ae]: '' },
                    Fe = R.images.gui.maps.icons.components.input;
                function De(e, u) {
                    return (
                        u !== re ||
                        (function (e) {
                            const u = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(u);
                        })(e)
                    );
                }
                var Ce = t(7727);
                const me = {
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
                    Be = o().memo(
                        ({
                            componentId: e,
                            value: u = '',
                            type: t = ne,
                            size: r = _e,
                            variant: i = ie,
                            placeholder: s = '',
                            highlighted: l,
                            withClear: c,
                            selectOnFocus: _ = !0,
                            maxLength: E,
                            iconSource: d,
                            classMix: A,
                            onMouseEnter: F,
                            onMouseLeave: D,
                            onMouseDown: C,
                            onMouseUp: m,
                            onClick: B,
                            onChange: p,
                            onClear: v,
                            onFocus: b,
                            onBlur: g,
                        }) => {
                            const h = (0, n.useState)(!1),
                                f = h[0],
                                w = h[1],
                                y = (0, n.useRef)(null),
                                T = (0, n.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                O = i !== se,
                                P = (0, n.useCallback)(
                                    (e) => {
                                        O && (w(!0), b && b(e));
                                    },
                                    [O, b],
                                ),
                                k = (0, n.useCallback)(
                                    (e) => {
                                        O && !T.current.mouseOver && (w(!1), g && g(e));
                                    },
                                    [O, g],
                                );
                            (0, n.useEffect)(() => {
                                O && f && _ && y.current && y.current.select();
                            }, [_, f, O]);
                            const R = (0, n.useCallback)(
                                    (e) => {
                                        O && p && p(e.target.value);
                                    },
                                    [O, p],
                                ),
                                I = (0, n.useCallback)(
                                    (e) => {
                                        O && ((T.current.mouseOver = !0), F && F(e));
                                    },
                                    [O, F],
                                ),
                                M = (0, n.useCallback)(
                                    (e) => {
                                        O &&
                                            y.current &&
                                            (T.current.mouseDown && y.current.focus(),
                                            (T.current.mouseOver = !1),
                                            D && D(e));
                                    },
                                    [O, D],
                                ),
                                N = (0, n.useCallback)(
                                    (e) => {
                                        O && ((T.current.mouseDown = !0), C && C(e));
                                    },
                                    [O, C],
                                ),
                                S = (0, n.useCallback)(
                                    (e) => {
                                        O && ((T.current.mouseDown = !1), m && m(e));
                                    },
                                    [O, m],
                                ),
                                x = (0, n.useCallback)(
                                    (e) => {
                                        if (O && y.current) {
                                            (!f || (f && e.target !== y.current)) && y.current.focus(), B && B(e);
                                        }
                                    },
                                    [f, O, B],
                                ),
                                L = s || Ee[t],
                                W = Boolean(d),
                                H = a()(
                                    me.base,
                                    me[`base__${r}`],
                                    l && me[`base__${i}`],
                                    f && me.base__focused,
                                    W && me.base__withIcon,
                                    A,
                                ),
                                G = (0, n.useMemo)(() => (d ? { backgroundImage: `url(${d})` } : null), [d]),
                                V = a()(me.input, me[`input__${t}`]),
                                U = a()(me.icon, me[`icon__${t}`]),
                                j = a()(me.placeholder, me[`placeholder__${t}`]);
                            return o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: H,
                                    onMouseEnter: I,
                                    onMouseDown: N,
                                    onMouseUp: S,
                                    onMouseLeave: M,
                                    onClick: x,
                                },
                                !O && o().createElement('div', { className: me.disabled }),
                                G && o().createElement('div', { style: G, className: U }),
                                o().createElement('input', {
                                    ref: y,
                                    className: V,
                                    type: de[t],
                                    value: u,
                                    onChange: R,
                                    disabled: !O,
                                    onFocus: P,
                                    onBlur: k,
                                    maxLength: E,
                                }),
                                L && !u && !f && o().createElement('div', { className: j }, L),
                                c &&
                                    o().createElement('div', {
                                        className: me.clear,
                                        onClick: (e) => {
                                            Ce.$.playClick(), v && v(e);
                                        },
                                        onMouseEnter: Ce.$.playHighlight,
                                    }),
                            );
                        },
                    ),
                    pe = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    ve = ({ variant: e, show: u = !0, helperText: t, helperIcon: r, classMix: i }) => {
                        const s = (0, n.useMemo)(() => {
                                const u =
                                    r ||
                                    (function (e) {
                                        return e === le ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return u && { backgroundImage: `url(${u})` };
                            }, [r, e]),
                            l = a()(pe.base, u && pe.base__shown),
                            c = a()(pe.message, pe[`message__${e}`], i);
                        return o().createElement(
                            'div',
                            { className: l },
                            s && o().createElement('div', { className: pe.icon, style: s }),
                            o().createElement('div', { className: c }, t),
                        );
                    },
                    be = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    ge = [
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
                function he() {
                    return (
                        (he = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        he.apply(null, arguments)
                    );
                }
                const fe = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    we = (e) => {
                        let u = e.componentId,
                            t = e.type,
                            r = void 0 === t ? ne : t,
                            i = e.variant,
                            s = void 0 === i ? ie : i,
                            l = e.size,
                            c = void 0 === l ? _e : l,
                            E = e.value,
                            d = e.tooltipArgs,
                            A = e.helperText,
                            F = void 0 === A ? '' : A,
                            D = e.isValidated,
                            C = void 0 === D || D,
                            m = e.showHelper,
                            B = void 0 === m || m,
                            p = e.error,
                            v = e.options,
                            b = e.onFocus,
                            g = e.onMouseEnter,
                            h = e.onMouseLeave,
                            f = e.onMouseUp,
                            w = e.onMouseDown,
                            y = e.onChange,
                            T = e.classMix,
                            O = e.controlClassMix,
                            P = e.helperClassMix,
                            k = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, ge);
                        const R = (0, n.useState)(E),
                            I = R[0],
                            M = R[1],
                            N = (0, n.useState)(C),
                            S = N[0],
                            x = N[1],
                            L = (0, n.useMemo)(() => Object.assign({}, fe, v), [v]),
                            W = (0, n.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: E, type: r }),
                            H = (0, n.useCallback)((e) => {
                                e !== W.current.value &&
                                    ((W.current.value = e), (W.current.isChangeHandled = !1), M(e));
                            }, []),
                            G = (0, n.useCallback)(
                                (e) => {
                                    let u = !0;
                                    L.performChangeValidation &&
                                        (u = L.changesValidator ? L.changesValidator(e) : De(e, W.current.type)),
                                        y && y(e, u);
                                },
                                [y, L],
                            ),
                            V = (0, n.useCallback)(() => {
                                W.current.debounceTimeout &&
                                    (window.clearTimeout(W.current.debounceTimeout), (W.current.debounceTimeout = 0));
                            }, []),
                            U = (0, n.useCallback)(() => H(''), [H]);
                        (0, n.useEffect)(() => () => V(), [V]);
                        const j = (0, n.useCallback)(
                            (e) => {
                                V(),
                                    L.debounceTime
                                        ? (W.current.debounceTimeout = window.setTimeout(() => {
                                              G(e);
                                          }, L.debounceTime))
                                        : G(e);
                            },
                            [G, V, L.debounceTime],
                        );
                        (0, n.useEffect)(() => {
                            W.current.isChangeHandled ||
                                W.current.value !== I ||
                                (j(W.current.value), (W.current.isChangeHandled = !0));
                        }, [I, j]),
                            (0, n.useEffect)(() => {
                                W.current.isChangeHandled && E !== W.current.value && ((W.current.value = E), M(E)),
                                    (W.current.type = r);
                            }, [E, r]),
                            (0, n.useEffect)(() => {
                                x(C);
                            }, [C, s]);
                        const Z = (0, n.useCallback)((e) => g && g(e), [g]),
                            z = (0, n.useCallback)(
                                (e) => {
                                    L.disableHighlightOnFocus && S && x(!1), b && b(e);
                                },
                                [S, b, L.disableHighlightOnFocus],
                            ),
                            q = (0, n.useCallback)((e) => f && f(e), [f]),
                            K = (0, n.useCallback)((e) => w && w(e), [w]),
                            $ = (0, n.useCallback)((e) => h && h(e), [h]),
                            Y = (0, n.useMemo)(
                                () =>
                                    L.withTypeIcon
                                        ? (function (e, u) {
                                              return e === oe ? Fe.$dyn(`search_${u}`) : '';
                                          })(r, c)
                                        : '',
                                [r, c, L.withTypeIcon],
                            ),
                            X = F || Ae[r],
                            Q = Boolean(I),
                            J = p ? ce : s,
                            ee = Boolean(p) || S,
                            ue = (0, n.useMemo)(
                                () => ('boolean' == typeof L.withClear ? Q && L.withClear : Q && r === oe),
                                [r, Q, L],
                            ),
                            te = a()(be.base, be[`base__${c}`], be[`base__${s}`], T);
                        return o().createElement(
                            'div',
                            { id: u, className: te, onMouseEnter: Z, onMouseDown: K, onMouseUp: q, onMouseLeave: $ },
                            o().createElement(
                                _.l,
                                { tooltipArgs: d },
                                o().createElement(
                                    Be,
                                    he(
                                        {
                                            componentId: u ? `${u}-inputControl` : void 0,
                                            iconSource: Y,
                                            size: c,
                                            type: r,
                                            variant: J,
                                            value: I,
                                            withClear: ue,
                                            highlighted: ee,
                                            selectOnFocus: L.selectOnFocus,
                                            maxLength: L.maxLength,
                                            classMix: O,
                                            onFocus: z,
                                            onChange: H,
                                            onClear: U,
                                        },
                                        k,
                                    ),
                                ),
                            ),
                            X &&
                                o().createElement(
                                    'div',
                                    { className: be.helper },
                                    o().createElement(ve, {
                                        variant: J,
                                        show: B && (L.isPermanentHelper || ee),
                                        helperText: p || X,
                                        helperIcon: L.helperIconSource,
                                        classMix: P,
                                    }),
                                ),
                        );
                    },
                    ye = ({ value: e, placeholder: u, tooltipHeader: t, onChange: n, className: r, tooltipBody: a }) =>
                        o().createElement(
                            s.i,
                            { header: null != t ? t : void 0, body: a, isEnabled: Boolean(t || a) },
                            o().createElement(we, {
                                type: oe,
                                placeholder: null != u ? u : void 0,
                                value: e,
                                classMix: r,
                                onChange: n,
                            }),
                        ),
                    Te = {
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
                    Oe = (0, c.Pi)(({ popoverDirection: e }) => {
                        const u = H(),
                            t = u.model,
                            n = u.controls,
                            r = t.amountInfo.get(),
                            c = r.from,
                            _ = r.to,
                            E = t.panelType.get(),
                            d = t.filter.get(),
                            A = t.hasAppliedFilters.get(),
                            F = A || (0 === c && 0 === _),
                            D = t.popoverTooltipHeader.get(),
                            C = t.popoverTooltipBody.get();
                        return o().createElement(
                            'div',
                            { className: a()(Te.base, Te[`base__${E}`]) },
                            o().createElement(
                                'div',
                                { className: Te.titleWrapper },
                                o().createElement(x.C, {
                                    title: t.title.get(),
                                    isGlowVisible: F,
                                    from: c,
                                    to: _,
                                    className: Te.title,
                                    classNames: { counterGlow: Te.counterGlow },
                                }),
                                A && o().createElement(te, { onClick: n.resetFilter }),
                            ),
                            o().createElement(
                                'div',
                                { className: Te.filters },
                                t.isSearchEnabled.get() &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(ye, {
                                            value: t.searchString.get(),
                                            onChange: n.search,
                                            className: Te.search,
                                            placeholder: t.searchPlaceholder.get(),
                                            tooltipHeader: t.searchTooltipHeader.get(),
                                            tooltipBody: t.searchTooltipBody.get(),
                                        }),
                                        E === l.Barracks && o().createElement('div', { className: Te.separator }),
                                    ),
                                d.label && o().createElement('div', { className: Te.filterLabel }, d.label),
                                o().createElement(S, {
                                    id: d.id,
                                    label: d.label,
                                    type: d.type,
                                    hasDiscount: d.hasDiscount,
                                    filters: t.filters.get(),
                                    toggleProps: { type: i.L.ghost },
                                    onClick: n.updateFilter,
                                }),
                                t.isPopoverEnabled.get() &&
                                    o().createElement(
                                        s.i,
                                        {
                                            header: null != D ? D : void 0,
                                            body: null != C ? C : void 0,
                                            isEnabled: Boolean(D || C),
                                        },
                                        o().createElement(
                                            'div',
                                            { className: Te.popupButtonWrapper },
                                            o().createElement(X, {
                                                isHighlighted: t.isPopoverHighlighted.get(),
                                                hasDiscountAlert: t.hasDiscountAlert.get(),
                                                popoverDirection: e,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Pe = { rootId: R.views.lobby.crew.widgets.FilterPanelWidget('resId') };
                o().memo(function ({ popoverDirection: e }) {
                    return o().createElement(W, { options: Pe }, o().createElement(Oe, { popoverDirection: e }));
                });
            },
            771: (e, u, t) => {
                let n;
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
                })(n || (n = {}));
            },
            6880: (e, u, t) => {
                t.d(u, { Z: () => n });
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
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
            },
            8055: (e, u, t) => {
                t.d(u, { Z: () => n });
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
            4769: (e, u, t) => {
                t.d(u, { Z: () => n });
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
            4723: (e, u, t) => {
                t.d(u, { Z: () => n });
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var o = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], r = !0, a = 0; a < u.length; a++)
                        (!1 & n || o >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[a]))
                            ? u.splice(a--, 1)
                            : ((r = !1), n < o && (o = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
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
        (__webpack_require__.j = 3595),
        (() => {
            var e = { 3595: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        o,
                        [r, a, i] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        (o = r[s]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(5801));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
