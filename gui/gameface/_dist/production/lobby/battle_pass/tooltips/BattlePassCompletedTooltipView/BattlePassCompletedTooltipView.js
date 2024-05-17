(() => {
    'use strict';
    var e,
        t = {
            585: (e, t, n) => {
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => h, off: () => w, on: () => b, onResize: () => g, onScaleUpdated: () => p });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => _,
                        getSize: () => y,
                        graphicsQuality: () => x,
                    });
                var a = {};
                n.r(a), n.d(a, { getBgUrl: () => C, getTextureUrl: () => P });
                var i = {};
                n.r(i),
                    n.d(i, {
                        addModelObserver: () => L,
                        addPreloadTexture: () => B,
                        children: () => a,
                        displayStatus: () => O,
                        displayStatusIs: () => ee,
                        events: () => T,
                        extraSize: () => te,
                        forceTriggerMouseMove: () => K,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => I,
                        getDisplayStatus: () => Z,
                        getScale: () => W,
                        getSize: () => V,
                        getViewGlobalPosition: () => G,
                        isEventHandled: () => J,
                        isFocused: () => Y,
                        pxToRem: () => q,
                        remToPx: () => U,
                        resize: () => H,
                        sendEvent: () => A,
                        setAnimateWindow: () => Q,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => ne,
                    });
                var s = n(6179),
                    l = n.n(s),
                    c = n(493),
                    u = n.n(c),
                    d = n(6483),
                    m = n.n(d);
                function v(e) {
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
                const g = v('clientResized'),
                    p = v('self.onScaleUpdated'),
                    b = (e, t) => engine.on(e, t),
                    w = (e, t) => engine.off(e, t),
                    E = { down: v('mousedown'), up: v('mouseup'), move: v('mousemove') };
                const h = (function () {
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
                                    const a = `mouse${t}`,
                                        i = E[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        r(),
                                        () => {
                                            o &&
                                                (i(),
                                                window.removeEventListener(a, s),
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
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(e = 'px') {
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
                function C(e, t, n) {
                    return `url(${P(e, t, n)})`;
                }
                const O = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    T = {
                        onTextureFrozen: v('self.onTextureFrozen'),
                        onTextureReady: v('self.onTextureReady'),
                        onDomBuilt: v('self.onDomBuilt'),
                        onLoaded: v('self.onLoaded'),
                        onDisplayChanged: v('self.onShowingStatusChanged'),
                        onFocusUpdated: v('self.onFocusChanged'),
                        children: {
                            onAdded: v('children.onAdded'),
                            onLoaded: v('children.onLoaded'),
                            onRemoved: v('children.onRemoved'),
                            onAttached: v('children.onAttached'),
                            onTextureReady: v('children.onTextureReady'),
                            onRequestPosition: v('children.requestPosition'),
                        },
                    },
                    S = ['args'];
                const k = 2,
                    M = 16,
                    N = 32,
                    z = 64,
                    j = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, S);
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
                    A = {
                        close(e) {
                            j('popover' === e ? k : N);
                        },
                        minimize() {
                            j(z);
                        },
                        move(e) {
                            j(M, { isMouseEvent: !0, on: e });
                        },
                    };
                function B(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function I(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function L(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function V(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function H(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function G(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: U(t.x), y: U(t.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function W() {
                    return viewEnv.getScale();
                }
                function q(e) {
                    return viewEnv.pxToRem(e);
                }
                function U(e) {
                    return viewEnv.remToPx(e);
                }
                function Q(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Y() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function J() {
                    return viewEnv.isEventHandled();
                }
                function K() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const ee = Object.keys(O).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === O[t]), e), {}),
                    te = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ne = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : T.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    re = { view: i, client: o };
                function oe() {
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
                }
                const ae = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ie = ['children', 'className', 'theme'];
                function se() {
                    return (
                        (se =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        se.apply(this, arguments)
                    );
                }
                const le = l().forwardRef(function (e, t) {
                    let n = e.children,
                        r = e.className,
                        o = e.theme,
                        a = void 0 === o ? 'default' : o,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o;
                        })(e, ie);
                    const c = oe(),
                        u = l().useRef(null);
                    var d;
                    return (
                        (d = () => {
                            c.run(() => {
                                const e = u.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                re.view.resize(t, n);
                                const r = window.getComputedStyle(e);
                                re.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, s.useEffect)(d, []),
                        l().createElement(
                            'div',
                            se({}, i, {
                                className: m()(ae.base, ae[`base__theme-${a}`], r),
                                ref: function (e) {
                                    (u.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                },
                            }),
                            l().createElement('div', { className: ae.decorator }, n),
                        )
                    );
                });
                var ce = n(3403),
                    ue = n(8487);
                let de;
                function me() {}
                !(function (e) {
                    (e.COMMON = 'common'), (e.EXTRA = 'extra'), (e.HOLIDAY = 'holiday');
                })(de || (de = {}));
                function ve() {
                    return !1;
                }
                console.log;
                var fe = n(9174);
                function ge(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return pe(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return pe(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function pe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const be = (e) => (0 === e ? window : window.subViews.get(e));
                var we = n(3946);
                const Ee = ((e, t) => {
                        const n = (0, s.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: a, mocks: i }) {
                                const c = (0, s.useRef)([]),
                                    u = (n, r, o) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = be,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function a(e, t = 0) {
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
                                                const i = (e) => {
                                                    const o = n(t),
                                                        a = r.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (n, a) => {
                                                        const s = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = re.view.addModelObserver(s, t, !0);
                                                        return o.set(l, n), e && n(i(a)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const n = i(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = ge(o.keys()); !(e = n()).done; ) a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            s =
                                                'real' === n
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == o ? void 0 : o.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === n ? (null == o ? void 0 : o.getter(e)) : s.readByPath(e),
                                            u = (e) => c.current.push(e),
                                            d = e({
                                                mode: n,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : l(e),
                                                            o = fe.LO.box(r, { equals: ve });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, fe.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : l(e),
                                                            o = fe.LO.box(r, { equals: ve });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, fe.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = l(t);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, t) => ((e[t] = fe.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, fe.aD)((t) => {
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
                                                                i = a.reduce(
                                                                    (e, [t, n]) => ((e[n] = fe.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, fe.aD)((e) => {
                                                                            a.forEach(([t, n]) => {
                                                                                i[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            m = { mode: n, model: d, externalModel: s, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === n && o ? o.controls(m) : t(m),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    d = (0, s.useRef)(!1),
                                    m = (0, s.useState)(r),
                                    v = m[0],
                                    f = m[1],
                                    g = (0, s.useState)(() => u(r, o, i)),
                                    p = g[0],
                                    b = g[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? b(u(v, o, i)) : (d.current = !0);
                                    }, [i, v, o]),
                                    (0, s.useEffect)(() => {
                                        f(r);
                                    }, [r]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            p.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [p],
                                    ),
                                    l().createElement(n.Provider, { value: p }, a)
                                );
                            },
                            () => (0, s.useContext)(n),
                        ];
                    })(({ observableModel: e }) => {
                        const t = { root: e.object() },
                            n = (0, we.Om)(() => t.root.get().chapterType === de.HOLIDAY);
                        return Object.assign({}, t, { computes: { isHoliday: n } });
                    }, me),
                    he = Ee[0],
                    ye = Ee[1],
                    _e = 'Message_base_12',
                    xe = 'Message_separator_9c',
                    Pe = 'Message_content_6d',
                    Ce = 'Message_text_03',
                    Re = ({ text: e }) =>
                        l().createElement(
                            'div',
                            { className: _e },
                            l().createElement('div', { className: xe }),
                            l().createElement('div', { className: Pe }, l().createElement('div', { className: Ce }, e)),
                            l().createElement('div', { className: xe }),
                        ),
                    Oe = 'Content_base_c5',
                    Te = 'Content_base__noDescription_3f',
                    Se = 'Content_title_e5',
                    ke = 'Content_subTitle_bf',
                    Me = 'Content_tank_95',
                    Ne = 'Content_footer_1a',
                    ze = 'Content_flare_50',
                    je = 'Content_messageWrapper_e3',
                    Ae = 'Content_info_f4',
                    Be = 'Content_unlock_f4',
                    De = 'CustomContent_background_f2',
                    Ie = 'CustomContent_tank_74',
                    Le = 'CustomContent_footer_dd',
                    Fe = 'CustomContent_messageWrapper_79',
                    Ve = 'CustomContent_textWrapper_33',
                    He = 'CustomContent_check_37',
                    Ge = 'CustomContent_text_e9',
                    $e = R.strings.battle_pass.tooltips,
                    We = (0, ce.Pi)(() => {
                        const e = ye().model.root.get().isBattlePassPurchased;
                        return l().createElement(
                            l().Fragment,
                            null,
                            l().createElement('div', { className: De }),
                            l().createElement('div', { className: Ie }),
                            l().createElement(
                                'div',
                                { className: Le },
                                l().createElement(
                                    'div',
                                    { className: Fe },
                                    l().createElement(Re, {
                                        text: l().createElement(
                                            'div',
                                            { className: Ve },
                                            l().createElement('div', {
                                                className: He,
                                                style: {
                                                    backgroundImage: `url(${e ? R.images.gui.maps.icons.battlePass.tooltips.double_check() : R.images.gui.maps.icons.battlePass.tooltips.check()})`,
                                                },
                                            }),
                                            l().createElement(
                                                'div',
                                                { className: Ge },
                                                e ? $e.completed.claimRewards() : $e.completed.rewardsObtained(),
                                            ),
                                        ),
                                    }),
                                ),
                            ),
                        );
                    }),
                    qe = R.strings.battle_pass.tooltips,
                    Ue = (0, ce.Pi)(() => {
                        const e = ye().model,
                            t = e.root.get(),
                            n = t.isBattlePassPurchased,
                            r = t.notChosenRewardCount,
                            o = t.isAvailableTankmen,
                            a = r > 0,
                            i = e.computes.isHoliday();
                        return l().createElement(
                            'div',
                            { className: m()(Oe, n && !a && !o && Te) },
                            l().createElement('div', { className: Se }, qe.completed.title()),
                            l().createElement(
                                'div',
                                { className: ke },
                                i ? qe.completed.oneChapterSubTitle() : qe.completed.subTitle(),
                            ),
                            i
                                ? l().createElement(We, null)
                                : l().createElement(
                                      l().Fragment,
                                      null,
                                      l().createElement('div', { className: Me }),
                                      l().createElement(
                                          'div',
                                          { className: Ne },
                                          l().createElement('div', { className: ze }),
                                          l().createElement(
                                              'div',
                                              { className: je },
                                              l().createElement(Re, { text: qe.completed.message() }),
                                          ),
                                      ),
                                  ),
                            l().createElement(
                                'div',
                                { className: Ae },
                                a &&
                                    l().createElement(ue.l, {
                                        icon: R.images.gui.maps.icons.battlePass.tooltips.bow_small(),
                                        text: r > 1 ? qe.claimRewards.multiple() : qe.claimRewards.c_1(),
                                        mixClass: Be,
                                    }),
                                !n &&
                                    l().createElement(ue.l, {
                                        icon: R.images.gui.maps.icons.battlePass.progression.icon_lock_current_small(),
                                        text: qe.unlockBattlePass(),
                                        mixClass: Be,
                                    }),
                                o &&
                                    l().createElement(ue.l, {
                                        icon: R.images.gui.maps.icons.battlePass.icons.tankmen_small(),
                                        text: qe.completed.tankmenNotRecieved(),
                                        mixClass: m()(Be),
                                    }),
                            ),
                        );
                    }),
                    Qe = () => l().createElement(le, null, l().createElement(Ue, null));
                engine.whenReady.then(() => {
                    u().render(
                        l().createElement(he, null, l().createElement(Qe, null)),
                        document.getElementById('root'),
                    );
                });
            },
            8487: (e, t, n) => {
                n.d(t, { l: () => u });
                var r = n(6179),
                    o = n.n(r),
                    a = n(6483),
                    i = n.n(a);
                const s = 'IconTextBlock_base_46',
                    l = 'IconTextBlock_icon_c9',
                    c = 'IconTextBlock_text_89',
                    u = (0, r.memo)(({ icon: e, text: t, mixClass: n }) => {
                        const a = (0, r.useMemo)(() => ({ backgroundImage: `url(${e})` }), [e]),
                            u = i()(s, n);
                        return o().createElement(
                            'div',
                            { className: u },
                            o().createElement('div', { className: l, style: a }),
                            o().createElement('div', { className: c }, t),
                        );
                    });
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var a = (n[e] = { exports: {} });
        return t[e](a, a.exports, r), a.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, n, o, a) => {
            if (!n) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, o, a] = e[u], s = !0, l = 0; l < n.length; l++)
                        (!1 & a || i >= a) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), a < i && (i = a));
                    if (s) {
                        e.splice(u--, 1);
                        var c = o();
                        void 0 !== c && (t = c);
                    }
                }
                return t;
            }
            a = a || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
            e[u] = [n, o, a];
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
        (r.j = 3299),
        (() => {
            var e = { 3299: 0, 8109: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        a,
                        [i, s, l] = n,
                        c = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var u = l(r);
                    }
                    for (t && t(n); c < i.length; c++) (a = i[c]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [1519], () => r(585));
    o = r.O(o);
})();
