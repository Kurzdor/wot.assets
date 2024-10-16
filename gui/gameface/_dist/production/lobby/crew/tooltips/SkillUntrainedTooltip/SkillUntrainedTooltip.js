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
                t.r(o), t.d(o, { getBgUrl: () => T, getTextureUrl: () => x });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => H,
                        addPreloadTexture: () => G,
                        children: () => o,
                        displayStatus: () => O,
                        displayStatusIs: () => te,
                        events: () => z,
                        extraSize: () => re,
                        forceTriggerMouseMove: () => ee,
                        freezeTextureBeforeResize: () => q,
                        getBrowserTexturePath: () => U,
                        getDisplayStatus: () => ne,
                        getScale: () => Q,
                        getSize: () => L,
                        getViewGlobalPosition: () => $,
                        isEventHandled: () => Z,
                        isFocused: () => X,
                        pxToRem: () => W,
                        remToPx: () => J,
                        resize: () => I,
                        sendEvent: () => C,
                        setAnimateWindow: () => K,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => B,
                        whenTutorialReady: () => ie,
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
                    P = Object.keys(_).reduce((e, n) => ((e[n] = () => w(_[n])), e), {}),
                    S = { play: Object.assign({}, P, { sound: w }), setRTPC: h };
                function x(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function T(e, n, t) {
                    return `url(${x(e, n, t)})`;
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
                const A = 2,
                    N = 16,
                    j = 32,
                    F = 64,
                    M = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (n.indexOf(r) >= 0) continue;
                                            t[r] = e[r];
                                        }
                                    return t;
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
                            M('popover' === e ? A : j);
                        },
                        minimize() {
                            M(F);
                        },
                        move(e) {
                            M(N, { isMouseEvent: !0, on: e });
                        },
                    },
                    V = 15;
                function G(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, V);
                }
                function U(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function H(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, V);
                }
                function L(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function I(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function $(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: J(n.x), y: J(n.y) };
                }
                function q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Q() {
                    return viewEnv.getScale();
                }
                function W(e) {
                    return viewEnv.pxToRem(e);
                }
                function J(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function X() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function Z() {
                    return viewEnv.isEventHandled();
                }
                function ee() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ne() {
                    return viewEnv.getShowingStatus();
                }
                const te = Object.keys(O).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === O[n]), e), {}),
                    re = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ie = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : z.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    oe = { view: a, client: i, sound: S };
                var ae = t(6179),
                    se = t.n(ae);
                function le() {
                    const e = (0, ae.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ae.useEffect)(() => n, []),
                        (0, ae.useMemo)(
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
                const de = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ce = ['children', 'className', 'theme'];
                function ue() {
                    return (
                        (ue = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        ue.apply(null, arguments)
                    );
                }
                const ve = se().forwardRef(function (e, n) {
                    let t = e.children,
                        r = e.className,
                        i = e.theme,
                        o = void 0 === i ? 'default' : i,
                        a = (function (e, n) {
                            if (null == e) return {};
                            var t = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (n.indexOf(r) >= 0) continue;
                                    t[r] = e[r];
                                }
                            return t;
                        })(e, ce);
                    const s = le(),
                        d = se().useRef(null);
                    var c;
                    return (
                        (c = () => {
                            s.run(() => {
                                const e = d.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                oe.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                oe.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ae.useEffect)(c, []),
                        se().createElement(
                            'div',
                            ue({}, a, {
                                className: l()(de.base, de[`base__theme-${o}`], r),
                                ref: function (e) {
                                    (d.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            se().createElement('div', { className: de.decorator }, t),
                        )
                    );
                });
                var me = t(493),
                    fe = t.n(me),
                    ge = t(3403);
                const pe = 'TooltipAdvancedFooter_base_d6',
                    we = 'TooltipAdvancedFooter_altBtn_e0',
                    he = se().memo(function ({ classMix: e }) {
                        return se().createElement(
                            'div',
                            { className: l()(pe, e) },
                            se().createElement('div', { className: we }),
                            se().createElement('div', null, R.strings.tooltips.advanced.info()),
                        );
                    }),
                    Ee = 'GradientDecorator_base_ee',
                    be = 'GradientDecorator_bg_21',
                    ye = 'GradientDecorator_divider_13',
                    _e = (0, ae.memo)(({ className: e, children: n }) =>
                        se().createElement(
                            'div',
                            { className: l()(Ee, e) },
                            se().createElement(
                                'div',
                                { className: be },
                                se().createElement('div', { className: ye }),
                                se().createElement('div', { className: ye }),
                            ),
                            n,
                        ),
                    ),
                    Pe = 'SkillUntrainedHeader_base_74',
                    Se = 'SkillUntrainedHeader_gradient_03',
                    xe = 'SkillUntrainedHeader_icon_21',
                    Te = 'SkillUntrainedHeader_header_96',
                    Re = (0, ae.memo)(({ className: e }) =>
                        se().createElement(
                            'div',
                            { className: l()(Pe, e) },
                            se().createElement('div', { className: Se }),
                            se().createElement('div', { className: xe }),
                            se().createElement('div', { className: Te }, R.strings.tooltips.skill.untrained.header()),
                        ),
                    ),
                    Oe = 'SkillUntrainedApp_base_1a',
                    ze = 'SkillUntrainedApp_body_78',
                    ke = 'SkillUntrainedApp_explanation_69',
                    Ae = 'SkillUntrainedApp_footer_d8',
                    Ne = (0, ge.Pi)(() =>
                        se().createElement(
                            'div',
                            { className: Oe },
                            se().createElement(Re, null),
                            se().createElement('div', { className: ze }, R.strings.tooltips.skill.untrained.body()),
                            se().createElement(
                                _e,
                                null,
                                se().createElement(
                                    'div',
                                    { className: ke },
                                    R.strings.tooltips.skill.untrained.explanation(),
                                ),
                            ),
                            se().createElement(he, { classMix: Ae }),
                        ),
                    );
                engine.whenReady.then(() => {
                    fe().render(
                        se().createElement(ve, null, se().createElement(Ne, null)),
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
