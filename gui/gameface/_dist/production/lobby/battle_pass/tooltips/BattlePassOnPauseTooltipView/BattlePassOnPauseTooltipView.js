(() => {
    'use strict';
    var e,
        n = {
            3164: (e, n, t) => {
                var i = {};
                t.r(i),
                    t.d(i, { mouse: () => T, off: () => P, on: () => E, onResize: () => b, onScaleUpdated: () => y });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => z,
                        getSize: () => O,
                        graphicsQuality: () => C,
                        playSound: () => S,
                        setRTPC: () => _,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => A, getTextureUrl: () => M });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => J,
                        addPreloadTexture: () => q,
                        children: () => o,
                        displayStatus: () => G,
                        displayStatusIs: () => le,
                        events: () => L,
                        extraSize: () => ce,
                        forceTriggerMouseMove: () => ue,
                        freezeTextureBeforeResize: () => ee,
                        getBrowserTexturePath: () => W,
                        getDisplayStatus: () => de,
                        getScale: () => ne,
                        getSize: () => X,
                        getViewGlobalPosition: () => Z,
                        isEventHandled: () => se,
                        isFocused: () => oe,
                        pxToRem: () => te,
                        remToPx: () => ie,
                        resize: () => Y,
                        sendEvent: () => $,
                        setAnimateWindow: () => re,
                        setEventHandled: () => ae,
                        setInputPaddingsRem: () => Q,
                        setSidePaddingsRem: () => K,
                        whenTutorialReady: () => ve,
                    });
                var s = t(6179),
                    u = t.n(s),
                    d = t(493),
                    l = t.n(d);
                const c = 'Content_base_2e',
                    v = 'Content_title_71',
                    f = 'Content_description_38',
                    m = () =>
                        u().createElement(
                            'div',
                            { className: c },
                            u().createElement(
                                'div',
                                { className: v },
                                R.strings.battle_pass.tooltips.entryPoint.disabled.header(),
                            ),
                            u().createElement(
                                'div',
                                { className: f },
                                R.strings.battle_pass.tooltips.entryPoint.disabled.body(),
                            ),
                        );
                var g = t(6483),
                    w = t.n(g);
                function p(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function h(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const b = p('clientResized'),
                    y = p('self.onScaleUpdated'),
                    E = (e, n) => engine.on(e, n),
                    P = (e, n) => engine.off(e, n),
                    x = { down: p('mousedown'), up: p('mouseup'), move: p('mousemove') };
                const T = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && h(!1);
                    }
                    function t() {
                        e.enabled && h(!0);
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
                            : h(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${n}`,
                                        a = x[n]((e) => t([e, 'outside']));
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
                            e.enabled && h(!0);
                        },
                        disableOutside() {
                            e.enabled && h(!1);
                        },
                    });
                })();
                function S(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function _(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function O(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    j = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    V = Object.keys(j).reduce((e, n) => ((e[n] = () => S(j[n])), e), {}),
                    F = { play: Object.assign({}, V, { sound: S }), setRTPC: _ };
                function M(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function A(e, n, t) {
                    return `url(${M(e, n, t)})`;
                }
                const G = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    L = {
                        onTextureFrozen: p('self.onTextureFrozen'),
                        onTextureReady: p('self.onTextureReady'),
                        onDomBuilt: p('self.onDomBuilt'),
                        onLoaded: p('self.onLoaded'),
                        onDisplayChanged: p('self.onShowingStatusChanged'),
                        onFocusUpdated: p('self.onFocusChanged'),
                        children: {
                            onAdded: p('children.onAdded'),
                            onLoaded: p('children.onLoaded'),
                            onRemoved: p('children.onRemoved'),
                            onAttached: p('children.onAttached'),
                            onTextureReady: p('children.onTextureReady'),
                            onRequestPosition: p('children.requestPosition'),
                        },
                    },
                    k = ['args'];
                const D = 2,
                    B = 16,
                    H = 32,
                    N = 64,
                    I = (e, n) => {
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
                                })(n, k);
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
                    $ = {
                        close(e) {
                            I('popover' === e ? D : H);
                        },
                        minimize() {
                            I(N);
                        },
                        move(e) {
                            I(B, { isMouseEvent: !0, on: e });
                        },
                    },
                    U = 15;
                function q(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function Q(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, U);
                }
                function W(e, n, t, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, i);
                }
                function J(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function K(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, U);
                }
                function X(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Y(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function Z(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: ie(n.x), y: ie(n.y) };
                }
                function ee() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function ne() {
                    return viewEnv.getScale();
                }
                function te(e) {
                    return viewEnv.pxToRem(e);
                }
                function ie(e) {
                    return viewEnv.remToPx(e);
                }
                function re(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function oe() {
                    return viewEnv.isFocused();
                }
                function ae() {
                    return viewEnv.setEventHandled();
                }
                function se() {
                    return viewEnv.isEventHandled();
                }
                function ue() {
                    viewEnv.forceTriggerMouseMove();
                }
                function de() {
                    return viewEnv.getShowingStatus();
                }
                const le = Object.keys(G).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === G[n]), e), {}),
                    ce = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ve = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : L.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    fe = { view: a, client: r, sound: F };
                function me() {
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
                const ge = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    we = ['children', 'className', 'theme'];
                function pe() {
                    return (
                        (pe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var i in t) ({}).hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                  }
                                  return e;
                              }),
                        pe.apply(null, arguments)
                    );
                }
                const he = u().forwardRef(function (e, n) {
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
                            })(e, we);
                        const d = me(),
                            l = u().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                d.run(() => {
                                    const e = l.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    fe.view.resize(n, t);
                                    const i = window.getComputedStyle(e);
                                    fe.view.setSidePaddingsRem({
                                        left: parseInt(i.getPropertyValue('padding-left'), 10),
                                        top: parseInt(i.getPropertyValue('padding-top'), 10),
                                        right: parseInt(i.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(i.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(c, []),
                            u().createElement(
                                'div',
                                pe({}, a, {
                                    className: w()(ge.base, ge[`base__theme-${o}`], i),
                                    ref: function (e) {
                                        (l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                    },
                                }),
                                u().createElement('div', { className: ge.decorator }, t),
                            )
                        );
                    }),
                    be = () => u().createElement(he, null, u().createElement(m, null)),
                    ye = document.createElement('div');
                (window.onload = () => document.body.appendChild(ye)), l().render(u().createElement(be, null), ye);
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
                for (l = 0; l < e.length; l++) {
                    for (var [t, r, o] = e[l], s = !0, u = 0; u < t.length; u++)
                        (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(l--, 1);
                        var d = r();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
            e[l] = [t, r, o];
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
        (i.j = 1705),
        (() => {
            var e = { 1705: 0 };
            i.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        o,
                        [a, s, u] = t,
                        d = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                        if (u) var l = u(i);
                    }
                    for (n && n(t); d < a.length; d++) (o = a[d]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return i.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var r = i.O(void 0, [1519], () => i(3164));
    r = i.O(r);
})();
