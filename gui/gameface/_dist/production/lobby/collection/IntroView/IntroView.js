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
            273: (e, t, r) => {
                'use strict';
                var a = {};
                r.r(a),
                    r.d(a, { mouse: () => x, off: () => f, on: () => h, onResize: () => m, onScaleUpdated: () => g });
                var n = {};
                r.r(n),
                    r.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => w,
                        getSize: () => b,
                        graphicsQuality: () => p,
                        playSound: () => E,
                        setRTPC: () => _,
                    });
                var i = {};
                r.r(i), r.d(i, { getBgUrl: () => M, getTextureUrl: () => H });
                var l = {};
                r.r(l),
                    r.d(l, {
                        addModelObserver: () => k,
                        addPreloadTexture: () => B,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => re,
                        events: () => T,
                        extraSize: () => ae,
                        forceTriggerMouseMove: () => ee,
                        freezeTextureBeforeResize: () => V,
                        getBrowserTexturePath: () => j,
                        getDisplayStatus: () => te,
                        getScale: () => X,
                        getSize: () => U,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => Z,
                        isFocused: () => K,
                        pxToRem: () => q,
                        remToPx: () => Q,
                        resize: () => N,
                        sendEvent: () => D,
                        setAnimateWindow: () => J,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => $,
                        setSidePaddingsRem: () => z,
                        whenTutorialReady: () => ne,
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
                    f = (e, t) => engine.off(e, t),
                    v = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') };
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
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function E(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function _(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const p = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    S = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    L = Object.keys(S).reduce((e, t) => ((e[t] = () => E(S[t])), e), {}),
                    y = { play: Object.assign({}, L, { sound: E }), setRTPC: _ };
                function H(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function M(e, t, r) {
                    return `url(${H(e, t, r)})`;
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
                    W = ['args'];
                const C = 2,
                    I = 16,
                    O = 32,
                    G = 64,
                    P = (e, t) => {
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
                                })(t, W);
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
                    D = {
                        close(e) {
                            P('popover' === e ? C : O);
                        },
                        minimize() {
                            P(G);
                        },
                        move(e) {
                            P(I, { isMouseEvent: !0, on: e });
                        },
                    };
                function B(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function j(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function k(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function z(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function U(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function N(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function F(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Q(t.x), y: Q(t.y) };
                }
                function V() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function X() {
                    return viewEnv.getScale();
                }
                function q(e) {
                    return viewEnv.pxToRem(e);
                }
                function Q(e) {
                    return viewEnv.remToPx(e);
                }
                function J(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function K() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function Z() {
                    return viewEnv.isEventHandled();
                }
                function ee() {
                    viewEnv.forceTriggerMouseMove();
                }
                function te() {
                    return viewEnv.getShowingStatus();
                }
                const re = Object.keys(A).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === A[t]), e), {}),
                    ae = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ne = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : T.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ie = { view: l, client: n, sound: y };
                const le = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var oe;
                function se(e, t, r) {
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
                })(oe || (oe = {}));
                const ue = ie.client.getSize('rem'),
                    de = ue.width,
                    ce = ue.height,
                    me = Object.assign({ width: de, height: ce }, se(de, ce, le)),
                    ge = (0, o.createContext)(me),
                    he = ['children'];
                const fe = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, he);
                    const a = (0, o.useContext)(ge),
                        n = a.extraLarge,
                        i = a.large,
                        l = a.medium,
                        s = a.small,
                        d = a.extraSmall,
                        c = a.extraLargeWidth,
                        m = a.largeWidth,
                        g = a.mediumWidth,
                        h = a.smallWidth,
                        f = a.extraSmallWidth,
                        v = a.extraLargeHeight,
                        x = a.largeHeight,
                        E = a.mediumHeight,
                        _ = a.smallHeight,
                        b = a.extraSmallHeight,
                        w = { extraLarge: v, large: x, medium: E, small: _, extraSmall: b };
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
                        if (r.extraSmallWidth && f) return u(t, r, w);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && v) return t;
                            if (r.largeHeight && x) return t;
                            if (r.mediumHeight && E) return t;
                            if (r.smallHeight && _) return t;
                            if (r.extraSmallHeight && b) return t;
                        }
                    }
                    return null;
                };
                fe.defaultProps = {
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
                (0, o.memo)(fe);
                const ve = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    xe = ({ children: e }) => {
                        const t = (0, o.useContext)(ge),
                            r = (0, o.useState)(t),
                            a = r[0],
                            n = r[1],
                            i = (0, o.useCallback)((e, t) => {
                                const r = ie.view.pxToRem(e),
                                    a = ie.view.pxToRem(t);
                                n(Object.assign({ width: r, height: a }, se(r, a, le)));
                            }, []),
                            l = (0, o.useCallback)(() => {
                                const e = ie.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        ve(() => {
                            ie.client.events.on('clientResized', i), ie.client.events.on('self.onScaleUpdated', l);
                        }),
                            (0, o.useEffect)(
                                () => () => {
                                    ie.client.events.off('clientResized', i),
                                        ie.client.events.off('self.onScaleUpdated', l);
                                },
                                [i, l],
                            );
                        const u = (0, o.useMemo)(() => Object.assign({}, a), [a]);
                        return s().createElement(ge.Provider, { value: u }, e);
                    };
                var Ee = r(483),
                    _e = r.n(Ee),
                    be = r(926),
                    we = r.n(be);
                let pe, Se, Le;
                !(function (e) {
                    (e[(e.ExtraSmall = le.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = le.small.width)] = 'Small'),
                        (e[(e.Medium = le.medium.width)] = 'Medium'),
                        (e[(e.Large = le.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = le.extraLarge.width)] = 'ExtraLarge');
                })(pe || (pe = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = le.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = le.small.width)] = 'Small'),
                            (e[(e.Medium = le.medium.width)] = 'Medium'),
                            (e[(e.Large = le.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = le.extraLarge.width)] = 'ExtraLarge');
                    })(Se || (Se = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = le.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = le.small.height)] = 'Small'),
                            (e[(e.Medium = le.medium.height)] = 'Medium'),
                            (e[(e.Large = le.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = le.extraLarge.height)] = 'ExtraLarge');
                    })(Le || (Le = {}));
                const ye = () => {
                        const e = (0, o.useContext)(ge),
                            t = e.width,
                            r = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return pe.ExtraLarge;
                                    case e.large:
                                        return pe.Large;
                                    case e.medium:
                                        return pe.Medium;
                                    case e.small:
                                        return pe.Small;
                                    case e.extraSmall:
                                        return pe.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), pe.ExtraSmall;
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
                                        return console.error('Unreachable media context resolution'), Se.ExtraSmall;
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
                                        return console.error('Unreachable media context resolution'), Le.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: i, remScreenWidth: t, remScreenHeight: r };
                    },
                    He = ['children', 'className'];
                function Me() {
                    return (
                        (Me =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        Me.apply(this, arguments)
                    );
                }
                const Ae = {
                        [Se.ExtraSmall]: '',
                        [Se.Small]: we().SMALL_WIDTH,
                        [Se.Medium]: `${we().SMALL_WIDTH} ${we().MEDIUM_WIDTH}`,
                        [Se.Large]: `${we().SMALL_WIDTH} ${we().MEDIUM_WIDTH} ${we().LARGE_WIDTH}`,
                        [Se.ExtraLarge]: `${we().SMALL_WIDTH} ${we().MEDIUM_WIDTH} ${we().LARGE_WIDTH} ${we().EXTRA_LARGE_WIDTH}`,
                    },
                    Te = {
                        [Le.ExtraSmall]: '',
                        [Le.Small]: we().SMALL_HEIGHT,
                        [Le.Medium]: `${we().SMALL_HEIGHT} ${we().MEDIUM_HEIGHT}`,
                        [Le.Large]: `${we().SMALL_HEIGHT} ${we().MEDIUM_HEIGHT} ${we().LARGE_HEIGHT}`,
                        [Le.ExtraLarge]: `${we().SMALL_HEIGHT} ${we().MEDIUM_HEIGHT} ${we().LARGE_HEIGHT} ${we().EXTRA_LARGE_HEIGHT}`,
                    },
                    Re = {
                        [pe.ExtraSmall]: '',
                        [pe.Small]: we().SMALL,
                        [pe.Medium]: `${we().SMALL} ${we().MEDIUM}`,
                        [pe.Large]: `${we().SMALL} ${we().MEDIUM} ${we().LARGE}`,
                        [pe.ExtraLarge]: `${we().SMALL} ${we().MEDIUM} ${we().LARGE} ${we().EXTRA_LARGE}`,
                    },
                    We = (e) => {
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
                            })(e, He);
                        const n = ye(),
                            i = n.mediaWidth,
                            l = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', Me({ className: _e()(r, Ae[i], Te[l], Re[o]) }, a), t);
                    },
                    Ce = ['children'];
                const Ie = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, Ce);
                    return s().createElement(xe, null, s().createElement(We, r, t));
                };
                var Oe = r(986),
                    Ge = r.n(Oe);
                function Pe(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const De = {
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
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
                let Be, $e;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Be || (Be = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })($e || ($e = {}));
                const je = ({
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
                    onClick: f,
                }) => {
                    const v = (0, o.useRef)(null),
                        x = (0, o.useState)(r),
                        E = x[0],
                        _ = x[1],
                        b = (0, o.useState)(!1),
                        w = b[0],
                        p = b[1];
                    return (
                        (0, o.useEffect)(() => {
                            function e(e) {
                                E && null !== v.current && !v.current.contains(e.target) && _(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [E]),
                        (0, o.useEffect)(() => {
                            _(r);
                        }, [r]),
                        s().createElement(
                            'div',
                            {
                                ref: v,
                                className: _e()(
                                    De.base,
                                    De[`base__${a}`],
                                    n && De.base__disabled,
                                    t && De[`base__${t}`],
                                    E && De.base__focus,
                                    w && De.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    n || (null !== l && Pe(l), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    c && c(e);
                                },
                                onMouseUp: function (e) {
                                    n || (g && g(e), p(!1));
                                },
                                onMouseDown: function (e) {
                                    n ||
                                        (null !== u && Pe(u),
                                        m && m(e),
                                        r && (n || (v.current && (v.current.focus(), _(!0)))),
                                        p(!0));
                                },
                                onMouseLeave: function (e) {
                                    n || (h && h(e), p(!1));
                                },
                                onClick: function (e) {
                                    n || (f && f(e));
                                },
                            },
                            a !== Be.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: De.back }),
                                    s().createElement('span', { className: De.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: _e()(De.state, De.state__default) },
                                s().createElement('span', { className: De.stateDisabled }),
                                s().createElement('span', { className: De.stateHighlightHover }),
                                s().createElement('span', { className: De.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: De.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                je.defaultProps = { type: Be.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ke = je;
                var ze = r(515);
                function Ue() {
                    return !1;
                }
                console.log;
                var Ne = r(174);
                function Fe(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ve(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return Ve(e, t);
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
                function Ve(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const Xe = (e) => (0 === e ? window : window.subViews.get(e));
                const qe = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: n, children: i, mocks: l }) {
                                const u = (0, o.useRef)([]),
                                    d = (r, a, n) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = Xe,
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
                                                            s = ie.view.addModelObserver(o, t, !0);
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
                                                        for (var e, r = Fe(n.keys()); !(e = r()).done; ) i(e.value, t);
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
                                                            n = Ne.LO.box(a, { equals: Ue });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Ne.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = Ne.LO.box(a, { equals: Ue });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Ne.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = s(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = Ne.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, Ne.aD)((t) => {
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
                                                                    (e, [t, r]) => ((e[r] = Ne.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, Ne.aD)((e) => {
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
                                    f = (0, o.useState)(() => d(a, n, l)),
                                    v = f[0],
                                    x = f[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        c.current ? x(d(g, n, l)) : (c.current = !0);
                                    }, [l, g, n]),
                                    (0, o.useEffect)(() => {
                                        h(a);
                                    }, [a]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            v.externalModel.dispose(), u.current.forEach((e) => e());
                                        },
                                        [v],
                                    ),
                                    s().createElement(r.Provider, { value: v }, i)
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
                    Qe = qe[0],
                    Je = qe[1],
                    Ke = {
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
                    Ye = R.strings.collections.intro,
                    Ze = (0, ze.Pi)(() => {
                        const e = Je().controls;
                        return s().createElement(
                            'div',
                            { className: Ke.base },
                            s().createElement('div', { className: Ke.animationBg }),
                            s().createElement(
                                'div',
                                { className: Ke.animationMain },
                                s().createElement('div', { className: Ke.header }, Ye.header.text()),
                                s().createElement(
                                    'div',
                                    { className: Ke.content },
                                    s().createElement('div', { className: Ke.collectionsArt }),
                                    s().createElement(
                                        'div',
                                        { className: Ke.description },
                                        Ye.content.description.text(),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Ke.footer },
                                    s().createElement(
                                        ke,
                                        {
                                            type: Be.primary,
                                            size: $e.medium,
                                            mixClass: Ke.confirm,
                                            soundHover: 'highlight',
                                            soundClick: 'play',
                                            onClick: e.close,
                                        },
                                        Ye.buttonClose.text(),
                                    ),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    Ge().render(
                        s().createElement(Qe, null, s().createElement(Ie, null, s().createElement(Ze, null))),
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
    var n = a.O(void 0, [314], () => a(273));
    n = a.O(n);
})();
