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
                    r.d(n, { mouse: () => S, off: () => w, on: () => E, onResize: () => f, onScaleUpdated: () => x });
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
                        addModelObserver: () => V,
                        addPreloadTexture: () => U,
                        children: () => i,
                        displayStatus: () => O,
                        displayStatusIs: () => oe,
                        events: () => P,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => ie,
                        freezeTextureBeforeResize: () => K,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => le,
                        getScale: () => Y,
                        getSize: () => q,
                        getViewGlobalPosition: () => J,
                        isEventHandled: () => ae,
                        isFocused: () => re,
                        pxToRem: () => Z,
                        remToPx: () => ee,
                        resize: () => Q,
                        sendEvent: () => B,
                        setAnimateWindow: () => te,
                        setEventHandled: () => ne,
                        setInputPaddingsRem: () => F,
                        setSidePaddingsRem: () => X,
                        whenTutorialReady: () => ue,
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
                    w = (e, t) => engine.off(e, t),
                    b = { down: h('mousedown'), up: h('mouseup'), move: h('mousemove') };
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
                                        l = b[t]((e) => r([e, 'outside']));
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
                    C = 16,
                    $ = 32,
                    k = 64,
                    z = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            r[n] = e[n];
                                        }
                                    return r;
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
                    B = {
                        close(e) {
                            z('popover' === e ? D : $);
                        },
                        minimize() {
                            z(k);
                        },
                        move(e) {
                            z(C, { isMouseEvent: !0, on: e });
                        },
                    },
                    j = 15;
                function U(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, j);
                }
                function N(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function V(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function X(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, j);
                }
                function q(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Q(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function J(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: ee(t.x), y: ee(t.y) };
                }
                function K() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Y() {
                    return viewEnv.getScale();
                }
                function Z(e) {
                    return viewEnv.pxToRem(e);
                }
                function ee(e) {
                    return viewEnv.remToPx(e);
                }
                function te(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function re() {
                    return viewEnv.isFocused();
                }
                function ne() {
                    return viewEnv.setEventHandled();
                }
                function ae() {
                    return viewEnv.isEventHandled();
                }
                function ie() {
                    viewEnv.forceTriggerMouseMove();
                }
                function le() {
                    return viewEnv.getShowingStatus();
                }
                const oe = Object.keys(O).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === O[t]), e), {}),
                    se = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ue = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : P.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    de = { view: l, client: a, sound: A };
                function me(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return ce(e, t);
                                var r = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === r && e.constructor && (r = e.constructor.name),
                                    'Map' === r || 'Set' === r
                                        ? Array.from(e)
                                        : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                          ? ce(e, t)
                                          : void 0
                                );
                            }
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
                function ce(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const ge = (e) => (0 === e ? window : window.subViews.get(e));
                const he = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: a, children: i, mocks: l }) {
                                const u = (0, o.useRef)([]),
                                    d = (r, n, a) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = ge,
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
                                                            s = de.view.addModelObserver(o, t, !0);
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
                                                        for (var e, r = me(a.keys()); !(e = r()).done; ) i(e.value, t);
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
                                    w = x[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        m.current ? w(d(v, a, l)) : (m.current = !0);
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
                    ve = he[0],
                    fe = he[1];
                var xe = r(3403),
                    Ee = r(6483),
                    we = r.n(Ee);
                const be = 'App_base_af',
                    Se = 'App_container_39',
                    Le = 'App_btnContainer_63',
                    pe = 'App_btnContainer__unavailable_33',
                    He = 'App_icon_f9',
                    ye = 'Hint_base_b3',
                    _e = 'Hint_header_d5',
                    Te = 'Hint_description_30',
                    Me = ({ headerText: e, descriptionText: t }) =>
                        s().createElement(
                            'div',
                            { className: ye },
                            s().createElement('div', { className: _e }, e),
                            s().createElement('div', { className: Te }, t),
                        ),
                    Ae = {
                        base: 'HintButton_base_19',
                        btnOuter: 'HintButton_btnOuter_f9',
                        btnOuter__blink: 'HintButton_btnOuter__blink_e7',
                        animationContainer: 'HintButton_animationContainer_c5',
                        buttonContainer: 'HintButton_buttonContainer_2a',
                        btnInner: 'HintButton_btnInner_e4',
                        btnInner__blink: 'HintButton_btnInner__blink_75',
                    };
                var We = r(7030);
                const Re = ({ btnText: e, hasBlinkAnimation: t = !1, isBlinking: r = !1 }) => {
                        const n = (0, o.useState)(!1),
                            a = n[0],
                            i = n[1],
                            l = we()(Ae.btnOuter, Ae.btnOuter__blink),
                            u = we()(Ae.btnInner, Ae.btnInner__blink),
                            d = (0, We.useSpring)({
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
                                { className: Ae.base },
                                s().createElement(
                                    'div',
                                    { className: Ae.btnContainer },
                                    s().createElement(
                                        'div',
                                        { className: Ae.btnOuter },
                                        s().createElement('div', { className: Ae.btnInner }, e),
                                    ),
                                ),
                                t &&
                                    r &&
                                    s().createElement(
                                        We.animated.div,
                                        { className: Ae.animationContainer, style: d },
                                        s().createElement(
                                            'div',
                                            { className: l },
                                            s().createElement('div', { className: u }, e),
                                        ),
                                    ),
                            )
                        );
                    },
                    Ie = R.strings.ingame_gui.postmortem.tips,
                    Oe = R.images.gui.maps.icons.battle.postmortem,
                    Pe = (0, xe.Pi)(() => {
                        const e = fe().model,
                            t = e.isFreecamAvailable.get(),
                            r = e.isFrontline.get(),
                            n = e.isBlinking.get(),
                            a = e.hasLivesAvailable.get(),
                            i = r ? Oe.frontlineFollowBtn() : Oe.defaultFollowBtn(),
                            l = r ? Ie.observerModeFrontline.label() : Ie.observerMode.label(),
                            o = r ? Ie.observerModeFrontline.text() : Ie.observerMode.text(),
                            u = t ? Ie.freecam.label() : Ie.freecamUnavailable.label(),
                            d = t ? Ie.freecam.text() : Ie.freecamUnavailable.text(),
                            m = we()(Le, !t && pe);
                        return s().createElement(
                            'div',
                            { className: be },
                            s().createElement(
                                'div',
                                { className: Se },
                                s().createElement('div', { className: He, style: { backgroundImage: `url('${i}')` } }),
                                s().createElement(Me, { headerText: l, descriptionText: o }),
                                t &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            'div',
                                            { className: m },
                                            s().createElement(Re, {
                                                btnText: Ie.freecam.button(),
                                                hasBlinkAnimation: !0,
                                                isBlinking: n,
                                            }),
                                        ),
                                        s().createElement(Me, { headerText: u, descriptionText: d }),
                                    ),
                                a &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            'div',
                                            { className: Le },
                                            s().createElement(Re, { btnText: Ie.exitHangar.button() }),
                                        ),
                                        s().createElement(Me, {
                                            headerText: Ie.exitHangar.label(),
                                            descriptionText: Ie.exitHangar.text(),
                                        }),
                                    ),
                            ),
                        );
                    }),
                    Ge = (e, t, r) =>
                        t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                            ? (t.extraLargeHeight && r.extraLarge) ||
                              (t.largeHeight && r.large) ||
                              (t.mediumHeight && r.medium) ||
                              (t.smallHeight && r.small) ||
                              (t.extraSmallHeight && r.extraSmall)
                                ? e
                                : null
                            : e,
                    De = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var Ce;
                function $e(e, t, r) {
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
                })(Ce || (Ce = {}));
                const ke = de.client.getSize('rem'),
                    ze = ke.width,
                    Be = ke.height,
                    je = Object.assign({ width: ze, height: Be }, $e(ze, Be, De)),
                    Ue = (0, o.createContext)(je),
                    Fe = ['children'];
                const Ne = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, Fe);
                    const n = (0, o.useContext)(Ue),
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
                        w = n.extraSmallHeight,
                        b = { extraLarge: v, large: f, medium: x, small: E, extraSmall: w };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && a) return t;
                        if (r.large && i) return t;
                        if (r.medium && l) return t;
                        if (r.small && s) return t;
                        if (r.extraSmall && u) return t;
                    } else {
                        if (r.extraLargeWidth && d) return Ge(t, r, b);
                        if (r.largeWidth && m) return Ge(t, r, b);
                        if (r.mediumWidth && c) return Ge(t, r, b);
                        if (r.smallWidth && g) return Ge(t, r, b);
                        if (r.extraSmallWidth && h) return Ge(t, r, b);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && v) return t;
                            if (r.largeHeight && f) return t;
                            if (r.mediumHeight && x) return t;
                            if (r.smallHeight && E) return t;
                            if (r.extraSmallHeight && w) return t;
                        }
                    }
                    return null;
                };
                Ne.defaultProps = {
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
                (0, o.memo)(Ne);
                const Ve = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    Xe = ({ children: e }) => {
                        const t = (0, o.useContext)(Ue),
                            r = (0, o.useState)(t),
                            n = r[0],
                            a = r[1],
                            i = (0, o.useCallback)((e, t) => {
                                const r = de.view.pxToRem(e),
                                    n = de.view.pxToRem(t);
                                a(Object.assign({ width: r, height: n }, $e(r, n, De)));
                            }, []),
                            l = (0, o.useCallback)(() => {
                                const e = de.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        Ve(() => {
                            de.client.events.on('clientResized', i), de.client.events.on('self.onScaleUpdated', l);
                        }),
                            (0, o.useEffect)(
                                () => () => {
                                    de.client.events.off('clientResized', i),
                                        de.client.events.off('self.onScaleUpdated', l);
                                },
                                [i, l],
                            );
                        const u = (0, o.useMemo)(() => Object.assign({}, n), [n]);
                        return s().createElement(Ue.Provider, { value: u }, e);
                    };
                var qe = r(926),
                    Qe = r.n(qe);
                let Je, Ke, Ye;
                !(function (e) {
                    (e[(e.ExtraSmall = De.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = De.small.width)] = 'Small'),
                        (e[(e.Medium = De.medium.width)] = 'Medium'),
                        (e[(e.Large = De.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = De.extraLarge.width)] = 'ExtraLarge');
                })(Je || (Je = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = De.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = De.small.width)] = 'Small'),
                            (e[(e.Medium = De.medium.width)] = 'Medium'),
                            (e[(e.Large = De.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = De.extraLarge.width)] = 'ExtraLarge');
                    })(Ke || (Ke = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = De.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = De.small.height)] = 'Small'),
                            (e[(e.Medium = De.medium.height)] = 'Medium'),
                            (e[(e.Large = De.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = De.extraLarge.height)] = 'ExtraLarge');
                    })(Ye || (Ye = {}));
                const Ze = () => {
                        const e = (0, o.useContext)(Ue),
                            t = e.width,
                            r = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return Je.ExtraLarge;
                                    case e.large:
                                        return Je.Large;
                                    case e.medium:
                                        return Je.Medium;
                                    case e.small:
                                        return Je.Small;
                                    case e.extraSmall:
                                        return Je.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Je.ExtraSmall;
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Ke.ExtraLarge;
                                    case e.largeWidth:
                                        return Ke.Large;
                                    case e.mediumWidth:
                                        return Ke.Medium;
                                    case e.smallWidth:
                                        return Ke.Small;
                                    case e.extraSmallWidth:
                                        return Ke.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Ke.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return Ye.ExtraLarge;
                                    case e.largeHeight:
                                        return Ye.Large;
                                    case e.mediumHeight:
                                        return Ye.Medium;
                                    case e.smallHeight:
                                        return Ye.Small;
                                    case e.extraSmallHeight:
                                        return Ye.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Ye.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: i, remScreenWidth: t, remScreenHeight: r };
                    },
                    et = ['children', 'className'];
                function tt() {
                    return (
                        (tt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                  }
                                  return e;
                              }),
                        tt.apply(null, arguments)
                    );
                }
                const rt = {
                        [Ke.ExtraSmall]: '',
                        [Ke.Small]: Qe().SMALL_WIDTH,
                        [Ke.Medium]: `${Qe().SMALL_WIDTH} ${Qe().MEDIUM_WIDTH}`,
                        [Ke.Large]: `${Qe().SMALL_WIDTH} ${Qe().MEDIUM_WIDTH} ${Qe().LARGE_WIDTH}`,
                        [Ke.ExtraLarge]: `${Qe().SMALL_WIDTH} ${Qe().MEDIUM_WIDTH} ${Qe().LARGE_WIDTH} ${Qe().EXTRA_LARGE_WIDTH}`,
                    },
                    nt = {
                        [Ye.ExtraSmall]: '',
                        [Ye.Small]: Qe().SMALL_HEIGHT,
                        [Ye.Medium]: `${Qe().SMALL_HEIGHT} ${Qe().MEDIUM_HEIGHT}`,
                        [Ye.Large]: `${Qe().SMALL_HEIGHT} ${Qe().MEDIUM_HEIGHT} ${Qe().LARGE_HEIGHT}`,
                        [Ye.ExtraLarge]: `${Qe().SMALL_HEIGHT} ${Qe().MEDIUM_HEIGHT} ${Qe().LARGE_HEIGHT} ${Qe().EXTRA_LARGE_HEIGHT}`,
                    },
                    at = {
                        [Je.ExtraSmall]: '',
                        [Je.Small]: Qe().SMALL,
                        [Je.Medium]: `${Qe().SMALL} ${Qe().MEDIUM}`,
                        [Je.Large]: `${Qe().SMALL} ${Qe().MEDIUM} ${Qe().LARGE}`,
                        [Je.ExtraLarge]: `${Qe().SMALL} ${Qe().MEDIUM} ${Qe().LARGE} ${Qe().EXTRA_LARGE}`,
                    },
                    it = (e) => {
                        let t = e.children,
                            r = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        r[n] = e[n];
                                    }
                                return r;
                            })(e, et);
                        const a = Ze(),
                            i = a.mediaWidth,
                            l = a.mediaHeight,
                            o = a.mediaSize;
                        return s().createElement('div', tt({ className: we()(r, rt[i], nt[l], at[o]) }, n), t);
                    },
                    lt = ['children'];
                const ot = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, lt);
                    return s().createElement(Xe, null, s().createElement(it, r, t));
                };
                engine.whenReady.then(() => {
                    d().render(
                        s().createElement(ot, null, s().createElement(ve, null, s().createElement(Pe, null))),
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
