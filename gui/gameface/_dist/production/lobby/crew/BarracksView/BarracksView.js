(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var a = n(6483),
                    r = n.n(a),
                    u = n(7727),
                    i = n(6179),
                    s = n.n(i),
                    o = n(6880),
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
                    const v = (0, i.useRef)(null),
                        A = (0, i.useState)(n),
                        F = A[0],
                        C = A[1],
                        D = (0, i.useState)(!1),
                        w = D[0],
                        B = D[1];
                    return (
                        (0, i.useEffect)(() => {
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
                        (0, i.useEffect)(() => {
                            C(n);
                        }, [n]),
                        s().createElement(
                            'div',
                            {
                                ref: v,
                                className: r()(
                                    o.Z.base,
                                    o.Z[`base__${a}`],
                                    c && o.Z.base__disabled,
                                    t && o.Z[`base__${t}`],
                                    F && o.Z.base__focus,
                                    w && o.Z.base__highlightActive,
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
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: o.Z.back }),
                                    s().createElement('span', { className: o.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: r()(o.Z.state, o.Z.state__default) },
                                s().createElement('span', { className: o.Z.stateDisabled }),
                                s().createElement('span', { className: o.Z.stateHighlightHover }),
                                s().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
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
                    i = n.n(u),
                    s = n(8055);
                const o = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        l.apply(null, arguments)
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
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, o);
                    const E = a ? null : n,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const p = E && !g && E > d,
                        h = r()(
                            s.Z.base,
                            s.Z[`base__${t}`],
                            u && s.Z.base__animated,
                            c && s.Z.base__hidden,
                            !E && s.Z.base__pattern,
                            a && s.Z.base__empty,
                            m,
                        );
                    return i().createElement(
                        'div',
                        l({ className: h }, _),
                        i().createElement('div', { className: s.Z.bg }),
                        i().createElement('div', { className: s.Z.pattern }),
                        i().createElement(
                            'div',
                            { className: r()(s.Z.value, g && s.Z.value__text) },
                            p ? d : E,
                            p && i().createElement('span', { className: s.Z.plus }, '+'),
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
                    i = n(6373),
                    s = n(3138),
                    o = n(2039),
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
                                c.$.playClick(), s.O.view.sendEvent.close();
                            }, []),
                            D = (0, m.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            w = u()(E.Z.arrow, E.Z[`arrow${p[A]}`]);
                        (0, o.b)(
                            () => (
                                s.O.client.events.mouse.enableOutside(),
                                s.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (n ? n() : s.O.view.sendEvent.close('popover'));
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
                                        const e = s.O.client.getMouseGlobalPosition(),
                                            t = ![a.boundX, a.boundY, a.boundWidth, a.boundHeight].includes(void 0),
                                            n =
                                                e.x < a.boundX ||
                                                e.x > a.boundX + a.boundWidth ||
                                                e.y > a.boundY + a.boundHeight ||
                                                e.y < a.boundY;
                                        if (t && !n) return;
                                    }
                                    n ? n() : s.O.view.sendEvent.close('popover');
                                },
                                [h, f, n],
                            ),
                            y = (0, g.w)(),
                            k = (0, m.useCallback)(() => {
                                const e = b.current;
                                if (e)
                                    return (
                                        s.O.view.freezeTextureBeforeResize(),
                                        y.run(() => {
                                            const t = e.scrollWidth,
                                                n = e.scrollHeight;
                                            s.O.view.resize(t, n), F(window.decorator.directionType);
                                        })
                                    );
                            }, [y]);
                        return (
                            (0, m.useImperativeHandle)(r, () => ({ updateSize: k })),
                            (0, o.b)(() => {
                                s.O.view.setInputPaddingsRem(58);
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
                                                i.i,
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
                    i = n.n(u);
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
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
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
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, s);
                    const b = (0, u.useRef)(null),
                        f = (0, u.useCallback)(() => {
                            if ((0, r.wU)()) return (0, r.SW)();
                            b.current && (0, r.P3)(t, c, b.current, n, d, m);
                        }, [t, c, m, n, d]);
                    return i().createElement(
                        'div',
                        o(
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
                n.d(t, { t: () => o });
                var a = n(6179),
                    r = n.n(a),
                    u = n(2056);
                const i = ['children'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const o = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, i);
                    return r().createElement(
                        u.u,
                        s(
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
                    i = n(6373),
                    s = n(2056);
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: n }) => {
                    if (!t) return e;
                    const a = r().createElement('div', { className: n }, e);
                    if (t.header || t.body) return r().createElement(i.i, t, a);
                    const l = t.contentId;
                    return l ? r().createElement(s.u, o({}, t, { contentId: l }), a) : r().createElement(u.t, t, a);
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => l });
                var a = n(2056),
                    r = n(6179),
                    u = n.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            n = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, i);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, m, { body: n, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, n, l, c, m]);
                        return u().createElement(
                            a.u,
                            s(
                                {
                                    contentId:
                                        ((g = null == m ? void 0 : m.hasHtmlContent),
                                        g ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
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
                function s(e) {
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
                const o = (e, t, n = {}, a = 0) => {
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
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, i);
                        const B = (0, u.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, u.useMemo)(() => F || (0, a.F)().resId, [F]),
                            k = (0, u.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (o(n, b, { isMouseEvent: !0, on: !0, arguments: s(r) }, y),
                                    C && C(),
                                    (B.current.isVisible = !0));
                            }, [n, b, r, y, C]),
                            S = (0, u.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        o(n, b, { on: !1 }, y),
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
                                              ((N = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(k, E ? 100 : 400)),
                                                      l && l(e),
                                                      N && N(e));
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
            8246: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => s });
                var a = n(3138);
                function r(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return u(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? u(e, t)
                                          : void 0
                                );
                            }
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
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: n = i, context: u = 'model' } = {}) {
                    const s = new Map();
                    function o(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = s.get(t);
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
                            const i = 'string' == typeof r ? `${u}.${r}` : u,
                                o = a.O.view.addModelObserver(i, t, !0);
                            return s.set(o, n), e && n(l(r)), o;
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
                            for (var e, n = r(s.keys()); !(e = n()).done; ) {
                                o(e.value, t);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, t, n) => {
                'use strict';
                n.d(t, { q: () => o });
                var a = n(4598),
                    r = n(9174),
                    u = n(6179),
                    i = n.n(u),
                    s = n(8246);
                const o = () => (e, t) => {
                    const n = (0, u.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, u.useRef)([]),
                                _ = (n, u, i) => {
                                    var o;
                                    const l = s.U(u),
                                        c =
                                            'real' === n
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == i ? void 0 : i.getter) ? o : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === n ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        E = e({
                                            mode: n,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const u = null != t ? t : d(e),
                                                        i = r.LO.box(u, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const u = null != t ? t : d(e),
                                                        i = r.LO.box(u, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
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
                                                            i = Object.entries(u),
                                                            s = i.reduce(
                                                                (e, [t, n]) => ((e[n] = r.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        i.forEach(([t, n]) => {
                                                                            s[n].set(e[t]);
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
                                        g = { mode: n, model: E, externalModel: c, cleanup: _ };
                                    return {
                                        model: E,
                                        controls: 'mocks' === n && i ? i.controls(g) : t(g),
                                        externalModel: c,
                                        mode: n,
                                    };
                                },
                                E = (0, u.useRef)(!1),
                                g = (0, u.useState)(o),
                                p = g[0],
                                h = g[1],
                                b = (0, u.useState)(() => _(o, l, d)),
                                f = b[0],
                                v = b[1];
                            return (
                                (0, u.useEffect)(() => {
                                    E.current ? v(_(p, l, d)) : (E.current = !0);
                                }, [d, p, l]),
                                (0, u.useEffect)(() => {
                                    h(o);
                                }, [o]),
                                (0, u.useEffect)(
                                    () => () => {
                                        f.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [f],
                                ),
                                i().createElement(n.Provider, { value: f }, c)
                            );
                        },
                        () => (0, u.useContext)(n),
                    ];
                };
            },
            7044: (e, t, n) => {
                'use strict';
                n.d(t, { f8: () => c, s_: () => i, wB: () => d, yR: () => s });
                var a = n(3649),
                    r = (n(9916), n(8613));
                const u = 24,
                    i = 1e3,
                    s = 60,
                    o = 60 * s,
                    l = u * o;
                Date.now(), r.Ew.getRegionalDateTime, r.Ew.getFormattedDateTime;
                function c(e = 0) {
                    let t = e;
                    const n = Math.trunc(t / l);
                    t -= n * l;
                    const a = Math.trunc(t / o);
                    t -= a * o;
                    const r = Math.trunc(t / s);
                    return (t -= r * s), { days: n, hours: a, minutes: r, seconds: t };
                }
                const d = (e, t = !0) =>
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
                    n.d(t, { mouse: () => c, off: () => o, on: () => s, onResize: () => u, onScaleUpdated: () => i });
                var a = n(2472),
                    r = n(1176);
                const u = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
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
                                        i = l[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(u, s),
                                        a(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(u, s),
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
                        getMouseGlobalPosition: () => i,
                        getSize: () => u,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var a = n(527),
                    r = n(2493);
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
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
                n.d(t, { ZP: () => i });
                var a = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    u = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    i = { play: Object.assign({}, u, { sound: a.playSound }), setRTPC: a.setRTPC };
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => B,
                        events: () => u.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => w,
                        getScale: () => h,
                        getSize: () => _,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => C,
                        isFocused: () => A,
                        pxToRem: () => b,
                        remToPx: () => f,
                        resize: () => E,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => F,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => k,
                    });
                var a = n(3722),
                    r = n(6112),
                    u = n(6538),
                    i = n(8566);
                const s = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function c(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function A() {
                    return viewEnv.isFocused();
                }
                function F() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
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
                    i = 32,
                    s = 64,
                    o = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(t, a);
                            return void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? r : i);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(u, { isMouseEvent: !0, on: e });
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
                n.d(t, { D9: () => u, au: () => i });
                var a = n(3469),
                    r = (n(2133), n(2790));
                n(579), n(5360), n(9056);
                const u = r.Z,
                    i = a.Z;
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
                n.d(t, { Z: () => i });
                var a = n(7044),
                    r = n(6179);
                const u = () => {},
                    i = (e = 0, t, n = 0, i = u) => {
                        const s = (0, r.useState)(e),
                            o = s[0],
                            l = s[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const r = Date.now(),
                                        u = t || (e > 2 * a.yR ? a.yR : 1),
                                        s = setInterval(() => {
                                            const t = e - Math.floor((Date.now() - r) / a.s_);
                                            null !== n && t <= n ? (l(n), i && i(), clearInterval(s)) : l(t);
                                        }, u * a.s_);
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [e, t, n, i]),
                            o
                        );
                    };
            },
            5332: (e, t, n) => {
                'use strict';
                n.d(t, { N: () => u });
                var a = n(4483),
                    r = n(6179);
                function u(e, t, n, u = !1) {
                    const i = (0, r.useMemo)(() => (0, a.Z)(n, u, e), t);
                    return (0, r.useEffect)(() => i.cancel, [i]), i;
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
                n.d(t, { w: () => i });
                var a = n(6179),
                    r = n(2039);
                const u = 0;
                function i() {
                    const e = (0, a.useRef)(u);
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
                                                t(), (e.current = u);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = u);
                                },
                                get isRunning() {
                                    return e.current !== u;
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
                n.d(t, { U2: () => a, UI: () => u, dF: () => s, lN: () => i });
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
                function i(e) {
                    if (0 !== e.length) return a(e, e.length - 1);
                }
                function s(e, t) {
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
                n.d(t, { HG: () => i });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const u = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) =>
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
                n.d(t, { BN: () => u, Eg: () => o, WU: () => r, dL: () => l, e: () => i, z4: () => s });
                n(1281);
                let a;
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function u(e) {
                    return e.replace(/-/g, '_');
                }
                function i(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
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
                        i = 0;
                    function s() {
                        r && clearTimeout(r);
                    }
                    function o(...o) {
                        const l = this,
                            c = Date.now() - i;
                        function d() {
                            (i = Date.now()), n.apply(l, o);
                        }
                        u ||
                            (a && !r && d(),
                            s(),
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
                        (o.cancel = function () {
                            s(), (u = !0);
                        }),
                        o
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
                    B3: () => o,
                    Z5: () => i.Z5,
                    B0: () => s,
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
                var i = n(8613);
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    _ = n(3138);
                const E = ['args'];
                function g(e, t, n, a, r, u, i) {
                    try {
                        var s = e[u](i),
                            o = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(o) : Promise.resolve(o).then(a, r);
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
                                        function i(e) {
                                            g(u, a, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(u, a, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
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
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
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
                    v = () => f(s.CLOSE),
                    A = () => f(s.POP_OVER, { on: !1 }),
                    F = (e, t, n, a, r = R.invalid('resId'), u) => {
                        const i = _.O.view.getViewGlobalPosition(),
                            o = n.getBoundingClientRect(),
                            l = o.x,
                            c = o.y,
                            d = o.width,
                            m = o.height,
                            E = {
                                x: _.O.view.pxToRem(l) + i.x,
                                y: _.O.view.pxToRem(c) + i.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(m),
                            };
                        f(s.POP_OVER, {
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
                    C = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    D = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var w = n(7572);
                const B = r.instance,
                    y = {
                        DataTracker: u.Z,
                        ViewModel: w.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => f(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: A,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            f(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
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
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
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
            428: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => Fa,
                        Bar: () => fa,
                        DefaultScroll: () => Aa,
                        Direction: () => aa,
                        defaultSettings: () => ra,
                        useHorizontalScrollApi: () => ia,
                    });
                var r = {};
                n.r(r), n.d(r, { Area: () => Ha, Bar: () => Ma, Default: () => Wa, useVerticalScrollApi: () => Ca });
                var u = n(6179),
                    i = n.n(u);
                const s = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var o = n(3138);
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
                const m = o.O.client.getSize('rem'),
                    _ = m.width,
                    E = m.height,
                    g = Object.assign({ width: _, height: E }, d(_, E, l)),
                    p = (0, u.createContext)(g),
                    h = ['children'];
                const b = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, h);
                    const a = (0, u.useContext)(p),
                        r = a.extraLarge,
                        i = a.large,
                        o = a.medium,
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
                        if (n.large && i) return t;
                        if (n.medium && o) return t;
                        if (n.small && l) return t;
                        if (n.extraSmall && c) return t;
                    } else {
                        if (n.extraLargeWidth && d) return s(t, n, C);
                        if (n.largeWidth && m) return s(t, n, C);
                        if (n.mediumWidth && _) return s(t, n, C);
                        if (n.smallWidth && E) return s(t, n, C);
                        if (n.extraSmallWidth && g) return s(t, n, C);
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
                        s = (0, u.useCallback)((e, t) => {
                            const n = o.O.view.pxToRem(e),
                                a = o.O.view.pxToRem(t);
                            r(Object.assign({ width: n, height: a }, d(n, a, l)));
                        }, []),
                        c = (0, u.useCallback)(() => {
                            const e = o.O.client.getSize('px');
                            s(e.width, e.height);
                        }, [s]);
                    (0, f.Z)(() => {
                        o.O.client.events.on('clientResized', s), o.O.client.events.on('self.onScaleUpdated', c);
                    }),
                        (0, u.useEffect)(
                            () => () => {
                                o.O.client.events.off('clientResized', s),
                                    o.O.client.events.off('self.onScaleUpdated', c);
                            },
                            [s, c],
                        );
                    const m = (0, u.useMemo)(() => Object.assign({}, a), [a]);
                    return i().createElement(p.Provider, { value: m }, e);
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
                            i = ((e) => {
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
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: t, remScreenHeight: n };
                    },
                    S = ['children', 'className'];
                function x() {
                    return (
                        (x = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        x.apply(null, arguments)
                    );
                }
                const N = {
                        [B.ExtraSmall]: '',
                        [B.Small]: D().SMALL_WIDTH,
                        [B.Medium]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH}`,
                        [B.Large]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH} ${D().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
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
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, S);
                        const r = k(),
                            u = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return i().createElement('div', x({ className: F()(n, N[u], T[s], L[o]) }, a), t);
                    },
                    O = ['children'];
                const M = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, O);
                    return i().createElement(v, null, i().createElement(I, n, t));
                };
                var P = n(493),
                    W = n.n(P),
                    H = n(1037),
                    $ = n(5521),
                    z = n(9916);
                const j = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function G(e = $.n.NONE, t = j, n = !1, a = !1) {
                    (0, u.useEffect)(() => {
                        if (e !== $.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(r), n && r.stopPropagation();
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
                const ie = 'WarningText_base_13',
                    se = 'WarningText_icon_5d',
                    oe = 'WarningText_label_c6',
                    le = i().memo(function ({ label: e }) {
                        return i().createElement(
                            'div',
                            { className: ie },
                            i().createElement('div', { className: se }),
                            i().createElement('div', { className: oe }, e),
                        );
                    }),
                    ce = 'ListEmptyState_base_ae',
                    de = 'ListEmptyState_content_1e',
                    me = 'ListEmptyState_shadow_ae',
                    _e = 'ListEmptyState_buttonWrapper_78',
                    Ee = 'ListEmptyState_button_f1',
                    ge = i().memo(function ({
                        warningText: e,
                        buttonType: t = ae.L$.secondary,
                        tooltipArgs: n = ue.Xd,
                        isBtnDisabled: a = !1,
                        className: r,
                        onClick: u,
                        children: s,
                    }) {
                        return i().createElement(
                            'div',
                            { className: F()(ce, r) },
                            i().createElement(
                                'div',
                                { className: de },
                                i().createElement('div', { className: me }),
                                i().createElement(le, { label: e }),
                                s &&
                                    i().createElement(
                                        'div',
                                        { className: _e },
                                        i().createElement(
                                            re.i,
                                            n,
                                            i().createElement(
                                                'div',
                                                null,
                                                i().createElement(
                                                    ae.u5,
                                                    {
                                                        size: ae.qE.small,
                                                        type: t,
                                                        disabled: a,
                                                        onClick: u,
                                                        mixClass: Ee,
                                                    },
                                                    s,
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
                    size: s = Be.extraSmall,
                    type: o = ye.colored,
                    className: l,
                    classNames: c,
                    isShortName: d = !1,
                }) => {
                    const m = `${(0, Ce.BN)(a)}${e ? '_elite' : ''}`,
                        _ = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                    return i().createElement(
                        'div',
                        {
                            className: F()(
                                we.base,
                                we[`base__size${(0, Ce.e)(s)}`],
                                we[`base__type${(0, Ce.e)(o)}`],
                                l,
                            ),
                        },
                        i().createElement(
                            'div',
                            { className: F()(we.level, null == c ? void 0 : c.level) },
                            (0, Fe.HG)(r),
                        ),
                        i().createElement('div', {
                            className: F()(
                                we.type,
                                e && we[`type__elite${(0, Ce.e)(s)}`],
                                we[`type__${s}`],
                                null == c ? void 0 : c.typeIcon,
                            ),
                            style: a ? { backgroundImage: `url(${_})` } : void 0,
                        }),
                        De(u, 'premiumIGR') && i().createElement('div', { className: we.premiumIGR }),
                        i().createElement('div', { className: F()(we.name, null == c ? void 0 : c.name) }, d ? n : t),
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
                let Ne;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large');
                })(Ne || (Ne = {}));
                const Te = (0, u.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: t = Se.y$,
                        className: n,
                        targetId: a = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: r = Ne.Normal,
                    }) => {
                        const u = e === Se.sU,
                            s = u
                                ? { tooltipId: 'crewSkillUntrained' }
                                : { tooltipId: 'skillsEfficiency', skillEfficiency: e, tankmanID: t };
                        return i().createElement(
                            pe.t,
                            { targetId: a, args: s, isEnabled: t !== Se.y$ },
                            i().createElement(
                                'div',
                                { className: F()(xe.base, xe[`base__${r}`], u && xe.base__untrained, n) },
                                u
                                    ? i().createElement('div', { className: xe.icon })
                                    : i().createElement(
                                          'div',
                                          { className: F()(xe.percent, e === Se.yb && xe.percent__full) },
                                          (0, Ce.dL)(z.Z5.getNumberFormat(100 * e, z.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                );
                var Le = n(7030);
                const Ie = i().memo(function ({ blinkStyle: e, isEnabled: t, children: n }) {
                    return i().createElement(Le.animated.div, { style: t && e ? e : void 0 }, n);
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
                        i().createElement(
                            re.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                                targetId: t,
                            },
                            i().createElement(
                                'div',
                                { className: F()(Me, e) },
                                i().createElement('div', { className: Pe }),
                            ),
                        ),
                    );
                let He, $e, ze, je, Ge, Ue, Ve;
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
                    })($e || ($e = {})),
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
                    })(ze || (ze = {})),
                    (function (e) {
                        (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                    })(je || (je = {})),
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
                        const i = { targetId: u.targetId, isEnabled: u.isEnabled };
                        return e === Se.jw
                            ? a === Ue.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: u.tankmanID, skillIndex: r }, u.args),
                                      },
                                      i,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      i,
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
                                  i,
                              );
                    },
                    Ke = (e, t) => (e === Ge.c44x44 ? Ne.Large : t ? Ne.Big : Ne.Normal),
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
                        (rt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        rt.apply(null, arguments)
                    );
                }
                const ut = (0, u.memo)(function (e) {
                        let t = e.width,
                            n = e.height,
                            a = e.getImageSource,
                            r = e.frameCount,
                            s = e.onAnimate,
                            o = e.frameTime,
                            l = void 0 === o ? Je : o,
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
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
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
                                            const e = ot(d, _, a),
                                                t = it(d, _),
                                                r = window.setInterval(() => {
                                                    const a = t(),
                                                        u = e.get(a);
                                                    u
                                                        ? (null == s || s(a, u),
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
                                            const r = () => n(st(e, t));
                                            return (
                                                t.addEventListener('load', r), () => t.removeEventListener('load', r)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, a, d, _, g, s, f, b, v, h]),
                            i().createElement('canvas', rt({}, A, { width: t, height: n, ref: F }))
                        );
                    }),
                    it = (e, t) => {
                        let n = e;
                        return () => {
                            const a = n;
                            return (n += 1), n > t && (n = e), a;
                        };
                    },
                    st = (e, t) => Object.assign({}, e, { img: t }),
                    ot = (e, t, n) => {
                        const a = new Map(),
                            r = {};
                        for (let u = e; u <= t; u++) {
                            const e = n(u),
                                t = r[e.path];
                            if (t) a.set(u, st(e, t));
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
                                    a.set(u, st(e, t));
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
                            i = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / n)), x: u, y: i };
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
                        (_t = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        _t.apply(null, arguments)
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
                                s = e.onAnimate,
                                o = void 0 === s ? () => {} : s,
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
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(e, mt);
                            const F = (0, u.useRef)(null);
                            return (
                                (0, u.useEffect)(() => {
                                    const e = F.current;
                                    if (!e) return;
                                    const u = r - 1,
                                        i = e.getContext('2d'),
                                        s = (a) => {
                                            i.clearRect(0, 0, e.width, e.height), i.drawImage(a, 0, 0, t, n);
                                        };
                                    if ('stop' === p) {
                                        const e = a(0),
                                            t = new Image();
                                        t.src = e;
                                        const n = () => s(t);
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
                                            s(l[e]), o(e, t), e === u && (b(), E || clearInterval(_));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [r, c, a, n, m, E, o, b, p, t, v]),
                                i().createElement('canvas', _t({}, A, { width: t, height: n, ref: F }))
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
                    ft = i().memo(function ({ type: e, index: t, totalAmount: n, className: a, size: r }) {
                        const s = (0, u.useState)(Et.Stop),
                            l = s[0],
                            c = s[1],
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
                                    to: { x: o.O.view.remToPx(E) },
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
                            i().createElement(
                                re.i,
                                { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                                i().createElement(
                                    Le.animated.div,
                                    { style: g, className: F()(bt.base, bt[`base__${r}`], a) },
                                    i().createElement(
                                        'div',
                                        { className: bt.icon },
                                        i().createElement(ut, {
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
                            if (e) {
                                if ('string' == typeof e) return Ft(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? Ft(e, t)
                                          : void 0
                                );
                            }
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
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
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
                            s = r[0],
                            o = r[1];
                        return (
                            (0, u.useEffect)(() => {
                                const e = () => {
                                    o(Et.Play);
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
                            i().createElement(ut, {
                                width: n.width,
                                height: n.height,
                                frameCount: n.frameCount,
                                getImageSource: a,
                                loop: !1,
                                state: s,
                                onAnimationDone: () => {
                                    o(Et.Stop);
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
                        return i().createElement(Le.animated.div, { style: u, className: n }, t);
                    },
                    kt = i().memo(function ({ isEnabled: e, className: t, children: n }) {
                        const a = (0, Le.useSpring)(() => ({ from: { scale: 1 } })),
                            r = a[0],
                            s = a[1];
                        return (
                            (0, u.useEffect)(() => {
                                e &&
                                    s.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: ht },
                                    });
                            }, [e, s]),
                            i().createElement(Le.animated.div, { style: e ? r : void 0, className: t }, n)
                        );
                    });
                let St;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale');
                })(St || (St = {}));
                const xt = i().memo(function ({
                        size: e,
                        skillsSignature: t,
                        animationType: n,
                        className: a,
                        children: r,
                    }) {
                        return n === St.Scale
                            ? i().createElement(kt, { isEnabled: !0, className: a }, r)
                            : n === St.FadeIn
                              ? i().createElement(yt, { size: e, key: t, className: a }, r)
                              : i().createElement('div', { className: a }, r);
                    }),
                    Nt = i().memo(function ({ size: e, className: t, children: n }) {
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
                        return i().createElement(Le.animated.div, { style: u, className: t }, n);
                    });
                var Tt = n(3415);
                const Lt = ['className', 'children'];
                const It = (e) => {
                    let t = e.className,
                        n = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, Lt);
                    return i().createElement(Tt.l, { tooltipArgs: Ye(a), className: t }, n);
                };
                let Rt;
                !(function (e) {
                    (e.None = 'none'), (e.Learned = 'learned'), (e.Improved = 'Improved');
                })(Rt || (Rt = {}));
                const Ot = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let Mt;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(Mt || (Mt = {}));
                const Pt = i().memo(function ({ iconName: e, size: t = Mt.c24x24, className: n }) {
                        var a;
                        const r = null == (a = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : a.$dyn(e);
                        return i().createElement('div', {
                            style: null !== r ? { backgroundImage: `url(${r})` } : void 0,
                            className: F()(Ot.base, Ot[`base__${t}`], n),
                        });
                    }),
                    Wt = {
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
                    Ht = { [Ge.c24x24]: Mt.c22x22, [Ge.c44x44]: Mt.c52x52 },
                    $t = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: n,
                        type: a,
                        iconName: r,
                        name: u,
                        skillState: s,
                        battleBooster: o,
                        className: l,
                    }) => {
                        const c = o !== Rt.None,
                            d = ((e, t, n, a, r = ue.H$.Normal) =>
                                e === Se.jw
                                    ? je.LightYellow
                                    : r === ue.H$.Untrained || a
                                      ? t === Ve.Learning
                                          ? je.Yellow
                                          : je.Grey
                                      : r === ue.H$.Low
                                        ? n
                                            ? je.Grey
                                            : je.Red
                                        : t === Ve.Learning
                                          ? je.Yellow
                                          : je.Grey)(u, s, c, t, n),
                            m = (!c && n === ue.H$.Untrained) || t,
                            _ = r === Se.jw;
                        return i().createElement(
                            'div',
                            {
                                className: F()(
                                    Wt.base,
                                    Wt[`base__type${(0, Ce.e)(a)}`],
                                    Wt[`base__state${(0, Ce.e)(s)}`],
                                    Wt[`base__border${(0, Ce.e)(d)}`],
                                    Wt[`base__${e}`],
                                    m && Wt.base__disabled,
                                    l,
                                ),
                            },
                            i().createElement('div', {
                                className: Wt.background,
                                style:
                                    a === Ue.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${d}')`,
                                          }
                                        : void 0,
                            }),
                            _ && s === Ve.Learned && i().createElement('div', { className: Wt.newSkillHighLight }),
                            i().createElement(Pt, { iconName: r, size: Ht[e], className: Wt.icon }),
                            m && i().createElement('div', { className: Wt.disabledOverlay }),
                        );
                    };
                function zt() {
                    return (
                        (zt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        zt.apply(null, arguments)
                    );
                }
                const jt = (e, t) => (e ? St.Scale : t ? St.FadeIn : St.None),
                    Gt = ({
                        index: e,
                        skill: t,
                        previousSkill: n,
                        skillState: a,
                        skillType: r,
                        size: u,
                        efficiencyState: s,
                        tooltipData: o,
                        skillsSignature: l,
                        blinkStyle: c,
                        isNewSkillAnimated: d = !1,
                        skillAnimationType: m = $e.None,
                        className: _,
                    }) => {
                        const E = m === $e.Blink || m === $e.SlideOutAndBlink,
                            g = m === $e.SlideOutAndBlink || m === $e.SlideOut,
                            p = m === $e.FadeIn,
                            h = {
                                skillIndex: e,
                                name: t.name,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: o,
                                skillType: r,
                            };
                        return d && t.name === Se.jw && u === Ge.c24x24
                            ? i().createElement(
                                  It,
                                  zt({}, h, { className: _ }),
                                  i().createElement(Bt, { type: r, state: a }),
                              )
                            : i().createElement(
                                  i().Fragment,
                                  null,
                                  n &&
                                      g &&
                                      i().createElement(
                                          Nt,
                                          { size: u, className: _, key: n.name },
                                          i().createElement(
                                              Ie,
                                              { blinkStyle: c, isEnabled: E },
                                              i().createElement(
                                                  $t,
                                                  zt({ size: u, type: r, efficiencyState: s, skillState: a }, n),
                                              ),
                                          ),
                                      ),
                                  i().createElement(
                                      xt,
                                      {
                                          size: u,
                                          skillsSignature: l,
                                          className: _,
                                          animationType: jt(m === $e.ScaleUp, p),
                                      },
                                      i().createElement(
                                          It,
                                          h,
                                          i().createElement(
                                              Ie,
                                              { blinkStyle: c, isEnabled: E },
                                              i().createElement(
                                                  $t,
                                                  zt({ size: u, type: r, efficiencyState: s, skillState: a }, t),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    },
                    Ut = {
                        base: 'LostLevelAnimation_base_f6',
                        level: 'LostLevelAnimation_level_f0',
                        level__skillLost: 'LostLevelAnimation_level__skillLost_a2',
                        level__skillBlur: 'LostLevelAnimation_level__skillBlur_24',
                        base__c_24x24: 'LostLevelAnimation_base__c_24x24_1c',
                        base__c_44x44: 'LostLevelAnimation_base__c_44x44_44',
                    },
                    Vt = i().memo(function ({ size: e, level: t, withSlideOut: n = !0 }) {
                        const a = (0, Le.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                            r = (0, Le.useSpring)(() => ({
                                from: { x: o.O.view.remToPx(-5), opacity: 0 },
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
                        return i().createElement(
                            'div',
                            { className: F()(Ut.base, Ut[`base__${e}`]) },
                            i().createElement(
                                Le.animated.div,
                                { style: n ? r : void 0, className: F()(Ut.level, Ut.level__skillLost) },
                                a.val.to((e) => (0, Ce.dL)(Math.floor(e))),
                            ),
                            i().createElement(
                                Le.animated.div,
                                {
                                    style: n ? Object.assign({}, r, u) : u,
                                    className: F()(Ut.level, Ut.level__skillBlur),
                                },
                                a.val.to((e) => (0, Ce.dL)(Math.floor(e))),
                            ),
                        );
                    }),
                    Zt = 'SkillLevel_base_d2',
                    qt = 'SkillLevel_base__highlighted_e3',
                    Yt = ({ skillLevel: e, isHighlighted: t = !1, className: n }) =>
                        i().createElement(
                            'div',
                            { className: F()(Zt, t && qt, n) },
                            (0, Ce.dL)(
                                e > 0 && e < 0.01
                                    ? 0.01
                                    : ((e, t = 2) => {
                                          const n = Math.pow(10, t);
                                          return e % 1 > 0 ? Math.round(e * n) / n : e;
                                      })(e),
                            ),
                        ),
                    Kt = ({
                        skillsAmountDiff: e,
                        size: t,
                        skillType: n,
                        wasLearned: a,
                        isAllMajorSkillsLearned: r,
                        skill: u,
                        possibleSkill: s,
                        blinkStyle: o,
                        className: l,
                    }) => {
                        const c = s || u,
                            d = void 0 !== u && void 0 !== s ? s.level - u.level : 0,
                            m = e > 0,
                            _ = e < 0 || d > 0;
                        return !c ||
                            (c.level === Se.I && 0 === d) ||
                            ((null == s ? void 0 : s.level) === Se.I && n === Ue.Bonus && d > 0 && !r)
                            ? null
                            : m || (d < 0 && 0 === e)
                              ? i().createElement(Vt, { size: t, level: c.level, withSlideOut: m })
                              : i().createElement(
                                    kt,
                                    { isEnabled: Boolean(a) },
                                    i().createElement(
                                        Ie,
                                        { blinkStyle: o, isEnabled: _ },
                                        i().createElement(Yt, { skillLevel: c.level, isHighlighted: _, className: l }),
                                    ),
                                );
                    },
                    Xt = {
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
                    Qt = ({
                        skills: e,
                        skillType: t = Ue.Major,
                        possibleSkills: n,
                        isAcceleratedTrainingVisible: a = !1,
                        collapseLayout: r = ze.None,
                        efficiencyState: u,
                        size: s,
                        tooltipData: o,
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
                        return i().createElement(
                            'div',
                            { className: F()(Xt.base, Xt[`base__${s}`], Xt[`base__collapse${(0, Ce.e)(r)}`], _) },
                            ((e, t, n, a, r) => {
                                if (!a || !t) return Y.UI(n, (e, t) => r(e, $e.None, t));
                                const u = new Map(Y.UI(t, ({ name: e, level: t }) => [e, t])),
                                    i = new Map(Y.UI(e, ({ name: e, level: t }) => [e, t]));
                                let s = !1;
                                return Y.UI(n, (o, l) => {
                                    const c = o.name,
                                        d = o.level,
                                        m = c === Se.jw,
                                        _ = Xe(e, l),
                                        E = m ? Qe(e, l) : i.get(c),
                                        g = m ? Qe(t, l) : u.get(c),
                                        p = Xe(n, l - 1),
                                        h = Xe(a, l),
                                        b = Xe(a, l + 1);
                                    let f = $e.None;
                                    return (
                                        s || c !== b || p === h || m || _ !== Se.jw
                                            ? m && l === n.length - 1 && s
                                                ? (f = $e.FadeIn)
                                                : (!m && !i.has(c)) || (void 0 === _ && m) || (E !== d && d === Se.I)
                                                  ? (f = $e.Blink)
                                                  : g !== E && (f = $e.ScaleUp)
                                            : ((s = !0), (f = i.has(c) ? $e.SlideOut : $e.SlideOutAndBlink)),
                                        r(o, f, l)
                                    );
                                });
                            })(e, g, E, p, (e, n, a) => {
                                const r = Ze(e);
                                return i().createElement(Gt, {
                                    key: a,
                                    index: a,
                                    skill: e,
                                    skillState: r,
                                    skillType: t,
                                    previousSkill: p && Y.U2(p, a),
                                    skillAnimationType: n,
                                    size: s,
                                    skillsSignature: D,
                                    efficiencyState: u,
                                    tooltipData: o,
                                    blinkStyle: l,
                                    isNewSkillAnimated: m,
                                    className: F()(
                                        Xt.skill,
                                        Xt[`skill__state${(0, Ce.e)(r)}`],
                                        e === v && Xt.skill__last,
                                        e === f && Xt.skill__lastLearnedSkill,
                                    ),
                                });
                            }),
                            C &&
                                i().createElement(Kt, {
                                    skillsAmountDiff: A,
                                    size: s,
                                    wasLearned: h && b && h.level !== b.level,
                                    skillType: t,
                                    isAllMajorSkillsLearned: d,
                                    skill: b,
                                    possibleSkill: v,
                                    blinkStyle: l,
                                    className: Xt.level,
                                }),
                            a &&
                                i().createElement(We, {
                                    classMix: Xt.acceleratedTrainingIcon,
                                    targetId: null == o ? void 0 : o.targetId,
                                }),
                            A > 0 &&
                                Oe(A, (e) =>
                                    i().createElement(ft, {
                                        key: e,
                                        index: e,
                                        totalAmount: A,
                                        type: t,
                                        className: Xt.lostSkill,
                                        size: s,
                                    }),
                                ),
                        );
                    };
                function Jt() {
                    return (
                        (Jt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Jt.apply(null, arguments)
                    );
                }
                const en = ({
                        skills: e,
                        collapseLayout: t = ze.None,
                        skillType: n = Ue.Major,
                        efficiencyState: a,
                        size: r,
                        tooltipData: u,
                        className: s,
                        isAcceleratedTrainingVisible: o,
                    }) => {
                        const l = Y.lN(e),
                            c = qe(e),
                            d = a !== ue.H$.Low && (null == l ? void 0 : l.level) !== Se.I;
                        return i().createElement(
                            'div',
                            { className: F()(Xt.base, Xt[`base__${r}`], Xt[`base__collapse${(0, Ce.e)(t)}`], s) },
                            Y.UI(e, (e, t) => {
                                const s = Ze(e);
                                return i().createElement(
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
                                            Xt.skill,
                                            Xt[`skill__state${(0, Ce.e)(s)}`],
                                            e === l && Xt.skill__last,
                                            e === c && Xt.skill__lastLearnedSkill,
                                        ),
                                    },
                                    i().createElement(
                                        $t,
                                        Jt({ size: r, type: n, efficiencyState: a, skillState: s }, e),
                                    ),
                                );
                            }),
                            d && l && i().createElement(Yt, { skillLevel: l.level, className: Xt.level }),
                            o &&
                                i().createElement(We, {
                                    classMix: Xt.acceleratedTrainingIcon,
                                    targetId: null == u ? void 0 : u.targetId,
                                }),
                        );
                    },
                    tn = {
                        base: 'Skills_base_ec',
                        efficiency: 'Skills_efficiency_d0',
                        base__c_44x44: 'Skills_base__c_44x44_c0',
                        rows: 'Skills_rows_e8',
                        bonusRow: 'Skills_bonusRow_4a',
                    };
                function nn() {
                    return (
                        (nn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        nn.apply(null, arguments)
                    );
                }
                const an = ({
                        data: e,
                        dataToCompare: t,
                        classes: n,
                        tankmanID: a = Se.y$,
                        size: r = Ge.c24x24,
                        collapseType: u = He.None,
                        isSkillTooltipEnabled: s = !1,
                        isAcceleratedTrainingVisible: o = !1,
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
                            N = ((e, t, n, a) => {
                                if (t !== Se.vA) return ze.None;
                                switch (e) {
                                    case He.Default:
                                        if (n && a) return ze.NoMargins;
                                        break;
                                    case He.Overlap:
                                        if (n) return a ? ze.Overlap : ze.ReducedMargins;
                                        if (a) return ze.OnlyLearningOverlap;
                                        break;
                                    case He.ExtraOverlap:
                                        return n && a
                                            ? ze.ExtraOverlapWithLevelAndEfficiency
                                            : n
                                              ? ze.ExtraOverlapWithEfficiency
                                              : a
                                                ? ze.ExtraOverlapWithLevel
                                                : ze.ExtraOverlap;
                                }
                                return ze.None;
                            })(u, B.length, C, v !== ue.H$.Low && void 0 !== y && y.level < Se.I),
                            T = {
                                size: r,
                                efficiencyState: v,
                                tooltipData: { targetId: m, isEnabled: s, tankmanID: a, args: _ },
                            };
                        return i().createElement(
                            'div',
                            { className: F()(tn.base, tn[`base__${r}`], null == n ? void 0 : n.base) },
                            C &&
                                i().createElement(
                                    Ie,
                                    { blinkStyle: E, isEnabled: A && S },
                                    i().createElement(Te, {
                                        efficiencyValue: f,
                                        tankmanID: a,
                                        className: tn.efficiency,
                                        size: Ke(r, k),
                                        targetId: m,
                                    }),
                                ),
                            g,
                            i().createElement(
                                'div',
                                { className: tn.rows },
                                S
                                    ? i().createElement(
                                          i().Fragment,
                                          null,
                                          i().createElement(
                                              Qt,
                                              nn(
                                                  {
                                                      skills: p,
                                                      possibleSkills: D,
                                                      blinkStyle: E,
                                                      isAcceleratedTrainingVisible: o,
                                                      isNewSkillAnimated: l,
                                                      isSkillsEfficiencyLearning: A,
                                                  },
                                                  T,
                                              ),
                                          ),
                                          k &&
                                              i().createElement(
                                                  Qt,
                                                  nn(
                                                      {
                                                          skills: h,
                                                          skillType: Ue.Bonus,
                                                          possibleSkills: w,
                                                          className: tn.bonusRow,
                                                          collapseLayout: N,
                                                          blinkStyle: E,
                                                          isNewSkillAnimated: l,
                                                          isAllMajorSkillsLearned: x,
                                                      },
                                                      T,
                                                  ),
                                              ),
                                      )
                                    : i().createElement(
                                          i().Fragment,
                                          null,
                                          i().createElement(en, nn({ skills: p, isAcceleratedTrainingVisible: o }, T)),
                                          k &&
                                              i().createElement(
                                                  en,
                                                  nn(
                                                      {
                                                          skills: h,
                                                          skillType: Ue.Bonus,
                                                          className: tn.bonusRow,
                                                          collapseLayout: N,
                                                      },
                                                      T,
                                                  ),
                                              ),
                                      ),
                            ),
                        );
                    },
                    rn = 'Content_base_48',
                    un = 'Content_base__disabled_e3',
                    sn = 'Content_content_cb',
                    on = 'Content_name_7b',
                    ln = 'Content_name__postProgression_f9',
                    cn = 'Content_specializationInfo_ac',
                    dn = 'Content_recruitLabel_17';
                function mn() {
                    return (
                        (mn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        mn.apply(null, arguments)
                    );
                }
                const _n = i().memo(({ tankman: e, isRecruit: t, isDisabled: n = !1, withBonusSkills: a = !1 }) =>
                        i().createElement(
                            'div',
                            { className: F()(rn, n && un) },
                            i().createElement(
                                'div',
                                { className: sn },
                                i().createElement(
                                    'div',
                                    { className: F()(on, e.hasPostProgression && ln) },
                                    e.fullUserName,
                                ),
                                i().createElement(
                                    'div',
                                    { className: cn },
                                    t
                                        ? i().createElement('div', { className: dn }, R.strings.crew.tankman.recruit())
                                        : i().createElement(
                                              ke,
                                              mn({}, e.tankmanVehicleInfo, { type: ye.whiteSpanish, isShortName: !0 }),
                                          ),
                                ),
                            ),
                            i().createElement(an, {
                                data: e.skills,
                                collapseType: He.Overlap,
                                isBonusSkillsVisible: a,
                            }),
                        ),
                    ),
                    En = 'DisabledLayer_base_1b',
                    gn = 'DisabledLayer_disabledContent_81',
                    pn = 'DisabledLayer_disabledIcon_21',
                    hn = 'DisabledLayer_disabledTitle_a4',
                    bn = i().memo(({ disableReason: e, disableIcon: t, className: n }) =>
                        i().createElement(
                            'div',
                            { className: F()(En, n) },
                            i().createElement(
                                'div',
                                { className: gn },
                                t &&
                                    i().createElement('div', {
                                        className: pn,
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                i().createElement('div', { className: hn }, e),
                            ),
                        ),
                    ),
                    fn = {
                        base: 'FlagIcon_base_25',
                        base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                        base__c_240x118: 'FlagIcon_base__c_240x118_92',
                        base__c_155x31: 'FlagIcon_base__c_155x31_41',
                    };
                let vn;
                !(function (e) {
                    (e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118'), (e.c155x31 = 'c_155x31');
                })(vn || (vn = {}));
                const An = {
                        [vn.c1080x454]: R.images.gui.maps.icons.crew.flags,
                        [vn.c240x118]: R.images.gui.maps.icons.tankmen.card.nations,
                        [vn.c155x31]: R.images.gui.maps.icons.nations.c_155x31,
                    },
                    Fn = i().memo(({ nation: e, size: t, className: n }) =>
                        i().createElement('div', {
                            className: F()(fn.base, fn[`base__${t}`], n),
                            style: { backgroundImage: `url('${An[t].$dyn(e)}')` },
                        }),
                    ),
                    Cn = {
                        base: 'TankmanIcon_base_f9',
                        base__big: 'TankmanIcon_base__big_98',
                        base__small: 'TankmanIcon_base__small_b2',
                        base__barracks: 'TankmanIcon_base__barracks_62',
                        base__special: 'TankmanIcon_base__special_3f',
                        base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                    };
                let Dn;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(Dn || (Dn = {}));
                const wn = (0, u.memo)(function ({ name: e, size: t = Dn.c100x60, classMix: n, isSkin: a = !1 }) {
                        let r = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                        a && (r = r.$dyn('crewSkins'));
                        const u = r.$dyn((0, Ce.BN)(e));
                        return (
                            u ||
                                console.error(
                                    `Can't find ${(0, Ce.BN)(e)} in R.images.gui.maps.icons.tankmen.icons.${t}${a ? '.crewSkins' : ''}`,
                                ),
                            i().createElement('div', {
                                style: { backgroundImage: `url(${u})` },
                                className: F()(Cn.base, Cn[`base__${t}`], n),
                            })
                        );
                    }),
                    Bn = 'Icon_base_93',
                    yn = 'Icon_base__disabled_54',
                    kn = 'Icon_flag_ac',
                    Sn = (e, t) => {
                        if (e && t) return { backgroundImage: `url(${e})` };
                    },
                    xn = i().memo(
                        ({
                            nation: e,
                            tankmanIcon: t,
                            recruitGlowImage: n,
                            isTankmanInSkin: a,
                            isRecruit: r,
                            isDisabled: u,
                            className: s,
                            children: o,
                        }) =>
                            i().createElement(
                                'div',
                                { className: F()(Bn, u && yn, s), style: Sn(n, r) },
                                '' !== e && i().createElement(Fn, { nation: e, size: vn.c240x118, className: kn }),
                                i().createElement(wn, { name: t, size: Dn.c158x118, isSkin: a }),
                                o,
                            ),
                    );
                var Nn = n(7044);
                const Tn = (0, u.memo)(({ duration: e }) => {
                        const t =
                            e >= 0
                                ? (n = (0, Nn.f8)(e)).days > 0
                                    ? (0, Ce.WU)(R.strings.common.duration.days(), { days: n.days })
                                    : n.hours > 0
                                      ? (0, Ce.WU)(R.strings.common.duration.hours(), { hours: n.hours })
                                      : n.minutes > 0
                                        ? (0, Ce.WU)(R.strings.common.duration.minutes(), { minutes: n.minutes })
                                        : (0, Ce.WU)(R.strings.common.duration.seconds(), { seconds: n.seconds })
                                : R.strings.common.duration.unlimited();
                        var n;
                        return i().createElement('span', null, t);
                    }),
                    Ln = 'DismissedCountdown_base_12',
                    In = 'DismissedCountdown_icon_e6',
                    Rn = 'DismissedCountdown_label_92',
                    On = i().memo(({ duration: e }) =>
                        i().createElement(
                            'div',
                            { className: Ln },
                            i().createElement('div', { className: In }),
                            i().createElement(
                                'div',
                                { className: Rn },
                                i().createElement(Tn, { duration: (0, Re.au)(e, 1) }),
                            ),
                        ),
                    ),
                    Mn = 'Location_base_4d',
                    Pn = 'Location_icon_eb',
                    Wn = i().memo(({ location: e, timeToDismiss: t, className: n }) =>
                        i().createElement(
                            'div',
                            { className: F()(Mn, n) },
                            e === be.Dismissed && i().createElement(On, { duration: t }),
                            e !== be.InBarracks &&
                                i().createElement('div', {
                                    className: Pn,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.tankmen.card.location.${e})`,
                                    },
                                }),
                        ),
                    ),
                    Hn = 'Role_base_68',
                    $n = 'Role_base__disabled_8c';
                var zn;
                !(function (e) {
                    (e.White = 'white'), (e.Red = 'red');
                })(zn || (zn = {}));
                const jn = i().memo(({ role: e, withPenalty: t, className: n, isDisabled: a = !1 }) =>
                        e !== he.Any
                            ? i().createElement('div', {
                                  className: F()(Hn, a && $n, n),
                                  style: {
                                      backgroundImage: `url(R.images.gui.maps.icons.tankmen.roles.opaque.${t ? zn.Red : zn.White}.${e})`,
                                  },
                              })
                            : null,
                    ),
                    Gn = {
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
                    Un = (0, u.memo)(
                        ({
                            tankman: e,
                            Icon: t = xn,
                            actions: n,
                            isTooltipEnabled: a = !0,
                            withBonusSkills: r = !1,
                            className: u,
                            classNames: s,
                            onHover: o,
                            onMouseDown: l,
                            onClick: c,
                        }) => {
                            const d = e.tankmanKind === fe.Recruit,
                                m = e.cardState === ve.Disabled;
                            return i().createElement(
                                pe.t,
                                {
                                    args: {
                                        tooltipId: d ? 'tankmanNotRecruited' : 'tankman',
                                        targetId: d ? e.recruitID : e.tankmanID,
                                    },
                                    isEnabled: a,
                                    ignoreShowDelay: !1,
                                },
                                i().createElement(
                                    'div',
                                    {
                                        className: F()(Gn.base, Gn[`base__${e.cardState}`], u),
                                        onMouseEnter: o,
                                        onMouseDown: l,
                                        onClick: c,
                                    },
                                    m &&
                                        i().createElement(bn, {
                                            disableReason: e.disableReason,
                                            disableIcon: e.disableIcon,
                                            className: Gn.disabledLayer,
                                        }),
                                    i().createElement(jn, {
                                        isDisabled: m,
                                        role: e.role,
                                        withPenalty: e.hasRolePenalty,
                                        className: Gn.role,
                                    }),
                                    i().createElement(Wn, {
                                        location: e.location,
                                        timeToDismiss: e.timeToDismiss,
                                        className: Gn.location,
                                    }),
                                    i().createElement(t, {
                                        nation: e.nation,
                                        tankmanIcon: e.iconName,
                                        recruitGlowImage: e.recruitGlowImage,
                                        isTankmanInSkin: e.isInSkin,
                                        isRecruit: d,
                                        isDisabled: m,
                                        className: F()(Gn.icon, null == s ? void 0 : s.icon),
                                    }),
                                    i().createElement(
                                        'div',
                                        { className: F()(Gn.separatorWrapper, null == s ? void 0 : s.separator) },
                                        i().createElement('div', { className: F()(Gn.separator, Gn.separator__top) }),
                                        i().createElement('div', { className: Gn.separator }),
                                    ),
                                    i().createElement(_n, {
                                        tankman: e,
                                        isRecruit: d,
                                        isDisabled: m,
                                        withBonusSkills: r,
                                    }),
                                    !m && n && i().createElement('div', { className: F()(Gn.actions) }, n),
                                ),
                            );
                        },
                    ),
                    Vn = (e) => {
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
                    Zn = (e, t, n) => (n < e ? e : n > t ? t : n),
                    qn = [];
                function Yn(e) {
                    const t = (0, u.useRef)(e);
                    return (
                        (0, u.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, u.useCallback)((...e) => (0, t.current)(...e), qn)
                    );
                }
                function Kn(e, t, n = []) {
                    const a = (0, u.useRef)(0),
                        r = (0, u.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, u.useEffect)(() => r, [r]);
                    const i = (null != n ? n : []).concat([t]);
                    return [
                        (0, u.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, i),
                        r,
                    ];
                }
                var Xn = n(7727);
                function Qn(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return Jn(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? Jn(e, t)
                                          : void 0
                                );
                            }
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
                function Jn(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const ea = () => {
                    const e = (0, u.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        n = (e, n) => {
                            t(e).set(n, n);
                        },
                        a = (e, n) => {
                            t(e).delete(n);
                        },
                        r = (e, ...n) => {
                            for (var a, r = Qn(t(e).values()); !(a = r()).done; ) {
                                (0, a.value)(...n);
                            }
                        };
                    return (0, u.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                };
                var ta = n(5139);
                function na(e, t, n) {
                    const a = (0, u.useMemo)(() => (0, ta.Z)(n, e), t);
                    return (0, u.useEffect)(() => a.cancel, [a]), a;
                }
                let aa;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(aa || (aa = {}));
                const ra = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ua = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const s = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                u = a[1];
                            return u <= r ? 0 : Zn(r, u, n);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? ra : c,
                                m = (0, u.useRef)(null),
                                _ = (0, u.useRef)(null),
                                E = ea(),
                                g = na(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, Le.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (n(t, e), E.trigger('change', e), i && g());
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
                                        return s(e, t * n + u + r);
                                    },
                                    [h.scrollPosition],
                                ),
                                v = (0, u.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = m.current;
                                        a &&
                                            b.start({
                                                scrollPosition: s(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: d.animationConfig,
                                                from: { scrollPosition: s(a, h.scrollPosition.get()) },
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
                                        Vn(() => {
                                            const e = m.current;
                                            e &&
                                                (v(s(e, h.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [v, h.scrollPosition.goal],
                                ),
                                D = Yn(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = s(e, h.scrollPosition.goal);
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
                                    clampPosition: s,
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
                    ia = ua({
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
                        getDirection: (e) => (e.deltaY > 1 ? aa.Next : aa.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    sa = 'HorizontalBar_base_49',
                    oa = 'HorizontalBar_base__nonActive_82',
                    la = 'HorizontalBar_leftButton_5f',
                    ca = 'HorizontalBar_rightButton_03',
                    da = 'HorizontalBar_track_0d',
                    ma = 'HorizontalBar_thumb_fd',
                    _a = 'HorizontalBar_rail_32',
                    Ea = 'disable',
                    ga = { pending: !1, offset: 0 },
                    pa = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ha = () => {},
                    ba = (e, t) => Math.max(20, e.offsetWidth * t),
                    fa = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = pa, onDrag: a = ha }) => {
                        const r = (0, u.useRef)(null),
                            s = (0, u.useRef)(null),
                            l = (0, u.useRef)(null),
                            c = (0, u.useRef)(null),
                            d = (0, u.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, u.useState)(ga),
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
                                    i = Math.min(1, a / r),
                                    o = Zn(0, 1, u / (r - a)),
                                    m = (t.offsetWidth - ba(t, i)) * o;
                                (n.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Ea), void l.current.classList.remove(Ea);
                                            if (
                                                ((t = c.current),
                                                (n = d.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(Ea), void l.current.classList.add(Ea);
                                            var t, n;
                                            s.current.classList.remove(Ea), l.current.classList.remove(Ea);
                                        }
                                    })(m);
                            },
                            b = Yn(() => {
                                (() => {
                                    const t = d.current,
                                        n = c.current,
                                        a = e.getWrapperSize(),
                                        u = e.getContainerSize();
                                    if (!(u && t && a && n)) return;
                                    const i = Math.min(1, a / u);
                                    (t.style.width = `${ba(n, i)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === i ? r.current.classList.add(oa) : r.current.classList.remove(oa));
                                })(),
                                    h();
                            });
                        (0, u.useEffect)(() => Vn(b)),
                            (0, u.useEffect)(
                                () =>
                                    Vn(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let n = ha;
                                        const a = () => {
                                            n(), (n = Vn(b));
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
                                const t = o.O.client.events.mouse.move(([t, n]) => {
                                        var r;
                                        const u = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!u || !i) return;
                                        const s = c.current,
                                            o = d.current;
                                        if (!s || !o) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const l = t.clientX - E.offset - s.getBoundingClientRect().x,
                                            m = (l / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(u, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: m });
                                    }),
                                    n = o.O.client.events.mouse.up(() => {
                                        t(), p(ga);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, E.offset, E.pending, a, p]);
                        const f = Kn((t) => e.applyStepTo(t), m, [e]),
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
                            e.target.classList.contains(Ea) || (0, Xn.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: F()(sa, t.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: F()(la, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ea) ||
                                        0 !== e.button ||
                                        ((0, Xn.G)('play'), v(aa.Next));
                                },
                                onMouseUp: A,
                                ref: s,
                                onMouseEnter: C,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: F()(da, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, Xn.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = d.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const u = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + u * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? aa.Prev : aa.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                i().createElement('div', { ref: d, className: F()(ma, t.thumb) }),
                                i().createElement('div', { className: F()(_a, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: F()(ca, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ea) ||
                                        0 !== e.button ||
                                        ((0, Xn.G)('play'), v(aa.Prev));
                                },
                                onMouseUp: A,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    va = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Aa = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: s,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, u.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: F()(va.base, e.base) });
                            }, [a]),
                            m = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: F()(va.defaultScroll, n), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: F()(va.defaultScrollArea, r) },
                                i().createElement(Fa, { className: o, api: m, classNames: s }, e),
                            ),
                            i().createElement(fa, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Fa = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, u.useEffect)(() => Vn(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: F()(va.base, t) },
                            i().createElement(
                                'div',
                                {
                                    className: F()(va.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: F()(va.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (Fa.Bar = fa), (Fa.Default = Aa);
                const Ca = ua({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? aa.Next : aa.Prev),
                    }),
                    Da = 'VerticalBar_base_f3',
                    wa = 'VerticalBar_base__nonActive_42',
                    Ba = 'VerticalBar_topButton_d7',
                    ya = 'VerticalBar_bottomButton_06',
                    ka = 'VerticalBar_track_df',
                    Sa = 'VerticalBar_thumb_32',
                    xa = 'VerticalBar_rail_43',
                    Na = 'disable',
                    Ta = () => {},
                    La = { pending: !1, offset: 0 },
                    Ia = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ra = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Oa = (e, t) => Math.max(20, e.offsetHeight * t),
                    Ma = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Ia, onDrag: a = Ta }) => {
                        const r = (0, u.useRef)(null),
                            s = (0, u.useRef)(null),
                            l = (0, u.useRef)(null),
                            c = (0, u.useRef)(null),
                            d = (0, u.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, u.useState)(La),
                            E = _[0],
                            g = _[1],
                            p = (0, u.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            h = Yn(() => {
                                const t = d.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const i = Math.min(1, a / u);
                                return (
                                    (t.style.height = `${Oa(n, i)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === i ? r.current.classList.add(wa) : r.current.classList.remove(wa)),
                                    i
                                );
                            }),
                            b = Yn(() => {
                                const t = c.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / r),
                                    o = Zn(0, 1, u / (r - a)),
                                    m = (t.offsetHeight - Oa(t, i)) * o;
                                (n.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(Na), void l.current.classList.remove(Na);
                                            if (
                                                ((t = c.current),
                                                (n = d.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(Na), void l.current.classList.add(Na);
                                            var t, n;
                                            s.current.classList.remove(Na), l.current.classList.remove(Na);
                                        }
                                    })(m);
                            }),
                            f = Yn(() => {
                                Ra(e, () => {
                                    h(), b();
                                });
                            });
                        (0, u.useEffect)(() => Vn(f)),
                            (0, u.useEffect)(() => {
                                const t = () => {
                                    Ra(e, () => {
                                        b();
                                    });
                                };
                                let n = Ta;
                                const a = () => {
                                    n(), (n = Vn(f));
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
                                const t = o.O.client.events.mouse.up(() => {
                                        p(La);
                                    }),
                                    n = o.O.client.events.mouse.move(([t]) => {
                                        Ra(e, (n) => {
                                            const r = c.current,
                                                u = d.current,
                                                i = e.getContainerSize();
                                            if (!r || !u || !i) return;
                                            const s = t.screenY - E.offset - r.getBoundingClientRect().y,
                                                o = (s / r.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: u, thumbOffset: s, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, E.offset, E.pending, a, p]);
                        const v = Kn((t) => e.applyStepTo(t), m, [e]),
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
                            e.target.classList.contains(Na) || (0, Xn.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: F()(Da, t.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: F()(Ba, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Na) ||
                                        0 !== e.button ||
                                        ((0, Xn.G)('play'), A(aa.Next));
                                },
                                ref: s,
                                onMouseEnter: D,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: F()(ka, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, Xn.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        Ra(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                u = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(u);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? aa.Prev : aa.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                i().createElement('div', { ref: d, className: F()(Sa, t.thumb) }),
                                i().createElement('div', { className: F()(xa, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: F()(ya, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Na) ||
                                        0 !== e.button ||
                                        ((0, Xn.G)('play'), A(aa.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Pa = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Wa = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: s,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, u.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: F()(Pa.base, e.base) });
                            }, [a]),
                            m = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: F()(Pa.defaultScroll, n), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: F()(Pa.area, r) },
                                i().createElement(Ha, { className: s, classNames: o, api: m }, e),
                            ),
                            i().createElement(Ma, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Ha = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, u.useEffect)(() => Vn(a.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: F()(Pa.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: F()(Pa.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                Ha.Default = Wa;
                const $a = { Vertical: r, Horizontal: a },
                    za = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: n,
                        paddingBottom: a,
                        amount: r,
                        itemsAmountPerRow: u,
                        visibleRowsAmount: i,
                    }) => {
                        const s = Math.ceil(r / u) * t,
                            o = i * t,
                            l = e * t;
                        return { paddingTop: `${l + n}rem`, paddingBottom: `${Math.max(s - l - o, 0) + a}rem` };
                    },
                    ja = (e) => {
                        const t = e.className,
                            n = e.children,
                            a = e.itemsAmountPerRow,
                            r = e.visibleRowsAmount,
                            u = e.startRowIndex,
                            s = e.amount,
                            o = u * a,
                            l = Math.min(r * a, s - o);
                        return i().createElement(
                            'div',
                            { className: t, style: za(e) },
                            Oe(l, (e) => n(o + e)),
                        );
                    },
                    Ga = 'VirtualGrid_base_52',
                    Ua = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: n,
                        children: a,
                        api: r,
                        classNames: s,
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
                                    const a = Math.floor((o.O.view.pxToRem(t.value.scrollPosition) - c) / n + 1),
                                        u = Math.ceil(e / b),
                                        i = Math.max(0, Math.min(a - l, u));
                                    p(i), r.startRowIndexChanged(i);
                                };
                                return m.events.on('change', t), () => m.events.off('change', t);
                            }, [r, m, n, c, b, e, l]),
                            (0, u.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                a = m.contentRef.current.getBoundingClientRect(),
                                                u =
                                                    o.O.view.pxToRem(a.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                i = Math.floor(u / t),
                                                s = Math.ceil(o.O.view.pxToRem(a.height) / n) + 2 * l;
                                            (_.current = i), f(i), C(s), r.layoutCalculated(i, s);
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
                            i().createElement(
                                $a.Vertical.Default,
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
                                null !== b &&
                                    null !== A &&
                                    i().createElement(
                                        ja,
                                        {
                                            className: F()(Ga, null == s ? void 0 : s.inner),
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
                    Va = 'VirtualGridWithFade_scrollAreaFade_94',
                    Za = ['api', 'children', 'classNames'];
                function qa() {
                    return (
                        (qa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        qa.apply(null, arguments)
                    );
                }
                const Ya = (e) => {
                        let t = e.api,
                            n = e.children,
                            a = e.classNames,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, Za);
                        const s = (0, u.useState)(!0),
                            o = s[0],
                            l = s[1],
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
                            i().createElement(
                                Ua,
                                qa(
                                    {
                                        api: t,
                                        classNames: Object.assign({}, a, {
                                            scrollClassName: F()(null == a ? void 0 : a.scrollClassName, o && Va),
                                        }),
                                    },
                                    r,
                                ),
                                n,
                            )
                        );
                    },
                    Ka = 'TankmanVirtualList_grid_41',
                    Xa = ({
                        amount: e,
                        paddingTop: t = 11,
                        paddingBottom: n = 11,
                        api: a,
                        classNames: r,
                        children: u,
                    }) =>
                        i().createElement(
                            Ya,
                            {
                                amount: e,
                                classNames: Object.assign({}, r, { content: F()(Ka, null == r ? void 0 : r.content) }),
                                cellWidth: 318,
                                cellHeight: 265,
                                paddingTop: t,
                                paddingBottom: n,
                                api: a,
                            },
                            u,
                        );
                var Qa = n(5332);
                let Ja;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Ja || (Ja = {}));
                const er = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: r,
                        isEnabled: i = !0,
                        onMouseDown: s,
                    }) => {
                        const o = (0, u.useCallback)(() => {
                                (0, z.c9)(z.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    Xn.$.playYes();
                            }, [r, t, n, a]),
                            l = (0, u.useCallback)(() => {
                                (0, z.c9)(z.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, u.useCallback)(
                                (e) => {
                                    s && s(e), ((e) => e.button === Ja.RIGHT)(e) && o();
                                },
                                [s, o],
                            );
                        return (
                            (0, u.useEffect)(() => {
                                !1 === i && l();
                            }, [i, l]),
                            i ? (0, u.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    tr = ['children'];
                function nr() {
                    return (
                        (nr = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        nr.apply(null, arguments)
                    );
                }
                const ar = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, tr);
                    return i().createElement(
                        er,
                        nr({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                let rr, ur, ir, sr, or, lr, cr, dr;
                !(function (e) {
                    (e.Viewed = 'viewed'), (e.Click = 'click');
                })(rr || (rr = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.PersonalFile = 'personal_file_view'),
                            (e.PersonalData = 'personal_data_view'),
                            (e.ServiceRecord = 'service_record_view'),
                            (e.Barracks = 'barracks_view'),
                            (e.MemberChange = 'member_change_view'),
                            (e.QuickTraining = 'quick_training_view'),
                            (e.TankChange = 'tank_change_view');
                    })(ur || (ur = {})),
                    (function (e) {
                        (e.DocumentChange = 'document_change_dialog'), (e.RetrainSingle = 'retrain_single_dialog');
                    })(ir || (ir = {})),
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
                    })(lr || (lr = {})),
                    (function (e) {
                        (e.Checkbox = 'retrain_single_dialog_checkbox'),
                            (e.RoleButton = 'retrain_single_dialog_role_button');
                    })(cr || (cr = {})),
                    (function (e) {
                        e.CardContextMenu = 'barracks_view_card_context_menu';
                    })(dr || (dr = {}));
                R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                    ur.PersonalFile,
                    R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                    ur.PersonalData,
                    R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    ur.ServiceRecord,
                    R.views.lobby.crew.BarracksView('resId'),
                    ur.Barracks,
                    R.views.lobby.crew.HangarCrewWidget('resId'),
                    ur.Hangar,
                    R.views.lobby.crew.MemberChangeView('resId'),
                    ur.MemberChange,
                    R.views.lobby.crew.TankChangeView('resId'),
                    ur.TankChange,
                    R.views.lobby.crew.QuickTrainingView('resId'),
                    ur.QuickTraining;
                let mr;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(mr || (mr = {}));
                let _r;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(_r || (_r = {}));
                const Er = 'metrics',
                    gr = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: r || null,
                    }),
                    pr = (e, t) => {
                        const n = (0, u.useCallback)(
                            (n, a = mr.Info, r) => {
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
                    hr = (e, t) => {
                        const n = ((e) => {
                                const t = pr(e, Er),
                                    n = (0, u.useCallback)(
                                        (e) => {
                                            t(e.action, e.logLevel, gr(e));
                                        },
                                        [t],
                                    );
                                return (e) => n(e);
                            })('crew'),
                            a = na(() => n({ action: rr.Click, parentScreen: e, item: t }), [e, t], 2e3);
                        return (e) => {
                            e.button === Ja.RIGHT && a();
                        };
                    },
                    br = 'MainActionButton_base_98',
                    fr = ['tooltipArgs', 'className', 'children', 'onClick'];
                function vr() {
                    return (
                        (vr = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        vr.apply(null, arguments)
                    );
                }
                const Ar = i().memo((e) => {
                        let t = e.tooltipArgs,
                            n = e.className,
                            a = e.children,
                            r = e.onClick,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, fr);
                        return i().createElement(
                            Tt.l,
                            { tooltipArgs: t },
                            i().createElement(
                                ae.u5,
                                vr(
                                    {
                                        size: ae.qE.small,
                                        mixClass: F()(br, n),
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
                    Fr = 'VoiceOverButton_base_f9',
                    Cr = 'VoiceOverButton_soundIcon_c9',
                    Dr = i().memo(({ onClick: e }) =>
                        i().createElement(
                            re.i,
                            {
                                header: R.strings.crew.tankman.action.voiceover.tooltip.title(),
                                body: R.strings.crew.tankman.action.voiceover.tooltip.body(),
                            },
                            i().createElement(
                                ae.u5,
                                {
                                    size: ae.qE.small,
                                    mixClass: Fr,
                                    type: ae.L$.secondary,
                                    onClick: (t) => {
                                        e && (t.stopPropagation(), e(t));
                                    },
                                },
                                i().createElement('div', { className: Cr }),
                            ),
                        ),
                    ),
                    wr = ({ className: e }) => i().createElement('div', { className: F()(Gn.base, e) }),
                    Br = {
                        base: 'BarracksTankmanCard_base_15',
                        base__default: 'BarracksTankmanCard_base__default_de',
                        separator: 'BarracksTankmanCard_separator_20',
                        icon: 'BarracksTankmanCard_icon_43',
                        actionBtn: 'BarracksTankmanCard_actionBtn_a6',
                    },
                    yr = R.strings.crew.tankman.action,
                    kr = { body: yr.dismiss.tooltip.available.body() },
                    Sr = {
                        body: yr.dismiss.tooltip.unavailable.body(),
                        header: yr.dismiss.tooltip.unavailable.title(),
                    },
                    xr = { body: yr.restore.tooltip.body() },
                    Nr = yr.dismiss.title(),
                    Tr = yr.restore.title(),
                    Lr = yr.recruit.title(),
                    Ir = { body: R.strings.crew.tankmanList.tooltip.recruit.body() },
                    Rr = (e) => () => {
                        e || (Xn.$.playHighlight(), (0, Xn.G)(ue.gO.SHOP_INFO));
                    },
                    Or = (0, U.Pi)(({ index: e, onLazyLoad: t }) => {
                        const n = te(),
                            a = n.model,
                            r = n.controls,
                            s = hr(ur.Barracks, dr.CardContextMenu),
                            o = a.computes.getItem(e);
                        if (
                            ((0, u.useEffect)(() => {
                                o || t();
                            }, [t, o]),
                            !o)
                        )
                            return i().createElement(wr, { className: Br.base });
                        const l = o.location,
                            c = o.tankmanKind === fe.Recruit,
                            d = o.cardState === ve.Disabled,
                            m = (e) => {
                                o &&
                                    (o.tankmanKind === fe.Recruit
                                        ? r.recruitTankman(o.recruitID)
                                        : o.location === be.Dismissed
                                          ? r.restoreTankman(o.tankmanID)
                                          : e(o.tankmanID));
                            },
                            _ = ((e, t, n) => {
                                const a = t ? Sr : kr;
                                switch (e) {
                                    case be.InBarracks:
                                        return [n ? Lr : Nr, n ? Ir : a];
                                    case be.InTank:
                                        return [Nr, a];
                                    case be.Dismissed:
                                    default:
                                        return [Tr, xr];
                                }
                            })(l, o.isMainActionDisabled, c),
                            E = _[0],
                            g = _[1];
                        return i().createElement(
                            ar,
                            {
                                isEnabled: !c && l !== be.Dismissed && o.cardState !== ve.Disabled,
                                args: { type: 'crewTankman', tankmanID: o.tankmanID },
                                onMouseDown: s,
                            },
                            i().createElement(Un, {
                                tankman: o,
                                className: F()(Br.base, Br[`base__${o.cardState}`]),
                                classNames: { icon: Br.icon, separator: Br.separator },
                                actions: i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        Ar,
                                        {
                                            tooltipArgs: g,
                                            onClick: () => m(r.dismissTankman),
                                            disabled: o.isMainActionDisabled,
                                            className: Br.actionBtn,
                                        },
                                        E,
                                    ),
                                    o.hasVoiceover &&
                                        c &&
                                        i().createElement(Dr, {
                                            onClick: () => o && r.playRecruitVoiceover(o.recruitID),
                                        }),
                                ),
                                onHover: Rr(d),
                                onClick: () => !d && m(r.selectTankman),
                            }),
                        );
                    }),
                    Mr = 'BarracksTankmanList_base_d7',
                    Pr = 'BarracksTankmanList_gridWrapper_0b',
                    Wr = 'BarracksTankmanList_emptyState_1c',
                    Hr = R.strings.crew.tankmanList.emptyState,
                    $r = (e) => (e ? ue.Xd : { body: R.strings.crew.tankmanList.tooltip.recruit.body() }),
                    zr = (0, U.Pi)(() => {
                        const e = te(),
                            t = e.model,
                            n = e.controls,
                            a = (() => {
                                const e = $a.Vertical.useVerticalScrollApi(),
                                    t = ea(),
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
                            s = t.itemsAmount.get(),
                            o = ((e, t) => {
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
                                            i = (e) => {
                                                const t = r.current[0];
                                                r.current = [e.value.scrollPosition, t < e.value.scrollPosition];
                                            };
                                        return (
                                            t.scrollApi.events.on('change', i),
                                            t.events.on('layoutCalculated', e),
                                            t.events.on('startRowIndexChanged', u),
                                            () => {
                                                t.scrollApi.events.off('change', i),
                                                    t.events.off('layoutCalculated', e),
                                                    t.events.off('startRowIndexChanged', u);
                                            }
                                        );
                                    }, [t]),
                                    (0, Qa.N)(
                                        () => {
                                            const t = n.current,
                                                u = t[0],
                                                i = t[1],
                                                s = a.current * u,
                                                o = u * i;
                                            e(2 * o, r.current[1] ? s : Math.max(s - 1 * o, 0));
                                        },
                                        [],
                                        10,
                                    )
                                );
                            })(n.loadCards, a);
                        return i().createElement(
                            'div',
                            { className: Mr },
                            s > 0
                                ? i().createElement(
                                      'div',
                                      { className: Pr },
                                      i().createElement(Xa, { amount: s, api: a }, (e) =>
                                          i().createElement(Or, { key: e, index: e, onLazyLoad: o }),
                                      ),
                                  )
                                : i().createElement(
                                      ge,
                                      {
                                          warningText: r ? Hr.noFilteredItems() : Hr.noItems(),
                                          buttonType: r ? ne.L.secondary : ne.L.primary,
                                          tooltipArgs: $r(r),
                                          onClick: n.resetFilters,
                                          className: Wr,
                                      },
                                      !!r && Hr.button.resetFilers(),
                                  ),
                        );
                    }),
                    jr = 'ButtonWithDiscountIndicator_base_6c',
                    Gr = 'ButtonWithDiscountIndicator_discountIndicator_a5',
                    Ur = 'ButtonWithDiscountIndicator_discountIndicator__small_d6',
                    Vr = ['hasDiscount', 'className', 'children', 'wrapperId', 'isSmall'];
                const Zr = i().memo(function (e) {
                        let t = e.hasDiscount,
                            n = e.className,
                            a = e.children,
                            r = e.wrapperId,
                            u = e.isSmall,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, Vr);
                        return i().createElement(
                            'div',
                            { id: r, className: F()(jr, n) },
                            i().createElement(ae.u5, s, a),
                            t && i().createElement('div', { className: F()(Gr, u && Ur) }),
                        );
                    }),
                    qr = {
                        base: 'ListHeader_base_ad',
                        title: 'ListHeader_title_a8',
                        base__memberChange: 'ListHeader_base__memberChange_c2',
                        base__tankChange: 'ListHeader_base__tankChange_fb',
                        base__personalData: 'ListHeader_base__personalData_aa',
                    };
                let Yr;
                !(function (e) {
                    (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(Yr || (Yr = {}));
                const Kr = ({ title: e, theme: t = Yr.Barracks, className: n, children: a }) =>
                    i().createElement(
                        'div',
                        { className: F()(qr.base, qr[`base__${t}`], n) },
                        i().createElement('div', { className: qr.title }, e),
                        a,
                    );
                var Xr = n(9197);
                const Qr = 'Header_base_4b',
                    Jr = 'Header_berthsAmount_12',
                    eu = 'Header_button_f1';
                function tu() {
                    return (
                        (tu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        tu.apply(null, arguments)
                    );
                }
                const nu = (e) =>
                        e
                            ? { contentId: R.views.lobby.crew.tooltips.BunksConfirmDiscountTooltip('resId') }
                            : {
                                  header: R.strings.crew.barracks.tooltip.enlarge.header(),
                                  body: R.strings.crew.barracks.tooltip.enlarge.body(),
                              },
                    au = (0, U.Pi)(() => {
                        const e = te(),
                            t = e.model,
                            n = e.controls,
                            a = t.isBerthsOnSale.get();
                        return i().createElement(
                            Kr,
                            { title: R.strings.crew.barracks.title() },
                            i().createElement(
                                'div',
                                { className: Qr },
                                i().createElement(
                                    Xr.C,
                                    tu({ title: R.strings.crew.barracks.bunks.title() }, t.berthsAmount.get(), {
                                        className: Jr,
                                    }),
                                ),
                                i().createElement(
                                    Tt.l,
                                    { tooltipArgs: nu(a) },
                                    i().createElement(
                                        Zr,
                                        {
                                            size: ae.qE.small,
                                            type: ae.L$.ghost,
                                            mixClass: eu,
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
                    ru = 'BarracksApp_base_b7',
                    uu = 'BarracksApp_content_a3',
                    iu = 'BarracksApp_content__withBanner_3d',
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
                            G($.n.ESCAPE, u),
                            i().createElement(
                                'div',
                                { className: ru },
                                i().createElement(
                                    'div',
                                    { className: F()(uu, r && iu) },
                                    i().createElement(au, null),
                                    i().createElement(V.p, { popoverDirection: a < w.Large ? H.IC.Left : H.IC.Bottom }),
                                    i().createElement(zr, null),
                                ),
                                r && i().createElement(Z.d, { className: su }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    W().render(
                        i().createElement(ee, null, i().createElement(M, null, i().createElement(ou, null))),
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
                    i = n(6179),
                    s = n.n(i);
                const o = 'AlertCounter_base_f3',
                    l = 'AlertCounter_counter_da',
                    c = 'AlertCounter_label_18',
                    d = ({ value: e, className: t }) =>
                        s().createElement(
                            'div',
                            { className: r()(o, t) },
                            s().createElement(u.A, { value: e, className: l }),
                            !e && s().createElement('div', { className: c }, R.strings.crew.common.exclamationMark()),
                        );
            },
            9197: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => h });
                var a = n(6483),
                    r = n.n(a),
                    u = n(6179),
                    i = n.n(u);
                const s = 'NumberRange_base_5e',
                    o = 'NumberRange_base__animation_79',
                    l = 'NumberRange_from_70',
                    c = 'NumberRange_from__red_f8',
                    d = 'NumberRange_separator_c0',
                    m = i().memo(function ({ from: e, to: t, className: n }) {
                        return i().createElement(
                            'div',
                            { className: r()(s, e <= 0 && o, n) },
                            i().createElement('div', { className: r()(l, e <= 0 && t > 0 && c) }, e),
                            e !== t &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: d }, '/'),
                                    i().createElement('div', null, t),
                                ),
                        );
                    }),
                    _ = 'NumberRangeWithLabel_base_2b',
                    E = 'NumberRangeWithLabel_title_94',
                    g = 'NumberRangeWithLabel_counter_00',
                    p = 'NumberRangeWithLabel_counterGlow_1f',
                    h = ({ title: e, isGlowVisible: t = !1, className: n, classNames: a, from: s, to: o }) => {
                        const l = (0, u.useMemo)(
                            () => ({
                                left: s !== o ? 7 * String(s).length + 4 : Math.round((7 * String(s).length) / 2),
                            }),
                            [s, o],
                        );
                        return i().createElement(
                            'div',
                            { className: r()(_, n) },
                            i().createElement('div', { className: E }, e),
                            i().createElement(
                                'div',
                                { className: g },
                                i().createElement(m, { from: s, to: o }),
                                t &&
                                    i().createElement('div', {
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
                    i = n(2106),
                    s = n(9987),
                    o = n(6179),
                    l = n.n(o),
                    c = n(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function m() {
                    return (
                        (m = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        m.apply(null, arguments)
                    );
                }
                const _ = l().memo(function (e) {
                    let t = e.isActive,
                        n = e.counter,
                        a = e.className,
                        o = e.children,
                        _ = e.type,
                        E = void 0 === _ ? i.L.secondary : _,
                        g = e.size,
                        p = void 0 === g ? i.q.small : g,
                        h = e.hasIndicator,
                        b = void 0 === h || h,
                        f = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, d);
                    return l().createElement(
                        'div',
                        { className: r()(c.Z.base, a, t && c.Z.base__active) },
                        l().createElement(u.u5, m({ type: E, size: p, mixClass: c.Z.button }, f), o),
                        l().createElement('div', { className: c.Z.overlay }),
                        b && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(n) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(s.A, { value: n, size: 'small' }),
                            ),
                    );
                });
            },
            8018: (e, t, n) => {
                'use strict';
                n.d(t, { H$: () => s, Xd: () => u, Y4: () => o, gO: () => i });
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
                let i;
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
                })(i || (i = {}));
                let s;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(s || (s = {}));
                const o = (e) => (e === a.sU ? s.Untrained : e < a.yb ? s.Low : s.Normal);
            },
            3880: (e, t, n) => {
                'use strict';
                n.d(t, { d: () => he });
                var a = n(6179),
                    r = n.n(a),
                    u = n(6483),
                    i = n.n(u),
                    s = n(3457);
                let o, l;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(o || (o = {})),
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
                            case o.Timer:
                                return n.clock();
                            case o.Countdown:
                                return n.hourglass();
                            case o.Cooldown:
                                return n.lock();
                        }
                    },
                    v = (0, a.memo)(
                        ({
                            duration: e,
                            icon: t = o.Timer,
                            style: n = l.Description,
                            onTimeReached: a,
                            className: u = '',
                            classNames: s = {},
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
                                { className: i()(E, u) },
                                t !== o.None &&
                                    r().createElement('div', {
                                        className: i()(g, s.icon),
                                        style: { backgroundImage: `url('${f(t, A)}')` },
                                    }),
                                r().createElement('div', { className: i()(p, s.text) }, F),
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
                    N = {
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
                    T = 'renderers_noBreakWrapper_10',
                    L = 'renderers_lineBreak_b5',
                    I = 'renderers_newLine_bd',
                    O = 'renderers_word_f3',
                    M = (e) => ({ color: `#${e}` }),
                    P = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? N[a]
                                ? r().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: i()(O, N[a]) },
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
                            r().createElement('span', { key: t, 'data-block-type': B.NoBreakWrapper, className: T }, e),
                    },
                    H = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((r, u) => {
                                const i = `${n}_${u}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        n = H(e, W[t], i);
                                    a.push(...n);
                                } else a.push(t({ elementList: [r], textBlock: e, key: i }));
                            }),
                            a
                        );
                    },
                    $ = (e) => {
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
                    z = (e, t, n, a) => {
                        let r = t.exec(e),
                            u = 0;
                        for (; r; ) u !== r.index && n(e.slice(u, r.index)), a(r), (u = t.lastIndex), (r = t.exec(e));
                        u !== e.length && n(e.slice(u));
                    },
                    j = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    G = (e) => {
                        const t = [];
                        return (
                            z(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var n;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((n = e), n.match(j) || []))
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
                                  z(
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
                                  const i = t.justifyContent === y.FlexEnd ? a.index : n.lastIndex;
                                  r.push(e.slice(u, i)), (u = i), (a = n.exec(e));
                              }
                              return u !== e.length && r.push(e.slice(u)), r;
                          },
                    V = (e, t = '', n) => {
                        const a = [];
                        return (
                            z(
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
                            z(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...V(e, n, a));
                                },
                                (e) => {
                                    const u = e[1],
                                        i = void 0 === t[u] ? e[0] : t[u];
                                    'string' == typeof i || 'number' == typeof i
                                        ? r.push(...V(String(i), n, a))
                                        : r.push({ blockType: B.Binding, colorTag: n, childList: [i] });
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
                                    z(
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
                        return $(a);
                    },
                    K = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    X = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Q = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = X(e, t),
                            r = e.textContent.length,
                            u = e.offsetWidth / r,
                            i = Math.ceil(a / u);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / u);
                            return a >= n ? [!0, n + i] : [!1, a];
                        }
                        const s = Math.max(n + i, 0);
                        return r < s ? [!1, 0] : [!0, s];
                    },
                    J = (e, t, n, a, u, i) => {
                        let s = -1,
                            o = null;
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
                                const _ = d.slice(0, d.length - m) + i,
                                    E = t[l];
                                (o = r().cloneElement(E, E.props, _)), (s = l);
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[l],
                                    m = c.props.children,
                                    _ = J(e, m, e.length - 1, a, u, i),
                                    E = _[0],
                                    g = _[1];
                                if (!(E < 0)) {
                                    const e = m.slice(0, E);
                                    (o = r().cloneElement(c, c.props, e, g)), (s = l);
                                    break;
                                }
                                u -= d.length;
                            }
                        }
                        return [s, o];
                    },
                    ee = (e, t, n, a = '...') => {
                        const r = [...t],
                            u = e.current;
                        if (!u) return [r, !1];
                        const i = n.height,
                            s = n.width,
                            o = u.lastElementChild;
                        if (!K(o, i) && X(o, s) <= 0) return [r, !1];
                        const l = u.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const r = n + Math.ceil(0.5 * (a - n));
                                    K(e[r], t) ? (a = r - 1) : (n = r + 1);
                                }
                                return n - 1;
                            })(l, i);
                        if (c < 0) return [r, !1];
                        const d = J(l, r, c, s, a.length, a),
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
                            isTooltipEnable: s = !1,
                            isTruncationAvailable: o = !1,
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
                                        s &&
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
                                }, [u, s, c, e, l, h.isTruncated]),
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
                                })(E, A, o),
                                r().createElement(
                                    'div',
                                    {
                                        className: i()(
                                            w.base,
                                            t,
                                            w.base__zeroPadding,
                                            o && w.base__isTruncationAvailable,
                                        ),
                                        style: F,
                                    },
                                    r().createElement('div', { className: w.unTruncated, ref: E }, f),
                                    r().createElement(
                                        C.l,
                                        {
                                            tooltipArgs: v,
                                            className: i()(
                                                w.tooltip,
                                                w[`tooltip__justify-${d}`],
                                                w[`tooltip__align-${m}`],
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            {
                                                className: i()(
                                                    w.truncated,
                                                    !h.isTruncateFinished && o && w.truncated__hide,
                                                ),
                                                style: F,
                                            },
                                            h.isTruncateFinished && o ? h.elementList : f,
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
                    ie = 'CrewBannerWidgetApp_base_d8',
                    se = 'CrewBannerWidgetApp_background_08',
                    oe = 'CrewBannerWidgetApp_base__hovered_d3',
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
                                    i = r[1],
                                    s = (0, ne.N)((e) => i(e), t, n);
                                return {
                                    isHovered: u,
                                    handleMouseEnter: (0, a.useCallback)(() => s(!0), [s]),
                                    handleMouseLeave: (0, a.useCallback)(() => s(!1), [s]),
                                };
                            })(!1, [], 0),
                            _ = m.isHovered,
                            E = m.handleMouseEnter,
                            g = m.handleMouseLeave;
                        return r().createElement(
                            'div',
                            { className: i()(ie, _ && oe, e), onMouseEnter: c && d ? void 0 : E, onMouseLeave: g },
                            r().createElement('div', { className: se }, r().createElement('div', { className: le })),
                            r().createElement(te, { text: Ee.infoText(), classMix: ce, justifyContent: y.FlexEnd }),
                            r().createElement(v, {
                                className: de,
                                duration: n.secondsLeft.get(),
                                icon: o.Timer,
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
                                        s.u5,
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
                                        s.u5,
                                        { mixClass: me, disabled: d, type: s.L$.secondary, onClick: u.reset },
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
                n.d(t, { p: () => Ne });
                var a = n(6179),
                    r = n.n(a),
                    u = n(6483),
                    i = n.n(u),
                    s = n(2106),
                    o = n(6373);
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
                            { className: i()(E, n) },
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
                            { className: i()(A, t && F) },
                            r().createElement('div', {
                                className: i()(C, null == n ? void 0 : n.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var w = n(9690);
                const B = 'VehicleTier_base_9c',
                    y = 'VehicleTier_base__small_fc',
                    k = ({ level: e, isSmall: t = !1 }) =>
                        r().createElement('div', { className: i()(B, t && y) }, (0, w.HG)(e)),
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
                                      icon: i()(S[`icon__${n}`], S[`icon__${n}${(0, v.e)(e)}`], u && S.icon__selected),
                                  },
                              }),
                    N = {
                        base: 'FilterToggleGroup_base_69',
                        title: 'FilterToggleGroup_title_65',
                        content: 'FilterToggleGroup_content_80',
                        toggle: 'FilterToggleGroup_toggle_d4',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_11',
                    };
                function T() {
                    return (
                        (T = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        T.apply(null, arguments)
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
                        onClick: s,
                        className: o,
                        toggleProps: l,
                        theme: c = L.Default,
                    }) => {
                        const E = c === L.InPopup;
                        return r().createElement(
                            'div',
                            { className: i()(N.base, N[`base__${c}`], o) },
                            E && r().createElement(b, { className: N.title, label: n, hasDiscount: a }),
                            r().createElement(
                                'div',
                                { className: N.content },
                                m.UI(u, ({ id: n, isSelected: a, tooltip: u, icon: o, counter: c }) =>
                                    r().createElement(
                                        d.l,
                                        { key: n, tooltipArgs: I(u), className: N.toggle },
                                        r().createElement(
                                            _.C,
                                            T({}, l, {
                                                className: i()(N.toggle, null == l ? void 0 : l.className),
                                                isActive: a,
                                                onClick: () => (null == s ? void 0 : s(e, n)),
                                                counter: c,
                                            }),
                                            r().createElement(x, {
                                                id: n,
                                                icon: o,
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
                var $ = n(3457),
                    z = n(3616),
                    j = n(1037),
                    G = n(9367);
                const U = 'PopupButton_base_7c',
                    V = 'PopupButton_popupButtonLabel_ed',
                    Z = 'PopupButton_buttonIconWrapper_d7',
                    q = 'PopupButton_buttonIcon_e0',
                    Y = 'PopupButton_buttonIcon__isHighlighted_84',
                    K = 'PopupButton_discountAlert_c8',
                    X = ({ isHighlighted: e, hasDiscountAlert: t, popoverDirection: n = j.IC.Bottom }) =>
                        r().createElement(
                            'div',
                            { className: U },
                            r().createElement('div', { className: V }, R.strings.crew.filter.popup.button.title()),
                            r().createElement(
                                z.Z,
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
                                        { type: $.L$.ghost, size: $.qE.small, isActive: e, hasIndicator: !1 },
                                        r().createElement('div', { className: i()(q, e && Y) }),
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
                                o.i,
                                Q.Xd,
                                r().createElement(
                                    $.u5,
                                    { mixClass: ee, onClick: e, type: $.L$.ghost, size: $.qE.small },
                                    r().createElement('div', { className: te }),
                                ),
                            ),
                        ),
                    ae = 'default',
                    re = 'search',
                    ue = 'email',
                    ie = 'password',
                    se = 'normal',
                    oe = 'disabled',
                    le = 'alert',
                    ce = 'error',
                    de = 'medium',
                    me = {
                        [ae]: '',
                        [ue]: R.strings.common.input.placeholder.email(),
                        [re]: R.strings.common.input.placeholder.search(),
                        [ie]: R.strings.common.input.placeholder.password(),
                    },
                    _e = { [ae]: 'text', [ue]: 'text', [re]: 'text', [ie]: 'password' },
                    Ee = { [ae]: '', [ue]: 'Invalid email', [re]: '', [ie]: '' },
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
                            variant: s = se,
                            placeholder: o = '',
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
                                S = s !== oe,
                                x = (0, a.useCallback)(
                                    (e) => {
                                        S && (B(!0), F && F(e));
                                    },
                                    [S, F],
                                ),
                                N = (0, a.useCallback)(
                                    (e) => {
                                        S && !k.current.mouseOver && (B(!1), C && C(e));
                                    },
                                    [S, C],
                                );
                            (0, a.useEffect)(() => {
                                S && w && d && y.current && y.current.select();
                            }, [d, w, S]);
                            const T = (0, a.useCallback)(
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
                                P = o || me[n],
                                W = Boolean(_),
                                H = i()(
                                    be.base,
                                    be[`base__${u}`],
                                    l && be[`base__${s}`],
                                    w && be.base__focused,
                                    W && be.base__withIcon,
                                    E,
                                ),
                                $ = (0, a.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                z = i()(be.input, be[`input__${n}`]),
                                j = i()(be.icon, be[`icon__${n}`]),
                                G = i()(be.placeholder, be[`placeholder__${n}`]);
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
                                $ && r().createElement('div', { style: $, className: j }),
                                r().createElement('input', {
                                    ref: y,
                                    className: z,
                                    type: _e[n],
                                    value: t,
                                    onChange: T,
                                    disabled: !S,
                                    onFocus: x,
                                    onBlur: N,
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
                    Ae = ({ variant: e, show: t = !0, helperText: n, helperIcon: u, classMix: s }) => {
                        const o = (0, a.useMemo)(() => {
                                const t =
                                    u ||
                                    (function (e) {
                                        return e === le ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [u, e]),
                            l = i()(ve.base, t && ve.base__shown),
                            c = i()(ve.message, ve[`message__${e}`], s);
                        return r().createElement(
                            'div',
                            { className: l },
                            o && r().createElement('div', { className: ve.icon, style: o }),
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
                        (De = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        De.apply(null, arguments)
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
                            s = e.variant,
                            o = void 0 === s ? se : s,
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
                            N = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, Ce);
                        const T = (0, a.useState)(m),
                            L = T[0],
                            I = T[1],
                            R = (0, a.useState)(h),
                            O = R[0],
                            M = R[1],
                            P = (0, a.useMemo)(() => Object.assign({}, we, A), [A]),
                            W = (0, a.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: m, type: u }),
                            H = (0, a.useCallback)((e) => {
                                e !== W.current.value &&
                                    ((W.current.value = e), (W.current.isChangeHandled = !1), I(e));
                            }, []),
                            $ = (0, a.useCallback)(
                                (e) => {
                                    let t = !0;
                                    P.performChangeValidation &&
                                        (t = P.changesValidator ? P.changesValidator(e) : pe(e, W.current.type)),
                                        y && y(e, t);
                                },
                                [y, P],
                            ),
                            z = (0, a.useCallback)(() => {
                                W.current.debounceTimeout &&
                                    (window.clearTimeout(W.current.debounceTimeout), (W.current.debounceTimeout = 0));
                            }, []),
                            j = (0, a.useCallback)(() => H(''), [H]);
                        (0, a.useEffect)(() => () => z(), [z]);
                        const G = (0, a.useCallback)(
                            (e) => {
                                z(),
                                    P.debounceTime
                                        ? (W.current.debounceTimeout = window.setTimeout(() => {
                                              $(e);
                                          }, P.debounceTime))
                                        : $(e);
                            },
                            [$, z, P.debounceTime],
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
                            }, [h, o]);
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
                            J = v ? ce : o,
                            ee = Boolean(v) || O,
                            te = (0, a.useMemo)(
                                () => ('boolean' == typeof P.withClear ? Q && P.withClear : Q && u === re),
                                [u, Q, P],
                            ),
                            ne = i()(Fe.base, Fe[`base__${c}`], Fe[`base__${o}`], k);
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
                                            onClear: j,
                                        },
                                        N,
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
                    ye = ({ value: e, placeholder: t, tooltipHeader: n, onChange: a, className: u, tooltipBody: i }) =>
                        r().createElement(
                            o.i,
                            { header: null != n ? n : void 0, body: i, isEnabled: Boolean(n || i) },
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
                            { className: i()(ke.base, ke[`base__${m}`]) },
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
                                    toggleProps: { type: s.L.ghost },
                                    onClick: a.updateFilter,
                                }),
                                n.isPopoverEnabled.get() &&
                                    r().createElement(
                                        o.i,
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
                    Ne = r().memo(function ({ popoverDirection: e }) {
                        return r().createElement(W, { options: xe }, r().createElement(Se, { popoverDirection: e }));
                    });
            },
            771: (e, t, n) => {
                'use strict';
                n.d(t, { GT: () => o, I: () => u, jw: () => i, sU: () => a, vA: () => s, y$: () => l, yb: () => r });
                const a = -1,
                    r = 1,
                    u = 100,
                    i = 'new_skill',
                    s = 9,
                    o = 6,
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, n, a] = deferred[o], u = !0, i = 0; i < t.length; i++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((u = !1), a < r && (r = a));
                    if (u) {
                        deferred.splice(o--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, n, a];
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
                        [u, i, s] = n,
                        o = 0;
                    if (u.some((t) => 0 !== e[t])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); o < u.length; o++)
                        (r = u[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(428));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
