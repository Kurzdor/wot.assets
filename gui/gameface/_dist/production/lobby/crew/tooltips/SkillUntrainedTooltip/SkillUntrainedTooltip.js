(() => {
    'use strict';
    var e,
        n = {
            5195: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => p, off: () => f, on: () => m, onResize: () => u, onScaleUpdated: () => v });
                var i = {};
                t.r(i),
                    t.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => b,
                        getSize: () => E,
                        graphicsQuality: () => y,
                        playSound: () => w,
                        setRTPC: () => h,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => T, getTextureUrl: () => P });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => U,
                        addPreloadTexture: () => V,
                        children: () => o,
                        displayStatus: () => O,
                        displayStatusIs: () => ne,
                        events: () => z,
                        extraSize: () => te,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => D,
                        getDisplayStatus: () => ee,
                        getScale: () => q,
                        getSize: () => B,
                        getViewGlobalPosition: () => I,
                        isEventHandled: () => Y,
                        isFocused: () => K,
                        pxToRem: () => Q,
                        remToPx: () => W,
                        resize: () => L,
                        sendEvent: () => C,
                        setAnimateWindow: () => J,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => G,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => re,
                    });
                var s = t(6483),
                    l = t.n(s);
                function d(e) {
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
                const u = d('clientResized'),
                    v = d('self.onScaleUpdated'),
                    m = (e, n) => engine.on(e, n),
                    f = (e, n) => engine.off(e, n),
                    g = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') };
                const p = (function () {
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
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function w(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function h(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const y = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    _ = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    S = Object.keys(_).reduce((e, n) => ((e[n] = () => w(_[n])), e), {}),
                    x = { play: Object.assign({}, S, { sound: w }), setRTPC: h };
                function P(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function T(e, n, t) {
                    return `url(${P(e, n, t)})`;
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
                    k = ['args'];
                const j = 2,
                    A = 16,
                    N = 32,
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
                                })(n, k);
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
                            M('popover' === e ? j : N);
                        },
                        minimize() {
                            M(F);
                        },
                        move(e) {
                            M(A, { isMouseEvent: !0, on: e });
                        },
                    };
                function V(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function D(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function U(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function B(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function L(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function I(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: W(n.x), y: W(n.y) };
                }
                function $() {
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
                function J(e, n) {
                    viewEnv.setAnimateWindow(e, n);
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
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ee() {
                    return viewEnv.getShowingStatus();
                }
                const ne = Object.keys(O).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === O[n]), e), {}),
                    te = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    re = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : z.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ie = { view: a, client: i, sound: x };
                var oe = t(6179),
                    ae = t.n(oe);
                function se() {
                    const e = (0, oe.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, oe.useEffect)(() => n, []),
                        (0, oe.useMemo)(
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
                const le = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    de = ['children', 'className', 'theme'];
                function ce() {
                    return (
                        (ce =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ce.apply(this, arguments)
                    );
                }
                const ue = ae().forwardRef(function (e, n) {
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
                        })(e, de);
                    const s = se(),
                        d = ae().useRef(null);
                    var c;
                    return (
                        (c = () => {
                            s.run(() => {
                                const e = d.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                ie.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                ie.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, oe.useEffect)(c, []),
                        ae().createElement(
                            'div',
                            ce({}, a, {
                                className: l()(le.base, le[`base__theme-${o}`], r),
                                ref: function (e) {
                                    (d.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            ae().createElement('div', { className: le.decorator }, t),
                        )
                    );
                });
                var ve = t(493),
                    me = t.n(ve),
                    fe = t(3403);
                const ge = 'TooltipAdvancedFooter_base_d6',
                    pe = 'TooltipAdvancedFooter_altBtn_e0',
                    we = ae().memo(function ({ classMix: e }) {
                        return ae().createElement(
                            'div',
                            { className: l()(ge, e) },
                            ae().createElement('div', { className: pe }),
                            ae().createElement('div', null, R.strings.tooltips.advanced.info()),
                        );
                    }),
                    he = 'GradientDecorator_base_ee',
                    Ee = 'GradientDecorator_bg_21',
                    be = 'GradientDecorator_divider_13',
                    ye = (0, oe.memo)(({ className: e, children: n }) =>
                        ae().createElement(
                            'div',
                            { className: l()(he, e) },
                            ae().createElement(
                                'div',
                                { className: Ee },
                                ae().createElement('div', { className: be }),
                                ae().createElement('div', { className: be }),
                            ),
                            n,
                        ),
                    ),
                    _e = 'SkillUntrainedHeader_base_74',
                    Se = 'SkillUntrainedHeader_gradient_03',
                    xe = 'SkillUntrainedHeader_icon_21',
                    Pe = 'SkillUntrainedHeader_header_96',
                    Te = (0, oe.memo)(({ className: e }) =>
                        ae().createElement(
                            'div',
                            { className: l()(_e, e) },
                            ae().createElement('div', { className: Se }),
                            ae().createElement('div', { className: xe }),
                            ae().createElement('div', { className: Pe }, R.strings.tooltips.skill.untrained.header()),
                        ),
                    ),
                    Re = 'SkillUntrainedApp_base_1a',
                    Oe = 'SkillUntrainedApp_body_78',
                    ze = 'SkillUntrainedApp_explanation_69',
                    ke = 'SkillUntrainedApp_footer_d8',
                    je = (0, fe.Pi)(() =>
                        ae().createElement(
                            'div',
                            { className: Re },
                            ae().createElement(Te, null),
                            ae().createElement('div', { className: Oe }, R.strings.tooltips.skill.untrained.body()),
                            ae().createElement(
                                ye,
                                null,
                                ae().createElement(
                                    'div',
                                    { className: ze },
                                    R.strings.tooltips.skill.untrained.explanation(),
                                ),
                            ),
                            ae().createElement(we, { classMix: ke }),
                        ),
                    );
                engine.whenReady.then(() => {
                    me().render(
                        ae().createElement(ue, null, ae().createElement(je, null)),
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
                for (c = 0; c < e.length; c++) {
                    for (var [t, i, o] = e[c], s = !0, l = 0; l < t.length; l++)
                        (!1 & o || a >= o) && Object.keys(r.O).every((e) => r.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(c--, 1);
                        var d = i();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
            e[c] = [t, i, o];
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
        (r.j = 6439),
        (() => {
            var e = { 6439: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var i,
                        o,
                        [a, s, l] = t,
                        d = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (i in s) r.o(s, i) && (r.m[i] = s[i]);
                        if (l) var c = l(r);
                    }
                    for (n && n(t); d < a.length; d++) (o = a[d]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return r.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var i = r.O(void 0, [9056], () => r(5195));
    i = r.O(i);
})();
