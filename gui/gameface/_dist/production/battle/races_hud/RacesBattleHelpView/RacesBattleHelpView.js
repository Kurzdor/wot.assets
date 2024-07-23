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
            1386: (e, t, r) => {
                'use strict';
                var a = {};
                r.r(a), r.d(a, { mouse: () => h, onResize: () => c });
                var i = {};
                r.r(i),
                    r.d(i, {
                        events: () => a,
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
                        getScale: () => P,
                        getSize: () => W,
                        getViewGlobalPosition: () => I,
                        isEventHandled: () => k,
                        isFocused: () => z,
                        pxToRem: () => G,
                        remToPx: () => j,
                        resize: () => O,
                        sendEvent: () => S,
                        setAnimateWindow: () => $,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => _,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => F,
                    });
                var s = r(6179),
                    o = r.n(s);
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
                    g = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') },
                    h = (function () {
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
                        const i = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let i = !0;
                                        const n = `mouse${t}`,
                                            l = g[t]((e) => r([e, 'outside']));
                                        function s(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, s),
                                            a(),
                                            () => {
                                                i &&
                                                    (l(),
                                                    window.removeEventListener(n, s),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (i = !1));
                                            }
                                        );
                                    };
                                })(r)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
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
                    L = ['args'],
                    H = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        a,
                                        i = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (r = n[a]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                    return i;
                                })(t, L);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, n, {
                                          arguments:
                                              ((a = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var a;
                    },
                    S = {
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
                function y(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function M(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
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
                function O(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function I(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: j(t.x), y: j(t.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function P() {
                    return viewEnv.getScale();
                }
                function G(e) {
                    return viewEnv.pxToRem(e);
                }
                function j(e) {
                    return viewEnv.remToPx(e);
                }
                function $(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function z() {
                    return viewEnv.isFocused();
                }
                function C() {
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
                    X = { view: l, client: i },
                    q = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var Q;
                function J(e, t, r) {
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
                        i = (function (e, t) {
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
                        n = Math.min(a, i);
                    return {
                        extraLarge: n === r.extraLarge.weight,
                        large: n === r.large.weight,
                        medium: n === r.medium.weight,
                        small: n === r.small.weight,
                        extraSmall: n === r.extraSmall.weight,
                        extraLargeWidth: a === r.extraLarge.weight,
                        largeWidth: a === r.large.weight,
                        mediumWidth: a === r.medium.weight,
                        smallWidth: a === r.small.weight,
                        extraSmallWidth: a === r.extraSmall.weight,
                        extraLargeHeight: i === r.extraLarge.weight,
                        largeHeight: i === r.large.weight,
                        mediumHeight: i === r.medium.weight,
                        smallHeight: i === r.small.weight,
                        extraSmallHeight: i === r.extraSmall.weight,
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
                    te = (0, s.createContext)(ee),
                    re = ['children'],
                    ae = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    i = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (r = n[a]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                return i;
                            })(e, re);
                        const a = (0, s.useContext)(te),
                            i = a.extraLarge,
                            n = a.large,
                            l = a.medium,
                            o = a.small,
                            d = a.extraSmall,
                            u = a.extraLargeWidth,
                            c = a.largeWidth,
                            g = a.mediumWidth,
                            h = a.smallWidth,
                            v = a.extraSmallWidth,
                            E = a.extraLargeHeight,
                            f = a.largeHeight,
                            x = a.mediumHeight,
                            w = a.smallHeight,
                            b = a.extraSmallHeight,
                            p = { extraLarge: E, large: f, medium: x, small: w, extraSmall: b };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && i) return t;
                            if (r.large && n) return t;
                            if (r.medium && l) return t;
                            if (r.small && o) return t;
                            if (r.extraSmall && d) return t;
                        } else {
                            if (r.extraLargeWidth && u) return m(t, r, p);
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
                (ae.defaultProps = {
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
                    (0, s.memo)(ae);
                const ie = (0, s.memo)(({ children: e }) => {
                    const t = (0, s.useContext)(te),
                        r = (0, s.useState)(t),
                        a = r[0],
                        i = r[1],
                        n = (0, s.useCallback)((e, t) => {
                            const r = X.view.pxToRem(e),
                                a = X.view.pxToRem(t);
                            i(Object.assign({ width: r, height: a }, J(r, a, q)));
                        }, []);
                    ((e) => {
                        const t = (0, s.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        engine.on('clientResized', n);
                    }),
                        (0, s.useEffect)(() => () => engine.off('clientResized', n), [n]);
                    const l = (0, s.useMemo)(() => Object.assign({}, a), [a]);
                    return o().createElement(te.Provider, { value: l }, e);
                });
                var ne = r(6483),
                    le = r.n(ne),
                    se = r(926),
                    oe = r.n(se);
                let me, de, ue;
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
                    })(de || (de = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = q.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = q.small.height)] = 'Small'),
                            (e[(e.Medium = q.medium.height)] = 'Medium'),
                            (e[(e.Large = q.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = q.extraLarge.height)] = 'ExtraLarge');
                    })(ue || (ue = {}));
                const ce = ['children', 'className'];
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const he = {
                        [de.ExtraSmall]: '',
                        [de.Small]: oe().SMALL_WIDTH,
                        [de.Medium]: `${oe().SMALL_WIDTH} ${oe().MEDIUM_WIDTH}`,
                        [de.Large]: `${oe().SMALL_WIDTH} ${oe().MEDIUM_WIDTH} ${oe().LARGE_WIDTH}`,
                        [de.ExtraLarge]: `${oe().SMALL_WIDTH} ${oe().MEDIUM_WIDTH} ${oe().LARGE_WIDTH} ${oe().EXTRA_LARGE_WIDTH}`,
                    },
                    ve = {
                        [ue.ExtraSmall]: '',
                        [ue.Small]: oe().SMALL_HEIGHT,
                        [ue.Medium]: `${oe().SMALL_HEIGHT} ${oe().MEDIUM_HEIGHT}`,
                        [ue.Large]: `${oe().SMALL_HEIGHT} ${oe().MEDIUM_HEIGHT} ${oe().LARGE_HEIGHT}`,
                        [ue.ExtraLarge]: `${oe().SMALL_HEIGHT} ${oe().MEDIUM_HEIGHT} ${oe().LARGE_HEIGHT} ${oe().EXTRA_LARGE_HEIGHT}`,
                    },
                    Ee = {
                        [me.ExtraSmall]: '',
                        [me.Small]: oe().SMALL,
                        [me.Medium]: `${oe().SMALL} ${oe().MEDIUM}`,
                        [me.Large]: `${oe().SMALL} ${oe().MEDIUM} ${oe().LARGE}`,
                        [me.ExtraLarge]: `${oe().SMALL} ${oe().MEDIUM} ${oe().LARGE} ${oe().EXTRA_LARGE}`,
                    },
                    fe = (e) => {
                        let t = e.children,
                            r = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    i = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (r = n[a]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                return i;
                            })(e, ce);
                        const i = (() => {
                                const e = (0, s.useContext)(te),
                                    t = e.width,
                                    r = e.height,
                                    a = ((e) => {
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
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return de.ExtraLarge;
                                            case e.largeWidth:
                                                return de.Large;
                                            case e.mediumWidth:
                                                return de.Medium;
                                            case e.smallWidth:
                                                return de.Small;
                                            case e.extraSmallWidth:
                                                return de.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), de.ExtraSmall
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
                                    mediaSize: a,
                                    mediaWidth: i,
                                    mediaHeight: n,
                                    remScreenWidth: t,
                                    remScreenHeight: r,
                                };
                            })(),
                            n = i.mediaWidth,
                            l = i.mediaHeight,
                            m = i.mediaSize;
                        return o().createElement('div', ge({ className: le()(r, he[n], ve[l], Ee[m]) }, a), t);
                    },
                    xe = ['children'],
                    we = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    i = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (r = n[a]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                return i;
                            })(e, xe);
                        return o().createElement(ie, null, o().createElement(fe, r, t));
                    };
                var be = r(493),
                    pe = r.n(be);
                function Le(e) {
                    return e;
                }
                function He() {
                    return !1;
                }
                console.log;
                var Se = r(9174);
                function ye(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const _e = (e) => (0 === e ? window : window.subViews.get(e));
                function Re(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, r, a) => t(null == e ? void 0 : e.value, r, a));
                }
                var Me = r(3946);
                R.strings.races.battleHelper.infoPlate.title(), R.strings.races.battleHelper.infoPlate.command();
                const Te = ((e, t) => {
                        const r = (0, s.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: t, children: a, mocks: i }) {
                                const n = (0, s.useRef)([]),
                                    l = (e, t, r) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = _e,
                                                context: a = 'model',
                                            } = {}) {
                                                const i = new Map();
                                                function n(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? i.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = i.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const i = r(t),
                                                        n = a.split('.').reduce((e, t) => e[t], i);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (r, n) => {
                                                        const s = 'string' == typeof n ? `${a}.${n}` : a,
                                                            o = X.view.addModelObserver(s, t, !0);
                                                        return i.set(o, r), e && r(l(n)), o;
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
                                                                })(i.keys());
                                                            !(e = r()).done;

                                                        )
                                                            n(e.value, t);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(t),
                                            l =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : l.readByPath(t),
                                            o = (e) => n.current.push(e),
                                            m = (({ observableModel: e }) => {
                                                const t = Object.assign({}, e.primitives(['vehicleSpeed']), {
                                                        root: e.object(),
                                                        reloadTimes: e.primitives(['reloadTimeLeft', 'reloadTime']),
                                                        abilities: e.array('abilities', []),
                                                        messages: e.array('messages', []),
                                                        playerList: e.array('playerList', []),
                                                        minimapComponent: e.object('minimapComponent'),
                                                    }),
                                                    r = (0, Me.Om)(() => Re(t.abilities.get(), Le)),
                                                    a = (0, Me.Om)(
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
                                                        { equals: He },
                                                    ),
                                                    i = (0, Me.Om)(() => Re(t.playerList.get(), Le)),
                                                    n = (0, Me.Om)(() => Re(t.messages.get(), Le));
                                                return Object.assign({}, t, {
                                                    computes: {
                                                        getAbilities: r,
                                                        getAbility: a,
                                                        getMessages: n,
                                                        getPlayerList: i,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const a = null != r ? r : s(t),
                                                            i = Se.LO.box(a, { equals: He });
                                                        return (
                                                            'real' === e &&
                                                                l.subscribe(
                                                                    (0, Se.aD)((e) => i.set(e)),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const a = null != r ? r : s(t),
                                                            i = Se.LO.box(a, { equals: He });
                                                        return (
                                                            'real' === e &&
                                                                l.subscribe(
                                                                    (0, Se.aD)((e) => i.set(e)),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const a = s(r);
                                                        if (Array.isArray(t)) {
                                                            const i = t.reduce(
                                                                (e, t) => ((e[t] = Se.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    l.subscribe(
                                                                        (0, Se.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                i[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                        {
                                                            const i = t,
                                                                n = Object.entries(i),
                                                                s = n.reduce(
                                                                    (e, [t, r]) => ((e[r] = Se.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    l.subscribe(
                                                                        (0, Se.aD)((e) => {
                                                                            n.forEach(([t, r]) => {
                                                                                s[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: o,
                                            }),
                                            d = { mode: e, model: m, externalModel: l, cleanup: o };
                                        return {
                                            model: m,
                                            controls: 'mocks' === e && r ? r.controls(d) : {},
                                            externalModel: l,
                                            mode: e,
                                        };
                                    },
                                    m = (0, s.useRef)(!1),
                                    d = (0, s.useState)(e),
                                    u = d[0],
                                    c = d[1],
                                    g = (0, s.useState)(() => l(e, t, i)),
                                    h = g[0],
                                    v = g[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        m.current ? v(l(u, t, i)) : (m.current = !0);
                                    }, [i, u, t]),
                                    (0, s.useEffect)(() => {
                                        c(e);
                                    }, [e]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            h.externalModel.dispose(), n.current.forEach((e) => e());
                                        },
                                        [h],
                                    ),
                                    o().createElement(r.Provider, { value: h }, a)
                                );
                            },
                            () => (0, s.useContext)(r),
                        ];
                    })(),
                    Ae = Te[0];
                Te[1];
                var We = r(3403);
                const Oe = ({ children: e, className: t }) =>
                        o().createElement(
                            'div',
                            { className: le()('Numbering_numbering_9a', t) },
                            o().createElement('span', null, e),
                        ),
                    Ie = ({ title: e, description: t, image: r, index: a }) =>
                        o().createElement(
                            'div',
                            { className: 'ContentBlock_base_6e' },
                            o().createElement(Oe, null, a),
                            o().createElement(
                                'div',
                                { className: 'ContentBlock_content_cd' },
                                o().createElement('img', { className: 'ContentBlock_image_ae', src: r }),
                                o().createElement('div', { className: 'ContentBlock_title_0c' }, e),
                                o().createElement('div', { className: 'ContentBlock_description_5b' }, t),
                            ),
                        ),
                    De = (0, We.Pi)(() =>
                        o().createElement(
                            'div',
                            { className: 'RacesBattleHelpViewApp_base_e4' },
                            o().createElement(
                                'div',
                                { className: 'RacesBattleHelpViewApp_titleWrapper_08' },
                                o().createElement('div', { className: 'RacesBattleHelpViewApp_decorLeft_d2' }),
                                o().createElement(
                                    'div',
                                    { className: 'RacesBattleHelpViewApp_title_77' },
                                    R.strings.cosmicEvent.battle.battleHelp.title(),
                                ),
                                o().createElement('div', { className: 'RacesBattleHelpViewApp_decorRight_32' }),
                            ),
                            o().createElement(
                                'div',
                                { className: 'RacesBattleHelpViewApp_contentWrapper_68' },
                                o().createElement(
                                    'div',
                                    { className: 'RacesBattleHelpViewApp_content_03' },
                                    o().createElement(Ie, {
                                        title: R.strings.cosmicEvent.battle.battleHelp.ramEnemies(),
                                        description: R.strings.cosmicEvent.battle.battleHelp.ramEnemiesDescription(),
                                        image: R.images.cosmic_event.gui.maps.icons.battleHelp.ram_enemies(),
                                        index: 1,
                                    }),
                                    o().createElement(Ie, {
                                        title: R.strings.cosmicEvent.battle.battleHelp.shootThem(),
                                        description: R.strings.cosmicEvent.battle.battleHelp.shootThemDescription(),
                                        image: R.images.cosmic_event.gui.maps.icons.battleHelp.shoot_them(),
                                        index: 2,
                                    }),
                                    o().createElement(Ie, {
                                        title: R.strings.cosmicEvent.battle.battleHelp.useAbilities(),
                                        description: R.strings.cosmicEvent.battle.battleHelp.useAbilitiesDescription(),
                                        image: R.images.cosmic_event.gui.maps.icons.battleHelp.use_abilities(),
                                        index: 3,
                                    }),
                                    o().createElement(Ie, {
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
                        o().createElement(we, null, o().createElement(Ae, null, o().createElement(De, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        r = {};
    function a(e) {
        var i = r[e];
        if (void 0 !== i) return i.exports;
        var n = (r[e] = { exports: {} });
        return t[e](n, n.exports, a), n.exports;
    }
    (a.m = t),
        (e = []),
        (a.O = (t, r, i, n) => {
            if (!r) {
                var l = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [r, i, n] = e[d], s = !0, o = 0; o < r.length; o++)
                        (!1 & n || l >= n) && Object.keys(a.O).every((e) => a.O[e](r[o]))
                            ? r.splice(o--, 1)
                            : ((s = !1), n < l && (l = n));
                    if (s) {
                        e.splice(d--, 1);
                        var m = i();
                        void 0 !== m && (t = m);
                    }
                }
                return t;
            }
            n = n || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
            e[d] = [r, i, n];
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
        (a.j = 156),
        (() => {
            var e = { 156: 0 };
            a.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var i,
                        n,
                        [l, s, o] = r,
                        m = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (i in s) a.o(s, i) && (a.m[i] = s[i]);
                        if (o) var d = o(a);
                    }
                    for (t && t(r); m < l.length; m++) (n = l[m]), a.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return a.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var i = a.O(void 0, [503], () => a(1386));
    i = a.O(i);
})();
