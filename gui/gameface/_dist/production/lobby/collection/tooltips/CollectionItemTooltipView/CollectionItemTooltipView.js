(() => {
    'use strict';
    var e,
        t = {
            645: (e, t, n) => {
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => y, off: () => w, on: () => p, onResize: () => g, onScaleUpdated: () => b });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => P,
                        getSize: () => x,
                        graphicsQuality: () => S,
                        playSound: () => E,
                        setRTPC: () => _,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => z, getTextureUrl: () => j });
                var a = {};
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => H,
                        addPreloadTexture: () => I,
                        children: () => i,
                        displayStatus: () => M,
                        displayStatusIs: () => ie,
                        events: () => A,
                        extraSize: () => ae,
                        forceTriggerMouseMove: () => re,
                        freezeTextureBeforeResize: () => J,
                        getBrowserTexturePath: () => $,
                        getDisplayStatus: () => oe,
                        getScale: () => K,
                        getSize: () => U,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => ne,
                        isFocused: () => ee,
                        pxToRem: () => X,
                        remToPx: () => Y,
                        resize: () => Q,
                        sendEvent: () => L,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => te,
                        setInputPaddingsRem: () => G,
                        setSidePaddingsRem: () => q,
                        whenTutorialReady: () => se,
                    });
                var s = n(179),
                    l = n.n(s),
                    c = n(986),
                    u = n.n(c),
                    d = n(483),
                    v = n.n(d);
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
                const g = m('clientResized'),
                    b = m('self.onScaleUpdated'),
                    p = (e, t) => engine.on(e, t),
                    w = (e, t) => engine.off(e, t),
                    h = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') };
                const y = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && f(!1);
                    }
                    function n() {
                        e.enabled && f(!0);
                    }
                    function r() {
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
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${t}`,
                                        a = h[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
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
                            })(n)),
                            t
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
                            e.enabled && f(!0);
                        },
                        disableOutside() {
                            e.enabled && f(!1);
                        },
                    });
                })();
                function E(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function _(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const S = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    T = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(T).reduce((e, t) => ((e[t] = () => E(T[t])), e), {}),
                    C = { play: Object.assign({}, O, { sound: E }), setRTPC: _ };
                function j(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function z(e, t, n) {
                    return `url(${j(e, t, n)})`;
                }
                const M = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    A = {
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
                    k = ['args'];
                const D = 2,
                    N = 16,
                    V = 32,
                    B = 64,
                    F = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, k);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    L = {
                        close(e) {
                            F('popover' === e ? D : V);
                        },
                        minimize() {
                            F(B);
                        },
                        move(e) {
                            F(N, { isMouseEvent: !0, on: e });
                        },
                    };
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function $(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function H(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function q(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function U(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Q(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function W(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Y(t.x), y: Y(t.y) };
                }
                function J() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function K() {
                    return viewEnv.getScale();
                }
                function X(e) {
                    return viewEnv.pxToRem(e);
                }
                function Y(e) {
                    return viewEnv.remToPx(e);
                }
                function Z(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function ee() {
                    return viewEnv.isFocused();
                }
                function te() {
                    return viewEnv.setEventHandled();
                }
                function ne() {
                    return viewEnv.isEventHandled();
                }
                function re() {
                    viewEnv.forceTriggerMouseMove();
                }
                function oe() {
                    return viewEnv.getShowingStatus();
                }
                const ie = Object.keys(M).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === M[t]), e), {}),
                    ae = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    se = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : A.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    le = { view: a, client: o, sound: C };
                function ce() {
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
                const ue = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    de = ['children', 'className', 'theme'];
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                const me = l().forwardRef(function (e, t) {
                    let n = e.children,
                        r = e.className,
                        o = e.theme,
                        i = void 0 === o ? 'default' : o,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o;
                        })(e, de);
                    const c = ce(),
                        u = l().useRef(null);
                    var d;
                    return (
                        (d = () => {
                            c.run(() => {
                                const e = u.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                le.view.resize(t, n);
                                const r = window.getComputedStyle(e);
                                le.view.setSidePaddingsRem({
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
                            ve({}, a, {
                                className: v()(ue.base, ue[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (u.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                },
                            }),
                            l().createElement('div', { className: ue.decorator }, n),
                        )
                    );
                });
                function fe() {
                    return !1;
                }
                console.log;
                var ge = n(174);
                function be(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return pe(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return pe(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function pe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const we = (e) => (0 === e ? window : window.subViews.get(e));
                const he = ((e, t) => {
                        const n = (0, s.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: a }) {
                                const c = (0, s.useRef)([]),
                                    u = (n, r, o) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = we,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = o.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const o = n(t),
                                                        i = r.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const s = 'string' == typeof i ? `${r}.${i}` : r,
                                                            l = le.view.addModelObserver(s, t, !0);
                                                        return o.set(l, n), e && n(a(i)), l;
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, t) => {
                                                        const n = a(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = a(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = be(o.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            s =
                                                'real' === n
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === n ? (null == o ? void 0 : o.getter(e)) : s.readByPath(e),
                                            u = (e) => c.current.push(e),
                                            d = e({
                                                mode: n,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : l(e),
                                                            o = ge.LO.box(r, { equals: fe });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, ge.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : l(e),
                                                            o = ge.LO.box(r, { equals: fe });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, ge.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = l(t);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, t) => ((e[t] = ge.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, ge.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                i = Object.entries(o),
                                                                a = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = ge.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, ge.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                a[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            v = { mode: n, model: d, externalModel: s, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === n && o ? o.controls(v) : t(v),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    d = (0, s.useRef)(!1),
                                    v = (0, s.useState)(r),
                                    m = v[0],
                                    f = v[1],
                                    g = (0, s.useState)(() => u(r, o, a)),
                                    b = g[0],
                                    p = g[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? p(u(m, o, a)) : (d.current = !0);
                                    }, [a, m, o]),
                                    (0, s.useEffect)(() => {
                                        f(r);
                                    }, [r]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            b.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [b],
                                    ),
                                    l().createElement(n.Provider, { value: b }, i)
                                );
                            },
                            () => (0, s.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => ({ root: e.object() }),
                        () => ({}),
                    ),
                    ye = he[0],
                    Ee = he[1];
                var _e = n(515);
                const xe = 'Content_base_d9',
                    Pe = 'Content_image_65',
                    Se = 'Content_base__unreceived_ef',
                    Re = 'Content_base__shop_be',
                    Te = 'Content_titleBase_aa',
                    Oe = 'Content_title_69',
                    Ce = 'Content_itemName_a1',
                    je = 'Content_separator_ea',
                    ze = 'Content_separator__hidden_7f',
                    Me = 'Content_status_16',
                    Ae = 'Content_statusImage_4a',
                    ke = 'Content_statusTitle_50',
                    De = 'Content_description_00',
                    Ne = R.strings.collections.tooltips,
                    Ve = (0, _e.Pi)(() => {
                        const e = Ee().model.root.get(),
                            t = e.name,
                            n = e.description,
                            r = e.imagePath,
                            o = e.isDetailed,
                            i = e.isReceived;
                        return l().createElement(
                            'div',
                            { className: v()(xe, !i && Se, !o && Re) },
                            l().createElement('div', { className: Pe, style: { backgroundImage: `url(${r})` } }),
                            l().createElement('div', { className: v()(je, ze) }),
                            l().createElement(
                                'div',
                                { className: Te },
                                l().createElement('div', { className: Oe }, Ne.title()),
                                l().createElement('div', { className: Ce }, t),
                            ),
                            o &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: je }),
                                    l().createElement(
                                        'div',
                                        { className: Me },
                                        l().createElement('div', { className: Ae }),
                                        l().createElement(
                                            'div',
                                            { className: ke },
                                            i ? Ne.receivedStatus() : Ne.unreceivedStatus(),
                                        ),
                                    ),
                                    l().createElement('div', { className: De }, n),
                                ),
                        );
                    }),
                    Be = () => l().createElement(ye, null, l().createElement(me, null, l().createElement(Ve, null)));
                engine.whenReady.then(() => {
                    u().render(l().createElement(Be, null), document.getElementById('root'));
                });
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = (n[e] = { exports: {} });
        return t[e](i, i.exports, r), i.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, n, o, i) => {
            if (!n) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, o, i] = e[u], s = !0, l = 0; l < n.length; l++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var c = o();
                        void 0 !== c && (t = c);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, o, i];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, { a: t }), t;
        }),
        (r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.j = 815),
        (() => {
            var e = { 815: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        i,
                        [a, s, l] = n,
                        c = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var u = l(r);
                    }
                    for (t && t(n); c < a.length; c++) (i = a[c]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [314], () => r(645));
    o = r.O(o);
})();
