(() => {
    'use strict';
    var e,
        n = {
            7337: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => w, off: () => b, on: () => h, onResize: () => f, onScaleUpdated: () => g });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => S,
                        getSize: () => x,
                        graphicsQuality: () => P,
                        playSound: () => y,
                        setRTPC: () => E,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => A, getTextureUrl: () => C });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => H,
                        addPreloadTexture: () => V,
                        children: () => i,
                        displayStatus: () => z,
                        displayStatusIs: () => oe,
                        events: () => M,
                        extraSize: () => ie,
                        forceTriggerMouseMove: () => te,
                        freezeTextureBeforeResize: () => W,
                        getBrowserTexturePath: () => F,
                        getDisplayStatus: () => re,
                        getScale: () => J,
                        getSize: () => U,
                        getViewGlobalPosition: () => Q,
                        isEventHandled: () => ne,
                        isFocused: () => Z,
                        pxToRem: () => K,
                        remToPx: () => X,
                        resize: () => q,
                        sendEvent: () => $,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => ee,
                        setInputPaddingsRem: () => G,
                        setSidePaddingsRem: () => N,
                        whenTutorialReady: () => ae,
                    });
                var s = t(6179),
                    c = t.n(s);
                let u;
                !(function (e) {
                    (e.bottomAlignment = 'bottomAlignment'),
                        (e.centredAndThroughContent = 'centredAndThroughContent'),
                        (e.moveContentBelow = 'moveContentBelow');
                })(u || (u = {}));
                function l(e, n) {
                    return Array.isArray(e) ? e.map(n) : e.map((e, t, r) => n(null == e ? void 0 : e.value, t, r));
                }
                var d = t(3403);
                function v(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function m(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const f = v('clientResized'),
                    g = v('self.onScaleUpdated'),
                    h = (e, n) => engine.on(e, n),
                    b = (e, n) => engine.off(e, n),
                    p = { down: v('mousedown'), up: v('mouseup'), move: v('mousemove') };
                const w = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && m(!1);
                    }
                    function t() {
                        e.enabled && m(!0);
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
                            : m(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${n}`,
                                        a = p[n]((e) => t([e, 'outside']));
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
                            e.enabled && m(!0);
                        },
                        disableOutside() {
                            e.enabled && m(!1);
                        },
                    });
                })();
                function y(e) {
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
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const P = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    T = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(T).reduce((e, n) => ((e[n] = () => y(T[n])), e), {}),
                    R = { play: Object.assign({}, O, { sound: y }), setRTPC: E };
                function C(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function A(e, n, t) {
                    return `url(${C(e, n, t)})`;
                }
                const z = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    M = {
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
                    k = ['args'];
                const _ = 2,
                    j = 16,
                    L = 32,
                    B = 64,
                    I = (e, n) => {
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
                                })(n, k);
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
                    $ = {
                        close(e) {
                            I('popover' === e ? _ : L);
                        },
                        minimize() {
                            I(B);
                        },
                        move(e) {
                            I(j, { isMouseEvent: !0, on: e });
                        },
                    },
                    D = 15;
                function V(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, D);
                }
                function F(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function H(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, D);
                }
                function U(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function Q(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: X(n.x), y: X(n.y) };
                }
                function W() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function J() {
                    return viewEnv.getScale();
                }
                function K(e) {
                    return viewEnv.pxToRem(e);
                }
                function X(e) {
                    return viewEnv.remToPx(e);
                }
                function Y(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function Z() {
                    return viewEnv.isFocused();
                }
                function ee() {
                    return viewEnv.setEventHandled();
                }
                function ne() {
                    return viewEnv.isEventHandled();
                }
                function te() {
                    viewEnv.forceTriggerMouseMove();
                }
                function re() {
                    return viewEnv.getShowingStatus();
                }
                const oe = Object.keys(z).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === z[n]), e), {}),
                    ie = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ae = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : M.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    se = { view: a, client: o, sound: R };
                function ce() {}
                function ue() {
                    return !1;
                }
                console.log;
                var le = t(9174);
                function de(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (e) {
                                if ('string' == typeof e) return ve(e, n);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? ve(e, n)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (n && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ve(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const me = (e) => (0 === e ? window : window.subViews.get(e));
                const fe = ((e, n) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: a }) {
                                const u = (0, s.useRef)([]),
                                    l = (t, r, o) => {
                                        var i;
                                        const a = (function ({
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
                                                            c = se.view.addModelObserver(s, n, !0);
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
                                                        for (var e, t = de(o.keys()); !(e = t()).done; ) i(e.value, n);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            s =
                                                'real' === t
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === t ? (null == o ? void 0 : o.getter(e)) : s.readByPath(e),
                                            l = (e) => u.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, n) => {
                                                        const r = null != n ? n : c(e),
                                                            o = le.LO.box(r, { equals: ue });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, le.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const r = null != n ? n : c(e),
                                                            o = le.LO.box(r, { equals: ue });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, le.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const r = c(n);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, n) => ((e[n] = le.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, le.aD)((n) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(n[e]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                i = Object.entries(o),
                                                                a = i.reduce(
                                                                    (e, [n, t]) => ((e[t] = le.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, le.aD)((e) => {
                                                                            i.forEach(([n, t]) => {
                                                                                a[t].set(e[n]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            v = { mode: t, model: d, externalModel: s, cleanup: l };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && o ? o.controls(v) : n(v),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    d = (0, s.useRef)(!1),
                                    v = (0, s.useState)(r),
                                    m = v[0],
                                    f = v[1],
                                    g = (0, s.useState)(() => l(r, o, a)),
                                    h = g[0],
                                    b = g[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? b(l(m, o, a)) : (d.current = !0);
                                    }, [a, m, o]),
                                    (0, s.useEffect)(() => {
                                        f(r);
                                    }, [r]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            h.externalModel.dispose(), u.current.forEach((e) => e());
                                        },
                                        [h],
                                    ),
                                    c().createElement(t.Provider, { value: h }, i)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['iconPositionLogic']), {
                                icons: e.array('icons'),
                                backgrounds: e.array('backgrounds'),
                                overlays: e.array('overlays'),
                            }),
                        ce,
                    ),
                    ge = fe[0],
                    he = fe[1],
                    be = {
                        base: 'IconSetApp_base_f4',
                        mainIcon: 'IconSetApp_mainIcon_71',
                        container: 'IconSetApp_container_c8',
                        icon: 'IconSetApp_icon_32',
                    },
                    pe = (0, d.Pi)(function () {
                        const e = he().model,
                            n = (0, s.useState)(0),
                            t = n[0],
                            r = n[1],
                            o = e.iconPositionLogic.get(),
                            i = e.backgrounds.get(),
                            a = e.overlays.get(),
                            d = e.icons.get(),
                            v = (0, s.useCallback)((e) => {
                                r(((e) => Math.max(e, 135))(e.currentTarget.height));
                            }, []),
                            m = (() => {
                                const e = (0, s.useState)(se.view.getScale()),
                                    n = e[0],
                                    t = e[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        const e = () => {
                                            t(se.view.getScale());
                                        };
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    (0, s.useMemo)(() => ({ transform: `scale(${n})` }), [n])
                                );
                            })();
                        return c().createElement(
                            'div',
                            {
                                className: be.base,
                                style: (() => {
                                    if (0 === t) return { height: 0 };
                                    switch (o) {
                                        case u.bottomAlignment:
                                            return { height: `${t}rem`, marginTop: `-${Math.round((t - 135) / 2)}rem` };
                                        case u.centredAndThroughContent:
                                            return {
                                                height: `${t}rem`,
                                                marginBottom: `-${Math.round((t - 135) / 2)}rem`,
                                            };
                                        default:
                                            return { height: `${t}rem` };
                                    }
                                })(),
                            },
                            c().createElement(
                                'div',
                                { className: be.container },
                                l(i, (e) =>
                                    e.path
                                        ? c().createElement(
                                              'div',
                                              { key: e.path, className: be.icon },
                                              c().createElement('img', { alt: 'bg icon', src: e.path, style: m }),
                                          )
                                        : null,
                                ),
                                c().createElement(
                                    'div',
                                    { className: be.mainIcon },
                                    l(
                                        d,
                                        (e) =>
                                            e.path &&
                                            c().createElement(
                                                'div',
                                                { key: e.path, className: be.iconContainer },
                                                c().createElement('img', { alt: '', src: e.path, style: m, onLoad: v }),
                                            ),
                                    ),
                                ),
                                l(a, (e) =>
                                    e.path
                                        ? c().createElement(
                                              'div',
                                              { key: e.path, className: be.icon },
                                              c().createElement('img', { alt: 'overlay icon', src: e.path, style: m }),
                                          )
                                        : null,
                                ),
                            ),
                        );
                    });
                (0, s.memo)(function (e) {
                    const n = (0, s.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                    return c().createElement(ge, { options: n }, c().createElement(pe, null));
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
        (r.j = 139),
        (() => {
            var e = { 139: 0 };
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
    var o = r.O(void 0, [573], () => r(7337));
    o = r.O(o);
})();
