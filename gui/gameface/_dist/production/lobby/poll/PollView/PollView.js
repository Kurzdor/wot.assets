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
            877: (e, t, a) => {
                'use strict';
                var r = {};
                a.r(r), a.d(r, { mouse: () => h, onResize: () => m });
                var n = {};
                a.r(n),
                    a.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => v,
                        getSize: () => _,
                        graphicsQuality: () => f,
                    });
                var i = {};
                a.r(i), a.d(i, { getBgUrl: () => b, getTextureUrl: () => x });
                var o = {};
                a.r(o),
                    a.d(o, {
                        addModelObserver: () => k,
                        addPreloadTexture: () => C,
                        children: () => i,
                        displayStatus: () => p,
                        displayStatusIs: () => q,
                        events: () => E,
                        extraSize: () => Q,
                        forceTriggerMouseMove: () => V,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => W,
                        getDisplayStatus: () => X,
                        getScale: () => G,
                        getSize: () => O,
                        getViewGlobalPosition: () => P,
                        isEventHandled: () => F,
                        isFocused: () => N,
                        pxToRem: () => $,
                        remToPx: () => z,
                        resize: () => I,
                        sendEvent: () => T,
                        setAnimateWindow: () => j,
                        setEventHandled: () => U,
                        setInputPaddingsRem: () => A,
                        setSidePaddingsRem: () => B,
                        whenTutorialReady: () => Y,
                    });
                var l = a(179),
                    s = a.n(l);
                const u = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
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
                    g = { down: c('mousedown'), up: c('mouseup'), move: c('mousemove') };
                const h = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && d(!1);
                    }
                    function a() {
                        e.enabled && d(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : d(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${t}`,
                                        o = g[t]((e) => a([e, 'outside']));
                                    function l(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, l),
                                        r(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(i, l),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && d(!0);
                        },
                        disableOutside() {
                            e.enabled && d(!1);
                        },
                    });
                })();
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const f = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function x(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function b(e, t, a) {
                    return `url(${x(e, t, a)})`;
                }
                const p = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    E = {
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
                    w = ['args'];
                const L = 2,
                    S = 16,
                    y = 32,
                    H = 64,
                    M = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        n = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                    return n;
                                })(t, w);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, i, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    T = {
                        close(e) {
                            M('popover' === e ? L : y);
                        },
                        minimize() {
                            M(H);
                        },
                        move(e) {
                            M(S, { isMouseEvent: !0, on: e });
                        },
                    };
                function C(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function A(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function W(e, t, a, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, r);
                }
                function k(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function O(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function I(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function P(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: z(t.x), y: z(t.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function G() {
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
                const q = Object.keys(p).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === p[t]), e), {}),
                    Q = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    Y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : E.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    J = { view: o, client: n };
                const K = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var Z;
                function ee(e, t, a) {
                    const r = (function (e, t) {
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
                        })(e, a),
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
                        })(t, a),
                        i = Math.min(r, n);
                    return {
                        extraLarge: i === a.extraLarge.weight,
                        large: i === a.large.weight,
                        medium: i === a.medium.weight,
                        small: i === a.small.weight,
                        extraSmall: i === a.extraSmall.weight,
                        extraLargeWidth: r === a.extraLarge.weight,
                        largeWidth: r === a.large.weight,
                        mediumWidth: r === a.medium.weight,
                        smallWidth: r === a.small.weight,
                        extraSmallWidth: r === a.extraSmall.weight,
                        extraLargeHeight: n === a.extraLarge.weight,
                        largeHeight: n === a.large.weight,
                        mediumHeight: n === a.medium.weight,
                        smallHeight: n === a.small.weight,
                        extraSmallHeight: n === a.extraSmall.weight,
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
                const te = J.client.getSize('rem'),
                    ae = te.width,
                    re = te.height,
                    ne = Object.assign({ width: ae, height: re }, ee(ae, re, K)),
                    ie = (0, l.createContext)(ne),
                    oe = ['children'];
                const le = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, oe);
                    const r = (0, l.useContext)(ie),
                        n = r.extraLarge,
                        i = r.large,
                        o = r.medium,
                        s = r.small,
                        c = r.extraSmall,
                        d = r.extraLargeWidth,
                        m = r.largeWidth,
                        g = r.mediumWidth,
                        h = r.smallWidth,
                        _ = r.extraSmallWidth,
                        v = r.extraLargeHeight,
                        f = r.largeHeight,
                        x = r.mediumHeight,
                        b = r.smallHeight,
                        p = r.extraSmallHeight,
                        E = { extraLarge: v, large: f, medium: x, small: b, extraSmall: p };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && n) return t;
                        if (a.large && i) return t;
                        if (a.medium && o) return t;
                        if (a.small && s) return t;
                        if (a.extraSmall && c) return t;
                    } else {
                        if (a.extraLargeWidth && d) return u(t, a, E);
                        if (a.largeWidth && m) return u(t, a, E);
                        if (a.mediumWidth && g) return u(t, a, E);
                        if (a.smallWidth && h) return u(t, a, E);
                        if (a.extraSmallWidth && _) return u(t, a, E);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && v) return t;
                            if (a.largeHeight && f) return t;
                            if (a.mediumHeight && x) return t;
                            if (a.smallHeight && b) return t;
                            if (a.extraSmallHeight && p) return t;
                        }
                    }
                    return null;
                };
                le.defaultProps = {
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
                (0, l.memo)(le);
                const se = (e) => {
                        const t = (0, l.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    ue = (0, l.memo)(({ children: e }) => {
                        const t = (0, l.useContext)(ie),
                            a = (0, l.useState)(t),
                            r = a[0],
                            n = a[1],
                            i = (0, l.useCallback)((e, t) => {
                                const a = J.view.pxToRem(e),
                                    r = J.view.pxToRem(t);
                                n(Object.assign({ width: a, height: r }, ee(a, r, K)));
                            }, []);
                        se(() => {
                            engine.on('clientResized', i);
                        }),
                            (0, l.useEffect)(() => () => engine.off('clientResized', i), [i]);
                        const o = (0, l.useMemo)(() => Object.assign({}, r), [r]);
                        return s().createElement(ie.Provider, { value: o }, e);
                    });
                var ce = a(483),
                    de = a.n(ce),
                    me = a(926),
                    ge = a.n(me);
                let he, _e, ve;
                !(function (e) {
                    (e[(e.ExtraSmall = K.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = K.small.width)] = 'Small'),
                        (e[(e.Medium = K.medium.width)] = 'Medium'),
                        (e[(e.Large = K.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = K.extraLarge.width)] = 'ExtraLarge');
                })(he || (he = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = K.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = K.small.width)] = 'Small'),
                            (e[(e.Medium = K.medium.width)] = 'Medium'),
                            (e[(e.Large = K.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = K.extraLarge.width)] = 'ExtraLarge');
                    })(_e || (_e = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = K.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = K.small.height)] = 'Small'),
                            (e[(e.Medium = K.medium.height)] = 'Medium'),
                            (e[(e.Large = K.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = K.extraLarge.height)] = 'ExtraLarge');
                    })(ve || (ve = {}));
                const fe = () => {
                        const e = (0, l.useContext)(ie),
                            t = e.width,
                            a = e.height,
                            r = ((e) => {
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
                                        return ve.ExtraLarge;
                                    case e.largeHeight:
                                        return ve.Large;
                                    case e.mediumHeight:
                                        return ve.Medium;
                                    case e.smallHeight:
                                        return ve.Small;
                                    case e.extraSmallHeight:
                                        return ve.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), ve.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: i, remScreenWidth: t, remScreenHeight: a };
                    },
                    xe = ['children', 'className'];
                function be() {
                    return (
                        (be =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        be.apply(this, arguments)
                    );
                }
                const pe = {
                        [_e.ExtraSmall]: '',
                        [_e.Small]: ge().SMALL_WIDTH,
                        [_e.Medium]: `${ge().SMALL_WIDTH} ${ge().MEDIUM_WIDTH}`,
                        [_e.Large]: `${ge().SMALL_WIDTH} ${ge().MEDIUM_WIDTH} ${ge().LARGE_WIDTH}`,
                        [_e.ExtraLarge]: `${ge().SMALL_WIDTH} ${ge().MEDIUM_WIDTH} ${ge().LARGE_WIDTH} ${ge().EXTRA_LARGE_WIDTH}`,
                    },
                    Ee = {
                        [ve.ExtraSmall]: '',
                        [ve.Small]: ge().SMALL_HEIGHT,
                        [ve.Medium]: `${ge().SMALL_HEIGHT} ${ge().MEDIUM_HEIGHT}`,
                        [ve.Large]: `${ge().SMALL_HEIGHT} ${ge().MEDIUM_HEIGHT} ${ge().LARGE_HEIGHT}`,
                        [ve.ExtraLarge]: `${ge().SMALL_HEIGHT} ${ge().MEDIUM_HEIGHT} ${ge().LARGE_HEIGHT} ${ge().EXTRA_LARGE_HEIGHT}`,
                    },
                    we = {
                        [he.ExtraSmall]: '',
                        [he.Small]: ge().SMALL,
                        [he.Medium]: `${ge().SMALL} ${ge().MEDIUM}`,
                        [he.Large]: `${ge().SMALL} ${ge().MEDIUM} ${ge().LARGE}`,
                        [he.ExtraLarge]: `${ge().SMALL} ${ge().MEDIUM} ${ge().LARGE} ${ge().EXTRA_LARGE}`,
                    },
                    Le = (e) => {
                        let t = e.children,
                            a = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, xe);
                        const n = fe(),
                            i = n.mediaWidth,
                            o = n.mediaHeight,
                            l = n.mediaSize;
                        return s().createElement('div', be({ className: de()(a, pe[i], Ee[o], we[l]) }, r), t);
                    },
                    Se = ['children'];
                const ye = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, Se);
                    return s().createElement(ue, null, s().createElement(Le, a, t));
                };
                var He = a(493),
                    Me = a.n(He);
                function Te(e) {
                    engine.call('PlaySound', e);
                }
                const Ce = {
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
                let Ae, Re;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Ae || (Ae = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Re || (Re = {}));
                const We = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: r,
                    disabled: n,
                    mixClass: i,
                    soundHover: o,
                    soundClick: u,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: g,
                    onMouseLeave: h,
                    onClick: _,
                }) => {
                    const v = (0, l.useRef)(null),
                        f = (0, l.useState)(a),
                        x = f[0],
                        b = f[1],
                        p = (0, l.useState)(!1),
                        E = p[0],
                        w = p[1],
                        L = (0, l.useState)(!1),
                        S = L[0],
                        y = L[1],
                        H = (0, l.useCallback)(() => {
                            n || (v.current && (v.current.focus(), b(!0)));
                        }, [n]),
                        M = (0, l.useCallback)(
                            (e) => {
                                x && null !== v.current && !v.current.contains(e.target) && b(!1);
                            },
                            [x],
                        ),
                        T = (0, l.useCallback)(
                            (e) => {
                                n || (_ && _(e));
                            },
                            [n, _],
                        ),
                        C = (0, l.useCallback)(
                            (e) => {
                                n || (null !== o && Te(o), c && c(e), y(!0));
                            },
                            [n, o, c],
                        ),
                        A = (0, l.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        W = (0, l.useCallback)(
                            (e) => {
                                n || (g && g(e), w(!1));
                            },
                            [n, g],
                        ),
                        k = (0, l.useCallback)(
                            (e) => {
                                n || (null !== u && Te(u), m && m(e), a && H(), w(!0));
                            },
                            [n, u, m, H, a],
                        ),
                        B = (0, l.useCallback)(
                            (e) => {
                                n || (h && h(e), w(!1));
                            },
                            [n, h],
                        ),
                        O = de()(
                            Ce.base,
                            Ce[`base__${r}`],
                            {
                                [Ce.base__disabled]: n,
                                [Ce[`base__${t}`]]: t,
                                [Ce.base__focus]: x,
                                [Ce.base__highlightActive]: E,
                                [Ce.base__firstHover]: S,
                            },
                            i,
                        ),
                        I = de()(Ce.state, Ce.state__default);
                    return (
                        (0, l.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                        (0, l.useEffect)(() => {
                            b(a);
                        }, [a]),
                        s().createElement(
                            'div',
                            {
                                ref: v,
                                className: O,
                                onMouseEnter: C,
                                onMouseMove: A,
                                onMouseUp: W,
                                onMouseDown: k,
                                onMouseLeave: B,
                                onClick: T,
                            },
                            r !== Ae.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Ce.back }),
                                    s().createElement('span', { className: Ce.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: I },
                                s().createElement('span', { className: Ce.stateDisabled }),
                                s().createElement('span', { className: Ce.stateHighlightHover }),
                                s().createElement('span', { className: Ce.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Ce.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                We.defaultProps = { type: Ae.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ke = (0, l.memo)(We),
                    Be = {
                        base: 'TextButton_base_b6',
                        base__right: 'TextButton_base__right_39',
                        icon: 'TextButton_icon_17',
                        icon__back: 'TextButton_icon__back_43',
                        icon__forward: 'TextButton_icon__forward_59',
                        icon__close: 'TextButton_icon__close_53',
                        icon__info: 'TextButton_icon__info_33',
                        glow: 'TextButton_glow_a4',
                        caption: 'TextButton_caption_82',
                        caption__back: 'TextButton_caption__back_b9',
                        caption__forward: 'TextButton_caption__forward_4e',
                        caption__close: 'TextButton_caption__close_36',
                        caption__info: 'TextButton_caption__info_23',
                        goto: 'TextButton_goto_e7',
                        base__left: 'TextButton_base__left_ff',
                        shine: 'TextButton_shine_e2',
                    },
                    Oe = [
                        'caption',
                        'onClick',
                        'goto',
                        'side',
                        'type',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'soundClick',
                        'soundHover',
                    ];
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                class Pe extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Te(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Te(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            a = e.onClick,
                            r = e.goto,
                            n = e.side,
                            i = e.type,
                            o = e.classNames,
                            l = e.onMouseEnter,
                            u = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        n = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                    return n;
                                })(e, Oe)),
                            g = de()(Be.base, Be[`base__${i}`], Be[`base__${n}`], null == o ? void 0 : o.base),
                            h = de()(Be.icon, Be[`icon__${i}`], Be[`icon__${n}`], null == o ? void 0 : o.icon),
                            _ = de()(Be.glow, null == o ? void 0 : o.glow),
                            v = de()(Be.caption, Be[`caption__${i}`], null == o ? void 0 : o.caption),
                            f = de()(Be.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            Ie(
                                {
                                    className: g,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(u),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                m,
                            ),
                            'info' !== i && s().createElement('div', { className: Be.shine }),
                            s().createElement('div', { className: h }, s().createElement('div', { className: _ })),
                            s().createElement('div', { className: v }, t),
                            r && s().createElement('div', { className: f }, r),
                        );
                    }
                }
                let De;
                (Pe.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.SURVEY = 'survey'), (e.APPLICATION_FORM = 'application_form');
                    })(De || (De = {}));
                var Ge = a(515);
                function $e() {
                    return !1;
                }
                console.log;
                var ze = a(174);
                function je(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ne(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return Ne(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ne(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                    return r;
                }
                const Ue = (e) => (0 === e ? window : window.subViews.get(e));
                const Fe = ((e, t) => {
                        const a = (0, l.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: n, children: i, mocks: o }) {
                                const u = (0, l.useRef)([]),
                                    c = (a, r, n) => {
                                        var i;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = Ue,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, a) => {
                                                        a.forEach((t) => {
                                                            const a = n.get(t);
                                                            void 0 !== a && a(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const n = a(t),
                                                        i = r.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (a, i) => {
                                                        const l = 'string' == typeof i ? `${r}.${i}` : r,
                                                            s = J.view.addModelObserver(l, t, !0);
                                                        return n.set(s, a), e && a(o(i)), s;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const a = o(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, a = je(n.keys()); !(e = a()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            l =
                                                'real' === a
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (i = null == n ? void 0 : n.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === a ? (null == n ? void 0 : n.getter(e)) : l.readByPath(e),
                                            c = (e) => u.current.push(e),
                                            d = e({
                                                mode: a,
                                                readByPath: s,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : s(e),
                                                            n = ze.LO.box(r, { equals: $e });
                                                        return (
                                                            'real' === a &&
                                                                l.subscribe(
                                                                    (0, ze.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : s(e),
                                                            n = ze.LO.box(r, { equals: $e });
                                                        return (
                                                            'real' === a &&
                                                                l.subscribe(
                                                                    (0, ze.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = s(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = ze.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    l.subscribe(
                                                                        (0, ze.aD)((t) => {
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
                                                                o = i.reduce(
                                                                    (e, [t, a]) => ((e[a] = ze.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    l.subscribe(
                                                                        (0, ze.aD)((e) => {
                                                                            i.forEach(([t, a]) => {
                                                                                o[a].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            m = { mode: a, model: d, externalModel: l, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === a && n ? n.controls(m) : t(m),
                                            externalModel: l,
                                            mode: a,
                                        };
                                    },
                                    d = (0, l.useRef)(!1),
                                    m = (0, l.useState)(r),
                                    g = m[0],
                                    h = m[1],
                                    _ = (0, l.useState)(() => c(r, n, o)),
                                    v = _[0],
                                    f = _[1];
                                return (
                                    (0, l.useEffect)(() => {
                                        d.current ? f(c(g, n, o)) : (d.current = !0);
                                    }, [o, g, n]),
                                    (0, l.useEffect)(() => {
                                        h(r);
                                    }, [r]),
                                    (0, l.useEffect)(
                                        () => () => {
                                            v.externalModel.dispose(), u.current.forEach((e) => e());
                                        },
                                        [v],
                                    ),
                                    s().createElement(a.Provider, { value: v }, i)
                                );
                            },
                            () => (0, l.useContext)(a),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() };
                            return Object.assign({}, t, { computes: {} });
                        },
                        ({ externalModel: e }) => ({
                            onGoToPoll: e.createCallback((e) => e || {}, 'onGoToPoll'),
                            onWindowClose: e.createCallback((e) => e || {}, 'onWindowClose'),
                        }),
                    ),
                    Ve = Fe[0],
                    Xe = Fe[1],
                    qe = 'App_base_86',
                    Qe = 'App_base__survey_a9',
                    Ye = 'App_base__applicationForm_04',
                    Je = 'App_closeButton_56',
                    Ke = 'App_poll_85',
                    Ze = 'App_header_bd',
                    et = 'App_imageWrapper_a5',
                    tt = 'App_title_05',
                    at = 'App_text_3b',
                    rt = 'App_actions_2e',
                    nt = 'App_btnsContainer_c9',
                    it = 'App_buttonMix_f1',
                    ot = 'App_info_1a',
                    lt = R.strings.poll,
                    st = R.images.gui.maps.icons.poll,
                    ut = (0, Ge.Pi)(() => {
                        const e = Xe(),
                            t = e.controls,
                            a = e.model.root.get(),
                            r = a.title,
                            n = a.text,
                            i = a.submitButtonLbl,
                            o = a.cancelButtonLbl,
                            u = a.viewType,
                            c = t.onGoToPoll,
                            d = t.onWindowClose,
                            m = (0, l.useCallback)(() => c(), [c]),
                            g = (0, l.useCallback)(() => d(), [d]),
                            h = (0, l.useMemo)(() => {
                                switch (u) {
                                    case De.SURVEY:
                                        return [Qe, lt.viewType.survey(), st.survey()];
                                    case De.APPLICATION_FORM:
                                        return [Ye, lt.viewType.applicationForm(), st.application_form()];
                                    default:
                                        return [Qe, lt.viewType.survey(), st.survey()];
                                }
                            }, [u]),
                            _ = h[0],
                            v = h[1],
                            f = h[2];
                        return s().createElement(
                            'div',
                            { className: de()(qe, _) },
                            s().createElement(
                                'div',
                                { className: Je },
                                s().createElement(Pe, {
                                    caption: R.strings.winback.winbackRewardView.buttons.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: g,
                                }),
                            ),
                            s().createElement('div', { className: Ze }, v),
                            s().createElement(
                                'div',
                                { className: Ke },
                                s().createElement(
                                    'div',
                                    { className: et },
                                    s().createElement('img', { src: f, alt: 'survey' }),
                                ),
                                s().createElement('div', { className: tt }, r),
                                s().createElement('div', { className: at }, n),
                                s().createElement(
                                    'div',
                                    { className: rt },
                                    s().createElement(
                                        'div',
                                        { className: nt },
                                        s().createElement(
                                            ke,
                                            { mixClass: it, size: Re.medium, type: 'primary', onClick: m },
                                            i,
                                        ),
                                        s().createElement(
                                            ke,
                                            { mixClass: it, size: Re.medium, type: 'secondary', onClick: g },
                                            o,
                                        ),
                                    ),
                                    s().createElement('div', { className: ot }, lt.info()),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    Me().render(
                        s().createElement(Ve, null, s().createElement(ye, null, s().createElement(ut, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        a = {};
    function r(e) {
        var n = a[e];
        if (void 0 !== n) return n.exports;
        var i = (a[e] = { exports: {} });
        return t[e](i, i.exports, r), i.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, a, n, i) => {
            if (!a) {
                var o = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [a, n, i] = e[c], l = !0, s = 0; s < a.length; s++)
                        (!1 & i || o >= i) && Object.keys(r.O).every((e) => r.O[e](a[s]))
                            ? a.splice(s--, 1)
                            : ((l = !1), i < o && (o = i));
                    if (l) {
                        e.splice(c--, 1);
                        var u = n();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [a, n, i];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, { a: t }), t;
        }),
        (r.d = (e, t) => {
            for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (() => {
            var e = { 914: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var n,
                        i,
                        [o, l, s] = a,
                        u = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (n in l) r.o(l, n) && (r.m[n] = l[n]);
                        if (s) var c = s(r);
                    }
                    for (t && t(a); u < o.length; u++) (i = o[u]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(c);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var n = r.O(void 0, [773], () => r(877));
    n = r.O(n);
})();
