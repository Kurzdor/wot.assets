(() => {
    'use strict';
    var e,
        t = {
            3248: (e, t, n) => {
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => g, off: () => m, on: () => f, onResize: () => d, onScaleUpdated: () => v });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => h,
                        getSize: () => y,
                        graphicsQuality: () => E,
                        playSound: () => b,
                        setRTPC: () => w,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => S, getTextureUrl: () => P });
                var a = {};
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => L,
                        addPreloadTexture: () => C,
                        children: () => i,
                        displayStatus: () => O,
                        displayStatusIs: () => Y,
                        events: () => k,
                        extraSize: () => Z,
                        forceTriggerMouseMove: () => K,
                        freezeTextureBeforeResize: () => I,
                        getBrowserTexturePath: () => $,
                        getDisplayStatus: () => X,
                        getScale: () => H,
                        getSize: () => V,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => J,
                        isFocused: () => Q,
                        pxToRem: () => G,
                        remToPx: () => q,
                        resize: () => B,
                        sendEvent: () => z,
                        setAnimateWindow: () => U,
                        setEventHandled: () => W,
                        setInputPaddingsRem: () => M,
                        setSidePaddingsRem: () => N,
                        whenTutorialReady: () => ee,
                    });
                var s = n(6483),
                    l = n.n(s);
                function c(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = c('clientResized'),
                    v = c('self.onScaleUpdated'),
                    f = (e, t) => engine.on(e, t),
                    m = (e, t) => engine.off(e, t),
                    p = { down: c('mousedown'), up: c('mouseup'), move: c('mousemove') },
                    g = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && u(!1);
                        }
                        function n() {
                            e.enabled && u(!0);
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
                                : u(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const i = `mouse${t}`,
                                            a = p[t]((e) => n([e, 'outside']));
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
                                e.enabled && u(!0);
                            },
                            disableOutside() {
                                e.enabled && u(!1);
                            },
                        });
                    })();
                function b(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function w(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    _ = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    x = Object.keys(_).reduce((e, t) => ((e[t] = () => b(_[t])), e), {}),
                    T = { play: Object.assign({}, x, { sound: b }), setRTPC: w };
                function P(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function S(e, t, n) {
                    return `url(${P(e, t, n)})`;
                }
                const O = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    k = {
                        onTextureFrozen: c('self.onTextureFrozen'),
                        onTextureReady: c('self.onTextureReady'),
                        onDomBuilt: c('self.onDomBuilt'),
                        onLoaded: c('self.onLoaded'),
                        onDisplayChanged: c('self.onShowingStatusChanged'),
                        onFocusUpdated: c('self.onFocusChanged'),
                        children: {
                            onAdded: c('children.onAdded'),
                            onLoaded: c('children.onLoaded'),
                            onRemoved: c('children.onRemoved'),
                            onAttached: c('children.onAttached'),
                            onTextureReady: c('children.onTextureReady'),
                            onRequestPosition: c('children.requestPosition'),
                        },
                    },
                    A = ['args'],
                    D = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, A);
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
                    z = {
                        close(e) {
                            D('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            D(64);
                        },
                        move(e) {
                            D(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    j = 15;
                function C(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function M(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, j);
                }
                function $(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function L(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, j);
                }
                function V(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function B(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function F(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: q(t.x), y: q(t.y) };
                }
                function I() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function H() {
                    return viewEnv.getScale();
                }
                function G(e) {
                    return viewEnv.pxToRem(e);
                }
                function q(e) {
                    return viewEnv.remToPx(e);
                }
                function U(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Q() {
                    return viewEnv.isFocused();
                }
                function W() {
                    return viewEnv.setEventHandled();
                }
                function J() {
                    return viewEnv.isEventHandled();
                }
                function K() {
                    viewEnv.forceTriggerMouseMove();
                }
                function X() {
                    return viewEnv.getShowingStatus();
                }
                const Y = Object.keys(O).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === O[t]), e), {}),
                    Z = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ee = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : k.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    te = { view: a, client: o, sound: T };
                var ne = n(6179),
                    re = n.n(ne);
                const oe = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ie = ['children', 'className', 'theme'];
                function ae() {
                    return (
                        (ae = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        ae.apply(null, arguments)
                    );
                }
                const se = re().forwardRef(function (e, t) {
                    let n = e.children,
                        r = e.className,
                        o = e.theme,
                        i = void 0 === o ? 'default' : o,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, ie);
                    const s = (function () {
                            const e = (0, ne.useRef)(0);
                            var t;
                            return (
                                (t = () => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, ne.useEffect)(() => t, []),
                                (0, ne.useMemo)(
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
                        c = re().useRef(null);
                    var u;
                    return (
                        (u = () => {
                            s.run(() => {
                                const e = c.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                te.view.resize(t, n);
                                const r = window.getComputedStyle(e);
                                te.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ne.useEffect)(u, []),
                        re().createElement(
                            'div',
                            ae({}, a, {
                                className: l()(oe.base, oe[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (c.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                },
                            }),
                            re().createElement('div', { className: oe.decorator }, n),
                        )
                    );
                });
                var le = n(493),
                    ce = n.n(le),
                    ue = n(3403);
                function de() {
                    return !1;
                }
                console.log;
                var ve = n(9174);
                function fe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const me = (e) => (0 === e ? window : window.subViews.get(e)),
                    pe = ((e, t) => {
                        const n = (0, ne.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: i }) {
                                const a = (0, ne.useRef)([]),
                                    s = (e, n, r) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = me,
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
                                                            l = te.view.addModelObserver(s, t, !0);
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
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return fe(e, t);
                                                                                var n = {}.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? fe(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(o.keys());
                                                            !(e = n()).done;

                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            s =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (o = null == r ? void 0 : r.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            l = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : s.readByPath(t),
                                            c = (e) => a.current.push(e),
                                            u = (({ observableModel: e }) => ({ root: e.object() }))({
                                                mode: e,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const r = null != n ? n : l(t),
                                                            o = ve.LO.box(r, { equals: de });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ve.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const r = null != n ? n : l(t),
                                                            o = ve.LO.box(r, { equals: de });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ve.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const r = l(n);
                                                        if (Array.isArray(t)) {
                                                            const o = t.reduce(
                                                                (e, t) => ((e[t] = ve.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ve.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                o[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = t,
                                                                i = Object.entries(o),
                                                                a = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = ve.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ve.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                a[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            d = { mode: e, model: u, externalModel: s, cleanup: c };
                                        return {
                                            model: u,
                                            controls: 'mocks' === e && r ? r.controls(d) : t(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    l = (0, ne.useRef)(!1),
                                    c = (0, ne.useState)(e),
                                    u = c[0],
                                    d = c[1],
                                    v = (0, ne.useState)(() => s(e, r, i)),
                                    f = v[0],
                                    m = v[1];
                                return (
                                    (0, ne.useEffect)(() => {
                                        l.current ? m(s(u, r, i)) : (l.current = !0);
                                    }, [i, u, r]),
                                    (0, ne.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, ne.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), a.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    re().createElement(n.Provider, { value: f }, o)
                                );
                            },
                            () => (0, ne.useContext)(n),
                        ];
                    })(0, function () {}),
                    ge = pe[0],
                    be = pe[1],
                    we = {
                        base: 'DifficultyTooltipApp_base_08',
                        header: 'DifficultyTooltipApp_header_99',
                        subHeader: 'DifficultyTooltipApp_subHeader_a3',
                        container: 'DifficultyTooltipApp_container_1f',
                        smoke: 'DifficultyTooltipApp_smoke_20',
                        icon: 'DifficultyTooltipApp_icon_44',
                        description: 'DifficultyTooltipApp_description_4f',
                        dots: 'DifficultyTooltipApp_dots_a2',
                        dots__text: 'DifficultyTooltipApp_dots__text_b5',
                        state: 'DifficultyTooltipApp_state_cb',
                        state__locked: 'DifficultyTooltipApp_state__locked_a3',
                        state__selected: 'DifficultyTooltipApp_state__selected_90',
                        lock: 'DifficultyTooltipApp_lock_a8',
                        lockDescr: 'DifficultyTooltipApp_lockDescr_5a',
                    },
                    ye = R.strings.halloween_lobby.difficult.tooltip,
                    he = 'R.images.halloween.gui.maps.icons.difficulties',
                    Ee = (0, ue.Pi)(() => {
                        const e = be().model,
                            t = (() => {
                                const e = (0, ne.useState)(te.view.getScale()),
                                    t = e[0],
                                    n = e[1];
                                return (
                                    (0, ne.useEffect)(() => {
                                        const e = () => {
                                            n(te.view.getScale());
                                        };
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    t
                                );
                            })(),
                            n = e.root.get(),
                            r = n.level,
                            o = n.state,
                            i = n.isLocked,
                            a = `level${r}`,
                            s = 1 === t ? `${he}.icon_lock_small` : `${he}.icon_lock_big`;
                        return re().createElement(
                            'div',
                            { className: we.base },
                            re().createElement('div', { className: we.header }, ye.header.$dyn(a)),
                            re().createElement('div', { className: we.subHeader }, ye.subHeader.$dyn(a)),
                            re().createElement(
                                'div',
                                { className: we.container },
                                re().createElement('div', { className: we.smoke }),
                                re().createElement('div', {
                                    className: we.icon,
                                    style: { backgroundImage: `url('${he}.c_186x186.level_${r}')` },
                                }),
                                re().createElement('div', { className: we.dots }),
                            ),
                            re().createElement('div', { className: we.description }, ye.description.$dyn(a)),
                            re().createElement('div', { className: l()(we.dots, we.dots__text) }),
                            re().createElement(
                                'div',
                                { className: l()(we.state, i && we.state__locked, we[`state__${o}`]) },
                                i &&
                                    re().createElement('div', {
                                        className: we.lock,
                                        style: { backgroundImage: `url('${s}')` },
                                    }),
                                i ? ye.locked() : ye.state.$dyn(o),
                            ),
                            i &&
                                r > 1 &&
                                re().createElement('div', { className: we.lockDescr }, ye.lockedDescr.$dyn(a)),
                        );
                    });
                engine.whenReady.then(() => {
                    ce().render(
                        re().createElement(se, null, re().createElement(ge, null, re().createElement(Ee, null))),
                        document.getElementById('root'),
                    );
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
        (r.j = 74),
        (() => {
            var e = { 74: 0 };
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
    var o = r.O(void 0, [503], () => r(3248));
    o = r.O(o);
})();
