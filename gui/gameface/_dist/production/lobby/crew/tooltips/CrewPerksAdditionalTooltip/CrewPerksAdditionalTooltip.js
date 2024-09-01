(() => {
    'use strict';
    var e,
        n = {
            1439: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => w, off: () => y, on: () => h, onResize: () => g, onScaleUpdated: () => p });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => S,
                        getSize: () => x,
                        graphicsQuality: () => _,
                        playSound: () => E,
                        setRTPC: () => T,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => A, getTextureUrl: () => k });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => K,
                        addPreloadTexture: () => B,
                        children: () => i,
                        displayStatus: () => j,
                        displayStatusIs: () => ie,
                        events: () => N,
                        extraSize: () => ae,
                        forceTriggerMouseMove: () => re,
                        freezeTextureBeforeResize: () => W,
                        getBrowserTexturePath: () => G,
                        getDisplayStatus: () => oe,
                        getScale: () => J,
                        getSize: () => q,
                        getViewGlobalPosition: () => Q,
                        isEventHandled: () => te,
                        isFocused: () => ee,
                        pxToRem: () => X,
                        remToPx: () => Y,
                        resize: () => U,
                        sendEvent: () => V,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => ne,
                        setInputPaddingsRem: () => I,
                        setSidePaddingsRem: () => $,
                        whenTutorialReady: () => se,
                    });
                var s = t(6179),
                    c = t.n(s),
                    l = t(493),
                    u = t.n(l),
                    d = t(6483),
                    m = t.n(d);
                function f(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function v(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const g = f('clientResized'),
                    p = f('self.onScaleUpdated'),
                    h = (e, n) => engine.on(e, n),
                    y = (e, n) => engine.off(e, n),
                    b = { down: f('mousedown'), up: f('mouseup'), move: f('mousemove') };
                const w = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && v(!1);
                    }
                    function t() {
                        e.enabled && v(!0);
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
                            : v(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${n}`,
                                        a = b[n]((e) => t([e, 'outside']));
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
                            e.enabled && v(!0);
                        },
                        disableOutside() {
                            e.enabled && v(!1);
                        },
                    });
                })();
                function E(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function T(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const _ = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    P = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(P).reduce((e, n) => ((e[n] = () => E(P[n])), e), {}),
                    C = { play: Object.assign({}, O, { sound: E }), setRTPC: T };
                function k(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function A(e, n, t) {
                    return `url(${k(e, n, t)})`;
                }
                const j = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    N = {
                        onTextureFrozen: f('self.onTextureFrozen'),
                        onTextureReady: f('self.onTextureReady'),
                        onDomBuilt: f('self.onDomBuilt'),
                        onLoaded: f('self.onLoaded'),
                        onDisplayChanged: f('self.onShowingStatusChanged'),
                        onFocusUpdated: f('self.onFocusChanged'),
                        children: {
                            onAdded: f('children.onAdded'),
                            onLoaded: f('children.onLoaded'),
                            onRemoved: f('children.onRemoved'),
                            onAttached: f('children.onAttached'),
                            onTextureReady: f('children.onTextureReady'),
                            onRequestPosition: f('children.requestPosition'),
                        },
                    },
                    z = ['args'];
                const H = 2,
                    M = 16,
                    F = 32,
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
                                })(n, z);
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
                    V = {
                        close(e) {
                            D('popover' === e ? H : F);
                        },
                        minimize() {
                            D(L);
                        },
                        move(e) {
                            D(M, { isMouseEvent: !0, on: e });
                        },
                    };
                function B(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function G(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function K(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function q(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function U(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function Q(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: Y(n.x), y: Y(n.y) };
                }
                function W() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function J() {
                    return viewEnv.getScale();
                }
                function X(e) {
                    return viewEnv.pxToRem(e);
                }
                function Y(e) {
                    return viewEnv.remToPx(e);
                }
                function Z(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ee() {
                    return viewEnv.isFocused();
                }
                function ne() {
                    return viewEnv.setEventHandled();
                }
                function te() {
                    return viewEnv.isEventHandled();
                }
                function re() {
                    viewEnv.forceTriggerMouseMove();
                }
                function oe() {
                    return viewEnv.getShowingStatus();
                }
                const ie = Object.keys(j).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === j[n]), e), {}),
                    ae = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    se = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : N.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ce = { view: a, client: o, sound: C };
                const le = (e) => {
                    (0, s.useEffect)(e, []);
                };
                function ue() {
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
                const de = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    me = ['children', 'className', 'theme'];
                function fe() {
                    return (
                        (fe =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        fe.apply(this, arguments)
                    );
                }
                const ve = c().forwardRef(function (e, n) {
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
                        })(e, me);
                    const s = ue(),
                        l = c().useRef(null);
                    return (
                        le(() => {
                            s.run(() => {
                                const e = l.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                ce.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                ce.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        c().createElement(
                            'div',
                            fe({}, a, {
                                className: m()(de.base, de[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            c().createElement('div', { className: de.decorator }, t),
                        )
                    );
                });
                var ge = t(3403);
                let pe, he;
                !(function (e) {
                    (e.Main = 'main'),
                        (e.Situational = 'situational'),
                        (e.Common = 'common'),
                        (e.CommanderSpecial = 'commanderSpecial');
                })(pe || (pe = {})),
                    (function (e) {
                        (e.None = 'none'), (e.Ordinary = 'ordinary'), (e.Extra = 'extra');
                    })(he || (he = {}));
                const ye = 'Divided_base_06',
                    be = 'Divided_divider_64',
                    we = (0, s.memo)(({ children: e, classNames: n }) =>
                        c().createElement(
                            'div',
                            { className: ye },
                            e,
                            c().createElement('div', { className: m()(be, null == n ? void 0 : n.divider) }),
                        ),
                    ),
                    Ee = 'default_asterisk_d6',
                    Te = 'HeaderSection_base_f2',
                    xe = 'HeaderSection_image_2d',
                    Se = 'HeaderSection_textContainer_7d',
                    _e = 'HeaderSection_title_b8',
                    Pe = 'HeaderSection_subtitle_a6',
                    Oe = (0, s.memo)(({ title: e, icon: n, skillType: t, withAsterisk: r = !1 }) =>
                        c().createElement(
                            we,
                            null,
                            c().createElement(
                                'div',
                                { className: Te },
                                n &&
                                    c().createElement('div', {
                                        className: xe,
                                        style: { backgroundImage: `url(${n})` },
                                    }),
                                c().createElement(
                                    'div',
                                    { className: Se },
                                    c().createElement('div', { className: _e }, e),
                                    c().createElement(
                                        'div',
                                        { className: Pe },
                                        R.strings.tooltips.perkType.name.$dyn(t),
                                        t === pe.Situational && r && c().createElement('div', { className: Ee }),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    Ce = 'ErrorBackground_base_33',
                    Re = () => c().createElement('div', { className: Ce });
                function ke() {}
                function Ae() {
                    return !1;
                }
                console.log;
                var je = t(9174);
                function Ne(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (!e) return;
                            if ('string' == typeof e) return ze(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ze(e, n);
                        })(e)) ||
                        (n && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ze(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const He = (e) => (0 === e ? window : window.subViews.get(e));
                const Me = ((e, n) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: a }) {
                                const l = (0, s.useRef)([]),
                                    u = (t, r, o) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = He,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function i(e, n = 0) {
                                                    viewEnv.removeDataChangedCallback(e, n)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, n, t) => {
                                                        t.forEach((n) => {
                                                            const t = o.get(n);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const o = t(n),
                                                        i = r.split('.').reduce((e, n) => e[n], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, n) => {
                                                              const t = e[n];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (t, i) => {
                                                        const s = 'string' == typeof i ? `${r}.${i}` : r,
                                                            c = ce.view.addModelObserver(s, n, !0);
                                                        return o.set(c, t), e && t(a(i)), c;
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, n) => {
                                                        const t = a(n);
                                                        return (...n) => {
                                                            t(e(...n));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const n = a(e);
                                                        return () => {
                                                            n();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = Ne(o.keys()); !(e = t()).done; ) i(e.value, n);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            s =
                                                'real' === t
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === t ? (null == o ? void 0 : o.getter(e)) : s.readByPath(e),
                                            u = (e) => l.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, n) => {
                                                        const r = null != n ? n : c(e),
                                                            o = je.LO.box(r, { equals: Ae });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, je.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const r = null != n ? n : c(e),
                                                            o = je.LO.box(r, { equals: Ae });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, je.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const r = c(n);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, n) => ((e[n] = je.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, je.aD)((n) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(n[e]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                i = Object.entries(o),
                                                                a = i.reduce(
                                                                    (e, [n, t]) => ((e[t] = je.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, je.aD)((e) => {
                                                                            i.forEach(([n, t]) => {
                                                                                a[t].set(e[n]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            m = { mode: t, model: d, externalModel: s, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && o ? o.controls(m) : n(m),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    d = (0, s.useRef)(!1),
                                    m = (0, s.useState)(r),
                                    f = m[0],
                                    v = m[1],
                                    g = (0, s.useState)(() => u(r, o, a)),
                                    p = g[0],
                                    h = g[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? h(u(f, o, a)) : (d.current = !0);
                                    }, [a, f, o]),
                                    (0, s.useEffect)(() => {
                                        v(r);
                                    }, [r]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            p.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [p],
                                    ),
                                    c().createElement(t.Provider, { value: p }, i)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) =>
                            Object.assign(
                                {},
                                e.primitives([
                                    'title',
                                    'icon',
                                    'skillType',
                                    'description',
                                    'info',
                                    'animationName',
                                    'isDisabled',
                                    'isIrrelevant',
                                ]),
                            ),
                        ke,
                    ),
                    Fe = Me[0],
                    Le = Me[1];
                const De = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const Be = (0, s.forwardRef)(function (e, n) {
                        let t = e.src,
                            r = e.className,
                            o = e.autoplay,
                            i = void 0 !== o && o,
                            a = e.style,
                            l = e.loop,
                            u = void 0 !== l && l,
                            d = e.isPrebufferKeyframes,
                            m = e.keyframesNameConfig,
                            f = e.onClick,
                            v = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                                return o;
                            })(e, De);
                        const g = n,
                            p = (0, s.useRef)(null);
                        return (
                            le(() =>
                                ce.view.events.onDisplayChanged((e, n) => {
                                    var t, r;
                                    n === j.hidden && (null == (t = p.current) || t.pause());
                                    n === j.shown && (null == (r = p.current) || r.play());
                                }),
                            ),
                            (0, s.useEffect)(
                                () =>
                                    ((e) => {
                                        let n,
                                            t = null;
                                        return (
                                            (t = requestAnimationFrame(() => {
                                                t = requestAnimationFrame(() => {
                                                    (t = null), (n = e());
                                                });
                                            })),
                                            () => {
                                                'function' == typeof n && n(), null !== t && cancelAnimationFrame(t);
                                            }
                                        );
                                    })(() => {
                                        const e = p.current;
                                        if (!g || !e || !d)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const n = e.cohGetKeyframeTimestamps();
                                        n.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              n.map((n) => {
                                                  null == e || e.cohPrebufferKeyframe(n);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [d, g],
                            ),
                            (0, s.useEffect)(() => {
                                if (g && p.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: ke,
                                        },
                                        n = () => {
                                            let n = 0;
                                            const t = (function (e) {
                                                    let n = 0;
                                                    return [
                                                        function t() {
                                                            e(), (n = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (p.current) {
                                                        const t = p.current,
                                                            r = t.currentTime,
                                                            o = t.duration;
                                                        if (
                                                            (n !== r &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: r, duration: o }),
                                                                ),
                                                                (n = r)),
                                                            p.current.paused || !g || !d)
                                                        )
                                                            return;
                                                        const i = p.current.cohGetKeyframeTimestamps();
                                                        i.forEach((n, t) => {
                                                            r > i[t] - 0.02 &&
                                                                r < i[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const r = Object.keys(null != m ? m : {})[t];
                                                                    return e({
                                                                        time: n,
                                                                        name: `${m ? r : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                r = t[0],
                                                o = t[1];
                                            return r(), o;
                                        };
                                    e.changeTimeLoop = n();
                                    const t = (n) => (
                                            e.changeTimeHandlers.push(n),
                                            () => {
                                                const t = e.changeTimeHandlers,
                                                    r = t.indexOf(n);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(r, 1);
                                            }
                                        ),
                                        r = (n) => (
                                            e.changeKeyframeHandlers.push(n),
                                            () => {
                                                const t = e.changeKeyframeHandlers,
                                                    r = t.indexOf(n);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(r, 1);
                                            }
                                        ),
                                        o = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.currentTime;
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.duration;
                                        },
                                        a = (e) => {
                                            var n, t, r;
                                            p.current &&
                                                (p.current.currentTime =
                                                    ((n = 0),
                                                    (t = p.current.duration),
                                                    (r = e) < n ? n : r > t ? t : r));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.play();
                                        },
                                        c = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            c(), a(0);
                                        },
                                        u = () => {
                                            var e, n;
                                            return null !=
                                                (e = null == (n = p.current) ? void 0 : n.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        f = (e) => {
                                            a(e), s();
                                        },
                                        v = (e) => {
                                            a(e), c();
                                        },
                                        h = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        y = (e, n) => {
                                            var t;
                                            return (
                                                null == (t = p.current) || t.addEventListener(e, n),
                                                () => {
                                                    var t;
                                                    return null == (t = p.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, n);
                                                }
                                            );
                                        },
                                        b = (e, n) => {
                                            var t;
                                            return (
                                                null == (t = p.current) || t.removeEventListener(e, n),
                                                () => {
                                                    var t;
                                                    return null == (t = p.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, n);
                                                }
                                            );
                                        };
                                    return (
                                        (g.current = {
                                            on: y,
                                            off: b,
                                            play: s,
                                            pause: c,
                                            stop: l,
                                            cleanup: h,
                                            getCurrentTime: o,
                                            getDuration: i,
                                            getCachedKeyframes: u,
                                            goToAndPlay: f,
                                            goToAndStop: v,
                                            setCurrentTime: a,
                                            domRef: p.current,
                                            onChangeTime: t,
                                            onKeyframes: r,
                                        }),
                                        () => {
                                            h(), (g.current = null);
                                        }
                                    );
                                }
                            }, [m, g, d]),
                            (0, s.useEffect)(() => {
                                p.current && i && p.current.play();
                            }, [i, u]),
                            (0, s.useEffect)(() => {
                                if (p.current)
                                    return () => {
                                        p.current && p.current.pause();
                                    };
                            }, []),
                            c().createElement(
                                'video',
                                Ve({ src: t, className: r, style: a, loop: u, ref: p, onClick: f }, v),
                            )
                        );
                    }),
                    Ie = (0, s.memo)(Be),
                    Ge = 'AltContentSection_movie_a9',
                    Ke = 'AltContentSection_description_25',
                    $e = 'AltContentSection_info_41',
                    qe = 'AltContentSection_infoIcon_9c',
                    Ue = 'AltContentSection_infoText_68',
                    Qe = (0, s.memo)(({ animationName: e, altText: n, infoText: t }) =>
                        c().createElement(
                            c().Fragment,
                            null,
                            e &&
                                c().createElement(Ie, {
                                    src: R.videos.animations.advancedHints.$dyn(e),
                                    className: Ge,
                                    loop: !0,
                                    autoplay: !0,
                                }),
                            c().createElement(we, null, c().createElement('div', { className: Ke }, n)),
                            c().createElement(
                                'div',
                                { className: $e },
                                c().createElement('div', { className: qe }),
                                c().createElement('div', { className: Ue }, t),
                            ),
                        ),
                    ),
                    We = 'CrewPerksAdditionalApp_base_aa',
                    Je = (0, ge.Pi)(function () {
                        const e = Le().model;
                        return c().createElement(
                            ve,
                            null,
                            c().createElement(
                                'div',
                                { className: We },
                                e.isDisabled.get() && !e.isIrrelevant.get() && c().createElement(Re, null),
                                c().createElement(Oe, {
                                    title: e.title.get(),
                                    icon: e.icon.get(),
                                    skillType: e.skillType.get(),
                                    withAsterisk: !1,
                                }),
                                c().createElement(Qe, {
                                    altText: e.description.get(),
                                    infoText: e.info.get(),
                                    animationName: e.animationName.get(),
                                }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    u().render(
                        c().createElement(Fe, null, c().createElement(Je, null)),
                        document.getElementById('root'),
                    );
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
                    for (var [t, o, i] = e[u], s = !0, c = 0; c < t.length; c++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[c]))
                            ? t.splice(c--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var l = o();
                        void 0 !== l && (n = l);
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
        (r.j = 2193),
        (() => {
            var e = { 2193: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var o,
                        i,
                        [a, s, c] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (c) var u = c(r);
                    }
                    for (n && n(t); l < a.length; l++) (i = a[l]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var o = r.O(void 0, [9056], () => r(1439));
    o = r.O(o);
})();
