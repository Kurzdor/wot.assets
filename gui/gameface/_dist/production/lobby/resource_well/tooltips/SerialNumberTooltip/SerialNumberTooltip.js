(() => {
    'use strict';
    var e,
        n = {
            3466: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => P, off: () => y, on: () => b, onResize: () => h, onScaleUpdated: () => E });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => O,
                        getSize: () => S,
                        graphicsQuality: () => z,
                        playSound: () => x,
                        setRTPC: () => T,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => F, getTextureUrl: () => V });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => U,
                        addPreloadTexture: () => W,
                        children: () => i,
                        displayStatus: () => M,
                        displayStatusIs: () => le,
                        events: () => N,
                        extraSize: () => ce,
                        forceTriggerMouseMove: () => ae,
                        freezeTextureBeforeResize: () => Y,
                        getBrowserTexturePath: () => q,
                        getDisplayStatus: () => se,
                        getScale: () => Z,
                        getSize: () => J,
                        getViewGlobalPosition: () => X,
                        isEventHandled: () => ie,
                        isFocused: () => re,
                        pxToRem: () => ee,
                        remToPx: () => ne,
                        resize: () => K,
                        sendEvent: () => H,
                        setAnimateWindow: () => te,
                        setEventHandled: () => oe,
                        setInputPaddingsRem: () => $,
                        setSidePaddingsRem: () => Q,
                        whenTutorialReady: () => ue,
                    });
                var s = t(6179),
                    l = t.n(s),
                    c = t(493),
                    u = t.n(c);
                const d = {
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
                        l().createElement(
                            'div',
                            { className: d.base },
                            l().createElement('div', { className: d.images }),
                            l().createElement(
                                'div',
                                { className: d.content },
                                l().createElement('div', { className: d.title }, v.title()),
                                l().createElement(
                                    'div',
                                    { className: d.descriptionBlock },
                                    l().createElement('div', { className: d.firstPart }, v.description.firstPart()),
                                    l().createElement('div', { className: d.secondPart }, v.description.secondPart()),
                                ),
                                l().createElement(
                                    'div',
                                    { className: d.separatorWrapper },
                                    l().createElement('div', { className: d.separator }),
                                ),
                                l().createElement('div', { className: d.moreInfo }, v.moreInfo()),
                            ),
                        );
                var f = t(6483),
                    g = t.n(f);
                function p(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function w(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const h = p('clientResized'),
                    E = p('self.onScaleUpdated'),
                    b = (e, n) => engine.on(e, n),
                    y = (e, n) => engine.off(e, n),
                    _ = { down: p('mousedown'), up: p('mouseup'), move: p('mousemove') };
                const P = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && w(!1);
                    }
                    function t() {
                        e.enabled && w(!0);
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
                            : w(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${n}`,
                                        a = _[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            o &&
                                                (a(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && w(!0);
                        },
                        disableOutside() {
                            e.enabled && w(!1);
                        },
                    });
                })();
                function x(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function T(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function O(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const z = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    C = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    j = Object.keys(C).reduce((e, n) => ((e[n] = () => x(C[n])), e), {}),
                    k = { play: Object.assign({}, j, { sound: x }), setRTPC: T };
                function V(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function F(e, n, t) {
                    return `url(${V(e, n, t)})`;
                }
                const M = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    N = {
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
                    A = ['args'];
                const B = 2,
                    G = 16,
                    I = 32,
                    L = 64,
                    D = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const o = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                                    return o;
                                })(n, A);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    H = {
                        close(e) {
                            D('popover' === e ? B : I);
                        },
                        minimize() {
                            D(L);
                        },
                        move(e) {
                            D(G, { isMouseEvent: !0, on: e });
                        },
                    };
                function W(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function q(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function U(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function Q(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function J(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function K(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function X(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: ne(n.x), y: ne(n.y) };
                }
                function Y() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Z() {
                    return viewEnv.getScale();
                }
                function ee(e) {
                    return viewEnv.pxToRem(e);
                }
                function ne(e) {
                    return viewEnv.remToPx(e);
                }
                function te(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function re() {
                    return viewEnv.isFocused();
                }
                function oe() {
                    return viewEnv.setEventHandled();
                }
                function ie() {
                    return viewEnv.isEventHandled();
                }
                function ae() {
                    viewEnv.forceTriggerMouseMove();
                }
                function se() {
                    return viewEnv.getShowingStatus();
                }
                const le = Object.keys(M).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === M[n]), e), {}),
                    ce = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ue = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : N.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    de = { view: a, client: o, sound: k };
                function ve() {
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
                const me = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    fe = ['children', 'className', 'theme'];
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const pe = l().forwardRef(function (e, n) {
                        let t = e.children,
                            r = e.className,
                            o = e.theme,
                            i = void 0 === o ? 'default' : o,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                                return o;
                            })(e, fe);
                        const c = ve(),
                            u = l().useRef(null);
                        var d;
                        return (
                            (d = () => {
                                c.run(() => {
                                    const e = u.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    de.view.resize(n, t);
                                    const r = window.getComputedStyle(e);
                                    de.view.setSidePaddingsRem({
                                        left: parseInt(r.getPropertyValue('padding-left'), 10),
                                        top: parseInt(r.getPropertyValue('padding-top'), 10),
                                        right: parseInt(r.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(d, []),
                            l().createElement(
                                'div',
                                ge({}, a, {
                                    className: g()(me.base, me[`base__theme-${i}`], r),
                                    ref: function (e) {
                                        (u.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                    },
                                }),
                                l().createElement('div', { className: me.decorator }, t),
                            )
                        );
                    }),
                    we = () => l().createElement(pe, null, l().createElement(m, null));
                engine.whenReady.then(() => {
                    u().render(l().createElement(we, null), document.getElementById('root'));
                });
            },
        },
        t = {};
    function r(e) {
        var o = t[e];
        if (void 0 !== o) return o.exports;
        var i = (t[e] = { exports: {} });
        return n[e](i, i.exports, r), i.exports;
    }
    (r.m = n),
        (e = []),
        (r.O = (n, t, o, i) => {
            if (!t) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [t, o, i] = e[u], s = !0, l = 0; l < t.length; l++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var c = o();
                        void 0 !== c && (n = c);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [t, o, i];
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
                    var o,
                        i,
                        [a, s, l] = t,
                        c = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var u = l(r);
                    }
                    for (n && n(t); c < a.length; c++) (i = a[c]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var o = r.O(void 0, [52], () => r(3466));
    o = r.O(o);
})();
