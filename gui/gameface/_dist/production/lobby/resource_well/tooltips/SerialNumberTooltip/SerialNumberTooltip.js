(() => {
    'use strict';
    var e,
        n = {
            5817: (e, n, t) => {
                var r = {};
                t.r(r), t.d(r, { mouse: () => b, onResize: () => h });
                var i = {};
                t.r(i),
                    t.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => _,
                        getSize: () => y,
                        graphicsQuality: () => P,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => T, getTextureUrl: () => x });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => I,
                        addPreloadTexture: () => k,
                        children: () => o,
                        displayStatus: () => S,
                        displayStatusIs: () => ee,
                        events: () => O,
                        extraSize: () => ne,
                        forceTriggerMouseMove: () => Y,
                        freezeTextureBeforeResize: () => W,
                        getBrowserTexturePath: () => B,
                        getDisplayStatus: () => Z,
                        getScale: () => q,
                        getSize: () => D,
                        getViewGlobalPosition: () => H,
                        isEventHandled: () => X,
                        isFocused: () => J,
                        pxToRem: () => Q,
                        remToPx: () => U,
                        resize: () => G,
                        sendEvent: () => N,
                        setAnimateWindow: () => $,
                        setEventHandled: () => K,
                        setInputPaddingsRem: () => A,
                        setSidePaddingsRem: () => L,
                        whenTutorialReady: () => te,
                    });
                var s = t(6179),
                    u = t.n(s),
                    d = t(493),
                    c = t.n(d);
                const l = {
                        base: 'Content_base_f0',
                        images: 'Content_images_aa',
                        content: 'Content_content_69',
                        title: 'Content_title_70',
                        descriptionBlock: 'Content_descriptionBlock_91',
                        firstPart: 'Content_firstPart_eb',
                        separatorWrapper: 'Content_separatorWrapper_c6',
                        separator: 'Content_separator_ae',
                        moreInfo: 'Content_moreInfo_2f',
                    },
                    v = R.strings.resource_well.tooltips.uniq_style,
                    m = () =>
                        u().createElement(
                            'div',
                            { className: l.base },
                            u().createElement('div', { className: l.images }),
                            u().createElement(
                                'div',
                                { className: l.content },
                                u().createElement('div', { className: l.title }, v.title()),
                                u().createElement(
                                    'div',
                                    { className: l.descriptionBlock },
                                    u().createElement('div', { className: l.firstPart }, v.description.firstPart()),
                                    u().createElement('div', { className: l.secondPart }, v.description.secondPart()),
                                ),
                                u().createElement(
                                    'div',
                                    { className: l.separatorWrapper },
                                    u().createElement('div', { className: l.separator }),
                                ),
                                u().createElement('div', { className: l.moreInfo }, v.moreInfo()),
                            ),
                        );
                var f = t(6483),
                    g = t.n(f);
                function w(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function p(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const h = w('clientResized'),
                    E = { down: w('mousedown'), up: w('mouseup'), move: w('mousemove') };
                const b = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && p(!1);
                    }
                    function t() {
                        e.enabled && p(!0);
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
                            : p(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const o = `mouse${n}`,
                                        a = E[n]((e) => t([e, 'outside']));
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
                            e.enabled && p(!0);
                        },
                        disableOutside() {
                            e.enabled && p(!1);
                        },
                    });
                })();
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const P = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function x(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function T(e, n, t) {
                    return `url(${x(e, n, t)})`;
                }
                const S = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    O = {
                        onTextureFrozen: w('self.onTextureFrozen'),
                        onTextureReady: w('self.onTextureReady'),
                        onDomBuilt: w('self.onDomBuilt'),
                        onLoaded: w('self.onLoaded'),
                        onDisplayChanged: w('self.onShowingStatusChanged'),
                        onFocusUpdated: w('self.onFocusChanged'),
                        children: {
                            onAdded: w('children.onAdded'),
                            onLoaded: w('children.onLoaded'),
                            onRemoved: w('children.onRemoved'),
                            onAttached: w('children.onAttached'),
                            onTextureReady: w('children.onTextureReady'),
                            onRequestPosition: w('children.requestPosition'),
                        },
                    },
                    z = ['args'];
                const C = 2,
                    j = 16,
                    V = 32,
                    F = 64,
                    M = (e, n) => {
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
                                })(n, z);
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
                    N = {
                        close(e) {
                            M('popover' === e ? C : V);
                        },
                        minimize() {
                            M(F);
                        },
                        move(e) {
                            M(j, { isMouseEvent: !0, on: e });
                        },
                    };
                function k(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function A(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function B(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function I(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function G(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function H(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: U(n.x), y: U(n.y) };
                }
                function W() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function Q(e) {
                    return viewEnv.pxToRem(e);
                }
                function U(e) {
                    return viewEnv.remToPx(e);
                }
                function $(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function J() {
                    return viewEnv.isFocused();
                }
                function K() {
                    return viewEnv.setEventHandled();
                }
                function X() {
                    return viewEnv.isEventHandled();
                }
                function Y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const ee = Object.keys(S).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === S[n]), e), {}),
                    ne = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    te = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : O.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    re = { view: a, client: i };
                function ie() {
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
                const oe = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ae = ['children', 'className', 'theme'];
                function se() {
                    return (
                        (se =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        se.apply(this, arguments)
                    );
                }
                const ue = u().forwardRef(function (e, n) {
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
                            })(e, ae);
                        const d = ie(),
                            c = u().useRef(null);
                        var l;
                        return (
                            (l = () => {
                                d.run(() => {
                                    const e = c.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    re.view.resize(n, t);
                                    const r = window.getComputedStyle(e);
                                    re.view.setSidePaddingsRem({
                                        left: parseInt(r.getPropertyValue('padding-left'), 10),
                                        top: parseInt(r.getPropertyValue('padding-top'), 10),
                                        right: parseInt(r.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(l, []),
                            u().createElement(
                                'div',
                                se({}, a, {
                                    className: g()(oe.base, oe[`base__theme-${o}`], r),
                                    ref: function (e) {
                                        (c.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                    },
                                }),
                                u().createElement('div', { className: oe.decorator }, t),
                            )
                        );
                    }),
                    de = () => u().createElement(ue, null, u().createElement(m, null));
                engine.whenReady.then(() => {
                    c().render(u().createElement(de, null), document.getElementById('root'));
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
                for (c = 0; c < e.length; c++) {
                    for (var [t, i, o] = e[c], s = !0, u = 0; u < t.length; u++)
                        (!1 & o || a >= o) && Object.keys(r.O).every((e) => r.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(c--, 1);
                        var d = i();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
            e[c] = [t, i, o];
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
        (r.j = 738),
        (() => {
            var e = { 738: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var i,
                        o,
                        [a, s, u] = t,
                        d = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (i in s) r.o(s, i) && (r.m[i] = s[i]);
                        if (u) var c = u(r);
                    }
                    for (n && n(t); d < a.length; d++) (o = a[d]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return r.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var i = r.O(void 0, [52], () => r(5817));
    i = r.O(i);
})();
