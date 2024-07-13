(() => {
    'use strict';
    var e,
        n = {
            8488: (e, n, t) => {
                var o = {};
                t.r(o),
                    t.d(o, { mouse: () => _, off: () => x, on: () => P, onResize: () => y, onScaleUpdated: () => E });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => j,
                        getSize: () => z,
                        graphicsQuality: () => C,
                        playSound: () => S,
                        setRTPC: () => O,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => M, getTextureUrl: () => L });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => J,
                        addPreloadTexture: () => q,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => le,
                        events: () => G,
                        extraSize: () => ce,
                        forceTriggerMouseMove: () => ue,
                        freezeTextureBeforeResize: () => ee,
                        getBrowserTexturePath: () => W,
                        getDisplayStatus: () => de,
                        getScale: () => ne,
                        getSize: () => X,
                        getViewGlobalPosition: () => Z,
                        isEventHandled: () => se,
                        isFocused: () => ie,
                        pxToRem: () => te,
                        remToPx: () => oe,
                        resize: () => Y,
                        sendEvent: () => U,
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
                const c = 'Content_base_3a',
                    v = 'Content_title_3c',
                    f = 'Content_description1_09',
                    m = 'Content_description2_d4',
                    g = () =>
                        u().createElement(
                            'div',
                            { className: c },
                            u().createElement('div', { className: v }, R.strings.battle_pass.tooltips.iconLock.title()),
                            u().createElement(
                                'div',
                                { className: f },
                                R.strings.battle_pass.tooltips.iconLock.descr1(),
                            ),
                            u().createElement(
                                'div',
                                { className: m },
                                R.strings.battle_pass.tooltips.iconLock.descr2(),
                            ),
                        );
                var w = t(6483),
                    p = t.n(w);
                function h(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function b(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const y = h('clientResized'),
                    E = h('self.onScaleUpdated'),
                    P = (e, n) => engine.on(e, n),
                    x = (e, n) => engine.off(e, n),
                    T = { down: h('mousedown'), up: h('mouseup'), move: h('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && b(!1);
                    }
                    function t() {
                        e.enabled && b(!0);
                    }
                    function o() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', n),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', n),
                                  document.body.addEventListener('mouseleave', t))
                            : b(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${n}`,
                                        a = T[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
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
                            })(t)),
                            n
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
                            e.enabled && b(!0);
                        },
                        disableOutside() {
                            e.enabled && b(!1);
                        },
                    });
                })();
                function S(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function O(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function j(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    k = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    V = Object.keys(k).reduce((e, n) => ((e[n] = () => S(k[n])), e), {}),
                    F = { play: Object.assign({}, V, { sound: S }), setRTPC: O };
                function L(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function M(e, n, t) {
                    return `url(${L(e, n, t)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    G = {
                        onTextureFrozen: h('self.onTextureFrozen'),
                        onTextureReady: h('self.onTextureReady'),
                        onDomBuilt: h('self.onDomBuilt'),
                        onLoaded: h('self.onLoaded'),
                        onDisplayChanged: h('self.onShowingStatusChanged'),
                        onFocusUpdated: h('self.onFocusChanged'),
                        children: {
                            onAdded: h('children.onAdded'),
                            onLoaded: h('children.onLoaded'),
                            onRemoved: h('children.onRemoved'),
                            onAttached: h('children.onAttached'),
                            onTextureReady: h('children.onTextureReady'),
                            onRequestPosition: h('children.requestPosition'),
                        },
                    },
                    D = ['args'];
                const B = 2,
                    H = 16,
                    N = 32,
                    I = 64,
                    $ = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const r = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(n, D);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, n]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var o;
                    },
                    U = {
                        close(e) {
                            $('popover' === e ? B : N);
                        },
                        minimize() {
                            $(I);
                        },
                        move(e) {
                            $(H, { isMouseEvent: !0, on: e });
                        },
                    };
                function q(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function Q(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function W(e, n, t, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, o);
                }
                function J(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function K(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function X(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Y(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function Z(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: oe(n.x), y: oe(n.y) };
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
                function oe(e) {
                    return viewEnv.remToPx(e);
                }
                function re(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ie() {
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
                const le = Object.keys(A).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === A[n]), e), {}),
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
                            window.isDomBuilt ? e() : G.onDomBuilt(e);
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
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const he = u().forwardRef(function (e, n) {
                        let t = e.children,
                            o = e.className,
                            r = e.theme,
                            i = void 0 === r ? 'default' : r,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
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
                                    const o = window.getComputedStyle(e);
                                    fe.view.setSidePaddingsRem({
                                        left: parseInt(o.getPropertyValue('padding-left'), 10),
                                        top: parseInt(o.getPropertyValue('padding-top'), 10),
                                        right: parseInt(o.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(o.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(c, []),
                            u().createElement(
                                'div',
                                pe({}, a, {
                                    className: p()(ge.base, ge[`base__theme-${i}`], o),
                                    ref: function (e) {
                                        (l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                    },
                                }),
                                u().createElement('div', { className: ge.decorator }, t),
                            )
                        );
                    }),
                    be = () => u().createElement(he, null, u().createElement(g, null)),
                    ye = document.createElement('div');
                (window.onload = () => document.body.appendChild(ye)), l().render(u().createElement(be, null), ye);
            },
        },
        t = {};
    function o(e) {
        var r = t[e];
        if (void 0 !== r) return r.exports;
        var i = (t[e] = { exports: {} });
        return n[e](i, i.exports, o), i.exports;
    }
    (o.m = n),
        (e = []),
        (o.O = (n, t, r, i) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [t, r, i] = e[l], s = !0, u = 0; u < t.length; u++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(l--, 1);
                        var d = r();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) e[l] = e[l - 1];
            e[l] = [t, r, i];
        }),
        (o.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return o.d(n, { a: n }), n;
        }),
        (o.d = (e, n) => {
            for (var t in n) o.o(n, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (o.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (o.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (o.j = 5610),
        (() => {
            var e = { 5610: 0 };
            o.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        i,
                        [a, s, u] = t,
                        d = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (u) var l = u(o);
                    }
                    for (n && n(t); d < a.length; d++) (i = a[d]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return o.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var r = o.O(void 0, [1519], () => o(8488));
    r = o.O(r);
})();
