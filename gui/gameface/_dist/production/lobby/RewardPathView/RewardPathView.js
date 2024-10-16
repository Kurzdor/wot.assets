(() => {
    var __webpack_modules__ = {
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => i });
                var n = u(6179),
                    r = u.n(n),
                    a = u(2056);
                const s = ['children'];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const i = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, s);
                    return r().createElement(
                        a.u,
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
                    r = u.n(n),
                    a = u(7078),
                    s = u(6373),
                    o = u(2056);
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = r().createElement('div', { className: u }, e);
                    if (t.header || t.body) return r().createElement(s.i, t, n);
                    const l = t.contentId;
                    return l ? r().createElement(o.u, i({}, t, { contentId: l }), n) : r().createElement(a.t, t, n);
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => l });
                var n = u(2056),
                    r = u(6179),
                    a = u.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            u = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            _ = e.args,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, s);
                        const m = (0, r.useMemo)(() => {
                            const e = Object.assign({}, _, { body: u, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, u, l, c, _]);
                        return a().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((A = null == _ ? void 0 : _.hasHtmlContent),
                                        A ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: m,
                                },
                                E,
                            ),
                            t,
                        );
                        var A;
                    };
            },
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => l });
                var n = u(7902),
                    r = u(9916),
                    a = u(6179);
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
                                    type: r.B0.TOOLTIP,
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
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            E = e.ignoreShowDelay,
                            m = void 0 !== E && E,
                            A = e.ignoreMouseClick,
                            g = void 0 !== A && A,
                            p = e.decoratorId,
                            f = void 0 === p ? 0 : p,
                            h = e.isEnabled,
                            F = void 0 === h || h,
                            B = e.targetId,
                            v = void 0 === B ? 0 : B,
                            D = e.onShow,
                            b = e.onHide,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, s);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, a.useMemo)(() => v || (0, n.F)().resId, [v]),
                            T = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(u, f, { isMouseEvent: !0, on: !0, arguments: o(r) }, y),
                                    D && D(),
                                    (w.current.isVisible = !0));
                            }, [u, f, r, y, D]),
                            S = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(u, f, { on: !1 }, y),
                                        w.current.isVisible && b && b(),
                                        (w.current.isVisible = !1);
                                }
                            }, [u, f, y, b]),
                            x = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', x, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', x, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && S();
                            }, [F, S]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((R = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(T, m ? 100 : 400)),
                                                          l && l(e),
                                                          R && R(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  S(), null == c || c(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === g && S(), null == _ || _(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === g && S(), null == d || d(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : t
                        );
                        var R;
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
            8246: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => s });
                var n = u(3138);
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const a = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: u = a, context: s = 'model' } = {}) {
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
                            r = s.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, r);
                    };
                    return {
                        subscribe: (u, r) => {
                            const a = 'string' == typeof r ? `${s}.${r}` : s,
                                i = n.O.view.addModelObserver(a, t, !0);
                            return o.set(i, u), e && u(l(r)), i;
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
                            for (
                                var e,
                                    u = (function (e, t) {
                                        var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (u) return (u = u.call(e)).next.bind(u);
                                        if (
                                            Array.isArray(e) ||
                                            (u = (function (e, t) {
                                                if (e) {
                                                    if ('string' == typeof e) return r(e, t);
                                                    var u = {}.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === u && e.constructor && (u = e.constructor.name),
                                                        'Map' === u || 'Set' === u
                                                            ? Array.from(e)
                                                            : 'Arguments' === u ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                                              ? r(e, t)
                                                              : void 0
                                                    );
                                                }
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
                                    })(o.keys());
                                !(e = u()).done;

                            )
                                i(e.value, t);
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q: () => i });
                var n = u(4598),
                    r = u(9174),
                    a = u(6179),
                    s = u.n(a),
                    o = u(8246);
                const i = () => (e, t) => {
                    const u = (0, a.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: d }) {
                            const _ = (0, a.useRef)([]),
                                E = (u, a, s) => {
                                    var i;
                                    const l = o.U(a),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === u ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        E = (e) => _.current.push(e),
                                        m = e({
                                            mode: u,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const a = null != t ? t : d(e),
                                                        s = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const a = null != t ? t : d(e),
                                                        s = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = d(t);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            s = Object.entries(a),
                                                            o = s.reduce(
                                                                (e, [t, u]) => ((e[u] = r.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
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
                                            cleanup: E,
                                        }),
                                        A = { mode: u, model: m, externalModel: c, cleanup: E };
                                    return {
                                        model: m,
                                        controls: 'mocks' === u && s ? s.controls(A) : t(A),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                m = (0, a.useRef)(!1),
                                A = (0, a.useState)(i),
                                g = A[0],
                                p = A[1],
                                f = (0, a.useState)(() => E(i, l, d)),
                                h = f[0],
                                F = f[1];
                            return (
                                (0, a.useEffect)(() => {
                                    m.current ? F(E(g, l, d)) : (m.current = !0);
                                }, [d, g, l]),
                                (0, a.useEffect)(() => {
                                    p(i);
                                }, [i]),
                                (0, a.useEffect)(
                                    () => () => {
                                        h.externalModel.dispose(), _.current.forEach((e) => e());
                                    },
                                    [h],
                                ),
                                s().createElement(u.Provider, { value: h }, c)
                            );
                        },
                        () => (0, a.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, { mouse: () => c, off: () => i, on: () => o, onResize: () => a, onScaleUpdated: () => s });
                var n = u(2472),
                    r = u(1176);
                const a = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function u() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${t}`,
                                            s = l[t]((e) => u([e, 'outside']));
                                        function o(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, o),
                                            n(),
                                            () => {
                                                r &&
                                                    (s(),
                                                    window.removeEventListener(a, o),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(u)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                (e.enabled = !1), n();
                            },
                            enable() {
                                (e.enabled = !0), n();
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
            5959: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => a,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = u(527),
                    r = u(2493);
                function a(e = 'px') {
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
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2493: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => r, G: () => n });
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
                var n = u(5959),
                    r = u(514);
                const a = { view: u(7641), client: n, sound: r.ZP };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => s });
                var n = u(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, n.playSound)(r[t])), e), {}),
                    s = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => r });
                var n = u(2472);
                const r = {
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => C,
                        getScale: () => p,
                        getSize: () => E,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => D,
                        isFocused: () => B,
                        pxToRem: () => f,
                        remToPx: () => h,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => T,
                    });
                var n = u(3722),
                    r = u(6112),
                    a = u(6538),
                    s = u(8566);
                const o = 15;
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function c(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function d(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function A(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function f(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function C() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
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
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => a });
                const n = ['args'],
                    r = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            u[n] = e[n];
                                        }
                                    return u;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
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
                        var r;
                    },
                    a = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                'use strict';
                function n() {}
                function r() {
                    return !1;
                }
                u.d(t, { ZT: () => n, jv: () => r }), console.log;
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
            4419: (e, t, u) => {
                'use strict';
                u.d(t, { y: () => a });
                var n = u(8045),
                    r = u(6179);
                const a = (e, t, u = !0) => {
                    const a = (0, r.useCallback)(
                        (e) => {
                            const u = e[0];
                            t && t(u);
                        },
                        [t],
                    );
                    (0, r.useEffect)(() => {
                        if (!e.current || !u) return;
                        const t = new n.Z((e) => a(e));
                        return (
                            t.observe(e.current),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [a, u, e]);
                };
            },
            5521: (e, t, u) => {
                'use strict';
                let n, r;
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
                    })(r || (r = {}));
            },
            3649: (e, t, u) => {
                'use strict';
                let n;
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                u.d(t, { BN: () => r, Eg: () => s, z4: () => a }),
                    u(1281),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(n || (n = {}));
                const a = (e) => e.replace(/&nbsp;/g, ' '),
                    s = (e) => e.replace(/&zwnbsp;/g, '\ufeff');
                new RegExp(
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
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(3138);
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
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, u, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(a) : (this._views[u] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                r.__instance = void 0;
                const a = r;
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
                u.d(t, { B3: () => l, Z5: () => s.Z5, B0: () => o, ry: () => f });
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
                const r = n;
                var a = u(1358),
                    s = u(8613);
                let o;
                var i;
                ((i = o || (o = {}))[(i.UNDEFINED = 0)] = 'UNDEFINED'),
                    (i[(i.TOOLTIP = 1)] = 'TOOLTIP'),
                    (i[(i.POP_OVER = 2)] = 'POP_OVER'),
                    (i[(i.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (i[(i.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (i[(i.MOVE = 16)] = 'MOVE'),
                    (i[(i.CLOSE = 32)] = 'CLOSE'),
                    (i[(i.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = u(5521),
                    m = u(3138);
                const A = ['args'];
                function g(e, t, u, n, r, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(n, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    f = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(t, u);
                                        function s(e) {
                                            g(a, n, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(a, n, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            u[n] = e[n];
                                        }
                                    return u;
                                })(t, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    F = () => h(o.CLOSE),
                    B = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var v = u(7572);
                const D = r.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => h(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: F,
                        sendClosePopOverEvent: () => h(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            h(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), a) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                i = u.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                _ = i.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            h(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: p(E),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => B(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, F);
                        },
                        handleViewEvent: h,
                        onBindingsReady: f,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < r.length; t++) u[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
            },
            3618: (e, t, u) => {
                'use strict';
                u.d(t, { w: () => E });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3415),
                    s = u(4419),
                    o = u(6179),
                    i = u.n(o),
                    l = u(8055),
                    c = u(3310),
                    d = u(131),
                    _ = u(9053);
                const E = i().memo(
                    ({
                        text: e,
                        classMix: t,
                        onSizeChanged: u,
                        binding: n,
                        isTooltipEnable: E = !1,
                        isTruncationAvailable: m = !1,
                        customTooltipArgs: A,
                        targetId: g,
                        justifyContent: p = _.v2.FlexStart,
                        alignContent: f = _.v2.FlexStart,
                        truncateIdentify: h = _.YA,
                    }) => {
                        const F = (0, o.useRef)(null),
                            B = (0, o.useRef)({ height: 0, width: 0 }),
                            v = (0, o.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            D = v[0],
                            b = v[1],
                            C = (0, o.useMemo)(() => (0, c.s)(e, n, { justifyContent: p }), [n, p, e]),
                            w = (0, o.useMemo)(() => {
                                if (E && D.isTruncated && (!n || !Object.values(n).find((e) => 'object' == typeof e)))
                                    return {
                                        args: Object.assign({ text: e }, A, {
                                            stringifyKwargs: n ? JSON.stringify(n) : '',
                                        }),
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: g,
                                    };
                            }, [n, E, g, e, A, D.isTruncated]),
                            y = (0, o.useCallback)(
                                (e) => {
                                    (B.current.width = e.contentRect.width), (B.current.height = e.contentRect.height);
                                    const t = (0, d.T)(F, C, B.current, h),
                                        n = t[0],
                                        r = t[1];
                                    b({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), u && u(r);
                                },
                                [u, h, C],
                            ),
                            T = (0, o.useMemo)(() => ({ justifyContent: p, alignContent: f }), [f, p]);
                        return (
                            (0, s.y)(F, y, m),
                            i().createElement(
                                'div',
                                {
                                    className: r()(
                                        l.Z.base,
                                        t,
                                        l.Z.base__zeroPadding,
                                        m && l.Z.base__isTruncationAvailable,
                                    ),
                                    style: T,
                                },
                                i().createElement('div', { className: l.Z.unTruncated, ref: F }, C),
                                i().createElement(
                                    a.l,
                                    {
                                        tooltipArgs: w,
                                        className: r()(
                                            l.Z.tooltip,
                                            l.Z[`tooltip__justify-${p}`],
                                            l.Z[`tooltip__align-${f}`],
                                        ),
                                    },
                                    i().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                l.Z.truncated,
                                                !D.isTruncateFinished && m && l.Z.truncated__hide,
                                            ),
                                            style: T,
                                        },
                                        D.isTruncateFinished && m ? D.elementList : C,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, t, u) => {
                'use strict';
                u.d(t, { s: () => _ });
                var n = u(3649),
                    r = u(6799),
                    a = u(6960),
                    s = u(9053);
                const o = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    i = s.u6
                        ? (e) => {
                              const t = [];
                              return (
                                  (0, a.Z)(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(
                                              ...((e) => {
                                                  const t = [];
                                                  return (
                                                      (0, a.Z)(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var u;
                                                              R.strings.settings.LANGUAGE_CODE().toLowerCase() === s.Co
                                                                  ? t.push(...((u = e), u.match(o) || []))
                                                                  : t.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              t.push(e[0]);
                                                          },
                                                      ),
                                                      t
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const u = /[\s\u002d]/g;
                              let n = u.exec(e);
                              if (!n) return [e];
                              const r = [];
                              let a = 0;
                              for (; n; ) {
                                  const o = t.justifyContent === s.v2.FlexEnd ? n.index : u.lastIndex;
                                  r.push(e.slice(a, o)), (a = o), (n = u.exec(e));
                              }
                              return a !== e.length && r.push(e.slice(a)), r;
                          },
                    l = (e, t = '', u) => {
                        const n = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: s.kH.Word, colorTag: t, childList: i(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        r = s.aF[u.charAt(0)];
                                    r === s.kH.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: s.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: s.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(u),
                                          )
                                        : n.push({ blockType: r, colorTag: t, childList: [u] });
                                },
                            ),
                            n
                        );
                    },
                    c = (e, t, u = '', n) => {
                        const r = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...l(e, u, n));
                                },
                                (e) => {
                                    const a = e[1],
                                        o = void 0 === t[a] ? e[0] : t[a];
                                    'string' == typeof o || 'number' == typeof o
                                        ? r.push(...l(String(o), u, n))
                                        : r.push({ blockType: s.kH.Binding, colorTag: u, childList: [o] });
                                },
                            ),
                            r
                        );
                    },
                    d = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === s.kH.NoBreakWrapper) e.childList.push(n), u.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && u.push(e),
                                u.push({ blockType: s.kH.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && u.push(t), u;
                    },
                    _ = (e, t = {}, u) => {
                        if (!e) return [];
                        const o = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === s.kH.NoBreakSymbol
                                        ? ((u = !0), t.push(...d(t.pop(), e)))
                                        : (u ? t.push(...d(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const n = [];
                                return (
                                    (0, a.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...c(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...c(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })((0, n.Eg)((0, n.z4)(e)), t, u),
                        );
                        return (0, r.w)(o);
                    };
            },
            6799: (e, t, u) => {
                'use strict';
                u.d(t, { w: () => s });
                var n = u(597),
                    r = u(9053);
                const a = (e, t, u) => {
                        const s = [];
                        return (
                            e.childList.forEach((o, i) => {
                                const l = `${u}_${i}`;
                                if ((0, r.dz)(o)) {
                                    const e = o,
                                        t = e.blockType,
                                        u = n.IY[t],
                                        r = a(e, u, l);
                                    s.push(...r);
                                } else s.push(t({ elementList: [o], textBlock: e, key: l }));
                            }),
                            s
                        );
                    },
                    s = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            s = e.blockType,
                                            o = n.IY[s],
                                            i = a(e, o, t);
                                        return (
                                            s === r.kH.NoBreakWrapper
                                                ? u.push(o({ elementList: i, textBlock: e, key: `${t}` }))
                                                : u.push(...i),
                                            u
                                        );
                                    })(e, u),
                                );
                            }),
                            t
                        );
                    };
            },
            6960: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = (e, t, u, n) => {
                    let r = t.exec(e),
                        a = 0;
                    for (; r; ) a !== r.index && u(e.slice(a, r.index)), n(r), (a = t.lastIndex), (r = t.exec(e));
                    a !== e.length && u(e.slice(a));
                };
            },
            131: (e, t, u) => {
                'use strict';
                u.d(t, { T: () => c });
                var n = u(6179),
                    r = u.n(n),
                    a = u(9053);
                const s = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    o = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    i = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = o(e, t),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            s = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / a);
                            return n >= u ? [!0, u + s] : [!1, n];
                        }
                        const i = Math.max(u + s, 0);
                        return r < i ? [!1, 0] : [!0, i];
                    },
                    l = (e, t, u, n, s, o) => {
                        let c = -1,
                            d = null;
                        for (let _ = u; _ >= 0; _--) {
                            const u = e[_],
                                E = Number(e[_].getAttribute(a.bF));
                            if (E === a.kH.LineBreak || E === a.kH.NewLine || E === a.kH.Binding) continue;
                            const m = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = i(u, n, s),
                                    a = e[0],
                                    l = e[1];
                                if (!a) {
                                    l > 0 && (s -= l);
                                    continue;
                                }
                                const E = m.slice(0, m.length - l) + o,
                                    A = t[_];
                                (d = r().cloneElement(A, A.props, E)), (c = _);
                                break;
                            }
                            {
                                const e = u.children,
                                    a = t[_],
                                    i = a.props.children,
                                    E = l(e, i, e.length - 1, n, s, o),
                                    A = E[0],
                                    g = E[1];
                                if (!(A < 0)) {
                                    const e = i.slice(0, A);
                                    (d = r().cloneElement(a, a.props, e, g)), (c = _);
                                    break;
                                }
                                s -= m.length;
                            }
                        }
                        return [c, d];
                    },
                    c = (e, t, u, n = a.YA) => {
                        const r = [...t],
                            i = e.current;
                        if (!i) return [r, !1];
                        const c = u.height,
                            d = u.width,
                            _ = i.lastElementChild;
                        if (!s(_, c) && o(_, d) <= 0) return [r, !1];
                        const E = i.children,
                            m = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const r = u + Math.ceil(0.5 * (n - u));
                                    s(e[r], t) ? (n = r - 1) : (u = r + 1);
                                }
                                return u - 1;
                            })(E, c);
                        if (m < 0) return [r, !1];
                        const A = l(E, r, m, d, n.length, n),
                            g = A[0],
                            p = A[1];
                        return p && (r.splice(g, 1, p), r.splice(g + 1)), [r, !0];
                    };
            },
            9053: (e, t, u) => {
                'use strict';
                let n, r, a;
                u.d(t, {
                    Co: () => c,
                    YA: () => o,
                    aF: () => l,
                    bF: () => i,
                    dz: () => s,
                    kH: () => n,
                    u6: () => d,
                    v2: () => r,
                }),
                    (function (e) {
                        (e[(e.Word = 0)] = 'Word'),
                            (e[(e.LineBreak = 1)] = 'LineBreak'),
                            (e[(e.NewLine = 2)] = 'NewLine'),
                            (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (e[(e.Binding = 5)] = 'Binding');
                    })(n || (n = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(r || (r = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(a || (a = {}));
                const s = (e) => void 0 !== e.childList,
                    o = '...',
                    i = 'data-block-type',
                    l = { [a.NBSP]: n.NoBreakSymbol, [a.ZWNBSP]: n.NoBreakSymbol, [a.NEW_LINE]: n.LineBreak },
                    c = 'th',
                    d = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', c].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase());
            },
            597: (e, t, u) => {
                'use strict';
                u.d(t, { IY: () => _ });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    s = u.n(a),
                    o = u(9053),
                    i = u(9627),
                    l = u(7629);
                const c = (e) => ({ color: `#${e}` }),
                    d = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? i.Z[n]
                                ? s().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: r()(l.Z.word, i.Z[n]) },
                                      e,
                                  )
                                : s().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: l.Z.word, style: c(n) },
                                      e,
                                  )
                            : s().createElement(
                                  'span',
                                  { key: u, 'data-block-type': t.blockType, className: l.Z.word },
                                  e,
                              );
                    },
                    _ = {
                        [o.kH.Word]: d,
                        [o.kH.NoBreakSymbol]: d,
                        [o.kH.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            s().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => s().createElement(s().Fragment, { key: u }, e)),
                            ),
                        [o.kH.LineBreak]: ({ key: e }) =>
                            s().createElement('span', {
                                key: e,
                                'data-block-type': o.kH.LineBreak,
                                className: l.Z.lineBreak,
                            }),
                        [o.kH.NewLine]: ({ elementList: e, key: t }) =>
                            s().createElement(
                                'span',
                                { key: t, 'data-block-type': o.kH.NewLine, className: l.Z.newLine },
                                e,
                            ),
                        [o.kH.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            s().createElement(
                                'span',
                                { key: t, 'data-block-type': o.kH.NoBreakWrapper, className: l.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            4129: (e, t, u) => {
                'use strict';
                u.d(t, { zx: () => E, qE: () => _, L$: () => d });
                var n = u(6483),
                    r = u.n(n),
                    a = u(5508),
                    s = u(3138),
                    o = u(6179),
                    i = u.n(o),
                    l = u(4892);
                const c = {
                    base: 'Button_base_e7',
                    base__small: 'Button_base__small_40',
                    base__medium: 'Button_base__medium_ee',
                    base__disabled: 'Button_base__disabled_41',
                    base__active: 'Button_base__active_ef',
                    base__hover: 'Button_base__hover_39',
                    border: 'Button_border_bf',
                    base__secondary: 'Button_base__secondary_b5',
                    base__primary: 'Button_base__primary_d4',
                    shadow: 'Button_shadow_b6',
                    content: 'Button_content_86',
                    caption: 'Button_caption_9b',
                    primaryCaption: 'Button_primaryCaption_e9',
                    hintAnim: 'Button_hintAnim_fe',
                    borderWaveAnimation: 'Button_borderWaveAnimation_c1',
                };
                let d, _;
                !(function (e) {
                    (e.Primary = 'primary'), (e.Secondary = 'secondary');
                })(d || (d = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium');
                    })(_ || (_ = {}));
                const E = i().memo(function ({
                    caption: e,
                    type: t,
                    size: u = _.Small,
                    isDisable: n = !1,
                    showHintAnim: E = !1,
                    className: m,
                    onClick: A,
                }) {
                    const g = (0, o.useState)(!1),
                        p = g[0],
                        f = g[1],
                        h = (0, o.useState)(!1),
                        F = h[0],
                        B = h[1];
                    return i().createElement(
                        'div',
                        {
                            className: r()(
                                c.base,
                                c[`base__${t}`],
                                c[`base__${u}`],
                                n && c.base__disabled,
                                p && c.base__hover,
                                F && c.base__active,
                                m,
                            ),
                            onClick: () => {
                                !n && A && (s.O.sound.play.click(), A());
                            },
                            onMouseEnter: () => {
                                !n && A && (s.O.sound.play.highlight(), f(!0));
                            },
                            onMouseLeave: () => {
                                f(!1), B(!1);
                            },
                            onMouseDown: () => B(!0),
                            onMouseUp: () => B(!1),
                            lang: R.strings.settings.LANGUAGE_CODE(),
                        },
                        i().createElement('div', { className: c.border }),
                        i().createElement('div', { className: c.shadow }),
                        E && i().createElement('div', { className: c.hintAnim }),
                        i().createElement(
                            'div',
                            { className: c.content, lang: R.strings.settings.LANGUAGE_CODE() },
                            t === d.Secondary
                                ? i().createElement(a.x, {
                                      className: c.caption,
                                      text: e,
                                      isTruncationAvailable: !0,
                                      type: l.y.Red,
                                      shadow: !0,
                                  })
                                : i().createElement('div', { className: c.primaryCaption }, e),
                        ),
                    );
                });
            },
            7621: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => l, _: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(2056),
                    s = u(6179),
                    o = u.n(s),
                    i = u(9831);
                let l;
                !(function (e) {
                    (e.C28x28 = 'c28x28'),
                        (e.C30x30 = 'c30x30'),
                        (e.C36x36 = 'c36x36'),
                        (e.C44x44 = 'c44x44'),
                        (e.C70x70 = 'c70x70'),
                        (e.C110x110 = 'c110x110');
                })(l || (l = {}));
                const c = o().memo(function ({ size: e, gray: t = !1, isTooltipEnable: u = !1, className: n }) {
                    return o().createElement(
                        a.u,
                        { contentId: R.views.halloween.lobby.tooltips.KeyTooltip('resId'), isEnabled: u },
                        o().createElement('div', {
                            className: r()(i.Z.base, i.Z[`base__${e}`], t && i.Z.base__gray, n),
                        }),
                    );
                });
            },
            5508: (e, t, u) => {
                'use strict';
                u.d(t, { x: () => _ });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3618),
                    s = u(6179),
                    o = u.n(s),
                    i = u(3149),
                    l = u(4892);
                const c = ['type', 'shadow', 'grunge', 'className'];
                function d() {
                    return (
                        (d = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        d.apply(null, arguments)
                    );
                }
                const _ = (e) => {
                    let t = e.type,
                        u = e.shadow,
                        n = void 0 !== u && u,
                        s = e.grunge,
                        _ = void 0 !== s && s,
                        E = e.className,
                        m = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, c);
                    return o().createElement(
                        'div',
                        { className: r()(i.Z.base, i.Z[`base__${t}`], E), lang: R.strings.settings.LANGUAGE_CODE() },
                        o().createElement(a.w, d({ classMix: r()(i.Z.layer0, n && i.Z.layer0__shadow) }, m)),
                        (t === l.y.Heading || t === l.y.MetaHeading) &&
                            o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(a.w, d({ classMix: i.Z.layer1 }, m)),
                                o().createElement(a.w, d({ classMix: i.Z.layer2 }, m)),
                            ),
                        o().createElement(a.w, d({ classMix: i.Z.layer3 }, m)),
                        _ && o().createElement(a.w, d({ classMix: i.Z.layer4 }, m)),
                    );
                };
            },
            4892: (e, t, u) => {
                'use strict';
                let n;
                u.d(t, { y: () => n }),
                    (function (e) {
                        (e.WhiteSpanish = 'whiteSpanish'),
                            (e.Red = 'red'),
                            (e.LightRed = 'lightRed'),
                            (e.Currency = 'currency'),
                            (e.Heading = 'heading'),
                            (e.MetaHeading = 'metaHeading');
                    })(n || (n = {}));
            },
            8373: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => we,
                        Bar: () => De,
                        DefaultScroll: () => Ce,
                        Direction: () => Ee,
                        defaultSettings: () => me,
                        useHorizontalScrollApi: () => ge,
                    });
                var r = {};
                u.r(r), u.d(r, { Area: () => Ie, Bar: () => Ne, Default: () => Me, useVerticalScrollApi: () => ye });
                var a = u(6179),
                    s = u.n(a);
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
                        })(t, u),
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === u.extraLarge.weight,
                        large: a === u.large.weight,
                        medium: a === u.medium.weight,
                        small: a === u.small.weight,
                        extraSmall: a === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: r === u.extraLarge.weight,
                        largeHeight: r === u.large.weight,
                        mediumHeight: r === u.medium.weight,
                        smallHeight: r === u.small.weight,
                        extraSmallHeight: r === u.extraSmall.weight,
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
                const _ = i.O.client.getSize('rem'),
                    E = _.width,
                    m = _.height,
                    A = Object.assign({ width: E, height: m }, d(E, m, l)),
                    g = (0, a.createContext)(A),
                    p = ['children'],
                    f = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, p);
                        const n = (0, a.useContext)(g),
                            r = n.extraLarge,
                            s = n.large,
                            i = n.medium,
                            l = n.small,
                            c = n.extraSmall,
                            d = n.extraLargeWidth,
                            _ = n.largeWidth,
                            E = n.mediumWidth,
                            m = n.smallWidth,
                            A = n.extraSmallWidth,
                            f = n.extraLargeHeight,
                            h = n.largeHeight,
                            F = n.mediumHeight,
                            B = n.smallHeight,
                            v = n.extraSmallHeight,
                            D = { extraLarge: f, large: h, medium: F, small: B, extraSmall: v };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && r) return t;
                            if (u.large && s) return t;
                            if (u.medium && i) return t;
                            if (u.small && l) return t;
                            if (u.extraSmall && c) return t;
                        } else {
                            if (u.extraLargeWidth && d) return o(t, u, D);
                            if (u.largeWidth && _) return o(t, u, D);
                            if (u.mediumWidth && E) return o(t, u, D);
                            if (u.smallWidth && m) return o(t, u, D);
                            if (u.extraSmallWidth && A) return o(t, u, D);
                            if (
                                !(
                                    u.extraLargeWidth ||
                                    u.largeWidth ||
                                    u.mediumWidth ||
                                    u.smallWidth ||
                                    u.extraSmallWidth
                                )
                            ) {
                                if (u.extraLargeHeight && f) return t;
                                if (u.largeHeight && h) return t;
                                if (u.mediumHeight && F) return t;
                                if (u.smallHeight && B) return t;
                                if (u.extraSmallHeight && v) return t;
                            }
                        }
                        return null;
                    };
                (f.defaultProps = {
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
                }),
                    (0, a.memo)(f);
                const h = ({ children: e }) => {
                    const t = (0, a.useContext)(g),
                        u = (0, a.useState)(t),
                        n = u[0],
                        r = u[1],
                        o = (0, a.useCallback)((e, t) => {
                            const u = i.O.view.pxToRem(e),
                                n = i.O.view.pxToRem(t);
                            r(Object.assign({ width: u, height: n }, d(u, n, l)));
                        }, []),
                        c = (0, a.useCallback)(() => {
                            const e = i.O.client.getSize('px');
                            o(e.width, e.height);
                        }, [o]);
                    ((e) => {
                        const t = (0, a.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        i.O.client.events.on('clientResized', o), i.O.client.events.on('self.onScaleUpdated', c);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                i.O.client.events.off('clientResized', o),
                                    i.O.client.events.off('self.onScaleUpdated', c);
                            },
                            [o, c],
                        );
                    const _ = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                    return s().createElement(g.Provider, { value: _ }, e);
                };
                var F = u(6483),
                    B = u.n(F),
                    v = u(926),
                    D = u.n(v);
                let b, C, w;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(C || (C = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const y = () => {
                        const e = (0, a.useContext)(g),
                            t = e.width,
                            u = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return b.ExtraLarge;
                                    case e.large:
                                        return b.Large;
                                    case e.medium:
                                        return b.Medium;
                                    case e.small:
                                        return b.Small;
                                    case e.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return C.ExtraLarge;
                                    case e.largeWidth:
                                        return C.Large;
                                    case e.mediumWidth:
                                        return C.Medium;
                                    case e.smallWidth:
                                        return C.Small;
                                    case e.extraSmallWidth:
                                        return C.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), C.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return w.ExtraLarge;
                                    case e.largeHeight:
                                        return w.Large;
                                    case e.mediumHeight:
                                        return w.Medium;
                                    case e.smallHeight:
                                        return w.Small;
                                    case e.extraSmallHeight:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: s, remScreenWidth: t, remScreenHeight: u };
                    },
                    T = ['children', 'className'];
                function S() {
                    return (
                        (S = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        S.apply(null, arguments)
                    );
                }
                const x = {
                        [C.ExtraSmall]: '',
                        [C.Small]: D().SMALL_WIDTH,
                        [C.Medium]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH}`,
                        [C.Large]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH}`,
                        [C.ExtraLarge]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH} ${D().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [w.ExtraSmall]: '',
                        [w.Small]: D().SMALL_HEIGHT,
                        [w.Medium]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT}`,
                        [w.Large]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT} ${D().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [b.ExtraSmall]: '',
                        [b.Small]: D().SMALL,
                        [b.Medium]: `${D().SMALL} ${D().MEDIUM}`,
                        [b.Large]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE}`,
                        [b.ExtraLarge]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE} ${D().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, T);
                        const r = y(),
                            a = r.mediaWidth,
                            o = r.mediaHeight,
                            i = r.mediaSize;
                        return s().createElement('div', S({ className: B()(u, x[a], P[o], k[i]) }, n), t);
                    },
                    N = ['children'],
                    O = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, N);
                        return s().createElement(h, null, s().createElement(L, u, t));
                    };
                var M = u(493),
                    I = u.n(M);
                function H(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const U = {
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
                function G() {
                    return (
                        (G = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        G.apply(null, arguments)
                    );
                }
                class $ extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && H(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && H(this.props.soundClick);
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
                            n = e.goto,
                            r = e.side,
                            a = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            u[n] = e[n];
                                        }
                                    return u;
                                })(e, W)),
                            E = B()(U.base, U[`base__${a}`], U[`base__${r}`], null == o ? void 0 : o.base),
                            m = B()(U.icon, U[`icon__${a}`], U[`icon__${r}`], null == o ? void 0 : o.icon),
                            A = B()(U.glow, null == o ? void 0 : o.glow),
                            g = B()(U.caption, U[`caption__${a}`], null == o ? void 0 : o.caption),
                            p = B()(U.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            G(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                _,
                            ),
                            'info' !== a && s().createElement('div', { className: U.shine }),
                            s().createElement('div', { className: m }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: g }, t),
                            n && s().createElement('div', { className: p }, n),
                        );
                    }
                }
                $.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var z = u(6373);
                const V = (e, t, u) => (u < e ? e : u > t ? t : u),
                    j = (e) => {
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
                var Z = u(6112),
                    q = u(4598);
                const Y = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function K() {
                    return (
                        (K = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        K.apply(null, arguments)
                    );
                }
                const X = (0, a.forwardRef)(function (e, t) {
                        let u = e.src,
                            n = e.className,
                            r = e.autoplay,
                            o = void 0 !== r && r,
                            l = e.style,
                            c = e.loop,
                            d = void 0 !== c && c,
                            _ = e.isPrebufferKeyframes,
                            E = e.keyframesNameConfig,
                            m = e.onClick,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, Y);
                        const g = t,
                            p = (0, a.useRef)(null);
                        var f;
                        return (
                            (f = () =>
                                i.O.view.events.onDisplayChanged((e, t) => {
                                    var u, n;
                                    t === Z.W.hidden && (null == (u = p.current) || u.pause()),
                                        t === Z.W.shown && (null == (n = p.current) || n.play());
                                })),
                            (0, a.useEffect)(f, []),
                            (0, a.useEffect)(
                                () =>
                                    j(() => {
                                        const e = p.current;
                                        if (!g || !e || !_)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [_, g],
                            ),
                            (0, a.useEffect)(() => {
                                if (g && p.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: q.ZT,
                                        },
                                        t = () => {
                                            let t = 0;
                                            const u = (function (u) {
                                                    let n = 0;
                                                    return [
                                                        function u() {
                                                            (() => {
                                                                if (p.current) {
                                                                    const u = p.current,
                                                                        n = u.currentTime,
                                                                        r = u.duration;
                                                                    if (
                                                                        (t !== n &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: n, duration: r }),
                                                                            ),
                                                                            (t = n)),
                                                                        p.current.paused || !g || !_)
                                                                    )
                                                                        return;
                                                                    const a = p.current.cohGetKeyframeTimestamps();
                                                                    a.forEach((t, u) => {
                                                                        n > a[u] - 0.02 &&
                                                                            n < a[u] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const n = Object.keys(
                                                                                    null != E ? E : {},
                                                                                )[u];
                                                                                return e({
                                                                                    time: t,
                                                                                    name: `${E ? n : `Point_${u}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (n = requestAnimationFrame(u));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(),
                                                n = u[0],
                                                r = u[1];
                                            return n(), r;
                                        };
                                    e.changeTimeLoop = t();
                                    const u = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const u = e.changeTimeHandlers,
                                                    n = u.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : u.splice(n, 1);
                                            }
                                        ),
                                        n = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const u = e.changeKeyframeHandlers,
                                                    n = u.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : u.splice(n, 1);
                                            }
                                        ),
                                        r = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.currentTime;
                                        },
                                        a = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.duration;
                                        },
                                        s = (e) => {
                                            p.current && (p.current.currentTime = V(0, p.current.duration, e));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.play();
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            i(), s(0);
                                        },
                                        c = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = p.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            s(e), o();
                                        },
                                        m = (e) => {
                                            s(e), i();
                                        },
                                        A = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        f = (e, t) => {
                                            var u;
                                            return (
                                                null == (u = p.current) || u.addEventListener(e, t),
                                                () => {
                                                    var u;
                                                    return null == (u = p.current)
                                                        ? void 0
                                                        : u.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        h = (e, t) => {
                                            var u;
                                            return (
                                                null == (u = p.current) || u.removeEventListener(e, t),
                                                () => {
                                                    var u;
                                                    return null == (u = p.current)
                                                        ? void 0
                                                        : u.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (g.current = {
                                            on: f,
                                            off: h,
                                            play: o,
                                            pause: i,
                                            stop: l,
                                            cleanup: A,
                                            getCurrentTime: r,
                                            getDuration: a,
                                            getCachedKeyframes: c,
                                            goToAndPlay: d,
                                            goToAndStop: m,
                                            setCurrentTime: s,
                                            domRef: p.current,
                                            onChangeTime: u,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            A(), (g.current = null);
                                        }
                                    );
                                }
                            }, [E, g, _]),
                            (0, a.useEffect)(() => {
                                p.current && o && p.current.play();
                            }, [o, d]),
                            (0, a.useEffect)(() => {
                                if (p.current)
                                    return () => {
                                        p.current && p.current.pause();
                                    };
                            }, []),
                            s().createElement(
                                'video',
                                K({ src: u, className: n, style: l, loop: d, ref: p, onClick: m }, A),
                            )
                        );
                    }),
                    Q = (0, a.memo)(X);
                var J = u(5521),
                    ee = u(9916);
                const te = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ue(e = J.n.NONE, t = te, u = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== J.n.NONE)
                            return (
                                window.addEventListener('keydown', r, u),
                                () => {
                                    window.removeEventListener('keydown', r, u);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), t(r), u && r.stopPropagation();
                            }
                        }
                    }, [t, e, u, n]);
                }
                var ne = u(3403),
                    re = u(6131);
                const ae = (0, u(3215).q)()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            mainGiftVehicle: e.object('mainGiftVehicle'),
                            artefacts: e.array('artefacts'),
                        }),
                        ({ externalModel: e }) => ({
                            viewLoaded: e.createCallbackNoArgs('onViewLoaded'),
                            close: e.createCallbackNoArgs('onClose'),
                            preview: e.createCallbackNoArgs('onPreview'),
                            showAbout: e.createCallbackNoArgs('onAbout'),
                            showIntro: e.createCallbackNoArgs('onShowIntro'),
                            goToMission: e.createCallback((e) => ({ artefactID: e }), 'goToMission'),
                        }),
                    ),
                    se = ae[0],
                    oe = ae[1],
                    ie = [];
                function le(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), ie)
                    );
                }
                function ce(e, t, u = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, a.useEffect)(() => r, [r]);
                    const s = (null != u ? u : []).concat([t]);
                    return [
                        (0, a.useCallback)((u) => {
                            (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, s),
                        r,
                    ];
                }
                function de(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                var _e = u(7030);
                let Ee;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Ee || (Ee = {}));
                const me = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Ae = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, u) => {
                            const n = t(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : V(r, a, u);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? me : c,
                                _ = (0, a.useRef)(null),
                                E = (0, a.useRef)(null),
                                m = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        n = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        r = (e, ...u) => {
                                            for (
                                                var n,
                                                    r = (function (e, t) {
                                                        var u =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (u) return (u = u.call(e)).next.bind(u);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (u = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return de(e, t);
                                                                    var u = {}.toString.call(e).slice(8, -1);
                                                                    return (
                                                                        'Object' === u &&
                                                                            e.constructor &&
                                                                            (u = e.constructor.name),
                                                                        'Map' === u || 'Set' === u
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === u ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    u,
                                                                                )
                                                                              ? de(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            u && (e = u);
                                                            var n = 0;
                                                            return function () {
                                                                return n >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[n++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(t(e).values());
                                                !(n = r()).done;

                                            )
                                                (0, n.value)(...u);
                                        };
                                    return (0, a.useMemo)(() => ({ on: u, off: n, trigger: r }), []);
                                })(),
                                A = (function (e, t, u) {
                                    const n = (0, a.useMemo)(
                                        () =>
                                            (function (e, t, u, n) {
                                                let r,
                                                    a = !1,
                                                    s = 0;
                                                function o() {
                                                    r && clearTimeout(r);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function d() {
                                                        (s = Date.now()), u.apply(l, i);
                                                    }
                                                    a ||
                                                        (n && !r && d(),
                                                        o(),
                                                        void 0 === n && c > e
                                                            ? d()
                                                            : !0 !== t &&
                                                              (r = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                                                    (i.cancel = function () {
                                                        o(), (a = !0);
                                                    }),
                                                    i
                                                );
                                            })(u, e),
                                        t,
                                    );
                                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                                })(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, _e.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (u(t, e), m.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                p = g[0],
                                f = g[1],
                                h = (0, a.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = p.scrollPosition.get(),
                                            a = (null != (n = p.scrollPosition.goal) ? n : 0) - r;
                                        return o(e, t * u + a + r);
                                    },
                                    [p.scrollPosition],
                                ),
                                F = (0, a.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = _.current;
                                        n &&
                                            f.start({
                                                scrollPosition: o(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: d.animationConfig,
                                                from: { scrollPosition: o(n, p.scrollPosition.get()) },
                                            });
                                    },
                                    [f, d.animationConfig, p.scrollPosition],
                                ),
                                B = (0, a.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            u = E.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, d.step),
                                            a = h(t, e, n);
                                        F(a);
                                    },
                                    [F, h, d.step],
                                ),
                                v = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && B(n(e)),
                                            _.current && m.trigger('mouseWheel', e, p.scrollPosition, t(_.current));
                                    },
                                    [p.scrollPosition, B, m],
                                ),
                                D = ((e, t = []) => {
                                    const u = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        j(() => {
                                            const e = _.current;
                                            e &&
                                                (F(o(e, p.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [F, p.scrollPosition.goal],
                                ),
                                b = le(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = o(e, p.scrollPosition.goal);
                                    t !== p.scrollPosition.goal && F(t, { immediate: !0 }),
                                        m.trigger('recalculateContent');
                                });
                            return (
                                (0, a.useEffect)(
                                    () => (
                                        window.addEventListener('resize', D),
                                        () => {
                                            window.removeEventListener('resize', D);
                                        }
                                    ),
                                    [D],
                                ),
                                (0, a.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (E.current ? r(E.current) : void 0),
                                        getContainerSize: () => (_.current ? e(_.current) : void 0),
                                        getBounds: () =>
                                            _.current
                                                ? t(_.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: d.step.clampedArrowStepTimeout,
                                        clampPosition: o,
                                        handleMouseWheel: v,
                                        applyScroll: F,
                                        applyStepTo: B,
                                        contentRef: _,
                                        wrapperRef: E,
                                        scrollPosition: f,
                                        animationScroll: p,
                                        recalculateContent: b,
                                        events: { on: m.on, off: m.off },
                                    }),
                                    [p.scrollPosition, F, B, m.off, m.on, b, v, f, d.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    ge = Ae({
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
                        getDirection: (e) => (e.deltaY > 1 ? Ee.Next : Ee.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    pe = 'HorizontalBar_base__nonActive_82',
                    fe = 'disable',
                    he = { pending: !1, offset: 0 },
                    Fe = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Be = () => {},
                    ve = (e, t) => Math.max(20, e.offsetWidth * t),
                    De = (0, a.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Fe, onDrag: n = Be }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            E = (0, a.useState)(he),
                            m = E[0],
                            A = E[1],
                            g = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            p = () => {
                                const t = c.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    i = V(0, 1, a / (r - n)),
                                    _ = (t.offsetWidth - ve(t, s)) * i;
                                (u.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return o.current.classList.add(fe), void l.current.classList.remove(fe);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(fe), void l.current.classList.add(fe);
                                            var t, u;
                                            o.current.classList.remove(fe), l.current.classList.remove(fe);
                                        }
                                    })(_);
                            },
                            f = le(() => {
                                (() => {
                                    const t = d.current,
                                        u = c.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && t && n && u)) return;
                                    const s = Math.min(1, n / a);
                                    (t.style.width = `${ve(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(pe) : r.current.classList.remove(pe));
                                })(),
                                    p();
                            });
                        (0, a.useEffect)(() => j(f)),
                            (0, a.useEffect)(
                                () =>
                                    j(() => {
                                        const t = () => {
                                            p();
                                        };
                                        let u = Be;
                                        const n = () => {
                                            u(), (u = j(f));
                                        };
                                        return (
                                            e.events.on('recalculateContent', f),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', f),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!m.pending) return;
                                const t = i.O.client.events.mouse.move(([t, u]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!a || !s) return;
                                        const o = c.current,
                                            i = d.current;
                                        if (!o || !i) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - m.offset - o.getBoundingClientRect().x,
                                            _ = (l / o.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: _ });
                                    }),
                                    u = i.O.client.events.mouse.up(() => {
                                        t(), g(he);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, m.offset, m.pending, n, g]);
                        const h = ce((t) => e.applyStepTo(t), _, [e]),
                            F = h[0],
                            v = h[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const D = (e) => {
                            e.target.classList.contains(fe) || H('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: B()('HorizontalBar_base_49', t.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: B()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(fe) || 0 !== e.button || (H('play'), F(Ee.Next));
                                },
                                onMouseUp: v,
                                ref: o,
                                onMouseEnter: D,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: B()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        n &&
                                            0 === t.button &&
                                            (H('play'),
                                            t.target === n
                                                ? g({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const n = d.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const a = u(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                                  })(t.screenX > n.getBoundingClientRect().x ? Ee.Prev : Ee.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                s().createElement('div', { ref: d, className: B()('HorizontalBar_thumb_fd', t.thumb) }),
                                s().createElement('div', { className: B()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            s().createElement('div', {
                                className: B()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(fe) || 0 !== e.button || (H('play'), F(Ee.Prev));
                                },
                                onMouseUp: v,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    be = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ce = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: B()(be.base, e.base) });
                            }, [n]),
                            _ = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: B()(be.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(be.defaultScrollArea, r) },
                                s().createElement(we, { className: i, api: _, classNames: o }, e),
                            ),
                            s().createElement(De, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    we = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, a.useEffect)(() => j(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(be.base, t) },
                            s().createElement(
                                'div',
                                {
                                    className: B()(be.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: B()(be.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (we.Bar = De), (we.Default = Ce);
                const ye = Ae({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ee.Next : Ee.Prev),
                    }),
                    Te = 'VerticalBar_base__nonActive_42',
                    Se = 'disable',
                    xe = () => {},
                    Re = { pending: !1, offset: 0 },
                    Pe = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ke = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Le = (e, t) => Math.max(20, e.offsetHeight * t),
                    Ne = (0, a.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Pe, onDrag: n = xe }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            E = (0, a.useState)(Re),
                            m = E[0],
                            A = E[1],
                            g = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            p = le(() => {
                                const t = d.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && t && u)) return;
                                const s = Math.min(1, n / a);
                                return (
                                    (t.style.height = `${Le(u, s)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(Te) : r.current.classList.remove(Te)),
                                    s
                                );
                            }),
                            f = le(() => {
                                const t = c.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    i = V(0, 1, a / (r - n)),
                                    _ = (t.offsetHeight - Le(t, s)) * i;
                                (u.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return o.current.classList.add(Se), void l.current.classList.remove(Se);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(Se), void l.current.classList.add(Se);
                                            var t, u;
                                            o.current.classList.remove(Se), l.current.classList.remove(Se);
                                        }
                                    })(_);
                            }),
                            h = le(() => {
                                ke(e, () => {
                                    p(), f();
                                });
                            });
                        (0, a.useEffect)(() => j(h)),
                            (0, a.useEffect)(() => {
                                const t = () => {
                                    ke(e, () => {
                                        f();
                                    });
                                };
                                let u = xe;
                                const n = () => {
                                    u(), (u = j(h));
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
                            (0, a.useEffect)(() => {
                                if (!m.pending) return;
                                const t = i.O.client.events.mouse.up(() => {
                                        g(Re);
                                    }),
                                    u = i.O.client.events.mouse.move(([t]) => {
                                        ke(e, (u) => {
                                            const r = c.current,
                                                a = d.current,
                                                s = e.getContainerSize();
                                            if (!r || !a || !s) return;
                                            const o = t.screenY - m.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, m.offset, m.pending, n, g]);
                        const F = ce((t) => e.applyStepTo(t), _, [e]),
                            v = F[0],
                            D = F[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const b = (e) => {
                            e.target.classList.contains(Se) || H('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: B()('VerticalBar_base_f3', t.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: B()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Se) || 0 !== e.button || (H('play'), v(Ee.Next));
                                },
                                ref: o,
                                onMouseEnter: b,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: B()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        var r;
                                        n &&
                                            0 === t.button &&
                                            (H('play'),
                                            t.target === n
                                                ? g({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y })
                                                : ((r = t.screenY > n.getBoundingClientRect().y ? Ee.Prev : Ee.Next),
                                                  d.current &&
                                                      ke(e, (t) => {
                                                          if (!t) return;
                                                          const n = u(e),
                                                              a = e.clampPosition(t, t.scrollTop + n * r);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: b,
                                },
                                s().createElement('div', { ref: d, className: B()('VerticalBar_thumb_32', t.thumb) }),
                                s().createElement('div', { className: B()('VerticalBar_rail_43', t.rail) }),
                            ),
                            s().createElement('div', {
                                className: B()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Se) || 0 !== e.button || (H('play'), v(Ee.Prev));
                                },
                                onMouseUp: D,
                                ref: l,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    Oe = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Me = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: B()(Oe.base, e.base) });
                            }, [n]),
                            _ = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: B()(Oe.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Oe.area, r) },
                                s().createElement(Ie, { className: o, classNames: i, api: _ }, e),
                            ),
                            s().createElement(Ne, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Ie = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, a.useEffect)(() => j(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(Oe.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Oe.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                Ie.Default = Me;
                const He = { Vertical: r, Horizontal: n },
                    Ue = { type: 'idle' };
                function We(e, t) {
                    const u = e.contentRef,
                        n = e.wrapperRef,
                        r = e.scrollPosition,
                        s = e.clampPosition,
                        o = e.animationScroll,
                        l = e.events,
                        c = (0, a.useState)(Ue),
                        d = c[0],
                        _ = c[1],
                        E = (function () {
                            const e = (0, a.useRef)(0);
                            return (
                                ((e) => {
                                    (0, a.useEffect)(() => e, []);
                                })(() => {
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
                        })(),
                        m = le(() => {
                            E.run(() => {
                                const t = e.contentRef.current,
                                    u = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                t &&
                                    u &&
                                    n &&
                                    (t.style.cursor = n <= u ? 'auto' : 'dragging' === d.type ? 'move' : 'grab');
                            });
                        });
                    var A, g;
                    return (
                        (0, a.useEffect)(() => {
                            m();
                        }, [d.type, m]),
                        (A = () => {
                            m();
                        }),
                        (g = []),
                        (0, a.useEffect)(
                            () => (window.addEventListener('resize', A), () => window.removeEventListener('resize', A)),
                            g,
                        ),
                        (0, a.useEffect)(() => {
                            if ('dragging' !== d.type) return;
                            const e = i.O.client.events.mouse.move(([e, a]) => {
                                    const i = u.current,
                                        l = n.current;
                                    if (!i || !l) return;
                                    if ('inside' === a && e.clientX < 0) return;
                                    const c = 'inside' === a ? e.clientX : e.clientX - l.offsetLeft,
                                        _ = d.positionFrom - c,
                                        E = d.previousScrollPosition + _;
                                    r.start(
                                        Object.assign(
                                            {
                                                scrollPosition: s(i, E),
                                                from: { scrollPosition: o.scrollPosition.get() },
                                            },
                                            t && { config: t },
                                        ),
                                    );
                                }),
                                a = i.O.client.events.mouse.up(function () {
                                    _({ type: 'scrollingToEnd' });
                                });
                            return () => {
                                e(), a();
                            };
                        }, [o.scrollPosition, s, u, d, r, n, t]),
                        (0, a.useEffect)(() => {
                            if ('scrollingToEnd' !== d.type) return;
                            const e = () => {
                                _(Ue);
                            };
                            return o.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e);
                        }, [o.scrollPosition, d.type, l]),
                        (0, a.useEffect)(() => {
                            const e = u.current;
                            if (!e) return;
                            const t = (e) => {
                                _({
                                    type: 'dragging',
                                    positionFrom: e.screenX,
                                    previousScrollPosition: o.scrollPosition.get(),
                                });
                            };
                            return e.addEventListener('mousedown', t), () => e.removeEventListener('mousedown', t);
                        }, [o.scrollPosition, u]),
                        d
                    );
                }
                const Ge = function (e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                };
                function $e(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                var ze = u(3149),
                    Ve = u(4892);
                const je = ({ text: e, type: t, shadow: u = !1, grunge: n = !1, className: r }) =>
                    s().createElement(
                        'div',
                        { className: B()(ze.Z.base, ze.Z[`base__${t}`], r) },
                        s().createElement(
                            _e.animated.div,
                            { className: B()(ze.Z.layer0, u && ze.Z.layer0__shadow) },
                            e,
                        ),
                        t === Ve.y.Heading &&
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(_e.animated.div, { className: ze.Z.layer1 }, e),
                                s().createElement(_e.animated.div, { className: ze.Z.layer2 }, e),
                            ),
                        s().createElement(_e.animated.div, { className: ze.Z.layer3 }, e),
                        n && s().createElement(_e.animated.div, { className: ze.Z.layer4 }, e),
                    );
                let Ze, qe, Ye, Ke, Xe, Qe, Je, et;
                var tt;
                !(function (e) {
                    (e.Items = 'items'),
                        (e.Equipment = 'equipment'),
                        (e.Xp = 'xp'),
                        (e.XpFactor = 'xpFactor'),
                        (e.Blueprints = 'blueprints'),
                        (e.BlueprintsAny = 'blueprintsAny'),
                        (e.Goodies = 'goodies'),
                        (e.Berths = 'berths'),
                        (e.Slots = 'slots'),
                        (e.Tokens = 'tokens'),
                        (e.CrewSkins = 'crewSkins'),
                        (e.CrewBooks = 'crewBooks'),
                        (e.Customizations = 'customizations'),
                        (e.CreditsFactor = 'creditsFactor'),
                        (e.Tankman = 'tankman'),
                        (e.Tankwoman = 'tankwoman'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin');
                })(Ze || (Ze = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin');
                    })(qe || (qe = {})),
                    (function (e) {
                        (e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48');
                    })(Ye || (Ye = {})),
                    ((tt = Ke || (Ke = {})).MULTI = 'multi'),
                    (tt.CURRENCY = 'currency'),
                    (tt.PREMIUM_PLUS = 'premium_plus'),
                    (tt.NUMBER = 'number'),
                    (tt.STRING = 'string'),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(Xe || (Xe = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Qe || (Qe = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(Je || (Je = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(et || (et = {}));
                class ut extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? ee.B3.GOLD : ee.B3.INTEGRAL;
                        const t = ee.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                ut.defaultProps = { format: 'integral' };
                const nt = [
                        Ze.Items,
                        Ze.Equipment,
                        Ze.Xp,
                        Ze.XpFactor,
                        Ze.Blueprints,
                        Ze.BlueprintsAny,
                        Ze.Goodies,
                        Ze.Berths,
                        Ze.Slots,
                        Ze.Tokens,
                        Ze.CrewSkins,
                        Ze.CrewBooks,
                        Ze.Customizations,
                        Ze.CreditsFactor,
                        Ze.TankmenXp,
                        Ze.TankmenXpFactor,
                        Ze.FreeXpFactor,
                        Ze.BattleToken,
                        Ze.PremiumUniversal,
                        Ze.NaturalCover,
                        Ze.BpCoin,
                        Ze.BattlePassSelectToken,
                        Ze.BattlaPassFinalAchievement,
                        Ze.BattleBadge,
                        Ze.BonusX5,
                        Ze.CrewBonusX3,
                        Ze.NewYearInvoice,
                        Ze.EpicSelectToken,
                        Ze.Comp7TokenWeeklyReward,
                        Ze.DeluxeGift,
                        Ze.BattleBoosterGift,
                        Ze.OptionalDevice,
                    ],
                    rt = [Ze.Gold, Ze.Credits, Ze.Crystal, Ze.FreeXp],
                    at = [Ze.BattlePassPoints, Ze.EquipCoin],
                    st = [Ze.PremiumPlus, Ze.Premium],
                    ot = (e) =>
                        nt.includes(e)
                            ? Ke.MULTI
                            : rt.includes(e)
                              ? Ke.CURRENCY
                              : at.includes(e)
                                ? Ke.NUMBER
                                : st.includes(e)
                                  ? Ke.PREMIUM_PLUS
                                  : Ke.STRING,
                    it = ['engravings', 'backgrounds'],
                    lt = ['engraving', 'background'],
                    ct = [Ye.Small, Ye.Big];
                var dt = u(3415);
                const _t = {
                        base: 'Reward_base_ea',
                        base__s48x48: 'Reward_base__s48x48_46',
                        base__small: 'Reward_base__small_c0',
                        base__s80x80: 'Reward_base__s80x80_ce',
                        base__big: 'Reward_base__big_e5',
                        base__s128x100: 'Reward_base__s128x100_c3',
                        base__s180x135: 'Reward_base__s180x135_7c',
                        base__s232x174: 'Reward_base__s232x174_67',
                        base__s296x222: 'Reward_base__s296x222_78',
                        base__s400x300: 'Reward_base__s400x300_07',
                        base__s600x450: 'Reward_base__s600x450_f8',
                        tooltipWrapper: 'Reward_tooltipWrapper_b5',
                        icon: 'Reward_icon_df',
                        overlay: 'Reward_overlay_68',
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        title: 'Reward_title_36',
                        timer: 'Reward_timer_d3',
                    },
                    Et = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: n = Ye.Big,
                        special: r,
                        value: a,
                        valueType: o,
                        title: i,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const m = ((e, t) => {
                                if (void 0 === t || !ct.includes(e)) return null;
                                switch (t) {
                                    case Xe.BATTLE_BOOSTER:
                                    case Xe.BATTLE_BOOSTER_REPLACE:
                                        return Qe.BATTLE_BOOSTER;
                                }
                            })(n, r),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Xe.BATTLE_BOOSTER:
                                        return Je.BATTLE_BOOSTER;
                                    case Xe.BATTLE_BOOSTER_REPLACE:
                                        return Je.BATTLE_BOOSTER_REPLACE;
                                    case Xe.BUILT_IN_EQUIPMENT:
                                        return Je.BUILT_IN_EQUIPMENT;
                                    case Xe.EQUIPMENT_PLUS:
                                        return Je.EQUIPMENT_PLUS;
                                    case Xe.EQUIPMENT_TROPHY_BASIC:
                                        return Je.EQUIPMENT_TROPHY_BASIC;
                                    case Xe.EQUIPMENT_TROPHY_UPGRADED:
                                        return Je.EQUIPMENT_TROPHY_UPGRADED;
                                    case Xe.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Je.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Xe.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Je.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Xe.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Je.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Xe.PROGRESSION_STYLE_UPGRADED_1:
                                        return Je.PROGRESSION_STYLE_UPGRADED_1;
                                    case Xe.PROGRESSION_STYLE_UPGRADED_2:
                                        return Je.PROGRESSION_STYLE_UPGRADED_2;
                                    case Xe.PROGRESSION_STYLE_UPGRADED_3:
                                        return Je.PROGRESSION_STYLE_UPGRADED_3;
                                    case Xe.PROGRESSION_STYLE_UPGRADED_4:
                                        return Je.PROGRESSION_STYLE_UPGRADED_4;
                                    case Xe.PROGRESSION_STYLE_UPGRADED_5:
                                        return Je.PROGRESSION_STYLE_UPGRADED_5;
                                    case Xe.PROGRESSION_STYLE_UPGRADED_6:
                                        return Je.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(r),
                            g = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case Ke.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case Ke.CURRENCY:
                                    case Ke.NUMBER:
                                        return s().createElement(ut, { format: 'integral', value: Number(e) });
                                    case Ke.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(a, o);
                        return s().createElement(
                            'div',
                            { className: B()(_t.base, _t[`base__${n}`], c), style: l },
                            s().createElement(
                                dt.l,
                                { tooltipArgs: _, className: _t.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: B()(_t.image, null == d ? void 0 : d.image) },
                                        m &&
                                            s().createElement('div', {
                                                className: B()(_t.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            s().createElement('div', {
                                                className: B()(_t.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        A &&
                                            s().createElement('div', {
                                                className: B()(_t.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    _t.info,
                                                    _t[`info__${e}`],
                                                    o === Ke.MULTI && _t.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            g,
                                        ),
                                    i && s().createElement('div', { className: _t.title }, i),
                                ),
                            ),
                            u &&
                                s().createElement(
                                    dt.l,
                                    { tooltipArgs: E },
                                    s().createElement('div', {
                                        className: B()(_t.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var mt = u(2056);
                let At;
                !(function (e) {
                    (e.None = 'none'), (e.InProgress = 'inProgress'), (e.Recive = 'recive'), (e.Open = 'open');
                })(At || (At = {}));
                const gt = 'hw_bonus_crew_100',
                    pt = (e, t = Ye.Small) => {
                        switch (e.name) {
                            case 'hw_artefact_key':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.keys`;
                            case 'vehicles':
                            case 'items':
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                            case 'hw_artefact':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.video`;
                            case gt:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.bonus_crew`;
                            case 'tokens':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                        }
                        return ((e, t = Ye.Small) => {
                            const u = e.name,
                                n = e.type,
                                r = e.value,
                                a = e.icon,
                                s = e.item,
                                o = e.dogTagType,
                                i = ((e) => {
                                    switch (e) {
                                        case Ye.S600x450:
                                            return 'c_600x450';
                                        case Ye.S400x300:
                                            return 'c_400x300';
                                        case Ye.S296x222:
                                            return 'c_296x222';
                                        case Ye.S232x174:
                                            return 'c_232x174';
                                        case Ye.Big:
                                            return 'c_80x80';
                                        case Ye.Small:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(t);
                            switch (u) {
                                case 'basic':
                                case 'plus':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${r}`;
                                case 'premium':
                                case 'premium_plus':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${r}`;
                                case 'items':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                                case 'blueprints':
                                case 'blueprintsAny':
                                case 'finalBlueprints':
                                    return `R.images.gui.maps.icons.blueprints.fragment.${t}.${a}`;
                                case 'tokens':
                                case 'lootBox':
                                case 'battleToken':
                                    return 'big' === t
                                        ? e.iconBig.replace('..', 'img://gui')
                                        : e.iconSmall.replace('..', 'img://gui');
                                case 'customizations':
                                case 'styleProgress':
                                case 'crewSkins':
                                case 'goodies':
                                case 'groups':
                                case 'tmanToken':
                                case 'battlePassSelectToken':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                                case 'crewBooks':
                                    return `R.images.gui.maps.icons.crewBooks.books.${t}.${a}`;
                                case 'dogTagComponents':
                                    return ((e, t, u) => {
                                        const n = it[e];
                                        if (n) {
                                            const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                                a = r.$dyn(u);
                                            return a ? `${a}` : `${r.$dyn(lt[e])}`;
                                        }
                                        return (
                                            console.error(
                                                'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                            ),
                                            ''
                                        );
                                    })(o, t, a);
                                case 'dossier_badge':
                                    return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${a}`;
                                case 'dossier_achievement':
                                    return `R.images.gui.maps.icons.achievement.${i}.${a}`;
                                case 'xp':
                                case 'xpFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                                case 'creditsFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                                case 'tankmenXPFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                                case 'dailyXPFactor':
                                case 'freeXPFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                                case 'premiumTank':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                                case 'styleProgressToken':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                                case 'collectionItem':
                                    return `R.images.gui.maps.icons.collectionItems.${i}.${a}`;
                                default:
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                            }
                        })(e, t);
                    },
                    ft = (e) =>
                        ot(e.name) === Ke.MULTI && e.value.startsWith('x') ? e.value.replace('x', '') : e.value,
                    ht = (e) =>
                        e.name === gt
                            ? {
                                  contentId:
                                      R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                          'resId',
                                      ),
                                  header: R.strings.halloween_tooltips.hw_bonus_crew_100.header(),
                                  body: R.strings.halloween_tooltips.hw_bonus_crew_100.body(),
                              }
                            : ((e, t, u) => {
                                  const n = t && { contentId: t };
                                  return Object.assign(
                                      {
                                          args: e,
                                          isEnabled: Boolean((e && e.tooltipId) || t),
                                          ignoreMouseClick: !0,
                                          ignoreShowDelay: !t,
                                      },
                                      n,
                                      void 0,
                                  );
                              })({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                    Ft = {
                        base: 'ArtefactItem_base_5d',
                        index: 'ArtefactItem_index_c0',
                        base__open: 'ArtefactItem_base__open_bb',
                        base__hover: 'ArtefactItem_base__hover_c3',
                        indexShadow: 'ArtefactItem_indexShadow_9d',
                        kingReward: 'ArtefactItem_kingReward_45',
                        icon: 'ArtefactItem_icon_c9',
                        receive: 'ArtefactItem_receive_59',
                        open: 'ArtefactItem_open_c3',
                        info: 'ArtefactItem_info_88',
                        base__completed: 'ArtefactItem_base__completed_e4',
                        infoMask: 'ArtefactItem_infoMask_2e',
                        reward: 'ArtefactItem_reward_1f',
                        overlay: 'ArtefactItem_overlay_ca',
                        base__recive: 'ArtefactItem_base__recive_dc',
                    },
                    Bt = 'final',
                    vt = ({
                        id: e,
                        index: t,
                        state: u,
                        rewards: n,
                        types: r,
                        className: o,
                        completed: l,
                        canceledAnim: c,
                        onClick: d,
                    }) => {
                        const _ = (0, a.useState)(!1),
                            E = _[0],
                            m = _[1],
                            A = u === At.Open,
                            g = (function (e, t) {
                                for (let u = 0; u < e.length; u++) if (Ge(e, u) === t) return !0;
                                return !1;
                            })(r, Bt),
                            p = t <= 9 ? `0${t}` : t,
                            f = g && A ? Bt : t,
                            h = (0, _e.useSpring)(() => ({ x: -20, opacity: 0 })),
                            F = h[0],
                            v = h[1];
                        return (
                            (0, a.useEffect)(() => {
                                v.start({
                                    to: { x: 0, opacity: 1 },
                                    delay: c ? 0 : 120 * t,
                                    config: { tension: 75, friction: 8 },
                                    immediate: c,
                                });
                            }, [v, c, t]),
                            s().createElement(
                                _e.animated.div,
                                {
                                    className: B()(
                                        Ft.base,
                                        Ft[`base__${u}`],
                                        E && Ft.base__hover,
                                        l && Ft.base__completed,
                                        o,
                                    ),
                                    style: F,
                                },
                                s().createElement(
                                    'div',
                                    { className: Ft.index },
                                    !g && (A ? p : s().createElement(je, { type: Ve.y.LightRed, text: p })),
                                    g && s().createElement('div', { className: Ft.kingReward }),
                                    s().createElement('div', { className: Ft.indexShadow }),
                                ),
                                s().createElement(
                                    'div',
                                    {
                                        className: Ft.info,
                                        onMouseEnter: () => {
                                            i.O.sound.play.highlight(), m(!0);
                                        },
                                        onMouseLeave: () => m(!1),
                                    },
                                    s().createElement('div', { className: Ft.infoMask }),
                                    s().createElement(
                                        mt.u,
                                        {
                                            contentId: R.views.halloween.lobby.tooltips.EventMissionTooltip('resId'),
                                            args: { artefactID: e },
                                        },
                                        s().createElement(
                                            'div',
                                            {
                                                className: Ft.icon,
                                                style: {
                                                    backgroundImage: `url('R.images.halloween.gui.maps.icons.rewardPath.artefacts.bg_${f}')`,
                                                },
                                                onMouseEnter: i.O.sound.play.highlight,
                                                onClick: () => {
                                                    i.O.sound.play.click(), d(e);
                                                },
                                            },
                                            s().createElement('div', { className: Ft.overlay }),
                                            l && s().createElement('div', { className: Ft.receive }),
                                        ),
                                    ),
                                    A && s().createElement('div', { className: Ft.open }),
                                    $e(n, (t, u) =>
                                        s().createElement(Et, {
                                            key: `${t.name}${e}${u}`,
                                            name: t.name,
                                            value: ft(t),
                                            className: Ft.reward,
                                            size: Ye.Small,
                                            special: t.overlayType,
                                            image: pt(t, Ye.Small),
                                            valueType: ot(t.name),
                                            tooltipArgs: ht(t),
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    Dt = {
                        base: 'Artefacts_base_c8',
                        scroll: 'Artefacts_scroll_9f',
                        scrollContent__noScroll: 'Artefacts_scrollContent__noScroll_3f',
                        atrefacts: 'Artefacts_atrefacts_fe',
                        scrollBarPosition: 'Artefacts_scrollBarPosition_b5',
                        artefact: 'Artefacts_artefact_bc',
                        devider: 'Artefacts_devider_6f',
                        fadeIn: 'Artefacts_fadeIn_f5',
                        devider__cancel: 'Artefacts_devider__cancel_ba',
                        none: 'Artefacts_none_e4',
                    };
                function bt() {
                    return (
                        (bt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        bt.apply(null, arguments)
                    );
                }
                const Ct = (0, ne.Pi)(({ canceledAnim: e, className: t }) => {
                    const u = oe(),
                        n = u.model,
                        r = u.controls,
                        o = (0, a.useRef)(null),
                        i = (0, a.useRef)(null),
                        l = (0, a.useState)(!1),
                        c = l[0],
                        d = l[1],
                        _ = ge();
                    We(_);
                    const E = n.artefacts.get(),
                        m = (0, a.useCallback)(() => {
                            if (i.current && o.current) {
                                const e = o.current.offsetWidth < i.current.offsetWidth;
                                d(e), (i.current.style.cursor = e ? '' : 'auto');
                            }
                        }, []);
                    var A, g;
                    return (
                        (0, a.useEffect)(
                            () =>
                                j(() => {
                                    m();
                                }),
                            [m],
                        ),
                        (A = () => {
                            m();
                        }),
                        (g = []),
                        (0, a.useEffect)(() => {
                            let e = () => {};
                            const t = () => {
                                e(), (e = j(A));
                            };
                            return (
                                window.addEventListener('resize', t),
                                () => {
                                    e(), window.removeEventListener('resize', t);
                                }
                            );
                        }, g),
                        s().createElement(
                            'div',
                            { className: B()(Dt.base, t) },
                            s().createElement(
                                'div',
                                { className: Dt.scroll, ref: o },
                                s().createElement(
                                    He.Horizontal.Area.Default,
                                    {
                                        api: _,
                                        classNames: {
                                            wrapper: B()(Dt.scrollContent, !c && Dt.scrollContent__noScroll),
                                        },
                                        barClassNames: { base: Dt.scrollBarPosition },
                                    },
                                    s().createElement(
                                        'div',
                                        { className: Dt.atrefacts, ref: i },
                                        $e(E, (t, u) =>
                                            s().createElement(
                                                'div',
                                                { key: t.id, className: Dt.artefact },
                                                s().createElement(
                                                    vt,
                                                    bt({}, t, {
                                                        completed: t.id === n.root.get().selectedArtefactID,
                                                        onClick: r.goToMission,
                                                        canceledAnim: e,
                                                    }),
                                                ),
                                                u < E.length - 1 &&
                                                    s().createElement('div', {
                                                        className: B()(Dt.devider, e && Dt.devider__cancel),
                                                    }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        )
                    );
                });
                var wt = u(3618);
                const yt = s().memo(function ({ isCompleted: e, progress: t, className: u }) {
                        return s().createElement(
                            'div',
                            { className: B()('Header_base_8a', u) },
                            s().createElement(je, {
                                className: 'Header_title_15',
                                type: Ve.y.Heading,
                                text: R.strings.halloween_lobby.rewardPath.title(),
                                shadow: !0,
                            }),
                            s().createElement(wt.w, {
                                classMix: 'Header_subTitle_86',
                                text: e
                                    ? R.strings.halloween_lobby.rewardPath.completed()
                                    : R.strings.halloween_lobby.rewardPath.description(),
                                binding: {
                                    count: s().createElement(je, {
                                        className: 'Header_count_0d',
                                        type: Ve.y.Red,
                                        text: t,
                                    }),
                                },
                            }),
                        );
                    }),
                    Tt = {
                        base: 'InfoButton_base_49',
                        icon: 'InfoButton_icon_5d',
                        icon__info: 'InfoButton_icon__info_e1',
                        icon__intro: 'InfoButton_icon__intro_48',
                        caption: 'InfoButton_caption_ad',
                    };
                let St;
                !(function (e) {
                    (e.Info = 'info'), (e.Intro = 'intro');
                })(St || (St = {}));
                const xt = s().memo(function ({ caption: e, type: t, onClick: u, className: n }) {
                        return s().createElement(
                            'div',
                            {
                                className: B()(Tt.base, Tt[`base__${t}`], n),
                                onClick: () => {
                                    i.O.sound.play.click(), u();
                                },
                                onMouseEnter: i.O.sound.play.highlight,
                            },
                            s().createElement('div', { className: B()(Tt.icon, Tt[`icon__${t}`]) }),
                            s().createElement('div', { className: Tt.caption }, e),
                        );
                    }),
                    Rt =
                        (e, t) =>
                        (...u) => {
                            if (e(...u)) return t(...u);
                        };
                let Pt;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Pt || (Pt = {}));
                const kt = {
                        base: 'IconButton_base_d0',
                        base__hovered: 'IconButton_base__hovered_26',
                        base__disabled: 'IconButton_base__disabled_7d',
                        icon: 'IconButton_icon_26',
                        icon__preview: 'IconButton_icon__preview_58',
                        icon__compare: 'IconButton_icon__compare_4d',
                        icon__small: 'IconButton_icon__small_b8',
                        icon__normal: 'IconButton_icon__normal_d3',
                        base__mouseDown: 'IconButton_base__mouseDown_06',
                        label: 'IconButton_label_73',
                        label__small: 'IconButton_label__small_3a',
                        label__normal: 'IconButton_label__normal_ef',
                        base__visibleLabel: 'IconButton_base__visibleLabel_3a',
                    },
                    Lt = [
                        'type',
                        'children',
                        'className',
                        'classNames',
                        'disabled',
                        'isVisibleLabel',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function Nt() {
                    return (
                        (Nt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        Nt.apply(null, arguments)
                    );
                }
                const Ot = (e) => {
                    let t = e.type,
                        u = e.children,
                        n = e.className,
                        r = e.classNames,
                        o = e.disabled,
                        i = void 0 !== o && o,
                        l = e.isVisibleLabel,
                        c = void 0 !== l && l,
                        d = e.soundHover,
                        _ = void 0 === d ? R.sounds.highlight() : d,
                        E = e.soundClick,
                        m = void 0 === E ? R.sounds.play() : E,
                        A = e.size,
                        g = void 0 === A ? 'normal' : A,
                        p = e.onClick,
                        f = e.onMouseEnter,
                        h = e.onMouseLeave,
                        F = e.onMouseDown,
                        v = e.onMouseUp,
                        D = e.onFocus,
                        b = e.onBlur,
                        C = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, Lt);
                    const w = (0, a.useState)(!1),
                        y = w[0],
                        T = w[1],
                        S = (0, a.useState)(!1),
                        x = S[0],
                        P = S[1],
                        k = (0, a.useRef)(null),
                        L = () => !1 === i,
                        N = (e) => L() && ((e) => e.button === Pt.LEFT)(e),
                        O = Rt(L, (e) => {
                            null == p || p(e);
                        }),
                        M = Rt(N, (e) => {
                            T(!0), null == F || F(e), m && H(m);
                        }),
                        I = Rt(N, (e) => {
                            T(!1), null == v || v(e);
                        }),
                        U = Rt(L, (e) => {
                            P(!0), null == f || f(e), _ && H(_);
                        }),
                        W = Rt(L, (e) => {
                            null == D || D(e);
                        }),
                        G = Rt(L, (e) => {
                            null == b || b(e);
                        });
                    return s().createElement(
                        'div',
                        Nt(
                            {
                                ref: k,
                                className: B()(
                                    kt.base,
                                    i && kt.base__disabled,
                                    c && kt.base__visibleLabel,
                                    !i && y && kt.base__mouseDown,
                                    !i && x && kt.base__hovered,
                                    n,
                                ),
                                onClick: O,
                                onMouseEnter: U,
                                onMouseLeave: (e) => {
                                    P(!1), T(!1), null == h || h(e);
                                },
                                onMouseDown: M,
                                onMouseUp: I,
                                onFocus: W,
                                onBlur: G,
                            },
                            C,
                        ),
                        s().createElement('div', {
                            className: B()(kt.icon, kt[`icon__${g}`], kt[`icon__${t}`], null == r ? void 0 : r.icon),
                        }),
                        u &&
                            s().createElement(
                                'div',
                                { className: B()(kt.label, kt[`label__${g}`], null == r ? void 0 : r.label) },
                                u,
                            ),
                    );
                };
                var Mt = u(3649);
                const It = s().memo(function ({
                    className: e,
                    level: t,
                    nation: u,
                    name: n,
                    isPremium: r,
                    vehicleType: a,
                    preview: o,
                }) {
                    const i = y().mediaSize >= b.Medium;
                    return s().createElement(
                        'div',
                        { className: B()('PreviewBlock_base_d6', e) },
                        s().createElement('div', {
                            className: 'PreviewBlock_flag_a9',
                            style: { backgroundImage: `url('R.images.gui.maps.icons.flags.c_600x450.${u}')` },
                        }),
                        s().createElement('div', { className: 'PreviewBlock_flagOverlay_34' }),
                        s().createElement(Ot, {
                            className: 'PreviewBlock_previewButton_df',
                            classNames: { icon: 'PreviewBlock_previewIcon_ae' },
                            onClick: o,
                            type: 'preview',
                        }),
                        r &&
                            i &&
                            s().createElement(
                                'div',
                                { className: 'PreviewBlock_premium_3c' },
                                R.strings.halloween_lobby.rewardPath.premium(),
                            ),
                        s().createElement(
                            'div',
                            { className: 'PreviewBlock_name_db' },
                            t,
                            s().createElement('div', {
                                className: B()(
                                    'PreviewBlock_vehicleType_76',
                                    r && 'PreviewBlock_vehicleType__premium_86',
                                ),
                                style: {
                                    backgroundImage: `url('R.images.halloween.gui.maps.icons.vehicleTypes.flat.silver.c_80x80.${(0, Mt.BN)(a)}${r ? '_elite' : ''}')`,
                                },
                            }),
                            n,
                        ),
                    );
                });
                function Ht() {
                    return (
                        (Ht = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        Ht.apply(null, arguments)
                    );
                }
                const Ut = (0, ne.Pi)(() => {
                    const e = oe(),
                        t = e.model,
                        u = e.controls;
                    var n;
                    (n = u.close), ue(J.n.ESCAPE, n), (0, a.useEffect)(() => u.viewLoaded(), [u]);
                    const r = t.root.get(),
                        o = r.isCompleted,
                        l = r.progress,
                        c = (0, a.useState)(!1),
                        d = c[0],
                        _ = c[1];
                    return s().createElement(
                        'div',
                        { className: 'RewardPathViewApp_base_b3', onClick: () => _(!0) },
                        s().createElement(
                            'div',
                            { className: B()('RewardPathViewApp_bg_06', d && 'RewardPathViewApp_bg__cancel_cb') },
                            s().createElement('div', { className: 'RewardPathViewApp_tank_f0' }),
                            i.O.client.graphicsQuality.isLow()
                                ? s().createElement('div', { className: 'RewardPathViewApp_video_static_frame_ce' })
                                : s().createElement(Q, {
                                      src: R.videos.halloween.king_reward(),
                                      className: 'RewardPathViewApp_video_56',
                                      loop: !0,
                                      autoplay: !0,
                                  }),
                        ),
                        s().createElement('div', { className: 'RewardPathViewApp_vignette_3b' }),
                        s().createElement(
                            'div',
                            { className: 'RewardPathViewApp_closeBtn_72' },
                            s().createElement($, {
                                caption: R.strings.halloween_lobby.common.close(),
                                type: 'close',
                                side: 'right',
                                onClick: u.close,
                            }),
                        ),
                        s().createElement(
                            'div',
                            { className: 'RewardPathViewApp_leftButtons_c3' },
                            s().createElement(
                                z.i,
                                { body: R.strings.halloween_lobby.rewardPath.aboutTooltip() },
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement(xt, {
                                        caption: R.strings.halloween_lobby.rewardPath.about(),
                                        onClick: u.showAbout,
                                        type: St.Info,
                                    }),
                                ),
                            ),
                            s().createElement(
                                z.i,
                                { body: R.strings.halloween_lobby.rewardPath.introTooltip() },
                                s().createElement(
                                    'div',
                                    { className: 'RewardPathViewApp_intro_b8' },
                                    s().createElement(xt, {
                                        caption: R.strings.halloween_lobby.rewardPath.intro(),
                                        onClick: u.showIntro,
                                        type: St.Intro,
                                    }),
                                ),
                            ),
                        ),
                        s().createElement(re.K, { className: 'RewardPathViewApp_rightWidget_5b' }),
                        s().createElement(yt, {
                            className: 'RewardPathViewApp_header_70',
                            isCompleted: o,
                            progress: l,
                        }),
                        s().createElement(
                            It,
                            Ht(
                                {
                                    className: B()(
                                        'RewardPathViewApp_preview_e3',
                                        d && 'RewardPathViewApp_preview__cancel_52',
                                    ),
                                    preview: u.preview,
                                },
                                t.mainGiftVehicle.get(),
                            ),
                        ),
                        s().createElement(Ct, { className: 'RewardPathViewApp_artefacts_15', canceledAnim: d }),
                    );
                });
                engine.whenReady.then(() => {
                    I().render(
                        s().createElement(O, null, s().createElement(se, null, s().createElement(Ut, null))),
                        document.getElementById('root'),
                    );
                });
            },
            6131: (e, t, u) => {
                'use strict';
                u.d(t, { K: () => D });
                var n = u(6179),
                    r = u.n(n),
                    a = u(6483),
                    s = u.n(a),
                    o = u(4129),
                    i = u(7621),
                    l = u(9916),
                    c = u(7030);
                const d = (e) => e,
                    _ = (e, t) => {
                        const u = Math.floor(e);
                        return t ? l.Z5.getNumberFormat(u, l.B3.INTEGRAL) : u;
                    },
                    E = (0, n.memo)(function ({
                        renderText: e = (e) => r().createElement(c.animated.div, null, e),
                        prefix: t = '',
                        currentNumber: u,
                        previousNumber: n = 0,
                        delay: a,
                        duration: o,
                        className: i,
                        isCanceled: l,
                        isFormatted: E = !1,
                        onStart: m,
                        onRest: A,
                    }) {
                        const g = (0, c.useSpring)({
                            from: { val: n },
                            to: { val: u },
                            delay: a,
                            config: { duration: o, easing: d },
                            cancel: l,
                            reverse: l,
                            onStart: m,
                            onRest: A,
                        });
                        return r().createElement(
                            'div',
                            { className: s()('NumberAnimation_base_9f', i) },
                            t,
                            l ? e(_(u, E)) : r().createElement(c.animated.div, null, e(g.val.to((e) => _(e, E)))),
                        );
                    });
                var m = u(2056),
                    A = u(3138),
                    g = u(3403),
                    p = u(824);
                const f = (0, u(3215).q)()(
                        ({ observableModel: e }) => ({ root: e.object() }),
                        ({ externalModel: e }) => ({ click: e.createCallbackNoArgs('onClick') }),
                    ),
                    h = f[0],
                    F = f[1],
                    B = 'KeysViewApp_blink_22',
                    v = (0, g.Pi)(({ className: e }) => {
                        const t = F(),
                            u = t.model,
                            a = t.controls,
                            c = u.root.get(),
                            d = c.keys,
                            _ = c.isCompleted,
                            g = (0, n.useState)(!1),
                            f = g[0],
                            h = g[1],
                            v = (0, n.useState)(!1),
                            D = v[0],
                            b = v[1],
                            C = (0, n.useRef)(d),
                            w = d > 9999,
                            y = w
                                ? `${l.Z5.getNumberFormat(9999, l.B3.INTEGRAL)}+`
                                : l.Z5.getNumberFormat(d, l.B3.INTEGRAL);
                        return (
                            (0, n.useEffect)(() => {
                                C.current !== d && (C.current = d);
                            }, [d]),
                            (0, n.useEffect)(() => {
                                let e, t;
                                return (
                                    _ ||
                                        D ||
                                        f ||
                                        (e = setTimeout(() => {
                                            A.O.sound.play.sound(p.Ar),
                                                (t = setInterval(() => {
                                                    A.O.sound.play.sound(p.Ar);
                                                }, 25e3));
                                        }, 5e3)),
                                    () => {
                                        clearTimeout(e), clearInterval(t);
                                    }
                                );
                            }, [D, _, f]),
                            r().createElement(
                                m.u,
                                {
                                    targetId: R.views.halloween.lobby.widgets.KeysView('resId'),
                                    contentId: R.views.halloween.lobby.tooltips.KeyTooltip('resId'),
                                },
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'KeysViewApp_base_bb',
                                            f && 'KeysViewApp_base__hover_77',
                                            D && 'KeysViewApp_base__active_75',
                                            e,
                                        ),
                                        onClick: () => {
                                            _ || (A.O.sound.play.click(), a.click());
                                        },
                                        onMouseEnter: () => {
                                            _ || (A.O.sound.play.sound(p.HX), h(!0));
                                        },
                                        onMouseLeave: () => {
                                            A.O.sound.play.sound(p.RZ), h(!1), b(!1);
                                        },
                                        onMouseDown: () => {
                                            _ || b(!0);
                                        },
                                        onMouseUp: () => b(!1),
                                    },
                                    r().createElement(
                                        'div',
                                        { className: s()(B, !_ && !D && !f && 'KeysViewApp_blink__anim_f2') },
                                        r().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    B,
                                                    f
                                                        ? 'KeysViewApp_blink__hoverAnim_33'
                                                        : 'KeysViewApp_blink__unhoverAnim_3e',
                                                ),
                                            },
                                            r().createElement(
                                                'div',
                                                { className: 'KeysViewApp_count_9d' },
                                                w
                                                    ? y
                                                    : r().createElement(E, {
                                                          isFormatted: !0,
                                                          previousNumber: C.current,
                                                          currentNumber: d,
                                                      }),
                                            ),
                                            r().createElement(i._, {
                                                className: 'KeysViewApp_key_36',
                                                size: i.G.C110x110,
                                            }),
                                        ),
                                    ),
                                    !_ &&
                                        r().createElement(
                                            'div',
                                            { className: 'KeysViewApp_buttons_03' },
                                            r().createElement(o.zx, {
                                                type: o.L$.Secondary,
                                                size: o.qE.Small,
                                                caption: R.strings.halloween_lobby.keys.get(),
                                                className: 'KeysViewApp_button_83',
                                            }),
                                            r().createElement('div', { className: 'KeysViewApp_arrow_af' }),
                                        ),
                                ),
                            )
                        );
                    }),
                    D = r().memo(function (e) {
                        const t = (0, n.useMemo)(
                            () => ({ rootId: R.views.halloween.lobby.widgets.KeysView('resId') }),
                            [],
                        );
                        return r().createElement(h, { options: t }, r().createElement(v, e));
                    });
            },
            824: (e, t, u) => {
                'use strict';
                u.d(t, { Ar: () => a, HX: () => n, RZ: () => r });
                const n = 'ev_hw_hangar_ui_shop_keys_highlight_on',
                    r = 'ev_hw_hangar_ui_shop_keys_highlight_off',
                    a = 'ev_hw_hangar_ui_shop_keys_anim';
            },
            8055: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
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
            },
            9627: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
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
                };
            },
            7629: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                    word: 'renderers_word_f3',
                };
            },
            9831: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'KeyIcon_base_5a',
                    base__c28x28: 'KeyIcon_base__c28x28_d5',
                    base__c30x30: 'KeyIcon_base__c30x30_ba',
                    base__c36x36: 'KeyIcon_base__c36x36_dd',
                    base__gray: 'KeyIcon_base__gray_fc',
                    base__c44x44: 'KeyIcon_base__c44x44_bd',
                    base__c70x70: 'KeyIcon_base__c70x70_61',
                    base__c110x110: 'KeyIcon_base__c110x110_7c',
                };
            },
            3149: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'Text_base_3f',
                    base__whiteSpanish: 'Text_base__whiteSpanish_9d',
                    base__red: 'Text_base__red_f1',
                    base__currency: 'Text_base__currency_66',
                    base__heading: 'Text_base__heading_72',
                    base__lightRed: 'Text_base__lightRed_ee',
                    base__metaHeading: 'Text_base__metaHeading_73',
                    layer0: 'Text_layer0_29',
                    layer0__shadow: 'Text_layer0__shadow_c3',
                    layer1: 'Text_layer1_81',
                    layer2: 'Text_layer2_ff',
                    layer3: 'Text_layer3_47',
                    layer4: 'Text_layer4_f7',
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
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, n] = deferred[i], a = !0, s = 0; s < t.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
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
        (__webpack_require__.j = 255),
        (() => {
            var e = { 255: 0, 665: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [a, s, o] = u,
                        i = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(u); i < a.length; i++)
                        (r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(8373));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
