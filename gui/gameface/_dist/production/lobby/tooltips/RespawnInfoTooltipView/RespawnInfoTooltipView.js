(() => {
    'use strict';
    var e,
        t = {
            98: (e, t, n) => {
                var i = {};
                n.r(i),
                    n.d(i, { mouse: () => h, off: () => b, on: () => g, onResize: () => p, onScaleUpdated: () => w });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => _,
                        getSize: () => y,
                        graphicsQuality: () => x,
                    });
                var o = {};
                n.r(o), n.d(o, { getBgUrl: () => P, getTextureUrl: () => T });
                var a = {};
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => F,
                        addPreloadTexture: () => j,
                        children: () => o,
                        displayStatus: () => S,
                        displayStatusIs: () => K,
                        events: () => C,
                        extraSize: () => X,
                        forceTriggerMouseMove: () => $,
                        freezeTextureBeforeResize: () => k,
                        getBrowserTexturePath: () => V,
                        getDisplayStatus: () => J,
                        getScale: () => D,
                        getSize: () => A,
                        getViewGlobalPosition: () => B,
                        isEventHandled: () => W,
                        isFocused: () => q,
                        pxToRem: () => H,
                        remToPx: () => I,
                        resize: () => G,
                        sendEvent: () => N,
                        setAnimateWindow: () => U,
                        setEventHandled: () => Q,
                        setInputPaddingsRem: () => L,
                        setSidePaddingsRem: () => M,
                        whenTutorialReady: () => Y,
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
                    w = m('self.onScaleUpdated'),
                    g = (e, t) => engine.on(e, t),
                    b = (e, t) => engine.off(e, t),
                    E = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') },
                    h = (function () {
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
                                            a = E[t]((e) => n([e, 'outside']));
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
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const x = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function T(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function P(e, t, n) {
                    return `url(${T(e, t, n)})`;
                }
                const S = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    O = ['args'],
                    z = (e, t) => {
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
                                })(t, O);
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
                    N = {
                        close(e) {
                            z('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            z(64);
                        },
                        move(e) {
                            z(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function j(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function V(e, t, n, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, i);
                }
                function F(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function M(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function G(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function B(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: I(t.x), y: I(t.y) };
                }
                function k() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function H(e) {
                    return viewEnv.pxToRem(e);
                }
                function I(e) {
                    return viewEnv.remToPx(e);
                }
                function U(e, t) {
                    viewEnv.setAnimateWindow(e, t);
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
                const K = Object.keys(S).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === S[t]), e), {}),
                    X = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    Y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : C.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Z = { view: a, client: r };
                const ee = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    te = ['children', 'className', 'theme'];
                function ne() {
                    return (
                        (ne =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                }
                                return e;
                            }),
                        ne.apply(this, arguments)
                    );
                }
                const ie = d().forwardRef(function (e, t) {
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
                            })(e, te);
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
                                    Z.view.resize(t, n);
                                    const i = window.getComputedStyle(e);
                                    Z.view.setSidePaddingsRem({
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
                                ne({}, a, {
                                    className: v()(ee.base, ee[`base__theme-${o}`], i),
                                    ref: function (e) {
                                        (c.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                    },
                                }),
                                d().createElement('div', { className: ee.decorator }, n),
                            )
                        );
                    }),
                    re = {
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
                    oe = R.strings.battle_royale.tooltips.respawnIcon,
                    ae = () =>
                        d().createElement(
                            'div',
                            { className: re.base },
                            d().createElement(
                                'div',
                                { className: re.header },
                                d().createElement('div', { className: re.icon }),
                                d().createElement('div', { className: re.title }, oe.title()),
                                d().createElement('div', { className: re.subtitle }, oe.subtitle()),
                            ),
                            d().createElement('div', { className: re.separator }),
                            d().createElement(
                                'div',
                                { className: re.description },
                                d().createElement('div', { className: re.whiteGradient }),
                                d().createElement(
                                    'div',
                                    { className: re.descriptionContent },
                                    d().createElement('div', { className: re.descriptionText }, oe.description()),
                                ),
                                d().createElement(
                                    'div',
                                    { className: re.descriptionContent },
                                    d().createElement('div', { className: re.descriptionLabel }, oe.solo.subtitle()),
                                    d().createElement('div', { className: re.descriptionText }, oe.solo.description()),
                                ),
                                d().createElement(
                                    'div',
                                    { className: re.descriptionContent },
                                    d().createElement('div', { className: re.descriptionLabel }, oe.platoon.subtitle()),
                                    d().createElement(
                                        'div',
                                        { className: re.descriptionText },
                                        oe.platoon.description(),
                                    ),
                                ),
                            ),
                            d().createElement('div', { className: re.separator }),
                            d().createElement(
                                'div',
                                { className: re.definitionBottom },
                                d().createElement('div', { className: re.definition }, oe.definition()),
                            ),
                        ),
                    se = () => d().createElement(ie, null, d().createElement(ae, null)),
                    de = document.createElement('div');
                (window.onload = () => document.body.appendChild(de)), c().render(d().createElement(se, null), de);
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
