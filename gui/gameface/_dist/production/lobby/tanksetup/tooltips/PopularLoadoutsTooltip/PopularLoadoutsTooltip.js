(() => {
    'use strict';
    var e,
        t = {
            6980: (e, t, n) => {
                var o = {};
                n.r(o),
                    n.d(o, { mouse: () => g, off: () => m, on: () => v, onResize: () => c, onScaleUpdated: () => p });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => h,
                        getSize: () => _,
                        graphicsQuality: () => y,
                        playSound: () => w,
                        setRTPC: () => b,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => S, getTextureUrl: () => x });
                var a = {};
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => D,
                        addPreloadTexture: () => q,
                        children: () => i,
                        displayStatus: () => O,
                        displayStatusIs: () => ne,
                        events: () => L,
                        extraSize: () => oe,
                        forceTriggerMouseMove: () => ee,
                        freezeTextureBeforeResize: () => U,
                        getBrowserTexturePath: () => M,
                        getDisplayStatus: () => te,
                        getScale: () => Q,
                        getSize: () => H,
                        getViewGlobalPosition: () => $,
                        isEventHandled: () => Z,
                        isFocused: () => X,
                        pxToRem: () => W,
                        remToPx: () => J,
                        resize: () => I,
                        sendEvent: () => V,
                        setAnimateWindow: () => K,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => F,
                        setSidePaddingsRem: () => G,
                        whenTutorialReady: () => re,
                    });
                var s = n(6483),
                    l = n.n(s);
                function d(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const c = d('clientResized'),
                    p = d('self.onScaleUpdated'),
                    v = (e, t) => engine.on(e, t),
                    m = (e, t) => engine.off(e, t),
                    f = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') };
                const g = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && u(!1);
                    }
                    function n() {
                        e.enabled && u(!0);
                    }
                    function o() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : u(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        a = f[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        o(),
                                        () => {
                                            r &&
                                                (a(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                o(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), o();
                        },
                        enable() {
                            (e.enabled = !0), o();
                        },
                        enableOutside() {
                            e.enabled && u(!0);
                        },
                        disableOutside() {
                            e.enabled && u(!1);
                        },
                    });
                })();
                function w(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function b(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const y = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    E = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    P = Object.keys(E).reduce((e, t) => ((e[t] = () => w(E[t])), e), {}),
                    T = { play: Object.assign({}, P, { sound: w }), setRTPC: b };
                function x(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function S(e, t, n) {
                    return `url(${x(e, t, n)})`;
                }
                const O = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    L = {
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
                    z = ['args'];
                const A = 2,
                    C = 16,
                    B = 32,
                    j = 64,
                    N = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var o in e)
                                        if ({}.hasOwnProperty.call(e, o)) {
                                            if (t.indexOf(o) >= 0) continue;
                                            n[o] = e[o];
                                        }
                                    return n;
                                })(t, z);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, t]) => {
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
                        var o;
                    },
                    V = {
                        close(e) {
                            N('popover' === e ? A : B);
                        },
                        minimize() {
                            N(j);
                        },
                        move(e) {
                            N(C, { isMouseEvent: !0, on: e });
                        },
                    },
                    k = 15;
                function q(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, k);
                }
                function M(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function D(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, k);
                }
                function H(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function I(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function $(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: J(t.x), y: J(t.y) };
                }
                function U() {
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
                function K(e, t) {
                    viewEnv.setAnimateWindow(e, t);
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
                function te() {
                    return viewEnv.getShowingStatus();
                }
                const ne = Object.keys(O).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === O[t]), e), {}),
                    oe = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    re = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : L.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ie = { view: a, client: r, sound: T };
                var ae = n(6179),
                    se = n.n(ae);
                function le() {
                    const e = (0, ae.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ae.useEffect)(() => t, []),
                        (0, ae.useMemo)(
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
                }
                const de = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ue = ['children', 'className', 'theme'];
                function ce() {
                    return (
                        (ce = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                  }
                                  return e;
                              }),
                        ce.apply(null, arguments)
                    );
                }
                const pe = se().forwardRef(function (e, t) {
                    let n = e.children,
                        o = e.className,
                        r = e.theme,
                        i = void 0 === r ? 'default' : r,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var o in e)
                                if ({}.hasOwnProperty.call(e, o)) {
                                    if (t.indexOf(o) >= 0) continue;
                                    n[o] = e[o];
                                }
                            return n;
                        })(e, ue);
                    const s = le(),
                        d = se().useRef(null);
                    var u;
                    return (
                        (u = () => {
                            s.run(() => {
                                const e = d.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                ie.view.resize(t, n);
                                const o = window.getComputedStyle(e);
                                ie.view.setSidePaddingsRem({
                                    left: parseInt(o.getPropertyValue('padding-left'), 10),
                                    top: parseInt(o.getPropertyValue('padding-top'), 10),
                                    right: parseInt(o.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(o.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ae.useEffect)(u, []),
                        se().createElement(
                            'div',
                            ce({}, a, {
                                className: l()(de.base, de[`base__theme-${i}`], o),
                                ref: function (e) {
                                    (d.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                },
                            }),
                            se().createElement('div', { className: de.decorator }, n),
                        )
                    );
                });
                var ve = n(493),
                    me = n.n(ve),
                    fe = n(3403);
                const ge = {
                        base: 'PopularLoadoutsTooltipApp_base_b9',
                        header: 'PopularLoadoutsTooltipApp_header_a0',
                        header_title: 'PopularLoadoutsTooltipApp_header_title_af',
                        header_desc: 'PopularLoadoutsTooltipApp_header_desc_51',
                        separator: 'PopularLoadoutsTooltipApp_separator_4b',
                        body: 'PopularLoadoutsTooltipApp_body_40',
                        body_randomBattleCalculation: 'PopularLoadoutsTooltipApp_body_randomBattleCalculation_b1',
                        body_randomBattleCalculation_icon:
                            'PopularLoadoutsTooltipApp_body_randomBattleCalculation_icon_2e',
                        body_randomBattleCalculation_desc:
                            'PopularLoadoutsTooltipApp_body_randomBattleCalculation_desc_89',
                        body_genericEquipment: 'PopularLoadoutsTooltipApp_body_genericEquipment_52',
                        body_genericEquipment_icon: 'PopularLoadoutsTooltipApp_body_genericEquipment_icon_6c',
                        body_genericEquipment_desc: 'PopularLoadoutsTooltipApp_body_genericEquipment_desc_85',
                    },
                    we = (0, fe.Pi)(() =>
                        se().createElement(
                            'div',
                            { className: ge.base },
                            se().createElement(
                                'div',
                                { className: ge.header },
                                se().createElement(
                                    'div',
                                    { className: ge.header_title },
                                    R.strings.tank_setup.popularLoadouts.tooltip.headerTitle(),
                                ),
                                se().createElement(
                                    'div',
                                    { className: ge.header_desc },
                                    R.strings.tank_setup.popularLoadouts.tooltip.headerDescription(),
                                ),
                            ),
                            se().createElement('div', { className: ge.separator }),
                            se().createElement(
                                'div',
                                { className: ge.body },
                                se().createElement(
                                    'div',
                                    { className: ge.body_randomBattleCalculation },
                                    se().createElement('div', { className: ge.body_randomBattleCalculation_icon }),
                                    se().createElement(
                                        'div',
                                        { className: ge.body_randomBattleCalculation_desc },
                                        R.strings.tank_setup.popularLoadouts.tooltip.randomBattleCalculation(),
                                    ),
                                ),
                                se().createElement(
                                    'div',
                                    { className: ge.body_genericEquipment },
                                    se().createElement('div', { className: ge.body_genericEquipment_icon }),
                                    se().createElement(
                                        'div',
                                        { className: ge.body_genericEquipment_desc },
                                        R.strings.tank_setup.popularLoadouts.tooltip.genericEquipment(),
                                    ),
                                ),
                            ),
                            se().createElement('div', { className: ge.separatorBottom }),
                        ),
                    );
                engine.whenReady.then(() => {
                    me().render(
                        se().createElement(pe, null, se().createElement(we, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        n = {};
    function o(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var i = (n[e] = { exports: {} });
        return t[e](i, i.exports, o), i.exports;
    }
    (o.m = t),
        (e = []),
        (o.O = (t, n, r, i) => {
            if (!n) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, r, i] = e[u], s = !0, l = 0; l < n.length; l++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var d = r();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, r, i];
        }),
        (o.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return o.d(t, { a: t }), t;
        }),
        (o.d = (e, t) => {
            for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (o.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (o.j = 425),
        (() => {
            var e = { 425: 0 };
            o.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        i,
                        [a, s, l] = n,
                        d = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (l) var u = l(o);
                    }
                    for (t && t(n); d < a.length; d++) (i = a[d]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return o.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var r = o.O(void 0, [727], () => o(6980));
    r = o.O(r);
})();
