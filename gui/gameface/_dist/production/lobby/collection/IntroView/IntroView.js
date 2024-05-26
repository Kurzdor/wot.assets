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
                r.r(a), r.d(a, { mouse: () => h, onResize: () => c });
                var n = {};
                r.r(n),
                    r.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => f,
                        getSize: () => v,
                        graphicsQuality: () => x,
                    });
                var i = {};
                r.r(i), r.d(i, { getBgUrl: () => _, getTextureUrl: () => E });
                var l = {};
                r.r(l),
                    r.d(l, {
                        addModelObserver: () => I,
                        addPreloadTexture: () => T,
                        children: () => i,
                        displayStatus: () => b,
                        displayStatusIs: () => q,
                        events: () => w,
                        extraSize: () => Q,
                        forceTriggerMouseMove: () => V,
                        freezeTextureBeforeResize: () => k,
                        getBrowserTexturePath: () => W,
                        getDisplayStatus: () => X,
                        getScale: () => B,
                        getSize: () => D,
                        getViewGlobalPosition: () => P,
                        isEventHandled: () => F,
                        isFocused: () => N,
                        pxToRem: () => $,
                        remToPx: () => z,
                        resize: () => G,
                        sendEvent: () => A,
                        setAnimateWindow: () => j,
                        setEventHandled: () => U,
                        setInputPaddingsRem: () => C,
                        setSidePaddingsRem: () => O,
                        whenTutorialReady: () => J,
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
                function m(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const c = d('clientResized'),
                    g = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') };
                const h = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && m(!1);
                    }
                    function r() {
                        e.enabled && m(!0);
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
                            : m(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${t}`,
                                        l = g[t]((e) => r([e, 'outside']));
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
                            e.enabled && m(!0);
                        },
                        disableOutside() {
                            e.enabled && m(!1);
                        },
                    });
                })();
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function f(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const x = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function E(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function _(e, t, r) {
                    return `url(${E(e, t, r)})`;
                }
                const b = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    w = {
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
                    L = ['args'];
                const p = 2,
                    S = 16,
                    H = 32,
                    y = 64,
                    M = (e, t) => {
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
                                })(t, L);
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
                    A = {
                        close(e) {
                            M('popover' === e ? p : H);
                        },
                        minimize() {
                            M(y);
                        },
                        move(e) {
                            M(S, { isMouseEvent: !0, on: e });
                        },
                    };
                function T(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function C(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function W(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function I(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function O(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function G(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function P(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: z(t.x), y: z(t.y) };
                }
                function k() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function B() {
                    return viewEnv.getScale();
                }
                function $(e) {
                    return viewEnv.pxToRem(e);
                }
                function z(e) {
                    return viewEnv.remToPx(e);
                }
                function j(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function N() {
                    return viewEnv.isFocused();
                }
                function U() {
                    return viewEnv.setEventHandled();
                }
                function F() {
                    return viewEnv.isEventHandled();
                }
                function V() {
                    viewEnv.forceTriggerMouseMove();
                }
                function X() {
                    return viewEnv.getShowingStatus();
                }
                const q = Object.keys(b).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === b[t]), e), {}),
                    Q = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    J = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : w.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    K = { view: l, client: n };
                const Y = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var Z;
                function ee(e, t, r) {
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
                })(Z || (Z = {}));
                const te = K.client.getSize('rem'),
                    re = te.width,
                    ae = te.height,
                    ne = Object.assign({ width: re, height: ae }, ee(re, ae, Y)),
                    ie = (0, o.createContext)(ne),
                    le = ['children'];
                const oe = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, le);
                    const a = (0, o.useContext)(ie),
                        n = a.extraLarge,
                        i = a.large,
                        l = a.medium,
                        s = a.small,
                        d = a.extraSmall,
                        m = a.extraLargeWidth,
                        c = a.largeWidth,
                        g = a.mediumWidth,
                        h = a.smallWidth,
                        v = a.extraSmallWidth,
                        f = a.extraLargeHeight,
                        x = a.largeHeight,
                        E = a.mediumHeight,
                        _ = a.smallHeight,
                        b = a.extraSmallHeight,
                        w = { extraLarge: f, large: x, medium: E, small: _, extraSmall: b };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && n) return t;
                        if (r.large && i) return t;
                        if (r.medium && l) return t;
                        if (r.small && s) return t;
                        if (r.extraSmall && d) return t;
                    } else {
                        if (r.extraLargeWidth && m) return u(t, r, w);
                        if (r.largeWidth && c) return u(t, r, w);
                        if (r.mediumWidth && g) return u(t, r, w);
                        if (r.smallWidth && h) return u(t, r, w);
                        if (r.extraSmallWidth && v) return u(t, r, w);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && f) return t;
                            if (r.largeHeight && x) return t;
                            if (r.mediumHeight && E) return t;
                            if (r.smallHeight && _) return t;
                            if (r.extraSmallHeight && b) return t;
                        }
                    }
                    return null;
                };
                oe.defaultProps = {
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
                (0, o.memo)(oe);
                const se = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    ue = (0, o.memo)(({ children: e }) => {
                        const t = (0, o.useContext)(ie),
                            r = (0, o.useState)(t),
                            a = r[0],
                            n = r[1],
                            i = (0, o.useCallback)((e, t) => {
                                const r = K.view.pxToRem(e),
                                    a = K.view.pxToRem(t);
                                n(Object.assign({ width: r, height: a }, ee(r, a, Y)));
                            }, []);
                        se(() => {
                            engine.on('clientResized', i);
                        }),
                            (0, o.useEffect)(() => () => engine.off('clientResized', i), [i]);
                        const l = (0, o.useMemo)(() => Object.assign({}, a), [a]);
                        return s().createElement(ie.Provider, { value: l }, e);
                    });
                var de = r(483),
                    me = r.n(de),
                    ce = r(926),
                    ge = r.n(ce);
                let he, ve, fe;
                !(function (e) {
                    (e[(e.ExtraSmall = Y.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = Y.small.width)] = 'Small'),
                        (e[(e.Medium = Y.medium.width)] = 'Medium'),
                        (e[(e.Large = Y.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = Y.extraLarge.width)] = 'ExtraLarge');
                })(he || (he = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = Y.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = Y.small.width)] = 'Small'),
                            (e[(e.Medium = Y.medium.width)] = 'Medium'),
                            (e[(e.Large = Y.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = Y.extraLarge.width)] = 'ExtraLarge');
                    })(ve || (ve = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = Y.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = Y.small.height)] = 'Small'),
                            (e[(e.Medium = Y.medium.height)] = 'Medium'),
                            (e[(e.Large = Y.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = Y.extraLarge.height)] = 'ExtraLarge');
                    })(fe || (fe = {}));
                const xe = () => {
                        const e = (0, o.useContext)(ie),
                            t = e.width,
                            r = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return he.ExtraLarge;
                                    case e.large:
                                        return he.Large;
                                    case e.medium:
                                        return he.Medium;
                                    case e.small:
                                        return he.Small;
                                    case e.extraSmall:
                                        return he.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), he.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return ve.ExtraLarge;
                                    case e.largeWidth:
                                        return ve.Large;
                                    case e.mediumWidth:
                                        return ve.Medium;
                                    case e.smallWidth:
                                        return ve.Small;
                                    case e.extraSmallWidth:
                                        return ve.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), ve.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return fe.ExtraLarge;
                                    case e.largeHeight:
                                        return fe.Large;
                                    case e.mediumHeight:
                                        return fe.Medium;
                                    case e.smallHeight:
                                        return fe.Small;
                                    case e.extraSmallHeight:
                                        return fe.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), fe.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: i, remScreenWidth: t, remScreenHeight: r };
                    },
                    Ee = ['children', 'className'];
                function _e() {
                    return (
                        (_e =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        _e.apply(this, arguments)
                    );
                }
                const be = {
                        [ve.ExtraSmall]: '',
                        [ve.Small]: ge().SMALL_WIDTH,
                        [ve.Medium]: `${ge().SMALL_WIDTH} ${ge().MEDIUM_WIDTH}`,
                        [ve.Large]: `${ge().SMALL_WIDTH} ${ge().MEDIUM_WIDTH} ${ge().LARGE_WIDTH}`,
                        [ve.ExtraLarge]: `${ge().SMALL_WIDTH} ${ge().MEDIUM_WIDTH} ${ge().LARGE_WIDTH} ${ge().EXTRA_LARGE_WIDTH}`,
                    },
                    we = {
                        [fe.ExtraSmall]: '',
                        [fe.Small]: ge().SMALL_HEIGHT,
                        [fe.Medium]: `${ge().SMALL_HEIGHT} ${ge().MEDIUM_HEIGHT}`,
                        [fe.Large]: `${ge().SMALL_HEIGHT} ${ge().MEDIUM_HEIGHT} ${ge().LARGE_HEIGHT}`,
                        [fe.ExtraLarge]: `${ge().SMALL_HEIGHT} ${ge().MEDIUM_HEIGHT} ${ge().LARGE_HEIGHT} ${ge().EXTRA_LARGE_HEIGHT}`,
                    },
                    Le = {
                        [he.ExtraSmall]: '',
                        [he.Small]: ge().SMALL,
                        [he.Medium]: `${ge().SMALL} ${ge().MEDIUM}`,
                        [he.Large]: `${ge().SMALL} ${ge().MEDIUM} ${ge().LARGE}`,
                        [he.ExtraLarge]: `${ge().SMALL} ${ge().MEDIUM} ${ge().LARGE} ${ge().EXTRA_LARGE}`,
                    },
                    pe = (e) => {
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
                            })(e, Ee);
                        const n = xe(),
                            i = n.mediaWidth,
                            l = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', _e({ className: me()(r, be[i], we[l], Le[o]) }, a), t);
                    },
                    Se = ['children'];
                const He = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, Se);
                    return s().createElement(ue, null, s().createElement(pe, r, t));
                };
                var ye = r(493),
                    Me = r.n(ye);
                function Ae(e) {
                    engine.call('PlaySound', e);
                }
                const Te = {
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
                let Ce, Re;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Ce || (Ce = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Re || (Re = {}));
                const We = ({
                    children: e,
                    size: t,
                    isFocused: r,
                    type: a,
                    disabled: n,
                    mixClass: i,
                    soundHover: l,
                    soundClick: u,
                    onMouseEnter: d,
                    onMouseMove: m,
                    onMouseDown: c,
                    onMouseUp: g,
                    onMouseLeave: h,
                    onClick: v,
                }) => {
                    const f = (0, o.useRef)(null),
                        x = (0, o.useState)(r),
                        E = x[0],
                        _ = x[1],
                        b = (0, o.useState)(!1),
                        w = b[0],
                        L = b[1],
                        p = (0, o.useState)(!1),
                        S = p[0],
                        H = p[1],
                        y = (0, o.useCallback)(() => {
                            n || (f.current && (f.current.focus(), _(!0)));
                        }, [n]),
                        M = (0, o.useCallback)(
                            (e) => {
                                E && null !== f.current && !f.current.contains(e.target) && _(!1);
                            },
                            [E],
                        ),
                        A = (0, o.useCallback)(
                            (e) => {
                                n || (v && v(e));
                            },
                            [n, v],
                        ),
                        T = (0, o.useCallback)(
                            (e) => {
                                n || (null !== l && Ae(l), d && d(e), H(!0));
                            },
                            [n, l, d],
                        ),
                        C = (0, o.useCallback)(
                            (e) => {
                                m && m(e);
                            },
                            [m],
                        ),
                        W = (0, o.useCallback)(
                            (e) => {
                                n || (g && g(e), L(!1));
                            },
                            [n, g],
                        ),
                        I = (0, o.useCallback)(
                            (e) => {
                                n || (null !== u && Ae(u), c && c(e), r && y(), L(!0));
                            },
                            [n, u, c, y, r],
                        ),
                        O = (0, o.useCallback)(
                            (e) => {
                                n || (h && h(e), L(!1));
                            },
                            [n, h],
                        ),
                        D = me()(
                            Te.base,
                            Te[`base__${a}`],
                            {
                                [Te.base__disabled]: n,
                                [Te[`base__${t}`]]: t,
                                [Te.base__focus]: E,
                                [Te.base__highlightActive]: w,
                                [Te.base__firstHover]: S,
                            },
                            i,
                        ),
                        G = me()(Te.state, Te.state__default);
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
                            _(r);
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
                            a !== Ce.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Te.back }),
                                    s().createElement('span', { className: Te.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: G },
                                s().createElement('span', { className: Te.stateDisabled }),
                                s().createElement('span', { className: Te.stateHighlightHover }),
                                s().createElement('span', { className: Te.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Te.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                We.defaultProps = { type: Ce.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ie = (0, o.memo)(We);
                var Oe = r(515);
                function De() {
                    return !1;
                }
                console.log;
                var Ge = r(174);
                function Pe(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return ke(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return ke(e, t);
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
                function ke(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const Be = (e) => (0 === e ? window : window.subViews.get(e));
                const $e = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: n, children: i, mocks: l }) {
                                const u = (0, o.useRef)([]),
                                    d = (r, a, n) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = Be,
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
                                                            s = K.view.addModelObserver(o, t, !0);
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
                                                        for (var e, r = Pe(n.keys()); !(e = r()).done; ) i(e.value, t);
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
                                            m = e({
                                                mode: r,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = Ge.LO.box(a, { equals: De });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Ge.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = Ge.LO.box(a, { equals: De });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Ge.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = s(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = Ge.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, Ge.aD)((t) => {
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
                                                                    (e, [t, r]) => ((e[r] = Ge.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, Ge.aD)((e) => {
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
                                            c = { mode: r, model: m, externalModel: o, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === r && n ? n.controls(c) : t(c),
                                            externalModel: o,
                                            mode: r,
                                        };
                                    },
                                    m = (0, o.useRef)(!1),
                                    c = (0, o.useState)(a),
                                    g = c[0],
                                    h = c[1],
                                    v = (0, o.useState)(() => d(a, n, l)),
                                    f = v[0],
                                    x = v[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        m.current ? x(d(g, n, l)) : (m.current = !0);
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
                    ze = $e[0],
                    je = $e[1],
                    Ne = {
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
                    Ue = R.strings.collections.intro,
                    Fe = (0, Oe.Pi)(() => {
                        const e = je().controls;
                        return s().createElement(
                            'div',
                            { className: Ne.base },
                            s().createElement('div', { className: Ne.animationBg }),
                            s().createElement(
                                'div',
                                { className: Ne.animationMain },
                                s().createElement('div', { className: Ne.header }, Ue.header.text()),
                                s().createElement(
                                    'div',
                                    { className: Ne.content },
                                    s().createElement('div', { className: Ne.collectionsArt }),
                                    s().createElement(
                                        'div',
                                        { className: Ne.description },
                                        Ue.content.description.text(),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Ne.footer },
                                    s().createElement(
                                        Ie,
                                        {
                                            type: Ce.primary,
                                            size: Re.medium,
                                            mixClass: Ne.confirm,
                                            soundHover: 'highlight',
                                            soundClick: 'play',
                                            onClick: e.close,
                                        },
                                        Ue.buttonClose.text(),
                                    ),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    Me().render(
                        s().createElement(ze, null, s().createElement(He, null, s().createElement(Fe, null))),
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
