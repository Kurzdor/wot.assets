(() => {
    'use strict';
    var e,
        t = {
            254: (e, t, n) => {
                var i = {};
                n.r(i), n.d(i, { mouse: () => w, onResize: () => p });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => E,
                        getSize: () => h,
                        graphicsQuality: () => b,
                    });
                var o = {};
                n.r(o), n.d(o, { getBgUrl: () => _, getTextureUrl: () => y });
                var a = {};
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => N,
                        addPreloadTexture: () => F,
                        children: () => o,
                        displayStatus: () => x,
                        displayStatusIs: () => X,
                        events: () => T,
                        extraSize: () => Y,
                        forceTriggerMouseMove: () => J,
                        freezeTextureBeforeResize: () => G,
                        getBrowserTexturePath: () => k,
                        getDisplayStatus: () => K,
                        getScale: () => H,
                        getSize: () => C,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => $,
                        isFocused: () => Q,
                        pxToRem: () => I,
                        remToPx: () => W,
                        resize: () => L,
                        sendEvent: () => V,
                        setAnimateWindow: () => q,
                        setEventHandled: () => U,
                        setInputPaddingsRem: () => M,
                        setSidePaddingsRem: () => B,
                        whenTutorialReady: () => Z,
                    });
                var s = n(6179),
                    u = n.n(s),
                    d = n(493),
                    l = n.n(d),
                    c = n(6483),
                    v = n.n(c);
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
                    g = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') };
                const w = (function () {
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
                                        a = g[t]((e) => n([e, 'outside']));
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
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
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
                    P = ['args'];
                const S = 2,
                    O = 16,
                    z = 32,
                    A = 64,
                    j = (e, t) => {
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
                    V = {
                        close(e) {
                            j('popover' === e ? S : z);
                        },
                        minimize() {
                            j(A);
                        },
                        move(e) {
                            j(O, { isMouseEvent: !0, on: e });
                        },
                    };
                function F(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function M(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function k(e, t, n, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, i);
                }
                function N(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function L(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function D(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: W(t.x), y: W(t.y) };
                }
                function G() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function H() {
                    return viewEnv.getScale();
                }
                function I(e) {
                    return viewEnv.pxToRem(e);
                }
                function W(e) {
                    return viewEnv.remToPx(e);
                }
                function q(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Q() {
                    return viewEnv.isFocused();
                }
                function U() {
                    return viewEnv.setEventHandled();
                }
                function $() {
                    return viewEnv.isEventHandled();
                }
                function J() {
                    viewEnv.forceTriggerMouseMove();
                }
                function K() {
                    return viewEnv.getShowingStatus();
                }
                const X = Object.keys(x).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === x[t]), e), {}),
                    Y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    Z = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : T.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ee = { view: a, client: r };
                function te() {
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
                }
                const ne = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ie = ['children', 'className', 'theme'];
                function re() {
                    return (
                        (re =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                }
                                return e;
                            }),
                        re.apply(this, arguments)
                    );
                }
                const oe = u().forwardRef(function (e, t) {
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
                            })(e, ie);
                        const d = te(),
                            l = u().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                d.run(() => {
                                    const e = l.current;
                                    if (!e) return;
                                    const t = e.scrollWidth,
                                        n = e.scrollHeight;
                                    ee.view.resize(t, n);
                                    const i = window.getComputedStyle(e);
                                    ee.view.setSidePaddingsRem({
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
                                re({}, a, {
                                    className: v()(ne.base, ne[`base__theme-${o}`], i),
                                    ref: function (e) {
                                        (l.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                    },
                                }),
                                u().createElement('div', { className: ne.decorator }, n),
                            )
                        );
                    }),
                    ae = 'App_base_e7',
                    se = 'App_topBlock_f3',
                    ue = 'App_bottomBlock_ce',
                    de = 'App_title_38',
                    le = 'App_subTitle_5d',
                    ce = 'App_description_f5',
                    ve = 'App_list_89',
                    me = 'App_item_3b',
                    fe = 'App_divider_f7',
                    pe = R.strings.achievements_page.tooltips.WTR.info,
                    ge = [pe.list.text1(), pe.list.text2(), pe.list.text3(), pe.list.text4()],
                    we = () =>
                        u().createElement(
                            oe,
                            null,
                            u().createElement(
                                'div',
                                { className: ae },
                                u().createElement(
                                    'div',
                                    { className: se },
                                    u().createElement('div', { className: de }, pe.title.main()),
                                    u().createElement('div', { className: ce }, pe.description.main()),
                                ),
                                u().createElement(
                                    'div',
                                    { className: ue },
                                    u().createElement('div', { className: fe }),
                                    u().createElement('div', { className: le }, pe.title.about()),
                                    u().createElement('div', null, pe.description.about()),
                                    u().createElement(
                                        'div',
                                        { className: ve },
                                        ge.map((e, t) => u().createElement('div', { className: me, key: t }, e)),
                                    ),
                                    u().createElement('div', null, pe.caption()),
                                ),
                            ),
                        );
                engine.whenReady.then(() => {
                    l().render(u().createElement(we, null), document.getElementById('root'));
                });
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
                for (l = 0; l < e.length; l++) {
                    for (var [n, r, o] = e[l], s = !0, u = 0; u < n.length; u++)
                        (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](n[u]))
                            ? n.splice(u--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(l--, 1);
                        var d = r();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            o = o || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
            e[l] = [n, r, o];
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
        (i.j = 924),
        (() => {
            var e = { 924: 0 };
            i.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        o,
                        [a, s, u] = n,
                        d = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                        if (u) var l = u(i);
                    }
                    for (t && t(n); d < a.length; d++) (o = a[d]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return i.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var r = i.O(void 0, [549], () => i(254));
    r = i.O(r);
})();
