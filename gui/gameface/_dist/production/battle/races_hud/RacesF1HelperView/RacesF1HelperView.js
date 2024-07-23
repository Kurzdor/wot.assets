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
            341: (e, t, r) => {
                'use strict';
                var i = {};
                r.r(i), r.d(i, { mouse: () => c, onResize: () => g });
                var a = {};
                r.r(a),
                    r.d(a, {
                        events: () => i,
                        getMouseGlobalPosition: () => x,
                        getSize: () => v,
                        graphicsQuality: () => E,
                    });
                var n = {};
                r.r(n), r.d(n, { getBgUrl: () => f, getTextureUrl: () => w });
                var l = {};
                r.r(l),
                    r.d(l, {
                        addModelObserver: () => W,
                        addPreloadTexture: () => _,
                        children: () => n,
                        displayStatus: () => L,
                        displayStatusIs: () => V,
                        events: () => p,
                        extraSize: () => B,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => M,
                        getDisplayStatus: () => N,
                        getScale: () => O,
                        getSize: () => A,
                        getViewGlobalPosition: () => G,
                        isEventHandled: () => k,
                        isFocused: () => j,
                        pxToRem: () => P,
                        remToPx: () => z,
                        resize: () => I,
                        sendEvent: () => b,
                        setAnimateWindow: () => $,
                        setEventHandled: () => U,
                        setInputPaddingsRem: () => T,
                        setSidePaddingsRem: () => y,
                        whenTutorialReady: () => F,
                    });
                var d = r(6179),
                    m = r.n(d);
                const s = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                function o(e) {
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
                const g = o('clientResized'),
                    h = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && u(!1);
                        }
                        function r() {
                            e.enabled && u(!0);
                        }
                        function i() {
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
                        const a = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const n = `mouse${t}`,
                                            l = h[t]((e) => r([e, 'outside']));
                                        function d(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, d),
                                            i(),
                                            () => {
                                                a &&
                                                    (l(),
                                                    window.removeEventListener(n, d),
                                                    (e.listeners -= 1),
                                                    i(),
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
                                (e.enabled = !1), i();
                            },
                            enable() {
                                (e.enabled = !0), i();
                            },
                            enableOutside() {
                                e.enabled && u(!0);
                            },
                            disableOutside() {
                                e.enabled && u(!1);
                            },
                        });
                    })();
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function w(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function f(e, t, r) {
                    return `url(${w(e, t, r)})`;
                }
                const L = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    p = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    S = ['args'],
                    H = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        i,
                                        a = {},
                                        n = Object.keys(e);
                                    for (i = 0; i < n.length; i++) (r = n[i]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                    return a;
                                })(t, S);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, n, {
                                          arguments:
                                              ((i = a),
                                              Object.entries(i).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var i;
                    },
                    b = {
                        close(e) {
                            H('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            H(64);
                        },
                        move(e) {
                            H(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function _(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function T(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function M(e, t, r, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, i);
                }
                function W(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function y(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function I(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function G(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: z(t.x), y: z(t.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function O() {
                    return viewEnv.getScale();
                }
                function P(e) {
                    return viewEnv.pxToRem(e);
                }
                function z(e) {
                    return viewEnv.remToPx(e);
                }
                function $(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function j() {
                    return viewEnv.isFocused();
                }
                function U() {
                    return viewEnv.setEventHandled();
                }
                function k() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function N() {
                    return viewEnv.getShowingStatus();
                }
                const V = Object.keys(L).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === L[t]), e), {}),
                    B = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    F = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : p.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    X = { view: l, client: a },
                    Q = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var q;
                function J(e, t, r) {
                    const i = (function (e, t) {
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
                        n = Math.min(i, a);
                    return {
                        extraLarge: n === r.extraLarge.weight,
                        large: n === r.large.weight,
                        medium: n === r.medium.weight,
                        small: n === r.small.weight,
                        extraSmall: n === r.extraSmall.weight,
                        extraLargeWidth: i === r.extraLarge.weight,
                        largeWidth: i === r.large.weight,
                        mediumWidth: i === r.medium.weight,
                        smallWidth: i === r.small.weight,
                        extraSmallWidth: i === r.extraSmall.weight,
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
                })(q || (q = {}));
                const K = X.client.getSize('rem'),
                    Y = K.width,
                    Z = K.height,
                    ee = Object.assign({ width: Y, height: Z }, J(Y, Z, Q)),
                    te = (0, d.createContext)(ee),
                    re = ['children'],
                    ie = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    i,
                                    a = {},
                                    n = Object.keys(e);
                                for (i = 0; i < n.length; i++) (r = n[i]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, re);
                        const i = (0, d.useContext)(te),
                            a = i.extraLarge,
                            n = i.large,
                            l = i.medium,
                            m = i.small,
                            o = i.extraSmall,
                            u = i.extraLargeWidth,
                            g = i.largeWidth,
                            h = i.mediumWidth,
                            c = i.smallWidth,
                            v = i.extraSmallWidth,
                            x = i.extraLargeHeight,
                            E = i.largeHeight,
                            w = i.mediumHeight,
                            f = i.smallHeight,
                            L = i.extraSmallHeight,
                            p = { extraLarge: x, large: E, medium: w, small: f, extraSmall: L };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && a) return t;
                            if (r.large && n) return t;
                            if (r.medium && l) return t;
                            if (r.small && m) return t;
                            if (r.extraSmall && o) return t;
                        } else {
                            if (r.extraLargeWidth && u) return s(t, r, p);
                            if (r.largeWidth && g) return s(t, r, p);
                            if (r.mediumWidth && h) return s(t, r, p);
                            if (r.smallWidth && c) return s(t, r, p);
                            if (r.extraSmallWidth && v) return s(t, r, p);
                            if (
                                !(
                                    r.extraLargeWidth ||
                                    r.largeWidth ||
                                    r.mediumWidth ||
                                    r.smallWidth ||
                                    r.extraSmallWidth
                                )
                            ) {
                                if (r.extraLargeHeight && x) return t;
                                if (r.largeHeight && E) return t;
                                if (r.mediumHeight && w) return t;
                                if (r.smallHeight && f) return t;
                                if (r.extraSmallHeight && L) return t;
                            }
                        }
                        return null;
                    };
                (ie.defaultProps = {
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
                    (0, d.memo)(ie);
                const ae = (0, d.memo)(({ children: e }) => {
                    const t = (0, d.useContext)(te),
                        r = (0, d.useState)(t),
                        i = r[0],
                        a = r[1],
                        n = (0, d.useCallback)((e, t) => {
                            const r = X.view.pxToRem(e),
                                i = X.view.pxToRem(t);
                            a(Object.assign({ width: r, height: i }, J(r, i, Q)));
                        }, []);
                    ((e) => {
                        const t = (0, d.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        engine.on('clientResized', n);
                    }),
                        (0, d.useEffect)(() => () => engine.off('clientResized', n), [n]);
                    const l = (0, d.useMemo)(() => Object.assign({}, i), [i]);
                    return m().createElement(te.Provider, { value: l }, e);
                });
                var ne = r(6483),
                    le = r.n(ne),
                    de = r(926),
                    me = r.n(de);
                let se, oe, ue;
                !(function (e) {
                    (e[(e.ExtraSmall = Q.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = Q.small.width)] = 'Small'),
                        (e[(e.Medium = Q.medium.width)] = 'Medium'),
                        (e[(e.Large = Q.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = Q.extraLarge.width)] = 'ExtraLarge');
                })(se || (se = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = Q.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = Q.small.width)] = 'Small'),
                            (e[(e.Medium = Q.medium.width)] = 'Medium'),
                            (e[(e.Large = Q.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = Q.extraLarge.width)] = 'ExtraLarge');
                    })(oe || (oe = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = Q.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = Q.small.height)] = 'Small'),
                            (e[(e.Medium = Q.medium.height)] = 'Medium'),
                            (e[(e.Large = Q.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = Q.extraLarge.height)] = 'ExtraLarge');
                    })(ue || (ue = {}));
                const ge = ['children', 'className'];
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                                }
                                return e;
                            }),
                        he.apply(this, arguments)
                    );
                }
                const ce = {
                        [oe.ExtraSmall]: '',
                        [oe.Small]: me().SMALL_WIDTH,
                        [oe.Medium]: `${me().SMALL_WIDTH} ${me().MEDIUM_WIDTH}`,
                        [oe.Large]: `${me().SMALL_WIDTH} ${me().MEDIUM_WIDTH} ${me().LARGE_WIDTH}`,
                        [oe.ExtraLarge]: `${me().SMALL_WIDTH} ${me().MEDIUM_WIDTH} ${me().LARGE_WIDTH} ${me().EXTRA_LARGE_WIDTH}`,
                    },
                    ve = {
                        [ue.ExtraSmall]: '',
                        [ue.Small]: me().SMALL_HEIGHT,
                        [ue.Medium]: `${me().SMALL_HEIGHT} ${me().MEDIUM_HEIGHT}`,
                        [ue.Large]: `${me().SMALL_HEIGHT} ${me().MEDIUM_HEIGHT} ${me().LARGE_HEIGHT}`,
                        [ue.ExtraLarge]: `${me().SMALL_HEIGHT} ${me().MEDIUM_HEIGHT} ${me().LARGE_HEIGHT} ${me().EXTRA_LARGE_HEIGHT}`,
                    },
                    xe = {
                        [se.ExtraSmall]: '',
                        [se.Small]: me().SMALL,
                        [se.Medium]: `${me().SMALL} ${me().MEDIUM}`,
                        [se.Large]: `${me().SMALL} ${me().MEDIUM} ${me().LARGE}`,
                        [se.ExtraLarge]: `${me().SMALL} ${me().MEDIUM} ${me().LARGE} ${me().EXTRA_LARGE}`,
                    },
                    Ee = (e) => {
                        let t = e.children,
                            r = e.className,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    i,
                                    a = {},
                                    n = Object.keys(e);
                                for (i = 0; i < n.length; i++) (r = n[i]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, ge);
                        const a = (() => {
                                const e = (0, d.useContext)(te),
                                    t = e.width,
                                    r = e.height,
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return se.ExtraLarge;
                                            case e.large:
                                                return se.Large;
                                            case e.medium:
                                                return se.Medium;
                                            case e.small:
                                                return se.Small;
                                            case e.extraSmall:
                                                return se.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), se.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    a = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return oe.ExtraLarge;
                                            case e.largeWidth:
                                                return oe.Large;
                                            case e.mediumWidth:
                                                return oe.Medium;
                                            case e.smallWidth:
                                                return oe.Small;
                                            case e.extraSmallWidth:
                                                return oe.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), oe.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    n = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return ue.ExtraLarge;
                                            case e.largeHeight:
                                                return ue.Large;
                                            case e.mediumHeight:
                                                return ue.Medium;
                                            case e.smallHeight:
                                                return ue.Small;
                                            case e.extraSmallHeight:
                                                return ue.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), ue.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: i,
                                    mediaWidth: a,
                                    mediaHeight: n,
                                    remScreenWidth: t,
                                    remScreenHeight: r,
                                };
                            })(),
                            n = a.mediaWidth,
                            l = a.mediaHeight,
                            s = a.mediaSize;
                        return m().createElement('div', he({ className: le()(r, ce[n], ve[l], xe[s]) }, i), t);
                    },
                    we = ['children'],
                    fe = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    i,
                                    a = {},
                                    n = Object.keys(e);
                                for (i = 0; i < n.length; i++) (r = n[i]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, we);
                        return m().createElement(ae, null, m().createElement(Ee, r, t));
                    };
                var Le = r(493),
                    pe = r.n(Le);
                const Se = R.strings.races.battleHelper,
                    He = [
                        {
                            title: Se.cardTitle1(),
                            icon: R.images.races.gui.maps.icons.battle.helper.helperIcon1(),
                            description: Se.cardDescription1(),
                        },
                        {
                            title: Se.cardTitle2(),
                            icon: R.images.races.gui.maps.icons.battle.helper.helperIcon2(),
                            description: Se.cardDescription2(),
                        },
                        {
                            title: Se.cardTitle3(),
                            icon: R.images.races.gui.maps.icons.battle.helper.helperIcon3(),
                            description: Se.cardDescription3(),
                        },
                        {
                            title: Se.cardTitle4(),
                            icon: R.images.races.gui.maps.icons.battle.helper.helperIcon4(),
                            description: Se.cardDescription4(),
                        },
                    ],
                    be = () =>
                        m().createElement(
                            'div',
                            { className: 'App_base_a7' },
                            m().createElement(
                                'div',
                                { className: 'App_header_da' },
                                m().createElement('div', { className: 'App_headerTitle_7a' }, Se.header()),
                                m().createElement('div', { className: 'App_headerSubTitle_b3' }, Se.subHeader()),
                            ),
                            m().createElement(
                                'div',
                                { className: 'App_content_0e' },
                                He.map((e, t) =>
                                    m().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: le()('App_card_3e', !(t % 2) && 'App_cardRightMargin_ae'),
                                        },
                                        m().createElement(
                                            'div',
                                            { className: 'App_number_71' },
                                            m().createElement('div', { className: 'App_numberMask_4e' }),
                                            m().createElement('div', null, t + 1),
                                        ),
                                        m().createElement(
                                            'div',
                                            { className: 'App_cardContentWrapper_fe' },
                                            m().createElement('div', {
                                                className: 'App_image_e3',
                                                style: { backgroundImage: `url(${e.icon})` },
                                            }),
                                            m().createElement(
                                                'div',
                                                { className: 'App_description_c7' },
                                                m().createElement(
                                                    'div',
                                                    { className: 'App_descriptionTitle_05' },
                                                    e.title,
                                                ),
                                                m().createElement(
                                                    'div',
                                                    { className: 'App_descriptionSubTitle_4e' },
                                                    e.description,
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                engine.whenReady.then(() => {
                    pe().render(
                        m().createElement(fe, null, m().createElement(be, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        r = {};
    function i(e) {
        var a = r[e];
        if (void 0 !== a) return a.exports;
        var n = (r[e] = { exports: {} });
        return t[e](n, n.exports, i), n.exports;
    }
    (i.m = t),
        (e = []),
        (i.O = (t, r, a, n) => {
            if (!r) {
                var l = 1 / 0;
                for (o = 0; o < e.length; o++) {
                    for (var [r, a, n] = e[o], d = !0, m = 0; m < r.length; m++)
                        (!1 & n || l >= n) && Object.keys(i.O).every((e) => i.O[e](r[m]))
                            ? r.splice(m--, 1)
                            : ((d = !1), n < l && (l = n));
                    if (d) {
                        e.splice(o--, 1);
                        var s = a();
                        void 0 !== s && (t = s);
                    }
                }
                return t;
            }
            n = n || 0;
            for (var o = e.length; o > 0 && e[o - 1][2] > n; o--) e[o] = e[o - 1];
            e[o] = [r, a, n];
        }),
        (i.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return i.d(t, { a: t }), t;
        }),
        (i.d = (e, t) => {
            for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (i.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (i.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (i.j = 587),
        (() => {
            var e = { 587: 0 };
            i.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var a,
                        n,
                        [l, d, m] = r,
                        s = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (a in d) i.o(d, a) && (i.m[a] = d[a]);
                        if (m) var o = m(i);
                    }
                    for (t && t(r); s < l.length; s++) (n = l[s]), i.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return i.O(o);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var a = i.O(void 0, [503], () => i(341));
    a = i.O(a);
})();
