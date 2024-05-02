(() => {
    'use strict';
    var e,
        n = {
            7795: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => w, off: () => f, on: () => m, onResize: () => c, onScaleUpdated: () => v });
                var i = {};
                t.r(i),
                    t.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => E,
                        getSize: () => p,
                        graphicsQuality: () => h,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => y, getTextureUrl: () => b });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => M,
                        addPreloadTexture: () => N,
                        children: () => o,
                        displayStatus: () => _,
                        displayStatusIs: () => K,
                        events: () => x,
                        extraSize: () => X,
                        forceTriggerMouseMove: () => $,
                        freezeTextureBeforeResize: () => H,
                        getBrowserTexturePath: () => F,
                        getDisplayStatus: () => J,
                        getScale: () => B,
                        getSize: () => D,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => W,
                        isFocused: () => q,
                        pxToRem: () => C,
                        remToPx: () => L,
                        resize: () => G,
                        sendEvent: () => A,
                        setAnimateWindow: () => I,
                        setEventHandled: () => Q,
                        setInputPaddingsRem: () => j,
                        setSidePaddingsRem: () => V,
                        whenTutorialReady: () => Y,
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
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const c = d('clientResized'),
                    v = d('self.onScaleUpdated'),
                    m = (e, n) => engine.on(e, n),
                    f = (e, n) => engine.off(e, n),
                    g = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') };
                const w = (function () {
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
                            e.enabled && u(!0);
                        },
                        disableOutside() {
                            e.enabled && u(!1);
                        },
                    });
                })();
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const h = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function b(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function y(e, n, t) {
                    return `url(${b(e, n, t)})`;
                }
                const _ = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    x = {
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
                    S = ['args'];
                const P = 2,
                    T = 16,
                    O = 32,
                    z = 64,
                    k = (e, n) => {
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
                                })(n, S);
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
                    A = {
                        close(e) {
                            k('popover' === e ? P : O);
                        },
                        minimize() {
                            k(z);
                        },
                        move(e) {
                            k(T, { isMouseEvent: !0, on: e });
                        },
                    };
                function N(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function j(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function F(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function M(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function V(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function G(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function U(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: L(n.x), y: L(n.y) };
                }
                function H() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function B() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function L(e) {
                    return viewEnv.remToPx(e);
                }
                function I(e, n) {
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
                function $() {
                    viewEnv.forceTriggerMouseMove();
                }
                function J() {
                    return viewEnv.getShowingStatus();
                }
                const K = Object.keys(_).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === _[n]), e), {}),
                    X = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    Y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : x.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Z = { view: a, client: i };
                var ee = t(6179),
                    ne = t.n(ee);
                function te() {
                    const e = (0, ee.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ee.useEffect)(() => n, []),
                        (0, ee.useMemo)(
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
                const ae = ne().forwardRef(function (e, n) {
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
                    const s = te(),
                        d = ne().useRef(null);
                    var u;
                    return (
                        (u = () => {
                            s.run(() => {
                                const e = d.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                Z.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                Z.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ee.useEffect)(u, []),
                        ne().createElement(
                            'div',
                            oe({}, a, {
                                className: l()(re.base, re[`base__theme-${o}`], r),
                                ref: function (e) {
                                    (d.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            ne().createElement('div', { className: re.decorator }, t),
                        )
                    );
                });
                var se = t(493),
                    le = t.n(se),
                    de = t(3403);
                const ue = 'TooltipAdvancedFooter_base_d6',
                    ce = 'TooltipAdvancedFooter_altBtn_e0',
                    ve = ne().memo(function ({ classMix: e }) {
                        return ne().createElement(
                            'div',
                            { className: l()(ue, e) },
                            ne().createElement('div', { className: ce }),
                            ne().createElement('div', null, R.strings.tooltips.advanced.info()),
                        );
                    }),
                    me = 'GradientDecorator_base_ee',
                    fe = 'GradientDecorator_bg_21',
                    ge = 'GradientDecorator_divider_13',
                    we = (0, ee.memo)(({ className: e, children: n }) =>
                        ne().createElement(
                            'div',
                            { className: l()(me, e) },
                            ne().createElement(
                                'div',
                                { className: fe },
                                ne().createElement('div', { className: ge }),
                                ne().createElement('div', { className: ge }),
                            ),
                            n,
                        ),
                    ),
                    pe = 'SkillUntrainedHeader_base_74',
                    Ee = 'SkillUntrainedHeader_gradient_03',
                    he = 'SkillUntrainedHeader_icon_21',
                    be = 'SkillUntrainedHeader_header_96',
                    ye = (0, ee.memo)(({ className: e }) =>
                        ne().createElement(
                            'div',
                            { className: l()(pe, e) },
                            ne().createElement('div', { className: Ee }),
                            ne().createElement('div', { className: he }),
                            ne().createElement('div', { className: be }, R.strings.tooltips.skill.untrained.header()),
                        ),
                    ),
                    _e = 'SkillUntrainedApp_base_1a',
                    xe = 'SkillUntrainedApp_body_78',
                    Se = 'SkillUntrainedApp_explanation_69',
                    Pe = 'SkillUntrainedApp_footer_d8',
                    Te = (0, de.Pi)(() =>
                        ne().createElement(
                            'div',
                            { className: _e },
                            ne().createElement(ye, null),
                            ne().createElement('div', { className: xe }, R.strings.tooltips.skill.untrained.body()),
                            ne().createElement(
                                we,
                                null,
                                ne().createElement(
                                    'div',
                                    { className: Se },
                                    R.strings.tooltips.skill.untrained.explanation(),
                                ),
                            ),
                            ne().createElement(ve, { classMix: Pe }),
                        ),
                    );
                engine.whenReady.then(() => {
                    le().render(
                        ne().createElement(ae, null, ne().createElement(Te, null)),
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
                for (u = 0; u < e.length; u++) {
                    for (var [t, i, o] = e[u], s = !0, l = 0; l < t.length; l++)
                        (!1 & o || a >= o) && Object.keys(r.O).every((e) => r.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(u--, 1);
                        var d = i();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
            e[u] = [t, i, o];
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
        (r.j = 439),
        (() => {
            var e = { 439: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var i,
                        o,
                        [a, s, l] = t,
                        d = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (i in s) r.o(s, i) && (r.m[i] = s[i]);
                        if (l) var u = l(r);
                    }
                    for (n && n(t); d < a.length; d++) (o = a[d]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return r.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var i = r.O(void 0, [56], () => r(7795));
    i = r.O(i);
})();
