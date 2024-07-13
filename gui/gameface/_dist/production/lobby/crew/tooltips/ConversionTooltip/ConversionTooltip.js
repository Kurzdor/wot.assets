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
                        getSize: () => w,
                        graphicsQuality: () => E,
                        playSound: () => b,
                        setRTPC: () => h,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => O, getTextureUrl: () => P });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => F,
                        addPreloadTexture: () => N,
                        children: () => i,
                        displayStatus: () => S,
                        displayStatusIs: () => ne,
                        events: () => C,
                        extraSize: () => te,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => q,
                        getBrowserTexturePath: () => V,
                        getDisplayStatus: () => ee,
                        getScale: () => U,
                        getSize: () => G,
                        getViewGlobalPosition: () => H,
                        isEventHandled: () => Y,
                        isFocused: () => K,
                        pxToRem: () => W,
                        remToPx: () => Q,
                        resize: () => $,
                        sendEvent: () => L,
                        setAnimateWindow: () => J,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => oe,
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
                function h(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function w(e = 'px') {
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
                    x = { play: Object.assign({}, T, { sound: b }), setRTPC: h };
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
                    j = 16,
                    z = 32,
                    M = 64,
                    B = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const r = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
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
                            B('popover' === e ? A : z);
                        },
                        minimize() {
                            B(M);
                        },
                        move(e) {
                            B(j, { isMouseEvent: !0, on: e });
                        },
                    };
                function N(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function V(e, n, t, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, o);
                }
                function F(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function G(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function $(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function H(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: Q(n.x), y: Q(n.y) };
                }
                function q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function U() {
                    return viewEnv.getScale();
                }
                function W(e) {
                    return viewEnv.pxToRem(e);
                }
                function Q(e) {
                    return viewEnv.remToPx(e);
                }
                function J(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function K() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ee() {
                    return viewEnv.getShowingStatus();
                }
                const ne = Object.keys(S).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === S[n]), e), {}),
                    te = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    oe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : C.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    re = { view: a, client: r, sound: x };
                var ie = t(6179),
                    ae = t.n(ie);
                function se() {
                    const e = (0, ie.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ie.useEffect)(() => n, []),
                        (0, ie.useMemo)(
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
                const le = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ce = ['children', 'className', 'theme'];
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                const de = ae().forwardRef(function (e, n) {
                    let t = e.children,
                        o = e.className,
                        r = e.theme,
                        i = void 0 === r ? 'default' : r,
                        a = (function (e, n) {
                            if (null == e) return {};
                            var t,
                                o,
                                r = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, ce);
                    const s = se(),
                        c = ae().useRef(null);
                    var u;
                    return (
                        (u = () => {
                            s.run(() => {
                                const e = c.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                re.view.resize(n, t);
                                const o = window.getComputedStyle(e);
                                re.view.setSidePaddingsRem({
                                    left: parseInt(o.getPropertyValue('padding-left'), 10),
                                    top: parseInt(o.getPropertyValue('padding-top'), 10),
                                    right: parseInt(o.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(o.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ie.useEffect)(u, []),
                        ae().createElement(
                            'div',
                            ue({}, a, {
                                className: l()(le.base, le[`base__theme-${i}`], o),
                                ref: function (e) {
                                    (c.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            ae().createElement('div', { className: le.decorator }, t),
                        )
                    );
                });
                var ve = t(493),
                    me = t.n(ve);
                var fe = t(3403);
                function pe() {}
                function ge() {
                    return !1;
                }
                console.log;
                var be = t(9174);
                function he(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (!e) return;
                            if ('string' == typeof e) return we(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return we(e, n);
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
                function we(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
                    return o;
                }
                const ye = (e) => (0 === e ? window : window.subViews.get(e));
                const Ee = ((e, n) => {
                        const t = (0, ie.createContext)({});
                        return [
                            function ({ mode: o = 'real', options: r, children: i, mocks: a }) {
                                const s = (0, ie.useRef)([]),
                                    l = (t, o, r) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = ye,
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
                                                            l = re.view.addModelObserver(s, n, !0);
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
                                                            r = be.LO.box(o, { equals: ge });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, be.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const o = null != n ? n : c(e),
                                                            r = be.LO.box(o, { equals: ge });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, be.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const o = c(n);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, n) => ((e[n] = be.LO.box(o[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, be.aD)((n) => {
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
                                                                    (e, [n, t]) => ((e[t] = be.LO.box(o[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, be.aD)((e) => {
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
                                    c = (0, ie.useRef)(!1),
                                    u = (0, ie.useState)(o),
                                    d = u[0],
                                    v = u[1],
                                    m = (0, ie.useState)(() => l(o, r, a)),
                                    f = m[0],
                                    p = m[1];
                                return (
                                    (0, ie.useEffect)(() => {
                                        c.current ? p(l(d, r, a)) : (c.current = !0);
                                    }, [a, d, r]),
                                    (0, ie.useEffect)(() => {
                                        v(o);
                                    }, [o]),
                                    (0, ie.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), s.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    ae().createElement(t.Provider, { value: f }, i)
                                );
                            },
                            () => (0, ie.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['isReceived']), { booksList: e.array('booksList') }),
                        pe,
                    ),
                    _e = Ee[0],
                    Te = Ee[1],
                    xe = 'ConversionTooltipBook_base_cb',
                    Pe = 'ConversionTooltipBook_icon_a6',
                    Re = 'ConversionTooltipBook_labelsBlock_a9',
                    Oe = 'ConversionTooltipBook_titleLabel_64',
                    Se = 'ConversionTooltipBook_bottomLabels_b0',
                    Ce = 'ConversionTooltipBook_nationLabel_e2',
                    ke = 'ConversionTooltipBook_valueLabel_90',
                    Ae = ({ icon: e, title: n, nation: t, value: o, className: r }) =>
                        ae().createElement(
                            'div',
                            { className: l()(xe, r) },
                            ae().createElement('div', {
                                className: Pe,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.crewBooks.books.small.$dyn(e)})`,
                                },
                            }),
                            ae().createElement(
                                'div',
                                { className: Re },
                                ae().createElement('div', { className: Oe }, n),
                                ae().createElement(
                                    'div',
                                    { className: Se },
                                    ae().createElement('div', { className: Ce }, t),
                                    ae().createElement('div', { className: ke }, R.strings.common.multiplier()),
                                    ae().createElement('div', { className: ke }, o),
                                ),
                            ),
                        ),
                    je = 'ConversionTooltipApp_base_ff',
                    ze = 'ConversionTooltipApp_base__wide_4c',
                    Me = 'ConversionTooltipApp_header_22',
                    Be = 'ConversionTooltipApp_body_5a',
                    Le = 'ConversionTooltipApp_books_32',
                    Ne = 'ConversionTooltipApp_bookWrapper_3f',
                    De = 'ConversionTooltipApp_book_a9',
                    Ve = 'ConversionTooltipApp_divider_61';
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                }
                                return e;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const Ie = (0, fe.Pi)(() => {
                    const e = Te().model,
                        n = e.isReceived.get(),
                        t = e.booksList.get(),
                        o = t.length > 6,
                        r = o ? Math.round(t.length / 2) : t.length,
                        i = n ? R.strings.tooltips.conversion.received : R.strings.tooltips.conversion.notReceived;
                    return ae().createElement(
                        'div',
                        { className: l()(je, o && ze) },
                        ae().createElement('div', { className: Me }, i.header()),
                        ae().createElement('div', { className: Be }, i.body()),
                        ae().createElement(
                            'div',
                            { className: Le },
                            ((a = t),
                            (s = (e, n) => {
                                const t = o && (n + 1) % 2 == 0,
                                    i = o ? Math.round((n + 1) / 2) === r : n + 1 === r;
                                return ae().createElement(
                                    'div',
                                    { key: n, className: Ne },
                                    ae().createElement(Ae, Fe({}, e, { className: De })),
                                    !t && !i && ae().createElement('div', { className: Ve }),
                                );
                            }),
                            Array.isArray(a) ? a.map(s) : a.map((e, n, t) => s(null == e ? void 0 : e.value, n, t))),
                        ),
                    );
                    var a, s;
                });
                engine.whenReady.then(() => {
                    me().render(
                        ae().createElement(de, null, ae().createElement(_e, null, ae().createElement(Ie, null))),
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
        (o.j = 470),
        (() => {
            var e = { 470: 0 };
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
    var r = o.O(void 0, [56], () => o(1590));
    r = o.O(r);
})();
