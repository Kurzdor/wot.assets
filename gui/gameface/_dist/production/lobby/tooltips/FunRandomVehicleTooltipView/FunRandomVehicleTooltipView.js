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
            3267: (e, t, r) => {
                'use strict';
                var a = {};
                r.r(a),
                    r.d(a, { mouse: () => f, off: () => h, on: () => g, onResize: () => c, onScaleUpdated: () => m });
                var n = {};
                r.r(n),
                    r.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => p,
                        getSize: () => E,
                        graphicsQuality: () => b,
                        playSound: () => w,
                        setRTPC: () => x,
                    });
                var i = {};
                r.r(i), r.d(i, { getBgUrl: () => H, getTextureUrl: () => y });
                var l = {};
                r.r(l),
                    r.d(l, {
                        addModelObserver: () => $,
                        addPreloadTexture: () => O,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => J,
                        events: () => T,
                        extraSize: () => K,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => N,
                        getBrowserTexturePath: () => D,
                        getDisplayStatus: () => Y,
                        getScale: () => C,
                        getSize: () => G,
                        getViewGlobalPosition: () => z,
                        isEventHandled: () => X,
                        isFocused: () => F,
                        pxToRem: () => U,
                        remToPx: () => B,
                        resize: () => j,
                        sendEvent: () => I,
                        setAnimateWindow: () => V,
                        setEventHandled: () => q,
                        setInputPaddingsRem: () => P,
                        setSidePaddingsRem: () => k,
                        whenTutorialReady: () => Z,
                    });
                var o = r(6483),
                    s = r.n(o);
                function d(e) {
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
                const c = d('clientResized'),
                    m = d('self.onScaleUpdated'),
                    g = (e, t) => engine.on(e, t),
                    h = (e, t) => engine.off(e, t),
                    v = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') },
                    f = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && u(!1);
                        }
                        function r() {
                            e.enabled && u(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', r))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', r))
                                : u(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const i = `mouse${t}`,
                                            l = v[t]((e) => r([e, 'outside']));
                                        function o(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, o),
                                            a(),
                                            () => {
                                                n &&
                                                    (l(),
                                                    window.removeEventListener(i, o),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(r)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, n, {
                            disable() {
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
                            },
                            enableOutside() {
                                e.enabled && u(!0);
                            },
                            disableOutside() {
                                e.enabled && u(!1);
                            },
                        });
                    })();
                function w(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function x(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    S = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    L = Object.keys(S).reduce((e, t) => ((e[t] = () => w(S[t])), e), {}),
                    _ = { play: Object.assign({}, L, { sound: w }), setRTPC: x };
                function y(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function H(e, t, r) {
                    return `url(${y(e, t, r)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    T = {
                        onTextureFrozen: d('self.onTextureFrozen'),
                        onTextureReady: d('self.onTextureReady'),
                        onDomBuilt: d('self.onDomBuilt'),
                        onLoaded: d('self.onLoaded'),
                        onDisplayChanged: d('self.onShowingStatusChanged'),
                        onFocusUpdated: d('self.onFocusChanged'),
                        children: {
                            onAdded: d('children.onAdded'),
                            onLoaded: d('children.onLoaded'),
                            onRemoved: d('children.onRemoved'),
                            onAttached: d('children.onAttached'),
                            onTextureReady: d('children.onTextureReady'),
                            onRequestPosition: d('children.requestPosition'),
                        },
                    },
                    M = ['args'],
                    W = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        a,
                                        n = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                    return n;
                                })(t, M);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
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
                        var a;
                    },
                    I = {
                        close(e) {
                            W('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            W(64);
                        },
                        move(e) {
                            W(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function O(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function P(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function D(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function $(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function k(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function G(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function j(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function z(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: B(t.x), y: B(t.y) };
                }
                function N() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function C() {
                    return viewEnv.getScale();
                }
                function U(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function V(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function F() {
                    return viewEnv.isFocused();
                }
                function q() {
                    return viewEnv.setEventHandled();
                }
                function X() {
                    return viewEnv.isEventHandled();
                }
                function Q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Y() {
                    return viewEnv.getShowingStatus();
                }
                const J = Object.keys(A).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === A[t]), e), {}),
                    K = {
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
                    ee = { view: l, client: n, sound: _ };
                var te = r(6179),
                    re = r.n(te);
                const ae = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ne = ['children', 'className', 'theme'];
                function ie() {
                    return (
                        (ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        ie.apply(this, arguments)
                    );
                }
                const le = re().forwardRef(function (e, t) {
                        let r = e.children,
                            a = e.className,
                            n = e.theme,
                            i = void 0 === n ? 'default' : n,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n;
                            })(e, ne);
                        const o = (function () {
                                const e = (0, te.useRef)(0);
                                var t;
                                return (
                                    (t = () => {
                                        window.cancelAnimationFrame(e.current);
                                    }),
                                    (0, te.useEffect)(() => t, []),
                                    (0, te.useMemo)(
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
                            d = re().useRef(null);
                        var u;
                        return (
                            (u = () => {
                                o.run(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = e.scrollWidth,
                                        r = e.scrollHeight;
                                    ee.view.resize(t, r);
                                    const a = window.getComputedStyle(e);
                                    ee.view.setSidePaddingsRem({
                                        left: parseInt(a.getPropertyValue('padding-left'), 10),
                                        top: parseInt(a.getPropertyValue('padding-top'), 10),
                                        right: parseInt(a.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(a.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, te.useEffect)(u, []),
                            re().createElement(
                                'div',
                                ie({}, l, {
                                    className: s()(ae.base, ae[`base__theme-${i}`], a),
                                    ref: function (e) {
                                        (d.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                    },
                                }),
                                re().createElement('div', { className: ae.decorator }, r),
                            )
                        );
                    }),
                    oe = (e, t, r) =>
                        t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                            ? (t.extraLargeHeight && r.extraLarge) ||
                              (t.largeHeight && r.large) ||
                              (t.mediumHeight && r.medium) ||
                              (t.smallHeight && r.small) ||
                              (t.extraSmallHeight && r.extraSmall)
                                ? e
                                : null
                            : e,
                    se = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var de;
                function ue(e, t, r) {
                    const a = (function (e, t) {
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
                        n = (function (e, t) {
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
                        i = Math.min(a, n);
                    return {
                        extraLarge: i === r.extraLarge.weight,
                        large: i === r.large.weight,
                        medium: i === r.medium.weight,
                        small: i === r.small.weight,
                        extraSmall: i === r.extraSmall.weight,
                        extraLargeWidth: a === r.extraLarge.weight,
                        largeWidth: a === r.large.weight,
                        mediumWidth: a === r.medium.weight,
                        smallWidth: a === r.small.weight,
                        extraSmallWidth: a === r.extraSmall.weight,
                        extraLargeHeight: n === r.extraLarge.weight,
                        largeHeight: n === r.large.weight,
                        mediumHeight: n === r.medium.weight,
                        smallHeight: n === r.small.weight,
                        extraSmallHeight: n === r.extraSmall.weight,
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
                })(de || (de = {}));
                const ce = ee.client.getSize('rem'),
                    me = ce.width,
                    ge = ce.height,
                    he = Object.assign({ width: me, height: ge }, ue(me, ge, se)),
                    ve = (0, te.createContext)(he),
                    fe = ['children'],
                    we = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n;
                            })(e, fe);
                        const a = (0, te.useContext)(ve),
                            n = a.extraLarge,
                            i = a.large,
                            l = a.medium,
                            o = a.small,
                            s = a.extraSmall,
                            d = a.extraLargeWidth,
                            u = a.largeWidth,
                            c = a.mediumWidth,
                            m = a.smallWidth,
                            g = a.extraSmallWidth,
                            h = a.extraLargeHeight,
                            v = a.largeHeight,
                            f = a.mediumHeight,
                            w = a.smallHeight,
                            x = a.extraSmallHeight,
                            E = { extraLarge: h, large: v, medium: f, small: w, extraSmall: x };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && n) return t;
                            if (r.large && i) return t;
                            if (r.medium && l) return t;
                            if (r.small && o) return t;
                            if (r.extraSmall && s) return t;
                        } else {
                            if (r.extraLargeWidth && d) return oe(t, r, E);
                            if (r.largeWidth && u) return oe(t, r, E);
                            if (r.mediumWidth && c) return oe(t, r, E);
                            if (r.smallWidth && m) return oe(t, r, E);
                            if (r.extraSmallWidth && g) return oe(t, r, E);
                            if (
                                !(
                                    r.extraLargeWidth ||
                                    r.largeWidth ||
                                    r.mediumWidth ||
                                    r.smallWidth ||
                                    r.extraSmallWidth
                                )
                            ) {
                                if (r.extraLargeHeight && h) return t;
                                if (r.largeHeight && v) return t;
                                if (r.mediumHeight && f) return t;
                                if (r.smallHeight && w) return t;
                                if (r.extraSmallHeight && x) return t;
                            }
                        }
                        return null;
                    };
                (we.defaultProps = {
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
                }),
                    (0, te.memo)(we);
                const xe = ({ children: e }) => {
                    const t = (0, te.useContext)(ve),
                        r = (0, te.useState)(t),
                        a = r[0],
                        n = r[1],
                        i = (0, te.useCallback)((e, t) => {
                            const r = ee.view.pxToRem(e),
                                a = ee.view.pxToRem(t);
                            n(Object.assign({ width: r, height: a }, ue(r, a, se)));
                        }, []),
                        l = (0, te.useCallback)(() => {
                            const e = ee.client.getSize('px');
                            i(e.width, e.height);
                        }, [i]);
                    ((e) => {
                        const t = (0, te.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        ee.client.events.on('clientResized', i), ee.client.events.on('self.onScaleUpdated', l);
                    }),
                        (0, te.useEffect)(
                            () => () => {
                                ee.client.events.off('clientResized', i),
                                    ee.client.events.off('self.onScaleUpdated', l);
                            },
                            [i, l],
                        );
                    const o = (0, te.useMemo)(() => Object.assign({}, a), [a]);
                    return re().createElement(ve.Provider, { value: o }, e);
                };
                var Ee = r(926),
                    pe = r.n(Ee);
                let be, Se, Le;
                !(function (e) {
                    (e[(e.ExtraSmall = se.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = se.small.width)] = 'Small'),
                        (e[(e.Medium = se.medium.width)] = 'Medium'),
                        (e[(e.Large = se.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = se.extraLarge.width)] = 'ExtraLarge');
                })(be || (be = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = se.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = se.small.width)] = 'Small'),
                            (e[(e.Medium = se.medium.width)] = 'Medium'),
                            (e[(e.Large = se.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = se.extraLarge.width)] = 'ExtraLarge');
                    })(Se || (Se = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = se.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = se.small.height)] = 'Small'),
                            (e[(e.Medium = se.medium.height)] = 'Medium'),
                            (e[(e.Large = se.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = se.extraLarge.height)] = 'ExtraLarge');
                    })(Le || (Le = {}));
                const _e = ['children', 'className'];
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                const He = {
                        [Se.ExtraSmall]: '',
                        [Se.Small]: pe().SMALL_WIDTH,
                        [Se.Medium]: `${pe().SMALL_WIDTH} ${pe().MEDIUM_WIDTH}`,
                        [Se.Large]: `${pe().SMALL_WIDTH} ${pe().MEDIUM_WIDTH} ${pe().LARGE_WIDTH}`,
                        [Se.ExtraLarge]: `${pe().SMALL_WIDTH} ${pe().MEDIUM_WIDTH} ${pe().LARGE_WIDTH} ${pe().EXTRA_LARGE_WIDTH}`,
                    },
                    Ae = {
                        [Le.ExtraSmall]: '',
                        [Le.Small]: pe().SMALL_HEIGHT,
                        [Le.Medium]: `${pe().SMALL_HEIGHT} ${pe().MEDIUM_HEIGHT}`,
                        [Le.Large]: `${pe().SMALL_HEIGHT} ${pe().MEDIUM_HEIGHT} ${pe().LARGE_HEIGHT}`,
                        [Le.ExtraLarge]: `${pe().SMALL_HEIGHT} ${pe().MEDIUM_HEIGHT} ${pe().LARGE_HEIGHT} ${pe().EXTRA_LARGE_HEIGHT}`,
                    },
                    Te = {
                        [be.ExtraSmall]: '',
                        [be.Small]: pe().SMALL,
                        [be.Medium]: `${pe().SMALL} ${pe().MEDIUM}`,
                        [be.Large]: `${pe().SMALL} ${pe().MEDIUM} ${pe().LARGE}`,
                        [be.ExtraLarge]: `${pe().SMALL} ${pe().MEDIUM} ${pe().LARGE} ${pe().EXTRA_LARGE}`,
                    },
                    Me = (e) => {
                        let t = e.children,
                            r = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n;
                            })(e, _e);
                        const n = (() => {
                                const e = (0, te.useContext)(ve),
                                    t = e.width,
                                    r = e.height,
                                    a = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return be.ExtraLarge;
                                            case e.large:
                                                return be.Large;
                                            case e.medium:
                                                return be.Medium;
                                            case e.small:
                                                return be.Small;
                                            case e.extraSmall:
                                                return be.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), be.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    n = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return Se.ExtraLarge;
                                            case e.largeWidth:
                                                return Se.Large;
                                            case e.mediumWidth:
                                                return Se.Medium;
                                            case e.smallWidth:
                                                return Se.Small;
                                            case e.extraSmallWidth:
                                                return Se.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), Se.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return Le.ExtraLarge;
                                            case e.largeHeight:
                                                return Le.Large;
                                            case e.mediumHeight:
                                                return Le.Medium;
                                            case e.smallHeight:
                                                return Le.Small;
                                            case e.extraSmallHeight:
                                                return Le.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), Le.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: a,
                                    mediaWidth: n,
                                    mediaHeight: i,
                                    remScreenWidth: t,
                                    remScreenHeight: r,
                                };
                            })(),
                            i = n.mediaWidth,
                            l = n.mediaHeight,
                            o = n.mediaSize;
                        return re().createElement('div', ye({ className: s()(r, He[i], Ae[l], Te[o]) }, a), t);
                    },
                    Re = ['children'],
                    We = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n;
                            })(e, Re);
                        return re().createElement(xe, null, re().createElement(Me, r, t));
                    };
                var Ie = r(493),
                    Oe = r.n(Ie),
                    Pe = r(3403);
                function De() {
                    return !1;
                }
                console.log;
                var $e = r(9174);
                function ke(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const Ge = (e) => (0 === e ? window : window.subViews.get(e)),
                    je = ((e, t) => {
                        const r = (0, te.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: n, mocks: i }) {
                                const l = (0, te.useRef)([]),
                                    o = (e, r, a) => {
                                        var n;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = Ge,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = n.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const n = r(t),
                                                        i = a.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (r, i) => {
                                                        const o = 'string' == typeof i ? `${a}.${i}` : a,
                                                            s = ee.view.addModelObserver(o, t, !0);
                                                        return n.set(s, r), e && r(l(i)), s;
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
                                                        for (
                                                            var e,
                                                                r = (function (e, t) {
                                                                    var r =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (r) return (r = r.call(e)).next.bind(r);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (r = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return ke(e, t);
                                                                                var r = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === r &&
                                                                                        e.constructor &&
                                                                                        (r = e.constructor.name),
                                                                                    'Map' === r || 'Set' === r
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === r ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                r,
                                                                                            )
                                                                                          ? ke(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        r && (e = r);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(e = r()).done;

                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            o =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(t)) : o.readByPath(t),
                                            d = (e) => l.current.push(e),
                                            u = (({ observableModel: e }) => ({
                                                root: e.object(),
                                                strengths: e.array('parameters.strengths', []),
                                                weaknesses: e.array('parameters.weaknesses', []),
                                            }))({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const a = null != r ? r : s(t),
                                                            n = $e.LO.box(a, { equals: De });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, $e.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const a = null != r ? r : s(t),
                                                            n = $e.LO.box(a, { equals: De });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, $e.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const a = s(r);
                                                        if (Array.isArray(t)) {
                                                            const n = t.reduce(
                                                                (e, t) => ((e[t] = $e.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, $e.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                n[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = t,
                                                                i = Object.entries(n),
                                                                l = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = $e.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, $e.aD)((e) => {
                                                                            i.forEach(([t, r]) => {
                                                                                l[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                l
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            c = { mode: e, model: u, externalModel: o, cleanup: d };
                                        return {
                                            model: u,
                                            controls: 'mocks' === e && a ? a.controls(c) : t(c),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    s = (0, te.useRef)(!1),
                                    d = (0, te.useState)(e),
                                    u = d[0],
                                    c = d[1],
                                    m = (0, te.useState)(() => o(e, a, i)),
                                    g = m[0],
                                    h = m[1];
                                return (
                                    (0, te.useEffect)(() => {
                                        s.current ? h(o(u, a, i)) : (s.current = !0);
                                    }, [i, u, a]),
                                    (0, te.useEffect)(() => {
                                        c(e);
                                    }, [e]),
                                    (0, te.useEffect)(
                                        () => () => {
                                            g.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [g],
                                    ),
                                    re().createElement(r.Provider, { value: g }, n)
                                );
                            },
                            () => (0, te.useContext)(r),
                        ];
                    })(0, function () {}),
                    ze = je[0],
                    Ne = je[1],
                    Ce =
                        R.images.fun_random.gui.maps.icons.feature.asset_packs.sub_modes.auto_shoot_guns
                            .strengths_weakness,
                    Ue = R.strings.fun_random.strengths_weaknesses,
                    Be = ({ parameterName: e, icon: t, kind: r, className: a, classNames: n }) =>
                        e && t && r
                            ? re().createElement(
                                  'div',
                                  { className: s()('Advantage_base_66', a) },
                                  re().createElement('span', {
                                      className: s()('Advantage_icon_0f', null == n ? void 0 : n.icon),
                                      style: { backgroundImage: `url('${Ce.$dyn(r).$dyn(t)}')` },
                                  }),
                                  re().createElement(
                                      'span',
                                      { className: s()('Advantage_text_c2', null == n ? void 0 : n.text) },
                                      Ue.$dyn(r).$dyn(e),
                                  ),
                              )
                            : null,
                    Ve = (0, Pe.Pi)(({ kind: e }) => {
                        const t = Ne().model,
                            r = 'strength' === e ? t.strengths : t.weaknesses;
                        return re().createElement(
                            'div',
                            { className: 'Advantages_overlay_21' },
                            ((a = r.get()),
                            (n = (t) => {
                                const r = t.icon,
                                    a = t.parameterName;
                                return re().createElement(Be, {
                                    key: a,
                                    icon: r,
                                    parameterName: a,
                                    kind: e,
                                    className: 'Advantages_base_26',
                                    classNames: { icon: 'Advantages_icon_45', text: 'Advantages_text_19' },
                                });
                            }),
                            Array.isArray(a) ? a.map(n) : a.map((e, t, r) => n(null == e ? void 0 : e.value))),
                        );
                        var a, n;
                    });
                let Fe;
                !(function (e) {
                    (e.READY = 'ready'), (e.NOT_READY = 'not_ready'), (e.IN_BATTLE = 'in_battle');
                })(Fe || (Fe = {}));
                const qe = R.strings.fun_random.vehicle_tooltip,
                    Xe = R.images.gui.maps.icons.flags.c_160x100,
                    Qe = {
                        [Fe.READY]: 'App_status__ready_88',
                        [Fe.NOT_READY]: 'App_status__notReady_5b',
                        [Fe.IN_BATTLE]: 'App_status__inBattle_24',
                    },
                    Ye = (0, Pe.Pi)(() => {
                        const e = Ne().model.root.get(),
                            t = e.description,
                            r = e.status,
                            a = e.nationName,
                            n = e.vehicleName,
                            i = { backgroundImage: `url('${Xe.$dyn(a)}')` };
                        return re().createElement(
                            'div',
                            { className: 'App_base_0a' },
                            re().createElement('div', { className: 'App_background_17', style: i }),
                            re().createElement('div', { className: 'App_title_69' }, n),
                            re().createElement('div', { className: 'App_text_7b' }, qe.subtitle()),
                            re().createElement(
                                'div',
                                { className: 'App_description_f1' },
                                qe.vehicle.description.$dyn(t),
                            ),
                            re().createElement(
                                'div',
                                { className: 'App_advantages_75' },
                                re().createElement(Ve, { kind: 'strength' }),
                                re().createElement(Ve, { kind: 'weakness' }),
                            ),
                            re().createElement('div', { className: 'App_separator_51' }),
                            re().createElement('div', { className: s()('App_status_31', Qe[r]) }, qe.status.$dyn(r)),
                        );
                    });
                engine.whenReady.then(() => {
                    Oe().render(
                        re().createElement(
                            We,
                            null,
                            re().createElement(ze, null, re().createElement(le, null, re().createElement(Ye, null))),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
        },
        r = {};
    function a(e) {
        var n = r[e];
        if (void 0 !== n) return n.exports;
        var i = (r[e] = { exports: {} });
        return t[e](i, i.exports, a), i.exports;
    }
    (a.m = t),
        (e = []),
        (a.O = (t, r, n, i) => {
            if (!r) {
                var l = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [r, n, i] = e[u], o = !0, s = 0; s < r.length; s++)
                        (!1 & i || l >= i) && Object.keys(a.O).every((e) => a.O[e](r[s]))
                            ? r.splice(s--, 1)
                            : ((o = !1), i < l && (l = i));
                    if (o) {
                        e.splice(u--, 1);
                        var d = n();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [r, n, i];
        }),
        (a.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return a.d(t, { a: t }), t;
        }),
        (a.d = (e, t) => {
            for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (a.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (a.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (a.j = 783),
        (() => {
            var e = { 783: 0 };
            a.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var n,
                        i,
                        [l, o, s] = r,
                        d = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (n in o) a.o(o, n) && (a.m[n] = o[n]);
                        if (s) var u = s(a);
                    }
                    for (t && t(r); d < l.length; d++) (i = l[d]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return a.O(u);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var n = a.O(void 0, [503], () => a(3267));
    n = a.O(n);
})();
