(() => {
    'use strict';
    var e,
        n = {
            3280: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => p, off: () => m, on: () => f, onResize: () => d, onScaleUpdated: () => v });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => y,
                        getSize: () => h,
                        graphicsQuality: () => E,
                        playSound: () => b,
                        setRTPC: () => w,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => R, getTextureUrl: () => S });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => V,
                        addPreloadTexture: () => j,
                        children: () => i,
                        displayStatus: () => _,
                        displayStatusIs: () => X,
                        events: () => O,
                        extraSize: () => Y,
                        forceTriggerMouseMove: () => J,
                        freezeTextureBeforeResize: () => N,
                        getBrowserTexturePath: () => D,
                        getDisplayStatus: () => K,
                        getScale: () => G,
                        getSize: () => B,
                        getViewGlobalPosition: () => I,
                        isEventHandled: () => W,
                        isFocused: () => U,
                        pxToRem: () => $,
                        remToPx: () => H,
                        resize: () => F,
                        sendEvent: () => z,
                        setAnimateWindow: () => q,
                        setEventHandled: () => Q,
                        setInputPaddingsRem: () => k,
                        setSidePaddingsRem: () => L,
                        whenTutorialReady: () => Z,
                    });
                var s = t(6483),
                    l = t.n(s);
                function u(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = u('clientResized'),
                    v = u('self.onScaleUpdated'),
                    f = (e, n) => engine.on(e, n),
                    m = (e, n) => engine.off(e, n),
                    g = { down: u('mousedown'), up: u('mouseup'), move: u('mousemove') },
                    p = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function n() {
                            e.enabled && c(!1);
                        }
                        function t() {
                            e.enabled && c(!0);
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
                                : c(!1);
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
                                e.enabled && c(!0);
                            },
                            disableOutside() {
                                e.enabled && c(!1);
                            },
                        });
                    })();
                function b(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function w(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function h(e = 'px') {
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
                    T = { play: Object.assign({}, P, { sound: b }), setRTPC: w };
                function S(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function R(e, n, t) {
                    return `url(${S(e, n, t)})`;
                }
                const _ = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    O = {
                        onTextureFrozen: u('self.onTextureFrozen'),
                        onTextureReady: u('self.onTextureReady'),
                        onDomBuilt: u('self.onDomBuilt'),
                        onLoaded: u('self.onLoaded'),
                        onDisplayChanged: u('self.onShowingStatusChanged'),
                        onFocusUpdated: u('self.onFocusChanged'),
                        children: {
                            onAdded: u('children.onAdded'),
                            onLoaded: u('children.onLoaded'),
                            onRemoved: u('children.onRemoved'),
                            onAttached: u('children.onAttached'),
                            onTextureReady: u('children.onTextureReady'),
                            onRequestPosition: u('children.requestPosition'),
                        },
                    },
                    M = ['args'],
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
                                })(n, M);
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
                    z = {
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
                    C = 15;
                function j(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function k(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, C);
                }
                function D(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function V(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, C);
                }
                function B(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function I(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: H(n.x), y: H(n.y) };
                }
                function N() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function G() {
                    return viewEnv.getScale();
                }
                function $(e) {
                    return viewEnv.pxToRem(e);
                }
                function H(e) {
                    return viewEnv.remToPx(e);
                }
                function q(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function U() {
                    return viewEnv.isFocused();
                }
                function Q() {
                    return viewEnv.setEventHandled();
                }
                function W() {
                    return viewEnv.isEventHandled();
                }
                function J() {
                    viewEnv.forceTriggerMouseMove();
                }
                function K() {
                    return viewEnv.getShowingStatus();
                }
                const X = Object.keys(_).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === _[n]), e), {}),
                    Y = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    Z = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : O.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ee = { view: a, client: o, sound: T };
                var ne = t(6179),
                    te = t.n(ne);
                const re = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    oe = ['children', 'className', 'theme'];
                function ie() {
                    return (
                        (ie = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        ie.apply(null, arguments)
                    );
                }
                const ae = te().forwardRef(function (e, n) {
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
                        })(e, oe);
                    const s = (function () {
                            const e = (0, ne.useRef)(0);
                            var n;
                            return (
                                (n = () => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, ne.useEffect)(() => n, []),
                                (0, ne.useMemo)(
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
                        u = te().useRef(null);
                    var c;
                    return (
                        (c = () => {
                            s.run(() => {
                                const e = u.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                ee.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                ee.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ne.useEffect)(c, []),
                        te().createElement(
                            'div',
                            ie({}, a, {
                                className: l()(re.base, re[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (u.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            te().createElement('div', { className: re.decorator }, t),
                        )
                    );
                });
                var se = t(493),
                    le = t.n(se);
                function ue() {
                    return !1;
                }
                console.log;
                var ce = t(9174);
                function de(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const ve = (e) => (0 === e ? window : window.subViews.get(e)),
                    fe = ((e, n) => {
                        const t = (0, ne.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: i }) {
                                const a = (0, ne.useRef)([]),
                                    s = (e, t, r) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = ve,
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
                                                            l = ee.view.addModelObserver(s, n, !0);
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
                                                                                    return de(e, n);
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
                                                                                          ? de(e, n)
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
                                            u = (e) => a.current.push(e),
                                            c = (({ observableModel: e }) =>
                                                e.primitives(['name', 'image', 'conditions', 'description']))({
                                                mode: e,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (n, t) => {
                                                        const r = null != t ? t : l(n),
                                                            o = ce.LO.box(r, { equals: ue });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ce.aD)((e) => o.set(e)),
                                                                    n,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (n, t) => {
                                                        const r = null != t ? t : l(n),
                                                            o = ce.LO.box(r, { equals: ue });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ce.aD)((e) => o.set(e)),
                                                                    n,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (n, t) => {
                                                        const r = l(t);
                                                        if (Array.isArray(n)) {
                                                            const o = n.reduce(
                                                                (e, n) => ((e[n] = ce.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ce.aD)((e) => {
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
                                                                    (e, [n, t]) => ((e[t] = ce.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ce.aD)((e) => {
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
                                            d = { mode: e, model: c, externalModel: s, cleanup: u };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && r ? r.controls(d) : n(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    l = (0, ne.useRef)(!1),
                                    u = (0, ne.useState)(e),
                                    c = u[0],
                                    d = u[1],
                                    v = (0, ne.useState)(() => s(e, r, i)),
                                    f = v[0],
                                    m = v[1];
                                return (
                                    (0, ne.useEffect)(() => {
                                        l.current ? m(s(c, r, i)) : (l.current = !0);
                                    }, [i, c, r]),
                                    (0, ne.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, ne.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), a.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    te().createElement(t.Provider, { value: f }, o)
                                );
                            },
                            () => (0, ne.useContext)(t),
                        ];
                    })(0, function () {}),
                    me = fe[0],
                    ge = fe[1],
                    pe = 'MedalTooltipApp_dots_fe',
                    be = () => {
                        const e = ge().model;
                        return te().createElement(
                            'div',
                            { className: 'MedalTooltipApp_base_b1' },
                            te().createElement('div', { className: 'MedalTooltipApp_name_55' }, e.name.get()),
                            te().createElement('div', {
                                className: 'MedalTooltipApp_image_5d',
                                style: { backgroundImage: `url(${e.image.get()})` },
                            }),
                            te().createElement('div', { className: pe }),
                            te().createElement(
                                'div',
                                { className: 'MedalTooltipApp_description_e9' },
                                e.description.get(),
                            ),
                            te().createElement('div', { className: pe }),
                            te().createElement(
                                'div',
                                { className: 'MedalTooltipApp_conditions_08' },
                                e.conditions.get(),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    le().render(
                        te().createElement(me, null, te().createElement(ae, null, te().createElement(be, null))),
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
                for (c = 0; c < e.length; c++) {
                    for (var [t, o, i] = e[c], s = !0, l = 0; l < t.length; l++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(c--, 1);
                        var u = o();
                        void 0 !== u && (n = u);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [t, o, i];
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
        (r.j = 551),
        (() => {
            var e = { 551: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var o,
                        i,
                        [a, s, l] = t,
                        u = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var c = l(r);
                    }
                    for (n && n(t); u < a.length; u++) (i = a[u]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var o = r.O(void 0, [503], () => r(3280));
    o = r.O(o);
})();
