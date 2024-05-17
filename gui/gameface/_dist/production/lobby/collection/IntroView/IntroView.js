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
            229: (e, t, r) => {
                'use strict';
                var a = {};
                r.r(a),
                    r.d(a, { mouse: () => x, off: () => v, on: () => h, onResize: () => m, onScaleUpdated: () => g });
                var n = {};
                r.r(n),
                    r.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => E,
                        getSize: () => _,
                        graphicsQuality: () => b,
                    });
                var i = {};
                r.r(i), r.d(i, { getBgUrl: () => p, getTextureUrl: () => w });
                var l = {};
                r.r(l),
                    r.d(l, {
                        addModelObserver: () => G,
                        addPreloadTexture: () => I,
                        children: () => i,
                        displayStatus: () => L,
                        displayStatusIs: () => K,
                        events: () => S,
                        extraSize: () => Y,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => D,
                        getDisplayStatus: () => J,
                        getScale: () => j,
                        getSize: () => k,
                        getViewGlobalPosition: () => z,
                        isEventHandled: () => q,
                        isFocused: () => V,
                        pxToRem: () => U,
                        remToPx: () => N,
                        resize: () => B,
                        sendEvent: () => W,
                        setAnimateWindow: () => F,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => O,
                        setSidePaddingsRem: () => P,
                        whenTutorialReady: () => Z,
                    });
                var o = r(179),
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
                function d(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const m = d('clientResized'),
                    g = d('self.onScaleUpdated'),
                    h = (e, t) => engine.on(e, t),
                    v = (e, t) => engine.off(e, t),
                    f = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') };
                const x = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function r() {
                        e.enabled && c(!0);
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
                            : c(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${t}`,
                                        l = f[t]((e) => r([e, 'outside']));
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
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function w(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function p(e, t, r) {
                    return `url(${w(e, t, r)})`;
                }
                const L = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    S = {
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
                    H = ['args'];
                const y = 2,
                    M = 16,
                    A = 32,
                    T = 64,
                    C = (e, t) => {
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
                                })(t, H);
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
                    W = {
                        close(e) {
                            C('popover' === e ? y : A);
                        },
                        minimize() {
                            C(T);
                        },
                        move(e) {
                            C(M, { isMouseEvent: !0, on: e });
                        },
                    };
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function O(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function D(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function G(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function P(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function k(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function B(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function z(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: N(t.x), y: N(t.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function j() {
                    return viewEnv.getScale();
                }
                function U(e) {
                    return viewEnv.pxToRem(e);
                }
                function N(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function V() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function q() {
                    return viewEnv.isEventHandled();
                }
                function Q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function J() {
                    return viewEnv.getShowingStatus();
                }
                const K = Object.keys(L).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === L[t]), e), {}),
                    Y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    Z = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : S.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ee = { view: l, client: n };
                const te = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var re;
                function ae(e, t, r) {
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
                })(re || (re = {}));
                const ne = ee.client.getSize('rem'),
                    ie = ne.width,
                    le = ne.height,
                    oe = Object.assign({ width: ie, height: le }, ae(ie, le, te)),
                    se = (0, o.createContext)(oe),
                    ue = ['children'];
                const de = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, ue);
                    const a = (0, o.useContext)(se),
                        n = a.extraLarge,
                        i = a.large,
                        l = a.medium,
                        s = a.small,
                        d = a.extraSmall,
                        c = a.extraLargeWidth,
                        m = a.largeWidth,
                        g = a.mediumWidth,
                        h = a.smallWidth,
                        v = a.extraSmallWidth,
                        f = a.extraLargeHeight,
                        x = a.largeHeight,
                        _ = a.mediumHeight,
                        E = a.smallHeight,
                        b = a.extraSmallHeight,
                        w = { extraLarge: f, large: x, medium: _, small: E, extraSmall: b };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && n) return t;
                        if (r.large && i) return t;
                        if (r.medium && l) return t;
                        if (r.small && s) return t;
                        if (r.extraSmall && d) return t;
                    } else {
                        if (r.extraLargeWidth && c) return u(t, r, w);
                        if (r.largeWidth && m) return u(t, r, w);
                        if (r.mediumWidth && g) return u(t, r, w);
                        if (r.smallWidth && h) return u(t, r, w);
                        if (r.extraSmallWidth && v) return u(t, r, w);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && f) return t;
                            if (r.largeHeight && x) return t;
                            if (r.mediumHeight && _) return t;
                            if (r.smallHeight && E) return t;
                            if (r.extraSmallHeight && b) return t;
                        }
                    }
                    return null;
                };
                de.defaultProps = {
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
                (0, o.memo)(de);
                const ce = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    me = ({ children: e }) => {
                        const t = (0, o.useContext)(se),
                            r = (0, o.useState)(t),
                            a = r[0],
                            n = r[1],
                            i = (0, o.useCallback)((e, t) => {
                                const r = ee.view.pxToRem(e),
                                    a = ee.view.pxToRem(t);
                                n(Object.assign({ width: r, height: a }, ae(r, a, te)));
                            }, []),
                            l = (0, o.useCallback)(() => {
                                const e = ee.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        ce(() => {
                            ee.client.events.on('clientResized', i), ee.client.events.on('self.onScaleUpdated', l);
                        }),
                            (0, o.useEffect)(
                                () => () => {
                                    ee.client.events.off('clientResized', i),
                                        ee.client.events.off('self.onScaleUpdated', l);
                                },
                                [i, l],
                            );
                        const u = (0, o.useMemo)(() => Object.assign({}, a), [a]);
                        return s().createElement(se.Provider, { value: u }, e);
                    };
                var ge = r(483),
                    he = r.n(ge),
                    ve = r(926),
                    fe = r.n(ve);
                let xe, _e, Ee;
                !(function (e) {
                    (e[(e.ExtraSmall = te.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = te.small.width)] = 'Small'),
                        (e[(e.Medium = te.medium.width)] = 'Medium'),
                        (e[(e.Large = te.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = te.extraLarge.width)] = 'ExtraLarge');
                })(xe || (xe = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = te.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = te.small.width)] = 'Small'),
                            (e[(e.Medium = te.medium.width)] = 'Medium'),
                            (e[(e.Large = te.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = te.extraLarge.width)] = 'ExtraLarge');
                    })(_e || (_e = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = te.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = te.small.height)] = 'Small'),
                            (e[(e.Medium = te.medium.height)] = 'Medium'),
                            (e[(e.Large = te.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = te.extraLarge.height)] = 'ExtraLarge');
                    })(Ee || (Ee = {}));
                const be = () => {
                        const e = (0, o.useContext)(se),
                            t = e.width,
                            r = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return xe.ExtraLarge;
                                    case e.large:
                                        return xe.Large;
                                    case e.medium:
                                        return xe.Medium;
                                    case e.small:
                                        return xe.Small;
                                    case e.extraSmall:
                                        return xe.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), xe.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return _e.ExtraLarge;
                                    case e.largeWidth:
                                        return _e.Large;
                                    case e.mediumWidth:
                                        return _e.Medium;
                                    case e.smallWidth:
                                        return _e.Small;
                                    case e.extraSmallWidth:
                                        return _e.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), _e.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return Ee.ExtraLarge;
                                    case e.largeHeight:
                                        return Ee.Large;
                                    case e.mediumHeight:
                                        return Ee.Medium;
                                    case e.smallHeight:
                                        return Ee.Small;
                                    case e.extraSmallHeight:
                                        return Ee.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Ee.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: i, remScreenWidth: t, remScreenHeight: r };
                    },
                    we = ['children', 'className'];
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const Le = {
                        [_e.ExtraSmall]: '',
                        [_e.Small]: fe().SMALL_WIDTH,
                        [_e.Medium]: `${fe().SMALL_WIDTH} ${fe().MEDIUM_WIDTH}`,
                        [_e.Large]: `${fe().SMALL_WIDTH} ${fe().MEDIUM_WIDTH} ${fe().LARGE_WIDTH}`,
                        [_e.ExtraLarge]: `${fe().SMALL_WIDTH} ${fe().MEDIUM_WIDTH} ${fe().LARGE_WIDTH} ${fe().EXTRA_LARGE_WIDTH}`,
                    },
                    Se = {
                        [Ee.ExtraSmall]: '',
                        [Ee.Small]: fe().SMALL_HEIGHT,
                        [Ee.Medium]: `${fe().SMALL_HEIGHT} ${fe().MEDIUM_HEIGHT}`,
                        [Ee.Large]: `${fe().SMALL_HEIGHT} ${fe().MEDIUM_HEIGHT} ${fe().LARGE_HEIGHT}`,
                        [Ee.ExtraLarge]: `${fe().SMALL_HEIGHT} ${fe().MEDIUM_HEIGHT} ${fe().LARGE_HEIGHT} ${fe().EXTRA_LARGE_HEIGHT}`,
                    },
                    He = {
                        [xe.ExtraSmall]: '',
                        [xe.Small]: fe().SMALL,
                        [xe.Medium]: `${fe().SMALL} ${fe().MEDIUM}`,
                        [xe.Large]: `${fe().SMALL} ${fe().MEDIUM} ${fe().LARGE}`,
                        [xe.ExtraLarge]: `${fe().SMALL} ${fe().MEDIUM} ${fe().LARGE} ${fe().EXTRA_LARGE}`,
                    },
                    ye = (e) => {
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
                            })(e, we);
                        const n = be(),
                            i = n.mediaWidth,
                            l = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', pe({ className: he()(r, Le[i], Se[l], He[o]) }, a), t);
                    },
                    Me = ['children'];
                const Ae = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, Me);
                    return s().createElement(me, null, s().createElement(ye, r, t));
                };
                var Te = r(493),
                    Ce = r.n(Te);
                function Re(e) {
                    engine.call('PlaySound', e);
                }
                const We = {
                    base: 'CButton_base_40',
                    base__main: 'CButton_base__main_42',
                    base__primary: 'CButton_base__primary_7f',
                    base__primaryGreen: 'CButton_base__primaryGreen_6f',
                    base__primaryRed: 'CButton_base__primaryRed_ec',
                    base__secondary: 'CButton_base__secondary_50',
                    base__ghost: 'CButton_base__ghost_ed',
                    base__extraSmall: 'CButton_base__extraSmall_27',
                    base__small: 'CButton_base__small_df',
                    base__medium: 'CButton_base__medium_74',
                    base__large: 'CButton_base__large_5c',
                    base__disabled: 'CButton_base__disabled_d9',
                    back: 'CButton_back_e5',
                    texture: 'CButton_texture_fe',
                    state: 'CButton_state_11',
                    base__focus: 'CButton_base__focus_83',
                    stateHighlightHover: 'CButton_stateHighlightHover_ff',
                    stateHighlightActive: 'CButton_stateHighlightActive_35',
                    stateDisabled: 'CButton_stateDisabled_54',
                    base__firstHover: 'CButton_base__firstHover_d5',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
                let Ie, Oe;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Ie || (Ie = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Oe || (Oe = {}));
                const De = ({
                    children: e,
                    size: t,
                    isFocused: r,
                    type: a,
                    disabled: n,
                    mixClass: i,
                    soundHover: l,
                    soundClick: u,
                    onMouseEnter: d,
                    onMouseMove: c,
                    onMouseDown: m,
                    onMouseUp: g,
                    onMouseLeave: h,
                    onClick: v,
                }) => {
                    const f = (0, o.useRef)(null),
                        x = (0, o.useState)(r),
                        _ = x[0],
                        E = x[1],
                        b = (0, o.useState)(!1),
                        w = b[0],
                        p = b[1],
                        L = (0, o.useState)(!1),
                        S = L[0],
                        H = L[1],
                        y = (0, o.useCallback)(() => {
                            n || (f.current && (f.current.focus(), E(!0)));
                        }, [n]),
                        M = (0, o.useCallback)(
                            (e) => {
                                _ && null !== f.current && !f.current.contains(e.target) && E(!1);
                            },
                            [_],
                        ),
                        A = (0, o.useCallback)(
                            (e) => {
                                n || (v && v(e));
                            },
                            [n, v],
                        ),
                        T = (0, o.useCallback)(
                            (e) => {
                                n || (null !== l && Re(l), d && d(e), H(!0));
                            },
                            [n, l, d],
                        ),
                        C = (0, o.useCallback)(
                            (e) => {
                                c && c(e);
                            },
                            [c],
                        ),
                        W = (0, o.useCallback)(
                            (e) => {
                                n || (g && g(e), p(!1));
                            },
                            [n, g],
                        ),
                        I = (0, o.useCallback)(
                            (e) => {
                                n || (null !== u && Re(u), m && m(e), r && y(), p(!0));
                            },
                            [n, u, m, y, r],
                        ),
                        O = (0, o.useCallback)(
                            (e) => {
                                n || (h && h(e), p(!1));
                            },
                            [n, h],
                        ),
                        D = he()(
                            We.base,
                            We[`base__${a}`],
                            {
                                [We.base__disabled]: n,
                                [We[`base__${t}`]]: t,
                                [We.base__focus]: _,
                                [We.base__highlightActive]: w,
                                [We.base__firstHover]: S,
                            },
                            i,
                        ),
                        G = he()(We.state, We.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                        (0, o.useEffect)(() => {
                            E(r);
                        }, [r]),
                        s().createElement(
                            'div',
                            {
                                ref: f,
                                className: D,
                                onMouseEnter: T,
                                onMouseMove: C,
                                onMouseUp: W,
                                onMouseDown: I,
                                onMouseLeave: O,
                                onClick: A,
                            },
                            a !== Ie.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: We.back }),
                                    s().createElement('span', { className: We.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: G },
                                s().createElement('span', { className: We.stateDisabled }),
                                s().createElement('span', { className: We.stateHighlightHover }),
                                s().createElement('span', { className: We.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: We.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                De.defaultProps = { type: Ie.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ge = (0, o.memo)(De);
                var Pe = r(515);
                function ke() {
                    return !1;
                }
                console.log;
                var Be = r(174);
                function ze(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return $e(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return $e(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function $e(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const je = (e) => (0 === e ? window : window.subViews.get(e));
                const Ue = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: n, children: i, mocks: l }) {
                                const u = (0, o.useRef)([]),
                                    d = (r, a, n) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = je,
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
                                                        for (var e, r = ze(n.keys()); !(e = r()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(a),
                                            o =
                                                'real' === r
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (i = null == n ? void 0 : n.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === r ? (null == n ? void 0 : n.getter(e)) : o.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            c = e({
                                                mode: r,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = Be.LO.box(a, { equals: ke });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Be.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = Be.LO.box(a, { equals: ke });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Be.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = s(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = Be.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, Be.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                i = Object.entries(n),
                                                                l = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = Be.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, Be.aD)((e) => {
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
                                            m = { mode: r, model: c, externalModel: o, cleanup: d };
                                        return {
                                            model: c,
                                            controls: 'mocks' === r && n ? n.controls(m) : t(m),
                                            externalModel: o,
                                            mode: r,
                                        };
                                    },
                                    c = (0, o.useRef)(!1),
                                    m = (0, o.useState)(a),
                                    g = m[0],
                                    h = m[1],
                                    v = (0, o.useState)(() => d(a, n, l)),
                                    f = v[0],
                                    x = v[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        c.current ? x(d(g, n, l)) : (c.current = !0);
                                    }, [l, g, n]),
                                    (0, o.useEffect)(() => {
                                        h(a);
                                    }, [a]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), u.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    s().createElement(r.Provider, { value: f }, i)
                                );
                            },
                            () => (0, o.useContext)(r),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() };
                            return Object.assign({}, t, { computes: {} });
                        },
                        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
                    ),
                    Ne = Ue[0],
                    Fe = Ue[1],
                    Ve = {
                        base: 'App_base_c5',
                        animationMain: 'App_animationMain_88',
                        fadeIn: 'App_fadeIn_72',
                        animationBg: 'App_animationBg_9c',
                        header: 'App_header_5b',
                        content: 'App_content_a7',
                        collectionsArt: 'App_collectionsArt_cb',
                        description: 'App_description_2c',
                        footer: 'App_footer_9d',
                    },
                    Xe = R.strings.collections.intro,
                    qe = (0, Pe.Pi)(() => {
                        const e = Fe().controls;
                        return s().createElement(
                            'div',
                            { className: Ve.base },
                            s().createElement('div', { className: Ve.animationBg }),
                            s().createElement(
                                'div',
                                { className: Ve.animationMain },
                                s().createElement('div', { className: Ve.header }, Xe.header.text()),
                                s().createElement(
                                    'div',
                                    { className: Ve.content },
                                    s().createElement('div', { className: Ve.collectionsArt }),
                                    s().createElement(
                                        'div',
                                        { className: Ve.description },
                                        Xe.content.description.text(),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Ve.footer },
                                    s().createElement(
                                        Ge,
                                        {
                                            type: Ie.primary,
                                            size: Oe.medium,
                                            mixClass: Ve.confirm,
                                            soundHover: 'highlight',
                                            soundClick: 'play',
                                            onClick: e.close,
                                        },
                                        Xe.buttonClose.text(),
                                    ),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    Ce().render(
                        s().createElement(Ne, null, s().createElement(Ae, null, s().createElement(qe, null))),
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
                for (d = 0; d < e.length; d++) {
                    for (var [r, n, i] = e[d], o = !0, s = 0; s < r.length; s++)
                        (!1 & i || l >= i) && Object.keys(a.O).every((e) => a.O[e](r[s]))
                            ? r.splice(s--, 1)
                            : ((o = !1), i < l && (l = i));
                    if (o) {
                        e.splice(d--, 1);
                        var u = n();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
            e[d] = [r, n, i];
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
        (a.j = 561),
        (() => {
            var e = { 561: 0 };
            a.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var n,
                        i,
                        [l, o, s] = r,
                        u = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (n in o) a.o(o, n) && (a.m[n] = o[n]);
                        if (s) var d = s(a);
                    }
                    for (t && t(r); u < l.length; u++) (i = l[u]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return a.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var n = a.O(void 0, [314], () => a(229));
    n = a.O(n);
})();
