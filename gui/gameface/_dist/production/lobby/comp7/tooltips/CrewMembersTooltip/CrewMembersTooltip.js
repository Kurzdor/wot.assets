(() => {
    'use strict';
    var e,
        n = {
            1250: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => E, off: () => h, on: () => w, onResize: () => p, onScaleUpdated: () => g });
                var i = {};
                t.r(i),
                    t.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => T,
                        getSize: () => P,
                        graphicsQuality: () => x,
                        playSound: () => y,
                        setRTPC: () => _,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => j, getTextureUrl: () => A });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => U,
                        addPreloadTexture: () => B,
                        children: () => o,
                        displayStatus: () => N,
                        displayStatusIs: () => ae,
                        events: () => C,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => ie,
                        freezeTextureBeforeResize: () => K,
                        getBrowserTexturePath: () => $,
                        getDisplayStatus: () => oe,
                        getScale: () => X,
                        getSize: () => Q,
                        getViewGlobalPosition: () => J,
                        isEventHandled: () => re,
                        isFocused: () => ne,
                        pxToRem: () => Y,
                        remToPx: () => Z,
                        resize: () => W,
                        sendEvent: () => I,
                        setAnimateWindow: () => ee,
                        setEventHandled: () => te,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => q,
                        whenTutorialReady: () => le,
                    });
                var s = t(6179),
                    l = t.n(s),
                    c = t(493),
                    d = t.n(c),
                    u = t(6483),
                    v = t.n(u);
                function m(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function f(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const p = m('clientResized'),
                    g = m('self.onScaleUpdated'),
                    w = (e, n) => engine.on(e, n),
                    h = (e, n) => engine.off(e, n),
                    b = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') };
                const E = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && f(!1);
                    }
                    function t() {
                        e.enabled && f(!0);
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
                            : f(!1);
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
                            e.enabled && f(!0);
                        },
                        disableOutside() {
                            e.enabled && f(!1);
                        },
                    });
                })();
                function y(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function _(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function T(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const x = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    S = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(S).reduce((e, n) => ((e[n] = () => y(S[n])), e), {}),
                    z = { play: Object.assign({}, O, { sound: y }), setRTPC: _ };
                function A(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function j(e, n, t) {
                    return `url(${A(e, n, t)})`;
                }
                const N = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    C = {
                        onTextureFrozen: m('self.onTextureFrozen'),
                        onTextureReady: m('self.onTextureReady'),
                        onDomBuilt: m('self.onDomBuilt'),
                        onLoaded: m('self.onLoaded'),
                        onDisplayChanged: m('self.onShowingStatusChanged'),
                        onFocusUpdated: m('self.onFocusChanged'),
                        children: {
                            onAdded: m('children.onAdded'),
                            onLoaded: m('children.onLoaded'),
                            onRemoved: m('children.onRemoved'),
                            onAttached: m('children.onAttached'),
                            onTextureReady: m('children.onTextureReady'),
                            onRequestPosition: m('children.requestPosition'),
                        },
                    },
                    M = ['args'];
                const V = 2,
                    k = 16,
                    F = 32,
                    G = 64,
                    H = (e, n) => {
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
                                })(n, M);
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
                    I = {
                        close(e) {
                            H('popover' === e ? V : F);
                        },
                        minimize() {
                            H(G);
                        },
                        move(e) {
                            H(k, { isMouseEvent: !0, on: e });
                        },
                    },
                    L = 15;
                function B(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, L);
                }
                function $(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function U(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function q(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, L);
                }
                function Q(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function W(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function J(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: Z(n.x), y: Z(n.y) };
                }
                function K() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function X() {
                    return viewEnv.getScale();
                }
                function Y(e) {
                    return viewEnv.pxToRem(e);
                }
                function Z(e) {
                    return viewEnv.remToPx(e);
                }
                function ee(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ne() {
                    return viewEnv.isFocused();
                }
                function te() {
                    return viewEnv.setEventHandled();
                }
                function re() {
                    return viewEnv.isEventHandled();
                }
                function ie() {
                    viewEnv.forceTriggerMouseMove();
                }
                function oe() {
                    return viewEnv.getShowingStatus();
                }
                const ae = Object.keys(N).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === N[n]), e), {}),
                    se = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    le = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : C.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ce = { view: a, client: i, sound: z };
                function de() {
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
                const ue = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ve = ['children', 'className', 'theme'];
                function me() {
                    return (
                        (me = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        me.apply(null, arguments)
                    );
                }
                const fe = l().forwardRef(function (e, n) {
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
                            })(e, ve);
                        const c = de(),
                            d = l().useRef(null);
                        var u;
                        return (
                            (u = () => {
                                c.run(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    ce.view.resize(n, t);
                                    const r = window.getComputedStyle(e);
                                    ce.view.setSidePaddingsRem({
                                        left: parseInt(r.getPropertyValue('padding-left'), 10),
                                        top: parseInt(r.getPropertyValue('padding-top'), 10),
                                        right: parseInt(r.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(u, []),
                            l().createElement(
                                'div',
                                me({}, a, {
                                    className: v()(ue.base, ue[`base__theme-${o}`], r),
                                    ref: function (e) {
                                        (d.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                    },
                                }),
                                l().createElement('div', { className: ue.decorator }, t),
                            )
                        );
                    }),
                    pe = 'tooltips_base_6b',
                    ge = 'tooltips_heading_ac',
                    we = 'tooltips_subHeading_2c',
                    he = 'tooltips_subHeading__topIndent_e1',
                    be = 'tooltips_description_85',
                    Ee = 'tooltips_description__topIndent_ba',
                    ye = 'App_base_51',
                    _e = 'App_crewIcon_6e',
                    Pe = 'App_title_11',
                    Te = 'App_title__second_51',
                    xe = 'App_perk_9e',
                    Re = 'App_zeroPerk_a4',
                    Se = 'App_slots_27',
                    Oe = 'App_slotImage_c6',
                    ze = R.strings.comp7.crewMembersTooltip,
                    Ae = () =>
                        l().createElement(
                            fe,
                            null,
                            l().createElement(
                                'div',
                                { className: v()(pe, ye) },
                                l().createElement(
                                    'div',
                                    { className: ge },
                                    R.strings.comp7.yearlyRewards.rewards.crew(),
                                ),
                                l().createElement('div', { className: v()(we, he) }, ze.subHeading()),
                                l().createElement('div', { className: _e }),
                                l().createElement('div', { className: v()(be, Ee) }, ze.description()),
                                l().createElement('div', { className: Pe }, ze.zeroPerks()),
                                l().createElement('div', { className: Re }),
                                l().createElement('div', { className: v()(Pe, Te) }, ze.perks()),
                                l().createElement(
                                    'div',
                                    { className: Se },
                                    l().createElement(
                                        'div',
                                        { className: xe },
                                        l().createElement('div', { className: Oe }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: xe },
                                        l().createElement('div', { className: Oe }),
                                    ),
                                ),
                            ),
                        );
                engine.whenReady.then(() => {
                    d().render(l().createElement(Ae, null), document.getElementById('root'));
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
                for (d = 0; d < e.length; d++) {
                    for (var [t, i, o] = e[d], s = !0, l = 0; l < t.length; l++)
                        (!1 & o || a >= o) && Object.keys(r.O).every((e) => r.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(d--, 1);
                        var c = i();
                        void 0 !== c && (n = c);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
            e[d] = [t, i, o];
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
        (r.j = 994),
        (() => {
            var e = { 994: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var i,
                        o,
                        [a, s, l] = t,
                        c = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (i in s) r.o(s, i) && (r.m[i] = s[i]);
                        if (l) var d = l(r);
                    }
                    for (n && n(t); c < a.length; c++) (o = a[c]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return r.O(d);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var i = r.O(void 0, [926], () => r(1250));
    i = r.O(i);
})();
