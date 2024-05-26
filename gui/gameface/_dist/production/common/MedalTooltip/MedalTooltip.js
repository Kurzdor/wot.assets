(() => {
    'use strict';
    var e,
        n = {
            514: (e, n, t) => {
                var r = {};
                t.r(r), t.d(r, { mouse: () => m, onResize: () => d });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => g,
                        getSize: () => f,
                        graphicsQuality: () => p,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => w, getTextureUrl: () => b });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => S,
                        addPreloadTexture: () => P,
                        children: () => i,
                        displayStatus: () => h,
                        displayStatusIs: () => G,
                        events: () => y,
                        extraSize: () => H,
                        forceTriggerMouseMove: () => I,
                        freezeTextureBeforeResize: () => j,
                        getBrowserTexturePath: () => O,
                        getDisplayStatus: () => N,
                        getScale: () => C,
                        getSize: () => M,
                        getViewGlobalPosition: () => z,
                        isEventHandled: () => F,
                        isFocused: () => L,
                        pxToRem: () => k,
                        remToPx: () => D,
                        resize: () => A,
                        sendEvent: () => T,
                        setAnimateWindow: () => V,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => _,
                        setSidePaddingsRem: () => R,
                        whenTutorialReady: () => $,
                    });
                var s = t(483),
                    u = t.n(s);
                function l(e) {
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
                const d = l('clientResized'),
                    v = { down: l('mousedown'), up: l('mouseup'), move: l('mousemove') },
                    m = (function () {
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
                                            a = v[n]((e) => t([e, 'outside']));
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
                function f(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const p = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function b(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function w(e, n, t) {
                    return `url(${b(e, n, t)})`;
                }
                const h = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    y = {
                        onTextureFrozen: l('self.onTextureFrozen'),
                        onTextureReady: l('self.onTextureReady'),
                        onDomBuilt: l('self.onDomBuilt'),
                        onLoaded: l('self.onLoaded'),
                        onDisplayChanged: l('self.onShowingStatusChanged'),
                        onFocusUpdated: l('self.onFocusChanged'),
                        children: {
                            onAdded: l('children.onAdded'),
                            onLoaded: l('children.onLoaded'),
                            onRemoved: l('children.onRemoved'),
                            onAttached: l('children.onAttached'),
                            onTextureReady: l('children.onTextureReady'),
                            onRequestPosition: l('children.requestPosition'),
                        },
                    },
                    E = ['args'],
                    x = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const o = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                                    return o;
                                })(n, E);
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
                    T = {
                        close(e) {
                            x('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            x(64);
                        },
                        move(e) {
                            x(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function P(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function O(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function S(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function M(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function z(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: D(n.x), y: D(n.y) };
                }
                function j() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function C() {
                    return viewEnv.getScale();
                }
                function k(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function V(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function L() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function F() {
                    return viewEnv.isEventHandled();
                }
                function I() {
                    viewEnv.forceTriggerMouseMove();
                }
                function N() {
                    return viewEnv.getShowingStatus();
                }
                const G = Object.keys(h).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === h[n]), e), {}),
                    H = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    $ = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : y.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    q = { view: a, client: o };
                var Q = t(179),
                    U = t.n(Q);
                const W = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    J = ['children', 'className', 'theme'];
                function K() {
                    return (
                        (K =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        K.apply(this, arguments)
                    );
                }
                const X = U().forwardRef(function (e, n) {
                    let t = e.children,
                        r = e.className,
                        o = e.theme,
                        i = void 0 === o ? 'default' : o,
                        a = (function (e, n) {
                            if (null == e) return {};
                            var t,
                                r,
                                o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                            return o;
                        })(e, J);
                    const s = (function () {
                            const e = (0, Q.useRef)(0);
                            var n;
                            return (
                                (n = () => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, Q.useEffect)(() => n, []),
                                (0, Q.useMemo)(
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
                        l = U().useRef(null);
                    var c;
                    return (
                        (c = () => {
                            s.run(() => {
                                const e = l.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                q.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                q.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, Q.useEffect)(c, []),
                        U().createElement(
                            'div',
                            K({}, a, {
                                className: u()(W.base, W[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            U().createElement('div', { className: W.decorator }, t),
                        )
                    );
                });
                var Y = t(493),
                    Z = t.n(Y);
                function ee() {
                    return !1;
                }
                console.log;
                var ne = t(174);
                function te(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const re = (e) => (0 === e ? window : window.subViews.get(e)),
                    oe = ((e, n) => {
                        const t = (0, Q.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: i }) {
                                const a = (0, Q.useRef)([]),
                                    s = (e, t, r) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = re,
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
                                                            u = q.view.addModelObserver(s, n, !0);
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
                                                                                    return te(e, n);
                                                                                var t = Object.prototype.toString
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
                                                                                          ? te(e, n)
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
                                            u = (n) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(n)) : s.readByPath(n),
                                            l = (e) => a.current.push(e),
                                            c = (({ observableModel: e }) =>
                                                e.primitives(['name', 'image', 'conditions', 'description']))({
                                                mode: e,
                                                readByPath: u,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (n, t) => {
                                                        const r = null != t ? t : u(n),
                                                            o = ne.LO.box(r, { equals: ee });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ne.aD)((e) => o.set(e)),
                                                                    n,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (n, t) => {
                                                        const r = null != t ? t : u(n),
                                                            o = ne.LO.box(r, { equals: ee });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ne.aD)((e) => o.set(e)),
                                                                    n,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (n, t) => {
                                                        const r = u(t);
                                                        if (Array.isArray(n)) {
                                                            const o = n.reduce(
                                                                (e, n) => ((e[n] = ne.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ne.aD)((e) => {
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
                                                                    (e, [n, t]) => ((e[t] = ne.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ne.aD)((e) => {
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
                                                cleanup: l,
                                            }),
                                            d = { mode: e, model: c, externalModel: s, cleanup: l };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && r ? r.controls(d) : n(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    u = (0, Q.useRef)(!1),
                                    l = (0, Q.useState)(e),
                                    c = l[0],
                                    d = l[1],
                                    v = (0, Q.useState)(() => s(e, r, i)),
                                    m = v[0],
                                    f = v[1];
                                return (
                                    (0, Q.useEffect)(() => {
                                        u.current ? f(s(c, r, i)) : (u.current = !0);
                                    }, [i, c, r]),
                                    (0, Q.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, Q.useEffect)(
                                        () => () => {
                                            m.externalModel.dispose(), a.current.forEach((e) => e());
                                        },
                                        [m],
                                    ),
                                    U().createElement(t.Provider, { value: m }, o)
                                );
                            },
                            () => (0, Q.useContext)(t),
                        ];
                    })(0, function () {}),
                    ie = oe[0],
                    ae = oe[1],
                    se = 'MedalTooltipApp_dots_fe',
                    ue = () => {
                        const e = ae().model;
                        return U().createElement(
                            'div',
                            { className: 'MedalTooltipApp_base_b1' },
                            U().createElement('div', { className: 'MedalTooltipApp_name_55' }, e.name.get()),
                            U().createElement('div', {
                                className: 'MedalTooltipApp_image_5d',
                                style: { backgroundImage: `url(${e.image.get()})` },
                            }),
                            U().createElement('div', { className: se }),
                            U().createElement(
                                'div',
                                { className: 'MedalTooltipApp_description_e9' },
                                e.description.get(),
                            ),
                            U().createElement('div', { className: se }),
                            U().createElement(
                                'div',
                                { className: 'MedalTooltipApp_conditions_08' },
                                e.conditions.get(),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    Z().render(
                        U().createElement(ie, null, U().createElement(X, null, U().createElement(ue, null))),
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
                    for (var [t, o, i] = e[c], s = !0, u = 0; u < t.length; u++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(c--, 1);
                        var l = o();
                        void 0 !== l && (n = l);
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
                        [a, s, u] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (u) var c = u(r);
                    }
                    for (n && n(t); l < a.length; l++) (i = a[l]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var o = r.O(void 0, [503], () => r(514));
    o = r.O(o);
})();
