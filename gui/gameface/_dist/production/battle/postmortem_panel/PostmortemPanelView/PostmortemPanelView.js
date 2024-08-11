(() => {
    var e,
        t = {
            926: (e) => {
                e.exports = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
            },
            6184: (e, t, r) => {
                'use strict';
                var n = {};
                r.r(n),
                    r.d(n, { mouse: () => S, off: () => b, on: () => E, onResize: () => f, onScaleUpdated: () => x });
                var a = {};
                r.r(a),
                    r.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => y,
                        getSize: () => H,
                        graphicsQuality: () => _,
                        playSound: () => L,
                        setRTPC: () => p,
                    });
                var i = {};
                r.r(i), r.d(i, { getBgUrl: () => I, getTextureUrl: () => W });
                var l = {};
                r.r(l),
                    r.d(l, {
                        addModelObserver: () => N,
                        addPreloadTexture: () => B,
                        children: () => i,
                        displayStatus: () => O,
                        displayStatusIs: () => le,
                        events: () => P,
                        extraSize: () => oe,
                        forceTriggerMouseMove: () => ae,
                        freezeTextureBeforeResize: () => J,
                        getBrowserTexturePath: () => F,
                        getDisplayStatus: () => ie,
                        getScale: () => K,
                        getSize: () => X,
                        getViewGlobalPosition: () => Q,
                        isEventHandled: () => ne,
                        isFocused: () => te,
                        pxToRem: () => Y,
                        remToPx: () => Z,
                        resize: () => q,
                        sendEvent: () => j,
                        setAnimateWindow: () => ee,
                        setEventHandled: () => re,
                        setInputPaddingsRem: () => U,
                        setSidePaddingsRem: () => V,
                        whenTutorialReady: () => se,
                    });
                var o = r(6179),
                    s = r.n(o),
                    u = r(493),
                    d = r.n(u);
                function m() {}
                function c() {
                    return !1;
                }
                console.log;
                var g = r(9174);
                function h(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function v(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const f = h('clientResized'),
                    x = h('self.onScaleUpdated'),
                    E = (e, t) => engine.on(e, t),
                    b = (e, t) => engine.off(e, t),
                    w = { down: h('mousedown'), up: h('mouseup'), move: h('mousemove') };
                const S = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && v(!1);
                    }
                    function r() {
                        e.enabled && v(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', r))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', r))
                            : v(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        l = w[t]((e) => r([e, 'outside']));
                                    function o(e) {
                                        r([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, o),
                                        n(),
                                        () => {
                                            a &&
                                                (l(),
                                                window.removeEventListener(i, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(r)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && v(!0);
                        },
                        disableOutside() {
                            e.enabled && v(!1);
                        },
                    });
                })();
                function L(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function p(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                function H(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const _ = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    T = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    M = Object.keys(T).reduce((e, t) => ((e[t] = () => L(T[t])), e), {}),
                    A = { play: Object.assign({}, M, { sound: L }), setRTPC: p };
                function W(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function I(e, t, r) {
                    return `url(${W(e, t, r)})`;
                }
                const O = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    P = {
                        onTextureFrozen: h('self.onTextureFrozen'),
                        onTextureReady: h('self.onTextureReady'),
                        onDomBuilt: h('self.onDomBuilt'),
                        onLoaded: h('self.onLoaded'),
                        onDisplayChanged: h('self.onShowingStatusChanged'),
                        onFocusUpdated: h('self.onFocusChanged'),
                        children: {
                            onAdded: h('children.onAdded'),
                            onLoaded: h('children.onLoaded'),
                            onRemoved: h('children.onRemoved'),
                            onAttached: h('children.onAttached'),
                            onTextureReady: h('children.onTextureReady'),
                            onRequestPosition: h('children.requestPosition'),
                        },
                    },
                    G = ['args'];
                const D = 2,
                    k = 16,
                    C = 32,
                    $ = 64,
                    z = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                    return a;
                                })(t, G);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const r = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: r, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: r, name: e, bool: t };
                                                      default:
                                                          return { __Type: r, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    j = {
                        close(e) {
                            z('popover' === e ? D : C);
                        },
                        minimize() {
                            z($);
                        },
                        move(e) {
                            z(k, { isMouseEvent: !0, on: e });
                        },
                    };
                function B(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function F(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function N(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function V(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function X(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function Q(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Z(t.x), y: Z(t.y) };
                }
                function J() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function K() {
                    return viewEnv.getScale();
                }
                function Y(e) {
                    return viewEnv.pxToRem(e);
                }
                function Z(e) {
                    return viewEnv.remToPx(e);
                }
                function ee(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function te() {
                    return viewEnv.isFocused();
                }
                function re() {
                    return viewEnv.setEventHandled();
                }
                function ne() {
                    return viewEnv.isEventHandled();
                }
                function ae() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ie() {
                    return viewEnv.getShowingStatus();
                }
                const le = Object.keys(O).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === O[t]), e), {}),
                    oe = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    se = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : P.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ue = { view: l, client: a, sound: A };
                function de(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return me(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return me(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function me(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const ce = (e) => (0 === e ? window : window.subViews.get(e));
                const ge = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: a, children: i, mocks: l }) {
                                const u = (0, o.useRef)([]),
                                    d = (r, n, a) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = ce,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = a.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const a = r(t),
                                                        i = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (r, i) => {
                                                        const o = 'string' == typeof i ? `${n}.${i}` : n,
                                                            s = ue.view.addModelObserver(o, t, !0);
                                                        return a.set(s, r), e && r(l(i)), s;
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, t) => {
                                                        const r = l(t);
                                                        return (...t) => {
                                                            r(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = l(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, r = de(a.keys()); !(e = r()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            o =
                                                'real' === r
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === r ? (null == a ? void 0 : a.getter(e)) : o.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            m = e({
                                                mode: r,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : s(e),
                                                            a = g.LO.box(n, { equals: c });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, g.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : s(e),
                                                            a = g.LO.box(n, { equals: c });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, g.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = s(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = g.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, g.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                i = Object.entries(a),
                                                                l = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = g.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, g.aD)((e) => {
                                                                            i.forEach(([t, r]) => {
                                                                                l[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                l
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            h = { mode: r, model: m, externalModel: o, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === r && a ? a.controls(h) : t(h),
                                            externalModel: o,
                                            mode: r,
                                        };
                                    },
                                    m = (0, o.useRef)(!1),
                                    h = (0, o.useState)(n),
                                    v = h[0],
                                    f = h[1],
                                    x = (0, o.useState)(() => d(n, a, l)),
                                    E = x[0],
                                    b = x[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        m.current ? b(d(v, a, l)) : (m.current = !0);
                                    }, [l, v, a]),
                                    (0, o.useEffect)(() => {
                                        f(n);
                                    }, [n]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            E.externalModel.dispose(), u.current.forEach((e) => e());
                                        },
                                        [E],
                                    ),
                                    s().createElement(r.Provider, { value: E }, i)
                                );
                            },
                            () => (0, o.useContext)(r),
                        ];
                    })(
                        ({ observableModel: e }) =>
                            e.primitives(['isFrontline', 'isFreecamAvailable', 'isBlinking', 'hasLivesAvailable']),
                        m,
                    ),
                    he = ge[0],
                    ve = ge[1];
                var fe = r(3403),
                    xe = r(6483),
                    Ee = r.n(xe);
                const be = 'App_base_af',
                    we = 'App_container_39',
                    Se = 'App_btnContainer_63',
                    Le = 'App_btnContainer__unavailable_33',
                    pe = 'App_icon_f9',
                    He = 'Hint_base_b3',
                    ye = 'Hint_header_d5',
                    _e = 'Hint_description_30',
                    Te = ({ headerText: e, descriptionText: t }) =>
                        s().createElement(
                            'div',
                            { className: He },
                            s().createElement('div', { className: ye }, e),
                            s().createElement('div', { className: _e }, t),
                        ),
                    Me = {
                        base: 'HintButton_base_19',
                        btnOuter: 'HintButton_btnOuter_f9',
                        btnOuter__blink: 'HintButton_btnOuter__blink_e7',
                        animationContainer: 'HintButton_animationContainer_c5',
                        buttonContainer: 'HintButton_buttonContainer_2a',
                        btnInner: 'HintButton_btnInner_e4',
                        btnInner__blink: 'HintButton_btnInner__blink_75',
                    };
                var Ae = r(7030);
                const We = ({ btnText: e, hasBlinkAnimation: t = !1, isBlinking: r = !1 }) => {
                        const n = (0, o.useState)(!1),
                            a = n[0],
                            i = n[1],
                            l = Ee()(Me.btnOuter, Me.btnOuter__blink),
                            u = Ee()(Me.btnInner, Me.btnInner__blink),
                            d = (0, Ae.useSpring)({
                                loop: !0,
                                reset: a,
                                from: { opacity: 0, transform: 'scale(1)' },
                                to: a
                                    ? [
                                          { opacity: 0, transform: 'scale(1)', config: { duration: 150 } },
                                          { opacity: 1, transform: 'scale(1)', config: { duration: 150 } },
                                          { opacity: 0, transform: 'scale(1.4)', config: { duration: 250 } },
                                      ]
                                    : { opacity: 0, transform: 'scale(1)' },
                                delay: 700,
                            });
                        return (
                            (0, o.useEffect)(() => {
                                i(!!r);
                            }, [r]),
                            s().createElement(
                                'div',
                                { className: Me.base },
                                s().createElement(
                                    'div',
                                    { className: Me.btnContainer },
                                    s().createElement(
                                        'div',
                                        { className: Me.btnOuter },
                                        s().createElement('div', { className: Me.btnInner }, e),
                                    ),
                                ),
                                t &&
                                    r &&
                                    s().createElement(
                                        Ae.animated.div,
                                        { className: Me.animationContainer, style: d },
                                        s().createElement(
                                            'div',
                                            { className: l },
                                            s().createElement('div', { className: u }, e),
                                        ),
                                    ),
                            )
                        );
                    },
                    Re = R.strings.ingame_gui.postmortem.tips,
                    Ie = R.images.gui.maps.icons.battle.postmortem,
                    Oe = (0, fe.Pi)(() => {
                        const e = ve().model,
                            t = e.isFreecamAvailable.get(),
                            r = e.isFrontline.get(),
                            n = e.isBlinking.get(),
                            a = e.hasLivesAvailable.get(),
                            i = r ? Ie.frontlineFollowBtn() : Ie.defaultFollowBtn(),
                            l = r ? Re.observerModeFrontline.label() : Re.observerMode.label(),
                            o = r ? Re.observerModeFrontline.text() : Re.observerMode.text(),
                            u = t ? Re.freecam.label() : Re.freecamUnavailable.label(),
                            d = t ? Re.freecam.text() : Re.freecamUnavailable.text(),
                            m = Ee()(Se, !t && Le);
                        return s().createElement(
                            'div',
                            { className: be },
                            s().createElement(
                                'div',
                                { className: we },
                                s().createElement('div', { className: pe, style: { backgroundImage: `url('${i}')` } }),
                                s().createElement(Te, { headerText: l, descriptionText: o }),
                                t &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            'div',
                                            { className: m },
                                            s().createElement(We, {
                                                btnText: Re.freecam.button(),
                                                hasBlinkAnimation: !0,
                                                isBlinking: n,
                                            }),
                                        ),
                                        s().createElement(Te, { headerText: u, descriptionText: d }),
                                    ),
                                a &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            'div',
                                            { className: Se },
                                            s().createElement(We, { btnText: Re.exitHangar.button() }),
                                        ),
                                        s().createElement(Te, {
                                            headerText: Re.exitHangar.label(),
                                            descriptionText: Re.exitHangar.text(),
                                        }),
                                    ),
                            ),
                        );
                    }),
                    Pe = (e, t, r) =>
                        t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                            ? (t.extraLargeHeight && r.extraLarge) ||
                              (t.largeHeight && r.large) ||
                              (t.mediumHeight && r.medium) ||
                              (t.smallHeight && r.small) ||
                              (t.extraSmallHeight && r.extraSmall)
                                ? e
                                : null
                            : e,
                    Ge = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var De;
                function ke(e, t, r) {
                    const n = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, r),
                        a = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, r),
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === r.extraLarge.weight,
                        large: i === r.large.weight,
                        medium: i === r.medium.weight,
                        small: i === r.small.weight,
                        extraSmall: i === r.extraSmall.weight,
                        extraLargeWidth: n === r.extraLarge.weight,
                        largeWidth: n === r.large.weight,
                        mediumWidth: n === r.medium.weight,
                        smallWidth: n === r.small.weight,
                        extraSmallWidth: n === r.extraSmall.weight,
                        extraLargeHeight: a === r.extraLarge.weight,
                        largeHeight: a === r.large.weight,
                        mediumHeight: a === r.medium.weight,
                        smallHeight: a === r.small.weight,
                        extraSmallHeight: a === r.extraSmall.weight,
                    };
                }
                !(function (e) {
                    (e.extraLarge = 'extraLarge'),
                        (e.large = 'large'),
                        (e.medium = 'medium'),
                        (e.small = 'small'),
                        (e.extraSmall = 'extraSmall'),
                        (e.extraLargeWidth = 'extraLargeWidth'),
                        (e.largeWidth = 'largeWidth'),
                        (e.mediumWidth = 'mediumWidth'),
                        (e.smallWidth = 'smallWidth'),
                        (e.extraSmallWidth = 'extraSmallWidth'),
                        (e.extraLargeHeight = 'extraLargeHeight'),
                        (e.largeHeight = 'largeHeight'),
                        (e.mediumHeight = 'mediumHeight'),
                        (e.smallHeight = 'smallHeight'),
                        (e.extraSmallHeight = 'extraSmallHeight');
                })(De || (De = {}));
                const Ce = ue.client.getSize('rem'),
                    $e = Ce.width,
                    ze = Ce.height,
                    je = Object.assign({ width: $e, height: ze }, ke($e, ze, Ge)),
                    Be = (0, o.createContext)(je),
                    Ue = ['children'];
                const Fe = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, Ue);
                    const n = (0, o.useContext)(Be),
                        a = n.extraLarge,
                        i = n.large,
                        l = n.medium,
                        s = n.small,
                        u = n.extraSmall,
                        d = n.extraLargeWidth,
                        m = n.largeWidth,
                        c = n.mediumWidth,
                        g = n.smallWidth,
                        h = n.extraSmallWidth,
                        v = n.extraLargeHeight,
                        f = n.largeHeight,
                        x = n.mediumHeight,
                        E = n.smallHeight,
                        b = n.extraSmallHeight,
                        w = { extraLarge: v, large: f, medium: x, small: E, extraSmall: b };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && a) return t;
                        if (r.large && i) return t;
                        if (r.medium && l) return t;
                        if (r.small && s) return t;
                        if (r.extraSmall && u) return t;
                    } else {
                        if (r.extraLargeWidth && d) return Pe(t, r, w);
                        if (r.largeWidth && m) return Pe(t, r, w);
                        if (r.mediumWidth && c) return Pe(t, r, w);
                        if (r.smallWidth && g) return Pe(t, r, w);
                        if (r.extraSmallWidth && h) return Pe(t, r, w);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && v) return t;
                            if (r.largeHeight && f) return t;
                            if (r.mediumHeight && x) return t;
                            if (r.smallHeight && E) return t;
                            if (r.extraSmallHeight && b) return t;
                        }
                    }
                    return null;
                };
                Fe.defaultProps = {
                    extraLarge: !1,
                    large: !1,
                    medium: !1,
                    small: !1,
                    extraSmall: !1,
                    extraLargeWidth: !1,
                    largeWidth: !1,
                    mediumWidth: !1,
                    smallWidth: !1,
                    extraSmallWidth: !1,
                    extraLargeHeight: !1,
                    largeHeight: !1,
                    mediumHeight: !1,
                    smallHeight: !1,
                    extraSmallHeight: !1,
                };
                (0, o.memo)(Fe);
                const Ne = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    Ve = ({ children: e }) => {
                        const t = (0, o.useContext)(Be),
                            r = (0, o.useState)(t),
                            n = r[0],
                            a = r[1],
                            i = (0, o.useCallback)((e, t) => {
                                const r = ue.view.pxToRem(e),
                                    n = ue.view.pxToRem(t);
                                a(Object.assign({ width: r, height: n }, ke(r, n, Ge)));
                            }, []),
                            l = (0, o.useCallback)(() => {
                                const e = ue.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        Ne(() => {
                            ue.client.events.on('clientResized', i), ue.client.events.on('self.onScaleUpdated', l);
                        }),
                            (0, o.useEffect)(
                                () => () => {
                                    ue.client.events.off('clientResized', i),
                                        ue.client.events.off('self.onScaleUpdated', l);
                                },
                                [i, l],
                            );
                        const u = (0, o.useMemo)(() => Object.assign({}, n), [n]);
                        return s().createElement(Be.Provider, { value: u }, e);
                    };
                var Xe = r(926),
                    qe = r.n(Xe);
                let Qe, Je, Ke;
                !(function (e) {
                    (e[(e.ExtraSmall = Ge.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = Ge.small.width)] = 'Small'),
                        (e[(e.Medium = Ge.medium.width)] = 'Medium'),
                        (e[(e.Large = Ge.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = Ge.extraLarge.width)] = 'ExtraLarge');
                })(Qe || (Qe = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = Ge.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = Ge.small.width)] = 'Small'),
                            (e[(e.Medium = Ge.medium.width)] = 'Medium'),
                            (e[(e.Large = Ge.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = Ge.extraLarge.width)] = 'ExtraLarge');
                    })(Je || (Je = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = Ge.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = Ge.small.height)] = 'Small'),
                            (e[(e.Medium = Ge.medium.height)] = 'Medium'),
                            (e[(e.Large = Ge.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = Ge.extraLarge.height)] = 'ExtraLarge');
                    })(Ke || (Ke = {}));
                const Ye = () => {
                        const e = (0, o.useContext)(Be),
                            t = e.width,
                            r = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return Qe.ExtraLarge;
                                    case e.large:
                                        return Qe.Large;
                                    case e.medium:
                                        return Qe.Medium;
                                    case e.small:
                                        return Qe.Small;
                                    case e.extraSmall:
                                        return Qe.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Qe.ExtraSmall;
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Je.ExtraLarge;
                                    case e.largeWidth:
                                        return Je.Large;
                                    case e.mediumWidth:
                                        return Je.Medium;
                                    case e.smallWidth:
                                        return Je.Small;
                                    case e.extraSmallWidth:
                                        return Je.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Je.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return Ke.ExtraLarge;
                                    case e.largeHeight:
                                        return Ke.Large;
                                    case e.mediumHeight:
                                        return Ke.Medium;
                                    case e.smallHeight:
                                        return Ke.Small;
                                    case e.extraSmallHeight:
                                        return Ke.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Ke.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: i, remScreenWidth: t, remScreenHeight: r };
                    },
                    Ze = ['children', 'className'];
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        et.apply(this, arguments)
                    );
                }
                const tt = {
                        [Je.ExtraSmall]: '',
                        [Je.Small]: qe().SMALL_WIDTH,
                        [Je.Medium]: `${qe().SMALL_WIDTH} ${qe().MEDIUM_WIDTH}`,
                        [Je.Large]: `${qe().SMALL_WIDTH} ${qe().MEDIUM_WIDTH} ${qe().LARGE_WIDTH}`,
                        [Je.ExtraLarge]: `${qe().SMALL_WIDTH} ${qe().MEDIUM_WIDTH} ${qe().LARGE_WIDTH} ${qe().EXTRA_LARGE_WIDTH}`,
                    },
                    rt = {
                        [Ke.ExtraSmall]: '',
                        [Ke.Small]: qe().SMALL_HEIGHT,
                        [Ke.Medium]: `${qe().SMALL_HEIGHT} ${qe().MEDIUM_HEIGHT}`,
                        [Ke.Large]: `${qe().SMALL_HEIGHT} ${qe().MEDIUM_HEIGHT} ${qe().LARGE_HEIGHT}`,
                        [Ke.ExtraLarge]: `${qe().SMALL_HEIGHT} ${qe().MEDIUM_HEIGHT} ${qe().LARGE_HEIGHT} ${qe().EXTRA_LARGE_HEIGHT}`,
                    },
                    nt = {
                        [Qe.ExtraSmall]: '',
                        [Qe.Small]: qe().SMALL,
                        [Qe.Medium]: `${qe().SMALL} ${qe().MEDIUM}`,
                        [Qe.Large]: `${qe().SMALL} ${qe().MEDIUM} ${qe().LARGE}`,
                        [Qe.ExtraLarge]: `${qe().SMALL} ${qe().MEDIUM} ${qe().LARGE} ${qe().EXTRA_LARGE}`,
                    },
                    at = (e) => {
                        let t = e.children,
                            r = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, Ze);
                        const a = Ye(),
                            i = a.mediaWidth,
                            l = a.mediaHeight,
                            o = a.mediaSize;
                        return s().createElement('div', et({ className: Ee()(r, tt[i], rt[l], nt[o]) }, n), t);
                    },
                    it = ['children'];
                const lt = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, it);
                    return s().createElement(Ve, null, s().createElement(at, r, t));
                };
                engine.whenReady.then(() => {
                    d().render(
                        s().createElement(lt, null, s().createElement(he, null, s().createElement(Oe, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        r = {};
    function n(e) {
        var a = r[e];
        if (void 0 !== a) return a.exports;
        var i = (r[e] = { exports: {} });
        return t[e](i, i.exports, n), i.exports;
    }
    (n.m = t),
        (e = []),
        (n.O = (t, r, a, i) => {
            if (!r) {
                var l = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [r, a, i] = e[d], o = !0, s = 0; s < r.length; s++)
                        (!1 & i || l >= i) && Object.keys(n.O).every((e) => n.O[e](r[s]))
                            ? r.splice(s--, 1)
                            : ((o = !1), i < l && (l = i));
                    if (o) {
                        e.splice(d--, 1);
                        var u = a();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
            e[d] = [r, a, i];
        }),
        (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return n.d(t, { a: t }), t;
        }),
        (n.d = (e, t) => {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (n.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (n.j = 82),
        (() => {
            var e = { 82: 0 };
            n.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var a,
                        i,
                        [l, o, s] = r,
                        u = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (a in o) n.o(o, a) && (n.m[a] = o[a]);
                        if (s) var d = s(n);
                    }
                    for (t && t(r); u < l.length; u++) (i = l[u]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return n.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var a = n.O(void 0, [532], () => n(6184));
    a = n.O(a);
})();
