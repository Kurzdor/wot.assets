(() => {
    'use strict';
    var e,
        n = {
            9634: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => y, off: () => w, on: () => p, onResize: () => b, onScaleUpdated: () => g });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => P,
                        getSize: () => x,
                        graphicsQuality: () => T,
                        playSound: () => _,
                        setRTPC: () => E,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => j, getTextureUrl: () => z });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => N,
                        addPreloadTexture: () => L,
                        children: () => i,
                        displayStatus: () => M,
                        displayStatusIs: () => te,
                        events: () => A,
                        extraSize: () => re,
                        forceTriggerMouseMove: () => ee,
                        freezeTextureBeforeResize: () => U,
                        getBrowserTexturePath: () => I,
                        getDisplayStatus: () => ne,
                        getScale: () => Q,
                        getSize: () => G,
                        getViewGlobalPosition: () => q,
                        isEventHandled: () => Z,
                        isFocused: () => X,
                        pxToRem: () => W,
                        remToPx: () => J,
                        resize: () => H,
                        sendEvent: () => D,
                        setAnimateWindow: () => K,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => B,
                        setSidePaddingsRem: () => $,
                        whenTutorialReady: () => oe,
                    });
                var s = t(6179),
                    c = t.n(s),
                    u = t(493),
                    l = t.n(u),
                    d = t(6483),
                    v = t.n(d);
                function m(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function f(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const b = m('clientResized'),
                    g = m('self.onScaleUpdated'),
                    p = (e, n) => engine.on(e, n),
                    w = (e, n) => engine.off(e, n),
                    h = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') },
                    y = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function n() {
                            e.enabled && f(!1);
                        }
                        function t() {
                            e.enabled && f(!0);
                        }
                        function r() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', n),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', n),
                                      document.body.addEventListener('mouseleave', t))
                                : f(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (n, t) => (
                                (n[t] = (function (n) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const i = `mouse${n}`,
                                            a = h[n]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
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
                                })(t)),
                                n
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
                function _(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function E(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const T = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    C = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    S = Object.keys(C).reduce((e, n) => ((e[n] = () => _(C[n])), e), {}),
                    O = { play: Object.assign({}, S, { sound: _ }), setRTPC: E };
                function z(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function j(e, n, t) {
                    return `url(${z(e, n, t)})`;
                }
                const M = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    A = {
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
                    F = ['args'],
                    k = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const o = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (n.indexOf(r) >= 0) continue;
                                            t[r] = e[r];
                                        }
                                    return t;
                                })(n, F);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, n]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof n) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: n };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: n };
                                                      default:
                                                          return { __Type: t, name: e, string: n.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    D = {
                        close(e) {
                            k('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            k(64);
                        },
                        move(e) {
                            k(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    V = 15;
                function L(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, V);
                }
                function I(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function N(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, V);
                }
                function G(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function H(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function q(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: J(n.x), y: J(n.y) };
                }
                function U() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Q() {
                    return viewEnv.getScale();
                }
                function W(e) {
                    return viewEnv.pxToRem(e);
                }
                function J(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function X() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function Z() {
                    return viewEnv.isEventHandled();
                }
                function ee() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ne() {
                    return viewEnv.getShowingStatus();
                }
                const te = Object.keys(M).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === M[n]), e), {}),
                    re = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    oe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : A.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ie = { view: a, client: o, sound: O };
                const ae = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    se = ['children', 'className', 'theme'];
                function ce() {
                    return (
                        (ce = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        ce.apply(null, arguments)
                    );
                }
                const ue = c().forwardRef(function (e, n) {
                    let t = e.children,
                        r = e.className,
                        o = e.theme,
                        i = void 0 === o ? 'default' : o,
                        a = (function (e, n) {
                            if (null == e) return {};
                            var t = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (n.indexOf(r) >= 0) continue;
                                    t[r] = e[r];
                                }
                            return t;
                        })(e, se);
                    const u = (function () {
                            const e = (0, s.useRef)(0);
                            var n;
                            return (
                                (n = () => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, s.useEffect)(() => n, []),
                                (0, s.useMemo)(
                                    () => ({
                                        run: (n) => {
                                            window.cancelAnimationFrame(e.current),
                                                (e.current = window.requestAnimationFrame(() => {
                                                    e.current = window.requestAnimationFrame(() => {
                                                        n(), (e.current = 0);
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
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                ie.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                ie.view.setSidePaddingsRem({
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
                            ce({}, a, {
                                className: v()(ae.base, ae[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            c().createElement('div', { className: ae.decorator }, t),
                        )
                    );
                });
                var le = t(3403);
                function de() {
                    return !1;
                }
                console.log;
                var ve = t(9174);
                function me(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const fe = (e) => (0 === e ? window : window.subViews.get(e));
                var be = t(3946);
                const ge = ['credits', 'xp', 'brcoin'],
                    pe = ((e, n) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: i }) {
                                const a = (0, s.useRef)([]),
                                    u = (e, t, r) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = fe,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function i(e, n = 0) {
                                                    viewEnv.removeDataChangedCallback(e, n)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, n, t) => {
                                                        t.forEach((n) => {
                                                            const t = o.get(n);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const o = t(n),
                                                        i = r.split('.').reduce((e, n) => e[n], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, n) => {
                                                              const t = e[n];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (t, i) => {
                                                        const s = 'string' == typeof i ? `${r}.${i}` : r,
                                                            c = ie.view.addModelObserver(s, n, !0);
                                                        return o.set(c, t), e && t(a(i)), c;
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, n) => {
                                                        const t = a(n);
                                                        return (...n) => {
                                                            t(e(...n));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const n = a(e);
                                                        return () => {
                                                            n();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                t = (function (e, n) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, n) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return me(e, n);
                                                                                var t = {}.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? me(e, n)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (n && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
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
                                                            !(e = t()).done;

                                                        )
                                                            i(e.value, n);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (o = null == r ? void 0 : r.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            c = (n) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(n)) : s.readByPath(n),
                                            u = (e) => a.current.push(e),
                                            l = (({ observableModel: e }) => {
                                                const n = { root: e.object() },
                                                    t = (0, be.Om)(() => ge.includes(n.root.get().currencyType));
                                                return Object.assign({}, n, { computes: { isPremFactor: t } });
                                            })({
                                                mode: e,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (n, t) => {
                                                        const r = null != t ? t : c(n),
                                                            o = ve.LO.box(r, { equals: de });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ve.aD)((e) => o.set(e)),
                                                                    n,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (n, t) => {
                                                        const r = null != t ? t : c(n),
                                                            o = ve.LO.box(r, { equals: de });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ve.aD)((e) => o.set(e)),
                                                                    n,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (n, t) => {
                                                        const r = c(t);
                                                        if (Array.isArray(n)) {
                                                            const o = n.reduce(
                                                                (e, n) => ((e[n] = ve.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ve.aD)((e) => {
                                                                            n.forEach((n) => {
                                                                                o[n].set(e[n]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = n,
                                                                i = Object.entries(o),
                                                                a = i.reduce(
                                                                    (e, [n, t]) => ((e[t] = ve.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ve.aD)((e) => {
                                                                            i.forEach(([n, t]) => {
                                                                                a[t].set(e[n]);
                                                                            });
                                                                        }),
                                                                        t,
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
                                            controls: 'mocks' === e && r ? r.controls(d) : n(d),
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
                                    c().createElement(t.Provider, { value: b }, o)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(0, function () {}),
                    we = pe[0],
                    he = pe[1],
                    ye = {
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
                    _e = R.strings.battle_royale.rewardCurrencyTooltip,
                    Ee = (0, le.Pi)(() => {
                        const e = he().model,
                            n = e.root.get().currencyType,
                            t =
                                ((r = _e),
                                (o = n),
                                (e) =>
                                    ((e, n) => {
                                        const t = e.$dyn(n);
                                        if ('string' == typeof t) return t;
                                        throw new Error(`ReadString  ${n} is invalid `);
                                    })(
                                        ((e, n) => {
                                            const t = e.$dyn(n);
                                            if ('object' == typeof t && null !== t) return t;
                                            throw new Error(`ReadFolder ${n} is invalid `);
                                        })(r, o),
                                        e,
                                    ));
                        var r, o;
                        return c().createElement(
                            'div',
                            { className: v()(ye.base, ye[`base__${n}`]) },
                            c().createElement(
                                'div',
                                { className: ye.content },
                                c().createElement('div', { className: ye.icon }),
                                c().createElement(
                                    'div',
                                    { className: ye.textContent },
                                    c().createElement('div', { className: ye.title }, t('header')),
                                    c().createElement('div', { className: ye.description }, t('body')),
                                ),
                            ),
                            e.computes.isPremFactor() &&
                                c().createElement(
                                    'div',
                                    { className: ye.premiumFooter },
                                    c().createElement('div', { className: ye.premiumIcon }),
                                    c().createElement('div', { className: ye.premiumText }, t('premFactor')),
                                ),
                        );
                    }),
                    xe = () => c().createElement(ue, null, c().createElement(Ee, null));
                engine.whenReady.then(() => {
                    l().render(
                        c().createElement(we, null, c().createElement(xe, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        t = {};
    function r(e) {
        var o = t[e];
        if (void 0 !== o) return o.exports;
        var i = (t[e] = { exports: {} });
        return n[e](i, i.exports, r), i.exports;
    }
    (r.m = n),
        (e = []),
        (r.O = (n, t, o, i) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [t, o, i] = e[l], s = !0, c = 0; c < t.length; c++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[c]))
                            ? t.splice(c--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(l--, 1);
                        var u = o();
                        void 0 !== u && (n = u);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) e[l] = e[l - 1];
            e[l] = [t, o, i];
        }),
        (r.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return r.d(n, { a: n }), n;
        }),
        (r.d = (e, n) => {
            for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (r.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.j = 121),
        (() => {
            var e = { 121: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var o,
                        i,
                        [a, s, c] = t,
                        u = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (c) var l = c(r);
                    }
                    for (n && n(t); u < a.length; u++) (i = a[u]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var o = r.O(void 0, [503], () => r(9634));
    o = r.O(o);
})();
