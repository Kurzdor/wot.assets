(() => {
    'use strict';
    var e,
        n = {
            2539: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => p, off: () => m, on: () => f, onResize: () => d, onScaleUpdated: () => v });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => y,
                        getSize: () => w,
                        graphicsQuality: () => E,
                        playSound: () => b,
                        setRTPC: () => h,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => O, getTextureUrl: () => S });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => L,
                        addPreloadTexture: () => k,
                        children: () => i,
                        displayStatus: () => _,
                        displayStatusIs: () => Y,
                        events: () => M,
                        extraSize: () => Z,
                        forceTriggerMouseMove: () => K,
                        freezeTextureBeforeResize: () => G,
                        getBrowserTexturePath: () => V,
                        getDisplayStatus: () => X,
                        getScale: () => $,
                        getSize: () => F,
                        getViewGlobalPosition: () => N,
                        isEventHandled: () => J,
                        isFocused: () => Q,
                        pxToRem: () => H,
                        remToPx: () => q,
                        resize: () => I,
                        sendEvent: () => C,
                        setAnimateWindow: () => U,
                        setEventHandled: () => W,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => B,
                        whenTutorialReady: () => ee,
                    });
                var s = t(6483),
                    l = t.n(s);
                function c(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = c('clientResized'),
                    v = c('self.onScaleUpdated'),
                    f = (e, n) => engine.on(e, n),
                    m = (e, n) => engine.off(e, n),
                    g = { down: c('mousedown'), up: c('mouseup'), move: c('mousemove') },
                    p = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function n() {
                            e.enabled && u(!1);
                        }
                        function t() {
                            e.enabled && u(!0);
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
                                : u(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (n, t) => (
                                (n[t] = (function (n) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const i = `mouse${n}`,
                                            a = g[n]((e) => t([e, 'outside']));
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
                                e.enabled && u(!0);
                            },
                            disableOutside() {
                                e.enabled && u(!1);
                            },
                        });
                    })();
                function b(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function h(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    x = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    P = Object.keys(x).reduce((e, n) => ((e[n] = () => b(x[n])), e), {}),
                    T = { play: Object.assign({}, P, { sound: b }), setRTPC: h };
                function S(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function O(e, n, t) {
                    return `url(${S(e, n, t)})`;
                }
                const _ = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    M = {
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
                    z = ['args'],
                    A = (e, n) => {
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
                                })(n, z);
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
                    C = {
                        close(e) {
                            A('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            A(64);
                        },
                        move(e) {
                            A(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    j = 15;
                function k(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, j);
                }
                function V(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function L(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, j);
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function I(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function N(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: q(n.x), y: q(n.y) };
                }
                function G() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function $() {
                    return viewEnv.getScale();
                }
                function H(e) {
                    return viewEnv.pxToRem(e);
                }
                function q(e) {
                    return viewEnv.remToPx(e);
                }
                function U(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function Q() {
                    return viewEnv.isFocused();
                }
                function W() {
                    return viewEnv.setEventHandled();
                }
                function J() {
                    return viewEnv.isEventHandled();
                }
                function K() {
                    viewEnv.forceTriggerMouseMove();
                }
                function X() {
                    return viewEnv.getShowingStatus();
                }
                const Y = Object.keys(_).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === _[n]), e), {}),
                    Z = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ee = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : M.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ne = { view: a, client: o, sound: T };
                var te = t(6179),
                    re = t.n(te);
                const oe = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ie = ['children', 'className', 'theme'];
                function ae() {
                    return (
                        (ae = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        ae.apply(null, arguments)
                    );
                }
                const se = re().forwardRef(function (e, n) {
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
                        })(e, ie);
                    const s = (function () {
                            const e = (0, te.useRef)(0);
                            var n;
                            return (
                                (n = () => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, te.useEffect)(() => n, []),
                                (0, te.useMemo)(
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
                        c = re().useRef(null);
                    var u;
                    return (
                        (u = () => {
                            s.run(() => {
                                const e = c.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                ne.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                ne.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, te.useEffect)(u, []),
                        re().createElement(
                            'div',
                            ae({}, a, {
                                className: l()(oe.base, oe[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (c.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            re().createElement('div', { className: oe.decorator }, t),
                        )
                    );
                });
                var le = t(493),
                    ce = t.n(le),
                    ue = t(3403);
                function de() {
                    return !1;
                }
                console.log;
                var ve = t(9174);
                function fe(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const me = (e) => (0 === e ? window : window.subViews.get(e)),
                    ge = ((e, n) => {
                        const t = (0, te.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: i }) {
                                const a = (0, te.useRef)([]),
                                    s = (e, t, r) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = me,
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
                                                            l = ne.view.addModelObserver(s, n, !0);
                                                        return o.set(l, t), e && t(a(i)), l;
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
                                                                                    return fe(e, n);
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
                                                                                          ? fe(e, n)
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
                                            l = (n) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(n)) : s.readByPath(n),
                                            c = (e) => a.current.push(e),
                                            u = (({ observableModel: e }) =>
                                                e.primitives(['vehicleName', 'vehicleIcon', 'vehicleDescription']))({
                                                mode: e,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (n, t) => {
                                                        const r = null != t ? t : l(n),
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
                                                        const r = null != t ? t : l(n),
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
                                                        const r = l(t);
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
                                                cleanup: c,
                                            }),
                                            d = { mode: e, model: u, externalModel: s, cleanup: c };
                                        return {
                                            model: u,
                                            controls: 'mocks' === e && r ? r.controls(d) : n(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    l = (0, te.useRef)(!1),
                                    c = (0, te.useState)(e),
                                    u = c[0],
                                    d = c[1],
                                    v = (0, te.useState)(() => s(e, r, i)),
                                    f = v[0],
                                    m = v[1];
                                return (
                                    (0, te.useEffect)(() => {
                                        l.current ? m(s(u, r, i)) : (l.current = !0);
                                    }, [i, u, r]),
                                    (0, te.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, te.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), a.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    re().createElement(t.Provider, { value: f }, o)
                                );
                            },
                            () => (0, te.useContext)(t),
                        ];
                    })(0, function () {}),
                    pe = ge[0],
                    be = ge[1],
                    he = 'MissionTooltipApp_text_9c',
                    we = (0, ue.Pi)(() => {
                        const e = be().model;
                        return re().createElement(
                            'div',
                            { className: 'MissionTooltipApp_base_1d' },
                            re().createElement('div', { className: 'MissionTooltipApp_title_b0' }, e.vehicleName.get()),
                            re().createElement(
                                'div',
                                { className: he },
                                R.strings.sm_lobby.missionSelection.tooltipDescription(),
                            ),
                            re().createElement('div', {
                                className: 'MissionTooltipApp_icon_2a',
                                style: { backgroundImage: `url(${e.vehicleIcon.get()})` },
                            }),
                            re().createElement(
                                'div',
                                { className: 'MissionTooltipApp_subTitle_ff' },
                                R.strings.tooltips.vehiclePreview.historicalReference.title(),
                            ),
                            re().createElement('div', { className: he }, e.vehicleDescription.get()),
                        );
                    });
                engine.whenReady.then(() => {
                    ce().render(
                        re().createElement(pe, null, re().createElement(se, null, re().createElement(we, null))),
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
                for (u = 0; u < e.length; u++) {
                    for (var [t, o, i] = e[u], s = !0, l = 0; l < t.length; l++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var c = o();
                        void 0 !== c && (n = c);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [t, o, i];
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
        (r.j = 926),
        (() => {
            var e = { 926: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var o,
                        i,
                        [a, s, l] = t,
                        c = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var u = l(r);
                    }
                    for (n && n(t); c < a.length; c++) (i = a[c]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var o = r.O(void 0, [503], () => r(2539));
    o = r.O(o);
})();
