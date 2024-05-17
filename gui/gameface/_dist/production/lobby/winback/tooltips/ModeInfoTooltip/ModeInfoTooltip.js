(() => {
    'use strict';
    var e,
        n = {
            345: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => E, off: () => h, on: () => p, onResize: () => g, onScaleUpdated: () => w });
                var i = {};
                t.r(i),
                    t.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => _,
                        getSize: () => y,
                        graphicsQuality: () => x,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => T, getTextureUrl: () => P });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => D,
                        addPreloadTexture: () => C,
                        children: () => o,
                        displayStatus: () => S,
                        displayStatusIs: () => ee,
                        events: () => O,
                        extraSize: () => ne,
                        forceTriggerMouseMove: () => Y,
                        freezeTextureBeforeResize: () => U,
                        getBrowserTexturePath: () => B,
                        getDisplayStatus: () => Z,
                        getScale: () => q,
                        getSize: () => N,
                        getViewGlobalPosition: () => I,
                        isEventHandled: () => X,
                        isFocused: () => J,
                        pxToRem: () => Q,
                        remToPx: () => W,
                        resize: () => H,
                        sendEvent: () => k,
                        setAnimateWindow: () => $,
                        setEventHandled: () => K,
                        setInputPaddingsRem: () => L,
                        setSidePaddingsRem: () => G,
                        whenTutorialReady: () => te,
                    });
                var s = t(179),
                    u = t.n(s),
                    d = t(493),
                    l = t.n(d),
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
                function m(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const g = f('clientResized'),
                    w = f('self.onScaleUpdated'),
                    p = (e, n) => engine.on(e, n),
                    h = (e, n) => engine.off(e, n),
                    b = { down: f('mousedown'), up: f('mouseup'), move: f('mousemove') };
                const E = (function () {
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
                    const i = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const o = `mouse${n}`,
                                        a = b[n]((e) => t([e, 'outside']));
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
                            e.enabled && m(!0);
                        },
                        disableOutside() {
                            e.enabled && m(!1);
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
                function P(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function T(e, n, t) {
                    return `url(${P(e, n, t)})`;
                }
                const S = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    O = {
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
                    z = ['args'];
                const j = 2,
                    A = 16,
                    V = 32,
                    F = 64,
                    M = (e, n) => {
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
                                })(n, z);
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
                    k = {
                        close(e) {
                            M('popover' === e ? j : V);
                        },
                        minimize() {
                            M(F);
                        },
                        move(e) {
                            M(A, { isMouseEvent: !0, on: e });
                        },
                    };
                function C(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function B(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function D(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function N(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function H(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function I(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: W(n.x), y: W(n.y) };
                }
                function U() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function Q(e) {
                    return viewEnv.pxToRem(e);
                }
                function W(e) {
                    return viewEnv.remToPx(e);
                }
                function $(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function J() {
                    return viewEnv.isFocused();
                }
                function K() {
                    return viewEnv.setEventHandled();
                }
                function X() {
                    return viewEnv.isEventHandled();
                }
                function Y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const ee = Object.keys(S).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === S[n]), e), {}),
                    ne = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    te = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : O.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    re = { view: a, client: i };
                function ie() {
                    const e = (0, s.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, s.useEffect)(() => n, []),
                        (0, s.useMemo)(
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
                }
                const oe = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ae = ['children', 'className', 'theme'];
                function se() {
                    return (
                        (se =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        se.apply(this, arguments)
                    );
                }
                const ue = u().forwardRef(function (e, n) {
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
                            })(e, ae);
                        const d = ie(),
                            l = u().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                d.run(() => {
                                    const e = l.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    re.view.resize(n, t);
                                    const r = window.getComputedStyle(e);
                                    re.view.setSidePaddingsRem({
                                        left: parseInt(r.getPropertyValue('padding-left'), 10),
                                        top: parseInt(r.getPropertyValue('padding-top'), 10),
                                        right: parseInt(r.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(c, []),
                            u().createElement(
                                'div',
                                se({}, a, {
                                    className: v()(oe.base, oe[`base__theme-${o}`], r),
                                    ref: function (e) {
                                        (l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                    },
                                }),
                                u().createElement('div', { className: oe.decorator }, t),
                            )
                        );
                    }),
                    de = 'App_base_0b',
                    le = 'App_title_00',
                    ce = 'App_subtitle_f9',
                    ve = 'App_description_19',
                    fe = 'App_description__indent_02',
                    me = R.strings.winback.modeInfoTooltip,
                    ge = () =>
                        u().createElement(
                            ue,
                            null,
                            u().createElement(
                                'div',
                                { className: de },
                                u().createElement('div', { className: le }, me.title()),
                                u().createElement('div', { className: v()(ve, fe) }, me.description()),
                                u().createElement('div', { className: ce }, me.subtitle()),
                                u().createElement('div', { className: ve }, me.maps()),
                            ),
                        );
                engine.whenReady.then(() => {
                    l().render(u().createElement(ge, null), document.getElementById('root'));
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
        (r.j = 441),
        (() => {
            var e = { 441: 0 };
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
    var i = r.O(void 0, [241], () => r(345));
    i = r.O(i);
})();
