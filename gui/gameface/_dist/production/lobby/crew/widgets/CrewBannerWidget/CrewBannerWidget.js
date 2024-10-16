(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (u, e, t) => {
                t.d(e, { L$: () => c.L, u5: () => E });
                var n = t(6483),
                    o = t.n(n),
                    r = t(7727),
                    i = t(6179),
                    s = t.n(i),
                    a = t(6880),
                    c = t(2106);
                const l = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: n,
                    disabled: l,
                    mixClass: E,
                    soundHover: A,
                    soundClick: F,
                    onMouseEnter: d,
                    onMouseMove: D,
                    onMouseDown: _,
                    onMouseUp: B,
                    onMouseLeave: C,
                    onClick: m,
                }) => {
                    const p = (0, i.useRef)(null),
                        h = (0, i.useState)(t),
                        b = h[0],
                        v = h[1],
                        f = (0, i.useState)(!1),
                        g = f[0],
                        w = f[1];
                    return (
                        (0, i.useEffect)(() => {
                            function u(u) {
                                b && null !== p.current && !p.current.contains(u.target) && v(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [b]),
                        (0, i.useEffect)(() => {
                            v(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: p,
                                className: o()(
                                    a.Z.base,
                                    a.Z[`base__${n}`],
                                    l && a.Z.base__disabled,
                                    e && a.Z[`base__${e}`],
                                    b && a.Z.base__focus,
                                    g && a.Z.base__highlightActive,
                                    E,
                                ),
                                onMouseEnter: function (u) {
                                    l || (null !== A && (0, r.G)(A), d && d(u));
                                },
                                onMouseMove: function (u) {
                                    D && D(u);
                                },
                                onMouseUp: function (u) {
                                    l || (B && B(u), w(!1));
                                },
                                onMouseDown: function (u) {
                                    l ||
                                        (null !== F && (0, r.G)(F),
                                        _ && _(u),
                                        t && (l || (p.current && (p.current.focus(), v(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (u) {
                                    l || (C && C(u), w(!1));
                                },
                                onClick: function (u) {
                                    l || (m && m(u));
                                },
                            },
                            n !== c.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: a.Z.back }),
                                    s().createElement('span', { className: a.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: o()(a.Z.state, a.Z.state__default) },
                                s().createElement('span', { className: a.Z.stateDisabled }),
                                s().createElement('span', { className: a.Z.stateHighlightHover }),
                                s().createElement('span', { className: a.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: a.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                l.defaultProps = { type: c.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const E = l;
            },
            2106: (u, e, t) => {
                let n, o;
                t.d(e, { L: () => n }),
                    (function (u) {
                        (u.main = 'main'),
                            (u.primary = 'primary'),
                            (u.primaryGreen = 'primaryGreen'),
                            (u.primaryRed = 'primaryRed'),
                            (u.secondary = 'secondary'),
                            (u.ghost = 'ghost');
                    })(n || (n = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(o || (o = {}));
            },
            7078: (u, e, t) => {
                t.d(e, { t: () => a });
                var n = t(6179),
                    o = t.n(n),
                    r = t(2056);
                const i = ['children'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const a = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, i);
                    return o().createElement(
                        r.u,
                        s(
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
                var n = t(6179),
                    o = t.n(n),
                    r = t(7078),
                    i = t(6373),
                    s = t(2056);
                function a() {
                    return (
                        (a = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        a.apply(null, arguments)
                    );
                }
                const c = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const n = o().createElement('div', { className: t }, u);
                    if (e.header || e.body) return o().createElement(i.i, e, n);
                    const c = e.contentId;
                    return c ? o().createElement(s.u, a({}, e, { contentId: c }), n) : o().createElement(r.t, e, n);
                };
            },
            6373: (u, e, t) => {
                t.d(e, { i: () => c });
                var n = t(2056),
                    o = t(6179),
                    r = t.n(o);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const a = R.views.common.tooltip_window.simple_tooltip_content,
                    c = (u) => {
                        let e = u.children,
                            t = u.body,
                            c = u.header,
                            l = u.note,
                            E = u.alert,
                            A = u.args,
                            F = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, i);
                        const d = (0, o.useMemo)(() => {
                            const u = Object.assign({}, A, { body: t, header: c, note: l, alert: E });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [E, t, c, l, A]);
                        return r().createElement(
                            n.u,
                            s(
                                {
                                    contentId:
                                        ((D = null == A ? void 0 : A.hasHtmlContent),
                                        D ? a.SimpleTooltipHtmlContent('resId') : a.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                F,
                            ),
                            e,
                        );
                        var D;
                    };
            },
            2056: (u, e, t) => {
                t.d(e, { u: () => c });
                var n = t(7902),
                    o = t(9916),
                    r = t(6179);
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
                function s(u) {
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
                const a = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: o.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    c = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            o = u.args,
                            c = u.onMouseEnter,
                            l = u.onMouseLeave,
                            E = u.onMouseDown,
                            A = u.onClick,
                            F = u.ignoreShowDelay,
                            d = void 0 !== F && F,
                            D = u.ignoreMouseClick,
                            _ = void 0 !== D && D,
                            B = u.decoratorId,
                            C = void 0 === B ? 0 : B,
                            m = u.isEnabled,
                            p = void 0 === m || m,
                            h = u.targetId,
                            b = void 0 === h ? 0 : h,
                            v = u.onShow,
                            f = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, i);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => b || (0, n.F)().resId, [b]),
                            k = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (a(t, C, { isMouseEvent: !0, on: !0, arguments: s(o) }, y),
                                    v && v(),
                                    (w.current.isVisible = !0));
                            }, [t, C, o, y, v]),
                            T = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const u = w.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (w.current.timeoutId = 0)),
                                        a(t, C, { on: !1 }, y),
                                        w.current.isVisible && f && f(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, C, y, f]),
                            x = (0, r.useCallback)((u) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(w.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const u = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === p && T();
                            }, [p, T]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        window.removeEventListener('mouseleave', T), T();
                                    }
                                ),
                                [T],
                            );
                        return p
                            ? (0, r.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((O = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(k, d ? 100 : 400)),
                                                      c && c(u),
                                                      O && O(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              T(), null == l || l(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === _ && T(), null == A || A(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === _ && T(), null == E || E(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : e;
                        var O;
                    };
            },
            8246: (u, e, t) => {
                t.d(e, { U: () => s });
                var n = t(3138);
                function o(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return r(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? r(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var n = 0;
                        return function () {
                            return n >= u.length ? { done: !0 } : { done: !1, value: u[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function r(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const i = (u) => (0 === u ? window : window.subViews.get(u));
                function s({ initializer: u = !0, rootId: e = 0, getRoot: t = i, context: r = 'model' } = {}) {
                    const s = new Map();
                    function a(u, e = 0) {
                        viewEnv.removeDataChangedCallback(u, e)
                            ? s.delete(u)
                            : console.error("Can't remove callback by id:", u);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (u, e, t) => {
                            t.forEach((e) => {
                                const t = s.get(e);
                                void 0 !== t && t(u);
                            });
                        });
                    });
                    const c = (u) => {
                        const n = t(e),
                            o = r.split('.').reduce((u, e) => u[e], n);
                        return 'string' != typeof u || 0 === u.length
                            ? o
                            : u.split('.').reduce((u, e) => {
                                  const t = u[e];
                                  return 'function' == typeof t ? t.bind(u) : t;
                              }, o);
                    };
                    return {
                        subscribe: (t, o) => {
                            const i = 'string' == typeof o ? `${r}.${o}` : r,
                                a = n.O.view.addModelObserver(i, e, !0);
                            return s.set(a, t), u && t(c(o)), a;
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
                            for (var u, t = o(s.keys()); !(u = t()).done; ) {
                                a(u.value, e);
                            }
                        },
                        unsubscribe: a,
                    };
                }
            },
            3215: (u, e, t) => {
                t.d(e, { q: () => a });
                var n = t(4598),
                    o = t(9174),
                    r = t(6179),
                    i = t.n(r),
                    s = t(8246);
                const a = () => (u, e) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: a = 'real', options: c, children: l, mocks: E }) {
                            const A = (0, r.useRef)([]),
                                F = (t, r, i) => {
                                    var a;
                                    const c = s.U(r),
                                        l =
                                            'real' === t
                                                ? c
                                                : Object.assign({}, c, {
                                                      readByPath:
                                                          null != (a = null == i ? void 0 : i.getter) ? a : () => {},
                                                  }),
                                        E = (u) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(u)) : l.readByPath(u),
                                        F = (u) => A.current.push(u),
                                        d = u({
                                            mode: t,
                                            readByPath: E,
                                            externalModel: l,
                                            observableModel: {
                                                array: (u, e) => {
                                                    const r = null != e ? e : E(u),
                                                        i = o.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            l.subscribe(
                                                                (0, o.aD)((u) => i.set(u)),
                                                                u,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (u, e) => {
                                                    const r = null != e ? e : E(u),
                                                        i = o.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            l.subscribe(
                                                                (0, o.aD)((u) => i.set(u)),
                                                                u,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (u, e) => {
                                                    const n = E(e);
                                                    if (Array.isArray(u)) {
                                                        const r = u.reduce(
                                                            (u, e) => ((u[e] = o.LO.box(n[e], {})), u),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, o.aD)((e) => {
                                                                        u.forEach((u) => {
                                                                            r[u].set(e[u]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = u,
                                                            i = Object.entries(r),
                                                            s = i.reduce(
                                                                (u, [e, t]) => ((u[t] = o.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, o.aD)((u) => {
                                                                        i.forEach(([e, t]) => {
                                                                            s[t].set(u[e]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: F,
                                        }),
                                        D = { mode: t, model: d, externalModel: l, cleanup: F };
                                    return {
                                        model: d,
                                        controls: 'mocks' === t && i ? i.controls(D) : e(D),
                                        externalModel: l,
                                        mode: t,
                                    };
                                },
                                d = (0, r.useRef)(!1),
                                D = (0, r.useState)(a),
                                _ = D[0],
                                B = D[1],
                                C = (0, r.useState)(() => F(a, c, E)),
                                m = C[0],
                                p = C[1];
                            return (
                                (0, r.useEffect)(() => {
                                    d.current ? p(F(_, c, E)) : (d.current = !0);
                                }, [E, _, c]),
                                (0, r.useEffect)(() => {
                                    B(a);
                                }, [a]),
                                (0, r.useEffect)(
                                    () => () => {
                                        m.externalModel.dispose(), A.current.forEach((u) => u());
                                    },
                                    [m],
                                ),
                                i().createElement(t.Provider, { value: m }, l)
                            );
                        },
                        () => (0, r.useContext)(t),
                    ];
                };
            },
            7044: (u, e, t) => {
                t.d(e, { f8: () => l, s_: () => i, wB: () => E, yR: () => s });
                var n = t(3649),
                    o = (t(9916), t(8613));
                const r = 24,
                    i = 1e3,
                    s = 60,
                    a = 60 * s,
                    c = r * a;
                Date.now(), o.Ew.getRegionalDateTime, o.Ew.getFormattedDateTime;
                function l(u = 0) {
                    let e = u;
                    const t = Math.trunc(e / c);
                    e -= t * c;
                    const n = Math.trunc(e / a);
                    e -= n * a;
                    const o = Math.trunc(e / s);
                    return (e -= o * s), { days: t, hours: n, minutes: o, seconds: e };
                }
                const E = (u, e = !0) =>
                    u.days > 7 && e
                        ? (0, n.WU)(R.strings.common.duration.days(), { days: u.days })
                        : u.days >= 1
                          ? 0 === u.hours
                              ? (0, n.WU)(R.strings.common.duration.days(), { days: u.days })
                              : `${(0, n.WU)(R.strings.common.duration.days(), { days: u.days })} ${(0, n.WU)(R.strings.common.duration.hours(), { hours: u.hours })}`
                          : u.hours >= 1
                            ? 0 === u.minutes
                                ? (0, n.WU)(R.strings.common.duration.hours(), { hours: u.hours })
                                : `${(0, n.WU)(R.strings.common.duration.hours(), { hours: u.hours })} ${(0, n.WU)(R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                            : (0, n.WU)(R.strings.common.duration.minutes(), { minutes: u.minutes || 1 });
            },
            527: (u, e, t) => {
                t.r(e),
                    t.d(e, { mouse: () => l, off: () => a, on: () => s, onResize: () => r, onScaleUpdated: () => i });
                var n = t(2472),
                    o = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (u, e) => engine.on(u, e),
                    a = (u, e) => engine.off(u, e),
                    c = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const l = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, o.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, o.R)(!0);
                    }
                    function n() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, o.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let o = !0;
                                    const r = `mouse${e}`,
                                        i = c[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        n(),
                                        () => {
                                            o &&
                                                (i(),
                                                window.removeEventListener(r, s),
                                                (u.listeners -= 1),
                                                n(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && (0, o.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, o.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => o.G,
                        setRTPC: () => o.E,
                    });
                var n = t(527),
                    o = t(2493);
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            2493: (u, e, t) => {
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function o(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => o, G: () => n });
            },
            2472: (u, e, t) => {
                function n(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => n });
            },
            3138: (u, e, t) => {
                t.d(e, { O: () => r });
                var n = t(5959),
                    o = t(514);
                const r = { view: t(7641), client: n, sound: o.ZP };
            },
            514: (u, e, t) => {
                t.d(e, { ZP: () => i });
                var n = t(5959);
                const o = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(o).reduce((u, e) => ((u[e] = () => (0, n.playSound)(o[e])), u), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (u, e, t) => {
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function o(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => o, getTextureUrl: () => n });
            },
            6112: (u, e, t) => {
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                t.d(e, { U: () => o });
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
            7641: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => a,
                        children: () => n,
                        displayStatus: () => o.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => g,
                        getScale: () => B,
                        getSize: () => F,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => v,
                        isFocused: () => h,
                        pxToRem: () => C,
                        remToPx: () => m,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => k,
                    });
                var n = t(3722),
                    o = t(6112),
                    r = t(6538),
                    i = t(8566);
                const s = 15;
                function a(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, s);
                }
                function l(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function A(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, s);
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function D(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: m(e.x), y: m(e.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function B() {
                    return viewEnv.getScale();
                }
                function C(u) {
                    return viewEnv.pxToRem(u);
                }
                function m(u) {
                    return viewEnv.remToPx(u);
                }
                function p(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function g() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(o.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === o.W[e]), u),
                        {},
                    ),
                    y = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    k = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                t.d(e, { qP: () => c });
                const n = ['args'];
                const o = 2,
                    r = 16,
                    i = 32,
                    s = 64,
                    a = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var o;
                    },
                    c = {
                        close(u) {
                            a('popover' === u ? o : i);
                        },
                        minimize() {
                            a(s);
                        },
                        move(u) {
                            a(r, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            4598: (u, e, t) => {
                t.d(e, { jv: () => n });
                function n() {
                    return !1;
                }
                console.log;
            },
            7902: (u, e, t) => {
                t.d(e, { F: () => n });
                const n = (u = 1) => {
                    const e = new Error().stack;
                    let t,
                        n = R.invalid('resId');
                    return (
                        e &&
                            ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id)),
                        { caller: t, stack: e, resId: n }
                    );
                };
            },
            2344: (u, e, t) => {
                t.d(e, { au: () => o });
                var n = t(3469);
                t(2133), t(2790), t(579), t(5360), t(9056);
                const o = n.Z;
            },
            6536: (u, e, t) => {
                t(6179);
            },
            3469: (u, e, t) => {
                t.d(e, { Z: () => i });
                var n = t(7044),
                    o = t(6179);
                const r = () => {},
                    i = (u = 0, e, t = 0, i = r) => {
                        const s = (0, o.useState)(u),
                            a = s[0],
                            c = s[1];
                        return (
                            (0, o.useEffect)(() => {
                                if (u > 0) {
                                    c(u);
                                    const o = Date.now(),
                                        r = e || (u > 2 * n.yR ? n.yR : 1),
                                        s = setInterval(() => {
                                            const e = u - Math.floor((Date.now() - o) / n.s_);
                                            null !== t && e <= t ? (c(t), i && i(), clearInterval(s)) : c(e);
                                        }, r * n.s_);
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [u, e, t, i]),
                            a
                        );
                    };
            },
            5332: (u, e, t) => {
                t.d(e, { N: () => r });
                var n = t(4483),
                    o = t(6179);
                function r(u, e, t, r = !1) {
                    const i = (0, o.useMemo)(() => (0, n.Z)(t, r, u), e);
                    return (0, o.useEffect)(() => i.cancel, [i]), i;
                }
            },
            2133: (u, e, t) => {
                t(6179);
            },
            5360: (u, e, t) => {
                t(6536);
                var n = t(9916);
                t(6179);
                n.Sw.instance;
                let o;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(o || (o = {}));
            },
            9056: (u, e, t) => {
                var n = t(9916);
                t(6179);
                n.Sw.instance;
            },
            2790: (u, e, t) => {
                t(6179);
            },
            3112: (u, e, t) => {
                t.d(e, { V: () => r });
                var n = t(6179),
                    o = t(3138);
                const r = () => {
                    const u = (0, n.useState)(o.O.view.getScale()),
                        e = u[0],
                        t = u[1];
                    return (
                        (0, n.useEffect)(() => {
                            const u = () => {
                                t(o.O.view.getScale());
                            };
                            return (
                                window.addEventListener('resize', u),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            );
                        }, []),
                        e
                    );
                };
            },
            579: (u, e, t) => {
                t(3138), t(6179);
            },
            5521: (u, e, t) => {
                let n, o;
                t.d(e, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(o || (o = {}));
            },
            7727: (u, e, t) => {
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                t.d(e, { G: () => n });
            },
            3649: (u, e, t) => {
                t.d(e, { Eg: () => i, WU: () => o, z4: () => r });
                t(1281);
                let n;
                function o(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(n || (n = {}));
                const r = (u) => u.replace(/&nbsp;/g, ' '),
                    i = (u) => u.replace(/&zwnbsp;/g, '\ufeff');
                (() => {
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
                })();
            },
            4483: (u, e, t) => {
                t.d(e, { Z: () => o });
                var n = t(5139);
                function o(u, e, t) {
                    return void 0 === t ? (0, n.Z)(u, e, !1) : (0, n.Z)(u, t, !1 !== e);
                }
            },
            5139: (u, e, t) => {
                function n(u, e, t, n) {
                    let o,
                        r = !1,
                        i = 0;
                    function s() {
                        o && clearTimeout(o);
                    }
                    function a(...a) {
                        const c = this,
                            l = Date.now() - i;
                        function E() {
                            (i = Date.now()), t.apply(c, a);
                        }
                        r ||
                            (n && !o && E(),
                            s(),
                            void 0 === n && l > u
                                ? E()
                                : !0 !== e &&
                                  (o = setTimeout(
                                      n
                                          ? function () {
                                                o = void 0;
                                            }
                                          : E,
                                      void 0 === n ? u - l : u,
                                  )));
                    }
                    return (
                        'boolean' != typeof e && ((n = t), (t = e), (e = void 0)),
                        (a.cancel = function () {
                            s(), (r = !0);
                        }),
                        a
                    );
                }
                t.d(e, { Z: () => n });
            },
            1358: (u, e, t) => {
                t.d(e, { Z: () => r });
                var n = t(3138);
                class o {
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
                        return window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(u, t, o);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", u),
                            r
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
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
                t.d(e, { Sw: () => r.Z, B0: () => s, ry: () => B });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let n = u.target;
                                    do {
                                        if (n === e) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
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
                var i = t(8613);
                let s;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const a = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    F = t(3138);
                const d = ['args'];
                function D(u, e, t, n, o, r, i) {
                    try {
                        var s = u[r](i),
                            a = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(a) : Promise.resolve(a).then(n, o);
                }
                const _ = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    B = (function () {
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
                                    return new Promise(function (n, o) {
                                        var r = u.apply(e, t);
                                        function i(u) {
                                            D(r, n, o, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            D(r, n, o, i, s, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const o = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, d);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((n = o),
                                              Object.entries(n).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    m = () => C(s.CLOSE),
                    p = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var h = t(7572);
                const b = o.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: a,
                        RealFormatType: c,
                        TimeFormatType: l,
                        DateFormatType: E,
                        makeGlobalBoundingBox: _,
                        sendMoveEvent: (u) => C(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: m,
                        sendClosePopOverEvent: () => C(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, o = R.invalid('resId'), r) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                a = t.getBoundingClientRect(),
                                c = a.x,
                                l = a.y,
                                E = a.width,
                                A = a.height,
                                d = {
                                    x: F.O.view.pxToRem(c) + i.x,
                                    y: F.O.view.pxToRem(l) + i.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(A),
                                };
                            C(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: o,
                                direction: e,
                                bbox: _(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => p(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            p(u, m);
                        },
                        handleViewEvent: C,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const o = Object.prototype.toString.call(e[n]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < o.length; e++) t[n].push({ value: u(o[e].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (u, e, t) => {
                t.d(e, { Ew: () => r, Z5: () => n, cy: () => o });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    o = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            3880: (u, e, t) => {
                var n = t(6179),
                    o = t.n(n),
                    r = t(6483),
                    i = t.n(r),
                    s = t(3457);
                let a, c;
                !(function (u) {
                    (u.Timer = 'timer'), (u.Countdown = 'countdown'), (u.Cooldown = 'cooldown'), (u.None = 'none');
                })(a || (a = {})),
                    (function (u) {
                        (u.Description = 'description'),
                            (u.Short = 'short'),
                            (u.Long = 'long'),
                            (u.Extended = 'extended');
                    })(c || (c = {}));
                var l = t(7044),
                    E = t(2344),
                    A = t(3112),
                    F = t(3649);
                const d = 'Countdown_base_fe',
                    D = 'Countdown_icon_8b',
                    _ = 'Countdown_description_8d',
                    B = (u) => u.toString().padStart(2, '0'),
                    C = R.images.gui.maps.icons.components.countdown,
                    m = (u, e) => {
                        const t = 2 === e ? C.big : C;
                        switch (u) {
                            case a.Timer:
                                return t.clock();
                            case a.Countdown:
                                return t.hourglass();
                            case a.Cooldown:
                                return t.lock();
                        }
                    },
                    p = (0, n.memo)(
                        ({
                            duration: u,
                            icon: e = a.Timer,
                            style: t = c.Description,
                            onTimeReached: n,
                            className: r = '',
                            classNames: s = {},
                        }) => {
                            const C = t !== c.Description ? 1 : void 0,
                                p = (0, E.au)(u, C),
                                h = (0, A.V)();
                            n && n[p] && n[p]();
                            const b = ((u, e) => {
                                switch (e) {
                                    case c.Description:
                                        return (0, l.wB)(u);
                                    case c.Short:
                                        return `${B(u.minutes)}:${B(u.seconds)}`;
                                    case c.Long:
                                        return `${B(u.hours)}:${B(u.minutes)}:${B(u.seconds)}`;
                                    case c.Extended:
                                        return `${(0, F.WU)(R.strings.common.duration.days(), { days: u.days })} | ${B(u.hours)}:${B(u.minutes)}:${B(u.seconds)}`;
                                }
                            })((0, l.f8)(p), t);
                            return o().createElement(
                                'div',
                                { className: i()(d, r) },
                                e !== a.None &&
                                    o().createElement('div', {
                                        className: i()(D, s.icon),
                                        style: { backgroundImage: `url('${m(e, h)}')` },
                                    }),
                                o().createElement('div', { className: i()(_, s.text) }, b),
                            );
                        },
                    );
                var h = t(6373),
                    b = t(3403),
                    v = t(3415),
                    f = t(8045);
                const g = {
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
                let w, y, k;
                !(function (u) {
                    (u[(u.Word = 0)] = 'Word'),
                        (u[(u.LineBreak = 1)] = 'LineBreak'),
                        (u[(u.NewLine = 2)] = 'NewLine'),
                        (u[(u.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (u[(u.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (u[(u.Binding = 5)] = 'Binding');
                })(w || (w = {})),
                    (function (u) {
                        (u.FlexStart = 'flex-start'), (u.Center = 'center'), (u.FlexEnd = 'flex-end');
                    })(y || (y = {})),
                    (function (u) {
                        (u.NBSP = ' '), (u.ZWNBSP = '\ufeff'), (u.NEW_LINE = '\n');
                    })(k || (k = {}));
                const T = { [k.NBSP]: w.NoBreakSymbol, [k.ZWNBSP]: w.NoBreakSymbol, [k.NEW_LINE]: w.LineBreak },
                    x = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    O = {
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
                    L = 'renderers_noBreakWrapper_10',
                    S = 'renderers_lineBreak_b5',
                    M = 'renderers_newLine_bd',
                    P = 'renderers_word_f3',
                    N = (u) => ({ color: `#${u}` }),
                    I = ({ elementList: u, textBlock: e, key: t }) => {
                        const n = e.colorTag;
                        return n
                            ? O[n]
                                ? o().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: i()(P, O[n]) },
                                      u,
                                  )
                                : o().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: P, style: N(n) },
                                      u,
                                  )
                            : o().createElement('span', { key: t, 'data-block-type': e.blockType, className: P }, u);
                    },
                    W = {
                        [w.Word]: I,
                        [w.NoBreakSymbol]: I,
                        [w.Binding]: ({ elementList: u, textBlock: e, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': e.blockType },
                                u.map((u) => o().createElement(o().Fragment, { key: t }, u)),
                            ),
                        [w.LineBreak]: ({ key: u }) =>
                            o().createElement('span', { key: u, 'data-block-type': w.LineBreak, className: S }),
                        [w.NewLine]: ({ elementList: u, key: e }) =>
                            o().createElement('span', { key: e, 'data-block-type': w.NewLine, className: M }, u),
                        [w.NoBreakWrapper]: ({ elementList: u, key: e }) =>
                            o().createElement('span', { key: e, 'data-block-type': w.NoBreakWrapper, className: L }, u),
                    },
                    j = (u, e, t) => {
                        const n = [];
                        return (
                            u.childList.forEach((o, r) => {
                                const i = `${t}_${r}`;
                                if (((u) => void 0 !== u.childList)(o)) {
                                    const u = o,
                                        e = u.blockType,
                                        t = j(u, W[e], i);
                                    n.push(...t);
                                } else n.push(e({ elementList: [o], textBlock: u, key: i }));
                            }),
                            n
                        );
                    },
                    U = (u) => {
                        const e = [];
                        return (
                            u.forEach((u, t) => {
                                e.push(
                                    ...((u, e) => {
                                        const t = [],
                                            n = u.blockType,
                                            o = W[n],
                                            r = j(u, o, e);
                                        return (
                                            n === w.NoBreakWrapper
                                                ? t.push(o({ elementList: r, textBlock: u, key: `${e}` }))
                                                : t.push(...r),
                                            t
                                        );
                                    })(u, t),
                                );
                            }),
                            e
                        );
                    },
                    V = (u, e, t, n) => {
                        let o = e.exec(u),
                            r = 0;
                        for (; o; ) r !== o.index && t(u.slice(r, o.index)), n(o), (r = e.lastIndex), (o = e.exec(u));
                        r !== u.length && t(u.slice(r));
                    },
                    G = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    z = (u) => {
                        const e = [];
                        return (
                            V(
                                u,
                                /\S\s+/g,
                                (u) => {
                                    var t;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? e.push(...((t = u), t.match(G) || []))
                                        : e.push(...u.split(''));
                                },
                                (u) => {
                                    e.push(u[0]);
                                },
                            ),
                            e
                        );
                    },
                    H = x
                        ? (u) => {
                              const e = [];
                              return (
                                  V(
                                      u,
                                      /[^a-zA-Z0-9]+/g,
                                      (u) => {
                                          e.push(u);
                                      },
                                      (u) => {
                                          e.push(...z(u[0]));
                                      },
                                  ),
                                  e
                              );
                          }
                        : (u, e) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(u);
                              if (!n) return [u];
                              const o = [];
                              let r = 0;
                              for (; n; ) {
                                  const i = e.justifyContent === y.FlexEnd ? n.index : t.lastIndex;
                                  o.push(u.slice(r, i)), (r = i), (n = t.exec(u));
                              }
                              return r !== u.length && o.push(u.slice(r)), o;
                          },
                    Z = (u, e = '', t) => {
                        const n = [];
                        return (
                            V(
                                u,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (u) => {
                                    n.push({ blockType: w.Word, colorTag: e, childList: H(u, t) });
                                },
                                (u) => {
                                    const t = u[0],
                                        o = T[t.charAt(0)];
                                    o === w.LineBreak
                                        ? n.push(
                                              ...((u) => {
                                                  const e = [
                                                      {
                                                          blockType: w.LineBreak,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < u.length - 1; t++)
                                                      e.push({
                                                          blockType: w.NewLine,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      });
                                                  return e;
                                              })(t),
                                          )
                                        : n.push({ blockType: o, colorTag: e, childList: [t] });
                                },
                            ),
                            n
                        );
                    },
                    q = (u, e, t = '', n) => {
                        const o = [];
                        return (
                            V(
                                u,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (u) => {
                                    o.push(...Z(u, t, n));
                                },
                                (u) => {
                                    const r = u[1],
                                        i = void 0 === e[r] ? u[0] : e[r];
                                    'string' == typeof i || 'number' == typeof i
                                        ? o.push(...Z(String(i), t, n))
                                        : o.push({ blockType: w.Binding, colorTag: t, childList: [i] });
                                },
                            ),
                            o
                        );
                    },
                    K = (u, e) => {
                        if (!u) return [e];
                        const t = [],
                            n = Object.assign({}, e, { childList: e.childList.splice(0, 1) });
                        if (u.blockType === w.NoBreakWrapper) u.childList.push(n), t.push(u);
                        else {
                            const e = Object.assign({}, u, { childList: u.childList.splice(-1) });
                            u.childList.length > 0 && t.push(u),
                                t.push({ blockType: w.NoBreakWrapper, colorTag: '', childList: [e, n] });
                        }
                        return e.childList.length > 0 && t.push(e), t;
                    },
                    $ = (u, e = {}, t) => {
                        if (!u) return [];
                        const n = ((u) => {
                            const e = [];
                            let t = !1;
                            return (
                                u.forEach((u) => {
                                    u.blockType === w.NoBreakSymbol
                                        ? ((t = !0), e.push(...K(e.pop(), u)))
                                        : (t ? e.push(...K(e.pop(), u)) : e.push(u), (t = !1));
                                }),
                                e
                            );
                        })(
                            ((u, e, t) => {
                                const n = [];
                                return (
                                    V(
                                        u,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (u) => {
                                            n.push(...q(u, e, '', t));
                                        },
                                        (u) => {
                                            n.push(...q(u[2] + u[3], e, u[1], t));
                                        },
                                    ),
                                    n
                                );
                            })((0, F.Eg)((0, F.z4)(u)), e, t),
                        );
                        return U(n);
                    },
                    Y = (u, e) => !u || u.offsetTop + u.offsetHeight > e,
                    X = (u, e) => u.offsetLeft + u.offsetWidth - e,
                    Q = (u, e, t) => {
                        if (!u || !u.textContent) return [!1, 0];
                        if (u.offsetLeft > e) return [!1, 0];
                        const n = X(u, e),
                            o = u.textContent.length,
                            r = u.offsetWidth / o,
                            i = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((e - u.offsetLeft) / r);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const s = Math.max(t + i, 0);
                        return o < s ? [!1, 0] : [!0, s];
                    },
                    J = (u, e, t, n, r, i) => {
                        let s = -1,
                            a = null;
                        for (let c = t; c >= 0; c--) {
                            const t = u[c],
                                l = Number(u[c].getAttribute('data-block-type'));
                            if (l === w.LineBreak || l === w.NewLine || l === w.Binding) continue;
                            const E = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const u = Q(t, n, r),
                                    l = u[0],
                                    A = u[1];
                                if (!l) {
                                    A > 0 && (r -= A);
                                    continue;
                                }
                                const F = E.slice(0, E.length - A) + i,
                                    d = e[c];
                                (a = o().cloneElement(d, d.props, F)), (s = c);
                                break;
                            }
                            {
                                const u = t.children,
                                    l = e[c],
                                    A = l.props.children,
                                    F = J(u, A, u.length - 1, n, r, i),
                                    d = F[0],
                                    D = F[1];
                                if (!(d < 0)) {
                                    const u = A.slice(0, d);
                                    (a = o().cloneElement(l, l.props, u, D)), (s = c);
                                    break;
                                }
                                r -= E.length;
                            }
                        }
                        return [s, a];
                    },
                    uu = (u, e, t, n = '...') => {
                        const o = [...e],
                            r = u.current;
                        if (!r) return [o, !1];
                        const i = t.height,
                            s = t.width,
                            a = r.lastElementChild;
                        if (!Y(a, i) && X(a, s) <= 0) return [o, !1];
                        const c = r.children,
                            l = ((u, e) => {
                                let t = 0,
                                    n = u.length - 1;
                                for (; n - t >= 0; ) {
                                    const o = t + Math.ceil(0.5 * (n - t));
                                    Y(u[o], e) ? (n = o - 1) : (t = o + 1);
                                }
                                return t - 1;
                            })(c, i);
                        if (l < 0) return [o, !1];
                        const E = J(c, o, l, s, n.length, n),
                            A = E[0],
                            F = E[1];
                        return F && (o.splice(A, 1, F), o.splice(A + 1)), [o, !0];
                    },
                    eu = o().memo(
                        ({
                            text: u,
                            classMix: e,
                            onSizeChanged: t,
                            binding: r,
                            isTooltipEnable: s = !1,
                            isTruncationAvailable: a = !1,
                            customTooltipArgs: c,
                            targetId: l,
                            justifyContent: E = y.FlexStart,
                            alignContent: A = y.FlexStart,
                            truncateIdentify: F = '...',
                        }) => {
                            const d = (0, n.useRef)(null),
                                D = (0, n.useRef)({ height: 0, width: 0 }),
                                _ = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                B = _[0],
                                C = _[1],
                                m = (0, n.useMemo)(() => $(u, r, { justifyContent: E }), [r, E, u]),
                                p = (0, n.useMemo)(() => {
                                    if (
                                        s &&
                                        B.isTruncated &&
                                        (!r || !Object.values(r).find((u) => 'object' == typeof u))
                                    )
                                        return {
                                            args: Object.assign({ text: u }, c, {
                                                stringifyKwargs: r ? JSON.stringify(r) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [r, s, l, u, c, B.isTruncated]),
                                h = (0, n.useCallback)(
                                    (u) => {
                                        (D.current.width = u.contentRect.width),
                                            (D.current.height = u.contentRect.height);
                                        const e = uu(d, m, D.current, F),
                                            n = e[0],
                                            o = e[1];
                                        C({ elementList: n, isTruncated: o, isTruncateFinished: !0 }), t && t(o);
                                    },
                                    [t, F, m],
                                ),
                                b = (0, n.useMemo)(() => ({ justifyContent: E, alignContent: A }), [A, E]);
                            return (
                                ((u, e, t = !0) => {
                                    const o = (0, n.useCallback)(
                                        (u) => {
                                            const t = u[0];
                                            e && e(t);
                                        },
                                        [e],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!u.current || !t) return;
                                        const e = new f.Z((u) => o(u));
                                        return (
                                            e.observe(u.current),
                                            () => {
                                                e.disconnect();
                                            }
                                        );
                                    }, [o, t, u]);
                                })(d, h, a),
                                o().createElement(
                                    'div',
                                    {
                                        className: i()(
                                            g.base,
                                            e,
                                            g.base__zeroPadding,
                                            a && g.base__isTruncationAvailable,
                                        ),
                                        style: b,
                                    },
                                    o().createElement('div', { className: g.unTruncated, ref: d }, m),
                                    o().createElement(
                                        v.l,
                                        {
                                            tooltipArgs: p,
                                            className: i()(
                                                g.tooltip,
                                                g[`tooltip__justify-${E}`],
                                                g[`tooltip__align-${A}`],
                                            ),
                                        },
                                        o().createElement(
                                            'div',
                                            {
                                                className: i()(
                                                    g.truncated,
                                                    !B.isTruncateFinished && a && g.truncated__hide,
                                                ),
                                                style: b,
                                            },
                                            B.isTruncateFinished && a ? B.elementList : m,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var tu = t(5332);
                const nu = (0, t(3215).q)()(
                        ({ observableModel: u }) =>
                            Object.assign({}, u.primitives(['secondsLeft', 'isFillDisabled', 'isResetDisabled'])),
                        ({ externalModel: u }) => ({
                            fill: u.createCallbackNoArgs('onFill'),
                            reset: u.createCallbackNoArgs('onReset'),
                        }),
                    ),
                    ou = nu[0],
                    ru = nu[1],
                    iu = 'CrewBannerWidgetApp_base_d8',
                    su = 'CrewBannerWidgetApp_background_08',
                    au = 'CrewBannerWidgetApp_base__hovered_d3',
                    cu = 'CrewBannerWidgetApp_backgroundImage_4d',
                    lu = 'CrewBannerWidgetApp_text_75',
                    Eu = 'CrewBannerWidgetApp_countdown_43',
                    Au = 'CrewBannerWidgetApp_button_7b',
                    Fu = 'CrewBannerWidgetApp_buttonText_13',
                    du = R.strings.crew.crewBanner,
                    Du = (0, b.Pi)(({ className: u }) => {
                        const e = ru(),
                            t = e.model,
                            r = e.controls,
                            l = t.isFillDisabled.get(),
                            E = t.isResetDisabled.get(),
                            A = ((u, e, t = 150) => {
                                const o = (0, n.useState)(u),
                                    r = o[0],
                                    i = o[1],
                                    s = (0, tu.N)((u) => i(u), e, t);
                                return {
                                    isHovered: r,
                                    handleMouseEnter: (0, n.useCallback)(() => s(!0), [s]),
                                    handleMouseLeave: (0, n.useCallback)(() => s(!1), [s]),
                                };
                            })(!1, [], 0),
                            F = A.isHovered,
                            d = A.handleMouseEnter,
                            D = A.handleMouseLeave;
                        return o().createElement(
                            'div',
                            { className: i()(iu, F && au, u), onMouseEnter: l && E ? void 0 : d, onMouseLeave: D },
                            o().createElement('div', { className: su }, o().createElement('div', { className: cu })),
                            o().createElement(eu, { text: du.infoText(), classMix: lu, justifyContent: y.FlexEnd }),
                            o().createElement(p, {
                                className: Eu,
                                duration: t.secondsLeft.get(),
                                icon: a.Timer,
                                style: c.Extended,
                            }),
                            o().createElement(
                                h.i,
                                {
                                    ignoreMouseClick: !0,
                                    header: l
                                        ? du.button.fill.tooltip.disable.header()
                                        : du.button.fill.tooltip.enable.header(),
                                    body: l
                                        ? du.button.fill.tooltip.disable.body()
                                        : du.button.fill.tooltip.enable.body(),
                                },
                                o().createElement(
                                    'div',
                                    null,
                                    o().createElement(
                                        s.u5,
                                        { mixClass: Au, disabled: l, onClick: r.fill },
                                        o().createElement('div', { className: Fu }, du.button.fill.label()),
                                    ),
                                ),
                            ),
                            o().createElement(
                                h.i,
                                {
                                    ignoreMouseClick: !0,
                                    header: E
                                        ? du.button.reset.tooltip.disable.header()
                                        : du.button.reset.tooltip.enable.header(),
                                    body: E
                                        ? du.button.reset.tooltip.disable.body()
                                        : du.button.reset.tooltip.enable.body(),
                                },
                                o().createElement(
                                    'div',
                                    null,
                                    o().createElement(
                                        s.u5,
                                        { mixClass: Au, disabled: E, type: s.L$.secondary, onClick: r.reset },
                                        o().createElement('div', { className: Fu }, du.button.reset.label()),
                                    ),
                                ),
                            ),
                        );
                    }),
                    _u = { rootId: R.views.lobby.crew.widgets.CrewBannerWidget('resId') };
                (0, n.memo)((u) => o().createElement(ou, { options: _u }, o().createElement(Du, u)));
            },
            6880: (u, e, t) => {
                t.d(e, { Z: () => n });
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
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var o = 1 / 0;
                for (a = 0; a < deferred.length; a++) {
                    for (var [e, t, n] = deferred[a], r = !0, i = 0; i < e.length; i++)
                        (!1 & n || o >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), n < o && (o = n));
                    if (r) {
                        deferred.splice(a--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var a = deferred.length; a > 0 && deferred[a - 1][2] > n; a--) deferred[a] = deferred[a - 1];
            deferred[a] = [e, t, n];
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
        (__webpack_require__.j = 1912),
        (() => {
            var u = { 1912: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        o,
                        [r, i, s] = t,
                        a = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (e && e(t); a < r.length; a++)
                        (o = r[a]), __webpack_require__.o(u, o) && u[o] && u[o][0](), (u[o] = 0);
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(3880));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
