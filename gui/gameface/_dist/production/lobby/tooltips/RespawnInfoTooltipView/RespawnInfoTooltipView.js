(() => {
    'use strict';
    var e,
        t = {
            98: (e, t, n) => {
                var i = {};
                n.r(i), n.d(i, { mouse: () => g, onResize: () => p });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => E,
                        getSize: () => b,
                        graphicsQuality: () => h,
                    });
                var o = {};
                n.r(o), n.d(o, { getBgUrl: () => _, getTextureUrl: () => y });
                var a = {};
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => j,
                        addPreloadTexture: () => O,
                        children: () => o,
                        displayStatus: () => x,
                        displayStatusIs: () => U,
                        events: () => T,
                        extraSize: () => $,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => W,
                        getScale: () => G,
                        getSize: () => V,
                        getViewGlobalPosition: () => M,
                        isEventHandled: () => q,
                        isFocused: () => H,
                        pxToRem: () => B,
                        remToPx: () => k,
                        resize: () => F,
                        sendEvent: () => C,
                        setAnimateWindow: () => D,
                        setEventHandled: () => I,
                        setInputPaddingsRem: () => z,
                        setSidePaddingsRem: () => L,
                        whenTutorialReady: () => J,
                    });
                var s = n(6179),
                    d = n.n(s),
                    l = n(493),
                    c = n.n(l),
                    u = n(6483),
                    v = n.n(u);
                function m(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function f(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const p = m('clientResized'),
                    w = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') },
                    g = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && f(!1);
                        }
                        function n() {
                            e.enabled && f(!0);
                        }
                        function i() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', n))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', n))
                                : f(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const o = `mouse${t}`,
                                            a = w[t]((e) => n([e, 'outside']));
                                        function s(e) {
                                            n([e, 'inside']);
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
                                })(n)),
                                t
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
                function b(e = 'px') {
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
                function y(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function _(e, t, n) {
                    return `url(${y(e, t, n)})`;
                }
                const x = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    T = {
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
                    P = ['args'],
                    S = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        r = {},
                                        o = Object.keys(e);
                                    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, P);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((i = r),
                                              Object.entries(i).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    C = {
                        close(e) {
                            S('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            S(64);
                        },
                        move(e) {
                            S(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function O(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function z(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function N(e, t, n, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, i);
                }
                function j(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function V(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function M(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: k(t.x), y: k(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function G() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function k(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function I() {
                    return viewEnv.setEventHandled();
                }
                function q() {
                    return viewEnv.isEventHandled();
                }
                function Q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function W() {
                    return viewEnv.getShowingStatus();
                }
                const U = Object.keys(x).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === x[t]), e), {}),
                    $ = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    J = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : T.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    K = { view: a, client: r };
                const X = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    Y = ['children', 'className', 'theme'];
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                }
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                const ee = d().forwardRef(function (e, t) {
                        let n = e.children,
                            i = e.className,
                            r = e.theme,
                            o = void 0 === r ? 'default' : r,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    r = {},
                                    o = Object.keys(e);
                                for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Y);
                        const l = (function () {
                                const e = (0, s.useRef)(0);
                                var t;
                                return (
                                    (t = () => {
                                        window.cancelAnimationFrame(e.current);
                                    }),
                                    (0, s.useEffect)(() => t, []),
                                    (0, s.useMemo)(
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
                            })(),
                            c = d().useRef(null);
                        var u;
                        return (
                            (u = () => {
                                l.run(() => {
                                    const e = c.current;
                                    if (!e) return;
                                    const t = e.scrollWidth,
                                        n = e.scrollHeight;
                                    K.view.resize(t, n);
                                    const i = window.getComputedStyle(e);
                                    K.view.setSidePaddingsRem({
                                        left: parseInt(i.getPropertyValue('padding-left'), 10),
                                        top: parseInt(i.getPropertyValue('padding-top'), 10),
                                        right: parseInt(i.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(i.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(u, []),
                            d().createElement(
                                'div',
                                Z({}, a, {
                                    className: v()(X.base, X[`base__theme-${o}`], i),
                                    ref: function (e) {
                                        (c.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                    },
                                }),
                                d().createElement('div', { className: X.decorator }, n),
                            )
                        );
                    }),
                    te = {
                        base: 'Content_base_94',
                        separator: 'Content_separator_ef',
                        whiteGradient: 'Content_whiteGradient_a2',
                        title: 'Content_title_7b',
                        description: 'Content_description_0e',
                        header: 'Content_header_4f',
                        subtitle: 'Content_subtitle_a7',
                        icon: 'Content_icon_a3',
                        definitionBottom: 'Content_definitionBottom_9b',
                        definition: 'Content_definition_ea',
                        descriptionContent: 'Content_descriptionContent_3b',
                        descriptionLabel: 'Content_descriptionLabel_62',
                    },
                    ne = R.strings.battle_royale.tooltips.respawnIcon,
                    ie = () =>
                        d().createElement(
                            'div',
                            { className: te.base },
                            d().createElement(
                                'div',
                                { className: te.header },
                                d().createElement('div', { className: te.icon }),
                                d().createElement('div', { className: te.title }, ne.title()),
                                d().createElement('div', { className: te.subtitle }, ne.subtitle()),
                            ),
                            d().createElement('div', { className: te.separator }),
                            d().createElement(
                                'div',
                                { className: te.description },
                                d().createElement('div', { className: te.whiteGradient }),
                                d().createElement(
                                    'div',
                                    { className: te.descriptionContent },
                                    d().createElement('div', { className: te.descriptionText }, ne.description()),
                                ),
                                d().createElement(
                                    'div',
                                    { className: te.descriptionContent },
                                    d().createElement('div', { className: te.descriptionLabel }, ne.solo.subtitle()),
                                    d().createElement('div', { className: te.descriptionText }, ne.solo.description()),
                                ),
                                d().createElement(
                                    'div',
                                    { className: te.descriptionContent },
                                    d().createElement('div', { className: te.descriptionLabel }, ne.platoon.subtitle()),
                                    d().createElement(
                                        'div',
                                        { className: te.descriptionText },
                                        ne.platoon.description(),
                                    ),
                                ),
                            ),
                            d().createElement('div', { className: te.separator }),
                            d().createElement(
                                'div',
                                { className: te.definitionBottom },
                                d().createElement('div', { className: te.definition }, ne.definition()),
                            ),
                        ),
                    re = () => d().createElement(ee, null, d().createElement(ie, null)),
                    oe = document.createElement('div');
                (window.onload = () => document.body.appendChild(oe)), c().render(d().createElement(re, null), oe);
            },
        },
        n = {};
    function i(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var o = (n[e] = { exports: {} });
        return t[e](o, o.exports, i), o.exports;
    }
    (i.m = t),
        (e = []),
        (i.O = (t, n, r, o) => {
            if (!n) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [n, r, o] = e[c], s = !0, d = 0; d < n.length; d++)
                        (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](n[d]))
                            ? n.splice(d--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(c--, 1);
                        var l = r();
                        void 0 !== l && (t = l);
                    }
                }
                return t;
            }
            o = o || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
            e[c] = [n, r, o];
        }),
        (i.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return i.d(t, { a: t }), t;
        }),
        (i.d = (e, t) => {
            for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (i.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (i.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (i.j = 237),
        (() => {
            var e = { 237: 0 };
            i.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        o,
                        [a, s, d] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                        if (d) var c = d(i);
                    }
                    for (t && t(n); l < a.length; l++) (o = a[l]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return i.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var r = i.O(void 0, [503], () => i(98));
    r = i.O(r);
})();
