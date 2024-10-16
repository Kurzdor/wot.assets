(() => {
    var __webpack_modules__ = {
            329: (e, u, t) => {
                'use strict';
                let n, r, a;
                t.d(u, { V2: () => r, we: () => a }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(n || (n = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(r || (r = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(a || (a = {}));
            },
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => i });
                var n = t(6179),
                    r = t.n(n),
                    a = t(9916);
                class i extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? a.B3.GOLD : a.B3.INTEGRAL;
                        const u = a.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                i.defaultProps = { format: 'integral' };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var n = t(7902),
                    r = t(9916),
                    a = t(6179);
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
                const o = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
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
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            E = e.ignoreShowDelay,
                            m = void 0 !== E && E,
                            A = e.ignoreMouseClick,
                            g = void 0 !== A && A,
                            F = e.decoratorId,
                            p = void 0 === F ? 0 : F,
                            h = e.isEnabled,
                            D = void 0 === h || h,
                            C = e.targetId,
                            B = void 0 === C ? 0 : C,
                            b = e.onShow,
                            v = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, i);
                        const y = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, a.useMemo)(() => B || (0, n.F)().resId, [B]),
                            S = (0, a.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (o(t, p, { isMouseEvent: !0, on: !0, arguments: s(r) }, w),
                                    b && b(),
                                    (y.current.isVisible = !0));
                            }, [t, p, r, w, b]),
                            x = (0, a.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        o(t, p, { on: !1 }, w),
                                        y.current.isVisible && v && v(),
                                        (y.current.isVisible = !1);
                                }
                            }, [t, p, w, v]),
                            T = (0, a.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(y.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = y.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', T, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', T, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === D && x();
                            }, [D, x]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        window.removeEventListener('mouseleave', x), x();
                                    }
                                ),
                                [x],
                            ),
                            D
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((R = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((y.current.timeoutId = window.setTimeout(S, m ? 100 : 400)),
                                                          l && l(e),
                                                          R && R(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  x(), null == c || c(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === g && x(), null == d || d(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === g && x(), null == _ || _(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          f,
                                      ),
                                  )
                                : u
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
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => i });
                var n = t(3138);
                function r(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const a = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: u = 0, getRoot: t = a, context: i = 'model' } = {}) {
                    const s = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = s.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = t(u),
                            r = i.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, r);
                    };
                    return {
                        subscribe: (t, r) => {
                            const a = 'string' == typeof r ? `${i}.${r}` : i,
                                o = n.O.view.addModelObserver(a, u, !0);
                            return s.set(o, t), e && t(l(r)), o;
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
                            for (
                                var e,
                                    t = (function (e, u) {
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
                                                            : 'Arguments' === t ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
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
                                    })(s.keys());
                                !(e = t()).done;

                            )
                                o(e.value, u);
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => o });
                var n = t(4598),
                    r = t(9174),
                    a = t(6179),
                    i = t.n(a),
                    s = t(8246);
                const o = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, a.useRef)([]),
                                E = (t, a, i) => {
                                    var o;
                                    const l = s.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == i ? void 0 : i.getter) ? o : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        E = (e) => d.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const a = null != u ? u : _(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const a = null != u ? u : _(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = _(u);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, u) => ((e[u] = r.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            i = Object.entries(a),
                                                            s = i.reduce(
                                                                (e, [u, t]) => ((e[t] = r.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        i.forEach(([u, t]) => {
                                                                            s[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: E,
                                        }),
                                        A = { mode: t, model: m, externalModel: c, cleanup: E };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && i ? i.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                m = (0, a.useRef)(!1),
                                A = (0, a.useState)(o),
                                g = A[0],
                                F = A[1],
                                p = (0, a.useState)(() => E(o, l, _)),
                                h = p[0],
                                D = p[1];
                            return (
                                (0, a.useEffect)(() => {
                                    m.current ? D(E(g, l, _)) : (m.current = !0);
                                }, [_, g, l]),
                                (0, a.useEffect)(() => {
                                    F(o);
                                }, [o]),
                                (0, a.useEffect)(
                                    () => () => {
                                        h.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [h],
                                ),
                                i().createElement(t.Provider, { value: h }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => s, onResize: () => a, onScaleUpdated: () => i });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${u}`,
                                            i = l[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            n(),
                                            () => {
                                                r &&
                                                    (i(),
                                                    window.removeEventListener(a, s),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
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
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(2493);
                function a(e = 'px') {
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
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { O: () => a });
                var n = t(5959),
                    r = t(514);
                const a = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => i });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    i = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => y,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => b,
                        isFocused: () => C,
                        pxToRem: () => p,
                        remToPx: () => h,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => S,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    i = t(8566);
                const s = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function _(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: h(u.x), y: h(u.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => a });
                const n = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
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
            4598: (e, u, t) => {
                'use strict';
                function n() {}
                function r() {
                    return !1;
                }
                t.d(u, { ZT: () => n, jv: () => r }), console.log;
            },
            7902: (e, u, t) => {
                'use strict';
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
            5521: (e, u, t) => {
                'use strict';
                let n, r;
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
                    })(r || (r = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(3138);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
            9916: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => l, Z5: () => i.Z5, B0: () => s, ry: () => p });
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
                const r = n;
                var a = t(1358),
                    i = t(8613);
                let s;
                var o;
                ((o = s || (s = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    m = t(3138);
                const A = ['args'];
                function g(e, u, t, n, r, a, i) {
                    try {
                        var s = e[a](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function i(e) {
                                            g(a, n, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(a, n, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = (e, u) => {
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
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    D = () => h(s.CLOSE),
                    C = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var B = t(7572);
                const b = r.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: B.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(E),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, D);
                        },
                        handleViewEvent: h,
                        onBindingsReady: p,
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
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            1355: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t.n(n);
                const a = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var i = t(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function l(e, u, t) {
                    const n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        r = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
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
                })(o || (o = {}));
                const c = i.O.client.getSize('rem'),
                    _ = c.width,
                    d = c.height,
                    E = Object.assign({ width: _, height: d }, l(_, d, s)),
                    m = (0, n.createContext)(E),
                    A = ['children'],
                    g = (e) => {
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
                            })(e, A);
                        const r = (0, n.useContext)(m),
                            i = r.extraLarge,
                            s = r.large,
                            o = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            _ = r.extraLargeWidth,
                            d = r.largeWidth,
                            E = r.mediumWidth,
                            g = r.smallWidth,
                            F = r.extraSmallWidth,
                            p = r.extraLargeHeight,
                            h = r.largeHeight,
                            D = r.mediumHeight,
                            C = r.smallHeight,
                            B = r.extraSmallHeight,
                            b = { extraLarge: p, large: h, medium: D, small: C, extraSmall: B };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return u;
                            if (t.large && s) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && _) return a(u, t, b);
                            if (t.largeWidth && d) return a(u, t, b);
                            if (t.mediumWidth && E) return a(u, t, b);
                            if (t.smallWidth && g) return a(u, t, b);
                            if (t.extraSmallWidth && F) return a(u, t, b);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && p) return u;
                                if (t.largeHeight && h) return u;
                                if (t.mediumHeight && D) return u;
                                if (t.smallHeight && C) return u;
                                if (t.extraSmallHeight && B) return u;
                            }
                        }
                        return null;
                    };
                (g.defaultProps = {
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
                    (0, n.memo)(g);
                const F = ({ children: e }) => {
                    const u = (0, n.useContext)(m),
                        t = (0, n.useState)(u),
                        a = t[0],
                        o = t[1],
                        c = (0, n.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                n = i.O.view.pxToRem(u);
                            o(Object.assign({ width: t, height: n }, l(t, n, s)));
                        }, []),
                        _ = (0, n.useCallback)(() => {
                            const e = i.O.client.getSize('px');
                            c(e.width, e.height);
                        }, [c]);
                    ((e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', _);
                    }),
                        (0, n.useEffect)(
                            () => () => {
                                i.O.client.events.off('clientResized', c),
                                    i.O.client.events.off('self.onScaleUpdated', _);
                            },
                            [c, _],
                        );
                    const d = (0, n.useMemo)(() => Object.assign({}, a), [a]);
                    return r().createElement(m.Provider, { value: d }, e);
                };
                var p = t(6483),
                    h = t.n(p),
                    D = t(926),
                    C = t.n(D);
                let B, b, v;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(B || (B = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const f = () => {
                        const e = (0, n.useContext)(m),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
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
                                        return b.ExtraLarge;
                                    case e.largeWidth:
                                        return b.Large;
                                    case e.mediumWidth:
                                        return b.Medium;
                                    case e.smallWidth:
                                        return b.Small;
                                    case e.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case e.largeHeight:
                                        return v.Large;
                                    case e.mediumHeight:
                                        return v.Medium;
                                    case e.smallHeight:
                                        return v.Small;
                                    case e.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: a, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function w() {
                    return (
                        (w = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        w.apply(null, arguments)
                    );
                }
                const S = {
                        [b.ExtraSmall]: '',
                        [b.Small]: C().SMALL_WIDTH,
                        [b.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [b.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [v.ExtraSmall]: '',
                        [v.Small]: C().SMALL_HEIGHT,
                        [v.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [v.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [B.ExtraSmall]: '',
                        [B.Small]: C().SMALL,
                        [B.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [B.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [B.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, y);
                        const a = f(),
                            i = a.mediaWidth,
                            s = a.mediaHeight,
                            o = a.mediaSize;
                        return r().createElement('div', w({ className: h()(t, S[i], x[s], T[o]) }, n), u);
                    },
                    P = ['children'],
                    L = (e) => {
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
                            })(e, P);
                        return r().createElement(F, null, r().createElement(k, t, u));
                    };
                var N = t(493),
                    O = t.n(N);
                const M = {
                    linear: (e) => e,
                    easeInQuad: (e) => e * e,
                    easeOutQuad: (e) => e * (2 - e),
                    easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
                    easeInCubic: (e) => e * e * e,
                    easeOutCubic: (e) => --e * e * e + 1,
                    easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    easeInQuart: (e) => e * e * e * e,
                    easeOutQuart: (e) => 1 - --e * e * e * e,
                    easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
                    easeInQuint: (e) => e * e * e * e * e,
                    easeOutQuint: (e) => 1 + --e * e * e * e * e,
                    easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
                    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    easeInOutCirc(e) {
                        const u = Math.sqrt,
                            t = Math.pow;
                        return e < 0.5 ? (1 - u(1 - t(2 * e, 2))) / 2 : (u(1 - t(-2 * e + 2, 2)) + 1) / 2;
                    },
                    easeOutBack: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                    bezier: (e, u, t, n) => (r) =>
                        (1 - r) * (1 - r) * (1 - r) * e +
                        3 * (1 - r) * (1 - r) * r * u +
                        3 * (1 - r) * r * r * t +
                        r * r * r * n,
                };
                var I = t(7030);
                const U = { x: 0, y: 0, opacity: 0, transform: 'scale(1) rotate(0deg)' },
                    H = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' };
                let G;
                !(function (e) {
                    (e.Linear = 'linear'),
                        (e.EaseIn = 'easeIn'),
                        (e.EaseOut = 'easeOut'),
                        (e.EaseInOut = 'easeInOut'),
                        (e.EaseOutBack = 'easeOutBack'),
                        (e.EaseOutQuint = 'easeOutQuint'),
                        (e.EaseOutExpo = 'easeOutExpo');
                })(G || (G = {}));
                const W = {
                        [G.Linear]: M.linear,
                        [G.EaseIn]: M.easeInCubic,
                        [G.EaseOut]: M.easeOutCubic,
                        [G.EaseInOut]: M.easeInOutCubic,
                        [G.EaseOutBack]: M.easeOutBack,
                        [G.EaseOutQuint]: (e) => 1 - Math.pow(1 - e, 5),
                        [G.EaseOutExpo]: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
                    },
                    $ = ({
                        children: e,
                        from: u = U,
                        to: t = H,
                        config: a,
                        isCanceled: i = !1,
                        isDisabled: s = !1,
                        duration: o = 250,
                        delay: l = 0,
                        transformOrigin: c = '50% 50%',
                        easingType: _ = G.EaseInOut,
                        onRest: d,
                        onStart: E,
                        trigger: m,
                        className: A,
                        isReverse: g = !1,
                    }) => {
                        const F = W[_],
                            p = (0, I.useSpring)(() => u),
                            h = p[0],
                            D = p[1],
                            C = i && !s ? t : Object.assign({}, h, { transformOrigin: c });
                        return (
                            (0, n.useEffect)(() => {
                                D.start({
                                    from: u,
                                    to: t,
                                    delay: l,
                                    immediate: i,
                                    config: a ? Object.assign({}, a) : { duration: o, easing: F },
                                    cancel: i || s,
                                    reverse: g,
                                    onRest: (e) => {
                                        !0 === e.finished && d && d();
                                    },
                                    onStart: () => {
                                        E && E();
                                    },
                                });
                            }, [D, l, o, F, u, i, d, t, m, s, g, E, a]),
                            r().createElement(I.animated.div, { className: A, style: C }, e)
                        );
                    };
                var q = t(2056);
                const j = ['children'];
                function V() {
                    return (
                        (V = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        V.apply(null, arguments)
                    );
                }
                const X = (e) => {
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
                            })(e, j);
                        return r().createElement(
                            q.u,
                            V(
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
                    },
                    z = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function K() {
                    return (
                        (K = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        K.apply(null, arguments)
                    );
                }
                const Y = R.views.common.tooltip_window.simple_tooltip_content,
                    Q = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            i = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, z);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: a, note: i, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, a, i, o]);
                        return r().createElement(
                            q.u,
                            K(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? Y.SimpleTooltipHtmlContent('resId') : Y.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
                function Z() {
                    return (
                        (Z = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Z.apply(null, arguments)
                    );
                }
                const J = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(Q, u, n);
                    const a = u.contentId;
                    return a ? r().createElement(q.u, Z({}, u, { contentId: a }), n) : r().createElement(X, u, n);
                };
                var ee = t(8045);
                const ue = {
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
                let te;
                t(1281),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(te || (te = {}));
                let ne, re, ae;
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
                ),
                    (function (e) {
                        (e[(e.Word = 0)] = 'Word'),
                            (e[(e.LineBreak = 1)] = 'LineBreak'),
                            (e[(e.NewLine = 2)] = 'NewLine'),
                            (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (e[(e.Binding = 5)] = 'Binding');
                    })(ne || (ne = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(re || (re = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(ae || (ae = {}));
                const ie = { [ae.NBSP]: ne.NoBreakSymbol, [ae.ZWNBSP]: ne.NoBreakSymbol, [ae.NEW_LINE]: ne.LineBreak },
                    se = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    oe = {
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
                    le = 'renderers_word_f3',
                    ce = (e) => ({ color: `#${e}` }),
                    _e = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? oe[n]
                                ? r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: h()(le, oe[n]) },
                                      e,
                                  )
                                : r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: le, style: ce(n) },
                                      e,
                                  )
                            : r().createElement('span', { key: t, 'data-block-type': u.blockType, className: le }, e);
                    },
                    de = {
                        [ne.Word]: _e,
                        [ne.NoBreakSymbol]: _e,
                        [ne.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            r().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => r().createElement(r().Fragment, { key: t }, e)),
                            ),
                        [ne.LineBreak]: ({ key: e }) =>
                            r().createElement('span', {
                                key: e,
                                'data-block-type': ne.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [ne.NewLine]: ({ elementList: e, key: u }) =>
                            r().createElement(
                                'span',
                                { key: u, 'data-block-type': ne.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [ne.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            r().createElement(
                                'span',
                                {
                                    key: u,
                                    'data-block-type': ne.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    Ee = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((r, a) => {
                                const i = `${t}_${a}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        u = e.blockType,
                                        t = Ee(e, de[u], i);
                                    n.push(...t);
                                } else n.push(u({ elementList: [r], textBlock: e, key: i }));
                            }),
                            n
                        );
                    },
                    me = (e, u, t, n) => {
                        let r = u.exec(e),
                            a = 0;
                        for (; r; ) a !== r.index && t(e.slice(a, r.index)), n(r), (a = u.lastIndex), (r = u.exec(e));
                        a !== e.length && t(e.slice(a));
                    },
                    Ae = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    ge = se
                        ? (e) => {
                              const u = [];
                              return (
                                  me(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(
                                              ...((e) => {
                                                  const u = [];
                                                  return (
                                                      me(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var t;
                                                              'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                                  ? u.push(...((t = e), t.match(Ae) || []))
                                                                  : u.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              u.push(e[0]);
                                                          },
                                                      ),
                                                      u
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(e);
                              if (!n) return [e];
                              const r = [];
                              let a = 0;
                              for (; n; ) {
                                  const i = u.justifyContent === re.FlexEnd ? n.index : t.lastIndex;
                                  r.push(e.slice(a, i)), (a = i), (n = t.exec(e));
                              }
                              return a !== e.length && r.push(e.slice(a)), r;
                          },
                    Fe = (e, u = '', t) => {
                        const n = [];
                        return (
                            me(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: ne.Word, colorTag: u, childList: ge(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        r = ie[t.charAt(0)];
                                    r === ne.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: ne.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: ne.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : n.push({ blockType: r, colorTag: u, childList: [t] });
                                },
                            ),
                            n
                        );
                    },
                    pe = (e, u, t = '', n) => {
                        const r = [];
                        return (
                            me(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...Fe(e, t, n));
                                },
                                (e) => {
                                    const a = e[1],
                                        i = void 0 === u[a] ? e[0] : u[a];
                                    'string' == typeof i || 'number' == typeof i
                                        ? r.push(...Fe(String(i), t, n))
                                        : r.push({ blockType: ne.Binding, colorTag: t, childList: [i] });
                                },
                            ),
                            r
                        );
                    },
                    he = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === ne.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: ne.NoBreakWrapper, colorTag: '', childList: [u, n] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    De = (e, u = {}, t) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === ne.NoBreakSymbol
                                        ? ((t = !0), u.push(...he(u.pop(), e)))
                                        : (t ? u.push(...he(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const n = [];
                                return (
                                    me(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...pe(e, u, '', t));
                                        },
                                        (e) => {
                                            n.push(...pe(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    n
                                );
                            })(((r = e), r.replace(/&nbsp;/g, ' ')).replace(/&zwnbsp;/g, '\ufeff'), u, t),
                        );
                        var r;
                        return ((e) => {
                            const u = [];
                            return (
                                e.forEach((e, t) => {
                                    u.push(
                                        ...((e, u) => {
                                            const t = [],
                                                n = e.blockType,
                                                r = de[n],
                                                a = Ee(e, r, u);
                                            return (
                                                n === ne.NoBreakWrapper
                                                    ? t.push(r({ elementList: a, textBlock: e, key: `${u}` }))
                                                    : t.push(...a),
                                                t
                                            );
                                        })(e, t),
                                    );
                                }),
                                u
                            );
                        })(n);
                    },
                    Ce = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    Be = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    be = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = Be(e, u),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            i = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / a);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const s = Math.max(t + i, 0);
                        return r < s ? [!1, 0] : [!0, s];
                    },
                    ve = (e, u, t, n, a, i) => {
                        let s = -1,
                            o = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === ne.LineBreak || c === ne.NewLine || c === ne.Binding) continue;
                            const _ = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = be(t, n, a),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (a -= d);
                                    continue;
                                }
                                const E = _.slice(0, _.length - d) + i,
                                    m = u[l];
                                (o = r().cloneElement(m, m.props, E)), (s = l);
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[l],
                                    d = c.props.children,
                                    E = ve(e, d, e.length - 1, n, a, i),
                                    m = E[0],
                                    A = E[1];
                                if (!(m < 0)) {
                                    const e = d.slice(0, m);
                                    (o = r().cloneElement(c, c.props, e, A)), (s = l);
                                    break;
                                }
                                a -= _.length;
                            }
                        }
                        return [s, o];
                    },
                    fe = r().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: a,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: s = !1,
                            customTooltipArgs: o,
                            targetId: l,
                            justifyContent: c = re.FlexStart,
                            alignContent: _ = re.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const E = (0, n.useRef)(null),
                                m = (0, n.useRef)({ height: 0, width: 0 }),
                                A = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                g = A[0],
                                F = A[1],
                                p = (0, n.useMemo)(() => De(e, a, { justifyContent: c }), [a, c, e]),
                                D = (0, n.useMemo)(() => {
                                    if (
                                        i &&
                                        g.isTruncated &&
                                        (!a || !Object.values(a).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, o, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [a, i, l, e, o, g.isTruncated]),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        (m.current.width = e.contentRect.width),
                                            (m.current.height = e.contentRect.height);
                                        const u = ((e, u, t, n = '...') => {
                                                const r = [...u],
                                                    a = e.current;
                                                if (!a) return [r, !1];
                                                const i = t.height,
                                                    s = t.width,
                                                    o = a.lastElementChild;
                                                if (!Ce(o, i) && Be(o, s) <= 0) return [r, !1];
                                                const l = a.children,
                                                    c = ((e, u) => {
                                                        let t = 0,
                                                            n = e.length - 1;
                                                        for (; n - t >= 0; ) {
                                                            const r = t + Math.ceil(0.5 * (n - t));
                                                            Ce(e[r], u) ? (n = r - 1) : (t = r + 1);
                                                        }
                                                        return t - 1;
                                                    })(l, i);
                                                if (c < 0) return [r, !1];
                                                const _ = ve(l, r, c, s, n.length, n),
                                                    d = _[0],
                                                    E = _[1];
                                                return E && (r.splice(d, 1, E), r.splice(d + 1)), [r, !0];
                                            })(E, p, m.current, d),
                                            n = u[0],
                                            r = u[1];
                                        F({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r);
                                    },
                                    [t, d, p],
                                ),
                                B = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: _ }), [_, c]);
                            return (
                                ((e, u, t = !0) => {
                                    const r = (0, n.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new ee.Z((e) => r(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [r, t, e]);
                                })(E, C, s),
                                r().createElement(
                                    'div',
                                    {
                                        className: h()(
                                            ue.base,
                                            u,
                                            ue.base__zeroPadding,
                                            s && ue.base__isTruncationAvailable,
                                        ),
                                        style: B,
                                    },
                                    r().createElement('div', { className: ue.unTruncated, ref: E }, p),
                                    r().createElement(
                                        J,
                                        {
                                            tooltipArgs: D,
                                            className: h()(
                                                ue.tooltip,
                                                ue[`tooltip__justify-${c}`],
                                                ue[`tooltip__align-${_}`],
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    ue.truncated,
                                                    !g.isTruncateFinished && s && ue.truncated__hide,
                                                ),
                                                style: B,
                                            },
                                            g.isTruncateFinished && s ? g.elementList : p,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    ye = {
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
                let we;
                !(function (e) {
                    (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Red = 'red'),
                        (e.LightRed = 'lightRed'),
                        (e.Currency = 'currency'),
                        (e.Heading = 'heading'),
                        (e.MetaHeading = 'metaHeading');
                })(we || (we = {}));
                const Se = ['type', 'shadow', 'grunge', 'className'];
                function xe() {
                    return (
                        (xe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        xe.apply(null, arguments)
                    );
                }
                const Te = (e) => {
                    let u = e.type,
                        t = e.shadow,
                        n = void 0 !== t && t,
                        a = e.grunge,
                        i = void 0 !== a && a,
                        s = e.className,
                        o = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Se);
                    return r().createElement(
                        'div',
                        { className: h()(ye.base, ye[`base__${u}`], s), lang: R.strings.settings.LANGUAGE_CODE() },
                        r().createElement(fe, xe({ classMix: h()(ye.layer0, n && ye.layer0__shadow) }, o)),
                        (u === we.Heading || u === we.MetaHeading) &&
                            r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(fe, xe({ classMix: ye.layer1 }, o)),
                                r().createElement(fe, xe({ classMix: ye.layer2 }, o)),
                            ),
                        r().createElement(fe, xe({ classMix: ye.layer3 }, o)),
                        i && r().createElement(fe, xe({ classMix: ye.layer4 }, o)),
                    );
                };
                function Re(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const ke = {
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
                    Pe = [
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
                function Le() {
                    return (
                        (Le = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Le.apply(null, arguments)
                    );
                }
                class Ne extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Re(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Re(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            a = e.side,
                            i = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, Pe)),
                            E = h()(ke.base, ke[`base__${i}`], ke[`base__${a}`], null == s ? void 0 : s.base),
                            m = h()(ke.icon, ke[`icon__${i}`], ke[`icon__${a}`], null == s ? void 0 : s.icon),
                            A = h()(ke.glow, null == s ? void 0 : s.glow),
                            g = h()(ke.caption, ke[`caption__${i}`], null == s ? void 0 : s.caption),
                            F = h()(ke.goto, null == s ? void 0 : s.goto);
                        return r().createElement(
                            'div',
                            Le(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== i && r().createElement('div', { className: ke.shine }),
                            r().createElement('div', { className: m }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: g }, u),
                            n && r().createElement('div', { className: F }, n),
                        );
                    }
                }
                function Oe(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Me(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function Ie(e, u = 0, t = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let n = Math.max(u, 0);
                            const r = Math.min(
                                t,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (n > r) return { done: !0, value: null };
                                    const u = e[n++];
                                    return u ? { value: Oe(u), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                let Ue;
                (Ne.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.KeyWidget = 'keyWidget'), (e.Decrypt = 'decrypt'), (e.Skip = 'skip');
                    })(Ue || (Ue = {}));
                var He = t(5521);
                t(9916);
                const Ge = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function We(e = He.n.NONE, u = Ge, t = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== He.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, r]);
                }
                var $e,
                    qe,
                    je,
                    Ve = t(3403),
                    Xe = t(4437);
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
                })($e || ($e = {})),
                    (function (e) {
                        (e[(e.Small = 3)] = 'Small'), (e[(e.Medium = 5)] = 'Medium'), (e[(e.Large = 6)] = 'Large');
                    })(qe || (qe = {})),
                    (function (e) {
                        (e[(e.Small = 366)] = 'Small'),
                            (e[(e.Medium = 532)] = 'Medium'),
                            (e[(e.Large = 660)] = 'Large');
                    })(je || (je = {}));
                const ze = { y: -10, opacity: 0 },
                    Ke = R.images.halloween.gui.maps.icons.bundle.bg,
                    Ye = (e, u) => {
                        const t = Ke.$dyn(
                            ((e) => (e <= B.Small ? $e.Small : e === B.Medium ? $e.Medium : $e.Large))(e),
                        );
                        return t.$dyn(u);
                    },
                    Qe = (e) =>
                        e <= B.Small
                            ? { countInRow: qe.Small, cardHeight: je.Small, gap: 0 }
                            : e === B.Medium
                              ? { countInRow: qe.Medium, cardHeight: je.Medium, gap: 38 }
                              : { countInRow: qe.Large, cardHeight: je.Large, gap: 80 },
                    Ze = (0, t(3215).q)()(
                        ({ observableModel: e }) => ({ root: e.object(), bundles: e.array('bundles') }),
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            purchase: e.createCallback((e, u) => ({ id: e, amount: u }), 'onPurchase'),
                        }),
                    ),
                    Je = Ze[0],
                    eu = Ze[1],
                    uu = {
                        base: 'KeyIcon_base_5a',
                        base__c28x28: 'KeyIcon_base__c28x28_d5',
                        base__c30x30: 'KeyIcon_base__c30x30_ba',
                        base__c36x36: 'KeyIcon_base__c36x36_dd',
                        base__gray: 'KeyIcon_base__gray_fc',
                        base__c44x44: 'KeyIcon_base__c44x44_bd',
                        base__c70x70: 'KeyIcon_base__c70x70_61',
                        base__c110x110: 'KeyIcon_base__c110x110_7c',
                    };
                let tu;
                !(function (e) {
                    (e.C28x28 = 'c28x28'),
                        (e.C30x30 = 'c30x30'),
                        (e.C36x36 = 'c36x36'),
                        (e.C44x44 = 'c44x44'),
                        (e.C70x70 = 'c70x70'),
                        (e.C110x110 = 'c110x110');
                })(tu || (tu = {}));
                const nu = r().memo(function ({ size: e, gray: u = !1, isTooltipEnable: t = !1, className: n }) {
                        return r().createElement(
                            q.u,
                            { contentId: R.views.halloween.lobby.tooltips.KeyTooltip('resId'), isEnabled: t },
                            r().createElement('div', {
                                className: h()(uu.base, uu[`base__${e}`], u && uu.base__gray, n),
                            }),
                        );
                    }),
                    ru = {
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
                let au, iu;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(au || (au = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(iu || (iu = {}));
                const su = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: i,
                    mixClass: s,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: E,
                    onMouseLeave: m,
                    onClick: A,
                }) => {
                    const g = (0, n.useRef)(null),
                        F = (0, n.useState)(t),
                        p = F[0],
                        D = F[1],
                        C = (0, n.useState)(!1),
                        B = C[0],
                        b = C[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                p && null !== g.current && !g.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [p]),
                        (0, n.useEffect)(() => {
                            D(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: g,
                                className: h()(
                                    ru.base,
                                    ru[`base__${a}`],
                                    i && ru.base__disabled,
                                    u && ru[`base__${u}`],
                                    p && ru.base__focus,
                                    B && ru.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    i || (null !== o && Re(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    i || (E && E(e), b(!1));
                                },
                                onMouseDown: function (e) {
                                    i ||
                                        (null !== l && Re(l),
                                        d && d(e),
                                        t && (i || (g.current && (g.current.focus(), D(!0)))),
                                        b(!0));
                                },
                                onMouseLeave: function (e) {
                                    i || (m && m(e), b(!1));
                                },
                                onClick: function (e) {
                                    i || (A && A(e));
                                },
                            },
                            a !== au.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: ru.back }),
                                    r().createElement('span', { className: ru.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: h()(ru.state, ru.state__default) },
                                r().createElement('span', { className: ru.stateDisabled }),
                                r().createElement('span', { className: ru.stateHighlightHover }),
                                r().createElement('span', { className: ru.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: ru.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                su.defaultProps = { type: au.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ou = su;
                var lu = t(2372);
                const cu = {
                    base: 'Currency_base_57',
                    icon: 'Currency_icon_c5',
                    base__small: 'Currency_base__small_af',
                    base__big: 'Currency_base__big_bc',
                    base__large: 'Currency_base__large_65',
                    base__extraLarge: 'Currency_base__extraLarge_4d',
                    'icon__credits-small': 'Currency_icon__credits-small_9b',
                    'icon__credits-big': 'Currency_icon__credits-big_96',
                    'icon__credits-large': 'Currency_icon__credits-large_ac',
                    'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                    'icon__gold-small': 'Currency_icon__gold-small_86',
                    'icon__gold-big': 'Currency_icon__gold-big_15',
                    'icon__gold-large': 'Currency_icon__gold-large_36',
                    'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                    'icon__crystal-small': 'Currency_icon__crystal-small_27',
                    'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                    'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                    'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                    'icon__xp-small': 'Currency_icon__xp-small_a7',
                    'icon__xp-big': 'Currency_icon__xp-big_97',
                    'icon__xp-large': 'Currency_icon__xp-large_6b',
                    'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                    'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                    'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                    'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                    'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                    'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                    'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                    'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                    'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
                    'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                    'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                    'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                    'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                    value: 'Currency_value_e1',
                    value__freeXP: 'Currency_value__freeXP_cb',
                    value__credits: 'Currency_value__credits_76',
                    value__gold: 'Currency_value__gold_dd',
                    value__xp: 'Currency_value__xp_b0',
                    value__crystal: 'Currency_value__crystal_19',
                    value__equipCoin: 'Currency_value__equipCoin_d0',
                    value__eliteXP: 'Currency_value__eliteXP_62',
                    value__notEnough: 'Currency_value__notEnough_56',
                    stock: 'Currency_stock_87',
                    stock__indent: 'Currency_stock__indent_a1',
                    stock__interactive: 'Currency_stock__interactive_93',
                    stockBackground: 'Currency_stockBackground_82',
                };
                var _u = t(329);
                const du = (0, n.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: u,
                            size: t,
                            type: n,
                            value: a,
                            discountValue: i,
                            showPlus: s,
                            isEnough: o = !0,
                            stockBackgroundName: l = _u.we.Red,
                            className: c,
                            classNames: _,
                        }) =>
                            r().createElement(
                                'span',
                                { className: h()(cu.base, cu[`base__${t}`], c) },
                                r().createElement(
                                    'span',
                                    {
                                        className: h()(
                                            cu.value,
                                            cu[`value__${n}`],
                                            !o && cu.value__notEnough,
                                            null == _ ? void 0 : _.value,
                                        ),
                                    },
                                    s && a > 0 && '+',
                                    r().createElement(lu.A, {
                                        value: a,
                                        format: n === _u.V2.gold ? 'gold' : 'integral',
                                    }),
                                ),
                                r().createElement('span', {
                                    className: h()(cu.icon, cu[`icon__${n}-${t}`], null == _ ? void 0 : _.icon),
                                }),
                                e &&
                                    r().createElement(
                                        'span',
                                        {
                                            className: h()(
                                                cu.stock,
                                                i && cu.stock__indent,
                                                u && cu.stock__interactive,
                                                null == _ ? void 0 : _.stock,
                                            ),
                                        },
                                        r().createElement('span', {
                                            className: cu.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                        }),
                                        Boolean(i) && i,
                                    ),
                            ),
                    ),
                    Eu = (e, u, t) => (t < e ? e : t > u ? u : t),
                    mu = R.strings.halloween_lobby.bundleView.bundle,
                    Au = ({ id: e, descrGroupKey: u, priceValue: t, className: n }) => {
                        const a = f();
                        return r().createElement(
                            'div',
                            { className: h()('CardHeader_base_6b', n) },
                            r().createElement(fe, {
                                text: u ? mu.header.$dyn(u) : mu.header.$dyn(e),
                                isTruncationAvailable: !0,
                                isTooltipEnable: !0,
                                justifyContent: re.Center,
                                classMix: 'CardHeader_header_f9',
                            }),
                            r().createElement(fe, {
                                key: `${e}${a.mediaSize}`,
                                text: u ? mu.subHeader.$dyn(u) : mu.subHeader.$dyn(e),
                                isTruncationAvailable: !0,
                                isTooltipEnable: !0,
                                justifyContent: re.Center,
                                binding: u
                                    ? { eventName: R.strings.halloween_lobby.bundleView.eventName() }
                                    : { cost: t },
                                classMix: 'CardHeader_subHeader_83',
                            }),
                        );
                    };
                let gu;
                !(function (e) {
                    (e[(e.ZERO = 48)] = 'ZERO'),
                        (e[(e.ONE = 49)] = 'ONE'),
                        (e[(e.TWO = 50)] = 'TWO'),
                        (e[(e.THREE = 51)] = 'THREE'),
                        (e[(e.FOUR = 52)] = 'FOUR'),
                        (e[(e.FIVE = 53)] = 'FIVE'),
                        (e[(e.SIX = 54)] = 'SIX'),
                        (e[(e.SEVEN = 55)] = 'SEVEN'),
                        (e[(e.EIGHT = 56)] = 'EIGHT'),
                        (e[(e.NINE = 57)] = 'NINE'),
                        (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                        (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                        (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                        (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                        (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                        (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                        (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                        (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                        (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                        (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9');
                })(gu || (gu = {}));
                const Fu = 'NumericStepper_containerBnt_91',
                    pu = 'NumericStepper_containerBnt__disable_1d',
                    hu = (0, n.memo)(function ({
                        value: e,
                        minimum: u,
                        maximum: t,
                        stepSize: a = 1,
                        isFocused: s = !0,
                        isDisabled: o = !1,
                        onChange: l = () => null,
                        onKeyDown: c = () => null,
                        isSmall: _ = !1,
                        className: d,
                    }) {
                        const E = (0, n.useState)(e),
                            m = E[0],
                            A = E[1],
                            g = (0, n.useState)(s),
                            F = g[0],
                            p = g[1],
                            D = (0, n.useState)(!1),
                            C = D[0],
                            B = D[1],
                            b = (0, n.useState)(!1),
                            v = b[0],
                            f = b[1],
                            y = (0, n.useState)(!1),
                            w = y[0],
                            S = y[1],
                            x = (0, n.useState)(!1),
                            T = x[0],
                            k = x[1],
                            P = (0, n.useRef)(null),
                            L = (0, n.useRef)(null),
                            N = (0, n.useRef)(e),
                            O = (0, n.useRef)(0),
                            M = (0, n.useRef)(0),
                            I = () => {
                                O.current && clearTimeout(O.current), (O.current = 0);
                            },
                            U = (e) => {
                                const n = Math.min(t, Math.max(u, e));
                                return Math.round(n / a) * a;
                            },
                            H = (e) => {
                                e !== N.current && (A(e), (N.current = e), l(e));
                            },
                            G = (0, n.useCallback)(() => {
                                o || (L.current && (L.current.focus(), p(!0)));
                            }, [o]),
                            W = (0, n.useCallback)(
                                (e) => {
                                    const u = document.activeElement;
                                    F &&
                                        u !== L.current &&
                                        null !== P.current &&
                                        !P.current.contains(e.target) &&
                                        p(!1);
                                },
                                [F],
                            ),
                            $ = () => N.current >= t || o,
                            q = () => N.current <= u || o,
                            j = (0, n.useCallback)(() => {
                                I(), k(!1), S(!1);
                            }, []),
                            V = (0, n.useCallback)(() => {
                                I(), f(!1), B(!1);
                            }, []),
                            X = (e, u) => {
                                L.current && L.current.setSelectionRange(e, u),
                                    setTimeout(() => {
                                        L.current && L.current.setSelectionRange(e, u);
                                    });
                            },
                            z = () => {
                                const e = Math.min(U(N.current) + a, t);
                                H(e);
                                const u = e.toString().length;
                                X(u, u);
                            },
                            K = () => {
                                const e = Math.max(U(N.current) - a, u);
                                H(e);
                                const t = e.toString().length;
                                X(t, t);
                            },
                            Y = (e = 0) => {
                                const u = e === He.n.BACKSPACE,
                                    t = e === He.n.DELETE;
                                if (!L.current) return;
                                const n = L.current.selectionStart || 0,
                                    r = L.current.selectionEnd || 0;
                                let a = L.current.value;
                                const i = Math.max(n, r),
                                    s = i;
                                t && (a = a.substring(0, i) + a.substring(i + 1, a.length)),
                                    u && 1 === n && 1 === a.length && (a = '0');
                                const o = Number(a.trim().replace(/\D/g, '')),
                                    l = Number.isSafeInteger(o) ? o : Number.MAX_SAFE_INTEGER,
                                    c = l.toString(),
                                    _ = !isNaN(Number(a.replace(' ', '')));
                                L.current.value = c;
                                const d = new RegExp(/\d/g);
                                let E = 0;
                                for (let e = 0; e < s; e++) {
                                    const u = a[e] || '',
                                        t = c[E] || '';
                                    if (u.match(d) || u === t) {
                                        for (; u !== c[E] && E < c.length; ) E++;
                                        E++;
                                    }
                                }
                                '' === a ? (E = 1) : _ || (E = a.length),
                                    L.current && L.current.setSelectionRange(0, 0),
                                    X(E, E),
                                    H(l),
                                    M.current && window.clearTimeout(M.current),
                                    (M.current = window.setTimeout(() => {
                                        const e = U(N.current);
                                        e !== N.current && F && (H(e), X(0, e.toString().length));
                                    }, 1e3));
                            },
                            Z = () => {
                                o || i.O.sound.play.highlight();
                            },
                            J = () => {
                                o || i.O.sound.play.click();
                            },
                            ee = (e, u = !1) => {
                                $() ||
                                    (e.persist(),
                                    e.preventDefault(),
                                    I(),
                                    G(),
                                    m < t &&
                                        (!u && J(),
                                        (0 === e.button || u) &&
                                            (z(),
                                            (O.current = window.setTimeout(() => ee(e, !0), u ? 50 : 300)),
                                            B(!0))));
                            },
                            ue = (e, t = !1) => {
                                q() ||
                                    (e.persist(),
                                    e.preventDefault(),
                                    I(),
                                    G(),
                                    m > u &&
                                        (!t && J(),
                                        (0 === e.button || t) &&
                                            (K(),
                                            (O.current = window.setTimeout(() => ue(e, !0), t ? 50 : 300)),
                                            f(!0))));
                            };
                        (0, n.useEffect)(
                            () => (
                                F && G(),
                                document.addEventListener('click', W),
                                document.addEventListener('mouseup', V),
                                () => {
                                    document.removeEventListener('click', W),
                                        document.removeEventListener('mouseup', V);
                                }
                            ),
                            [W, V, G, F],
                        );
                        const te = (function () {
                            const e = (0, n.useRef)(!0);
                            var u;
                            return (
                                (u = () => {
                                    e.current = !1;
                                }),
                                (0, n.useEffect)(u, []),
                                e.current
                            );
                        })();
                        return (
                            (0, n.useEffect)(() => {
                                if (s) {
                                    const e = m.toString().length,
                                        u = L.current && L.current.selectionStart,
                                        t = L.current && L.current.selectionEnd,
                                        n = u === t ? e : u || 0;
                                    te
                                        ? (L.current && L.current.setSelectionRange(n, n), X(n, n))
                                        : (L.current && L.current.setSelectionRange(u, t), X(u || 0, t || 0));
                                }
                            }, [s, m, te]),
                            (0, n.useEffect)(
                                () => () => {
                                    O.current && window.clearTimeout(O.current),
                                        (O.current = 0),
                                        M.current && window.clearTimeout(M.current),
                                        (M.current = 0);
                                },
                                [],
                            ),
                            r().createElement(
                                Q,
                                {
                                    header: R.strings.halloween_lobby.bundleView.tooltip.stepper.header(),
                                    body: R.strings.halloween_lobby.bundleView.tooltip.stepper.body(),
                                },
                                r().createElement(
                                    'div',
                                    {
                                        ref: P,
                                        className: h()(
                                            'NumericStepper_base_55',
                                            F && 'NumericStepper_base__focus_7d',
                                            d,
                                        ),
                                    },
                                    r().createElement(
                                        'div',
                                        { className: 'NumericStepper_container_df' },
                                        r().createElement(
                                            'div',
                                            { className: 'NumericStepper_shadowText_b3' },
                                            Eu(u, t, m),
                                        ),
                                        r().createElement('input', {
                                            ref: L,
                                            className: 'NumericStepper_input_dd',
                                            type: 'text',
                                            value: m.toString(),
                                            disabled: o,
                                            onWheel: (e) => {
                                                !o && F && (e.preventDefault(), e.deltaY < 0 ? K() : z());
                                            },
                                            onChange: () => {
                                                o || Y();
                                            },
                                            onKeyPress: (e) => {
                                                e.which in gu || e.preventDefault();
                                            },
                                            onKeyDown: (e) => {
                                                if (!o) {
                                                    switch (
                                                        (e.keyCode in He.n &&
                                                            e.keyCode !== He.n.BACKSPACE &&
                                                            e.keyCode !== He.n.DELETE &&
                                                            e.preventDefault(),
                                                        e.keyCode)
                                                    ) {
                                                        case He.n.ARROW_UP:
                                                        case He.n.NUM_PLUS:
                                                        case He.n.PLUS:
                                                            C || B(!0), z();
                                                            break;
                                                        case He.n.ARROW_DOWN:
                                                        case He.n.NUM_MINUS:
                                                        case He.n.MINUS:
                                                            v || f(!0), K();
                                                            break;
                                                        case He.n.HOME:
                                                            H(u);
                                                            break;
                                                        case He.n.END:
                                                            H(t);
                                                            break;
                                                        case He.n.ENTER:
                                                            if ((e.nativeEvent.stopImmediatePropagation(), m >= t)) {
                                                                const e = t.toString().length;
                                                                H(t), X(0, e);
                                                            }
                                                            break;
                                                        case He.n.PAGE_UP:
                                                            H(t);
                                                            break;
                                                        case He.n.PAGE_DOWN:
                                                            H(u);
                                                            break;
                                                        case He.n.BACKSPACE:
                                                        case He.n.DELETE:
                                                            ((e) => {
                                                                const u = e.keyCode === He.n.BACKSPACE,
                                                                    t = e.keyCode === He.n.DELETE,
                                                                    n = e.target,
                                                                    r = n.selectionStart,
                                                                    a = n.selectionEnd,
                                                                    i = n.value,
                                                                    s = r !== a,
                                                                    o = new RegExp(/\D/),
                                                                    l = u && r ? r - 1 : r || 0;
                                                                if (s) return;
                                                                let c = l;
                                                                const _ = o.test(i[l]);
                                                                if (t && _) for (; o.test(i[c]) && c < i.length; ) c++;
                                                                if (u && _) for (; o.test(i[c]) && c > 0; ) c--;
                                                                if (c !== l || (u && _))
                                                                    return (
                                                                        e.preventDefault(),
                                                                        (c = c < 0 ? 0 : c),
                                                                        void X(c, c)
                                                                    );
                                                                ((u && 1 === r && 1 === i.length) || t) &&
                                                                    (e.preventDefault(), Y(e.keyCode));
                                                            })(e);
                                                    }
                                                    c(e);
                                                }
                                            },
                                            onKeyUp: (e) => {
                                                if (!o)
                                                    switch (e.keyCode) {
                                                        case He.n.ARROW_UP:
                                                        case He.n.NUM_PLUS:
                                                        case He.n.PLUS:
                                                            B(!1);
                                                            break;
                                                        case He.n.ARROW_DOWN:
                                                        case He.n.NUM_MINUS:
                                                        case He.n.MINUS:
                                                            f(!1);
                                                    }
                                            },
                                            onFocus: G,
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: 'NumericStepper_iconContainer_d5' },
                                            r().createElement(nu, {
                                                isTooltipEnable: !0,
                                                size: _ ? tu.C30x30 : tu.C44x44,
                                                className: 'NumericStepper_icon_13',
                                            }),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: 'NumericStepper_buttons_d6' },
                                            r().createElement(
                                                'div',
                                                {
                                                    className: h()(Fu, $() && pu),
                                                    onClick: G,
                                                    onMouseUp: V,
                                                    onMouseLeave: j,
                                                    onMouseEnter: (e) => {
                                                        S(!0), C && ee(e, !0), $() || Z();
                                                    },
                                                    onMouseDown: ee,
                                                },
                                                r().createElement('div', {
                                                    className: h()(
                                                        'NumericStepper_iconButtonUp_86',
                                                        $() && 'NumericStepper_iconButtonUp__disable_f4',
                                                        C && !$() && 'NumericStepper_iconButtonUp__active_34',
                                                        w && !$() && 'NumericStepper_iconButtonUp__hover_db',
                                                    ),
                                                }),
                                            ),
                                            r().createElement(
                                                'div',
                                                {
                                                    className: h()(Fu, q() && pu),
                                                    onClick: G,
                                                    onMouseUp: V,
                                                    onMouseLeave: j,
                                                    onMouseEnter: (e) => {
                                                        k(!0), v && ue(e, !0), q() || Z();
                                                    },
                                                    onMouseDown: ue,
                                                },
                                                r().createElement('div', {
                                                    className: h()(
                                                        'NumericStepper_iconButtonDown_34',
                                                        q() && 'NumericStepper_iconButtonDown__disable_4f',
                                                        v && !q() && 'NumericStepper_iconButtonDown__active_0c',
                                                        T && !q() && 'NumericStepper_iconButtonDown__hover_08',
                                                    ),
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Du = R.strings.halloween_lobby.bundleView,
                    Cu = ({
                        id: e,
                        keysInBundle: u,
                        maximumBundleCount: t,
                        price: a,
                        index: i,
                        lackOfKeys: s,
                        onClick: o,
                        className: l,
                    }) => {
                        const c = f().mediaSize,
                            _ = (0, n.useState)(s),
                            d = _[0],
                            E = _[1],
                            m = 1 === u,
                            A = c <= B.Small;
                        return r().createElement(
                            'div',
                            { className: h()('KeyCard_base_c1', l) },
                            r().createElement(
                                $,
                                { from: ze, delay: 600 + 150 * i, duration: 750 },
                                r().createElement(
                                    'div',
                                    { className: 'KeyCard_card_7f' },
                                    r().createElement('div', {
                                        className: 'KeyCard_icon_20',
                                        style: { backgroundImage: `url(${Ye(c, e)})` },
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: 'KeyCard_buttonContainer_a8' },
                                        r().createElement(
                                            ou,
                                            {
                                                mixClass: 'KeyCard_button_d9',
                                                type: 'main',
                                                onClick: () => o(e, m ? d : t),
                                            },
                                            Du.btn.keys(),
                                        ),
                                    ),
                                    m
                                        ? r().createElement(hu, {
                                              value: d,
                                              maximum: t,
                                              minimum: 1,
                                              onChange: E,
                                              isSmall: A,
                                              className: 'KeyCard_numericContainer_e6',
                                          })
                                        : r().createElement(
                                              'div',
                                              { className: 'KeyCard_keyContainer_85' },
                                              r().createElement('div', { className: 'KeyCard_keyNumber_29' }, u),
                                              r().createElement(nu, {
                                                  isTooltipEnable: !0,
                                                  className: 'KeyCard_key_c5',
                                                  size: A ? tu.C28x28 : tu.C70x70,
                                              }),
                                          ),
                                    r().createElement(
                                        'div',
                                        { className: 'KeyCard_currencyContainer_c8' },
                                        r().createElement(du, {
                                            type: a.name,
                                            className: h()(!a.isEnough && 'KeyCard_currency__enough_11'),
                                            value: m ? Eu(1 * a.value, t * a.value, a.value * d) : a.value,
                                            size: A ? 'big' : 'large',
                                        }),
                                    ),
                                    r().createElement(Au, { id: e, priceValue: a.value }),
                                ),
                            ),
                        );
                    };
                let Bu, bu, vu, fu, yu, wu, Su, xu;
                var Tu;
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
                })(Bu || (Bu = {})),
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
                    })(bu || (bu = {})),
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
                    })(vu || (vu = {})),
                    ((Tu = fu || (fu = {})).MULTI = 'multi'),
                    (Tu.CURRENCY = 'currency'),
                    (Tu.PREMIUM_PLUS = 'premium_plus'),
                    (Tu.NUMBER = 'number'),
                    (Tu.STRING = 'string'),
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
                    })(yu || (yu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(wu || (wu = {})),
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
                    })(Su || (Su = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(xu || (xu = {}));
                const Ru = [
                        Bu.Items,
                        Bu.Equipment,
                        Bu.Xp,
                        Bu.XpFactor,
                        Bu.Blueprints,
                        Bu.BlueprintsAny,
                        Bu.Goodies,
                        Bu.Berths,
                        Bu.Slots,
                        Bu.Tokens,
                        Bu.CrewSkins,
                        Bu.CrewBooks,
                        Bu.Customizations,
                        Bu.CreditsFactor,
                        Bu.TankmenXp,
                        Bu.TankmenXpFactor,
                        Bu.FreeXpFactor,
                        Bu.BattleToken,
                        Bu.PremiumUniversal,
                        Bu.NaturalCover,
                        Bu.BpCoin,
                        Bu.BattlePassSelectToken,
                        Bu.BattlaPassFinalAchievement,
                        Bu.BattleBadge,
                        Bu.BonusX5,
                        Bu.CrewBonusX3,
                        Bu.NewYearInvoice,
                        Bu.EpicSelectToken,
                        Bu.Comp7TokenWeeklyReward,
                        Bu.DeluxeGift,
                        Bu.BattleBoosterGift,
                        Bu.OptionalDevice,
                    ],
                    ku = [Bu.Gold, Bu.Credits, Bu.Crystal, Bu.FreeXp],
                    Pu = [Bu.BattlePassPoints, Bu.EquipCoin],
                    Lu = [Bu.PremiumPlus, Bu.Premium],
                    Nu = (e) =>
                        Ru.includes(e)
                            ? fu.MULTI
                            : ku.includes(e)
                              ? fu.CURRENCY
                              : Pu.includes(e)
                                ? fu.NUMBER
                                : Lu.includes(e)
                                  ? fu.PREMIUM_PLUS
                                  : fu.STRING,
                    Ou = ['engravings', 'backgrounds'],
                    Mu = ['engraving', 'background'],
                    Iu = [vu.Small, vu.Big],
                    Uu = {
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
                    Hu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = vu.Big,
                        special: a,
                        value: i,
                        valueType: s,
                        title: o,
                        style: l,
                        className: c,
                        classNames: _,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const m = ((e, u) => {
                                if (void 0 === u || !Iu.includes(e)) return null;
                                switch (u) {
                                    case yu.BATTLE_BOOSTER:
                                    case yu.BATTLE_BOOSTER_REPLACE:
                                        return wu.BATTLE_BOOSTER;
                                }
                            })(n, a),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case yu.BATTLE_BOOSTER:
                                        return Su.BATTLE_BOOSTER;
                                    case yu.BATTLE_BOOSTER_REPLACE:
                                        return Su.BATTLE_BOOSTER_REPLACE;
                                    case yu.BUILT_IN_EQUIPMENT:
                                        return Su.BUILT_IN_EQUIPMENT;
                                    case yu.EQUIPMENT_PLUS:
                                        return Su.EQUIPMENT_PLUS;
                                    case yu.EQUIPMENT_TROPHY_BASIC:
                                        return Su.EQUIPMENT_TROPHY_BASIC;
                                    case yu.EQUIPMENT_TROPHY_UPGRADED:
                                        return Su.EQUIPMENT_TROPHY_UPGRADED;
                                    case yu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Su.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case yu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Su.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case yu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Su.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case yu.PROGRESSION_STYLE_UPGRADED_1:
                                        return Su.PROGRESSION_STYLE_UPGRADED_1;
                                    case yu.PROGRESSION_STYLE_UPGRADED_2:
                                        return Su.PROGRESSION_STYLE_UPGRADED_2;
                                    case yu.PROGRESSION_STYLE_UPGRADED_3:
                                        return Su.PROGRESSION_STYLE_UPGRADED_3;
                                    case yu.PROGRESSION_STYLE_UPGRADED_4:
                                        return Su.PROGRESSION_STYLE_UPGRADED_4;
                                    case yu.PROGRESSION_STYLE_UPGRADED_5:
                                        return Su.PROGRESSION_STYLE_UPGRADED_5;
                                    case yu.PROGRESSION_STYLE_UPGRADED_6:
                                        return Su.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(a),
                            g = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case fu.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case fu.CURRENCY:
                                    case fu.NUMBER:
                                        return r().createElement(lu.A, { format: 'integral', value: Number(e) });
                                    case fu.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(i, s);
                        return r().createElement(
                            'div',
                            { className: h()(Uu.base, Uu[`base__${n}`], c), style: l },
                            r().createElement(
                                J,
                                { tooltipArgs: d, className: Uu.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: h()(Uu.image, null == _ ? void 0 : _.image) },
                                        m &&
                                            r().createElement('div', {
                                                className: h()(Uu.highlight, null == _ ? void 0 : _.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            r().createElement('div', {
                                                className: h()(Uu.icon, null == _ ? void 0 : _.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        A &&
                                            r().createElement('div', {
                                                className: h()(Uu.overlay, null == _ ? void 0 : _.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    Uu.info,
                                                    Uu[`info__${e}`],
                                                    s === fu.MULTI && Uu.info__multi,
                                                    null == _ ? void 0 : _.info,
                                                ),
                                            },
                                            g,
                                        ),
                                    o && r().createElement('div', { className: Uu.title }, o),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    J,
                                    { tooltipArgs: E },
                                    r().createElement('div', {
                                        className: h()(Uu.timer, null == _ ? void 0 : _.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Gu = 'hw_bonus_crew_100',
                    Wu = (e, u = vu.Small) => {
                        switch (e.name) {
                            case 'hw_artefact_key':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.keys`;
                            case 'vehicles':
                            case 'items':
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                            case 'hw_artefact':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.video`;
                            case Gu:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.bonus_crew`;
                            case 'tokens':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                        }
                        return ((e, u = vu.Small) => {
                            const t = e.name,
                                n = e.type,
                                r = e.value,
                                a = e.icon,
                                i = e.item,
                                s = e.dogTagType,
                                o = ((e) => {
                                    switch (e) {
                                        case vu.S600x450:
                                            return 'c_600x450';
                                        case vu.S400x300:
                                            return 'c_400x300';
                                        case vu.S296x222:
                                            return 'c_296x222';
                                        case vu.S232x174:
                                            return 'c_232x174';
                                        case vu.Big:
                                            return 'c_80x80';
                                        case vu.Small:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(u);
                            switch (t) {
                                case 'basic':
                                case 'plus':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${r}`;
                                case 'premium':
                                case 'premium_plus':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                                case 'items':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                                case 'blueprints':
                                case 'blueprintsAny':
                                case 'finalBlueprints':
                                    return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                                case 'tokens':
                                case 'lootBox':
                                case 'battleToken':
                                    return 'big' === u
                                        ? e.iconBig.replace('..', 'img://gui')
                                        : e.iconSmall.replace('..', 'img://gui');
                                case 'customizations':
                                case 'styleProgress':
                                case 'crewSkins':
                                case 'goodies':
                                case 'groups':
                                case 'tmanToken':
                                case 'battlePassSelectToken':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                                case 'crewBooks':
                                    return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                                case 'dogTagComponents':
                                    return ((e, u, t) => {
                                        const n = Ou[e];
                                        if (n) {
                                            const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                                a = r.$dyn(t);
                                            return a ? `${a}` : `${r.$dyn(Mu[e])}`;
                                        }
                                        return (
                                            console.error(
                                                'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                            ),
                                            ''
                                        );
                                    })(s, u, a);
                                case 'dossier_badge':
                                    return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${a}`;
                                case 'dossier_achievement':
                                    return `R.images.gui.maps.icons.achievement.${o}.${a}`;
                                case 'xp':
                                case 'xpFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                                case 'creditsFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                                case 'tankmenXPFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                                case 'dailyXPFactor':
                                case 'freeXPFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                                case 'premiumTank':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                                case 'styleProgressToken':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                                case 'collectionItem':
                                    return `R.images.gui.maps.icons.collectionItems.${o}.${a}`;
                                default:
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                            }
                        })(e, u);
                    },
                    $u = (e) =>
                        Nu(e.name) === fu.MULTI && e.value.startsWith('x') ? e.value.replace('x', '') : e.value,
                    qu = (e) =>
                        e.name === Gu
                            ? {
                                  contentId:
                                      R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                          'resId',
                                      ),
                                  header: R.strings.halloween_tooltips.hw_bonus_crew_100.header(),
                                  body: R.strings.halloween_tooltips.hw_bonus_crew_100.body(),
                              }
                            : ((e, u, t) => {
                                  const n = u && { contentId: u };
                                  return Object.assign(
                                      {
                                          args: e,
                                          isEnabled: Boolean((e && e.tooltipId) || u),
                                          ignoreMouseClick: !0,
                                          ignoreShowDelay: !u,
                                      },
                                      n,
                                      void 0,
                                  );
                              })({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                    ju = 'ShopCard_dot_42',
                    Vu = 'ShopCard_reward_32',
                    Xu = R.strings.halloween_lobby.bundleView,
                    zu = { tension: 220, friction: 16 },
                    Ku = ({
                        id: e,
                        descrGroupKey: u,
                        keysInBundle: t,
                        index: a,
                        bonuses: s,
                        price: o,
                        onClick: l,
                        className: c,
                    }) => {
                        const _ = (0, n.useState)(!1),
                            d = _[0],
                            E = _[1],
                            m = (0, n.useState)(!1),
                            A = m[0],
                            g = m[1],
                            F = f().mediaSize,
                            p = F <= B.Small,
                            D = ((e, u) =>
                                e.length % u == 1
                                    ? {
                                          bonusesHead: [...Ie(e, 0, e.length - 3)],
                                          bonusesTail: [...Ie(e, e.length - 2)],
                                      }
                                    : { bonusesHead: e, bonusesTail: void 0 })(s, Qe(F).countInRow),
                            C = ((e, u, t) => {
                                const n = Qe(u),
                                    r = n.countInRow,
                                    a = n.cardHeight,
                                    i = n.gap,
                                    s = Math.ceil(e / r),
                                    o = 224 * t,
                                    l = (60 * s + 70 + 56) * t;
                                return {
                                    rows: s,
                                    oneColumnHeight: o,
                                    allColumnHeight: l,
                                    oneColumnRatio: (o + i) / a / t,
                                    allColumnRatio: (l + i) / a / t,
                                };
                            })(
                                s.length,
                                F,
                                (() => {
                                    const e = (0, n.useState)(i.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                t(i.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        u
                                    );
                                })(),
                            ),
                            b = C.rows,
                            v = C.oneColumnHeight,
                            y = C.allColumnHeight,
                            w = C.oneColumnRatio,
                            S = C.allColumnRatio,
                            x = 1 === b,
                            T = (function () {
                                const e = (0, n.useRef)(!1);
                                return !e.current && ((e.current = !0), !0);
                            })(),
                            R = (0, I.useSpring)(() => ({ y: 0 })),
                            k = R[0],
                            P = R[1],
                            L = (0, I.useSpring)(() => ({ transform: 'scale(1, 0)' })),
                            N = L[0],
                            O = L[1];
                        return (
                            (0, n.useEffect)(() => {
                                p && A && !x
                                    ? (O.start({
                                          from: d ? { transform: `scale(1, ${w})` } : { transform: `scale(1, ${S})` },
                                          to: d ? { transform: `scale(1, ${S})` } : { transform: `scale(1, ${w})` },
                                          immediate: T,
                                          config: zu,
                                      }),
                                      P.start({
                                          from: d ? { y: -v } : { y: -y },
                                          to: d ? { y: -y } : { y: -v },
                                          immediate: T,
                                          config: zu,
                                      }))
                                    : (O.set({ transform: `scale(1, ${S})` }), P.set({ y: -y }));
                            }, [P, O, T, d, p, y, v, w, S, A, x]),
                            r().createElement(
                                'div',
                                {
                                    className: h()(
                                        'ShopCard_base_3a',
                                        p && 'ShopCard_base__small_c8',
                                        T && 'ShopCard_base__first_cc',
                                        d && !x && 'ShopCard_base__hover_53',
                                        x && 'ShopCard_base__oneRow_63',
                                        c,
                                    ),
                                    onMouseEnter: () => {
                                        A && p && (E(!0), i.O.sound.play.highlight());
                                    },
                                    onMouseLeave: () => {
                                        A && p && E(!1);
                                    },
                                },
                                r().createElement(
                                    $,
                                    {
                                        from: ze,
                                        delay: 600 + 150 * a,
                                        duration: 750,
                                        isCanceled: A,
                                        onRest: () => g(!0),
                                    },
                                    r().createElement(
                                        'div',
                                        { className: 'ShopCard_card_40' },
                                        r().createElement('div', {
                                            className: 'ShopCard_icon_7a',
                                            style: { backgroundImage: `url(${Ye(F, e)})` },
                                        }),
                                        r().createElement(I.animated.div, {
                                            key: `${e}_${a}_gray`,
                                            style: N,
                                            className: 'ShopCard_overlayGray_28',
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: 'ShopCard_dividerDots_cd' },
                                            r().createElement('span', { className: ju }),
                                            r().createElement('span', { className: ju }),
                                            r().createElement('span', { className: ju }),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: 'ShopCard_mask_e4' },
                                            r().createElement(
                                                I.animated.div,
                                                { key: `${e}_${a}`, style: k, className: 'ShopCard_overlayRewards_91' },
                                                r().createElement(
                                                    'div',
                                                    { className: 'ShopCard_keyContainer_fe' },
                                                    r().createElement('div', { className: 'ShopCard_keyNumber_95' }, t),
                                                    r().createElement(nu, {
                                                        isTooltipEnable: !0,
                                                        className: 'ShopCard_key_2f',
                                                        size: p ? tu.C28x28 : tu.C70x70,
                                                    }),
                                                ),
                                                r().createElement('div', { className: 'ShopCard_dividerPlus_c0' }),
                                                r().createElement(
                                                    'div',
                                                    { className: 'ShopCard_rewardsList_52' },
                                                    Me(D.bonusesHead, (e, u) =>
                                                        r().createElement(Hu, {
                                                            key: `bonusesHead${e.name}${u}`,
                                                            name: e.name,
                                                            value: $u(e),
                                                            special: e.overlayType,
                                                            image: Wu(e, vu.Small),
                                                            valueType: Nu(e.name),
                                                            tooltipArgs: qu(e),
                                                            size: vu.Small,
                                                            className: Vu,
                                                        }),
                                                    ),
                                                ),
                                                D.bonusesTail &&
                                                    r().createElement(
                                                        'div',
                                                        { className: 'ShopCard_rewardsListTail_3b' },
                                                        D.bonusesTail.map((e, u) =>
                                                            r().createElement(Hu, {
                                                                key: `bonusesTail${e.name}${u}`,
                                                                name: e.name,
                                                                value: $u(e),
                                                                special: e.overlayType,
                                                                image: Wu(e, vu.Small),
                                                                valueType: Nu(e.name),
                                                                tooltipArgs: qu(e),
                                                                size: vu.Small,
                                                                className: Vu,
                                                            }),
                                                        ),
                                                    ),
                                            ),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: 'ShopCard_buttonContainer_7b' },
                                            r().createElement(
                                                ou,
                                                { mixClass: 'ShopCard_button_0c', onClick: () => l(e, 1) },
                                                Xu.btn.shop(),
                                            ),
                                        ),
                                        r().createElement(Au, {
                                            id: e,
                                            descrGroupKey: u,
                                            priceValue: o.value,
                                            className: h()(
                                                'ShopCard_cardHeader_67',
                                                b >= 3 && 'ShopCard_cardHeader__hover_ed',
                                            ),
                                        }),
                                    ),
                                ),
                            )
                        );
                    };
                function Yu() {
                    return (
                        (Yu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Yu.apply(null, arguments)
                    );
                }
                const Qu = R.strings.halloween_lobby.bundleView,
                    Zu = (e) => {
                        switch (e) {
                            case Ue.Decrypt:
                                return Qu.subTitle.decrypt();
                            case Ue.Skip:
                                return Qu.subTitle.skip();
                            default:
                                return '';
                        }
                    },
                    Ju = (0, Ve.Pi)(() => {
                        const e = eu(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            a = n.lackOfKeys,
                            i = n.windowType;
                        var s;
                        return (
                            (s = t.close),
                            We(He.n.ESCAPE, s),
                            r().createElement(
                                'div',
                                { className: 'BundleViewApp_base_2b' },
                                r().createElement(
                                    $,
                                    { from: ze, delay: 300, duration: 750, className: 'BundleViewApp_topContainer_89' },
                                    r().createElement(Te, {
                                        text: Qu.title(),
                                        type: we.Heading,
                                        className: 'BundleViewApp_title_d2',
                                        justifyContent: re.Center,
                                        shadow: !0,
                                    }),
                                    i !== Ue.KeyWidget &&
                                        Boolean(a) &&
                                        r().createElement(fe, {
                                            text: Zu(i),
                                            binding: {
                                                key: r().createElement(Te, {
                                                    text: a.toString(),
                                                    type: we.MetaHeading,
                                                    className: 'BundleViewApp_keyText_3e',
                                                    justifyContent: re.Center,
                                                    shadow: !0,
                                                }),
                                            },
                                            classMix: 'BundleViewApp_subTitle_d2',
                                            justifyContent: re.Center,
                                        }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'BundleViewApp_cards_6a' },
                                    Me(u.bundles.get(), (e, u) =>
                                        r().createElement(
                                            'div',
                                            { key: `cards${u}` },
                                            e.isShopBundle
                                                ? 0 !== e.maximumBundleCount &&
                                                      r().createElement(
                                                          Ku,
                                                          Yu({}, e, { onClick: t.purchase, index: u }),
                                                      )
                                                : 0 !== e.maximumBundleCount &&
                                                      r().createElement(
                                                          Cu,
                                                          Yu({}, e, { lackOfKeys: a, onClick: t.purchase, index: u }),
                                                      ),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'BundleViewApp_topRight_04' },
                                    r().createElement(Xe.d, {
                                        resId: R.views.halloween.lobby.widgets.MoneyBalance('resId'),
                                    }),
                                    r().createElement(Ne, {
                                        classNames: { base: 'BundleViewApp_closeButton_86' },
                                        caption: R.strings.halloween_lobby.common.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.close,
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    O().render(
                        r().createElement(Je, null, r().createElement(L, null, r().createElement(Ju, null))),
                        document.getElementById('root'),
                    );
                });
            },
            4437: (e, u, t) => {
                'use strict';
                t.d(u, { d: () => B });
                var n = t(6179),
                    r = t.n(n),
                    a = t(329),
                    i = t(3403),
                    s = t(3215),
                    o = t(4598);
                const l = (0, s.q)()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            crystalsTooltip: e.object('crystalsTooltip'),
                            goldTooltip: e.object('goldTooltip'),
                            creditsTooltip: e.object('creditsTooltip'),
                            freeExpTooltip: e.object('freeExpTooltip'),
                        }),
                        o.ZT,
                    ),
                    c = l[0],
                    _ = l[1];
                var d = t(6483),
                    E = t.n(d),
                    m = t(2372),
                    A = t(2056);
                let g;
                !(function (e) {
                    (e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent');
                })(g || (g = {}));
                const F = () =>
                        r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(
                                'div',
                                { className: 'Waiting_waiting_59' },
                                r().createElement('div', { className: 'Waiting_frame1_9e' }, '- '),
                                r().createElement('div', { className: 'Waiting_frame2_5e' }, '- '),
                                r().createElement('div', { className: 'Waiting_frame3_fe' }, '- '),
                            ),
                            r().createElement('div', { className: 'Waiting_alertIcon_50' }),
                        ),
                    p = {
                        base: 'CurrencyItem_base_5d',
                        base__credits: 'CurrencyItem_base__credits_cd',
                        base__gold: 'CurrencyItem_base__gold_66',
                        icon: 'CurrencyItem_icon_a7',
                        base__crystal: 'CurrencyItem_base__crystal_5a',
                        base__freeXP: 'CurrencyItem_base__freeXP_25',
                        base__equipCoin: 'CurrencyItem_base__equipCoin_83',
                    };
                function h() {
                    return (
                        (h = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        h.apply(null, arguments)
                    );
                }
                const D = ({ resId: e, value: u, currencyType: t, isWGMAvailable: n, tooltip: i }) => {
                        const s = t === a.V2.gold ? 'gold' : 'integral',
                            o =
                                ((c = { currency: t }),
                                {
                                    isEnabled: (l = i.type) !== g.absent,
                                    args: c,
                                    contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                    decoratorId:
                                        l === g.normal
                                            ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                            : void 0,
                                    ignoreShowDelay: l === g.backport,
                                    ignoreMouseClick: !0,
                                });
                        var l, c;
                        return r().createElement(
                            A.u,
                            h({ targetId: e }, o),
                            r().createElement(
                                'div',
                                { className: E()(p.base, p[`base__${t}`]) },
                                r().createElement('div', { className: p.icon }),
                                n ? r().createElement(m.A, { value: u, format: s }) : r().createElement(F, null),
                            ),
                        );
                    },
                    C = (0, i.Pi)(({ resId: e }) => {
                        const u = _().model,
                            t = u.root.get(),
                            n = t.gold,
                            i = t.crystals,
                            s = t.credits,
                            o = t.freeExp,
                            l = t.isWGMAvailable;
                        return r().createElement(
                            'div',
                            { className: 'MoneyBalanceApp_base_3e' },
                            -1 !== i &&
                                r().createElement(D, {
                                    key: a.V2.crystal,
                                    value: i,
                                    currencyType: a.V2.crystal,
                                    isWGMAvailable: l,
                                    tooltip: u.creditsTooltip.get(),
                                    resId: e,
                                }),
                            -1 !== n &&
                                r().createElement(D, {
                                    key: a.V2.gold,
                                    value: n,
                                    currencyType: a.V2.gold,
                                    isWGMAvailable: l,
                                    tooltip: u.goldTooltip.get(),
                                    resId: e,
                                }),
                            -1 !== s &&
                                r().createElement(D, {
                                    key: a.V2.credits,
                                    value: s,
                                    currencyType: a.V2.credits,
                                    isWGMAvailable: l,
                                    tooltip: u.creditsTooltip.get(),
                                    resId: e,
                                }),
                            -1 !== o &&
                                r().createElement(D, {
                                    key: a.V2.freeXP,
                                    value: o,
                                    currencyType: a.V2.freeXP,
                                    isWGMAvailable: l,
                                    tooltip: u.freeExpTooltip.get(),
                                    resId: e,
                                }),
                        );
                    }),
                    B = ({ resId: e }) => {
                        const u = (0, n.useMemo)(() => ({ rootId: e }), [e]);
                        return r().createElement(c, { options: u }, r().createElement(C, { resId: e }));
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
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], a = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (__webpack_require__.j = 108),
        (() => {
            var e = { 108: 0, 124: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, i, s] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        (r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(1355));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
