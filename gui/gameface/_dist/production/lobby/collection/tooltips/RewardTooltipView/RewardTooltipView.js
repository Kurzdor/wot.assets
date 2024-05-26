(() => {
    'use strict';
    var e,
        t = {
            451: (e, t, n) => {
                var i = {};
                n.r(i), n.d(i, { mouse: () => m, onResize: () => u });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => g,
                        getSize: () => f,
                        graphicsQuality: () => p,
                    });
                var a = {};
                n.r(a), n.d(a, { getBgUrl: () => E, getTextureUrl: () => w });
                var o = {};
                n.r(o),
                    n.d(o, {
                        addModelObserver: () => z,
                        addPreloadTexture: () => N,
                        children: () => a,
                        displayStatus: () => _,
                        displayStatusIs: () => Q,
                        events: () => h,
                        extraSize: () => U,
                        forceTriggerMouseMove: () => I,
                        freezeTextureBeforeResize: () => M,
                        getBrowserTexturePath: () => O,
                        getDisplayStatus: () => q,
                        getScale: () => V,
                        getSize: () => D,
                        getViewGlobalPosition: () => H,
                        isEventHandled: () => G,
                        isFocused: () => k,
                        pxToRem: () => F,
                        remToPx: () => W,
                        resize: () => j,
                        sendEvent: () => R,
                        setAnimateWindow: () => L,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => S,
                        setSidePaddingsRem: () => C,
                        whenTutorialReady: () => $,
                    });
                var s = n(483),
                    l = n.n(s);
                function d(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const u = d('clientResized'),
                    v = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') };
                const m = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function n() {
                        e.enabled && c(!0);
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
                            : c(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        o = v[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        i(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, s),
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
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function f(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const p = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function w(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function E(e, t, n) {
                    return `url(${w(e, t, n)})`;
                }
                const _ = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    h = {
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
                    b = ['args'];
                const y = 2,
                    A = 16,
                    x = 32,
                    P = 64,
                    T = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        r = {},
                                        a = Object.keys(e);
                                    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, b);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    R = {
                        close(e) {
                            T('popover' === e ? y : x);
                        },
                        minimize() {
                            T(P);
                        },
                        move(e) {
                            T(A, { isMouseEvent: !0, on: e });
                        },
                    };
                function N(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function S(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function O(e, t, n, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, i);
                }
                function z(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function C(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function j(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function H(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: W(t.x), y: W(t.y) };
                }
                function M() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function V() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function W(e) {
                    return viewEnv.remToPx(e);
                }
                function L(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function k() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function G() {
                    return viewEnv.isEventHandled();
                }
                function I() {
                    viewEnv.forceTriggerMouseMove();
                }
                function q() {
                    return viewEnv.getShowingStatus();
                }
                const Q = Object.keys(_).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === _[t]), e), {}),
                    U = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    $ = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : h.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    J = { view: o, client: r };
                var K = n(179),
                    X = n.n(K);
                function Y() {
                    const e = (0, K.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, K.useEffect)(() => t, []),
                        (0, K.useMemo)(
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
                const Z = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ee = ['children', 'className', 'theme'];
                function te() {
                    return (
                        (te =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                }
                                return e;
                            }),
                        te.apply(this, arguments)
                    );
                }
                const ne = X().forwardRef(function (e, t) {
                    let n = e.children,
                        i = e.className,
                        r = e.theme,
                        a = void 0 === r ? 'default' : r,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                r = {},
                                a = Object.keys(e);
                            for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, ee);
                    const s = Y(),
                        d = X().useRef(null);
                    var c;
                    return (
                        (c = () => {
                            s.run(() => {
                                const e = d.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                J.view.resize(t, n);
                                const i = window.getComputedStyle(e);
                                J.view.setSidePaddingsRem({
                                    left: parseInt(i.getPropertyValue('padding-left'), 10),
                                    top: parseInt(i.getPropertyValue('padding-top'), 10),
                                    right: parseInt(i.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(i.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, K.useEffect)(c, []),
                        X().createElement(
                            'div',
                            te({}, o, {
                                className: l()(Z.base, Z[`base__theme-${a}`], i),
                                ref: function (e) {
                                    (d.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                },
                            }),
                            X().createElement('div', { className: Z.decorator }, n),
                        )
                    );
                });
                var ie = n(493),
                    re = n.n(ie),
                    ae = n(515);
                const oe = {
                        base: 'Content_base_4d',
                        innerWrap: 'Content_innerWrap_d6',
                        divider: 'Content_divider_09',
                        titleHeader: 'Content_titleHeader_ae',
                        titleHeader__second: 'Content_titleHeader__second_ef',
                        imageWrapper: 'Content_imageWrapper_09',
                        image: 'Content_image_0b',
                        titleDescription: 'Content_titleDescription_e3',
                        elementDescription: 'Content_elementDescription_22',
                        titleDescription__list: 'Content_titleDescription__list_15',
                        element: 'Content_element_93',
                        element__wrap: 'Content_element__wrap_70',
                    },
                    se = (0, ae.Pi)(() =>
                        X().createElement(
                            'div',
                            { className: oe.base },
                            X().createElement(
                                'div',
                                { className: oe.innerWrap },
                                X().createElement(
                                    'div',
                                    { className: l()(oe.element, oe.element__wrap) },
                                    X().createElement('div', { className: oe.titleHeader }, 'AAAAAAAAA'),
                                    X().createElement(
                                        'div',
                                        { className: oe.imageWrapper },
                                        X().createElement('div', { className: oe.image }),
                                    ),
                                ),
                                X().createElement('div', { className: oe.divider }),
                                X().createElement(
                                    'div',
                                    { className: l()(oe.element, oe.element__wrap) },
                                    X().createElement('div', { className: oe.titleHeader }, 'AAAAAAAAA'),
                                    X().createElement(
                                        'div',
                                        { className: oe.imageWrapper },
                                        X().createElement('div', { className: oe.image }),
                                    ),
                                ),
                                X().createElement('div', { className: oe.divider }),
                                X().createElement(
                                    'div',
                                    { className: l()(oe.element, oe.element__wrap) },
                                    X().createElement('div', { className: oe.titleHeader }, 'AAAAAAAAA'),
                                    X().createElement(
                                        'div',
                                        { className: oe.imageWrapper },
                                        X().createElement('div', { className: oe.image }),
                                    ),
                                ),
                                X().createElement('div', { className: oe.divider }),
                                X().createElement(
                                    'div',
                                    { className: oe.element__wrap },
                                    X().createElement(
                                        'div',
                                        { className: l()(oe.titleHeader, oe.titleHeader__second) },
                                        'Характеристики элемента',
                                    ),
                                    X().createElement(
                                        'div',
                                        { className: l()(oe.titleDescription, oe.titleDescription__list) },
                                        X().createElement(
                                            'div',
                                            null,
                                            X().createElement('div', { className: oe.iconMini }),
                                            X().createElement('div', null, 'Для всех типов карт'),
                                        ),
                                        X().createElement(
                                            'div',
                                            null,
                                            X().createElement('div', { className: oe.iconMini }),
                                            X().createElement('div', null, 'Не историчный'),
                                        ),
                                    ),
                                ),
                                X().createElement('div', { className: oe.divider }),
                                X().createElement(
                                    'div',
                                    { className: oe.element__wrap },
                                    X().createElement(
                                        'div',
                                        { className: oe.titleHeader__second },
                                        'Подходит для техники',
                                    ),
                                    X().createElement('div', { className: oe.titleDescription }, 'Для любой техники'),
                                ),
                            ),
                        ),
                    );
                engine.whenReady.then(() => {
                    re().render(
                        X().createElement(ne, null, X().createElement(se, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        n = {};
    function i(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var a = (n[e] = { exports: {} });
        return t[e](a, a.exports, i), a.exports;
    }
    (i.m = t),
        (e = []),
        (i.O = (t, n, r, a) => {
            if (!n) {
                var o = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [n, r, a] = e[c], s = !0, l = 0; l < n.length; l++)
                        (!1 & a || o >= a) && Object.keys(i.O).every((e) => i.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), a < o && (o = a));
                    if (s) {
                        e.splice(c--, 1);
                        var d = r();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            a = a || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
            e[c] = [n, r, a];
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
        (i.j = 534),
        (() => {
            var e = { 534: 0 };
            i.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        a,
                        [o, s, l] = n,
                        d = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                        if (l) var c = l(i);
                    }
                    for (t && t(n); d < o.length; d++) (a = o[d]), i.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return i.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var r = i.O(void 0, [314], () => i(451));
    r = i.O(r);
})();
