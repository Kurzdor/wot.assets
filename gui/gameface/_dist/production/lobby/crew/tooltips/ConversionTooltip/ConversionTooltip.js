(() => {
    'use strict';
    var e,
        n = {
            1590: (e, n, t) => {
                var o = {};
                t.r(o),
                    t.d(o, { mouse: () => g, off: () => f, on: () => m, onResize: () => d, onScaleUpdated: () => v });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => y,
                        getSize: () => h,
                        graphicsQuality: () => E,
                        playSound: () => b,
                        setRTPC: () => w,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => O, getTextureUrl: () => P });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => I,
                        addPreloadTexture: () => D,
                        children: () => i,
                        displayStatus: () => S,
                        displayStatusIs: () => te,
                        events: () => C,
                        extraSize: () => oe,
                        forceTriggerMouseMove: () => ee,
                        freezeTextureBeforeResize: () => U,
                        getBrowserTexturePath: () => F,
                        getDisplayStatus: () => ne,
                        getScale: () => W,
                        getSize: () => $,
                        getViewGlobalPosition: () => q,
                        isEventHandled: () => Z,
                        isFocused: () => X,
                        pxToRem: () => Q,
                        remToPx: () => J,
                        resize: () => H,
                        sendEvent: () => L,
                        setAnimateWindow: () => K,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => V,
                        setSidePaddingsRem: () => G,
                        whenTutorialReady: () => re,
                    });
                var s = t(6483),
                    l = t.n(s);
                function c(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = c('clientResized'),
                    v = c('self.onScaleUpdated'),
                    m = (e, n) => engine.on(e, n),
                    f = (e, n) => engine.off(e, n),
                    p = { down: c('mousedown'), up: c('mouseup'), move: c('mousemove') };
                const g = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && u(!1);
                    }
                    function t() {
                        e.enabled && u(!0);
                    }
                    function o() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', n),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', n),
                                  document.body.addEventListener('mouseleave', t))
                            : u(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${n}`,
                                        a = p[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        o(),
                                        () => {
                                            r &&
                                                (a(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                o(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), o();
                        },
                        enable() {
                            (e.enabled = !0), o();
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
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function w(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    _ = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    T = Object.keys(_).reduce((e, n) => ((e[n] = () => b(_[n])), e), {}),
                    x = { play: Object.assign({}, T, { sound: b }), setRTPC: w };
                function P(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function O(e, n, t) {
                    return `url(${P(e, n, t)})`;
                }
                const S = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    C = {
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
                    k = ['args'];
                const A = 2,
                    z = 16,
                    j = 32,
                    M = 64,
                    B = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const r = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var o in e)
                                        if ({}.hasOwnProperty.call(e, o)) {
                                            if (n.indexOf(o) >= 0) continue;
                                            t[o] = e[o];
                                        }
                                    return t;
                                })(n, k);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, n]) => {
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
                        var o;
                    },
                    L = {
                        close(e) {
                            B('popover' === e ? A : j);
                        },
                        minimize() {
                            B(M);
                        },
                        move(e) {
                            B(z, { isMouseEvent: !0, on: e });
                        },
                    },
                    N = 15;
                function D(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function V(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, N);
                }
                function F(e, n, t, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, o);
                }
                function I(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, N);
                }
                function $(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function H(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function q(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: J(n.x), y: J(n.y) };
                }
                function U() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function W() {
                    return viewEnv.getScale();
                }
                function Q(e) {
                    return viewEnv.pxToRem(e);
                }
                function J(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function X() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function Z() {
                    return viewEnv.isEventHandled();
                }
                function ee() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ne() {
                    return viewEnv.getShowingStatus();
                }
                const te = Object.keys(S).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === S[n]), e), {}),
                    oe = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    re = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : C.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ie = { view: a, client: r, sound: x };
                var ae = t(6179),
                    se = t.n(ae);
                function le() {
                    const e = (0, ae.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ae.useEffect)(() => n, []),
                        (0, ae.useMemo)(
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
                const ce = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ue = ['children', 'className', 'theme'];
                function de() {
                    return (
                        (de = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var o in t) ({}).hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                  }
                                  return e;
                              }),
                        de.apply(null, arguments)
                    );
                }
                const ve = se().forwardRef(function (e, n) {
                    let t = e.children,
                        o = e.className,
                        r = e.theme,
                        i = void 0 === r ? 'default' : r,
                        a = (function (e, n) {
                            if (null == e) return {};
                            var t = {};
                            for (var o in e)
                                if ({}.hasOwnProperty.call(e, o)) {
                                    if (n.indexOf(o) >= 0) continue;
                                    t[o] = e[o];
                                }
                            return t;
                        })(e, ue);
                    const s = le(),
                        c = se().useRef(null);
                    var u;
                    return (
                        (u = () => {
                            s.run(() => {
                                const e = c.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                ie.view.resize(n, t);
                                const o = window.getComputedStyle(e);
                                ie.view.setSidePaddingsRem({
                                    left: parseInt(o.getPropertyValue('padding-left'), 10),
                                    top: parseInt(o.getPropertyValue('padding-top'), 10),
                                    right: parseInt(o.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(o.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ae.useEffect)(u, []),
                        se().createElement(
                            'div',
                            de({}, a, {
                                className: l()(ce.base, ce[`base__theme-${i}`], o),
                                ref: function (e) {
                                    (c.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            se().createElement('div', { className: ce.decorator }, t),
                        )
                    );
                });
                var me = t(493),
                    fe = t.n(me);
                var pe = t(3403);
                function ge() {}
                function be() {
                    return !1;
                }
                console.log;
                var we = t(9174);
                function he(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (e) {
                                if ('string' == typeof e) return ye(e, n);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? ye(e, n)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (n && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var o = 0;
                        return function () {
                            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ye(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
                    return o;
                }
                const Ee = (e) => (0 === e ? window : window.subViews.get(e));
                const _e = ((e, n) => {
                        const t = (0, ae.createContext)({});
                        return [
                            function ({ mode: o = 'real', options: r, children: i, mocks: a }) {
                                const s = (0, ae.useRef)([]),
                                    l = (t, o, r) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = Ee,
                                                context: o = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function i(e, n = 0) {
                                                    viewEnv.removeDataChangedCallback(e, n)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, n, t) => {
                                                        t.forEach((n) => {
                                                            const t = r.get(n);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const r = t(n),
                                                        i = o.split('.').reduce((e, n) => e[n], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, n) => {
                                                              const t = e[n];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (t, i) => {
                                                        const s = 'string' == typeof i ? `${o}.${i}` : o,
                                                            l = ie.view.addModelObserver(s, n, !0);
                                                        return r.set(l, t), e && t(a(i)), l;
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
                                                        for (var e, t = he(r.keys()); !(e = t()).done; ) i(e.value, n);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(o),
                                            l =
                                                'real' === t
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == r ? void 0 : r.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : l.readByPath(e),
                                            u = (e) => s.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, n) => {
                                                        const o = null != n ? n : c(e),
                                                            r = we.LO.box(o, { equals: be });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, we.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const o = null != n ? n : c(e),
                                                            r = we.LO.box(o, { equals: be });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, we.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const o = c(n);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, n) => ((e[n] = we.LO.box(o[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, we.aD)((n) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(n[e]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                i = Object.entries(r),
                                                                a = i.reduce(
                                                                    (e, [n, t]) => ((e[t] = we.LO.box(o[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, we.aD)((e) => {
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
                                            v = { mode: t, model: d, externalModel: l, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && r ? r.controls(v) : n(v),
                                            externalModel: l,
                                            mode: t,
                                        };
                                    },
                                    c = (0, ae.useRef)(!1),
                                    u = (0, ae.useState)(o),
                                    d = u[0],
                                    v = u[1],
                                    m = (0, ae.useState)(() => l(o, r, a)),
                                    f = m[0],
                                    p = m[1];
                                return (
                                    (0, ae.useEffect)(() => {
                                        c.current ? p(l(d, r, a)) : (c.current = !0);
                                    }, [a, d, r]),
                                    (0, ae.useEffect)(() => {
                                        v(o);
                                    }, [o]),
                                    (0, ae.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), s.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    se().createElement(t.Provider, { value: f }, i)
                                );
                            },
                            () => (0, ae.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['title', 'description']), {
                                booksList: e.array('booksList'),
                            }),
                        ge,
                    ),
                    Te = _e[0],
                    xe = _e[1],
                    Pe = 'ConversionTooltipBook_base_cb',
                    Oe = 'ConversionTooltipBook_icon_a6',
                    Se = 'ConversionTooltipBook_labelsBlock_a9',
                    Re = 'ConversionTooltipBook_titleLabel_64',
                    Ce = 'ConversionTooltipBook_bottomLabels_b0',
                    ke = 'ConversionTooltipBook_nationLabel_e2',
                    Ae = 'ConversionTooltipBook_valueLabel_90',
                    ze = ({ icon: e, title: n, nation: t, value: o, className: r }) =>
                        se().createElement(
                            'div',
                            { className: l()(Pe, r) },
                            se().createElement('div', {
                                className: Oe,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.crewBooks.books.small.$dyn(e)})`,
                                },
                            }),
                            se().createElement(
                                'div',
                                { className: Se },
                                se().createElement('div', { className: Re }, n),
                                se().createElement(
                                    'div',
                                    { className: Ce },
                                    se().createElement('div', { className: ke }, t),
                                    se().createElement('div', { className: Ae }, R.strings.common.multiplier()),
                                    se().createElement('div', { className: Ae }, o),
                                ),
                            ),
                        ),
                    je = 'ConversionTooltipApp_base_ff',
                    Me = 'ConversionTooltipApp_base__wide_4c',
                    Be = 'ConversionTooltipApp_header_22',
                    Le = 'ConversionTooltipApp_body_5a',
                    Ne = 'ConversionTooltipApp_books_32',
                    De = 'ConversionTooltipApp_bookWrapper_3f',
                    Ve = 'ConversionTooltipApp_book_a9',
                    Fe = 'ConversionTooltipApp_divider_61';
                function Ie() {
                    return (
                        (Ie = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var o in t) ({}).hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                  }
                                  return e;
                              }),
                        Ie.apply(null, arguments)
                    );
                }
                const Ge = (0, pe.Pi)(() => {
                    const e = xe().model,
                        n = e.booksList.get(),
                        t = n.length > 6,
                        o = t ? Math.round(n.length / 2) : n.length;
                    return se().createElement(
                        'div',
                        { className: l()(je, t && Me) },
                        se().createElement('div', { className: Be }, e.title.get()),
                        se().createElement('div', { className: Le }, e.description.get()),
                        se().createElement(
                            'div',
                            { className: Ne },
                            ((r = n),
                            (i = (e, n) => {
                                const r = t && (n + 1) % 2 == 0,
                                    i = t ? Math.round((n + 1) / 2) === o : n + 1 === o;
                                return se().createElement(
                                    'div',
                                    { key: n, className: De },
                                    se().createElement(ze, Ie({}, e, { className: Ve })),
                                    !r && !i && se().createElement('div', { className: Fe }),
                                );
                            }),
                            Array.isArray(r) ? r.map(i) : r.map((e, n, t) => i(null == e ? void 0 : e.value, n, t))),
                        ),
                    );
                    var r, i;
                });
                engine.whenReady.then(() => {
                    fe().render(
                        se().createElement(ve, null, se().createElement(Te, null, se().createElement(Ge, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        t = {};
    function o(e) {
        var r = t[e];
        if (void 0 !== r) return r.exports;
        var i = (t[e] = { exports: {} });
        return n[e](i, i.exports, o), i.exports;
    }
    (o.m = n),
        (e = []),
        (o.O = (n, t, r, i) => {
            if (!t) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [t, r, i] = e[u], s = !0, l = 0; l < t.length; l++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var c = r();
                        void 0 !== c && (n = c);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [t, r, i];
        }),
        (o.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return o.d(n, { a: n }), n;
        }),
        (o.d = (e, n) => {
            for (var t in n) o.o(n, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (o.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (o.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (o.j = 3470),
        (() => {
            var e = { 3470: 0 };
            o.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        i,
                        [a, s, l] = t,
                        c = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (l) var u = l(o);
                    }
                    for (n && n(t); c < a.length; c++) (i = a[c]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return o.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var r = o.O(void 0, [9056], () => o(1590));
    r = o.O(r);
})();
