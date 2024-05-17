(() => {
    'use strict';
    var e,
        n = {
            1573: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => g, off: () => f, on: () => m, onResize: () => d, onScaleUpdated: () => v });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => w,
                        getSize: () => b,
                        graphicsQuality: () => h,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => E, getTextureUrl: () => y });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => B,
                        addPreloadTexture: () => j,
                        children: () => i,
                        displayStatus: () => _,
                        displayStatusIs: () => K,
                        events: () => x,
                        extraSize: () => X,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => M,
                        getDisplayStatus: () => J,
                        getScale: () => I,
                        getSize: () => N,
                        getViewGlobalPosition: () => V,
                        isEventHandled: () => W,
                        isFocused: () => q,
                        pxToRem: () => G,
                        remToPx: () => H,
                        resize: () => D,
                        sendEvent: () => A,
                        setAnimateWindow: () => $,
                        setEventHandled: () => U,
                        setInputPaddingsRem: () => z,
                        setSidePaddingsRem: () => L,
                        whenTutorialReady: () => Y,
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
                            : u(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${n}`,
                                        a = p[n]((e) => t([e, 'outside']));
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
                            e.enabled && u(!0);
                        },
                        disableOutside() {
                            e.enabled && u(!1);
                        },
                    });
                })();
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const h = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function y(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function E(e, n, t) {
                    return `url(${y(e, n, t)})`;
                }
                const _ = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    x = {
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
                    T = ['args'];
                const P = 2,
                    O = 16,
                    S = 32,
                    k = 64,
                    C = (e, n) => {
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
                                })(n, T);
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
                    A = {
                        close(e) {
                            C('popover' === e ? P : S);
                        },
                        minimize() {
                            C(k);
                        },
                        move(e) {
                            C(O, { isMouseEvent: !0, on: e });
                        },
                    };
                function j(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function z(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function M(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function B(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function N(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function D(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function V(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: H(n.x), y: H(n.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function I() {
                    return viewEnv.getScale();
                }
                function G(e) {
                    return viewEnv.pxToRem(e);
                }
                function H(e) {
                    return viewEnv.remToPx(e);
                }
                function $(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function U() {
                    return viewEnv.setEventHandled();
                }
                function W() {
                    return viewEnv.isEventHandled();
                }
                function Q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function J() {
                    return viewEnv.getShowingStatus();
                }
                const K = Object.keys(_).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === _[n]), e), {}),
                    X = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    Y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : x.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Z = { view: a, client: o };
                var ee = t(6179),
                    ne = t.n(ee);
                function te() {
                    const e = (0, ee.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ee.useEffect)(() => n, []),
                        (0, ee.useMemo)(
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
                const re = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    oe = ['children', 'className', 'theme'];
                function ie() {
                    return (
                        (ie =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ie.apply(this, arguments)
                    );
                }
                const ae = ne().forwardRef(function (e, n) {
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
                        })(e, oe);
                    const s = te(),
                        c = ne().useRef(null);
                    var u;
                    return (
                        (u = () => {
                            s.run(() => {
                                const e = c.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                Z.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                Z.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ee.useEffect)(u, []),
                        ne().createElement(
                            'div',
                            ie({}, a, {
                                className: l()(re.base, re[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (c.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            ne().createElement('div', { className: re.decorator }, t),
                        )
                    );
                });
                var se = t(493),
                    le = t.n(se);
                var ce = t(3403);
                function ue() {}
                function de() {
                    return !1;
                }
                console.log;
                var ve = t(9174);
                function me(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (!e) return;
                            if ('string' == typeof e) return fe(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return fe(e, n);
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
                function fe(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const pe = (e) => (0 === e ? window : window.subViews.get(e));
                const ge = ((e, n) => {
                        const t = (0, ee.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: a }) {
                                const s = (0, ee.useRef)([]),
                                    l = (t, r, o) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = pe,
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
                                                            l = Z.view.addModelObserver(s, n, !0);
                                                        return o.set(l, t), e && t(a(i)), l;
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
                                                        for (var e, t = me(o.keys()); !(e = t()).done; ) i(e.value, n);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            l =
                                                'real' === t
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === t ? (null == o ? void 0 : o.getter(e)) : l.readByPath(e),
                                            u = (e) => s.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, n) => {
                                                        const r = null != n ? n : c(e),
                                                            o = ve.LO.box(r, { equals: de });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, ve.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const r = null != n ? n : c(e),
                                                            o = ve.LO.box(r, { equals: de });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, ve.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const r = c(n);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, n) => ((e[n] = ve.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, ve.aD)((n) => {
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
                                                                    (e, [n, t]) => ((e[t] = ve.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, ve.aD)((e) => {
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
                                            controls: 'mocks' === t && o ? o.controls(v) : n(v),
                                            externalModel: l,
                                            mode: t,
                                        };
                                    },
                                    c = (0, ee.useRef)(!1),
                                    u = (0, ee.useState)(r),
                                    d = u[0],
                                    v = u[1],
                                    m = (0, ee.useState)(() => l(r, o, a)),
                                    f = m[0],
                                    p = m[1];
                                return (
                                    (0, ee.useEffect)(() => {
                                        c.current ? p(l(d, o, a)) : (c.current = !0);
                                    }, [a, d, o]),
                                    (0, ee.useEffect)(() => {
                                        v(r);
                                    }, [r]),
                                    (0, ee.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), s.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    ne().createElement(t.Provider, { value: f }, i)
                                );
                            },
                            () => (0, ee.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['isReceived']), { booksList: e.array('booksList') }),
                        ue,
                    ),
                    be = ge[0],
                    we = ge[1],
                    he = 'ConversionTooltipBook_base_cb',
                    ye = 'ConversionTooltipBook_icon_a6',
                    Ee = 'ConversionTooltipBook_labelsBlock_a9',
                    _e = 'ConversionTooltipBook_titleLabel_64',
                    xe = 'ConversionTooltipBook_bottomLabels_b0',
                    Te = 'ConversionTooltipBook_nationLabel_e2',
                    Pe = 'ConversionTooltipBook_valueLabel_90',
                    Re = ({ icon: e, title: n, nation: t, value: r, className: o }) =>
                        ne().createElement(
                            'div',
                            { className: l()(he, o) },
                            ne().createElement('div', {
                                className: ye,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.crewBooks.books.small.$dyn(e)})`,
                                },
                            }),
                            ne().createElement(
                                'div',
                                { className: Ee },
                                ne().createElement('div', { className: _e }, n),
                                ne().createElement(
                                    'div',
                                    { className: xe },
                                    ne().createElement('div', { className: Te }, t),
                                    ne().createElement('div', { className: Pe }, R.strings.common.multiplier()),
                                    ne().createElement('div', { className: Pe }, r),
                                ),
                            ),
                        ),
                    Oe = 'ConversionTooltipApp_base_ff',
                    Se = 'ConversionTooltipApp_base__wide_4c',
                    ke = 'ConversionTooltipApp_header_22',
                    Ce = 'ConversionTooltipApp_body_5a',
                    Ae = 'ConversionTooltipApp_books_32',
                    je = 'ConversionTooltipApp_bookWrapper_3f',
                    ze = 'ConversionTooltipApp_book_a9',
                    Me = 'ConversionTooltipApp_divider_61';
                function Be() {
                    return (
                        (Be =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Be.apply(this, arguments)
                    );
                }
                const Le = (0, ce.Pi)(() => {
                    const e = we().model,
                        n = e.isReceived.get(),
                        t = e.booksList.get(),
                        r = t.length > 6,
                        o = r ? Math.round(t.length / 2) : t.length,
                        i = n ? R.strings.tooltips.conversion.received : R.strings.tooltips.conversion.notReceived;
                    return ne().createElement(
                        'div',
                        { className: l()(Oe, r && Se) },
                        ne().createElement('div', { className: ke }, i.header()),
                        ne().createElement('div', { className: Ce }, i.body()),
                        ne().createElement(
                            'div',
                            { className: Ae },
                            ((a = t),
                            (s = (e, n) => {
                                const t = r && (n + 1) % 2 == 0,
                                    i = r ? Math.round((n + 1) / 2) === o : n + 1 === o;
                                return ne().createElement(
                                    'div',
                                    { key: n, className: je },
                                    ne().createElement(Re, Be({}, e, { className: ze })),
                                    !t && !i && ne().createElement('div', { className: Me }),
                                );
                            }),
                            Array.isArray(a) ? a.map(s) : a.map((e, n, t) => s(null == e ? void 0 : e.value, n, t))),
                        ),
                    );
                    var a, s;
                });
                engine.whenReady.then(() => {
                    le().render(
                        ne().createElement(ae, null, ne().createElement(be, null, ne().createElement(Le, null))),
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
        (r.j = 470),
        (() => {
            var e = { 470: 0 };
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
    var o = r.O(void 0, [56], () => r(1573));
    o = r.O(o);
})();
