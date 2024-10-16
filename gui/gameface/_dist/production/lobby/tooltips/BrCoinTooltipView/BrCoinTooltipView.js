(() => {
    'use strict';
    var e,
        n = {
            6386: (e, n, t) => {
                var i = {};
                t.r(i),
                    t.d(i, { mouse: () => E, off: () => h, on: () => p, onResize: () => g, onScaleUpdated: () => w });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => T,
                        getSize: () => P,
                        graphicsQuality: () => x,
                        playSound: () => y,
                        setRTPC: () => _,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => j, getTextureUrl: () => z });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => D,
                        addPreloadTexture: () => G,
                        children: () => o,
                        displayStatus: () => N,
                        displayStatusIs: () => te,
                        events: () => V,
                        extraSize: () => ie,
                        forceTriggerMouseMove: () => ee,
                        freezeTextureBeforeResize: () => q,
                        getBrowserTexturePath: () => B,
                        getDisplayStatus: () => ne,
                        getScale: () => Q,
                        getSize: () => I,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => Z,
                        isFocused: () => X,
                        pxToRem: () => W,
                        remToPx: () => J,
                        resize: () => $,
                        sendEvent: () => A,
                        setAnimateWindow: () => K,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => k,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => re,
                    });
                var s = t(6179),
                    l = t.n(s),
                    d = t(493),
                    u = t.n(d),
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
                const g = m('clientResized'),
                    w = m('self.onScaleUpdated'),
                    p = (e, n) => engine.on(e, n),
                    h = (e, n) => engine.off(e, n),
                    b = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') },
                    E = (function () {
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
                    C = { play: Object.assign({}, O, { sound: y }), setRTPC: _ };
                function z(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function j(e, n, t) {
                    return `url(${z(e, n, t)})`;
                }
                const N = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    F = ['args'],
                    M = (e, n) => {
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
                    A = {
                        close(e) {
                            M('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            M(64);
                        },
                        move(e) {
                            M(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    L = 15;
                function G(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function k(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, L);
                }
                function B(e, n, t, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, i);
                }
                function D(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, L);
                }
                function I(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function $(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function U(e = 'rem') {
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
                const te = Object.keys(N).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === N[n]), e), {}),
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
                            window.isDomBuilt ? e() : V.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    oe = { view: a, client: r, sound: C };
                const ae = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    se = ['children', 'className', 'theme'];
                function le() {
                    return (
                        (le = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var i in t) ({}).hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                  }
                                  return e;
                              }),
                        le.apply(null, arguments)
                    );
                }
                const de = l().forwardRef(function (e, n) {
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
                            })(e, se);
                        const d = (function () {
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
                            })(),
                            u = l().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                d.run(() => {
                                    const e = u.current;
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
                            (0, s.useEffect)(c, []),
                            l().createElement(
                                'div',
                                le({}, a, {
                                    className: v()(ae.base, ae[`base__theme-${o}`], i),
                                    ref: function (e) {
                                        (u.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                    },
                                }),
                                l().createElement('div', { className: ae.decorator }, t),
                            )
                        );
                    }),
                    ue = 'Content_separator_70',
                    ce = 'Content_descriptionTopLabel_f2',
                    ve = 'Content_descriptionLabel_81',
                    me = R.strings.battle_royale.tooltips.brCoin,
                    fe = () =>
                        l().createElement(
                            'div',
                            { className: 'Content_base_ab' },
                            l().createElement('div', { className: 'Content_title_21' }, me.title()),
                            l().createElement(
                                'div',
                                { className: 'Content_description_86' },
                                l().createElement('div', { className: ue }),
                                l().createElement(
                                    'div',
                                    { className: 'Content_descriptionContent_b7' },
                                    l().createElement('div', { className: 'Content_whiteGradient_f6' }),
                                    l().createElement('div', { className: ce }, me.earn.title()),
                                    l().createElement('div', { className: ve }, me.earn.description()),
                                ),
                                l().createElement('div', { className: ue }),
                            ),
                            l().createElement(
                                'div',
                                { className: 'Content_descriptionBottom_2d' },
                                l().createElement('div', { className: ce }, me.spend.title()),
                                l().createElement('div', { className: ve }, me.spend.description()),
                            ),
                        ),
                    ge = () => l().createElement(de, null, l().createElement(fe, null)),
                    we = document.createElement('div');
                (window.onload = () => document.body.appendChild(we)), u().render(l().createElement(ge, null), we);
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
                for (u = 0; u < e.length; u++) {
                    for (var [t, r, o] = e[u], s = !0, l = 0; l < t.length; l++)
                        (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(u--, 1);
                        var d = r();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
            e[u] = [t, r, o];
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
        (i.j = 479),
        (() => {
            var e = { 479: 0 };
            i.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        o,
                        [a, s, l] = t,
                        d = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                        if (l) var u = l(i);
                    }
                    for (n && n(t); d < a.length; d++) (o = a[d]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return i.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var r = i.O(void 0, [503], () => i(6386));
    r = i.O(r);
})();
