(() => {
    'use strict';
    var e,
        t = {
            930: (e, t, n) => {
                var r = {};
                n.r(r), n.d(r, { mouse: () => f, onResize: () => d });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => g,
                        getSize: () => m,
                        graphicsQuality: () => p,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => w, getTextureUrl: () => b });
                var a = {};
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => S,
                        addPreloadTexture: () => T,
                        children: () => i,
                        displayStatus: () => h,
                        displayStatusIs: () => H,
                        events: () => y,
                        extraSize: () => $,
                        forceTriggerMouseMove: () => N,
                        freezeTextureBeforeResize: () => C,
                        getBrowserTexturePath: () => O,
                        getDisplayStatus: () => G,
                        getScale: () => k,
                        getSize: () => z,
                        getViewGlobalPosition: () => j,
                        isEventHandled: () => I,
                        isFocused: () => B,
                        pxToRem: () => D,
                        remToPx: () => V,
                        resize: () => A,
                        sendEvent: () => P,
                        setAnimateWindow: () => L,
                        setEventHandled: () => F,
                        setInputPaddingsRem: () => _,
                        setSidePaddingsRem: () => M,
                        whenTutorialReady: () => q,
                    });
                var s = n(483),
                    u = n.n(s);
                function l(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = l('clientResized'),
                    v = { down: l('mousedown'), up: l('mouseup'), move: l('mousemove') },
                    f = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && c(!1);
                        }
                        function n() {
                            e.enabled && c(!0);
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
                                : c(!1);
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
                                e.enabled && c(!0);
                            },
                            disableOutside() {
                                e.enabled && c(!1);
                            },
                        });
                    })();
                function m(e = 'px') {
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
                function b(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function w(e, t, n) {
                    return `url(${b(e, t, n)})`;
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
                    x = (e, t) => {
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
                    P = {
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
                function T(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function O(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function S(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function M(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function j(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: V(t.x), y: V(t.y) };
                }
                function C() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function k() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function V(e) {
                    return viewEnv.remToPx(e);
                }
                function L(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function F() {
                    return viewEnv.setEventHandled();
                }
                function I() {
                    return viewEnv.isEventHandled();
                }
                function N() {
                    viewEnv.forceTriggerMouseMove();
                }
                function G() {
                    return viewEnv.getShowingStatus();
                }
                const H = Object.keys(h).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === h[t]), e), {}),
                    $ = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    q = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : y.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Q = { view: a, client: o };
                var U = n(179),
                    W = n.n(U);
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
                const Y = W().forwardRef(function (e, t) {
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
                            const e = (0, U.useRef)(0);
                            var t;
                            return (
                                (t = () => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, U.useEffect)(() => t, []),
                                (0, U.useMemo)(
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
                        l = W().useRef(null);
                    var c;
                    return (
                        (c = () => {
                            s.run(() => {
                                const e = l.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                Q.view.resize(t, n);
                                const r = window.getComputedStyle(e);
                                Q.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, U.useEffect)(c, []),
                        W().createElement(
                            'div',
                            X({}, a, {
                                className: u()(J.base, J[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (l.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                },
                            }),
                            W().createElement('div', { className: J.decorator }, n),
                        )
                    );
                });
                var Z = n(493),
                    ee = n.n(Z),
                    te = n(403);
                function ne() {
                    return !1;
                }
                console.log;
                var re = n(174);
                function oe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const ie = (e) => (0 === e ? window : window.subViews.get(e)),
                    ae = ((e, t) => {
                        const n = (0, U.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: i }) {
                                const a = (0, U.useRef)([]),
                                    s = (e, n, r) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = ie,
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
                                                            u = Q.view.addModelObserver(s, t, !0);
                                                        return o.set(u, n), e && n(a(i)), u;
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
                                                                                    return oe(e, t);
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
                                                                                          ? oe(e, t)
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
                                            u = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : s.readByPath(t),
                                            l = (e) => a.current.push(e),
                                            c = (({ observableModel: e }) =>
                                                e.primitives(['vehicleName', 'vehicleIcon', 'vehicleDescription']))({
                                                mode: e,
                                                readByPath: u,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const r = null != n ? n : u(t),
                                                            o = re.LO.box(r, { equals: ne });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, re.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const r = null != n ? n : u(t),
                                                            o = re.LO.box(r, { equals: ne });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, re.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const r = u(n);
                                                        if (Array.isArray(t)) {
                                                            const o = t.reduce(
                                                                (e, t) => ((e[t] = re.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, re.aD)((e) => {
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
                                                                    (e, [t, n]) => ((e[n] = re.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, re.aD)((e) => {
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
                                                cleanup: l,
                                            }),
                                            d = { mode: e, model: c, externalModel: s, cleanup: l };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && r ? r.controls(d) : t(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    u = (0, U.useRef)(!1),
                                    l = (0, U.useState)(e),
                                    c = l[0],
                                    d = l[1],
                                    v = (0, U.useState)(() => s(e, r, i)),
                                    f = v[0],
                                    m = v[1];
                                return (
                                    (0, U.useEffect)(() => {
                                        u.current ? m(s(c, r, i)) : (u.current = !0);
                                    }, [i, c, r]),
                                    (0, U.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, U.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), a.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    W().createElement(n.Provider, { value: f }, o)
                                );
                            },
                            () => (0, U.useContext)(n),
                        ];
                    })(0, function () {}),
                    se = ae[0],
                    ue = ae[1],
                    le = 'MissionTooltipApp_text_9c',
                    ce = (0, te.Pi)(() => {
                        const e = ue().model;
                        return W().createElement(
                            'div',
                            { className: 'MissionTooltipApp_base_1d' },
                            W().createElement('div', { className: 'MissionTooltipApp_title_b0' }, e.vehicleName.get()),
                            W().createElement(
                                'div',
                                { className: le },
                                R.strings.sm_lobby.missionSelection.tooltipDescription(),
                            ),
                            W().createElement('div', {
                                className: 'MissionTooltipApp_icon_2a',
                                style: { backgroundImage: `url(${e.vehicleIcon.get()})` },
                            }),
                            W().createElement(
                                'div',
                                { className: 'MissionTooltipApp_subTitle_ff' },
                                R.strings.tooltips.vehiclePreview.historicalReference.title(),
                            ),
                            W().createElement('div', { className: le }, e.vehicleDescription.get()),
                        );
                    });
                engine.whenReady.then(() => {
                    ee().render(
                        W().createElement(se, null, W().createElement(Y, null, W().createElement(ce, null))),
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
                for (c = 0; c < e.length; c++) {
                    for (var [n, o, i] = e[c], s = !0, u = 0; u < n.length; u++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](n[u]))
                            ? n.splice(u--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(c--, 1);
                        var l = o();
                        void 0 !== l && (t = l);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [n, o, i];
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
        (r.j = 926),
        (() => {
            var e = { 926: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        i,
                        [a, s, u] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (u) var c = u(r);
                    }
                    for (t && t(n); l < a.length; l++) (i = a[l]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [503], () => r(930));
    o = r.O(o);
})();
