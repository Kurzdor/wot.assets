(() => {
    'use strict';
    var __webpack_modules__ = {
            9987: (e, t, n) => {
                n.d(t, { A: () => d });
                var i = n(6483),
                    r = n.n(i),
                    o = n(6179),
                    a = n.n(o),
                    s = n(9734);
                const l = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function c() {
                    return (
                        (c = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var i in n) ({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                  }
                                  return e;
                              }),
                        c.apply(null, arguments)
                    );
                }
                const d = (e) => {
                    let t = e.size,
                        n = e.value,
                        i = e.isEmpty,
                        o = e.fadeInAnimation,
                        d = e.hide,
                        u = e.maximumNumber,
                        _ = e.className,
                        v = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var i in e)
                                if ({}.hasOwnProperty.call(e, i)) {
                                    if (t.indexOf(i) >= 0) continue;
                                    n[i] = e[i];
                                }
                            return n;
                        })(e, l);
                    const f = i ? null : n,
                        m = 'string' == typeof f;
                    if ((f && !m && f < 0) || 0 === f) return null;
                    const b = f && !m && f > u,
                        w = r()(
                            s.Z.base,
                            s.Z[`base__${t}`],
                            o && s.Z.base__animated,
                            d && s.Z.base__hidden,
                            !f && s.Z.base__pattern,
                            i && s.Z.base__empty,
                            _,
                        );
                    return a().createElement(
                        'div',
                        c({ className: w }, v),
                        a().createElement('div', { className: s.Z.bg }),
                        a().createElement('div', { className: s.Z.pattern }),
                        a().createElement(
                            'div',
                            { className: r()(s.Z.value, m && s.Z.value__text) },
                            b ? u : f,
                            b && a().createElement('span', { className: s.Z.plus }, '+'),
                        ),
                    );
                };
                d.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            6373: (e, t, n) => {
                n.d(t, { i: () => c });
                var i = n(2056),
                    r = n(6179),
                    o = n.n(r);
                const a = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var i in n) ({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const l = R.views.common.tooltip_window.simple_tooltip_content,
                    c = (e) => {
                        let t = e.children,
                            n = e.body,
                            c = e.header,
                            d = e.note,
                            u = e.alert,
                            _ = e.args,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var i in e)
                                    if ({}.hasOwnProperty.call(e, i)) {
                                        if (t.indexOf(i) >= 0) continue;
                                        n[i] = e[i];
                                    }
                                return n;
                            })(e, a);
                        const f = (0, r.useMemo)(() => {
                            const e = Object.assign({}, _, { body: n, header: c, note: d, alert: u });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [u, n, c, d, _]);
                        return o().createElement(
                            i.u,
                            s(
                                {
                                    contentId:
                                        ((m = null == _ ? void 0 : _.hasHtmlContent),
                                        m ? l.SimpleTooltipHtmlContent('resId') : l.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: f,
                                },
                                v,
                            ),
                            t,
                        );
                        var m;
                    };
            },
            2056: (e, t, n) => {
                n.d(t, { u: () => c });
                var i = n(7902),
                    r = n(9916),
                    o = n(6179);
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
                const l = (e, t, n = {}, i = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: i,
                                },
                                n,
                            ),
                        );
                    },
                    c = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            c = e.onMouseEnter,
                            d = e.onMouseLeave,
                            u = e.onMouseDown,
                            _ = e.onClick,
                            v = e.ignoreShowDelay,
                            f = void 0 !== v && v,
                            m = e.ignoreMouseClick,
                            b = void 0 !== m && m,
                            w = e.decoratorId,
                            h = void 0 === w ? 0 : w,
                            E = e.isEnabled,
                            p = void 0 === E || E,
                            g = e.targetId,
                            y = void 0 === g ? 0 : g,
                            O = e.onShow,
                            k = e.onHide,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var i in e)
                                    if ({}.hasOwnProperty.call(e, i)) {
                                        if (t.indexOf(i) >= 0) continue;
                                        n[i] = e[i];
                                    }
                                return n;
                            })(e, a);
                        const P = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, o.useMemo)(() => y || (0, i.F)().resId, [y]),
                            R = (0, o.useCallback)(() => {
                                (P.current.isVisible && P.current.timeoutId) ||
                                    (l(n, h, { isMouseEvent: !0, on: !0, arguments: s(r) }, C),
                                    O && O(),
                                    (P.current.isVisible = !0));
                            }, [n, h, r, C, O]),
                            L = (0, o.useCallback)(() => {
                                if (P.current.isVisible || P.current.timeoutId) {
                                    const e = P.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (P.current.timeoutId = 0)),
                                        l(n, h, { on: !1 }, C),
                                        P.current.isVisible && k && k(),
                                        (P.current.isVisible = !1);
                                }
                            }, [n, h, C, k]),
                            S = (0, o.useCallback)((e) => {
                                P.current.isVisible &&
                                    ((P.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (P.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(P.current.prevTarget) && L();
                                    }, 200)));
                            }, []);
                        return (
                            (0, o.useEffect)(() => {
                                const e = P.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', S, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', S, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, o.useEffect)(() => {
                                !1 === p && L();
                            }, [p, L]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', L),
                                    () => {
                                        window.removeEventListener('mouseleave', L), L();
                                    }
                                ),
                                [L],
                            ),
                            p
                                ? (0, o.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((D = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((P.current.timeoutId = window.setTimeout(R, f ? 100 : 400)),
                                                          c && c(e),
                                                          D && D(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  L(), null == d || d(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === b && L(), null == _ || _(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === b && L(), null == u || u(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          T,
                                      ),
                                  )
                                : t
                        );
                        var D;
                    };
            },
            8246: (e, t, n) => {
                n.d(t, { U: () => a });
                var i = n(3138);
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
                    return i;
                }
                const o = (e) => (0 === e ? window : window.subViews.get(e));
                function a({ initializer: e = !0, rootId: t = 0, getRoot: n = o, context: a = 'model' } = {}) {
                    const s = new Map();
                    function l(e, t = 0) {
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
                    const c = (e) => {
                        const i = n(t),
                            r = a.split('.').reduce((e, t) => e[t], i);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, r);
                    };
                    return {
                        subscribe: (n, r) => {
                            const o = 'string' == typeof r ? `${a}.${r}` : a,
                                l = i.O.view.addModelObserver(o, t, !0);
                            return s.set(l, n), e && n(c(r)), l;
                        },
                        readByPath: c,
                        createCallback: (e, t) => {
                            const n = c(t);
                            return (...t) => {
                                n(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = c(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (
                                var e,
                                    n = (function (e, t) {
                                        var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (n) return (n = n.call(e)).next.bind(n);
                                        if (
                                            Array.isArray(e) ||
                                            (n = (function (e, t) {
                                                if (e) {
                                                    if ('string' == typeof e) return r(e, t);
                                                    var n = {}.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === n && e.constructor && (n = e.constructor.name),
                                                        'Map' === n || 'Set' === n
                                                            ? Array.from(e)
                                                            : 'Arguments' === n ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                                              ? r(e, t)
                                                              : void 0
                                                    );
                                                }
                                            })(e)) ||
                                            (t && e && 'number' == typeof e.length)
                                        ) {
                                            n && (e = n);
                                            var i = 0;
                                            return function () {
                                                return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                                            };
                                        }
                                        throw new TypeError(
                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })(s.keys());
                                !(e = n()).done;

                            )
                                l(e.value, t);
                        },
                        unsubscribe: l,
                    };
                }
            },
            3215: (e, t, n) => {
                n.d(t, { q: () => l });
                var i = n(4598),
                    r = n(9174),
                    o = n(6179),
                    a = n.n(o),
                    s = n(8246);
                const l = () => (e, t) => {
                    const n = (0, o.createContext)({});
                    return [
                        function ({ mode: l = 'real', options: c, children: d, mocks: u }) {
                            const _ = (0, o.useRef)([]),
                                v = (n, o, a) => {
                                    var l;
                                    const c = s.U(o),
                                        d =
                                            'real' === n
                                                ? c
                                                : Object.assign({}, c, {
                                                      readByPath:
                                                          null != (l = null == a ? void 0 : a.getter) ? l : () => {},
                                                  }),
                                        u = (e) =>
                                            'mocks' === n ? (null == a ? void 0 : a.getter(e)) : d.readByPath(e),
                                        v = (e) => _.current.push(e),
                                        f = e({
                                            mode: n,
                                            readByPath: u,
                                            externalModel: d,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const o = null != t ? t : u(e),
                                                        a = r.LO.box(o, { equals: i.jv });
                                                    return (
                                                        'real' === n &&
                                                            d.subscribe(
                                                                (0, r.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const o = null != t ? t : u(e),
                                                        a = r.LO.box(o, { equals: i.jv });
                                                    return (
                                                        'real' === n &&
                                                            d.subscribe(
                                                                (0, r.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const i = u(t);
                                                    if (Array.isArray(e)) {
                                                        const o = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(i[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                d.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            o[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                    {
                                                        const o = e,
                                                            a = Object.entries(o),
                                                            s = a.reduce(
                                                                (e, [t, n]) => ((e[n] = r.LO.box(i[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                d.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        a.forEach(([t, n]) => {
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
                                            cleanup: v,
                                        }),
                                        m = { mode: n, model: f, externalModel: d, cleanup: v };
                                    return {
                                        model: f,
                                        controls: 'mocks' === n && a ? a.controls(m) : t(m),
                                        externalModel: d,
                                        mode: n,
                                    };
                                },
                                f = (0, o.useRef)(!1),
                                m = (0, o.useState)(l),
                                b = m[0],
                                w = m[1],
                                h = (0, o.useState)(() => v(l, c, u)),
                                E = h[0],
                                p = h[1];
                            return (
                                (0, o.useEffect)(() => {
                                    f.current ? p(v(b, c, u)) : (f.current = !0);
                                }, [u, b, c]),
                                (0, o.useEffect)(() => {
                                    w(l);
                                }, [l]),
                                (0, o.useEffect)(
                                    () => () => {
                                        E.externalModel.dispose(), _.current.forEach((e) => e());
                                    },
                                    [E],
                                ),
                                a().createElement(n.Provider, { value: E }, d)
                            );
                        },
                        () => (0, o.useContext)(n),
                    ];
                };
            },
            527: (e, t, n) => {
                n.r(t),
                    n.d(t, { mouse: () => d, off: () => l, on: () => s, onResize: () => o, onScaleUpdated: () => a });
                var i = n(2472),
                    r = n(1176);
                const o = (0, i.E)('clientResized'),
                    a = (0, i.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, i.E)('mousedown'), up: (0, i.E)('mouseup'), move: (0, i.E)('mousemove') },
                    d = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function n() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function i() {
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
                        const o = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const o = `mouse${t}`,
                                            a = c[t]((e) => n([e, 'outside']));
                                        function s(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(o, s),
                                            i(),
                                            () => {
                                                r &&
                                                    (a(),
                                                    window.removeEventListener(o, s),
                                                    (e.listeners -= 1),
                                                    i(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(n)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, o, {
                            disable() {
                                (e.enabled = !1), i();
                            },
                            enable() {
                                (e.enabled = !0), i();
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
                n.r(t),
                    n.d(t, {
                        events: () => i,
                        getMouseGlobalPosition: () => a,
                        getSize: () => o,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var i = n(527),
                    r = n(2493);
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => i });
            },
            2493: (e, t, n) => {
                function i(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => r, G: () => i });
            },
            2472: (e, t, n) => {
                function i(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => i });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => o });
                var i = n(5959),
                    r = n(514);
                const o = { view: n(7641), client: i, sound: r.ZP };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => a });
                var i = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    o = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, i.playSound)(r[t])), e), {}),
                    a = { play: Object.assign({}, o, { sound: i.playSound }), setRTPC: i.setRTPC };
            },
            3722: (e, t, n) => {
                function i(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${i(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => i });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => i });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => r });
                var i = n(2472);
                const r = {
                    onTextureFrozen: (0, i.E)('self.onTextureFrozen'),
                    onTextureReady: (0, i.E)('self.onTextureReady'),
                    onDomBuilt: (0, i.E)('self.onDomBuilt'),
                    onLoaded: (0, i.E)('self.onLoaded'),
                    onDisplayChanged: (0, i.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, i.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, i.E)('children.onAdded'),
                        onLoaded: (0, i.E)('children.onLoaded'),
                        onRemoved: (0, i.E)('children.onRemoved'),
                        onAttached: (0, i.E)('children.onAttached'),
                        onTextureReady: (0, i.E)('children.onTextureReady'),
                        onRequestPosition: (0, i.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => l,
                        children: () => i,
                        displayStatus: () => r.W,
                        displayStatusIs: () => P,
                        events: () => o.U,
                        extraSize: () => C,
                        forceTriggerMouseMove: () => k,
                        freezeTextureBeforeResize: () => b,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => T,
                        getScale: () => w,
                        getSize: () => v,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => O,
                        isFocused: () => g,
                        pxToRem: () => h,
                        remToPx: () => E,
                        resize: () => f,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => R,
                    });
                var i = n(3722),
                    r = n(6112),
                    o = n(6538),
                    a = n(8566);
                const s = 15;
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function d(e, t, n, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, i);
                }
                function u(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function f(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function b() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function w() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function k() {
                    viewEnv.forceTriggerMouseMove();
                }
                function T() {
                    return viewEnv.getShowingStatus();
                }
                const P = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    C = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => o });
                const i = ['args'],
                    r = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var i in e)
                                        if ({}.hasOwnProperty.call(e, i)) {
                                            if (t.indexOf(i) >= 0) continue;
                                            n[i] = e[i];
                                        }
                                    return n;
                                })(t, i);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((r = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    o = {
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
            4598: (e, t, n) => {
                function i() {
                    return !1;
                }
                n.d(t, { jv: () => i }), console.log;
            },
            7902: (e, t, n) => {
                n.d(t, { F: () => i });
                const i = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        i = R.invalid('resId');
                    return (
                        t &&
                            ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (i = window.subViews[n].id)),
                        { caller: n, stack: t, resId: i }
                    );
                };
            },
            5521: (e, t, n) => {
                let i, r;
                n.d(t, { n: () => i }),
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
                    })(i || (i = {})),
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
                function i(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, i) => t(null == e ? void 0 : e.value, n, i));
                }
                function r(e, t) {
                    for (let r = 0; r < e.length; r++) {
                        const o =
                            ((n = e[r]),
                            (i = void 0),
                            n && 'value' in n && null != (i = n.constructor) && i.name.includes('ArrayItem')
                                ? null == n
                                    ? void 0
                                    : n.value
                                : n);
                        if (t(o, r, e)) return o;
                    }
                    var n, i;
                }
                n.d(t, { UI: () => i, sE: () => r });
            },
            5139: (e, t, n) => {
                function i(e, t, n, i) {
                    let r,
                        o = !1,
                        a = 0;
                    function s() {
                        r && clearTimeout(r);
                    }
                    function l(...l) {
                        const c = this,
                            d = Date.now() - a;
                        function u() {
                            (a = Date.now()), n.apply(c, l);
                        }
                        o ||
                            (i && !r && u(),
                            s(),
                            void 0 === i && d > e
                                ? u()
                                : !0 !== t &&
                                  (r = setTimeout(
                                      i
                                          ? function () {
                                                r = void 0;
                                            }
                                          : u,
                                      void 0 === i ? e - d : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((i = n), (n = t), (t = void 0)),
                        (l.cancel = function () {
                            s(), (o = !0);
                        }),
                        l
                    );
                }
                n.d(t, { Z: () => i });
            },
            1358: (e, t, n) => {
                n.d(t, { Z: () => o });
                var i = n(3138);
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
                        const o = i.O.view.addModelObserver(e, n, r);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(o) : (this._views[n] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
                            const i = this._callbacks[n];
                            void 0 !== i && i(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const o = r;
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
            9916: (e, t, n) => {
                n.d(t, { B0: () => s, ry: () => h });
                class i {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let i = e.target;
                                    do {
                                        if (i === t) return;
                                        i = i.parentNode;
                                    } while (i);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return i.__instance || (i.__instance = new i()), i.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            i = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== i)),
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
                i.__instance = void 0;
                const r = i;
                var o = n(1358),
                    a = n(8613);
                let s;
                var l;
                ((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var v = n(5521),
                    f = n(3138);
                const m = ['args'];
                function b(e, t, n, i, r, o, a) {
                    try {
                        var s = e[o](a),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(i, r);
                }
                const w = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (i, r) {
                                        var o = e.apply(t, n);
                                        function a(e) {
                                            b(o, i, r, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            b(o, i, r, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var i in e)
                                        if ({}.hasOwnProperty.call(e, i)) {
                                            if (t.indexOf(i) >= 0) continue;
                                            n[i] = e[i];
                                        }
                                    return n;
                                })(t, m);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((i = r),
                                              Object.entries(i).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    p = () => E(s.CLOSE),
                    g = (e, t) => {
                        e.keyCode === v.n.ESCAPE && t();
                    };
                var y = n(7572);
                const O = r.instance,
                    k = {
                        DataTracker: o.Z,
                        ViewModel: y.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: u,
                        DateFormatType: _,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => E(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => E(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, i, r = R.invalid('resId'), o) => {
                            const a = f.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                _ = l.height,
                                v = {
                                    x: f.O.view.pxToRem(c) + a.x,
                                    y: f.O.view.pxToRem(d) + a.y,
                                    width: f.O.view.pxToRem(u),
                                    height: f.O.view.pxToRem(_),
                                };
                            E(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: w(v),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => g(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, p);
                        },
                        handleViewEvent: E,
                        onBindingsReady: h,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    const r = Object.prototype.toString.call(t[i]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[i];
                                        n[i] = [];
                                        for (let t = 0; t < r.length; t++) n[i].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[i] = e(t[i]))
                                            : (n[i] = t[i]);
                                }
                            return n;
                        },
                        ClickOutsideManager: O,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = k;
            },
            8613: (e, t, n) => {
                n.d(t, { Z5: () => i, cy: () => r });
                const i = {
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
                    };
            },
            1596: (e, t, n) => {
                var i = n(6179),
                    r = n.n(i),
                    o = n(6483),
                    a = n.n(o),
                    s = n(3138),
                    l = n(5139);
                var c = n(9480),
                    d = n(3403),
                    u = n(824),
                    _ = n(3215);
                let v;
                !(function (e) {
                    (e.DEFAULT = 'default'), (e.SELECTED = 'selected');
                })(v || (v = {}));
                var f = n(3946);
                const m = (0, _.q)()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), difficulties: e.array('difficulties', []) },
                                n = (0, f.Om)(() => {
                                    var e;
                                    return null == (e = c.sE(t.difficulties.get(), (e) => e.state === v.SELECTED))
                                        ? void 0
                                        : e.level;
                                });
                            return Object.assign({}, t, { computes: { selectedLevel: n } });
                        },
                        ({ externalModel: e }) => ({
                            swichLevel: e.createCallback((e) => ({ level: e }), 'onSwichLevel'),
                            lockSwitching: e.createCallbackNoArgs('onLockSwitching'),
                        }),
                    ),
                    b = m[0],
                    w = m[1];
                var h = n(9987),
                    E = n(6373),
                    p = n(2056);
                const g = {
                        base: 'DifficultyItem_base_22',
                        base__default: 'DifficultyItem_base__default_fb',
                        base__locked: 'DifficultyItem_base__locked_c7',
                        base__disabled: 'DifficultyItem_base__disabled_45',
                        icon: 'DifficultyItem_icon_36',
                        icon__level4: 'DifficultyItem_icon__level4_d7',
                        base__selected: 'DifficultyItem_base__selected_96',
                        iconSelected: 'DifficultyItem_iconSelected_4d',
                        iconSelected__level4: 'DifficultyItem_iconSelected__level4_0d',
                        iconHighlight: 'DifficultyItem_iconHighlight_9f',
                        iconHighlight__level4: 'DifficultyItem_iconHighlight__level4_b9',
                        label: 'DifficultyItem_label_11',
                        base__defence: 'DifficultyItem_base__defence_15',
                        lock: 'DifficultyItem_lock_ae',
                        smoke: 'DifficultyItem_smoke_86',
                        counter: 'DifficultyItem_counter_a1',
                    },
                    y = 'R.images.halloween.gui.maps.icons.difficulties.diff_',
                    O = { 1: u.h, 2: u.a9, 3: u.Pq, 4: u.bi },
                    k = (0, i.memo)(function ({
                        level: e,
                        state: t,
                        isDisabled: n,
                        isLocked: i,
                        isNew: o,
                        onClick: l,
                        className: c,
                    }) {
                        return r().createElement(
                            p.u,
                            {
                                targetId: R.views.halloween.lobby.widgets.DifficultyView('resId'),
                                contentId: R.views.halloween.lobby.tooltips.DifficultyTooltip('resId'),
                                args: { level: e, state: t, isLocked: i },
                                isEnabled: !n,
                            },
                            r().createElement(
                                'div',
                                null,
                                r().createElement(
                                    E.i,
                                    {
                                        body: R.strings.halloween_lobby.difficult.disabled.body(),
                                        header: R.strings.halloween_lobby.difficult.disabled.header(),
                                        isEnabled: n,
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: a()(
                                                g.base,
                                                g[`base__${t}`],
                                                i && g.base__locked,
                                                n && g.base__disabled,
                                                4 === e && g.base__defence,
                                                c,
                                            ),
                                            onMouseEnter: () => {
                                                t !== v.DEFAULT || n || s.O.sound.play.sound(u.Wj);
                                            },
                                            onClick: () => {
                                                if (t !== v.DEFAULT || n || i) return;
                                                const r = O[e];
                                                void 0 !== r && s.O.sound.play.sound(r), l(e);
                                            },
                                        },
                                        r().createElement('div', {
                                            className: g.icon,
                                            style: { backgroundImage: `url('${y}${e}_${v.DEFAULT}')` },
                                        }),
                                        r().createElement('div', {
                                            className: g.iconSelected,
                                            style: {
                                                backgroundImage: `url('${y}${e}_${i ? 'selectedLocked' : v.SELECTED}')`,
                                            },
                                        }),
                                        t === v.DEFAULT &&
                                            !n &&
                                            !i &&
                                            r().createElement('div', {
                                                className: g.iconHighlight,
                                                style: { backgroundImage: `url('${y}${e}_hovered')` },
                                            }),
                                        r().createElement(
                                            'div',
                                            { className: g.label },
                                            R.strings.halloween_lobby.difficult.uppercase.$dyn(`level_${e}`),
                                        ),
                                        o &&
                                            r().createElement(
                                                'div',
                                                { className: g.counter },
                                                r().createElement(h.A, {
                                                    size: 'small',
                                                    value: R.strings.halloween_lobby.difficult.new(),
                                                }),
                                            ),
                                        i && r().createElement('div', { className: g.lock }),
                                        r().createElement('div', { className: g.smoke }),
                                    ),
                                ),
                            ),
                        );
                    });
                function T() {
                    return (
                        (T = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var i in n) ({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                  }
                                  return e;
                              }),
                        T.apply(null, arguments)
                    );
                }
                const P = (0, d.Pi)(({ className: e, onHideCarousel: t }) => {
                    const n = w(),
                        o = n.model,
                        d = n.controls,
                        _ = (0, i.useState)(!1),
                        v = _[0],
                        f = _[1],
                        m = o.computes.selectedLevel(),
                        b = (function (e, t, n, r = !1) {
                            const o = (0, i.useMemo)(
                                () =>
                                    (function (e, t, n) {
                                        return void 0 === n ? (0, l.Z)(e, t, !1) : (0, l.Z)(e, n, !1 !== t);
                                    })(n, r, e),
                                t,
                            );
                            return (0, i.useEffect)(() => o.cancel, [o]), o;
                        })((e) => d.swichLevel(e), [], 500),
                        h = (0, i.useCallback)(
                            (e) => {
                                d.lockSwitching(),
                                    4 === m || 4 === e
                                        ? (s.O.sound.play.sound(u.FD), b(e), t(), f(!0))
                                        : d.swichLevel(e);
                            },
                            [d, t, m, b],
                        );
                    return (
                        (0, i.useEffect)(() => {
                            f(!1);
                        }, [m]),
                        r().createElement(
                            'div',
                            {
                                className: a()(
                                    'DifficultyViewApp_base_8a',
                                    v && 'DifficultyViewApp_base__disable_9b',
                                    e,
                                ),
                            },
                            r().createElement(
                                'div',
                                { className: 'DifficultyViewApp_items_df' },
                                c.UI(o.difficulties.get(), (e, t) =>
                                    r().createElement(
                                        k,
                                        T({ key: `difficulties_${t}` }, e, {
                                            onClick: h,
                                            isDisabled: o.root.get().isDisabled,
                                            className: a()(
                                                'DifficultyViewApp_item_09',
                                                t === o.difficulties.get().length - 1 &&
                                                    'DifficultyViewApp_item__last_71',
                                            ),
                                        }),
                                    ),
                                ),
                            ),
                        )
                    );
                });
                r().memo(function (e) {
                    const t = (0, i.useMemo)(
                        () => ({ rootId: R.views.halloween.lobby.widgets.DifficultyView('resId') }),
                        [],
                    );
                    return r().createElement(b, { options: t }, r().createElement(P, e));
                });
            },
            824: (e, t, n) => {
                n.d(t, { FD: () => l, Pq: () => a, Wj: () => i, a9: () => o, bi: () => s, h: () => r });
                const i = 'ev_hw_hangar_ui_difficulty_highlight',
                    r = 'ev_hw_hangar_ui_difficulty_normal',
                    o = 'ev_hw_hangar_ui_difficulty_hard',
                    a = 'ev_hw_hangar_ui_difficulty_nightmare',
                    s = 'ev_hw_hangar_ui_difficulty_defense',
                    l = 'ev_hw_hangar_ui_tank_tab_switch';
            },
            9734: (e, t, n) => {
                n.d(t, { Z: () => i });
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
        (__webpack_require__.O = (e, t, n, i) => {
            if (!t) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, i] = deferred[l], o = !0, a = 0; a < t.length; a++)
                        (!1 & i || r >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((o = !1), i < r && (r = i));
                    if (o) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > i; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, i];
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
        (__webpack_require__.j = 252),
        (() => {
            var e = { 252: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var i,
                        r,
                        [o, a, s] = n,
                        l = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (i in a) __webpack_require__.o(a, i) && (__webpack_require__.m[i] = a[i]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < o.length; l++)
                        (r = o[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(1596));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
