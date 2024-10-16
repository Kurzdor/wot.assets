(() => {
    'use strict';
    var e,
        n = {
            4277: (e, n, t) => {
                var i = {};
                t.r(i),
                    t.d(i, { mouse: () => p, off: () => g, on: () => f, onResize: () => c, onScaleUpdated: () => v });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => y,
                        getSize: () => b,
                        graphicsQuality: () => E,
                        playSound: () => w,
                        setRTPC: () => h,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => _, getTextureUrl: () => S });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => H,
                        addPreloadTexture: () => G,
                        children: () => o,
                        displayStatus: () => O,
                        displayStatusIs: () => te,
                        events: () => z,
                        extraSize: () => ie,
                        forceTriggerMouseMove: () => ee,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => D,
                        getDisplayStatus: () => ne,
                        getScale: () => U,
                        getSize: () => N,
                        getViewGlobalPosition: () => q,
                        isEventHandled: () => Z,
                        isFocused: () => K,
                        pxToRem: () => X,
                        remToPx: () => W,
                        resize: () => Q,
                        sendEvent: () => L,
                        setAnimateWindow: () => J,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => B,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => re,
                    });
                var s = t(6483),
                    u = t.n(s);
                function l(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function d(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const c = l('clientResized'),
                    v = l('self.onScaleUpdated'),
                    f = (e, n) => engine.on(e, n),
                    g = (e, n) => engine.off(e, n),
                    m = { down: l('mousedown'), up: l('mouseup'), move: l('mousemove') };
                const p = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && d(!1);
                    }
                    function t() {
                        e.enabled && d(!0);
                    }
                    function i() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', n),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', n),
                                  document.body.addEventListener('mouseleave', t))
                            : d(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${n}`,
                                        a = m[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, s),
                                        i(),
                                        () => {
                                            r &&
                                                (a(),
                                                window.removeEventListener(o, s),
                                                (e.listeners -= 1),
                                                i(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), i();
                        },
                        enable() {
                            (e.enabled = !0), i();
                        },
                        enableOutside() {
                            e.enabled && d(!0);
                        },
                        disableOutside() {
                            e.enabled && d(!1);
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
                    T = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    P = Object.keys(T).reduce((e, n) => ((e[n] = () => w(T[n])), e), {}),
                    x = { play: Object.assign({}, P, { sound: w }), setRTPC: h };
                function S(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function _(e, n, t) {
                    return `url(${S(e, n, t)})`;
                }
                const O = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    z = {
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
                    j = ['args'];
                const A = 2,
                    k = 16,
                    C = 32,
                    V = 64,
                    F = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const r = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var i in e)
                                        if ({}.hasOwnProperty.call(e, i)) {
                                            if (n.indexOf(i) >= 0) continue;
                                            t[i] = e[i];
                                        }
                                    return t;
                                })(n, j);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((i = r),
                                              Object.entries(i).map(([e, n]) => {
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
                        var i;
                    },
                    L = {
                        close(e) {
                            F('popover' === e ? A : C);
                        },
                        minimize() {
                            F(V);
                        },
                        move(e) {
                            F(k, { isMouseEvent: !0, on: e });
                        },
                    },
                    M = 15;
                function G(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, M);
                }
                function D(e, n, t, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, i);
                }
                function H(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, M);
                }
                function N(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Q(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function q(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: W(n.x), y: W(n.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function U() {
                    return viewEnv.getScale();
                }
                function X(e) {
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
                    ie = {
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
                    oe = { view: a, client: r, sound: x };
                var ae = t(6179),
                    se = t.n(ae);
                function ue() {
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
                const le = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    de = ['children', 'className', 'theme'];
                function ce() {
                    return (
                        (ce = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var i in t) ({}).hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                  }
                                  return e;
                              }),
                        ce.apply(null, arguments)
                    );
                }
                const ve = se().forwardRef(function (e, n) {
                    let t = e.children,
                        i = e.className,
                        r = e.theme,
                        o = void 0 === r ? 'default' : r,
                        a = (function (e, n) {
                            if (null == e) return {};
                            var t = {};
                            for (var i in e)
                                if ({}.hasOwnProperty.call(e, i)) {
                                    if (n.indexOf(i) >= 0) continue;
                                    t[i] = e[i];
                                }
                            return t;
                        })(e, de);
                    const s = ue(),
                        l = se().useRef(null);
                    var d;
                    return (
                        (d = () => {
                            s.run(() => {
                                const e = l.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                oe.view.resize(n, t);
                                const i = window.getComputedStyle(e);
                                oe.view.setSidePaddingsRem({
                                    left: parseInt(i.getPropertyValue('padding-left'), 10),
                                    top: parseInt(i.getPropertyValue('padding-top'), 10),
                                    right: parseInt(i.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(i.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ae.useEffect)(d, []),
                        se().createElement(
                            'div',
                            ce({}, a, {
                                className: u()(le.base, le[`base__theme-${o}`], i),
                                ref: function (e) {
                                    (l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            se().createElement('div', { className: le.decorator }, t),
                        )
                    );
                });
                var fe = t(493),
                    ge = t.n(fe);
                const me = 'QuickTrainingLostXpTooltipApp_base_51',
                    pe = 'QuickTrainingLostXpTooltipApp_title_c2',
                    we = 'QuickTrainingLostXpTooltipApp_description_29',
                    he = () =>
                        se().createElement(
                            'div',
                            { className: me },
                            se().createElement(
                                'div',
                                { className: pe },
                                R.strings.tooltips.quickTraining.lostXpTooltip.header(),
                            ),
                            se().createElement(
                                'div',
                                { className: we },
                                R.strings.tooltips.quickTraining.lostXpTooltip.body(),
                            ),
                        );
                engine.whenReady.then(() => {
                    ge().render(
                        se().createElement(ve, null, se().createElement(he, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        t = {};
    function i(e) {
        var r = t[e];
        if (void 0 !== r) return r.exports;
        var o = (t[e] = { exports: {} });
        return n[e](o, o.exports, i), o.exports;
    }
    (i.m = n),
        (e = []),
        (i.O = (n, t, r, o) => {
            if (!t) {
                var a = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [t, r, o] = e[d], s = !0, u = 0; u < t.length; u++)
                        (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(d--, 1);
                        var l = r();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
            e[d] = [t, r, o];
        }),
        (i.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return i.d(n, { a: n }), n;
        }),
        (i.d = (e, n) => {
            for (var t in n) i.o(n, t) && !i.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (i.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (i.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (i.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (i.j = 8854),
        (() => {
            var e = { 8854: 0 };
            i.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        o,
                        [a, s, u] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                        if (u) var d = u(i);
                    }
                    for (n && n(t); l < a.length; l++) (o = a[l]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return i.O(d);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var r = i.O(void 0, [9056], () => i(4277));
    r = i.O(r);
})();
