(() => {
    'use strict';
    var e,
        n = {
            6948: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => w, off: () => m, on: () => f, onResize: () => c, onScaleUpdated: () => v });
                var i = {};
                t.r(i),
                    t.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => y,
                        getSize: () => b,
                        graphicsQuality: () => E,
                        playSound: () => p,
                        setRTPC: () => h,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => S, getTextureUrl: () => T });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => k,
                        addPreloadTexture: () => V,
                        children: () => o,
                        displayStatus: () => O,
                        displayStatusIs: () => X,
                        events: () => z,
                        extraSize: () => Y,
                        forceTriggerMouseMove: () => J,
                        freezeTextureBeforeResize: () => H,
                        getBrowserTexturePath: () => M,
                        getDisplayStatus: () => K,
                        getScale: () => N,
                        getSize: () => G,
                        getViewGlobalPosition: () => B,
                        isEventHandled: () => W,
                        isFocused: () => q,
                        pxToRem: () => I,
                        remToPx: () => $,
                        resize: () => L,
                        sendEvent: () => C,
                        setAnimateWindow: () => U,
                        setEventHandled: () => Q,
                        setInputPaddingsRem: () => F,
                        setSidePaddingsRem: () => D,
                        whenTutorialReady: () => Z,
                    });
                var s = t(6483),
                    u = t.n(s);
                function d(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const c = d('clientResized'),
                    v = d('self.onScaleUpdated'),
                    f = (e, n) => engine.on(e, n),
                    m = (e, n) => engine.off(e, n),
                    g = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') },
                    w = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function n() {
                            e.enabled && l(!1);
                        }
                        function t() {
                            e.enabled && l(!0);
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
                                : l(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (n, t) => (
                                (n[t] = (function (n) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let i = !0;
                                        const o = `mouse${n}`,
                                            a = g[n]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(o, s),
                                            r(),
                                            () => {
                                                i &&
                                                    (a(),
                                                    window.removeEventListener(o, s),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (i = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                n
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                (e.enabled = !1), r();
                            },
                            enable() {
                                (e.enabled = !0), r();
                            },
                            enableOutside() {
                                e.enabled && l(!0);
                            },
                            disableOutside() {
                                e.enabled && l(!1);
                            },
                        });
                    })();
                function p(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function h(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function b(e = 'px') {
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
                    P = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    _ = Object.keys(P).reduce((e, n) => ((e[n] = () => p(P[n])), e), {}),
                    x = { play: Object.assign({}, _, { sound: p }), setRTPC: h };
                function T(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function S(e, n, t) {
                    return `url(${T(e, n, t)})`;
                }
                const O = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    z = {
                        onTextureFrozen: d('self.onTextureFrozen'),
                        onTextureReady: d('self.onTextureReady'),
                        onDomBuilt: d('self.onDomBuilt'),
                        onLoaded: d('self.onLoaded'),
                        onDisplayChanged: d('self.onShowingStatusChanged'),
                        onFocusUpdated: d('self.onFocusChanged'),
                        children: {
                            onAdded: d('children.onAdded'),
                            onLoaded: d('children.onLoaded'),
                            onRemoved: d('children.onRemoved'),
                            onAttached: d('children.onAttached'),
                            onTextureReady: d('children.onTextureReady'),
                            onRequestPosition: d('children.requestPosition'),
                        },
                    },
                    j = ['args'],
                    A = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        i = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(n, j);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
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
                    };
                function V(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function M(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function k(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function G(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function L(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function B(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: $(n.x), y: $(n.y) };
                }
                function H() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function N() {
                    return viewEnv.getScale();
                }
                function I(e) {
                    return viewEnv.pxToRem(e);
                }
                function $(e) {
                    return viewEnv.remToPx(e);
                }
                function U(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function q() {
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
                const X = Object.keys(O).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === O[n]), e), {}),
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
                            window.isDomBuilt ? e() : z.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ee = { view: a, client: i, sound: x };
                var ne = t(6179),
                    te = t.n(ne);
                const re = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ie = ['children', 'className', 'theme'];
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                const ae = te().forwardRef(function (e, n) {
                    let t = e.children,
                        r = e.className,
                        i = e.theme,
                        o = void 0 === i ? 'default' : i,
                        a = (function (e, n) {
                            if (null == e) return {};
                            var t,
                                r,
                                i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                            return i;
                        })(e, ie);
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
                        d = te().useRef(null);
                    var l;
                    return (
                        (l = () => {
                            s.run(() => {
                                const e = d.current;
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
                        (0, ne.useEffect)(l, []),
                        te().createElement(
                            'div',
                            oe({}, a, {
                                className: u()(re.base, re[`base__theme-${o}`], r),
                                ref: function (e) {
                                    (d.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            te().createElement('div', { className: re.decorator }, t),
                        )
                    );
                });
                var se = t(493),
                    ue = t.n(se);
                const de = 'App_text_67',
                    le = R.strings.fun_random.sub_modes.auto_shoot_guns.alert_tooltip,
                    ce = () =>
                        te().createElement(
                            'div',
                            { className: 'App_base_61' },
                            te().createElement('div', { className: de }, le.submodeDescription()),
                            te().createElement(
                                'div',
                                { className: 'App_alert_8e' },
                                te().createElement('div', { className: 'App_alert_icon_5a' }),
                                le.entryPointHeader(),
                            ),
                            te().createElement('div', { className: de }, le.description()),
                        );
                engine.whenReady.then(() => {
                    ue().render(
                        te().createElement(ae, null, te().createElement(ce, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        t = {};
    function r(e) {
        var i = t[e];
        if (void 0 !== i) return i.exports;
        var o = (t[e] = { exports: {} });
        return n[e](o, o.exports, r), o.exports;
    }
    (r.m = n),
        (e = []),
        (r.O = (n, t, i, o) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [t, i, o] = e[l], s = !0, u = 0; u < t.length; u++)
                        (!1 & o || a >= o) && Object.keys(r.O).every((e) => r.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(l--, 1);
                        var d = i();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
            e[l] = [t, i, o];
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
        (r.j = 921),
        (() => {
            var e = { 921: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var i,
                        o,
                        [a, s, u] = t,
                        d = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (i in s) r.o(s, i) && (r.m[i] = s[i]);
                        if (u) var l = u(r);
                    }
                    for (n && n(t); d < a.length; d++) (o = a[d]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return r.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var i = r.O(void 0, [503], () => r(6948));
    i = r.O(i);
})();
