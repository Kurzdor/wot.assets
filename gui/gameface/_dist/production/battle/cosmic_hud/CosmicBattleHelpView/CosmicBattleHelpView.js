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
            2794: (e, t, r) => {
                'use strict';
                var i = {};
                r.r(i), r.d(i, { mouse: () => h, onResize: () => c });
                var a = {};
                r.r(a),
                    r.d(a, {
                        events: () => i,
                        getMouseGlobalPosition: () => E,
                        getSize: () => v,
                        graphicsQuality: () => f,
                    });
                var n = {};
                r.r(n), r.d(n, { getBgUrl: () => w, getTextureUrl: () => x });
                var l = {};
                r.r(l),
                    r.d(l, {
                        addModelObserver: () => T,
                        addPreloadTexture: () => y,
                        children: () => n,
                        displayStatus: () => b,
                        displayStatusIs: () => U,
                        events: () => p,
                        extraSize: () => V,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => M,
                        getDisplayStatus: () => N,
                        getScale: () => G,
                        getSize: () => W,
                        getViewGlobalPosition: () => O,
                        isEventHandled: () => k,
                        isFocused: () => $,
                        pxToRem: () => P,
                        remToPx: () => C,
                        resize: () => I,
                        sendEvent: () => H,
                        setAnimateWindow: () => j,
                        setEventHandled: () => z,
                        setInputPaddingsRem: () => _,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => F,
                    });
                var o = r(6179),
                    s = r.n(o);
                const m = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                function u(e) {
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
                const c = u('clientResized'),
                    g = { down: u('mousedown'), up: u('mouseup'), move: u('mousemove') },
                    h = (function () {
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
                                        const n = `mouse${t}`,
                                            l = g[t]((e) => r([e, 'outside']));
                                        function o(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, o),
                                            i(),
                                            () => {
                                                a &&
                                                    (l(),
                                                    window.removeEventListener(n, o),
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
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const f = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function x(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function w(e, t, r) {
                    return `url(${x(e, t, r)})`;
                }
                const b = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    p = {
                        onTextureFrozen: u('self.onTextureFrozen'),
                        onTextureReady: u('self.onTextureReady'),
                        onDomBuilt: u('self.onDomBuilt'),
                        onLoaded: u('self.onLoaded'),
                        onDisplayChanged: u('self.onShowingStatusChanged'),
                        onFocusUpdated: u('self.onFocusChanged'),
                        children: {
                            onAdded: u('children.onAdded'),
                            onLoaded: u('children.onLoaded'),
                            onRemoved: u('children.onRemoved'),
                            onAttached: u('children.onAttached'),
                            onTextureReady: u('children.onTextureReady'),
                            onRequestPosition: u('children.requestPosition'),
                        },
                    },
                    L = ['args'],
                    S = (e, t) => {
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
                                })(t, L);
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
                    H = {
                        close(e) {
                            S('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            S(64);
                        },
                        move(e) {
                            S(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function y(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function M(e, t, r, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, i);
                }
                function T(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function A(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function W(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function I(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function O(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: C(t.x), y: C(t.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function G() {
                    return viewEnv.getScale();
                }
                function P(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function j(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function $() {
                    return viewEnv.isFocused();
                }
                function z() {
                    return viewEnv.setEventHandled();
                }
                function k() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function N() {
                    return viewEnv.getShowingStatus();
                }
                const U = Object.keys(b).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === b[t]), e), {}),
                    V = {
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
                    q = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var Q;
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
                })(Q || (Q = {}));
                const K = X.client.getSize('rem'),
                    Y = K.width,
                    Z = K.height,
                    ee = Object.assign({ width: Y, height: Z }, J(Y, Z, q)),
                    te = (0, o.createContext)(ee),
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
                        const i = (0, o.useContext)(te),
                            a = i.extraLarge,
                            n = i.large,
                            l = i.medium,
                            s = i.small,
                            u = i.extraSmall,
                            d = i.extraLargeWidth,
                            c = i.largeWidth,
                            g = i.mediumWidth,
                            h = i.smallWidth,
                            v = i.extraSmallWidth,
                            E = i.extraLargeHeight,
                            f = i.largeHeight,
                            x = i.mediumHeight,
                            w = i.smallHeight,
                            b = i.extraSmallHeight,
                            p = { extraLarge: E, large: f, medium: x, small: w, extraSmall: b };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && a) return t;
                            if (r.large && n) return t;
                            if (r.medium && l) return t;
                            if (r.small && s) return t;
                            if (r.extraSmall && u) return t;
                        } else {
                            if (r.extraLargeWidth && d) return m(t, r, p);
                            if (r.largeWidth && c) return m(t, r, p);
                            if (r.mediumWidth && g) return m(t, r, p);
                            if (r.smallWidth && h) return m(t, r, p);
                            if (r.extraSmallWidth && v) return m(t, r, p);
                            if (
                                !(
                                    r.extraLargeWidth ||
                                    r.largeWidth ||
                                    r.mediumWidth ||
                                    r.smallWidth ||
                                    r.extraSmallWidth
                                )
                            ) {
                                if (r.extraLargeHeight && E) return t;
                                if (r.largeHeight && f) return t;
                                if (r.mediumHeight && x) return t;
                                if (r.smallHeight && w) return t;
                                if (r.extraSmallHeight && b) return t;
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
                    (0, o.memo)(ie);
                const ae = (0, o.memo)(({ children: e }) => {
                    const t = (0, o.useContext)(te),
                        r = (0, o.useState)(t),
                        i = r[0],
                        a = r[1],
                        n = (0, o.useCallback)((e, t) => {
                            const r = X.view.pxToRem(e),
                                i = X.view.pxToRem(t);
                            a(Object.assign({ width: r, height: i }, J(r, i, q)));
                        }, []);
                    ((e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        engine.on('clientResized', n);
                    }),
                        (0, o.useEffect)(() => () => engine.off('clientResized', n), [n]);
                    const l = (0, o.useMemo)(() => Object.assign({}, i), [i]);
                    return s().createElement(te.Provider, { value: l }, e);
                });
                var ne = r(6483),
                    le = r.n(ne),
                    oe = r(926),
                    se = r.n(oe);
                let me, ue, de;
                !(function (e) {
                    (e[(e.ExtraSmall = q.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = q.small.width)] = 'Small'),
                        (e[(e.Medium = q.medium.width)] = 'Medium'),
                        (e[(e.Large = q.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = q.extraLarge.width)] = 'ExtraLarge');
                })(me || (me = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = q.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = q.small.width)] = 'Small'),
                            (e[(e.Medium = q.medium.width)] = 'Medium'),
                            (e[(e.Large = q.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = q.extraLarge.width)] = 'ExtraLarge');
                    })(ue || (ue = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = q.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = q.small.height)] = 'Small'),
                            (e[(e.Medium = q.medium.height)] = 'Medium'),
                            (e[(e.Large = q.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = q.extraLarge.height)] = 'ExtraLarge');
                    })(de || (de = {}));
                const ce = ['children', 'className'];
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const he = {
                        [ue.ExtraSmall]: '',
                        [ue.Small]: se().SMALL_WIDTH,
                        [ue.Medium]: `${se().SMALL_WIDTH} ${se().MEDIUM_WIDTH}`,
                        [ue.Large]: `${se().SMALL_WIDTH} ${se().MEDIUM_WIDTH} ${se().LARGE_WIDTH}`,
                        [ue.ExtraLarge]: `${se().SMALL_WIDTH} ${se().MEDIUM_WIDTH} ${se().LARGE_WIDTH} ${se().EXTRA_LARGE_WIDTH}`,
                    },
                    ve = {
                        [de.ExtraSmall]: '',
                        [de.Small]: se().SMALL_HEIGHT,
                        [de.Medium]: `${se().SMALL_HEIGHT} ${se().MEDIUM_HEIGHT}`,
                        [de.Large]: `${se().SMALL_HEIGHT} ${se().MEDIUM_HEIGHT} ${se().LARGE_HEIGHT}`,
                        [de.ExtraLarge]: `${se().SMALL_HEIGHT} ${se().MEDIUM_HEIGHT} ${se().LARGE_HEIGHT} ${se().EXTRA_LARGE_HEIGHT}`,
                    },
                    Ee = {
                        [me.ExtraSmall]: '',
                        [me.Small]: se().SMALL,
                        [me.Medium]: `${se().SMALL} ${se().MEDIUM}`,
                        [me.Large]: `${se().SMALL} ${se().MEDIUM} ${se().LARGE}`,
                        [me.ExtraLarge]: `${se().SMALL} ${se().MEDIUM} ${se().LARGE} ${se().EXTRA_LARGE}`,
                    },
                    fe = (e) => {
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
                            })(e, ce);
                        const a = (() => {
                                const e = (0, o.useContext)(te),
                                    t = e.width,
                                    r = e.height,
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return me.ExtraLarge;
                                            case e.large:
                                                return me.Large;
                                            case e.medium:
                                                return me.Medium;
                                            case e.small:
                                                return me.Small;
                                            case e.extraSmall:
                                                return me.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), me.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    a = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return ue.ExtraLarge;
                                            case e.largeWidth:
                                                return ue.Large;
                                            case e.mediumWidth:
                                                return ue.Medium;
                                            case e.smallWidth:
                                                return ue.Small;
                                            case e.extraSmallWidth:
                                                return ue.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), ue.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    n = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return de.ExtraLarge;
                                            case e.largeHeight:
                                                return de.Large;
                                            case e.mediumHeight:
                                                return de.Medium;
                                            case e.smallHeight:
                                                return de.Small;
                                            case e.extraSmallHeight:
                                                return de.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), de.ExtraSmall
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
                            m = a.mediaSize;
                        return s().createElement('div', ge({ className: le()(r, he[n], ve[l], Ee[m]) }, i), t);
                    },
                    xe = ['children'],
                    we = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    i,
                                    a = {},
                                    n = Object.keys(e);
                                for (i = 0; i < n.length; i++) (r = n[i]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, xe);
                        return s().createElement(ae, null, s().createElement(fe, r, t));
                    };
                var be = r(493),
                    pe = r.n(be);
                function Le(e) {
                    return e;
                }
                function Se() {
                    return !1;
                }
                console.log;
                var He = r(3915);
                function ye(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
                    return i;
                }
                const _e = (e) => (0 === e ? window : window.subViews.get(e));
                function Me(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, r, i) => t(null == e ? void 0 : e.value, r, i));
                }
                var Te = r(6517);
                const Re = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: t, children: i, mocks: a }) {
                                const n = (0, o.useRef)([]),
                                    l = (e, t, r) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = _e,
                                                context: i = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function n(e, t = 0) {
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
                                                        n = i.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (r, n) => {
                                                        const o = 'string' == typeof n ? `${i}.${n}` : i,
                                                            s = X.view.addModelObserver(o, t, !0);
                                                        return a.set(s, r), e && r(l(n)), s;
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
                                                                                    return ye(e, t);
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
                                                                                          ? ye(e, t)
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
                                                            n(e.value, t);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(t),
                                            l =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == r ? void 0 : r.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            o = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : l.readByPath(t),
                                            s = (e) => n.current.push(e),
                                            m = (({ observableModel: e }) => {
                                                const t = {
                                                        root: e.object(),
                                                        reloadTimes: e.primitives(['reloadTimeLeft', 'reloadTime']),
                                                        abilities: e.array('abilities', []),
                                                        messages: e.array('messages', []),
                                                    },
                                                    r = (0, Te.computedFn)(() => Me(t.abilities.get(), Le)),
                                                    i = (0, Te.computedFn)(
                                                        (e) =>
                                                            (function (e, t) {
                                                                var r;
                                                                if (!(t >= e.length))
                                                                    return Array.isArray(e)
                                                                        ? e[t]
                                                                        : null == (r = e[t])
                                                                          ? void 0
                                                                          : r.value;
                                                            })(r(), e),
                                                        { equals: Se },
                                                    ),
                                                    a = (0, Te.computedFn)(() => Me(t.messages.get(), Le));
                                                return Object.assign({}, t, {
                                                    computes: { getAbilities: r, getAbility: i, getMessages: a },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const i = null != r ? r : o(t),
                                                            a = He.observable.box(i, { equals: Se });
                                                        return (
                                                            'real' === e &&
                                                                l.subscribe(
                                                                    (0, He.action)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const i = null != r ? r : o(t),
                                                            a = He.observable.box(i, { equals: Se });
                                                        return (
                                                            'real' === e &&
                                                                l.subscribe(
                                                                    (0, He.action)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const i = o(r);
                                                        if (Array.isArray(t)) {
                                                            const a = t.reduce(
                                                                (e, t) => ((e[t] = He.observable.box(i[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    l.subscribe(
                                                                        (0, He.action)((e) => {
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
                                                                n = Object.entries(a),
                                                                o = n.reduce(
                                                                    (e, [t, r]) => (
                                                                        (e[r] = He.observable.box(i[t], {})), e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    l.subscribe(
                                                                        (0, He.action)((e) => {
                                                                            n.forEach(([t, r]) => {
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
                                            u = { mode: e, model: m, externalModel: l, cleanup: s };
                                        return {
                                            model: m,
                                            controls: 'mocks' === e && r ? r.controls(u) : {},
                                            externalModel: l,
                                            mode: e,
                                        };
                                    },
                                    m = (0, o.useRef)(!1),
                                    u = (0, o.useState)(e),
                                    d = u[0],
                                    c = u[1],
                                    g = (0, o.useState)(() => l(e, t, a)),
                                    h = g[0],
                                    v = g[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        m.current ? v(l(d, t, a)) : (m.current = !0);
                                    }, [a, d, t]),
                                    (0, o.useEffect)(() => {
                                        c(e);
                                    }, [e]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            h.externalModel.dispose(), n.current.forEach((e) => e());
                                        },
                                        [h],
                                    ),
                                    s().createElement(r.Provider, { value: h }, i)
                                );
                            },
                            () => (0, o.useContext)(r),
                        ];
                    })(),
                    Ae = Re[0];
                Re[1];
                var We = r(3282);
                const Ie = ({ children: e, className: t }) =>
                        s().createElement(
                            'div',
                            { className: le()('Numbering_numbering_57', t) },
                            s().createElement('span', null, e),
                        ),
                    Oe = ({ title: e, description: t, image: r, index: i }) =>
                        s().createElement(
                            'div',
                            { className: 'ContentBlock_base_b3' },
                            s().createElement(Ie, null, i),
                            s().createElement(
                                'div',
                                { className: 'ContentBlock_content_fd' },
                                s().createElement('img', { className: 'ContentBlock_image_60', src: r }),
                                s().createElement('div', { className: 'ContentBlock_title_11' }, e),
                                s().createElement('div', { className: 'ContentBlock_description_de' }, t),
                            ),
                        ),
                    De = (0, We.observer)(() =>
                        s().createElement(
                            'div',
                            { className: 'CosmicBattleHelpViewApp_base_1d' },
                            s().createElement(
                                'div',
                                { className: 'CosmicBattleHelpViewApp_titleWrapper_c3' },
                                s().createElement('div', { className: 'CosmicBattleHelpViewApp_decorLeft_5a' }),
                                s().createElement(
                                    'div',
                                    { className: 'CosmicBattleHelpViewApp_title_f3' },
                                    R.strings.cosmicEvent.battle.battleHelp.title(),
                                ),
                                s().createElement('div', { className: 'CosmicBattleHelpViewApp_decorRight_51' }),
                            ),
                            s().createElement(
                                'div',
                                { className: 'CosmicBattleHelpViewApp_contentWrapper_7a' },
                                s().createElement(
                                    'div',
                                    { className: 'CosmicBattleHelpViewApp_content_28' },
                                    s().createElement(Oe, {
                                        title: R.strings.cosmicEvent.battle.battleHelp.ramEnemies(),
                                        description: R.strings.cosmicEvent.battle.battleHelp.ramEnemiesDescription(),
                                        image: R.images.cosmic_event.gui.maps.icons.battleHelp.ram_enemies(),
                                        index: 1,
                                    }),
                                    s().createElement(Oe, {
                                        title: R.strings.cosmicEvent.battle.battleHelp.shootThem(),
                                        description: R.strings.cosmicEvent.battle.battleHelp.shootThemDescription(),
                                        image: R.images.cosmic_event.gui.maps.icons.battleHelp.shoot_them(),
                                        index: 2,
                                    }),
                                    s().createElement(Oe, {
                                        title: R.strings.cosmicEvent.battle.battleHelp.useAbilities(),
                                        description: R.strings.cosmicEvent.battle.battleHelp.useAbilitiesDescription(),
                                        image: R.images.cosmic_event.gui.maps.icons.battleHelp.use_abilities(),
                                        index: 3,
                                    }),
                                    s().createElement(Oe, {
                                        title: R.strings.cosmicEvent.battle.battleHelp.scanObject(),
                                        description: R.strings.cosmicEvent.battle.battleHelp.scanObjectDescription(),
                                        image: R.images.cosmic_event.gui.maps.icons.battleHelp.scan_object(),
                                        index: 4,
                                    }),
                                ),
                            ),
                        ),
                    );
                engine.whenReady.then(() => {
                    pe().render(
                        s().createElement(we, null, s().createElement(Ae, null, s().createElement(De, null))),
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
        return t[e].call(n.exports, n, n.exports, i), n.exports;
    }
    (i.m = t),
        (e = []),
        (i.O = (t, r, a, n) => {
            if (!r) {
                var l = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [r, a, n] = e[u], o = !0, s = 0; s < r.length; s++)
                        (!1 & n || l >= n) && Object.keys(i.O).every((e) => i.O[e](r[s]))
                            ? r.splice(s--, 1)
                            : ((o = !1), n < l && (l = n));
                    if (o) {
                        e.splice(u--, 1);
                        var m = a();
                        void 0 !== m && (t = m);
                    }
                }
                return t;
            }
            n = n || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
            e[u] = [r, a, n];
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
                        n,
                        [l, o, s] = r,
                        m = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (a in o) i.o(o, a) && (i.m[a] = o[a]);
                        if (s) var u = s(i);
                    }
                    for (t && t(r); m < l.length; m++) (n = l[m]), i.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return i.O(u);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var a = i.O(void 0, [503], () => i(2794));
    a = i.O(a);
})();
