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
            8680: (e, t, r) => {
                'use strict';
                var n = {};
                r.r(n),
                    r.d(n, { mouse: () => w, off: () => f, on: () => h, onResize: () => m, onScaleUpdated: () => g });
                var a = {};
                r.r(a),
                    r.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => _,
                        getSize: () => x,
                        graphicsQuality: () => S,
                        playSound: () => b,
                        setRTPC: () => E,
                    });
                var i = {};
                r.r(i), r.d(i, { getBgUrl: () => T, getTextureUrl: () => H });
                var l = {};
                r.r(l),
                    r.d(l, {
                        addModelObserver: () => D,
                        addPreloadTexture: () => O,
                        children: () => i,
                        displayStatus: () => M,
                        displayStatusIs: () => Z,
                        events: () => A,
                        extraSize: () => ee,
                        forceTriggerMouseMove: () => K,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => k,
                        getDisplayStatus: () => Y,
                        getScale: () => U,
                        getSize: () => G,
                        getViewGlobalPosition: () => j,
                        isEventHandled: () => J,
                        isFocused: () => X,
                        pxToRem: () => B,
                        remToPx: () => V,
                        resize: () => N,
                        sendEvent: () => I,
                        setAnimateWindow: () => q,
                        setEventHandled: () => Q,
                        setInputPaddingsRem: () => $,
                        setSidePaddingsRem: () => z,
                        whenTutorialReady: () => te,
                    });
                var o = r(6179),
                    s = r.n(o);
                const u = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                function c(e) {
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
                const m = c('clientResized'),
                    g = c('self.onScaleUpdated'),
                    h = (e, t) => engine.on(e, t),
                    f = (e, t) => engine.off(e, t),
                    v = { down: c('mousedown'), up: c('mouseup'), move: c('mousemove') },
                    w = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && d(!1);
                        }
                        function r() {
                            e.enabled && d(!0);
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
                                : d(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const i = `mouse${t}`,
                                            l = v[t]((e) => r([e, 'outside']));
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
                                e.enabled && d(!0);
                            },
                            disableOutside() {
                                e.enabled && d(!1);
                            },
                        });
                    })();
                function b(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function E(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const S = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(p).reduce((e, t) => ((e[t] = () => b(p[t])), e), {}),
                    L = { play: Object.assign({}, y, { sound: b }), setRTPC: E };
                function H(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function T(e, t, r) {
                    return `url(${H(e, t, r)})`;
                }
                const M = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    A = {
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
                    P = ['args'],
                    C = (e, t) => {
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
                                })(t, P);
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
                    I = {
                        close(e) {
                            C('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            C(64);
                        },
                        move(e) {
                            C(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    W = 15;
                function O(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, W);
                }
                function k(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function D(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function z(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, W);
                }
                function G(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function N(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function j(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: V(t.x), y: V(t.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function U() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function V(e) {
                    return viewEnv.remToPx(e);
                }
                function q(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function X() {
                    return viewEnv.isFocused();
                }
                function Q() {
                    return viewEnv.setEventHandled();
                }
                function J() {
                    return viewEnv.isEventHandled();
                }
                function K() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Y() {
                    return viewEnv.getShowingStatus();
                }
                const Z = Object.keys(M).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === M[t]), e), {}),
                    ee = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    te = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : A.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    re = { view: l, client: a, sound: L },
                    ne = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var ae;
                function ie(e, t, r) {
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
                })(ae || (ae = {}));
                const le = re.client.getSize('rem'),
                    oe = le.width,
                    se = le.height,
                    ue = Object.assign({ width: oe, height: se }, ie(oe, se, ne)),
                    ce = (0, o.createContext)(ue),
                    de = ['children'],
                    me = (e) => {
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
                            })(e, de);
                        const n = (0, o.useContext)(ce),
                            a = n.extraLarge,
                            i = n.large,
                            l = n.medium,
                            s = n.small,
                            c = n.extraSmall,
                            d = n.extraLargeWidth,
                            m = n.largeWidth,
                            g = n.mediumWidth,
                            h = n.smallWidth,
                            f = n.extraSmallWidth,
                            v = n.extraLargeHeight,
                            w = n.largeHeight,
                            b = n.mediumHeight,
                            E = n.smallHeight,
                            x = n.extraSmallHeight,
                            _ = { extraLarge: v, large: w, medium: b, small: E, extraSmall: x };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && a) return t;
                            if (r.large && i) return t;
                            if (r.medium && l) return t;
                            if (r.small && s) return t;
                            if (r.extraSmall && c) return t;
                        } else {
                            if (r.extraLargeWidth && d) return u(t, r, _);
                            if (r.largeWidth && m) return u(t, r, _);
                            if (r.mediumWidth && g) return u(t, r, _);
                            if (r.smallWidth && h) return u(t, r, _);
                            if (r.extraSmallWidth && f) return u(t, r, _);
                            if (
                                !(
                                    r.extraLargeWidth ||
                                    r.largeWidth ||
                                    r.mediumWidth ||
                                    r.smallWidth ||
                                    r.extraSmallWidth
                                )
                            ) {
                                if (r.extraLargeHeight && v) return t;
                                if (r.largeHeight && w) return t;
                                if (r.mediumHeight && b) return t;
                                if (r.smallHeight && E) return t;
                                if (r.extraSmallHeight && x) return t;
                            }
                        }
                        return null;
                    };
                (me.defaultProps = {
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
                    (0, o.memo)(me);
                const ge = ({ children: e }) => {
                    const t = (0, o.useContext)(ce),
                        r = (0, o.useState)(t),
                        n = r[0],
                        a = r[1],
                        i = (0, o.useCallback)((e, t) => {
                            const r = re.view.pxToRem(e),
                                n = re.view.pxToRem(t);
                            a(Object.assign({ width: r, height: n }, ie(r, n, ne)));
                        }, []),
                        l = (0, o.useCallback)(() => {
                            const e = re.client.getSize('px');
                            i(e.width, e.height);
                        }, [i]);
                    ((e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        re.client.events.on('clientResized', i), re.client.events.on('self.onScaleUpdated', l);
                    }),
                        (0, o.useEffect)(
                            () => () => {
                                re.client.events.off('clientResized', i),
                                    re.client.events.off('self.onScaleUpdated', l);
                            },
                            [i, l],
                        );
                    const u = (0, o.useMemo)(() => Object.assign({}, n), [n]);
                    return s().createElement(ce.Provider, { value: u }, e);
                };
                var he = r(6483),
                    fe = r.n(he),
                    ve = r(926),
                    we = r.n(ve);
                let be, Ee, xe;
                !(function (e) {
                    (e[(e.ExtraSmall = ne.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = ne.small.width)] = 'Small'),
                        (e[(e.Medium = ne.medium.width)] = 'Medium'),
                        (e[(e.Large = ne.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = ne.extraLarge.width)] = 'ExtraLarge');
                })(be || (be = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = ne.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = ne.small.width)] = 'Small'),
                            (e[(e.Medium = ne.medium.width)] = 'Medium'),
                            (e[(e.Large = ne.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = ne.extraLarge.width)] = 'ExtraLarge');
                    })(Ee || (Ee = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = ne.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = ne.small.height)] = 'Small'),
                            (e[(e.Medium = ne.medium.height)] = 'Medium'),
                            (e[(e.Large = ne.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = ne.extraLarge.height)] = 'ExtraLarge');
                    })(xe || (xe = {}));
                const _e = ['children', 'className'];
                function Se() {
                    return (
                        (Se = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                  }
                                  return e;
                              }),
                        Se.apply(null, arguments)
                    );
                }
                const pe = {
                        [Ee.ExtraSmall]: '',
                        [Ee.Small]: we().SMALL_WIDTH,
                        [Ee.Medium]: `${we().SMALL_WIDTH} ${we().MEDIUM_WIDTH}`,
                        [Ee.Large]: `${we().SMALL_WIDTH} ${we().MEDIUM_WIDTH} ${we().LARGE_WIDTH}`,
                        [Ee.ExtraLarge]: `${we().SMALL_WIDTH} ${we().MEDIUM_WIDTH} ${we().LARGE_WIDTH} ${we().EXTRA_LARGE_WIDTH}`,
                    },
                    ye = {
                        [xe.ExtraSmall]: '',
                        [xe.Small]: we().SMALL_HEIGHT,
                        [xe.Medium]: `${we().SMALL_HEIGHT} ${we().MEDIUM_HEIGHT}`,
                        [xe.Large]: `${we().SMALL_HEIGHT} ${we().MEDIUM_HEIGHT} ${we().LARGE_HEIGHT}`,
                        [xe.ExtraLarge]: `${we().SMALL_HEIGHT} ${we().MEDIUM_HEIGHT} ${we().LARGE_HEIGHT} ${we().EXTRA_LARGE_HEIGHT}`,
                    },
                    Le = {
                        [be.ExtraSmall]: '',
                        [be.Small]: we().SMALL,
                        [be.Medium]: `${we().SMALL} ${we().MEDIUM}`,
                        [be.Large]: `${we().SMALL} ${we().MEDIUM} ${we().LARGE}`,
                        [be.ExtraLarge]: `${we().SMALL} ${we().MEDIUM} ${we().LARGE} ${we().EXTRA_LARGE}`,
                    },
                    He = (e) => {
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
                            })(e, _e);
                        const a = (() => {
                                const e = (0, o.useContext)(ce),
                                    t = e.width,
                                    r = e.height,
                                    n = ((e) => {
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
                                    a = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return Ee.ExtraLarge;
                                            case e.largeWidth:
                                                return Ee.Large;
                                            case e.mediumWidth:
                                                return Ee.Medium;
                                            case e.smallWidth:
                                                return Ee.Small;
                                            case e.extraSmallWidth:
                                                return Ee.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), Ee.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return xe.ExtraLarge;
                                            case e.largeHeight:
                                                return xe.Large;
                                            case e.mediumHeight:
                                                return xe.Medium;
                                            case e.smallHeight:
                                                return xe.Small;
                                            case e.extraSmallHeight:
                                                return xe.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), xe.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: n,
                                    mediaWidth: a,
                                    mediaHeight: i,
                                    remScreenWidth: t,
                                    remScreenHeight: r,
                                };
                            })(),
                            i = a.mediaWidth,
                            l = a.mediaHeight,
                            u = a.mediaSize;
                        return s().createElement('div', Se({ className: fe()(r, pe[i], ye[l], Le[u]) }, n), t);
                    },
                    Te = ['children'],
                    Me = (e) => {
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
                            })(e, Te);
                        return s().createElement(ge, null, s().createElement(He, r, t));
                    };
                var Ae = r(493),
                    Pe = r.n(Ae);
                const Re = !0,
                    Ce = 'play',
                    Ie = [
                        'width',
                        'height',
                        'getImageSource',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                        'lastFrameIndex',
                        'loop',
                        'state',
                        'onAnimationDone',
                        'onAnimationComplete',
                        'poster',
                    ];
                function We() {
                    return (
                        (We = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                  }
                                  return e;
                              }),
                        We.apply(null, arguments)
                    );
                }
                const Oe = (0, o.memo)(function (e) {
                        let t = e.width,
                            r = e.height,
                            n = e.getImageSource,
                            a = e.frameCount,
                            i = e.onAnimate,
                            l = e.frameTime,
                            u = void 0 === l ? 33 : l,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? 0 : c,
                            m = e.lastFrameIndex,
                            g = void 0 === m ? a - 1 : m,
                            h = e.loop,
                            f = void 0 === h ? Re : h,
                            v = e.state,
                            w = void 0 === v ? Ce : v,
                            b = e.onAnimationDone,
                            E = e.onAnimationComplete,
                            x = e.poster,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        r[n] = e[n];
                                    }
                                return r;
                            })(e, Ie);
                        const S = (0, o.useRef)(null);
                        return (
                            (0, o.useEffect)(() => {
                                const e = S.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    r = (r) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(r.img, -r.x, -r.y);
                                    };
                                switch (w) {
                                    case 'play':
                                        return (function () {
                                            const e = De(d, g, n),
                                                t = $e(d, g),
                                                a = window.setInterval(() => {
                                                    const n = t(),
                                                        l = e.get(n);
                                                    l
                                                        ? (null == i || i(n, l),
                                                          r(l),
                                                          n === g &&
                                                              (null == E || E(),
                                                              f || (null == b || b(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, u);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && x ? { path: x, x: 0, y: 0 } : n(d),
                                                t = new Image();
                                            t.src = e.path;
                                            const a = () => r(ke(e, t));
                                            return (
                                                t.addEventListener('load', a), () => t.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [u, n, d, g, f, i, E, b, x, w]),
                            s().createElement('canvas', We({}, _, { width: t, height: r, ref: S }))
                        );
                    }),
                    $e = (e, t) => {
                        let r = e;
                        return () => {
                            const n = r;
                            return (r += 1), r > t && (r = e), n;
                        };
                    },
                    ke = (e, t) => Object.assign({}, e, { img: t }),
                    De = (e, t, r) => {
                        const n = new Map(),
                            a = {};
                        for (let i = e; i <= t; i++) {
                            const e = r(i),
                                t = a[e.path];
                            if (t) n.set(i, ke(e, t));
                            else {
                                const t = new Image();
                                (a[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${i})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(i, ke(e, t));
                            }
                        }
                        return n;
                    },
                    ze = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    Ge = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function Ne() {
                    return (
                        (Ne = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                  }
                                  return e;
                              }),
                        Ne.apply(null, arguments)
                    );
                }
                const je = (e) => {
                    let t = e.size,
                        r = e.value,
                        n = e.isEmpty,
                        a = e.fadeInAnimation,
                        i = e.hide,
                        l = e.maximumNumber,
                        o = e.className,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, Ge);
                    const c = n ? null : r,
                        d = 'string' == typeof c;
                    if ((c && !d && c < 0) || 0 === c) return null;
                    const m = c && !d && c > l,
                        g = fe()(
                            ze.base,
                            ze[`base__${t}`],
                            a && ze.base__animated,
                            i && ze.base__hidden,
                            !c && ze.base__pattern,
                            n && ze.base__empty,
                            o,
                        );
                    return s().createElement(
                        'div',
                        Ne({ className: g }, u),
                        s().createElement('div', { className: ze.bg }),
                        s().createElement('div', { className: ze.pattern }),
                        s().createElement(
                            'div',
                            { className: fe()(ze.value, d && ze.value__text) },
                            m ? l : c,
                            m && s().createElement('span', { className: ze.plus }, '+'),
                        ),
                    );
                };
                je.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Fe = {
                    base: 'EntryPoint_base_aa',
                    bg: 'EntryPoint_bg_ae',
                    base__disabled: 'EntryPoint_base__disabled_dd',
                    stroke: 'EntryPoint_stroke_b5',
                    base__big: 'EntryPoint_base__big_9c',
                    base__wideSmall: 'EntryPoint_base__wideSmall_bf',
                    base__thinSmall: 'EntryPoint_base__thinSmall_7e',
                    base__thinExtraSmall: 'EntryPoint_base__thinExtraSmall_95',
                    highlight: 'EntryPoint_highlight_e7',
                    container: 'EntryPoint_container_72',
                    particles: 'EntryPoint_particles_2a',
                    new: 'EntryPoint_new_2c',
                    content: 'EntryPoint_content_db',
                    title: 'EntryPoint_title_c5',
                    subtitle: 'EntryPoint_subtitle_b8',
                };
                function Ue() {
                    return (
                        (Ue = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                  }
                                  return e;
                              }),
                        Ue.apply(null, arguments)
                    );
                }
                let Be;
                !(function (e) {
                    (e.Big = 'big'),
                        (e.WideSmall = 'wideSmall'),
                        (e.ThinSmall = 'thinSmall'),
                        (e.ThinExtraSmall = 'thinExtraSmall');
                })(Be || (Be = {}));
                const Ve = '302*152',
                    qe = '302*114',
                    Xe = '222*114',
                    Qe = '162*114',
                    Je = { [Ve]: Be.Big, [qe]: Be.WideSmall, [Xe]: Be.ThinSmall, [Qe]: Be.ThinExtraSmall },
                    Ke = {
                        width: 280,
                        height: 170,
                        frameCount: 136,
                        chunk: { count: 1, rows: 20, columns: 7 },
                        getChunkPath: () => 'R.images.story_mode.gui.maps.icons.entryPoint.particles_sequence',
                    },
                    Ye = (function (e) {
                        const t = e.chunk,
                            r = t.rows * t.columns;
                        return (n) => {
                            const a = n % r,
                                i = (a % t.columns) * e.width,
                                l = Math.trunc(a / t.columns) * e.height;
                            return { path: e.getChunkPath(Math.trunc(n / r)), x: i, y: l };
                        };
                    })(Ke),
                    Ze = (0, o.memo)(function ({
                        title: e,
                        subtitle: t,
                        bgFolderName: r,
                        isNew: n,
                        onClick: a,
                        onHoverForSetTime: i,
                        onLeaveAfterSetTime: l,
                    }) {
                        const u = (0, o.useState)(!1),
                            c = u[0],
                            d = u[1],
                            m = (0, o.useState)(Be.Big),
                            g = m[0],
                            h = m[1],
                            f = (function () {
                                const e = (0, o.useRef)(0);
                                var t;
                                return (
                                    (t = () => {
                                        window.clearTimeout(e.current);
                                    }),
                                    (0, o.useEffect)(() => t, []),
                                    (0, o.useMemo)(
                                        () => ({
                                            run: (t, r) => {
                                                window.clearTimeout(e.current),
                                                    (e.current = window.setTimeout(() => {
                                                        (e.current = 0), t();
                                                    }, r));
                                            },
                                            clear: () => {
                                                window.clearTimeout(e.current), (e.current = 0);
                                            },
                                            get isRunning() {
                                                return 0 !== e.current;
                                            },
                                        }),
                                        [],
                                    )
                                );
                            })(),
                            v = (0, o.useRef)(!1),
                            w = (0, o.useRef)(!1),
                            b = R.images.story_mode.gui.maps.icons.$dyn(r),
                            E = (function (e = {}, t = []) {
                                var r, n, a, i;
                                const l = (0, o.useState)(null != (r = e.state) ? r : Ce),
                                    s = l[0],
                                    u = l[1],
                                    c = (0, o.useState)(null != (n = e.initialFrameIndex) ? n : 0),
                                    d = c[0],
                                    m = c[1],
                                    g = (0, o.useState)(null != (a = e.frameTime) ? a : 33),
                                    h = g[0],
                                    f = g[1],
                                    v = (0, o.useState)(null != (i = e.loop) ? i : Re),
                                    w = v[0],
                                    b = v[1],
                                    E = (0, o.useRef)(d),
                                    x = (0, o.useCallback)((e) => {
                                        m(e), u('play');
                                    }, []),
                                    _ = (0, o.useCallback)((e) => {
                                        m(e), u('stop');
                                    }, []),
                                    S = (0, o.useCallback)(() => {
                                        m(0), u('stop');
                                    }, []),
                                    p = (0, o.useCallback)(() => u('play'), []),
                                    y = (0, o.useCallback)(() => {
                                        m(E.current + 1), u('stop');
                                    }, []);
                                return {
                                    props: {
                                        state: s,
                                        initialFrameIndex: d,
                                        frameTime: h,
                                        loop: w,
                                        onAnimate: (0, o.useCallback)((t, r) => {
                                            (E.current = t), null == e.onAnimate || e.onAnimate(t, r);
                                        }, t),
                                        onAnimationDone: (0, o.useCallback)(() => {
                                            S();
                                        }, t),
                                    },
                                    enableLoop: (0, o.useCallback)(() => b(!0), []),
                                    disableLoop: (0, o.useCallback)(() => b(!1), []),
                                    setState: u,
                                    setInitialFrameIndex: m,
                                    setFrameTime: f,
                                    goAndPlay: x,
                                    goAndStop: _,
                                    stop: S,
                                    play: p,
                                    pause: y,
                                };
                            })();
                        return (
                            (0, o.useEffect)(() => {
                                const e = () => {
                                    const e = re.view.getSize('rem'),
                                        t = Je[`${e.width}*${e.height}`];
                                    t ? h(t) : console.warn(`Can't find banner size ${e.width}*${e.height}`);
                                };
                                return (
                                    re.client.events.on('screenResized', e),
                                    re.client.events.on('self.onScaleUpdated', e),
                                    e(),
                                    () => {
                                        re.client.events.off('screenResized', e),
                                            re.client.events.off('self.onScaleUpdated', e);
                                    }
                                );
                            }, []),
                            s().createElement(
                                'div',
                                {
                                    className: fe()(Fe.base, Fe[`base__${g}`]),
                                    onClick: () => {
                                        re.sound.play.click(), a();
                                    },
                                    onMouseEnter: () => {
                                        re.sound.play.highlight(),
                                            d(!0),
                                            (v.current = !0),
                                            f.run(() => {
                                                v.current && (i(), (w.current = !0));
                                            }, 2e3);
                                    },
                                    onMouseLeave: () => {
                                        d(!1), (v.current = !1), w.current && l(), (w.current = !1), f.clear();
                                    },
                                },
                                s().createElement('div', {
                                    className: Fe.bg,
                                    style: { backgroundImage: `url(${b.$dyn(`size_${g}`)})` },
                                }),
                                s().createElement('div', { className: Fe.stroke }),
                                c &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: Fe.highlight }),
                                        s().createElement(
                                            Oe,
                                            Ue({}, E.props, {
                                                width: Ke.width,
                                                height: Ke.height,
                                                frameCount: Ke.frameCount,
                                                getImageSource: Ye,
                                                frameTime: 50,
                                                className: Fe.particles,
                                                loop: !0,
                                            }),
                                        ),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: Fe.container, onMouseEnter: re.sound.play.highlight },
                                    s().createElement(je, {
                                        className: Fe.new,
                                        size: 'small',
                                        value: R.strings.sm_lobby.entryPoint.new(),
                                        hide: !n,
                                        fadeInAnimation: !0,
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: Fe.content },
                                        s().createElement('div', { className: Fe.title }, e),
                                        s().createElement('div', { className: Fe.subtitle }, t),
                                    ),
                                ),
                            )
                        );
                    });
                var et = r(3403);
                function tt() {
                    return !1;
                }
                console.log;
                var rt = r(9174);
                function nt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const at = (e) => (0 === e ? window : window.subViews.get(e)),
                    it = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: a, mocks: i }) {
                                const l = (0, o.useRef)([]),
                                    u = (e, r, n) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = at,
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
                                                            s = re.view.addModelObserver(o, t, !0);
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
                                                                                    return nt(e, t);
                                                                                var r = {}.toString
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
                                                                                          ? nt(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        r && (e = r);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
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
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(t)) : o.readByPath(t),
                                            u = (e) => l.current.push(e),
                                            c = (({ observableModel: e }) =>
                                                e.primitives([
                                                    'startDate',
                                                    'endDate',
                                                    'isNew',
                                                    'title',
                                                    'subtitle',
                                                    'bgFolderName',
                                                ]))({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const n = null != r ? r : s(t),
                                                            a = rt.LO.box(n, { equals: tt });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, rt.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const n = null != r ? r : s(t),
                                                            a = rt.LO.box(n, { equals: tt });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, rt.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const n = s(r);
                                                        if (Array.isArray(t)) {
                                                            const a = t.reduce(
                                                                (e, t) => ((e[t] = rt.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, rt.aD)((e) => {
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
                                                                i = Object.entries(a),
                                                                l = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = rt.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, rt.aD)((e) => {
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
                                                cleanup: u,
                                            }),
                                            d = { mode: e, model: c, externalModel: o, cleanup: u };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && n ? n.controls(d) : t(d),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    c = (0, o.useRef)(!1),
                                    d = (0, o.useState)(e),
                                    m = d[0],
                                    g = d[1],
                                    h = (0, o.useState)(() => u(e, n, i)),
                                    f = h[0],
                                    v = h[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        c.current ? v(u(m, n, i)) : (c.current = !0);
                                    }, [i, m, n]),
                                    (0, o.useEffect)(() => {
                                        g(e);
                                    }, [e]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    s().createElement(r.Provider, { value: f }, a)
                                );
                            },
                            () => (0, o.useContext)(r),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        click: e.createCallbackNoArgs('onClick'),
                        hoverForSetTime: e.createCallbackNoArgs('onHoverForSetTime'),
                        leaveAfterSetTime: e.createCallbackNoArgs('onLeaveAfterSetTime'),
                    })),
                    lt = it[0],
                    ot = it[1],
                    st = (0, et.Pi)(() => {
                        const e = ot(),
                            t = e.controls,
                            r = e.model;
                        return s().createElement(Ze, {
                            title: r.title.get(),
                            subtitle: r.subtitle.get(),
                            bgFolderName: r.bgFolderName.get(),
                            isNew: r.isNew.get(),
                            onClick: t.click,
                            onLeaveAfterSetTime: t.hoverForSetTime,
                            onHoverForSetTime: t.leaveAfterSetTime,
                        });
                    });
                engine.whenReady.then(() => {
                    Pe().render(
                        s().createElement(lt, null, s().createElement(Me, null, s().createElement(st, null))),
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
                for (c = 0; c < e.length; c++) {
                    for (var [r, a, i] = e[c], o = !0, s = 0; s < r.length; s++)
                        (!1 & i || l >= i) && Object.keys(n.O).every((e) => n.O[e](r[s]))
                            ? r.splice(s--, 1)
                            : ((o = !1), i < l && (l = i));
                    if (o) {
                        e.splice(c--, 1);
                        var u = a();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [r, a, i];
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
        (n.j = 375),
        (() => {
            var e = { 375: 0 };
            n.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var a,
                        i,
                        [l, o, s] = r,
                        u = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (a in o) n.o(o, a) && (n.m[a] = o[a]);
                        if (s) var c = s(n);
                    }
                    for (t && t(r); u < l.length; u++) (i = l[u]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return n.O(c);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var a = n.O(void 0, [503], () => n(8680));
    a = n.O(a);
})();
