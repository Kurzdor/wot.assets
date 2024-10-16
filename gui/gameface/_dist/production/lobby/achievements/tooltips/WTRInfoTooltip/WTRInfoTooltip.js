(() => {
    'use strict';
    var e,
        n = {
            1083: (e, n, t) => {
                var i = {};
                t.r(i),
                    t.d(i, { mouse: () => E, off: () => h, on: () => w, onResize: () => p, onScaleUpdated: () => g });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => P,
                        getSize: () => x,
                        graphicsQuality: () => T,
                        playSound: () => y,
                        setRTPC: () => _,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => j, getTextureUrl: () => A });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => U,
                        addPreloadTexture: () => H,
                        children: () => o,
                        displayStatus: () => C,
                        displayStatusIs: () => ae,
                        events: () => V,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => re,
                        freezeTextureBeforeResize: () => K,
                        getBrowserTexturePath: () => $,
                        getDisplayStatus: () => oe,
                        getScale: () => X,
                        getSize: () => q,
                        getViewGlobalPosition: () => J,
                        isEventHandled: () => ie,
                        isFocused: () => ne,
                        pxToRem: () => Y,
                        remToPx: () => Z,
                        resize: () => Q,
                        sendEvent: () => L,
                        setAnimateWindow: () => ee,
                        setEventHandled: () => te,
                        setInputPaddingsRem: () => I,
                        setSidePaddingsRem: () => W,
                        whenTutorialReady: () => le,
                    });
                var s = t(6179),
                    l = t.n(s),
                    u = t(493),
                    d = t.n(u),
                    c = t(6483),
                    v = t.n(c);
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
                            : f(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${n}`,
                                        a = b[n]((e) => t([e, 'outside']));
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
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const T = {
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
                const C = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    V = {
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
                    F = ['args'];
                const M = 2,
                    k = 16,
                    N = 32,
                    B = 64,
                    G = (e, n) => {
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
                                })(n, F);
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
                            G('popover' === e ? M : N);
                        },
                        minimize() {
                            G(B);
                        },
                        move(e) {
                            G(k, { isMouseEvent: !0, on: e });
                        },
                    },
                    D = 15;
                function H(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, D);
                }
                function $(e, n, t, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, i);
                }
                function U(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function W(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, D);
                }
                function q(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Q(e, n, t = 'px') {
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
                function ie() {
                    return viewEnv.isEventHandled();
                }
                function re() {
                    viewEnv.forceTriggerMouseMove();
                }
                function oe() {
                    return viewEnv.getShowingStatus();
                }
                const ae = Object.keys(C).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === C[n]), e), {}),
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
                            window.isDomBuilt ? e() : V.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ue = { view: a, client: r, sound: z };
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
                const ce = {
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
                                      for (var i in t) ({}).hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                  }
                                  return e;
                              }),
                        me.apply(null, arguments)
                    );
                }
                const fe = l().forwardRef(function (e, n) {
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
                            })(e, ve);
                        const u = de(),
                            d = l().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                u.run(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    ue.view.resize(n, t);
                                    const i = window.getComputedStyle(e);
                                    ue.view.setSidePaddingsRem({
                                        left: parseInt(i.getPropertyValue('padding-left'), 10),
                                        top: parseInt(i.getPropertyValue('padding-top'), 10),
                                        right: parseInt(i.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(i.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(c, []),
                            l().createElement(
                                'div',
                                me({}, a, {
                                    className: v()(ce.base, ce[`base__theme-${o}`], i),
                                    ref: function (e) {
                                        (d.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                    },
                                }),
                                l().createElement('div', { className: ce.decorator }, t),
                            )
                        );
                    }),
                    pe = 'App_base_e7',
                    ge = 'App_topBlock_f3',
                    we = 'App_bottomBlock_ce',
                    he = 'App_title_38',
                    be = 'App_subTitle_5d',
                    Ee = 'App_description_f5',
                    ye = 'App_list_89',
                    _e = 'App_item_3b',
                    xe = 'App_divider_f7',
                    Pe = R.strings.achievements_page.tooltips.WTR.info,
                    Te = [Pe.list.text1(), Pe.list.text2(), Pe.list.text3(), Pe.list.text4()],
                    Re = () =>
                        l().createElement(
                            fe,
                            null,
                            l().createElement(
                                'div',
                                { className: pe },
                                l().createElement(
                                    'div',
                                    { className: ge },
                                    l().createElement('div', { className: he }, Pe.title.main()),
                                    l().createElement('div', { className: Ee }, Pe.description.main()),
                                ),
                                l().createElement(
                                    'div',
                                    { className: we },
                                    l().createElement('div', { className: xe }),
                                    l().createElement('div', { className: be }, Pe.title.about()),
                                    l().createElement('div', null, Pe.description.about()),
                                    l().createElement(
                                        'div',
                                        { className: ye },
                                        Te.map((e, n) => l().createElement('div', { className: _e, key: n }, e)),
                                    ),
                                    l().createElement('div', null, Pe.caption()),
                                ),
                            ),
                        );
                engine.whenReady.then(() => {
                    d().render(l().createElement(Re, null), document.getElementById('root'));
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
                    for (var [t, r, o] = e[d], s = !0, l = 0; l < t.length; l++)
                        (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(d--, 1);
                        var u = r();
                        void 0 !== u && (n = u);
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
        (i.j = 924),
        (() => {
            var e = { 924: 0 };
            i.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        o,
                        [a, s, l] = t,
                        u = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                        if (l) var d = l(i);
                    }
                    for (n && n(t); u < a.length; u++) (o = a[u]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return i.O(d);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var r = i.O(void 0, [549], () => i(1083));
    r = i.O(r);
})();
