(() => {
    'use strict';
    var e,
        t = {
            13: (e, t, n) => {
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => y, off: () => w, on: () => p, onResize: () => b, onScaleUpdated: () => g });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => E,
                        getSize: () => _,
                        graphicsQuality: () => x,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => T, getTextureUrl: () => P });
                var a = {};
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => k,
                        addPreloadTexture: () => M,
                        children: () => i,
                        displayStatus: () => C,
                        displayStatusIs: () => K,
                        events: () => O,
                        extraSize: () => X,
                        forceTriggerMouseMove: () => W,
                        freezeTextureBeforeResize: () => I,
                        getBrowserTexturePath: () => F,
                        getDisplayStatus: () => J,
                        getScale: () => N,
                        getSize: () => V,
                        getViewGlobalPosition: () => B,
                        isEventHandled: () => Q,
                        isFocused: () => q,
                        pxToRem: () => G,
                        remToPx: () => $,
                        resize: () => L,
                        sendEvent: () => z,
                        setAnimateWindow: () => H,
                        setEventHandled: () => U,
                        setInputPaddingsRem: () => A,
                        setSidePaddingsRem: () => D,
                        whenTutorialReady: () => Y,
                    });
                var s = n(6179),
                    c = n.n(s),
                    u = n(493),
                    l = n.n(u),
                    d = n(6483),
                    v = n.n(d);
                function m(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function f(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const b = m('clientResized'),
                    g = m('self.onScaleUpdated'),
                    p = (e, t) => engine.on(e, t),
                    w = (e, t) => engine.off(e, t),
                    h = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') },
                    y = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && f(!1);
                        }
                        function n() {
                            e.enabled && f(!0);
                        }
                        function r() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', n))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', n))
                                : f(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const i = `mouse${t}`,
                                            a = h[t]((e) => n([e, 'outside']));
                                        function s(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            r(),
                                            () => {
                                                o &&
                                                    (a(),
                                                    window.removeEventListener(i, s),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (o = !1));
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
                                (e.enabled = !1), r();
                            },
                            enable() {
                                (e.enabled = !0), r();
                            },
                            enableOutside() {
                                e.enabled && f(!0);
                            },
                            disableOutside() {
                                e.enabled && f(!1);
                            },
                        });
                    })();
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const x = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function P(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function T(e, t, n) {
                    return `url(${P(e, t, n)})`;
                }
                const C = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    O = {
                        onTextureFrozen: m('self.onTextureFrozen'),
                        onTextureReady: m('self.onTextureReady'),
                        onDomBuilt: m('self.onDomBuilt'),
                        onLoaded: m('self.onLoaded'),
                        onDisplayChanged: m('self.onShowingStatusChanged'),
                        onFocusUpdated: m('self.onFocusChanged'),
                        children: {
                            onAdded: m('children.onAdded'),
                            onLoaded: m('children.onLoaded'),
                            onRemoved: m('children.onRemoved'),
                            onAttached: m('children.onAttached'),
                            onTextureReady: m('children.onTextureReady'),
                            onRequestPosition: m('children.requestPosition'),
                        },
                    },
                    S = ['args'],
                    j = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, S);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    z = {
                        close(e) {
                            j('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            j(64);
                        },
                        move(e) {
                            j(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function M(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function A(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function F(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function k(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function V(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function L(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function B(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: $(t.x), y: $(t.y) };
                }
                function I() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function N() {
                    return viewEnv.getScale();
                }
                function G(e) {
                    return viewEnv.pxToRem(e);
                }
                function $(e) {
                    return viewEnv.remToPx(e);
                }
                function H(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function U() {
                    return viewEnv.setEventHandled();
                }
                function Q() {
                    return viewEnv.isEventHandled();
                }
                function W() {
                    viewEnv.forceTriggerMouseMove();
                }
                function J() {
                    return viewEnv.getShowingStatus();
                }
                const K = Object.keys(C).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === C[t]), e), {}),
                    X = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    Y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : O.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Z = { view: a, client: o };
                const ee = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    te = ['children', 'className', 'theme'];
                function ne() {
                    return (
                        (ne =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ne.apply(this, arguments)
                    );
                }
                const re = c().forwardRef(function (e, t) {
                    let n = e.children,
                        r = e.className,
                        o = e.theme,
                        i = void 0 === o ? 'default' : o,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o;
                        })(e, te);
                    const u = (function () {
                            const e = (0, s.useRef)(0);
                            var t;
                            return (
                                (t = () => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, s.useEffect)(() => t, []),
                                (0, s.useMemo)(
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
                        l = c().useRef(null);
                    var d;
                    return (
                        (d = () => {
                            u.run(() => {
                                const e = l.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                Z.view.resize(t, n);
                                const r = window.getComputedStyle(e);
                                Z.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, s.useEffect)(d, []),
                        c().createElement(
                            'div',
                            ne({}, a, {
                                className: v()(ee.base, ee[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (l.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                },
                            }),
                            c().createElement('div', { className: ee.decorator }, n),
                        )
                    );
                });
                var oe = n(3403);
                function ie() {
                    return !1;
                }
                console.log;
                var ae = n(9174);
                function se(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const ce = (e) => (0 === e ? window : window.subViews.get(e));
                var ue = n(3946);
                const le = ['credits', 'xp', 'brcoin'],
                    de = ((e, t) => {
                        const n = (0, s.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: i }) {
                                const a = (0, s.useRef)([]),
                                    u = (e, n, r) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = ce,
                                                context: r = 'model',
                                            } = {}) {
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
                                                const a = (e) => {
                                                    const o = n(t),
                                                        i = r.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const s = 'string' == typeof i ? `${r}.${i}` : r,
                                                            c = Z.view.addModelObserver(s, t, !0);
                                                        return o.set(c, n), e && n(a(i)), c;
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, t) => {
                                                        const n = a(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = a(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return se(e, t);
                                                                                var n = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? se(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(o.keys());
                                                            !(e = n()).done;

                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            s =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (o = null == r ? void 0 : r.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            c = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : s.readByPath(t),
                                            u = (e) => a.current.push(e),
                                            l = (({ observableModel: e }) => {
                                                const t = { root: e.object() },
                                                    n = (0, ue.Om)(() => le.includes(t.root.get().currencyType));
                                                return Object.assign({}, t, { computes: { isPremFactor: n } });
                                            })({
                                                mode: e,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const r = null != n ? n : c(t),
                                                            o = ae.LO.box(r, { equals: ie });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ae.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const r = null != n ? n : c(t),
                                                            o = ae.LO.box(r, { equals: ie });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ae.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const r = c(n);
                                                        if (Array.isArray(t)) {
                                                            const o = t.reduce(
                                                                (e, t) => ((e[t] = ae.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ae.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                o[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = t,
                                                                i = Object.entries(o),
                                                                a = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = ae.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ae.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                a[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            d = { mode: e, model: l, externalModel: s, cleanup: u };
                                        return {
                                            model: l,
                                            controls: 'mocks' === e && r ? r.controls(d) : t(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    l = (0, s.useRef)(!1),
                                    d = (0, s.useState)(e),
                                    v = d[0],
                                    m = d[1],
                                    f = (0, s.useState)(() => u(e, r, i)),
                                    b = f[0],
                                    g = f[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        l.current ? g(u(v, r, i)) : (l.current = !0);
                                    }, [i, v, r]),
                                    (0, s.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            b.externalModel.dispose(), a.current.forEach((e) => e());
                                        },
                                        [b],
                                    ),
                                    c().createElement(n.Provider, { value: b }, o)
                                );
                            },
                            () => (0, s.useContext)(n),
                        ];
                    })(0, function () {}),
                    ve = de[0],
                    me = de[1],
                    fe = {
                        base: 'Content_base_27',
                        separator: 'Content_separator_70',
                        whiteGradient: 'Content_whiteGradient_83',
                        title: 'Content_title_7d',
                        description: 'Content_description_aa',
                        content: 'Content_content_ed',
                        textContent: 'Content_textContent_dc',
                        icon: 'Content_icon_f9',
                        base__credits: 'Content_base__credits_03',
                        base__crystal: 'Content_base__crystal_f5',
                        base__xp: 'Content_base__xp_cb',
                        base__battlePassPoints: 'Content_base__battlePassPoints_9c',
                        base__brcoin: 'Content_base__brcoin_13',
                        base__brProgressionToken: 'Content_base__brProgressionToken_b5',
                        premiumFooter: 'Content_premiumFooter_1c',
                        premiumIcon: 'Content_premiumIcon_73',
                        premiumText: 'Content_premiumText_1b',
                    },
                    be = R.strings.battle_royale.rewardCurrencyTooltip,
                    ge = (0, oe.Pi)(() => {
                        const e = me().model,
                            t = e.root.get().currencyType,
                            n =
                                ((r = be),
                                (o = t),
                                (e) =>
                                    ((e, t) => {
                                        const n = e.$dyn(t);
                                        if ('string' == typeof n) return n;
                                        throw new Error(`ReadString  ${t} is invalid `);
                                    })(
                                        ((e, t) => {
                                            const n = e.$dyn(t);
                                            if ('object' == typeof n && null !== n) return n;
                                            throw new Error(`ReadFolder ${t} is invalid `);
                                        })(r, o),
                                        e,
                                    ));
                        var r, o;
                        return c().createElement(
                            'div',
                            { className: v()(fe.base, fe[`base__${t}`]) },
                            c().createElement(
                                'div',
                                { className: fe.content },
                                c().createElement('div', { className: fe.icon }),
                                c().createElement(
                                    'div',
                                    { className: fe.textContent },
                                    c().createElement('div', { className: fe.title }, n('header')),
                                    c().createElement('div', { className: fe.description }, n('body')),
                                ),
                            ),
                            e.computes.isPremFactor() &&
                                c().createElement(
                                    'div',
                                    { className: fe.premiumFooter },
                                    c().createElement('div', { className: fe.premiumIcon }),
                                    c().createElement('div', { className: fe.premiumText }, n('premFactor')),
                                ),
                        );
                    }),
                    pe = () => c().createElement(re, null, c().createElement(ge, null));
                engine.whenReady.then(() => {
                    l().render(
                        c().createElement(ve, null, c().createElement(pe, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = (n[e] = { exports: {} });
        return t[e](i, i.exports, r), i.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, n, o, i) => {
            if (!n) {
                var a = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [n, o, i] = e[l], s = !0, c = 0; c < n.length; c++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](n[c]))
                            ? n.splice(c--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(l--, 1);
                        var u = o();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) e[l] = e[l - 1];
            e[l] = [n, o, i];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, { a: t }), t;
        }),
        (r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.j = 121),
        (() => {
            var e = { 121: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        i,
                        [a, s, c] = n,
                        u = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (c) var l = c(r);
                    }
                    for (t && t(n); u < a.length; u++) (i = a[u]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [503], () => r(13));
    o = r.O(o);
})();
