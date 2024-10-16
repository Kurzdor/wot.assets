(() => {
    'use strict';
    var e,
        n = {
            6426: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => w, off: () => h, on: () => b, onResize: () => g, onScaleUpdated: () => p });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => T,
                        getSize: () => x,
                        graphicsQuality: () => S,
                        playSound: () => _,
                        setRTPC: () => E,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => N, getTextureUrl: () => C });
                var i = {};
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => K,
                        addPreloadTexture: () => V,
                        children: () => a,
                        displayStatus: () => A,
                        displayStatusIs: () => ie,
                        events: () => z,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => oe,
                        freezeTextureBeforeResize: () => J,
                        getBrowserTexturePath: () => G,
                        getDisplayStatus: () => ae,
                        getScale: () => X,
                        getSize: () => U,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => re,
                        isFocused: () => ne,
                        pxToRem: () => Y,
                        remToPx: () => Z,
                        resize: () => Q,
                        sendEvent: () => D,
                        setAnimateWindow: () => ee,
                        setEventHandled: () => te,
                        setInputPaddingsRem: () => B,
                        setSidePaddingsRem: () => q,
                        whenTutorialReady: () => ce,
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
                    b = (e, n) => engine.on(e, n),
                    h = (e, n) => engine.off(e, n),
                    y = { down: f('mousedown'), up: f('mouseup'), move: f('mousemove') };
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
                                    const a = `mouse${n}`,
                                        i = y[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        r(),
                                        () => {
                                            o &&
                                                (i(),
                                                window.removeEventListener(a, s),
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
                function _(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function E(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function T(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const S = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    P = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    k = Object.keys(P).reduce((e, n) => ((e[n] = () => _(P[n])), e), {}),
                    O = { play: Object.assign({}, k, { sound: _ }), setRTPC: E };
                function C(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function N(e, n, t) {
                    return `url(${C(e, n, t)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    z = {
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
                    j = ['args'];
                const H = 2,
                    M = 16,
                    F = 32,
                    I = 64,
                    L = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const o = n.args,
                                a = (function (e, n) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (n.indexOf(r) >= 0) continue;
                                            t[r] = e[r];
                                        }
                                    return t;
                                })(n, j);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    D = {
                        close(e) {
                            L('popover' === e ? H : F);
                        },
                        minimize() {
                            L(I);
                        },
                        move(e) {
                            L(M, { isMouseEvent: !0, on: e });
                        },
                    },
                    $ = 15;
                function V(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, $);
                }
                function G(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function K(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function q(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, $);
                }
                function U(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Q(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function W(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: Z(n.x), y: Z(n.y) };
                }
                function J() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function X() {
                    return viewEnv.getScale();
                }
                function Y(e) {
                    return viewEnv.pxToRem(e);
                }
                function Z(e) {
                    return viewEnv.remToPx(e);
                }
                function ee(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ne() {
                    return viewEnv.isFocused();
                }
                function te() {
                    return viewEnv.setEventHandled();
                }
                function re() {
                    return viewEnv.isEventHandled();
                }
                function oe() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ae() {
                    return viewEnv.getShowingStatus();
                }
                const ie = Object.keys(A).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === A[n]), e), {}),
                    se = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ce = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : z.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    le = { view: i, client: o, sound: O };
                const ue = (e) => {
                    (0, s.useEffect)(e, []);
                };
                function de() {
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
                function ve() {
                    return (
                        (ve = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        ve.apply(null, arguments)
                    );
                }
                const ge = c().forwardRef(function (e, n) {
                    let t = e.children,
                        r = e.className,
                        o = e.theme,
                        a = void 0 === o ? 'default' : o,
                        i = (function (e, n) {
                            if (null == e) return {};
                            var t = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (n.indexOf(r) >= 0) continue;
                                    t[r] = e[r];
                                }
                            return t;
                        })(e, fe);
                    const s = de(),
                        l = c().useRef(null);
                    return (
                        ue(() => {
                            s.run(() => {
                                const e = l.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                le.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                le.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        c().createElement(
                            'div',
                            ve({}, i, {
                                className: m()(me.base, me[`base__theme-${a}`], r),
                                ref: function (e) {
                                    (l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            c().createElement('div', { className: me.decorator }, t),
                        )
                    );
                });
                var pe = t(3403);
                let be, he;
                !(function (e) {
                    (e.Main = 'main'),
                        (e.Situational = 'situational'),
                        (e.Common = 'common'),
                        (e.CommanderSpecial = 'commanderSpecial');
                })(be || (be = {})),
                    (function (e) {
                        (e.None = 'none'), (e.Ordinary = 'ordinary'), (e.Extra = 'extra');
                    })(he || (he = {}));
                const ye = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let we;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(we || (we = {}));
                const _e = c().memo(function ({ iconName: e, size: n = we.c24x24, className: t }) {
                        var r;
                        const o = null == (r = R.images.gui.maps.icons.tankmen.skills.$dyn(n)) ? void 0 : r.$dyn(e);
                        return c().createElement('div', {
                            style: null !== o ? { backgroundImage: `url(${o})` } : void 0,
                            className: m()(ye.base, ye[`base__${n}`], t),
                        });
                    }),
                    Ee = 'Divided_base_06',
                    xe = 'Divided_divider_64',
                    Te = (0, s.memo)(({ children: e, classNames: n }) =>
                        c().createElement(
                            'div',
                            { className: Ee },
                            e,
                            c().createElement('div', { className: m()(xe, null == n ? void 0 : n.divider) }),
                        ),
                    ),
                    Se = 'default_asterisk_d6',
                    Pe = 'HeaderSection_base_f2',
                    ke = 'HeaderSection_image_2d',
                    Oe = 'HeaderSection_textContainer_7d',
                    Ce = 'HeaderSection_title_b8',
                    Re = 'HeaderSection_subtitle_a6',
                    Ne = (0, s.memo)(({ userName: e, iconName: n, skillType: t, withAsterisk: r = !1 }) =>
                        c().createElement(
                            Te,
                            null,
                            c().createElement(
                                'div',
                                { className: Pe },
                                n && c().createElement(_e, { iconName: n, className: ke, size: we.c52x52 }),
                                c().createElement(
                                    'div',
                                    { className: Oe },
                                    c().createElement('div', { className: Ce }, e),
                                    c().createElement(
                                        'div',
                                        { className: Re },
                                        R.strings.tooltips.perkType.name.$dyn(t),
                                        t === be.Situational && r && c().createElement('div', { className: Se }),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    Ae = 'ErrorBackground_base_33',
                    ze = () => c().createElement('div', { className: Ae });
                function je() {}
                function He() {
                    return !1;
                }
                console.log;
                var Me = t(9174);
                function Fe(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (e) {
                                if ('string' == typeof e) return Ie(e, n);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? Ie(e, n)
                                          : void 0
                                );
                            }
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
                function Ie(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const Le = (e) => (0 === e ? window : window.subViews.get(e));
                const De = ((e, n) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: a, mocks: i }) {
                                const l = (0, s.useRef)([]),
                                    u = (t, r, o) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = Le,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function a(e, n = 0) {
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
                                                const i = (e) => {
                                                    const o = t(n),
                                                        a = r.split('.').reduce((e, n) => e[n], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, n) => {
                                                              const t = e[n];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const s = 'string' == typeof a ? `${r}.${a}` : r,
                                                            c = le.view.addModelObserver(s, n, !0);
                                                        return o.set(c, t), e && t(i(a)), c;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, n) => {
                                                        const t = i(n);
                                                        return (...n) => {
                                                            t(e(...n));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const n = i(e);
                                                        return () => {
                                                            n();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = Fe(o.keys()); !(e = t()).done; ) a(e.value, n);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            s =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == o ? void 0 : o.getter)
                                                                  ? a
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
                                                            o = Me.LO.box(r, { equals: He });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Me.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const r = null != n ? n : c(e),
                                                            o = Me.LO.box(r, { equals: He });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Me.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const r = c(n);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, n) => ((e[n] = Me.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Me.aD)((n) => {
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
                                                                a = Object.entries(o),
                                                                i = a.reduce(
                                                                    (e, [n, t]) => ((e[t] = Me.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Me.aD)((e) => {
                                                                            a.forEach(([n, t]) => {
                                                                                i[t].set(e[n]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                i
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
                                    g = (0, s.useState)(() => u(r, o, i)),
                                    p = g[0],
                                    b = g[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? b(u(f, o, i)) : (d.current = !0);
                                    }, [i, f, o]),
                                    (0, s.useEffect)(() => {
                                        v(r);
                                    }, [r]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            p.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [p],
                                    ),
                                    c().createElement(t.Provider, { value: p }, a)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) =>
                            Object.assign(
                                {},
                                e.primitives([
                                    'userName',
                                    'iconName',
                                    'skillType',
                                    'description',
                                    'info',
                                    'animationName',
                                    'isDisabled',
                                    'isIrrelevant',
                                ]),
                            ),
                        je,
                    ),
                    $e = De[0],
                    Ve = De[1];
                const Be = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function Ge() {
                    return (
                        (Ge = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        Ge.apply(null, arguments)
                    );
                }
                const Ke = (0, s.forwardRef)(function (e, n) {
                        let t = e.src,
                            r = e.className,
                            o = e.autoplay,
                            a = void 0 !== o && o,
                            i = e.style,
                            l = e.loop,
                            u = void 0 !== l && l,
                            d = e.isPrebufferKeyframes,
                            m = e.keyframesNameConfig,
                            f = e.onClick,
                            v = (function (e, n) {
                                if (null == e) return {};
                                var t = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (n.indexOf(r) >= 0) continue;
                                        t[r] = e[r];
                                    }
                                return t;
                            })(e, Be);
                        const g = n,
                            p = (0, s.useRef)(null);
                        return (
                            ue(() =>
                                le.view.events.onDisplayChanged((e, n) => {
                                    var t, r;
                                    n === A.hidden && (null == (t = p.current) || t.pause());
                                    n === A.shown && (null == (r = p.current) || r.play());
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
                                            changeTimeLoop: je,
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
                                                        const a = p.current.cohGetKeyframeTimestamps();
                                                        a.forEach((n, t) => {
                                                            r > a[t] - 0.02 &&
                                                                r < a[t] &&
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
                                        a = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
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
                                            c(), i(0);
                                        },
                                        u = () => {
                                            var e, n;
                                            return null !=
                                                (e = null == (n = p.current) ? void 0 : n.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        f = (e) => {
                                            i(e), s();
                                        },
                                        v = (e) => {
                                            i(e), c();
                                        },
                                        b = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        h = (e, n) => {
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
                                        y = (e, n) => {
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
                                            on: h,
                                            off: y,
                                            play: s,
                                            pause: c,
                                            stop: l,
                                            cleanup: b,
                                            getCurrentTime: o,
                                            getDuration: a,
                                            getCachedKeyframes: u,
                                            goToAndPlay: f,
                                            goToAndStop: v,
                                            setCurrentTime: i,
                                            domRef: p.current,
                                            onChangeTime: t,
                                            onKeyframes: r,
                                        }),
                                        () => {
                                            b(), (g.current = null);
                                        }
                                    );
                                }
                            }, [m, g, d]),
                            (0, s.useEffect)(() => {
                                p.current && a && p.current.play();
                            }, [a, u]),
                            (0, s.useEffect)(() => {
                                if (p.current)
                                    return () => {
                                        p.current && p.current.pause();
                                    };
                            }, []),
                            c().createElement(
                                'video',
                                Ge({ src: t, className: r, style: i, loop: u, ref: p, onClick: f }, v),
                            )
                        );
                    }),
                    qe = (0, s.memo)(Ke),
                    Ue = 'AltContentSection_movie_a9',
                    Qe = 'AltContentSection_description_25',
                    We = 'AltContentSection_info_41',
                    Je = 'AltContentSection_infoIcon_9c',
                    Xe = 'AltContentSection_infoText_68',
                    Ye = (0, s.memo)(({ animationName: e, altText: n, infoText: t }) =>
                        c().createElement(
                            c().Fragment,
                            null,
                            e &&
                                c().createElement(qe, {
                                    src: R.videos.animations.advancedHints.$dyn(e),
                                    className: Ue,
                                    loop: !0,
                                    autoplay: !0,
                                }),
                            c().createElement(Te, null, c().createElement('div', { className: Qe }, n)),
                            c().createElement(
                                'div',
                                { className: We },
                                c().createElement('div', { className: Je }),
                                c().createElement('div', { className: Xe }, t),
                            ),
                        ),
                    ),
                    Ze = 'CrewPerksAdditionalApp_base_aa',
                    en = (0, pe.Pi)(function () {
                        const e = Ve().model;
                        return c().createElement(
                            ge,
                            null,
                            c().createElement(
                                'div',
                                { className: Ze },
                                e.isDisabled.get() && !e.isIrrelevant.get() && c().createElement(ze, null),
                                c().createElement(Ne, {
                                    userName: e.userName.get(),
                                    iconName: e.iconName.get(),
                                    skillType: e.skillType.get(),
                                    withAsterisk: !1,
                                }),
                                c().createElement(Ye, {
                                    altText: e.description.get(),
                                    infoText: e.info.get(),
                                    animationName: e.animationName.get(),
                                }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    u().render(
                        c().createElement($e, null, c().createElement(en, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        t = {};
    function r(e) {
        var o = t[e];
        if (void 0 !== o) return o.exports;
        var a = (t[e] = { exports: {} });
        return n[e](a, a.exports, r), a.exports;
    }
    (r.m = n),
        (e = []),
        (r.O = (n, t, o, a) => {
            if (!t) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [t, o, a] = e[u], s = !0, c = 0; c < t.length; c++)
                        (!1 & a || i >= a) && Object.keys(r.O).every((e) => r.O[e](t[c]))
                            ? t.splice(c--, 1)
                            : ((s = !1), a < i && (i = a));
                    if (s) {
                        e.splice(u--, 1);
                        var l = o();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            a = a || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
            e[u] = [t, o, a];
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
                        a,
                        [i, s, c] = t,
                        l = 0;
                    if (i.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (c) var u = c(r);
                    }
                    for (n && n(t); l < i.length; l++) (a = i[l]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return r.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var o = r.O(void 0, [9056], () => r(6426));
    o = r.O(o);
})();
