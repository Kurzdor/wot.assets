(() => {
    'use strict';
    var e,
        n = {
            963: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => y, off: () => p, on: () => w, onResize: () => m, onScaleUpdated: () => b });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => S,
                        getSize: () => P,
                        graphicsQuality: () => T,
                        playSound: () => E,
                        setRTPC: () => x,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => _, getTextureUrl: () => z });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => U,
                        addPreloadTexture: () => I,
                        children: () => i,
                        displayStatus: () => k,
                        displayStatusIs: () => ie,
                        events: () => M,
                        extraSize: () => ae,
                        forceTriggerMouseMove: () => re,
                        freezeTextureBeforeResize: () => J,
                        getBrowserTexturePath: () => H,
                        getDisplayStatus: () => oe,
                        getScale: () => K,
                        getSize: () => q,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => te,
                        isFocused: () => ee,
                        pxToRem: () => X,
                        remToPx: () => Y,
                        resize: () => Q,
                        sendEvent: () => F,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => ne,
                        setInputPaddingsRem: () => $,
                        setSidePaddingsRem: () => N,
                        whenTutorialReady: () => se,
                    });
                var s = t(179),
                    u = t.n(s),
                    l = t(493),
                    d = t.n(l),
                    c = t(483),
                    v = t.n(c);
                function f(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function g(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const m = f('clientResized'),
                    b = f('self.onScaleUpdated'),
                    w = (e, n) => engine.on(e, n),
                    p = (e, n) => engine.off(e, n),
                    h = { down: f('mousedown'), up: f('mouseup'), move: f('mousemove') };
                const y = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && g(!1);
                    }
                    function t() {
                        e.enabled && g(!0);
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
                            : g(!1);
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
                            e.enabled && g(!0);
                        },
                        disableOutside() {
                            e.enabled && g(!1);
                        },
                    });
                })();
                function E(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function x(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const T = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    O = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    R = Object.keys(O).reduce((e, n) => ((e[n] = () => E(O[n])), e), {}),
                    C = { play: Object.assign({}, R, { sound: E }), setRTPC: x };
                function z(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function _(e, n, t) {
                    return `url(${z(e, n, t)})`;
                }
                const k = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    M = {
                        onTextureFrozen: f('self.onTextureFrozen'),
                        onTextureReady: f('self.onTextureReady'),
                        onDomBuilt: f('self.onDomBuilt'),
                        onLoaded: f('self.onLoaded'),
                        onDisplayChanged: f('self.onShowingStatusChanged'),
                        onFocusUpdated: f('self.onFocusChanged'),
                        children: {
                            onAdded: f('children.onAdded'),
                            onLoaded: f('children.onLoaded'),
                            onRemoved: f('children.onRemoved'),
                            onAttached: f('children.onAttached'),
                            onTextureReady: f('children.onTextureReady'),
                            onRequestPosition: f('children.requestPosition'),
                        },
                    },
                    j = ['args'];
                const A = 2,
                    V = 16,
                    D = 32,
                    L = 64,
                    B = (e, n) => {
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
                                })(n, j);
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
                    F = {
                        close(e) {
                            B('popover' === e ? A : D);
                        },
                        minimize() {
                            B(L);
                        },
                        move(e) {
                            B(V, { isMouseEvent: !0, on: e });
                        },
                    },
                    G = 15;
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, G);
                }
                function H(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function U(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, G);
                }
                function q(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Q(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function W(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: Y(n.x), y: Y(n.y) };
                }
                function J() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function K() {
                    return viewEnv.getScale();
                }
                function X(e) {
                    return viewEnv.pxToRem(e);
                }
                function Y(e) {
                    return viewEnv.remToPx(e);
                }
                function Z(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ee() {
                    return viewEnv.isFocused();
                }
                function ne() {
                    return viewEnv.setEventHandled();
                }
                function te() {
                    return viewEnv.isEventHandled();
                }
                function re() {
                    viewEnv.forceTriggerMouseMove();
                }
                function oe() {
                    return viewEnv.getShowingStatus();
                }
                const ie = Object.keys(k).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === k[n]), e), {}),
                    ae = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    se = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : M.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ue = { view: a, client: o, sound: C };
                var le = t(403);
                function de() {
                    return !1;
                }
                console.log;
                var ce = t(174);
                function ve(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (e) {
                                if ('string' == typeof e) return fe(e, n);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
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
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function fe(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const ge = (e) => (0 === e ? window : window.subViews.get(e));
                const me = ((e, n) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: a }) {
                                const l = (0, s.useRef)([]),
                                    d = (t, r, o) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = ge,
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
                                                            u = ue.view.addModelObserver(s, n, !0);
                                                        return o.set(u, t), e && t(a(i)), u;
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
                                                        for (var e, t = ve(o.keys()); !(e = t()).done; ) i(e.value, n);
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
                                            u = (e) =>
                                                'mocks' === t ? (null == o ? void 0 : o.getter(e)) : s.readByPath(e),
                                            d = (e) => l.current.push(e),
                                            c = e({
                                                mode: t,
                                                readByPath: u,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, n) => {
                                                        const r = null != n ? n : u(e),
                                                            o = ce.LO.box(r, { equals: de });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, ce.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const r = null != n ? n : u(e),
                                                            o = ce.LO.box(r, { equals: de });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, ce.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const r = u(n);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, n) => ((e[n] = ce.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, ce.aD)((n) => {
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
                                                                    (e, [n, t]) => ((e[t] = ce.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, ce.aD)((e) => {
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
                                                cleanup: d,
                                            }),
                                            v = { mode: t, model: c, externalModel: s, cleanup: d };
                                        return {
                                            model: c,
                                            controls: 'mocks' === t && o ? o.controls(v) : n(v),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    c = (0, s.useRef)(!1),
                                    v = (0, s.useState)(r),
                                    f = v[0],
                                    g = v[1],
                                    m = (0, s.useState)(() => d(r, o, a)),
                                    b = m[0],
                                    w = m[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        c.current ? w(d(f, o, a)) : (c.current = !0);
                                    }, [a, f, o]),
                                    (0, s.useEffect)(() => {
                                        g(r);
                                    }, [r]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            b.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [b],
                                    ),
                                    u().createElement(t.Provider, { value: b }, i)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => e.object(),
                        ({ externalModel: e }) => ({
                            fadingOutComplete: e.createCallbackNoArgs('onFadingOutComplete'),
                            fadingInComplete: e.createCallbackNoArgs('onFadingInComplete'),
                        }),
                    ),
                    be = me[0],
                    we = me[1],
                    pe = 'FadingCoverViewApp_base_a2',
                    he = 'FadingCoverViewApp_base__visible_7c',
                    ye = 'FadingCoverViewApp_background_86',
                    Ee = (e) => {
                        if (!e) return {};
                        const n = ue.view.getViewGlobalPosition().y;
                        return { backgroundImage: `url(${e})`, top: `-${n}rem`, bottom: `${n}rem` };
                    },
                    xe = (0, le.Pi)(() => {
                        const e = we(),
                            n = e.model,
                            t = e.controls,
                            r = n.get(),
                            o = r.background,
                            i = r.fadeInDuration,
                            a = r.fadeOutDuration,
                            l = r.isVisible,
                            d = t.fadingInComplete,
                            c = t.fadingOutComplete,
                            f = (0, s.useState)(!1),
                            g = f[0],
                            m = f[1];
                        return (
                            (0, s.useEffect)(() => {
                                const e = setTimeout(
                                    () => {
                                        l ? c() : d();
                                    },
                                    1e3 * (l ? i : a),
                                );
                                return m(l), () => clearTimeout(e);
                            }, [d, c, l, i, a]),
                            u().createElement(
                                'div',
                                { className: v()(pe, g && he), style: { transitionDuration: `${l ? i : a}s` } },
                                u().createElement('div', { className: ye, style: Ee(o) }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    d().render(
                        u().createElement(be, null, u().createElement(xe, null)),
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
                for (d = 0; d < e.length; d++) {
                    for (var [t, o, i] = e[d], s = !0, u = 0; u < t.length; u++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(d--, 1);
                        var l = o();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
            e[d] = [t, o, i];
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
        (r.j = 564),
        (() => {
            var e = { 564: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var o,
                        i,
                        [a, s, u] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (u) var d = u(r);
                    }
                    for (n && n(t); l < a.length; l++) (i = a[l]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(d);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var o = r.O(void 0, [490], () => r(963));
    o = r.O(o);
})();
