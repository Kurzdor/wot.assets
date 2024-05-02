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
            773: (e, t, r) => {
                'use strict';
                var i = {};
                r.r(i),
                    r.d(i, { mouse: () => f, off: () => _, on: () => p, onResize: () => u, onScaleUpdated: () => g });
                var a = {};
                r.r(a),
                    r.d(a, {
                        events: () => i,
                        getMouseGlobalPosition: () => w,
                        getSize: () => v,
                        graphicsQuality: () => E,
                    });
                var l = {};
                r.r(l), r.d(l, { getBgUrl: () => x, getTextureUrl: () => H });
                var n = {};
                r.r(n),
                    r.d(n, {
                        addModelObserver: () => B,
                        addPreloadTexture: () => C,
                        children: () => l,
                        displayStatus: () => b,
                        displayStatusIs: () => K,
                        events: () => S,
                        extraSize: () => X,
                        forceTriggerMouseMove: () => j,
                        freezeTextureBeforeResize: () => P,
                        getBrowserTexturePath: () => M,
                        getDisplayStatus: () => U,
                        getScale: () => I,
                        getSize: () => V,
                        getViewGlobalPosition: () => O,
                        isEventHandled: () => $,
                        isFocused: () => N,
                        pxToRem: () => D,
                        remToPx: () => G,
                        resize: () => F,
                        sendEvent: () => L,
                        setAnimateWindow: () => k,
                        setEventHandled: () => z,
                        setInputPaddingsRem: () => W,
                        setSidePaddingsRem: () => T,
                        whenTutorialReady: () => q,
                    });
                var o = r(179),
                    s = r.n(o);
                const c = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                function m(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function d(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const u = m('clientResized'),
                    g = m('self.onScaleUpdated'),
                    p = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    h = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') },
                    f = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && d(!1);
                        }
                        function r() {
                            e.enabled && d(!0);
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
                                : d(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const l = `mouse${t}`,
                                            n = h[t]((e) => r([e, 'outside']));
                                        function o(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(l, o),
                                            i(),
                                            () => {
                                                a &&
                                                    (n(),
                                                    window.removeEventListener(l, o),
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
                                e.enabled && d(!0);
                            },
                            disableOutside() {
                                e.enabled && d(!1);
                            },
                        });
                    })();
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function H(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function x(e, t, r) {
                    return `url(${H(e, t, r)})`;
                }
                const b = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    S = {
                        onTextureFrozen: m('self.onTextureFrozen'),
                        onTextureReady: m('self.onTextureReady'),
                        onDomBuilt: m('self.onDomBuilt'),
                        onLoaded: m('self.onLoaded'),
                        onDisplayChanged: m('self.onShowingStatusChanged'),
                        onFocusUpdated: m('self.onFocusChanged'),
                        children: {
                            onAdded: m('children.onAdded'),
                            onLoaded: m('children.onLoaded'),
                            onRemoved: m('children.onRemoved'),
                            onAttached: m('children.onAttached'),
                            onTextureReady: m('children.onTextureReady'),
                            onRequestPosition: m('children.requestPosition'),
                        },
                    },
                    A = ['args'],
                    y = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                l = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        i,
                                        a = {},
                                        l = Object.keys(e);
                                    for (i = 0; i < l.length; i++) (r = l[i]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                    return a;
                                })(t, A);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, l, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, l));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var i;
                    },
                    L = {
                        close(e) {
                            y('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            y(64);
                        },
                        move(e) {
                            y(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function C(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function W(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function M(e, t, r, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, i);
                }
                function B(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function T(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function V(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function O(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: G(t.x), y: G(t.y) };
                }
                function P() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function I() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function G(e) {
                    return viewEnv.remToPx(e);
                }
                function k(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function N() {
                    return viewEnv.isFocused();
                }
                function z() {
                    return viewEnv.setEventHandled();
                }
                function $() {
                    return viewEnv.isEventHandled();
                }
                function j() {
                    viewEnv.forceTriggerMouseMove();
                }
                function U() {
                    return viewEnv.getShowingStatus();
                }
                const K = Object.keys(b).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === b[t]), e), {}),
                    X = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    q = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : S.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Q = { view: n, client: a },
                    J = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var Y;
                function Z(e, t, r) {
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
                        l = Math.min(i, a);
                    return {
                        extraLarge: l === r.extraLarge.weight,
                        large: l === r.large.weight,
                        medium: l === r.medium.weight,
                        small: l === r.small.weight,
                        extraSmall: l === r.extraSmall.weight,
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
                })(Y || (Y = {}));
                const ee = Q.client.getSize('rem'),
                    te = ee.width,
                    re = ee.height,
                    ie = Object.assign({ width: te, height: re }, Z(te, re, J)),
                    ae = (0, o.createContext)(ie),
                    le = ['children'],
                    ne = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    i,
                                    a = {},
                                    l = Object.keys(e);
                                for (i = 0; i < l.length; i++) (r = l[i]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, le);
                        const i = (0, o.useContext)(ae),
                            a = i.extraLarge,
                            l = i.large,
                            n = i.medium,
                            s = i.small,
                            m = i.extraSmall,
                            d = i.extraLargeWidth,
                            u = i.largeWidth,
                            g = i.mediumWidth,
                            p = i.smallWidth,
                            _ = i.extraSmallWidth,
                            h = i.extraLargeHeight,
                            f = i.largeHeight,
                            v = i.mediumHeight,
                            w = i.smallHeight,
                            E = i.extraSmallHeight,
                            H = { extraLarge: h, large: f, medium: v, small: w, extraSmall: E };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && a) return t;
                            if (r.large && l) return t;
                            if (r.medium && n) return t;
                            if (r.small && s) return t;
                            if (r.extraSmall && m) return t;
                        } else {
                            if (r.extraLargeWidth && d) return c(t, r, H);
                            if (r.largeWidth && u) return c(t, r, H);
                            if (r.mediumWidth && g) return c(t, r, H);
                            if (r.smallWidth && p) return c(t, r, H);
                            if (r.extraSmallWidth && _) return c(t, r, H);
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
                                if (r.largeHeight && f) return t;
                                if (r.mediumHeight && v) return t;
                                if (r.smallHeight && w) return t;
                                if (r.extraSmallHeight && E) return t;
                            }
                        }
                        return null;
                    };
                (ne.defaultProps = {
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
                    (0, o.memo)(ne);
                const oe = ({ children: e }) => {
                    const t = (0, o.useContext)(ae),
                        r = (0, o.useState)(t),
                        i = r[0],
                        a = r[1],
                        l = (0, o.useCallback)((e, t) => {
                            const r = Q.view.pxToRem(e),
                                i = Q.view.pxToRem(t);
                            a(Object.assign({ width: r, height: i }, Z(r, i, J)));
                        }, []),
                        n = (0, o.useCallback)(() => {
                            const e = Q.client.getSize('px');
                            l(e.width, e.height);
                        }, [l]);
                    ((e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        Q.client.events.on('clientResized', l), Q.client.events.on('self.onScaleUpdated', n);
                    }),
                        (0, o.useEffect)(
                            () => () => {
                                Q.client.events.off('clientResized', l), Q.client.events.off('self.onScaleUpdated', n);
                            },
                            [l, n],
                        );
                    const c = (0, o.useMemo)(() => Object.assign({}, i), [i]);
                    return s().createElement(ae.Provider, { value: c }, e);
                };
                var se = r(483),
                    ce = r.n(se),
                    me = r(926),
                    de = r.n(me);
                let ue, ge, pe;
                !(function (e) {
                    (e[(e.ExtraSmall = J.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = J.small.width)] = 'Small'),
                        (e[(e.Medium = J.medium.width)] = 'Medium'),
                        (e[(e.Large = J.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = J.extraLarge.width)] = 'ExtraLarge');
                })(ue || (ue = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = J.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = J.small.width)] = 'Small'),
                            (e[(e.Medium = J.medium.width)] = 'Medium'),
                            (e[(e.Large = J.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = J.extraLarge.width)] = 'ExtraLarge');
                    })(ge || (ge = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = J.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = J.small.height)] = 'Small'),
                            (e[(e.Medium = J.medium.height)] = 'Medium'),
                            (e[(e.Large = J.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = J.extraLarge.height)] = 'ExtraLarge');
                    })(pe || (pe = {}));
                const _e = ['children', 'className'];
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
                const fe = {
                        [ge.ExtraSmall]: '',
                        [ge.Small]: de().SMALL_WIDTH,
                        [ge.Medium]: `${de().SMALL_WIDTH} ${de().MEDIUM_WIDTH}`,
                        [ge.Large]: `${de().SMALL_WIDTH} ${de().MEDIUM_WIDTH} ${de().LARGE_WIDTH}`,
                        [ge.ExtraLarge]: `${de().SMALL_WIDTH} ${de().MEDIUM_WIDTH} ${de().LARGE_WIDTH} ${de().EXTRA_LARGE_WIDTH}`,
                    },
                    ve = {
                        [pe.ExtraSmall]: '',
                        [pe.Small]: de().SMALL_HEIGHT,
                        [pe.Medium]: `${de().SMALL_HEIGHT} ${de().MEDIUM_HEIGHT}`,
                        [pe.Large]: `${de().SMALL_HEIGHT} ${de().MEDIUM_HEIGHT} ${de().LARGE_HEIGHT}`,
                        [pe.ExtraLarge]: `${de().SMALL_HEIGHT} ${de().MEDIUM_HEIGHT} ${de().LARGE_HEIGHT} ${de().EXTRA_LARGE_HEIGHT}`,
                    },
                    we = {
                        [ue.ExtraSmall]: '',
                        [ue.Small]: de().SMALL,
                        [ue.Medium]: `${de().SMALL} ${de().MEDIUM}`,
                        [ue.Large]: `${de().SMALL} ${de().MEDIUM} ${de().LARGE}`,
                        [ue.ExtraLarge]: `${de().SMALL} ${de().MEDIUM} ${de().LARGE} ${de().EXTRA_LARGE}`,
                    },
                    Ee = (e) => {
                        let t = e.children,
                            r = e.className,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    i,
                                    a = {},
                                    l = Object.keys(e);
                                for (i = 0; i < l.length; i++) (r = l[i]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, _e);
                        const a = (() => {
                                const e = (0, o.useContext)(ae),
                                    t = e.width,
                                    r = e.height,
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return ue.ExtraLarge;
                                            case e.large:
                                                return ue.Large;
                                            case e.medium:
                                                return ue.Medium;
                                            case e.small:
                                                return ue.Small;
                                            case e.extraSmall:
                                                return ue.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), ue.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    a = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return ge.ExtraLarge;
                                            case e.largeWidth:
                                                return ge.Large;
                                            case e.mediumWidth:
                                                return ge.Medium;
                                            case e.smallWidth:
                                                return ge.Small;
                                            case e.extraSmallWidth:
                                                return ge.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), ge.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    l = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return pe.ExtraLarge;
                                            case e.largeHeight:
                                                return pe.Large;
                                            case e.mediumHeight:
                                                return pe.Medium;
                                            case e.smallHeight:
                                                return pe.Small;
                                            case e.extraSmallHeight:
                                                return pe.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), pe.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: i,
                                    mediaWidth: a,
                                    mediaHeight: l,
                                    remScreenWidth: t,
                                    remScreenHeight: r,
                                };
                            })(),
                            l = a.mediaWidth,
                            n = a.mediaHeight,
                            c = a.mediaSize;
                        return s().createElement('div', he({ className: ce()(r, fe[l], ve[n], we[c]) }, i), t);
                    },
                    He = ['children'],
                    xe = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    i,
                                    a = {},
                                    l = Object.keys(e);
                                for (i = 0; i < l.length; i++) (r = l[i]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, He);
                        return s().createElement(oe, null, s().createElement(Ee, r, t));
                    };
                var be = r(493),
                    Se = r.n(be),
                    Ae = r(282);
                const ye = {
                    cff_splash: 'CosmicBattleHelpViewApp_cff_splash_ad',
                    cff_splash_small: 'CosmicBattleHelpViewApp_cff_splash_small_5a',
                    cff_title: 'CosmicBattleHelpViewApp_cff_title_3e',
                    cff_heading: 'CosmicBattleHelpViewApp_cff_heading_e8',
                    cff_heading_small: 'CosmicBattleHelpViewApp_cff_heading_small_10',
                    cff_body: 'CosmicBattleHelpViewApp_cff_body_7d',
                    cff_emphasis: 'CosmicBattleHelpViewApp_cff_emphasis_bc',
                    cff_emphasis_small: 'CosmicBattleHelpViewApp_cff_emphasis_small_6e',
                    cff_body_small: 'CosmicBattleHelpViewApp_cff_body_small_ee',
                    cff_player: 'CosmicBattleHelpViewApp_cff_player_03',
                    cff_decorative_title: 'CosmicBattleHelpViewApp_cff_decorative_title_56',
                    cff_decorative_body: 'CosmicBattleHelpViewApp_cff_decorative_body_75',
                    boxImage: 'CosmicBattleHelpViewApp_boxImage_e5',
                    transparent: 'CosmicBattleHelpViewApp_transparent_f7',
                    fade_in: 'CosmicBattleHelpViewApp_fade_in_aa',
                    fade_from_left: 'CosmicBattleHelpViewApp_fade_from_left_85',
                    fade_from_bottom: 'CosmicBattleHelpViewApp_fade_from_bottom_8b',
                    fade_out: 'CosmicBattleHelpViewApp_fade_out_7f',
                    fade_to_left: 'CosmicBattleHelpViewApp_fade_to_left_11',
                    fade_to_bottom: 'CosmicBattleHelpViewApp_fade_to_bottom_95',
                    delay_100: 'CosmicBattleHelpViewApp_delay_100_d2',
                    delay_200: 'CosmicBattleHelpViewApp_delay_200_07',
                    delay_300: 'CosmicBattleHelpViewApp_delay_300_a5',
                    delay_400: 'CosmicBattleHelpViewApp_delay_400_f6',
                    delay_500: 'CosmicBattleHelpViewApp_delay_500_0d',
                    delay_600: 'CosmicBattleHelpViewApp_delay_600_d6',
                    delay_700: 'CosmicBattleHelpViewApp_delay_700_4c',
                    delay_800: 'CosmicBattleHelpViewApp_delay_800_88',
                    delay_1000: 'CosmicBattleHelpViewApp_delay_1000_9a',
                    delay_1250: 'CosmicBattleHelpViewApp_delay_1250_99',
                    delay_1500: 'CosmicBattleHelpViewApp_delay_1500_da',
                    delay_3000: 'CosmicBattleHelpViewApp_delay_3000_95',
                    glitch: 'CosmicBattleHelpViewApp_glitch_7c',
                    CFF_MAIN: 'CosmicBattleHelpViewApp_CFF_MAIN_32',
                    CFF_SUPPORT: 'CosmicBattleHelpViewApp_CFF_SUPPORT_b4',
                    CFF_DONE: 'CosmicBattleHelpViewApp_CFF_DONE_f3',
                    CFF_PHASE: 'CosmicBattleHelpViewApp_CFF_PHASE_65',
                    CFF_IMPORTANT: 'CosmicBattleHelpViewApp_CFF_IMPORTANT_a2',
                    CFF_HERO: 'CosmicBattleHelpViewApp_CFF_HERO_27',
                    CFF_ATTENTION: 'CosmicBattleHelpViewApp_CFF_ATTENTION_c6',
                    CFF_BACKGROUND: 'CosmicBattleHelpViewApp_CFF_BACKGROUND_3a',
                    CFF_MINE: 'CosmicBattleHelpViewApp_CFF_MINE_5f',
                    CFF_VORTEX: 'CosmicBattleHelpViewApp_CFF_VORTEX_00',
                    CFF_BARRIER: 'CosmicBattleHelpViewApp_CFF_BARRIER_7c',
                    CFF_JUMP: 'CosmicBattleHelpViewApp_CFF_JUMP_be',
                    base: 'CosmicBattleHelpViewApp_base_1d',
                    titleWrapper: 'CosmicBattleHelpViewApp_titleWrapper_c3',
                    titleWrapper_title: 'CosmicBattleHelpViewApp_titleWrapper_title_d7',
                    titleWrapper_dots: 'CosmicBattleHelpViewApp_titleWrapper_dots_12',
                    titleWrapper_dot1: 'CosmicBattleHelpViewApp_titleWrapper_dot1_4f',
                    titleWrapper_dot2: 'CosmicBattleHelpViewApp_titleWrapper_dot2_4c',
                    titleWrapper_dot3: 'CosmicBattleHelpViewApp_titleWrapper_dot3_73',
                    titleWrapper_dot4: 'CosmicBattleHelpViewApp_titleWrapper_dot4_96',
                    slide1: 'CosmicBattleHelpViewApp_slide1_10',
                    slide2: 'CosmicBattleHelpViewApp_slide2_35',
                    slide3: 'CosmicBattleHelpViewApp_slide3_ec',
                    slide4: 'CosmicBattleHelpViewApp_slide4_ae',
                    scoringWrapper: 'CosmicBattleHelpViewApp_scoringWrapper_17',
                    scoringWrapper_group: 'CosmicBattleHelpViewApp_scoringWrapper_group_ac',
                    scoringWrapper_group_background: 'CosmicBattleHelpViewApp_scoringWrapper_group_background_2b',
                    scoringWrapper_group__importantOther:
                        'CosmicBattleHelpViewApp_scoringWrapper_group__importantOther_43',
                    scoringWrapper_group__importantKill:
                        'CosmicBattleHelpViewApp_scoringWrapper_group__importantKill_14',
                    glitch1: 'CosmicBattleHelpViewApp_glitch1_ae',
                    glitch2: 'CosmicBattleHelpViewApp_glitch2_b3',
                    glitch3: 'CosmicBattleHelpViewApp_glitch3_2e',
                };
                let Le;
                function Ce(e) {
                    return e;
                }
                function We() {
                    return !1;
                }
                !(function (e) {
                    (e.Ram = 'ram'),
                        (e.Shot = 'shot'),
                        (e.AbilityHit = 'abilityHit'),
                        (e.Kill = 'kill'),
                        (e.FragmentHolderKill = 'fragmentHolderKill'),
                        (e.KillAssist = 'killAssist'),
                        (e.AbilityPickup = 'abilityPickup'),
                        (e.FragmentPickup = 'fragmentPickup'),
                        (e.FragmentCarrying = 'fragmentCarrying'),
                        (e.FragmentDelivering = 'fragmentDelivering'),
                        (e.Evacuation = 'evacuation');
                })(Le || (Le = {})),
                    console.log;
                var Me = r(915);
                function Be(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
                    return i;
                }
                const Te = (e) => (0 === e ? window : window.subViews.get(e));
                var Ve = r(517);
                const Re = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: t, children: i, mocks: a }) {
                                const l = (0, o.useRef)([]),
                                    n = (e, t, r) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = Te,
                                                context: i = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function l(e, t = 0) {
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
                                                const n = (e) => {
                                                    const a = r(t),
                                                        l = i.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? l
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, l);
                                                };
                                                return {
                                                    subscribe: (r, l) => {
                                                        const o = 'string' == typeof l ? `${i}.${l}` : i,
                                                            s = Q.view.addModelObserver(o, t, !0);
                                                        return a.set(s, r), e && r(n(l)), s;
                                                    },
                                                    readByPath: n,
                                                    createCallback: (e, t) => {
                                                        const r = n(t);
                                                        return (...t) => {
                                                            r(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = n(e);
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
                                                                                    return Be(e, t);
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
                                                                                          ? Be(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        r && (e = r);
                                                                        var i = 0;
                                                                        return function () {
                                                                            return i >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[i++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(e = r()).done;

                                                        )
                                                            l(e.value, t);
                                                    },
                                                    unsubscribe: l,
                                                };
                                            })(t),
                                            n =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == r ? void 0 : r.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            o = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : n.readByPath(t),
                                            s = (e) => l.current.push(e),
                                            c = (({ observableModel: e }) => {
                                                const t = { scoring: e.array('scoring', []) },
                                                    r = (0, Ve.computedFn)(() => {
                                                        return (
                                                            (e = t.scoring.get()),
                                                            (r = Ce),
                                                            Array.isArray(e)
                                                                ? e.map(r)
                                                                : e.map((e, t, i) =>
                                                                      r(null == e ? void 0 : e.value, t, i),
                                                                  )
                                                        );
                                                        var e, r;
                                                    });
                                                return Object.assign({}, t, { computes: { getScoring: r } });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: n,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const i = null != r ? r : o(t),
                                                            a = Me.observable.box(i, { equals: We });
                                                        return (
                                                            'real' === e &&
                                                                n.subscribe(
                                                                    (0, Me.action)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const i = null != r ? r : o(t),
                                                            a = Me.observable.box(i, { equals: We });
                                                        return (
                                                            'real' === e &&
                                                                n.subscribe(
                                                                    (0, Me.action)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const i = o(r);
                                                        if (Array.isArray(t)) {
                                                            const a = t.reduce(
                                                                (e, t) => ((e[t] = Me.observable.box(i[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    n.subscribe(
                                                                        (0, Me.action)((e) => {
                                                                            t.forEach((t) => {
                                                                                a[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = t,
                                                                l = Object.entries(a),
                                                                o = l.reduce(
                                                                    (e, [t, r]) => (
                                                                        (e[r] = Me.observable.box(i[t], {})), e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    n.subscribe(
                                                                        (0, Me.action)((e) => {
                                                                            l.forEach(([t, r]) => {
                                                                                o[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: s,
                                            }),
                                            m = { mode: e, model: c, externalModel: n, cleanup: s };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && r ? r.controls(m) : {},
                                            externalModel: n,
                                            mode: e,
                                        };
                                    },
                                    c = (0, o.useRef)(!1),
                                    m = (0, o.useState)(e),
                                    d = m[0],
                                    u = m[1],
                                    g = (0, o.useState)(() => n(e, t, a)),
                                    p = g[0],
                                    _ = g[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        c.current ? _(n(d, t, a)) : (c.current = !0);
                                    }, [a, d, t]),
                                    (0, o.useEffect)(() => {
                                        u(e);
                                    }, [e]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            p.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [p],
                                    ),
                                    s().createElement(r.Provider, { value: p }, i)
                                );
                            },
                            () => (0, o.useContext)(r),
                        ];
                    })(),
                    Fe = Re[0],
                    Oe = Re[1],
                    Pe = {
                        [Le.Kill]: 'Scoring_scoring_kill_d9',
                        [Le.FragmentHolderKill]: 'Scoring_scoring_fragmentHolderKill_cf',
                        [Le.FragmentDelivering]: 'Scoring_scoring_fragmentDelivering_7c',
                        [Le.Evacuation]: 'Scoring_scoring_evacuation_ea',
                    },
                    Ie = ({ className: e, type: t, eventPoints: r }) =>
                        t === Le.FragmentCarrying
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: ce()('Scoring_scoring_18', Pe[t], e) },
                                  s().createElement('div', { className: 'Scoring_scoring_score_53' }, r),
                                  s().createElement(
                                      'div',
                                      { className: 'Scoring_scoring_text_08' },
                                      R.strings.cosmicEvent.battle.battleHelp[t](),
                                  ),
                              ),
                    De = {
                        importantOther: ye.scoringWrapper_group__importantOther,
                        importantKill: ye.scoringWrapper_group__importantKill,
                        other: ye.scoringWrapper_group__other,
                    },
                    Ge = (0, Ae.observer)(() => {
                        var e;
                        const t = Oe().model,
                            r = ((null == t || null == (e = t.computes) ? void 0 : e.getScoring()) || []).reduce(
                                (e, { type: t, eventPoints: r }) => (
                                    t === Le.Evacuation || t === Le.FragmentDelivering
                                        ? e.importantOther.push({ type: t, eventPoints: r })
                                        : t === Le.FragmentHolderKill || t === Le.Kill
                                          ? e.importantKill.push({ type: t, eventPoints: r })
                                          : e.other.push({ type: t, eventPoints: r }),
                                    e
                                ),
                                { importantOther: [], importantKill: [], other: [] },
                            );
                        Object.keys(r).forEach((e) => {
                            r[e].sort((e, t) => t.eventPoints - e.eventPoints);
                        });
                        const i = Object.entries(r).filter(([e]) => e.length > 0);
                        return s().createElement(
                            'div',
                            { className: ye.base },
                            s().createElement(
                                'div',
                                { className: ye.titleWrapper },
                                s().createElement(
                                    'div',
                                    { className: ye.titleWrapper_title },
                                    R.strings.cosmicEvent.battle.battleHelp.title(),
                                ),
                                s().createElement(
                                    'div',
                                    { className: ye.titleWrapper_dots },
                                    s().createElement('div', { className: ye.titleWrapper_dot1 }),
                                    s().createElement('div', { className: ye.titleWrapper_dot2 }),
                                    s().createElement('div', { className: ye.titleWrapper_dot3 }),
                                    s().createElement('div', { className: ye.titleWrapper_dot4 }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: ye.scoringWrapper },
                                i.map(([e, t]) =>
                                    s().createElement(
                                        'div',
                                        { key: e, className: ce()(ye.scoringWrapper_group, De[e]) },
                                        t.map(({ type: e, eventPoints: t }) =>
                                            s().createElement(Ie, { key: e, type: e, eventPoints: t }),
                                        ),
                                        s().createElement('div', { className: ye.scoringWrapper_group_background }),
                                    ),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    Se().render(
                        s().createElement(xe, null, s().createElement(Fe, null, s().createElement(Ge, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        r = {};
    function i(e) {
        var a = r[e];
        if (void 0 !== a) return a.exports;
        var l = (r[e] = { exports: {} });
        return t[e].call(l.exports, l, l.exports, i), l.exports;
    }
    (i.m = t),
        (e = []),
        (i.O = (t, r, a, l) => {
            if (!r) {
                var n = 1 / 0;
                for (m = 0; m < e.length; m++) {
                    for (var [r, a, l] = e[m], o = !0, s = 0; s < r.length; s++)
                        (!1 & l || n >= l) && Object.keys(i.O).every((e) => i.O[e](r[s]))
                            ? r.splice(s--, 1)
                            : ((o = !1), l < n && (n = l));
                    if (o) {
                        e.splice(m--, 1);
                        var c = a();
                        void 0 !== c && (t = c);
                    }
                }
                return t;
            }
            l = l || 0;
            for (var m = e.length; m > 0 && e[m - 1][2] > l; m--) e[m] = e[m - 1];
            e[m] = [r, a, l];
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
        (() => {
            var e = { 157: 0 };
            i.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var a,
                        l,
                        [n, o, s] = r,
                        c = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (a in o) i.o(o, a) && (i.m[a] = o[a]);
                        if (s) var m = s(i);
                    }
                    for (t && t(r); c < n.length; c++) (l = n[c]), i.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
                    return i.O(m);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var a = i.O(void 0, [503], () => i(773));
    a = i.O(a);
})();
