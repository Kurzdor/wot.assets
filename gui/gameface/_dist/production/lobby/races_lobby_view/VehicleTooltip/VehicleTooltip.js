(() => {
    'use strict';
    var e,
        t = {
            9804: (e, t, n) => {
                var r = {};
                n.r(r), n.d(r, { mouse: () => m, onResize: () => d });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => p,
                        getSize: () => f,
                        graphicsQuality: () => g,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => b, getTextureUrl: () => h });
                var a = {};
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => S,
                        addPreloadTexture: () => x,
                        children: () => i,
                        displayStatus: () => w,
                        displayStatusIs: () => G,
                        events: () => y,
                        extraSize: () => $,
                        forceTriggerMouseMove: () => L,
                        freezeTextureBeforeResize: () => V,
                        getBrowserTexturePath: () => O,
                        getDisplayStatus: () => F,
                        getScale: () => M,
                        getSize: () => C,
                        getViewGlobalPosition: () => j,
                        isEventHandled: () => H,
                        isFocused: () => D,
                        pxToRem: () => N,
                        remToPx: () => k,
                        resize: () => z,
                        sendEvent: () => _,
                        setAnimateWindow: () => B,
                        setEventHandled: () => I,
                        setInputPaddingsRem: () => P,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => U,
                    });
                var s = n(6483),
                    l = n.n(s);
                function c(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = c('clientResized'),
                    v = { down: c('mousedown'), up: c('mouseup'), move: c('mousemove') },
                    m = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && u(!1);
                        }
                        function n() {
                            e.enabled && u(!0);
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
                                : u(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const i = `mouse${t}`,
                                            a = v[t]((e) => n([e, 'outside']));
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
                                e.enabled && u(!0);
                            },
                            disableOutside() {
                                e.enabled && u(!1);
                            },
                        });
                    })();
                function f(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const g = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function h(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function b(e, t, n) {
                    return `url(${h(e, t, n)})`;
                }
                const w = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    y = {
                        onTextureFrozen: c('self.onTextureFrozen'),
                        onTextureReady: c('self.onTextureReady'),
                        onDomBuilt: c('self.onDomBuilt'),
                        onLoaded: c('self.onLoaded'),
                        onDisplayChanged: c('self.onShowingStatusChanged'),
                        onFocusUpdated: c('self.onFocusChanged'),
                        children: {
                            onAdded: c('children.onAdded'),
                            onLoaded: c('children.onLoaded'),
                            onRemoved: c('children.onRemoved'),
                            onAttached: c('children.onAttached'),
                            onTextureReady: c('children.onTextureReady'),
                            onRequestPosition: c('children.requestPosition'),
                        },
                    },
                    E = ['args'],
                    T = (e, t) => {
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
                                })(t, E);
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
                    _ = {
                        close(e) {
                            T('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            T(64);
                        },
                        move(e) {
                            T(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function x(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function P(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function O(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function S(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function A(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function z(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function j(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: k(t.x), y: k(t.y) };
                }
                function V() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function M() {
                    return viewEnv.getScale();
                }
                function N(e) {
                    return viewEnv.pxToRem(e);
                }
                function k(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function D() {
                    return viewEnv.isFocused();
                }
                function I() {
                    return viewEnv.setEventHandled();
                }
                function H() {
                    return viewEnv.isEventHandled();
                }
                function L() {
                    viewEnv.forceTriggerMouseMove();
                }
                function F() {
                    return viewEnv.getShowingStatus();
                }
                const G = Object.keys(w).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === w[t]), e), {}),
                    $ = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    U = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : y.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    q = { view: a, client: o };
                var W = n(6179),
                    Q = n.n(W);
                const J = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    K = ['children', 'className', 'theme'];
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                const Y = Q().forwardRef(function (e, t) {
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
                        })(e, K);
                    const s = (function () {
                            const e = (0, W.useRef)(0);
                            var t;
                            return (
                                (t = () => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, W.useEffect)(() => t, []),
                                (0, W.useMemo)(
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
                        c = Q().useRef(null);
                    var u;
                    return (
                        (u = () => {
                            s.run(() => {
                                const e = c.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                q.view.resize(t, n);
                                const r = window.getComputedStyle(e);
                                q.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, W.useEffect)(u, []),
                        Q().createElement(
                            'div',
                            X({}, a, {
                                className: l()(J.base, J[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (c.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                },
                            }),
                            Q().createElement('div', { className: J.decorator }, n),
                        )
                    );
                });
                var Z = n(493),
                    ee = n.n(Z);
                function te() {
                    return !1;
                }
                console.log;
                var ne = n(9174);
                function re(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const oe = (e) => (0 === e ? window : window.subViews.get(e));
                var ie = n(3946);
                const ae = ((e, t) => {
                        const n = (0, W.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: i }) {
                                const a = (0, W.useRef)([]),
                                    s = (e, n, r) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = oe,
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
                                                            l = q.view.addModelObserver(s, t, !0);
                                                        return o.set(l, n), e && n(a(i)), l;
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
                                                                                    return re(e, t);
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
                                                                                          ? re(e, t)
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
                                            l = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : s.readByPath(t),
                                            c = (e) => a.current.push(e),
                                            u = (({ observableModel: e }) => {
                                                const t = Object.assign(
                                                        {},
                                                        e.primitives([
                                                            'slotId',
                                                            'vehicleName',
                                                            'vehicleUserName',
                                                            'description',
                                                            'inBattle',
                                                        ]),
                                                        { vehicleTth: e.array('vehicleTth') },
                                                    ),
                                                    n = (0, ie.Om)(() => {
                                                        return (
                                                            (e = t.vehicleTth.get()),
                                                            (n = (e) => e),
                                                            Array.isArray(e)
                                                                ? e.map(n)
                                                                : e.map((e, t, r) =>
                                                                      n(null == e ? void 0 : e.value, t, r),
                                                                  )
                                                        );
                                                        var e, n;
                                                    });
                                                return Object.assign({}, t, { computes: { getVehicleTth: n } });
                                            })({
                                                mode: e,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const r = null != n ? n : l(t),
                                                            o = ne.LO.box(r, { equals: te });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ne.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const r = null != n ? n : l(t),
                                                            o = ne.LO.box(r, { equals: te });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ne.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const r = l(n);
                                                        if (Array.isArray(t)) {
                                                            const o = t.reduce(
                                                                (e, t) => ((e[t] = ne.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ne.aD)((e) => {
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
                                                                    (e, [t, n]) => ((e[n] = ne.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ne.aD)((e) => {
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
                                                cleanup: c,
                                            }),
                                            d = { mode: e, model: u, externalModel: s, cleanup: c };
                                        return {
                                            model: u,
                                            controls: 'mocks' === e && r ? r.controls(d) : t(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    l = (0, W.useRef)(!1),
                                    c = (0, W.useState)(e),
                                    u = c[0],
                                    d = c[1],
                                    v = (0, W.useState)(() => s(e, r, i)),
                                    m = v[0],
                                    f = v[1];
                                return (
                                    (0, W.useEffect)(() => {
                                        l.current ? f(s(u, r, i)) : (l.current = !0);
                                    }, [i, u, r]),
                                    (0, W.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, W.useEffect)(
                                        () => () => {
                                            m.externalModel.dispose(), a.current.forEach((e) => e());
                                        },
                                        [m],
                                    ),
                                    Q().createElement(n.Provider, { value: m }, o)
                                );
                            },
                            () => (0, W.useContext)(n),
                        ];
                    })(0, function () {}),
                    se = ae[0],
                    le = ae[1],
                    ce = 'TTHComponent_progress_57',
                    ue = 'TTHComponent_progress__active_54',
                    de = (0, W.memo)(({ itemIndex: e, item: t }) =>
                        Q().createElement(
                            'div',
                            { className: 'TTHComponent_base_05' },
                            Q().createElement('div', {
                                className: 'TTHComponent_tthImage_f0',
                                style: { backgroundImage: `url(R.images.races.gui.maps.icons.hangar.TTH.tth${e + 1})` },
                            }),
                            Q().createElement(
                                'div',
                                { className: 'TTHComponent_tthProgressbar_a8' },
                                Q().createElement('div', { className: l()(ce, t >= 1 && ue) }),
                                Q().createElement('div', { className: l()(ce, t >= 2 && ue) }),
                                Q().createElement('div', { className: l()(ce, 3 === t && ue) }),
                                Q().createElement(
                                    'div',
                                    { className: 'TTHComponent_tthText_7b' },
                                    R.strings.races.lobby.views.vehiclesCarousel.tooltip.$dyn(`tth${e + 1}`),
                                ),
                            ),
                        ),
                    ),
                    ve = 'VehicleTooltipApp_divider_c4',
                    me = () => {
                        const e = le().model,
                            t = e.inBattle.get(),
                            n = e.vehicleUserName.get(),
                            r = e.description.get(),
                            o = e.computes.getVehicleTth();
                        return Q().createElement(
                            'div',
                            { className: 'VehicleTooltipApp_base_d4' },
                            Q().createElement('div', { className: 'VehicleTooltipApp_title_f1' }, n),
                            Q().createElement('div', { className: ve }),
                            Q().createElement(
                                'div',
                                { className: 'VehicleTooltipApp_tthWrapper_db' },
                                o.map((e, t) => Q().createElement(de, { itemIndex: t, item: e, key: t })),
                            ),
                            Q().createElement('div', { className: ve }),
                            Q().createElement('div', { className: 'VehicleTooltipApp_text_c7' }, r),
                            Q().createElement(
                                'div',
                                {
                                    className: l()(
                                        'VehicleTooltipApp_raceText_8c',
                                        t && 'VehicleTooltipApp_raceText__unavailable_8d',
                                    ),
                                },
                                t
                                    ? R.strings.races.lobby.views.vehiclesCarousel.isUnavailable()
                                    : R.strings.races.lobby.views.vehiclesCarousel.isAvailable(),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    ee().render(
                        Q().createElement(se, null, Q().createElement(Y, null, Q().createElement(me, null))),
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
                for (u = 0; u < e.length; u++) {
                    for (var [n, o, i] = e[u], s = !0, l = 0; l < n.length; l++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var c = o();
                        void 0 !== c && (t = c);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, o, i];
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
        (r.j = 659),
        (() => {
            var e = { 659: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        i,
                        [a, s, l] = n,
                        c = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var u = l(r);
                    }
                    for (t && t(n); c < a.length; c++) (i = a[c]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [503], () => r(9804));
    o = r.O(o);
})();
