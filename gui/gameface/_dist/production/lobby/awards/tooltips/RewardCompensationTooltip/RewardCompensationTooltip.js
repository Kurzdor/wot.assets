(() => {
    'use strict';
    var u,
        e = {
            225: (u, e, F) => {
                var A = {};
                F.r(A),
                    F.d(A, { mouse: () => c, off: () => s, on: () => C, onResize: () => a, onScaleUpdated: () => i });
                var t = {};
                F.r(t),
                    F.d(t, {
                        events: () => A,
                        getMouseGlobalPosition: () => f,
                        getSize: () => m,
                        graphicsQuality: () => b,
                        playSound: () => d,
                        setRTPC: () => v,
                    });
                var n = {};
                F.r(n), F.d(n, { getBgUrl: () => y, getTextureUrl: () => w });
                var E = {};
                F.r(E),
                    F.d(E, {
                        addModelObserver: () => $,
                        addPreloadTexture: () => j,
                        children: () => n,
                        displayStatus: () => _,
                        displayStatusIs: () => Fu,
                        events: () => x,
                        extraSize: () => Au,
                        forceTriggerMouseMove: () => uu,
                        freezeTextureBeforeResize: () => U,
                        getBrowserTexturePath: () => I,
                        getDisplayStatus: () => eu,
                        getScale: () => Q,
                        getSize: () => G,
                        getViewGlobalPosition: () => q,
                        isEventHandled: () => Y,
                        isFocused: () => K,
                        pxToRem: () => W,
                        remToPx: () => Z,
                        resize: () => H,
                        sendEvent: () => L,
                        setAnimateWindow: () => J,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => M,
                        setSidePaddingsRem: () => V,
                        whenTutorialReady: () => tu,
                    });
                var r = F(483),
                    o = F.n(r);
                function D(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function B(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                const a = D('clientResized'),
                    i = D('self.onScaleUpdated'),
                    C = (u, e) => engine.on(u, e),
                    s = (u, e) => engine.off(u, e),
                    l = { down: D('mousedown'), up: D('mouseup'), move: D('mousemove') };
                const c = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && B(!1);
                    }
                    function F() {
                        u.enabled && B(!0);
                    }
                    function A() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', F))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', F))
                            : B(!1);
                    }
                    const t = ['down', 'up', 'move'].reduce(
                        (e, F) => (
                            (e[F] = (function (e) {
                                return (F) => {
                                    u.listeners += 1;
                                    let t = !0;
                                    const n = `mouse${e}`,
                                        E = l[e]((u) => F([u, 'outside']));
                                    function r(u) {
                                        F([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, r),
                                        A(),
                                        () => {
                                            t &&
                                                (E(),
                                                window.removeEventListener(n, r),
                                                (u.listeners -= 1),
                                                A(),
                                                (t = !1));
                                        }
                                    );
                                };
                            })(F)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, t, {
                        disable() {
                            (u.enabled = !1), A();
                        },
                        enable() {
                            (u.enabled = !0), A();
                        },
                        enableOutside() {
                            u.enabled && B(!0);
                        },
                        disableOutside() {
                            u.enabled && B(!1);
                        },
                    });
                })();
                function d(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function v(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((F) => {
                        console.error(`setRTPC('${u}', '${e}'): `, F);
                    });
                }
                function m(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function f(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    p = Object.keys(g).reduce((u, e) => ((u[e] = () => d(g[e])), u), {}),
                    h = { play: Object.assign({}, p, { sound: d }), setRTPC: v };
                function w(u, e, F = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, F);
                }
                function y(u, e, F) {
                    return `url(${w(u, e, F)})`;
                }
                const _ = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    x = {
                        onTextureFrozen: D('self.onTextureFrozen'),
                        onTextureReady: D('self.onTextureReady'),
                        onDomBuilt: D('self.onDomBuilt'),
                        onLoaded: D('self.onLoaded'),
                        onDisplayChanged: D('self.onShowingStatusChanged'),
                        onFocusUpdated: D('self.onFocusChanged'),
                        children: {
                            onAdded: D('children.onAdded'),
                            onLoaded: D('children.onLoaded'),
                            onRemoved: D('children.onRemoved'),
                            onAttached: D('children.onAttached'),
                            onTextureReady: D('children.onTextureReady'),
                            onRequestPosition: D('children.requestPosition'),
                        },
                    },
                    T = ['args'];
                const P = 2,
                    S = 16,
                    k = 32,
                    O = 64,
                    N = (u, e) => {
                        const F = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const t = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var F = {};
                                    for (var A in u)
                                        if ({}.hasOwnProperty.call(u, A)) {
                                            if (e.indexOf(A) >= 0) continue;
                                            F[A] = u[A];
                                        }
                                    return F;
                                })(e, T);
                            return void 0 !== t
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: F, type: u }, n, {
                                          arguments:
                                              ((A = t),
                                              Object.entries(A).map(([u, e]) => {
                                                  const F = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: F, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: F, name: u, bool: e };
                                                      default:
                                                          return { __Type: F, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: F, type: u }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: F, type: u });
                        var A;
                    },
                    L = {
                        close(u) {
                            N('popover' === u ? P : k);
                        },
                        minimize() {
                            N(O);
                        },
                        move(u) {
                            N(S, { isMouseEvent: !0, on: u });
                        },
                    },
                    z = 15;
                function j(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function M(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, z);
                }
                function I(u, e, F, A = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, F, A);
                }
                function $(u, e, F) {
                    return viewEnv.addDataChangedCallback(u, e, F);
                }
                function V(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, z);
                }
                function G(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function H(u, e, F = 'px') {
                    return 'rem' === F ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function q(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: Z(e.x), y: Z(e.y) };
                }
                function U() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Q() {
                    return viewEnv.getScale();
                }
                function W(u) {
                    return viewEnv.pxToRem(u);
                }
                function Z(u) {
                    return viewEnv.remToPx(u);
                }
                function J(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function K() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function uu() {
                    viewEnv.forceTriggerMouseMove();
                }
                function eu() {
                    return viewEnv.getShowingStatus();
                }
                const Fu = Object.keys(_).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === _[e]), u), {}),
                    Au = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    tu = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : x.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    nu = { view: E, client: t, sound: h };
                var Eu = F(179),
                    ru = F.n(Eu);
                function ou() {
                    const u = (0, Eu.useRef)(0);
                    var e;
                    return (
                        (e = () => {
                            window.cancelAnimationFrame(u.current);
                        }),
                        (0, Eu.useEffect)(() => e, []),
                        (0, Eu.useMemo)(
                            () => ({
                                run: (e) => {
                                    window.cancelAnimationFrame(u.current),
                                        (u.current = window.requestAnimationFrame(() => {
                                            u.current = window.requestAnimationFrame(() => {
                                                e(), (u.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(u.current), (u.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== u.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const Du = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    Bu = ['children', 'className', 'theme'];
                function au() {
                    return (
                        (au = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var F = arguments[e];
                                      for (var A in F) ({}).hasOwnProperty.call(F, A) && (u[A] = F[A]);
                                  }
                                  return u;
                              }),
                        au.apply(null, arguments)
                    );
                }
                const iu = ru().forwardRef(function (u, e) {
                    let F = u.children,
                        A = u.className,
                        t = u.theme,
                        n = void 0 === t ? 'default' : t,
                        E = (function (u, e) {
                            if (null == u) return {};
                            var F = {};
                            for (var A in u)
                                if ({}.hasOwnProperty.call(u, A)) {
                                    if (e.indexOf(A) >= 0) continue;
                                    F[A] = u[A];
                                }
                            return F;
                        })(u, Bu);
                    const r = ou(),
                        D = ru().useRef(null);
                    var B;
                    return (
                        (B = () => {
                            r.run(() => {
                                const u = D.current;
                                if (!u) return;
                                const e = u.scrollWidth,
                                    F = u.scrollHeight;
                                nu.view.resize(e, F);
                                const A = window.getComputedStyle(u);
                                nu.view.setSidePaddingsRem({
                                    left: parseInt(A.getPropertyValue('padding-left'), 10),
                                    top: parseInt(A.getPropertyValue('padding-top'), 10),
                                    right: parseInt(A.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(A.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, Eu.useEffect)(B, []),
                        ru().createElement(
                            'div',
                            au({}, E, {
                                className: o()(Du.base, Du[`base__theme-${n}`], A),
                                ref: function (u) {
                                    (D.current = u), 'function' == typeof e ? e(u) : e && (e.current = u);
                                },
                            }),
                            ru().createElement('div', { className: Du.decorator }, F),
                        )
                    );
                });
                var Cu = F(493),
                    su = F.n(Cu),
                    lu = F(403);
                function cu() {}
                function du() {
                    return !1;
                }
                console.log;
                var vu = F(174);
                function mu(u, e) {
                    var F = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (F) return (F = F.call(u)).next.bind(F);
                    if (
                        Array.isArray(u) ||
                        (F = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return fu(u, e);
                                var F = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === F && u.constructor && (F = u.constructor.name),
                                    'Map' === F || 'Set' === F
                                        ? Array.from(u)
                                        : 'Arguments' === F || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)
                                          ? fu(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        F && (u = F);
                        var A = 0;
                        return function () {
                            return A >= u.length ? { done: !0 } : { done: !1, value: u[A++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function fu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var F = 0, A = Array(e); F < e; F++) A[F] = u[F];
                    return A;
                }
                const bu = (u) => (0 === u ? window : window.subViews.get(u));
                const gu = ((u, e) => {
                        const F = (0, Eu.createContext)({});
                        return [
                            function ({ mode: A = 'real', options: t, children: n, mocks: E }) {
                                const r = (0, Eu.useRef)([]),
                                    o = (F, A, t) => {
                                        var n;
                                        const E = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: F = bu,
                                                context: A = 'model',
                                            } = {}) {
                                                const t = new Map();
                                                function n(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? t.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, F) => {
                                                        F.forEach((e) => {
                                                            const F = t.get(e);
                                                            void 0 !== F && F(u);
                                                        });
                                                    });
                                                });
                                                const E = (u) => {
                                                    const t = F(e),
                                                        n = A.split('.').reduce((u, e) => u[e], t);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? n
                                                        : u.split('.').reduce((u, e) => {
                                                              const F = u[e];
                                                              return 'function' == typeof F ? F.bind(u) : F;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (F, n) => {
                                                        const r = 'string' == typeof n ? `${A}.${n}` : A,
                                                            o = nu.view.addModelObserver(r, e, !0);
                                                        return t.set(o, F), u && F(E(n)), o;
                                                    },
                                                    readByPath: E,
                                                    createCallback: (u, e) => {
                                                        const F = E(e);
                                                        return (...e) => {
                                                            F(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = E(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, F = mu(t.keys()); !(u = F()).done; ) n(u.value, e);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(A),
                                            o =
                                                'real' === F
                                                    ? E
                                                    : Object.assign({}, E, {
                                                          readByPath:
                                                              null != (n = null == t ? void 0 : t.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            D = (u) =>
                                                'mocks' === F ? (null == t ? void 0 : t.getter(u)) : o.readByPath(u),
                                            B = (u) => r.current.push(u),
                                            a = u({
                                                mode: F,
                                                readByPath: D,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const A = null != e ? e : D(u),
                                                            t = vu.LO.box(A, { equals: du });
                                                        return (
                                                            'real' === F &&
                                                                o.subscribe(
                                                                    (0, vu.aD)((u) => t.set(u)),
                                                                    u,
                                                                ),
                                                            t
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const A = null != e ? e : D(u),
                                                            t = vu.LO.box(A, { equals: du });
                                                        return (
                                                            'real' === F &&
                                                                o.subscribe(
                                                                    (0, vu.aD)((u) => t.set(u)),
                                                                    u,
                                                                ),
                                                            t
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const A = D(e);
                                                        if (Array.isArray(u)) {
                                                            const t = u.reduce(
                                                                (u, e) => ((u[e] = vu.LO.box(A[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === F &&
                                                                    o.subscribe(
                                                                        (0, vu.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                t[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                t
                                                            );
                                                        }
                                                        {
                                                            const t = u,
                                                                n = Object.entries(t),
                                                                E = n.reduce(
                                                                    (u, [e, F]) => ((u[F] = vu.LO.box(A[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === F &&
                                                                    o.subscribe(
                                                                        (0, vu.aD)((u) => {
                                                                            n.forEach(([e, F]) => {
                                                                                E[F].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                E
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: B,
                                            }),
                                            i = { mode: F, model: a, externalModel: o, cleanup: B };
                                        return {
                                            model: a,
                                            controls: 'mocks' === F && t ? t.controls(i) : e(i),
                                            externalModel: o,
                                            mode: F,
                                        };
                                    },
                                    D = (0, Eu.useRef)(!1),
                                    B = (0, Eu.useState)(A),
                                    a = B[0],
                                    i = B[1],
                                    C = (0, Eu.useState)(() => o(A, t, E)),
                                    s = C[0],
                                    l = C[1];
                                return (
                                    (0, Eu.useEffect)(() => {
                                        D.current ? l(o(a, t, E)) : (D.current = !0);
                                    }, [E, a, t]),
                                    (0, Eu.useEffect)(() => {
                                        i(A);
                                    }, [A]),
                                    (0, Eu.useEffect)(
                                        () => () => {
                                            s.externalModel.dispose(), r.current.forEach((u) => u());
                                        },
                                        [s],
                                    ),
                                    ru().createElement(F.Provider, { value: s }, n)
                                );
                            },
                            () => (0, Eu.useContext)(F),
                        ];
                    })(({ observableModel: u }) => ({ root: u.object() }), cu),
                    pu = gu[0],
                    hu = gu[1],
                    wu = {
                        base: 'App_base_b0',
                        base__base: 'App_base__base_85',
                        base__crewSkin: 'App_base__crewSkin_40',
                        header: 'App_header_17',
                        subheader: 'App_subheader_bf',
                        content: 'App_content_ca',
                    },
                    yu = 'Footer_base_ba',
                    _u = 'Footer_icon_e1',
                    xu = 'Footer_text_7a',
                    Tu = () =>
                        ru().createElement(
                            'div',
                            { className: yu },
                            ru().createElement('div', { className: _u }),
                            ru().createElement(
                                'div',
                                { className: xu },
                                R.strings.lootboxes.compensationTooltip.vehicle.bottomText(),
                            ),
                        ),
                    Pu = 'vehicle',
                    Su = {
                        base: 'Content_base_e9',
                        separator: 'Content_separator_b5',
                        separator__top: 'Content_separator__top_72',
                        separator__bottom: 'Content_separator__bottom_a1',
                        arrow: 'Content_arrow_47',
                        block: 'Content_block_4c',
                        sectionTitleLong: 'Content_sectionTitleLong_11',
                        iconLabelBlock: 'Content_iconLabelBlock_af',
                        base__crewSkin: 'Content_base__crewSkin_c4',
                        iconBeforeBlock: 'Content_iconBeforeBlock_27',
                        iconBefore: 'Content_iconBefore_d9',
                        leftLabel: 'Content_leftLabel_49',
                        vehicleLabelBlock: 'Content_vehicleLabelBlock_16',
                        vehicleTypeImg: 'Content_vehicleTypeImg_f8',
                        iconAfter: 'Content_iconAfter_4e',
                    };
                F(281);
                let Ru;
                function ku(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(Ru || (Ru = {}));
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
                const Ou = R.strings.lootboxes.compensationTooltip,
                    Nu = (0, lu.Pi)(() => {
                        const u = hu().model.root.get(),
                            e = u.tooltipType,
                            F = u.countBefore,
                            A = u.labelBefore,
                            t = u.iconBefore,
                            n = u.vehicleLvl,
                            E = u.vehicleType,
                            r = u.vehicleName,
                            D = u.iconAfter,
                            B = ((u = '') => {
                                const e = u.match(/>(.+?)</),
                                    F = u.match(/color='(.+?)'/);
                                return [e ? e[1] : u, F ? F[1] : '#8C8C7E'];
                            })(u.labelAfter),
                            a = R.images.gui.maps.icons.filters.tanks.$dyn(E),
                            i = ku(Ou.before.header(), { count: F });
                        return ru().createElement(
                            'div',
                            { className: o()(Su.base, Su[`base__${e}`]) },
                            ru().createElement('div', { className: o()(Su.separator, Su.separator__top) }),
                            ru().createElement(
                                'div',
                                { className: Su.block },
                                ru().createElement('div', { className: Su.sectionTitleLong }, i),
                                ru().createElement(
                                    'div',
                                    { className: Su.iconLabelBlock },
                                    ru().createElement(
                                        'div',
                                        { className: Su.iconBeforeBlock },
                                        t &&
                                            ru().createElement('div', {
                                                className: Su.iconBefore,
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                    ),
                                    e === Pu
                                        ? ru().createElement(
                                              'div',
                                              { className: Su.vehicleLabelBlock },
                                              ru().createElement('div', { className: Su.leftLabel }, n),
                                              a &&
                                                  ru().createElement('div', {
                                                      className: Su.vehicleTypeImg,
                                                      style: { backgroundImage: `url(${a})` },
                                                  }),
                                              ru().createElement('div', { className: Su.leftLabel }, r),
                                          )
                                        : ru().createElement('div', { className: Su.leftLabel }, A),
                                ),
                            ),
                            ru().createElement('div', { className: Su.arrow }),
                            ru().createElement(
                                'div',
                                { className: Su.block },
                                ru().createElement('div', { className: Su.sectionTitleLong }, Ou.after.header()),
                                ru().createElement(
                                    'div',
                                    { className: Su.iconLabelBlock },
                                    D &&
                                        ru().createElement('div', {
                                            className: Su.iconAfter,
                                            style: { backgroundImage: `url(${D})` },
                                        }),
                                    ru().createElement(
                                        'div',
                                        { className: Su.labelAfter, style: { color: B[1] } },
                                        B[0],
                                    ),
                                ),
                            ),
                            ru().createElement('div', { className: o()(Su.separator, Su.separator__bottom) }),
                        );
                    }),
                    Lu = R.strings.lootboxes.compensationTooltip,
                    zu = (0, lu.Pi)(() => {
                        var u, e;
                        const F = hu().model.root.get(),
                            A = F.bonusName,
                            t = F.tooltipType;
                        return ru().createElement(
                            'div',
                            { className: o()(wu.base, wu[`base__${t}`]) },
                            ru().createElement(
                                'div',
                                { className: wu.header },
                                null == (u = R.strings.tooltips.awardItem.$dyn(A)) ? void 0 : u.header(),
                            ),
                            ru().createElement(
                                'div',
                                { className: wu.subheader },
                                null == (e = Lu.$dyn(t)) ? void 0 : e.header(),
                            ),
                            ru().createElement('div', { className: wu.content }, ru().createElement(Nu, null)),
                            t === Pu && ru().createElement(Tu, null),
                        );
                    });
                engine.whenReady.then(() => {
                    su().render(
                        ru().createElement(iu, null, ru().createElement(pu, null, ru().createElement(zu, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        F = {};
    function A(u) {
        var t = F[u];
        if (void 0 !== t) return t.exports;
        var n = (F[u] = { exports: {} });
        return e[u](n, n.exports, A), n.exports;
    }
    (A.m = e),
        (u = []),
        (A.O = (e, F, t, n) => {
            if (!F) {
                var E = 1 / 0;
                for (B = 0; B < u.length; B++) {
                    for (var [F, t, n] = u[B], r = !0, o = 0; o < F.length; o++)
                        (!1 & n || E >= n) && Object.keys(A.O).every((u) => A.O[u](F[o]))
                            ? F.splice(o--, 1)
                            : ((r = !1), n < E && (E = n));
                    if (r) {
                        u.splice(B--, 1);
                        var D = t();
                        void 0 !== D && (e = D);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var B = u.length; B > 0 && u[B - 1][2] > n; B--) u[B] = u[B - 1];
            u[B] = [F, t, n];
        }),
        (A.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return A.d(e, { a: e }), e;
        }),
        (A.d = (u, e) => {
            for (var F in e) A.o(e, F) && !A.o(u, F) && Object.defineProperty(u, F, { enumerable: !0, get: e[F] });
        }),
        (A.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (A.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (A.r = (u) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (A.j = 242),
        (() => {
            var u = { 242: 0 };
            A.O.j = (e) => 0 === u[e];
            var e = (e, F) => {
                    var t,
                        n,
                        [E, r, o] = F,
                        D = 0;
                    if (E.some((e) => 0 !== u[e])) {
                        for (t in r) A.o(r, t) && (A.m[t] = r[t]);
                        if (o) var B = o(A);
                    }
                    for (e && e(F); D < E.length; D++) (n = E[D]), A.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return A.O(B);
                },
                F = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            F.forEach(e.bind(null, 0)), (F.push = e.bind(null, F.push.bind(F)));
        })();
    var t = A.O(void 0, [379], () => A(225));
    t = A.O(t);
})();
